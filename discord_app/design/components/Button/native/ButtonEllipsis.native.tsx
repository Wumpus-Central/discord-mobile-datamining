// === Module 5773: ButtonEllipsis ===

// Module 5773 (ButtonEllipsis)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const require = fn;
function EllipsisCircle(offset) {
  offset = offset.offset;
  _require = offset;
  let sharedValue1;
  ({ variant, size } = offset);
  let obj = require("ButtonHooks");
  const tmp = sharedValue1;
  const tmp2 = closure_6(size, offset, require("ButtonHooks").useForegroundColor(variant));
  const sharedValue = require("module_1652").useSharedValue(0.4);
  const obj2 = require("module_1652");
  sharedValue1 = require("module_1652").useSharedValue(0.75);
  const obj3 = require("module_1652");
  const mountLayoutEffect = require("useMountEffect").useMountLayoutEffect(() => {
    if (typeof withEllipsisAnimation === "function") {
      const result = c0 * (require / 3);
      tmp2(importDefault(result, dependencyMap(View(1, React4, "animate-always"), -1, true)));
      if (typeof tmp3 === "function") {
        const result1 = c0 * (require / 3);
        tmp13(importDefault(result1, dependencyMap(View(1, React4, "animate-always"), -1, true)));
        return () => {
          c0(sharedValue1[3]).cancelAnimation(_undefined2);
          const obj = c0(sharedValue1[3]);
          c0(sharedValue1[3]).cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const obj4 = require("useMountEffect");
  items = [closure_8, sharedValue, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp6, tmp7, tmp8] = items;
  class ButtonEllipsisNativeTsx2 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { scale: closure_1.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp7, tmp8];
  ButtonEllipsisNativeTsx2.__closure = items1;
  ButtonEllipsisNativeTsx2.__workletHash = 14645917185224;
  ButtonEllipsisNativeTsx2.__initData = tmp6;
  const animatedStyle = require("module_1652").useAnimatedStyle(ButtonEllipsisNativeTsx2);
  const obj6 = { style: null };
  const items2 = [tmp2.circle, animatedStyle];
  obj6.style = items2;
  return closure_4(require("module_1652").View, obj6);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { duration: 500, easing: null };
const Easing = fn(1652).Easing;
obj.easing = Easing.inOut(fn(1652).Easing.quad);
const createStyles = fn(5142);
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
let items = [{ code: "(function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){let[ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING]=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));})" }, 500, fn(1652).withDelay, fn(1652).withRepeat, fn(5372).withTiming, obj];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
let closure_129_4;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
function withEllipsisAnimation(arg0, arg1) {
  const result = arg0 * (require / 3);
  return importDefault(result, dependencyMap(View(arg1, React4, "animate-always"), -1, true));
}
let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
withEllipsisAnimation.__closure = items1;
withEllipsisAnimation.__workletHash = 1565500961406;
withEllipsisAnimation.__initData = tmp4;
let closure_8 = { code: "(function ButtonEllipsisNativeTsx2(){let[opacity,scale]=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

export function Ellipsis(arg0) {
  const obj = { style: { flexDirection: "row" }, children: null };
  const merged = Object.assign(arg0);
  items = [React4(EllipsisCircle, { offset: 0 }), , ];
  const merged1 = Object.assign(arg0);
  items[1] = React4(EllipsisCircle, { offset: 1 });
  const merged2 = Object.assign(arg0);
  items[2] = React4(EllipsisCircle, { offset: 2 });
  obj.children = items;
  return hasOwnProperty(View, obj);
}