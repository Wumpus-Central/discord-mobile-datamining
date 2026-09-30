// === Module 15705: useShouldDisableMessageRequestSettings ===

// Module 15705 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5078 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
};