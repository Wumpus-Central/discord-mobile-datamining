// === Module 16908: context ===

// Module 16908 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "sa", mode: "isArray", width: false, height: "face_with_spiral_eyes", containerHeight: "Array", showSecondaryPIP: "isArray" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};