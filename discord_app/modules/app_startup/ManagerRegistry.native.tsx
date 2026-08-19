// discord_app/modules/app_startup/ManagerRegistry.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import populateMap from "ManagerRegistryShared.tsx";
import { handlePostConnectionOpen } from "../age_gate/native/AgeGateManager.tsx";

const obj = {
  actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "AGE_GATE_MODAL_OPEN", "AGE_GATE_MODAL_CLOSE", "GUILD_UPDATE"],
  inlineRequire() {
    return handlePostConnectionOpen /* handlePostConnectionOpen */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
populateMap.initialize(obj);
const result = obj132.fileFinishedImporting("modules/app_startup/ManagerRegistry.native.tsx");

export default obj;