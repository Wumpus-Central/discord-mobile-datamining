// discord_app/modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx
import TinyBroncoConstants from "../TinyBroncoConstants.tsx";
import TinyBroncoExperiment from "../TinyBroncoExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
