// === Module 12440: useIsMessageRequestRestrictedViewer ===

// Module 12440 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5423 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7299 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = AgeVerificationUtils;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
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