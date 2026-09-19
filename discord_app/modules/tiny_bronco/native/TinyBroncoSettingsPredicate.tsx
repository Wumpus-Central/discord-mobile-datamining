// === Module 14951: TinyBroncoSettingsPredicate ===

// Module 14951 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14952 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14953 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};