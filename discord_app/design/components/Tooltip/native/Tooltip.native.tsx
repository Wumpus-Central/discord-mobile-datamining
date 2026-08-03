import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { Pressable } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
createCacheKey = { container: { position: "absolute", alignItems: "center" }, textContainer: null, text: null, arrow: null, bottomArrow: null, topArrow: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_4, borderRadius: require("Themes").radii.sm, maxWidth: 150, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: require("Themes").colors.BACKGROUND_BRAND, borderBottomColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[4] = { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 };
createCacheKey[5] = { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let closure_11 = { code: "function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always'),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let obj1 = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: require("Themes").colors.BACKGROUND_BRAND, borderBottomColor: require("Themes").colors.BACKGROUND_BRAND };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export const Tooltip = function Tooltip(targetMeasurements) {
  let adjustmentX;
  let c3;
  let label;
  let onPress;
  let position;
  let surfaceMeasurements;
  let tmp11;
  let tooltipX;
  let tooltipY;
  ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
  let sharedValue;
  let token;
  let token1;
  let callback;
  const tmp = createCacheKey();
  let obj = sharedValue(token1[6]);
  let num = 0;
  sharedValue = obj.useSharedValue(0);
  let obj1 = sharedValue(token1[7]);
  token = obj1.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  let obj2 = sharedValue(token1[7]);
  token1 = obj2.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  let items = [sharedValue];
  let items1 = [sharedValue];
  callback = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  [tmp11, c3] = callback(React.useState(null), 2);
  const tmp10 = callback(React.useState(null), 2);
  const tmp2 = sharedValue;
  ({ adjustmentX, tooltipX, tooltipY } = token(token1[8])(tmp11, surfaceMeasurements, targetMeasurements.targetMeasurements, position, 4));
  let obj3 = sharedValue(token1[6]);
  class R {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = c0(c2[9]);
      obj3 = c0(c2[6]);
      items = [, ];
      items[0] = c1;
      items[1] = c2;
      obj[0] = obj2.withSpring(obj3.interpolateColor(c0.get(), [0, 1], items), outer1_8, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING: closure_8 };
  R.__closure = obj;
  R.__workletHash = 3664740129577;
  R.__initData = closure_10;
  const animatedStyle = obj3.useAnimatedStyle(R);
  let obj5 = sharedValue(token1[6]);
  class P {
    constructor() {
      obj = { borderTopColor: null, borderBottomColor: null };
      obj2 = c0(c2[9]);
      obj3 = c0(c2[6]);
      items = [, ];
      items[0] = c1;
      items[1] = c2;
      obj[0] = obj2.withSpring(obj3.interpolateColor(c0.get(), [0, 1], items), outer1_8, "animate-always");
      obj4 = c0(c2[9]);
      obj5 = c0(c2[6]);
      items1 = [, ];
      items1[0] = c1;
      items1[1] = c2;
      obj[1] = obj4.withSpring(obj5.interpolateColor(c0.get(), [0, 1], items1), outer1_8, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING: closure_8 };
  P.__closure = obj;
  P.__workletHash = 11850141175626;
  P.__initData = closure_11;
  const animatedStyle1 = obj5.useAnimatedStyle(P);
  obj1 = {
    disabled: null == onPress,
    onPress,
    onLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      _undefined({ width: nativeEvent.layout.width, height: nativeEvent.layout.height });
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
  obj1[7] = items2;
  let tmp17 = "bottom" === position;
  if (tmp17) {
    obj2 = { style: null };
    const items3 = [, , , ];
    ({ arrow: arr4[0], topArrow: arr4[1] } = tmp);
    obj3 = { left: null };
    obj3[0] = -adjustmentX;
    items3[2] = obj3;
    items3[3] = animatedStyle1;
    obj2[0] = items3;
    tmp17 = callback2(tmp5(tmp3[6]).View, obj2);
  }
  const items4 = [tmp17, , ];
  let obj4 = { style: items5, children: null };
  items5 = [tmp.textContainer, animatedStyle];
  obj5 = { style: tmp.text, variant: "text-xs/bold", color: "text-overlay-light", children: label };
  obj4[1] = callback2(tmp2(token1[10]).Text, obj5);
  items4[1] = callback2(token(token1[6]).View, obj4);
  let tmp19Result = "top" === position;
  if (tmp19Result) {
    const obj6 = { style: null };
    const items6 = [, , , ];
    ({ arrow: arr7[0], bottomArrow: arr7[1] } = tmp);
    const obj7 = { left: null };
    obj7[0] = -adjustmentX;
    items6[2] = obj7;
    items6[3] = animatedStyle1;
    obj6[0] = items6;
    tmp19Result = callback2(tmp5(tmp3[6]).View, obj6);
  }
  items4[2] = tmp19Result;
  obj1[8] = items4;
  return closure_7(Pressable, obj1);
};