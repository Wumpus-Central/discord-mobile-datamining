// === Module 5417: useStageHasMedia ===

// Module 5417 (useStageHasMedia)
import sortKey from "sortKey" /* 5425 */;
import closure_2 from "createGuildRecordFromRust" /* 1979 */;
import closure_3 from "updateVoiceState" /* 4579 */;
import closure_4 from "getActiveStageChannelIds" /* 5418 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = function useStageHasMedia(id) {
  const _require = id;
  const items = [closure_4];
  const items1 = [id];
  const stateFromStores = _require(504).useStateFromStores(items, () => {
    const mutableParticipants = closure_1_4.getMutableParticipants(id, id(closure_1_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return null != mutableParticipants.find((type) => type.type === callback(table[4]).StageChannelParticipantTypes.STREAM);
  }, items1);
  const obj = _require(504);
  const items2 = [closure_3];
  const items3 = [id];
  const obj2 = _require(504);
  return _require(504).useStateFromStores(items2, () => closure_1_3.hasVideo(closure_0), items3) || stateFromStores;
};
export const useStageHasStream = function useStageHasStream(id) {
  const _require = id;
  const items = [closure_4];
  const items1 = [id];
  return _require(504).useStateFromStores(items, () => {
    const mutableParticipants = closure_1_4.getMutableParticipants(id, id(closure_1_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return null != mutableParticipants.find((type) => type.type === callback(table[4]).StageChannelParticipantTypes.STREAM);
  }, items1);
};
export const getStageHasMedia = function getStageHasMedia(id) {
  const mutableParticipants = store.getMutableParticipants(id, sortKey.StageChannelParticipantNamedIndex.SPEAKER);
  let hasVideoResult = null != mutableParticipants.find((type) => type.type === callback(table[4]).StageChannelParticipantTypes.STREAM);
  if (!hasVideoResult) {
    hasVideoResult = closure_3.hasVideo(id);
  }
  return hasVideoResult;
};
export const getStageHasStream = function getStageHasStream(closure_0) {
  const mutableParticipants = store.getMutableParticipants(closure_0, sortKey.StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find((type) => type.type === callback(table[4]).StageChannelParticipantTypes.STREAM);
};
export const useIsStageVideoEnabled = function useIsStageVideoEnabled(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(504).useStateFromStores(items, () => closure_1_2.getGuild(closure_0));
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
export const isStageVideoEnabled = function isStageVideoEnabled(guild_id) {
  guild = guild.getGuild(guild_id);
  let tmp2 = null != guild;
  if (tmp2) {
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};