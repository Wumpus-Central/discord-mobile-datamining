// === Module 8334: createGuildStreamSystemMessage ===

// Module 8334 (createGuildStreamSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import StreamIssueReportReasons from "StreamIssueReportReasons" /* 4511 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8288 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8290 */;
import createCommonMessageDefault from "createCommonMessage" /* 8291 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8307 */;

const StreamTypes = StreamIssueReportReasons.StreamTypes;
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx");

export const createGuildStreamSystemMessage = function createGuildStreamSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let messageReference = message.messageReference;
  if (messageReference == null) {
    messageReference = {};
  }
  ({ channel_id, guild_id } = messageReference);
  const tmp3 = getHumanizedCallDurationDefault(message);
  obj1 = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
  let obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id };
  obj1 = { ended: tmp4, content: null };
  const intl = getSystemLocale.intl;
  const formatToParts = intl.formatToParts;
  const t = getSystemLocale.t;
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
  const merged2 = Object.assign(createCommonMessageDefault(roleStyle));
  return obj1;
};