// === Module 17160: VoicePanelPIPStateContext ===

// Module 17160 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "dispatch", mode: "isArray", width: false, height: null, containerHeight: "slide_from_bottom", showSecondaryPIP: 2857, scale: 2858 };
const ReanimatedHelperTypes = fn(6681);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};