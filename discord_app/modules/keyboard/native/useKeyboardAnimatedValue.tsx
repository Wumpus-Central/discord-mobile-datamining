// discord_app/modules/keyboard/native/useKeyboardAnimatedValue.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import useKeyboardDuration from "useKeyboardDuration.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Easing = fn(1652).Easing;
const bezierResult = Easing.bezier(0.2, 0, 0, 1);
let c3 = bezierResult;
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardAnimatedValue.tsx");

export default function useKeyboardAnimatedValue(UNDETERMINED) {
  _require = UNDETERMINED;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(UNDETERMINED);
  items = [sharedValue, UNDETERMINED, flag];
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
}
export const KEYBOARD_EASING = bezierResult;
