// === Module 12395: Tabs/Tabs ===

// Module 12395 (Tabs/Tabs)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9512 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function defaultCountFormatter(toLocaleString) {
  return toLocaleString.toLocaleString(LocaleStore.locale);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let c9 = 0.04;
let c10 = 0.9;
let c11 = 16;
let closure_12 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
const createStyles = fn(5090);
let closure_13 = createStyles.createStyles((gap, arg1) => {
  const obj = { container: { display: "flex", flexGrow: 1, minWidth: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 }, controlsContainer: null, indicatorContainer: null, indicator: null };
  const obj2 = { display: "flex", flexGrow: 1, minWidth: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
  obj.controlsContainer = { marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap };
  const size = { position: "absolute", width: "100%", height: "100%", flexDirection: "row", alignItems: "flex-end", marginLeft: nativeDefault.space.PX_16 };
  obj.indicatorContainer = size;
  if ("overlay" === arg1) {
    let TEXT_BRAND = nativeDefault.colors.TEXT_STRONG;
  } else {
    TEXT_BRAND = nativeDefault.colors.TEXT_BRAND;
  }
  const obj3 = { marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap };
  obj.indicator = { height: 2, backgroundColor: TEXT_BRAND, borderTopStartRadius: nativeDefault.radii.xs, borderTopEndRadius: nativeDefault.radii.xs };
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
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Tabs/native/Tabs.native.tsx");

export { defaultCountFormatter };
export const Tabs = ReactCompilerGating.isReactCompilerEnabled() ? (function Tabs(state) {
  let GestureDetector = state;
  let tmp = onEndDrag;
  const cResult = state(onEndDrag[8]).c(41);
  state = state.state;
  ({ grow, formatCount, simultaneousHandlers, onScrollWorklet } = state);
  onEndDrag = state.onEndDrag;
  const variant = state.variant;
  grow = tmp3;
  if (undefined === formatCount) {
    formatCount = useReducedMotion;
  }
  const activeIndex = state.activeIndex;
  const scrollOffset = state.scrollOffset;
  const scrollOverflow = state.scrollOverflow;
  ({ items, itemDimensions } = state);
  const itemSpacing = state.itemSpacing;
  const pageWidth = state.pageWidth;
  const pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  useReducedMotion = state.useReducedMotion;
  const tmp4 = setActiveIndex(itemSpacing, variant);
  let obj = state(onEndDrag[8]);
  const sharedValue = GestureDetector(tmp[4]).useSharedValue(pageWidth);
  const length = items.length;
  const ref = variant.useRef(null);
  if (cResult[0] !== sharedValue) {
    const fn = function s(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const GestureDetectorResult = GestureDetector(tmp[4]);
  class Q {
    constructor() {
      return Math.round(Math.min(Math.max(activeIndex.get(), 0), length - 1));
    }
  }
  Q.__closure = { activeIndex, itemCount: length };
  Q.__workletHash = 3447899396126;
  Q.__initData = sharedValue;
  const derivedValue = GestureDetector(tmp[4]).useDerivedValue(Q);
  const GestureDetectorResult1 = GestureDetector(tmp[4]);
  class Y {
    constructor() {
      value = itemDimensions.get();
      tmp2 = value[closure_18.get(closure_18)];
      num = 0;
      if (null != tmp2) {
        num = tmp2.width;
      }
      return num;
    }
  }
  Y.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  Y.__workletHash = 8597162338125;
  Y.__initData = length;
  const derivedValue1 = GestureDetector(tmp[4]).useDerivedValue(Y);
  const GestureDetectorResult2 = GestureDetector(tmp[4]);
  class Z {
    constructor() {
      value = itemDimensions.get();
      tmp2 = value[closure_18.get(closure_18)];
      num = undefined;
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
  const derivedValue2 = GestureDetector(tmp[4]).useDerivedValue(Z);
  const GestureDetectorResult3 = GestureDetector(tmp[4]);
  function ee() {
    value = derivedValue2.get();
    let num = 1;
    if (pressedIndex.get() < 0) {
      if (scrollOverflow.get() < 0) {
        const obj4 = ReanimatedRexport2;
        const items = [c10, 1];
        const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], items, "clamp");
        let sum = value + -derivedValue1.get() * (1 - interpolateResult) / 2;
        num = interpolateResult;
      } else {
        sum = value;
        if (scrollOverflow.get() > 0) {
          const obj11 = ReanimatedRexport2;
          const items1 = [c10, 1];
          const interpolateResult1 = obj11.interpolate(scrollOverflow.get(), [50, 0], items1, "clamp");
          sum = value + derivedValue1.get() * (1 - interpolateResult1) / 2;
          num = interpolateResult1;
        }
      }
      const obj5 = { width: spring.withSpring(derivedValue1.get(), closure_12), transform: null };
      const obj7 = { translateX: null };
      obj7.translateX = spring.withSpring(sum, closure_12);
      const items2 = [obj7, ];
      const obj9 = { scaleX: null };
      obj9.scaleX = spring.withSpring(num, closure_12);
      items2[1] = obj9;
      obj5.transform = items2;
      return obj5;
    } else {
      value3 = pressedIndex.get();
      if (value3 < derivedValue.get()) {
        let diff = value - 0.02 * derivedValue1.get();
      } else {
        const value4 = pressedIndex.get();
        diff = value;
        if (value4 > derivedValue.get()) {
          diff = value + 0.02 * derivedValue1.get();
        }
      }
    }
  }
  const GestureDetectorResult4 = GestureDetector(tmp[4]);
  ee.__closure = { indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: itemDimensions, indicatorWidth: derivedValue1, scrollOverflow, interpolate: GestureDetector(tmp[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: itemSpacing, withSpring: GestureDetector(tmp[9]).withSpring, SELECTED_INDICATOR_SPRING: pressedIndex };
  ee.__workletHash = 9341747001572;
  ee.__initData = derivedValue;
  const animatedStyle = GestureDetectorResult4.useAnimatedStyle(ee);
  const obj2 = { indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: itemDimensions, indicatorWidth: derivedValue1, scrollOverflow, interpolate: GestureDetector(tmp[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: itemSpacing, withSpring: GestureDetector(tmp[9]).withSpring, SELECTED_INDICATOR_SPRING: pressedIndex };
  let obj3 = { onScroll: null, onEndDrag: null };
  function ie(contentOffset) {
    const result = scrollOffset.set(contentOffset.contentOffset.x);
    if (onScrollWorklet != null) {
      tmp2(contentOffset.contentOffset.x);
    }
  }
  ie.__closure = { scrollOffset, onScrollWorklet };
  ie.__workletHash = 8415723020463;
  ie.__initData = derivedValue1;
  obj3.onScroll = ie;
  function te() {
    if (onEndDrag != null) {
      tmp();
    }
  }
  te.__closure = { onEndDrag };
  te.__workletHash = 6364544472149;
  te.__initData = derivedValue2;
  obj3.onEndDrag = te;
  const animatedScrollHandler = GestureDetector(tmp[4]).useAnimatedScrollHandler(obj3);
  function scrollToOffset(x) {
    const current = ref.current;
    if (current != null) {
      const obj = { x, animated: !useReducedMotion };
      current.scrollTo(obj);
    }
  }
  const GestureDetectorResult5 = GestureDetector(tmp[4]);
  function oe() {
    return { scrollOffset: scrollOffset.get(), activeIndex: activeIndex.get(), itemDimensions: itemDimensions.get() };
  }
  oe.__closure = { scrollOffset, activeIndex, itemDimensions };
  oe.__workletHash = 9993285637539;
  oe.__initData = scrollToOffset;
  function ne(activeIndex, safeAreaState2) {
    let activeIndex1;
    if (safeAreaState2 != null) {
      activeIndex1 = tmp.activeIndex;
    }
    if (activeIndex.activeIndex !== activeIndex1) {
      if (!obj3.cheapWorkletShallowEqual(activeIndex, tmp)) {
        ({ scrollOffset, activeIndex, itemDimensions } = activeIndex);
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
        if (itemDimensions[activeIndex] != null) {
          num2 = tmp4.x;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const sum = num2 + (activeIndex - 1) * itemSpacing;
        let width;
        if (itemDimensions[activeIndex] != null) {
          width = tmp7.width;
        }
        if (tmp9) {
          if (scrollOffset + pageWidth < sum + width) {
            ReanimatedRexport2.runOnJS(scrollToOffset)(sum + c11);
            const tmp17Result = ReanimatedRexport2;
          } else if (sum < scrollOffset) {
            ReanimatedRexport2.runOnJS(scrollToOffset)(sum - c11);
            const tmp17Result2 = ReanimatedRexport2;
          }
        }
        tmp9 = 0 !== reduced && true && null != width;
      }
      obj3 = cheapWorkletShallowEqual;
    }
  }
  const GestureDetectorResult6 = GestureDetector(tmp[4]);
  ne.__closure = { cheapWorkletShallowEqual: GestureDetector(tmp[10]).cheapWorkletShallowEqual, itemSpacing, pageWidth, runOnJS: GestureDetector(tmp[4]).runOnJS, scrollToOffset, AUTO_SCROLL_BUFFER: pageWidth };
  ne.__workletHash = 9221609838950;
  ne.__initData = __initData;
  const animatedReaction = GestureDetectorResult6.useAnimatedReaction(oe, ne);
  if (cResult[2] === activeIndex) {
    if (cResult[3] === formatCount) {
      if (cResult[4] === tmp3) {
        if (cResult[5] === length) {
          if (cResult[6] === items) {
            if (cResult[7] === pressedIndex) {
              if (cResult[8] === setActiveIndex) {
                if (cResult[9] === state) {
                  if (cResult[10] === variant) {
                    if (cResult[21] === tmp4.controlsContainer) {
                      if (cResult[22] === tmp15) {
                        let tmp19 = cResult[23];
                      }
                      if (null == simultaneousHandlers) {
                        if (cResult[26] === animatedStyle) {
                          if (cResult[27] === tmp4.indicator) {
                            let tmp27 = cResult[28];
                          }
                          if (cResult[29] === tmp7) {
                            if (cResult[30] === tmp4.indicatorContainer) {
                              if (cResult[31] === tmp27) {
                                let tmp31 = cResult[32];
                              }
                              if (cResult[33] === tmp19) {
                                if (cResult[34] === animatedScrollHandler) {
                                  if (cResult[35] === tmp4.container) {
                                    if (cResult[36] === tmp31) {
                                      let tmp35 = cResult[37];
                                    }
                                    if (null == null) {
                                      return tmp35;
                                    } else {
                                      if (cResult[38] === tmp35) {
                                      }
                                      GestureDetector = GestureDetector(tmp[12]).GestureDetector;
                                      let obj5 = { gesture: null, children: tmp35 };
                                      tmp = activeIndex(GestureDetector, obj5);
                                      cResult[38] = tmp35;
                                      cResult[39] = null;
                                      cResult[40] = tmp;
                                    }
                                  }
                                }
                              }
                              let obj6 = { ref, accessibilityRole: null, keyboardShouldPersistTaps: "handled", horizontal: true, onScroll: null, scrollEventThrottle: 16, showsHorizontalScrollIndicator: false, contentContainerStyle: null, bounces: false, children: null };
                              let str;
                              if (GestureDetectorResult7.isIOS()) {
                                str = "tabbar";
                              }
                              obj6.accessibilityRole = str;
                              obj6.onScroll = animatedScrollHandler;
                              obj6.contentContainerStyle = tmp4.container;
                              let items1 = [tmp31, tmp19];
                              obj6.children = items1;
                              const tmp36Result = scrollOffset(scrollOverflow, obj6);
                              cResult[33] = tmp19;
                              cResult[34] = animatedScrollHandler;
                              cResult[35] = tmp4.container;
                              cResult[36] = tmp31;
                              cResult[37] = tmp36Result;
                              tmp35 = tmp36Result;
                              GestureDetectorResult7 = GestureDetector(tmp[13]);
                            }
                          }
                          let obj7 = { style: tmp4.indicatorContainer, onLayout: tmp7, children: tmp27 };
                          const tmp34 = activeIndex(grow, obj7);
                          cResult[29] = tmp7;
                          cResult[30] = tmp4.indicatorContainer;
                          cResult[31] = tmp27;
                          cResult[32] = tmp34;
                          tmp31 = tmp34;
                        }
                        let obj8 = { style: null };
                        let items2 = [tmp4.indicator, animatedStyle];
                        obj8.style = items2;
                        const tmp30 = activeIndex(onScrollWorklet(tmp[4]).View, obj8);
                        cResult[26] = animatedStyle;
                        cResult[27] = tmp4.indicator;
                        cResult[28] = tmp30;
                        tmp27 = tmp30;
                      } else if (cResult[24] !== simultaneousHandlers) {
                        const Gesture = GestureDetector(tmp[12]).Gesture;
                        let result = Gesture.Native().simultaneousWithExternalGesture(simultaneousHandlers);
                        cResult[24] = simultaneousHandlers;
                        cResult[25] = result;
                        const NativeResult = Gesture.Native();
                      }
                    }
                    let obj9 = { style: tmp14, children: cResult[11] };
                    const tmp22 = activeIndex(grow, obj9);
                    cResult[21] = tmp4.controlsContainer;
                    cResult[22] = cResult[11];
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
  }
  if (cResult[12] === activeIndex) {
    if (cResult[13] === formatCount) {
      if (cResult[14] === tmp3) {
        if (cResult[15] === length) {
          if (cResult[16] === pressedIndex) {
            if (cResult[17] === setActiveIndex) {
              if (cResult[18] === state) {
                if (cResult[19] === variant) {
                  let tmp16 = cResult[20];
                }
                const mapped = items.map(tmp16);
                cResult[2] = activeIndex;
                cResult[3] = formatCount;
                cResult[4] = tmp3;
                cResult[5] = length;
                cResult[6] = items;
                cResult[7] = pressedIndex;
                cResult[8] = setActiveIndex;
                cResult[9] = state;
                cResult[10] = variant;
                cResult[11] = mapped;
              }
            }
          }
        }
      }
    }
  }
  function me(count, index) {
    state = index;
    count = count.count;
    ({ label, id } = count);
    const obj = { index, itemCount: length, label, count: null, state: null, grow: null, pressed: null, selected: null, onPress: null, onPressIn: null, onPressOut: null, variant: null };
    let tmp2;
    if (null != count) {
      tmp2 = formatCount(count);
    }
    obj.count = tmp2;
    obj.state = state;
    obj.grow = grow;
    obj.pressed = pressedIndex;
    obj.selected = index === activeIndex.get();
    obj.onPress = function handlePress() {
      setActiveIndex(closure_0);
    };
    obj.onPressIn = function handlePressIn() {
      const result = pressedIndex.set(closure_0);
    };
    obj.onPressOut = function handlePressOut() {
      const result = pressedIndex.set(-1);
    };
    obj.variant = variant;
    return activeIndex(state(onEndDrag[11]).TabItem, obj, id);
  }
  cResult[12] = activeIndex;
  cResult[13] = formatCount;
  cResult[14] = undefined === grow || grow;
  cResult[15] = length;
  cResult[16] = pressedIndex;
  cResult[17] = setActiveIndex;
  cResult[18] = state;
  cResult[19] = variant;
  cResult[20] = me;
  tmp16 = me;
}) : (function Tabs(state) {
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
  const activeIndex = state.activeIndex;
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
  const sharedValue = state(formatCount[4]).useSharedValue(pageWidth);
  const length = items.length;
  const ref = simultaneousHandlers.useRef(null);
  let items1 = [sharedValue];
  const callback = simultaneousHandlers.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  let obj = state(formatCount[4]);
  let tmp2 = state;
  const fn = function x() {
    return Math.round(Math.min(Math.max(activeIndex.get(), 0), length - 1));
  };
  fn.__closure = { activeIndex, itemCount: length };
  fn.__workletHash = 15149872165398;
  fn.__initData = derivedValue2;
  const derivedValue = state(formatCount[4]).useDerivedValue(fn);
  const obj2 = state(formatCount[4]);
  class I {
    constructor() {
      value = itemDimensions.get();
      tmp2 = value[closure_21.get(closure_21)];
      num = 0;
      if (null != tmp2) {
        num = tmp2.width;
      }
      return num;
    }
  }
  I.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  I.__workletHash = 6538174709304;
  I.__initData = callback1;
  derivedValue1 = state(formatCount[4]).useDerivedValue(I);
  let obj3 = state(formatCount[4]);
  class R {
    constructor() {
      value = itemDimensions.get();
      tmp2 = value[closure_21.get(closure_21)];
      num = undefined;
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
  derivedValue2 = state(formatCount[4]).useDerivedValue(R);
  let obj4 = state(formatCount[4]);
  class A {
    constructor() {
      value = closure_23.get();
      obj = pressedIndex;
      num = 1;
      if (pressedIndex.get() < 0) {
        obj3 = scrollOverflow;
        if (scrollOverflow.get() < 0) {
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj4 = closure_0(closure_2[4]);
          tmp13 = c10;
          items = [, ];
          items[0] = c10;
          items[1] = 1;
          str = "clamp";
          tmp14 = obj4;
          tmp15 = items;
          interpolateResult = obj4.interpolate(obj3.get(), [-50, 0], items, "clamp");
          tmp17 = closure_22;
          num5 = 2;
          sum = value + -closure_22.get() * (1 - interpolateResult) / 2;
          num = interpolateResult;
        } else {
          sum = value;
          if (obj3.get() > 0) {
            tmp27 = closure_0;
            tmp28 = closure_2;
            obj11 = closure_0(closure_2[4]);
            tmp29 = c10;
            items1 = [, ];
            items1[0] = c10;
            items1[1] = 1;
            str2 = "clamp";
            tmp30 = obj11;
            tmp31 = items1;
            interpolateResult1 = obj11.interpolate(obj3.get(), [50, 0], items1, "clamp");
            tmp33 = closure_22;
            num6 = 2;
            sum = value + closure_22.get() * (1 - interpolateResult1) / 2;
            num = interpolateResult1;
          }
        }
        obj1 = { width: null, transform: null };
        tmp19 = closure_0;
        tmp20 = closure_2;
        obj6 = closure_0(closure_2[9]);
        tmp21 = closure_22;
        tmp22 = closure_12;
        obj1.width = obj6.withSpring(closure_22.get(), closure_12);
        obj12 = { translateX: null };
        tmp23 = closure_0;
        tmp24 = closure_2;
        obj8 = closure_0(closure_2[9]);
        obj12.translateX = obj8.withSpring(sum, closure_12);
        items2 = [, ];
        items2[0] = obj12;
        obj13 = { scaleX: null };
        tmp25 = closure_0;
        tmp26 = closure_2;
        obj10 = closure_0(closure_2[9]);
        obj13.scaleX = obj10.withSpring(num, closure_12);
        items2[1] = obj13;
        obj1.transform = items2;
        return obj1;
      } else {
        obj2 = closure_21;
        value1 = obj.get();
        if (value1 < closure_21.get()) {
          tmp7 = c9;
          num2 = 1 + c9;
          tmp8 = closure_22;
          num4 = 0.02;
          diff = value - 0.02 * closure_22.get();
        } else {
          value2 = obj.get();
          num2 = 1;
          diff = value;
          if (value2 > obj2.get()) {
            tmp5 = c9;
            num2 = 1 + c9;
            tmp6 = closure_22;
            num3 = 0.02;
            diff = value + 0.02 * closure_22.get();
          }
        }
        tmp9 = num2;
        tmp10 = diff;
      }
      return;
    }
  }
  let obj5 = state(formatCount[4]);
  A.__closure = { indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: scrollOverflow, indicatorWidth: derivedValue1, scrollOverflow, interpolate: state(formatCount[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: items, withSpring: state(formatCount[9]).withSpring, SELECTED_INDICATOR_SPRING: itemSpacing };
  A.__workletHash = 1708325904563;
  A.__initData = __initData3;
  const animatedStyle = obj5.useAnimatedStyle(A);
  let obj6 = { indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: scrollOverflow, indicatorWidth: derivedValue1, scrollOverflow, interpolate: state(formatCount[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: items, withSpring: state(formatCount[9]).withSpring, SELECTED_INDICATOR_SPRING: itemSpacing };
  let obj8 = { onScroll: null, onEndDrag: null };
  class F {
    constructor(arg0) {
      result = scrollOffset.set(state.contentOffset.x);
      if (onScrollWorklet != null) {
        tmp2Result = tmp2(state.contentOffset.x);
      }
      return;
    }
  }
  F.__closure = { scrollOffset, onScrollWorklet };
  F.__workletHash = 12423910570232;
  F.__initData = __initData4;
  obj8.onScroll = F;
  const fn2 = function w() {
    if (onEndDrag != null) {
      tmp();
    }
  };
  fn2.__closure = { onEndDrag };
  fn2.__workletHash = 14688811166854;
  fn2.__initData = __initData5;
  obj8.onEndDrag = fn2;
  let items2 = [useReducedMotion];
  let obj7 = state(formatCount[4]);
  callback1 = simultaneousHandlers.useCallback((x) => {
    const current = ref.current;
    if (current != null) {
      const obj = { x, animated: !useReducedMotion };
      current.scrollTo(obj);
    }
  }, items2);
  const animatedScrollHandler = state(formatCount[4]).useAnimatedScrollHandler(obj8);
  class U {
    constructor() {
      obj = { scrollOffset: scrollOffset.get(), activeIndex: activeIndex.get(), itemDimensions: itemDimensions.get() };
      return obj;
    }
  }
  U.__closure = { scrollOffset, activeIndex, itemDimensions };
  U.__workletHash = 8102360645360;
  U.__initData = __initData6;
  const fn3 = function k(activeIndex, safeAreaState2) {
    let activeIndex1;
    if (safeAreaState2 != null) {
      activeIndex1 = tmp.activeIndex;
    }
    if (activeIndex.activeIndex !== activeIndex1) {
      if (!obj3.cheapWorkletShallowEqual(activeIndex, tmp)) {
        ({ scrollOffset, activeIndex, itemDimensions } = activeIndex);
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
        if (itemDimensions[activeIndex] != null) {
          num2 = tmp4.x;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const sum = num2 + (activeIndex - 1) * itemSpacing;
        let width;
        if (itemDimensions[activeIndex] != null) {
          width = tmp7.width;
        }
        if (tmp9) {
          if (scrollOffset + pageWidth < sum + width) {
            ReanimatedRexport2.runOnJS(callback1)(sum + c11);
            const tmp17Result = ReanimatedRexport2;
          } else if (sum < scrollOffset) {
            ReanimatedRexport2.runOnJS(callback1)(sum - c11);
            const tmp17Result2 = ReanimatedRexport2;
          }
        }
        tmp9 = 0 !== reduced && true && null != width;
      }
      obj3 = cheapWorkletShallowEqual;
    }
  };
  let obj9 = state(formatCount[4]);
  fn3.__closure = { cheapWorkletShallowEqual: state(formatCount[10]).cheapWorkletShallowEqual, itemSpacing, pageWidth, runOnJS: state(formatCount[4]).runOnJS, scrollToOffset: callback1, AUTO_SCROLL_BUFFER: itemDimensions };
  fn3.__workletHash = 14874002964281;
  fn3.__initData = __initData7;
  const animatedReaction = obj9.useAnimatedReaction(U, fn3);
  const items3 = [items, length, formatCount, state, flag, pressedIndex, activeIndex, setActiveIndex, tmp.controlsContainer, variant];
  const items4 = [simultaneousHandlers];
  const memo = simultaneousHandlers.useMemo(() => timestampProducer(React4, {
    style: controlsContainer.controlsContainer,
    children: items.map((count, index) => {
      count = count.count;
      state = index;
      ({ label, id } = count);
      const obj = { index, itemCount, label, count: null, state: null, grow: null, pressed: null, selected: null, onPress: null, onPressIn: null, onPressOut: null, variant: null };
      let tmp2;
      if (null != count) {
        tmp2 = dependencyMap(count);
      }
      obj.count = tmp2;
      obj.state = state;
      obj.grow = grow;
      obj.pressed = pressed;
      obj.selected = index === closure_7.get();
      obj.onPress = function handlePress() {
        setActiveIndex(closure_0);
      };
      obj.onPressIn = function handlePressIn() {
        const result = pressed.set(closure_0);
      };
      obj.onPressOut = function handlePressOut() {
        const result = pressed.set(-1);
      };
      obj.variant = variant;
      return variant(state(12396).TabItem, obj, id);
    })
  }), items3);
  const memo1 = simultaneousHandlers.useMemo(() => {
    let result = null;
    if (null != simultaneousHandlers) {
      const Gesture = LegacyBaseButton.Gesture;
      result = Gesture.Native().simultaneousWithExternalGesture(tmp);
      const NativeResult = Gesture.Native();
    }
    return result;
  }, items4);
  let obj11 = { ref, accessibilityRole: null, keyboardShouldPersistTaps: "handled", horizontal: true, onScroll: null, scrollEventThrottle: 16, showsHorizontalScrollIndicator: false, contentContainerStyle: null, bounces: false, children: null };
  const obj10 = { cheapWorkletShallowEqual: state(formatCount[10]).cheapWorkletShallowEqual, itemSpacing, pageWidth, runOnJS: state(formatCount[4]).runOnJS, scrollToOffset: callback1, AUTO_SCROLL_BUFFER: itemDimensions };
  const tmp16 = activeIndex;
  const tmp17 = scrollOffset;
  let str;
  if (obj12.isIOS()) {
    str = "tabbar";
  }
  obj11.accessibilityRole = str;
  obj11.onScroll = animatedScrollHandler;
  obj11.contentContainerStyle = tmp.container;
  const obj13 = { style: tmp.indicatorContainer, onLayout: callback, children: null };
  const obj14 = { style: null };
  const items5 = [tmp.indicator, animatedStyle];
  obj14.style = items5;
  obj13.children = variant(flag(formatCount[4]).View, obj14);
  const items6 = [variant(onScrollWorklet, obj13), memo];
  obj11.children = items6;
  const tmp16Result = tmp16(tmp17, obj11);
  let tmp18Result = tmp16Result;
  if (null != memo1) {
    const obj15 = { gesture: memo1, children: tmp16Result };
    tmp18Result = variant(tmp2(tmp3[12]).GestureDetector, obj15);
  }
  return tmp18Result;
});