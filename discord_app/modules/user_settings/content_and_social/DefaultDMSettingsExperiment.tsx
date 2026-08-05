import { AgeGatedFeature } from "../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import { useAgeVerificationRunner } from "../../age_assurance/AgeVerificationUtils.tsx";
import { isFeatureAgeGated } from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
// discord_app/modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = isFeatureAgeGated /* isFeatureAgeGated */.isFeatureAgeGated(AgeGatedFeature /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner /* useAgeVerificationRunner */;
  return useAgeVerificationRunner /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};