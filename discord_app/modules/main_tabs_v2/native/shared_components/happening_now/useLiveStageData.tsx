// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import StageChannelParticipants from "../../../../stage_channels/StageChannelParticipants.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import StageChannelParticipantStore from "../../../../stage_channels/StageChannelParticipantStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx",
);

export const useLiveStageData = function useLiveStageData(stage) {
  _require = stage;
  let obj = require("useStateFromStores");
  let items = [memo1];
  const items1 = [stage.channel_id];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
        stage.channel_id,
        StageChannelParticipants.StageChannelParticipantNamedIndex.FRIEND,
      );
      const found = mutableParticipants.filter(
        (type) => type.type === stage(stateFromStoresArray1[4]).StageChannelParticipantTypes.VOICE,
      );
      return found.map((user) => user.user);
    },
    items1,
  );
  const items2 = [memo1];
  const items3 = [stage.channel_id];
  stateFromStoresArray1 = require("useStateFromStores").useStateFromStoresArray(
    items2,
    () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
        stage.channel_id,
        StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
      );
      const found = mutableParticipants.filter(
        (type) => type.type === stage(stateFromStoresArray1[4]).StageChannelParticipantTypes.VOICE,
      );
      return found.map((user) => user.user);
    },
    items3,
  );
  const obj2 = require("useStateFromStores");
  const items4 = [memo1];
  const items5 = [stage.channel_id];
  const stateFromStoresArray2 = require("useStateFromStores").useStateFromStoresArray(
    items4,
    () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
        stage.channel_id,
        StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
      );
      const found = mutableParticipants.filter(
        (type) => type.type === stage(stateFromStoresArray1[4]).StageChannelParticipantTypes.VOICE,
      );
      return found.map((user) => user.user);
    },
    items5,
  );
  const items6 = [stateFromStoresArray, stateFromStoresArray1];
  const items7 = [stateFromStoresArray, stateFromStoresArray1];
  const memo = stateFromStoresArray2.useMemo(() => {
    const items = [...stateFromStoresArray1];
    return _modDef12.uniqBy(items, (id) => id.id);
  }, items6);
  memo1 = stateFromStoresArray2.useMemo(
    () => _modDef12.differenceBy(stateFromStoresArray, stateFromStoresArray1, "id"),
    items7,
  );
  const items8 = [stateFromStoresArray, stateFromStoresArray2];
  const memo2 = stateFromStoresArray2.useMemo(
    () => _modDef12.differenceBy(stateFromStoresArray2, stateFromStoresArray, "id"),
    items8,
  );
  const items9 = [memo1, memo2];
  const memo3 = stateFromStoresArray2.useMemo(() => {
    const items = [...memo2];
    return items;
  }, items9);
  const obj3 = require("useStateFromStores");
  const items10 = [memo2];
  const items11 = [stage.channel_id];
  obj = {
    friends: stateFromStoresArray,
    speakers: stateFromStoresArray1,
    audienceCount: stateFromStoresArray2.length,
    users: memo,
    audiencePrefixedFriends: memo3,
    audienceFriends: memo1,
    channel: require("useStateFromStores").useStateFromStores(
      items10,
      () => ChannelStore.getChannel(stage.channel_id),
      items11,
    ),
  };
  return obj;
};
