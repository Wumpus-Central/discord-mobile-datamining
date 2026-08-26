// === Module 10371: EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS ===

// Module 10371 (EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS)
import set from "set" /* 2 */;

let obj = { EARN: 0.25, SPEND: 0.3 };
let result = set.fileFinishedImporting("modules/virtual_currency/shared/AnimationUtils.tsx");

export const EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS = 3000;
export const ORB_LOTTIE_COUNTER_ANIMATION_FACTORS = obj;
export const getDesiredAnimationConfigs = function getDesiredAnimationConfigs(diff, EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS) {
  let str = "SPEND";
  if (diff > 0) {
    str = "EARN";
  }
  const result = EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS * obj[str];
  obj = { duration: result, delay: null };
  let num = 0;
  if (diff > 0) {
    num = EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS - result;
  }
  obj[1] = num;
  return obj;
};