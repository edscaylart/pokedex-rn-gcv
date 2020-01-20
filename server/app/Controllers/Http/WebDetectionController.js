"use strict";

const Helpers = use("Helpers");
const Env = use("Env");

const vision = require("@google-cloud/vision");
const Pokedex = require("pokedex-promise-v2");

class WebDetectionController {
  async store({ request, response }) {
    const upload = request.file("file", { size: "2mb" });
    const fileName = `${Date.now()}.${upload.subtype}`;
    await upload.move(Helpers.tmpPath("uploads"), {
      name: fileName
    });
    if (!upload.moved()) {
      throw upload.error();
    }

    console.log(`Receive photo: ${fileName}`);

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
      credentials: {
        client_email: Env.get("GCV_CREDENTIAL_CLIENT_EMAIL"),
        private_key: Env.get("GCV_CREDENTIAL_PRIVATE_KEY")
      },
      projectId: Env.get("GCV_CREDENTIAL_PROJECT_ID")
    });

    const gcrequest = {
      image: {
        source: {
          filename: Helpers.tmpPath(`uploads/${fileName}`)
        }
      },
      imageContext: {
        webDetectionParams: {
          includeGeoResults: true
        }
      }
    };

    console.log(`Analying image...`);
    // Detect similar images on the web to a local file
    const [result] = await client.webDetection(gcrequest);
    const webDetection = result.webDetection;

    let pokeName;
    webDetection.webEntities.forEach(entity => {
      if (!entity.description.includes("Pokémon") && !pokeName) {
        pokeName = entity.description.toLocaleLowerCase();
      }
      // console.log(`Score: ${entity.score}`);
      // console.log(`Description: ${entity.description}`);
    });

    try {
      const P = new Pokedex();
      const res = await P.getPokemonByName(pokeName);

      const { id, name, types } = res;
      return { id, name, types };
    } catch (err) {
      return response.json("Pokemon não encontrado");
    }
  }
}

module.exports = WebDetectionController;
