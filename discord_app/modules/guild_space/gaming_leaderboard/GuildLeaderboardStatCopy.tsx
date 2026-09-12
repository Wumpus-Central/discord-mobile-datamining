// === Module 11038: GuildLeaderboardStatCopy ===

// Module 11038 (GuildLeaderboardStatCopy)
import util from "util" /* 1114 */;
import _modDef2330 from "module_2330" /* 2330 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4264 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(winningStat) {
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
    let obj = { name: null, valueLabel: null };
    const intl6 = util.intl;
    obj.name = intl6.string(_modDef2330["8aHNu0"]);
    const intl7 = util.intl;
    obj.valueLabel = intl7.string(_modDef2330.WoNIHI);
    return obj;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    obj = { name: null, valueLabel: null };
    const intl4 = util.intl;
    obj.name = intl4.string(_modDef2330.ZwDYuP);
    const intl5 = util.intl;
    obj.valueLabel = intl5.string(_modDef2330.hmATeU);
    return obj;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj1 = { name: null, valueLabel: null };
    const intl2 = util.intl;
    obj1.name = intl2.string(_modDef2330.JeFo7p);
    const intl3 = util.intl;
    obj1.valueLabel = intl3.string(_modDef2330.NIqIy8);
    return obj1;
  } else {
    obj = { name: null, valueLabel: "" };
    const intl = util.intl;
    obj.name = intl.string(_modDef2330.btBTIw);
    return obj;
  }
};