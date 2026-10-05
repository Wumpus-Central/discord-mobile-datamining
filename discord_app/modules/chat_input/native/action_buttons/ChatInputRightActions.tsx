// discord_app/modules/chat_input/native/action_buttons/ChatInputRightActions.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import ChatInputConstants from "../ChatInputConstants.tsx";
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread.tsx";
import ChatInputActionButtonTransitionItem from "ChatInputActionButtonTransitionItem.tsx";
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
const enterDelayMs = ChatInputConstants.CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  const obj = {
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP,
    },
    leftSlot: { alignItems: "center", justifyContent: "center" },
  };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP });
  return obj;
});
const forwardRef = react.forwardRef;
let ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel, arg1) => {
        let items1;
        let keyboardType;
        let onPressAction;
        let onPressExpression;
        let shouldShowGiftButton;
        let showKeyboardIcon;
        let suggestedExpressions;
        let suggestedExpressionsRef;
        let tmp10;
        let tmp11;
        let tmp13;
        let tmp9;
        let obj = channel(576);
        const cResult = obj.c(23);
        channel = channel.channel;
        ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressAction } = channel);
        ({ onPressExpression, suggestedExpressions, suggestedExpressionsRef } = channel);
        const obj2 = channel(4580);
        const token = obj2.useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const obj3 = channel(4580);
        const sum = token + 2 * obj3.useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
        dependencyMap = sum;
        const tmp7 = closure_9();
        const _slicedToArray = tmp7;
        const tmp8 = _slicedToArray(react.useState(true), 2);
        [tmp9, react] = tmp8;
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
        const imperativeHandle = react.useImperativeHandle(arg1, tmp10, tmp11);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = {};
          cResult[2] = obj5;
          tmp13 = obj5;
        } else {
          tmp13 = cResult[2];
        }
        if (cResult[3] === sum) {
          if (cResult[4] === channel) {
            if (cResult[5] === onPressAction) {
              let tmp14;
              if (cResult[6] === tmp7.leftSlot) {
                tmp14 = cResult[7];
              }
              if (cResult[8] === tmp14) {
                if (cResult[9] === shouldShowGiftButton) {
                  let tmp15;
                  let tmp23;
                  if (cResult[10] === tmp9) {
                    tmp15 = cResult[11];
                  }
                  if (cResult[12] === channel) {
                    if (cResult[13] === keyboardType) {
                      if (cResult[14] === onPressExpression) {
                        if (cResult[15] === showKeyboardIcon) {
                          if (cResult[16] === suggestedExpressions) {
                            let tmp19;
                            if (cResult[17] === suggestedExpressionsRef) {
                              tmp19 = cResult[18];
                            }
                            if (cResult[19] === tmp7.container) {
                              if (cResult[20] === tmp15) {
                                let tmp28;
                                if (cResult[21] === tmp19) {
                                  tmp28 = cResult[22];
                                }
                                return tmp28;
                              }
                            }
                            const obj6 = { style: tmp7.container, children: items1 };
                            items1 = [tmp15, tmp19];
                            const tmp31 = closure_8(View, obj6);
                            cResult[19] = tmp7.container;
                            cResult[20] = tmp15;
                            cResult[21] = tmp19;
                            cResult[22] = tmp31;
                            tmp28 = tmp31;
                          }
                        }
                      }
                    }
                  }
                  if (null != suggestedExpressions) {
                    const obj7 = {
                      ref: suggestedExpressionsRef,
                      active: keyboardType === channel(1616).KeyboardTypes.EXPRESSION,
                      showKeyboardIcon,
                      onPress: onPressExpression,
                      channel,
                    };
                    const EmojiSuggestionChatButton = tmp(12072).EmojiSuggestionChatButton;
                    const merged = Object.assign(suggestedExpressions);
                    tmp23 = closure_7(EmojiSuggestionChatButton, obj7);
                  } else {
                    const obj8 = {
                      active: keyboardType === channel(1616).KeyboardTypes.EXPRESSION,
                      showKeyboardIcon,
                      onPress: onPressExpression,
                    };
                    const tmp4Result = onPressAction(11798);
                    tmp23 = closure_7(tmp4Result, obj8);
                  }
                  cResult[12] = channel;
                  cResult[13] = keyboardType;
                  cResult[14] = onPressExpression;
                  cResult[15] = showKeyboardIcon;
                  cResult[16] = suggestedExpressions;
                  cResult[17] = suggestedExpressionsRef;
                  cResult[18] = tmp23;
                  tmp19 = tmp23;
                }
              }
              let tmp17Result = null;
              if (shouldShowGiftButton) {
                let tmp18;
                const TransitionItem = tmp(4589).TransitionItem;
                if (tmp9) {
                  tmp18 = tmp13;
                }
                const obj9 = { item: tmp18, renderItem: tmp14 };
                tmp17Result = closure_7(TransitionItem, obj9);
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
          constructor(id, arg1, state, cleanup) {
            const obj = {
              state,
              cleanup,
              channel,
              onPress: onPressAction,
              wrapperStyle: leftSlot.leftSlot,
              slotWidth: dependencyMap,
            };
            return metroImportDefault(closure_10, obj, id);
          }
        }
        cResult[3] = sum;
        cResult[4] = channel;
        cResult[5] = onPressAction;
        cResult[6] = tmp7.leftSlot;
        cResult[7] = U;
        tmp14 = U;
      }
    : (channel, arg1) => {
        let closure_4;
        let first;
        let items1;
        let keyboardType;
        let onPressAction;
        let onPressExpression;
        let shouldShowGiftButton;
        let showKeyboardIcon;
        let slotWidth;
        let suggestedExpressions;
        let suggestedExpressionsRef;
        let tmp19;
        channel = channel.channel;
        ({ keyboardType, showKeyboardIcon, onPressAction } = channel);
        ({ onPressExpression, suggestedExpressions } = channel);
        react = undefined;
        ({ shouldShowGiftButton, suggestedExpressionsRef } = channel);
        let obj = channel(4580);
        const token = obj.useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
        const obj2 = channel(4580);
        const sum = token + 2 * obj2.useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
        dependencyMap = sum;
        const tmp6 = closure_9();
        const _slicedToArray = tmp6;
        [first, react] = react.useState(true);
        const imperativeHandle = react.useImperativeHandle(
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
        const memo = react.useMemo(() => ({}), []);
        let tmp15Result = null;
        const obj3 = { style: tmp6.container, children: items1 };
        if (shouldShowGiftButton) {
          let tmp16;
          const TransitionItem = tmp(4589).TransitionItem;
          if (first) {
            tmp16 = memo;
          }
          const obj4 = { item: tmp16, renderItem: tmp11 };
          tmp15Result = closure_7(TransitionItem, obj4);
        }
        items1 = [tmp15Result];
        if (null != suggestedExpressions) {
          const obj5 = {
            ref: suggestedExpressionsRef,
            active: keyboardType === channel(1616).KeyboardTypes.EXPRESSION,
            showKeyboardIcon,
            onPress: onPressExpression,
            channel,
          };
          const EmojiSuggestionChatButton = tmp(12072).EmojiSuggestionChatButton;
          const merged = Object.assign(suggestedExpressions);
          tmp19 = closure_7(EmojiSuggestionChatButton, obj5);
        } else {
          const obj6 = {
            active: keyboardType === channel(1616).KeyboardTypes.EXPRESSION,
            showKeyboardIcon,
            onPress: onPressExpression,
          };
          const tmp3Result = onPressAction(11798);
          tmp19 = closure_7(tmp3Result, obj6);
        }
        items1[1] = tmp19;
        return closure_8(View, obj3);
      },
);
forwardRefResult.displayName = "ChatInputRightActions";
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let animatedStyle;
      let channel;
      let cleanup;
      let isInteractive;
      let onPress;
      let slotWidth;
      let state;
      let wrapperStyle;
      const obj = react2;
      const cResult = obj.c(19);
      ({ state, cleanup, channel, onPress, slotWidth, wrapperStyle } = arg0);
      const tmp4 = state !== native.TransitionStates.YEETED;
      const tmp5 = state !== native.TransitionStates.ENTERED;
      if (cResult[0] === cleanup) {
        if (cResult[1] === tmp4) {
          let tmp6;
          let tmp9;
          if (cResult[2] === tmp5) {
            tmp6 = cResult[3];
          }
          ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(tmp6));
          useChatInputFloatingBounceDefault(tmp6);
          if (cResult[4] !== slotWidth) {
            const obj2 = { width: slotWidth };
            cResult[4] = slotWidth;
            cResult[5] = obj2;
            tmp9 = obj2;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] === animatedStyle) {
            if (cResult[7] === tmp9) {
              let tmp10;
              let tmp11;
              if (cResult[8] === wrapperStyle) {
                tmp10 = cResult[9];
              }
              if (cResult[10] !== isInteractive) {
                const tmpResult = ChatInputActionButtonTransitionItem;
                const interactivityPropsResult = tmpResult.interactivityProps(isInteractive);
                cResult[10] = isInteractive;
                cResult[11] = interactivityPropsResult;
                tmp11 = interactivityPropsResult;
              } else {
                tmp11 = cResult[11];
              }
              if (cResult[12] === channel) {
                let tmp13;
                if (cResult[13] === onPress) {
                  tmp13 = cResult[14];
                }
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp11) {
                    let tmp16;
                    if (cResult[17] === tmp13) {
                      tmp16 = cResult[18];
                    }
                    return tmp16;
                  }
                }
                const obj3 = { style: tmp10, children: tmp13 };
                View = ReanimatedRexportDefault.View;
                const merged = Object.assign(tmp11);
                const tmp21 = metroImportDefault(View, obj3);
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
              const tmp15 = metroImportDefault(ChatInputActionButtonGiftOrThreadDefault, obj4);
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
      let animatedStyle;
      let channel;
      let cleanup;
      let isInteractive;
      let items;
      let onPress;
      let slotWidth;
      let wrapperStyle;
      state = state.state;
      ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
      const YEETED = native.TransitionStates.YEETED;
      const obj = {
        visible: state !== YEETED,
        initiallyVisible: state !== native.TransitionStates.ENTERED,
        enterDelayMs,
        onExitComplete: cleanup,
      };
      ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(obj));
      const obj2 = {
        style: items,
        children: metroImportDefault(ChatInputActionButtonGiftOrThreadDefault, {
          canStartThreads: false,
          channel,
          onPress,
          styleButton: "Set",
          shouldShowThread:
            "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z",
        }),
      };
      items = [wrapperStyle, { width: slotWidth }, animatedStyle];
      useChatInputFloatingBounceDefault(obj);
      View = ReanimatedRexportDefault.View;
      const obj3 = ChatInputActionButtonTransitionItem;
      const merged = Object.assign(obj3.interactivityProps(isInteractive));
      return metroImportDefault(View, obj2);
    };
const memoResult = react.memo(forwardRefResult);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default memoResult;
