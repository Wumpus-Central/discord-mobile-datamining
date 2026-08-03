import getActiveStageChannelIds from "getActiveStageChannelIds";

const require = arg1;
const result = require("sortKey").fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export const useStageBlockedUsersCount = function useStageBlockedUsersCount(id) {
  const _require = id;
  const items = [getActiveStageChannelIds];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    let num = 0;
    if (null != id) {
      num = outer1_2.getParticipantCount(tmp, id(outer1_1[2]).StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
};
export const useStageIgnoredUsersCount = function useStageIgnoredUsersCount(id1) {
  const _require = id1;
  const items = [getActiveStageChannelIds];
  const items1 = [id1];
  return _require(589).useStateFromStores(items, () => {
    let num = 0;
    if (null != id1) {
      num = outer1_2.getParticipantCount(tmp, id1(outer1_1[2]).StageChannelParticipantNamedIndex.IGNORED);
    }
    return num;
  }, items1);
};
export const getStageBlockedUsersCount = function getStageBlockedUsersCount(id) {
  let num = store.getParticipantCount(id, require(5080) /* sortKey */.StageChannelParticipantNamedIndex.BLOCKED);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const getStageIgnoredUsersCount = function getStageIgnoredUsersCount(id) {
  let num = store.getParticipantCount(id, require(5080) /* sortKey */.StageChannelParticipantNamedIndex.IGNORED);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const useStageBlockedUsers = function useStageBlockedUsers(id) {
  const _require = id;
  const items = [getActiveStageChannelIds];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => outer1_2.getMutableParticipants(id, id(outer1_1[2]).StageChannelParticipantNamedIndex.BLOCKED), items1);
};
export const useStageIgnoredUsers = function useStageIgnoredUsers(id) {
  const _require = id;
  const items = [getActiveStageChannelIds];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => outer1_2.getMutableParticipants(id, id(outer1_1[2]).StageChannelParticipantNamedIndex.IGNORED), items1);
};