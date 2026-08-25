// === Module 8238: createRemoveRecipientSystemMessage ===

// Module 8238 (createRemoveRecipientSystemMessage)
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8221 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8223 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;

const THREAD_CHANNEL_TYPES = createChannelRecord.THREAD_CHANNEL_TYPES;
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx");

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
    const merged = Object.assign(tmp8(8224)(message));
    return obj;
  } else {
    user = user.getUser(first);
    const userAuthorWithProcessedColor = tmp5(8221).getUserAuthorWithProcessedColor(user, channel);
    obj1 = {};
    const merged1 = Object.assign(obj);
    obj1.otherUsername = userAuthorWithProcessedColor.nick;
    const obj2 = { userId: null, message: null, author: null, roleStyle: null };
    obj2[0] = first;
    obj2[1] = message;
    obj2[2] = userAuthorWithProcessedColor;
    obj2[3] = roleStyle;
    obj1.otherUsernameOnClick = tmp8(8223)(obj2);
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
    const merged2 = Object.assign(tmp8(8224)(message));
    return obj3;
  }
};