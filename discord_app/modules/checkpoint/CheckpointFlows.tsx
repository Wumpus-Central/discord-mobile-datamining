// === Module 12972: CheckpointFlows ===

// Module 12972 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6365 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12971 */;
import size from "module_2" /* 2 */;

const obj = { [CheckpointNavigation.CheckpointRoute.VOICE_INTRO]: (voice) => !CheckpointStatsUtils.hasCheckpointVoiceMinutes(voice), [CheckpointNavigation.CheckpointRoute.MESSAGES_INTRO]: (messages) => !CheckpointStatsUtils.hasCheckpointMessages(messages), [CheckpointNavigation.CheckpointRoute.SERVERS_INTRO]: (guilds) => !CheckpointStatsUtils.hasCheckpointGuilds(guilds), [CheckpointNavigation.CheckpointRoute.EMOJI_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointEmojis(stats), [CheckpointNavigation.CheckpointRoute.GAMES_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointGames(stats) };
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
  if (stats.flow === stats(6365).CheckpointFlow.SHARED_DATA) {
    let prop = tmp(12973).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12974).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.NO_DATA_INTRO) {
      return null === stats;
    } else if (null != obj[item]) {
      return null != stats && tmp4(stats);
    } else {
      let tmp8 = null == tmp7;
      if (!tmp8) {
        tmp8 = undefined === stats || tmp7(stats);
        const tmp9 = undefined === stats || tmp7(stats);
      }
      return tmp8;
    }
  });
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(stats) {
  stats = stats.stats;
  ({ flow, currentRoute, direction } = stats);
  if (flow === stats(6365).CheckpointFlow.SHARED_DATA) {
    let prop = tmp(12973).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12974).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.NO_DATA_INTRO) {
      return null === stats;
    } else if (null != obj[item]) {
      return null != stats && tmp4(stats);
    } else {
      let tmp8 = null == tmp7;
      if (!tmp8) {
        tmp8 = undefined === stats || tmp7(stats);
        const tmp9 = undefined === stats || tmp7(stats);
      }
      return tmp8;
    }
  });
  const index = found.indexOf(currentRoute);
  if (-1 === index) {
    let INTRODUCTION = tmp(6365).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + direction];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};