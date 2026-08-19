// === Module 8201: createRemoveRecipientSystemMessage ===

// Module 8201 (createRemoveRecipientSystemMessage)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8187 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const THREAD_CHANNEL_TYPES = createChannelRecord.THREAD_CHANNEL_TYPES;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx");

export const createRemoveRecipientSystemMessage = function createRemoveRecipientSystemMessage(message) {
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  channel = channel.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  if (message.author.id === first) {
    const intl = getSystemLocale.intl;
    const formatToParts = intl.formatToParts;
    const t = getSystemLocale.t;
    if (hasItem) {
      let formatToPartsResult = formatToParts(t.uHmblj, obj);
    } else {
      formatToPartsResult = formatToParts(t["Qn5+Lf"], obj);
    }
    obj = { content: null };
    obj[0] = formatToPartsResult;
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj;
  } else {
    user = user.getUser(first);
    const userAuthorWithProcessedColor = getMessageAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, channel);
    obj1 = {};
    const merged1 = Object.assign(obj);
    obj1.otherUsername = userAuthorWithProcessedColor.nick;
    const obj2 = { userId: null, message: null, author: null, roleStyle: null };
    obj2[0] = first;
    obj2[1] = message;
    obj2[2] = userAuthorWithProcessedColor;
    obj2[3] = roleStyle;
    obj1.otherUsernameOnClick = formatUsernameOnClickDefault(obj2);
    const intl2 = getSystemLocale.intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = getSystemLocale.t;
    if (hasItem) {
      let formatToParts2Result = formatToParts2(t2.KBrM5t, obj1);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj1);
    }
    const obj3 = { content: null };
    obj3[0] = formatToParts2Result;
    const merged2 = Object.assign(createCommonMessageDefault(message));
    return obj3;
  }
};