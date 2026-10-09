// === Module 8098: GuildSpaceLeaderboardSystemMessage ===

// Module 8098 (GuildSpaceLeaderboardSystemMessage)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4697 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5406 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7872 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 7996 */;
import _modDef8099 from "module_8099" /* 8099 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const createStyles = fn(5091);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_MUTED });
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceLeaderboardSystemMessage.tsx");

export const createGuildSpaceLeaderboardSystemMessage = function createGuildSpaceLeaderboardSystemMessage(theme) {
  ({ message, roleStyle } = theme);
  const guildSpaceData = message.guildSpaceData;
  let leaderboard;
  if (guildSpaceData != null) {
    leaderboard = guildSpaceData.leaderboard;
  }
  const result = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData(leaderboard);
  let userId;
  if (result != null) {
    userId = result.userId;
  }
  let secondaryUserId;
  const user = UserStore.getUser(userId);
  if (result != null) {
    secondaryUserId = result.secondaryUserId;
  }
  const guildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage(result, user, UserStore.getUser(secondaryUserId));
  const channel = ChannelStore.getChannel(message.channel_id);
  if (channel != null) {
    const guildId = channel.getGuildId();
  }
  if (null != guildSpaceLeaderboardMessage) {
    if (null != channel) {
      if (null != guildId) {
        ({ subject, previousLeader } = guildSpaceLeaderboardMessage);
        const obj2 = { username: null, previousUsername: null };
        const tmpResult5 = GuildLeaderboardSystemMessageCopy;
        obj2.username = NicknameUtilsDefault.getName(guildId, channel.id, subject);
        let str = "";
        if (null != previousLeader) {
          str = NicknameUtilsDefault.getName(guildId, channel.id, previousLeader);
          const tmp18Result = NicknameUtilsDefault;
        }
        obj2.previousUsername = str;
        const mobileLeaderboardSystemMessage = tmpResult5.getMobileLeaderboardSystemMessage(guildSpaceLeaderboardMessage.data, obj2);
        if (null == mobileLeaderboardSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor1 = null;
          const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(subject, channel);
          if (null != previousLeader) {
            userAuthorWithProcessedColor1 = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(previousLeader, channel);
            const tmpResult7 = useAuthorWithProcessedColor;
          }
          const tmpResult6 = useAuthorWithProcessedColor;
          const intl = util.intl;
          const obj4 = {};
          const merged = Object.assign(mobileLeaderboardSystemMessage.values);
          const obj5 = { userId: subject.id, message, author: userAuthorWithProcessedColor, roleStyle };
          obj4.usernameOnClick = formatUsernameOnClickDefault(obj5);
          if (null != userAuthorWithProcessedColor1) {
            if (null != previousLeader) {
              const obj6 = { userId: previousLeader.id, message, author: userAuthorWithProcessedColor1, roleStyle };
              let obj8 = formatUsernameOnClickDefault(obj6);
            }
            const obj7 = { content: null, iconUrl: null, iconTintColor: null };
            obj4.previousUsernameOnClick = obj8;
            obj7.content = intl.formatToParts(mobileLeaderboardSystemMessage.message, obj4);
            obj7.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8099);
            obj7.iconTintColor = tmp13.iconTintColor;
            const merged1 = Object.assign(createCommonMessageDefault(theme));
            return obj7;
          }
          obj8 = {};
          tmp13 = closure_5(theme.theme);
        }
      }
    }
  }
  return null;
};