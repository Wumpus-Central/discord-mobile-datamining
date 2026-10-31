// === Module 6765: StageChannelParticipantStoreHooks ===

// Module 6765 (StageChannelParticipantStoreHooks)
import StageChannelParticipants from "StageChannelParticipants" /* 6759 */;
import _slicedToArray from "module_32" /* 32 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6713 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantStoreHooks.tsx");

export function useStageParticipants(id, SPEAKER) {
  _require = id;
  dependencyMap = SPEAKER;
  let items = [StageChannelParticipantStore];
  const items1 = [id, SPEAKER];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const items = [StageChannelParticipantStore.getMutableParticipants(closure_0, closure_1), StageChannelParticipantStore.getParticipantsVersion(closure_0)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
export function useStageParticipantsCount(id, AUDIENCE) {
  _require = id;
  dependencyMap = AUDIENCE;
  const items = [StageChannelParticipantStore];
  const items1 = [id, AUDIENCE];
  return require("initialize").useStateFromStores(items, () => StageChannelParticipantStore.getParticipantCount(closure_0, closure_1), items1);
}
export function useSortedRequestToSpeakParticipants(id) {
  _require = id;
  let items = [StageChannelParticipantStore];
  const items1 = [id];
  return _slicedToArray(require("initialize").useStateFromStores(items, () => {
    const items = [StageChannelParticipantStore.getMutableRequestToSpeakParticipants(closure_0), StageChannelParticipantStore.getRequestToSpeakParticipantsVersion(closure_0)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
export function useActualStageSpeakerCount(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(closure_0, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
    return mutableParticipants.filter((type) => type.type === id(closure_1_1[4]).StageChannelParticipantTypes.VOICE).length;
  }, items1);
}