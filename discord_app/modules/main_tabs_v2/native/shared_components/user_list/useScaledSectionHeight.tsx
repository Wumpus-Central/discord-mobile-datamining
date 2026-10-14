// === Module 10237: useScaledSectionHeight ===

// Module 10237 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 5391 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10234 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useScaledSectionHeight() {
  return React2 + Math.max(Math.min(useFontScale.useFontScale(), 2) * React3 - React3, 0);
}) : (function useScaledSectionHeight() {
  return React2 + Math.max(Math.min(useFontScale.useFontScale(), 2) * React3 - React3, 0);
});