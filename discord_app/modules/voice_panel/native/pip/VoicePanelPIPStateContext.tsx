// === Module 17669: VoicePanelPIPStateContext ===

// Module 17669 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "end", mode: "toCharArray$esjava$1", width: false, height: null, containerHeight: 0, showSecondaryPIP: null, scale: null };
const ReanimatedHelperTypes = fn(6761);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};