// discord_app/modules/virtual_currency/shared/AnimationUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const ORB_LOTTIE_COUNTER_ANIMATION_FACTORS = { EARN: 0.25, SPEND: 0.3 };
let result = size.fileFinishedImporting("modules/virtual_currency/shared/AnimationUtils.tsx");

export const EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS = 3000;
export { ORB_LOTTIE_COUNTER_ANIMATION_FACTORS };
export const getOrbBalanceCounterAnimationConfigs = function getOrbBalanceCounterAnimationConfigs(diff, targetTime) {
  targetTime = targetTime.targetTime;
  if (targetTime.isRenderedWithoutLottieAnimation) {
    let obj = { duration: targetTime, delay: 0 };
    return obj;
  } else {
    let str = "SPEND";
    if (diff > 0) {
      str = "EARN";
    }
    const result = targetTime * obj[str];
    obj = { duration: result, delay: null };
    let num2 = 0;
    if (diff > 0) {
      num2 = targetTime - result;
    }
    obj.delay = num2;
    return obj;
  }
};
