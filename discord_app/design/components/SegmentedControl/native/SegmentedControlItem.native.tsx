// === Module 11252: SegmentedControlItem ===

// Module 11252 (SegmentedControlItem)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _mod1655 from "module_1655" /* 1655 */;
import Text_Text from "Text/Text" /* 5929 */;
import spring_spring from "spring/spring" /* 5939 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 11253 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = fn(5306);
let closure_8 = createStyles.createStyles((arg0) => {
  const item = { borderRadius: nativeDefault.radii.lg, paddingVertical: null, flexDirection: "row", justifyContent: "center" };
  let num = 8;
  if ("experimental_Small" === arg0) {
    num = 4;
  }
  item.paddingVertical = num;
  return { item, label: { flexDirection: "column", alignItems: "center", gap: 8 } };
});
createStyles = fn(5306);
let closure_9 = createStyles.createStyleProperties({ inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, pressed: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
let closure_10 = { code: "(function SegmentedControlItemNativeTsx1(){let[colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG]=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};})" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export function SegmentedControlItem(index) {
  index = index.index;
  const variant = index.variant;
  const activeIndex = index.state.activeIndex;
  ({ label, itemCount, icon, onPress, onPressIn, onPressOut, pressed, style } = index);
  const tmp = closure_8(variant);
  let tmp2 = closure_9();
  const derivedStateFromSharedValue = useStateFromSharedValue.useDerivedStateFromSharedValue(activeIndex, (arg0) => ({ selected: arg0 === c0 }));
  items = [closure_10, tmp2, pressed, index, activeIndex, spring_spring.withSpring, closure_7];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class SegmentedControlItemNativeTsx1 {
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
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  SegmentedControlItemNativeTsx1.__closure = items1;
  SegmentedControlItemNativeTsx1.__workletHash = 3234787560194;
  SegmentedControlItemNativeTsx1.__initData = tmp6;
  const obj3 = { style: null, onPress, onPressIn, onPressOut, accessibilityRole: "tab", accessibilityState: derivedStateFromSharedValue, accessibilityHint: null, children: null };
  const items2 = [tmp.item, style];
  obj3.style = items2;
  const animatedStyle = _mod1655.useAnimatedStyle(SegmentedControlItemNativeTsx1);
  let formatToPlainStringResult;
  if (tmp3Result.isAndroid()) {
    const intl = util.intl;
    const obj4 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(util.t["4EsQA1"], obj4);
  }
  obj3.accessibilityHint = formatToPlainStringResult;
  const obj5 = { style: tmp.label, children: null };
  const items3 = [icon, ];
  const obj6 = { animated: true, variant: "body-sm/semibold", style: animatedStyle, lineClamp: 1, maxFontSizeMultiplier: null, children: null };
  let num2;
  if ("experimental_Large" === variant) {
    num2 = 1.5;
  }
  obj6.maxFontSizeMultiplier = num2;
  obj6.children = label;
  items3[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj5.children = items3;
  obj3.children = timestampProducer(React4, obj5);
  return hasOwnProperty(React3, obj3);
}