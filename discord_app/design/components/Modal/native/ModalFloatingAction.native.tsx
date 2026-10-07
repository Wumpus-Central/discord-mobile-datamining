// === Module 10741: ModalFloatingAction ===

// Module 10741 (ModalFloatingAction)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["isVisible", "floatingBackgroundColor"];
get_ActivityIndicator = fn(17);
({ StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles({ floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 }, spacer: { height: 96 } });
const __initData = { code: "function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
const __initData2 = { code: "function ModalFloatingActionNativeTsx2(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((isVisible) => {
  const cResult = require("c").c(29);
  if (cResult[0] !== isVisible) {
    isVisible = isVisible.isVisible;
    importDefault = isVisible;
    const floatingBackgroundColor = isVisible.floatingBackgroundColor;
    _require = floatingBackgroundColor;
    const tmp9 = _objectWithoutProperties(isVisible, enabled);
    cResult[0] = isVisible;
    cResult[1] = tmp9;
    cResult[2] = floatingBackgroundColor;
    cResult[3] = isVisible;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
  }
  const tmp10 = closure_10();
  let obj = require("c");
  let num5 = 0;
  if (tmp6) {
    num5 = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num5);
  enabled = noop.useContext(tmp(tmp2[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp13 = require("useSafeAreaInsets")();
  if (cResult[4] === tmp6) {
    if (cResult[5] === sharedValue) {
      let tmp14 = cResult[6];
      let tmp15 = cResult[7];
    }
    const effect = noop.useEffect(tmp14, tmp15);
    const fn2 = function x() {
      const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: null };
      let num = 0;
      value = sharedValue.get();
      if (enabled) {
        num = 0.999999;
      }
      const obj4 = { translateY: null };
      const items = [num, 1];
      obj4.translateY = ReanimatedRexport.interpolate(value, items, [32, 0]);
      const items1 = [obj4];
      obj.transform = items1;
      return obj;
    };
    let obj2 = { interpolate: tmp(tmp2[7]).interpolate, sharedValue, floatingBackgroundColor: tmp5, useReducedMotion: enabled };
    fn2.__closure = obj2;
    fn2.__workletHash = 1679390676673;
    fn2.__initData = __initData;
    const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(fn2);
    if (cResult[8] !== tmp13.bottom) {
      let obj4 = { paddingBottom: tmp13.bottom };
      cResult[8] = tmp13.bottom;
      cResult[9] = obj4;
      let tmp19 = obj4;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] === animatedStyle) {
      if (cResult[11] === tmp10.floating) {
        if (cResult[12] === tmp19) {
          let tmp20 = cResult[13];
        }
        let str = "none";
        if (tmp6) {
          str = "auto";
        }
        if (cResult[14] !== tmp5) {
          const obj7 = tmp12(tmp2[12])(tmp5);
          const hexResult = tmp12(tmp2[12])(tmp5).alpha(0).hex();
          cResult[14] = tmp5;
          cResult[15] = hexResult;
          let tmp21 = hexResult;
          const alphaResult = tmp12(tmp2[12])(tmp5).alpha(0);
        } else {
          tmp21 = cResult[15];
        }
        if (cResult[16] === tmp5) {
          if (cResult[17] === tmp21) {
            let tmp23 = cResult[18];
          }
          const _Symbol = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [0, 0.5];
            cResult[19] = items;
            let tmp25 = items;
          } else {
            tmp25 = cResult[19];
          }
          if (cResult[20] !== tmp23) {
            const obj5 = { colors: tmp23, locations: tmp25, style: closure_6.absoluteFill };
            const tmp29 = closure_8(tmp12(tmp2[13]), obj5);
            cResult[20] = tmp23;
            cResult[21] = tmp29;
            let tmp26 = tmp29;
          } else {
            tmp26 = cResult[21];
          }
          if (cResult[22] !== tmp4) {
            const obj6 = {};
            const merged = Object.assign(tmp4);
            obj6.variant = "primary";
            const tmp35 = closure_8(tmp(tmp2[14]).ModalActionButton, obj6);
            cResult[22] = tmp4;
            cResult[23] = tmp35;
            let tmp30 = tmp35;
          } else {
            tmp30 = cResult[23];
          }
          if (cResult[24] === tmp26) {
            if (cResult[25] === tmp30) {
              if (cResult[26] === tmp20) {
                if (cResult[27] === str) {
                  let tmp36 = cResult[28];
                }
                return tmp36;
              }
            }
          }
          const obj8 = { style: tmp20, pointerEvents: str, children: null };
          let items1 = [tmp26, tmp30];
          obj8.children = items1;
          const tmp38 = closure_9(tmp12(tmp2[7]).View, obj8);
          cResult[24] = tmp26;
          cResult[25] = tmp30;
          cResult[26] = tmp20;
          cResult[27] = str;
          cResult[28] = tmp38;
          tmp36 = tmp38;
        }
        const items2 = [tmp21, tmp5];
        cResult[16] = tmp5;
        cResult[17] = tmp21;
        cResult[18] = items2;
        tmp23 = items2;
      }
    }
    const items3 = [animatedStyle, tmp10.floating, tmp19];
    cResult[10] = animatedStyle;
    cResult[11] = tmp10.floating;
    cResult[12] = tmp19;
    cResult[13] = items3;
    tmp20 = items3;
    const tmpResult2 = tmp(tmp2[7]);
  }
  const fn = function y() {
    let num = 0;
    if (closure_1) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  };
  const items4 = [tmp6, sharedValue];
  cResult[4] = tmp6;
  cResult[5] = sharedValue;
  cResult[6] = fn;
  cResult[7] = items4;
  tmp15 = items4;
  tmp14 = fn;
  const tmpResult = require("ReanimatedRexport");
}) : ((isVisible) => {
  isVisible = isVisible.isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const merged = Object.assign(isVisible, Object.assign({ isVisible: 0, floatingBackgroundColor: 0 }));
  let sharedValue;
  let enabled;
  const tmp2 = closure_10();
  let num = 0;
  if (isVisible) {
    num = 1;
  }
  sharedValue = isVisible(sharedValue[7]).useSharedValue(num);
  enabled = noop.useContext(tmp3(tmp4[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [isVisible, sharedValue];
  let obj = isVisible(sharedValue[7]);
  const effect = noop.useEffect(() => {
    let num = 0;
    if (isVisible) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const tmp7 = floatingBackgroundColor(sharedValue[9])();
  const fn = function y() {
    const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor: floatingBackgroundColor, borderBottomWidth: 16, transform: null };
    let num = 0;
    value = sharedValue.get();
    if (enabled) {
      num = 0.999999;
    }
    const obj4 = { translateY: null };
    const items = [num, 1];
    obj4.translateY = ReanimatedRexport.interpolate(value, items, [32, 0]);
    const items1 = [obj4];
    obj.transform = items1;
    return obj;
  };
  const tmp3Result = isVisible(sharedValue[7]);
  fn.__closure = { interpolate: isVisible(sharedValue[7]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  fn.__workletHash = 14144713836194;
  fn.__initData = __initData2;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  const obj3 = { style: null, pointerEvents: null, children: null };
  let items1 = [animatedStyle, tmp2.floating, { paddingBottom: tmp7.bottom }];
  obj3.style = items1;
  let str = "none";
  if (isVisible) {
    str = "auto";
  }
  obj3.pointerEvents = str;
  let obj4 = { colors: null, locations: null, style: null };
  let obj2 = { interpolate: isVisible(sharedValue[7]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  const tmp6Result = floatingBackgroundColor(sharedValue[13]);
  const obj6 = floatingBackgroundColor(sharedValue[12])(floatingBackgroundColor);
  const items2 = [floatingBackgroundColor(sharedValue[12])(floatingBackgroundColor).alpha(0).hex(), floatingBackgroundColor];
  obj4.colors = items2;
  obj4.locations = [0, 0.5];
  obj4.style = closure_6.absoluteFill;
  const items3 = [closure_8(tmp6Result, obj4), ];
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.variant = "primary";
  items3[1] = closure_8(isVisible(sharedValue[14]).ModalActionButton, obj5);
  obj3.children = items3;
  return closure_9(floatingBackgroundColor(sharedValue[7]).View, obj3);
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export const ModalFloatingAction = tmp4;
export const ModalFloatingActionSpacer = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_10();
  if (cResult[0] !== tmp2.spacer) {
    const obj2 = { style: tmp2.spacer };
    const tmp6 = closure_1_8(React5, obj2);
    cResult[0] = tmp2.spacer;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => closure_1_8(React5, { style: closure_10().spacer }));