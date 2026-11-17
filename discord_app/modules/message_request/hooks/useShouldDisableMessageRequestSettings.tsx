// === Module 18617: useShouldDisableMessageRequestSettings ===

// Module 18617 (useShouldDisableMessageRequestSettings)
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5997 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6815 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
}