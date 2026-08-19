// discord_app/modules/stage_channels/StageChannelParticipantStoreHooks.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import getActiveStageChannelIds from "StageChannelParticipantStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/StageChannelParticipantStoreHooks.tsx");

export const useStageParticipants = function useStageParticipants(id, SPEAKER) {
  const _require = id;
  dependencyMap = SPEAKER;
  let items = [closure_3];
  const items1 = [id, SPEAKER];
  return callback(require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_3.getMutableParticipants(closure_0, closure_1), closure_1_3.getParticipantsVersion(closure_0)];
    return items;
  }, items1, require("../../utils/SecondaryIndexMapUtils.tsx").isVersionEqual), 1)[0];
};
export const useStageParticipantsCount = function useStageParticipantsCount(id, AUDIENCE) {
  const _require = id;
  dependencyMap = AUDIENCE;
  const items = [closure_3];
  const items1 = [id, AUDIENCE];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_3.getParticipantCount(closure_0, closure_1), items1);
};
export const useSortedRequestToSpeakParticipants = function useSortedRequestToSpeakParticipants(id) {
  const _require = id;
  let items = [closure_3];
  const items1 = [id];
  return callback(require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_3.getMutableRequestToSpeakParticipants(closure_0), closure_1_3.getRequestToSpeakParticipantsVersion(closure_0)];
    return items;
  }, items1, require("../../utils/SecondaryIndexMapUtils.tsx").isVersionEqual), 1)[0];
};
export const useActualStageSpeakerCount = function useActualStageSpeakerCount(id) {
  const _require = id;
  const items = [closure_3];
  const items1 = [id];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const mutableParticipants = closure_1_3.getMutableParticipants(id, id(dependencyMap[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return mutableParticipants.filter((item, index) => item.type === callback(table[4]).StageChannelParticipantTypes.VOICE).length;
  }, items1);
};