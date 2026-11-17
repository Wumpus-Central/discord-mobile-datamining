// === Module 13952: useIsMessageRequestRestrictedViewer ===

// Module 13952 (useIsMessageRequestRestrictedViewer)
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5997 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6815 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  let isSettingTeenByDefault = !isVerifiedAdult;
  if (!isVerifiedAdult) {
    isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isSettingTeenByDefault;
}