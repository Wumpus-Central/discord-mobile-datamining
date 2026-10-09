// === Module 4697: GuildLeaderboardTypes ===

// Module 4697 (GuildLeaderboardTypes)
import size from "module_2" /* 2 */;

const GamingLeaderboardStat = { GAMING_LEADERBOARD_STAT_UNSPECIFIED: 0, [0]: "GAMING_LEADERBOARD_STAT_UNSPECIFIED", GAMING_LEADERBOARD_STAT_HOURS_PLAYED: 1, [1]: "GAMING_LEADERBOARD_STAT_HOURS_PLAYED", GAMING_LEADERBOARD_STAT_DAYS_PLAYED: 2, [2]: "GAMING_LEADERBOARD_STAT_DAYS_PLAYED", GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED: 3, [3]: "GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED" };
const obj2 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", COMPETITION_ENDED: 1, [1]: "COMPETITION_ENDED", COMPETITION_STARTED: 2, [2]: "COMPETITION_STARTED", LEADER_CHANGED: 3, [3]: "LEADER_CHANGED" };
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardTypes.tsx");

export { GamingLeaderboardStat };
export const GuildSpaceLeaderboardEvent = obj2;
export const parseGuildSpaceLeaderboardMessageData = function parseGuildSpaceLeaderboardMessageData(leaderboard) {
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
                    obj = { event: null, stat: null, userId: null, secondaryUserId: null, value: null };
                    ({ event: obj.event, stat: obj.stat, user_id: obj.userId, secondary_user_id } = leaderboard);
                    if (secondary_user_id == null) {
                      secondary_user_id = null;
                    }
                    obj.secondaryUserId = secondary_user_id;
                    obj.value = leaderboard.value;
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
    let current_leader_stat = member_gaming_leaderboard_data.current_leader_stat;
    if (current_leader_stat == null) {
      current_leader_stat = null;
    }
    let current_leader_week = member_gaming_leaderboard_data.current_leader_week;
    if (current_leader_week == null) {
      current_leader_week = null;
    }
    if (null == winning_stat) {
      if (null == winning_streak) {
        if (null == winning_week) {
          if (null == current_leader_stat) {
            let tmp6 = null;
          }
          return tmp6;
        }
      }
    }
    const obj = { winningStat: winning_stat, winningStreak: winning_streak, winningWeek: winning_week, winningValue: null, currentLeaderStat: null, currentLeaderWeek: null };
    let winning_value = member_gaming_leaderboard_data.winning_value;
    if (winning_value == null) {
      winning_value = null;
    }
    obj.winningValue = winning_value;
    obj.currentLeaderStat = current_leader_stat;
    obj.currentLeaderWeek = current_leader_week;
    tmp6 = obj;
  }
};