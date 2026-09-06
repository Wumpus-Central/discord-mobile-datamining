// === Module 12254: ChatInputSendButton ===

// Module 12254 (ChatInputSendButton)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import useChatInputFloatingWidthDefault from "useChatInputFloatingWidth" /* 12259 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import SlowmodeStore from "SlowmodeStore" /* 7687 */;

require = fn;
function renderChatInputSendButton(type, arg1, state, cleanup) {
  const merged = Object.assign(arg1);
  return <closure_12 key={arg0} type={arg0} state={arg2} cleanup={arg3} />;
}
function getChatInputSendButtonItemKey(sendVoiceMessageEnabled) {
  if (!sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    return tmp ? tmp2.BUTTON_SEND : tmp2.BUTTON_SEND_DISABLED;
  }
}
function FloatingSlot(arg0) {
  ({ buttonHeight, buttonMargin } = arg0);
  ({ buttonWidth, sendVoiceMessageEnabled, children } = arg0);
  let obj = { expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin };
  obj = { style: null, children };
  const items = [{ height: buttonHeight }, useChatInputFloatingWidthDefault(obj).animatedStyle];
  obj.style = items;
  return jsx(ReanimatedRexportDefault.View, { style: null, children });
}
const View = fn(17).View;
let closure_8 = fn(11962).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsx = fn(21).jsx;
const constants = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((width, height) => {
  let obj = { button: null, buttonActive: null, iconActive: null };
  const size = { width, height };
  obj.button = size;
  obj = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.buttonActive = obj;
  obj = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  obj.iconActive = obj;
  return obj;
});
let closure_12 = noop.memo((type) => {
  type = type.type;
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, withBounce } = type);
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj1 = useToken;
  let num = 0;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num = closure_8;
  }
  obj = { cleanup, state, withBounce, bounceEnterDelayMs: num, children: null };
  let tmp3Result = tmp3(12246);
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    obj = { disabled: isOnCooldown, channelId };
    let tmp7Result = tmp7(tmp3(12255), obj);
  } else {
    obj1 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp5);
    tmp3Result = tmp3(12239);
    obj1.IconComponent = tmp(4505).SendMessageIcon;
    const intl = tmp(1114).intl;
    obj1.accessibilityLabel = intl.string(tmp(1114).t.TXNS7S);
    obj1.onPress = onSendMessage;
    obj1.disabled = !sendEnabled;
    tmp7Result = tmp7(tmp3Result, obj1);
  }
  obj.children = tmp7Result;
  return <tmp3Result cleanup={cleanup} state={state} withBounce={withBounce} bounceEnterDelayMs={num}>{null}</tmp3Result>;
});
const forwardRefResult = noop.forwardRef((channel, ref) => {
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
  let obj = channel(4262);
  const token = obj.useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj1 = channel(4262);
  const token1 = obj1.useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj2 = channel(4262);
  const token2 = obj2.useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj3 = channel(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp7 = closure_11(token, token1);
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
  const imperativeHandle = obj5.useImperativeHandle(ref, () => ({ setHasText }));
  if (stateFromStores) {
    const result = 2 * token2;
    obj = { style: null, children: null };
    const size = { width: canSendVoiceMessage ? token1 + result : token + result, height: token1, alignItems: "center", justifyContent: "center" };
    obj.style = size;
    if (canSendVoiceMessage) {
      obj = { disabled: stateFromStores1, channelId: channel.id };
      let tmp15Result = tmp15(tmp3(12255), obj);
    } else {
      obj1 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ button: obj11.style, buttonActive: obj11.activeStyle, iconActive: obj11.activeIconStyle } = tmp7);
      obj1.IconComponent = tmp(4505).SendMessageIcon;
      const intl = tmp(1114).intl;
      obj1.accessibilityLabel = intl.string(tmp(1114).t.TXNS7S);
      obj1.onPress = onSendMessage;
      obj1.disabled = !tmp12;
      tmp15Result = tmp15(tmp3(12239), obj1);
      const tmp3Result = tmp3(12239);
    }
    obj.children = tmp15Result;
    return tmp15(canSendVoiceMessage, obj);
  } else {
    obj2 = { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey };
    obj3 = { buttonWidth: token, buttonHeight: token1, buttonMargin: token2, sendVoiceMessageEnabled: canSendVoiceMessage, children: tmp15(tmp(4271).TransitionGroup, obj2) };
    return tmp15(FloatingSlot, obj3);
  }
  const obj6 = channel(504);
});
forwardRefResult.displayName = "ChatInputSendButton";
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default noop.memo(forwardRefResult);