// === Module 16586: context ===

// Module 16586 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: "earth_americas", containerHeight: "earth_africa", showSecondaryPIP: "earth_asia" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};