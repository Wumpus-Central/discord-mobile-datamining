// === Module 9366: SegmentedControl ===

// Module 9366 (SegmentedControl)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = { mass: 0.3, damping: 13, stiffness: 100, overshootClamping: true };
const createStyles = fn(5143);
let closure_9 = createStyles.createStyles((borderRadius, paddingVertical) => {
  const obj = { scrollContentContainer: { flexGrow: 1 }, controlsContainer: { backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" }, indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" }, indicator: null };
  const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" };
  obj.indicator = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius };
  return obj;
});
let closure_10 = { code: "(function SegmentedControlNativeTsx1(){let[indicatorWidth]=this.__closure;return indicatorWidth.get();})" };
let closure_11 = { code: "(function SegmentedControlNativeTsx2(_,previous){let[previousIndicatorWidth]=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}})" };
let closure_12 = { code: "(function SegmentedControlNativeTsx3(){let[activeIndex,itemCount]=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);})" };
let closure_13 = { code: "(function SegmentedControlNativeTsx4(){let[clampedActiveIndex,defaultActiveIndex,indicatorWidth]=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();})" };
let closure_14 = { code: "(function SegmentedControlNativeTsx5(){let[indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING]=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};})" };
let closure_15 = { code: "(function onPanGestureUpdate_SegmentedControlNativeTsx6(event){let[indicatorWidth,panIndex,activeIndex,itemCount]=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));})" };
let closure_16 = { code: "(function SegmentedControlNativeTsx7(){let[panIndex,activeIndex]=this.__closure;panIndex.set(activeIndex.get());})" };
let closure_17 = { code: "(function SegmentedControlNativeTsx8(){let[panIndex,activeIndex,scheduleOnRN,setActiveIndex]=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));scheduleOnRN(setActiveIndex,activeIndex.get());})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControl.native.tsx");

export function SegmentedControl(keyboardShouldPersistTaps) {
  state = keyboardShouldPersistTaps.state;
  _require = state;
  let str = keyboardShouldPersistTaps.variant;
  if (str === undefined) {
    str = "default";
  }
  importDefault = str;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  let animatedStyle;
  ({ activeIndex, items } = state);
  dependencyMap = items;
  const pressedIndex = state.pressedIndex;
  noop = pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  c4 = setActiveIndex;
  c5 = tmp;
  let num = 4;
  if ("experimental_Large" === str) {
    num = 8;
  }
  c6 = num;
  const tmp4 = c9(require("useToken").useToken(nativeDefault.modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), num);
  c7 = tmp4;
  c8 = length;
  let obj = require("useToken");
  const sharedValue = require("module_1652").useSharedValue(-1);
  const obj2 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  c9 = sharedValue1;
  const obj3 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  const obj4 = require("module_1652");
  let items1 = [c10, sharedValue1];
  _require = undefined;
  [tmp8, tmp9] = items1;
  class SegmentedControlNativeTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  let items2 = [tmp9];
  SegmentedControlNativeTsx1.__closure = items2;
  SegmentedControlNativeTsx1.__workletHash = 1609866190981;
  SegmentedControlNativeTsx1.__initData = tmp8;
  let items3 = [c11, sharedValue2];
  _require = undefined;
  [tmp10, tmp11] = items3;
  class SegmentedControlNativeTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = closure_0;
        result = closure_0.set(arg1);
      }
      return;
    }
  }
  let items4 = [tmp11];
  SegmentedControlNativeTsx2.__closure = items4;
  SegmentedControlNativeTsx2.__workletHash = 4382534066101;
  SegmentedControlNativeTsx2.__initData = tmp10;
  const animatedReaction = require("module_1652").useAnimatedReaction(SegmentedControlNativeTsx1, SegmentedControlNativeTsx2);
  const items5 = [sharedValue1];
  const callback = noop.useCallback((nativeEvent) => {
    const result = _undefined7.set(nativeEvent.nativeEvent.layout.width);
  }, items5);
  c10 = callback;
  const obj5 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(activeIndex.get());
  c11 = sharedValue3;
  const tmp2Result = require("module_1652");
  const items6 = [animatedStyle, activeIndex, items.length];
  _require = undefined;
  importDefault = undefined;
  [tmp15, tmp16, tmp17] = items6;
  class SegmentedControlNativeTsx3 {
    constructor() {
      return Math.min(Math.max(closure_0.get(), 0), closure_1 - 1);
    }
  }
  const items7 = [tmp16, tmp17];
  SegmentedControlNativeTsx3.__closure = items7;
  SegmentedControlNativeTsx3.__workletHash = 609070730457;
  SegmentedControlNativeTsx3.__initData = tmp15;
  const derivedValue = require("module_1652").useDerivedValue(SegmentedControlNativeTsx3);
  const tmp2Result6 = require("module_1652");
  const items8 = [c13, derivedValue, sharedValue3, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp19, tmp20, tmp21, tmp22] = items8;
  class SegmentedControlNativeTsx4 {
    constructor() {
      value = closure_0.get();
      diff = value - closure_1.get();
      return diff * closure_2.get();
    }
  }
  const items9 = [tmp20, tmp21, tmp22];
  SegmentedControlNativeTsx4.__closure = items9;
  SegmentedControlNativeTsx4.__workletHash = 2708340331974;
  SegmentedControlNativeTsx4.__initData = tmp19;
  const derivedValue1 = require("module_1652").useDerivedValue(SegmentedControlNativeTsx4);
  const tmp2Result7 = require("module_1652");
  const items10 = [closure_14, derivedValue1, pressedIndex, derivedValue, 0.04, sharedValue1, state.scrollOverflow, require("module_1652").interpolate, 50, 0.9, num, items.length, sharedValue2, require("spring/spring").withSpring, c8];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  animatedStyle = undefined;
  c13 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items10;
  class SegmentedControlNativeTsx5 {
    constructor() {
      value = closure_0.get();
      obj = closure_1;
      num = 1;
      if (closure_1.get() < 0) {
        obj3 = closure_5;
        if (closure_5.get() < 0) {
          tmp12 = closure_6;
          tmp13 = closure_7;
          items = [, ];
          items[0] = -closure_7;
          items[1] = 0;
          tmp14 = closure_8;
          items1 = [, ];
          items1[0] = closure_8;
          items1[1] = 1;
          str = "clamp";
          tmp15 = items;
          tmp16 = items1;
          tmp17 = closure_6(obj3.get(), items, items1, "clamp");
          tmp18 = closure_4;
          num5 = 2;
          sum = value + -closure_4.get() * (1 - tmp17) / 2;
          num = tmp17;
        } else {
          sum = value;
          if (obj3.get() > 0) {
            tmp31 = closure_6;
            tmp32 = closure_7;
            items2 = [, ];
            items2[0] = closure_7;
            items2[1] = 0;
            tmp33 = closure_8;
            items3 = [, ];
            items3[0] = closure_8;
            items3[1] = 1;
            str2 = "clamp";
            tmp34 = items2;
            tmp35 = items3;
            tmp36 = closure_6(obj3.get(), items2, items3, "clamp");
            tmp37 = closure_4;
            num6 = 2;
            sum = value + closure_4.get() * (1 - tmp36) / 2;
            num = tmp36;
          }
        }
        obj4 = closure_2;
        if (0 === closure_2.get()) {
          tmp22 = closure_9;
          sum1 = sum + closure_9;
        } else {
          tmp19 = closure_10;
          sum1 = sum;
          if (obj4.get() === closure_10 - 1) {
            tmp21 = closure_9;
            sum1 = sum - closure_9;
          }
        }
        obj5 = closure_4;
        obj6 = closure_11;
        value1 = closure_4.get();
        tmp24 = value1 === closure_11.get();
        if (!tmp24) {
          result = obj6.set(obj5.get());
        }
        tmp26 = sum1;
        if (tmp24) {
          tmp27 = closure_12;
          tmp28 = closure_13;
          tmp26 = closure_12(sum1, closure_13);
        }
        obj1 = { transform: null };
        obj10 = { translateX: null };
        obj10.translateX = tmp26;
        items4 = [, ];
        items4[0] = obj10;
        obj11 = { scaleX: null };
        tmp29 = closure_12;
        tmp30 = closure_13;
        obj11.scaleX = closure_12(num, closure_13);
        items4[1] = obj11;
        obj1.transform = items4;
        return obj1;
      } else {
        obj2 = closure_2;
        value2 = obj.get();
        if (value2 < closure_2.get()) {
          tmp7 = closure_3;
          num2 = 1 + closure_3;
          tmp8 = closure_4;
          num4 = 2;
          diff = value - closure_4.get() * (closure_3 / 2);
        } else {
          value3 = obj.get();
          num2 = 1;
          diff = value;
          if (value3 > obj2.get()) {
            tmp5 = closure_3;
            num2 = 1 + closure_3;
            tmp6 = closure_4;
            num3 = 2;
            diff = value + closure_4.get() * (closure_3 / 2);
          }
        }
        tmp9 = num2;
        tmp10 = diff;
      }
      return;
    }
  }
  const items11 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  SegmentedControlNativeTsx5.__closure = items11;
  SegmentedControlNativeTsx5.__workletHash = 11542678716522;
  SegmentedControlNativeTsx5.__initData = tmp24;
  animatedStyle = require("module_1652").useAnimatedStyle(SegmentedControlNativeTsx5);
  const items12 = [items, sharedValue3, callback, tmp4.indicator, animatedStyle];
  const items13 = [items, items.length, num, state, pressedIndex, "experimental_Large" === str, str, setActiveIndex];
  const memo = obj6.useMemo(() => _undefined3.map((id, index) => {
    const tmp = _undefined8.get() === index;
    let tmp3;
    if (tmp) {
      tmp3 = closure_1_10;
    }
    const obj = { onLayout: tmp3, style: null };
    items = [indicator.indicator, tmp ? animatedStyle : { opacity: 0 }];
    obj.style = items;
    return c6(c1(c2[6]).View, obj, id.id);
  }), items12);
  const items14 = [closure_15, sharedValue1, sharedValue, activeIndex, items.length];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp42, tmp43, tmp44, tmp45, tmp46] = items14;
  function onPanGestureUpdate(translationX) {
    const result = translationX.translationX / _undefined.get();
    const result1 = _undefined3.set(Math.min(Math.max(_undefined2.get() + result, 0), c3 - 1));
  }
  const items15 = [tmp43, tmp44, tmp45, tmp46];
  onPanGestureUpdate.__closure = items15;
  onPanGestureUpdate.__workletHash = 17036555913324;
  onPanGestureUpdate.__initData = tmp42;
  const memo1 = obj6.useMemo(() => _undefined3.map((item, index) => {
    state = index;
    ({ label, id, icon } = item);
    if (0 === index) {
      let tmp3 = closure_6;
    } else if (index === itemCount - 1) {
      tmp3 = -closure_6;
    }
    if (0 === index) {
      let tmp6 = -closure_6;
    } else if (index === itemCount - 1) {
      tmp6 = closure_6;
    }
    const obj = {
      style: { minWidth: `${1 / closure_8 * 100}%`, marginStart: tmp3, marginEnd: tmp6 },
      index,
      itemCount,
      label,
      state,
      pressed,
      onPress: function handlePress() {
        _undefined4(closure_0);
      },
      onPressIn: function handlePressIn() {
        const result = pressed.set(closure_0);
      },
      onPressOut: function handlePressOut() {
        const result = pressed.set(-1);
      },
      icon: null,
      variant: null
    };
    let tmp9 = null;
    if (closure_5) {
      tmp9 = icon;
    }
    obj.icon = tmp9;
    obj.variant = variant;
    return _undefined6(state(_undefined3[8]).SegmentedControlItem, obj, id);
  }), items13);
  const Gesture = tmp2(5430).Gesture;
  const tmp2Result8 = require("module_1652");
  const items16 = [closure_16, sharedValue, activeIndex];
  _require = undefined;
  importDefault = undefined;
  [tmp47, tmp48, tmp49] = items16;
  class SegmentedControlNativeTsx7 {
    constructor() {
      result = closure_0.set(closure_1.get());
      return;
    }
  }
  const items17 = [tmp48, tmp49];
  SegmentedControlNativeTsx7.__closure = items17;
  SegmentedControlNativeTsx7.__workletHash = 8480234970536;
  SegmentedControlNativeTsx7.__initData = tmp47;
  const PanResult = Gesture.Pan();
  const onStartResult = Gesture.Pan().onStart(SegmentedControlNativeTsx7);
  const items18 = [closure_17, sharedValue, activeIndex, require("module_1705").scheduleOnRN, setActiveIndex];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp50, tmp51, tmp52, tmp53, tmp54] = items18;
  class SegmentedControlNativeTsx8 {
    constructor() {
      result = closure_0.set(-1);
      result1 = closure_1.set(Math.round(closure_1.get()));
      tmp3 = closure_2(closure_3, closure_1.get());
      return;
    }
  }
  const items19 = [tmp51, tmp52, tmp53, tmp54];
  SegmentedControlNativeTsx8.__closure = items19;
  SegmentedControlNativeTsx8.__workletHash = 15809961228383;
  SegmentedControlNativeTsx8.__initData = tmp50;
  const onUpdateResult = Gesture.Pan().onStart(SegmentedControlNativeTsx7).onUpdate(onPanGestureUpdate);
  const onEndResult = Gesture.Pan().onStart(SegmentedControlNativeTsx7).onUpdate(onPanGestureUpdate).onEnd(SegmentedControlNativeTsx8);
  let str2 = "tablist";
  if (!tmp2Result9.isAndroid()) {
    let str3;
    if (tmp) {
      str3 = "tabbar";
    }
    str2 = str3;
  }
  let obj7 = { accessibilityRole: str2, style: tmp4.controlsContainer, children: null };
  const items20 = [c6(c4, { accessible: false, style: tmp4.indicatorContainer, children: memo }), memo1];
  obj7.children = items20;
  const tmp57 = c7(c4, obj7, items.length);
  let obj8 = { accessible: false, style: tmp4.indicatorContainer, children: memo };
  tmp2Result9 = require("PlatformUtils");
  const tmp58 = c5;
  let str4;
  if (tmp2Result10.isIOS()) {
    str4 = "tabbar";
  }
  let tmp56Result = tmp56(tmp58, { horizontal: true, accessibilityRole: str4, alwaysBounceHorizontal: false, contentContainerStyle: tmp4.scrollContentContainer, keyboardShouldPersistTaps: keyboardShouldPersistTaps.keyboardShouldPersistTaps, children: tmp57 });
  if ("experimental_Large" === str) {
    const obj10 = { gesture: onEndResult, children: tmp57 };
    tmp56Result = tmp56(tmp2(5430).GestureDetector, obj10);
  }
  return tmp56Result;
}