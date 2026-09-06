// discord_app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import SystemMessageUtilsDefault from "../../../../../utils/SystemMessageUtils.tsx";
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
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: tmp4(7962)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }),
  };
  obj.content = intl.formatToParts(systemMessageUserJoinMobile, obj);
  obj.sticker = transformStickerResult;
  const intl2 = tmp(1114).intl;
  obj.stickerLabel = intl2.string(util.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(7964)(roleStyle));
  return obj;
};
