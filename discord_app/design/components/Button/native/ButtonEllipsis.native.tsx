// === Module 4765: EllipsisCircle ===

// Module 4765 (EllipsisCircle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import _mod4119 from "module_4119" /* 4119 */;
import _modDef4119 from "module_4119" /* 4119 */;
import CONFIG_NEVER_ANIMATE_TIMING from "CONFIG_NEVER_ANIMATE_TIMING" /* 4671 */;
import jsxProd from "jsxProd" /* 21 */;
import { Easing } from "module_4119" /* 4119 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function EllipsisCircle(offset) {
  offset = offset.offset;
  let sharedValue;
  let sharedValue1;
  ({ variant, size } = offset);
  obj = offset(sharedValue1[6]);
  const tmp = callback3(size, offset, offset(sharedValue1[6]).useForegroundColor(variant));
  sharedValue = offset(sharedValue1[2]).useSharedValue(0.4);
  let obj2 = offset(sharedValue1[2]);
  sharedValue1 = offset(sharedValue1[2]).useSharedValue(0.75);
  let obj3 = offset(sharedValue1[2]);
  const mountLayoutEffect = offset(sharedValue1[7]).useMountLayoutEffect(() => {
    if (typeof closure_1_7 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result = 166.66666666666666 * tmp3;
    obj = offset(sharedValue1[2]);
    const tmp2 = closure_1_7;
    const obj2 = offset(sharedValue1[2]);
    const result1 = sharedValue.set(obj.withDelay(result, obj2.withRepeat(offset(sharedValue1[5]).withTiming(1, closure_1_5, "animate-always"), -1, true)));
    if (typeof tmp2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp4Result = tmp4(tmp5[2]);
    const result2 = 166.66666666666666 * tmp3;
    tmp4Result = tmp4(tmp5[2]);
    const obj3 = offset(sharedValue1[5]);
    const tmp7 = closure_1_5;
    const result3 = sharedValue1.set(tmp4Result.withDelay(result2, tmp4Result.withRepeat(offset(sharedValue1[5]).withTiming(1, tmp7, "animate-always"), -1, true)));
    return () => {
      closure_1_0(closure_1_2[2]).cancelAnimation(closure_1);
      obj = closure_1_0(closure_1_2[2]);
      closure_1_0(closure_1_2[2]).cancelAnimation(closure_2);
    };
  });
  const obj4 = offset(sharedValue1[7]);
  const fn = function w() {
    obj = { opacity: sharedValue.get(), transform: null };
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  fn.__closure = { opacity: sharedValue, scale: sharedValue1 };
  fn.__workletHash = 13371762734705;
  fn.__initData = closure_8;
  const animatedStyle = offset(sharedValue1[2]).useAnimatedStyle(fn);
  const style = [tmp.circle, animatedStyle];
  return callback(sharedValue(sharedValue1[2]).View, { style });
}
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { duration: 500, easing: null };
obj[1] = Easing.inOut(require("module_4119").Easing.quad);
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  if ("lg" === arg0) {
    let num = 4;
    let num2 = 8;
  } else {
    if ("md" !== arg0) {
      if ("sm" !== arg0) {
        num = 4;
        if ("xs" === arg0) {
          num = 3;
          num2 = 5;
        }
      }
    }
    num = 4;
    num2 = 6;
  }
  const circle = { width: num2, height: num2, borderRadius: ThemesDefault.radii.round, marginEnd: null, backgroundColor: null };
  let num3 = 0;
  if (2 !== arg1) {
    num3 = num;
  }
  circle[3] = num3;
  circle[4] = arg2;
  return { circle };
});
function withEllipsisAnimation(arg0, value) {
  obj = _mod4119;
  const result = 166.66666666666666 * arg0;
  const obj2 = _mod4119;
  return obj.withDelay(result, obj2.withRepeat(CONFIG_NEVER_ANIMATE_TIMING.withTiming(value, obj, "animate-always"), -1, true));
}
obj = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: require("module_4119").withDelay, withRepeat: require("module_4119").withRepeat, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, ELLIPSIS_APPEAR_TIMING: obj };
withEllipsisAnimation.__closure = obj;
withEllipsisAnimation.__workletHash = 2181731162311;
withEllipsisAnimation.__initData = { code: "function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){const{ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING}=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));}" };
let closure_8 = { code: "function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let result = require("set").fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

export const Ellipsis = function Ellipsis(arg0) {
  obj = { style: { flexDirection: "row" }, children: null };
  obj = { offset: 0 };
  const merged = Object.assign(arg0);
  const items = [callback(EllipsisCircle, obj), , ];
  obj = { offset: 1 };
  const merged1 = Object.assign(arg0);
  items[1] = callback(EllipsisCircle, obj);
  const merged2 = Object.assign(arg0);
  items[2] = callback(EllipsisCircle, { offset: 2 });
  obj[1] = items;
  return callback2(_modDef4119.View, obj);
};