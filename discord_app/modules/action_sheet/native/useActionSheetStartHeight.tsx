// discord_app/modules/action_sheet/native/useActionSheetStartHeight.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import ActionSheetConstants from "ActionSheetConstants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default () => useWindowDimensionsDefault().height * closure_2;
