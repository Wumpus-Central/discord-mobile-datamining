// === Module 7769: GuildSpaceLeaderboardSystemMessage ===

// Module 7769 (GuildSpaceLeaderboardSystemMessage)
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4503 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7616 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7630 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7632 */;
import createCommonMessageDefault from "createCommonMessage" /* 7634 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 7667 */;
import AssetRegistryDefault from "AssetRegistry" /* 7770 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.ICON_MUTED };
let closure_5 = createStyles.createNativeStyleProperties(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceLeaderboardSystemMessage.tsx");

export const createGuildSpaceLeaderboardSystemMessage = function createGuildSpaceLeaderboardSystemMessage(theme) {
  let guildId;
  let message;
  let obj11;
  let obj3;
  let previousLeader;
  let roleStyle;
  let str;
  let subject;
  let tmpResult8;
  ({ message, roleStyle } = theme);
  theme = theme.theme;
  const guildSpaceData = message.guildSpaceData;
  let leaderboard;
  const parseGuildSpaceLeaderboardMessageData = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData;
  GuildLeaderboardTypes;
  if (guildSpaceData != null) {
    leaderboard = guildSpaceData.leaderboard;
  }
  const result = parseGuildSpaceLeaderboardMessageData(leaderboard);
  let userId;
  const resolveGuildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage;
  const getUser = UserStore.getUser;
  GuildLeaderboardSystemMessageCopy;
  if (result != null) {
    userId = result.userId;
  }
  let secondaryUserId;
  const user = getUser(userId);
  const getUser2 = UserStore.getUser;
  if (result != null) {
    secondaryUserId = result.secondaryUserId;
  }
  const guildSpaceLeaderboardMessage = resolveGuildSpaceLeaderboardMessage(result, user, getUser2(secondaryUserId));
  const channel = ChannelStore.getChannel(message.channel_id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (null != guildSpaceLeaderboardMessage) {
    if (null != channel) {
      if (null != guildId) {
        ({ subject, previousLeader } = guildSpaceLeaderboardMessage);
        const obj = { username: obj11.getName(guildId, channel.id, subject), previousUsername: str };
        const getMobileLeaderboardSystemMessage = GuildLeaderboardSystemMessageCopy.getMobileLeaderboardSystemMessage;
        const data = guildSpaceLeaderboardMessage.data;
        GuildLeaderboardSystemMessageCopy;
        str = "";
        obj11 = NicknameUtilsDefault;
        if (null != previousLeader) {
          const tmp22Result = NicknameUtilsDefault;
          str = tmp22Result.getName(guildId, channel.id, previousLeader);
        }
        const mobileLeaderboardSystemMessage = getMobileLeaderboardSystemMessage(data, obj);
        if (null == mobileLeaderboardSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor1 = null;
          const tmpResult6 = useAuthorWithProcessedColor;
          const userAuthorWithProcessedColor = tmpResult6.getUserAuthorWithProcessedColor(subject, channel);
          if (null != previousLeader) {
            const tmpResult7 = useAuthorWithProcessedColor;
            userAuthorWithProcessedColor1 = tmpResult7.getUserAuthorWithProcessedColor(previousLeader, channel);
          }
          const tmp16 = closure_5(theme);
          const intl = intl2.intl;
          const obj2 = { usernameOnClick: formatUsernameOnClickDefault(obj3) };
          const formatToParts = intl.formatToParts;
          const message2 = mobileLeaderboardSystemMessage.message;
          const merged = Object.assign(mobileLeaderboardSystemMessage.values);
          obj3 = { userId: subject.id, message, author: userAuthorWithProcessedColor, roleStyle };
          if (null != userAuthorWithProcessedColor1) {
            let obj6;
            if (null != previousLeader) {
              const obj4 = { userId: previousLeader.id, message, author: userAuthorWithProcessedColor1, roleStyle };
              obj6 = formatUsernameOnClickDefault(obj4);
            }
            obj2.previousUsernameOnClick = obj6;
            const obj5 = { content: formatToParts(message2, obj2), iconUrl: tmpResult8.getAssetUriForEmbed(AssetRegistryDefault), iconTintColor: tmp16.iconTintColor };
            tmpResult8 = renderer_EmbedUtils;
            const merged1 = Object.assign(createCommonMessageDefault(theme));
            return obj5;
          }
          obj6 = {};
        }
      }
    }
  }
  return null;
};