// === Module 14688: shouldAgeVerifyForDMDefaultOff ===

// Module 14688 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3872) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3872) /* isFeatureAgeGated */.isFeatureAgeGated(require(5017) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4409) /* useAgeVerificationRunner */;
  return require(4409) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};