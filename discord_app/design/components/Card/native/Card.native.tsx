// === Module 5995: Card/Card ===

// Module 5995 (Card/Card)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useToken2 from "useToken" /* 4580 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import CardTokens from "CardTokens" /* 5996 */;
import AnimatedPressableHighlight2 from "AnimatedPressableHighlight" /* 5997 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require;

let Pressable;
let c10;
function PressableCard(arg0) {
  let tmp2;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    tmp2 = closure_19(arg0);
  } else {
    tmp2 = closure_18(arg0);
  }
  return tmp2;
}
let closure_3 = ["start", "end", "shadow", "border", "variant"];
let closure_4 = ["accessibilityRole"];
let closure_5 = ["accessibilityRole"];
let closure_6 = ["children", "style", "variant", "onPressIn", "onPressOut", "radius", "start", "end"];
let closure_7 = ["children", "start", "end", "radius"];
({ View: c10, Pressable } = react_native);
const jsx = Fragment.jsx;
let closure_12 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let closure_13 = createStyles.createStyleProperties((arg0) => {
  let backgroundColor;
  let backgroundColorPressed;
  if ("primary" === arg0) {
    backgroundColor = nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  } else if ("secondary" === arg0) {
    backgroundColor = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg0) {
    backgroundColor = nativeDefault.colors.CARD_MUTED_BG;
  } else if ("transparent" === arg0) {
    backgroundColor = nativeDefault.unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg0) {
    backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg0) {
    backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  if ("primary" === arg0) {
    backgroundColorPressed = nativeDefault.colors.TABLEROW_BACKGROUND_PRESSED;
  } else if ("secondary" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("muted" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CARD_MUTED_PRESSED_BG;
  } else if ("transparent" === arg0) {
    backgroundColorPressed = nativeDefault.colors.BACKGROUND_MOD_SUBTLE;
  } else if ("control-secondary" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("surface-high" === arg0) {
    backgroundColorPressed = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  return { backgroundColor, backgroundColorPressed };
});
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4, arg5) => {
  let BACKGROUND_SURFACE_HIGH;
  let num;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  if ("primary" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  } else if ("secondary" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CARD_MUTED_BG;
  } else if ("transparent" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  let BORDER_SUBTLE = null;
  if ("none" !== arg4) {
    if ("subtle" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_SUBTLE;
    } else if ("strong" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_STRONG;
    } else if ("faint" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_MUTED;
    } else if ("control-secondary" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT;
    }
  }
  if (BORDER_SUBTLE == null) {
    BORDER_SUBTLE = BACKGROUND_SURFACE_HIGH;
  }
  const card = { borderTopStartRadius: tmp21, borderTopEndRadius: tmp22, borderBottomStartRadius: tmp23, borderBottomEndRadius: tmp24, borderColor: BORDER_SUBTLE, borderWidth: num, backgroundColor: BACKGROUND_SURFACE_HIGH };
  const obj2 = CardTokens;
  const merged = Object.assign(obj2.createCardShadowToken(arg3));
  tmp21 = undefined;
  if (arg0) {
    tmp21 = arg5;
  }
  tmp22 = undefined;
  if (arg0) {
    tmp22 = arg5;
  }
  tmp23 = undefined;
  if (arg1) {
    tmp23 = arg5;
  }
  tmp24 = undefined;
  if (arg1) {
    tmp24 = arg5;
  }
  num = 0;
  if ("none" !== arg4) {
    num = 1;
  }
  return { card, spacing: { padding: 16 } };
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let border;
  let end;
  let shadow;
  let start;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let variant;
  const obj = react2;
  const cResult = obj.c(25);
  if (cResult[0] !== arg0) {
    ({ start, end, shadow, border, variant } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp12;
    cResult[2] = start;
    cResult[3] = end;
    cResult[4] = shadow;
    cResult[5] = border;
    cResult[6] = variant;
    tmp9 = variant;
    tmp8 = border;
    tmp7 = shadow;
    tmp6 = end;
    tmp5 = start;
    tmp4 = tmp12;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  let str = "none";
  if (undefined !== tmp7) {
    str = tmp7;
  }
  let str2 = "faint";
  if (undefined !== tmp8) {
    str2 = tmp8;
  }
  let str3 = "primary";
  if (undefined !== tmp9) {
    str3 = tmp9;
  }
  const useToken = useToken2.useToken;
  let radius = tmp4.radius;
  useToken2;
  if (radius == null) {
    radius = useToken(nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS);
  }
  const tmp16 = closure_14(undefined === tmp5 || tmp5, undefined === tmp6 || tmp6, str3, str, str2, radius);
  if (cResult[7] === tmp4.style) {
    if (cResult[8] === tmp16.card) {
      let tmp17;
      if (cResult[9] === tmp16.spacing) {
        tmp17 = cResult[10];
      }
      if ("onPress" in tmp4) {
        if (null != tmp4.onPress) {
          let tmp25;
          let str5;
          if (cResult[11] !== tmp4) {
            const accessibilityRole = tmp4.accessibilityRole;
            const tmp28 = _objectWithoutProperties(tmp4, closure_4);
            cResult[11] = tmp4;
            cResult[12] = accessibilityRole;
            cResult[13] = tmp28;
            tmp25 = tmp28;
            str5 = accessibilityRole;
          } else {
            str5 = cResult[12];
            tmp25 = cResult[13];
          }
          if (str5 == null) {
            str5 = "button";
          }
          if (cResult[14] === (undefined === tmp6 || tmp6)) {
            if (cResult[15] === tmp25) {
              if (cResult[16] === radius) {
                if (cResult[17] === (undefined === tmp5 || tmp5)) {
                  if (cResult[18] === tmp17) {
                    if (cResult[19] === str5) {
                      let tmp29;
                      if (cResult[20] === str3) {
                        tmp29 = cResult[21];
                      }
                      return tmp29;
                    }
                  }
                }
              }
            }
          }
          const merged = Object.assign(tmp25);
          const tmp35 = <PressableCard accessibilityRole={str5} start={undefined === tmp5 || tmp5} end={undefined === tmp6 || tmp6} style={tmp17} variant={str3} radius={radius} />;
          cResult[14] = undefined === tmp6 || tmp6;
          cResult[15] = tmp25;
          cResult[16] = radius;
          cResult[17] = undefined === tmp5 || tmp5;
          cResult[18] = tmp17;
          cResult[19] = str5;
          cResult[20] = str3;
          cResult[21] = tmp35;
          tmp29 = tmp35;
        }
      }
      if (cResult[22] === tmp17) {
        let tmp18;
        if (cResult[23] === tmp4) {
          tmp18 = cResult[24];
        }
        return tmp18;
      }
      const merged1 = Object.assign(tmp4);
      const tmp24 = <authStore style={tmp17} />;
      cResult[22] = tmp17;
      cResult[23] = tmp4;
      cResult[24] = tmp24;
      tmp18 = tmp24;
    }
  }
  const items = [, , ];
  ({ spacing: arr[0], card: arr[1] } = tmp16);
  items[2] = tmp4.style;
  cResult[7] = tmp4.style;
  cResult[8] = tmp16.card;
  cResult[9] = tmp16.spacing;
  cResult[10] = items;
  tmp17 = items;
}) : ((start) => {
  let flag = start.start;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = start.end;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let str = start.shadow;
  if (str === undefined) {
    str = "none";
  }
  let str2 = start.border;
  if (str2 === undefined) {
    str2 = "faint";
  }
  let str3 = start.variant;
  if (str3 === undefined) {
    str3 = "primary";
  }
  const merged = Object.assign(start, Object.assign({ start: 0, end: 0, shadow: 0, border: 0, variant: 0 }));
  const useToken = useToken2.useToken;
  let radius = merged.radius;
  useToken2;
  if (radius == null) {
    radius = useToken(nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS);
  }
  const items = [, , ];
  ({ spacing: arr[0], card: arr[1] } = closure_14(flag, flag2, str3, str, str2, radius));
  items[2] = merged.style;
  closure_14(flag, flag2, str3, str, str2, radius);
  if ("onPress" in merged) {
    if (null != merged.onPress) {
      let str4 = merged.accessibilityRole;
      const tmp7 = _objectWithoutProperties(merged, closure_5);
      if (str4 == null) {
        str4 = "button";
      }
      const merged1 = Object.assign(tmp7);
      return <PressableCard accessibilityRole={str4} start={flag} end={flag2} style={items} variant={str3} radius={radius} />;
    }
  }
  const merged2 = Object.assign(merged);
  return <authStore style={items} />;
});
const __initData = { code: "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,\"animate-always\");return{backgroundColor:pressedColor};}" };
const __initData2 = { code: "function CardNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let closure_0;
  let end;
  let onPressIn;
  let onPressOut;
  let radius;
  let sharedValue;
  let start;
  let style;
  let tmp4;
  let tmp7;
  let tmp8;
  let tmp9;
  let variant;
  const tmp = _require;
  const tmp2 = sharedValue;
  let obj = require("react");
  const cResult = obj.c(22);
  if (cResult[0] !== arg0) {
    ({ children, style, variant, onPressIn, onPressOut, radius, start, end } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_6);
    _require = onPressIn;
    let closure_1 = onPressOut;
    class N {
      constructor(arg0) {
        const result = sharedValue.set(1);
        if (closure_0 != null) {
          tmp2(arg0);
        }
      }
    }
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = onPressIn;
    cResult[3] = onPressOut;
    cResult[4] = tmp12;
    cResult[5] = style;
    cResult[6] = variant;
    tmp9 = variant;
    tmp8 = style;
    tmp7 = tmp12;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    closure_1 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  const tmpResult = tmp(tmp2[4]);
  sharedValue = tmpResult.useSharedValue(0);
  if (cResult[7] === onPressIn) {
    let tmp14;
    if (cResult[8] === sharedValue) {
      tmp14 = cResult[9];
    }
    if (cResult[10] === onPressOut) {
      let tmp15;
      if (cResult[11] === sharedValue) {
        tmp15 = cResult[12];
      }
      const tmp17 = closure_13(tmp9);
      const backgroundColor = tmp17.backgroundColor;
      const backgroundColorPressed = tmp17.backgroundColorPressed;
      const fn2 = function f() {
        let interpolateColorResult;
        let withSpring;
        const obj = { backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always") };
        withSpring = spring.withSpring;
        spring;
        const items = [backgroundColor, backgroundColorPressed];
        const obj2 = ReanimatedRexport2;
        interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
        return obj;
      };
      let obj2 = { withSpring: tmp(tmp2[12]).withSpring, interpolateColor: tmp(tmp2[4]).interpolateColor, pressed: null, backgroundColor, backgroundColorPressed, ON_PRESS_SPRING: tmp(tmp2[13]).ON_PRESS_SPRING };
      const useAnimatedStyle = tmp(tmp2[4]).useAnimatedStyle;
      tmp(tmp2[4]);
      class N {
        constructor(arg0) {
          const result = sharedValue.set(1);
          if (closure_0 != null) {
            tmp2(arg0);
          }
        }
      }
      fn2.__closure = obj2;
      fn2.__workletHash = 3250854615435;
      fn2.__initData = __initData;
      const animatedStyle = useAnimatedStyle(fn2);
      if (cResult[13] === animatedStyle) {
        let tmp21;
        if (cResult[14] === tmp8) {
          tmp21 = cResult[15];
        }
        if (cResult[16] === tmp4) {
          if (cResult[17] === tmp14) {
            if (cResult[18] === tmp15) {
              if (cResult[19] === tmp7) {
                let tmp22;
                if (cResult[20] === tmp21) {
                  tmp22 = cResult[21];
                }
                return tmp22;
              }
            }
          }
        }
        const merged = Object.assign(tmp7);
        class N {
          constructor(arg0) {
            const result = sharedValue.set(1);
            if (closure_0 != null) {
              tmp2(arg0);
            }
          }
        }
        const tmp28 = <closure_12 onPressIn={tmp14} onPressOut={tmp15} style={tmp21} unstable_pressDelay={130} />;
        cResult[16] = tmp4;
        cResult[17] = tmp14;
        cResult[18] = tmp15;
        cResult[19] = tmp7;
        cResult[20] = tmp21;
        cResult[21] = tmp28;
        tmp22 = tmp28;
      }
      let items = [tmp8, animatedStyle];
      cResult[13] = animatedStyle;
      cResult[14] = tmp8;
      cResult[15] = items;
      tmp21 = items;
    }
    const fn = function y(arg0) {
      const result = sharedValue.set(0);
      if (closure_1 != null) {
        tmp2(arg0);
      }
    };
    cResult[10] = onPressOut;
    cResult[11] = sharedValue;
    cResult[12] = fn;
    tmp15 = fn;
  }
  class N {
    constructor(arg0) {
      const result = sharedValue.set(1);
      if (closure_0 != null) {
        tmp2(arg0);
      }
    }
  }
  cResult[7] = onPressIn;
  cResult[8] = sharedValue;
  cResult[9] = N;
  tmp14 = N;
}) : ((onPressIn) => {
  let children;
  let end;
  let radius;
  let start;
  let style;
  let variant;
  onPressIn = onPressIn.onPressIn;
  const onPressOut = onPressIn.onPressOut;
  ({ radius, start, end } = onPressIn);
  ({ children, style, variant } = onPressIn);
  const merged = Object.assign(onPressIn, Object.assign({ children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, radius: 0, start: 0, end: 0 }));
  let sharedValue;
  let obj = onPressIn(sharedValue[4]);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue, onPressIn];
  const items1 = [sharedValue, onPressOut];
  const callback = react.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const callback1 = react.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  const tmp5 = closure_13(variant);
  const backgroundColor = tmp5.backgroundColor;
  const backgroundColorPressed = tmp5.backgroundColorPressed;
  let obj2 = onPressIn(sharedValue[4]);
  class P {
    constructor() {
      let interpolateColorResult;
      let withSpring;
      const obj = { backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      const items = [backgroundColor, backgroundColorPressed];
      const obj2 = ReanimatedRexport2;
      interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
      return obj;
    }
  }
  P.__closure = { withSpring: onPressIn(sharedValue[12]).withSpring, interpolateColor: onPressIn(sharedValue[4]).interpolateColor, pressed: sharedValue, backgroundColor, backgroundColorPressed, ON_PRESS_SPRING: onPressIn(sharedValue[13]).ON_PRESS_SPRING };
  P.__workletHash = 13243018769960;
  P.__initData = __initData2;
  ({ withSpring: onPressIn(sharedValue[12]).withSpring, interpolateColor: onPressIn(sharedValue[4]).interpolateColor, pressed: sharedValue, backgroundColor, backgroundColorPressed, ON_PRESS_SPRING: onPressIn(sharedValue[13]).ON_PRESS_SPRING });
  const animatedStyle = obj2.useAnimatedStyle(P);
  const merged1 = Object.assign(merged);
  const items2 = [style, animatedStyle];
  return <closure_12 onPressIn={callback} onPressOut={callback1} style={items2} unstable_pressDelay={130}>{children}</closure_12>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let end;
  let num7;
  let radius;
  let start;
  let tmp12;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== arg0) {
    ({ children, start, end, radius } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_7);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = end;
    cResult[3] = tmp11;
    cResult[4] = radius;
    cResult[5] = start;
    tmp8 = start;
    tmp7 = radius;
    tmp6 = tmp11;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (tmp8) {
    num7 = tmp7;
  } else {
    num7 = 0;
  }
  if (cResult[6] !== num7) {
    const obj2 = { cornerRadius: num7 };
    cResult[6] = num7;
    cResult[7] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === tmp12) {
    if (cResult[9] === tmp4) {
      let tmp13;
      if (cResult[10] === tmp6) {
        tmp13 = cResult[11];
      }
      return tmp13;
    }
  }
  const AnimatedPressableHighlight = AnimatedPressableHighlight2.AnimatedPressableHighlight;
  const merged = Object.assign(tmp6);
  const tmp15 = <AnimatedPressableHighlight androidRippleConfig={tmp12}>{tmp4}</AnimatedPressableHighlight>;
  cResult[8] = tmp12;
  cResult[9] = tmp4;
  cResult[10] = tmp6;
  cResult[11] = tmp15;
  tmp13 = tmp15;
}) : ((start) => {
  start = start.start;
  const end = start.end;
  const radius = start.radius;
  const children = start.children;
  const merged = Object.assign(start, Object.assign({ children: 0, start: 0, end: 0, radius: 0 }));
  const items = [start, end, radius];
  const memo = react.useMemo(() => {
    let cornerRadius;
    if (start) {
      cornerRadius = radius;
    } else {
      cornerRadius = 0;
    }
    return { cornerRadius };
  }, items);
  const AnimatedPressableHighlight = AnimatedPressableHighlight2.AnimatedPressableHighlight;
  const merged1 = Object.assign(merged);
  return <AnimatedPressableHighlight androidRippleConfig={memo}>{children}</AnimatedPressableHighlight>;
});
let result = size.fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export const Card = tmp3;
export const InternalCard = tmp3;