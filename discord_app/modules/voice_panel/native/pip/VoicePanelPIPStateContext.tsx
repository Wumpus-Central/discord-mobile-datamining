// discord_app/modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: "validate", containerHeight: null, showSecondaryPIP: "\u{1F6A3}\u200D\u2640\uFE0F" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};