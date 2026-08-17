// discord_app/modules/stage_channels/useStageBlockedUsersCount.tsx
import sortKey from "sortKey" /* 6703 */;
import closure_2 from "getActiveStageChannelIds" /* 4989 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export const useStageBlockedUsersCount = function useStageBlockedUsersCount(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _initialize.useStateFromStores(items, () => {
    let num = 0;
    if (null != id) {
      num = closure_1_2.getParticipantCount(tmp, id(closure_1_1[2]).StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
};
export const useStageIgnoredUsersCount = function useStageIgnoredUsersCount(id1) {
  const _require = id1;
  const items = [closure_2];
  const items1 = [id1];
  return _initialize.useStateFromStores(items, () => {
    let num = 0;
    if (null != id1) {
      num = closure_1_2.getParticipantCount(tmp, id1(closure_1_1[2]).StageChannelParticipantNamedIndex.IGNORED);
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
  return _initialize.useStateFromStores(items, () => closure_1_2.getMutableParticipants(id, id(closure_1_1[2]).StageChannelParticipantNamedIndex.BLOCKED), items1);
};
export const useStageIgnoredUsers = function useStageIgnoredUsers(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _initialize.useStateFromStores(items, () => closure_1_2.getMutableParticipants(id, id(closure_1_1[2]).StageChannelParticipantNamedIndex.IGNORED), items1);
};