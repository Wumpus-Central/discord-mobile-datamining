// === Module 7656: GuildLeaderboardSystemMessageCopy ===

// Module 7656 (GuildLeaderboardSystemMessageCopy)
import DurationsDefault from "Durations" /* 1102 */;
import intl3 from "intl" /* 1126 */;
import _modDef2425 from "module_2425" /* 2425 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4497 */;
import size from "module_2" /* 2 */;

function getLeaderboardSystemMessageValues(value, arg1) {
  let formatToPlainStringResult;
  const bound = Math.max(value.value, 0);
  const floorResult = floor(bound / DurationsDefault.Millis.MINUTE);
  const rounded = Math.floor(floorResult / DurationsDefault.Minutes.HOUR);
  const result = floorResult % DurationsDefault.Minutes.HOUR;
  obj = { value: value.value, gameTime: formatToPlainStringResult };
  const merged = Object.assign(arg1);
  if (0 === rounded) {
    const intl2 = intl3.intl;
    const obj2 = { minutes: result };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef2425["5AjG8l"], obj2);
  } else {
    const intl = intl3.intl;
    const time = { hours: rounded, minutes: result };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2425["Sa+h68"], time);
  }
  return obj;
}
let obj = {};
let obj2 = {};
const COMPETITION_ENDED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_ENDED;
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2425.unVTUQ;
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2425["/JyaTi"];
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2425["5D7LjH"];
obj[COMPETITION_ENDED] = obj2;
const obj3 = {};
const COMPETITION_STARTED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_STARTED;
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2425.ptD18B;
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2425["2IbyWO"];
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2425.Y6K3qc;
obj[COMPETITION_STARTED] = obj3;
const obj4 = {};
const LEADER_CHANGED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED;
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2425["8MO3bp"];
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2425["+aHNgn"];
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2425.CHYFwK;
obj[LEADER_CHANGED] = obj4;
const obj5 = {};
const obj6 = {};
const COMPETITION_ENDED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_ENDED;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2425.Wwu6IA;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2425.f6TxHV;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2425.mhO0Bz;
obj5[COMPETITION_ENDED2] = obj6;
const obj7 = {};
const COMPETITION_STARTED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_STARTED;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2425.T7CcFq;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2425.jUJ7IO;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2425.PLdF3A;
obj5[COMPETITION_STARTED2] = obj7;
const obj8 = {};
const LEADER_CHANGED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2425.fVm1Zn;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2425.exTWBN;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2425.dX9B32;
obj5[LEADER_CHANGED2] = obj8;
let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx");

export const resolveGuildSpaceLeaderboardMessage = function resolveGuildSpaceLeaderboardMessage(event, user, user2) {
  if (null != event) {
    if (null != user) {
      let tmp5;
      let tmp2 = user2;
      if (user2 == null) {
        tmp2 = null;
      }
      if (event.event !== GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
        tmp5 = { data: event, subject: user, previousLeader: tmp2 };
        obj = { data: event, subject: user, previousLeader: tmp2 };
      } else {
        tmp5 = null;
      }
      return tmp5;
    }
  }
  return null;
};
export const getLeaderboardSystemMessage = function getLeaderboardSystemMessage(data, arg1) {
  let event;
  let stat;
  ({ event, stat } = data);
  let tmp3 = null;
  if (event !== GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.UNSPECIFIED) {
    tmp3 = null;
    if (stat !== GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNSPECIFIED) {
      obj = { event, stat };
      tmp3 = obj;
    }
  }
  let tmp4 = null;
  if (null != tmp3) {
    tmp4 = { message: obj[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
    const obj2 = { message: obj[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
  }
  return tmp4;
};
export const getMobileLeaderboardSystemMessage = function getMobileLeaderboardSystemMessage(data, arg1) {
  let event;
  let stat;
  ({ event, stat } = data);
  let tmp3 = null;
  if (event !== GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.UNSPECIFIED) {
    tmp3 = null;
    if (stat !== GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNSPECIFIED) {
      tmp3 = { event, stat };
      obj = { event, stat };
    }
  }
  let tmp4 = null;
  if (null != tmp3) {
    tmp4 = { message: obj5[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
    const obj2 = { message: obj5[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
  }
  return tmp4;
};