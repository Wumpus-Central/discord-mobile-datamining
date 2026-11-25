// === Module 13372: useIsMessageRequestRestrictedViewer ===

// Module 13372 (useIsMessageRequestRestrictedViewer)
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5682 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6794 */;
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