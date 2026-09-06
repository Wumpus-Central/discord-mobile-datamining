// === Module 9793: SegmentedControl ===

// Module 9793 (SegmentedControl)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 0.04;
let SELECTED_INDICATOR_SPRING = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((borderRadius, paddingVertical) => {
  let obj = { scrollContentContainer: { flexGrow: 1 }, controlsContainer: null, indicatorContainer: null, indicator: null };
  obj = { backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" };
  obj.controlsContainer = obj;
  obj.indicatorContainer = { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" };
  obj = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius };
  obj.indicator = obj;
  return obj;
});
let closure_11 = { code: "function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}" };
let closure_12 = { code: "function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}" };
let closure_13 = { code: "function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}" };
let closure_14 = { code: "function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}" };
let closure_15 = { code: "function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
let closure_16 = { code: "function onPanGestureUpdate_SegmentedControlNativeTsx6(event){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));}" };
let closure_17 = { code: "function SegmentedControlNativeTsx7(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}" };
let closure_18 = { code: "function SegmentedControlNativeTsx8(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControl.native.tsx");

export const SegmentedControl = function SegmentedControl(keyboardShouldPersistTaps) {
  let state = keyboardShouldPersistTaps.state;
  let str = keyboardShouldPersistTaps.variant;
  if (str === undefined) {
    str = "default";
  }
  SELECTED_INDICATOR_SPRING = undefined;
  let length;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  __initData = undefined;
  let sharedValue3;
  let derivedValue;
  let derivedValue1;
  let animatedStyle;
  const activeIndex = state.activeIndex;
  const scrollOverflow = state.scrollOverflow;
  let items = state.items;
  const pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  closure_7 = tmp;
  let num = 4;
  if ("experimental_Large" === str) {
    num = 8;
  }
  let obj = state(activeIndex[5]);
  const tmp4 = length(obj.useToken(str(activeIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), num);
  SELECTED_INDICATOR_SPRING = tmp4;
  length = items.length;
  let obj1 = state(activeIndex[6]);
  sharedValue = obj1.useSharedValue(-1);
  let obj2 = state(activeIndex[6]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = state(activeIndex[6]);
  sharedValue2 = obj3.useSharedValue(0);
  let obj4 = state(activeIndex[6]);
  class T {
    constructor() {
      return closure_12.get();
    }
  }
  T.__closure = { indicatorWidth: sharedValue1 };
  T.__workletHash = 5223249035388;
  T.__initData = sharedValue;
  class R {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = closure_13;
        result = closure_13.set(arg1);
      }
      return;
    }
  }
  R.__closure = { previousIndicatorWidth: sharedValue2 };
  R.__workletHash = 14748619096684;
  R.__initData = sharedValue1;
  const animatedReaction = obj4.useAnimatedReaction(T, R);
  const items1 = [sharedValue1];
  __initData = scrollOverflow.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  sharedValue3 = state(activeIndex[6]).useSharedValue(activeIndex.get());
  const obj6 = state(activeIndex[6]);
  const tmp2 = state;
  let tmp3 = activeIndex;
  const fn = function k() {
    return Math.min(Math.max(activeIndex.get(), 0), length - 1);
  };
  fn.__closure = { activeIndex, itemCount: length };
  fn.__workletHash = 790542357728;
  fn.__initData = sharedValue2;
  derivedValue = state(activeIndex[6]).useDerivedValue(fn);
  const obj7 = state(activeIndex[6]);
  class G {
    constructor() {
      value = closure_16.get();
      diff = value - closure_15.get();
      return diff * closure_12.get();
    }
  }
  G.__closure = { clampedActiveIndex: derivedValue, defaultActiveIndex: sharedValue3, indicatorWidth: sharedValue1 };
  G.__workletHash = 10116271570175;
  G.__initData = __initData;
  derivedValue1 = state(activeIndex[6]).useDerivedValue(G);
  let obj8 = state(activeIndex[6]);
  class B {
    constructor() {
      value = closure_17.get();
      obj = pressedIndex;
      num = 1;
      if (pressedIndex.get() < 0) {
        obj3 = scrollOverflow;
        if (scrollOverflow.get() < 0) {
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj4 = closure_0(closure_2[6]);
          str = "clamp";
          tmp13 = obj4;
          interpolateResult = obj4.interpolate(obj3.get(), [-50, 0], [0.9, 1], "clamp");
          tmp15 = closure_12;
          num5 = 2;
          sum = value + -closure_12.get() * (1 - interpolateResult) / 2;
          num = interpolateResult;
        } else {
          sum = value;
          if (obj3.get() > 0) {
            tmp31 = closure_0;
            tmp32 = closure_2;
            obj13 = closure_0(closure_2[6]);
            str2 = "clamp";
            tmp33 = obj13;
            interpolateResult1 = obj13.interpolate(obj3.get(), [50, 0], [0.9, 1], "clamp");
            tmp35 = closure_12;
            num6 = 2;
            sum = value + closure_12.get() * (1 - interpolateResult1) / 2;
            num = interpolateResult1;
          }
        }
        obj5 = closure_16;
        if (0 === closure_16.get()) {
          tmp20 = c8;
          sum1 = sum + c8;
        } else {
          tmp17 = length;
          sum1 = sum;
          if (obj5.get() === length - 1) {
            tmp19 = c8;
            sum1 = sum - c8;
          }
        }
        obj6 = closure_12;
        obj7 = closure_13;
        value1 = closure_12.get();
        tmp22 = value1 === closure_13.get();
        if (!tmp22) {
          result = obj7.set(obj6.get());
        }
        withSpringResult = sum1;
        if (tmp22) {
          tmp25 = closure_0;
          tmp26 = closure_2;
          obj8 = closure_0(closure_2[7]);
          tmp27 = closure_9;
          withSpringResult = obj8.withSpring(sum1, closure_9);
        }
        obj = { transform: null };
        obj1 = { translateX: null };
        obj1.translateX = withSpringResult;
        items = [, ];
        items[0] = obj1;
        obj2 = { scaleX: null };
        tmp28 = closure_0;
        tmp29 = closure_2;
        obj12 = closure_0(closure_2[7]);
        tmp30 = closure_9;
        obj2.scaleX = obj12.withSpring(num, closure_9);
        items[1] = obj2;
        obj.transform = items;
        return obj;
      } else {
        obj2 = closure_16;
        value2 = obj.get();
        if (value2 < closure_16.get()) {
          tmp7 = c8;
          num2 = 1 + c8;
          tmp8 = closure_12;
          num4 = 0.02;
          diff = value - 0.02 * closure_12.get();
        } else {
          value3 = obj.get();
          num2 = 1;
          diff = value;
          if (value3 > obj2.get()) {
            tmp5 = c8;
            num2 = 1 + c8;
            tmp6 = closure_12;
            num3 = 0.02;
            diff = value + 0.02 * closure_12.get();
          }
        }
        tmp9 = num2;
        tmp10 = diff;
      }
      return;
    }
  }
  obj = { indicatorTranslateX: derivedValue1, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: num, indicatorWidth: sharedValue1, scrollOverflow, interpolate: state(activeIndex[6]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: 0.9, segmentSpacing: num, itemCount: length, previousIndicatorWidth: sharedValue2, withSpring: state(activeIndex[7]).withSpring, SELECTED_INDICATOR_SPRING };
  B.__closure = obj;
  B.__workletHash = 5537358752627;
  B.__initData = sharedValue3;
  animatedStyle = state(activeIndex[6]).useAnimatedStyle(B);
  const items2 = [items, sharedValue3, __initData, tmp4.indicator, animatedStyle];
  const items3 = [items, length, num, state, pressedIndex, "experimental_Large" === str, str, setActiveIndex];
  const memo = scrollOverflow.useMemo(() => items.map((id, index) => {
    const tmp = sharedValue3.get() === index;
    let tmp3;
    if (tmp) {
      tmp3 = __initData;
    }
    const obj = { onLayout: tmp3, style: null };
    items = [indicator.indicator, tmp ? animatedStyle : { opacity: 0 }];
    obj.style = items;
    return setActiveIndex(str(activeIndex[6]).View, obj, id.id);
  }), items2);
  function onPanGestureUpdate(translationX) {
    const result = translationX.translationX / sharedValue1.get();
    const result1 = activeIndex.set(Math.min(Math.max(sharedValue.get() + result, 0), length - 1));
  }
  onPanGestureUpdate.__closure = { indicatorWidth: sharedValue1, panIndex: sharedValue, activeIndex, itemCount: length };
  onPanGestureUpdate.__workletHash = 4853281820821;
  onPanGestureUpdate.__initData = derivedValue;
  const memo1 = scrollOverflow.useMemo(() => items.map((item, index) => {
    state = index;
    ({ label, id, icon } = item);
    if (0 === index) {
      let tmp3 = closure_8;
    } else if (index === itemCount - 1) {
      tmp3 = -closure_8;
    }
    if (0 === index) {
      let tmp6 = -closure_8;
    } else if (index === itemCount - 1) {
      tmp6 = closure_8;
    }
    let obj = {
      style: null,
      index,
      itemCount,
      label,
      state,
      pressed,
      onPress() {
        setActiveIndex(closure_0);
      },
      onPressIn() {
        const result = pressed.set(closure_0);
      },
      onPressOut() {
        const result = pressed.set(-1);
      },
      icon: null,
      variant: null
    };
    obj = { minWidth: `${1 / closure_10 * 100}%`, marginStart: tmp3, marginEnd: tmp6 };
    obj.style = obj;
    let tmp9 = null;
    if (closure_7) {
      tmp9 = icon;
    }
    obj.icon = tmp9;
    obj.variant = variant;
    return setActiveIndex(state(activeIndex[8]).SegmentedControlItem, obj, id);
  }), items3);
  const Gesture = state(activeIndex[9]).Gesture;
  const obj9 = state(activeIndex[6]);
  class J {
    constructor() {
      result = closure_11.set(activeIndex.get());
      return;
    }
  }
  J.__closure = { panIndex: sharedValue, activeIndex };
  J.__workletHash = 16822477236158;
  J.__initData = animatedStyle;
  const PanResult = Gesture.Pan();
  const onStartResult = Gesture.Pan().onStart(J);
  class H {
    constructor() {
      result = closure_11.set(-1);
      result1 = activeIndex.set(Math.round(activeIndex.get()));
      obj = closure_0(closure_2[6]);
      runOnJSResult = obj.runOnJS(setActiveIndex);
      tmp3Result = runOnJSResult(activeIndex.get());
      return;
    }
  }
  obj = { panIndex: sharedValue, activeIndex, runOnJS: state(activeIndex[6]).runOnJS, setActiveIndex };
  H.__closure = obj;
  H.__workletHash = 4531135834116;
  H.__initData = derivedValue1;
  const onUpdateResult = Gesture.Pan().onStart(J).onUpdate(onPanGestureUpdate);
  const onEndResult = Gesture.Pan().onStart(J).onUpdate(onPanGestureUpdate).onEnd(H);
  let str2 = "tabbar";
  if (obj15.isAndroid()) {
    str2 = "tablist";
  }
  obj1 = { accessibilityRole: str2, style: tmp4.controlsContainer, children: null };
  obj2 = { accessible: false, style: tmp4.indicatorContainer, children: memo };
  const items4 = [setActiveIndex(items, obj2), memo1];
  obj1.children = items4;
  const tmp18 = closure_7(items, obj1, items.length);
  obj3 = { horizontal: true, alwaysBounceHorizontal: false, contentContainerStyle: tmp4.scrollContentContainer, keyboardShouldPersistTaps: keyboardShouldPersistTaps.keyboardShouldPersistTaps, children: tmp18 };
  let tmp17Result = setActiveIndex(pressedIndex, obj3);
  if ("experimental_Large" === str) {
    obj4 = { gesture: onEndResult, children: tmp18 };
    tmp17Result = setActiveIndex(tmp2(tmp3[9]).GestureDetector, obj4);
  }
  return tmp17Result;
};