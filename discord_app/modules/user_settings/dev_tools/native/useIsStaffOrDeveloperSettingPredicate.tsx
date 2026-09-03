// === Module 14686: useStaffOrDeveloperSettingPredicate ===

// Module 14686 (useStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 586 */;
import closure_2 from "init" /* 7476 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};