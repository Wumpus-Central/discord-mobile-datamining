// discord_app/design/components/Button/native/BaseButton.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ButtonHooks from "ButtonHooks.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport_mod from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_2 = ["style"];
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ Pressable, TouchableOpacity } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const IOS_POINTER_STYLE = fn(5384).IOS_POINTER_STYLE;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useThemeOverrideVariant(arg0) {
      native;
      if ("primary-overlay" === arg0) {
        let DARK = ThemeTypes.LIGHT;
      } else if ("secondary-overlay" === arg0) {
        if (tmp2 === ThemeTypes.LIGHT) {
          DARK = ThemeTypes.DARK;
        }
      }
      return DARK;
    }
  : function useThemeOverrideVariant(arg0) {
      native;
      if ("primary-overlay" === arg0) {
        let DARK = ThemeTypes.LIGHT;
      } else if ("secondary-overlay" === arg0) {
        if (tmp2 === ThemeTypes.LIGHT) {
          DARK = ThemeTypes.DARK;
        }
      }
      return DARK;
    };
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles({ disabled: { opacity: 0.5 } });
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useButtonPressAnimationPropsIfPressed(arg0, arg1, onLayout, onPressIn, onPressOut) {
      const cResult = c.c(10);
      const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(
        arg0,
        arg1,
        onLayout,
        onPressIn,
        onPressOut,
      );
      if (cResult[0] !== buttonPressAnimationProps) {
        const style = buttonPressAnimationProps.style;
        const tmp7 = _objectWithoutProperties(buttonPressAnimationProps, closure_2);
        cResult[0] = buttonPressAnimationProps;
        cResult[1] = style;
        cResult[2] = tmp7;
        let tmp4 = tmp7;
        let tmp3 = style;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (null == arg0) {
        if (cResult[3] === onLayout) {
          if (cResult[4] === onPressIn) {
          }
        }
        const obj3 = { animatedScaleStyles: "Array", buttonAnimationProps: 0 };
        const obj4 = { onLayout, onPressIn, onPressOut };
        obj3.buttonAnimationProps = obj4;
        cResult[3] = onLayout;
        cResult[4] = onPressIn;
        cResult[5] = onPressOut;
        cResult[6] = obj3;
      } else {
        if (cResult[7] === tmp3) {
          if (cResult[8] === tmp4) {
            let tmp8 = cResult[9];
          }
          return tmp8;
        }
        const obj5 = { animatedScaleStyles: tmp3, buttonAnimationProps: tmp4 };
        cResult[7] = tmp3;
        cResult[8] = tmp4;
        cResult[9] = obj5;
        tmp8 = obj5;
      }
    }
  : function useButtonPressAnimationPropsIfPressed(arg0, arg1, onLayout, onPressIn, onPressOut) {
      const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(
        arg0,
        arg1,
        onLayout,
        onPressIn,
        onPressOut,
      );
      if (null == arg0) {
        const obj2 = { animatedScaleStyles: "Array", buttonAnimationProps: 0 };
        const obj3 = { onLayout, onPressIn, onPressOut };
        obj2.buttonAnimationProps = obj3;
        let obj4 = obj2;
      } else {
        obj4 = { animatedScaleStyles: buttonPressAnimationProps.style, buttonAnimationProps: tmp2 };
      }
      return obj4;
    };
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_12 = ReanimatedRexport.createAnimatedComponent(Pressable);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_13 = ReanimatedRexport.createAnimatedComponent(TouchableOpacity);
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/BaseButton.native.tsx");

export const BaseButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseButton(arg0) {
      const cResult = c.c(51);
      ({
        children,
        style,
        variant,
        disabled,
        loading,
        pressed,
        onPress,
        onPressDisabled,
        onPressIn,
        onPressOut,
        onLongPress,
        onLayout,
        accessible,
        accessibilityRole,
        accessibilityLabel,
        accessibilityHint,
        accessibilityValue,
        accessibilityState,
        accessibilityActions,
        onAccessibilityAction,
        accessibilityElementsHidden,
        importantForAccessibility,
        pointerEvents,
        hitSlop,
        scaleAmountInPx,
        ref,
      } = arg0);
      let str = "primary";
      if (undefined !== variant) {
        str = variant;
      }
      let disabled2 = undefined !== disabled && disabled;
      let tmp6 = disabled2;
      if (disabled2) {
        tmp6 = null == onPressDisabled;
      }
      if (disabled2) {
        onPress = onPressDisabled;
      }
      const tmp5 = closure_10();
      ({ animatedScaleStyles, buttonAnimationProps } = closure_11(
        pressed,
        scaleAmountInPx,
        onLayout,
        onPressIn,
        onPressOut,
      ));
      if (cResult[0] === accessibilityState) {
        if (cResult[1] === tmp6) {
          if (cResult[2] === tmp4) {
            let tmp9 = cResult[3];
          }
          const tmp12 = closure_9(str);
          if (cResult[4] === children) {
            if (cResult[5] === tmp12) {
              let tmp13 = cResult[6];
            }
            if (disabled2) {
              disabled2 = tmp5.disabled;
            }
            if (cResult[7] === animatedScaleStyles) {
              if (cResult[8] === style) {
                if (cResult[9] === disabled2) {
                  let tmp16 = cResult[10];
                }
                if ("none" !== accessibilityRole) {
                  if (accessibilityRole == null) {
                    accessibilityRole = "button";
                  }
                  if (cResult[11] === accessibilityActions) {
                    if (cResult[12] === accessibilityElementsHidden) {
                      if (cResult[13] === accessibilityHint) {
                        if (cResult[14] === accessibilityLabel) {
                          if (cResult[15] === tmp9) {
                            if (cResult[16] === accessibilityValue) {
                              if (cResult[17] === accessible) {
                                if (cResult[18] === buttonAnimationProps) {
                                  if (cResult[19] === tmp16) {
                                    if (cResult[20] === hitSlop) {
                                      if (cResult[21] === importantForAccessibility) {
                                        if (cResult[22] === tmp6) {
                                          if (cResult[23] === onAccessibilityAction) {
                                            if (cResult[24] === onLongPress) {
                                              if (cResult[25] === onPress) {
                                                if (cResult[26] === pointerEvents) {
                                                  if (cResult[27] === ref) {
                                                    if (cResult[28] === accessibilityRole) {
                                                      if (cResult[29] === tmp13) {
                                                        let tmp30 = cResult[30];
                                                      }
                                                      return tmp30;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj2 = {};
                  const merged = Object.assign(buttonAnimationProps);
                  obj2.ref = ref;
                  obj2.accessible = accessible;
                  obj2.accessibilityRole = accessibilityRole;
                  obj2.accessibilityLabel = accessibilityLabel;
                  obj2.accessibilityHint = accessibilityHint;
                  obj2.accessibilityValue = accessibilityValue;
                  obj2.accessibilityState = tmp9;
                  obj2.accessibilityActions = accessibilityActions;
                  obj2.onAccessibilityAction = onAccessibilityAction;
                  obj2.accessibilityElementsHidden = accessibilityElementsHidden;
                  obj2.importantForAccessibility = importantForAccessibility;
                  obj2.pointerEvents = pointerEvents;
                  obj2.style = tmp16;
                  obj2.onPress = onPress;
                  obj2.onLongPress = onLongPress;
                  obj2.disabled = tmp6;
                  obj2.hitSlop = hitSlop;
                  obj2.children = tmp13;
                  const tmp36 = <closure_12 />;
                  cResult[11] = accessibilityActions;
                  cResult[12] = accessibilityElementsHidden;
                  cResult[13] = accessibilityHint;
                  cResult[14] = accessibilityLabel;
                  cResult[15] = tmp9;
                  cResult[16] = accessibilityValue;
                  cResult[17] = accessible;
                  cResult[18] = buttonAnimationProps;
                  cResult[19] = tmp16;
                  cResult[20] = hitSlop;
                  cResult[21] = importantForAccessibility;
                  cResult[22] = tmp6;
                  cResult[23] = onAccessibilityAction;
                  cResult[24] = onLongPress;
                  cResult[25] = onPress;
                  cResult[26] = pointerEvents;
                  cResult[27] = ref;
                  cResult[28] = accessibilityRole;
                  cResult[29] = tmp13;
                  cResult[30] = tmp36;
                  tmp30 = tmp36;
                } else {
                  if (cResult[31] === accessibilityElementsHidden) {
                    if (cResult[32] === accessibilityHint) {
                      if (cResult[33] === accessibilityLabel) {
                        let tmp18 = cResult[34];
                      }
                      let isAndroidResult = accessible;
                      if (accessible == null) {
                        isAndroidResult = PlatformUtils.isAndroid();
                        const tmpResult = PlatformUtils;
                      }
                      if (cResult[35] !== buttonAnimationProps) {
                        function ce(arg0) {
                          const onPressIn = buttonAnimationProps.onPressIn;
                          if (onPressIn != null) {
                            onPressIn(arg0);
                          }
                        }
                        function re(arg0) {
                          const onPressOut = buttonAnimationProps.onPressOut;
                          if (onPressOut != null) {
                            onPressOut(arg0);
                          }
                        }
                        cResult[35] = buttonAnimationProps;
                        cResult[36] = ce;
                        cResult[37] = re;
                        let tmp22 = re;
                        let tmp21 = ce;
                      } else {
                        tmp21 = cResult[36];
                        tmp22 = cResult[37];
                      }
                      if (cResult[38] === accessibilityElementsHidden) {
                        if (cResult[39] === buttonAnimationProps) {
                          if (cResult[40] === tmp16) {
                            if (cResult[41] === tmp18) {
                              if (cResult[42] === hitSlop) {
                                if (cResult[43] === importantForAccessibility) {
                                  if (cResult[44] === onPress) {
                                    if (cResult[45] === ref) {
                                      if (cResult[46] === tmp21) {
                                        if (cResult[47] === tmp22) {
                                          if (cResult[48] === tmp20) {
                                            if (cResult[49] === tmp13) {
                                              let tmp23 = cResult[50];
                                            }
                                            return tmp23;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj3 = {};
                      const merged1 = Object.assign(buttonAnimationProps);
                      obj3.ref = ref;
                      obj3.accessible = !isAndroidResult;
                      obj3.accessibilityRole = "none";
                      obj3.accessibilityLabel = tmp18;
                      obj3.accessibilityElementsHidden = accessibilityElementsHidden;
                      obj3.activeOpacity = 1;
                      obj3.importantForAccessibility = importantForAccessibility;
                      obj3.style = tmp16;
                      obj3.onPress = onPress;
                      obj3.onPressIn = tmp21;
                      obj3.onPressOut = tmp22;
                      obj3.hitSlop = hitSlop;
                      obj3.children = tmp13;
                      const tmp29 = <closure_13 />;
                      cResult[38] = accessibilityElementsHidden;
                      cResult[39] = buttonAnimationProps;
                      cResult[40] = tmp16;
                      cResult[41] = tmp18;
                      cResult[42] = hitSlop;
                      cResult[43] = importantForAccessibility;
                      cResult[44] = onPress;
                      cResult[45] = ref;
                      cResult[46] = tmp21;
                      cResult[47] = tmp22;
                      cResult[48] = !isAndroidResult;
                      cResult[49] = tmp13;
                      cResult[50] = tmp29;
                      tmp23 = tmp29;
                    }
                  }
                  let str3 = "";
                  if (!accessibilityElementsHidden) {
                    const items = [accessibilityLabel, accessibilityHint];
                    const found = items.filter(GlobalUtils.isNotNullish);
                    str3 = found.join(", ");
                  }
                  cResult[31] = accessibilityElementsHidden;
                  cResult[32] = accessibilityHint;
                  cResult[33] = accessibilityLabel;
                  cResult[34] = str3;
                  tmp18 = str3;
                }
              }
            }
            const items1 = [style, disabled2, animatedScaleStyles, IOS_POINTER_STYLE];
            cResult[7] = animatedScaleStyles;
            cResult[8] = style;
            cResult[9] = disabled2;
            cResult[10] = items1;
            tmp16 = items1;
          }
          let tmp14 = children;
          if (null != tmp12) {
            const obj4 = { theme: tmp12, children };
            tmp14 = jsx(native.ThemeContextProvider, { theme: tmp12, children });
          }
          cResult[4] = children;
          cResult[5] = tmp12;
          cResult[6] = tmp14;
          tmp13 = tmp14;
        }
      }
      const obj5 = {};
      const merged2 = Object.assign(accessibilityState);
      obj5.disabled = tmp6;
      obj5.busy = undefined !== loading && loading;
      cResult[0] = accessibilityState;
      cResult[1] = tmp6;
      cResult[2] = undefined !== loading && loading;
      cResult[3] = obj5;
      tmp9 = obj5;
      const tmp8 = closure_11(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
    }
  : function BaseButton(disabled) {
      ({ children, variant } = disabled);
      if (variant === undefined) {
        variant = "primary";
      }
      let flag = disabled.disabled;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = disabled.loading;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({
        pressed,
        onPress,
        onPressDisabled,
        onPressIn,
        onPressOut,
        onLayout,
        accessible,
        accessibilityRole,
        accessibilityLabel,
        accessibilityHint,
        accessibilityState,
      } = disabled);
      ({ accessibilityElementsHidden, importantForAccessibility, hitSlop, scaleAmountInPx, ref } = disabled);
      disabled = undefined;
      let buttonAnimationProps;
      ({ onLongPress, accessibilityValue, accessibilityActions, onAccessibilityAction, pointerEvents } = disabled);
      let tmp2 = flag;
      if (flag) {
        tmp2 = null == onPressDisabled;
      }
      disabled = tmp2;
      if (flag) {
        onPress = onPressDisabled;
      }
      const tmp4 = closure_11(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
      buttonAnimationProps = tmp4.buttonAnimationProps;
      const items = [accessibilityState, tmp2, flag2];
      const memo = noop.useMemo(() => {
        const obj = {};
        const merged = Object.assign(accessibilityState);
        obj.disabled = disabled;
        obj.busy = flag2;
        return obj;
      }, items);
      const tmp6 = closure_9(variant);
      let tmp7 = children;
      if (null != tmp6) {
        let obj = { theme: tmp6, children };
        tmp7 = jsx(native.ThemeContextProvider, { theme: tmp6, children });
      }
      const items1 = [disabled.style, , ,];
      if (flag) {
        flag = tmp.disabled;
      }
      items1[1] = flag;
      items1[2] = tmp4.animatedScaleStyles;
      items1[3] = IOS_POINTER_STYLE;
      if ("none" !== accessibilityRole) {
        const obj2 = {};
        let merged = Object.assign(buttonAnimationProps);
        obj2.ref = ref;
        obj2.accessible = accessible;
        if (accessibilityRole == null) {
          accessibilityRole = "button";
        }
        obj2.accessibilityRole = accessibilityRole;
        obj2.accessibilityLabel = accessibilityLabel;
        obj2.accessibilityHint = accessibilityHint;
        obj2.accessibilityValue = accessibilityValue;
        obj2.accessibilityState = memo;
        obj2.accessibilityActions = accessibilityActions;
        obj2.onAccessibilityAction = onAccessibilityAction;
        obj2.accessibilityElementsHidden = accessibilityElementsHidden;
        obj2.importantForAccessibility = importantForAccessibility;
        obj2.pointerEvents = pointerEvents;
        obj2.style = items1;
        obj2.onPress = onPress;
        obj2.onLongPress = onLongPress;
        obj2.disabled = tmp2;
        obj2.hitSlop = hitSlop;
        obj2.children = tmp7;
        return <closure_12 />;
      } else {
        let str2 = "";
        if (!accessibilityElementsHidden) {
          const items2 = [accessibilityLabel, accessibilityHint];
          const found = items2.filter(GlobalUtils.isNotNullish);
          str2 = found.join(", ");
        }
        const obj3 = {};
        const merged1 = Object.assign(buttonAnimationProps);
        obj3.ref = ref;
        let isAndroidResult = accessible;
        if (accessible == null) {
          isAndroidResult = PlatformUtils.isAndroid();
        }
        obj3.accessible = !isAndroidResult;
        obj3.accessibilityRole = "none";
        obj3.accessibilityLabel = str2;
        obj3.accessibilityElementsHidden = accessibilityElementsHidden;
        obj3.activeOpacity = 1;
        obj3.importantForAccessibility = importantForAccessibility;
        obj3.style = items1;
        obj3.onPress = onPress;
        obj3.onPressIn = function onPressIn(arg0) {
          const onPressIn = buttonAnimationProps.onPressIn;
          if (onPressIn != null) {
            onPressIn(arg0);
          }
        };
        obj3.onPressOut = function onPressOut(arg0) {
          const onPressOut = buttonAnimationProps.onPressOut;
          if (onPressOut != null) {
            onPressOut(arg0);
          }
        };
        obj3.hitSlop = hitSlop;
        obj3.children = tmp7;
        return <closure_13 />;
      }
      tmp = closure_10();
    };
