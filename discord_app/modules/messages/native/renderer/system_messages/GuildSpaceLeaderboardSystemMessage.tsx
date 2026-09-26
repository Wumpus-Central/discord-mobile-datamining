// discord_app/modules/messages/native/renderer/system_messages/GuildSpaceLeaderboardSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GuildLeaderboardTypes from "../../../../guild_space/gaming_leaderboard/GuildLeaderboardTypes.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import GuildLeaderboardSystemMessageCopy from "../../../../guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx";
import _modDef7533 from "../../../../../../_runtime/metro/07533__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const createStyles = fn(4836);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_MUTED });
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildSpaceLeaderboardSystemMessage.tsx",
);

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
  let previousUserId;
  const user = UserStore.getUser(userId);
  if (result != null) {
    previousUserId = result.previousUserId;
  }
  const guildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage(
    result,
    user,
    UserStore.getUser(previousUserId),
  );
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
        const mobileLeaderboardSystemMessage = tmpResult5.getMobileLeaderboardSystemMessage(
          guildSpaceLeaderboardMessage.data,
          obj2,
        );
        if (null == mobileLeaderboardSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor1 = null;
          const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(
            subject,
            channel,
          );
          if (null != previousLeader) {
            userAuthorWithProcessedColor1 = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(
              previousLeader,
              channel,
            );
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
            obj7.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7533);
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
