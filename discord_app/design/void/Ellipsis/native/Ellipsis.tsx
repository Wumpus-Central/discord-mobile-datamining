// === Module 13905: Ellipsis ===

// Module 13905 (Ellipsis)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let c7 = 350;
let c8 = 233.33333333333334;
let c9 = 116.66666666666667;
let c10 = 0.4;
let c11 = 0.75;
let obj = { typingIndicator: { justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 4 }, typingIndicatorDot: size };
size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, marginRight: 2, height: 6, width: 6 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = { code: "function animateValue_EllipsisTsx1(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}" };
const __initData = { code: "function EllipsisTsx2(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}" };
let closure_15 = { code: "function animateValue_EllipsisTsx3(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}" };
const __initData2 = { code: "function EllipsisTsx4(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((delay) => {
  let disableScale;
  let dotStyle;
  let sequenceStartDelay;
  const tmp2 = sequenceStartDelay;
  let obj = disableScale(sequenceStartDelay[7]);
  const cResult = obj.c(12);
  ({ dotStyle, disableScale } = delay);
  delay = delay.delay;
  sequenceStartDelay = delay.sequenceStartDelay;
  const sequenceEndDelay = delay.sequenceEndDelay;
  const tmp4 = closure_12();
  let obj2 = disableScale(sequenceStartDelay[8]);
  const sharedValue = obj2.useSharedValue(c10);
  let obj3 = disableScale(sequenceStartDelay[8]);
  const sharedValue1 = obj3.useSharedValue(c11);
  if (cResult[0] === delay) {
    if (cResult[1] === disableScale) {
      if (cResult[2] === sharedValue) {
        if (cResult[3] === sharedValue1) {
          if (cResult[4] === sequenceEndDelay) {
            let tmp7;
            let tmp8;
            if (cResult[5] === sequenceStartDelay) {
              tmp7 = cResult[6];
              tmp8 = cResult[7];
            }
            const effect = sequenceEndDelay.useEffect(tmp7, tmp8);
            const fn2 = function v() {
              let tmp;
              const obj = { opacity: sharedValue.get(), transform: tmp };
              tmp = undefined;
              if (!disableScale) {
                const items = [{ scale: sharedValue1.get() }];
                tmp = items;
                const obj2 = { scale: sharedValue1.get() };
              }
              return obj;
            };
            let obj4 = { opacityValue: sharedValue, disableScale, scaleValue: sharedValue1 };
            fn2.__closure = obj4;
            fn2.__workletHash = 5071157079925;
            fn2.__initData = __initData;
            const tmpResult = disableScale(tmp2[8]);
            const animatedStyle = tmpResult.useAnimatedStyle(fn2);
            if (cResult[8] === animatedStyle) {
              if (cResult[9] === dotStyle) {
                let tmp13;
                if (cResult[10] === tmp4.typingIndicatorDot) {
                  tmp13 = cResult[11];
                }
                return tmp13;
              }
            }
            let items = [tmp4.typingIndicatorDot, dotStyle, animatedStyle];
            const tmp16 = jsx(delay(tmp2[8]).View, { style: items });
            cResult[8] = animatedStyle;
            cResult[9] = dotStyle;
            cResult[10] = tmp4.typingIndicatorDot;
            cResult[11] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
    }
  }
  const fn = function n() {
    function animateValue(sharedValue, c10, arg2) {
      set = sharedValue.set;
      const withRepeat = disableScale(sequenceStartDelay[8]).withRepeat;
      disableScale(sequenceStartDelay[8]);
      const withSequence = disableScale(sequenceStartDelay[8]).withSequence;
      disableScale(sequenceStartDelay[8]);
      const withDelay = disableScale(sequenceStartDelay[8]).withDelay;
      disableScale(sequenceStartDelay[8]);
      const obj = disableScale(sequenceStartDelay[9]);
      const withDelayResult = withDelay(closure_1_2, obj.withTiming(c10, { duration: 0 }));
      const withDelay2 = disableScale(sequenceStartDelay[8]).withDelay;
      disableScale(sequenceStartDelay[8]);
      const withSequence2 = disableScale(sequenceStartDelay[8]).withSequence;
      disableScale(sequenceStartDelay[8]);
      const obj2 = disableScale(sequenceStartDelay[9]);
      const obj3 = { duration };
      const withTimingResult = obj2.withTiming(arg2, obj3);
      const obj4 = disableScale(sequenceStartDelay[9]);
      const obj5 = { duration };
      const withDelay2Result = withDelay2(delay, withSequence2(withTimingResult, obj4.withTiming(c10, obj5)));
      const withDelay3 = disableScale(sequenceStartDelay[8]).withDelay;
      disableScale(sequenceStartDelay[8]);
      const obj6 = disableScale(sequenceStartDelay[9]);
      const result = set(withRepeat(withSequence(withDelayResult, withDelay2Result, withDelay3(sequenceEndDelay, obj6.withTiming(c10, { duration: 0 }))), -1));
    }
    let obj = { withRepeat: ReanimatedRexport.withRepeat, withSequence: ReanimatedRexport.withSequence, withDelay: ReanimatedRexport.withDelay, sequenceStartDelay, withTiming: timing.withTiming, delay, animationTimeMs, sequenceEndDelay };
    animateValue.__closure = obj;
    animateValue.__workletHash = 13305770376274;
    animateValue.__initData = __initData;
    animateValue(sharedValue, c10, 1);
    if (!disableScale) {
      animateValue(sharedValue1, c11, 1);
    }
    return () => {
      const obj = disableScale(sequenceStartDelay[8]);
      obj.cancelAnimation(sharedValue);
      const obj2 = disableScale(sequenceStartDelay[8]);
      obj2.cancelAnimation(sharedValue1);
    };
  };
  const items1 = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  cResult[0] = delay;
  cResult[1] = disableScale;
  cResult[2] = sharedValue;
  cResult[3] = sharedValue1;
  cResult[4] = sequenceEndDelay;
  cResult[5] = sequenceStartDelay;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((disableScale) => {
  disableScale = disableScale.disableScale;
  const delay = disableScale.delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  const dotStyle = disableScale.dotStyle;
  let tmp = closure_12();
  let obj = disableScale(sequenceStartDelay[8]);
  const sharedValue = obj.useSharedValue(c10);
  let obj2 = disableScale(sequenceStartDelay[8]);
  const sharedValue1 = obj2.useSharedValue(c11);
  let items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = sequenceEndDelay.useEffect(() => {
    function animateValue(sharedValue, c10, arg2) {
      set = sharedValue.set;
      const withRepeat = disableScale(sequenceStartDelay[8]).withRepeat;
      disableScale(sequenceStartDelay[8]);
      const withSequence = disableScale(sequenceStartDelay[8]).withSequence;
      disableScale(sequenceStartDelay[8]);
      const withDelay = disableScale(sequenceStartDelay[8]).withDelay;
      disableScale(sequenceStartDelay[8]);
      const obj = disableScale(sequenceStartDelay[9]);
      const withDelayResult = withDelay(closure_1_2, obj.withTiming(c10, { duration: 0 }));
      const withDelay2 = disableScale(sequenceStartDelay[8]).withDelay;
      disableScale(sequenceStartDelay[8]);
      const withSequence2 = disableScale(sequenceStartDelay[8]).withSequence;
      disableScale(sequenceStartDelay[8]);
      const obj2 = disableScale(sequenceStartDelay[9]);
      const obj3 = { duration };
      const withTimingResult = obj2.withTiming(arg2, obj3);
      const obj4 = disableScale(sequenceStartDelay[9]);
      const obj5 = { duration };
      const withDelay2Result = withDelay2(delay, withSequence2(withTimingResult, obj4.withTiming(c10, obj5)));
      const withDelay3 = disableScale(sequenceStartDelay[8]).withDelay;
      disableScale(sequenceStartDelay[8]);
      const obj6 = disableScale(sequenceStartDelay[9]);
      const result = set(withRepeat(withSequence(withDelayResult, withDelay2Result, withDelay3(sequenceEndDelay, obj6.withTiming(c10, { duration: 0 }))), -1));
    }
    let obj = { withRepeat: ReanimatedRexport.withRepeat, withSequence: ReanimatedRexport.withSequence, withDelay: ReanimatedRexport.withDelay, sequenceStartDelay, withTiming: timing.withTiming, delay, animationTimeMs, sequenceEndDelay };
    animateValue.__closure = obj;
    animateValue.__workletHash = 8739175885712;
    animateValue.__initData = __initData;
    animateValue(sharedValue, c10, 1);
    if (!disableScale) {
      animateValue(sharedValue1, c11, 1);
    }
    return () => {
      const obj = disableScale(sequenceStartDelay[8]);
      obj.cancelAnimation(sharedValue);
      const obj2 = disableScale(sequenceStartDelay[8]);
      obj2.cancelAnimation(sharedValue1);
    };
  }, items);
  let obj3 = disableScale(sequenceStartDelay[8]);
  class T {
    constructor() {
      let tmp;
      const obj = { opacity: sharedValue.get(), transform: tmp };
      tmp = undefined;
      if (!disableScale) {
        const items = [{ scale: sharedValue1.get() }];
        tmp = items;
        const obj2 = { scale: sharedValue1.get() };
      }
      return obj;
    }
  }
  T.__closure = { opacityValue: sharedValue, disableScale, scaleValue: sharedValue1 };
  T.__workletHash = 4587446074739;
  T.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(T);
  const items1 = [tmp.typingIndicatorDot, dotStyle, animatedStyle];
  return jsx(delay(sequenceStartDelay[8]).View, { style: items1 });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((dotStyle) => {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  dotStyle = dotStyle.dotStyle;
  const tmp2 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { opacity };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === dotStyle) {
    let tmp5;
    if (cResult[2] === tmp2.typingIndicatorDot) {
      tmp5 = cResult[3];
    }
    return tmp5;
  }
  const items = [tmp2.typingIndicatorDot, first, dotStyle];
  const tmp6 = <View style={items} />;
  cResult[1] = dotStyle;
  cResult[2] = tmp2.typingIndicatorDot;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((dotStyle) => {
  dotStyle = dotStyle.dotStyle;
  const items = [closure_12().typingIndicatorDot, , ];
  const obj2 = { opacity };
  items[1] = obj2;
  items[2] = dotStyle;
  return <View style={items} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((dotStyle) => {
  let closure_2;
  let disableScale;
  let sequenceStartDelay;
  let style;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const obj = dotStyle(576);
  const cResult = obj.c(13);
  const tmp = dotStyle;
  dotStyle = dotStyle.dotStyle;
  ({ style, disableScale } = dotStyle);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const tmp8 = tmpResult.useStateFromStores(tmp5, tmp6) ? closure_18 : closure_17;
  dependencyMap = tmp8;
  if (cResult[2] === style) {
    let tmp9;
    let arr3;
    if (cResult[3] === tmp4.typingIndicator) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [0, 1, 2];
      cResult[5] = items1;
      arr3 = items1;
    } else {
      arr3 = cResult[5];
    }
    if (cResult[6] === tmp8) {
      if (cResult[7] === disableScale) {
        let tmp10;
        if (cResult[8] === dotStyle) {
          tmp10 = cResult[9];
        }
        if (cResult[10] === tmp9) {
          let tmp12;
          if (cResult[11] === tmp10) {
            tmp12 = cResult[12];
          }
          return tmp12;
        }
        const tmp15 = <View style={tmp9} collapsable={false}>{tmp10}</View>;
        cResult[10] = tmp9;
        cResult[11] = tmp10;
        cResult[12] = tmp15;
        tmp12 = tmp15;
      }
    }
    const mapped = arr3.map((item, index, arg2) => <closure_2 key={item} delay={item * c8} sequenceStartDelay={sequenceStartDelay} sequenceEndDelay={sequenceStartDelay + c8 * (arg2.length - 1 - item)} dotStyle={dotStyle} disableScale={disableScale} />);
    cResult[6] = tmp8;
    cResult[7] = disableScale;
    cResult[8] = dotStyle;
    cResult[9] = mapped;
    tmp10 = mapped;
  }
  const items2 = [tmp4.typingIndicator, style];
  cResult[2] = style;
  cResult[3] = tmp4.typingIndicator;
  cResult[4] = items2;
  tmp9 = items2;
}) : ((style) => {
  let closure_2;
  let disableScale;
  let dotStyle;
  let sequenceStartDelay;
  let useReducedMotion;
  ({ dotStyle: require, disableScale: importDefault } = style);
  style = style.style;
  const tmp = closure_12();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  dependencyMap = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion) ? closure_18 : closure_17;
  const items1 = [tmp.typingIndicator, style];
  const items2 = [0, 1, 2];
  return <View style={items1} collapsable={false}>{items2.map((item, index, arg2) => <closure_2 key={item} delay={item * c8} sequenceStartDelay={sequenceStartDelay} sequenceEndDelay={sequenceStartDelay + c8 * (arg2.length - 1 - item)} dotStyle={require} disableScale={importDefault} />)}</View>;
}));
size = size_mod;
let result = size.fileFinishedImporting("design/void/Ellipsis/native/Ellipsis.tsx");

export default memoResult;