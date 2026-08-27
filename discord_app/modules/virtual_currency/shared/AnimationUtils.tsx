// === Module 10768: EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS ===

// Module 10768 (EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS)
import set from "set" /* 2 */;

let obj = { EARN: 0.25, SPEND: 0.3 };
let result = set.fileFinishedImporting("modules/virtual_currency/shared/AnimationUtils.tsx");

export const EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS = 3000;
export const ORB_LOTTIE_COUNTER_ANIMATION_FACTORS = obj;
export const getOrbBalanceCounterAnimationConfigs = function getOrbBalanceCounterAnimationConfigs(diff, targetTime) {
  targetTime = targetTime.targetTime;
  if (targetTime.isRenderedWithoutLottieAnimation) {
    obj = { duration: null, delay: 0 };
    obj[0] = targetTime;
    return obj;
  } else {
    let str = "SPEND";
    if (diff > 0) {
      str = "EARN";
    }
    const result = targetTime * obj[str];
    obj = { duration: null, delay: null };
    obj[0] = result;
    let num2 = 0;
    if (diff > 0) {
      num2 = targetTime - result;
    }
    obj[1] = num2;
    return obj;
  }
};