// === Module 4234: GuildLeaderboardTypes ===

// Module 4234 (GuildLeaderboardTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardTypes.tsx");

export const GamingLeaderboardStat = { GAMING_LEADERBOARD_STAT_UNSPECIFIED: 0, [0]: "GAMING_LEADERBOARD_STAT_UNSPECIFIED", GAMING_LEADERBOARD_STAT_HOURS_PLAYED: 1, [1]: "GAMING_LEADERBOARD_STAT_HOURS_PLAYED", GAMING_LEADERBOARD_STAT_DAYS_PLAYED: 2, [2]: "GAMING_LEADERBOARD_STAT_DAYS_PLAYED", GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED: 3, [3]: "GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED" };
export const parseServerMemberGamingLeaderboardData = function parseServerMemberGamingLeaderboardData(member_gaming_leaderboard_data) {
  if (null == member_gaming_leaderboard_data) {
    return null;
  } else {
    let winning_stat = member_gaming_leaderboard_data.winning_stat;
    if (winning_stat == null) {
      winning_stat = null;
    }
    let winning_streak = member_gaming_leaderboard_data.winning_streak;
    if (winning_streak == null) {
      winning_streak = null;
    }
    let winning_week = member_gaming_leaderboard_data.winning_week;
    if (winning_week == null) {
      winning_week = null;
    }
    if (null == winning_stat) {
      if (null == winning_streak) {
        let tmp4 = null;
      }
      return tmp4;
    }
    const obj = { winningStat: winning_stat, winningStreak: winning_streak, winningWeek: winning_week };
    tmp4 = obj;
  }
};