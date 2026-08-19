// discord_app/modules/stage_channels/useLiveStageChannels.tsx
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import handleStageInstanceCreateOrUpdate from "StageInstanceStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useLiveStageChannels.tsx");

export default function useLiveStageChannels(arg0) {
  let stateFromStoresArray = arg0;
  const items = [closure_5];
  const items1 = [arg0];
  stateFromStoresArray = stateFromStoresArray(589).useStateFromStoresArray(items, () => stateFromStoresArray1(dependencyMap[6]).keys(closure_1_5.getStageInstancesByGuild(stateFromStoresArray)), items1);
  const obj = stateFromStoresArray(589);
  const items2 = [closure_3];
  const items3 = [stateFromStoresArray];
  const stateFromStoresArray1 = stateFromStoresArray(589).useStateFromStoresArray(items2, () => {
    const mapped = stateFromStores.map((item, index) => channel.getChannel(item));
    return mapped.filter(stateFromStores(dependencyMap[5]).isNotNullish);
  }, items3);
  const obj2 = stateFromStoresArray(589);
  const items4 = [closure_4];
  const items5 = [stateFromStoresArray1];
  return stateFromStoresArray(589).useStateFromStoresArray(items4, () => stateFromStoresArray.filter((item, index) => closure_4.can(callback(table[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item)), items5);
};
export const getAllLiveStageChannels = function getAllLiveStageChannels() {
  allStageInstances = allStageInstances.getAllStageInstances();
  return allStageInstances.reduce((acc, item, index) => {
    channel = channel.getChannel(item.channel_id);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_4.can(callback(table[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    }
    if (canResult) {
      acc.push(channel);
    }
    return acc;
  }, []);
};
export const useAllLiveStageChannels = function useAllLiveStageChannels() {
  const items = [closure_5];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => {
    allStageInstances = allStageInstances.getAllStageInstances();
    return allStageInstances.map((item, index) => item.channel_id);
  }, []);
  const obj = stateFromStores(589);
  const items1 = [closure_3];
  const items2 = [stateFromStores];
  const stateFromStoresArray = stateFromStores(589).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStores.map((item, index) => channel.getChannel(item));
    return mapped.filter(stateFromStores(dependencyMap[5]).isNotNullish);
  }, items2);
  const obj2 = stateFromStores(589);
  const items3 = [closure_4];
  const items4 = [stateFromStoresArray];
  return stateFromStores(589).useStateFromStoresArray(items3, () => stateFromStoresArray.filter((item, index) => closure_4.can(callback(table[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item)), items4);
};