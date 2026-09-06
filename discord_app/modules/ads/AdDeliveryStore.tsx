// === Module 7700: map ===

// Module 7700 (map)
import initializeDefault from "initialize" /* 504 */;
import failsDefault from "fails" /* 559 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import setDefault from "set" /* 1090 */;
import AdPlacement from "AdPlacement" /* 5450 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import result3 from "result" /* 7701 */;

require = arg1;
let closure_9 = 30 * setDefault.Millis.SECOND;
let closure_10 = 10 * setDefault.Millis.MINUTE;
let c11 = null;
let c12 = false;
let map = new Map();
let c4 = 0;
let map1 = new Map();
let map2 = new Map();
let map3 = new Map();
let map4 = new Map();
c11 = null;
c12 = false;
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
prototype["isFetchingAdToDeliverByPlacement"] = function isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA) {
  let flag;
  if (map != null) {
    flag = map.get(MOBILE_HOME_DOCK_AREA);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["canRefreshAd"] = function canRefreshAd(MOBILE_HOME_DOCK_AREA) {
  let value;
  if (map4 != null) {
    value = map4.get(MOBILE_HOME_DOCK_AREA);
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
prototype["getNoFillForPlacement"] = function getNoFillForPlacement(arg0, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.includeExpired;
  if (flag === undefined) {
    flag = false;
  }
  const value = map2.get(arg0);
  let tmp2 = null;
  if (null != value) {
    if (flag) {
      let tmp5 = value;
    } else {
      const _Date = Date;
      const sum = value.fetchedAt + value.ttlMillis;
      tmp5 = null;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
prototype["isFetchingQuestHomeHero"] = function isFetchingQuestHomeHero() {
  return c12;
};
prototype["getLastFetchedQuestHomeHero"] = function getLastFetchedQuestHomeHero() {
  return c11;
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
    map4 = new Map();
    c11 = null;
    c12 = false;
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    ({ creative, placement, adDecisionData, responseTtlSeconds, metadataSealed, trafficMetadataSealed, fetchedAt } = arg0);
    ({ quest, isNoFill, adContext, provenanceMetadataSealed } = arg0);
    closure_4 = Date.now();
    map = new Map(map);
    const result = map.set(placement, false);
    map1 = new Map(map1);
    if (true === isNoFill) {
      if (null == quest) {
        let decision_id;
        if (adDecisionData != null) {
          decision_id = adDecisionData.decision_id;
        }
        if (null != decision_id) {
          let obj = { decisionId: null, metadataSealed: null, trafficMetadataSealed: null, fetchedAt: null, ttlMillis: null };
          obj[0] = adDecisionData.decision_id;
          obj[1] = metadataSealed;
          obj[2] = trafficMetadataSealed;
          obj[3] = fetchedAt;
          obj[4] = result3.resolveResponseTtl(responseTtlSeconds);
          const result1 = map1.set(placement, obj);
          const obj3 = result3;
        }
        const value = map3.get(placement);
        if (value != null) {
          value.succeed();
        }
        map4.delete(placement);
        if (creative == null) {
          creative = null;
        }
        obj = { creative: null, fetchedAt: null, ttlMillis: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        obj[0] = creative;
        obj[1] = fetchedAt;
        obj[2] = result3.resolveResponseTtl(responseTtlSeconds);
        obj[3] = adDecisionData;
        obj[4] = adContext;
        obj[5] = metadataSealed;
        obj[6] = trafficMetadataSealed;
        obj[7] = provenanceMetadataSealed;
        const _Map = Map;
        map2 = new Map(map2);
        const result2 = map2.set(placement, obj);
      }
    }
    map1.delete(placement);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function handleFetchQuestToDeliverFailure(placement) {
    placement = placement.placement;
    map = new Map(map);
    map.delete(placement);
    closure_4 = Date.now();
    map1 = new Map(map1);
    const result = map1.set(placement, false);
    let value = map3.get(placement);
    if (null == value) {
      const tmp9 = new failsDefault(closure_9, closure_10);
      const result1 = map3.set(placement, tmp9);
      value = tmp9;
    }
    const timestamp = Date.now();
    const result2 = map4.set(placement, timestamp + value.fail());
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
    c12 = true;
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(fetchedAt) {
    c12 = false;
    closure_11 = Date.now();
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
    c12 = false;
    map = new Map(map);
    const result = map.set(placement.placement, false);
  }
});
let result = require("set").fileFinishedImporting("modules/ads/AdDeliveryStore.tsx");

export default adDeliveryStore;