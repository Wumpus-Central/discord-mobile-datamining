// discord_app/modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import StreamIssueReportReasons from "../../../../go_live/Constants.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import getHumanizedCallDurationDefault from "../../../getHumanizedCallDuration.tsx";

const StreamTypes = StreamIssueReportReasons.StreamTypes;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx");

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
  { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj = { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id };
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