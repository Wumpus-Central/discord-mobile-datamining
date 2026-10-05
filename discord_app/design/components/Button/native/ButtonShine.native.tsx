// === Module 5604: ButtonShine ===

// Module 5604 (ButtonShine)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let _require, num, num2, num3, obj1, obj9, str, tmp12, tmp13, tmp4, tmp8, tmp9, variant;

const jsx = Fragment.jsx;
let c6 = 2000;
let c7 = 750;
let c8 = 120;
let c9 = 56;
const __initData = { code: "function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},\"animate-always\"),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},\"animate-always\"))),-1)}]};}" };
const __initData2 = { code: "function ButtonShineNativeTsx2(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((width, arg1) => {
  let enabled;
  let items;
  _require = width;
  let obj = require("react");
  const cResult = obj.c(3);
  let obj2 = require("ButtonHooks");
  const buttonTextColorStyles = obj2.useButtonTextColorStyles(arg1);
  let obj3 = enabled(683)(buttonTextColorStyles.color);
  const alphaResult = obj3.alpha(0.1);
  const hexResult = alphaResult.hex();
  enabled = react.useContext(require("shared").AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj5 = require("ReanimatedRexport");
  class I {
    constructor() {
      tmp = closure_0;
      if (null == closure_0) {
        obj1 = { transform: null };
        items = [];
        items[0] = { translateX: -120 };
        obj1.transform = items;
        tmp11 = obj1;
      } else {
        tmp13 = enabled;
        obj7 = { transform: null };
        obj8 = { translateX: null };
        if (enabled) {
          tmp12 = c9;
          num3 = 2;
          obj8.translateX = (tmp - c9) / 2;
          items1 = [];
          items1[0] = obj8;
          obj7.transform = items1;
          tmp11 = obj7;
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
          tmp4 = closure_0(closure_2[8]);
          withRepeat = tmp4.withRepeat;
          tmp5 = closure_0(closure_2[8]);
          withSequence = tmp5.withSequence;
          obj = closure_0(closure_2[9]);
          str = "animate-always";
          num = -120;
          withTimingResult = obj.withTiming(-120, { duration: 0 }, "animate-always");
          tmp7 = closure_0(closure_2[8]);
          tmp8 = c7;
          withDelay = tmp7.withDelay;
          obj2 = closure_0(closure_2[9]);
          tmp9 = c8;
          obj9 = { duration: null };
          tmp10 = c6;
          obj9.duration = c6;
          num2 = -1;
          obj8.translateX = withRepeat(withSequence(withTimingResult, withDelay(c7, obj2.withTiming(tmp + c8, obj9, "animate-always"))), -1);
          items2 = [];
          items2[0] = obj8;
          obj7.transform = items2;
          tmp11 = obj7;
        }
      }
      return tmp11;
    }
  }
  let obj4 = { width, SHINE_OFFSCREEN_OFFSET, useReducedMotion: enabled, SHINE_WIDTH: v56, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, withDelay: require("ReanimatedRexport").withDelay, SHINE_INITIAL_ANIMATION_DELAY, SHINE_ANIMATION_DURATION: v2000 };
  I.__closure = obj4;
  I.__workletHash = 15798233523302;
  I.__initData = __initData;
  const animatedStyle = obj5.useAnimatedStyle(I);
  let obj6 = { shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: size, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } };
  size = { width: v56, height: "500%", transform: items, backgroundColor: hexResult, top: "-100%", alignItems: "center" };
  items = [{ rotate: "30deg" }];
  const obj7 = require("createStyles");
  const tmp5 = obj7.createStyles(obj6)();
  if (cResult[0] === animatedStyle) {
    let tmp6;
    if (cResult[1] === tmp5) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const obj8 = { shineStyles: tmp5, shineAnimatedStyle: animatedStyle };
  cResult[0] = animatedStyle;
  cResult[1] = tmp5;
  cResult[2] = obj8;
  tmp6 = obj8;
}) : ((width, arg1) => {
  let animatedStyle;
  let enabled;
  let items;
  let obj6;
  let obj7;
  _require = width;
  let obj = require("ButtonHooks");
  const buttonTextColorStyles = obj.useButtonTextColorStyles(arg1);
  let obj2 = enabled(683)(buttonTextColorStyles.color);
  const alphaResult = obj2.alpha(0.1);
  const hexResult = alphaResult.hex();
  enabled = react.useContext(require("shared").AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj4 = require("ReanimatedRexport");
  const fn = function u() {
    let items;
    let tmp11;
    if (null == width) {
      const obj3 = { transform: items };
      items = [{ translateX: -120 }];
      tmp11 = obj3;
    } else {
      const obj4 = { transform: null };
      const obj5 = { translateX: null };
      if (enabled) {
        obj5.translateX = (width - c9) / 2;
        const items1 = [obj5];
        obj4.transform = items1;
        tmp11 = obj4;
      } else {
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj = timing;
        const withTimingResult = obj.withTiming(-120, { duration: 0 }, "animate-always");
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const obj6 = { duration };
        const obj2 = timing;
        obj5.translateX = withRepeat(withSequence(withTimingResult, withDelay(c7, obj2.withTiming(width + c8, obj6, "animate-always"))), -1);
        const items2 = [obj5];
        obj4.transform = items2;
        tmp11 = obj4;
      }
    }
    return tmp11;
  };
  let obj3 = { width, SHINE_OFFSCREEN_OFFSET, useReducedMotion: enabled, SHINE_WIDTH: v56, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, withDelay: require("ReanimatedRexport").withDelay, SHINE_INITIAL_ANIMATION_DELAY, SHINE_ANIMATION_DURATION: v2000 };
  fn.__closure = obj3;
  fn.__workletHash = 12562385961925;
  fn.__initData = __initData2;
  let obj5 = { shineStyles: obj7.createStyles(obj6)(), shineAnimatedStyle: animatedStyle };
  animatedStyle = obj4.useAnimatedStyle(fn);
  obj6 = { shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: size, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } };
  size = { width: v56, height: "500%", transform: items, backgroundColor: hexResult, top: "-100%", alignItems: "center" };
  items = [{ rotate: "30deg" }];
  obj7 = require("createStyles");
  return obj5;
});
let closure_12 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  let first;
  let shineAnimatedStyle;
  let shineStyles;
  const obj = react2;
  const cResult = obj.c(12);
  variant = variant.variant;
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_0 = tmp3[1];
  ({ shineStyles, shineAnimatedStyle } = closure_12(tmp3[0], variant));
  closure_12(tmp3[0], variant);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      return closure_0(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === shineAnimatedStyle) {
    let tmp6;
    let tmp7;
    if (cResult[2] === shineStyles.shineContainer) {
      tmp6 = cResult[3];
    }
    if (cResult[4] !== shineStyles.shineInner) {
      const tmp10 = jsx(ReanimatedRexportDefault.View, { style: shineStyles.shineInner });
      cResult[4] = shineStyles.shineInner;
      cResult[5] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[5];
    }
    if (cResult[6] === shineStyles.shine) {
      let tmp11;
      if (cResult[7] === tmp7) {
        tmp11 = cResult[8];
      }
      if (cResult[9] === tmp6) {
        let tmp15;
        if (cResult[10] === tmp11) {
          tmp15 = cResult[11];
        }
        return tmp15;
      }
      const tmp18 = jsx(ReanimatedRexportDefault.View, { onLayout: first, style: tmp6, children: tmp11 });
      cResult[9] = tmp6;
      cResult[10] = tmp11;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
    const tmp14 = jsx(ReanimatedRexportDefault.View, { style: shineStyles.shine, children: tmp7 });
    cResult[6] = shineStyles.shine;
    cResult[7] = tmp7;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const items = [shineStyles.shineContainer, shineAnimatedStyle];
  cResult[1] = shineAnimatedStyle;
  cResult[2] = shineStyles.shineContainer;
  cResult[3] = items;
  tmp6 = items;
}) : ((variant) => {
  variant = variant.variant;
  const tmp = _slicedToArray(react.useState(null), 2);
  let closure_0 = tmp[1];
  const tmp2 = closure_12(tmp[0], variant);
  const shineStyles = tmp2.shineStyles;
  const items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  const View = ReanimatedRexportDefault.View;
  const View2 = ReanimatedRexportDefault.View;
  return <View onLayout={function onLayout(nativeEvent) {
    return closure_0(nativeEvent.nativeEvent.layout.width);
  }} style={items}>{null}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export const useShineEffectStyles = tmp2;
export const ButtonShine = tmp3;