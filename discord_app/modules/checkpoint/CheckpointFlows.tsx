// === Module 12879: CheckpointFlows ===

// Module 12879 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6349 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12878 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const obj = { [CheckpointNavigation.CheckpointRoute.VOICE_INTRO]: (voice) => !CheckpointStatsUtils.hasCheckpointVoiceMinutes(voice), [CheckpointNavigation.CheckpointRoute.MESSAGES_INTRO]: (messages) => !CheckpointStatsUtils.hasCheckpointMessages(messages), [CheckpointNavigation.CheckpointRoute.SERVERS_INTRO]: (guilds) => !CheckpointStatsUtils.hasCheckpointGuilds(guilds), [CheckpointNavigation.CheckpointRoute.EMOJI_INTRO]: (stats) => !CheckpointStatsUtils.hasCheckpointEmojis(stats) };
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
export const getCheckpointRoutes = function getCheckpointRoutes(arg0, arg1) {
  _require = arg1;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    let prop = tmp(12880).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12881).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (null != obj[item]) {
      let tmpResult = null != closure_0;
      if (tmpResult) {
        tmpResult = tmp(tmp6);
      }
      return tmpResult;
    } else {
      let tmp4 = null == tmp3;
      if (!tmp4) {
        tmp4 = undefined === closure_0 || tmp3(closure_0);
        const tmp5 = undefined === closure_0 || tmp3(closure_0);
      }
      return tmp4;
    }
  });
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(arg0, arg1, arg2, arg3) {
  _require = arg3;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    let prop = tmp(12880).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12881).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (null != obj[item]) {
      let tmpResult = null != closure_0;
      if (tmpResult) {
        tmpResult = tmp(tmp6);
      }
      return tmpResult;
    } else {
      let tmp4 = null == tmp3;
      if (!tmp4) {
        tmp4 = undefined === closure_0 || tmp3(closure_0);
        const tmp5 = undefined === closure_0 || tmp3(closure_0);
      }
      return tmp4;
    }
  });
  const index = found.indexOf(arg1);
  if (-1 === index) {
    let INTRODUCTION = tmp(6349).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};