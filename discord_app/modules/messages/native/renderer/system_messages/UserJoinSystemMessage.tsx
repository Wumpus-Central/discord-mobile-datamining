// === Module 7985: createUserJoinSystemMessage ===

// Module 7985 (createUserJoinSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7960 */;
import getSystemMessageUserJoinMobileDefault from "getSystemMessageUserJoinMobile" /* 7986 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;
import closure_4 from "createGuildRecordFromRust" /* 1979 */;
import { SystemChannelFlags } from "ME" /* 1074 */;

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
      let tmpResult = tmp(7997);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = tmp(7998);
        transformStickerResult = tmpResult.transformSticker(tmp(8001).pickWelcomeSticker(message.id));
        const tmpResult1 = tmp(8001);
      }
    }
  }
  obj = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1114).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp4(7962)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj[1] = transformStickerResult;
  const intl2 = tmp(1114).intl;
  obj[2] = intl2.string(getSystemLocale.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(7964)(roleStyle));
  return obj;
};