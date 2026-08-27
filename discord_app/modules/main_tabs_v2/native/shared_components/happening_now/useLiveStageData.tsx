// === Module 15572: useLiveStageData ===

// Module 15572 (useLiveStageData)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getActiveStageChannelIds" /* 5314 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx");

export const useLiveStageData = function useLiveStageData(stage) {
  const _require = stage;
  let obj = _require(stateFromStoresArray1[3]);
  let items = [memo1];
  const items1 = [stage.channel_id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mutableParticipants = memo1.getMutableParticipants(stage.channel_id, stage(stateFromStoresArray1[4]).StageChannelParticipantNamedIndex.FRIEND);
    const found = mutableParticipants.filter((type) => type.type === callback(table[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items1);
  const items2 = [memo1];
  const items3 = [stage.channel_id];
  stateFromStoresArray1 = _require(stateFromStoresArray1[3]).useStateFromStoresArray(items2, () => {
    const mutableParticipants = memo1.getMutableParticipants(stage.channel_id, stage(stateFromStoresArray1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    const found = mutableParticipants.filter((type) => type.type === callback(table[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items3);
  const obj2 = _require(stateFromStoresArray1[3]);
  const items4 = [memo1];
  const items5 = [stage.channel_id];
  const stateFromStoresArray2 = _require(stateFromStoresArray1[3]).useStateFromStoresArray(items4, () => {
    const mutableParticipants = memo1.getMutableParticipants(stage.channel_id, stage(stateFromStoresArray1[4]).StageChannelParticipantNamedIndex.AUDIENCE);
    const found = mutableParticipants.filter((type) => type.type === callback(table[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items5);
  const items6 = [stateFromStoresArray, stateFromStoresArray1];
  const items7 = [stateFromStoresArray, stateFromStoresArray1];
  const memo = stateFromStoresArray2.useMemo(() => {
    const items = [...stateFromStoresArray1];
    return stateFromStoresArray(stateFromStoresArray1[5]).uniqBy(items, (id) => id.id);
  }, items6);
  memo1 = stateFromStoresArray2.useMemo(() => stateFromStoresArray(stateFromStoresArray1[5]).differenceBy(stateFromStoresArray, stateFromStoresArray1, "id"), items7);
  const items8 = [stateFromStoresArray, stateFromStoresArray2];
  const memo2 = stateFromStoresArray2.useMemo(() => stateFromStoresArray(stateFromStoresArray1[5]).differenceBy(stateFromStoresArray2, stateFromStoresArray, "id"), items8);
  const items9 = [memo1, memo2];
  const memo3 = stateFromStoresArray2.useMemo(() => {
    const items = [...memo2];
    return items;
  }, items9);
  const obj3 = _require(stateFromStoresArray1[3]);
  const items10 = [memo2];
  const items11 = [stage.channel_id];
  obj = { friends: stateFromStoresArray, speakers: stateFromStoresArray1, audienceCount: stateFromStoresArray2.length, users: memo, audiencePrefixedFriends: memo3, audienceFriends: memo1, channel: _require(stateFromStoresArray1[3]).useStateFromStores(items10, () => memo2.getChannel(stage.channel_id), items11) };
  return obj;
};