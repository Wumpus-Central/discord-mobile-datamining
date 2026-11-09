// === Module 19575: VoicePanelPIPStateContext ===

// Module 19575 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "disabled", mode: "isArray", width: false, height: null, containerHeight: 0, showSecondaryPIP: null, scale: null };
const ReanimatedHelperTypes = fn(7305);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return noop.useContext(context);
}