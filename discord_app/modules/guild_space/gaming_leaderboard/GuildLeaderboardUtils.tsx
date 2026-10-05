// discord_app/modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx
import intl3 from "../../../intl/index.native.tsx";
import GuildLeaderboardStatCopy from "GuildLeaderboardStatCopy.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx");

export const LEADERBOARD_WINNER_ROLE_NAME_PREFIX =
  "leaderboard-winner-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const getLeaderboardWinnerBadgeText = function getLeaderboardWinnerBadgeText(activeLeaderboardWinnerData) {
  const obj = GuildLeaderboardStatCopy;
  const name = obj.getStatName(activeLeaderboardWinnerData.winningStat).name;
  const winningStreak = activeLeaderboardWinnerData.winningStreak;
  if (null != winningStreak) {
    let formatToPlainStringResult;
    if (winningStreak > 1) {
      const intl2 = intl3.intl;
      const obj2 = { streakCount: winningStreak, statName: name };
      formatToPlainStringResult = intl2.formatToPlainString(intl3.t.owAd83, obj2);
    }
    return formatToPlainStringResult;
  }
  const intl = intl3.intl;
  formatToPlainStringResult = intl.formatToPlainString(intl3.t.So4gmj, { statName: name });
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
  return "" + num + "|" + num2 + "|" + num3;
};
export const decodeWinnerData = function decodeWinnerData(str) {
  const tmp = _slicedToArray(str.split("|"), 3);
  const obj = { winningStat: parseInt(tmp[0]), winningStreak: parseInt(tmp[1]), winningWeek: tmp2 };
  return obj;
};
