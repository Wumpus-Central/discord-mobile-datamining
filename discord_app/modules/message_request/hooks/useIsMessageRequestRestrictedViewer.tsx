// discord_app/modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx
import { SettingsDefaultFeature } from "../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import { useAgeVerificationRunner } from "../../age_assurance/AgeVerificationUtils.tsx";
import { isFeatureAgeGated } from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
const result = require("SettingsDefaultFeature").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = useAgeVerificationRunner /* useAgeVerificationRunner */;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = isFeatureAgeGated /* isFeatureAgeGated */.useIsSettingTeenByDefault(SettingsDefaultFeature /* SettingsDefaultFeature */.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = isFeatureAgeGated /* isFeatureAgeGated */;
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