// === Module 7454: map ===

// Module 7454 (map)
import failsDefault from "fails" /* 581 */;
import initializeDefault from "initialize" /* 586 */;
import setDefault from "set" /* 684 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import AdPlacement from "AdPlacement" /* 5401 */;
import result3 from "result" /* 7455 */;
import AdCreativeType from "AdCreativeType" /* 7456 */;

require = arg1;
let closure_8 = 30 * setDefault.Millis.SECOND;
let closure_9 = 10 * setDefault.Millis.MINUTE;
let c10 = null;
let c11 = false;
let map = new Map();
let c4 = 0;
let map1 = new Map();
let map2 = new Map();
let map3 = new Map();
c10 = null;
c11 = false;
const Store = initializeDefault.Store;
class AdDeliveryStore extends Store {
}
const prototype = AdDeliveryStore.prototype;
Object.defineProperty(prototype, "lastFetchedQuestToDeliver", {
  get: function lastFetchedQuestToDeliver() {
    return c4;
  },
  set: undefined
});
prototype["isFetchingAdToDeliverByPlacement"] = function isFetchingAdToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP) {
  let flag;
  if (map != null) {
    flag = map.get(QUEST_HOME_BANNER_DESKTOP);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["canRefreshAd"] = function canRefreshAd(QUEST_HOME_BANNER_DESKTOP) {
  let value;
  if (map3 != null) {
    value = map3.get(QUEST_HOME_BANNER_DESKTOP);
  }
  let tmp3 = null == value;
  if (!tmp3) {
    const _Date = Date;
    tmp3 = Date.now() >= value;
  }
  return tmp3;
};
Object.defineProperty(prototype, "deliveryAdDecisionByPlacement", {
  get: function deliveryAdDecisionByPlacement() {
    return map1;
  },
  set: undefined
});
prototype["isFetchingQuestHomeHero"] = function isFetchingQuestHomeHero() {
  return c11;
};
prototype["getLastFetchedQuestHomeHero"] = function getLastFetchedQuestHomeHero() {
  return c10;
};
prototype["getQuestHomeHero"] = function getQuestHomeHero() {
  const value = map1.get(AdPlacement.AdPlacement.QUEST_HOME_BANNER_DESKTOP);
  let creative;
  if (value != null) {
    creative = value.creative;
  }
  let type;
  if (creative != null) {
    type = creative.type;
  }
  let questHomeHero = null;
  if (type === AdCreativeType.AdCreativeType.QUEST_HOME_HERO) {
    questHomeHero = creative.questHomeHero;
  }
  return questHomeHero;
};
AdDeliveryStore.displayName = "AdDeliveryStore";
const adDeliveryStore = new AdDeliveryStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    map = new Map();
    c4 = 0;
    map1 = new Map();
    map2 = new Map();
    map3 = new Map();
    c10 = null;
    c11 = false;
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    ({ creative, placement } = arg0);
    ({ adDecisionData, adContext, responseTtlSeconds, metadataSealed, trafficMetadataSealed, provenanceMetadataSealed, fetchedAt } = arg0);
    closure_4 = Date.now();
    map = new Map(map);
    const result = map.set(placement, false);
    const value = map2.get(placement);
    if (value != null) {
      value.succeed();
    }
    map3.delete(placement);
    if (creative == null) {
      creative = null;
    }
    const obj = { creative, fetchedAt, ttlMillis: result3.resolveResponseTtl(responseTtlSeconds), adDecisionData, adContext, metadataSealed, trafficMetadataSealed, provenanceMetadataSealed };
    map1 = new Map(map1);
    const result1 = map1.set(placement, obj);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function handleFetchQuestToDeliverFailure(placement) {
    placement = placement.placement;
    closure_4 = Date.now();
    map = new Map(map);
    const result = map.set(placement, false);
    let value = map2.get(placement);
    if (null == value) {
      const tmp8 = new failsDefault(closure_8, closure_9);
      const result1 = map2.set(placement, tmp8);
      value = tmp8;
    }
    const timestamp = Date.now();
    const result2 = map3.set(placement, timestamp + value.fail());
  },
  QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function handleClearExpiredQuestToDeliver(placement) {
    placement = placement.placement;
    ({ responseTtlSeconds, fetchedAt } = placement);
    map = new Map(map);
    const result = map.set(placement, false);
    const obj = { creative: null, fetchedAt, ttlMillis: result3.resolveResponseTtl(responseTtlSeconds) };
    map1 = new Map(map1);
    const result1 = map1.set(placement, obj);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function handleFetchQuestHomeHeroBegin(placement) {
    c11 = true;
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(fetchedAt) {
    c11 = false;
    closure_10 = Date.now();
    map = new Map(map);
    const result = map.set(fetchedAt.placement, false);
    let tmp2 = null;
    if (null != fetchedAt.questHomeHero) {
      let obj = { type: null, questHomeHero: null };
      obj[0] = AdCreativeType.AdCreativeType.QUEST_HOME_HERO;
      obj[1] = fetchedAt.questHomeHero;
      tmp2 = obj;
    }
    obj = { creative: tmp2, fetchedAt: fetchedAt.fetchedAt, ttlMillis: result3.resolveResponseTtl(fetchedAt.responseTtlSeconds), adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
    ({ adDecisionData: obj3[3], adContext: obj3[4], metadataSealed: obj3[5], trafficMetadataSealed: obj3[6], provenanceMetadataSealed: obj3[7] } = fetchedAt);
    map1 = new Map(map1);
    const result1 = map1.set(fetchedAt.placement, obj);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function handleFetchQuestHomeHeroFailure(placement) {
    c11 = false;
    map = new Map(map);
    const result = map.set(placement.placement, false);
  }
});
let result = require("set").fileFinishedImporting("modules/ads/AdDeliveryStore.tsx");

export default adDeliveryStore;