// discord_app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import SystemMessageUtilsDefault from "../../../../../utils/SystemMessageUtils.tsx";
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled.tsx";
import transformSticker from "transformSticker.tsx";
import WelcomeCTAUtils from "../../../../welcome_cta/WelcomeCTAUtils.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";

require = fn;
const SystemChannelFlags = fn(1074).SystemChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = SystemMessageUtilsDefault.getSystemMessageUserJoinMobile(message.id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      const guild = GuildStore.getGuild(guildId);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      let tmpResult = useIsStickerReplyEnabled;
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = transformSticker;
        transformStickerResult = tmpResult.transformSticker(WelcomeCTAUtils.pickWelcomeSticker(message.id));
        const tmpResult1 = WelcomeCTAUtils;
      }
    }
  }
  obj = { content: null, sticker: null, stickerLabel: null };
  const intl = util.intl;
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
  };
  obj.content = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj.sticker = transformStickerResult;
  const intl2 = util.intl;
  obj.stickerLabel = intl2.string(util.t["7Tj6HT"]);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
