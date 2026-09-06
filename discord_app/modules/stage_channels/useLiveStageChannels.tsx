// === Module 16186: useLiveStageChannels ===

// Module 16186 (useLiveStageChannels)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useLiveStageChannels.tsx");

export default function useLiveStageChannels(arg0) {
  _require = arg0;
  const items = [StageInstanceStore];
  const items1 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => SnowflakeUtilsDefault.keys(StageInstanceStore.getStageInstancesByGuild(closure_0)), items1);
  closure_129_0 = stateFromStoresArray;
  const obj = require("initialize");
  const items2 = [ChannelStore];
  const items3 = [stateFromStoresArray];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items2, () => {
    const mapped = stateFromStores.map((item) => channel.getChannel(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items3);
  closure_129_1 = stateFromStoresArray1;
  const obj2 = require("initialize");
  const items4 = [PermissionStore];
  const items5 = [stateFromStoresArray1];
  return require("initialize").useStateFromStoresArray(items4, () => stateFromStoresArray.filter((item) => closure_1_4.can(stateFromStores(closure_1_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item)), items5);
};
export const getAllLiveStageChannels = function getAllLiveStageChannels() {
  const allStageInstances = StageInstanceStore.getAllStageInstances();
  return allStageInstances.reduce((arr, channel_id) => {
    channel = channel.getChannel(channel_id.channel_id);
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(require("StageChannelPermissions").JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    }
    if (canResult) {
      arr = arr.push(channel);
    }
    return arr;
  }, []);
};
export const useAllLiveStageChannels = function useAllLiveStageChannels() {
  const items = [StageInstanceStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    allStageInstances = allStageInstances.getAllStageInstances();
    return allStageInstances.map((channel_id) => channel_id.channel_id);
  }, []);
  const obj = stateFromStores(504);
  const items1 = [ChannelStore];
  const items2 = [stateFromStores];
  const stateFromStoresArray = stateFromStores(504).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStores.map((item) => channel.getChannel(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items2);
  const obj2 = stateFromStores(504);
  const items3 = [PermissionStore];
  const items4 = [stateFromStoresArray];
  return stateFromStores(504).useStateFromStoresArray(items3, () => stateFromStoresArray.filter((item) => closure_1_4.can(stateFromStores(closure_1_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item)), items4);
};