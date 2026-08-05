// discord_app/modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx
const result = require("SettingsDefaultFeature").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = require("../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.useIsSettingTeenByDefault(require("../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx") /* SettingsDefaultFeature */.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = require("../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */;
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