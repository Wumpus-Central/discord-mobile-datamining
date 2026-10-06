// === Module 10741: ModalFloatingAction ===

// Module 10741 (ModalFloatingAction)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, isVisible, set;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["isVisible", "floatingBackgroundColor"];
({ StyleSheet: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 }, spacer: { height: 96 } });
const __initData = { code: "function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
const __initData2 = { code: "function ModalFloatingActionNativeTsx2(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((isVisible) => {
  let borderBottomColor;
  let closure_1;
  let enabled;
  let items1;
  let sharedValue;
  let tmp4;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(29);
  if (cResult[0] !== isVisible) {
    isVisible = isVisible.isVisible;
    importDefault = isVisible;
    const floatingBackgroundColor = isVisible.floatingBackgroundColor;
    _require = floatingBackgroundColor;
    const tmp9 = _objectWithoutProperties(isVisible, enabled);
    let num = 0;
    cResult[0] = isVisible;
    cResult[1] = tmp9;
    cResult[2] = floatingBackgroundColor;
    cResult[3] = isVisible;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
  }
  const tmp10 = closure_10();
  let num5 = 0;
  const useSharedValue = tmp(sharedValue[7]).useSharedValue;
  tmp(sharedValue[7]);
  if (tmp6) {
    num5 = 1;
  }
  sharedValue = useSharedValue(num5);
  enabled = react.useContext(tmp(tmp2[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp14 = require("useSafeAreaInsets")();
  if (cResult[4] === tmp6) {
    let tmp15;
    let tmp16;
    let tmp21;
    if (cResult[5] === sharedValue) {
      tmp15 = cResult[6];
      tmp16 = cResult[7];
    }
    const effect = react.useEffect(tmp15, tmp16);
    const fn2 = function x() {
      let items;
      let items1;
      let obj2;
      const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
      obj2 = ReanimatedRexport;
      const interpolate = ReanimatedRexport.interpolate;
      let num = 0;
      ReanimatedRexport;
      const value = sharedValue.get();
      if (enabled) {
        num = 0.999999;
      }
      const obj3 = { translateY: interpolate(value, items, [32, 0]) };
      items = [num, 1];
      items1 = [obj3];
      return obj;
    };
    let obj3 = { interpolate: tmp(sharedValue[7]).interpolate, sharedValue, floatingBackgroundColor: tmp5, useReducedMotion: enabled };
    const useAnimatedStyle = tmp(sharedValue[7]).useAnimatedStyle;
    tmp(sharedValue[7]);
    fn2.__closure = obj3;
    fn2.__workletHash = 1679390676673;
    fn2.__initData = __initData;
    const animatedStyle = useAnimatedStyle(fn2);
    if (cResult[8] !== tmp14.bottom) {
      const obj4 = { paddingBottom: tmp14.bottom };
      cResult[8] = tmp14.bottom;
      cResult[9] = obj4;
      tmp21 = obj4;
    } else {
      tmp21 = cResult[9];
    }
    if (cResult[10] === animatedStyle) {
      if (cResult[11] === tmp10.floating) {
        let tmp22;
        let tmp23;
        if (cResult[12] === tmp21) {
          tmp22 = cResult[13];
        }
        let str = "none";
        if (tmp6) {
          str = "auto";
        }
        if (cResult[14] !== tmp5) {
          const obj5 = require("module_683")(tmp5);
          const alphaResult = obj5.alpha(0);
          const hexResult = alphaResult.hex();
          cResult[14] = tmp5;
          cResult[15] = hexResult;
          tmp23 = hexResult;
        } else {
          tmp23 = cResult[15];
        }
        if (cResult[16] === tmp5) {
          let tmp25;
          let tmp27;
          let tmp28;
          let tmp32;
          if (cResult[17] === tmp23) {
            tmp25 = cResult[18];
          }
          const _Symbol = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [0, 0.5];
            cResult[19] = items;
            tmp27 = items;
          } else {
            tmp27 = cResult[19];
          }
          if (cResult[20] !== tmp25) {
            const obj6 = { colors: tmp25, locations: tmp27, style: closure_6.absoluteFill };
            const tmp31 = closure_8(require("LinearGradient"), obj6);
            cResult[20] = tmp25;
            cResult[21] = tmp31;
            tmp28 = tmp31;
          } else {
            tmp28 = cResult[21];
          }
          if (cResult[22] !== tmp4) {
            const obj7 = { variant: "primary" };
            const ModalActionButton = tmp(tmp2[14]).ModalActionButton;
            const merged = Object.assign(tmp4);
            const tmp37 = closure_8(ModalActionButton, obj7);
            cResult[22] = tmp4;
            cResult[23] = tmp37;
            tmp32 = tmp37;
          } else {
            tmp32 = cResult[23];
          }
          if (cResult[24] === tmp28) {
            if (cResult[25] === tmp32) {
              if (cResult[26] === tmp22) {
                let tmp38;
                if (cResult[27] === str) {
                  tmp38 = cResult[28];
                }
                return tmp38;
              }
            }
          }
          const obj8 = { style: tmp22, pointerEvents: str, children: items1 };
          items1 = [tmp28, tmp32];
          const tmp40 = closure_9(require("ReanimatedRexport").View, obj8);
          cResult[24] = tmp28;
          cResult[25] = tmp32;
          cResult[26] = tmp22;
          cResult[27] = str;
          cResult[28] = tmp40;
          tmp38 = tmp40;
        }
        const items2 = [tmp23, tmp5];
        cResult[16] = tmp5;
        cResult[17] = tmp23;
        cResult[18] = items2;
        tmp25 = items2;
      }
    }
    const items3 = [animatedStyle, tmp10.floating, tmp21];
    cResult[10] = animatedStyle;
    cResult[11] = tmp10.floating;
    cResult[12] = tmp21;
    cResult[13] = items3;
    tmp22 = items3;
  }
  const fn = function y() {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (closure_1) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  };
  const items4 = [tmp6, sharedValue];
  cResult[4] = tmp6;
  cResult[5] = sharedValue;
  cResult[6] = fn;
  cResult[7] = items4;
  tmp16 = items4;
  tmp15 = fn;
}) : ((isVisible) => {
  let items1;
  let items2;
  let items3;
  let str;
  isVisible = isVisible.isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const merged = Object.assign(isVisible, Object.assign({ isVisible: 0, floatingBackgroundColor: 0 }));
  let sharedValue;
  let enabled;
  const tmp4 = sharedValue;
  let num = 0;
  const tmp2 = closure_10();
  const useSharedValue = isVisible(sharedValue[7]).useSharedValue;
  isVisible(sharedValue[7]);
  if (isVisible) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  enabled = react.useContext(tmp3(tmp4[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [isVisible, sharedValue];
  const tmp8 = floatingBackgroundColor(tmp4[9])();
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (isVisible) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const fn = function y() {
    let items;
    let items1;
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor: floatingBackgroundColor, borderBottomWidth: 16, transform: items1 };
    obj2 = ReanimatedRexport;
    const interpolate = ReanimatedRexport.interpolate;
    let num = 0;
    ReanimatedRexport;
    const value = sharedValue.get();
    if (enabled) {
      num = 0.999999;
    }
    const obj3 = { translateY: interpolate(value, items, [32, 0]) };
    items = [num, 1];
    items1 = [obj3];
    return obj;
  };
  const tmp3Result = isVisible(tmp4[7]);
  let obj = { interpolate: tmp3(tmp4[7]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  fn.__closure = obj;
  fn.__workletHash = 14144713836194;
  fn.__initData = __initData2;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  let obj2 = { style: items1, pointerEvents: str, children: items3 };
  items1 = [animatedStyle, tmp2.floating, { paddingBottom: tmp8.bottom }];
  str = "none";
  const View = floatingBackgroundColor(tmp4[7]).View;
  if (isVisible) {
    str = "auto";
  }
  let obj3 = { colors: items2, locations: [0, 0.5], style: closure_6.absoluteFill };
  const tmp7Result = floatingBackgroundColor(tmp4[13]);
  items2 = [, ];
  const obj5 = floatingBackgroundColor(tmp4[12])(floatingBackgroundColor);
  const alphaResult = obj5.alpha(0);
  items2[0] = alphaResult.hex();
  items2[1] = floatingBackgroundColor;
  items3 = [closure_8(tmp7Result, obj3), ];
  const obj4 = { variant: "primary" };
  const ModalActionButton = tmp3(tmp4[14]).ModalActionButton;
  const merged1 = Object.assign(merged);
  items3[1] = closure_8(ModalActionButton, obj4);
  return closure_9(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_10();
  if (cResult[0] !== tmp2.spacer) {
    const obj2 = { style: tmp2.spacer };
    const tmp6 = metroImportAll(metroImportDefault, obj2);
    cResult[0] = tmp2.spacer;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = { style: closure_10().spacer };
  return metroImportAll(metroImportDefault, obj);
});
let result = size.fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export const ModalFloatingAction = tmp4;
export const ModalFloatingActionSpacer = tmp5;