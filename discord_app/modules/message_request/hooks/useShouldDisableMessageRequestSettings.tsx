// === Module 18162: useShouldDisableMessageRequestSettings ===

// Module 18162 (useShouldDisableMessageRequestSettings)
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5834 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6861 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
}