// === Module 14787: SpinAnimation ===

// Module 14787 (SpinAnimation)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const __initData = { code: "function SpinAnimationTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
const __initData2 = { code: "function SpinAnimationTsx2(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/SpinAnimation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SpinAnimation(shouldAnimate) {
  const cResult = shouldAnimate(576).c(7);
  shouldAnimate = shouldAnimate.shouldAnimate;
  const children = shouldAnimate.children;
  let obj = shouldAnimate(576);
  const sharedValue = shouldAnimate(4811).useSharedValue(0);
  let obj2 = shouldAnimate(4811);
  let fn = function c() {
    const obj = { transform: null };
    const items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 7820847848206;
  fn.__initData = __initData;
  const animatedStyle = shouldAnimate(4811).useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === shouldAnimate) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    if (cResult[4] === children) {
      if (cResult[5] === animatedStyle) {
        let tmp9 = cResult[6];
      }
      return tmp9;
    }
    let obj4 = { style: animatedStyle, children };
    const tmp12 = jsx(sharedValue(4811).View, { style: animatedStyle, children });
    cResult[4] = children;
    cResult[5] = animatedStyle;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  }
  const fn2 = function u() {
    if (shouldAnimate) {
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 3000, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj4.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      const result = sharedValue.set(obj2.withRepeat(timing.withTiming(360, obj4), -1));
      const fn = () => shouldAnimate(dependencyMap[4]).cancelAnimation(sharedValue);
    } else {
      ReanimatedRexport.cancelAnimation(sharedValue);
      const result1 = sharedValue.set(0);
    }
    return fn;
  };
  let items = [sharedValue, shouldAnimate];
  cResult[0] = sharedValue;
  cResult[1] = shouldAnimate;
  cResult[2] = fn2;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn2;
  let obj3 = shouldAnimate(4811);
}) : (function SpinAnimation(children) {
  const shouldAnimate = children.shouldAnimate;
  const sharedValue = shouldAnimate(4811).useSharedValue(0);
  let obj = shouldAnimate(4811);
  let fn = function u() {
    const obj = { transform: null };
    const items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 8321578527405;
  fn.__initData = __initData2;
  let items = [sharedValue, shouldAnimate];
  const style = shouldAnimate(4811).useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    if (shouldAnimate) {
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 3000, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj4.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      const result = sharedValue.set(obj2.withRepeat(timing.withTiming(360, obj4), -1));
      const fn = () => shouldAnimate(dependencyMap[4]).cancelAnimation(sharedValue);
    } else {
      ReanimatedRexport.cancelAnimation(sharedValue);
      const result1 = sharedValue.set(0);
    }
    return fn;
  }, items);
  return jsx(sharedValue(4811).View, { style, children: children.children });
});