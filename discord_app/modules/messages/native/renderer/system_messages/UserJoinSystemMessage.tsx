// discord_app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import SystemMessageUtilsDefault from "../../../../../utils/SystemMessageUtils.tsx";
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled.tsx";
import transformSticker from "transformSticker.tsx";
import WelcomeCTAUtils from "../../../../welcome_cta/WelcomeCTAUtils.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";

require = fn;
const SystemChannelFlags = fn(1085).SystemChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(message) {
  message = message.message;
  if (message.author.bot) {
    ({ message: message2, roleStyle } = message);
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message2);
    const obj2 = { appName: messageAuthorWithProcessedColor.nick, appNameOnClick: null };
    const obj4 = { message: message2, author: messageAuthorWithProcessedColor, roleStyle };
    obj2.appNameOnClick = formatUsernameOnClickDefault(obj4);
    const actor = message2.actor;
    if (null == actor) {
      const obj5 = { content: null };
      const intl3 = util.intl;
      obj5.content = intl3.formatToParts(util.t.EAkHd2, obj2);
      const merged = Object.assign(createCommonMessageDefault(message));
      let obj6 = obj5;
    } else {
      const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(
        actor,
        ChannelStore.getChannel(message2.channel_id),
      );
      obj6 = { content: null };
      const intl4 = util.intl;
      const obj7 = { username: userAuthorWithProcessedColor.nick, usernameOnClick: null };
      const obj8 = { userId: actor.id, message: message2, author: userAuthorWithProcessedColor, roleStyle };
      obj7.usernameOnClick = formatUsernameOnClickDefault(obj8);
      const merged1 = Object.assign(obj2);
      obj6.content = intl4.formatToParts(util.t["x6G/Rr"], obj7);
      const merged2 = Object.assign(createCommonMessageDefault(message));
      const tmp22Result = useAuthorWithProcessedColor;
    }
    return obj6;
  } else {
    const messageAuthorWithProcessedColor1 = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
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
        let tmp13 = null != guild;
        if (tmp13) {
          tmp13 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
        }
        const tmp2Result = useIsStickerReplyEnabled;
        if (tmp2Result.computeIsStickerReplyEnabled(guildId, channel, message, tmp13)) {
          const tmp2Result3 = transformSticker;
          transformStickerResult = tmp2Result3.transformSticker(WelcomeCTAUtils.pickWelcomeSticker(message.id));
          const tmp2Result4 = WelcomeCTAUtils;
        }
      }
    }
    const obj9 = { content: null, sticker: null, stickerLabel: null };
    const intl = util.intl;
    const obj11 = { username: messageAuthorWithProcessedColor1.nick, usernameOnClick: null };
    const obj12 = { message, author: messageAuthorWithProcessedColor1, roleStyle: tmp };
    obj11.usernameOnClick = formatUsernameOnClickDefault(obj12);
    obj9.content = intl.formatToParts(systemMessageUserJoinMobile, obj11);
    obj9.sticker = transformStickerResult;
    const intl2 = util.intl;
    obj9.stickerLabel = intl2.string(util.t["7Tj6HT"]);
    const merged3 = Object.assign(createCommonMessageDefault(message));
    return obj9;
  }
};
