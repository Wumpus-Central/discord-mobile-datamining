// === Module 5844: useBottomSheetTimingConfigs ===

// Module 5844 (useBottomSheetTimingConfigs)
import noop from "noop" /* 19 */;

const useMemo = noop.useMemo;

export const useBottomSheetTimingConfigs = (arg0) => {
  closure_0 = arg0;
  const items = [, , ];
  ({ duration: arr[0], easing: arr[1], reduceMotion: arr[2] } = arg0);
  return useMemo(() => {
    let ANIMATION_EASING = lib.easing;
    if (!ANIMATION_EASING) {
      ANIMATION_EASING = lib(closure_1_1[1]).ANIMATION_EASING;
    }
    const obj = { easing: ANIMATION_EASING, duration: null, reduceMotion: null };
    let ANIMATION_DURATION = tmp.duration;
    if (!ANIMATION_DURATION) {
      ANIMATION_DURATION = lib(closure_1_1[1]).ANIMATION_DURATION;
    }
    obj[1] = ANIMATION_DURATION;
    obj[2] = lib.reduceMotion;
    return obj;
  }, items);
};