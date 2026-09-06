// discord_app/modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import MessageAccessibilityActions from "../../MessageAccessibilityActions.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx",
);

export const createChannelPinnedMessageSystemMessage = function createChannelPinnedMessageSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
    pinsOnClick: { action: "bindOpenPins", messageChannelId: message.channel_id, medium: true },
  };
  const messageReference = message.messageReference;
  if (null != messageReference) {
    const intl2 = util.intl;
    obj = {};
    const merged = Object.assign(obj);
    ({ channel_id: obj4.targetChannelId, message_id: obj4.targetMessageId } = messageReference);
    obj.messageOnClick = { action: "bindJumpToMessage", targetChannelId: null, targetMessageId: null, medium: true };
    let formatToPartsResult = intl2.formatToParts(util.t["7mvRNF"], obj);
    const obj1 = { action: "bindJumpToMessage", targetChannelId: null, targetMessageId: null, medium: true };
  } else {
    const intl = util.intl;
    formatToPartsResult = intl.formatToParts(util.t["6TrHq2"], obj);
  }
  const tmp9 = createCommonMessageDefault(roleStyle);
  let accessibilityActions = tmp9.accessibilityActions;
  if (accessibilityActions == null) {
    accessibilityActions = [];
  }
  const items = [...accessibilityActions];
  const obj2 = { label: null, name: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t["mp1N/2"]);
  obj2.name = MessageAccessibilityActions.MessageAccessibilityAction.OPEN_PINS;
  items.push(obj2);
  if (null != messageReference) {
    const obj3 = { label: null, name: null };
    const intl4 = util.intl;
    obj3.label = intl4.string(util.t["+TSRGD"]);
    obj3.name = MessageAccessibilityActions.MessageAccessibilityAction.JUMP_TO_MESSAGE;
    items.push(obj3);
  }
  const obj4 = { content: formatToPartsResult };
  const merged1 = Object.assign(tmp9);
  obj4.accessibilityActions = items;
  return obj4;
};
