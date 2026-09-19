// === Module 8242: UserJoinSystemMessage ===

// Module 8242 (UserJoinSystemMessage)
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8217 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8219 */;
import createCommonMessageDefault from "createCommonMessage" /* 8221 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 8243 */;
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled" /* 8254 */;
import transformSticker from "transformSticker" /* 8255 */;
import WelcomeCTAUtils from "WelcomeCTAUtils" /* 8258 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;

require = fn;
const SystemChannelFlags = fn(1074).SystemChannelFlags;
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
      const guild = GuildStore.getGuild(guildId);
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