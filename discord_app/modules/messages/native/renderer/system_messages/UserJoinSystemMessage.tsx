// discord_app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import getSystemMessageUserJoinMobileDefault from "../../../../../utils/SystemMessageUtils.tsx";
import computeIsStickerReplyEnabled from "useIsStickerReplyEnabled.tsx";
import transform from "transformSticker.tsx";
import pickHelloSticker from "../../../../welcome_cta/WelcomeCTAUtils.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../../../stores/GuildStore.tsx";
import { SystemChannelFlags } from "../../../../../Constants.tsx";

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