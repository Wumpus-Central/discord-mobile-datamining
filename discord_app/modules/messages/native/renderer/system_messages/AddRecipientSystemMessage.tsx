// discord_app/modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import createChannelRecord from "../../../../../records/ChannelRecord.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";

const THREAD_CHANNEL_TYPES = createChannelRecord.THREAD_CHANNEL_TYPES;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx");

export const createAddRecipientSystemMessage = function createAddRecipientSystemMessage(message) {
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  user = user.getUser(first);
  channel = channel.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const userAuthorWithProcessedColor = getMessageAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, channel);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), otherUsername: userAuthorWithProcessedColor.nick, otherUsernameOnClick: formatUsernameOnClickDefault({ userId: first, message, author: userAuthorWithProcessedColor, roleStyle }) };
  const intl = getSystemLocale.intl;
  const formatToParts = intl.formatToParts;
  const t = getSystemLocale.t;
  if (hasItem) {
    let formatToPartsResult = formatToParts(t.Vej1Nw, obj);
  } else {
    formatToPartsResult = formatToParts(t["7/Xl0S"], obj);
  }
  obj = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};