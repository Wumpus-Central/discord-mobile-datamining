// === Module 16028: ProfileCustomizationSettingScreenExperimentWrapper ===

// Module 16028 (ProfileCustomizationSettingScreenExperimentWrapper)
import UserProfileMobileEditingRefreshExperiment from "UserProfileMobileEditingRefreshExperiment" /* 16029 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenExperimentWrapper.tsx");

export default function ProfileCustomizationSettingScreenExperimentWrapper() {
  return jsx(importDefault(UserProfileMobileEditingRefreshExperiment.useIsUserProfileEditingRefreshEnabled("ProfileCustomizationSettingScreenExperimentWrapper") ? 16030 : 16074), {});
};