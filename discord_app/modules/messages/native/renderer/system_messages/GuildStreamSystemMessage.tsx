// discord_app/modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import Constants from "../../../../go_live/Constants.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import getHumanizedCallDurationDefault from "../../../getHumanizedCallDuration.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const StreamTypes = Constants.StreamTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx",
);

export const createGuildStreamSystemMessage = function createGuildStreamSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let messageReference = message.messageReference;
  if (messageReference == null) {
    messageReference = {};
  }
  ({ channel_id, guild_id } = messageReference);
  const tmp3 = getHumanizedCallDurationDefault(message);
  let obj1 = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
  let obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
  };
  obj = { action: "bindJoinStream", stream: null };
  obj1 = { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id };
  obj.stream = obj1;
  const obj2 = { ended: null != tmp3, content: null };
  const intl = util.intl;
  const formatToParts = intl.formatToParts;
  const t = util.t;
  if (null != tmp3) {
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3.duration = tmp3;
    let formatToPartsResult = formatToParts(t.FP7rUI, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(obj);
    obj4.onJoinStream = obj;
    formatToPartsResult = formatToParts(t.dMmbGk, obj4);
  }
  obj2.content = formatToPartsResult;
  const merged2 = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};
