// === Module 14842: useStaffOrDeveloperSettingPredicate ===

// Module 14842 (useStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 504 */;
import closure_2 from "init" /* 7720 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};