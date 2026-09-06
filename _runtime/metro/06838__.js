// === Module 6838: ? ===

// Module 6838
import _mod19 from "module_19" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6628 */;

const useMemo = _mod19.useMemo;

export const useBottomSheetTimingConfigs = (arg0) => {
  const easing = arg0;
  const items = [, , ];
  ({ duration: arr[0], easing: arr[1], reduceMotion: arr[2] } = arg0);
  return useMemo(() => {
    let ANIMATION_EASING = easing.easing;
    if (!ANIMATION_EASING) {
      ANIMATION_EASING = GESTURE_SOURCE.ANIMATION_EASING;
    }
    const obj = { easing: ANIMATION_EASING, duration: null, reduceMotion: null };
    let ANIMATION_DURATION = tmp.duration;
    if (!ANIMATION_DURATION) {
      ANIMATION_DURATION = GESTURE_SOURCE.ANIMATION_DURATION;
    }
    obj.duration = ANIMATION_DURATION;
    obj.reduceMotion = easing.reduceMotion;
    return obj;
  }, items);
};