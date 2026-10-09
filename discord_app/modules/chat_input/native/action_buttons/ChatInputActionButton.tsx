// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles((height, marginHorizontal) => {
  const obj = {
    actionButton: null,
    actionButtonIcon: null,
    actionButtonIconActive: null,
    actionButtonIconDisabled: null,
  };
  const size = {
    borderRadius: nativeDefault.radii.sm,
    height,
    width: height,
    marginHorizontal,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  obj.actionButton = size;
  const size1 = {
    tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT,
    width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE,
    height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE,
  };
  obj.actionButtonIcon = size1;
  obj.actionButtonIconActive = { tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  const obj2 = { tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  obj.actionButtonIconDisabled = { tintColor: nativeDefault.colors.ICON_MUTED };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function Button(arg0) {
        const cResult = c.c(28);
        ({
          active,
          style,
          disabled,
          onPress,
          accessible,
          accessibilityLabel,
          accessibilityHint,
          accessibilityState,
          accessibilityActions,
          onAccessibilityAction,
          IconComponent,
          ref,
        } = arg0);
        let tmp4 = undefined !== active;
        ({ activeStyle, activeIconStyle } = arg0);
        if (tmp4) {
          tmp4 = active;
        }
        const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const tmpResult = useToken;
        const token1 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
        const tmpResult3 = useToken;
        const token2 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
        const tmp8 = closure_5(token, token1);
        const flattenResult = StyleSheet.flatten(style);
        let height;
        if (flattenResult != null) {
          height = flattenResult.height;
        }
        let tmp11 = token;
        if (typeof height === "number") {
          tmp11 = height;
        }
        const bound = Math.max(0, (token2 - tmp11) / 2);
        let tmp13 = tmp4;
        if (tmp4) {
          tmp13 = !disabled;
        }
        if (tmp13) {
          tmp13 = activeStyle;
        }
        if (cResult[0] === style) {
          if (cResult[1] === tmp8.actionButton) {
            if (cResult[2] === tmp13) {
              let tmp14 = cResult[3];
            }
            if (cResult[4] === accessibilityState) {
              if (cResult[5] === disabled) {
                let tmp16 = cResult[6];
              }
              let actionButtonIconActive = tmp4;
              if (tmp4) {
                actionButtonIconActive = tmp8.actionButtonIconActive;
              }
              if (tmp4) {
                tmp4 = activeIconStyle;
              }
              let actionButtonIconDisabled = disabled;
              if (disabled) {
                actionButtonIconDisabled = tmp8.actionButtonIconDisabled;
              }
              if (cResult[7] === tmp8.actionButtonIcon) {
                if (cResult[8] === actionButtonIconActive) {
                  if (cResult[9] === tmp4) {
                    if (cResult[10] === actionButtonIconDisabled) {
                      let tmp20 = cResult[11];
                    }
                    if (cResult[12] === IconComponent) {
                      if (cResult[13] === tmp20) {
                        let tmp21 = cResult[14];
                      }
                      if (cResult[15] === accessibilityActions) {
                        if (cResult[16] === accessibilityHint) {
                          if (cResult[17] === accessibilityLabel) {
                            if (cResult[18] === accessible) {
                              if (cResult[19] === disabled) {
                                if (cResult[20] === onAccessibilityAction) {
                                  if (cResult[21] === onPress) {
                                    if (cResult[22] === ref) {
                                      if (cResult[23] === tmp21) {
                                        if (cResult[24] === tmp14) {
                                          if (cResult[25] === tmp15) {
                                            if (cResult[26] === tmp16) {
                                              let tmp24 = cResult[27];
                                            }
                                            return tmp24;
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
                      const obj2 = {
                        ref,
                        style: tmp14,
                        hitSlop: tmp15,
                        disabled,
                        accessible,
                        accessibilityRole: "button",
                        accessibilityState: tmp16,
                        accessibilityLabel,
                        accessibilityHint,
                        accessibilityActions,
                        onAccessibilityAction,
                        onPress,
                        children: tmp21,
                      };
                      const tmp26 = jsx(Pressables.PressableOpacity, {
                        ref,
                        style: tmp14,
                        hitSlop: tmp15,
                        disabled,
                        accessible,
                        accessibilityRole: "button",
                        accessibilityState: tmp16,
                        accessibilityLabel,
                        accessibilityHint,
                        accessibilityActions,
                        onAccessibilityAction,
                        onPress,
                        children: tmp21,
                      });
                      cResult[15] = accessibilityActions;
                      cResult[16] = accessibilityHint;
                      cResult[17] = accessibilityLabel;
                      cResult[18] = accessible;
                      cResult[19] = disabled;
                      cResult[20] = onAccessibilityAction;
                      cResult[21] = onPress;
                      cResult[22] = ref;
                      cResult[23] = tmp21;
                      cResult[24] = tmp14;
                      cResult[25] = tmp15;
                      cResult[26] = tmp16;
                      cResult[27] = tmp26;
                      tmp24 = tmp26;
                    }
                    const obj3 = { size: "custom", style: tmp20 };
                    const tmp23 = <IconComponent size="custom" style={tmp20} />;
                    cResult[12] = IconComponent;
                    cResult[13] = tmp20;
                    cResult[14] = tmp23;
                    tmp21 = tmp23;
                  }
                }
              }
              const items = [tmp8.actionButtonIcon, actionButtonIconActive, tmp4, actionButtonIconDisabled];
              cResult[7] = tmp8.actionButtonIcon;
              cResult[8] = actionButtonIconActive;
              cResult[9] = tmp4;
              cResult[10] = actionButtonIconDisabled;
              cResult[11] = items;
              tmp20 = items;
            }
            const obj4 = { disabled };
            const merged = Object.assign(accessibilityState);
            cResult[4] = accessibilityState;
            cResult[5] = disabled;
            cResult[6] = obj4;
            tmp16 = obj4;
          }
        }
        const items1 = [tmp8.actionButton, style, tmp13];
        cResult[0] = style;
        cResult[1] = tmp8.actionButton;
        cResult[2] = tmp13;
        cResult[3] = items1;
        tmp14 = items1;
        const tmpResult4 = useToken;
      }
    : function Button(active) {
        let flag = active.active;
        if (flag === undefined) {
          flag = false;
        }
        ({
          style,
          disabled,
          accessibilityState,
          activeStyle,
          activeIconStyle,
          onPress,
          accessible,
          accessibilityLabel,
          accessibilityHint,
          accessibilityActions,
          onAccessibilityAction,
          IconComponent,
          ref,
        } = active);
        const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const token1 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
        const token2 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
        const tmp6 = closure_5(token, token1);
        const flattenResult = StyleSheet.flatten(style);
        let height;
        if (flattenResult != null) {
          height = flattenResult.height;
        }
        let tmp9 = token;
        if (typeof height === "number") {
          tmp9 = height;
        }
        const bound = Math.max(0, (token2 - tmp9) / 2);
        const obj4 = {
          ref,
          style: null,
          hitSlop: null,
          disabled: null,
          accessible: null,
          accessibilityRole: "button",
          accessibilityState: null,
          accessibilityLabel: null,
          accessibilityHint: null,
          accessibilityActions: null,
          onAccessibilityAction: null,
          onPress: null,
          children: null,
        };
        const items = [tmp6.actionButton, style];
        let tmp12 = flag;
        if (flag) {
          tmp12 = !disabled;
        }
        if (tmp12) {
          tmp12 = activeStyle;
        }
        items[2] = tmp12;
        obj4.style = items;
        let tmp13;
        if (bound > 0) {
          tmp13 = bound;
        }
        obj4.hitSlop = tmp13;
        obj4.disabled = disabled;
        obj4.accessible = accessible;
        const merged = Object.assign(accessibilityState);
        obj4.accessibilityState = { disabled };
        obj4.accessibilityLabel = accessibilityLabel;
        obj4.accessibilityHint = accessibilityHint;
        obj4.accessibilityActions = accessibilityActions;
        obj4.onAccessibilityAction = onAccessibilityAction;
        obj4.onPress = onPress;
        const items1 = [tmp6.actionButtonIcon, , ,];
        let actionButtonIconActive = flag;
        if (flag) {
          actionButtonIconActive = tmp6.actionButtonIconActive;
        }
        items1[1] = actionButtonIconActive;
        if (flag) {
          flag = activeIconStyle;
        }
        items1[2] = flag;
        if (disabled) {
          disabled = tmp6.actionButtonIconDisabled;
        }
        items1[3] = disabled;
        obj4.children = <IconComponent size="custom" style={items1} />;
        return jsx(Pressables.PressableOpacity, {
          ref,
          style: null,
          hitSlop: null,
          disabled: null,
          accessible: null,
          accessibilityRole: "button",
          accessibilityState: null,
          accessibilityLabel: null,
          accessibilityHint: null,
          accessibilityActions: null,
          onAccessibilityAction: null,
          onPress: null,
          children: null,
        });
      },
);
