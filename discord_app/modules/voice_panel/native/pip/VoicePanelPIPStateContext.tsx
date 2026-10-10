// === Module 17741: VoicePanelPIPStateContext ===

// Module 17741 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "end", mode: "toCharArray$esjava$1", width: false, height: null, containerHeight: "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}", showSecondaryPIP: true, scale: null };
const ReanimatedHelperTypes = fn(6762);
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