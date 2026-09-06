// discord_app/modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";

let c0 = importAllResult;
const context = importAllResult.createContext({
  id: "sa",
  mode: "isArray",
  width: false,
  height: "comp_0",
  containerHeight: "DIS_Nitro_Gifcard_004",
  showSecondaryPIP: 24,
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
