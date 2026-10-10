// === Module 10274: GuildLeaderboardStatCopy ===

// Module 10274 (GuildLeaderboardStatCopy)
import util from "util" /* 1126 */;
import _modDef2472 from "module_2472" /* 2472 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(currentLeaderStat) {
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === currentLeaderStat) {
    const obj2 = { name: null, question: null };
    const intl7 = util.intl;
    obj2.name = intl7.string(_modDef2472["8aHNu0"]);
    const intl8 = util.intl;
    obj2.question = intl8.string(_modDef2472["A+HRrQ"]);
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === currentLeaderStat) {
    const obj3 = { name: null, question: null };
    const intl5 = util.intl;
    obj3.name = intl5.string(_modDef2472.ZwDYuP);
    const intl6 = util.intl;
    obj3.question = intl6.string(_modDef2472["9FItmd"]);
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === currentLeaderStat) {
    const obj4 = { name: null, question: null };
    const intl3 = util.intl;
    obj4.name = intl3.string(_modDef2472.JeFo7p);
    const intl4 = util.intl;
    obj4.question = intl4.string(_modDef2472.GXDPol);
    return obj4;
  } else {
    const obj = { name: null, question: null };
    const intl = util.intl;
    obj.name = intl.string(_modDef2472.btBTIw);
    const intl2 = util.intl;
    obj.question = intl2.string(_modDef2472.H8RhX0);
    return obj;
  }
};