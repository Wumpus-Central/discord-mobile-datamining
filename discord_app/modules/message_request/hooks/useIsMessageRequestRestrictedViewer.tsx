// discord_app/modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(
  ChatInputGuardMessageRequest,
) {
  let obj = AgeVerificationUtils;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(
    SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS,
  );
  obj = { location: ChatInputGuardMessageRequest };
  let enabled = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    enabled = isSettingTeenByDefault;
  }
  if (enabled) {
    enabled = obj3.useConfig(obj).enabled;
  }
  return enabled;
};
