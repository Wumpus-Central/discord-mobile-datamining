// discord_app/design/components/Card/native/Card.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import CardTokens from "CardTokens.native.tsx";
import AnimatedPressableHighlight from "../../experimental/Pressables/native/AnimatedPressableHighlight.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function PressableCard(arg0) {
  if (obj.isAndroid()) {
    let tmp2 = closure_19(arg0);
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
get_ActivityIndicator = fn(17);
({ View: c10, Pressable } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_12 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = fn(5091);
let closure_13 = createStyles.createStyleProperties((arg0) => {
  if ("primary" === arg0) {
    let backgroundColor = nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
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
    let backgroundColorPressed = nativeDefault.colors.TABLEROW_BACKGROUND_PRESSED;
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
createStyles = fn(5091);
let closure_14 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4, arg5) => {
  if ("primary" === arg2) {
    let BACKGROUND_SURFACE_HIGH = nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
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
  const card = {};
  const merged = Object.assign(CardTokens.createCardShadowToken(arg3));
  let tmp21;
  if (arg0) {
    tmp21 = arg5;
  }
  card.borderTopStartRadius = tmp21;
  let tmp22;
  if (arg0) {
    tmp22 = arg5;
  }
  card.borderTopEndRadius = tmp22;
  let tmp23;
  if (arg1) {
    tmp23 = arg5;
  }
  card.borderBottomStartRadius = tmp23;
  let tmp24;
  if (arg1) {
    tmp24 = arg5;
  }
  card.borderBottomEndRadius = tmp24;
  card.borderColor = BORDER_SUBTLE;
  let num = 0;
  if ("none" !== arg4) {
    num = 1;
  }
  card.borderWidth = num;
  card.backgroundColor = BACKGROUND_SURFACE_HIGH;
  return { card, spacing: { padding: 16 } };
});
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Card(arg0) {
      const cResult = c.c(25);
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
        let tmp9 = variant;
        let tmp8 = border;
        let tmp7 = shadow;
        let tmp6 = end;
        let tmp5 = start;
        let tmp4 = tmp12;
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
      let radius = tmp4.radius;
      if (radius == null) {
        radius = tmpResult.useToken(nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS);
      }
      const tmp15 = closure_14(undefined === tmp5 || tmp5, undefined === tmp6 || tmp6, str3, str, str2, radius);
      if (cResult[7] === tmp4.style) {
        if (cResult[8] === tmp15.card) {
          if (cResult[9] === tmp15.spacing) {
            let tmp16 = cResult[10];
          }
          if ("onPress" in tmp4) {
            if (null != tmp4.onPress) {
              if (cResult[11] !== tmp4) {
                const accessibilityRole = tmp4.accessibilityRole;
                const tmp27 = _objectWithoutProperties(tmp4, closure_4);
                cResult[11] = tmp4;
                cResult[12] = accessibilityRole;
                cResult[13] = tmp27;
                let tmp24 = tmp27;
                let str5 = accessibilityRole;
              } else {
                str5 = cResult[12];
                tmp24 = cResult[13];
              }
              if (str5 == null) {
                str5 = "button";
              }
              if (cResult[14] === tmp14) {
                if (cResult[15] === tmp24) {
                  if (cResult[16] === radius) {
                    if (cResult[17] === tmp13) {
                      if (cResult[18] === tmp16) {
                        if (cResult[19] === str5) {
                          if (cResult[20] === str3) {
                            let tmp28 = cResult[21];
                          }
                          return tmp28;
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = { accessibilityRole: str5 };
              const merged = Object.assign(tmp24);
              obj2.start = tmp13;
              obj2.end = tmp14;
              obj2.style = tmp16;
              obj2.variant = str3;
              obj2.radius = radius;
              const tmp34 = <PressableCard accessibilityRole={str5} />;
              cResult[14] = tmp14;
              cResult[15] = tmp24;
              cResult[16] = radius;
              cResult[17] = tmp13;
              cResult[18] = tmp16;
              cResult[19] = str5;
              cResult[20] = str3;
              cResult[21] = tmp34;
              tmp28 = tmp34;
            }
          }
          if (cResult[22] === tmp16) {
            if (cResult[23] === tmp4) {
              let tmp17 = cResult[24];
            }
            return tmp17;
          }
          const obj3 = {};
          const merged1 = Object.assign(tmp4);
          obj3.style = tmp16;
          const tmp23 = <collapsed />;
          cResult[22] = tmp16;
          cResult[23] = tmp4;
          cResult[24] = tmp23;
          tmp17 = tmp23;
        }
      }
      const items = [, ,];
      ({ spacing: arr[0], card: arr[1] } = tmp15);
      items[2] = tmp4.style;
      cResult[7] = tmp4.style;
      cResult[8] = tmp15.card;
      cResult[9] = tmp15.spacing;
      cResult[10] = items;
      tmp16 = items;
      tmpResult = useToken;
    }
  : function Card(start) {
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
      let radius = merged.radius;
      if (radius == null) {
        radius = obj.useToken(nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS);
      }
      obj = useToken;
      const items = [, ,];
      ({ spacing: arr[0], card: arr[1] } = closure_14(flag, flag2, str3, str, str2, radius));
      items[2] = merged.style;
      if ("onPress" in merged) {
        if (null != merged.onPress) {
          let str4 = merged.accessibilityRole;
          const tmp6 = _objectWithoutProperties(merged, closure_5);
          if (str4 == null) {
            str4 = "button";
          }
          const obj2 = { accessibilityRole: str4 };
          const merged1 = Object.assign(tmp6);
          obj2.start = flag;
          obj2.end = flag2;
          obj2.style = items;
          obj2.variant = str3;
          obj2.radius = radius;
          return <PressableCard accessibilityRole={str4} />;
        }
      }
      const obj3 = {};
      const merged2 = Object.assign(merged);
      obj3.style = items;
      return <collapsed />;
    };
const __initData = {
  code: 'function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,"animate-always");return{backgroundColor:pressedColor};}',
};
const __initData2 = {
  code: "function CardNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}",
};
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PressableCardiOS(arg0) {
      const cResult = require("c").c(22);
      if (cResult[0] !== arg0) {
        ({ children, style, variant, onPressIn, onPressOut, radius, start, end } = arg0);
        const tmp12 = _objectWithoutProperties(arg0, closure_6);
        _require = onPressIn;
        closure_1 = onPressOut;
        class N {
          constructor(arg0) {
            result = closure_2.set(1);
            if (closure_0 != null) {
              tmp3 = arg0;
              tmp2Result = tmp2(arg0);
            }
            return;
          }
        }
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = onPressIn;
        cResult[3] = onPressOut;
        cResult[4] = tmp12;
        cResult[5] = style;
        cResult[6] = variant;
        let tmp9 = variant;
        let tmp8 = style;
        let tmp7 = tmp12;
        let tmp4 = children;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
        closure_1 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
      }
      let obj = require("c");
      sharedValue = require("ReanimatedRexport").useSharedValue(0);
      if (cResult[7] === onPressIn) {
        if (cResult[8] === sharedValue) {
          let tmp14 = cResult[9];
        }
        if (cResult[10] === onPressOut) {
          if (cResult[11] === sharedValue) {
            let tmp15 = cResult[12];
          }
          const tmp17 = closure_13(tmp9);
          const backgroundColor = tmp17.backgroundColor;
          const backgroundColorPressed = tmp17.backgroundColorPressed;
          const fn2 = function f() {
            const obj = { backgroundColor: null };
            const obj2 = spring;
            const items = [backgroundColor, backgroundColorPressed];
            obj.backgroundColor = obj2.withSpring(
              ReanimatedRexport2.interpolateColor(sharedValue.get(), [0, 1], items),
              springPresets.ON_PRESS_SPRING,
              "animate-always",
            );
            return obj;
          };
          let obj2 = {
            withSpring: tmp(tmp2[12]).withSpring,
            interpolateColor: tmp(tmp2[4]).interpolateColor,
            pressed: null,
            backgroundColor: null,
            backgroundColorPressed: null,
            ON_PRESS_SPRING: null,
          };
          class N {
            constructor(arg0) {
              result = closure_2.set(1);
              if (closure_0 != null) {
                tmp3 = arg0;
                tmp2Result = tmp2(arg0);
              }
              return;
            }
          }
          obj2.backgroundColor = backgroundColor;
          obj2.backgroundColorPressed = backgroundColorPressed;
          obj2.ON_PRESS_SPRING = tmp(tmp2[13]).ON_PRESS_SPRING;
          fn2.__closure = obj2;
          fn2.__workletHash = 3250854615435;
          fn2.__initData = __initData;
          const animatedStyle = tmp(tmp2[4]).useAnimatedStyle(fn2);
          if (cResult[13] === animatedStyle) {
            if (cResult[14] === tmp8) {
              let tmp20 = cResult[15];
            }
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp14) {
                if (cResult[18] === tmp15) {
                  if (cResult[19] === tmp7) {
                    if (cResult[20] === tmp20) {
                      let tmp21 = cResult[21];
                    }
                    return tmp21;
                  }
                }
              }
            }
            let obj3 = {};
            const merged = Object.assign(tmp7);
            obj3.onPressIn = tmp14;
            obj3.onPressOut = tmp15;
            obj3.style = tmp20;
            obj3.unstable_pressDelay = 130;
            class N {
              constructor(arg0) {
                result = closure_2.set(1);
                if (closure_0 != null) {
                  tmp3 = arg0;
                  tmp2Result = tmp2(arg0);
                }
                return;
              }
            }
            const tmp27 = <closure_12 />;
            cResult[16] = tmp4;
            cResult[17] = tmp14;
            cResult[18] = tmp15;
            cResult[19] = tmp7;
            cResult[20] = tmp20;
            cResult[21] = tmp27;
            tmp21 = tmp27;
          }
          let items = [tmp8, animatedStyle];
          cResult[13] = animatedStyle;
          cResult[14] = tmp8;
          cResult[15] = items;
          tmp20 = items;
          const tmpResult2 = tmp(tmp2[4]);
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
          result = closure_2.set(1);
          if (closure_0 != null) {
            tmp3 = arg0;
            tmp2Result = tmp2(arg0);
          }
          return;
        }
      }
      cResult[7] = onPressIn;
      cResult[8] = sharedValue;
      cResult[9] = N;
      tmp14 = N;
      const tmpResult = require("ReanimatedRexport");
    }
  : function PressableCardiOS(onPressIn) {
      onPressIn = onPressIn.onPressIn;
      const onPressOut = onPressIn.onPressOut;
      ({ radius, start, end } = onPressIn);
      ({ children, style, variant } = onPressIn);
      const merged = Object.assign(
        onPressIn,
        Object.assign({ children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, radius: 0, start: 0, end: 0 }),
      );
      let sharedValue;
      sharedValue = onPressIn(sharedValue[4]).useSharedValue(0);
      let items = [sharedValue, onPressIn];
      const items1 = [sharedValue, onPressOut];
      const callback = noop.useCallback((arg0) => {
        const result = sharedValue.set(1);
        if (onPressIn != null) {
          tmp2(arg0);
        }
      }, items);
      const callback1 = noop.useCallback((arg0) => {
        const result = sharedValue.set(0);
        if (onPressOut != null) {
          tmp2(arg0);
        }
      }, items1);
      const tmp5 = closure_13(variant);
      const backgroundColor = tmp5.backgroundColor;
      const backgroundColorPressed = tmp5.backgroundColorPressed;
      let obj = onPressIn(sharedValue[4]);
      const fn = function p() {
        const obj = { backgroundColor: null };
        const obj2 = spring;
        const items = [backgroundColor, backgroundColorPressed];
        obj.backgroundColor = obj2.withSpring(
          ReanimatedRexport2.interpolateColor(sharedValue.get(), [0, 1], items),
          springPresets.ON_PRESS_SPRING,
          "animate-always",
        );
        return obj;
      };
      let obj2 = onPressIn(sharedValue[4]);
      fn.__closure = {
        withSpring: onPressIn(sharedValue[12]).withSpring,
        interpolateColor: onPressIn(sharedValue[4]).interpolateColor,
        pressed: sharedValue,
        backgroundColor,
        backgroundColorPressed,
        ON_PRESS_SPRING: onPressIn(sharedValue[13]).ON_PRESS_SPRING,
      };
      fn.__workletHash = 13243018769960;
      fn.__initData = __initData2;
      const obj4 = {};
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const merged1 = Object.assign(merged);
      obj4.onPressIn = callback;
      obj4.onPressOut = callback1;
      const items2 = [style, animatedStyle];
      obj4.style = items2;
      obj4.unstable_pressDelay = 130;
      obj4.children = children;
      return <closure_12 />;
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PressableCardAndroid(arg0) {
      const cResult = c.c(12);
      if (cResult[0] !== arg0) {
        ({ children, start, end, radius } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_7);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = end;
        cResult[3] = tmp11;
        cResult[4] = radius;
        cResult[5] = start;
        let tmp8 = start;
        let tmp7 = radius;
        let tmp6 = tmp11;
        let tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      if (tmp8) {
        let num7 = tmp7;
      } else {
        num7 = 0;
      }
      if (cResult[6] !== num7) {
        const obj2 = { cornerRadius: num7 };
        cResult[6] = num7;
        cResult[7] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp12) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === tmp6) {
            let tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj3 = { androidRippleConfig: tmp12 };
      const merged = Object.assign(tmp6);
      obj3.children = tmp4;
      const tmp15 = jsx(AnimatedPressableHighlight.AnimatedPressableHighlight, { androidRippleConfig: tmp12 });
      cResult[8] = tmp12;
      cResult[9] = tmp4;
      cResult[10] = tmp6;
      cResult[11] = tmp15;
      tmp13 = tmp15;
    }
  : function PressableCardAndroid(start) {
      start = start.start;
      const end = start.end;
      const radius = start.radius;
      const merged = Object.assign(start, Object.assign({ children: 0, start: 0, end: 0, radius: 0 }));
      const items = [start, end, radius];
      const memo = noop.useMemo(() => {
        if (start) {
          let cornerRadius = radius;
        } else {
          cornerRadius = 0;
        }
        return { cornerRadius };
      }, items);
      const obj = { androidRippleConfig: memo };
      const merged1 = Object.assign(merged);
      obj.children = start.children;
      return jsx(AnimatedPressableHighlight.AnimatedPressableHighlight, { androidRippleConfig: memo });
    };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export const Card = tmp3;
export const InternalCard = tmp3;
