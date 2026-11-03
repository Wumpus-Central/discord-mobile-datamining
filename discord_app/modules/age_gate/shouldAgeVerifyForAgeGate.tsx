// === Module 6845: shouldAgeVerifyForAgeGate ===

// Module 6845 (shouldAgeVerifyForAgeGate)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5813 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6846 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6851 */;
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