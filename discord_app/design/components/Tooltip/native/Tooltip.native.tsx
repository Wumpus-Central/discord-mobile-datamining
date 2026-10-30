// === Module 9936: Tooltip ===

// Module 9936 (Tooltip)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
const createStyles = fn(5009);
let obj2 = { container: { position: "absolute", alignItems: "center" }, horizontalContainer: { flexDirection: "row" }, textContainer: { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, maxWidth: 150, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, text: { textAlign: "center" }, arrow: null, bottomArrow: null, topArrow: null, leftArrow: null, rightArrow: null };
let size = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.arrow = size;
obj2.bottomArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 };
obj2.topArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 };
obj2.leftArrow = { borderTopWidth: 6, borderBottomWidth: 6, borderRightWidth: 6 };
obj2.rightArrow = { borderTopWidth: 6, borderBottomWidth: 6, borderLeftWidth: 6 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const __initData2 = { code: "function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING,isHorizontal}=this.__closure;const color=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{borderTopColor:isHorizontal?'transparent':color,borderBottomColor:isHorizontal?'transparent':color,borderLeftColor:isHorizontal?color:'transparent',borderRightColor:isHorizontal?color:'transparent'};}" };
size = fn(2);
let result = size.fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export function Tooltip(targetMeasurements) {
  ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
  let sharedValue;
  let token;
  let token1;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_9();
  sharedValue = sharedValue(token1[6]).useSharedValue(0);
  let obj = sharedValue(token1[6]);
  token = sharedValue(token1[7]).useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  let obj2 = sharedValue(token1[7]);
  token1 = sharedValue(token1[7]).useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  let items = [sharedValue];
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = noop.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  let obj3 = sharedValue(token1[7]);
  [tmp11, c3] = noop.useState(null);
  const tmp12 = token(token1[8])(tmp11, surfaceMeasurements, targetMeasurements.targetMeasurements, position, 4);
  ({ adjustmentX, adjustmentY } = tmp12);
  let tmp14 = tmp13;
  ({ tooltipX, tooltipY } = tmp12);
  if ("left" !== position) {
    tmp14 = "right" === position;
  }
  noop = tmp14;
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  class S {
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
  const tmp2Result = sharedValue(token1[6]);
  S.__closure = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  S.__workletHash = 3664740129577;
  S.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(S);
  const obj4 = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  class P {
    constructor() {
      obj = closure_0(closure_2[9]);
      obj2 = closure_0(closure_2[6]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      withSpringResult = obj.withSpring(obj2.interpolateColor(closure_0.get(), [0, 1], items), closure_8, "animate-always");
      tmp2 = closure_4;
      str = "transparent";
      str2 = "transparent";
      if (!closure_4) {
        str2 = withSpringResult;
      }
      obj1 = { borderTopColor: str2, borderBottomColor: null, borderLeftColor: null, borderRightColor: null };
      tmp3 = str;
      if (!tmp2) {
        tmp3 = withSpringResult;
      }
      obj1.borderBottomColor = tmp3;
      tmp4 = str;
      if (tmp2) {
        tmp4 = withSpringResult;
      }
      obj1.borderLeftColor = tmp4;
      if (tmp2) {
        str = withSpringResult;
      }
      obj1.borderRightColor = str;
      return obj1;
    }
  }
  const tmp2Result2 = sharedValue(token1[6]);
  P.__closure = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING, isHorizontal: tmp14 };
  P.__workletHash = 5902163414438;
  P.__initData = __initData2;
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(P);
  const obj6 = {
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
  const items2 = [tmp.container, , ];
  let horizontalContainer;
  if (tmp14) {
    horizontalContainer = tmp.horizontalContainer;
  }
  items2[1] = horizontalContainer;
  let num = 0;
  if (null != tmp11) {
    num = 1;
  }
  items2[2] = { opacity: num, top: tooltipY, left: tooltipX };
  obj6.style = items2;
  if ("bottom" === position) {
    const obj7 = { style: null };
    const items3 = [, , , ];
    ({ arrow: arr5[0], topArrow: arr5[1] } = tmp);
    const obj8 = { left: -adjustmentX };
    items3[2] = obj8;
    items3[3] = animatedStyle1;
    obj7.style = items3;
    let tmp20 = closure_6(tmp5(tmp3[6]).View, obj7);
  } else {
    tmp20 = null;
    if ("right" === position) {
      const obj9 = { style: null };
      const items4 = [, , , ];
      ({ arrow: arr4[0], leftArrow: arr4[1] } = tmp);
      const obj10 = { top: -adjustmentY };
      items4[2] = obj10;
      items4[3] = animatedStyle1;
      obj9.style = items4;
      tmp20 = closure_6(tmp5(tmp3[6]).View, obj9);
    }
  }
  const items5 = [tmp20, , ];
  const obj11 = { style: null, children: closure_6(sharedValue(token1[10]).Text, { style: tmp.text, variant: "text-xs/bold", color: "text-overlay-light", children: label }) };
  const items6 = [tmp.textContainer, animatedStyle];
  obj11.style = items6;
  items5[1] = closure_6(token(token1[6]).View, obj11);
  if ("top" === position) {
    const obj13 = { style: null };
    const items7 = [, , , ];
    ({ arrow: arr9[0], bottomArrow: arr9[1] } = tmp);
    const obj14 = { left: -adjustmentX };
    items7[2] = obj14;
    items7[3] = animatedStyle1;
    obj13.style = items7;
    let tmp23Result = closure_6(tmp5(tmp3[6]).View, obj13);
  } else {
    tmp23Result = null;
    if (tmp13) {
      const obj15 = { style: null };
      const items8 = [, , , ];
      ({ arrow: arr8[0], rightArrow: arr8[1] } = tmp);
      const obj16 = { top: -adjustmentY };
      items8[2] = obj16;
      items8[3] = animatedStyle1;
      obj15.style = items8;
      tmp23Result = closure_6(tmp5(tmp3[6]).View, obj15);
    }
  }
  items5[2] = tmp23Result;
  obj6.children = items5;
  return closure_7(Pressable, obj6);
}