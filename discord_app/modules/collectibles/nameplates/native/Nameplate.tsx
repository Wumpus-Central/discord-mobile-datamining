// === Module 8818: Nameplate ===

// Module 8818 (Nameplate)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function NameplateInner(isFocused) {
  ({ nameplate, isPressed } = isFocused);
  if (isPressed === undefined) {
    isPressed = false;
  }
  let flag = isFocused.isFocused;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFocused.isMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = isFocused.fullOpacity;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = isFocused.isSquarePreview;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = isFocused.invertPressOpacity;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = isFocused.fadeIn;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = isFocused.animate;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let sharedValue;
  let obj = flag6(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = closure_7(flag3, isPressed, flag, flag2, flag5);
  let obj1 = flag6(4296);
  let num = 1;
  if (flag6) {
    num = 0;
  }
  sharedValue = obj1.useSharedValue(num);
  const items1 = [sharedValue, flag6];
  const effect = noop.useEffect(() => {
    if (flag6) {
      const obj = { duration: 100, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj.easing = Easing.in(ReanimatedRexport.Easing.ease);
      const result = sharedValue.set(obj.withTiming(1, obj));
    }
  }, items1);
  let tmpResult = tmp(4296);
  class A {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  A.__closure = { opacity: sharedValue };
  A.__workletHash = 15588901070870;
  A.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(A);
  tmpResult = tmp(1886);
  const backgroundGradientColors = tmpResult.getBackgroundGradientColors(nameplate.palette, sharedValue(4495)());
  const tmp6 = sharedValue(4495)();
  const nameplateAssets = flag6(8819).getNameplateAssets(nameplate);
  let str = nameplateAssets.staticImageUrl;
  let tmp12 = true === flag7;
  if (tmp12) {
    tmp12 = !stateFromStores;
  }
  if (!tmp12) {
    tmp12 = "always" === flag7;
  }
  if (tmp12) {
    str = nameplateAssets.animatedImageUrl;
  }
  if (str == null) {
    str = "";
  }
  obj = { style: null, children: null };
  const items2 = [tmp4.container, isFocused.style, animatedStyle];
  obj.style = items2;
  let tmp15Result = null;
  if (null != backgroundGradientColors) {
    obj = { style: tmp4.gradient, start: null, end: null, colors: null };
    let num2 = 0;
    if (flag4) {
      num2 = -2;
    }
    const point = { x: num2, y: 0 };
    obj.start = point;
    obj.end = { x: 1, y: 0 };
    const items3 = [, ];
    ({ left: arr4[0], right: arr4[1] } = backgroundGradientColors);
    obj.colors = items3;
    tmp15Result = closure_5(tmp5(4987), obj);
    const tmp5Result = tmp5(4987);
  }
  const items4 = [tmp15Result, ];
  const tmp13 = closure_6;
  const tmpResult1 = flag6(8819);
  if (tmpResult2.isAndroid()) {
    if (tmp12) {
      obj1 = { url: str, style: tmp4.img, autoplay: true };
      let tmp17 = closure_5(tmp(8808).APNGPlayer, obj1);
    }
    items4[1] = tmp17;
    obj.children = items4;
    return tmp13(tmp5(4296).View, obj);
  }
  tmp17 = closure_5(tmp5(5587), { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" });
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4) => {
  const obj = { container: { position: "absolute", overflow: "hidden", top: 0, bottom: 0, left: 0, right: 0 }, gradient: null, img: null };
  let num = 1;
  let num2 = 1;
  if (!arg0) {
    if (arg3) {
      if (!arg2) {
        num2 = 0;
      }
    }
    if (arg1) {
    }
  }
  obj.gradient = { position: "absolute", width: "100%", height: "100%", opacity: num2 };
  if (!arg0) {
    if (arg3) {
      if (!arg2) {
        num = 0.1;
      }
    }
    if (arg1) {
    }
  }
  obj.img = { position: "absolute", height: "100%", right: 0, aspectRatio: 5.333333333333333, opacity: num };
  return obj;
});
const __initData = { code: "function NameplateTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/nameplates/native/Nameplate.tsx");

export default function Nameplate(nameplate) {
  nameplate = nameplate.nameplate;
  let tmp = null;
  const merged = Object.assign(nameplate, Object.assign({ nameplate: 0 }));
  if (null != nameplate) {
    const obj = { nameplate };
    const merged1 = Object.assign(merged);
    obj["aria-hidden"] = true;
    tmp = hasOwnProperty(NameplateInner, obj);
  }
  return tmp;
};