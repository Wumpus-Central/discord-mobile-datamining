// discord_app/design/components/SegmentedControl/native/SegmentedControl.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 0.04;
let c9 = 0.9;
let closure_10 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
const createStyles = fn(5091);
let closure_11 = createStyles.createStyles((borderRadius, paddingVertical) => {
  const obj = {
    scrollContentContainer: { flexGrow: 1 },
    controlsContainer: {
      backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND,
      borderRadius: borderRadius + paddingVertical,
      paddingVertical,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" },
    indicator: null,
  };
  const obj2 = {
    backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND,
    borderRadius: borderRadius + paddingVertical,
    paddingVertical,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
  obj.indicator = {
    flex: 1,
    backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND,
    borderRadius,
  };
  return obj;
});
let closure_12 = {
  code: "function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}",
};
let __initData = {
  code: "function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}",
};
let closure_14 = {
  code: "function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}",
};
let closure_15 = {
  code: "function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}",
};
let closure_16 = {
  code: 'function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX=1+PRESSED_TRANSLATE_AMOUNT;translateX=translateX-indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else{if(pressedIndex.get()>clampedActiveIndex.get()){scaleX=1+PRESSED_TRANSLATE_AMOUNT;translateX=translateX+indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],"clamp");const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX=translateX+-scaleAmount/2;}else{if(scrollOverflow.get()>0){const scaleFactor_0=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],"clamp");const scaleAmount_0=indicatorWidth.get()*(1-scaleFactor_0);scaleX=scaleFactor_0;translateX=translateX+scaleAmount_0/2;}}if(clampedActiveIndex.get()===0){translateX=translateX+segmentSpacing;}else{if(clampedActiveIndex.get()===itemCount-1){translateX=translateX-segmentSpacing;}}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}',
};
let closure_17 = {
  code: "function onPanGestureUpdate_SegmentedControlNativeTsx6(event_0){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event_0.translationX/indicatorWidth.get();const index_1=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index_1,0),itemCount-1));}",
};
let closure_18 = {
  code: "function SegmentedControlNativeTsx7(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}",
};
let closure_19 = {
  code: "function SegmentedControlNativeTsx8(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}",
};
const __initData2 = {
  code: "function SegmentedControlNativeTsx9(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}",
};
const __initData3 = {
  code: "function SegmentedControlNativeTsx10(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}",
};
const __initData4 = {
  code: "function SegmentedControlNativeTsx11(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}",
};
const __initData5 = {
  code: "function SegmentedControlNativeTsx12(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}",
};
const __initData6 = {
  code: "function SegmentedControlNativeTsx13(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor_0=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount_0=indicatorWidth.get()*(1-scaleFactor_0);scaleX=scaleFactor_0;translateX+=scaleAmount_0/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}",
};
const __initData7 = {
  code: "function onPanGestureUpdate_SegmentedControlNativeTsx14(event_0){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event_0.translationX/indicatorWidth.get();const index_1=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index_1,0),itemCount-1));}",
};
const __initData8 = {
  code: "function SegmentedControlNativeTsx15(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}",
};
const __initData9 = {
  code: "function SegmentedControlNativeTsx16(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControl.native.tsx");

export const SegmentedControl = ReactCompilerGating.isReactCompilerEnabled()
  ? function SegmentedControl(state) {
      const cResult = state(activeIndex[6]).c(46);
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
      closure_6 = tmp4;
      let num = 4;
      if ("experimental_Large" === str) {
        num = 8;
      }
      let obj = state(activeIndex[6]);
      const tmp5 = sharedValue1(
        state(activeIndex[7]).useToken(str(activeIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS),
        num,
      );
      PRESSED_TRANSLATE_AMOUNT = tmp5;
      const tmpResult = state(activeIndex[7]);
      const sharedValue = state(activeIndex[8]).useSharedValue(-1);
      const tmpResult9 = state(activeIndex[8]);
      sharedValue1 = state(activeIndex[8]).useSharedValue(0);
      const tmpResult10 = state(activeIndex[8]);
      const sharedValue2 = state(activeIndex[8]).useSharedValue(0);
      const tmpResult11 = state(activeIndex[8]);
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
      fn2.__initData = __initData;
      const animatedReaction = state(activeIndex[8]).useAnimatedReaction(fn, fn2);
      if (cResult[0] !== sharedValue1) {
        class R {
          constructor(arg0) {
            result = closure_11.set(state.nativeEvent.layout.width);
            return;
          }
        }
        cResult[0] = sharedValue1;
        cResult[1] = R;
      } else {
        class R {
          constructor(arg0) {
            result = closure_11.set(state.nativeEvent.layout.width);
            return;
          }
        }
      }
      __initData = R;
      const tmpResult12 = state(activeIndex[8]);
      const sharedValue3 = state(activeIndex[8]).useSharedValue(activeIndex.get());
      const tmpResult13 = state(activeIndex[8]);
      class J {
        constructor() {
          return Math.min(Math.max(activeIndex.get(), 0), length - 1);
        }
      }
      J.__closure = { activeIndex, itemCount: items.length };
      J.__workletHash = 790542357728;
      J.__initData = sharedValue3;
      const derivedValue = state(activeIndex[8]).useDerivedValue(J);
      const tmpResult14 = state(activeIndex[8]);
      const fn3 = function z() {
        value = derivedValue.get();
        const diff = value - sharedValue3.get();
        return diff * sharedValue1.get();
      };
      fn3.__closure = {
        clampedActiveIndex: derivedValue,
        defaultActiveIndex: sharedValue3,
        indicatorWidth: sharedValue1,
      };
      fn3.__workletHash = 10116271570175;
      fn3.__initData = derivedValue;
      const derivedValue1 = state(activeIndex[8]).useDerivedValue(fn3);
      const tmpResult15 = state(activeIndex[8]);
      const fn4 = function j() {
        value = derivedValue1.get();
        num = 1;
        if (pressedIndex.get() < 0) {
          if (scrollOverflow.get() < 0) {
            const obj4 = ReanimatedRexport;
            const items = [c9, 1];
            const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], items, "clamp");
            let sum = value + (-sharedValue1.get() * (1 - interpolateResult)) / 2;
            num = interpolateResult;
          } else {
            sum = value;
            if (scrollOverflow.get() > 0) {
              const obj13 = ReanimatedRexport;
              const items1 = [c9, 1];
              const interpolateResult1 = obj13.interpolate(scrollOverflow.get(), [50, 0], items1, "clamp");
              sum = value + (sharedValue1.get() * (1 - interpolateResult1)) / 2;
              num = interpolateResult1;
            }
          }
          if (0 === derivedValue.get()) {
            let sum1 = sum + num;
          } else {
            sum1 = sum;
            if (derivedValue.get() === length - 1) {
              sum1 = sum - num;
            }
          }
          const value4 = sharedValue1.get();
          const tmp22 = value4 === sharedValue2.get();
          if (!tmp22) {
            const result = sharedValue2.set(sharedValue1.get());
          }
          let withSpringResult = sum1;
          if (tmp22) {
            withSpringResult = spring.withSpring(sum1, closure_10);
          }
          const obj9 = { transform: null };
          const obj10 = { translateX: withSpringResult };
          const items2 = [obj10];
          const obj11 = { scaleX: spring.withSpring(num, closure_10) };
          items2[1] = obj11;
          obj9.transform = items2;
          return obj9;
        } else {
          const value5 = pressedIndex.get();
          if (value5 < derivedValue.get()) {
            let diff = value - 0.02 * sharedValue1.get();
          } else {
            const value6 = pressedIndex.get();
            diff = value;
            if (value6 > derivedValue.get()) {
              diff = value + 0.02 * sharedValue1.get();
            }
          }
        }
      };
      const tmpResult16 = state(activeIndex[8]);
      fn4.__closure = {
        indicatorTranslateX: derivedValue1,
        pressedIndex,
        clampedActiveIndex: derivedValue,
        PRESSED_TRANSLATE_AMOUNT,
        indicatorWidth: sharedValue1,
        scrollOverflow,
        interpolate: state(activeIndex[8]).interpolate,
        SCROLL_OVERFLOW_UPPER_BOUND: 50,
        SCROLL_OVERFLOW_MAX_SCALE: items.length,
        segmentSpacing: num,
        itemCount: items.length,
        previousIndicatorWidth: sharedValue2,
        withSpring: state(activeIndex[9]).withSpring,
        SELECTED_INDICATOR_SPRING: sharedValue,
      };
      fn4.__workletHash = 11639519868122;
      fn4.__initData = derivedValue1;
      const animatedStyle = tmpResult16.useAnimatedStyle(fn4);
      if (cResult[2] === sharedValue3) {
        class R {
          constructor(arg0) {
            result = closure_11.set(state.nativeEvent.layout.width);
            return;
          }
        }
      }
      if (cResult[8] === sharedValue3) {
        class R {
          constructor(arg0) {
            result = closure_11.set(state.nativeEvent.layout.width);
            return;
          }
        }
      }
      const fn5 = function q(id, arg1) {
        const tmp = sharedValue3.get() === arg1;
        let tmp3;
        if (tmp) {
          tmp3 = closure_13;
        }
        const obj = { onLayout: tmp3, style: null };
        const items = [indicator.indicator, tmp ? animatedStyle : { opacity: 0 }];
        obj.style = items;
        return timestampProducer(ReanimatedRexportDefault.View, obj, id.id);
      };
      cResult[8] = sharedValue3;
      cResult[9] = R;
      cResult[10] = animatedStyle;
      cResult[11] = tmp5.indicator;
      cResult[12] = fn5;
      const obj2 = {
        indicatorTranslateX: derivedValue1,
        pressedIndex,
        clampedActiveIndex: derivedValue,
        PRESSED_TRANSLATE_AMOUNT,
        indicatorWidth: sharedValue1,
        scrollOverflow,
        interpolate: state(activeIndex[8]).interpolate,
        SCROLL_OVERFLOW_UPPER_BOUND: 50,
        SCROLL_OVERFLOW_MAX_SCALE: items.length,
        segmentSpacing: num,
        itemCount: items.length,
        previousIndicatorWidth: sharedValue2,
        withSpring: state(activeIndex[9]).withSpring,
        SELECTED_INDICATOR_SPRING: sharedValue,
      };
    }
  : function SegmentedControl(keyboardShouldPersistTaps) {
      state = keyboardShouldPersistTaps.state;
      let str = keyboardShouldPersistTaps.variant;
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
      closure_7 = tmp;
      let num = 4;
      if ("experimental_Large" === str) {
        num = 8;
      }
      const tmp4 = sharedValue(
        state(activeIndex[7]).useToken(str(activeIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS),
        num,
      );
      SCROLL_OVERFLOW_MAX_SCALE = tmp4;
      length = items.length;
      let obj = state(activeIndex[7]);
      sharedValue = state(activeIndex[8]).useSharedValue(-1);
      const obj2 = state(activeIndex[8]);
      sharedValue1 = state(activeIndex[8]).useSharedValue(0);
      const obj3 = state(activeIndex[8]);
      sharedValue2 = state(activeIndex[8]).useSharedValue(0);
      let obj4 = state(activeIndex[8]);
      const fn = function x() {
        return sharedValue1.get();
      };
      fn.__closure = { indicatorWidth: sharedValue1 };
      fn.__workletHash = 11268303410804;
      fn.__initData = __initData2;
      class I {
        constructor(arg0, arg1) {
          if (null != arg1) {
            tmp = closure_13;
            result = closure_13.set(arg1);
          }
          return;
        }
      }
      I.__closure = { previousIndicatorWidth: sharedValue2 };
      I.__workletHash = 6128550580287;
      I.__initData = __initData3;
      const animatedReaction = state(activeIndex[8]).useAnimatedReaction(fn, I);
      let items1 = [sharedValue1];
      callback = scrollOverflow.useCallback((nativeEvent) => {
        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      }, items1);
      const obj5 = state(activeIndex[8]);
      sharedValue3 = state(activeIndex[8]).useSharedValue(activeIndex.get());
      const obj6 = state(activeIndex[8]);
      class G {
        constructor() {
          return Math.min(Math.max(activeIndex.get(), 0), length - 1);
        }
      }
      G.__closure = { activeIndex, itemCount: length };
      G.__workletHash = 2197756957491;
      G.__initData = __initData4;
      derivedValue = state(activeIndex[8]).useDerivedValue(G);
      const obj7 = state(activeIndex[8]);
      class H {
        constructor() {
          value = closure_16.get();
          diff = value - closure_15.get();
          return diff * closure_12.get();
        }
      }
      H.__closure = {
        clampedActiveIndex: derivedValue,
        defaultActiveIndex: sharedValue3,
        indicatorWidth: sharedValue1,
      };
      H.__workletHash = 15730011125640;
      H.__initData = __initData5;
      derivedValue1 = state(activeIndex[8]).useDerivedValue(H);
      let obj8 = state(activeIndex[8]);
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
              obj4 = closure_0(closure_2[8]);
              tmp13 = c9;
              items = [,];
              items[0] = c9;
              items[1] = 1;
              str = "clamp";
              tmp14 = obj4;
              tmp15 = items;
              interpolateResult = obj4.interpolate(obj3.get(), [-50, 0], items, "clamp");
              tmp17 = closure_12;
              num5 = 2;
              sum = value + (-closure_12.get() * (1 - interpolateResult)) / 2;
              num = interpolateResult;
            } else {
              sum = value;
              if (obj3.get() > 0) {
                tmp33 = closure_0;
                tmp34 = closure_2;
                obj13 = closure_0(closure_2[8]);
                tmp35 = c9;
                items1 = [,];
                items1[0] = c9;
                items1[1] = 1;
                str2 = "clamp";
                tmp36 = obj13;
                tmp37 = items1;
                interpolateResult1 = obj13.interpolate(obj3.get(), [50, 0], items1, "clamp");
                tmp39 = closure_12;
                num6 = 2;
                sum = value + (closure_12.get() * (1 - interpolateResult1)) / 2;
                num = interpolateResult1;
              }
            }
            obj5 = closure_16;
            if (0 === closure_16.get()) {
              tmp22 = c8;
              sum1 = sum + c8;
            } else {
              tmp19 = length;
              sum1 = sum;
              if (obj5.get() === length - 1) {
                tmp21 = c8;
                sum1 = sum - c8;
              }
            }
            obj6 = closure_12;
            obj7 = closure_13;
            value1 = closure_12.get();
            tmp24 = value1 === closure_13.get();
            if (!tmp24) {
              result = obj7.set(obj6.get());
            }
            withSpringResult = sum1;
            if (tmp24) {
              tmp27 = closure_0;
              tmp28 = closure_2;
              obj8 = closure_0(closure_2[9]);
              tmp29 = closure_10;
              withSpringResult = obj8.withSpring(sum1, closure_10);
            }
            obj1 = { transform: null };
            obj14 = { translateX: null };
            obj14.translateX = withSpringResult;
            items2 = [,];
            items2[0] = obj14;
            obj15 = { scaleX: null };
            tmp30 = closure_0;
            tmp31 = closure_2;
            obj12 = closure_0(closure_2[9]);
            tmp32 = closure_10;
            obj15.scaleX = obj12.withSpring(num, closure_10);
            items2[1] = obj15;
            obj1.transform = items2;
            return obj1;
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
      let obj9 = state(activeIndex[8]);
      B.__closure = {
        indicatorTranslateX: derivedValue1,
        pressedIndex,
        clampedActiveIndex: derivedValue,
        PRESSED_TRANSLATE_AMOUNT: num,
        indicatorWidth: sharedValue1,
        scrollOverflow,
        interpolate: state(activeIndex[8]).interpolate,
        SCROLL_OVERFLOW_UPPER_BOUND: 50,
        SCROLL_OVERFLOW_MAX_SCALE,
        segmentSpacing: num,
        itemCount: length,
        previousIndicatorWidth: sharedValue2,
        withSpring: state(activeIndex[9]).withSpring,
        SELECTED_INDICATOR_SPRING: length,
      };
      B.__workletHash = 16746746791211;
      B.__initData = __initData6;
      animatedStyle = obj9.useAnimatedStyle(B);
      let items2 = [items, sharedValue3, callback, tmp4.indicator, animatedStyle];
      const items3 = [items, length, num, state, pressedIndex, "experimental_Large" === str, str, setActiveIndex];
      const memo = scrollOverflow.useMemo(
        () =>
          items.map((id, index) => {
            const tmp = sharedValue3.get() === index;
            let tmp3;
            if (tmp) {
              tmp3 = callback;
            }
            const obj = { onLayout: tmp3, style: null };
            items = [indicator.indicator, tmp ? animatedStyle : { opacity: 0 }];
            obj.style = items;
            return setActiveIndex(str(activeIndex[8]).View, obj, id.id);
          }),
        items2,
      );
      function onPanGestureUpdate(translationX) {
        const result = translationX.translationX / sharedValue1.get();
        const result1 = activeIndex.set(Math.min(Math.max(sharedValue.get() + result, 0), length - 1));
      }
      onPanGestureUpdate.__closure = {
        indicatorWidth: sharedValue1,
        panIndex: sharedValue,
        activeIndex,
        itemCount: length,
      };
      onPanGestureUpdate.__workletHash = 14871430458246;
      onPanGestureUpdate.__initData = __initData7;
      const memo1 = scrollOverflow.useMemo(
        () =>
          items.map((item, index) => {
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
            const obj = {
              style: { minWidth: `${(1 / closure_10) * 100}%`, marginStart: tmp3, marginEnd: tmp6 },
              index,
              itemCount,
              label,
              state,
              pressed,
              onPress: function handlePress() {
                setActiveIndex(closure_0);
              },
              onPressIn: function handlePressIn() {
                const result = pressed.set(closure_0);
              },
              onPressOut: function handlePressOut() {
                const result = pressed.set(-1);
              },
              icon: null,
              variant: null,
            };
            let tmp9 = null;
            if (closure_7) {
              tmp9 = icon;
            }
            obj.icon = tmp9;
            obj.variant = variant;
            return setActiveIndex(state(activeIndex[10]).SegmentedControlItem, obj, id);
          }),
        items3,
      );
      const Gesture = state(activeIndex[11]).Gesture;
      let obj10 = {
        indicatorTranslateX: derivedValue1,
        pressedIndex,
        clampedActiveIndex: derivedValue,
        PRESSED_TRANSLATE_AMOUNT: num,
        indicatorWidth: sharedValue1,
        scrollOverflow,
        interpolate: state(activeIndex[8]).interpolate,
        SCROLL_OVERFLOW_UPPER_BOUND: 50,
        SCROLL_OVERFLOW_MAX_SCALE,
        segmentSpacing: num,
        itemCount: length,
        previousIndicatorWidth: sharedValue2,
        withSpring: state(activeIndex[9]).withSpring,
        SELECTED_INDICATOR_SPRING: length,
      };
      const fn2 = function z() {
        const result = sharedValue.set(activeIndex.get());
      };
      fn2.__closure = { panIndex: sharedValue, activeIndex };
      fn2.__workletHash = 7470248218145;
      fn2.__initData = __initData9;
      const PanResult = Gesture.Pan();
      const onStartResult = Gesture.Pan().onStart(fn2);
      class J {
        constructor() {
          result = closure_11.set(-1);
          result1 = activeIndex.set(Math.round(activeIndex.get()));
          obj = closure_0(closure_2[8]);
          runOnJSResult = obj.runOnJS(setActiveIndex);
          tmp3Result = runOnJSResult(activeIndex.get());
          return;
        }
      }
      const onUpdateResult = Gesture.Pan().onStart(fn2).onUpdate(onPanGestureUpdate);
      J.__closure = { panIndex: sharedValue, activeIndex, runOnJS: state(activeIndex[8]).runOnJS, setActiveIndex };
      J.__workletHash = 17546470890647;
      J.__initData = __initData8;
      let obj11 = { panIndex: sharedValue, activeIndex, runOnJS: state(activeIndex[8]).runOnJS, setActiveIndex };
      const onEndResult = onUpdateResult.onEnd(J);
      let str2 = "tablist";
      if (!obj15.isAndroid()) {
        let str3;
        if (tmp) {
          str3 = "tabbar";
        }
        str2 = str3;
      }
      const obj12 = { accessibilityRole: str2, style: tmp4.controlsContainer, children: null };
      const items4 = [
        setActiveIndex(items, { accessible: false, style: tmp4.indicatorContainer, children: memo }),
        memo1,
      ];
      obj12.children = items4;
      const tmp18 = closure_7(items, obj12, items.length);
      let obj13 = { accessible: false, style: tmp4.indicatorContainer, children: memo };
      obj15 = state(activeIndex[12]);
      const tmp19 = pressedIndex;
      let str4;
      if (tmp2Result.isIOS()) {
        str4 = "tabbar";
      }
      let tmp17Result = tmp17(tmp19, {
        horizontal: true,
        accessibilityRole: str4,
        alwaysBounceHorizontal: false,
        contentContainerStyle: tmp4.scrollContentContainer,
        keyboardShouldPersistTaps: keyboardShouldPersistTaps.keyboardShouldPersistTaps,
        children: tmp18,
      });
      if ("experimental_Large" === str) {
        const obj16 = { gesture: onEndResult, children: tmp18 };
        tmp17Result = tmp17(tmp2(tmp3[11]).GestureDetector, obj16);
      }
      return tmp17Result;
    };
