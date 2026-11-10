// === Module 17091: useIsStaffOrDeveloperSettingPredicate ===

// Module 17091 (useIsStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 504 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7945 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export function useStaffOrDeveloperSettingPredicate() {
  items = [DeveloperExperimentStore];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
}