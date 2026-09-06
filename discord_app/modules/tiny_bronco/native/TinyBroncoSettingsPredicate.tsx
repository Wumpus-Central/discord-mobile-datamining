// === Module 14682: useIsTinyBroncoSettingsEnabled ===

// Module 14682 (useIsTinyBroncoSettingsEnabled)
import set from "set" /* 2 */;
import TINY_BRONCO_BLOG_URL from "TINY_BRONCO_BLOG_URL" /* 14683 */;
import useIsTinyBroncoEnabled from "useIsTinyBroncoEnabled" /* 14684 */;

let closure_2 = TINY_BRONCO_BLOG_URL.TINY_BRONCO_SETTINGS_LOCATION;
const result = set.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return useIsTinyBroncoEnabled.useIsTinyBroncoEnabled(closure_2);
};