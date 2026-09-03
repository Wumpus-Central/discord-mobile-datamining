// === Module 12240: useIsMessageRequestRestrictedViewer ===

// Module 12240 (useIsMessageRequestRestrictedViewer)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4172 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 4179 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4734 */;

const result = set.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = useAgeVerificationRunner;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = isFeatureAgeGated.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = isFeatureAgeGated;
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