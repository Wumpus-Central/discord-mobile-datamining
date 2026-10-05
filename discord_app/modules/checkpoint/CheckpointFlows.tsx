// discord_app/modules/checkpoint/CheckpointFlows.tsx
import CheckpointNavigation from "CheckpointNavigation.tsx";
import CheckpointSharedDataFlow from "flows/CheckpointSharedDataFlow.tsx";
import CheckpointNoSharedDataFlow from "flows/CheckpointNoSharedDataFlow.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  let CHECKPOINT_NO_SHARED_DATA_FLOW;
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    CHECKPOINT_NO_SHARED_DATA_FLOW = CheckpointSharedDataFlow.CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    CHECKPOINT_NO_SHARED_DATA_FLOW = CheckpointNoSharedDataFlow.CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return CHECKPOINT_NO_SHARED_DATA_FLOW;
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(checkpointFlow, route, arg2) {
  let INTRODUCTION;
  let prop;
  if (checkpointFlow === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    prop = CheckpointSharedDataFlow.CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = CheckpointNoSharedDataFlow.CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const index = prop.indexOf(route);
  if (-1 === index) {
    INTRODUCTION = CheckpointNavigation.CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = prop[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
