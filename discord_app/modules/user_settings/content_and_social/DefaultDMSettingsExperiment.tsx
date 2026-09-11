// === Module 15946: DefaultDMSettingsExperiment ===

// Module 15946 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4819 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5474 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5475 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};