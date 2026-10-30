// discord_app/modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx
import SettingsDefaultFeature from "../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(
      SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS,
    );
  }
  return isVerifiedTeen;
}
