// === Module 4497: GuildLeaderboardTypes ===

// Module 4497 (GuildLeaderboardTypes)
import size from "module_2" /* 2 */;

const GamingLeaderboardStat = { GAMING_LEADERBOARD_STAT_UNSPECIFIED: 0, [0]: "GAMING_LEADERBOARD_STAT_UNSPECIFIED", GAMING_LEADERBOARD_STAT_HOURS_PLAYED: 1, [1]: "GAMING_LEADERBOARD_STAT_HOURS_PLAYED", GAMING_LEADERBOARD_STAT_DAYS_PLAYED: 2, [2]: "GAMING_LEADERBOARD_STAT_DAYS_PLAYED", GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED: 3, [3]: "GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED" };
const obj2 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", COMPETITION_ENDED: 1, [1]: "COMPETITION_ENDED", COMPETITION_STARTED: 2, [2]: "COMPETITION_STARTED", LEADER_CHANGED: 3, [3]: "LEADER_CHANGED" };
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardTypes.tsx");

export { GamingLeaderboardStat };
export const GuildSpaceLeaderboardEvent = obj2;
export const parseGuildSpaceLeaderboardMessageData = function parseGuildSpaceLeaderboardMessageData(leaderboard) {
  let obj;
  let secondary_user_id;
  let tmp = null;
  if (null != leaderboard) {
    tmp = null;
    if (null != leaderboard.user_id) {
      tmp = null;
      if (null != leaderboard.value) {
        tmp = null;
        if (null != leaderboard.event) {
          tmp = null;
          if (leaderboard.event !== obj2.UNSPECIFIED) {
            tmp = null;
            if (leaderboard.event in tmp2) {
              tmp = null;
              if (null != leaderboard.stat) {
                tmp = null;
                if (leaderboard.stat !== obj.GAMING_LEADERBOARD_STAT_UNSPECIFIED) {
                  tmp = null;
                  if (leaderboard.stat in tmp3) {
                    obj = { event: null, stat: null, userId: null, secondaryUserId: secondary_user_id, value: leaderboard.value };
                    ({ event: obj.event, stat: obj.stat, user_id: obj.userId, secondary_user_id } = leaderboard);
                    if (secondary_user_id == null) {
                      secondary_user_id = null;
                    }
                    tmp = obj;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return tmp;
};
export const parseServerMemberGamingLeaderboardData = function parseServerMemberGamingLeaderboardData(member_gaming_leaderboard_data) {
  let winning_value;
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
      let tmp4;
      if (null == winning_streak) {
        tmp4 = null;
      }
      return tmp4;
    }
    const obj = { winningStat: winning_stat, winningStreak: winning_streak, winningWeek: winning_week, winningValue: winning_value };
    winning_value = member_gaming_leaderboard_data.winning_value;
    if (winning_value == null) {
      winning_value = null;
    }
    tmp4 = obj;
  }
};