// === Module 13515: CreatorMonetizationStore ===

// Module 13515 (CreatorMonetizationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let set, set2;

let map = new Map();
let map1 = new Map();
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const Store = get_initializedDefault.Store;
class CreatorMonetizationStore extends Store {
  getPriceTiersFetchStateForGuildAndType(arg0, arg1) {
    const value = map1.get(arg0);
    let value2;
    if (value != null) {
      value2 = value.get(arg1);
    }
    if (value2 == null) {
      value2 = obj.NOT_FETCHED;
    }
    return value2;
  }
  getPriceTiersForGuildAndType(arg0, arg1) {
    const value = map.get(arg0);
    let value2;
    if (value != null) {
      value2 = value.get(arg1);
    }
    return value2;
  }
}
const prototype = CreatorMonetizationStore.prototype;
CreatorMonetizationStore.displayName = "CreatorMonetizationStore";
const obj2 = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function handleFetchPriceTiers(guildId) {
    guildId = guildId.guildId;
    const priceTierType = guildId.priceTierType;
    if (!map1.has(guildId)) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      set = map1.set;
      map = new Map();
      const result = set(guildId, map);
    }
    const value = map1.get(guildId);
    const result1 = value.set(priceTierType, map1.FETCHING);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function handleFetchPriceTiersSuccess(priceTiers) {
    let guildId;
    let priceTierType;
    ({ guildId, priceTierType } = priceTiers);
    priceTiers = priceTiers.priceTiers;
    if (!map1.has(guildId)) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      set = map1.set;
      map = new Map();
      const result = set(guildId, map);
    }
    const value = obj.get(guildId);
    const result1 = value.set(priceTierType, obj.FETCHED);
    if (!map.has(guildId)) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      set2 = map.set;
      map1 = new Map();
      set2(guildId, map1);
    }
    const value2 = obj3.get(guildId);
    const result2 = value2.set(priceTierType, priceTiers);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function handleFetchPriceTiersFailure(guildId) {
    guildId = guildId.guildId;
    const priceTierType = guildId.priceTierType;
    if (!map1.has(guildId)) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      set = map1.set;
      map = new Map();
      const result = set(guildId, map);
    }
    const value = map1.get(guildId);
    const result1 = value.set(priceTierType, map1.FETCHED);
  }
};
const creatorMonetizationStore = new CreatorMonetizationStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/creator_monetization/CreatorMonetizationStore.tsx");

export default creatorMonetizationStore;
export { FetchState };