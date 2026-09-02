// === Module 12044: renderChatInputSendButton ===

// Module 12044 (renderChatInputSendButton)
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import _modDef4217 from "module_4217" /* 4217 */;
import useChatInputFloatingWidthDefault from "useChatInputFloatingWidth" /* 12049 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_7 from "setCooldown" /* 7441 */;
import { CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS as closure_8 } from "TextAreaCta" /* 11758 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
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
  const style = [{ height: buttonHeight }, useChatInputFloatingWidthDefault({ expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin }).animatedStyle];
  return jsx(_modDef4217.View, { style, children });
}
let c4 = importAllResult;
let closure_10 = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
let closure_11 = createCacheKey.createStyles((width, height) => {
  obj = { button: obj, buttonActive: null, iconActive: null };
  obj = { width, height };
  obj = { backgroundColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj[1] = obj;
  obj[2] = { tintColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  return obj;
});
let closure_12 = importAllResult.memo((type) => {
  type = type.type;
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, withBounce } = type);
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  obj1 = map;
  let num = 0;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num = closure_8;
  }
  obj = { cleanup, state, withBounce, bounceEnterDelayMs: num, children: null };
  let tmp3Result = tmp3(12036);
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    obj = { disabled: null, channelId: null };
    obj[0] = isOnCooldown;
    obj[1] = channelId;
    let tmp7Result = tmp7(tmp3(12045), obj);
  } else {
    obj1 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
    ({ button: obj4[1], buttonActive: obj4[2], iconActive: obj4[3] } = tmp5);
    tmp3Result = tmp3(12029);
    obj1[4] = tmp(4423).SendMessageIcon;
    const intl = tmp(1233).intl;
    obj1[5] = intl.string(tmp(1233).t.TXNS7S);
    obj1[6] = onSendMessage;
    obj1[7] = !sendEnabled;
    tmp7Result = tmp7(tmp3Result, obj1);
  }
  obj[4] = tmp7Result;
  return <tmp3Result cleanup={cleanup} state={state} withBounce={withBounce} bounceEnterDelayMs={num}>{null}</tmp3Result>;
});
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  ({ canSendVoiceMessage, onSendMessage } = channel);
  let flag = channel.requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let stateFromStores1;
  importAllResult = undefined;
  canSendVoiceMessage = undefined;
  let obj = channel(4197);
  const token = obj.useToken(onSendMessage(709).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  obj1 = channel(4197);
  const token1 = obj1.useToken(onSendMessage(709).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj2 = channel(4197);
  const token2 = obj2.useToken(onSendMessage(709).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj3 = channel(586);
  let items = [closure_6];
  let obj4 = importAllResult;
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp7 = callback(token, token1);
  [tmp10, c2] = stateFromStores1(importAllResult.useState(defaultValue.length > 0), 2);
  const tmp9 = stateFromStores1(importAllResult.useState(defaultValue.length > 0), 2);
  const items1 = [closure_7];
  const items2 = [channel];
  stateFromStores1 = channel(586).useStateFromStores(items1, () => closure_1_7.isChannelOnCooldown(channel), items2);
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
  importAllResult = tmp12;
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp12;
  }
  const items3 = [channel.id, stateFromStores1, onSendMessage, tmp12, canSendVoiceMessage];
  const memo = obj4.useMemo(() => {
    const items = [{ channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled: closure_4, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: true }];
    return items;
  }, items3);
  const imperativeHandle = obj4.useImperativeHandle(ref, () => ({ setHasText: c2 }));
  if (stateFromStores) {
    const result = 2 * token2;
    obj = { style: null, children: null };
    obj = { width: null, height: null, alignItems: "center", justifyContent: "center" };
    obj[0] = canSendVoiceMessage ? token1 + result : token + result;
    obj[1] = token1;
    obj[0] = obj;
    if (canSendVoiceMessage) {
      obj1 = { disabled: null, channelId: null };
      obj1[0] = stateFromStores1;
      obj1[1] = channel.id;
      let tmp15Result = tmp15(tmp3(12045), obj1);
    } else {
      obj2 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ button: obj11[1], buttonActive: obj11[2], iconActive: obj11[3] } = tmp7);
      obj2[4] = tmp(4423).SendMessageIcon;
      const intl = tmp(1233).intl;
      obj2[5] = intl.string(tmp(1233).t.TXNS7S);
      obj2[6] = onSendMessage;
      obj2[7] = !tmp12;
      tmp15Result = tmp15(tmp3(12029), obj2);
      const tmp3Result = tmp3(12029);
    }
    obj[1] = tmp15Result;
    return tmp15(canSendVoiceMessage, obj);
  } else {
    obj3 = { items: null, renderItem: null, getItemKey: null };
    obj3[0] = memo;
    obj3[1] = renderChatInputSendButton;
    obj3[2] = getChatInputSendButtonItemKey;
    obj4 = { buttonWidth: null, buttonHeight: null, buttonMargin: null, sendVoiceMessageEnabled: null, children: null };
    obj4[0] = token;
    obj4[1] = token1;
    obj4[2] = token2;
    obj4[3] = canSendVoiceMessage;
    obj4[4] = tmp15(tmp(4204).TransitionGroup, obj3);
    return tmp15(FloatingSlot, obj4);
  }
  const obj6 = channel(586);
});
forwardRefResult.displayName = "ChatInputSendButton";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default memoResult;