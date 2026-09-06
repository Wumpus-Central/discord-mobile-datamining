// === Module 13688: CreatorMonetizationStore ===

// Module 13688 (CreatorMonetizationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let map = new Map();
let map1 = new Map();
let FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const Store = initializeDefault.Store;
class CreatorMonetizationStore extends Store {
}
const prototype = CreatorMonetizationStore.prototype;
prototype["getPriceTiersFetchStateForGuildAndType"] = function getPriceTiersFetchStateForGuildAndType(arg0, arg1) {
  map1.get(arg0);
  value = undefined;
  if (value != null) {
    value = value.get(arg1);
  }
  if (value == null) {
    value = obj.NOT_FETCHED;
  }
  return value;
};
prototype["getPriceTiersForGuildAndType"] = function getPriceTiersForGuildAndType(arg0, arg1) {
  map.get(arg0);
  value = undefined;
  if (value != null) {
    value = value.get(arg1);
  }
  return value;
};
CreatorMonetizationStore.displayName = "CreatorMonetizationStore";
FetchState = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function handleFetchPriceTiers(guildId) {
    guildId = guildId.guildId;
    if (!map1.has(guildId)) {
      const _Map = Map;
      map = new Map();
      const result = obj.set(guildId, map);
    }
    value = obj.get(guildId);
    const result1 = value.set(guildId.priceTierType, obj.FETCHING);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function handleFetchPriceTiersSuccess(priceTiers) {
    ({ guildId, priceTierType } = priceTiers);
    if (!map1.has(guildId)) {
      const _Map = Map;
      map = new Map();
      const result = obj.set(guildId, map);
    }
    value = obj.get(guildId);
    const result1 = value.set(priceTierType, obj.FETCHED);
    if (!map.has(guildId)) {
      const _Map2 = Map;
      map1 = new Map();
      const result2 = obj3.set(guildId, map1);
    }
    value = obj3.get(guildId);
    const result3 = value.set(priceTierType, priceTiers.priceTiers);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function handleFetchPriceTiersFailure(guildId) {
    guildId = guildId.guildId;
    if (!map1.has(guildId)) {
      const _Map = Map;
      map = new Map();
      const result = obj.set(guildId, map);
    }
    value = obj.get(guildId);
    const result1 = value.set(guildId.priceTierType, obj.FETCHED);
  }
};
const creatorMonetizationStore = new CreatorMonetizationStore(DispatcherDefault, FetchState);
const size = fn(2);
let result = size.fileFinishedImporting("modules/creator_monetization/CreatorMonetizationStore.tsx");

export default creatorMonetizationStore;
export { FetchState };