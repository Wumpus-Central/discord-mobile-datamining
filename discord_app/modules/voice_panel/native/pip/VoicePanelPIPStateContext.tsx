// === Module 17174: VoicePanelPIPStateContext ===

// Module 17174 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ id: "sa", mode: "isArray", width: false, height: "detectTypeByAdditionalCheck", containerHeight: null, showSecondaryPIP: "\u{1F7E5}" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};