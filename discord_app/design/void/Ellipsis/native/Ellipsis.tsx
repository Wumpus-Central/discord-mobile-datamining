// === Module 14226: Ellipsis ===

// Module 14226 (Ellipsis)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let c7 = 350;
let c8 = 233.33333333333334;
let c9 = 116.66666666666667;
let c10 = 0.4;
let c11 = 0.75;
const createStyles = fn(5090);
let obj = { typingIndicator: { justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 4 }, typingIndicatorDot: null };
let size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, marginRight: 2, height: 6, width: 6 };
obj.typingIndicatorDot = size;
let closure_12 = createStyles.createStyles(obj);
let closure_13 = { code: "function animateValue_EllipsisTsx1(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}" };
const __initData = { code: "function EllipsisTsx2(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}" };
let closure_15 = { code: "function animateValue_EllipsisTsx3(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}" };
const __initData2 = { code: "function EllipsisTsx4(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}" };
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedEllipsisDot(delay) {
  const cResult = disableScale(sequenceStartDelay[7]).c(12);
  ({ dotStyle, disableScale } = delay);
  delay = delay.delay;
  sequenceStartDelay = delay.sequenceStartDelay;
  const sequenceEndDelay = delay.sequenceEndDelay;
  const tmp4 = closure_12();
  let obj = disableScale(sequenceStartDelay[7]);
  const sharedValue = disableScale(sequenceStartDelay[8]).useSharedValue(c10);
  let obj2 = disableScale(sequenceStartDelay[8]);
  const sharedValue1 = disableScale(sequenceStartDelay[8]).useSharedValue(c11);
  if (cResult[0] === delay) {
    if (cResult[1] === disableScale) {
      if (cResult[2] === sharedValue) {
        if (cResult[3] === sharedValue1) {
          if (cResult[4] === sequenceEndDelay) {
            if (cResult[5] === sequenceStartDelay) {
              let tmp7 = cResult[6];
              let tmp8 = cResult[7];
            }
            const effect = sequenceEndDelay.useEffect(tmp7, tmp8);
            const fn2 = function b() {
              const obj = { opacity: sharedValue.get(), transform: null };
              let tmp;
              if (!disableScale) {
                const obj2 = { scale: sharedValue1.get() };
                const items = [obj2];
                tmp = items;
              }
              obj.transform = tmp;
              return obj;
            };
            let obj4 = { opacityValue: sharedValue, disableScale, scaleValue: sharedValue1 };
            fn2.__closure = obj4;
            fn2.__workletHash = 5071157079925;
            fn2.__initData = __initData;
            const animatedStyle = disableScale(tmp2[8]).useAnimatedStyle(fn2);
            if (cResult[8] === animatedStyle) {
              if (cResult[9] === dotStyle) {
                if (cResult[10] === tmp4.typingIndicatorDot) {
                  let tmp13 = cResult[11];
                }
                return tmp13;
              }
            }
            let obj5 = { style: null };
            let items = [tmp4.typingIndicatorDot, dotStyle, animatedStyle];
            obj5.style = items;
            const tmp16 = jsx(delay(tmp2[8]).View, { style: null });
            cResult[8] = animatedStyle;
            cResult[9] = dotStyle;
            cResult[10] = tmp4.typingIndicatorDot;
            cResult[11] = tmp16;
            tmp13 = tmp16;
            const tmpResult = disableScale(tmp2[8]);
          }
        }
      }
    }
  }
  const fn = function n() {
    function animateValue(sharedValue, c10, arg2) {
      const obj = disableScale(sequenceStartDelay[8]);
      const obj2 = disableScale(sequenceStartDelay[8]);
      const obj3 = disableScale(sequenceStartDelay[8]);
      const obj4 = disableScale(sequenceStartDelay[9]);
      const withDelayResult = obj3.withDelay(closure_1_2, disableScale(sequenceStartDelay[9]).withTiming(c10, { duration: 0 }));
      const obj5 = disableScale(sequenceStartDelay[8]);
      const obj6 = disableScale(sequenceStartDelay[8]);
      const obj7 = disableScale(sequenceStartDelay[9]);
      const obj8 = { duration };
      const withTimingResult = disableScale(sequenceStartDelay[9]).withTiming(arg2, { duration });
      const obj10 = { duration };
      const obj9 = disableScale(sequenceStartDelay[9]);
      const withDelayResult1 = obj5.withDelay(delay, obj6.withSequence(withTimingResult, disableScale(sequenceStartDelay[9]).withTiming(c10, { duration })));
      const obj11 = disableScale(sequenceStartDelay[8]);
      const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withDelayResult, withDelayResult1, obj11.withDelay(sequenceEndDelay, disableScale(sequenceStartDelay[9]).withTiming(c10, { duration: 0 }))), -1));
    }
    animateValue.__closure = { withRepeat: ReanimatedRexport.withRepeat, withSequence: ReanimatedRexport.withSequence, withDelay: ReanimatedRexport.withDelay, sequenceStartDelay, withTiming: timing.withTiming, delay, animationTimeMs, sequenceEndDelay };
    animateValue.__workletHash = 13305770376274;
    animateValue.__initData = __initData;
    animateValue(sharedValue, c10, 1);
    if (!disableScale) {
      animateValue(sharedValue1, c11, 1);
    }
    return () => {
      disableScale(sequenceStartDelay[8]).cancelAnimation(sharedValue);
      const obj = disableScale(sequenceStartDelay[8]);
      disableScale(sequenceStartDelay[8]).cancelAnimation(sharedValue1);
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
  let obj3 = disableScale(sequenceStartDelay[8]);
}) : (function AnimatedEllipsisDot(disableScale) {
  disableScale = disableScale.disableScale;
  const delay = disableScale.delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  let tmp = closure_12();
  const sharedValue = disableScale(sequenceStartDelay[8]).useSharedValue(c10);
  let obj = disableScale(sequenceStartDelay[8]);
  const sharedValue1 = disableScale(sequenceStartDelay[8]).useSharedValue(c11);
  let items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = sequenceEndDelay.useEffect(() => {
    function animateValue(sharedValue, c10, arg2) {
      const obj = disableScale(sequenceStartDelay[8]);
      const obj2 = disableScale(sequenceStartDelay[8]);
      const obj3 = disableScale(sequenceStartDelay[8]);
      const obj4 = disableScale(sequenceStartDelay[9]);
      const withDelayResult = obj3.withDelay(closure_1_2, disableScale(sequenceStartDelay[9]).withTiming(c10, { duration: 0 }));
      const obj5 = disableScale(sequenceStartDelay[8]);
      const obj6 = disableScale(sequenceStartDelay[8]);
      const obj7 = disableScale(sequenceStartDelay[9]);
      const obj8 = { duration };
      const withTimingResult = disableScale(sequenceStartDelay[9]).withTiming(arg2, { duration });
      const obj10 = { duration };
      const obj9 = disableScale(sequenceStartDelay[9]);
      const withDelayResult1 = obj5.withDelay(delay, obj6.withSequence(withTimingResult, disableScale(sequenceStartDelay[9]).withTiming(c10, { duration })));
      const obj11 = disableScale(sequenceStartDelay[8]);
      const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withDelayResult, withDelayResult1, obj11.withDelay(sequenceEndDelay, disableScale(sequenceStartDelay[9]).withTiming(c10, { duration: 0 }))), -1));
    }
    animateValue.__closure = { withRepeat: ReanimatedRexport.withRepeat, withSequence: ReanimatedRexport.withSequence, withDelay: ReanimatedRexport.withDelay, sequenceStartDelay, withTiming: timing.withTiming, delay, animationTimeMs, sequenceEndDelay };
    animateValue.__workletHash = 8739175885712;
    animateValue.__initData = __initData;
    animateValue(sharedValue, c10, 1);
    if (!disableScale) {
      animateValue(sharedValue1, c11, 1);
    }
    return () => {
      disableScale(sequenceStartDelay[8]).cancelAnimation(sharedValue);
      const obj = disableScale(sequenceStartDelay[8]);
      disableScale(sequenceStartDelay[8]).cancelAnimation(sharedValue1);
    };
  }, items);
  let obj2 = disableScale(sequenceStartDelay[8]);
  class T {
    constructor() {
      obj = { opacity: closure_4.get(), transform: null };
      tmp = undefined;
      if (!disableScale) {
        obj1 = { scale: null };
        tmp2 = closure_5;
        obj1.scale = closure_5.get();
        items = [];
        items[0] = obj1;
        tmp = items;
      }
      obj.transform = tmp;
      return obj;
    }
  }
  T.__closure = { opacityValue: sharedValue, disableScale, scaleValue: sharedValue1 };
  T.__workletHash = 4587446074739;
  T.__initData = __initData2;
  const animatedStyle = disableScale(sequenceStartDelay[8]).useAnimatedStyle(T);
  let obj4 = { style: null };
  const items1 = [tmp.typingIndicatorDot, disableScale.dotStyle, animatedStyle];
  obj4.style = items1;
  return jsx(delay(sequenceStartDelay[8]).View, { style: null });
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function EllipsisDot(dotStyle) {
  const cResult = c.c(4);
  dotStyle = dotStyle.dotStyle;
  const tmp2 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { opacity };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === dotStyle) {
    if (cResult[2] === tmp2.typingIndicatorDot) {
      let tmp5 = cResult[3];
    }
    return tmp5;
  }
  const obj3 = { style: null };
  const items = [tmp2.typingIndicatorDot, first, dotStyle];
  obj3.style = items;
  const tmp6 = <View style={null} />;
  cResult[1] = dotStyle;
  cResult[2] = tmp2.typingIndicatorDot;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : (function EllipsisDot(dotStyle) {
  const obj = { style: null };
  const items = [closure_12().typingIndicatorDot, { opacity }, dotStyle.dotStyle];
  obj.style = items;
  return <View style={null} />;
});
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("design/void/Ellipsis/native/Ellipsis.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Ellipsis(dotStyle) {
  const cResult = dotStyle(576).c(13);
  dotStyle = dotStyle.dotStyle;
  ({ style, disableScale } = dotStyle);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = dotStyle(576);
  const tmp8 = dotStyle(504).useStateFromStores(tmp5, tmp6) ? closure_18 : closure_17;
  dependencyMap = tmp8;
  if (cResult[2] === style) {
    if (cResult[3] === tmp4.typingIndicator) {
      let tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [0, 1, 2];
      cResult[5] = items1;
      let arr3 = items1;
    } else {
      arr3 = cResult[5];
    }
    if (cResult[6] === tmp8) {
      if (cResult[7] === disableScale) {
        if (cResult[8] === dotStyle) {
          let tmp10 = cResult[9];
        }
        if (cResult[10] === tmp9) {
          if (cResult[11] === tmp10) {
            let tmp12 = cResult[12];
          }
          return tmp12;
        }
        const obj2 = { style: tmp9, collapsable: false, children: tmp10 };
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
  const tmpResult = dotStyle(504);
}) : (function Ellipsis(style) {
  ({ dotStyle: require, disableScale: importDefault } = style);
  const tmp = closure_12();
  const items = [AccessibilityStore];
  dependencyMap = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion) ? closure_18 : closure_17;
  const obj2 = { style: null, collapsable: false, children: null };
  const items1 = [tmp.typingIndicator, style.style];
  obj2.style = items1;
  const items2 = [0, 1, 2];
  obj2.children = items2.map((item, index, arg2) => <closure_2 key={item} delay={item * c8} sequenceStartDelay={sequenceStartDelay} sequenceEndDelay={sequenceStartDelay + c8 * (arg2.length - 1 - item)} dotStyle={dotStyle} disableScale={disableScale} />);
  return <View style={null} collapsable={false}>{null}</View>;
}));