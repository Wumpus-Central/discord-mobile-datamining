// === Module 19793: VoicePanelPIPStateContext ===

// Module 19793 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "ip", mode: "isArray", width: false, height: null, containerHeight: 0, showSecondaryPIP: false, scale: null };
const ReanimatedHelperTypes = fn(7782);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return noop.useContext(context);
}