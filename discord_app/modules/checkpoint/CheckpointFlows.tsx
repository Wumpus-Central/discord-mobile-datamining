// discord_app/modules/checkpoint/CheckpointFlows.tsx
import CheckpointNavigation from "CheckpointNavigation.tsx";
import CheckpointStatsUtils from "CheckpointStatsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  [CheckpointNavigation.CheckpointRoute.VOICE_INTRO]: (voice) => !CheckpointStatsUtils.hasCheckpointVoiceMinutes(voice),
  [CheckpointNavigation.CheckpointRoute.MESSAGES_INTRO]: (messages) =>
    !CheckpointStatsUtils.hasCheckpointMessages(messages),
  [CheckpointNavigation.CheckpointRoute.SERVERS_INTRO]: (guilds) => !CheckpointStatsUtils.hasCheckpointGuilds(guilds),
  [CheckpointNavigation.CheckpointRoute.EMOJI_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointEmojis(stats),
  [CheckpointNavigation.CheckpointRoute.GAMES_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointGames(stats),
};
const obj2 = {};
obj2[CheckpointNavigation.CheckpointRoute.TOP_SERVER_STATS] = CheckpointStatsUtils.hasCheckpointGuilds;
obj2[CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION] = CheckpointStatsUtils.hasCheckpointSquad;
obj2[CheckpointNavigation.CheckpointRoute.SQUAD] = CheckpointStatsUtils.hasCheckpointSquad;
obj2[CheckpointNavigation.CheckpointRoute.SIDEKICK] = CheckpointStatsUtils.hasCheckpointSidekick;
obj2[CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE] = CheckpointStatsUtils.hasCheckpointSidekick;
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(stats) {
  stats = stats.stats;
  if (stats.flow === stats(6399).CheckpointFlow.SHARED_DATA) {
    let prop = tmp(13020).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(13021).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (null != obj[item]) {
      return null != stats && tmp2(stats);
    } else {
      let tmp6 = null == tmp5;
      if (!tmp6) {
        tmp6 = undefined === stats || tmp5(stats);
        const tmp7 = undefined === stats || tmp5(stats);
      }
      return tmp6;
    }
  });
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(stats) {
  stats = stats.stats;
  ({ flow, currentRoute, direction } = stats);
  if (flow === stats(6399).CheckpointFlow.SHARED_DATA) {
    let prop = tmp(13020).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(13021).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (null != obj[item]) {
      return null != stats && tmp2(stats);
    } else {
      let tmp6 = null == tmp5;
      if (!tmp6) {
        tmp6 = undefined === stats || tmp5(stats);
        const tmp7 = undefined === stats || tmp5(stats);
      }
      return tmp6;
    }
  });
  const index = found.indexOf(currentRoute);
  if (-1 === index) {
    let INTRODUCTION = tmp(6399).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + direction];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
