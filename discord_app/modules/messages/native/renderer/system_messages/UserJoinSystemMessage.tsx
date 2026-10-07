// === Module 7655: UserJoinSystemMessage ===

// Module 7655 (UserJoinSystemMessage)
import util from "util" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7630 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7632 */;
import createCommonMessageDefault from "createCommonMessage" /* 7634 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 7656 */;
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled" /* 7668 */;
import transformSticker from "transformSticker" /* 7669 */;
import WelcomeCTAUtils from "WelcomeCTAUtils" /* 7672 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;

require = fn;
const SystemChannelFlags = fn(1085).SystemChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = SystemMessageUtilsDefault.getSystemMessageUserJoinMobile(message.id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      guild = GuildStore.getGuild(guildId);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      const tmpResult = useIsStickerReplyEnabled;
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        const tmpResult3 = transformSticker;
        transformStickerResult = tmpResult3.transformSticker(WelcomeCTAUtils.pickWelcomeSticker(message.id));
        const tmpResult4 = WelcomeCTAUtils;
      }
    }
  }
  const obj2 = { content: null, sticker: null, stickerLabel: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(systemMessageUserJoinMobile, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  obj2.sticker = transformStickerResult;
  const intl2 = util.intl;
  obj2.stickerLabel = intl2.string(util.t["7Tj6HT"]);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};