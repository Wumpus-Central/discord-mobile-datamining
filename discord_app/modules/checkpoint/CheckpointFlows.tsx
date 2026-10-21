// discord_app/modules/checkpoint/CheckpointFlows.tsx
import CheckpointNavigation from "CheckpointNavigation.tsx";
import CheckpointStatsUtils from "CheckpointStatsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const obj = {
  [CheckpointNavigation.CheckpointRoute.VOICE_INTRO]: (voice) => !CheckpointStatsUtils.hasCheckpointVoiceMinutes(voice),
  [CheckpointNavigation.CheckpointRoute.SERVERS_INTRO]: (guilds) => !CheckpointStatsUtils.hasCheckpointGuilds(guilds),
};
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  _require = tmp;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    let prop = tmp2(12848).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp2(12849).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    let tmp2 = null == tmp;
    if (!tmp2) {
      let tmpResult = null != c0;
      if (tmpResult) {
        tmpResult = tmp(tmp3);
      }
      tmp2 = tmpResult;
    }
    return tmp2;
  });
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(arg0, arg1, arg2, arg3) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  if (tmp === undefined) {
    tmp = null;
  }
  _require = tmp;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    let prop = tmp2(12848).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp2(12849).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    let tmp2 = null == tmp;
    if (!tmp2) {
      let tmpResult = null != c0;
      if (tmpResult) {
        tmpResult = tmp(tmp3);
      }
      tmp2 = tmpResult;
    }
    return tmp2;
  });
  const index = found.indexOf(arg1);
  if (-1 === index) {
    let INTRODUCTION = tmp2(6342).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
