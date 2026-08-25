// === Module 15115: shouldAgeVerifyForDMDefaultOff ===

// Module 15115 (shouldAgeVerifyForDMDefaultOff)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4076 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4621 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5248 */;

const result = set.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated;
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner;
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};