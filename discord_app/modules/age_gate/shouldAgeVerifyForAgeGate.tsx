// === Module 6860: shouldAgeVerifyForAgeGate ===

// Module 6860 (shouldAgeVerifyForAgeGate)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5827 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6861 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6866 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/age_gate/shouldAgeVerifyForAgeGate.tsx");

export function shouldAgeVerifyForAgeGate() {
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
}
export function useShouldAgeVerifyForAgeGate() {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}