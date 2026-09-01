// discord_app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import getSystemMessageUserJoinMobileDefault from "../../../../../utils/SystemMessageUtils.tsx";
import closure_3 from "../../../../../stores/ChannelStore.tsx";
import closure_4 from "../../../../../stores/GuildStore.tsx";
import { SystemChannelFlags } from "../../../../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx",
);

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
      let tmpResult = tmp(7906);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        tmpResult = tmp(7907);
        transformStickerResult = tmpResult.transformSticker(tmp(7910).pickWelcomeSticker(message.id));
        const tmpResult1 = tmp(7910);
      }
    }
  }
  obj = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1236).intl;
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: tmp4(7871)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }),
  };
  obj[0] = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj[1] = transformStickerResult;
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(getSystemLocale.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(7873)(roleStyle));
  return obj;
};
