// discord_app/modules/user_profile/native/SpinAnimation.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const __initData = {
  code: 'function SpinAnimationTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+"deg"}]};}',
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/SpinAnimation.tsx");

export default function SpinAnimation(children) {
  const shouldAnimate = children.shouldAnimate;
  const sharedValue = shouldAnimate(5095).useSharedValue(0);
  let obj = shouldAnimate(5095);
  let fn = function l() {
    const obj = { transform: null };
    const items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 7820847848206;
  fn.__initData = __initData;
  let items = [sharedValue, shouldAnimate];
  const style = shouldAnimate(5095).useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    if (shouldAnimate) {
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 3000, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj4.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      const result = sharedValue.set(obj2.withRepeat(timing.withTiming(360, obj4), -1));
      const fn = () => shouldAnimate(dependencyMap[2]).cancelAnimation(sharedValue);
    } else {
      ReanimatedRexport.cancelAnimation(sharedValue);
      const result1 = sharedValue.set(0);
    }
    return fn;
  }, items);
  return jsx(sharedValue(5095).View, { style, children: children.children });
}
