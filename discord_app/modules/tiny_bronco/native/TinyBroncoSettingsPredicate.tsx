// === Module 14734: TinyBroncoSettingsPredicate ===

// Module 14734 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14735 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14736 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};