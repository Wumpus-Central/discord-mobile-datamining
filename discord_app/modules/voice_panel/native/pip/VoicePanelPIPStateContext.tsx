// === Module 16437: context ===

// Module 16437 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: "INVALID_MESSAGE_SEND_USER", containerHeight: null, showSecondaryPIP: "\u{1F9BB}\u{1F3FC}" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};