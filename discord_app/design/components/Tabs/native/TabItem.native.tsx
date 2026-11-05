// discord_app/design/components/Tabs/native/TabItem.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import Text_Text from "../../Text/native/Text.tsx";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const module_1652 = _mod1652;

require = fn;
function useAnimatedTextStyle(arg0) {
  ({ index, activeIndex, pressed, variant } = arg0);
  let tmp = closure_11();
  if ("overlay" === variant) {
    tmp = closure_12();
  }
  items = [closure_13, tmp, pressed, index, activeIndex, spring_spring.withSpring, closure_8];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class TabItemNativeTsx1 {
    constructor() {
      tmp = closure_0;
      active = closure_0.inactive;
      tmp2 = closure_1.get() >= 0;
      value = closure_1.get();
      tmp4 = closure_2;
      if (value === closure_2) {
        active = tmp.pressed;
      } else if (tmp2) {
        active = tmp.inactive;
      } else if (tmp5 === tmp4) {
        active = tmp.active;
      }
      obj = { color: closure_4(active, closure_5, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
  TabItemNativeTsx1.__closure = items1;
  TabItemNativeTsx1.__workletHash = 3107632073840;
  TabItemNativeTsx1.__initData = tmp2;
  return _mod1652.useAnimatedStyle(TabItemNativeTsx1);
}
function TabItemCount(arg0) {
  ({ count, index, activeIndex, pressed, variant } = arg0);
  const tmp = closure_10();
  const sharedValue = _mod1652.useSharedValue(0);
  items = [sharedValue];
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = _undefined.set(1);
  }, items);
  const items1 = [closure_15, spring_spring.withSpring, sharedValue, closure_9, _mod1652.interpolate];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  class TabItemNativeTsx2 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2), transform: null };
      obj1 = { translateX: closure_0(closure_3(closure_1.get(), [0, 1], [-10, 0]), closure_2) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9, tmp10];
  TabItemNativeTsx2.__closure = items2;
  TabItemNativeTsx2.__workletHash = 15126685663834;
  TabItemNativeTsx2.__initData = tmp6;
  const animatedStyle = _mod1652.useAnimatedStyle(TabItemNativeTsx2);
  const obj3 = {
    style: null,
    children: hasOwnProperty(Text_Text.Text, {
      animated: true,
      variant: "body-sm/medium",
      style: useAnimatedTextStyle({ index, activeIndex, pressed, variant }),
      lineClamp: 1,
      children: count,
    }),
  };
  const items3 = [tmp.count, animatedStyle];
  obj3.style = items3;
  return hasOwnProperty(module_1652.View, obj3);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = module_1652.createAnimatedComponent(Pressable);
let closure_8 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let closure_9 = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
let createStyles = fn(5143);
let obj = {
  item: { flexShrink: 0, flexBasis: 0, paddingBottom: 14, flexDirection: "row", justifyContent: "center" },
  count: { marginLeft: nativeDefault.space.PX_8 },
  indicatorDot: null,
};
let obj3 = { marginLeft: nativeDefault.space.PX_8 };
obj.indicatorDot = { marginLeft: nativeDefault.space.PX_4, alignSelf: "center" };
let closure_10 = createStyles.createStyles(obj);
createStyles = fn(5143);
let obj4 = { marginLeft: nativeDefault.space.PX_4, alignSelf: "center" };
let closure_11 = createStyles.createStyleProperties({
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.TEXT_BRAND,
  pressed: nativeDefault.colors.TEXT_BRAND,
});
createStyles = fn(5143);
let obj5 = {
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.TEXT_BRAND,
  pressed: nativeDefault.colors.TEXT_BRAND,
};
let closure_12 = createStyles.createStyleProperties({
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.TEXT_STRONG,
  pressed: nativeDefault.colors.TEXT_STRONG,
});
let closure_13 = {
  code: "(function TabItemNativeTsx1(){let[colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG]=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};})",
};
let closure_15 = {
  code: "(function TabItemNativeTsx2(){let[withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate]=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};})",
};
let closure_17 = {
  code: "(function TabItemNativeTsx3(){let[activeIndex,index]=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export function TabItem(arg0) {
  ({ label, count, indicatorDot, index } = arg0);
  ({ state, pressed, variant } = arg0);
  ({ itemCount, grow } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({
      label: 0,
      count: 0,
      indicatorDot: 0,
      index: 0,
      itemCount: 0,
      state: 0,
      pressed: 0,
      grow: 0,
      variant: 0,
    }),
  );
  ({ activeIndex, setItemDimensions: c1 } = state);
  const tmp2 = closure_10();
  items = [closure_17, activeIndex, index];
  _require = undefined;
  c1 = undefined;
  [tmp5, tmp6, tmp7] = items;
  class TabItemNativeTsx3 {
    constructor() {
      obj = { accessibilityState: null };
      obj1 = { selected: closure_0.get() === closure_1 };
      obj.accessibilityState = obj1;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7];
  TabItemNativeTsx3.__closure = items1;
  TabItemNativeTsx3.__workletHash = 5168414867841;
  TabItemNativeTsx3.__initData = tmp5;
  let num = 0;
  const animatedProps = require("../../../../../_runtime/metro/01652__.js").useAnimatedProps(TabItemNativeTsx3);
  const items2 = [tmp2.item];
  let obj = require("../../../../../_runtime/metro/01652__.js");
  if (grow) {
    num = 1;
  }
  const obj2 = { style: items2 };
  items2[1] = { flexGrow: num };
  const merged1 = Object.assign(merged);
  obj2.onLayout = function handleLayout(nativeEvent) {
    _mod1705.scheduleOnUI(c1, c0, nativeEvent.nativeEvent.layout);
  };
  obj2.accessibilityRole = "tab";
  const tmp9 = useAnimatedTextStyle({ index, activeIndex, pressed, variant });
  obj2.accessibilityLabel = require("getTabItemA11yName").getTabItemA11yName(label, count, indicatorDot);
  const tmp3Result = require("getTabItemA11yName");
  let formatToPlainStringResult;
  if (tmp3Result2.isAndroid()) {
    const intl = tmp3(1113).intl;
    const obj3 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(1113).t["4EsQA1"], obj3);
  }
  obj2.accessibilityHint = formatToPlainStringResult;
  obj2.animatedProps = animatedProps;
  const items3 = [
    closure_5(require("Text/Text").Text, {
      animated: true,
      variant: "body-sm/semibold",
      style: tmp9,
      lineClamp: 1,
      children: label,
    }),
    ,
  ];
  let tmp14Result = null;
  if (null != count) {
    const obj4 = { count, index, activeIndex, pressed, variant };
    tmp14Result = closure_5(TabItemCount, obj4);
  }
  items3[1] = tmp14Result;
  let tmp14Result2 = null;
  if (null != indicatorDot) {
    const obj5 = { style: tmp2.indicatorDot, children: closure_5(tmp3(9644).IndicatorDot, {}) };
    tmp14Result2 = closure_5(closure_4, obj5);
  }
  items3[2] = tmp14Result2;
  obj2.children = items3;
  return closure_6(closure_7, obj2);
}
