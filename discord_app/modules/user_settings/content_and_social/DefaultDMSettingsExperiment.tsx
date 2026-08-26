// === Module 15194: shouldAgeVerifyForDMDefaultOff ===

// Module 15194 (shouldAgeVerifyForDMDefaultOff)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4140 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4685 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5314 */;

const result = set.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated;
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner;
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};