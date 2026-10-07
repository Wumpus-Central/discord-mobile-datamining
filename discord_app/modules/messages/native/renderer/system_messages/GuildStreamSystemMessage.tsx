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
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
  };
  const obj3 = {
    action: "bindJoinStream",
    stream: { streamType: StreamTypes.GUILD, channelId: channel_id, ownerId: message.author.id, guildId: guild_id },
  };
  const obj5 = { ended: null != tmp3, content: null };
  const intl = util.intl;
  const formatToParts = intl.formatToParts;
  const t = util.t;
  if (null != tmp3) {
    const obj6 = {};
    const merged = Object.assign(obj);
    obj6.duration = tmp3;
    let formatToPartsResult = formatToParts(t.FP7rUI, obj6);
  } else {
    const obj7 = {};
    const merged1 = Object.assign(obj);
    obj7.onJoinStream = obj3;
    formatToPartsResult = formatToParts(t.dMmbGk, obj7);
  }
  obj5.content = formatToPartsResult;
  const merged2 = Object.assign(createCommonMessageDefault(roleStyle));
  return obj5;
};
