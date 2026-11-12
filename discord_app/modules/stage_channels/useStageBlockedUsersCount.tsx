// === Module 12816: useStageBlockedUsersCount ===

// Module 12816 (useStageBlockedUsersCount)
import StageChannelParticipants from "StageChannelParticipants" /* 6880 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6877 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export function useStageBlockedUsersCount(id) {
  _require = id;
  items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
}
export function useStageIgnoredUsersCount(id1) {
  _require = id1;
  items = [StageChannelParticipantStore];
  const items1 = [id1];
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
  items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED), items1);
}
export function useStageIgnoredUsers(id) {
  _require = id;
  items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED), items1);
}