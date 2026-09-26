// discord_app/modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2419 from "../GuildSpace.messages.js";
import GuildLeaderboardTypes from "GuildLeaderboardTypes.tsx";

require = fn;
let obj = {};
let obj2 = {};
obj2[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.unVTUQ;
obj2[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419["/JyaTi"];
obj2[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419["5D7LjH"];
obj[fn(4457).GuildSpaceLeaderboardEvent.COMPETITION_ENDED] = obj2;
let obj3 = {};
obj3[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.ptD18B;
obj3[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419["2IbyWO"];
obj3[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.Y6K3qc;
obj[fn(4457).GuildSpaceLeaderboardEvent.COMPETITION_STARTED] = obj3;
const obj4 = {};
obj4[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419["8MO3bp"];
obj4[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419["+aHNgn"];
obj4[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.CHYFwK;
obj[fn(4457).GuildSpaceLeaderboardEvent.LEADER_CHANGED] = obj4;
const obj5 = {};
const obj6 = {};
obj6[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.Wwu6IA;
obj6[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419.f6TxHV;
obj6[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.mhO0Bz;
obj5[fn(4457).GuildSpaceLeaderboardEvent.COMPETITION_ENDED] = obj6;
const obj7 = {};
obj7[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.T7CcFq;
obj7[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419.jUJ7IO;
obj7[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.PLdF3A;
obj5[fn(4457).GuildSpaceLeaderboardEvent.COMPETITION_STARTED] = obj7;
const obj8 = {};
obj8[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.fVm1Zn;
obj8[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419.exTWBN;
obj8[fn(4457).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.dX9B32;
obj5[fn(4457).GuildSpaceLeaderboardEvent.LEADER_CHANGED] = obj8;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx",
);

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
    const obj2 = { message: obj[tmp3.event][tmp3.stat], values: null };
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.max(data.value, 0);
    const rounded = Math.floor(bound / DurationsDefault.Millis.MINUTE);
    const obj3 = {};
    const merged = Object.assign(arg1);
    obj3.value = data.value;
    const intl = util.intl;
    const time = { hours: null, minutes: null };
    const _Math3 = Math;
    time.hours = Math.floor(rounded / DurationsDefault.Minutes.HOUR);
    time.minutes = rounded % DurationsDefault.Minutes.HOUR;
    obj3.gameTime = intl.formatToPlainString(_modDef2419["Sa+h68"], time);
    obj2.values = obj3;
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
    const obj2 = { message: obj5[tmp3.event][tmp3.stat], values: null };
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.max(data.value, 0);
    const rounded = Math.floor(bound / DurationsDefault.Millis.MINUTE);
    const obj3 = {};
    const merged = Object.assign(arg1);
    obj3.value = data.value;
    const intl = util.intl;
    const time = { hours: null, minutes: null };
    const _Math3 = Math;
    time.hours = Math.floor(rounded / DurationsDefault.Minutes.HOUR);
    time.minutes = rounded % DurationsDefault.Minutes.HOUR;
    obj3.gameTime = intl.formatToPlainString(_modDef2419["Sa+h68"], time);
    obj2.values = obj3;
    tmp4 = obj2;
  }
  return tmp4;
};
