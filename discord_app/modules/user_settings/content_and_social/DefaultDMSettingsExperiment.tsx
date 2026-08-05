// discord_app/modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require("../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require("../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.isFeatureAgeGated(require("../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx") /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
  return require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};