// discord_app/design/components/SegmentedControl/native/SegmentedControlItem.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = fn(4560);
let closure_8 = createStyles.createStyles((arg0) => {
  const item = {
    borderRadius: nativeDefault.radii.lg,
    paddingVertical: null,
    flexDirection: "row",
    justifyContent: "center",
  };
  let num = 8;
  if ("experimental_Small" === arg0) {
    num = 4;
  }
  item.paddingVertical = num;
  return { item, label: { flexDirection: "column", alignItems: "center", gap: 8 } };
});
fn(4560);
createStyles = {
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  pressed: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
let closure_9 = createStyles.createStyleProperties(createStyles);
const __initData = {
  code: "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export const SegmentedControlItem = function SegmentedControlItem(index) {
  index = index.index;
  const pressed = index.pressed;
  const variant = index.variant;
  const activeIndex = index.state.activeIndex;
  ({ label, itemCount, icon, onPress, onPressIn, onPressOut, style } = index);
  const tmp = closure_8(variant);
  let tmp2 = closure_9();
  const inactive = tmp2;
  let obj = index(activeIndex[5]);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => ({
    selected: arg0 === index,
  }));
  let obj1 = index(activeIndex[6]);
  const fn = function b() {
    let active = inactive.inactive;
    value = pressed.get();
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: null };
    tmp2 = pressed.get() >= 0;
    tmp4 = index;
    obj.color = spring.withSpring(active, closure_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp2, pressed, index, activeIndex, withSpring: index(activeIndex[7]).withSpring, SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 9369301431547;
  fn.__initData = __initData;
  obj = {
    style: null,
    onPress,
    onPressIn,
    onPressOut,
    accessibilityRole: "tab",
    accessibilityState: derivedStateFromSharedValue,
    accessibilityHint: null,
    children: null,
  };
  const items = [tmp.item, style];
  obj.style = items;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let formatToPlainStringResult;
  if (obj5.isAndroid()) {
    const intl = tmp3(tmp4[9]).intl;
    obj1 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[9]).t["4EsQA1"], obj1);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  const obj2 = { style: tmp.label, children: null };
  const items1 = [icon];
  const obj3 = {
    animated: true,
    variant: "text-sm/semibold",
    style: animatedStyle,
    lineClamp: 1,
    maxFontSizeMultiplier: null,
    children: null,
  };
  let num2;
  if ("experimental_Large" === variant) {
    num2 = 1.5;
  }
  obj3.maxFontSizeMultiplier = num2;
  obj3.children = label;
  items1[1] = closure_5(index(activeIndex[10]).Text, obj3);
  obj2.children = items1;
  obj.children = closure_6(closure_4, obj2);
  return closure_5(inactive, obj);
};
