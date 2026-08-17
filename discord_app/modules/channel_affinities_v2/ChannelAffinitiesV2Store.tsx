// discord_app/modules/channel_affinities_v2/ChannelAffinitiesV2Store.tsx
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import result2 from "result" /* 15539 */;

const CHANNEL_AFFINITY_V2_TTL = result2.CHANNEL_AFFINITY_V2_TTL;
let map = new Map();
let c2 = false;
const frozen = Object.freeze({ channelAffinities: [], lastFetched: 0 });
let obj = {};
let merged = Object.assign(frozen);
const PersistedStore = initializeDefault.PersistedStore;
class ChannelAffinitiesV2Store extends PersistedStore {
}
const prototype = ChannelAffinitiesV2Store.prototype;
prototype["initialize"] = function initialize(channelAffinities) {
  if (null != channelAffinities) {
    obj.channelAffinities = channelAffinities.channelAffinities;
    obj.lastFetched = channelAffinities.lastFetched;
    const _Map = Map;
    channelAffinities = obj.channelAffinities;
    map = new Map(channelAffinities.map((channelId) => {
      const items = [channelId.channelId, channelId];
      return items;
    }));
  }
};
prototype["shouldFetch"] = function shouldFetch() {
  if (!c2) {
    const _Date = Date;
    return Date.now() - obj.lastFetched > CHANNEL_AFFINITY_V2_TTL;
  }
};
prototype["isFetching"] = function isFetching() {
  return c2;
};
prototype["getChannelAffinities"] = function getChannelAffinities() {
  return obj.channelAffinities;
};
prototype["getChannelAffinitiesMap"] = function getChannelAffinitiesMap() {
  return map;
};
prototype["getChannelAffinity"] = function getChannelAffinity(arg0) {
  return map.get(arg0);
};
prototype["compare"] = function compare(arg0, arg1) {
  let value = map.get(arg1);
  let num;
  if (value != null) {
    num = value.score;
  }
  if (num == null) {
    num = 0;
  }
  value = map.get(arg0);
  let num2;
  if (value != null) {
    num2 = value.score;
  }
  if (num2 == null) {
    num2 = 0;
  }
  return num - num2;
};
prototype["getState"] = function getState() {
  return obj;
};
ChannelAffinitiesV2Store.displayName = "ChannelAffinitiesV2Store";
ChannelAffinitiesV2Store.persistKey = "ChannelAffinitiesStoreV2";
obj = {
  LOAD_CHANNEL_AFFINITIES_V2: function handleLoadChannelAffinities() {
    c2 = true;
  },
  LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function handleLoadChannelAffinitiesSuccess(affineChannels) {
    obj.lastFetched = Date.now();
    c2 = false;
    obj.channelAffinities = affineChannels.affineChannels;
    const channelAffinities = obj.channelAffinities;
    map = new Map(channelAffinities.map((channelId) => {
      const items = [channelId.channelId, channelId];
      return items;
    }));
  },
  LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function handleLoadChannelAffinitiesFailure() {
    c2 = false;
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(frozen);
    map = new Map();
    c2 = false;
  }
};
const channelAffinitiesV2Store = new ChannelAffinitiesV2Store(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/channel_affinities_v2/ChannelAffinitiesV2Store.tsx");

export default channelAffinitiesV2Store;