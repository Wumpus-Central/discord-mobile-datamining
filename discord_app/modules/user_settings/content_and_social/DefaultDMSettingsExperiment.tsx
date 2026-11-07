// === Module 18242: DefaultDMSettingsExperiment ===

// Module 18242 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5817 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6781 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6786 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.needsAgeVerification() && isFeatureAgeGatedResult;
}