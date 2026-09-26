// === Module 5297: ButtonEllipsis ===

// Module 5297 (ButtonEllipsis)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function EllipsisCircle(offset) {
  offset = offset.offset;
  let sharedValue1;
  ({ variant, size } = offset);
  let obj = offset(sharedValue1[6]);
  const tmp = closure_6(size, offset, offset(sharedValue1[6]).useForegroundColor(variant));
  const sharedValue = offset(sharedValue1[2]).useSharedValue(0.4);
  let obj2 = offset(sharedValue1[2]);
  sharedValue1 = offset(sharedValue1[2]).useSharedValue(0.75);
  let obj3 = offset(sharedValue1[2]);
  const mountLayoutEffect = offset(sharedValue1[7]).useMountLayoutEffect(() => {
    if (typeof withEllipsisAnimation === "function") {
      let obj = ReanimatedRexport;
      const result = 166.66666666666666 * offset;
      const obj2 = ReanimatedRexport;
      tmp2(obj.withDelay(result, obj2.withRepeat(timing.withTiming(1, obj, "animate-always"), -1, true)));
      if (typeof tmp3 === "function") {
        const result1 = 166.66666666666666 * offset;
        const tmp5Result = ReanimatedRexport;
        const tmp5Result3 = ReanimatedRexport;
        tmp11(tmp5Result.withDelay(result1, tmp5Result3.withRepeat(timing.withTiming(1, tmp8, "animate-always"), -1, true)));
        return () => {
          offset(sharedValue1[2]).cancelAnimation(sharedValue);
          const obj = offset(sharedValue1[2]);
          offset(sharedValue1[2]).cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp8 = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const obj4 = offset(sharedValue1[7]);
  const fn = function w() {
    const obj = { opacity: sharedValue.get(), transform: null };
    const items = [{ scale: sharedValue1.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { opacity: sharedValue, scale: sharedValue1 };
  fn.__workletHash = 13371762734705;
  fn.__initData = __initData;
  const animatedStyle = offset(sharedValue1[2]).useAnimatedStyle(fn);
  const obj6 = { style: null };
  let items = [tmp.circle, animatedStyle];
  obj6.style = items;
  return closure_3(sharedValue(sharedValue1[2]).View, obj6);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ELLIPSIS_APPEAR_TIMING = { duration: 500, easing: null };
const Easing = fn(4566).Easing;
ELLIPSIS_APPEAR_TIMING.easing = Easing.inOut(fn(4566).Easing.quad);
const createStyles = fn(4836);
let closure_6 = createStyles.createStyles((arg0, arg1, backgroundColor) => {
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
  const circle = { width: num2, height: num2, borderRadius: nativeDefault.radii.round, marginEnd: null, backgroundColor: null };
  let num3 = 0;
  if (2 !== arg1) {
    num3 = num;
  }
  circle.marginEnd = num3;
  circle.backgroundColor = backgroundColor;
  return { circle };
});
function withEllipsisAnimation(arg0, value) {
  const obj = ReanimatedRexport;
  const result = 166.66666666666666 * arg0;
  const obj2 = ReanimatedRexport;
  return obj.withDelay(result, obj2.withRepeat(timing.withTiming(value, obj, "animate-always"), -1, true));
}
withEllipsisAnimation.__closure = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: fn(4566).withDelay, withRepeat: fn(4566).withRepeat, withTiming: fn(4837).withTiming, ELLIPSIS_APPEAR_TIMING };
withEllipsisAnimation.__workletHash = 2181731162311;
withEllipsisAnimation.__initData = { code: "function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){const{ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING}=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));}" };
const __initData = { code: "function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

export const Ellipsis = function Ellipsis(arg0) {
  const obj = { style: { flexDirection: "row" }, children: null };
  const merged = Object.assign(arg0);
  const items = [React3(EllipsisCircle, { offset: 0 }), , ];
  const merged1 = Object.assign(arg0);
  items[1] = React3(EllipsisCircle, { offset: 1 });
  const merged2 = Object.assign(arg0);
  items[2] = React3(EllipsisCircle, { offset: 2 });
  obj.children = items;
  return React4(ReanimatedRexportDefault.View, obj);
};