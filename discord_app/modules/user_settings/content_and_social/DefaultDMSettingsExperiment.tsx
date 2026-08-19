// discord_app/modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import isFeatureAgeGated from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import useAgeVerificationRunner from "../../age_assurance/AgeVerificationUtils.tsx";
import AgeGatedFeature from "../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";

const result = obj132.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};