// discord_app/modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx
import react from "../../../../../_runtime/00019_react.js";
import ReanimatedHelperTypes_mod from "../../../reanimated/ReanimatedHelperTypes.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let ReanimatedHelperTypes;
let size = {
  id: "enabled",
  mode: "toCharArray$esjava$1",
  width: false,
  height: null,
  containerHeight: "slide_from_bottom",
  showSecondaryPIP: 2392,
  scale: ReanimatedHelperTypes.createFakeSharedValue(1),
};
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(size);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
size = size_mod;
const result1 = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = () => react.useContext(context);
