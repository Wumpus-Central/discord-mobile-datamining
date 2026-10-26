// discord_app/modules/conjure/title_bar/native/ConjureWorkingWand.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import inlineStylesDefault from "../../../../../_runtime/07962_inlineStyles.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const Easing = fn(5052).Easing;
const easing = Easing.bezier(0.42, 0, 0.58, 1);
let c11 = 24;
let c12 = "0 0 24 24";
let c13 = 19.200000000000003;
let c14 = -33.6;
let result = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PURPLE_40).set("oklch.l", "*0.95");
let result1 = result.set("oklch.c", "*0.8");
const color = result1.hex();
let obj = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PURPLE_40);
let result2 = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PURPLE_30).set("oklch.l", "*0.95");
let result3 = result2.set("oklch.c", "*0.8");
const color2 = result3.hex();
let obj4 = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PURPLE_30);
let result4 = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PINK_40).set("oklch.l", "*0.95");
let result5 = result4.set("oklch.c", "*0.8");
const fill = result5.hex();
let closure_18 = ReanimatedRexport.createAnimatedComponent(fn(7962).Rect);
const createStyles = fn(4971);
let closure_19 = createStyles.createStyles((width) => ({
  root: { width, height: width },
  sparkleSmall: { transformOrigin: "33.6% 18.6%" },
  sparkleLarge: { transformOrigin: "75% 75%" },
}));
function twinkle(arg0) {
  const obj = { opacity: 0.35 + 0.65 * arg0, transform: null };
  const items = [{ scale: 0.55 + 0.7 * arg0 }, { rotate: `${45 * arg0}deg` }];
  obj.transform = items;
  return obj;
}
twinkle.__closure = {};
twinkle.__workletHash = 1269251083411;
twinkle.__initData = {
  code: 'function twinkle_ConjureWorkingWandTsx1(peak){return{opacity:0.35+0.65*peak,transform:[{scale:0.55+0.7*peak},{rotate:45*peak+"deg"}]};}',
};
let obj2 = { opacity: 1, transform: null };
let items = [{ scale: 1 }, { rotate: "0deg" }];
obj2.transform = items;
const __initData = {
  code: "function ConjureWorkingWandTsx2(){const{band,BAND_FROM}=this.__closure;var _band$get,_band;return{x:(_band$get=(_band=band)===null||_band===void 0?void 0:_band.get())!==null&&_band$get!==void 0?_band$get:BAND_FROM};}",
};
const __initData2 = {
  code: "function ConjureWorkingWandTsx3(){const{band,BAND_FROM}=this.__closure;var _band$get,_band;return{x:(_band$get=(_band=band)===null||_band===void 0?void 0:_band.get())!==null&&_band$get!==void 0?_band$get:BAND_FROM};}",
};
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function WandPart(arg0) {
      const cResult = band(576).c(15);
      ({ path, color, size, band } = arg0);
      const str = noop.useId();
      if (cResult[0] !== str) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = /:/g;
          cResult[2] = tmp7;
          let tmp6 = tmp7;
        } else {
          tmp6 = cResult[2];
        }
        const replaced = str.replace(tmp6, "");
        cResult[0] = str;
        cResult[1] = replaced;
      } else {
        class W {
          constructor() {
            obj = band;
            value = undefined;
            if (band != null) {
              value = obj.get();
            }
            if (value == null) {
              value = c14;
            }
            return { x: value };
          }
        }
        obj2 = { band, BAND_FROM };
        W.__closure = obj2;
        W.__workletHash = 10738212380370;
        W.__initData = __initData;
        const animatedProps = band(5052).useAnimatedProps(W);
        if (cResult[3] === color) {
          if (cResult[4] === path) {
            let tmp13 = cResult[5];
          }
          if (cResult[6] === band) {
            if (cResult[7] === animatedProps) {
              if (cResult[8] === tmp4) {
                if (cResult[9] === path) {
                  let tmp16 = cResult[10];
                }
                if (cResult[11] === size) {
                  if (cResult[12] === tmp13) {
                    if (cResult[13] === tmp16) {
                      let tmp28 = cResult[14];
                    }
                    return tmp28;
                  }
                }
                class W {
                  constructor() {
                    obj = band;
                    value = undefined;
                    if (band != null) {
                      value = obj.get();
                    }
                    if (value == null) {
                      value = c14;
                    }
                    return { x: value };
                  }
                }
                const size1 = { width: size, height: size, viewBox, children: null };
                const items = [tmp13, tmp16];
                size1.children = items;
                const tmp31 = closure_8(inlineStylesDefault, size1);
                cResult[11] = size;
                cResult[12] = tmp13;
                cResult[13] = tmp16;
                cResult[14] = tmp31;
                tmp28 = tmp31;
              }
            }
          }
          class W {
            constructor() {
              obj = band;
              value = undefined;
              if (band != null) {
                value = obj.get();
              }
              if (value == null) {
                value = c14;
              }
              return { x: value };
            }
          }
          if (null != band) {
            class W {
              constructor() {
                obj = band;
                value = undefined;
                if (band != null) {
                  value = obj.get();
                }
                if (value == null) {
                  value = c14;
                }
                return { x: value };
              }
            }
            const obj3 = { children: null };
            const obj4 = { id: null, x1: "0", y1: "0", x2: "1", y2: "0", children: null };
            const _HermesInternal = HermesInternal;
            obj4.id = "" + tmp4 + "band";
            const obj5 = { offset: "0", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
            const items1 = [closure_7(band(7962).Stop, obj5), ,];
            const obj6 = { offset: "0.5", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 1 };
            items1[1] = closure_7(band(7962).Stop, obj6);
            const obj7 = { offset: "1", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
            items1[2] = closure_7(band(7962).Stop, obj7);
            obj4.children = items1;
            const items2 = [closure_8(band(7962).LinearGradient, obj4)];
            const size2 = {
              id: null,
              maskUnits: "userSpaceOnUse",
              x: 0,
              y: 0,
              width: null,
              height: null,
              children: null,
            };
            const _HermesInternal2 = HermesInternal;
            size2.id = "" + tmp4 + "mask";
            size2.width = v24;
            size2.height = v24;
            const size3 = { animatedProps, y: 0, width, height: v24, fill: null };
            const _HermesInternal3 = HermesInternal;
            size3.fill = "url(#" + tmp4 + "band)";
            size2.children = closure_7(closure_18, size3);
            items2[1] = closure_7(band(7962).Mask, size2);
            obj3.children = items2;
            const items3 = [closure_8(band(7962).Defs, obj3)];
            const obj8 = { d: path, fill, mask: null };
            const _HermesInternal4 = HermesInternal;
            obj8.mask = "url(#" + tmp4 + "mask)";
            items3[1] = closure_7(band(7962).Path, obj8);
            tmp20[0] = items3;
            const tmp17 = closure_8(closure_9, tmp20);
          }
          cResult[6] = band;
          cResult[7] = animatedProps;
          cResult[8] = tmp4;
          cResult[9] = path;
          cResult[10] = tmp17;
          tmp16 = tmp17;
        }
        const obj9 = { d: path, fill: color };
        const tmp15 = closure_7(band(7962).Path, obj9);
        cResult[3] = color;
        cResult[4] = path;
        cResult[5] = tmp15;
        tmp13 = tmp15;
        const tmpResult = band(5052);
      }
      const obj = band(576);
    }
  : function WandPart(fill) {
      ({ path, size, band } = fill);
      const replaced = noop.useId().replace(/:/g, "");
      const str = noop.useId();
      const fn = function u() {
        let x;
        if (band != null) {
          x = band.get();
        }
        if (x == null) {
          x = c14;
        }
        return { x };
      };
      fn.__closure = { band, BAND_FROM };
      fn.__workletHash = 9301414249299;
      fn.__initData = __initData2;
      const animatedProps = band(5052).useAnimatedProps(fn);
      const size1 = { width: size, height: size, viewBox, children: null };
      const obj = band(5052);
      obj2 = { band, BAND_FROM };
      const items = [closure_7(band(7962).Path, { d: path, fill: fill.color })];
      let tmp5Result = null;
      if (null != band) {
        const obj3 = { children: null };
        const obj4 = { children: null };
        const obj5 = { id: null, x1: "0", y1: "0", x2: "1", y2: "0", children: null };
        const _HermesInternal = HermesInternal;
        obj5.id = "" + replaced + "band";
        const obj6 = { offset: "0", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
        const items1 = [closure_7(band(7962).Stop, obj6), ,];
        const obj7 = { offset: "0.5", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 1 };
        items1[1] = closure_7(band(7962).Stop, obj7);
        const obj8 = { offset: "1", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
        items1[2] = closure_7(band(7962).Stop, obj8);
        obj5.children = items1;
        const items2 = [closure_8(band(7962).LinearGradient, obj5)];
        const size2 = { id: null, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: null, height: null, children: null };
        const _HermesInternal2 = HermesInternal;
        size2.id = "" + replaced + "mask";
        size2.width = v24;
        size2.height = v24;
        const size3 = { animatedProps, y: 0, width, height: v24, fill: null };
        const _HermesInternal3 = HermesInternal;
        size3.fill = "url(#" + replaced + "band)";
        size2.children = closure_7(closure_18, size3);
        items2[1] = closure_7(band(7962).Mask, size2);
        obj4.children = items2;
        const items3 = [closure_8(band(7962).Defs, obj4)];
        const obj9 = { d: path, fill, mask: null };
        const _HermesInternal4 = HermesInternal;
        obj9.mask = "url(#" + replaced + "mask)";
        items3[1] = closure_7(band(7962).Path, obj9);
        obj3.children = items3;
        tmp5Result = closure_8(closure_9, obj3);
      }
      items[1] = tmp5Result;
      size1.children = items;
      return closure_8(inlineStylesDefault, size1);
    };
const __initData3 = {
  code: "function ConjureWorkingWandTsx4(){const{still,STILL,twinkle,small}=this.__closure;return still?STILL:twinkle(small.get());}",
};
const __initData4 = {
  code: "function ConjureWorkingWandTsx5(){const{still,STILL,twinkle,large}=this.__closure;return still?STILL:twinkle(large.get());}",
};
const __initData5 = {
  code: "function ConjureWorkingWandTsx6(){const{still,STILL,twinkle,small}=this.__closure;return still?STILL:twinkle(small.get());}",
};
const __initData6 = {
  code: "function ConjureWorkingWandTsx7(){const{still,STILL,twinkle,large}=this.__closure;return still?STILL:twinkle(large.get());}",
};
ReactCompilerGating = fn(558);
let obj7 = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PINK_40);
const size = fn(2);
const result6 = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureWorkingWand.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureWorkingWand(arg0) {
      const cResult = require("c").c(34);
      ({ size, paused } = arg0);
      closure_19(size);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function h() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj = require("c");
      const tmp4 = undefined !== paused && paused;
      const tmp9 = require("initialize").useStateFromStores(tmp6, tmp7) || tmp4;
      _require = tmp9;
      const tmpResult = require("initialize");
      const sharedValue = require("ReanimatedRexport").useSharedValue(0);
      const tmpResult6 = require("ReanimatedRexport");
      sharedValue1 = require("ReanimatedRexport").useSharedValue(1);
      const tmpResult7 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(c14);
      if (cResult[2] === sharedValue2) {
        if (cResult[3] === sharedValue1) {
          if (cResult[4] === sharedValue) {
            if (cResult[5] === tmp9) {
              let tmp13 = cResult[6];
              let tmp14 = cResult[7];
            }
            const effect = sharedValue2.useEffect(tmp13, tmp14);
            const fn2 = function $() {
              if (closure_0) {
                let obj = obj2;
              } else {
                value = sharedValue.get();
                if (typeof twinkle === "function") {
                  obj = { opacity: 0.35 + 0.65 * value, transform: null };
                  obj2 = { scale: 0.55 + 0.7 * value };
                  const items = [obj2];
                  const obj3 = { rotate: `${45 * tmp3}deg` };
                  items[1] = obj3;
                  obj.transform = items;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              return obj;
            };
            obj2 = { still: tmp9, STILL: null, twinkle: null, small: null };
            obj2.STILL = obj2;
            obj2.twinkle = twinkle;
            obj2.small = sharedValue;
            fn2.__closure = obj2;
            fn2.__workletHash = 3544281548002;
            fn2.__initData = __initData3;
            const animatedStyle = tmp(tmp2[4]).useAnimatedStyle(fn2);
            const tmpResult9 = tmp(tmp2[4]);
            const fn3 = function j() {
              if (closure_0) {
                let obj = obj2;
              } else {
                value = sharedValue1.get();
                if (typeof twinkle === "function") {
                  obj = { opacity: 0.35 + 0.65 * value, transform: null };
                  obj2 = { scale: 0.55 + 0.7 * value };
                  const items = [obj2];
                  const obj3 = { rotate: `${45 * tmp3}deg` };
                  items[1] = obj3;
                  obj.transform = items;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              return obj;
            };
            let obj3 = { still: tmp9, STILL: obj2, twinkle, large: sharedValue1 };
            fn3.__closure = obj3;
            fn3.__workletHash = 4983902861027;
            fn3.__initData = __initData4;
            const animatedStyle1 = tmp(tmp2[4]).useAnimatedStyle(fn3);
            let tmp23 = null;
            if (!tmp9) {
              tmp23 = sharedValue2;
            }
            class W {
              constructor() {
                if (paused) {
                  return;
                } else {
                  obj = { duration: 1000, easing: null };
                  tmp = closure_10;
                  obj.easing = closure_10;
                  tmp2 = closure_1;
                  num = 0;
                  result = closure_1.set(0);
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj2 = closure_0(closure_2[4]);
                  obj3 = closure_0(closure_2[12]);
                  num2 = 1;
                  flag = true;
                  num3 = -1;
                  result1 = closure_1.set(obj2.withRepeat(obj3.withTiming(1, obj), -1, true));
                  tmp7 = closure_2;
                  result2 = closure_2.set(1);
                  obj4 = closure_0(closure_2[4]);
                  obj5 = closure_0(closure_2[12]);
                  result3 = closure_2.set(obj4.withRepeat(obj5.withTiming(0, obj), -1, true));
                  tmp10 = closure_3;
                  tmp11 = c14;
                  result4 = closure_3.set(c14);
                  obj6 = closure_0(closure_2[4]);
                  obj7 = closure_0(closure_2[12]);
                  obj1 = { duration: 2000, easing: null };
                  obj1.easing = closure_0(closure_2[4]).Easing.linear;
                  num4 = 38.4;
                  flag2 = false;
                  result5 = closure_3.set(obj6.withRepeat(obj7.withTiming(38.4, obj1), -1, false));
                  return () => {
                    closure_0(sharedValue1[4]).cancelAnimation(sharedValue);
                    const obj = closure_0(sharedValue1[4]);
                    closure_0(sharedValue1[4]).cancelAnimation(closure_1_2);
                    obj2 = closure_0(sharedValue1[4]);
                    closure_0(sharedValue1[4]).cancelAnimation(sharedValue2);
                  };
                }
              }
            }
            let obj4 = { path: tmp(tmp2[13]).WAND_PATH, color, size, band: tmp23 };
            const tmp28 = closure_7(closure_24, obj4);
            cResult[8] = tmp23;
            cResult[9] = size;
            cResult[10] = tmp28;
            const tmpResult10 = tmp(tmp2[4]);
          }
        }
      }
      class W {
        constructor() {
          if (paused) {
            return;
          } else {
            obj = { duration: 1000, easing: null };
            tmp = closure_10;
            obj.easing = closure_10;
            tmp2 = closure_1;
            num = 0;
            result = closure_1.set(0);
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj2 = closure_0(closure_2[4]);
            obj3 = closure_0(closure_2[12]);
            num2 = 1;
            flag = true;
            num3 = -1;
            result1 = closure_1.set(obj2.withRepeat(obj3.withTiming(1, obj), -1, true));
            tmp7 = closure_2;
            result2 = closure_2.set(1);
            obj4 = closure_0(closure_2[4]);
            obj5 = closure_0(closure_2[12]);
            result3 = closure_2.set(obj4.withRepeat(obj5.withTiming(0, obj), -1, true));
            tmp10 = closure_3;
            tmp11 = c14;
            result4 = closure_3.set(c14);
            obj6 = closure_0(closure_2[4]);
            obj7 = closure_0(closure_2[12]);
            obj1 = { duration: 2000, easing: null };
            obj1.easing = closure_0(closure_2[4]).Easing.linear;
            num4 = 38.4;
            flag2 = false;
            result5 = closure_3.set(obj6.withRepeat(obj7.withTiming(38.4, obj1), -1, false));
            return () => {
              closure_0(sharedValue1[4]).cancelAnimation(sharedValue);
              const obj = closure_0(sharedValue1[4]);
              closure_0(sharedValue1[4]).cancelAnimation(closure_1_2);
              obj2 = closure_0(sharedValue1[4]);
              closure_0(sharedValue1[4]).cancelAnimation(sharedValue2);
            };
          }
        }
      }
      const items1 = [tmp9, sharedValue, sharedValue1, sharedValue2];
      cResult[2] = sharedValue2;
      cResult[3] = sharedValue1;
      cResult[4] = sharedValue;
      cResult[5] = tmp9;
      cResult[6] = W;
      cResult[7] = items1;
      tmp14 = items1;
      tmp13 = W;
      const tmpResult8 = require("ReanimatedRexport");
    }
  : function ConjureWorkingWand(arg0) {
      ({ size, paused } = arg0);
      if (paused === undefined) {
        paused = false;
      }
      _require = undefined;
      let sharedValue1;
      const tmp = closure_19(size);
      let items = [AccessibilityStore];
      const tmp4 = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion) || paused;
      _require = tmp4;
      let obj = require("initialize");
      const sharedValue = require("ReanimatedRexport").useSharedValue(0);
      const tmp2Result = require("ReanimatedRexport");
      sharedValue1 = require("ReanimatedRexport").useSharedValue(1);
      const tmp2Result5 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(c14);
      const items1 = [tmp4, sharedValue, sharedValue1, sharedValue2];
      const effect = sharedValue2.useEffect(() => {
        if (!closure_0) {
          let obj = { duration: 1000, easing };
          const result = sharedValue.set(0);
          obj2 = ReanimatedRexport2;
          const result1 = sharedValue.set(obj2.withRepeat(timing.withTiming(1, obj), -1, true));
          const result2 = sharedValue1.set(1);
          const obj4 = ReanimatedRexport2;
          const result3 = sharedValue1.set(obj4.withRepeat(timing.withTiming(0, obj), -1, true));
          const result4 = sharedValue2.set(c14);
          const obj6 = ReanimatedRexport2;
          const obj8 = { duration: 2000, easing: ReanimatedRexport2.Easing.linear };
          const result5 = sharedValue2.set(obj6.withRepeat(timing.withTiming(38.4, obj8), -1, false));
          return () => {
            closure_0(sharedValue1[4]).cancelAnimation(sharedValue);
            const obj = closure_0(sharedValue1[4]);
            closure_0(sharedValue1[4]).cancelAnimation(closure_1_2);
            obj2 = closure_0(sharedValue1[4]);
            closure_0(sharedValue1[4]).cancelAnimation(sharedValue2);
          };
        }
      }, items1);
      const tmp2Result6 = require("ReanimatedRexport");
      class A {
        constructor() {
          if (c0) {
            obj = closure_21;
          } else {
            tmp = twinkle;
            tmp2 = closure_1;
            value = closure_1.get();
            if (typeof twinkle === "function") {
              obj = { opacity: null, transform: null };
              num = 0.65;
              num2 = 0.35;
              obj.opacity = 0.35 + 0.65 * value;
              obj1 = { scale: null };
              num3 = 0.7;
              num4 = 0.55;
              obj1.scale = 0.55 + 0.7 * value;
              items = [,];
              items[0] = obj1;
              obj4 = { rotate: null };
              num5 = 45;
              str = "deg";
              obj4.rotate = `${45 * tmp3}deg`;
              items[1] = obj4;
              obj.transform = items;
            } else {
              str2 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          return obj;
        }
      }
      obj2 = { still: tmp4, STILL: obj2, twinkle, small: sharedValue };
      A.__closure = obj2;
      A.__workletHash = 10709532827232;
      A.__initData = __initData5;
      const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(A);
      const tmp2Result7 = require("ReanimatedRexport");
      class W {
        constructor() {
          if (c0) {
            obj = closure_21;
          } else {
            tmp = twinkle;
            tmp2 = closure_2;
            value = closure_2.get();
            if (typeof twinkle === "function") {
              obj = { opacity: null, transform: null };
              num = 0.65;
              num2 = 0.35;
              obj.opacity = 0.35 + 0.65 * value;
              obj1 = { scale: null };
              num3 = 0.7;
              num4 = 0.55;
              obj1.scale = 0.55 + 0.7 * value;
              items = [,];
              items[0] = obj1;
              obj4 = { rotate: null };
              num5 = 45;
              str = "deg";
              obj4.rotate = `${45 * tmp3}deg`;
              items[1] = obj4;
              obj.transform = items;
            } else {
              str2 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          return obj;
        }
      }
      W.__closure = { still: tmp4, STILL: obj2, twinkle, large: sharedValue1 };
      W.__workletHash = 3641232314465;
      W.__initData = __initData6;
      let tmp11 = null;
      const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(W);
      if (!tmp4) {
        tmp11 = sharedValue2;
      }
      let obj3 = { style: tmp.root, children: null };
      const tmp2Result8 = require("ReanimatedRexport");
      const items2 = [
        closure_7(closure_24, { path: require("conjureWandGeometry").WAND_PATH, color, size, band: tmp11 }),
        ,
      ];
      let obj5 = { style: null, children: null };
      const items3 = [closure_4.absoluteFill, tmp.sparkleSmall, animatedStyle];
      obj5.style = items3;
      let obj4 = { path: require("conjureWandGeometry").WAND_PATH, color, size, band: tmp11 };
      obj5.children = closure_7(closure_24, {
        path: require("conjureWandGeometry").SPARKLE_SMALL_PATH,
        color: color2,
        size,
        band: tmp11,
      });
      items2[1] = closure_7(sharedValue(sharedValue1[4]).View, obj5);
      const obj7 = { style: null, children: null };
      const items4 = [closure_4.absoluteFill, tmp.sparkleLarge, animatedStyle1];
      obj7.style = items4;
      let obj6 = { path: require("conjureWandGeometry").SPARKLE_SMALL_PATH, color: color2, size, band: tmp11 };
      obj7.children = closure_7(closure_24, {
        path: require("conjureWandGeometry").SPARKLE_LARGE_PATH,
        color: color2,
        size,
        band: tmp11,
      });
      items2[2] = closure_7(sharedValue(sharedValue1[4]).View, obj7);
      obj3.children = items2;
      return closure_8(closure_5, obj3);
    };
