// === Module 14842: useIsStaffOrDeveloperSettingPredicate ===

// Module 14842 (useIsStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 504 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7720 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [DeveloperExperimentStore];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};