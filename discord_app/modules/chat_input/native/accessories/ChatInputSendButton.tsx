// === Module 11884: ChatInputSendButton ===

// Module 11884 (ChatInputSendButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useToken from "useToken" /* 4580 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import SendMessageIcon from "SendMessageIcon" /* 4841 */;
import ChatInputConstants from "ChatInputConstants" /* 11576 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11868 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11876 */;
import VoiceMessageButtonDefault from "VoiceMessageButton" /* 11885 */;
import useChatInputFloatingWidthDefault from "useChatInputFloatingWidth" /* 11889 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import SlowmodeStore from "SlowmodeStore" /* 7171 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let channel, dependencyMap;

function renderChatInputSendButton(type, arg1, state, cleanup) {
  const merged = Object.assign(arg1);
  return <closure_12 key={type} type={type} state={state} cleanup={cleanup} />;
}
function getChatInputSendButtonItemKey(sendVoiceMessageEnabled) {
  let tmp3;
  if (sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    tmp3 = sendVoiceMessageEnabled.isOnCooldown ? constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED : constants.BUTTON_SEND_VOICE_MESSAGE;
  } else {
    tmp3 = tmp ? constants.BUTTON_SEND : constants.BUTTON_SEND_DISABLED;
  }
  return tmp3;
}
let react = react_mod;
const View = react_native.View;
let closure_8 = ChatInputConstants.CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsx = Fragment.jsx;
const constants = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
let closure_11 = createStyles.createStyles((width, height) => {
  const obj = { button: size, buttonActive: { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND }, iconActive: { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT } };
  size = { width, height };
  ({ backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND });
  ({ tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT });
  return obj;
});
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let cleanup;
  let isOnCooldown;
  let onSendMessage;
  let sendEnabled;
  let state;
  let tmp9Result;
  let type;
  let withBounce;
  const obj = react2;
  const cResult = obj.c(13);
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, type, withBounce } = arg0);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const obj3 = useToken;
  const tmp6 = closure_11(token, obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  let num = 0;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num = closure_8;
  }
  if (cResult[0] === channelId) {
    if (cResult[1] === isOnCooldown) {
      if (cResult[2] === (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED)) {
        if (cResult[3] === onSendMessage) {
          if (cResult[4] === sendEnabled) {
            let tmp8;
            if (cResult[5] === tmp6) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === num) {
              if (cResult[8] === cleanup) {
                if (cResult[9] === state) {
                  if (cResult[10] === tmp8) {
                    let tmp12;
                    if (cResult[11] === withBounce) {
                      tmp12 = cResult[12];
                    }
                    return tmp12;
                  }
                }
              }
            }
            const tmp14 = jsx(ChatInputActionButtonTransitionItemDefault, { cleanup, state, withBounce, bounceEnterDelayMs: num, children: tmp8 });
            cResult[7] = num;
            cResult[8] = cleanup;
            cResult[9] = state;
            cResult[10] = tmp8;
            cResult[11] = withBounce;
            cResult[12] = tmp14;
            tmp12 = tmp14;
          }
        }
      }
    }
  }
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    tmp9Result = jsx(VoiceMessageButtonDefault, { disabled: isOnCooldown, channelId });
  } else {
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp6);
    ChatInputActionButtonDefault;
    const intl = intl2.intl;
    tmp9Result = <tmp4Result active style={null} activeStyle={null} activeIconStyle={null} IconComponent={SendMessageIcon.SendMessageIcon} accessibilityLabel={intl.string(intl2.t.TXNS7S)} onPress={onSendMessage} disabled={!sendEnabled} />;
  }
  cResult[0] = channelId;
  cResult[1] = isOnCooldown;
  cResult[2] = type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
  cResult[3] = onSendMessage;
  cResult[4] = sendEnabled;
  cResult[5] = tmp6;
  cResult[6] = tmp9Result;
  tmp8 = tmp9Result;
}) : ((type) => {
  let channelId;
  let cleanup;
  let isOnCooldown;
  let onSendMessage;
  let sendEnabled;
  let state;
  let tmp7Result;
  let withBounce;
  type = type.type;
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, withBounce } = type);
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let num = 0;
  const obj2 = useToken;
  const tmp5 = closure_11(token, obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num = closure_8;
  }
  ChatInputActionButtonTransitionItemDefault;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    tmp7Result = jsx(VoiceMessageButtonDefault, { disabled: isOnCooldown, channelId });
  } else {
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp5);
    ChatInputActionButtonDefault;
    const intl = intl2.intl;
    tmp7Result = <tmp3Result2 active style={null} activeStyle={null} activeIconStyle={null} IconComponent={SendMessageIcon.SendMessageIcon} accessibilityLabel={intl.string(intl2.t.TXNS7S)} onPress={onSendMessage} disabled={!sendEnabled} />;
  }
  return <tmp3Result cleanup={cleanup} state={state} withBounce={withBounce} bounceEnterDelayMs={num}>{tmp7Result}</tmp3Result>;
}));
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1) => {
  let canSendVoiceMessage;
  let defaultValue;
  let hasPendingAttachments;
  let hasPendingEdit;
  let onSendMessage;
  let requireTextContent;
  let setHasText;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp9;
  let useReducedMotion;
  const obj = channel(576);
  const cResult = obj.c(34);
  channel = channel.channel;
  ({ canSendVoiceMessage, onSendMessage, requireTextContent } = channel);
  let tmp4 = undefined !== requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (tmp4) {
    tmp4 = requireTextContent;
  }
  const tmpResult = channel(4580);
  const token = tmpResult.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmpResult5 = channel(4580);
  const token1 = tmpResult5.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmpResult6 = channel(4580);
  const token2 = tmpResult6.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const tmp8 = closure_11(token, token1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class I {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult7 = channel(504);
  const stateFromStores = tmpResult7.useStateFromStores(tmp9, I);
  [tmp14, importDefault] = react.useState(defaultValue.length > 0);
  _slicedToArray(react.useState(defaultValue.length > 0), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SlowmodeStore];
    class I {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    tmp15 = items1;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] !== channel) {
    const fn = function f() {
      return SlowmodeStore.isChannelOnCooldown(channel);
    };
    const items2 = [channel];
    class I {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[3] = channel;
    cResult[4] = fn;
    cResult[5] = items2;
    tmp18 = items2;
    tmp17 = fn;
  } else {
    tmp17 = cResult[4];
    tmp18 = cResult[5];
  }
  const tmpResult8 = channel(504);
  const stateFromStores1 = tmpResult8.useStateFromStores(tmp15, tmp17, tmp18);
  let tmp20 = !stateFromStores1;
  if (stateFromStores1) {
    tmp20 = hasPendingEdit;
  }
  if (tmp20) {
    if (!tmp14) {
      tmp14 = hasPendingAttachments;
    }
    if (!tmp14) {
      tmp14 = !tmp4;
    }
    tmp20 = tmp14;
  }
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp20;
  }
  if (cResult[6] === channel.id) {
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === onSendMessage) {
        if (cResult[9] === tmp20) {
          let tmp21;
          if (cResult[10] === canSendVoiceMessage) {
            tmp21 = cResult[11];
          }
          const _Symbol = Symbol;
          class I {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          const imperativeHandle = react.useImperativeHandle(arg1, tmp23);
          if (stateFromStores) {
            const result = 2 * token2;
            const tmp34 = canSendVoiceMessage ? token1 + result : token + result;
            if (cResult[13] === token1) {
              let tmp35;
              if (cResult[14] === tmp34) {
                tmp35 = cResult[15];
              }
              if (cResult[16] === channel.id) {
                if (cResult[17] === stateFromStores1) {
                  if (cResult[18] === onSendMessage) {
                    if (cResult[19] === tmp20) {
                      if (cResult[20] === canSendVoiceMessage) {
                        let tmp37;
                        if (cResult[21] === tmp8) {
                          tmp37 = cResult[22];
                        }
                        if (cResult[23] === tmp35) {
                          let tmp40;
                          if (cResult[24] === tmp37) {
                            tmp40 = cResult[25];
                          }
                          return tmp40;
                        }
                        class I {
                          constructor() {
                            return useReducedMotion.useReducedMotion;
                          }
                        }
                        const tmp42 = <View style={tmp35}>{tmp37}</View>;
                        cResult[23] = tmp35;
                        cResult[24] = tmp37;
                        cResult[25] = tmp42;
                        tmp40 = tmp42;
                      }
                    }
                  }
                }
              }
              class I {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              cResult[16] = channel.id;
              cResult[17] = stateFromStores1;
              cResult[18] = onSendMessage;
              cResult[19] = tmp20;
              cResult[20] = canSendVoiceMessage;
              cResult[21] = tmp8;
              cResult[22] = tmp39;
              tmp37 = tmp39;
            }
            class I {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            tmp36[0] = tmp34;
            tmp36[1] = token1;
            cResult[13] = token1;
            cResult[14] = tmp34;
            cResult[15] = tmp36;
            tmp35 = tmp36;
          } else {
            let tmp26;
            if (cResult[26] !== tmp21) {
              class I {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              const tmp29 = jsx(channel(4589).TransitionGroup, { items: tmp21, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey });
              cResult[26] = tmp21;
              cResult[27] = tmp29;
              tmp26 = tmp29;
            } else {
              tmp26 = cResult[27];
            }
            if (cResult[28] === token1) {
              if (cResult[29] === token2) {
                if (cResult[30] === token) {
                  if (cResult[31] === canSendVoiceMessage) {
                    let tmp30;
                    if (cResult[32] === tmp26) {
                      tmp30 = cResult[33];
                    }
                    return tmp30;
                  }
                }
              }
            }
            class I {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            const tmp32 = <closure_15 buttonWidth={token} buttonHeight={token1} buttonMargin={token2} sendVoiceMessageEnabled={canSendVoiceMessage}>{tmp26}</closure_15>;
            cResult[28] = token1;
            cResult[29] = token2;
            cResult[30] = token;
            cResult[31] = canSendVoiceMessage;
            cResult[32] = tmp26;
            cResult[33] = tmp32;
            tmp30 = tmp32;
          }
        }
      }
    }
  }
  const items3 = [];
  const obj5 = { channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled: tmp20, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: true };
  items3[0] = obj5;
  cResult[6] = channel.id;
  cResult[7] = stateFromStores1;
  cResult[8] = onSendMessage;
  cResult[9] = tmp20;
  cResult[10] = canSendVoiceMessage;
  cResult[11] = items3;
  tmp21 = items3;
}) : ((channel, arg1) => {
  let c2;
  let canSendVoiceMessage;
  let defaultValue;
  let hasPendingAttachments;
  let hasPendingEdit;
  let onSendMessage;
  let sendEnabled;
  let setHasText;
  let tmp10;
  let useReducedMotion;
  channel = channel.channel;
  ({ canSendVoiceMessage, onSendMessage } = channel);
  let flag = channel.requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let stateFromStores1;
  react = undefined;
  canSendVoiceMessage = undefined;
  let obj = channel(4580);
  const token = obj.useToken(onSendMessage(587).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const obj2 = channel(4580);
  const token1 = obj2.useToken(onSendMessage(587).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const obj3 = channel(4580);
  const token2 = obj3.useToken(onSendMessage(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let items = [AccessibilityStore];
  const tmp7 = closure_11(token, token1);
  const obj4 = channel(504);
  const stateFromStores = obj4.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp10, c2] = stateFromStores1(react.useState(defaultValue.length > 0), 2);
  stateFromStores1(react.useState(defaultValue.length > 0), 2);
  const items1 = [SlowmodeStore];
  const items2 = [channel];
  const obj6 = channel(504);
  stateFromStores1 = obj6.useStateFromStores(items1, () => SlowmodeStore.isChannelOnCooldown(channel), items2);
  let tmp12 = !stateFromStores1;
  if (stateFromStores1) {
    tmp12 = hasPendingEdit;
  }
  if (tmp12) {
    if (!tmp10) {
      tmp10 = hasPendingAttachments;
    }
    if (!tmp10) {
      tmp10 = !flag;
    }
    tmp12 = tmp10;
  }
  react = tmp12;
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp12;
  }
  const items3 = [channel.id, stateFromStores1, onSendMessage, tmp12, canSendVoiceMessage];
  const memo = obj5.useMemo(() => {
    const items = [];
    const obj = { channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: true };
    items[0] = obj;
    return items;
  }, items3);
  const imperativeHandle = obj5.useImperativeHandle(arg1, () => ({ setHasText }));
  if (stateFromStores) {
    let tmp15Result;
    const result = 2 * token2;
    size = { width: canSendVoiceMessage ? token1 + result : token + result, height: token1, alignItems: "center", justifyContent: "center" };
    const tmp19 = canSendVoiceMessage;
    if (tmp19) {
      tmp15Result = jsx(onSendMessage(11885), { disabled: stateFromStores1, channelId: channel.id });
    } else {
      ({ button: obj11.style, buttonActive: obj11.activeStyle, iconActive: obj11.activeIconStyle } = tmp7);
      onSendMessage(11868);
      const intl = tmp(1126).intl;
      tmp15Result = <tmp3Result active style={null} activeStyle={null} activeIconStyle={null} IconComponent={channel(4841).SendMessageIcon} accessibilityLabel={intl.string(channel(1126).t.TXNS7S)} onPress={onSendMessage} disabled={!tmp12} />;
    }
    return <tmp19 style={size}>{tmp15Result}</tmp19>;
  } else {
    return <closure_15 buttonWidth={token} buttonHeight={token1} buttonMargin={token2} sendVoiceMessageEnabled={canSendVoiceMessage}>{jsx(channel(4589).TransitionGroup, { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey })}</closure_15>;
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((sendVoiceMessageEnabled) => {
  let buttonHeight;
  let buttonMargin;
  let children;
  const obj = react2;
  const cResult = obj.c(12);
  ({ buttonHeight, buttonMargin, children } = sendVoiceMessageEnabled);
  const sum = buttonHeight + 2 * buttonMargin;
  const sum1 = sendVoiceMessageEnabled.buttonWidth + 2 * buttonMargin;
  if (cResult[0] === !sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    if (cResult[1] === sum) {
      let tmp6;
      let tmp8;
      if (cResult[2] === sum1) {
        tmp6 = cResult[3];
      }
      const animatedStyle = useChatInputFloatingWidthDefault(tmp6).animatedStyle;
      if (cResult[4] !== buttonHeight) {
        const obj2 = { height: buttonHeight };
        cResult[4] = buttonHeight;
        cResult[5] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        let tmp9;
        if (cResult[7] === tmp8) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === children) {
          let tmp10;
          if (cResult[10] === tmp9) {
            tmp10 = cResult[11];
          }
          return tmp10;
        }
        const tmp12 = jsx(ReanimatedRexportDefault.View, { style: tmp9, children });
        cResult[9] = children;
        cResult[10] = tmp9;
        cResult[11] = tmp12;
        tmp10 = tmp12;
      }
      const items = [tmp8, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp8;
      cResult[8] = items;
      tmp9 = items;
    }
  }
  const obj4 = { expanded: !sendVoiceMessageEnabled.sendVoiceMessageEnabled, collapsedWidth: sum, expandedWidth: sum1 };
  cResult[0] = !sendVoiceMessageEnabled.sendVoiceMessageEnabled;
  cResult[1] = sum;
  cResult[2] = sum1;
  cResult[3] = obj4;
  tmp6 = obj4;
}) : ((arg0) => {
  let buttonHeight;
  let buttonMargin;
  let buttonWidth;
  let children;
  let sendVoiceMessageEnabled;
  ({ buttonHeight, buttonMargin } = arg0);
  ({ buttonWidth, sendVoiceMessageEnabled, children } = arg0);
  const items = [, ];
  const obj = { expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin };
  items[0] = { height: buttonHeight };
  items[1] = useChatInputFloatingWidthDefault(obj).animatedStyle;
  return jsx(ReanimatedRexportDefault.View, { style: items, children });
});
forwardRefResult.displayName = "ChatInputSendButton";
const memoResult = react.memo(forwardRefResult);
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default memoResult;