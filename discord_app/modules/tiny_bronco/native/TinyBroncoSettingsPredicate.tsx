// discord_app/modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx
import set from "../../../../_runtime/00002_set.js";
import TINY_BRONCO_BLOG_URL from "../TinyBroncoConstants.tsx";
import useIsTinyBroncoEnabled from "../TinyBroncoExperiment.tsx";

let closure_2 = TINY_BRONCO_BLOG_URL.TINY_BRONCO_SETTINGS_LOCATION;
const result = set.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return useIsTinyBroncoEnabled.useIsTinyBroncoEnabled(closure_2);
};
