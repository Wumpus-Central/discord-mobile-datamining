// === Module 8493: GuildSpaceMusicSystemMessage ===

// Module 8493 (GuildSpaceMusicSystemMessage)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6025 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8309 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8351 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8353 */;
import createCommonMessageDefault from "createCommonMessage" /* 8355 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8387 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8388 */;
import _modDef8494 from "module_8494" /* 8494 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 6724 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const createStyles = fn(5004);
let closure_6 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_MUTED });
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceMusicSystemMessage.tsx");

export const createGuildSpaceMusicSystemMessage = function createGuildSpaceMusicSystemMessage(message) {
  message = message.message;
  ({ roleStyle, theme } = message);
  const guildSpaceData = message.guildSpaceData;
  let music;
  if (guildSpaceData != null) {
    music = guildSpaceData.music;
  }
  const result = PopularMusicSystemMessageTypes.parseGuildSpaceMusicMessageData(music);
  const channel = ChannelStore.getChannel(message.channel_id);
  if (channel != null) {
    const guildId = channel.getGuildId();
  }
  if (null != result) {
    if (null != channel) {
      if (null != guildId) {
        if (null != result.userId) {
          const member = GuildMemberRequesterStore.requestMember(guildId, result.userId);
        }
        const user = UserStore.getUser(result.userId);
        let name = null;
        if (null != user) {
          name = NicknameUtilsDefault.getName(guildId, channel.id, user);
        }
        const mobileMusicSystemMessage = PopularMusicSystemMessageCopy.getMobileMusicSystemMessage(result, name);
        if (null == mobileMusicSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor = null;
          if (null != user) {
            userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, channel);
            const tmpResult3 = useAuthorWithProcessedColor;
          }
          const intl = util.intl;
          const obj2 = {};
          const merged = Object.assign(mobileMusicSystemMessage.values);
          if (null != user) {
            if (null != userAuthorWithProcessedColor) {
              const obj3 = { userId: user.id, message, author: userAuthorWithProcessedColor, roleStyle };
              let obj6 = formatUsernameOnClickDefault(obj3);
            }
            const obj5 = { content: null, iconUrl: null, iconTintColor: null };
            obj2.usernameOnClick = obj6;
            obj5.content = intl.formatToParts(mobileMusicSystemMessage.message, obj2);
            obj5.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8494);
            obj5.iconTintColor = tmp15.iconTintColor;
            const merged1 = Object.assign(createCommonMessageDefault(message));
            return obj5;
          }
          obj6 = {};
          tmp15 = closure_6(theme);
        }
        const tmpResult = PopularMusicSystemMessageCopy;
      }
    }
  }
  return null;
};