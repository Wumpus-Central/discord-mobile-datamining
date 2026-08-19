// === Module 15021: shouldAgeVerifyForDMDefaultOff ===

// Module 15021 (shouldAgeVerifyForDMDefaultOff)
import obj132 from "obj132" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4072 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4992 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5039 */;

const result = obj132.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};