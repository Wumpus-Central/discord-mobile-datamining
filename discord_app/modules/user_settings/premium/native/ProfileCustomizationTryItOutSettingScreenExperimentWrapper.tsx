// discord_app/modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreenExperimentWrapper.tsx
import UserProfilePremiumTryItOutMobileRefreshExperiment from "../../../user_profile/experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreenExperimentWrapper.tsx",
);

export default function ProfileCustomizationTryItOutSettingScreenExperimentWrapper() {
  return jsx(
    importDefault(
      UserProfilePremiumTryItOutMobileRefreshExperiment.useIsTryItOutMobileRefreshEnabled(
        "ProfileCustomizationTryItOutSettingScreenExperimentWrapper",
      )
        ? 15630
        : 15633,
    ),
    {},
  );
}
