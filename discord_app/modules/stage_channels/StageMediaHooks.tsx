// discord_app/modules/stage_channels/StageMediaHooks.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateVoiceState from "updateVoiceState";
import getActiveStageChannelIds from "getActiveStageChannelIds";

const require = arg1;
const result = require("getActiveStageChannelIds").fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = function useStageHasMedia(id) {
  const _require = id;
  const items = [getActiveStageChannelIds];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const mutableParticipants = outer1_4.getMutableParticipants(id, id(outer1_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return null != mutableParticipants.find((type) => type.type === callback(table[4]).StageChannelParticipantTypes.STREAM);
  }, items1);
  const obj = _require(589);
  const items2 = [updateVoiceState];
  const items3 = [id];
  const obj2 = _require(589);
  return _require(589).useStateFromStores(items2, () => outer1_3.hasVideo(closure_0), items3) || stateFromStores;
};
export const useStageHasStream = function useStageHasStream(id) {
  const _require = id;
  const items = [getActiveStageChannelIds];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    const mutableParticipants = outer1_4.getMutableParticipants(id, id(outer1_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return null != mutableParticipants.find((type) => type.type === callback(table[4]).StageChannelParticipantTypes.STREAM);
  }, items1);
};
export const getStageHasMedia = function getStageHasMedia(id) {
  const mutableParticipants = store.getMutableParticipants(id, require(5109) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  let hasVideoResult = null != mutableParticipants.find((type) => type.type === callback(table[4]).StageChannelParticipantTypes.STREAM);
  if (!hasVideoResult) {
    hasVideoResult = updateVoiceState.hasVideo(id);
  }
  return hasVideoResult;
};
export const getStageHasStream = function getStageHasStream(closure_0) {
  const mutableParticipants = store.getMutableParticipants(closure_0, require(5109) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find((type) => type.type === callback(table[4]).StageChannelParticipantTypes.STREAM);
};
export const useIsStageVideoEnabled = function useIsStageVideoEnabled(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_2.getGuild(closure_0));
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