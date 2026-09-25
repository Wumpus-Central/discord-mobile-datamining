// === Module 10581: Tooltip ===

// Module 10581 (Tooltip)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
import spring from "spring" /* 5273 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
const createStyles = fn(4829);
let obj2 = { container: { position: "absolute", alignItems: "center" }, textContainer: { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, maxWidth: 150, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, text: { textAlign: "center" }, arrow: null, bottomArrow: null, topArrow: null };
let size = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.arrow = size;
obj2.bottomArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 };
obj2.topArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const __initData2 = { code: "function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always'),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
size = fn(2);
let result = size.fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export const Tooltip = function Tooltip(targetMeasurements) {
  ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
  let sharedValue;
  let token;
  let token1;
  _slicedToArray = undefined;
  const tmp = closure_9();
  let num = 0;
  sharedValue = sharedValue(token1[6]).useSharedValue(0);
  let obj = sharedValue(token1[6]);
  const tmp2 = sharedValue;
  token = sharedValue(token1[7]).useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  let obj2 = sharedValue(token1[7]);
  token1 = sharedValue(token1[7]).useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  let items = [sharedValue];
  let items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = noop.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  let obj3 = sharedValue(token1[7]);
  [tmp11, c3] = noop.useState(null);
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  ({ adjustmentX, tooltipX, tooltipY } = token(token1[8])(tmp11, surfaceMeasurements, targetMeasurements.targetMeasurements, position, 4));
  const tmp12 = token(token1[8])(tmp11, surfaceMeasurements, targetMeasurements.targetMeasurements, position, 4);
  class R {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[9]);
      obj3 = closure_0(closure_2[6]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      obj.backgroundColor = obj2.withSpring(obj3.interpolateColor(closure_0.get(), [0, 1], items), closure_8, "animate-always");
      return obj;
    }
  }
  let obj4 = sharedValue(token1[6]);
  R.__closure = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  R.__workletHash = 3664740129577;
  R.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(R);
  const obj5 = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  class P {
    constructor() {
      obj = { borderTopColor: null, borderBottomColor: null };
      obj2 = closure_0(closure_2[9]);
      obj3 = closure_0(closure_2[6]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      obj.borderTopColor = obj2.withSpring(obj3.interpolateColor(closure_0.get(), [0, 1], items), closure_8, "animate-always");
      obj4 = closure_0(closure_2[9]);
      obj5 = closure_0(closure_2[6]);
      items1 = [, ];
      items1[0] = closure_1;
      items1[1] = closure_2;
      obj.borderBottomColor = obj4.withSpring(obj5.interpolateColor(closure_0.get(), [0, 1], items1), closure_8, "animate-always");
      return obj;
    }
  }
  const obj6 = sharedValue(token1[6]);
  P.__closure = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  P.__workletHash = 11850141175626;
  P.__initData = __initData2;
  const animatedStyle1 = obj6.useAnimatedStyle(P);
  const obj8 = {
    disabled: null == onPress,
    onPress,
    onLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
      _undefined(size);
    },
    onPressIn: callback,
    onPressOut: callback1,
    accessibilityLabel: label,
    accessibilityRole: "button",
    style: null,
    children: null
  };
  const items2 = [tmp.container, ];
  if (null != tmp11) {
    num = 1;
  }
  items2[1] = { opacity: num, top: tooltipY, left: tooltipX };
  obj8.style = items2;
  let tmp17 = "bottom" === position;
  if (tmp17) {
    const obj9 = { style: null };
    const items3 = [, , , ];
    ({ arrow: arr4[0], topArrow: arr4[1] } = tmp);
    const obj10 = { left: -adjustmentX };
    items3[2] = obj10;
    items3[3] = animatedStyle1;
    obj9.style = items3;
    tmp17 = closure_6(tmp5(tmp3[6]).View, obj9);
  }
  const items4 = [tmp17, , ];
  const obj11 = { style: null, children: closure_6(tmp2(token1[10]).Text, { style: tmp.text, variant: "text-xs/bold", color: "text-overlay-light", children: label }) };
  const items5 = [tmp.textContainer, animatedStyle];
  obj11.style = items5;
  items4[1] = closure_6(token(token1[6]).View, obj11);
  let tmp19Result = "top" === position;
  if (tmp19Result) {
    const obj13 = { style: null };
    const items6 = [, , , ];
    ({ arrow: arr7[0], bottomArrow: arr7[1] } = tmp);
    const obj14 = { left: -adjustmentX };
    items6[2] = obj14;
    items6[3] = animatedStyle1;
    obj13.style = items6;
    tmp19Result = closure_6(tmp5(tmp3[6]).View, obj13);
  }
  items4[2] = tmp19Result;
  obj8.children = items4;
  return closure_7(Pressable, obj8);
};