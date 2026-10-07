// === Module 17236: VoicePanelPIPStateContext ===

// Module 17236 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "enabled", mode: "toCharArray$esjava$1", width: false, height: null, containerHeight: "slide_from_bottom", showSecondaryPIP: 2392, scale: 2393 };
const ReanimatedHelperTypes = fn(6578);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = () => noop.useContext(context);