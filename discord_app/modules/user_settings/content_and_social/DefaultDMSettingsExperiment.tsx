// === Module 15706: DefaultDMSettingsExperiment ===

// Module 15706 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5078 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5932 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5933 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};