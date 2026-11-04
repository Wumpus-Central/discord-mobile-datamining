// discord_app/design/components/Tabs/native/Tabs.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05428_LegacyBaseButton.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../modules/user_settings/LocaleStore.tsx";
import 01652__ from "../../../../../_runtime/metro/01652__.js";

const require = globalThis.__r;

require = fn;
function defaultCountFormatter(toLocaleString) {
  return toLocaleString.toLocaleString(LocaleStore.locale);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = module_1652.createAnimatedComponent(ScrollView);
let closure_9 = { mass: 0.3, damping: 13, stiffness: 100, overshootClamping: true };
const createStyles = fn(5141);
let closure_10 = createStyles.createStyles((gap, arg1) => {
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
let closure_12 = { code: "(function TabsNativeTsx1(){let[activeIndex,itemCount]=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));})" };
let closure_13 = { code: "(function TabsNativeTsx2(){let[itemDimensions,clampedActiveIndex]=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;})" };
let closure_14 = { code: "(function TabsNativeTsx3(){let[itemDimensions,clampedActiveIndex]=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;})" };
let closure_15 = { code: "(function TabsNativeTsx4(){let[indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING]=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};})" };
let closure_16 = { code: "(function TabsNativeTsx5(event){let[scrollOffset,onScrollWorklet]=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);})" };
let closure_17 = { code: "(function TabsNativeTsx6(){let[onEndDrag]=this.__closure;var _onEndDrag;(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();})" };
let closure_18 = { code: "(function TabsNativeTsx7(){let[scrollOffset,activeIndex,itemDimensions]=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};})" };
let closure_19 = { code: "(function TabsNativeTsx8(props,prevState){let[cheapWorkletShallowEqual,itemSpacing,pageWidth,scheduleOnRN,scrollToOffset,AUTO_SCROLL_BUFFER]=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2,_itemDimensions$activ3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions$activ=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.x)!==null&&_itemDimensions$activ!==void 0?_itemDimensions$activ:0)+(activeIndex-1)*itemSpacing;const itemWidth=(_itemDimensions$activ3=itemDimensions[activeIndex])===null||_itemDimensions$activ3===void 0?void 0:_itemDimensions$activ3.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){scheduleOnRN(scrollToOffset,itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){scheduleOnRN(scrollToOffset,itemOffset-AUTO_SCROLL_BUFFER);}})" };
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Tabs/native/Tabs.native.tsx");

export { defaultCountFormatter };
export function Tabs(state) {
  state = state.state;
  _require = state;
  let flag = state.grow;
  if (flag === undefined) {
    flag = true;
  }
  importDefault = flag;
  let formatCount = state.formatCount;
  if (formatCount === undefined) {
    formatCount = sharedValue;
  }
  dependencyMap = formatCount;
  noop = simultaneousHandlers;
  const variant = state.variant;
  c4 = variant;
  c10 = undefined;
  const activeIndex = state.activeIndex;
  c5 = activeIndex;
  ({ scrollOffset, items } = state);
  c6 = items;
  ({ itemDimensions, itemSpacing, pageWidth, pressedIndex } = state);
  c7 = pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  c8 = setActiveIndex;
  const useReducedMotion = state.useReducedMotion;
  c9 = useReducedMotion;
  ({ onScrollWorklet, onEndDrag } = state);
  const tmp = c10(itemSpacing, variant);
  c10 = tmp;
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(pageWidth);
  const length = items.length;
  const ref = noop.useRef(null);
  let items1 = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  let obj = require("../../../../../_runtime/metro/01652__.js");
  let items2 = [length, activeIndex, length];
  _require = undefined;
  importDefault = undefined;
  [tmp7, tmp8, tmp9] = items2;
  class TabsNativeTsx1 {
    constructor() {
      return Math.round(Math.min(Math.max(closure_0.get(), 0), closure_1 - 1));
    }
  }
  let items3 = [tmp8, tmp9];
  TabsNativeTsx1.__closure = items3;
  TabsNativeTsx1.__workletHash = 9107573448935;
  TabsNativeTsx1.__initData = tmp7;
  const derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(TabsNativeTsx1);
  const obj3 = require("../../../../../_runtime/metro/01652__.js");
  let items4 = [ref, itemDimensions, derivedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp11, tmp12, tmp13] = items4;
  class TabsNativeTsx2 {
    constructor() {
      value = closure_0.get();
      tmp2 = value[closure_1.get(closure_1)];
      num = 0;
      if (null != tmp2) {
        num = tmp2.width;
      }
      return num;
    }
  }
  const items5 = [tmp12, tmp13];
  TabsNativeTsx2.__closure = items5;
  TabsNativeTsx2.__workletHash = 5186637785842;
  TabsNativeTsx2.__initData = tmp11;
  const derivedValue1 = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(TabsNativeTsx2);
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  const items6 = [closure_14, itemDimensions, derivedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp15, tmp16, tmp17] = items6;
  class TabsNativeTsx3 {
    constructor() {
      value = closure_0.get();
      tmp2 = value[closure_1.get(closure_1)];
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
  const items7 = [tmp16, tmp17];
  TabsNativeTsx3.__closure = items7;
  TabsNativeTsx3.__workletHash = 1444207560709;
  TabsNativeTsx3.__initData = tmp15;
  const derivedValue2 = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(TabsNativeTsx3);
  const tmp2Result6 = require("../../../../../_runtime/metro/01652__.js");
  const items8 = [closure_15, derivedValue2, pressedIndex, derivedValue, 0.04, derivedValue1, state.scrollOverflow, require("../../../../../_runtime/metro/01652__.js").interpolate, 50, 0.9, require("spring/spring").withSpring, c9];
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
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items8;
  class TabsNativeTsx4 {
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
            tmp22 = closure_6;
            tmp23 = closure_7;
            items2 = [, ];
            items2[0] = closure_7;
            items2[1] = 0;
            tmp24 = closure_8;
            items3 = [, ];
            items3[0] = closure_8;
            items3[1] = 1;
            str2 = "clamp";
            tmp25 = items2;
            tmp26 = items3;
            tmp27 = closure_6(obj3.get(), items2, items3, "clamp");
            tmp28 = closure_4;
            num6 = 2;
            sum = value + closure_4.get() * (1 - tmp27) / 2;
            num = tmp27;
          }
        }
        obj1 = { width: null, transform: null };
        tmp19 = closure_9;
        tmp20 = closure_4;
        tmp21 = closure_10;
        obj1.width = closure_9(closure_4.get(), closure_10);
        obj7 = { translateX: null };
        obj7.translateX = closure_9(sum, closure_10);
        items4 = [, ];
        items4[0] = obj7;
        obj8 = { scaleX: null };
        obj8.scaleX = closure_9(num, closure_10);
        items4[1] = obj8;
        obj1.transform = items4;
        return obj1;
      } else {
        obj2 = closure_2;
        value1 = obj.get();
        if (value1 < closure_2.get()) {
          tmp7 = closure_3;
          num2 = 1 + closure_3;
          tmp8 = closure_4;
          num4 = 2;
          diff = value - closure_4.get() * (closure_3 / 2);
        } else {
          value2 = obj.get();
          num2 = 1;
          diff = value;
          if (value2 > obj2.get()) {
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
  const items9 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
  TabsNativeTsx4.__closure = items9;
  TabsNativeTsx4.__workletHash = 9859194654578;
  TabsNativeTsx4.__initData = tmp19;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(TabsNativeTsx4);
  const tmp2Result7 = require("../../../../../_runtime/metro/01652__.js");
  const items10 = [closure_16, scrollOffset, onScrollWorklet];
  _require = undefined;
  importDefault = undefined;
  [tmp32, tmp33, tmp34] = items10;
  let obj4 = { onScroll: null, onEndDrag: null };
  class TabsNativeTsx5 {
    constructor(arg0) {
      result = closure_0.set(state.contentOffset.x);
      if (closure_1 != null) {
        tmp2Result = tmp2(state.contentOffset.x);
      }
      return;
    }
  }
  const items11 = [tmp33, tmp34];
  TabsNativeTsx5.__closure = items11;
  TabsNativeTsx5.__workletHash = 13274284011801;
  TabsNativeTsx5.__initData = tmp32;
  obj4.onScroll = TabsNativeTsx5;
  const items12 = [closure_17, onEndDrag];
  _require = undefined;
  [tmp35, tmp36] = items12;
  class TabsNativeTsx6 {
    constructor() {
      if (closure_0 != null) {
        tmpResult = tmp();
      }
      return;
    }
  }
  const items13 = [tmp36];
  TabsNativeTsx6.__closure = items13;
  TabsNativeTsx6.__workletHash = 12887492277932;
  TabsNativeTsx6.__initData = tmp35;
  obj4.onEndDrag = TabsNativeTsx6;
  const items14 = [useReducedMotion];
  const tmp2Result8 = require("../../../../../_runtime/metro/01652__.js");
  const callback1 = obj2.useCallback((x) => {
    const current = ref.current;
    if (current != null) {
      const obj = { x, animated: !c9 };
      current.scrollTo(obj);
    }
  }, items14);
  const animatedScrollHandler = require("../../../../../_runtime/metro/01652__.js").useAnimatedScrollHandler(obj4);
  const items15 = [closure_18, scrollOffset, activeIndex, itemDimensions];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp39, tmp40, tmp41, tmp42] = items15;
  class TabsNativeTsx7 {
    constructor() {
      obj = { scrollOffset: closure_0.get(), activeIndex: closure_1.get(), itemDimensions: closure_2.get() };
      return obj;
    }
  }
  const items16 = [tmp40, tmp41, tmp42];
  TabsNativeTsx7.__closure = items16;
  TabsNativeTsx7.__workletHash = 16238996091738;
  TabsNativeTsx7.__initData = tmp39;
  const items17 = [closure_19, require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, itemSpacing, pageWidth, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, callback1, 16];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items17;
  class TabsNativeTsx8 {
    constructor(arg0, arg1) {
      tmp = arg1;
      activeIndex1 = undefined;
      if (arg1 != null) {
        activeIndex1 = tmp.activeIndex;
      }
      if (state.activeIndex !== activeIndex1) {
        tmp19 = closure_0;
        if (!tmp19(state, tmp)) {
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
          tmp5 = closure_1;
          sum = num2 + (activeIndex - 1) * closure_1;
          tmp7 = itemDimensions[activeIndex];
          width = undefined;
          if (tmp7 != null) {
            width = tmp7.width;
          }
          tmp9 = 0 !== reduced && true && null != width;
          if (tmp9) {
            tmp10 = closure_2;
            if (scrollOffset + closure_2 < sum + width) {
              tmp15 = closure_3;
              tmp16 = closure_4;
              tmp17 = closure_5;
              tmp18 = closure_3(closure_4, sum + closure_5);
            } else if (sum < scrollOffset) {
              tmp11 = closure_3;
              tmp12 = closure_4;
              tmp13 = closure_5;
              tmp14 = closure_3(closure_4, sum - closure_5);
            }
          }
        }
      }
      return;
    }
  }
  const items18 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
  TabsNativeTsx8.__closure = items18;
  TabsNativeTsx8.__workletHash = 332745523033;
  TabsNativeTsx8.__initData = tmp43;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(TabsNativeTsx7, TabsNativeTsx8);
  const items19 = [items, length, formatCount, state, flag, pressedIndex, activeIndex, setActiveIndex, tmp.controlsContainer, variant];
  const items20 = [state.simultaneousHandlers];
  const memo = obj2.useMemo(() => timestampProducer(React4, {
    style: _undefined9.controlsContainer,
    children: _undefined7.map((count, index) => {
      count = count.count;
      state = index;
      ({ label, indicatorDot, id } = count);
      const obj = { index, itemCount, label, count: null, indicatorDot: null, state: null, grow: null, pressed: null, selected: null, onPress: null, onPressIn: null, onPressOut: null, variant: null };
      let tmp2;
      if (null != count) {
        tmp2 = dependencyMap(count);
      }
      obj.count = tmp2;
      obj.indicatorDot = indicatorDot;
      obj.state = state;
      obj.grow = grow;
      obj.pressed = pressed;
      obj.selected = index === closure_5.get();
      obj.onPress = function handlePress() {
        closure_2_8(closure_0);
      };
      obj.onPressIn = function handlePressIn() {
        const result = pressed.set(closure_0);
      };
      obj.onPressOut = function handlePressOut() {
        const result = pressed.set(-1);
      };
      obj.variant = variant;
      return _undefined7(state(12373).TabItem, obj, id);
    })
  }), items19);
  const memo1 = obj2.useMemo(() => {
    let result = null;
    if (null != c3) {
      const Gesture = LegacyBaseButton.Gesture;
      result = Gesture.Native().simultaneousWithExternalGesture(tmp);
      const NativeResult = Gesture.Native();
    }
    return result;
  }, items20);
  let obj5 = { ref, accessibilityRole: null, keyboardShouldPersistTaps: "handled", horizontal: true, onScroll: null, scrollEventThrottle: 16, showsHorizontalScrollIndicator: false, contentContainerStyle: null, bounces: false, children: null };
  const tmp2Result9 = require("../../../../../_runtime/metro/01652__.js");
  const tmp53 = c7;
  const tmp54 = c8;
  let str;
  if (tmp2Result10.isIOS()) {
    str = "tabbar";
  }
  obj5.accessibilityRole = str;
  obj5.onScroll = animatedScrollHandler;
  obj5.contentContainerStyle = tmp.container;
  let obj6 = { style: tmp.indicatorContainer, onLayout: callback, children: null };
  const obj7 = { style: null };
  const items21 = [tmp.indicator, animatedStyle];
  obj7.style = items21;
  obj6.children = c6(module_1652.View, obj7);
  const items22 = [c6(c4, obj6), memo];
  obj5.children = items22;
  const tmp53Result = tmp53(tmp54, obj5);
  let tmp55Result = tmp53Result;
  if (null != memo1) {
    const obj8 = { gesture: memo1, children: tmp53Result };
    tmp55Result = c6(tmp2(5428).GestureDetector, obj8);
  }
  return tmp55Result;
}