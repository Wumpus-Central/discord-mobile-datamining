import { Store } from "initialize";

let map = new Map();
let map1 = new Map();
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
class CreatorMonetizationStore extends Store {
}
const prototype = CreatorMonetizationStore.prototype;
prototype["getPriceTiersFetchStateForGuildAndType"] = function getPriceTiersFetchStateForGuildAndType(arg0, arg1) {
  let value = map1.get(arg0);
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
  let value = map.get(arg0);
  value = undefined;
  if (value != null) {
    value = value.get(arg1);
  }
  return value;
};
CreatorMonetizationStore.displayName = "CreatorMonetizationStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function handleFetchPriceTiers(guildId) {
    guildId = guildId.guildId;
    if (!map1.has(guildId)) {
      const _Map = Map;
      const map = new Map();
      const result = obj.set(guildId, map);
    }
    const value = obj.get(guildId);
    const result1 = value.set(guildId.priceTierType, obj.FETCHING);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function handleFetchPriceTiersSuccess(priceTiers) {
    let guildId;
    let priceTierType;
    ({ guildId, priceTierType } = priceTiers);
    if (!map1.has(guildId)) {
      const _Map = Map;
      const map = new Map();
      const result = obj.set(guildId, map);
    }
    let value = obj.get(guildId);
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
      const map = new Map();
      const result = obj.set(guildId, map);
    }
    const value = obj.get(guildId);
    const result1 = value.set(guildId.priceTierType, obj.FETCHED);
  }
};
const creatorMonetizationStore = new CreatorMonetizationStore(require("dispatcher"), obj);
let result = require("set").fileFinishedImporting("modules/creator_monetization/CreatorMonetizationStore.tsx");

export default creatorMonetizationStore;
export const FetchState = obj;