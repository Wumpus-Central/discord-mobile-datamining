// === Module 8507: Nameplate ===

// Module 8507 (Nameplate)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let metroImportAll;
let metroImportDefault;
let closure_3 = ["nameplate"];
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4) => {
  let num;
  let num2;
  const obj = { container: { position: "absolute", overflow: "hidden", top: 0, bottom: 0, left: 0, right: 0 }, gradient: { position: "absolute", width: "100%", height: "100%", opacity: num2 }, img: { position: "absolute", height: "100%", right: 0, aspectRatio: 5.333333333333333, opacity: num } };
  num = 1;
  num2 = 1;
  if (!arg0) {
    let num3;
    if (!arg3) {
      let num4;
      if (arg1) {
        let num5 = 0.6;
        if (arg4) {
          num5 = 0.3;
        }
        num4 = num5;
      } else {
        num4 = 0.4;
        if (arg2) {
          num4 = 0.8;
        }
      }
      num3 = num4;
    } else {
      num3 = 0;
    }
    num2 = num3;
  }
  if (!arg0) {
    let num6;
    if (!arg3) {
      let num7;
      if (arg1) {
        let num8 = 0.5;
        if (arg4) {
          num8 = 0.4;
        }
        num7 = num8;
      } else {
        num7 = 0.6;
        if (arg2) {
          num7 = 0.8;
        }
      }
      num6 = num7;
    } else {
      num6 = 0.1;
    }
    num = num6;
  }
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function NameplateTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function NameplateTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((nameplate) => {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== nameplate) {
    nameplate = nameplate.nameplate;
    const tmp6 = _objectWithoutProperties(nameplate, closure_3);
    cResult[0] = nameplate;
    cResult[1] = nameplate;
    cResult[2] = tmp6;
    tmp3 = tmp6;
    tmp2 = nameplate;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  let tmp7 = null;
  if (null != tmp2) {
    if (cResult[3] === tmp2) {
      let tmp8;
      if (cResult[4] === tmp3) {
        tmp8 = cResult[5];
      }
      tmp7 = tmp8;
    }
    const obj2 = { nameplate: tmp2, "aria-hidden": true };
    const merged = Object.assign(tmp3);
    const tmp14 = metroImportDefault(closure_12, obj2);
    cResult[3] = tmp2;
    cResult[4] = tmp3;
    cResult[5] = tmp14;
    tmp8 = tmp14;
  }
  return tmp7;
}) : ((nameplate) => {
  nameplate = nameplate.nameplate;
  let tmp = null;
  const merged = Object.assign(nameplate, Object.assign({ nameplate: 0 }));
  if (null != nameplate) {
    const obj = { nameplate, "aria-hidden": true };
    const merged1 = Object.assign(merged);
    tmp = metroImportDefault(closure_12, obj);
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animate;
  let closure_0;
  let fadeIn;
  let fullOpacity;
  let invertPressOpacity;
  let isFocused;
  let isMuted;
  let isPressed;
  let isSquarePreview;
  let items1;
  let items2;
  let nameplate;
  let obj6;
  let point;
  let sharedValue;
  let style;
  let tmp12;
  let tmp13;
  let tmp31;
  let tmp39;
  let useReducedMotion;
  let obj = require("react");
  const cResult = obj.c(27);
  ({ nameplate, isPressed, isFocused, isMuted, fullOpacity, isSquarePreview, invertPressOpacity, fadeIn, animate, style } = arg0);
  const tmp5 = undefined !== isFocused && isFocused;
  _require = tmp10;
  const tmp11 = undefined !== animate && animate;
  const tmp4 = undefined !== isPressed && isPressed;
  const tmp6 = undefined !== isMuted && isMuted;
  const tmp7 = undefined !== fullOpacity && fullOpacity;
  const tmp9 = undefined !== invertPressOpacity && invertPressOpacity;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = fn;
    cResult[1] = items;
    tmp12 = fn;
    tmp13 = items;
  } else {
    [tmp12, tmp13] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp12);
  const tmp16 = closure_9(tmp7, tmp4, tmp5, tmp6, tmp9);
  const tmp18 = sharedValue(4797)();
  let num3 = 1;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  if (undefined !== fadeIn && fadeIn) {
    num3 = 0;
  }
  sharedValue = useSharedValue(num3);
  if (cResult[2] === (undefined !== fadeIn && fadeIn)) {
    let tmp21;
    let tmp22;
    if (cResult[3] === sharedValue) {
      tmp21 = cResult[4];
      tmp22 = cResult[5];
    }
    const effect = react.useEffect(tmp21, tmp22);
    const tmpResult7 = require("ReanimatedRexport");
    class B {
      constructor() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      }
    }
    const obj2 = { opacity: sharedValue };
    B.__closure = obj2;
    B.__workletHash = 15588901070870;
    B.__initData = __initData;
    const animatedStyle = tmpResult7.useAnimatedStyle(B);
    if (cResult[6] === nameplate.palette) {
      let tmp27;
      let tmp29;
      if (cResult[7] === tmp18) {
        tmp27 = cResult[8];
      }
      if (cResult[9] !== nameplate) {
        const tmpResult8 = require("NameplateUtils");
        const nameplateAssets = tmpResult8.getNameplateAssets(nameplate);
        cResult[9] = nameplate;
        class B {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        cResult[10] = nameplateAssets;
        tmp29 = nameplateAssets;
      } else {
        tmp29 = cResult[10];
      }
      let str = tmp29.staticImageUrl;
      class B {
        constructor() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        }
      }
      const animatedImageUrl = tmp29.animatedImageUrl;
      if (tmp31) {
        tmp31 = !stateFromStores;
      }
      if (!tmp31) {
        tmp31 = "always" === tmp11;
      }
      if (tmp31) {
        str = animatedImageUrl;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[11] === animatedStyle) {
        if (cResult[12] === style) {
          let tmp33;
          if (cResult[13] === tmp16.container) {
            tmp33 = cResult[14];
          }
          if (cResult[15] === tmp27) {
            if (cResult[16] === (undefined !== isSquarePreview && isSquarePreview)) {
              let tmp34;
              let tmp38;
              if (cResult[17] === tmp16.gradient) {
                tmp34 = cResult[18];
              }
              if (cResult[19] === tmp31) {
                if (cResult[20] === str) {
                  if (cResult[21] === tmp16.img) {
                    tmp38 = cResult[22];
                  }
                  if (cResult[23] === tmp33) {
                    if (cResult[24] === tmp34) {
                      let tmp41;
                      if (cResult[25] === tmp38) {
                        tmp41 = cResult[26];
                      }
                      return tmp41;
                    }
                  }
                  const obj3 = { style: null, children: items1 };
                  class B {
                    constructor() {
                      const obj = { opacity: sharedValue.get() };
                      return obj;
                    }
                  }
                  items1 = [tmp34, tmp38];
                  const tmp43 = closure_8(sharedValue(4618).View, obj3);
                  cResult[23] = tmp33;
                  cResult[24] = tmp34;
                  cResult[25] = tmp38;
                  cResult[26] = tmp43;
                  tmp41 = tmp43;
                }
              }
              const tmpResult9 = require("PlatformUtils");
              if (tmpResult9.isAndroid()) {
                if (tmp31) {
                  class B {
                    constructor() {
                      const obj = { opacity: sharedValue.get() };
                      return obj;
                    }
                  }
                }
                cResult[19] = tmp31;
                class B {
                  constructor() {
                    const obj = { opacity: sharedValue.get() };
                    return obj;
                  }
                }
                cResult[21] = tmp16.img;
                cResult[22] = tmp39;
                tmp38 = tmp39;
              }
              class B {
                constructor() {
                  const obj = { opacity: sharedValue.get() };
                  return obj;
                }
              }
              const obj5 = { source: obj6, style: tmp16.img, accessibilityRole: "image" };
              obj6 = { uri: str };
              tmp39 = closure_7(sharedValue(5981), obj5);
            }
          }
          let tmp36Result = null;
          if (null != tmp27) {
            let num13 = 0;
            const obj7 = { style: tmp16.gradient, start: point, end: { x: 1, y: 0 }, colors: items2 };
            class B {
              constructor() {
                const obj = { opacity: sharedValue.get() };
                return obj;
              }
            }
            if (undefined !== isSquarePreview && isSquarePreview) {
              num13 = -2;
            }
            point = { x: num13, y: 0 };
            items2 = [, ];
            ({ left: arr4[0], right: arr4[1] } = tmp27);
            tmp36Result = closure_7(tmp37, obj7);
          }
          class B {
            constructor() {
              const obj = { opacity: sharedValue.get() };
              return obj;
            }
          }
          cResult[15] = tmp27;
          cResult[16] = undefined !== isSquarePreview && isSquarePreview;
          cResult[17] = tmp16.gradient;
          cResult[18] = tmp36Result;
          tmp34 = tmp36Result;
        }
      }
      const items3 = [tmp16.container, style, animatedStyle];
      cResult[11] = animatedStyle;
      cResult[12] = style;
      cResult[13] = tmp16.container;
      cResult[14] = items3;
      tmp33 = items3;
    }
    const tmpResult10 = require("utils");
    const backgroundGradientColors = tmpResult10.getBackgroundGradientColors(nameplate.palette, tmp18);
    cResult[6] = nameplate.palette;
    cResult[7] = tmp18;
    cResult[8] = backgroundGradientColors;
    tmp27 = backgroundGradientColors;
  }
  class G {
    constructor() {
      let Easing;
      if (closure_0) {
        set = sharedValue.set;
        const obj = { duration: 100, easing: Easing.in(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const result = set(withTiming(1, obj));
      }
    }
  }
  const items4 = [sharedValue, undefined !== fadeIn && fadeIn];
  cResult[2] = undefined !== fadeIn && fadeIn;
  cResult[3] = sharedValue;
  cResult[4] = G;
  cResult[5] = items4;
  tmp22 = items4;
  tmp21 = G;
}) : ((isFocused) => {
  let isPressed;
  let items2;
  let items3;
  let nameplate;
  let point;
  let useReducedMotion;
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
  const style = isFocused.style;
  let obj = flag6(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = closure_9(flag3, isPressed, flag, flag2, flag5);
  const tmp5 = sharedValue;
  let num = 1;
  const tmp6 = sharedValue(4797)();
  const useSharedValue = flag6(4618).useSharedValue;
  flag6(4618);
  if (flag6) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const items1 = [sharedValue, flag6];
  const effect = react.useEffect(() => {
    let Easing;
    if (flag6) {
      set = sharedValue.set;
      const obj = { duration: 100, easing: Easing.in(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withTiming(1, obj));
    }
  }, items1);
  const tmpResult = flag6(4618);
  class I {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  I.__closure = { opacity: sharedValue };
  I.__workletHash = 8730736390069;
  I.__initData = __initData2;
  const animatedStyle = tmpResult.useAnimatedStyle(I);
  const tmpResult4 = flag6(1977);
  const backgroundGradientColors = tmpResult4.getBackgroundGradientColors(nameplate.palette, tmp6);
  const tmpResult5 = flag6(8508);
  const nameplateAssets = tmpResult5.getNameplateAssets(nameplate);
  let str = nameplateAssets.staticImageUrl;
  let tmp13 = true === flag7;
  const animatedImageUrl = nameplateAssets.animatedImageUrl;
  if (tmp13) {
    tmp13 = !stateFromStores;
  }
  if (!tmp13) {
    tmp13 = "always" === flag7;
  }
  if (tmp13) {
    str = animatedImageUrl;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { style: items2, children: null };
  items2 = [tmp4.container, style, animatedStyle];
  let tmp16Result = null;
  const View = tmp5(4618).View;
  if (null != backgroundGradientColors) {
    let num2 = 0;
    const obj3 = { style: tmp4.gradient, start: point, end: { x: 1, y: 0 }, colors: items3 };
    const tmp5Result = tmp5(5612);
    if (flag4) {
      num2 = -2;
    }
    point = { x: num2, y: 0 };
    items3 = [, ];
    ({ left: arr4[0], right: arr4[1] } = backgroundGradientColors);
    tmp16Result = closure_7(tmp5Result, obj3);
  }
  const items4 = [tmp16Result, ];
  const tmpResult6 = flag6(1369);
  if (tmpResult6.isAndroid()) {
    let tmp18;
    if (tmp13) {
      const obj4 = { url: str, style: tmp4.img, autoplay: true };
      tmp18 = closure_7(tmp(8497).APNGPlayer, obj4);
    }
    items4[1] = tmp18;
    obj2.children = items4;
    return closure_8(View, obj2);
  }
  const obj5 = { source: { uri: str }, style: tmp4.img, accessibilityRole: "image" };
  tmp18 = closure_7(tmp5(5981), obj5);
});
let result = size.fileFinishedImporting("modules/collectibles/nameplates/native/Nameplate.tsx");

export default tmp3;