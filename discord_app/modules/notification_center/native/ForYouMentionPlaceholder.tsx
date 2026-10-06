// === Module 16399: ForYouMentionPlaceholder ===

// Module 16399 (ForYouMentionPlaceholder)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholder: { flexDirection: "row", marginBottom: 16, marginHorizontal: 24 }, placeholderImage: size, placeholderText: obj2, placeholderTextContainer: { flexDirection: "row", flexWrap: "wrap" }, placeholderBody: obj3 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 52, width: 52, borderRadius: 26, marginEnd: 12 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: nativeDefault.radii.sm, marginRight: 12, marginBottom: 4 };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: nativeDefault.radii.sm, marginTop: 4 };
let closure_7 = createStyles(obj);
let closure_8 = [70, 50];
const __initData = { code: "function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
const __initData2 = { code: "function ForYouMentionPlaceholderTsx2(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Easing;
  let items1;
  let items2;
  let items3;
  let placeholderText;
  let sharedValue;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let obj = require("react");
  const cResult = obj.c(22);
  const tmp4 = closure_7();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function p() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult5 = require("ReanimatedRexport");
  sharedValue = tmpResult5.useSharedValue(0.3);
  set = sharedValue.set;
  const withRepeat = require("ReanimatedRexport").withRepeat;
  require("ReanimatedRexport");
  const obj2 = { duration: 1000, easing: Easing.inOut(require("ReanimatedRexport").Easing.ease) };
  const withTiming = require("timing").withTiming;
  require("timing");
  Easing = tmp(tmp2[9]).Easing;
  const result = set(withRepeat(withTiming(0.7, obj2), -1, true));
  const fn2 = function w() {
    let opacity = 0.7;
    if (!stateFromStores) {
      opacity = sharedValue.get();
    }
    return { opacity };
  };
  fn2.__closure = { reducedMotion: stateFromStores, opacity: sharedValue };
  fn2.__workletHash = 8828208724188;
  fn2.__initData = __initData;
  const tmpResult8 = require("ReanimatedRexport");
  const animatedStyle = tmpResult8.useAnimatedStyle(fn2);
  if (cResult[2] === animatedStyle) {
    let tmp14;
    let tmp15;
    let tmp19;
    if (cResult[3] === tmp4.placeholder) {
      tmp14 = cResult[4];
    }
    if (cResult[5] !== tmp4.placeholderImage) {
      const obj3 = { style: tmp4.placeholderImage };
      const tmp18 = closure_5(View, obj3);
      cResult[5] = tmp4.placeholderImage;
      cResult[6] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[6];
    }
    const placeholderTextContainer = tmp4.placeholderTextContainer;
    if (cResult[7] !== tmp4.placeholderText) {
      const mapped = closure_8.map((item, index) => {
        let items;
        const obj = { style: items };
        items = [placeholderText.placeholderText, { width: "" + item + "%" }];
        ({ width: "" + item + "%" });
        return hasOwnProperty(View, obj, index);
      });
      cResult[7] = tmp4.placeholderText;
      cResult[8] = mapped;
      tmp19 = mapped;
    } else {
      tmp19 = cResult[8];
    }
    if (cResult[9] === tmp4.placeholderTextContainer) {
      let tmp22;
      let tmp26;
      let tmp27;
      if (cResult[10] === tmp19) {
        tmp22 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { width: "85%" };
        cResult[12] = obj4;
        tmp26 = obj4;
      } else {
        tmp26 = cResult[12];
      }
      if (cResult[13] !== tmp4.placeholderBody) {
        const obj5 = { style: items1 };
        items1 = [tmp4.placeholderBody, tmp26];
        const tmp30 = closure_5(View, obj5);
        cResult[13] = tmp4.placeholderBody;
        cResult[14] = tmp30;
        tmp27 = tmp30;
      } else {
        tmp27 = cResult[14];
      }
      if (cResult[15] === tmp22) {
        let tmp31;
        if (cResult[16] === tmp27) {
          tmp31 = cResult[17];
        }
        if (cResult[18] === tmp14) {
          if (cResult[19] === tmp15) {
            let tmp35;
            if (cResult[20] === tmp31) {
              tmp35 = cResult[21];
            }
            return tmp35;
          }
        }
        const obj6 = { style: tmp14, children: items2 };
        items2 = [tmp15, tmp31];
        const tmp38 = closure_6(stateFromStores(sharedValue[9]).View, obj6);
        cResult[18] = tmp14;
        cResult[19] = tmp15;
        cResult[20] = tmp31;
        cResult[21] = tmp38;
        tmp35 = tmp38;
      }
      const obj7 = { children: items3 };
      items3 = [tmp22, tmp27];
      const tmp34 = closure_6(View, obj7);
      cResult[15] = tmp22;
      cResult[16] = tmp27;
      cResult[17] = tmp34;
      tmp31 = tmp34;
    }
    const obj8 = { style: placeholderTextContainer, children: tmp19 };
    const tmp25 = closure_5(View, obj8);
    cResult[9] = tmp4.placeholderTextContainer;
    cResult[10] = tmp19;
    cResult[11] = tmp25;
    tmp22 = tmp25;
  }
  const items4 = [tmp4.placeholder, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.placeholder;
  cResult[4] = items4;
  tmp14 = items4;
}) : (() => {
  let Easing;
  let items1;
  let items2;
  let items3;
  let items4;
  let placeholderText;
  let sharedValue;
  let useReducedMotion;
  const tmp = closure_7();
  _require = tmp;
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(0.3);
  set = sharedValue.set;
  const withRepeat = require("ReanimatedRexport").withRepeat;
  require("ReanimatedRexport");
  const obj3 = { duration: 1000, easing: Easing.inOut(require("ReanimatedRexport").Easing.ease) };
  const withTiming = require("timing").withTiming;
  require("timing");
  Easing = require("ReanimatedRexport").Easing;
  const result = set(withRepeat(withTiming(0.7, obj3), -1, true));
  const fn = function _() {
    let opacity = 0.7;
    if (!stateFromStores) {
      opacity = sharedValue.get();
    }
    return { opacity };
  };
  fn.__closure = { reducedMotion: stateFromStores, opacity: sharedValue };
  fn.__workletHash = 7600819172511;
  fn.__initData = __initData2;
  const obj4 = require("ReanimatedRexport");
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = { style: items1, children: items2 };
  items1 = [tmp.placeholder, animatedStyle];
  const obj6 = { style: tmp.placeholderImage };
  View = stateFromStores(sharedValue[9]).View;
  items2 = [closure_5(View, obj6), ];
  const obj7 = { children: items3 };
  items3 = [, ];
  const obj8 = {
    style: tmp.placeholderTextContainer,
    children: closure_8.map((item, index) => {
      let items;
      const obj = { style: items };
      items = [placeholderText.placeholderText, { width: "" + item + "%" }];
      ({ width: "" + item + "%" });
      return hasOwnProperty(View, obj, index);
    })
  };
  items3[0] = closure_5(View, obj8);
  const obj9 = { style: items4 };
  items4 = [tmp.placeholderBody, { width: "85%" }];
  items3[1] = closure_5(View, obj9);
  items2[1] = closure_6(View, obj7);
  return closure_6(View, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export const ForYouMentionPlaceholder = tmp5;