// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreenExperimentWrapper.tsx
import UserProfileMobileEditingRefreshExperiment from "../../../user_profile/experiments/UserProfileMobileEditingRefreshExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/profiles/native/ProfileCustomizationSettingScreenExperimentWrapper.tsx",
);

export default function ProfileCustomizationSettingScreenExperimentWrapper() {
  return jsx(
    importDefault(
      UserProfileMobileEditingRefreshExperiment.useIsUserProfileEditingRefreshEnabled(
        "ProfileCustomizationSettingScreenExperimentWrapper",
      )
        ? 16030
        : 16074,
    ),
    {},
  );
}
