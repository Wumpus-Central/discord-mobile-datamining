// discord_app/design/components/Tabs/native/Tabs.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import cheapWorkletShallowEqual from "../../../../modules/reanimated/native/cheapWorkletShallowEqual.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../modules/user_settings/LocaleStore.tsx";

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
let closure_10 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((gap, arg1) => {
  let obj = { container: null, controlsContainer: null, indicatorContainer: null, indicator: null };
  obj = {
    display: "flex",
    flexGrow: 1,
    minWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
    borderBottomWidth: 1,
  };
  obj.container = obj;
  obj = { marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap };
  obj.controlsContainer = obj;
  const size = {
    position: "absolute",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: nativeDefault.space.PX_16,
  };
  obj.indicatorContainer = size;
  if ("gradient-background" === arg1) {
    let TEXT_BRAND = nativeDefault.colors.TEXT_STRONG;
  } else {
    TEXT_BRAND = nativeDefault.colors.TEXT_BRAND;
  }
  obj.indicator = {
    height: 2,
    backgroundColor: TEXT_BRAND,
    borderTopStartRadius: nativeDefault.radii.xs,
    borderTopEndRadius: nativeDefault.radii.xs,
  };
  return obj;
});
let closure_13 = {
  code: "function TabsNativeTsx1(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}",
};
let closure_14 = {
  code: "function TabsNativeTsx2(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;}",
};
let closure_15 = {
  code: "function TabsNativeTsx3(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}",
};
let closure_16 = {
  code: "function TabsNativeTsx4(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}",
};
let __initData = {
  code: "function TabsNativeTsx5(event){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);}",
};
let closure_18 = {
  code: "function TabsNativeTsx6(){const{onEndDrag}=this.__closure;var _onEndDrag;(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}",
};
let closure_19 = {
  code: "function TabsNativeTsx7(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}",
};
let closure_20 = {
  code: "function TabsNativeTsx8(props,prevState){const{cheapWorkletShallowEqual,itemSpacing,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2,_itemDimensions$activ3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions$activ=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.x)!==null&&_itemDimensions$activ!==void 0?_itemDimensions$activ:0)+(activeIndex-1)*itemSpacing;const itemWidth=(_itemDimensions$activ3=itemDimensions[activeIndex])===null||_itemDimensions$activ3===void 0?void 0:_itemDimensions$activ3.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}",
};
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Tabs/native/Tabs.native.tsx");

export { defaultCountFormatter };
export const Tabs = function Tabs(state) {
  state = state.state;
  let flag = state.grow;
  if (flag === undefined) {
    flag = true;
  }
  let formatCount = state.formatCount;
  if (formatCount === undefined) {
    formatCount = itemSpacing;
  }
  const simultaneousHandlers = state.simultaneousHandlers;
  const onScrollWorklet = state.onScrollWorklet;
  const onEndDrag = state.onEndDrag;
  const variant = state.variant;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let callback1;
  const activeIndex = state.activeIndex;
  const scrollOffset = state.scrollOffset;
  const scrollOverflow = state.scrollOverflow;
  let items = state.items;
  const itemDimensions = state.itemDimensions;
  itemSpacing = state.itemSpacing;
  const pageWidth = state.pageWidth;
  const pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  const useReducedMotion = state.useReducedMotion;
  const tmp = itemDimensions(itemSpacing, variant);
  __initData = tmp;
  let obj = state(formatCount[4]);
  const sharedValue = obj.useSharedValue(pageWidth);
  const length = items.length;
  const ref = simultaneousHandlers.useRef(null);
  const items1 = [sharedValue];
  const callback = simultaneousHandlers.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  let obj1 = state(formatCount[4]);
  class C {
    constructor() {
      return Math.round(Math.min(Math.max(activeIndex.get(), 0), length - 1));
    }
  }
  C.__closure = { activeIndex, itemCount: length };
  C.__workletHash = 3447899396126;
  C.__initData = pageWidth;
  derivedValue = obj1.useDerivedValue(C);
  let obj2 = state(formatCount[4]);
  class W {
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
  W.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  W.__workletHash = 8603255620075;
  W.__initData = pressedIndex;
  derivedValue1 = obj2.useDerivedValue(W);
  let obj3 = state(formatCount[4]);
  class N {
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
  N.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  N.__workletHash = 3224400863644;
  N.__initData = setActiveIndex;
  derivedValue2 = obj3.useDerivedValue(N);
  let obj4 = state(formatCount[4]);
  const fn = function $() {
    value = derivedValue2.get();
    let obj = pressedIndex;
    let num = 1;
    if (pressedIndex.get() < 0) {
      if (scrollOverflow.get() < 0) {
        const obj4 = ReanimatedRexport2;
        const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], [0.9, 1], "clamp");
        let sum = value + (-derivedValue1.get() * (1 - interpolateResult)) / 2;
        num = interpolateResult;
      } else {
        sum = value;
        if (scrollOverflow.get() > 0) {
          const obj11 = ReanimatedRexport2;
          const interpolateResult1 = obj11.interpolate(scrollOverflow.get(), [50, 0], [0.9, 1], "clamp");
          sum = value + (derivedValue1.get() * (1 - interpolateResult1)) / 2;
          num = interpolateResult1;
        }
      }
      obj = { width: spring.withSpring(derivedValue1.get(), closure_10), transform: null };
      obj = { translateX: null };
      obj.translateX = spring.withSpring(sum, closure_10);
      items = [obj];
      let obj1 = { scaleX: null };
      obj1.scaleX = spring.withSpring(num, closure_10);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    } else {
      obj1 = derivedValue;
      value = obj.get();
      if (value < derivedValue.get()) {
        let num2 = 1 + c9;
        let diff = value - 0.02 * derivedValue1.get();
      } else {
        const value1 = obj.get();
        diff = value;
        if (value1 > obj1.get()) {
          num2 = 1 + c9;
          diff = value + 0.02 * derivedValue1.get();
        }
      }
    }
  };
  obj = {
    indicatorTranslateX: derivedValue2,
    pressedIndex,
    clampedActiveIndex: derivedValue,
    PRESSED_TRANSLATE_AMOUNT: scrollOverflow,
    indicatorWidth: derivedValue1,
    scrollOverflow,
    interpolate: state(formatCount[4]).interpolate,
    SCROLL_OVERFLOW_UPPER_BOUND: 50,
    SCROLL_OVERFLOW_MAX_SCALE: 0.9,
    withSpring: state(formatCount[7]).withSpring,
    SELECTED_INDICATOR_SPRING: items,
  };
  fn.__closure = obj;
  fn.__workletHash = 1794186407627;
  fn.__initData = useReducedMotion;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  obj = { onScroll: null, onEndDrag: null };
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
  F.__workletHash = 1586298483424;
  F.__initData = __initData;
  obj.onScroll = F;
  const fn2 = function b() {
    if (onEndDrag != null) {
      tmp();
    }
  };
  fn2.__closure = { onEndDrag };
  fn2.__workletHash = 6364544472149;
  fn2.__initData = sharedValue;
  obj.onEndDrag = fn2;
  const items2 = [useReducedMotion];
  const obj7 = state(formatCount[4]);
  let tmp2 = state;
  callback1 = simultaneousHandlers.useCallback((x) => {
    const current = ref.current;
    if (current != null) {
      const obj = { x, animated: !useReducedMotion };
      current.scrollTo(obj);
    }
  }, items2);
  const animatedScrollHandler = state(formatCount[4]).useAnimatedScrollHandler(obj);
  const fn3 = function k() {
    return { scrollOffset: scrollOffset.get(), activeIndex: activeIndex.get(), itemDimensions: itemDimensions.get() };
  };
  fn3.__closure = { scrollOffset, activeIndex, itemDimensions };
  fn3.__workletHash = 9993285637539;
  fn3.__initData = length;
  class X {
    constructor(arg0, arg1) {
      tmp = arg1;
      activeIndex = undefined;
      if (arg1 != null) {
        activeIndex = tmp.activeIndex;
      }
      if (state.activeIndex !== activeIndex) {
        tmp15 = closure_0;
        tmp16 = closure_2;
        obj3 = closure_0(closure_2[8]);
        if (!obj3.cheapWorkletShallowEqual(state, tmp)) {
          ({ scrollOffset, activeIndex, itemDimensions } = state);
          num = 0;
          tmp4 = itemDimensions[activeIndex];
          num2 = undefined;
          reduced = itemDimensions.reduce((acc, width) => {
            let num;
            if (width != null) {
              num = width.width;
            }
            if (num == null) {
              num = 0;
            }
            return acc + num;
          }, 0);
          if (tmp4 != null) {
            num2 = tmp4.x;
          }
          if (num2 == null) {
            num2 = 0;
          }
          num3 = 1;
          tmp5 = itemSpacing;
          sum = num2 + (activeIndex - 1) * itemSpacing;
          tmp7 = itemDimensions[activeIndex];
          width = undefined;
          if (tmp7 != null) {
            width = tmp7.width;
          }
          tmp9 = 0 !== reduced && true && null != width;
          if (tmp9) {
            tmp10 = pageWidth;
            if (scrollOffset + pageWidth < sum + width) {
              tmp15Result = tmp15(tmp16[4]);
              tmp13 = closure_24;
              num5 = 16;
              tmp14 = tmp15Result.runOnJS(closure_24)(sum + 16);
            } else if (sum < scrollOffset) {
              tmp15Result1 = tmp15(tmp16[4]);
              tmp11 = closure_24;
              num4 = 16;
              tmp12 = tmp15Result1.runOnJS(closure_24)(sum - 16);
            }
          }
        }
      }
      return;
    }
  }
  obj1 = {
    cheapWorkletShallowEqual: state(formatCount[8]).cheapWorkletShallowEqual,
    itemSpacing,
    pageWidth,
    runOnJS: state(formatCount[4]).runOnJS,
    scrollToOffset: callback1,
    AUTO_SCROLL_BUFFER: 16,
  };
  X.__closure = obj1;
  X.__workletHash = 15851319414889;
  X.__initData = ref;
  const animatedReaction = state(formatCount[4]).useAnimatedReaction(fn3, X);
  const items3 = [
    items,
    length,
    formatCount,
    state,
    flag,
    pressedIndex,
    activeIndex,
    setActiveIndex,
    tmp.controlsContainer,
    variant,
  ];
  const items4 = [simultaneousHandlers];
  const memo = simultaneousHandlers.useMemo(
    () =>
      timestampProducer(React4, {
        style: controlsContainer.controlsContainer,
        children: items.map((count, index) => {
          count = count.count;
          state = index;
          ({ label, id } = count);
          const obj = {
            index,
            itemCount,
            label,
            count: null,
            state: null,
            grow: null,
            pressed: null,
            selected: null,
            onPress: null,
            onPressIn: null,
            onPressOut: null,
            variant: null,
          };
          let tmp2;
          if (null != count) {
            tmp2 = dependencyMap(count);
          }
          obj.count = tmp2;
          obj.state = state;
          obj.grow = grow;
          obj.pressed = pressed;
          obj.selected = index === closure_7.get();
          obj.onPress = function onPress() {
            setActiveIndex(closure_0);
          };
          obj.onPressIn = function onPressIn() {
            const result = pressed.set(closure_0);
          };
          obj.onPressOut = function onPressOut() {
            const result = pressed.set(-1);
          };
          obj.variant = variant;
          return variant(state(12615).TabItem, obj, id);
        }),
      }),
    items3,
  );
  const memo1 = simultaneousHandlers.useMemo(() => {
    let result = null;
    if (null != simultaneousHandlers) {
      const Gesture = LegacyBaseButton.Gesture;
      result = Gesture.Native().simultaneousWithExternalGesture(tmp);
      const NativeResult = Gesture.Native();
    }
    return result;
  }, items4);
  obj2 = {
    ref,
    accessibilityRole: null,
    keyboardShouldPersistTaps: "handled",
    horizontal: true,
    onScroll: null,
    scrollEventThrottle: 16,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: null,
    bounces: false,
    children: null,
  };
  const obj9 = state(formatCount[4]);
  const tmp16 = activeIndex;
  const tmp17 = scrollOffset;
  let str;
  if (obj12.isIOS()) {
    str = "tabbar";
  }
  obj2.accessibilityRole = str;
  obj2.onScroll = animatedScrollHandler;
  obj2.contentContainerStyle = tmp.container;
  obj3 = { style: tmp.indicatorContainer, onLayout: callback, children: null };
  obj4 = { style: null };
  const items5 = [tmp.indicator, animatedStyle];
  obj4.style = items5;
  obj3.children = variant(flag(formatCount[4]).View, obj4);
  const items6 = [variant(onScrollWorklet, obj3), memo];
  obj2.children = items6;
  const tmp16Result = tmp16(tmp17, obj2);
  let tmp18Result = tmp16Result;
  if (null != memo1) {
    const obj5 = { gesture: memo1, children: tmp16Result };
    tmp18Result = variant(tmp2(tmp3[10]).GestureDetector, obj5);
  }
  return tmp18Result;
};
