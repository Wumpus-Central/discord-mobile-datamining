// discord_app/modules/chat_input/native/action_buttons/ChatInputRightActions.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread.tsx";
import ChatInputActionButtonTransitionItem from "ChatInputActionButtonTransitionItem.tsx";
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const enterDelayMs = fn(11576).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles(() => {
  const obj = {
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP,
    },
    leftSlot: { alignItems: "center", justifyContent: "center" },
  };
  return obj;
});
let ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel, arg1) => {
        let merged = dependencyMap;
        const cResult = channel(576).c(23);
        channel = channel.channel;
        ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressAction } = channel);
        ({ onPressExpression, suggestedExpressions, suggestedExpressionsRef } = channel);
        const obj = channel(576);
        const token = channel(4580).useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const obj2 = channel(4580);
        const sum =
          token + 2 * channel(4580).useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
        dependencyMap = sum;
        const tmp7 = closure_9();
        const _slicedToArray = tmp7;
        const obj3 = channel(4580);
        [tmp9, noop] = noop.useState(true);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function h() {
            return {
              onDismissActions() {
                return closure_1_4(false);
              },
              onShowActions() {
                return closure_1_4(true);
              },
            };
          };
          const items = [];
          cResult[0] = fn;
          cResult[1] = items;
          tmp10 = fn;
          tmp11 = items;
        } else {
          [tmp10, tmp11] = cResult;
        }
        const imperativeHandle = noop.useImperativeHandle(arg1, tmp10, tmp11);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = {};
          cResult[2] = obj5;
          let tmp13 = obj5;
        } else {
          tmp13 = cResult[2];
        }
        if (cResult[3] === sum) {
          if (cResult[4] === channel) {
            if (cResult[5] === onPressAction) {
              if (cResult[6] === tmp7.leftSlot) {
                let tmp14 = cResult[7];
              }
              if (cResult[8] === tmp14) {
                if (cResult[9] === shouldShowGiftButton) {
                  if (cResult[10] === tmp9) {
                    let tmp15 = cResult[11];
                  }
                  if (cResult[12] === channel) {
                    if (cResult[13] === keyboardType) {
                      if (cResult[14] === onPressExpression) {
                        if (cResult[15] === showKeyboardIcon) {
                          if (cResult[16] === suggestedExpressions) {
                            if (cResult[17] === suggestedExpressionsRef) {
                              if (cResult[19] === tmp7.container) {
                                if (cResult[20] === tmp15) {
                                  if (cResult[21] === tmp19) {
                                    let tmp28 = cResult[22];
                                  }
                                  return tmp28;
                                }
                              }
                              const obj6 = { style: tmp7.container, children: null };
                              const items1 = [tmp15, cResult[18]];
                              obj6.children = items1;
                              const tmp31 = closure_8(View, obj6);
                              cResult[19] = tmp7.container;
                              cResult[20] = tmp15;
                              cResult[21] = cResult[18];
                              cResult[22] = tmp31;
                              tmp28 = tmp31;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (null != suggestedExpressions) {
                    const obj7 = {
                      ref: suggestedExpressionsRef,
                      active: keyboardType === tmp(1616).KeyboardTypes.EXPRESSION,
                      showKeyboardIcon,
                      onPress: onPressExpression,
                      channel,
                    };
                    merged = Object.assign(suggestedExpressions);
                    let tmp23 = closure_7(tmp(12072).EmojiSuggestionChatButton, obj7);
                  } else {
                    const obj8 = {
                      active: keyboardType === tmp(1616).KeyboardTypes.EXPRESSION,
                      showKeyboardIcon,
                      onPress: onPressExpression,
                    };
                    tmp23 = closure_7(onPressAction(11798), obj8);
                    const tmp4Result = onPressAction(11798);
                  }
                  cResult[12] = channel;
                  cResult[13] = keyboardType;
                  cResult[14] = onPressExpression;
                  cResult[15] = showKeyboardIcon;
                  cResult[16] = suggestedExpressions;
                  cResult[17] = suggestedExpressionsRef;
                  cResult[18] = tmp23;
                }
              }
              let tmp17Result = null;
              if (shouldShowGiftButton) {
                let tmp18;
                if (tmp9) {
                  tmp18 = tmp13;
                }
                const obj9 = { item: tmp18, renderItem: tmp14 };
                tmp17Result = closure_7(tmp(4589).TransitionItem, obj9);
              }
              cResult[8] = tmp14;
              cResult[9] = shouldShowGiftButton;
              cResult[10] = tmp9;
              cResult[11] = tmp17Result;
              tmp15 = tmp17Result;
            }
          }
        }
        class U {
          constructor(arg0, arg1, arg2, arg3) {
            obj = {
              state: arg2,
              cleanup: arg3,
              channel,
              onPress: onPressAction,
              wrapperStyle: closure_3.leftSlot,
              slotWidth: closure_2,
            };
            return jsx(f60135, obj, channel);
          }
        }
        cResult[3] = sum;
        cResult[4] = channel;
        cResult[5] = onPressAction;
        cResult[6] = tmp7.leftSlot;
        cResult[7] = U;
        tmp14 = U;
        const tmp8 = _slicedToArray(noop.useState(true), 2);
      }
    : (channel, arg1) => {
        channel = channel.channel;
        ({ keyboardType, showKeyboardIcon, onPressAction } = channel);
        ({ onPressExpression, suggestedExpressions } = channel);
        noop = undefined;
        ({ shouldShowGiftButton, suggestedExpressionsRef } = channel);
        const token = channel(4580).useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const obj = channel(4580);
        const sum =
          token + 2 * channel(4580).useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
        dependencyMap = sum;
        const tmp6 = closure_9();
        const _slicedToArray = tmp6;
        const tmp7 = _slicedToArray(noop.useState(true), 2);
        noop = tmp7[1];
        const imperativeHandle = noop.useImperativeHandle(
          arg1,
          () => ({
            onDismissActions() {
              return closure_1_4(false);
            },
            onShowActions() {
              return closure_1_4(true);
            },
          }),
          [],
        );
        const items = [channel, onPressAction, sum, tmp6.leftSlot];
        const memo = noop.useMemo(() => ({}), []);
        const obj3 = { style: tmp6.container, children: null };
        let tmp14Result = null;
        if (shouldShowGiftButton) {
          let tmp15;
          if (tmp7[0]) {
            tmp15 = memo;
          }
          const obj4 = { item: tmp15, renderItem: tmp10 };
          tmp14Result = closure_7(tmp(4589).TransitionItem, obj4);
        }
        const items1 = [tmp14Result];
        if (null != suggestedExpressions) {
          const obj5 = {
            ref: suggestedExpressionsRef,
            active: keyboardType === tmp(1616).KeyboardTypes.EXPRESSION,
            showKeyboardIcon,
            onPress: onPressExpression,
            channel,
          };
          const merged = Object.assign(suggestedExpressions);
          let tmp18 = closure_7(tmp(12072).EmojiSuggestionChatButton, obj5);
        } else {
          const obj6 = {
            active: keyboardType === tmp(1616).KeyboardTypes.EXPRESSION,
            showKeyboardIcon,
            onPress: onPressExpression,
          };
          tmp18 = closure_7(onPressAction(11798), obj6);
          const tmp3Result = onPressAction(11798);
        }
        items1[1] = tmp18;
        obj3.children = items1;
        return closure_8(View, obj3);
      },
);
forwardRefResult.displayName = "ChatInputRightActions";
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(19);
      ({ state, cleanup, channel, onPress, slotWidth, wrapperStyle } = arg0);
      const tmp4 = state !== native.TransitionStates.YEETED;
      const tmp5 = state !== native.TransitionStates.ENTERED;
      if (cResult[0] === cleanup) {
        if (cResult[1] === tmp4) {
          if (cResult[2] === tmp5) {
            let tmp6 = cResult[3];
          }
          ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(tmp6));
          if (cResult[4] !== slotWidth) {
            const obj2 = { width: slotWidth };
            cResult[4] = slotWidth;
            cResult[5] = obj2;
            let tmp9 = obj2;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] === animatedStyle) {
            if (cResult[7] === tmp9) {
              if (cResult[8] === wrapperStyle) {
                let tmp10 = cResult[9];
              }
              if (cResult[10] !== isInteractive) {
                const interactivityPropsResult = ChatInputActionButtonTransitionItem.interactivityProps(isInteractive);
                cResult[10] = isInteractive;
                cResult[11] = interactivityPropsResult;
                let tmp11 = interactivityPropsResult;
                const tmpResult = ChatInputActionButtonTransitionItem;
              } else {
                tmp11 = cResult[11];
              }
              if (cResult[12] === channel) {
                if (cResult[13] === onPress) {
                  let tmp13 = cResult[14];
                }
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp11) {
                    if (cResult[17] === tmp13) {
                      let tmp16 = cResult[18];
                    }
                    return tmp16;
                  }
                }
                const obj3 = { style: tmp10 };
                const merged = Object.assign(tmp11);
                obj3.children = tmp13;
                const tmp21 = React5(ReanimatedRexportDefault.View, obj3);
                cResult[15] = tmp10;
                cResult[16] = tmp11;
                cResult[17] = tmp13;
                cResult[18] = tmp21;
                tmp16 = tmp21;
              }
              const obj4 = {
                canStartThreads: false,
                channel,
                onPress,
                styleButton: "Set",
                shouldShowThread:
                  "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z",
              };
              const tmp15 = React5(ChatInputActionButtonGiftOrThreadDefault, obj4);
              cResult[12] = channel;
              cResult[13] = onPress;
              cResult[14] = tmp15;
              tmp13 = tmp15;
            }
          }
          const items = [wrapperStyle, tmp9, animatedStyle];
          cResult[6] = animatedStyle;
          cResult[7] = tmp9;
          cResult[8] = wrapperStyle;
          cResult[9] = items;
          tmp10 = items;
          const tmp8 = useChatInputFloatingBounceDefault(tmp6);
        }
      }
      const obj5 = { visible: tmp4, initiallyVisible: tmp5, enterDelayMs, onExitComplete: cleanup };
      cResult[0] = cleanup;
      cResult[1] = tmp4;
      cResult[2] = tmp5;
      cResult[3] = obj5;
      tmp6 = obj5;
    }
  : (state) => {
      state = state.state;
      ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
      const obj = {
        visible: state !== native.TransitionStates.YEETED,
        initiallyVisible: state !== native.TransitionStates.ENTERED,
        enterDelayMs,
        onExitComplete: cleanup,
      };
      ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault({
        visible: state !== native.TransitionStates.YEETED,
        initiallyVisible: state !== native.TransitionStates.ENTERED,
        enterDelayMs,
        onExitComplete: cleanup,
      }));
      const obj2 = { style: null };
      const items = [wrapperStyle, { width: slotWidth }, animatedStyle];
      obj2.style = items;
      const tmp = useChatInputFloatingBounceDefault({
        visible: state !== native.TransitionStates.YEETED,
        initiallyVisible: state !== native.TransitionStates.ENTERED,
        enterDelayMs,
        onExitComplete: cleanup,
      });
      const merged = Object.assign(ChatInputActionButtonTransitionItem.interactivityProps(isInteractive));
      obj2.children = React5(ChatInputActionButtonGiftOrThreadDefault, {
        canStartThreads: false,
        channel,
        onPress,
        styleButton: "Set",
        shouldShowThread:
          "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z",
      });
      return React5(ReanimatedRexportDefault.View, obj2);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default noop.memo(forwardRefResult);
