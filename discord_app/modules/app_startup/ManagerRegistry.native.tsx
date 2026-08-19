// === Module 16513: ? ===

// Module 16513
import obj132 from "obj132" /* 2 */;
import populateMap from "populateMap" /* 17110 */;

const obj = {
  actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "AGE_GATE_MODAL_OPEN", "AGE_GATE_MODAL_CLOSE", "GUILD_UPDATE"],
  inlineRequire() {
    return require(16517) /* handlePostConnectionOpen */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
populateMap.initialize(obj);
const result = obj132.fileFinishedImporting("modules/app_startup/ManagerRegistry.native.tsx");

export default obj;