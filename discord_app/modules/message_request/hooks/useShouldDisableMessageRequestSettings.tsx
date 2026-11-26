// === Module 17582: useShouldDisableMessageRequestSettings ===

// Module 17582 (useShouldDisableMessageRequestSettings)
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5713 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6825 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
}