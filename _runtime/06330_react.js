// _runtime/06330_react.js
import react from "00019_react.js";
import GESTURE_SOURCE from "06120_GESTURE_SOURCE.js";

const useMemo = react.useMemo;

export const useBottomSheetTimingConfigs = (arg0) => {
  const easing = arg0;
  const items = [, ,];
  ({ duration: arr[0], easing: arr[1], reduceMotion: arr[2] } = arg0);
  return useMemo(() => {
    let ANIMATION_DURATION;
    const ANIMATION_EASING = easing.easing || GESTURE_SOURCE.ANIMATION_EASING;
    const obj = { easing: ANIMATION_EASING, duration: ANIMATION_DURATION, reduceMotion: easing.reduceMotion };
    ANIMATION_DURATION = easing.duration || GESTURE_SOURCE.ANIMATION_DURATION;
    return obj;
  }, items);
};
