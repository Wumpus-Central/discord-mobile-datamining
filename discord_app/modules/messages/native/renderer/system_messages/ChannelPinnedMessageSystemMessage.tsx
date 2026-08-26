// === Module 8311: createChannelPinnedMessageSystemMessage ===

// Module 8311 (createChannelPinnedMessageSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8288 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8290 */;
import createCommonMessageDefault from "createCommonMessage" /* 8291 */;
import MessageAccessibilityAction from "MessageAccessibilityAction" /* 8294 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx");

export const createChannelPinnedMessageSystemMessage = function createChannelPinnedMessageSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), pinsOnClick: obj };
  obj = { action: "bindOpenPins", messageChannelId: message.channel_id, medium: true };
  const messageReference = message.messageReference;
  if (null != messageReference) {
    const intl2 = tmp(1236).intl;
    obj1 = {};
    const merged = Object.assign(obj);
    ({ channel_id: obj5[1], message_id: obj5[2] } = messageReference);
    obj1.messageOnClick = { action: "bindJumpToMessage", targetChannelId: null, targetMessageId: null, medium: true };
    let formatToPartsResult = intl2.formatToParts(tmp(1236).t["7mvRNF"], obj1);
    const obj2 = { action: "bindJumpToMessage", targetChannelId: null, targetMessageId: null, medium: true };
  } else {
    const intl = tmp(1236).intl;
    formatToPartsResult = intl.formatToParts(tmp(1236).t["6TrHq2"], obj);
  }
  const tmp9 = createCommonMessageDefault(roleStyle);
  let accessibilityActions = tmp9.accessibilityActions;
  if (accessibilityActions == null) {
    accessibilityActions = [];
  }
  const items = [...accessibilityActions];
  const obj3 = { label: null, name: null };
  const intl3 = tmp(1236).intl;
  obj3[0] = intl3.string(getSystemLocale.t["mp1N/2"]);
  obj3[1] = MessageAccessibilityAction.MessageAccessibilityAction.OPEN_PINS;
  items.push(obj3);
  if (null != messageReference) {
    const obj4 = { label: null, name: null };
    const intl4 = tmp(1236).intl;
    obj4[0] = intl4.string(tmp(1236).t["+TSRGD"]);
    obj4[1] = tmp(8294).MessageAccessibilityAction.JUMP_TO_MESSAGE;
    items.push(obj4);
  }
  const obj5 = { content: formatToPartsResult };
  const merged1 = Object.assign(tmp9);
  obj5.accessibilityActions = items;
  return obj5;
};