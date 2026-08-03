// === Module 16004: context ===

// Module 16004 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "description", mode: "isArray", width: false, height: "#C3BFFF", containerHeight: 0, showSecondaryPIP: 100 });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};