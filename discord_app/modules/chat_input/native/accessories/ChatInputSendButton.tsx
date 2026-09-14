// === Module 12384: ChatInputSendButton ===

// Module 12384 (ChatInputSendButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useToken from "useToken" /* 4338 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4373 */;
import SendMessageIcon from "SendMessageIcon" /* 4581 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12369 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 12376 */;
import VoiceMessageButtonDefault from "VoiceMessageButton" /* 12385 */;
import useChatInputFloatingWidthDefault from "useChatInputFloatingWidth" /* 12389 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;
import SlowmodeStore from "SlowmodeStore" /* 7789 */;

require = fn;
function renderChatInputSendButton(type, arg1, state, cleanup) {
  const merged = Object.assign(arg1);
  return <closure_12 key={type} type={type} state={state} cleanup={cleanup} />;
}
function getChatInputSendButtonItemKey(sendVoiceMessageEnabled) {
  if (!sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    return tmp ? constants.BUTTON_SEND : constants.BUTTON_SEND_DISABLED;
  }
}
function FloatingSlot(arg0) {
  ({ buttonHeight, buttonMargin } = arg0);
  ({ buttonWidth, sendVoiceMessageEnabled, children } = arg0);
  const obj2 = { style: null, children };
  const items = [{ height: buttonHeight }, useChatInputFloatingWidthDefault({ expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin }).animatedStyle];
  obj2.style = items;
  return jsx(ReanimatedRexportDefault.View, { style: null, children });
}
const View = fn(17).View;
let closure_8 = fn(12092).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsx = fn(21).jsx;
const constants = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
const createStyles = fn(4636);
let closure_11 = createStyles.createStyles((width, height) => {
  const obj = { button: null, buttonActive: { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND }, iconActive: null };
  const size = { width, height };
  obj.button = size;
  const obj2 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.iconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  return obj;
});
let closure_12 = noop.memo((type) => {
  type = type.type;
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, withBounce } = type);
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let num = 0;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num = closure_8;
  }
  const obj3 = { cleanup, state, withBounce, bounceEnterDelayMs: num, children: null };
  const tmp5 = closure_11(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    const obj5 = { disabled: isOnCooldown, channelId };
    let tmp7Result = jsx(VoiceMessageButtonDefault, { disabled: isOnCooldown, channelId });
  } else {
    const obj8 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp5);
    obj8.IconComponent = SendMessageIcon.SendMessageIcon;
    const intl = util.intl;
    obj8.accessibilityLabel = intl.string(util.t.TXNS7S);
    obj8.onPress = onSendMessage;
    obj8.disabled = !sendEnabled;
    tmp7Result = jsx(ChatInputActionButtonDefault, { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null });
    const tmp3Result2 = ChatInputActionButtonDefault;
  }
  obj3.children = tmp7Result;
  return jsx(ChatInputActionButtonTransitionItemDefault, { cleanup, state, withBounce, bounceEnterDelayMs: num, children: null });
});
const forwardRefResult = noop.forwardRef((channel, arg1) => {
  channel = channel.channel;
  ({ canSendVoiceMessage, onSendMessage } = channel);
  let flag = channel.requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let stateFromStores1;
  noop = undefined;
  canSendVoiceMessage = undefined;
  const token = channel(4338).useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const obj = channel(4338);
  const token1 = channel(4338).useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const obj2 = channel(4338);
  const token2 = channel(4338).useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj3 = channel(4338);
  const tmp7 = closure_11(token, token1);
  let items = [AccessibilityStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = channel(504);
  [tmp10, c2] = stateFromStores1(noop.useState(defaultValue.length > 0), 2);
  const tmp9 = stateFromStores1(noop.useState(defaultValue.length > 0), 2);
  const items1 = [SlowmodeStore];
  const items2 = [channel];
  stateFromStores1 = channel(504).useStateFromStores(items1, () => SlowmodeStore.isChannelOnCooldown(channel), items2);
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
  noop = tmp12;
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp12;
  }
  const items3 = [channel.id, stateFromStores1, onSendMessage, tmp12, canSendVoiceMessage];
  const memo = obj5.useMemo(() => {
    const items = [{ channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: true }];
    return items;
  }, items3);
  const imperativeHandle = obj5.useImperativeHandle(arg1, () => ({ setHasText }));
  if (stateFromStores) {
    const result = 2 * token2;
    const obj7 = { style: null, children: null };
    const size = { width: canSendVoiceMessage ? token1 + result : token + result, height: token1, alignItems: "center", justifyContent: "center" };
    obj7.style = size;
    if (canSendVoiceMessage) {
      const obj8 = { disabled: stateFromStores1, channelId: channel.id };
      let tmp15Result = jsx(onSendMessage(12385), { disabled: stateFromStores1, channelId: channel.id });
    } else {
      const obj9 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ button: obj11.style, buttonActive: obj11.activeStyle, iconActive: obj11.activeIconStyle } = tmp7);
      obj9.IconComponent = tmp(4581).SendMessageIcon;
      const intl = tmp(1114).intl;
      obj9.accessibilityLabel = intl.string(tmp(1114).t.TXNS7S);
      obj9.onPress = onSendMessage;
      obj9.disabled = !tmp12;
      tmp15Result = jsx(onSendMessage(12369), { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null });
      const tmp3Result = onSendMessage(12369);
    }
    obj7.children = tmp15Result;
    return <canSendVoiceMessage style={null}>{null}</canSendVoiceMessage>;
  } else {
    const obj10 = { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey };
    const obj12 = { buttonWidth: token, buttonHeight: token1, buttonMargin: token2, sendVoiceMessageEnabled: canSendVoiceMessage, children: jsx(tmp(4347).TransitionGroup, { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey }) };
    return <FloatingSlot buttonWidth={token} buttonHeight={token1} buttonMargin={token2} sendVoiceMessageEnabled={canSendVoiceMessage}>{jsx(tmp(4347).TransitionGroup, { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey })}</FloatingSlot>;
  }
  const obj6 = channel(504);
});
forwardRefResult.displayName = "ChatInputSendButton";
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default noop.memo(forwardRefResult);