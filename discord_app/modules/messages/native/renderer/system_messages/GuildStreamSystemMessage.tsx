// discord_app/modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx
import { StreamTypes } from "StreamIssueReportReasons";

const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx");

export const createGuildStreamSystemMessage = function createGuildStreamSystemMessage(roleStyle) {
  let channel_id;
  let guild_id;
  const message = roleStyle.message;
  let messageReference = message.messageReference;
  if (messageReference == null) {
    messageReference = {};
  }
  ({ channel_id, guild_id } = messageReference);
  const tmp3 = require("../../../getHumanizedCallDuration.tsx")(message);
  let obj1 = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
  let obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id };
  obj1 = { ended: tmp4, content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const formatToParts = intl.formatToParts;
  const t = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t;
  if (null != tmp3) {
    const obj2 = {};
    const merged = Object.assign(obj);
    obj2.duration = tmp3;
    let formatToPartsResult = formatToParts(t.FP7rUI, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    obj3.onJoinStream = { action: "bindJoinStream", stream: obj };
    formatToPartsResult = formatToParts(t.dMmbGk, obj3);
  }
  obj1[1] = formatToPartsResult;
  const merged2 = Object.assign(require("createCommonMessage.tsx")(roleStyle));
  return obj1;
};