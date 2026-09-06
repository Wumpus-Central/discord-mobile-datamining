// === Module 15879: shouldAgeVerifyForDMDefaultOff ===

// Module 15879 (shouldAgeVerifyForDMDefaultOff)
import set from "set" /* 2 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4773 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 5423 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5424 */;

const result = set.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated;
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner;
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};