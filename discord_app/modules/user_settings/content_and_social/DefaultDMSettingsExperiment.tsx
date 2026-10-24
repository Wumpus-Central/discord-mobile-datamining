// === Module 17279: DefaultDMSettingsExperiment ===

// Module 17279 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5644 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6654 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};