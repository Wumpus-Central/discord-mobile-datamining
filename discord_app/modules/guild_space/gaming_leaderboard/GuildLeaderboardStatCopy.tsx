// discord_app/modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2414 from "../GuildSpace.messages.js";
import GuildLeaderboardTypes from "GuildLeaderboardTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(winningStat) {
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
    const obj2 = { name: null, question: null };
    const intl7 = util.intl;
    obj2.name = intl7.string(_modDef2414["8aHNu0"]);
    const intl8 = util.intl;
    obj2.question = intl8.string(_modDef2414["A+HRrQ"]);
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    const obj3 = { name: null, question: null };
    const intl5 = util.intl;
    obj3.name = intl5.string(_modDef2414.ZwDYuP);
    const intl6 = util.intl;
    obj3.question = intl6.string(_modDef2414["9FItmd"]);
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj4 = { name: null, question: null };
    const intl3 = util.intl;
    obj4.name = intl3.string(_modDef2414.JeFo7p);
    const intl4 = util.intl;
    obj4.question = intl4.string(_modDef2414.GXDPol);
    return obj4;
  } else {
    const obj = { name: null, question: null };
    const intl = util.intl;
    obj.name = intl.string(_modDef2414.btBTIw);
    const intl2 = util.intl;
    obj.question = intl2.string(_modDef2414.H8RhX0);
    return obj;
  }
};
