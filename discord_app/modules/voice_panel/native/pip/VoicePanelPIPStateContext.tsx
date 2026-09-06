// === Module 17092: VoicePanelPIPStateContext ===

// Module 17092 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ id: "sa", mode: "isArray", width: false, height: "comp_0", containerHeight: "DIS_Nitro_Gifcard_004", showSecondaryPIP: 24 });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};