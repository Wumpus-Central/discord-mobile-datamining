// === Module 14415: useStaffOrDeveloperSettingPredicate ===

// Module 14415 (useStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 589 */;
import closure_2 from "init" /* 7433 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};