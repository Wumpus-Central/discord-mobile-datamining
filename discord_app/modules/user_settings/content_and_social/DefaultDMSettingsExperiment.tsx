// discord_app/modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(
    AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS,
  );
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
