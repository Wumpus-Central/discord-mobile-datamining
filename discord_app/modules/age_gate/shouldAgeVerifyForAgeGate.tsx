// === Module 6824: shouldAgeVerifyForAgeGate ===

// Module 6824 (shouldAgeVerifyForAgeGate)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5705 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6825 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/shouldAgeVerifyForAgeGate.tsx");

export function shouldAgeVerifyForAgeGate() {
  const needsAgeVerificationResult = AgeVerificationUtils.needsAgeVerification();
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && needsAgeVerificationResult;
}
export function useShouldAgeVerifyForAgeGate() {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useNeedsAgeVerification();
  }
  return isFeatureAgeGated;
}