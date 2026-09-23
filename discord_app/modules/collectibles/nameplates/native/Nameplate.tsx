// discord_app/modules/collectibles/nameplates/native/Nameplate.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
  const items = [AccessibilityStore];
  const stateFromStores = flag6(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = closure_7(flag3, isPressed, flag, flag2, flag5);
  let obj = flag6(504);
  const tmp6 = sharedValue(4761)();
  let num = 1;
  if (flag6) {
    num = 0;
  }
  sharedValue = flag6(4559).useSharedValue(num);
  const items1 = [sharedValue, flag6];
  const effect = noop.useEffect(() => {
    if (flag6) {
      const obj2 = { duration: 100, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj2.easing = Easing.in(ReanimatedRexport.Easing.ease);
      const result = sharedValue.set(timing.withTiming(1, obj2));
    }
  }, items1);
  let obj2 = flag6(4559);
  class A {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  A.__closure = { opacity: sharedValue };
  A.__workletHash = 15588901070870;
  A.__initData = __initData;
  const animatedStyle = flag6(4559).useAnimatedStyle(A);
  const tmpResult = flag6(4559);
  const backgroundGradientColors = flag6(1970).getBackgroundGradientColors(nameplate.palette, tmp6);
  const tmpResult4 = flag6(1970);
  const nameplateAssets = flag6(9176).getNameplateAssets(nameplate);
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
  const obj3 = { style: null, children: null };
  const items2 = [tmp4.container, isFocused.style, animatedStyle];
  obj3.style = items2;
  let tmp15Result = null;
  if (null != backgroundGradientColors) {
    const obj4 = { style: tmp4.gradient, start: null, end: null, colors: null };
    let num2 = 0;
    if (flag4) {
      num2 = -2;
    }
    const point = { x: num2, y: 0 };
    obj4.start = point;
    obj4.end = { x: 1, y: 0 };
    const items3 = [,];
    ({ left: arr4[0], right: arr4[1] } = backgroundGradientColors);
    obj4.colors = items3;
    tmp15Result = closure_5(tmp5(5283), obj4);
    const tmp5Result = tmp5(5283);
  }
  const items4 = [tmp15Result];
  const tmpResult5 = flag6(9176);
  if (tmpResult6.isAndroid()) {
    if (tmp12) {
      const obj5 = { url: str, style: tmp4.img, autoplay: true };
      let tmp17 = closure_5(tmp(9165).APNGPlayer, obj5);
    }
    items4[1] = tmp17;
    obj3.children = items4;
    return closure_6(tmp5(4559).View, obj3);
  }
  tmp17 = closure_5(tmp5(5890), { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" });
  const obj6 = { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" };
  tmpResult6 = flag6(1364);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let closure_7 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4) => {
  const obj = {
    container: { position: "absolute", overflow: "hidden", top: 0, bottom: 0, left: 0, right: 0 },
    gradient: null,
    img: null,
  };
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
}
