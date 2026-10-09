// discord_app/modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2469 from "../GuildSpace.messages.js";
import GuildLeaderboardTypes from "GuildLeaderboardTypes.tsx";

require = fn;
function getLeaderboardSystemMessageValues(value, arg1) {
  const bound = Math.max(value.value, 0);
  const rounded = Math.floor(bound / DurationsDefault.Millis.MINUTE);
  const rounded1 = Math.floor(rounded / DurationsDefault.Minutes.HOUR);
  const result = rounded % DurationsDefault.Minutes.HOUR;
  obj = {};
  const merged = Object.assign(arg1);
  obj.value = value.value;
  if (0 === rounded1) {
    const intl2 = util.intl;
    const obj2 = { minutes: result };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef2469["5AjG8l"], obj2);
  } else {
    const intl = util.intl;
    const time = { hours: rounded1, minutes: result };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2469["Sa+h68"], time);
  }
  obj.gameTime = formatToPlainStringResult;
  return obj;
}
let obj = {};
let obj2 = {};
obj2[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2469.unVTUQ;
obj2[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2469["/JyaTi"];
obj2[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2469["5D7LjH"];
obj[fn(4697).GuildSpaceLeaderboardEvent.COMPETITION_ENDED] = obj2;
const obj3 = {};
obj3[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2469.ptD18B;
obj3[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2469["2IbyWO"];
obj3[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2469.Y6K3qc;
obj[fn(4697).GuildSpaceLeaderboardEvent.COMPETITION_STARTED] = obj3;
const obj4 = {};
obj4[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2469["8MO3bp"];
obj4[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2469["+aHNgn"];
obj4[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2469.CHYFwK;
obj[fn(4697).GuildSpaceLeaderboardEvent.LEADER_CHANGED] = obj4;
const obj5 = {};
const obj6 = {};
obj6[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2469.Wwu6IA;
obj6[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2469.f6TxHV;
obj6[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2469.mhO0Bz;
obj5[fn(4697).GuildSpaceLeaderboardEvent.COMPETITION_ENDED] = obj6;
const obj7 = {};
obj7[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2469.T7CcFq;
obj7[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2469.jUJ7IO;
obj7[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2469.PLdF3A;
obj5[fn(4697).GuildSpaceLeaderboardEvent.COMPETITION_STARTED] = obj7;
const obj8 = {};
obj8[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2469.fVm1Zn;
obj8[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2469.exTWBN;
obj8[fn(4697).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2469.dX9B32;
obj5[fn(4697).GuildSpaceLeaderboardEvent.LEADER_CHANGED] = obj8;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx");

export const resolveGuildSpaceLeaderboardMessage = function resolveGuildSpaceLeaderboardMessage(event, user, user2) {
  if (null != event) {
    if (null != user) {
      let tmp2 = user2;
      if (user2 == null) {
        tmp2 = null;
      }
      if (event.event !== GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
        obj = { data: event, subject: user, previousLeader: tmp2 };
        let tmp5 = obj;
      } else {
        tmp5 = null;
      }
      return tmp5;
    }
  }
  return null;
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
