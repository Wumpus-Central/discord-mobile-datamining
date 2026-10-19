// === Module 8402: GuildSpaceLeaderboardSystemMessage ===

// Module 8402 (GuildSpaceLeaderboardSystemMessage)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4868 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5944 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8221 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8262 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8264 */;
import createCommonMessageDefault from "createCommonMessage" /* 8266 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 8300 */;
import _modDef8403 from "module_8403" /* 8403 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const createStyles = fn(4945);
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
        ({ subject, previousLeader, data } = guildSpaceLeaderboardMessage);
        const obj2 = { username: null, previousUsername: null };
        const tmpResult6 = GuildLeaderboardSystemMessageCopy;
        obj2.username = NicknameUtilsDefault.getName(guildId, channel.id, subject);
        let str = "";
        if (data.event === GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
          str = NicknameUtilsDefault.getName(guildId, channel.id, previousLeader);
          const tmp22Result = NicknameUtilsDefault;
        }
        obj2.previousUsername = str;
        const mobileLeaderboardSystemMessage = tmpResult6.getMobileLeaderboardSystemMessage(data, obj2);
        if (null == mobileLeaderboardSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor1 = null;
          const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(subject, channel);
          if (null != previousLeader) {
            userAuthorWithProcessedColor1 = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(previousLeader, channel);
            const tmpResult8 = useAuthorWithProcessedColor;
          }
          const tmpResult7 = useAuthorWithProcessedColor;
          const intl = util.intl;
          const obj4 = {};
          const merged = Object.assign(mobileLeaderboardSystemMessage.values);
          let id;
          const tmp13 = closure_5(theme.theme);
          if (subject != null) {
            id = subject.id;
          }
          if (id == null) {
            id = data.userId;
          }
          const obj5 = { userId: id, message, author: userAuthorWithProcessedColor, roleStyle };
          obj4.usernameOnClick = formatUsernameOnClickDefault(obj5);
          if (data.event === GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
            let id1;
            if (previousLeader != null) {
              id1 = previousLeader.id;
            }
            if (id1 == null) {
              id1 = data.secondaryUserId;
            }
            const obj6 = { userId: id1, message, author: null, roleStyle: null };
            if (userAuthorWithProcessedColor1 == null) {
              userAuthorWithProcessedColor1 = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(null, channel);
              const tmpResult9 = useAuthorWithProcessedColor;
            }
            obj6.author = userAuthorWithProcessedColor1;
            obj6.roleStyle = roleStyle;
            let tmp22Result2Result = formatUsernameOnClickDefault(obj6);
            const tmp22Result4 = formatUsernameOnClickDefault;
          } else {
            tmp22Result2Result = {};
          }
          const obj7 = { content: null, iconUrl: null, iconTintColor: null };
          obj4.previousUsernameOnClick = tmp22Result2Result;
          obj7.content = intl.formatToParts(mobileLeaderboardSystemMessage.message, obj4);
          const tmp22Result3 = formatUsernameOnClickDefault;
          obj7.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8403);
          obj7.iconTintColor = tmp13.iconTintColor;
          const merged1 = Object.assign(createCommonMessageDefault(theme));
          return obj7;
        }
      }
    }
  }
  return null;
};