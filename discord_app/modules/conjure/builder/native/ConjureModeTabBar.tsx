// discord_app/modules/conjure/builder/native/ConjureModeTabBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function ConjureModeTab(index) {
  index = index.index;
  const activeIndex = index.activeIndex;
  const pressed = index.pressed;
  ({ extras, onSelect: noop } = index);
  let onShowMenu;
  let menuLabel;
  ({ label, itemCount, itemStyle, labelStyle, labelTextStyle, prefixStyle } = index);
  let tmp = closure_12();
  inactive = tmp;
  const derivedStateFromSharedValue = index(pressed[9]).useDerivedStateFromSharedValue(
    activeIndex,
    (arg0) => Math.round(arg0) === index,
  );
  let obj = index(pressed[9]);
  const derivedStateFromSharedValue1 = index(pressed[9]).useDerivedStateFromSharedValue(
    pressed,
    (arg0) => arg0 === index,
  );
  index(pressed[9]);
  if (derivedStateFromSharedValue1) {
    inactive = tmp.active;
  } else {
    inactive = tmp.inactive;
  }
  const obj2 = index(pressed[9]);
  class E {
    constructor() {
      value = pressed.get();
      active = closure_4.inactive;
      tmp4 = value === index;
      tmp2 = closure_4;
      if (!tmp4) {
        num = 0;
        tmp5 = value < 0;
        if (tmp5) {
          tmp6 = globalThis;
          _Math = Math;
          tmp7 = activeIndex;
          tmp5 = Math.round(activeIndex.get()) === tmp3;
        }
        tmp4 = tmp5;
      }
      if (tmp4) {
        active = tmp2.active;
      }
      obj = { color: null };
      obj2 = closure_0(closure_2[7]);
      obj.color = obj2.withSpring(active, closure_10, "animate-always");
      return obj;
    }
  }
  const tmp2Result = index(pressed[6]);
  E.__closure = { pressed, colors: tmp, index, activeIndex, withSpring: index(pressed[7]).withSpring, TEXT_SPRING };
  E.__workletHash = 11237016080020;
  E.__initData = __initData5;
  onShowMenu = undefined;
  const animatedStyle = tmp2Result.useAnimatedStyle(E);
  if (extras != null) {
    onShowMenu = extras.onShowMenu;
  }
  menuLabel = undefined;
  if (extras != null) {
    menuLabel = extras.menuLabel;
  }
  let items = [menuLabel, onShowMenu];
  const items1 = [onShowMenu];
  const memo = noop.useMemo(() => {
    let tmp;
    if (null != onShowMenu) {
      if (null != menuLabel) {
        const obj = { name: "longpress", label: tmp2 };
        const items = [obj];
        tmp = items;
      }
    }
    return tmp;
  }, items);
  const obj4 = {
    style: itemStyle,
    onPress() {
      if (derivedStateFromSharedValue) {
        if (null != onShowMenu) {
          let tmpResult = tmp();
        }
        return tmpResult;
      }
      tmpResult = noop(index);
    },
    onLongPress: onShowMenu,
    onPressIn() {
      return pressed.set(index);
    },
    onPressOut() {
      return pressed.set(-1);
    },
    accessibilityRole: "tab",
    accessibilityState: { selected: derivedStateFromSharedValue },
    accessibilityActions: memo,
    onAccessibilityAction: noop.useCallback((nativeEvent) => {
      if ("longpress" === nativeEvent.nativeEvent.actionName) {
        if (onShowMenu != null) {
          tmp();
        }
      }
    }, items1),
    accessibilityHint: null,
    children: null,
  };
  const obj3 = { pressed, colors: tmp, index, activeIndex, withSpring: index(pressed[7]).withSpring, TEXT_SPRING };
  const tmp13 = inactive;
  let formatToPlainStringResult;
  if (tmp2Result2.isAndroid()) {
    const intl = tmp2(tmp3[10]).intl;
    const obj5 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[10]).t["4EsQA1"], obj5);
  }
  obj4.accessibilityHint = formatToPlainStringResult;
  const obj6 = { style: labelStyle, children: null };
  let prefix;
  if (extras != null) {
    prefix = extras.prefix;
  }
  let tmp12Result = null;
  if (null != prefix) {
    const obj7 = { variant: "text-sm/medium", color: "text-muted", style: prefixStyle, children: extras.prefix };
    tmp12Result = tmp12(tmp2(tmp3[11]).Text, obj7);
  }
  const items2 = [tmp12Result, ,];
  const obj8 = { animated: true, variant: "text-sm/semibold", style: null, lineClamp: 1, children: label };
  const items3 = [labelTextStyle, animatedStyle];
  obj8.style = items3;
  items2[1] = menuLabel(index(pressed[11]).Text, obj8);
  let renderTrailingIconResult;
  if (extras != null) {
    const renderTrailingIcon = extras.renderTrailingIcon;
    if (renderTrailingIcon != null) {
      renderTrailingIconResult = renderTrailingIcon(inactive);
    }
  }
  items2[2] = renderTrailingIconResult;
  obj6.children = items2;
  obj4.children = closure_8(onShowMenu, obj6);
  return menuLabel(tmp13, obj4);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
const TEXT_SPRING = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = fn(5009);
let closure_11 = createStyles.createStyles((borderRadius, arg1) => {
  const obj = {
    scrollContentContainer: { flexGrow: 1 },
    controlsContainer: {
      backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND,
      borderRadius: borderRadius + 4,
      paddingVertical: 4,
      flexDirection: "row",
      alignItems: "center",
    },
    indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" },
    indicator: null,
    indicatorHidden: null,
    item: null,
    itemFirst: null,
    itemLast: null,
    label: null,
    labelText: null,
    prefix: null,
  };
  const obj2 = {
    backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND,
    borderRadius: borderRadius + 4,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  };
  obj.indicator = {
    flex: 1,
    backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND,
    borderRadius,
  };
  obj.indicatorHidden = { opacity: 0 };
  const obj3 = {
    flex: 1,
    backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND,
    borderRadius,
  };
  obj.item = {
    width: `${(1 / arg1) * 100}%`,
    borderRadius: nativeDefault.radii.lg,
    paddingVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    justifyContent: "center",
  };
  obj.itemFirst = { marginStart: 4, marginEnd: -4 };
  obj.itemLast = { marginStart: -4, marginEnd: 4 };
  const obj4 = {
    width: `${(1 / arg1) * 100}%`,
    borderRadius: nativeDefault.radii.lg,
    paddingVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    justifyContent: "center",
  };
  obj.label = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, maxWidth: "100%" };
  obj.labelText = { flexShrink: 1 };
  obj.prefix = { flexShrink: 0 };
  return obj;
});
createStyles = fn(5009);
let closure_12 = createStyles.createStyleProperties({
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
});
const __initData = {
  code: "function ConjureModeTabBarTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}",
};
const __initData2 = {
  code: "function ConjureModeTabBarTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null)previousIndicatorWidth.set(previous);}",
};
const __initData3 = {
  code: "function ConjureModeTabBarTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}",
};
const __initData4 = {
  code: "function ConjureModeTabBarTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth,pressedIndex,PRESSED_TRANSLATE_AMOUNT,SEGMENT_SPACING,itemCount,previousIndicatorWidth,withSpring,INDICATOR_SPRING}=this.__closure;let translateX=(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();let scaleX=1;if(pressedIndex.get()>=0&&pressedIndex.get()!==clampedActiveIndex.get()){const direction=pressedIndex.get()<clampedActiveIndex.get()?-1:1;scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=direction*indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}if(clampedActiveIndex.get()===0)translateX+=SEGMENT_SPACING;else if(clampedActiveIndex.get()===itemCount-1)translateX-=SEGMENT_SPACING;const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated)previousIndicatorWidth.set(indicatorWidth.get());return{transform:[{translateX:animated?withSpring(translateX,INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,INDICATOR_SPRING)}]};}",
};
const __initData5 = {
  code: "function ConjureModeTabBarTsx5(){const{pressed,colors,index,activeIndex,withSpring,TEXT_SPRING}=this.__closure;const pressedIndex=pressed.get();let color=colors.inactive;if(pressedIndex===index)color=colors.active;else if(pressedIndex<0&&Math.round(activeIndex.get())===index)color=colors.active;return{color:withSpring(color,TEXT_SPRING,'animate-always')};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureModeTabBar.tsx");

export default function ConjureModeTabBar(arg0) {
  ({ state, extras: require } = arg0);
  pressedIndex = undefined;
  closure_11 = undefined;
  const activeIndex = state.activeIndex;
  ({ items, pressedIndex } = state);
  const setActiveIndex = state.setActiveIndex;
  const length = items.length;
  let tmp3 = closure_11(
    require("useToken").useToken(activeIndex(pressedIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS),
    length,
  );
  closure_5 = tmp3;
  let obj = require("useToken");
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const obj2 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  const obj3 = require("ReanimatedRexport");
  const fn = function h() {
    return sharedValue.get();
  };
  fn.__closure = { indicatorWidth: sharedValue };
  fn.__workletHash = 21525623447;
  fn.__initData = __initData;
  const fn2 = function c(arg0, arg1) {
    if (null != arg1) {
      const result = sharedValue1.set(arg1);
    }
  };
  fn2.__closure = { previousIndicatorWidth: sharedValue1 };
  fn2.__workletHash = 1770845496481;
  fn2.__initData = __initData2;
  const animatedReaction = require("ReanimatedRexport").useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue];
  closure_8 = setActiveIndex.useCallback(
    (nativeEvent) => sharedValue.set(nativeEvent.nativeEvent.layout.width),
    items1,
  );
  const obj4 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(activeIndex.get());
  let obj5 = require("ReanimatedRexport");
  const fn3 = function w() {
    return Math.min(Math.max(activeIndex.get(), 0), length - 1);
  };
  fn3.__closure = { activeIndex, itemCount: length };
  fn3.__workletHash = 5614191421067;
  fn3.__initData = __initData3;
  const derivedValue = require("ReanimatedRexport").useDerivedValue(fn3);
  let obj6 = require("ReanimatedRexport");
  class D {
    constructor() {
      obj = closure_10;
      value = closure_10.get();
      obj2 = closure_6;
      diff = value - closure_9.get();
      result = diff * closure_6.get();
      obj3 = pressedIndex;
      tmp4 = pressedIndex.get() >= 0;
      if (tmp4) {
        value1 = obj3.get();
        tmp4 = value1 !== obj.get();
      }
      num = 1;
      sum = result;
      if (tmp4) {
        value2 = obj3.get();
        num2 = 1;
        if (value2 < obj.get()) {
          num2 = -1;
        }
        num3 = 0.02;
        sum = result + num2 * obj2.get() * 0.02;
        num = 1.04;
      }
      if (0 === obj.get()) {
        num5 = 4;
        sum1 = sum + 4;
      } else {
        tmp8 = length;
        sum1 = sum;
        if (obj.get() === length - 1) {
          num4 = 4;
          sum1 = sum - 4;
        }
      }
      obj4 = closure_7;
      value3 = obj2.get();
      tmp11 = value3 === closure_7.get();
      if (!tmp11) {
        result1 = obj4.set(obj2.get());
      }
      withSpringResult = sum1;
      if (tmp11) {
        tmp14 = closure_0;
        tmp15 = closure_2;
        obj5 = closure_0(closure_2[7]);
        tmp16 = closure_9;
        withSpringResult = obj5.withSpring(sum1, closure_9);
      }
      obj1 = { transform: null };
      items = [,];
      items[0] = { translateX: withSpringResult };
      obj9 = { scaleX: null };
      obj8 = closure_0(closure_2[7]);
      obj9.scaleX = obj8.withSpring(num, closure_9);
      items[1] = obj9;
      obj1.transform = items;
      return obj1;
    }
  }
  let obj7 = require("ReanimatedRexport");
  D.__closure = {
    clampedActiveIndex: derivedValue,
    defaultActiveIndex: sharedValue2,
    indicatorWidth: sharedValue,
    pressedIndex,
    PRESSED_TRANSLATE_AMOUNT: 0.04,
    SEGMENT_SPACING: 4,
    itemCount: length,
    previousIndicatorWidth: sharedValue1,
    withSpring: require("spring").withSpring,
    INDICATOR_SPRING: sharedValue2,
  };
  D.__workletHash = 4115478604721;
  D.__initData = __initData4;
  closure_11 = obj7.useAnimatedStyle(D);
  const mapped = items.map((id, index) => {
    const tmp = sharedValue2.get() === index;
    let tmp3;
    if (tmp) {
      tmp3 = closure_8;
    }
    const obj = { onLayout: tmp3, style: null };
    const items = [closure_5.indicator, tmp ? closure_11 : closure_5.indicatorHidden];
    obj.style = items;
    return React5(ReanimatedRexportDefault.View, obj, id.id);
  });
  const mapped1 = items.map((id, index) => {
    id = id.id;
    if (0 === index) {
      let itemLast = closure_5.itemFirst;
    } else if (index === length - 1) {
      itemLast = closure_5.itemLast;
    }
    const obj = {
      label: id.label,
      index,
      itemCount: length,
      activeIndex,
      pressed: pressedIndex,
      extras: null,
      onSelect: null,
      itemStyle: null,
      labelStyle: null,
      labelTextStyle: null,
      prefixStyle: null,
    };
    let tmp6;
    if (_require != null) {
      tmp6 = _require[id];
    }
    obj.extras = tmp6;
    obj.onSelect = setActiveIndex;
    const items = [closure_5.item, itemLast];
    obj.itemStyle = items;
    ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
    return React5(ConjureModeTab, obj, id);
  });
  const obj8 = {
    clampedActiveIndex: derivedValue,
    defaultActiveIndex: sharedValue2,
    indicatorWidth: sharedValue,
    pressedIndex,
    PRESSED_TRANSLATE_AMOUNT: 0.04,
    SEGMENT_SPACING: 4,
    itemCount: length,
    previousIndicatorWidth: sharedValue1,
    withSpring: require("spring").withSpring,
    INDICATOR_SPRING: sharedValue2,
  };
  const tmp12 = closure_5;
  let str;
  if (obj9.isIOS()) {
    str = "tabbar";
  }
  const obj10 = {
    horizontal: true,
    accessibilityRole: str,
    alwaysBounceHorizontal: false,
    contentContainerStyle: tmp3.scrollContentContainer,
    children: null,
  };
  obj9 = require("PlatformUtils");
  const tmp13 = closure_8;
  let str2;
  if (tmpResult.isAndroid()) {
    str2 = "tablist";
  }
  const obj11 = { accessibilityRole: str2, style: tmp3.controlsContainer, children: null };
  const items2 = [
    sharedValue1(sharedValue, { accessible: false, style: tmp3.indicatorContainer, children: mapped }),
    mapped1,
  ];
  obj11.children = items2;
  obj10.children = tmp13(sharedValue, obj11, items.length);
  return sharedValue1(tmp12, obj10);
}
