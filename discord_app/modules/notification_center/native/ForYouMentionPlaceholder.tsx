// === Module 16783: ForYouMentionPlaceholder ===

// Module 16783 (ForYouMentionPlaceholder)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { placeholder: { flexDirection: "row", marginBottom: 16, marginHorizontal: 24 }, placeholderImage: null, placeholderText: null, placeholderTextContainer: null, placeholderBody: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 52, width: 52, borderRadius: 26, marginEnd: 12 };
obj2.placeholderImage = size;
obj2.placeholderText = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: nativeDefault.radii.sm, marginRight: 12, marginBottom: 4 };
obj2.placeholderTextContainer = { flexDirection: "row", flexWrap: "wrap" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: nativeDefault.radii.sm, marginRight: 12, marginBottom: 4 };
obj2.placeholderBody = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: nativeDefault.radii.sm, marginTop: 4 };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = [70, 50];
const __initData = { code: "function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
const __initData2 = { code: "function ForYouMentionPlaceholderTsx2(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: nativeDefault.radii.sm, marginTop: 4 };
size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export const ForYouMentionPlaceholder = ReactCompilerGating.isReactCompilerEnabled() ? (function ForYouMentionPlaceholder() {
  const cResult = require("c").c(22);
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
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  const tmpResult = require("initialize");
  sharedValue = require("ReanimatedRexport").useSharedValue(0.3);
  const tmpResult5 = require("ReanimatedRexport");
  const tmpResult6 = require("ReanimatedRexport");
  const obj2 = { duration: 1000, easing: null };
  const Easing = tmp(tmp2[9]).Easing;
  obj2.easing = Easing.inOut(require("ReanimatedRexport").Easing.ease);
  const result = sharedValue.set(tmpResult6.withRepeat(require("timing").withTiming(0.7, obj2), -1, true));
  const tmpResult7 = require("timing");
  class T {
    constructor() {
      opacity = 0.7;
      if (!closure_1) {
        tmp = closure_2;
        opacity = closure_2.get();
      }
      return { opacity };
    }
  }
  T.__closure = { reducedMotion: stateFromStores, opacity: sharedValue };
  T.__workletHash = 8828208724188;
  T.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(T);
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp4.placeholder) {
      let tmp11 = cResult[4];
    }
    if (cResult[5] !== tmp4.placeholderImage) {
      const obj3 = { style: tmp4.placeholderImage };
      const tmp15 = closure_5(View, obj3);
      cResult[5] = tmp4.placeholderImage;
      cResult[6] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== tmp4.placeholderText) {
      const mapped = closure_8.map((item, index) => {
        const obj = { style: null };
        const items = [placeholderText.placeholderText, { width: "" + item + "%" }];
        obj.style = items;
        return hasOwnProperty(View, obj, index);
      });
      cResult[7] = tmp4.placeholderText;
      cResult[8] = mapped;
      let tmp16 = mapped;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp4.placeholderTextContainer) {
      if (cResult[10] === tmp16) {
        let tmp19 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { width: "85%" };
        cResult[12] = obj4;
        let tmp23 = obj4;
      } else {
        tmp23 = cResult[12];
      }
      if (cResult[13] !== tmp4.placeholderBody) {
        const obj5 = { style: null };
        const items1 = [tmp4.placeholderBody, tmp23];
        obj5.style = items1;
        const tmp27 = closure_5(View, obj5);
        cResult[13] = tmp4.placeholderBody;
        cResult[14] = tmp27;
        let tmp24 = tmp27;
      } else {
        tmp24 = cResult[14];
      }
      if (cResult[15] === tmp19) {
        if (cResult[16] === tmp24) {
          let tmp28 = cResult[17];
        }
        if (cResult[18] === tmp11) {
          if (cResult[19] === tmp12) {
            if (cResult[20] === tmp28) {
              let tmp32 = cResult[21];
            }
            return tmp32;
          }
        }
        const obj6 = { style: tmp11, children: null };
        const items2 = [tmp12, tmp28];
        obj6.children = items2;
        const tmp35 = closure_6(stateFromStores(tmp2[9]).View, obj6);
        cResult[18] = tmp11;
        cResult[19] = tmp12;
        cResult[20] = tmp28;
        cResult[21] = tmp35;
        tmp32 = tmp35;
      }
      const obj7 = { children: null };
      const items3 = [tmp19, tmp24];
      obj7.children = items3;
      const tmp31 = closure_6(View, obj7);
      cResult[15] = tmp19;
      cResult[16] = tmp24;
      cResult[17] = tmp31;
      tmp28 = tmp31;
    }
    const obj8 = { style: tmp4.placeholderTextContainer, children: tmp16 };
    const tmp22 = closure_5(View, obj8);
    cResult[9] = tmp4.placeholderTextContainer;
    cResult[10] = tmp16;
    cResult[11] = tmp22;
    tmp19 = tmp22;
  }
  const items4 = [tmp4.placeholder, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.placeholder;
  cResult[4] = items4;
  tmp11 = items4;
  const tmpResult8 = require("ReanimatedRexport");
}) : (function ForYouMentionPlaceholder() {
  const tmp = closure_7();
  _require = tmp;
  let items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  sharedValue = require("ReanimatedRexport").useSharedValue(0.3);
  const obj2 = require("ReanimatedRexport");
  const obj4 = require("ReanimatedRexport");
  const obj3 = { duration: 1000, easing: null };
  const Easing = require("ReanimatedRexport").Easing;
  obj3.easing = Easing.inOut(require("ReanimatedRexport").Easing.ease);
  const result = sharedValue.set(obj4.withRepeat(require("timing").withTiming(0.7, obj3), -1, true));
  const obj5 = require("timing");
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
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const obj6 = { style: null, children: null };
  const items1 = [tmp.placeholder, animatedStyle];
  obj6.style = items1;
  const items2 = [closure_5(View, { style: tmp.placeholderImage }), ];
  const obj9 = { children: null };
  const obj7 = require("ReanimatedRexport");
  const obj8 = { style: tmp.placeholderImage };
  const items3 = [
    closure_5(View, {
      style: tmp.placeholderTextContainer,
      children: closure_8.map((item, index) => {
        const obj = { style: null };
        const items = [placeholderText.placeholderText, { width: "" + item + "%" }];
        obj.style = items;
        return hasOwnProperty(View, obj, index);
      })
    }),

  ];
  const obj11 = { style: null };
  const items4 = [tmp.placeholderBody, { width: "85%" }];
  obj11.style = items4;
  items3[1] = closure_5(View, obj11);
  obj9.children = items3;
  items2[1] = closure_6(View, obj9);
  obj6.children = items2;
  return closure_6(stateFromStores(sharedValue[9]).View, obj6);
});