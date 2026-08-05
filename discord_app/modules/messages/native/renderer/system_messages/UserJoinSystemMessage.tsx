// discord_app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { SystemChannelFlags } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  channel = channel.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = require("../../../../../utils/SystemMessageUtils.tsx").getSystemMessageUserJoinMobile(message.id);
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
      let tmpResult = tmp(7914);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = tmp(7915);
        transformStickerResult = tmpResult.transformSticker(tmp(7918).pickWelcomeSticker(message.id));
        const tmpResult1 = tmp(7918);
      }
    }
  }
  obj = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1236).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp4(7881)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj[1] = transformStickerResult;
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(7882)(roleStyle));
  return obj;
};