// discord_app/modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

let size = {
  id: "emoji",
  mode: "toCharArray$esjava$1",
  width: false,
  height: null,
  containerHeight: "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
  showSecondaryPIP: true,
  scale: null,
};
const ReanimatedHelperTypes = fn(6571);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = () => noop.useContext(context);
