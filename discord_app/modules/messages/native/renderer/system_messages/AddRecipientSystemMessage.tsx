// === Module 14383: AddRecipientSystemMessage ===

// Module 14383 (AddRecipientSystemMessage)
import util from "util" /* 1112 */;
import ChannelRecord from "ChannelRecord" /* 4896 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12008 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14379 */;
import createCommonMessageDefault from "createCommonMessage" /* 14380 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx");

export function createAddRecipientSystemMessage(message) {
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const user = UserStore.getUser(first);
  const channel = ChannelStore.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, channel);
  const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), otherUsername: userAuthorWithProcessedColor.nick, otherUsernameOnClick: formatUsernameOnClickDefault({ userId: first, message, author: userAuthorWithProcessedColor, roleStyle }) };
  const intl = util.intl;
  const formatToParts = intl.formatToParts;
  const t = util.t;
  if (hasItem) {
    let formatToPartsResult = formatToParts(t.Vej1Nw, obj3);
  } else {
    formatToPartsResult = formatToParts(t["7/Xl0S"], obj3);
  }
  const merged = Object.assign(createCommonMessageDefault(message));
  return { content: formatToPartsResult };
}