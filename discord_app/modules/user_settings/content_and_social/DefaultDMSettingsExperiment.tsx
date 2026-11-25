// === Module 17526: DefaultDMSettingsExperiment ===

// Module 17526 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5674 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6794 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.needsAgeVerification() && isFeatureAgeGatedResult;
}