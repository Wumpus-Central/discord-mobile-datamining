// === Module 6674: useSettingNavigationRoute ===

// Module 6674 (useSettingNavigationRoute)
import Link from "Link" /* 1503 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/user_settings/core/native/useSettingNavigationRoute.tsx");

export const useSettingNavigationRoute = function useSettingNavigationRoute() {
  return Link.useRoute();
};