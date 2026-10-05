// === Module 15525: CheckpointFlows ===

// Module 15525 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 15526 */;
import CheckpointSharedDataFlow from "CheckpointSharedDataFlow" /* 15527 */;
import CheckpointNoSharedDataFlow from "CheckpointNoSharedDataFlow" /* 15528 */;
import size from "module_2" /* 2 */;

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