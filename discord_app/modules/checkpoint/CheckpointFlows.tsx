// === Module 15967: CheckpointFlows ===

// Module 15967 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 15968 */;
import CheckpointSharedDataFlow from "CheckpointSharedDataFlow" /* 15969 */;
import CheckpointNoSharedDataFlow from "CheckpointNoSharedDataFlow" /* 15970 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    let CHECKPOINT_NO_SHARED_DATA_FLOW = CheckpointSharedDataFlow.CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    CHECKPOINT_NO_SHARED_DATA_FLOW = CheckpointNoSharedDataFlow.CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return CHECKPOINT_NO_SHARED_DATA_FLOW;
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(checkpointFlow, route, arg2) {
  if (checkpointFlow === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    let prop = CheckpointSharedDataFlow.CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = CheckpointNoSharedDataFlow.CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const index = prop.indexOf(route);
  if (-1 === index) {
    let INTRODUCTION = CheckpointNavigation.CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = prop[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};