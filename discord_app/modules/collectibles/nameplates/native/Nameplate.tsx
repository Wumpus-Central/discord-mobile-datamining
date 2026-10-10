// discord_app/modules/collectibles/nameplates/native/Nameplate.tsx
import c from "../../../../../_runtime/00576_c.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
let closure_3 = ["nameplate"];
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4) => {
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
fn(558);
const __initData = { code: "function NameplateTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function NameplateTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function NameplateInner(arg0) {
  let APNGPlayer = _require;
  const cResult = require("c").c(27);
  ({ nameplate, isPressed, isFocused, isMuted, fullOpacity, isSquarePreview, invertPressOpacity, fadeIn, animate, style } = arg0);
  _require = tmp9;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = fn;
    cResult[1] = items;
    tmp11 = fn;
    tmp12 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  let obj = require("c");
  const tmp10 = undefined !== animate && animate;
  const tmp3 = undefined !== isPressed && isPressed;
  const tmp4 = undefined !== isFocused && isFocused;
  const tmp5 = undefined !== isMuted && isMuted;
  const tmp6 = undefined !== fullOpacity && fullOpacity;
  const tmp8 = undefined !== invertPressOpacity && invertPressOpacity;
  const stateFromStores = APNGPlayer(504).useStateFromStores(tmp12, tmp11);
  let img = closure_9(tmp6, tmp3, tmp4, tmp5, tmp8);
  const tmp16 = sharedValue(5031)();
  const APNGPlayerResult = APNGPlayer(504);
  let num3 = 1;
  if (undefined !== fadeIn && fadeIn) {
    num3 = 0;
  }
  sharedValue = APNGPlayer(4850).useSharedValue(num3);
  if (cResult[2] === (undefined !== fadeIn && fadeIn)) {
    if (cResult[3] === sharedValue) {
      let tmp18 = cResult[4];
      let tmp19 = cResult[5];
    }
    const effect = noop.useEffect(tmp18, tmp19);
    class B {
      constructor() {
        obj = { opacity: closure_1.get() };
        return obj;
      }
    }
    let obj2 = { opacity: sharedValue };
    B.__closure = obj2;
    B.__workletHash = 15588901070870;
    B.__initData = __initData;
    const animatedStyle = APNGPlayer(4850).useAnimatedStyle(B);
    if (cResult[6] === nameplate.palette) {
      if (cResult[7] === tmp16) {
        let tmp24 = cResult[8];
      }
      if (cResult[9] !== nameplate) {
        const nameplateAssets = APNGPlayer(9022).getNameplateAssets(nameplate);
        cResult[9] = nameplate;
        class B {
          constructor() {
            obj = { opacity: closure_1.get() };
            return obj;
          }
        }
        cResult[10] = nameplateAssets;
        let tmp26 = nameplateAssets;
        const APNGPlayerResult3 = APNGPlayer(9022);
      } else {
        tmp26 = cResult[10];
      }
      let str = tmp26.staticImageUrl;
      class B {
        constructor() {
          obj = { opacity: closure_1.get() };
          return obj;
        }
      }
      if (tmp28) {
        tmp28 = !stateFromStores;
      }
      if (!tmp28) {
        tmp28 = "always" === tmp10;
      }
      if (tmp28) {
        str = tmp26.animatedImageUrl;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[11] === animatedStyle) {
        if (cResult[12] === style) {
          if (cResult[13] === img.container) {
            let tmp30 = cResult[14];
          }
          if (cResult[15] === tmp24) {
            if (cResult[16] === tmp7) {
              if (cResult[17] === img.gradient) {
                let tmp31 = cResult[18];
              }
              if (cResult[19] === tmp28) {
                if (cResult[20] === str) {
                  if (cResult[21] === img.img) {
                    if (cResult[23] === tmp30) {
                      if (cResult[24] === tmp31) {
                        if (cResult[25] === tmp35) {
                          let tmp39 = cResult[26];
                        }
                        return tmp39;
                      }
                    }
                    const obj3 = { style: null, children: null };
                    class B {
                      constructor() {
                        obj = { opacity: closure_1.get() };
                        return obj;
                      }
                    }
                    const items1 = [tmp31, cResult[22]];
                    obj3.children = items1;
                    const tmp41 = closure_8(tmp15(4850).View, obj3);
                    cResult[23] = tmp30;
                    cResult[24] = tmp31;
                    cResult[25] = cResult[22];
                    cResult[26] = tmp41;
                    tmp39 = tmp41;
                  }
                }
              }
              if (!APNGPlayerResult4.isAndroid()) {
                const obj4 = { source: null, style: null, accessibilityRole: "image" };
                { uri: null }.uri = str;
                class B {
                  constructor() {
                    obj = { opacity: closure_1.get() };
                    return obj;
                  }
                }
                obj4.style = img.img;
                let tmp37 = closure_7(tmp15(6156), obj4);
                cResult[19] = tmp28;
                cResult[20] = str;
                img = img.img;
                cResult[21] = img;
                cResult[22] = tmp37;
                const obj5 = { uri: null };
              }
              class B {
                constructor() {
                  obj = { opacity: closure_1.get() };
                  return obj;
                }
              }
              APNGPlayer = APNGPlayer(9011).APNGPlayer;
              const obj6 = { url: str, style: img.img, autoplay: true };
              tmp37 = closure_7(APNGPlayer, obj6);
              APNGPlayerResult4 = APNGPlayer(1382);
            }
          }
          let tmp33Result = null;
          if (null != tmp24) {
            const obj7 = { style: img.gradient, start: null, end: null, colors: null };
            let num13 = 0;
            class B {
              constructor() {
                obj = { opacity: closure_1.get() };
                return obj;
              }
            }
            if (tmp7) {
              num13 = -2;
            }
            const point = { x: num13, y: 0 };
            obj7.start = point;
            obj7.end = { x: 1, y: 0 };
            const items2 = [, ];
            ({ left: arr4[0], right: arr4[1] } = tmp24);
            obj7.colors = items2;
            tmp33Result = closure_7(tmp34, obj7);
          }
          class B {
            constructor() {
              obj = { opacity: closure_1.get() };
              return obj;
            }
          }
          cResult[15] = tmp24;
          cResult[16] = tmp7;
          cResult[17] = img.gradient;
          cResult[18] = tmp33Result;
          tmp31 = tmp33Result;
        }
      }
      const items3 = [img.container, style, animatedStyle];
      cResult[11] = animatedStyle;
      cResult[12] = style;
      cResult[13] = img.container;
      cResult[14] = items3;
      tmp30 = items3;
    }
    const APNGPlayerResult2 = APNGPlayer(4850);
    const backgroundGradientColors = APNGPlayer(1990).getBackgroundGradientColors(nameplate.palette, tmp16);
    cResult[6] = nameplate.palette;
    cResult[7] = tmp16;
    cResult[8] = backgroundGradientColors;
    tmp24 = backgroundGradientColors;
    const APNGPlayerResult5 = APNGPlayer(1990);
  }
  class G {
    constructor() {
      if (fadeIn) {
        tmp = closure_1;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[10]);
        obj1 = { duration: 100, easing: null };
        Easing = closure_0(closure_2[9]).Easing;
        obj1.easing = Easing.in(closure_0(closure_2[9]).Easing.ease);
        num = 1;
        result = closure_1.set(obj.withTiming(1, obj1));
      }
      return;
    }
  }
  const items4 = [sharedValue, undefined !== fadeIn && fadeIn];
  cResult[2] = undefined !== fadeIn && fadeIn;
  cResult[3] = sharedValue;
  cResult[4] = G;
  cResult[5] = items4;
  tmp19 = items4;
  tmp18 = G;
  const APNGPlayerResult1 = APNGPlayer(4850);
}) : (function NameplateInner(isFocused) {
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
  const tmp4 = closure_9(flag3, isPressed, flag, flag2, flag5);
  let obj = flag6(504);
  const tmp6 = sharedValue(5031)();
  let num = 1;
  if (flag6) {
    num = 0;
  }
  sharedValue = flag6(4850).useSharedValue(num);
  const items1 = [sharedValue, flag6];
  const effect = noop.useEffect(() => {
    if (flag6) {
      const obj2 = { duration: 100, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj2.easing = Easing.in(ReanimatedRexport.Easing.ease);
      const result = sharedValue.set(timing.withTiming(1, obj2));
    }
  }, items1);
  let obj2 = flag6(4850);
  class A {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  A.__closure = { opacity: sharedValue };
  A.__workletHash = 8730736390069;
  A.__initData = __initData2;
  const animatedStyle = flag6(4850).useAnimatedStyle(A);
  const tmpResult = flag6(4850);
  const backgroundGradientColors = flag6(1990).getBackgroundGradientColors(nameplate.palette, tmp6);
  const tmpResult4 = flag6(1990);
  const nameplateAssets = flag6(9022).getNameplateAssets(nameplate);
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
    const items3 = [, ];
    ({ left: arr4[0], right: arr4[1] } = backgroundGradientColors);
    obj4.colors = items3;
    tmp15Result = closure_7(tmp5(5391), obj4);
    const tmp5Result = tmp5(5391);
  }
  const items4 = [tmp15Result, ];
  const tmpResult5 = flag6(9022);
  if (tmpResult6.isAndroid()) {
    if (tmp12) {
      const obj5 = { url: str, style: tmp4.img, autoplay: true };
      let tmp17 = closure_7(tmp(9011).APNGPlayer, obj5);
    }
    items4[1] = tmp17;
    obj3.children = items4;
    return closure_8(tmp5(4850).View, obj3);
  }
  tmp17 = closure_7(tmp5(6156), { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" });
  const obj6 = { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" };
  tmpResult6 = flag6(1382);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/nameplates/native/Nameplate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Nameplate(nameplate) {
  const cResult = c.c(6);
  if (cResult[0] !== nameplate) {
    nameplate = nameplate.nameplate;
    const tmp6 = _objectWithoutProperties(nameplate, closure_3);
    cResult[0] = nameplate;
    cResult[1] = nameplate;
    cResult[2] = tmp6;
    let tmp3 = tmp6;
    let tmp2 = nameplate;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (null == tmp2) {
    return null;
  } else {
    if (cResult[3] === tmp2) {
    }
    const obj2 = { nameplate: tmp2 };
    const merged = Object.assign(tmp3);
    obj2["aria-hidden"] = true;
    const tmp13 = React5(closure_12, obj2);
    cResult[3] = tmp2;
    cResult[4] = tmp3;
    cResult[5] = tmp13;
  }
}) : (function Nameplate(nameplate) {
  nameplate = nameplate.nameplate;
  let tmp = null;
  const merged = Object.assign(nameplate, Object.assign({ nameplate: 0 }));
  if (null != nameplate) {
    const obj = { nameplate };
    const merged1 = Object.assign(merged);
    obj["aria-hidden"] = true;
    tmp = React5(closure_12, obj);
  }
  return tmp;
});