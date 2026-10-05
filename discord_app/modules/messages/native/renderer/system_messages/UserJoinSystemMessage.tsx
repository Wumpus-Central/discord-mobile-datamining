// discord_app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
import Constants from "../../../../../Constants.tsx";
import intl3 from "../../../../../intl/index.native.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import SystemMessageUtilsDefault from "../../../../../utils/SystemMessageUtils.tsx";
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled.tsx";
import transformSticker2 from "transformSticker.tsx";
import WelcomeCTAUtils from "../../../../welcome_cta/WelcomeCTAUtils.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const SystemChannelFlags = Constants.SystemChannelFlags;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(message) {
  let formatToParts;
  let intl2;
  let obj4;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  let guildId;
  const obj3 = SystemMessageUtilsDefault;
  const systemMessageUserJoinMobile = obj3.getSystemMessageUserJoinMobile(message.id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      const guild = GuildStore.getGuild(guildId);
      const tmp10 =
        null != guild && !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      const tmpResult = useIsStickerReplyEnabled;
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        const transformSticker = transformSticker2.transformSticker;
        transformSticker2;
        const tmpResult4 = WelcomeCTAUtils;
        transformStickerResult = transformSticker(tmpResult4.pickWelcomeSticker(message.id));
      }
    }
  }
  const obj2 = {
    content: formatToParts(systemMessageUserJoinMobile, obj4),
    sticker: transformStickerResult,
    stickerLabel: intl2.string(intl3.t["7Tj6HT"]),
  };
  const intl = intl3.intl;
  formatToParts = intl.formatToParts;
  obj4 = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }),
  };
  intl2 = intl3.intl;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
