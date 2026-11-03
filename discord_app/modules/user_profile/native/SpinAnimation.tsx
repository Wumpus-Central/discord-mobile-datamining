// discord_app/modules/user_profile/native/SpinAnimation.tsx
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
let closure_5 = {
  code: '(function SpinAnimationTsx1(){let[rotation]=this.__closure;return{transform:[{rotateZ:rotation.get()+"deg"}]};})',
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/SpinAnimation.tsx");

export default function SpinAnimation(children) {
  const shouldAnimate = children.shouldAnimate;
  _require = shouldAnimate;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../_runtime/metro/01652__.js");
  items = [closure_5, sharedValue];
  _require = undefined;
  [tmp3, tmp4] = items;
  class SpinAnimationTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { rotateZ: "" + closure_0.get() + "deg" };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp4];
  SpinAnimationTsx1.__closure = items1;
  SpinAnimationTsx1.__workletHash = 17162751475447;
  SpinAnimationTsx1.__initData = tmp3;
  const items2 = [sharedValue, shouldAnimate];
  const style = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(SpinAnimationTsx1);
  const effect = noop.useEffect(() => {
    if (c0) {
      const obj2 = _mod1652;
      const obj4 = { duration: 3000, easing: null };
      const Easing = _mod1652.Easing;
      obj4.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      const result = sharedValue.set(obj2.withRepeat(timing_timing.withTiming(360, obj4), -1));
      const fn = () => c0(dependencyMap[2]).cancelAnimation(sharedValue);
    } else {
      _mod1652.cancelAnimation(sharedValue);
      const result1 = sharedValue.set(0);
    }
    return fn;
  }, items2);
  return jsx(sharedValue(1652).View, { style, children: children.children });
}
