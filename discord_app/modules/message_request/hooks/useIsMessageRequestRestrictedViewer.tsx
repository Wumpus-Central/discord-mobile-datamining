// === Module 12083: useIsMessageRequestRestrictedViewer ===

// Module 12083 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6802 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
  let isSettingTeenByDefault = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isSettingTeenByDefault;
}) : (() => {
  const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
  let isSettingTeenByDefault = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isSettingTeenByDefault;
});