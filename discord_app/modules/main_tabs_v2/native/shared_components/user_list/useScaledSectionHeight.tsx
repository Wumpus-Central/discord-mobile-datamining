// === Module 10614: useScaledSectionHeight ===

// Module 10614 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 5609 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10612 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = useFontScale;
  return React2 + Math.max(Math.min(obj.useFontScale(), 2) * _false - _false, 0);
}) : (() => {
  const obj = useFontScale;
  return React2 + Math.max(Math.min(obj.useFontScale(), 2) * _false - _false, 0);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default tmp3;