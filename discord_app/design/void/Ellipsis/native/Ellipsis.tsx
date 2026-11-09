// === Module 16288: Ellipsis ===

// Module 16288 (Ellipsis)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;

const _modDef1652 = _mod1652;

require = fn;
function AnimatedEllipsisDot(disableScale) {
  disableScale = disableScale.disableScale;
  _require = disableScale;
  const delay = disableScale.delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  let tmp = closure_9();
  const sharedValue = require("module_1652").useSharedValue(0.4);
  let obj = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0.75);
  items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = sequenceEndDelay.useEffect(() => {
    items = [closure_10, _mod1652.withRepeat, _mod1652.withSequence, _mod1652.withDelay, c2, timing_timing.withTiming, c1, 350, sequenceEndDelay];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
    function animateValue(set, arg1, arg2) {
      const obj = { duration };
      const obj2 = { duration };
      const tmp = _undefined3(c3, _undefined4(arg1, { duration: 0 }));
      const tmp2 = _undefined4(arg2, { duration });
      const result = set.set(_undefined(_undefined2(tmp, _undefined3(c5, _undefined2(_undefined4(arg2, { duration }), _undefined4(arg1, obj2))), _undefined3(c7, _undefined4(arg1, { duration: 0 }))), -1));
    }
    const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
    animateValue.__closure = items1;
    animateValue.__workletHash = 16090494159499;
    animateValue.__initData = tmp;
    const tmp4Result = tmp4(tmp5, tmp6(0.4, { duration: 0 }));
    const tmp6Result = tmp6(1, { duration: tmp8 });
    let result = sharedValue.set(tmp2(tmp3(tmp4Result, tmp4(tmp7, tmp3(tmp6(1, { duration: tmp8 }), tmp6(0.4, { duration: tmp8 }))), tmp4(tmp9, tmp6(0.4, { duration: 0 }))), -1));
    if (!c0) {
      let obj = { duration: tmp8 };
      let obj2 = { duration: tmp8 };
      const tmp4Result5 = tmp4(tmp5, tmp6(0.75, { duration: 0 }));
      const tmp6Result2 = tmp6(1, obj);
      const result1 = sharedValue1.set(tmp2(tmp3(tmp4Result5, tmp4(tmp7, tmp3(tmp6(1, obj), tmp6(0.75, obj2))), tmp4(tmp9, tmp6(0.75, { duration: 0 }))), -1));
      const tmp4Result6 = tmp4(tmp7, tmp3(tmp6(1, obj), tmp6(0.75, obj2)));
    }
    return () => {
      _undefined(_undefined3[6]).cancelAnimation(c4);
      const obj = _undefined(_undefined3[6]);
      _undefined(_undefined3[6]).cancelAnimation(c5);
    };
  }, items);
  let obj2 = require("module_1652");
  let items1 = [closure_11, sharedValue, disableScale, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class EllipsisTsx2 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      tmp = undefined;
      if (!closure_1) {
        obj1 = { scale: null };
        tmp2 = closure_2;
        obj1.scale = closure_2.get();
        items = [];
        items[0] = obj1;
        tmp = items;
      }
      obj.transform = tmp;
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  EllipsisTsx2.__closure = items2;
  EllipsisTsx2.__workletHash = 17326421138636;
  EllipsisTsx2.__initData = tmp6;
  const animatedStyle = require("module_1652").useAnimatedStyle(EllipsisTsx2);
  const obj4 = { style: null };
  const items3 = [tmp.typingIndicatorDot, disableScale.dotStyle, animatedStyle];
  obj4.style = items3;
  return jsx(_modDef1652.View, { style: null });
}
function EllipsisDot(dotStyle) {
  const obj = { style: null };
  items = [closure_9().typingIndicatorDot, { opacity: 0.4 }, dotStyle.dotStyle];
  obj.style = items;
  return <View style={null} />;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let c7 = 233.33333333333334;
let c8 = 116.66666666666667;
const createStyles = fn(5140);
let obj = { typingIndicator: { justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 4 }, typingIndicatorDot: null };
let size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, marginRight: 2, height: 6, width: 6 };
obj.typingIndicatorDot = size;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = { code: "(function animateValue_EllipsisTsx1(value,fromValue,toValue){let[withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay]=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));})" };
let closure_11 = { code: "(function EllipsisTsx2(){let[opacityValue,disableScale,scaleValue]=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};})" };
size = fn(2);
let result = size.fileFinishedImporting("design/void/Ellipsis/native/Ellipsis.tsx");

export default noop.memo(function Ellipsis(style) {
  ({ dotStyle: require, disableScale: importDefault } = style);
  const tmp = closure_9();
  items = [AccessibilityStore];
  dependencyMap = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion) ? EllipsisDot : AnimatedEllipsisDot;
  const obj2 = { style: null, collapsable: false, children: null };
  const items1 = [tmp.typingIndicator, style.style];
  obj2.style = items1;
  const items2 = [0, 1, 2];
  obj2.children = items2.map((item, index, arg2) => <closure_2 key={item} delay={item * c7} sequenceStartDelay={sequenceStartDelay} sequenceEndDelay={sequenceStartDelay + c7 * (arg2.length - 1 - item)} dotStyle={dotStyle} disableScale={disableScale} />);
  return <View style={null} collapsable={false}>{null}</View>;
});