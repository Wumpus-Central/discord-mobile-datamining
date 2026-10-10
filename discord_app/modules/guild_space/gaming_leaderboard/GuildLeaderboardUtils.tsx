// discord_app/modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2472 from "../GuildSpace.messages.js";
import GuildLeaderboardTypes from "GuildLeaderboardTypes.tsx";
import GuildLeaderboardStatCopy from "GuildLeaderboardStatCopy.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx");

export const LEADERBOARD_WINNER_ROLE_NAME_PREFIX =
  "leaderboard-winner-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const LEADERBOARD_LEADER_ROLE_NAME_PREFIX =
  "leaderboard-leader-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const LEADERBOARD_LEADER_EMOJI = "\u{1F947}";
export const getLeaderboardWinnerBadgeText = function getLeaderboardWinnerBadgeText(activeLeaderboardWinnerData) {
  const name = GuildLeaderboardStatCopy.getStatName(activeLeaderboardWinnerData.winningStat).name;
  const winningStreak = activeLeaderboardWinnerData.winningStreak;
  if (null != winningStreak) {
    if (winningStreak > 1) {
      const intl2 = util.intl;
      const obj2 = { streakCount: winningStreak, statName: name };
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.owAd83, obj2);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.formatToPlainString(util.t.So4gmj, { statName: name });
};
export const getLeaderboardLeaderBadgeText = function getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData) {
  const statName = GuildLeaderboardStatCopy;
  const intl = util.intl;
  return intl.formatToPlainString(_modDef2472.ZaOAtm, {
    statName: statName.getStatName(activeLeaderboardLeaderData.currentLeaderStat).name,
  });
};
export const getLeaderboardWinnerDetailText = function getLeaderboardWinnerDetailText(decodeWinnerDataResult) {
  let num = decodeWinnerDataResult.winningStreak;
  if (num == null) {
    num = 0;
  }
  if (num > 1) {
    const intl5 = util.intl;
    const obj2 = { streakCount: num };
    return intl5.formatToPlainString(_modDef2472["ZCFDN+"], obj2);
  } else {
    const winningValue = decodeWinnerDataResult.winningValue;
    if (null != winningValue) {
      const _Number = Number;
      if (Number.isFinite(winningValue)) {
        if (winningValue >= 0) {
          const winningStat = decodeWinnerDataResult.winningStat;
          if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
            const _Math = Math;
            const rounded = Math.floor(winningValue / DurationsDefault.Millis.MINUTE);
            const _Math2 = Math;
            const rounded1 = Math.floor(rounded / DurationsDefault.Minutes.HOUR);
            const result = rounded % DurationsDefault.Minutes.HOUR;
            if (0 === rounded1) {
              const intl4 = util.intl;
              const obj3 = { minutes: result };
              let formatToPlainStringResult = intl4.formatToPlainString(_modDef2472["/272et"], obj3);
            } else {
              const intl3 = util.intl;
              const time = { hours: rounded1, minutes: result };
              formatToPlainStringResult = intl3.formatToPlainString(_modDef2472.GC7N5H, time);
            }
            return formatToPlainStringResult;
          } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
            const intl2 = util.intl;
            const obj4 = { days: winningValue };
            return intl2.formatToPlainString(_modDef2472.IXdbVJ, obj4);
          } else if (
            GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat
          ) {
            const intl = util.intl;
            const obj = { count: winningValue };
            return intl.formatToPlainString(_modDef2472["/VAMco"], obj);
          } else {
            return null;
          }
        }
      }
    }
    return null;
  }
};
export const getLeaderboardLeaderDetailText = function getLeaderboardLeaderDetailText() {
  const intl = util.intl;
  return intl.string(_modDef2472.jCZgxQ);
};
export const encodeWinnerData = function encodeWinnerData(activeLeaderboardWinnerData) {
  let num = activeLeaderboardWinnerData.winningStat;
  if (num == null) {
    num = 0;
  }
  let num2 = activeLeaderboardWinnerData.winningStreak;
  if (num2 == null) {
    num2 = 0;
  }
  let num3 = activeLeaderboardWinnerData.winningWeek;
  if (num3 == null) {
    num3 = 0;
  }
  let str = activeLeaderboardWinnerData.winningValue;
  if (str == null) {
    str = "";
  }
  return "" + num + "|" + num2 + "|" + num3 + "|" + str;
};
export const decodeWinnerData = function decodeWinnerData(str) {
  const tmp = _slicedToArray(str.split("|"), 4);
  const obj = {
    winningStat: parseInt(tmp[0]),
    winningStreak: parseInt(tmp[1]),
    winningWeek: tmp[2],
    winningValue: null,
  };
  let parsed = null;
  if (null != tmp[3]) {
    parsed = null;
    if ("" !== tmp2) {
      const _parseInt = parseInt;
      parsed = parseInt(tmp2);
    }
  }
  obj.winningValue = parsed;
  return obj;
};
