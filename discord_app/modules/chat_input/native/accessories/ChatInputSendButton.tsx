// discord_app/modules/chat_input/native/accessories/ChatInputSendButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import SendMessageIcon from "../../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import ChatInputActionButtonDefault from "../action_buttons/ChatInputActionButton.tsx";
import ChatInputActionButtonTransitionItemDefault from "../action_buttons/ChatInputActionButtonTransitionItem.tsx";
import VoiceMessageButtonDefault from "../../../voice_messages/native/components/VoiceMessageButton.tsx";
import useChatInputFloatingWidthDefault from "../action_buttons/useChatInputFloatingWidth.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import SlowmodeStore from "../../../../stores/SlowmodeStore.tsx";

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
class ChatInputSendButton {
  constructor(arg0) {
    channel = global.channel;
    ({ canSendVoiceMessage, onSendMessage } = global);
    flag = global.requireTextContent;
    ({ defaultValue, hasPendingAttachments, hasPendingEdit } = global);
    if (flag === undefined) {
      flag = false;
    }
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    tmp = channel;
    tmp2 = closure_2;
    obj = channel(closure_2[9]);
    tmp3 = onSendMessage;
    token = obj.useToken(onSendMessage(closure_2[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
    obj2 = channel(closure_2[9]);
    token1 = obj2.useToken(onSendMessage(closure_2[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
    obj3 = channel(closure_2[9]);
    token2 = obj3.useToken(onSendMessage(closure_2[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
    tmp7 = closure_11(token, token1);
    obj4 = channel(closure_2[15]);
    items = [];
    items[0] = closure_6;
    obj5 = closure_4;
    stateFromStores = obj4.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    tmp9 = closure_3(closure_4.useState(defaultValue.length > 0), 2);
    [tmp10, closure_2] = tmp9;
    obj6 = channel(closure_2[15]);
    items1 = [];
    items1[0] = closure_7;
    items2 = [];
    items2[0] = channel;
    stateFromStores1 = obj6.useStateFromStores(items1, () => SlowmodeStore.isChannelOnCooldown(channel), items2);
    closure_3 = stateFromStores1;
    tmp12 = !stateFromStores1;
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
    closure_4 = tmp12;
    if (canSendVoiceMessage) {
      canSendVoiceMessage = !tmp12;
    }
    closure_5 = canSendVoiceMessage;
    items3 = [, , , ,];
    items3[0] = channel.id;
    items3[1] = stateFromStores1;
    items3[2] = onSendMessage;
    items3[3] = tmp12;
    items3[4] = canSendVoiceMessage;
    memo = obj5.useMemo(() => {
      const items = [
        {
          channelId: channel.id,
          isOnCooldown: stateFromStores1,
          onSendMessage,
          sendEnabled,
          sendVoiceMessageEnabled: canSendVoiceMessage,
          withBounce: true,
        },
      ];
      return items;
    }, items3);
    imperativeHandle = obj5.useImperativeHandle(global.ref, () => ({ setHasText }));
    tmp15 = jsx;
    if (stateFromStores) {
      result = 2 * token2;
      obj1 = { style: null, children: null };
      size = { width: null, height: null, alignItems: "center", justifyContent: "center" };
      size.width = canSendVoiceMessage ? token1 + result : token + result;
      size.height = token1;
      obj1.style = size;
      tmp19 = closure_5;
      if (canSendVoiceMessage) {
        obj13 = { disabled: null, channelId: null };
        obj13.disabled = stateFromStores1;
        obj13.channelId = channel.id;
        tmp15Result = tmp15(tmp3(tmp2[11]), obj13);
      } else {
        obj14 = {
          active: true,
          style: null,
          activeStyle: null,
          activeIconStyle: null,
          IconComponent: null,
          accessibilityLabel: null,
          onPress: null,
          disabled: null,
        };
        ({ button: obj11.style, buttonActive: obj11.activeStyle, iconActive: obj11.activeIconStyle } = tmp7);
        tmp3Result = tmp3(tmp2[12]);
        obj14.IconComponent = tmp(tmp2[13]).SendMessageIcon;
        intl = tmp(tmp2[14]).intl;
        obj14.accessibilityLabel = intl.string(tmp(tmp2[14]).t.TXNS7S);
        obj14.onPress = onSendMessage;
        obj14.disabled = !tmp12;
        tmp15Result = tmp15(tmp3Result, obj14);
      }
      obj1.children = tmp15Result;
      return tmp15(tmp19, obj1);
    } else {
      obj15 = { items: null, renderItem: null, getItemKey: null };
      obj15.items = memo;
      tmp16 = renderChatInputSendButton;
      obj15.renderItem = renderChatInputSendButton;
      tmp17 = getChatInputSendButtonItemKey;
      obj15.getItemKey = getChatInputSendButtonItemKey;
      tmp18 = FloatingSlot;
      obj16 = {
        buttonWidth: null,
        buttonHeight: null,
        buttonMargin: null,
        sendVoiceMessageEnabled: null,
        children: null,
      };
      obj16.buttonWidth = token;
      obj16.buttonHeight = token1;
      obj16.buttonMargin = token2;
      obj16.sendVoiceMessageEnabled = canSendVoiceMessage;
      obj16.children = tmp15(tmp(tmp2[16]).TransitionGroup, obj15);
      return tmp15(FloatingSlot, obj16);
    }
  }
}
function FloatingSlot(arg0) {
  ({ buttonHeight, buttonMargin } = arg0);
  ({ buttonWidth, sendVoiceMessageEnabled, children } = arg0);
  const obj2 = { style: null, children };
  const items = [
    { height: buttonHeight },
    useChatInputFloatingWidthDefault({
      expanded: !sendVoiceMessageEnabled,
      collapsedWidth: buttonHeight + 2 * buttonMargin,
      expandedWidth: buttonWidth + 2 * buttonMargin,
    }).animatedStyle,
  ];
  obj2.style = items;
  return jsx(ReanimatedRexportDefault.View, { style: null, children });
}
const View = fn(17).View;
let closure_8 = fn(12806).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsx = fn(21).jsx;
const constants = {
  BUTTON_SEND: "send-button",
  BUTTON_SEND_DISABLED: "send-button-disabled",
  BUTTON_SEND_VOICE_MESSAGE: "voice-message-button",
  BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled",
};
const createStyles = fn(5014);
let closure_11 = createStyles.createStyles((width, height) => {
  const obj = {
    button: null,
    buttonActive: { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND },
    iconActive: null,
  };
  const size = { width, height };
  obj.button = size;
  const obj2 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.iconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  return obj;
});
let closure_12 = noop.memo(function ChatInputSendButtonInner(type) {
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
    const obj8 = {
      active: true,
      style: null,
      activeStyle: null,
      activeIconStyle: null,
      IconComponent: null,
      accessibilityLabel: null,
      onPress: null,
      disabled: null,
    };
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp5);
    obj8.IconComponent = SendMessageIcon.SendMessageIcon;
    const intl = util.intl;
    obj8.accessibilityLabel = intl.string(util.t.TXNS7S);
    obj8.onPress = onSendMessage;
    obj8.disabled = !sendEnabled;
    tmp7Result = jsx(ChatInputActionButtonDefault, {
      active: true,
      style: null,
      activeStyle: null,
      activeIconStyle: null,
      IconComponent: null,
      accessibilityLabel: null,
      onPress: null,
      disabled: null,
    });
    const tmp3Result2 = ChatInputActionButtonDefault;
  }
  obj3.children = tmp7Result;
  return jsx(ChatInputActionButtonTransitionItemDefault, {
    cleanup,
    state,
    withBounce,
    bounceEnterDelayMs: num,
    children: null,
  });
});
ChatInputSendButton.displayName = "ChatInputSendButton";
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default noop.memo(ChatInputSendButton);
