// === Module 17241: VoicePanelPIPStateContext ===

// Module 17241 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ id: "sa", mode: "isArray", width: false, height: "PC_SEAT_1", containerHeight: null, showSecondaryPIP: null });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};