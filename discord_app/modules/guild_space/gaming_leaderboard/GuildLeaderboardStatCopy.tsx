// === Module 10645: GuildLeaderboardStatCopy ===

// Module 10645 (GuildLeaderboardStatCopy)
import intl9 from "intl" /* 1126 */;
import _modDef2425 from "module_2425" /* 2425 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4497 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(winningStat) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
    const obj2 = { name: intl7.string(_modDef2425["8aHNu0"]), question: intl8.string(_modDef2425["A+HRrQ"]) };
    intl7 = intl9.intl;
    intl8 = intl9.intl;
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    const obj3 = { name: intl5.string(_modDef2425.ZwDYuP), question: intl6.string(_modDef2425["9FItmd"]) };
    intl5 = intl9.intl;
    intl6 = intl9.intl;
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj4 = { name: intl3.string(_modDef2425.JeFo7p), question: intl4.string(_modDef2425.GXDPol) };
    intl3 = intl9.intl;
    intl4 = intl9.intl;
    return obj4;
  } else {
    const obj = { name: intl.string(_modDef2425.btBTIw), question: intl2.string(_modDef2425.H8RhX0) };
    intl = intl9.intl;
    intl2 = intl9.intl;
    return obj;
  }
};