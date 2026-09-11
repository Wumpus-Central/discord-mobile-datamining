// discord_app/modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx
import util from "../../../intl/index.native.tsx";
import GuildLeaderboardStatCopy from "GuildLeaderboardStatCopy.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx");

export const LEADERBOARD_WINNER_ROLE_NAME_PREFIX =
  "leaderboard-winner-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const getLeaderboardWinnerBadgeText = function getLeaderboardWinnerBadgeText(prop) {
  let obj = GuildLeaderboardStatCopy;
  const name = obj.getStatName(prop.winningStat).name;
  const winningStreak = prop.winningStreak;
  if (null != winningStreak) {
    if (winningStreak > 1) {
      const intl2 = util.intl;
      obj = { streakCount: winningStreak, statName: name };
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.owAd83, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.formatToPlainString(util.t.So4gmj, { statName: name });
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
