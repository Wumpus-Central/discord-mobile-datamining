// === Module 11417: renderChatInputSendButton ===

// Module 11417 (renderChatInputSendButton)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import map from "map" /* 4097 */;
import _modDef4115 from "module_4115" /* 4115 */;
import SendMessageIcon from "SendMessageIcon" /* 4320 */;
import _modDef11402 from "module_11402" /* 11402 */;
import FadeTransitionItemDefault from "FadeTransitionItem" /* 11409 */;
import VoiceMessageRecordingCancelledToastIconDefault from "VoiceMessageRecordingCancelledToastIcon" /* 11418 */;
import useChatInputFloatingWidthDefault from "useChatInputFloatingWidth" /* 11424 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import setCooldown from "setCooldown" /* 7440 */;
import { CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS as closure_8 } from "TextAreaCta" /* 11149 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
  const style = [{ height: buttonHeight }, useChatInputFloatingWidthDefault({ expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin }).animatedStyle];
  return jsx(_modDef4115.View, { style, children });
}
let c4 = importAllResult;
let closure_10 = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
let closure_11 = createCacheKey.createStyles((width, height) => {
  const obj = { backgroundColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
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
  let tmp3Result = FadeTransitionItemDefault;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    obj = { disabled: null, channelId: null };
    obj[0] = isOnCooldown;
    obj[1] = channelId;
    let tmp7Result = jsx(VoiceMessageRecordingCancelledToastIconDefault, { disabled: null, channelId: null });
  } else {
    obj1 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
    ({ button: obj4[1], buttonActive: obj4[2], iconActive: obj4[3] } = tmp5);
    tmp3Result = _modDef11402;
    obj1[4] = SendMessageIcon.SendMessageIcon;
    const intl = getSystemLocale.intl;
    obj1[5] = intl.string(getSystemLocale.t.TXNS7S);
    obj1[6] = onSendMessage;
    obj1[7] = !sendEnabled;
    tmp7Result = <tmp3Result active style={null} activeStyle={null} activeIconStyle={null} IconComponent={null} accessibilityLabel={null} onPress={null} disabled={null} />;
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
  let chatInputFloating;
  let callback;
  let stateFromStores1;
  closure_5 = undefined;
  canSendVoiceMessage = undefined;
  let obj = channel(chatInputFloating[9]);
  const token = obj.useToken(onSendMessage(chatInputFloating[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  obj1 = channel(chatInputFloating[9]);
  const token1 = obj1.useToken(onSendMessage(chatInputFloating[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj2 = channel(chatInputFloating[9]);
  const token2 = obj2.useToken(onSendMessage(chatInputFloating[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj3 = channel(chatInputFloating[15]);
  chatInputFloating = obj3.useMobileVisualRefreshConfig({ location: "ChatInputSendButton" }).chatInputFloating;
  let obj4 = channel(chatInputFloating[16]);
  let items = [canSendVoiceMessage];
  let obj5 = stateFromStores1;
  const stateFromStores = obj4.useStateFromStores(items, () => canSendVoiceMessage.useReducedMotion);
  const tmp7 = callback2(token, token1);
  [tmp10, c3] = callback(stateFromStores1.useState(defaultValue.length > 0), 2);
  let obj6 = channel(chatInputFloating[16]);
  const items1 = [closure_7];
  const items2 = [channel];
  stateFromStores1 = obj6.useStateFromStores(items1, () => closure_1_7.isChannelOnCooldown(channel), items2);
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
  closure_5 = tmp12;
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp12;
  }
  const items3 = [channel.id, stateFromStores1, onSendMessage, tmp12, canSendVoiceMessage, chatInputFloating];
  const memo = obj5.useMemo(() => {
    const items = [{ channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled: closure_5, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: chatInputFloating }];
    return items;
  }, items3);
  const imperativeHandle = obj5.useImperativeHandle(ref, () => ({ setHasText: c3 }));
  if (stateFromStores) {
    if (chatInputFloating) {
      const result = 2 * token2;
      obj = { width: null, height: null, alignItems: "center", justifyContent: "center" };
      obj[0] = canSendVoiceMessage ? token1 + result : token + result;
      obj[1] = token1;
      obj[0] = obj;
      if (canSendVoiceMessage) {
        obj1 = { disabled: null, channelId: null };
        obj1[0] = stateFromStores1;
        obj1[1] = channel.id;
        let tmp20Result = jsx(onSendMessage(tmp2[11]), { disabled: null, channelId: null });
      } else {
        obj2 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
        ({ button: obj14[1], buttonActive: obj14[2], iconActive: obj14[3] } = tmp7);
        obj2[4] = tmp(tmp2[13]).SendMessageIcon;
        const intl = tmp(tmp2[14]).intl;
        obj2[5] = intl.string(tmp(tmp2[14]).t.TXNS7S);
        obj2[6] = onSendMessage;
        obj2[7] = !tmp12;
        tmp20Result = jsx(onSendMessage(tmp2[12]), { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null });
        const tmp3Result = onSendMessage(tmp2[12]);
      }
      obj[1] = tmp20Result;
      return <closure_5 width={null} height={null} alignItems="center" justifyContent="center" />;
    }
  }
  obj3 = { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey };
  const tmp16 = jsx(channel(chatInputFloating[17]).TransitionGroup, { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey });
  if (chatInputFloating) {
    obj4 = { buttonWidth: null, buttonHeight: null, buttonMargin: null, sendVoiceMessageEnabled: null, children: null };
    obj4[0] = token;
    obj4[1] = token1;
    obj4[2] = token2;
    obj4[3] = canSendVoiceMessage;
    obj4[4] = tmp16;
    let tmp15Result = <FloatingSlot buttonWidth={null} buttonHeight={null} buttonMargin={null} sendVoiceMessageEnabled={null}>{null}</FloatingSlot>;
  } else {
    obj5 = { style: null, children: null };
    obj6 = { width: null, height: null };
    obj6[0] = token + 2 * token2;
    obj6[1] = token1;
    obj5[0] = obj6;
    obj5[1] = tmp16;
    tmp15Result = <closure_5 style={null}>{null}</closure_5>;
  }
  return tmp15Result;
});
forwardRefResult.displayName = "ChatInputSendButton";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default memoResult;