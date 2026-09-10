// === Module 10979: GuildLeaderboardUtils ===

// Module 10979 (GuildLeaderboardUtils)
import util from "util" /* 1114 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4232 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx");

export const LEADERBOARD_WINNER_ROLE_NAME_PREFIX = "leaderboard-winner-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const getStatName = function getStatName(winningStat) {
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
    return "Gaming Time";
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    return "Gaming Days";
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    return "Unique Games";
  } else {
    return "Gaming";
  }
};
export const getLeaderboardWinnerBadgeText = function getLeaderboardWinnerBadgeText(prop) {
  let num = prop.winningStreak;
  if (num == null) {
    num = 0;
  }
  if (num > 1) {
    const intl = util.intl;
    let obj = { streakCount: num, statName: null };
    const winningStat = prop.winningStat;
    let str2 = "Gaming Time";
    if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED !== winningStat) {
      str2 = "Gaming Days";
      if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED !== winningStat) {
        str2 = "Gaming";
        if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
          str2 = "Unique Games";
        }
      }
    }
    obj.statName = str2;
    let formatToPlainStringResult = intl.formatToPlainString(util.t.owAd83, obj);
  } else {
    const intl2 = util.intl;
    const winningStat2 = prop.winningStat;
    let str = "Gaming Time";
    if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED !== winningStat2) {
      str = "Gaming Days";
      if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED !== winningStat2) {
        str = "Gaming";
        if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat2) {
          str = "Unique Games";
        }
      }
    }
    obj = { statName: str };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.So4gmj, obj);
  }
  return formatToPlainStringResult;
};
export const encodeWinnerData = function encodeWinnerData(prop) {
  let num = prop.winningStat;
  if (num == null) {
    num = 0;
  }
  let num2 = prop.winningStreak;
  if (num2 == null) {
    num2 = 0;
  }
  let num3 = prop.winningWeek;
  if (num3 == null) {
    num3 = 0;
  }
  return "" + num + "|" + num2 + "|" + num3;
};
export const decodeWinnerData = function decodeWinnerData(str) {
  const tmp = _slicedToArray(str.split("|"), 3);
  return { winningStat: parseInt(tmp[0]), winningStreak: parseInt(tmp[1]), winningWeek: tmp[2] };
};