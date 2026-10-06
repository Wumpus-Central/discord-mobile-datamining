// === Module 9898: Tooltip ===

// Module 9898 (Tooltip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let _slicedToArray = _slicedToArray_mod;
const Pressable = react_native.Pressable;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", alignItems: "center" }, textContainer: obj2, text: { textAlign: "center" }, arrow: size, bottomArrow: { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 }, topArrow: { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, maxWidth: 150, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
size = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_9 = createStyles(obj);
const __initData = { code: "function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,\"animate-always\"),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,\"animate-always\")};}" };
const __initData3 = { code: "function TooltipNativeTsx3(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const __initData4 = { code: "function TooltipNativeTsx4(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always'),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let adjustmentX;
  let label;
  let onPress;
  let position;
  let sharedValue;
  let surfaceMeasurements;
  let targetMeasurements;
  let tmp12;
  let token;
  let token1;
  let tooltipX;
  let tooltipY;
  const tmp = sharedValue;
  const tmp2 = token1;
  let obj = sharedValue(token1[7]);
  const cResult = obj.c(43);
  ({ targetMeasurements, surfaceMeasurements, label, position, onPress } = arg0);
  closure_9();
  let obj2 = sharedValue(token1[8]);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = sharedValue(token1[9]);
  token = obj3.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const obj4 = sharedValue(token1[9]);
  token1 = obj4.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  if (cResult[0] !== sharedValue) {
    const fn = function _() {
      const result = sharedValue.set(1);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
  }
  if (cResult[2] !== sharedValue) {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
    cResult[2] = sharedValue;
    cResult[3] = T;
  } else {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
  }
  const tmp11 = _slicedToArray(react.useState(null), 2);
  [tmp12, _slicedToArray] = tmp11;
  ({ adjustmentX, tooltipX, tooltipY } = token(tmp2[10])(tmp12, surfaceMeasurements, targetMeasurements, position, 4));
  token(tmp2[10])(tmp12, surfaceMeasurements, targetMeasurements, position, 4);
  const fn2 = function x() {
    let items;
    let obj2;
    let withSpring;
    const obj = { backgroundColor: withSpring(obj2.interpolateColor(sharedValue.get(), [0, 1], items), ON_PRESS_SPRING, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    items = [token, token1];
    obj2 = ReanimatedRexport;
    return obj;
  };
  const tmpResult = tmp(tmp2[8]);
  fn2.__closure = { withSpring: tmp(tmp2[11]).withSpring, interpolateColor: tmp(tmp2[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  fn2.__workletHash = 15323606626185;
  fn2.__initData = __initData;
  ({ withSpring: tmp(tmp2[11]).withSpring, interpolateColor: tmp(tmp2[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING });
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  const tmpResult2 = tmp(tmp2[8]);
  class I {
    constructor() {
      let items;
      let items1;
      let obj2;
      let obj3;
      let withSpring;
      let withSpring2;
      const obj = { borderTopColor: withSpring(obj2.interpolateColor(sharedValue.get(), [0, 1], items), ON_PRESS_SPRING, "animate-always"), borderBottomColor: withSpring2(obj3.interpolateColor(sharedValue.get(), [0, 1], items1), ON_PRESS_SPRING, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      items = [token, token1];
      obj2 = ReanimatedRexport;
      withSpring2 = spring.withSpring;
      spring;
      items1 = [token, token1];
      obj3 = ReanimatedRexport;
      return obj;
    }
  }
  I.__closure = { withSpring: tmp(tmp2[11]).withSpring, interpolateColor: tmp(tmp2[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  I.__workletHash = 6345133227978;
  I.__initData = __initData2;
  ({ withSpring: tmp(tmp2[11]).withSpring, interpolateColor: tmp(tmp2[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING });
  const animatedStyle1 = tmpResult2.useAnimatedStyle(I);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
    cResult[4] = tmp17;
  } else {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
  }
  if (null != tmp12) {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
  }
  if (cResult[5] === 0) {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
  }
  const rect = { opacity: num4, top: tooltipY, left: tooltipX };
  cResult[5] = 0;
  cResult[6] = tooltipX;
  cResult[7] = tooltipY;
  cResult[8] = rect;
}) : ((targetMeasurements) => {
  let _undefined;
  let adjustmentX;
  let c3;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let label;
  let obj12;
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
  _slicedToArray = undefined;
  targetMeasurements = targetMeasurements.targetMeasurements;
  const tmp = closure_9();
  const tmp2 = sharedValue;
  let obj = sharedValue(token1[8]);
  let num = 0;
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(token1[9]);
  token = obj2.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  let obj3 = sharedValue(token1[9]);
  token1 = obj3.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  let items = [sharedValue];
  let items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  [tmp11, c3] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  ({ adjustmentX, tooltipX, tooltipY } = token(token1[10])(tmp11, surfaceMeasurements, targetMeasurements, position, 4));
  token(token1[10])(tmp11, surfaceMeasurements, targetMeasurements, position, 4);
  const obj4 = sharedValue(token1[8]);
  class P {
    constructor() {
      let items;
      let obj2;
      let withSpring;
      const obj = { backgroundColor: withSpring(obj2.interpolateColor(sharedValue.get(), [0, 1], items), ON_PRESS_SPRING, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      items = [token, token1];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  P.__closure = { withSpring: sharedValue(token1[11]).withSpring, interpolateColor: sharedValue(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  P.__workletHash = 17276673117291;
  P.__initData = __initData3;
  ({ withSpring: sharedValue(token1[11]).withSpring, interpolateColor: sharedValue(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING });
  const animatedStyle = obj4.useAnimatedStyle(P);
  const obj6 = sharedValue(token1[8]);
  class R {
    constructor() {
      let items;
      let items1;
      let obj2;
      let obj3;
      let withSpring;
      let withSpring2;
      const obj = { borderTopColor: withSpring(obj2.interpolateColor(sharedValue.get(), [0, 1], items), ON_PRESS_SPRING, "animate-always"), borderBottomColor: withSpring2(obj3.interpolateColor(sharedValue.get(), [0, 1], items1), ON_PRESS_SPRING, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      items = [token, token1];
      obj2 = ReanimatedRexport;
      withSpring2 = spring.withSpring;
      spring;
      items1 = [token, token1];
      obj3 = ReanimatedRexport;
      return obj;
    }
  }
  R.__closure = { withSpring: sharedValue(token1[11]).withSpring, interpolateColor: sharedValue(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  R.__workletHash = 5305172198540;
  R.__initData = __initData4;
  ({ withSpring: sharedValue(token1[11]).withSpring, interpolateColor: sharedValue(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING });
  const animatedStyle1 = obj6.useAnimatedStyle(R);
  const obj8 = {
    disabled: null == onPress,
    onPress,
    onLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
      _undefined(size);
    },
    onPressIn: callback,
    onPressOut: callback1,
    accessibilityLabel: label,
    accessibilityRole: "button",
    style: items2,
    children: items4
  };
  items2 = [tmp.container, ];
  if (null != tmp11) {
    num = 1;
  }
  items2[1] = { opacity: num, top: tooltipY, left: tooltipX };
  let tmp17 = "bottom" === position;
  if (tmp17) {
    const obj9 = { style: items3 };
    items3 = [, , , ];
    ({ arrow: arr4[0], topArrow: arr4[1] } = tmp);
    const obj10 = { left: -adjustmentX };
    items3[2] = obj10;
    items3[3] = animatedStyle1;
    tmp17 = closure_6(tmp5(tmp3[8]).View, obj9);
  }
  items4 = [tmp17, , ];
  const obj11 = { style: items5, children: closure_6(tmp2(token1[12]).Text, obj12) };
  items5 = [tmp.textContainer, animatedStyle];
  const View = tmp5(tmp3[8]).View;
  obj12 = { style: tmp.text, variant: "text-xs/bold", color: "text-overlay-light", children: label };
  items4[1] = closure_6(View, obj11);
  let tmp19Result = "top" === position;
  if (tmp19Result) {
    const obj13 = { style: items6 };
    items6 = [, , , ];
    ({ arrow: arr7[0], bottomArrow: arr7[1] } = tmp);
    const obj14 = { left: -adjustmentX };
    items6[2] = obj14;
    items6[3] = animatedStyle1;
    tmp19Result = closure_6(tmp5(tmp3[8]).View, obj13);
  }
  items4[2] = tmp19Result;
  return closure_7(Pressable, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export const Tooltip = tmp4;