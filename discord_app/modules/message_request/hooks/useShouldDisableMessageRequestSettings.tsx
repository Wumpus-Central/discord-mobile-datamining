// === Module 16085: useShouldDisableMessageRequestSettings ===

// Module 16085 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5905 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6984 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
}) : (function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
});