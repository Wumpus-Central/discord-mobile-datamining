// discord_app/modules/conjure/title_bar/native/ConjureWorkingWand.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import inlineStylesDefault from "../../../../../_runtime/08023_inlineStyles.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function WandPart(fill) {
  ({ path, size, band } = fill);
  const replaced = noop.useId().replace(/:/g, "");
  const str = noop.useId();
  const fn = function u() {
    let x;
    if (band != null) {
      x = band.get();
    }
    if (x == null) {
      x = c11;
    }
    return { x };
  };
  fn.__closure = { band, BAND_FROM };
  fn.__workletHash = 10738212380370;
  fn.__initData = __initData;
  const animatedProps = band(5090).useAnimatedProps(fn);
  const size1 = { width: size, height: size, viewBox: "0 0 24 24", children: null };
  const obj = band(5090);
  obj2 = { band, BAND_FROM };
  const items = [closure_7(band(8023).Path, { d: path, fill: fill.color })];
  let tmp5Result = null;
  if (null != band) {
    const obj3 = { children: null };
    const obj4 = { children: null };
    const obj5 = { id: null, x1: "0", y1: "0", x2: "1", y2: "0", children: null };
    const _HermesInternal = HermesInternal;
    obj5.id = "" + replaced + "band";
    const obj6 = { offset: "0", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    const items1 = [closure_7(band(8023).Stop, obj6), ,];
    const obj7 = { offset: "0.5", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 1 };
    items1[1] = closure_7(band(8023).Stop, obj7);
    const obj8 = { offset: "1", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    items1[2] = closure_7(band(8023).Stop, obj8);
    obj5.children = items1;
    const items2 = [closure_8(band(8023).LinearGradient, obj5)];
    const size2 = { id: null, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 24, height: 24, children: null };
    const _HermesInternal2 = HermesInternal;
    size2.id = "" + replaced + "mask";
    const size3 = { animatedProps, y: 0, width: 19.200000000000003, height: 24, fill: null };
    const _HermesInternal3 = HermesInternal;
    size3.fill = "url(#" + replaced + "band)";
    size2.children = closure_7(closure_15, size3);
    items2[1] = closure_7(band(8023).Mask, size2);
    obj4.children = items2;
    const items3 = [closure_8(band(8023).Defs, obj4)];
    const obj9 = { d: path, fill, mask: null };
    const _HermesInternal4 = HermesInternal;
    obj9.mask = "url(#" + replaced + "mask)";
    items3[1] = closure_7(band(8023).Path, obj9);
    obj3.children = items3;
    tmp5Result = closure_8(closure_9, obj3);
  }
  items[1] = tmp5Result;
  size1.children = items;
  return closure_8(inlineStylesDefault, size1);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const Easing = fn(5090).Easing;
let closure_10 = Easing.bezier(0.42, 0, 0.58, 1);
let c11 = -33.6;
let result = _modDef671(nativeDefault.unsafe_rawColors.ILLO_PURPLE_40).set("oklch.l", "*0.95");
let result1 = result.set("oklch.c", "*0.8");
const color = result1.hex();
let obj = _modDef671(nativeDefault.unsafe_rawColors.ILLO_PURPLE_40);
let result2 = _modDef671(nativeDefault.unsafe_rawColors.ILLO_PURPLE_30).set("oklch.l", "*0.95");
let result3 = result2.set("oklch.c", "*0.8");
const color2 = result3.hex();
let obj4 = _modDef671(nativeDefault.unsafe_rawColors.ILLO_PURPLE_30);
let result4 = _modDef671(nativeDefault.unsafe_rawColors.ILLO_PINK_40).set("oklch.l", "*0.95");
let result5 = result4.set("oklch.c", "*0.8");
const fill = result5.hex();
let closure_15 = ReanimatedRexport.createAnimatedComponent(fn(8023).Rect);
const createStyles = fn(5009);
let closure_16 = createStyles.createStyles((width) => ({
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
  code: "function ConjureWorkingWandTsx3(){const{still,STILL,twinkle,small}=this.__closure;return still?STILL:twinkle(small.get());}",
};
const __initData3 = {
  code: "function ConjureWorkingWandTsx4(){const{still,STILL,twinkle,large}=this.__closure;return still?STILL:twinkle(large.get());}",
};
const size = fn(2);
const result6 = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureWorkingWand.tsx");

export default function ConjureWorkingWand(arg0) {
  ({ size, paused } = arg0);
  if (paused === undefined) {
    paused = false;
  }
  _require = undefined;
  let sharedValue1;
  const tmp = closure_16(size);
  let items = [AccessibilityStore];
  const tmp4 = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion) || paused;
  _require = tmp4;
  let obj = require("initialize");
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const tmp2Result = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(1);
  const tmp2Result5 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(c11);
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
      const result4 = sharedValue2.set(c11);
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
  class C {
    constructor() {
      if (c0) {
        obj = closure_18;
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
  C.__closure = obj2;
  C.__workletHash = 2076791891301;
  C.__initData = __initData2;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(C);
  const tmp2Result7 = require("ReanimatedRexport");
  const fn = function v() {
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
  fn.__closure = { still: tmp4, STILL: obj2, twinkle, large: sharedValue1 };
  fn.__workletHash = 10804017144546;
  fn.__initData = __initData3;
  let tmp11 = null;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(fn);
  if (!tmp4) {
    tmp11 = sharedValue2;
  }
  let obj3 = { style: tmp.root, children: null };
  const tmp2Result8 = require("ReanimatedRexport");
  const items2 = [closure_7(WandPart, { path: require("conjureWandGeometry").WAND_PATH, color, size, band: tmp11 }), ,];
  let obj5 = { style: null, children: null };
  const items3 = [closure_4.absoluteFill, tmp.sparkleSmall, animatedStyle];
  obj5.style = items3;
  let obj4 = { path: require("conjureWandGeometry").WAND_PATH, color, size, band: tmp11 };
  obj5.children = closure_7(WandPart, {
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
  obj7.children = closure_7(WandPart, {
    path: require("conjureWandGeometry").SPARKLE_LARGE_PATH,
    color: color2,
    size,
    band: tmp11,
  });
  items2[2] = closure_7(sharedValue(sharedValue1[4]).View, obj7);
  obj3.children = items2;
  return closure_8(closure_5, obj3);
}
