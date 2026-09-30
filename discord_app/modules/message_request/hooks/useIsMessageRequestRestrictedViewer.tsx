// === Module 12138: useIsMessageRequestRestrictedViewer ===

// Module 12138 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5078 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5932 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  let enabled = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    enabled = isSettingTeenByDefault;
  }
  if (enabled) {
    enabled = obj3.useConfig(obj4).enabled;
  }
  return enabled;
};