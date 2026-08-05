// discord_app/modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import { formatUsernameOnClick } from "formatUsernameOnClick.tsx";
import { getMessageAuthorWithProcessedColor } from "useAuthorWithProcessedColor.tsx";

const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx");

export const createRemoveRecipientSystemMessage = function createRemoveRecipientSystemMessage(message) {
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  channel = channel.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClick({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  if (message.author.id === first) {
    const intl = tmp5(1236).intl;
    const formatToParts = intl.formatToParts;
    const t = tmp5(1236).t;
    if (hasItem) {
      let formatToPartsResult = formatToParts(t.uHmblj, obj);
    } else {
      formatToPartsResult = formatToParts(t["Qn5+Lf"], obj);
    }
    obj = { content: null };
    obj[0] = formatToPartsResult;
    const merged = Object.assign(tmp8(7854)(message));
    return obj;
  } else {
    user = user.getUser(first);
    const userAuthorWithProcessedColor = tmp5(7851).getUserAuthorWithProcessedColor(user, channel);
    const obj1 = {};
    const merged1 = Object.assign(obj);
    obj1.otherUsername = userAuthorWithProcessedColor.nick;
    const obj2 = { userId: null, message: null, author: null, roleStyle: null };
    obj2[0] = first;
    obj2[1] = message;
    obj2[2] = userAuthorWithProcessedColor;
    obj2[3] = roleStyle;
    obj1.otherUsernameOnClick = tmp8(7853)(obj2);
    const intl2 = tmp5(1236).intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = tmp5(1236).t;
    if (hasItem) {
      let formatToParts2Result = formatToParts2(t2.KBrM5t, obj1);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj1);
    }
    const obj3 = { content: null };
    obj3[0] = formatToParts2Result;
    const merged2 = Object.assign(tmp8(7854)(message));
    return obj3;
  }
};