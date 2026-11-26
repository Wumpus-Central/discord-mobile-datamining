// === Module 7049: useKeyboardAnimatedValue ===

// Module 7049 (useKeyboardAnimatedValue)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import timing_timing from "timing/timing" /* 5253 */;
import useKeyboardDuration from "useKeyboardDuration" /* 7050 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Easing = fn(1654).Easing;
const bezierResult = Easing.bezier(0.2, 0, 0, 1);
let c3 = bezierResult;
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardAnimatedValue.tsx");

export default function useKeyboardAnimatedValue(point) {
  _require = point;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const sharedValue = require("module_1654").useSharedValue(point);
  items = [sharedValue, point, flag];
  const effect = sharedValue.useEffect(() => {
    if (flag) {
      if (!obj.isAndroid()) {
        const obj2 = { duration: null, easing: null };
        const tmp3Result = timing_timing;
        obj2.duration = useKeyboardDuration.getKeyboardDuration();
        obj2.easing = bezierResult;
        let withTimingResult = tmp3Result.withTiming(closure_0, obj2);
        const tmp3Result2 = useKeyboardDuration;
      }
      tmp2(withTimingResult);
      obj = PlatformUtils;
    }
    withTimingResult = closure_0;
  }, items);
  return sharedValue;
};
export const KEYBOARD_EASING = bezierResult;