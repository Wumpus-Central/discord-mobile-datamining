// === Module 9318: SegmentedControl ===

// Module 9318 (SegmentedControl)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let state;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 0.04;
let c9 = 0.9;
let closure_10 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
let closure_11 = createStyles.createStyles((borderRadius, paddingVertical) => {
  const obj = { scrollContentContainer: { flexGrow: 1 }, controlsContainer: { backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" }, indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" }, indicator: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius } };
  ({ backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" });
  ({ flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius });
  return obj;
});
let closure_12 = { code: "function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}" };
let closure_13 = { code: "function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}" };
let closure_14 = { code: "function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}" };
let closure_15 = { code: "function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}" };
let closure_16 = { code: "function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX=1+PRESSED_TRANSLATE_AMOUNT;translateX=translateX-indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else{if(pressedIndex.get()>clampedActiveIndex.get()){scaleX=1+PRESSED_TRANSLATE_AMOUNT;translateX=translateX+indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],\"clamp\");const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX=translateX+-scaleAmount/2;}else{if(scrollOverflow.get()>0){const scaleFactor_0=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],\"clamp\");const scaleAmount_0=indicatorWidth.get()*(1-scaleFactor_0);scaleX=scaleFactor_0;translateX=translateX+scaleAmount_0/2;}}if(clampedActiveIndex.get()===0){translateX=translateX+segmentSpacing;}else{if(clampedActiveIndex.get()===itemCount-1){translateX=translateX-segmentSpacing;}}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
let closure_17 = { code: "function onPanGestureUpdate_SegmentedControlNativeTsx6(event_0){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event_0.translationX/indicatorWidth.get();const index_1=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index_1,0),itemCount-1));}" };
let closure_18 = { code: "function SegmentedControlNativeTsx7(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}" };
let closure_19 = { code: "function SegmentedControlNativeTsx8(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}" };
const __initData = { code: "function SegmentedControlNativeTsx9(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}" };
const __initData2 = { code: "function SegmentedControlNativeTsx10(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}" };
const __initData3 = { code: "function SegmentedControlNativeTsx11(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}" };
const __initData4 = { code: "function SegmentedControlNativeTsx12(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}" };
const __initData5 = { code: "function SegmentedControlNativeTsx13(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor_0=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount_0=indicatorWidth.get()*(1-scaleFactor_0);scaleX=scaleFactor_0;translateX+=scaleAmount_0/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
const __initData6 = { code: "function onPanGestureUpdate_SegmentedControlNativeTsx14(event_0){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event_0.translationX/indicatorWidth.get();const index_1=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index_1,0),itemCount-1));}" };
const __initData7 = { code: "function SegmentedControlNativeTsx15(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}" };
const __initData8 = { code: "function SegmentedControlNativeTsx16(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let activeIndex;
  let indicator;
  let items;
  let keyboardShouldPersistTaps;
  let pressedIndex;
  let sharedValue1;
  let variant;
  let tmp = state;
  let tmp2 = activeIndex;
  let obj = state(activeIndex[6]);
  const cResult = obj.c(46);
  state = state.state;
  ({ variant, keyboardShouldPersistTaps } = state);
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  activeIndex = state.activeIndex;
  const scrollOverflow = state.scrollOverflow;
  ({ items, pressedIndex } = state);
  const setActiveIndex = state.setActiveIndex;
  let closure_6 = tmp4;
  let num = 4;
  if ("experimental_Large" === str) {
    num = 8;
  }
  const tmpResult = tmp(tmp2[7]);
  const tmp5 = sharedValue1(tmpResult.useToken(str(tmp2[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), num);
  PRESSED_TRANSLATE_AMOUNT = tmp5;
  const length = items.length;
  const tmpResult9 = tmp(tmp2[8]);
  const sharedValue = tmpResult9.useSharedValue(-1);
  const tmpResult10 = tmp(tmp2[8]);
  sharedValue1 = tmpResult10.useSharedValue(0);
  const tmpResult11 = tmp(tmp2[8]);
  const sharedValue2 = tmpResult11.useSharedValue(0);
  const fn = function c() {
    return sharedValue1.get();
  };
  fn.__closure = { indicatorWidth: sharedValue1 };
  fn.__workletHash = 5223249035388;
  fn.__initData = sharedValue2;
  const fn2 = function n(arg0, arg1) {
    if (null != arg1) {
      const result = sharedValue2.set(arg1);
    }
  };
  fn2.__closure = { previousIndicatorWidth: sharedValue2 };
  fn2.__workletHash = 14748619096684;
  fn2.__initData = R;
  const tmpResult12 = tmp(tmp2[8]);
  const animatedReaction = tmpResult12.useAnimatedReaction(fn, fn2);
  if (cResult[0] !== sharedValue1) {
    class R {
      constructor(nativeEvent) {
        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      }
    }
    cResult[0] = sharedValue1;
    let num2 = 1;
    cResult[1] = R;
  } else {
    class R {
      constructor(nativeEvent) {
        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  R = tmp10;
  const tmpResult13 = tmp(tmp2[8]);
  const sharedValue3 = tmpResult13.useSharedValue(activeIndex.get());
  const tmpResult14 = tmp(tmp2[8]);
  class J {
    constructor() {
      return Math.min(Math.max(activeIndex.get(), 0), length - 1);
    }
  }
  J.__closure = { activeIndex, itemCount: length };
  J.__workletHash = 790542357728;
  J.__initData = sharedValue3;
  const derivedValue = tmpResult14.useDerivedValue(J);
  const fn3 = function z() {
    const value = derivedValue.get();
    const diff = value - sharedValue3.get();
    return diff * sharedValue1.get();
  };
  fn3.__closure = { clampedActiveIndex: derivedValue, defaultActiveIndex: sharedValue3, indicatorWidth: sharedValue1 };
  fn3.__workletHash = 10116271570175;
  fn3.__initData = derivedValue;
  const tmpResult15 = tmp(tmp2[8]);
  const derivedValue1 = tmpResult15.useDerivedValue(fn3);
  const fn4 = function j() {
    let items2;
    let obj11;
    let sum;
    let sum1;
    const value = derivedValue1.get();
    num = 1;
    let tmp2 = value;
    if (pressedIndex.get() >= 0) {
      let diff;
      let num2;
      const value4 = pressedIndex.get();
      if (value4 < derivedValue.get()) {
        diff = value - 0.02 * sharedValue1.get();
        num2 = 1.04;
      } else {
        const value5 = pressedIndex.get();
        num2 = 1;
        diff = value;
        if (value5 > derivedValue.get()) {
          diff = value + 0.02 * sharedValue1.get();
          num2 = 1.04;
        }
      }
      num = num2;
      tmp2 = diff;
    }
    if (scrollOverflow.get() < 0) {
      const items = [c9, 1];
      const obj4 = ReanimatedRexport;
      const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], items, "clamp");
      sum = tmp2 + -sharedValue1.get() * (1 - interpolateResult) / 2;
      num = interpolateResult;
    } else {
      sum = tmp2;
      if (scrollOverflow.get() > 0) {
        const items1 = [c9, 1];
        const obj12 = ReanimatedRexport;
        const interpolateResult1 = obj12.interpolate(scrollOverflow.get(), [50, 0], items1, "clamp");
        sum = tmp2 + sharedValue1.get() * (1 - interpolateResult1) / 2;
        num = interpolateResult1;
      }
    }
    if (0 === derivedValue.get()) {
      sum1 = sum + num;
    } else {
      sum1 = sum;
      if (derivedValue.get() === length - 1) {
        sum1 = sum - num;
      }
    }
    const value6 = sharedValue1.get();
    const tmp21 = value6 === sharedValue2.get();
    if (!tmp21) {
      const result = sharedValue2.set(sharedValue1.get());
    }
    let withSpringResult = sum1;
    if (tmp21) {
      const obj8 = spring;
      withSpringResult = obj8.withSpring(sum1, closure_10);
    }
    const obj9 = { transform: items2 };
    items2 = [{ translateX: withSpringResult }, ];
    const obj10 = { scaleX: obj11.withSpring(num, closure_10) };
    items2[1] = obj10;
    obj11 = spring;
    return obj9;
  };
  const tmpResult16 = tmp(tmp2[8]);
  let obj2 = { indicatorTranslateX: derivedValue1, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT, indicatorWidth: sharedValue1, scrollOverflow, interpolate: tmp(tmp2[8]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: length, segmentSpacing: num, itemCount: length, previousIndicatorWidth: sharedValue2, withSpring: tmp(tmp2[9]).withSpring, SELECTED_INDICATOR_SPRING: sharedValue };
  fn4.__closure = obj2;
  fn4.__workletHash = 11639519868122;
  fn4.__initData = derivedValue1;
  const animatedStyle = tmpResult16.useAnimatedStyle(fn4);
  if (cResult[2] === sharedValue3) {
    class R {
      constructor(nativeEvent) {
        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  if (cResult[8] === sharedValue3) {
    class R {
      constructor(nativeEvent) {
        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  const fn5 = function q(id, arg1) {
    let items;
    id = id.id;
    const tmp = sharedValue3.get() === arg1;
    let tmp3;
    const View = ReanimatedRexportDefault.View;
    if (tmp) {
      tmp3 = R;
    }
    const obj = { onLayout: tmp3, style: items };
    items = [indicator.indicator, tmp ? animatedStyle : { opacity: 0 }];
    return metroRequire(View, obj, id);
  };
  cResult[8] = sharedValue3;
  cResult[9] = tmp10;
  cResult[10] = animatedStyle;
  cResult[11] = tmp5.indicator;
  cResult[12] = fn5;
}) : ((state) => {
  let closure_9;
  let items4;
  state = state.state;
  let str = state.variant;
  if (str === undefined) {
    str = "default";
  }
  SCROLL_OVERFLOW_MAX_SCALE = undefined;
  let length;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let callback;
  let sharedValue3;
  let derivedValue;
  let derivedValue1;
  let animatedStyle;
  const activeIndex = state.activeIndex;
  const scrollOverflow = state.scrollOverflow;
  let items = state.items;
  const pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  let tmp = "experimental_Large" === str;
  let closure_7 = tmp;
  let num = 4;
  const keyboardShouldPersistTaps = state.keyboardShouldPersistTaps;
  if (tmp) {
    num = 8;
  }
  let tmp2 = state;
  let tmp3 = activeIndex;
  let obj = state(activeIndex[7]);
  const tmp4 = sharedValue(obj.useToken(str(activeIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), num);
  SCROLL_OVERFLOW_MAX_SCALE = tmp4;
  length = items.length;
  let obj2 = state(activeIndex[8]);
  sharedValue = obj2.useSharedValue(-1);
  const obj3 = state(activeIndex[8]);
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = state(activeIndex[8]);
  sharedValue2 = obj4.useSharedValue(0);
  const fn = function x() {
    return sharedValue1.get();
  };
  fn.__closure = { indicatorWidth: sharedValue1 };
  fn.__workletHash = 11268303410804;
  fn.__initData = __initData;
  const obj5 = state(activeIndex[8]);
  class I {
    constructor(arg0, arg1) {
      if (null != arg1) {
        const result = sharedValue2.set(arg1);
      }
    }
  }
  I.__closure = { previousIndicatorWidth: sharedValue2 };
  I.__workletHash = 6128550580287;
  I.__initData = __initData2;
  const animatedReaction = obj5.useAnimatedReaction(fn, I);
  let items1 = [sharedValue1];
  callback = scrollOverflow.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  const obj6 = state(activeIndex[8]);
  sharedValue3 = obj6.useSharedValue(activeIndex.get());
  const obj7 = state(activeIndex[8]);
  class G {
    constructor() {
      return Math.min(Math.max(activeIndex.get(), 0), length - 1);
    }
  }
  G.__closure = { activeIndex, itemCount: length };
  G.__workletHash = 2197756957491;
  G.__initData = __initData3;
  derivedValue = obj7.useDerivedValue(G);
  let obj8 = state(activeIndex[8]);
  class H {
    constructor() {
      const value = derivedValue.get();
      const diff = value - sharedValue3.get();
      return diff * sharedValue1.get();
    }
  }
  H.__closure = { clampedActiveIndex: derivedValue, defaultActiveIndex: sharedValue3, indicatorWidth: sharedValue1 };
  H.__workletHash = 15730011125640;
  H.__initData = __initData4;
  derivedValue1 = obj8.useDerivedValue(H);
  let obj9 = state(activeIndex[8]);
  class B {
    constructor() {
      let items2;
      let obj11;
      let sum;
      let sum1;
      const value = derivedValue1.get();
      num = 1;
      let tmp2 = value;
      if (pressedIndex.get() >= 0) {
        let num2;
        let diff;
        const value4 = pressedIndex.get();
        if (value4 < derivedValue.get()) {
          num2 = 1 + c8;
          diff = value - 0.02 * sharedValue1.get();
        } else {
          const value5 = pressedIndex.get();
          num2 = 1;
          diff = value;
          if (value5 > derivedValue.get()) {
            num2 = 1 + c8;
            diff = value + 0.02 * sharedValue1.get();
          }
        }
        num = num2;
        tmp2 = diff;
      }
      if (scrollOverflow.get() < 0) {
        items = [c9, 1];
        const obj4 = ReanimatedRexport;
        const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], items, "clamp");
        sum = tmp2 + -sharedValue1.get() * (1 - interpolateResult) / 2;
        num = interpolateResult;
      } else {
        sum = tmp2;
        if (scrollOverflow.get() > 0) {
          const items1 = [c9, 1];
          const obj12 = ReanimatedRexport;
          const interpolateResult1 = obj12.interpolate(scrollOverflow.get(), [50, 0], items1, "clamp");
          sum = tmp2 + sharedValue1.get() * (1 - interpolateResult1) / 2;
          num = interpolateResult1;
        }
      }
      if (0 === derivedValue.get()) {
        sum1 = sum + num;
      } else {
        sum1 = sum;
        if (derivedValue.get() === length - 1) {
          sum1 = sum - num;
        }
      }
      const value6 = sharedValue1.get();
      const tmp23 = value6 === sharedValue2.get();
      if (!tmp23) {
        const result = sharedValue2.set(sharedValue1.get());
      }
      let withSpringResult = sum1;
      if (tmp23) {
        const obj8 = spring;
        withSpringResult = obj8.withSpring(sum1, closure_10);
      }
      const obj9 = { transform: items2 };
      items2 = [{ translateX: withSpringResult }, ];
      const obj10 = { scaleX: obj11.withSpring(num, closure_10) };
      items2[1] = obj10;
      obj11 = spring;
      return obj9;
    }
  }
  let obj10 = { indicatorTranslateX: derivedValue1, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: num, indicatorWidth: sharedValue1, scrollOverflow, interpolate: state(activeIndex[8]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE, segmentSpacing: num, itemCount: length, previousIndicatorWidth: sharedValue2, withSpring: state(activeIndex[9]).withSpring, SELECTED_INDICATOR_SPRING: length };
  B.__closure = obj10;
  B.__workletHash = 16746746791211;
  B.__initData = __initData5;
  animatedStyle = obj9.useAnimatedStyle(B);
  let items2 = [items, sharedValue3, callback, tmp4.indicator, animatedStyle];
  const items3 = [items, length, num, state, pressedIndex, tmp, str, setActiveIndex];
  const memo = scrollOverflow.useMemo(() => {
    let indicator;
    return items.map((id, index) => {
      id = id.id;
      const tmp = sharedValue3.get() === index;
      let tmp3;
      const View = str(activeIndex[8]).View;
      if (tmp) {
        tmp3 = callback;
      }
      const obj = { onLayout: tmp3, style: items };
      items = [indicator.indicator, tmp ? animatedStyle : { opacity: 0 }];
      return setActiveIndex(View, obj, id);
    });
  }, items2);
  function onPanGestureUpdate(translationX) {
    const result = translationX.translationX / sharedValue1.get();
    const result1 = activeIndex.set(Math.min(Math.max(sharedValue.get() + result, 0), length - 1));
  }
  onPanGestureUpdate.__closure = { indicatorWidth: sharedValue1, panIndex: sharedValue, activeIndex, itemCount: length };
  onPanGestureUpdate.__workletHash = 14871430458246;
  onPanGestureUpdate.__initData = __initData6;
  const memo1 = scrollOverflow.useMemo(() => {
    let itemCount;
    let pressed;
    let variant;
    return items.map((item, index) => {
      let icon;
      let id;
      let label;
      let obj2;
      let tmp3;
      let tmp6;
      let tmp9;
      state = index;
      ({ label, id, icon } = item);
      if (0 === index) {
        tmp3 = closure_8;
      } else if (index === itemCount - 1) {
        tmp3 = -closure_8;
      }
      if (0 === index) {
        tmp6 = -closure_8;
      } else if (index === itemCount - 1) {
        tmp6 = closure_8;
      }
      const obj = {
        style: obj2,
        index,
        itemCount,
        label,
        state,
        pressed,
        onPress() {
          setActiveIndex(index);
        },
        onPressIn() {
          const result = pressed.set(index);
        },
        onPressOut() {
          const result = pressed.set(-1);
        },
        icon: tmp9,
        variant
      };
      tmp9 = null;
      obj2 = { minWidth: `${1 / closure_10 * 100}%`, marginStart: tmp3, marginEnd: tmp6 };
      const SegmentedControlItem = state(activeIndex[10]).SegmentedControlItem;
      if (closure_7) {
        tmp9 = icon;
      }
      return setActiveIndex(SegmentedControlItem, obj, id);
    });
  }, items3);
  const Gesture = state(activeIndex[11]).Gesture;
  const fn2 = function z() {
    const result = sharedValue.set(activeIndex.get());
  };
  fn2.__closure = { panIndex: sharedValue, activeIndex };
  fn2.__workletHash = 7470248218145;
  fn2.__initData = __initData8;
  const PanResult = Gesture.Pan();
  const onStartResult = PanResult.onStart(fn2);
  const onUpdateResult = onStartResult.onUpdate(onPanGestureUpdate);
  class J {
    constructor() {
      const result = sharedValue.set(-1);
      const result1 = activeIndex.set(Math.round(activeIndex.get()));
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(setActiveIndex);
      runOnJSResult(activeIndex.get());
    }
  }
  let obj11 = { panIndex: sharedValue, activeIndex, runOnJS: state(activeIndex[8]).runOnJS, setActiveIndex };
  J.__closure = obj11;
  J.__workletHash = 17546470890647;
  J.__initData = __initData7;
  let str2 = "tablist";
  const onEndResult = onUpdateResult.onEnd(J);
  const obj15 = state(activeIndex[12]);
  if (!obj15.isAndroid()) {
    let str3;
    if (tmp) {
      str3 = "tabbar";
    }
    str2 = str3;
  }
  let obj12 = { accessibilityRole: str2, style: tmp4.controlsContainer, children: items4 };
  items4 = [, ];
  const obj13 = { accessible: false, style: tmp4.indicatorContainer, children: memo };
  items4[0] = setActiveIndex(items, obj13);
  items4[1] = memo1;
  const tmp18 = closure_7(items, obj12, items.length);
  let str4;
  const tmp19 = pressedIndex;
  const tmp2Result = tmp2(tmp3[12]);
  if (tmp2Result.isIOS()) {
    str4 = "tabbar";
  }
  const obj14 = { horizontal: true, accessibilityRole: str4, alwaysBounceHorizontal: false, contentContainerStyle: tmp4.scrollContentContainer, keyboardShouldPersistTaps, children: tmp18 };
  let tmp17Result = tmp17(tmp19, obj14);
  if (tmp) {
    const obj16 = { gesture: onEndResult, children: tmp18 };
    tmp17Result = tmp17(tmp2(tmp3[11]).GestureDetector, obj16);
  }
  return tmp17Result;
});
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControl.native.tsx");

export const SegmentedControl = tmp4;