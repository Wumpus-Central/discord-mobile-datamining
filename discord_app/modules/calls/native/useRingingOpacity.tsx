// === Module 17886: useRingingOpacity ===

// Module 17886 (useRingingOpacity)
import _mod1653 from "module_1653" /* 1653 */;
import timing_timing from "timing/timing" /* 5004 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let obj = { duration: 1000, easing: null };
const Easing = fn(1653).Easing;
obj.easing = Easing.inOut(fn(1653).Easing.ease);
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/native/useRingingOpacity.tsx");

export default function useRingingOpacity(arg0) {
  _require = arg0;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let num = obj.initialOpacity;
  if (num === undefined) {
    num = 0.1;
  }
  let num2 = obj.pulseOpacity;
  if (num2 === undefined) {
    num2 = 1;
  }
  let num3 = obj.startDelay;
  if (num3 === undefined) {
    num3 = 1000;
  }
  const sharedValue = require("module_1653").useSharedValue(num);
  items = [sharedValue, arg0, num, num2, num3];
  const effect = num2.useEffect(() => {
    if (closure_0) {
      const result = sharedValue.set(num);
      const withTimingResult = timing_timing.withTiming(num2, obj);
      const withTimingResult1 = timing_timing.withTiming(num, obj);
      const obj5 = _mod1653;
      const withRepeatResult = obj5.withRepeat(_mod1653.withSequence(withTimingResult, withTimingResult1), -1);
      const result1 = sharedValue.set(_mod1653.withDelay(num3, withRepeatResult));
    } else {
      obj = _mod1653;
      obj.cancelAnimation(sharedValue);
      if (0.1 !== 0.1) {
        const result2 = sharedValue.set(timing_timing.withTiming(tmp4, obj));
      }
    }
  }, items);
  return sharedValue;
};
export const RINGING_LOW_OPACITY = 0.1;