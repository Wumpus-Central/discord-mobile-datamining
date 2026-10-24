// === Module 8460: GuildSpaceMusicSystemMessage ===

// Module 8460 (GuildSpaceMusicSystemMessage)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5989 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8277 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8318 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8320 */;
import createCommonMessageDefault from "createCommonMessage" /* 8322 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8354 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8355 */;
import _modDef8461 from "module_8461" /* 8461 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 6689 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const createStyles = fn(4971);
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
            obj5.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8461);
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