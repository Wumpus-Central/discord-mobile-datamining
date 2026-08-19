// === Module 8123: useStageBlockedUsersCount ===

// Module 8123 (useStageBlockedUsersCount)
import sortKey from "sortKey" /* 6703 */;
import getActiveStageChannelIds from "getActiveStageChannelIds" /* 4989 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export const useStageBlockedUsersCount = function useStageBlockedUsersCount(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    let num = 0;
    if (null != id) {
      num = closure_1_2.getParticipantCount(tmp, id(dependencyMap[2]).StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
};
export const useStageIgnoredUsersCount = function useStageIgnoredUsersCount(id1) {
  const _require = id1;
  const items = [closure_2];
  const items1 = [id1];
  return _require(589).useStateFromStores(items, () => {
    let num = 0;
    if (null != id1) {
      num = closure_1_2.getParticipantCount(tmp, id1(dependencyMap[2]).StageChannelParticipantNamedIndex.IGNORED);
    }
    return num;
  }, items1);
};
export const getStageBlockedUsersCount = function getStageBlockedUsersCount(id) {
  let num = store.getParticipantCount(id, sortKey.StageChannelParticipantNamedIndex.BLOCKED);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const getStageIgnoredUsersCount = function getStageIgnoredUsersCount(id) {
  let num = store.getParticipantCount(id, sortKey.StageChannelParticipantNamedIndex.IGNORED);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const useStageBlockedUsers = function useStageBlockedUsers(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => closure_1_2.getMutableParticipants(id, id(dependencyMap[2]).StageChannelParticipantNamedIndex.BLOCKED), items1);
};
export const useStageIgnoredUsers = function useStageIgnoredUsers(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => closure_1_2.getMutableParticipants(id, id(dependencyMap[2]).StageChannelParticipantNamedIndex.IGNORED), items1);
};