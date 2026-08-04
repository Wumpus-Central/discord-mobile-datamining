import _slicedToArray from "_slicedToArray";
import getActiveStageChannelIds from "getActiveStageChannelIds";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/StageChannelParticipantStoreHooks.tsx");

export const useStageParticipants = function useStageParticipants(id, SPEAKER) {
  const _require = id;
  const dependencyMap = SPEAKER;
  let items = [getActiveStageChannelIds];
  const items1 = [id, SPEAKER];
  return callback(_require(589).useStateFromStores(items, () => {
    const items = [outer1_3.getMutableParticipants(closure_0, closure_1), outer1_3.getParticipantsVersion(closure_0)];
    return items;
  }, items1, _require(5116).isVersionEqual), 1)[0];
};
export const useStageParticipantsCount = function useStageParticipantsCount(id, AUDIENCE) {
  const _require = id;
  const dependencyMap = AUDIENCE;
  const items = [getActiveStageChannelIds];
  const items1 = [id, AUDIENCE];
  return _require(589).useStateFromStores(items, () => outer1_3.getParticipantCount(closure_0, closure_1), items1);
};
export const useSortedRequestToSpeakParticipants = function useSortedRequestToSpeakParticipants(id) {
  const _require = id;
  let items = [getActiveStageChannelIds];
  const items1 = [id];
  return callback(_require(589).useStateFromStores(items, () => {
    const items = [outer1_3.getMutableRequestToSpeakParticipants(closure_0), outer1_3.getRequestToSpeakParticipantsVersion(closure_0)];
    return items;
  }, items1, _require(5116).isVersionEqual), 1)[0];
};
export const useActualStageSpeakerCount = function useActualStageSpeakerCount(id) {
  const _require = id;
  const items = [getActiveStageChannelIds];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    const mutableParticipants = outer1_3.getMutableParticipants(id, id(outer1_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return mutableParticipants.filter((type) => type.type === callback(table[4]).StageChannelParticipantTypes.VOICE).length;
  }, items1);
};