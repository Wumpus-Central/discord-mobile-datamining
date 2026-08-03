import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let closure_8 = createCacheKey.createStyles((arg0) => {
  const item = { borderRadius: importDefault(712).radii.lg, paddingVertical: null, flexDirection: "row", justifyContent: "center" };
  let num = 8;
  if ("experimental_Small" === arg0) {
    num = 4;
  }
  item[1] = num;
  return { item, label: { flexDirection: "column", alignItems: "center", gap: 8 } };
});
createCacheKey = { inactive: require("Themes").colors.TEXT_MUTED, active: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, pressed: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey = createCacheKey.createStyleProperties(createCacheKey);
let closure_10 = { code: "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}" };
const result = require("jsxProd").fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export const SegmentedControlItem = function SegmentedControlItem(index) {
  let icon;
  let itemCount;
  let label;
  let onPress;
  let onPressIn;
  let onPressOut;
  let style;
  index = index.index;
  const pressed = index.pressed;
  const variant = index.variant;
  let activeIndex;
  let c3;
  activeIndex = index.state.activeIndex;
  ({ label, itemCount, icon, onPress, onPressIn, onPressOut, style } = index);
  const tmp = callback(variant);
  let tmp2 = createCacheKey();
  c3 = tmp2;
  let obj = index(activeIndex[5]);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => ({ selected: arg0 === index }));
  let obj1 = index(activeIndex[6]);
  const fn = function b() {
    let active = _undefined.inactive;
    const value = pressed.get();
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
    obj[0] = index(activeIndex[7]).withSpring(active, outer1_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp2, pressed, index, activeIndex, withSpring: index(activeIndex[7]).withSpring, SPRING_CONFIG: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 9369301431547;
  fn.__initData = closure_10;
  obj = { style: items, onPress, onPressIn, onPressOut, accessibilityRole: "tab", accessibilityState: derivedStateFromSharedValue, accessibilityHint: null, children: null };
  items = [tmp.item, style];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let formatToPlainStringResult;
  if (obj5.isAndroid()) {
    const intl = tmp3(tmp4[9]).intl;
    obj1 = { position: null, tabCount: null };
    obj1[0] = index + 1;
    obj1[1] = itemCount;
    formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[9]).t["4EsQA1"], obj1);
  }
  obj[6] = formatToPlainStringResult;
  const obj2 = { style: tmp.label, children: null };
  const items1 = [icon, ];
  const obj3 = { animated: true, variant: "text-sm/semibold", style: animatedStyle, lineClamp: 1, maxFontSizeMultiplier: null, children: null };
  let num2;
  if ("experimental_Large" === variant) {
    num2 = 1.5;
  }
  obj3[4] = num2;
  obj3[5] = label;
  items1[1] = closure_5(index(activeIndex[10]).Text, obj3);
  obj2[1] = items1;
  obj[7] = closure_6(closure_4, obj2);
  return closure_5(c3, obj);
};