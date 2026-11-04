// === Module 16981: useIsStaffOrDeveloperSettingPredicate ===

// Module 16981 (useIsStaffOrDeveloperSettingPredicate)
import initialize from "initialize" /* 504 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8004 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export function useStaffOrDeveloperSettingPredicate() {
  items = [DeveloperExperimentStore];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
}