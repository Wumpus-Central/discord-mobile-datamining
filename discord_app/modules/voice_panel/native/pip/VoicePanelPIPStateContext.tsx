// === Module 11995: VoicePanelPIPStateContext ===

// Module 11995 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "disabled", mode: "isArray", width: false, height: null, containerHeight: "yes", showSecondaryPIP: null, scale: "x-sm" };
const ReanimatedHelperTypes = fn(7848);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return noop.useContext(context);
}