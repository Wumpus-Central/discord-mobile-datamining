// === Module 12282: Tabs ===

// Module 12282 (Tabs)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9074 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let state;

let ScrollView;
let closure_4;
let metroImportDefault;
let metroRequire;
function defaultCountFormatter(toLocaleString) {
  return toLocaleString.toLocaleString(LocaleStore.locale);
}
({ View: closure_4, ScrollView } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let c9 = 0.04;
let c10 = 0.9;
let c11 = 16;
let closure_12 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
let closure_13 = createStyles.createStyles((gap, arg1) => {
  let TEXT_BRAND;
  const obj = { container: { display: "flex", flexGrow: 1, minWidth: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 }, controlsContainer: { marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap }, indicatorContainer: size, indicator: { height: 2, backgroundColor: TEXT_BRAND, borderTopStartRadius: nativeDefault.radii.xs, borderTopEndRadius: nativeDefault.radii.xs } };
  ({ display: "flex", flexGrow: 1, minWidth: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 });
  ({ marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap });
  size = { position: "absolute", width: "100%", height: "100%", flexDirection: "row", alignItems: "flex-end", marginLeft: nativeDefault.space.PX_16 };
  if ("overlay" === arg1) {
    TEXT_BRAND = nativeDefault.colors.TEXT_STRONG;
  } else {
    TEXT_BRAND = nativeDefault.colors.TEXT_BRAND;
  }
  ({ height: 2, backgroundColor: TEXT_BRAND, borderTopStartRadius: nativeDefault.radii.xs, borderTopEndRadius: nativeDefault.radii.xs });
  return obj;
});
let closure_15 = { code: "function TabsNativeTsx1(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}" };
let closure_16 = { code: "function TabsNativeTsx2(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null){return 0;}return activeItem.width;}" };
let closure_17 = { code: "function TabsNativeTsx3(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}" };
let closure_18 = { code: "function TabsNativeTsx4(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX=1+PRESSED_TRANSLATE_AMOUNT;translateX=translateX-indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else{if(pressedIndex.get()>clampedActiveIndex.get()){scaleX=1+PRESSED_TRANSLATE_AMOUNT;translateX=translateX+indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],\"clamp\");const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX=translateX+-scaleAmount/2;}else{if(scrollOverflow.get()>0){const scaleFactor_0=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],\"clamp\");const scaleAmount_0=indicatorWidth.get()*(1-scaleFactor_0);scaleX=scaleFactor_0;translateX=translateX+scaleAmount_0/2;}}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
let closure_19 = { code: "function TabsNativeTsx5(event_0){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event_0.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event_0.contentOffset.x);}" };
let closure_20 = { code: "function TabsNativeTsx6(){const{onEndDrag}=this.__closure;var _onEndDrag;(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}" };
let closure_21 = { code: "function TabsNativeTsx7(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}" };
const __initData = { code: "function TabsNativeTsx8(props,prevState){const{cheapWorkletShallowEqual,itemSpacing,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions_0$act,_itemDimensions_0$act2,_itemDimensions_0$act3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex)){return;}if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined)){return;}const{scrollOffset:scrollOffset_0,activeIndex:activeIndex_0,itemDimensions:itemDimensions_0}=props;const width_0=itemDimensions_0.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions_0$act=(_itemDimensions_0$act2=itemDimensions_0[activeIndex_0])===null||_itemDimensions_0$act2===void 0?void 0:_itemDimensions_0$act2.x)!==null&&_itemDimensions_0$act!==void 0?_itemDimensions_0$act:0)+(activeIndex_0-1)*itemSpacing;const itemWidth=(_itemDimensions_0$act3=itemDimensions_0[activeIndex_0])===null||_itemDimensions_0$act3===void 0?void 0:_itemDimensions_0$act3.width;if(width_0===0||itemOffset==null||itemWidth==null){return;}if(scrollOffset_0+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else{if(itemOffset<scrollOffset_0){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}}" };
let closure_23 = { code: "function TabsNativeTsx9(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}" };
let closure_24 = { code: "function TabsNativeTsx10(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;}" };
const __initData2 = { code: "function TabsNativeTsx11(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}" };
const __initData3 = { code: "function TabsNativeTsx12(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor_0=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount_0=indicatorWidth.get()*(1-scaleFactor_0);scaleX=scaleFactor_0;translateX+=scaleAmount_0/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
const __initData4 = { code: "function TabsNativeTsx13(event_0){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event_0.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event_0.contentOffset.x);}" };
const __initData5 = { code: "function TabsNativeTsx14(){const{onEndDrag}=this.__closure;var _onEndDrag;(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}" };
const __initData6 = { code: "function TabsNativeTsx15(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}" };
const __initData7 = { code: "function TabsNativeTsx16(props,prevState){const{cheapWorkletShallowEqual,itemSpacing,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions_0$act,_itemDimensions_0$act2,_itemDimensions_0$act3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset_0,activeIndex:activeIndex_0,itemDimensions:itemDimensions_0}=props;const width_0=itemDimensions_0.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions_0$act=(_itemDimensions_0$act2=itemDimensions_0[activeIndex_0])===null||_itemDimensions_0$act2===void 0?void 0:_itemDimensions_0$act2.x)!==null&&_itemDimensions_0$act!==void 0?_itemDimensions_0$act:0)+(activeIndex_0-1)*itemSpacing;const itemWidth=(_itemDimensions_0$act3=itemDimensions_0[activeIndex_0])===null||_itemDimensions_0$act3===void 0?void 0:_itemDimensions_0$act3.width;if(width_0===0||itemOffset==null||itemWidth==null)return;if(scrollOffset_0+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset_0){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let formatCount;
  let grow;
  let ie;
  let itemDimensions;
  let items;
  let items1;
  let items2;
  let onEndDrag;
  let onScrollWorklet;
  let simultaneousHandlers;
  let str;
  let te;
  let tmp16;
  let tmp8;
  let useReducedMotion;
  const tmp = state;
  let tmp2 = onEndDrag;
  let obj = state(onEndDrag[8]);
  const cResult = obj.c(41);
  state = state.state;
  ({ grow, formatCount, simultaneousHandlers, onScrollWorklet } = state);
  onEndDrag = state.onEndDrag;
  const variant = state.variant;
  const tmp4 = undefined === grow || grow;
  grow = tmp4;
  if (undefined === formatCount) {
    formatCount = useReducedMotion;
  }
  let activeIndex = state.activeIndex;
  const scrollOffset = state.scrollOffset;
  const scrollOverflow = state.scrollOverflow;
  ({ items, itemDimensions } = state);
  const itemSpacing = state.itemSpacing;
  const pageWidth = state.pageWidth;
  const pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  useReducedMotion = state.useReducedMotion;
  const tmp5 = setActiveIndex(itemSpacing, variant);
  const tmpResult = tmp(tmp2[4]);
  const sharedValue = tmpResult.useSharedValue(pageWidth);
  const length = items.length;
  const ref = variant.useRef(null);
  if (cResult[0] !== sharedValue) {
    const fn = function s(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    };
    let num = 0;
    cResult[0] = sharedValue;
    let num2 = 1;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  const tmpResult8 = tmp(tmp2[4]);
  class Q {
    constructor() {
      return Math.round(Math.min(Math.max(activeIndex.get(), 0), length - 1));
    }
  }
  Q.__closure = { activeIndex, itemCount: length };
  Q.__workletHash = 3447899396126;
  Q.__initData = sharedValue;
  const derivedValue = tmpResult8.useDerivedValue(Q);
  const tmpResult9 = tmp(tmp2[4]);
  class Y {
    constructor() {
      const value = itemDimensions.get();
      const tmp2 = value[derivedValue.get(derivedValue)];
      let num = 0;
      if (null != tmp2) {
        num = tmp2.width;
      }
      return num;
    }
  }
  Y.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  Y.__workletHash = 8597162338125;
  Y.__initData = length;
  const derivedValue1 = tmpResult9.useDerivedValue(Y);
  const tmpResult10 = tmp(tmp2[4]);
  class Z {
    constructor() {
      const value = itemDimensions.get();
      const tmp2 = value[derivedValue.get(derivedValue)];
      let num;
      if (tmp2 != null) {
        num = tmp2.x;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    }
  }
  Z.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  Z.__workletHash = 3224400863644;
  Z.__initData = ref;
  const derivedValue2 = tmpResult10.useDerivedValue(Z);
  function ee() {
    let items2;
    let obj10;
    let obj6;
    let obj8;
    let sum;
    const value = derivedValue2.get();
    let num = 1;
    let tmp2 = value;
    if (pressedIndex.get() >= 0) {
      let diff;
      let num2;
      const value3 = pressedIndex.get();
      if (value3 < derivedValue.get()) {
        diff = value - 0.02 * derivedValue1.get();
        num2 = 1.04;
      } else {
        const value4 = pressedIndex.get();
        num2 = 1;
        diff = value;
        if (value4 > derivedValue.get()) {
          diff = value + 0.02 * derivedValue1.get();
          num2 = 1.04;
        }
      }
      num = num2;
      tmp2 = diff;
    }
    if (scrollOverflow.get() < 0) {
      const items = [c10, 1];
      const obj4 = ReanimatedRexport2;
      const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], items, "clamp");
      sum = tmp2 + -derivedValue1.get() * (1 - interpolateResult) / 2;
      num = interpolateResult;
    } else {
      sum = tmp2;
      if (scrollOverflow.get() > 0) {
        const items1 = [c10, 1];
        const obj11 = ReanimatedRexport2;
        const interpolateResult1 = obj11.interpolate(scrollOverflow.get(), [50, 0], items1, "clamp");
        sum = tmp2 + derivedValue1.get() * (1 - interpolateResult1) / 2;
        num = interpolateResult1;
      }
    }
    const obj5 = { width: obj6.withSpring(derivedValue1.get(), closure_12), transform: items2 };
    obj6 = spring;
    const obj7 = { translateX: obj8.withSpring(sum, closure_12) };
    items2 = [obj7, ];
    obj8 = spring;
    const obj9 = { scaleX: obj10.withSpring(num, closure_12) };
    items2[1] = obj9;
    obj10 = spring;
    return obj5;
  }
  const tmpResult11 = tmp(tmp2[4]);
  ee.__closure = { indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: itemDimensions, indicatorWidth: derivedValue1, scrollOverflow, interpolate: tmp(tmp2[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: itemSpacing, withSpring: tmp(tmp2[9]).withSpring, SELECTED_INDICATOR_SPRING: pressedIndex };
  ee.__workletHash = 9341747001572;
  ee.__initData = derivedValue;
  ({ indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: itemDimensions, indicatorWidth: derivedValue1, scrollOverflow, interpolate: tmp(tmp2[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: itemSpacing, withSpring: tmp(tmp2[9]).withSpring, SELECTED_INDICATOR_SPRING: pressedIndex });
  const animatedStyle = tmpResult11.useAnimatedStyle(ee);
  const obj3 = { onScroll: ie, onEndDrag: te };
  ie = function ie(contentOffset) {
    const result = scrollOffset.set(contentOffset.contentOffset.x);
    if (onScrollWorklet != null) {
      tmp2(contentOffset.contentOffset.x);
    }
  };
  ie.__closure = { scrollOffset, onScrollWorklet };
  ie.__workletHash = 8415723020463;
  ie.__initData = derivedValue1;
  te = function te() {
    if (onEndDrag != null) {
      tmp();
    }
  };
  te.__closure = { onEndDrag };
  te.__workletHash = 6364544472149;
  te.__initData = derivedValue2;
  const tmpResult12 = tmp(tmp2[4]);
  const animatedScrollHandler = tmpResult12.useAnimatedScrollHandler(obj3);
  function scrollToOffset(x) {
    const current = ref.current;
    if (current != null) {
      const obj = { x, animated: !useReducedMotion };
      current.scrollTo(obj);
    }
  }
  function oe() {
    const obj = { scrollOffset: scrollOffset.get(), activeIndex: activeIndex.get(), itemDimensions: itemDimensions.get() };
    return obj;
  }
  oe.__closure = { scrollOffset, activeIndex, itemDimensions };
  oe.__workletHash = 9993285637539;
  oe.__initData = scrollToOffset;
  function ne(activeIndex, safeAreaState2) {
    let activeIndex2;
    let activeIndex1;
    activeIndex = activeIndex.activeIndex;
    if (safeAreaState2 != null) {
      activeIndex1 = tmp.activeIndex;
    }
    if (activeIndex !== activeIndex1) {
      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
      cheapWorkletShallowEqual2;
      if (!cheapWorkletShallowEqual(activeIndex, safeAreaState2)) {
        ({ scrollOffset, activeIndex: activeIndex2, itemDimensions } = activeIndex);
        let num = 0;
        let num2;
        const reduced = itemDimensions.reduce((acc, width) => {
          let num;
          if (width != null) {
            num = width.width;
          }
          if (num == null) {
            num = 0;
          }
          return acc + num;
        }, 0);
        if (itemDimensions[activeIndex2] != null) {
          num2 = tmp4.x;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const sum = num2 + (activeIndex2 - 1) * itemSpacing;
        let width;
        if (itemDimensions[activeIndex2] != null) {
          width = tmp7.width;
        }
        const tmp9 = 0 !== reduced && true && null != width;
        if (tmp9) {
          if (scrollOffset + pageWidth < sum + width) {
            const tmp17Result = ReanimatedRexport2;
            tmp17Result.runOnJS(scrollToOffset)(sum + c11);
          } else if (sum < scrollOffset) {
            const tmp17Result2 = ReanimatedRexport2;
            tmp17Result2.runOnJS(scrollToOffset)(sum - c11);
          }
        }
      }
    }
  }
  const tmpResult13 = tmp(tmp2[4]);
  let obj4 = { cheapWorkletShallowEqual: tmp(tmp2[10]).cheapWorkletShallowEqual, itemSpacing, pageWidth, runOnJS: tmp(tmp2[4]).runOnJS, scrollToOffset, AUTO_SCROLL_BUFFER: pageWidth };
  ne.__closure = obj4;
  ne.__workletHash = 9221609838950;
  ne.__initData = __initData;
  const animatedReaction = tmpResult13.useAnimatedReaction(oe, ne);
  if (cResult[2] === activeIndex) {
    if (cResult[3] === formatCount) {
      if (cResult[4] === tmp4) {
        if (cResult[5] === length) {
          if (cResult[6] === items) {
            if (cResult[7] === pressedIndex) {
              if (cResult[8] === setActiveIndex) {
                if (cResult[9] === state) {
                  if (cResult[10] === variant) {
                    tmp16 = cResult[11];
                  }
                  if (cResult[21] === tmp5.controlsContainer) {
                    let tmp19;
                    if (cResult[22] === tmp16) {
                      tmp19 = cResult[23];
                    }
                    let tmp23 = null;
                    if (null != simultaneousHandlers) {
                      let tmp24;
                      if (cResult[24] !== simultaneousHandlers) {
                        const Gesture = tmp(tmp2[12]).Gesture;
                        const NativeResult = Gesture.Native();
                        let result = NativeResult.simultaneousWithExternalGesture(simultaneousHandlers);
                        cResult[24] = simultaneousHandlers;
                        cResult[25] = result;
                        tmp24 = result;
                      } else {
                        tmp24 = cResult[25];
                      }
                      tmp23 = tmp24;
                    }
                    if (cResult[26] === animatedStyle) {
                      let tmp26;
                      if (cResult[27] === tmp5.indicator) {
                        tmp26 = cResult[28];
                      }
                      if (cResult[29] === tmp8) {
                        if (cResult[30] === tmp5.indicatorContainer) {
                          let tmp30;
                          if (cResult[31] === tmp26) {
                            tmp30 = cResult[32];
                          }
                          if (cResult[33] === tmp19) {
                            if (cResult[34] === animatedScrollHandler) {
                              if (cResult[35] === tmp5.container) {
                                let tmp34;
                                if (cResult[36] === tmp30) {
                                  tmp34 = cResult[37];
                                }
                                let tmp38 = tmp34;
                                if (null != tmp23) {
                                  if (cResult[38] === tmp34) {
                                    let tmp39;
                                    if (cResult[39] === tmp23) {
                                      tmp39 = cResult[40];
                                    }
                                    tmp38 = tmp39;
                                  }
                                  let obj5 = { gesture: tmp23, children: tmp34 };
                                  const tmp41 = activeIndex(tmp(tmp2[12]).GestureDetector, obj5);
                                  cResult[38] = tmp34;
                                  cResult[39] = tmp23;
                                  cResult[40] = tmp41;
                                  tmp39 = tmp41;
                                }
                                return tmp38;
                              }
                            }
                          }
                          let obj6 = { ref, accessibilityRole: str, keyboardShouldPersistTaps: "handled", horizontal: true, onScroll: animatedScrollHandler, scrollEventThrottle: 16, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp5.container, bounces: false, children: items1 };
                          str = undefined;
                          const tmp35 = scrollOffset;
                          const tmp36 = scrollOverflow;
                          const tmpResult14 = tmp(tmp2[13]);
                          if (tmpResult14.isIOS()) {
                            str = "tabbar";
                          }
                          items1 = [tmp30, tmp19];
                          const tmp35Result = tmp35(tmp36, obj6);
                          cResult[33] = tmp19;
                          cResult[34] = animatedScrollHandler;
                          cResult[35] = tmp5.container;
                          cResult[36] = tmp30;
                          cResult[37] = tmp35Result;
                          tmp34 = tmp35Result;
                        }
                      }
                      let obj7 = { style: tmp5.indicatorContainer, onLayout: tmp8, children: tmp26 };
                      const tmp33 = activeIndex(grow, obj7);
                      cResult[29] = tmp8;
                      cResult[30] = tmp5.indicatorContainer;
                      cResult[31] = tmp26;
                      cResult[32] = tmp33;
                      tmp30 = tmp33;
                    }
                    let obj8 = { style: items2 };
                    items2 = [tmp5.indicator, animatedStyle];
                    const tmp29 = activeIndex(onScrollWorklet(tmp2[4]).View, obj8);
                    cResult[26] = animatedStyle;
                    cResult[27] = tmp5.indicator;
                    cResult[28] = tmp29;
                    tmp26 = tmp29;
                  }
                  let obj9 = { style: tmp15, children: tmp16 };
                  const tmp22 = activeIndex(grow, obj9);
                  cResult[21] = tmp5.controlsContainer;
                  cResult[22] = tmp16;
                  cResult[23] = tmp22;
                  tmp19 = tmp22;
                }
              }
            }
          }
        }
      }
    }
  }
  if (cResult[12] === activeIndex) {
    if (cResult[13] === formatCount) {
      if (cResult[14] === tmp4) {
        if (cResult[15] === length) {
          if (cResult[16] === pressedIndex) {
            if (cResult[17] === setActiveIndex) {
              if (cResult[18] === state) {
                let tmp17;
                if (cResult[19] === variant) {
                  tmp17 = cResult[20];
                }
                const mapped = items.map(tmp17);
                cResult[2] = activeIndex;
                cResult[3] = formatCount;
                cResult[4] = tmp4;
                cResult[5] = length;
                cResult[6] = items;
                cResult[7] = pressedIndex;
                cResult[8] = setActiveIndex;
                cResult[9] = state;
                cResult[10] = variant;
                cResult[11] = mapped;
                tmp16 = mapped;
              }
            }
          }
        }
      }
    }
  }
  function me(count, index) {
    let id;
    let label;
    let tmp2;
    state = index;
    count = count.count;
    ({ label, id } = count);
    const obj = {
      index,
      itemCount: length,
      label,
      count: tmp2,
      state,
      grow,
      pressed: pressedIndex,
      selected: index === activeIndex.get(),
      onPress() {
        setActiveIndex(index);
      },
      onPressIn() {
        const result = pressedIndex.set(index);
      },
      onPressOut() {
        const result = pressedIndex.set(-1);
      },
      variant
    };
    tmp2 = undefined;
    const TabItem = state(onEndDrag[11]).TabItem;
    if (null != count) {
      tmp2 = formatCount(count);
    }
    return activeIndex(TabItem, obj, id);
  }
  cResult[12] = activeIndex;
  cResult[13] = formatCount;
  cResult[14] = tmp4;
  cResult[15] = length;
  cResult[16] = pressedIndex;
  cResult[17] = setActiveIndex;
  cResult[18] = state;
  cResult[19] = variant;
  cResult[20] = me;
  tmp17 = me;
}) : ((state) => {
  let fn2;
  let items5;
  let items6;
  let obj14;
  let pressedIndex;
  let str;
  state = state.state;
  let flag = state.grow;
  if (flag === undefined) {
    flag = true;
  }
  let formatCount = state.formatCount;
  if (formatCount === undefined) {
    formatCount = pressedIndex;
  }
  const simultaneousHandlers = state.simultaneousHandlers;
  const onScrollWorklet = state.onScrollWorklet;
  const onEndDrag = state.onEndDrag;
  const variant = state.variant;
  let derivedValue1;
  let derivedValue2;
  let callback1;
  let activeIndex = state.activeIndex;
  const scrollOffset = state.scrollOffset;
  const scrollOverflow = state.scrollOverflow;
  let items = state.items;
  const itemDimensions = state.itemDimensions;
  const itemSpacing = state.itemSpacing;
  const pageWidth = state.pageWidth;
  pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  const useReducedMotion = state.useReducedMotion;
  const tmp = pageWidth(itemSpacing, variant);
  const controlsContainer = tmp;
  let tmp2 = state;
  let obj = state(formatCount[4]);
  const sharedValue = obj.useSharedValue(pageWidth);
  const length = items.length;
  const ref = simultaneousHandlers.useRef(null);
  let items1 = [sharedValue];
  const callback = simultaneousHandlers.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  const fn = function x() {
    return Math.round(Math.min(Math.max(activeIndex.get(), 0), length - 1));
  };
  fn.__closure = { activeIndex, itemCount: length };
  fn.__workletHash = 15149872165398;
  fn.__initData = derivedValue2;
  const obj2 = state(formatCount[4]);
  const derivedValue = obj2.useDerivedValue(fn);
  const obj3 = state(formatCount[4]);
  class I {
    constructor() {
      const value = itemDimensions.get();
      const tmp2 = value[derivedValue.get(derivedValue)];
      let num = 0;
      if (null != tmp2) {
        num = tmp2.width;
      }
      return num;
    }
  }
  I.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  I.__workletHash = 6538174709304;
  I.__initData = callback1;
  derivedValue1 = obj3.useDerivedValue(I);
  let obj4 = state(formatCount[4]);
  class R {
    constructor() {
      const value = itemDimensions.get();
      const tmp2 = value[derivedValue.get(derivedValue)];
      let num;
      if (tmp2 != null) {
        num = tmp2.x;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    }
  }
  R.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  R.__workletHash = 6713619984559;
  R.__initData = __initData2;
  derivedValue2 = obj4.useDerivedValue(R);
  let obj5 = state(formatCount[4]);
  class A {
    constructor() {
      let items2;
      let obj10;
      let obj6;
      let obj8;
      let sum;
      const value = derivedValue2.get();
      let num = 1;
      let tmp2 = value;
      if (pressedIndex.get() >= 0) {
        let num2;
        let diff;
        const value3 = pressedIndex.get();
        if (value3 < derivedValue.get()) {
          num2 = 1 + c9;
          diff = value - 0.02 * derivedValue1.get();
        } else {
          const value4 = pressedIndex.get();
          num2 = 1;
          diff = value;
          if (value4 > derivedValue.get()) {
            num2 = 1 + c9;
            diff = value + 0.02 * derivedValue1.get();
          }
        }
        num = num2;
        tmp2 = diff;
      }
      if (scrollOverflow.get() < 0) {
        items = [c10, 1];
        const obj4 = ReanimatedRexport2;
        const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], items, "clamp");
        sum = tmp2 + -derivedValue1.get() * (1 - interpolateResult) / 2;
        num = interpolateResult;
      } else {
        sum = tmp2;
        if (scrollOverflow.get() > 0) {
          const items1 = [c10, 1];
          const obj11 = ReanimatedRexport2;
          const interpolateResult1 = obj11.interpolate(scrollOverflow.get(), [50, 0], items1, "clamp");
          sum = tmp2 + derivedValue1.get() * (1 - interpolateResult1) / 2;
          num = interpolateResult1;
        }
      }
      const obj5 = { width: obj6.withSpring(derivedValue1.get(), closure_12), transform: items2 };
      obj6 = spring;
      const obj7 = { translateX: obj8.withSpring(sum, closure_12) };
      items2 = [obj7, ];
      obj8 = spring;
      const obj9 = { scaleX: obj10.withSpring(num, closure_12) };
      items2[1] = obj9;
      obj10 = spring;
      return obj5;
    }
  }
  let obj6 = { indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: scrollOverflow, indicatorWidth: derivedValue1, scrollOverflow, interpolate: state(formatCount[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: items, withSpring: state(formatCount[9]).withSpring, SELECTED_INDICATOR_SPRING: itemSpacing };
  A.__closure = obj6;
  A.__workletHash = 1708325904563;
  A.__initData = __initData3;
  const animatedStyle = obj5.useAnimatedStyle(A);
  let obj7 = state(formatCount[4]);
  let obj8 = { onScroll: P, onEndDrag: fn2 };
  class P {
    constructor(contentOffset) {
      const result = scrollOffset.set(contentOffset.contentOffset.x);
      if (onScrollWorklet != null) {
        tmp2(contentOffset.contentOffset.x);
      }
    }
  }
  P.__closure = { scrollOffset, onScrollWorklet };
  P.__workletHash = 12423910570232;
  P.__initData = __initData4;
  fn2 = function w() {
    if (onEndDrag != null) {
      tmp();
    }
  };
  fn2.__closure = { onEndDrag };
  fn2.__workletHash = 14688811166854;
  fn2.__initData = __initData5;
  let items2 = [useReducedMotion];
  const animatedScrollHandler = obj7.useAnimatedScrollHandler(obj8);
  callback1 = simultaneousHandlers.useCallback((x) => {
    const current = ref.current;
    if (current != null) {
      const obj = { x, animated: !useReducedMotion };
      current.scrollTo(obj);
    }
  }, items2);
  let obj9 = state(formatCount[4]);
  class U {
    constructor() {
      const obj = { scrollOffset: scrollOffset.get(), activeIndex: activeIndex.get(), itemDimensions: itemDimensions.get() };
      return obj;
    }
  }
  U.__closure = { scrollOffset, activeIndex, itemDimensions };
  U.__workletHash = 8102360645360;
  U.__initData = __initData6;
  const fn3 = function k(activeIndex, safeAreaState2) {
    let activeIndex2;
    let activeIndex1;
    activeIndex = activeIndex.activeIndex;
    if (safeAreaState2 != null) {
      activeIndex1 = tmp.activeIndex;
    }
    if (activeIndex !== activeIndex1) {
      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
      cheapWorkletShallowEqual2;
      if (!cheapWorkletShallowEqual(activeIndex, safeAreaState2)) {
        ({ scrollOffset, activeIndex: activeIndex2, itemDimensions } = activeIndex);
        let num = 0;
        let num2;
        const reduced = itemDimensions.reduce((acc, width) => {
          let num;
          if (width != null) {
            num = width.width;
          }
          if (num == null) {
            num = 0;
          }
          return acc + num;
        }, 0);
        if (itemDimensions[activeIndex2] != null) {
          num2 = tmp4.x;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const sum = num2 + (activeIndex2 - 1) * itemSpacing;
        let width;
        if (itemDimensions[activeIndex2] != null) {
          width = tmp7.width;
        }
        const tmp9 = 0 !== reduced && true && null != width;
        if (tmp9) {
          if (scrollOffset + pageWidth < sum + width) {
            const tmp17Result = ReanimatedRexport2;
            tmp17Result.runOnJS(callback1)(sum + c11);
          } else if (sum < scrollOffset) {
            const tmp17Result2 = ReanimatedRexport2;
            tmp17Result2.runOnJS(callback1)(sum - c11);
          }
        }
      }
    }
  };
  let obj10 = { cheapWorkletShallowEqual: state(formatCount[10]).cheapWorkletShallowEqual, itemSpacing, pageWidth, runOnJS: state(formatCount[4]).runOnJS, scrollToOffset: callback1, AUTO_SCROLL_BUFFER: itemDimensions };
  fn3.__closure = obj10;
  fn3.__workletHash = 14874002964281;
  fn3.__initData = __initData7;
  const animatedReaction = obj9.useAnimatedReaction(U, fn3);
  const items3 = [items, length, formatCount, state, flag, pressedIndex, activeIndex, setActiveIndex, tmp.controlsContainer, variant];
  const items4 = [simultaneousHandlers];
  const memo = simultaneousHandlers.useMemo(() => {
    let grow;
    let itemCount;
    let pressed;
    let obj = {
      style: controlsContainer.controlsContainer,
      children: items.map((count, index) => {
        let id;
        let label;
        let tmp2;
        count = count.count;
        state = index;
        ({ label, id } = count);
        const obj = {
          index,
          itemCount,
          label,
          count: tmp2,
          state,
          grow,
          pressed,
          selected: index === closure_7.get(),
          onPress() {
            setActiveIndex(index);
          },
          onPressIn() {
            const result = pressed.set(index);
          },
          onPressOut() {
            const result = pressed.set(-1);
          },
          variant
        };
        tmp2 = undefined;
        const TabItem = state(formatCount[11]).TabItem;
        if (null != count) {
          tmp2 = closure_2(count);
        }
        return variant(TabItem, obj, id);
      })
    };
    return metroRequire(React3, obj);
  }, items3);
  const memo1 = simultaneousHandlers.useMemo(() => {
    let result = null;
    if (null != simultaneousHandlers) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      result = NativeResult.simultaneousWithExternalGesture(tmp);
    }
    return result;
  }, items4);
  let obj11 = { ref, accessibilityRole: str, keyboardShouldPersistTaps: "handled", horizontal: true, onScroll: animatedScrollHandler, scrollEventThrottle: 16, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.container, bounces: false, children: items6 };
  str = undefined;
  const obj12 = state(formatCount[13]);
  const tmp16 = activeIndex;
  const tmp17 = scrollOffset;
  if (obj12.isIOS()) {
    str = "tabbar";
  }
  const obj13 = { style: tmp.indicatorContainer, onLayout: callback, children: variant(flag(formatCount[4]).View, obj14) };
  obj14 = { style: items5 };
  items5 = [tmp.indicator, animatedStyle];
  items6 = [variant(onScrollWorklet, obj13), memo];
  const tmp16Result = tmp16(tmp17, obj11);
  let tmp18Result = tmp16Result;
  const tmp18 = variant;
  if (null != memo1) {
    const obj15 = { gesture: memo1, children: tmp16Result };
    tmp18Result = tmp18(tmp2(tmp3[12]).GestureDetector, obj15);
  }
  return tmp18Result;
});
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Tabs/native/Tabs.native.tsx");

export { defaultCountFormatter };
export const Tabs = tmp4;