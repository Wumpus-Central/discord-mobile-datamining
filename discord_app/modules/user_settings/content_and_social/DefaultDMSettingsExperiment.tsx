const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3934) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3934) /* isFeatureAgeGated */.isFeatureAgeGated(require(5079) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4471) /* useAgeVerificationRunner */;
  return require(4471) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};