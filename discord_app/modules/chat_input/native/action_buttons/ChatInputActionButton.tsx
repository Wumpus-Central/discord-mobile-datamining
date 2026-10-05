// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButton.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((height, marginHorizontal) => {
  let size1;
  const obj = {
    actionButton: size,
    actionButtonIcon: size1,
    actionButtonIconActive: { tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT },
    actionButtonIconDisabled: { tintColor: nativeDefault.colors.ICON_MUTED },
  };
  size = {
    borderRadius: nativeDefault.radii.sm,
    height,
    width: height,
    marginHorizontal,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  size1 = {
    tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT,
    width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE,
    height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE,
  };
  ({ tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT });
  ({ tintColor: nativeDefault.colors.ICON_MUTED });
  return obj;
});
const forwardRef = react.forwardRef;
const memoResult = react.memo(
  forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (arg0, ref) => {
          let IconComponent;
          let accessibilityActions;
          let accessibilityHint;
          let accessibilityLabel;
          let accessibilityState;
          let accessible;
          let active;
          let activeIconStyle;
          let activeStyle;
          let disabled;
          let onAccessibilityAction;
          let onPress;
          let style;
          const obj = react2;
          const cResult = obj.c(28);
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
          } = arg0);
          let tmp4 = undefined !== active;
          ({ activeStyle, activeIconStyle } = arg0);
          if (tmp4) {
            tmp4 = active;
          }
          const tmpResult = useToken;
          const token = tmpResult.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
          const tmpResult3 = useToken;
          const token1 = tmpResult3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
          const tmpResult4 = useToken;
          const token2 = tmpResult4.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
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
          if (cResult[0] === style) {
            if (cResult[1] === tmp8.actionButton) {
              let tmp14;
              if (cResult[2] === (tmp4 && !disabled && activeStyle)) {
                tmp14 = cResult[3];
              }
              if (cResult[4] === accessibilityState) {
                let tmp16;
                if (cResult[5] === disabled) {
                  tmp16 = cResult[6];
                }
                if (tmp4) {
                  tmp4 = activeIconStyle;
                }
                if (cResult[7] === tmp8.actionButtonIcon) {
                  if (cResult[8] === (tmp4 && tmp8.actionButtonIconActive)) {
                    if (cResult[9] === tmp4) {
                      let tmp22;
                      if (cResult[10] === (disabled && tmp8.actionButtonIconDisabled)) {
                        tmp22 = cResult[11];
                      }
                      if (cResult[12] === IconComponent) {
                        let tmp23;
                        if (cResult[13] === tmp22) {
                          tmp23 = cResult[14];
                        }
                        if (cResult[15] === accessibilityActions) {
                          if (cResult[16] === accessibilityHint) {
                            if (cResult[17] === accessibilityLabel) {
                              if (cResult[18] === accessible) {
                                if (cResult[19] === disabled) {
                                  if (cResult[20] === onAccessibilityAction) {
                                    if (cResult[21] === onPress) {
                                      if (cResult[22] === ref) {
                                        if (cResult[23] === tmp23) {
                                          if (cResult[24] === tmp14) {
                                            if (cResult[25] === tmp15) {
                                              let tmp27;
                                              if (cResult[26] === tmp16) {
                                                tmp27 = cResult[27];
                                              }
                                              return tmp27;
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
                        const tmp29 = jsx(Pressables.PressableOpacity, {
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
                          children: tmp23,
                        });
                        cResult[15] = accessibilityActions;
                        cResult[16] = accessibilityHint;
                        cResult[17] = accessibilityLabel;
                        cResult[18] = accessible;
                        cResult[19] = disabled;
                        cResult[20] = onAccessibilityAction;
                        cResult[21] = onPress;
                        cResult[22] = ref;
                        cResult[23] = tmp23;
                        cResult[24] = tmp14;
                        cResult[25] = tmp15;
                        cResult[26] = tmp16;
                        cResult[27] = tmp29;
                        tmp27 = tmp29;
                      }
                      const tmp25 = <IconComponent size="custom" style={tmp22} />;
                      cResult[12] = IconComponent;
                      cResult[13] = tmp22;
                      cResult[14] = tmp25;
                      tmp23 = tmp25;
                    }
                  }
                }
                const items = [
                  tmp8.actionButtonIcon,
                  tmp4 && tmp8.actionButtonIconActive,
                  tmp4,
                  disabled && tmp8.actionButtonIconDisabled,
                ];
                cResult[7] = tmp8.actionButtonIcon;
                cResult[8] = tmp4 && tmp8.actionButtonIconActive;
                cResult[9] = tmp4;
                cResult[10] = disabled && tmp8.actionButtonIconDisabled;
                cResult[11] = items;
                tmp22 = items;
              }
              const obj4 = { disabled };
              const merged = Object.assign(accessibilityState);
              cResult[4] = accessibilityState;
              cResult[5] = disabled;
              cResult[6] = obj4;
              tmp16 = obj4;
            }
          }
          const items1 = [tmp8.actionButton, style, tmp4 && !disabled && activeStyle];
          cResult[0] = style;
          cResult[1] = tmp8.actionButton;
          cResult[2] = tmp4 && !disabled && activeStyle;
          cResult[3] = items1;
          tmp14 = items1;
        }
      : (active, ref) => {
          let IconComponent;
          let accessibilityActions;
          let accessibilityHint;
          let accessibilityLabel;
          let accessibilityState;
          let accessible;
          let activeIconStyle;
          let activeStyle;
          let disabled;
          let onAccessibilityAction;
          let onPress;
          let style;
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
          } = active);
          const obj = useToken;
          const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
          const obj2 = useToken;
          const token1 = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
          const obj3 = useToken;
          const token2 = obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
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
          const items = [tmp6.actionButton, style];
          let tmp12 = flag;
          const PressableOpacity = Pressables.PressableOpacity;
          if (flag) {
            tmp12 = !disabled;
          }
          if (tmp12) {
            tmp12 = activeStyle;
          }
          items[2] = tmp12;
          let tmp13;
          if (bound > 0) {
            tmp13 = bound;
          }
          const obj5 = { disabled };
          const merged = Object.assign(accessibilityState);
          const items1 = [tmp6.actionButtonIcon, flag && tmp6.actionButtonIconActive, ,];
          if (flag) {
            flag = activeIconStyle;
          }
          items1[2] = flag;
          if (disabled) {
            disabled = tmp6.actionButtonIconDisabled;
          }
          items1[3] = disabled;
          return (
            <PressableOpacity
              ref={ref}
              style={items}
              hitSlop={tmp13}
              disabled={disabled}
              accessible={accessible}
              accessibilityRole="button"
              accessibilityState={obj5}
              accessibilityLabel={accessibilityLabel}
              accessibilityHint={accessibilityHint}
              accessibilityActions={accessibilityActions}
              onAccessibilityAction={onAccessibilityAction}
              onPress={onPress}
            >
              {null}
            </PressableOpacity>
          );
        },
  ),
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButton.tsx");

export default memoResult;
