// === Module 8167: useStageBlockedUsersCount ===

// Module 8167 (useStageBlockedUsersCount)
import StageChannelParticipants from "StageChannelParticipants" /* 6753 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6707 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export function useStageBlockedUsersCount(id1) {
  _require = id1;
  const items = [StageChannelParticipantStore];
  const items1 = [id1];
  return require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
}
export function useStageIgnoredUsersCount(id2) {
  _require = id2;
  const items = [StageChannelParticipantStore];
  const items1 = [id2];
  return require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
    }
    return num;
  }, items1);
}
export function getStageBlockedUsersCount(id) {
  let num = StageChannelParticipantStore.getParticipantCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
  if (num == null) {
    num = 0;
  }
  return num;
}
export function getStageIgnoredUsersCount(id) {
  let num = StageChannelParticipantStore.getParticipantCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
  if (num == null) {
    num = 0;
  }
  return num;
}
export function useStageBlockedUsers(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED), items1);
}
export function useStageIgnoredUsers(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED), items1);
}