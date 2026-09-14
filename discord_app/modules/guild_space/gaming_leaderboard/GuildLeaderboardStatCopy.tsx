// === Module 11039: GuildLeaderboardStatCopy ===

// Module 11039 (GuildLeaderboardStatCopy)
import util from "util" /* 1114 */;
import _modDef2330 from "module_2330" /* 2330 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4264 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(winningStat) {
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
    const obj2 = { name: null, valueLabel: null };
    const intl6 = util.intl;
    obj2.name = intl6.string(_modDef2330["8aHNu0"]);
    const intl7 = util.intl;
    obj2.valueLabel = intl7.string(_modDef2330.WoNIHI);
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    const obj3 = { name: null, valueLabel: null };
    const intl4 = util.intl;
    obj3.name = intl4.string(_modDef2330.ZwDYuP);
    const intl5 = util.intl;
    obj3.valueLabel = intl5.string(_modDef2330.hmATeU);
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj4 = { name: null, valueLabel: null };
    const intl2 = util.intl;
    obj4.name = intl2.string(_modDef2330.JeFo7p);
    const intl3 = util.intl;
    obj4.valueLabel = intl3.string(_modDef2330.NIqIy8);
    return obj4;
  } else {
    const obj = { name: null, valueLabel: "" };
    const intl = util.intl;
    obj.name = intl.string(_modDef2330.btBTIw);
    return obj;
  }
};