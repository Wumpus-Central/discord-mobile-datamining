// discord_app/modules/virtual_currency/shared/AnimationUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const ORB_LOTTIE_COUNTER_ANIMATION_FACTORS = { EARN: 0.25, SPEND: 0.3 };
let result = size.fileFinishedImporting("modules/virtual_currency/shared/AnimationUtils.tsx");

export const EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS = 3000;
export { ORB_LOTTIE_COUNTER_ANIMATION_FACTORS };
export const getOrbBalanceCounterAnimationConfigs = function getOrbBalanceCounterAnimationConfigs(diff, targetTime) {
  let num2;
  let obj;
  targetTime = targetTime.targetTime;
  if (targetTime.isRenderedWithoutLottieAnimation) {
    return { duration: targetTime, delay: 0 };
  } else {
    let str = "SPEND";
    const tmp3 = obj;
    if (diff > 0) {
      str = "EARN";
    }
    const result = targetTime * tmp3[str];
    obj = { duration: result, delay: num2 };
    num2 = 0;
    if (diff > 0) {
      num2 = targetTime - result;
    }
    return obj;
  }
};
