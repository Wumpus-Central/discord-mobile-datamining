// === Module 8399: GuildSpaceSystemMessageUtils ===

// Module 8399 (GuildSpaceSystemMessageUtils)
import util from "util" /* 1114 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4929 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8400 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8401 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 8402 */;
import MessageRecord from "MessageRecord" /* 4952 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_space/GuildSpaceSystemMessageUtils.tsx");

export function stringifyGuildSpaceSystemMessage(message5, channel) {
  const channel_id = message5.channel_id;
  if (message5 instanceof MessageRecord) {
    const guildSpaceData = message5.guildSpaceData;
    let music1;
    if (guildSpaceData != null) {
      music1 = guildSpaceData.music;
    }
    let music = music1;
  } else {
    const guild_space_data = message5.guild_space_data;
    if (guild_space_data != null) {
      music = guild_space_data.music;
    }
  }
  const result = PopularMusicSystemMessageTypes.parseGuildSpaceMusicMessageData(music);
  if (null != result) {
    const user = UserStore.getUser(result.userId);
    let name = null;
    if (null != user) {
      name = NicknameUtilsDefault.getName(channel.getGuildId(), channel_id, user);
    }
    const musicSystemMessage = PopularMusicSystemMessageCopy.getMusicSystemMessage(result, name);
    if (null == musicSystemMessage) {
      let content2 = message5.content;
    } else {
      const intl2 = util.intl;
      const obj2 = {};
      const merged = Object.assign(musicSystemMessage.values);
      obj2.usernameHook = function usernameHook(arg0) {
        return arg0;
      };
      content2 = intl2.formatToPlainString(musicSystemMessage.message, obj2);
    }
    return content2;
  } else {
    if (message5 instanceof MessageRecord) {
      const guildSpaceData2 = message5.guildSpaceData;
      let leaderboard1;
      if (guildSpaceData2 != null) {
        leaderboard1 = guildSpaceData2.leaderboard;
      }
      let leaderboard = leaderboard1;
    } else {
      const guild_space_data2 = message5.guild_space_data;
      if (guild_space_data2 != null) {
        leaderboard = guild_space_data2.leaderboard;
      }
    }
    const result1 = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData(leaderboard);
    const tmpResult4 = GuildLeaderboardTypes;
    let userId;
    if (result1 != null) {
      userId = result1.userId;
    }
    let secondaryUserId;
    const user1 = UserStore.getUser(userId);
    if (result1 != null) {
      secondaryUserId = result1.secondaryUserId;
    }
    const guildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage(result1, user1, UserStore.getUser(secondaryUserId));
    if (null == guildSpaceLeaderboardMessage) {
      return message5.content;
    } else {
      const guildId = channel.getGuildId();
      const obj4 = { username: null, previousUsername: null };
      const tmpResult6 = GuildLeaderboardSystemMessageCopy;
      obj4.username = NicknameUtilsDefault.getName(guildId, channel_id, guildSpaceLeaderboardMessage.subject);
      let str = "";
      if (guildSpaceLeaderboardMessage.data.event === GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
        str = NicknameUtilsDefault.getName(guildId, channel_id, guildSpaceLeaderboardMessage.previousLeader);
        const tmp25Result = NicknameUtilsDefault;
      }
      obj4.previousUsername = str;
      const leaderboardSystemMessage = tmpResult6.getLeaderboardSystemMessage(guildSpaceLeaderboardMessage.data, obj4);
      if (null == leaderboardSystemMessage) {
        let content = message5.content;
      } else {
        const intl = util.intl;
        const obj5 = {};
        const merged1 = Object.assign(leaderboardSystemMessage.values);
        obj5.usernameHook = function usernameHook(arg0) {
          return arg0;
        };
        obj5.previousUsernameHook = function previousUsernameHook(arg0) {
          return arg0;
        };
        content = intl.formatToPlainString(leaderboardSystemMessage.message, obj5);
      }
      return content;
    }
    const tmpResult5 = GuildLeaderboardSystemMessageCopy;
  }
}