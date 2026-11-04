// === Module 19480: VoicePanelPIPStateContext ===

// Module 19480 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "diversity", mode: "isArray", width: false, height: null, containerHeight: "box-none", showSecondaryPIP: null, scale: null };
const ReanimatedHelperTypes = fn(7378);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return noop.useContext(context);
}