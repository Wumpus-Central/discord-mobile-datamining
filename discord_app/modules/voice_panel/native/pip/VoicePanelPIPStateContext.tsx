// === Module 16883: VoicePanelPIPStateContext ===

// Module 16883 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "dispatch", mode: "isArray", width: false, height: null, containerHeight: 0, showSecondaryPIP: null, scale: null };
const ReanimatedHelperTypes = fn(6490);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};