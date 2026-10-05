// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx
import useFontScale from "../../../../screen/native/useFontScale.tsx";
import UsersFastListConstants from "UsersFastListConstants.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c2;
let c3;
({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useFontScale;
      return React2 + Math.max(Math.min(obj.useFontScale(), 2) * _false - _false, 0);
    }
  : () => {
      const obj = useFontScale;
      return React2 + Math.max(Math.min(obj.useFontScale(), 2) * _false - _false, 0);
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx",
);

export default tmp3;
