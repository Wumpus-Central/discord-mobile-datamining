// === Module 14090: Ellipsis ===

// Module 14090 (Ellipsis)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function AnimatedEllipsisDot(disableScale) {
  disableScale = disableScale.disableScale;
  const delay = disableScale.delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  let obj = disableScale(sequenceStartDelay[6]);
  const sharedValue = obj.useSharedValue(0.4);
  let tmp = closure_9();
  const sharedValue1 = disableScale(sequenceStartDelay[6]).useSharedValue(0.75);
  let items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = sequenceEndDelay.useEffect(() => {
    function animateValue(sharedValue, arg1, arg2) {
      const obj = disableScale(sequenceStartDelay[6]);
      const obj2 = disableScale(sequenceStartDelay[6]);
      const obj3 = disableScale(sequenceStartDelay[6]);
      const obj4 = disableScale(sequenceStartDelay[7]);
      const withDelayResult = obj3.withDelay(closure_1_2, disableScale(sequenceStartDelay[7]).withTiming(arg1, { duration: 0 }));
      const obj5 = disableScale(sequenceStartDelay[6]);
      const obj6 = disableScale(sequenceStartDelay[6]);
      const obj7 = disableScale(sequenceStartDelay[7]);
      const withTimingResult = disableScale(sequenceStartDelay[7]).withTiming(arg2, { duration: 350 });
      const obj8 = disableScale(sequenceStartDelay[7]);
      const withDelayResult1 = obj5.withDelay(delay, obj6.withSequence(withTimingResult, disableScale(sequenceStartDelay[7]).withTiming(arg1, { duration: 350 })));
      const obj9 = disableScale(sequenceStartDelay[6]);
      const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withDelayResult, withDelayResult1, obj9.withDelay(sequenceEndDelay, disableScale(sequenceStartDelay[7]).withTiming(arg1, { duration: 0 }))), -1));
    }
    animateValue.__closure = { withRepeat: ReanimatedRexport.withRepeat, withSequence: ReanimatedRexport.withSequence, withDelay: ReanimatedRexport.withDelay, sequenceStartDelay, withTiming: timing.withTiming, delay, animationTimeMs: 350, sequenceEndDelay };
    animateValue.__workletHash = 13305770376274;
    animateValue.__initData = __initData;
    animateValue(sharedValue, 0.4, 1);
    if (!disableScale) {
      animateValue(sharedValue1, 0.75, 1);
    }
    return () => {
      disableScale(sequenceStartDelay[6]).cancelAnimation(sharedValue);
      const obj = disableScale(sequenceStartDelay[6]);
      disableScale(sequenceStartDelay[6]).cancelAnimation(sharedValue1);
    };
  }, items);
  let obj2 = disableScale(sequenceStartDelay[6]);
  class S {
    constructor() {
      obj = { opacity: closure_4.get(), transform: null };
      tmp = undefined;
      if (!disableScale) {
        obj = { scale: null };
        tmp2 = closure_5;
        obj.scale = closure_5.get();
        items = [];
        items[0] = obj;
        tmp = items;
      }
      obj.transform = tmp;
      return obj;
    }
  }
  S.__closure = { opacityValue: sharedValue, disableScale, scaleValue: sharedValue1 };
  S.__workletHash = 5071157079925;
  S.__initData = __initData;
  const animatedStyle = disableScale(sequenceStartDelay[6]).useAnimatedStyle(S);
  obj = { style: null };
  const items1 = [tmp.typingIndicatorDot, disableScale.dotStyle, animatedStyle];
  obj.style = items1;
  return jsx(delay(sequenceStartDelay[6]).View, { style: null });
}
function EllipsisDot(dotStyle) {
  const obj = { style: null };
  const items = [closure_9().typingIndicatorDot, { opacity: 0.4 }, dotStyle.dotStyle];
  obj.style = items;
  return <View style={null} />;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let c7 = 233.33333333333334;
let c8 = 116.66666666666667;
const createStyles = fn(4560);
let obj = { typingIndicator: { justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 4 }, typingIndicatorDot: null };
let size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, marginRight: 2, height: 6, width: 6 };
obj.typingIndicatorDot = size;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = { code: "function animateValue_EllipsisTsx1(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}" };
const __initData = { code: "function EllipsisTsx2(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}" };
size = fn(2);
let result = size.fileFinishedImporting("design/void/Ellipsis/native/Ellipsis.tsx");

export default noop.memo(function Ellipsis(style) {
  ({ dotStyle: require, disableScale: importDefault } = style);
  let obj = initialize;
  const items = [AccessibilityStore];
  dependencyMap = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion) ? EllipsisDot : AnimatedEllipsisDot;
  obj = { style: null, collapsable: false, children: null };
  const items1 = [closure_9().typingIndicator, style.style];
  obj.style = items1;
  const items2 = [0, 1, 2];
  obj.children = items2.map((item, index, arg2) => <closure_2 key={item} delay={item * c7} sequenceStartDelay={sequenceStartDelay} sequenceEndDelay={sequenceStartDelay + c7 * (arg2.length - 1 - item)} dotStyle={dotStyle} disableScale={disableScale} />);
  return <View style={null} collapsable={false}>{null}</View>;
});