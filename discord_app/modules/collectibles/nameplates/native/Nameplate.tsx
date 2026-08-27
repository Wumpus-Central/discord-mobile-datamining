// === Module 8454: NameplateInner ===

// Module 8454 (NameplateInner)
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
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
  let obj = flag6(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = callback2(flag3, isPressed, flag, flag2, flag5);
  obj1 = flag6(4185);
  let num = 1;
  if (flag6) {
    num = 0;
  }
  sharedValue = obj1.useSharedValue(num);
  const items1 = [sharedValue, flag6];
  const effect = React.useEffect(() => {
    if (flag6) {
      let obj = flag6(closure_1_2[7]);
      obj = { duration: 100, easing: null };
      const Easing = flag6(closure_1_2[6]).Easing;
      obj[1] = Easing.in(flag6(closure_1_2[6]).Easing.ease);
      const result = sharedValue.set(obj.withTiming(1, obj));
    }
  }, items1);
  let tmpResult = tmp(4185);
  class A {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  A.__closure = { opacity: sharedValue };
  A.__workletHash = 15588901070870;
  A.__initData = closure_8;
  const animatedStyle = tmpResult.useAnimatedStyle(A);
  tmpResult = tmp(1947);
  const backgroundGradientColors = tmpResult.getBackgroundGradientColors(nameplate.palette, sharedValue(4380)());
  const tmp6 = sharedValue(4380)();
  const nameplateAssets = flag6(8455).getNameplateAssets(nameplate);
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
  obj = { style: items2, children: null };
  items2 = [tmp4.container, isFocused.style, animatedStyle];
  let tmp15Result = null;
  if (null != backgroundGradientColors) {
    obj = { style: null, start: null, end: null, colors: null };
    obj[0] = tmp4.gradient;
    let num2 = 0;
    if (flag4) {
      num2 = -2;
    }
    obj1 = { x: null, y: 0 };
    obj1[0] = num2;
    obj[1] = obj1;
    obj[2] = { x: 1, y: 0 };
    const items3 = [, ];
    ({ left: arr4[0], right: arr4[1] } = backgroundGradientColors);
    obj[3] = items3;
    tmp15Result = callback(tmp5(4892), obj);
    const tmp15 = callback;
    const tmp5Result = tmp5(4892);
  }
  const items4 = [tmp15Result, ];
  const tmp13 = closure_6;
  const tmpResult1 = flag6(8455);
  if (tmpResult2.isAndroid()) {
    if (tmp12) {
      const obj2 = { url: null, style: null, autoplay: true };
      obj2[0] = str;
      obj2[1] = tmp4.img;
      let tmp17 = callback(tmp(8449).APNGPlayer, obj2);
    }
    items4[1] = tmp17;
    obj[1] = items4;
    return tmp13(tmp5(4185).View, obj);
  }
  tmp17 = callback(tmp5(5445), { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" });
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles((arg0, arg1, arg2, arg3, arg4) => {
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
      let num5 = 0.6;
      if (arg4) {
        num5 = 0.3;
      }
      let num4 = num5;
    } else {
      num4 = 0.4;
      if (arg2) {
        num4 = 0.8;
      }
    }
  }
  obj[1] = { position: "absolute", width: "100%", height: "100%", opacity: num2 };
  if (!arg0) {
    if (arg3) {
      if (!arg2) {
        num = 0.1;
      }
    }
    if (arg1) {
      let num8 = 0.5;
      if (arg4) {
        num8 = 0.4;
      }
      let num7 = num8;
    } else {
      num7 = 0.6;
      if (arg2) {
        num7 = 0.8;
      }
    }
  }
  obj[2] = { position: "absolute", height: "100%", right: 0, aspectRatio: 5.333333333333333, opacity: num };
  return obj;
});
let closure_8 = { code: "function NameplateTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/Nameplate.tsx");

export default function Nameplate(nameplate) {
  nameplate = nameplate.nameplate;
  let tmp = null;
  const merged = Object.assign(nameplate, Object.create(null));
  if (null != nameplate) {
    const obj = { nameplate: null };
    obj[0] = nameplate;
    const merged1 = Object.assign(merged);
    obj["aria-hidden"] = true;
    tmp = callback(NameplateInner, obj);
  }
  return tmp;
};