// discord_app/modules/age_gate/shouldAgeVerifyForAgeGate.tsx
import AgeVerificationUtils from "../age_assurance/AgeVerificationUtils.tsx";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/age_gate/shouldAgeVerifyForAgeGate.tsx");

export const shouldAgeVerifyForAgeGate = function shouldAgeVerifyForAgeGate() {
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
};
export const useShouldAgeVerifyForAgeGate = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldAgeVerifyForAgeGate() {
      let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(
        AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES,
      );
      if (isFeatureAgeGated) {
        isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
      }
      return isFeatureAgeGated;
    }
  : function useShouldAgeVerifyForAgeGate() {
      let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(
        AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES,
      );
      if (isFeatureAgeGated) {
        isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
      }
      return isFeatureAgeGated;
    };
