// === Module 8620: useStageBlockedUsersCount ===

// Module 8620 (useStageBlockedUsersCount)
import StageChannelParticipants from "StageChannelParticipants" /* 5425 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5418 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export const useStageBlockedUsersCount = function useStageBlockedUsersCount(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
};
export const useStageIgnoredUsersCount = function useStageIgnoredUsersCount(id1) {
  _require = id1;
  const items = [StageChannelParticipantStore];
  const items1 = [id1];
  return require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
    }
    return num;
  }, items1);
};
export const getStageBlockedUsersCount = function getStageBlockedUsersCount(id) {
  let num = StageChannelParticipantStore.getParticipantCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const getStageIgnoredUsersCount = function getStageIgnoredUsersCount(id) {
  let num = StageChannelParticipantStore.getParticipantCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const useStageBlockedUsers = function useStageBlockedUsers(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED), items1);
};
export const useStageIgnoredUsers = function useStageIgnoredUsers(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED), items1);
};