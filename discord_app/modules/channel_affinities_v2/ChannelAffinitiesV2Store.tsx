// === Module 16215: ChannelAffinitiesV2Store ===

// Module 16215 (ChannelAffinitiesV2Store)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelAffinitiesV2Constants from "ChannelAffinitiesV2Constants" /* 16216 */;
import size from "module_2" /* 2 */;

const f123470 = (channelId) => {
  const items = [channelId.channelId, channelId];
  return items;
};
const CHANNEL_AFFINITY_V2_TTL = ChannelAffinitiesV2Constants.CHANNEL_AFFINITY_V2_TTL;
let map = new Map();
let c2 = false;
const frozen = Object.freeze({ channelAffinities: [], lastFetched: 0 });
let obj = {};
let merged = Object.assign(frozen);
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelAffinitiesV2Store extends PersistedStore {
  initialize(channelAffinities) {
    if (null != channelAffinities) {
      obj.channelAffinities = channelAffinities.channelAffinities;
      obj.lastFetched = channelAffinities.lastFetched;
      const _Map = Map;
      channelAffinities = obj.channelAffinities;
      const self = this;
      const self2 = this;
      new Map(channelAffinities.map(f123470));
    }
  }
  shouldFetch() {
    if (!c2) {
      const _Date = Date;
      return Date.now() - obj.lastFetched > CHANNEL_AFFINITY_V2_TTL;
    }
  }
  isFetching() {
    return c2;
  }
  getChannelAffinities() {
    return obj.channelAffinities;
  }
  getChannelAffinitiesMap() {
    return map;
  }
  getChannelAffinity(arg0) {
    return map.get(arg0);
  }
  compare(arg0, arg1) {
    const value = map.get(arg1);
    let num;
    if (value != null) {
      num = value.score;
    }
    if (num == null) {
      num = 0;
    }
    const value2 = map.get(arg0);
    let num2;
    if (value2 != null) {
      num2 = value2.score;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  }
  getState() {
    return obj;
  }
}
const prototype = ChannelAffinitiesV2Store.prototype;
ChannelAffinitiesV2Store.displayName = "ChannelAffinitiesV2Store";
ChannelAffinitiesV2Store.persistKey = "ChannelAffinitiesStoreV2";
const obj2 = {
  LOAD_CHANNEL_AFFINITIES_V2: function handleLoadChannelAffinities() {
    c2 = true;
  },
  LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function handleLoadChannelAffinitiesSuccess(affineChannels) {
    affineChannels = affineChannels.affineChannels;
    obj.lastFetched = Date.now();
    c2 = false;
    obj.channelAffinities = affineChannels;
    const channelAffinities = obj.channelAffinities;
    map = new Map(channelAffinities.map(f123470));
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
const channelAffinitiesV2Store = new ChannelAffinitiesV2Store(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/channel_affinities_v2/ChannelAffinitiesV2Store.tsx");

export default channelAffinitiesV2Store;