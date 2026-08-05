// discord_app/modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";

const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx");

export const createAddRecipientSystemMessage = function createAddRecipientSystemMessage(message) {
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  user = user.getUser(first);
  channel = channel.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const userAuthorWithProcessedColor = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */.getUserAuthorWithProcessedColor(user, channel);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle }), otherUsername: userAuthorWithProcessedColor.nick, otherUsernameOnClick: require("formatUsernameOnClick.tsx")({ userId: first, message, author: userAuthorWithProcessedColor, roleStyle }) };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const formatToParts = intl.formatToParts;
  const t = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t;
  if (hasItem) {
    let formatToPartsResult = formatToParts(t.Vej1Nw, obj);
  } else {
    formatToPartsResult = formatToParts(t["7/Xl0S"], obj);
  }
  obj = { content: formatToPartsResult };
  const merged = Object.assign(require("createCommonMessage.tsx")(message));
  return obj;
};