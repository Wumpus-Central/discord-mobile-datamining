// === Module 8208: createUserJoinSystemMessage ===

// Module 8208 (createUserJoinSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import getSystemMessageUserJoinMobileDefault from "getSystemMessageUserJoinMobile" /* 8209 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import { SystemChannelFlags } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  channel = channel.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = getSystemMessageUserJoinMobileDefault.getSystemMessageUserJoinMobile(message.id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      guild = guild.getGuild(guildId);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      let tmpResult = tmp(8216);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = tmp(8217);
        transformStickerResult = tmpResult.transformSticker(tmp(8220).pickWelcomeSticker(message.id));
        const tmpResult1 = tmp(8220);
      }
    }
  }
  obj = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1236).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp4(8187)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj[1] = transformStickerResult;
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(getSystemLocale.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(8188)(roleStyle));
  return obj;
};