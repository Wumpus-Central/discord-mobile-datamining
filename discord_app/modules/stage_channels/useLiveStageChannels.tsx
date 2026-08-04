// discord_app/modules/stage_channels/useLiveStageChannels.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";

const require = arg1;
const result = require("handleStageInstanceCreateOrUpdate").fileFinishedImporting("modules/stage_channels/useLiveStageChannels.tsx");

export default function useLiveStageChannels(arg0) {
  let stateFromStoresArray = arg0;
  const items = [handleStageInstanceCreateOrUpdate];
  const items1 = [arg0];
  stateFromStoresArray = stateFromStoresArray(589).useStateFromStoresArray(items, () => stateFromStoresArray1(outer1_2[6]).keys(outer1_5.getStageInstancesByGuild(stateFromStoresArray)), items1);
  let stateFromStoresArray1;
  const obj = stateFromStoresArray(589);
  const items2 = [ensureGuildLoaded];
  const items3 = [stateFromStoresArray];
  stateFromStoresArray1 = stateFromStoresArray(589).useStateFromStoresArray(items2, () => {
    const mapped = stateFromStores.map((arg0) => channel.getChannel(arg0));
    return mapped.filter(stateFromStores(outer1_2[5]).isNotNullish);
  }, items3);
  const obj2 = stateFromStoresArray(589);
  const items4 = [getUncachedChannelPermissions];
  const items5 = [stateFromStoresArray1];
  return stateFromStoresArray(589).useStateFromStoresArray(items4, () => stateFromStoresArray.filter((arg0) => getUncachedChannelPermissions.can(callback(table[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, arg0)), items5);
};
export const getAllLiveStageChannels = function getAllLiveStageChannels() {
  allStageInstances = allStageInstances.getAllStageInstances();
  return allStageInstances.reduce((arr, channel_id) => {
    channel = channel.getChannel(channel_id.channel_id);
    let canResult = null != channel;
    if (canResult) {
      canResult = getUncachedChannelPermissions.can(callback(table[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    }
    if (canResult) {
      arr.push(channel);
    }
    return arr;
  }, []);
};
export const useAllLiveStageChannels = function useAllLiveStageChannels() {
  const items = [handleStageInstanceCreateOrUpdate];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => {
    allStageInstances = allStageInstances.getAllStageInstances();
    return allStageInstances.map((channel_id) => channel_id.channel_id);
  }, []);
  let stateFromStoresArray;
  const obj = stateFromStores(589);
  const items1 = [ensureGuildLoaded];
  const items2 = [stateFromStores];
  stateFromStoresArray = stateFromStores(589).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStores.map((arg0) => channel.getChannel(arg0));
    return mapped.filter(stateFromStores(outer1_2[5]).isNotNullish);
  }, items2);
  const obj2 = stateFromStores(589);
  const items3 = [getUncachedChannelPermissions];
  const items4 = [stateFromStoresArray];
  return stateFromStores(589).useStateFromStoresArray(items3, () => stateFromStoresArray.filter((arg0) => getUncachedChannelPermissions.can(callback(table[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, arg0)), items4);
};