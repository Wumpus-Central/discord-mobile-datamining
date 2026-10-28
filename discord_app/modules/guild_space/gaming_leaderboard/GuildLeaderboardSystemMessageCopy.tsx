// === Module 8389: GuildLeaderboardSystemMessageCopy ===

// Module 8389 (GuildLeaderboardSystemMessageCopy)
import DurationsDefault from "Durations" /* 1101 */;
import util from "util" /* 1125 */;
import _modDef2439 from "module_2439" /* 2439 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4924 */;

require = fn;
function getLeaderboardSystemMessageValues(secondaryValue, arg1) {
  const bound = Math.max(secondaryValue.secondaryValue, 0);
  const rounded = Math.floor(bound / DurationsDefault.Millis.MINUTE);
  const rounded1 = Math.floor(rounded / DurationsDefault.Minutes.HOUR);
  const result = rounded % DurationsDefault.Minutes.HOUR;
  obj = {};
  const merged = Object.assign(arg1);
  obj.value = secondaryValue.value;
  if (0 === rounded1) {
    const intl2 = util.intl;
    const obj2 = { minutes: result };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef2439["5AjG8l"], obj2);
  } else {
    const intl = util.intl;
    const time = { hours: rounded1, minutes: result };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2439["Sa+h68"], time);
  }
  obj.gameTime = formatToPlainStringResult;
  return obj;
}
let obj = {};
let obj2 = {};
obj2[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2439.unVTUQ;
obj2[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2439["/JyaTi"];
obj2[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2439["5D7LjH"];
obj[fn(4924).GuildSpaceLeaderboardEvent.COMPETITION_ENDED] = obj2;
const obj3 = {};
obj3[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2439.ptD18B;
obj3[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2439["2IbyWO"];
obj3[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2439.Y6K3qc;
obj[fn(4924).GuildSpaceLeaderboardEvent.COMPETITION_STARTED] = obj3;
const obj4 = {};
obj4[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2439["8MO3bp"];
obj4[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2439["+aHNgn"];
obj4[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2439.CHYFwK;
obj[fn(4924).GuildSpaceLeaderboardEvent.LEADER_CHANGED] = obj4;
const obj5 = {};
const obj6 = {};
obj6[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2439.Wwu6IA;
obj6[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2439.f6TxHV;
obj6[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2439.mhO0Bz;
obj5[fn(4924).GuildSpaceLeaderboardEvent.COMPETITION_ENDED] = obj6;
const obj7 = {};
obj7[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2439.T7CcFq;
obj7[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2439.jUJ7IO;
obj7[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2439.PLdF3A;
obj5[fn(4924).GuildSpaceLeaderboardEvent.COMPETITION_STARTED] = obj7;
const obj8 = {};
obj8[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2439.fVm1Zn;
obj8[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2439.exTWBN;
obj8[fn(4924).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2439.dX9B32;
obj5[fn(4924).GuildSpaceLeaderboardEvent.LEADER_CHANGED] = obj8;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx");

export const resolveGuildSpaceLeaderboardMessage = function resolveGuildSpaceLeaderboardMessage(result1, user, user2) {
  let tmp = null;
  if (null != result1) {
    let tmp2 = user;
    obj = { data: result1, subject: null, previousLeader: null };
    if (user == null) {
      tmp2 = null;
    }
    let tmp3 = user2;
    obj.subject = tmp2;
    if (user2 == null) {
      tmp3 = null;
    }
    obj.previousLeader = tmp3;
    tmp = obj;
  }
  return tmp;
};
export const getLeaderboardSystemMessage = function getLeaderboardSystemMessage(data, arg1) {
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
    const obj2 = { message: obj[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
    tmp4 = obj2;
  }
  return tmp4;
};
export const getMobileLeaderboardSystemMessage = function getMobileLeaderboardSystemMessage(data, arg1) {
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
    const obj2 = { message: obj5[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
    tmp4 = obj2;
  }
  return tmp4;
};