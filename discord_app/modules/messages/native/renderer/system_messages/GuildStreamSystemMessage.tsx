// === Module 7677: GuildStreamSystemMessage ===

// Module 7677 (GuildStreamSystemMessage)
import intl2 from "intl" /* 1126 */;
import Constants from "Constants" /* 4932 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7619 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7621 */;
import createCommonMessageDefault from "createCommonMessage" /* 7623 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 7639 */;
import size from "module_2" /* 2 */;

const StreamTypes = Constants.StreamTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx");

export const createGuildStreamSystemMessage = function createGuildStreamSystemMessage(message) {
  let channel_id;
  let formatToPartsResult;
  let guild_id;
  let obj4;
  message = message.message;
  let messageReference = message.messageReference;
  const roleStyle = message.roleStyle;
  const author = message.author;
  if (messageReference == null) {
    messageReference = {};
  }
  ({ channel_id, guild_id } = messageReference);
  const tmp3 = getHumanizedCallDurationDefault(message);
  const obj2 = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj2.getMessageAuthorWithProcessedColor(message);
  const obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  const obj3 = { action: "bindJoinStream", stream: obj4 };
  obj4 = { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: author.id, guildId: guild_id };
  const obj5 = { ended: null != tmp3, content: formatToPartsResult };
  const intl = intl2.intl;
  const formatToParts = intl.formatToParts;
  const t = intl2.t;
  if (null != tmp3) {
    const FP7rUI = t.FP7rUI;
    const obj6 = { duration: tmp3 };
    const merged = Object.assign(obj);
    formatToPartsResult = formatToParts(FP7rUI, obj6);
  } else {
    const dMmbGk = t.dMmbGk;
    const obj7 = { onJoinStream: obj3 };
    const merged1 = Object.assign(obj);
    formatToPartsResult = formatToParts(dMmbGk, obj7);
  }
  const merged2 = Object.assign(createCommonMessageDefault(message));
  return obj5;
};