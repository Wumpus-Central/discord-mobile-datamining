// === Module 8208: createUserJoinSystemMessage ===

// Module 8208 (createUserJoinSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8187 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import getSystemMessageUserJoinMobileDefault from "getSystemMessageUserJoinMobile" /* 8209 */;
import computeIsStickerReplyEnabled from "computeIsStickerReplyEnabled" /* 8216 */;
import transform from "transform" /* 8217 */;
import pickHelloSticker from "pickHelloSticker" /* 8220 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { SystemChannelFlags } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

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
      let tmpResult = computeIsStickerReplyEnabled;
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = transform;
        transformStickerResult = tmpResult.transformSticker(pickHelloSticker.pickWelcomeSticker(message.id));
        const tmpResult1 = pickHelloSticker;
      }
    }
  }
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj[1] = transformStickerResult;
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t["7Tj6HT"]);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};