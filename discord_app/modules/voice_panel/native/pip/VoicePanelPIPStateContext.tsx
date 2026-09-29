// === Module 17103: VoicePanelPIPStateContext ===

// Module 17103 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "dispatch", mode: "isArray", width: false, height: null, containerHeight: "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}", showSecondaryPIP: true, scale: null };
const ReanimatedHelperTypes = fn(6661);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};