// === Module 17583: DefaultDMSettingsExperiment ===

// Module 17583 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5705 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6825 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.needsAgeVerification() && isFeatureAgeGatedResult;
}