// === Module 14941: ConjureWorkingWand ===

// Module 14941 (ConjureWorkingWand)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import inlineStyles from "inlineStyles" /* 8176 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
const module_1652 = _mod1652;

require = fn;
function WandPart(fill) {
  ({ path, size, band } = fill);
  const replaced = noop.useId().replace(/:/g, "");
  const str = noop.useId();
  items = [closure_19, band, c11];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  class ConjureWorkingWandTsx2 {
    constructor() {
      obj = closure_0;
      value = undefined;
      if (closure_0 != null) {
        value = obj.get();
      }
      if (value == null) {
        value = closure_1;
      }
      return { x: value };
    }
  }
  const items1 = [tmp5, tmp6];
  ConjureWorkingWandTsx2.__closure = items1;
  ConjureWorkingWandTsx2.__workletHash = 15414694029355;
  ConjureWorkingWandTsx2.__initData = tmp4;
  const animatedProps = _mod1652.useAnimatedProps(ConjureWorkingWandTsx2);
  const size1 = { width: size, height: size, viewBox: "0 0 24 24", children: null };
  const items2 = [metroImportDefault(inlineStyles.Path, { d: path, fill: fill.color }), ];
  let tmp8Result = null;
  if (null != band) {
    obj2 = { children: null };
    const obj3 = { children: null };
    const obj4 = { id: null, x1: "0", y1: "0", x2: "1", y2: "0", children: null };
    const _HermesInternal = HermesInternal;
    obj4.id = "" + replaced + "band";
    const obj5 = { offset: "0", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    const items3 = [metroImportDefault(inlineStyles.Stop, obj5), , ];
    const obj6 = { offset: "0.5", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 1 };
    items3[1] = metroImportDefault(inlineStyles.Stop, obj6);
    const obj7 = { offset: "1", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    items3[2] = metroImportDefault(inlineStyles.Stop, obj7);
    class ConjureWorkingWandTsx2 {
      constructor() {
        obj = closure_0;
        value = undefined;
        if (closure_0 != null) {
          value = obj.get();
        }
        if (value == null) {
          value = closure_1;
        }
        return { x: value };
      }
    }
    const items4 = [React5(inlineStyles.LinearGradient, obj4), ];
    const size2 = { id: null, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 24, height: 24, children: null };
    const _HermesInternal2 = HermesInternal;
    size2.id = "" + replaced + "mask";
    const size3 = { animatedProps, y: 0, width: 19.200000000000003, height: 24, fill: null };
    const _HermesInternal3 = HermesInternal;
    size3.fill = "url(#" + replaced + "band)";
    size2.children = metroImportDefault(closure_15, size3);
    items4[1] = metroImportDefault(inlineStyles.Mask, size2);
    obj3.children = items4;
    const items5 = [React5(inlineStyles.Defs, obj3), ];
    const obj8 = { d: path, fill, mask: null };
    const _HermesInternal4 = HermesInternal;
    obj8.mask = "url(#" + replaced + "mask)";
    items5[1] = metroImportDefault(inlineStyles.Path, obj8);
    obj2.children = items5;
    tmp8Result = React5(React6, obj2);
  }
  items2[1] = tmp8Result;
  size1.children = items2;
  return React5(inlineStylesDefault, size1);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const Easing = fn(1652).Easing;
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
let closure_15 = module_1652.createAnimatedComponent(fn(8176).Rect);
const createStyles = fn(5143);
let closure_16 = createStyles.createStyles((width) => ({ root: { width, height: width }, sparkleSmall: { transformOrigin: "33.6% 18.6%" }, sparkleLarge: { transformOrigin: "75% 75%" } }));
let items = [{ code: "(function twinkle_ConjureWorkingWandTsx1(peak){return{opacity:0.35+0.65*peak,transform:[{scale:0.55+0.7*peak},{rotate:45*peak+\"deg\"}]};})" }];
[tmp4] = items;
function twinkle(arg0) {
  const obj = { opacity: 0.35 + 0.65 * arg0, transform: null };
  items = [{ scale: 0.55 + 0.7 * arg0 }, { rotate: `${45 * arg0}deg` }];
  obj.transform = items;
  return obj;
}
twinkle.__workletHash = 12293803237522;
twinkle.__initData = tmp4;
let obj2 = { opacity: 1, transform: null };
let items1 = [{ scale: 1 }, { rotate: "0deg" }];
obj2.transform = items1;
let closure_19 = { code: "(function ConjureWorkingWandTsx2(){let[band,BAND_FROM]=this.__closure;var _band$get,_band;return{x:(_band$get=(_band=band)===null||_band===void 0?void 0:_band.get())!==null&&_band$get!==void 0?_band$get:BAND_FROM};})" };
let closure_21 = { code: "(function ConjureWorkingWandTsx3(){let[still,STILL,twinkle,small]=this.__closure;return still?STILL:twinkle(small.get());})" };
let closure_22 = { code: "(function ConjureWorkingWandTsx4(){let[still,STILL,twinkle,large]=this.__closure;return still?STILL:twinkle(large.get());})" };
const size = fn(2);
const result6 = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureWorkingWand.tsx");

export default function ConjureWorkingWand(arg0) {
  ({ size, paused } = arg0);
  if (paused === undefined) {
    paused = false;
  }
  _require = undefined;
  const tmp = closure_16(size);
  items = [AccessibilityStore];
  const tmp4 = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion) || paused;
  _require = tmp4;
  let obj = require("initialize");
  const sharedValue = require("module_1652").useSharedValue(0);
  const tmp2Result = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(1);
  const tmp2Result5 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(c11);
  noop = sharedValue2;
  const items1 = [tmp4, sharedValue, sharedValue1, sharedValue2];
  const effect = noop.useEffect(() => {
    if (!c0) {
      let obj = { duration: 1000, easing };
      const result = _undefined.set(0);
      obj2 = _mod1652;
      const result1 = _undefined.set(obj2.withRepeat(timing_timing.withTiming(1, obj), -1, true));
      const result2 = _undefined2.set(1);
      const obj4 = _mod1652;
      const result3 = _undefined2.set(obj4.withRepeat(timing_timing.withTiming(0, obj), -1, true));
      const result4 = _undefined3.set(c11);
      const obj6 = _mod1652;
      const obj8 = { duration: 2000, easing: _mod1652.Easing.linear };
      const result5 = _undefined3.set(obj6.withRepeat(timing_timing.withTiming(38.4, obj8), -1, false));
      return () => {
        c0(1652).cancelAnimation(_undefined);
        const obj = c0(1652);
        c0(1652).cancelAnimation(dependencyMap);
        obj2 = c0(1652);
        c0(1652).cancelAnimation(_undefined3);
      };
    }
  }, items1);
  const tmp2Result6 = require("module_1652");
  const items2 = [closure_21, tmp4, obj2, twinkle, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class ConjureWorkingWandTsx3 {
    constructor() {
      if (closure_0) {
        tmp3 = closure_1;
      } else {
        tmp = closure_2;
        tmp2 = closure_3;
        tmp3 = closure_2(closure_3.get());
      }
      return tmp3;
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15];
  ConjureWorkingWandTsx3.__closure = items3;
  ConjureWorkingWandTsx3.__workletHash = 10450060011100;
  ConjureWorkingWandTsx3.__initData = tmp11;
  const animatedStyle = require("module_1652").useAnimatedStyle(ConjureWorkingWandTsx3);
  const tmp2Result7 = require("module_1652");
  const tmp9 = obj2;
  const items4 = [closure_22, tmp4, tmp9, twinkle, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21] = items4;
  class ConjureWorkingWandTsx4 {
    constructor() {
      if (closure_0) {
        tmp3 = closure_1;
      } else {
        tmp = closure_2;
        tmp2 = closure_3;
        tmp3 = closure_2(closure_3.get());
      }
      return tmp3;
    }
  }
  const items5 = [tmp18, tmp19, tmp20, tmp21];
  ConjureWorkingWandTsx4.__closure = items5;
  ConjureWorkingWandTsx4.__workletHash = 16092104502971;
  ConjureWorkingWandTsx4.__initData = tmp17;
  let tmp23 = null;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(ConjureWorkingWandTsx4);
  if (!tmp4) {
    tmp23 = sharedValue2;
  }
  obj2 = { style: tmp.root, children: null };
  const tmp2Result8 = require("module_1652");
  const items6 = [closure_7(WandPart, { path: require("conjureWandGeometry").WAND_PATH, color, size, band: tmp23 }), , ];
  let obj4 = { style: null, children: null };
  const items7 = [closure_4.absoluteFill, tmp.sparkleSmall, animatedStyle];
  obj4.style = items7;
  let obj3 = { path: require("conjureWandGeometry").WAND_PATH, color, size, band: tmp23 };
  obj4.children = closure_7(WandPart, { path: require("conjureWandGeometry").SPARKLE_SMALL_PATH, color: color2, size, band: tmp23 });
  items6[1] = closure_7(module_1652.View, obj4);
  let obj6 = { style: null, children: null };
  const items8 = [closure_4.absoluteFill, tmp.sparkleLarge, animatedStyle1];
  obj6.style = items8;
  let obj5 = { path: require("conjureWandGeometry").SPARKLE_SMALL_PATH, color: color2, size, band: tmp23 };
  obj6.children = closure_7(WandPart, { path: require("conjureWandGeometry").SPARKLE_LARGE_PATH, color: color2, size, band: tmp23 });
  items6[2] = closure_7(module_1652.View, obj6);
  obj2.children = items6;
  return closure_8(closure_5, obj2);
};