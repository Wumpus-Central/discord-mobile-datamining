// discord_app/modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx
import intl9 from "../../../intl/index.native.tsx";
import _modDef2425 from "../GuildSpace.messages.js";
import GuildLeaderboardTypes from "GuildLeaderboardTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
