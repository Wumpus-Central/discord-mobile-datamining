// === Module 14199: useStaffOrDeveloperSettingPredicate ===

// Module 14199 (useStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 589 */;
import init from "init" /* 7472 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};