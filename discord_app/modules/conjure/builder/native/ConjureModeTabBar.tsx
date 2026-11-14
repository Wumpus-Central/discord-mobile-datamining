// discord_app/modules/conjure/builder/native/ConjureModeTabBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useStateFromSharedValue from "../../../reanimated/native/useStateFromSharedValue.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1655 = _mod1655;

require = fn;
function ConjureModeTab(index) {
  index = index.index;
  c0 = index;
  ({ activeIndex, pressed } = index);
  c1 = pressed;
  ({ extras, onSelect: c2 } = index);
  let onShowMenu;
  let menuLabel;
  ({ label, itemCount, itemStyle, labelStyle, labelTextStyle, prefixStyle } = index);
  let tmp = closure_12();
  const derivedStateFromSharedValue = useStateFromSharedValue.useDerivedStateFromSharedValue(
    activeIndex,
    (arg0) => Math.round(arg0) === c0,
  );
  c3 = derivedStateFromSharedValue;
  const derivedStateFromSharedValue1 = useStateFromSharedValue.useDerivedStateFromSharedValue(
    pressed,
    (arg0) => arg0 === c0,
  );
  useStateFromSharedValue;
  if (derivedStateFromSharedValue1) {
    let inactive = tmp.active;
  } else {
    inactive = tmp.inactive;
  }
  items = [closure_17, pressed, tmp, index, activeIndex, spring_spring.withSpring, closure_10];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  onShowMenu = undefined;
  menuLabel = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class ConjureModeTabBarTsx5 {
    constructor() {
      value = closure_0.get();
      active = closure_1.inactive;
      tmp4 = value === closure_2;
      tmp2 = closure_1;
      if (!tmp4) {
        num = 0;
        tmp5 = value < 0;
        if (tmp5) {
          tmp6 = globalThis;
          _Math = Math;
          tmp7 = closure_3;
          tmp5 = Math.round(closure_3.get()) === tmp3;
        }
        tmp4 = tmp5;
      }
      if (tmp4) {
        active = tmp2.active;
      }
      obj = { color: onShowMenu(active, menuLabel, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  ConjureModeTabBarTsx5.__closure = items1;
  ConjureModeTabBarTsx5.__workletHash = 1750569862445;
  ConjureModeTabBarTsx5.__initData = tmp8;
  onShowMenu = undefined;
  const animatedStyle = _mod1655.useAnimatedStyle(ConjureModeTabBarTsx5);
  if (extras != null) {
    onShowMenu = extras.onShowMenu;
  }
  menuLabel = undefined;
  if (extras != null) {
    menuLabel = extras.menuLabel;
  }
  const items2 = [menuLabel, onShowMenu];
  const items3 = [onShowMenu];
  const memo = noop.useMemo(() => {
    let tmp;
    if (null != onShowMenu) {
      if (null != menuLabel) {
        const obj = { name: "longpress", label: tmp2 };
        items = [obj];
        tmp = items;
      }
    }
    return tmp;
  }, items2);
  const obj3 = {
    style: itemStyle,
    onPress() {
      if (c3) {
        if (null != onShowMenu) {
          let tmpResult = tmp();
        }
        return tmpResult;
      }
      tmpResult = _undefined3(c0);
    },
    onLongPress: onShowMenu,
    onPressIn() {
      return _undefined2.set(c0);
    },
    onPressOut() {
      return _undefined2.set(-1);
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
    }, items3),
    accessibilityHint: null,
    children: null,
  };
  const tmp2Result = _mod1655;
  let formatToPlainStringResult;
  if (tmp2Result2.isAndroid()) {
    const intl = util.intl;
    const obj4 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(util.t["4EsQA1"], obj4);
  }
  obj3.accessibilityHint = formatToPlainStringResult;
  const obj5 = { style: labelStyle, children: null };
  let prefix;
  if (extras != null) {
    prefix = extras.prefix;
  }
  let tmp19Result = null;
  if (null != prefix) {
    const obj6 = { variant: "body-sm/medium", color: "text-muted", style: prefixStyle, children: extras.prefix };
    tmp19Result = metroImportDefault(Text_Text.Text, obj6);
  }
  const items4 = [tmp19Result, ,];
  const obj7 = { animated: true, variant: "body-sm/semibold", style: null, lineClamp: 1, children: label };
  const items5 = [labelTextStyle, animatedStyle];
  obj7.style = items5;
  items4[1] = metroImportDefault(Text_Text.Text, obj7);
  let renderTrailingIconResult;
  if (extras != null) {
    const renderTrailingIcon = extras.renderTrailingIcon;
    if (renderTrailingIcon != null) {
      renderTrailingIconResult = renderTrailingIcon(inactive);
    }
  }
  items4[2] = renderTrailingIconResult;
  obj5.children = items4;
  obj3.children = React5(timestampProducer, obj5);
  return metroImportDefault(React4, obj3);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_9 = { mass: 0.3, damping: 13, stiffness: 100, overshootClamping: true };
let closure_10 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = fn(5306);
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
createStyles = fn(5306);
let closure_12 = createStyles.createStyleProperties({
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
});
let closure_13 = {
  code: "(function ConjureModeTabBarTsx1(){let[indicatorWidth]=this.__closure;return indicatorWidth.get();})",
};
let closure_14 = {
  code: "(function ConjureModeTabBarTsx2(_,previous){let[previousIndicatorWidth]=this.__closure;if(previous!=null)previousIndicatorWidth.set(previous);})",
};
let closure_15 = {
  code: "(function ConjureModeTabBarTsx3(){let[activeIndex,itemCount]=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);})",
};
let closure_16 = {
  code: "(function ConjureModeTabBarTsx4(){let[clampedActiveIndex,defaultActiveIndex,indicatorWidth,pressedIndex,PRESSED_TRANSLATE_AMOUNT,SEGMENT_SPACING,itemCount,previousIndicatorWidth,withSpring,INDICATOR_SPRING]=this.__closure;let translateX=(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();let scaleX=1;if(pressedIndex.get()>=0&&pressedIndex.get()!==clampedActiveIndex.get()){const direction=pressedIndex.get()<clampedActiveIndex.get()?-1:1;scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=direction*indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}if(clampedActiveIndex.get()===0)translateX+=SEGMENT_SPACING;else if(clampedActiveIndex.get()===itemCount-1)translateX-=SEGMENT_SPACING;const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated)previousIndicatorWidth.set(indicatorWidth.get());return{transform:[{translateX:animated?withSpring(translateX,INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,INDICATOR_SPRING)}]};})",
};
let closure_17 = {
  code: "(function ConjureModeTabBarTsx5(){let[pressed,colors,index,activeIndex,withSpring,TEXT_SPRING]=this.__closure;const pressedIndex=pressed.get();let color=colors.inactive;if(pressedIndex===index)color=colors.active;else if(pressedIndex<0&&Math.round(activeIndex.get())===index)color=colors.active;return{color:withSpring(color,TEXT_SPRING,'animate-always')};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureModeTabBar.tsx");

export default function ConjureModeTabBar(arg0) {
  ({ state, extras: c0 } = arg0);
  c7 = undefined;
  c8 = undefined;
  closure_9 = undefined;
  const activeIndex = state.activeIndex;
  importDefault = activeIndex;
  ({ items, pressedIndex } = state);
  dependencyMap = pressedIndex;
  noop = state.setActiveIndex;
  c4 = length;
  let tmp3 = closure_11(
    require("useToken").useToken(nativeDefault.modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS),
    items.length,
  );
  c5 = tmp3;
  let obj = require("useToken");
  const sharedValue = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  c6 = sharedValue;
  const obj2 = require("../../../../../_runtime/metro/01655__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  const obj3 = require("../../../../../_runtime/metro/01655__.js");
  const items1 = [closure_13, sharedValue];
  _require = undefined;
  [tmp6, tmp7] = items1;
  class ConjureModeTabBarTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp7];
  ConjureModeTabBarTsx1.__closure = items2;
  ConjureModeTabBarTsx1.__workletHash = 4356434098862;
  ConjureModeTabBarTsx1.__initData = tmp6;
  const items3 = [closure_14, sharedValue1];
  _require = undefined;
  [tmp8, tmp9] = items3;
  class ConjureModeTabBarTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = closure_0;
        result = closure_0.set(arg1);
      }
      return;
    }
  }
  const items4 = [tmp9];
  ConjureModeTabBarTsx2.__closure = items4;
  ConjureModeTabBarTsx2.__workletHash = 12016602073272;
  ConjureModeTabBarTsx2.__initData = tmp8;
  const animatedReaction = require("../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    ConjureModeTabBarTsx1,
    ConjureModeTabBarTsx2,
  );
  const items5 = [sharedValue];
  c7 = noop.useCallback((nativeEvent) => _undefined3.set(nativeEvent.nativeEvent.layout.width), items5);
  const obj4 = require("../../../../../_runtime/metro/01655__.js");
  const sharedValue2 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(activeIndex.get());
  c8 = sharedValue2;
  const tmpResult = require("../../../../../_runtime/metro/01655__.js");
  const items6 = [closure_15, activeIndex, items.length];
  _require = undefined;
  importDefault = undefined;
  [tmp12, tmp13, tmp14] = items6;
  class ConjureModeTabBarTsx3 {
    constructor() {
      return Math.min(Math.max(closure_0.get(), 0), closure_1 - 1);
    }
  }
  const items7 = [tmp13, tmp14];
  ConjureModeTabBarTsx3.__closure = items7;
  ConjureModeTabBarTsx3.__workletHash = 12987911031538;
  ConjureModeTabBarTsx3.__initData = tmp12;
  const derivedValue = require("../../../../../_runtime/metro/01655__.js").useDerivedValue(ConjureModeTabBarTsx3);
  const tmpResult5 = require("../../../../../_runtime/metro/01655__.js");
  const items8 = [
    closure_16,
    derivedValue,
    sharedValue2,
    sharedValue,
    pressedIndex,
    0.04,
    4,
    items.length,
    sharedValue1,
    require("spring/spring").withSpring,
    closure_9,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_9 = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items8;
  class ConjureModeTabBarTsx4 {
    constructor() {
      obj = closure_0;
      value = closure_0.get();
      obj2 = closure_2;
      diff = value - closure_1.get();
      result = diff * closure_2.get();
      obj3 = closure_3;
      num = 1;
      sum = result;
      if (closure_3.get() >= 0) {
        value1 = obj3.get();
        num = 1;
        sum = result;
        if (value1 !== obj.get()) {
          value2 = obj3.get();
          num2 = 1;
          if (value2 < obj.get()) {
            num2 = -1;
          }
          tmp7 = closure_4;
          num = 1 + closure_4;
          num3 = 2;
          sum = result + num2 * obj2.get() * (closure_4 / 2);
        }
      }
      if (0 === obj.get()) {
        tmp11 = closure_5;
        sum1 = sum + closure_5;
      } else {
        tmp8 = closure_6;
        sum1 = sum;
        if (obj.get() === closure_6 - 1) {
          tmp10 = closure_5;
          sum1 = sum - closure_5;
        }
      }
      obj4 = closure_7;
      value3 = obj2.get();
      tmp13 = value3 === closure_7.get();
      if (!tmp13) {
        result1 = obj4.set(obj2.get());
      }
      tmp15 = sum1;
      if (tmp13) {
        tmp16 = closure_8;
        tmp17 = closure_9;
        tmp15 = closure_8(sum1, closure_9);
      }
      obj1 = { transform: null };
      items = [,];
      items[0] = { translateX: tmp15 };
      obj7 = { scaleX: closure_8(num, closure_9) };
      items[1] = obj7;
      obj1.transform = items;
      return obj1;
    }
  }
  const items9 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  ConjureModeTabBarTsx4.__closure = items9;
  ConjureModeTabBarTsx4.__workletHash = 680934149064;
  ConjureModeTabBarTsx4.__initData = tmp16;
  closure_9 = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(ConjureModeTabBarTsx4);
  const mapped = items.map((id, index) => {
    const tmp = _undefined5.get() === index;
    let tmp3;
    if (tmp) {
      tmp3 = c7;
    }
    const obj = { onLayout: tmp3, style: null };
    items = [_undefined2.indicator, tmp ? closure_9 : _undefined2.indicatorHidden];
    obj.style = items;
    return metroImportDefault(_modDef1655.View, obj, id.id);
  });
  const mapped1 = items.map((id, index) => {
    id = id.id;
    if (0 === index) {
      let itemLast = _undefined2.itemFirst;
    } else if (index === itemCount - 1) {
      itemLast = _undefined2.itemLast;
    }
    const obj = {
      label: id.label,
      index,
      itemCount,
      activeIndex,
      pressed,
      extras: null,
      onSelect: null,
      itemStyle: null,
      labelStyle: null,
      labelTextStyle: null,
      prefixStyle: null,
    };
    let tmp6;
    if (_undefined != null) {
      tmp6 = _undefined[id];
    }
    obj.extras = tmp6;
    obj.onSelect = onSelect;
    items = [_undefined2.item, itemLast];
    obj.itemStyle = items;
    ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = _undefined2);
    return metroImportDefault(ConjureModeTab, obj, id);
  });
  const tmp30 = c5;
  const tmpResult6 = require("../../../../../_runtime/metro/01655__.js");
  let str;
  if (tmpResult7.isIOS()) {
    str = "tabbar";
  }
  let obj5 = {
    horizontal: true,
    accessibilityRole: str,
    alwaysBounceHorizontal: false,
    contentContainerStyle: tmp3.scrollContentContainer,
    children: null,
  };
  const tmp31 = c8;
  tmpResult7 = require("PlatformUtils");
  let str2;
  if (tmpResult8.isAndroid()) {
    str2 = "tablist";
  }
  const obj6 = { accessibilityRole: str2, style: tmp3.controlsContainer, children: null };
  const items10 = [c7(c6, { accessible: false, style: tmp3.indicatorContainer, children: mapped }), mapped1];
  obj6.children = items10;
  obj5.children = tmp31(c6, obj6, items.length);
  return c7(tmp30, obj5);
}
