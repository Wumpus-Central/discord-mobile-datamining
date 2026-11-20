// === Module 17250: useShouldDisableMessageRequestSettings ===

// Module 17250 (useShouldDisableMessageRequestSettings)
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5464 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6292 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
}