// discord_app/modules/ads/AdDeliveryStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import AdPlacement from "../../../discord_common/js/shared/shared-constants/AdPlacement.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AdDecisionUtils from "utils/AdDecisionUtils.tsx";

require = fn;
let closure_9 = 30 * DurationsDefault.Millis.SECOND;
let closure_10 = 10 * DurationsDefault.Millis.MINUTE;
new Map();
let closure_4 = 0;
let map1 = new Map();
let map = new Map();
let map3 = new Map();
let map4 = new Map();
let closure_11 = null;
let c12 = false;
const Store = initializeDefault.Store;
class AdDeliveryStore extends Store {}
const prototype = AdDeliveryStore.prototype;
Object.defineProperty(prototype, "lastFetchedQuestToDeliver", {
  get: function lastFetchedQuestToDeliver() {
    return closure_4;
  },
  set: undefined,
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
  value = undefined;
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
  set: undefined,
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
  value = map.get(arg0);
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
  return closure_11;
};
prototype["getQuestHomeHero"] = function getQuestHomeHero() {
  value = map1.get(AdPlacement.AdPlacement.QUEST_HOME_BANNER_DESKTOP);
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
const adDeliveryStore = new AdDeliveryStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    new Map();
    closure_4 = 0;
    map1 = new Map();
    map = new Map();
    map3 = new Map();
    map4 = new Map();
    closure_11 = null;
    c12 = false;
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    ({ creative, placement, adDecisionData, responseTtlSeconds, metadataSealed, trafficMetadataSealed, fetchedAt } =
      arg0);
    ({ quest, isNoFill, adContext, provenanceMetadataSealed } = arg0);
    closure_4 = Date.now();
    map = new Map(map);
    const result = map.set(placement, false);
    map1 = new Map(map);
    map = map1;
    if (true === isNoFill) {
      if (null == quest) {
        let decision_id;
        if (adDecisionData != null) {
          decision_id = adDecisionData.decision_id;
        }
        if (null != decision_id) {
          let obj = {
            decisionId: adDecisionData.decision_id,
            metadataSealed,
            trafficMetadataSealed,
            fetchedAt,
            ttlMillis: AdDecisionUtils.resolveResponseTtl(responseTtlSeconds),
          };
          const result1 = map.set(placement, obj);
        }
        value = map3.get(placement);
        if (value != null) {
          value.succeed();
        }
        map4.delete(placement);
        if (creative == null) {
          creative = null;
        }
        obj = {
          creative,
          fetchedAt,
          ttlMillis: AdDecisionUtils.resolveResponseTtl(responseTtlSeconds),
          adDecisionData,
          adContext,
          metadataSealed,
          trafficMetadataSealed,
          provenanceMetadataSealed,
        };
        const _Map = Map;
        const map2 = new Map(map1);
        map1 = map2;
        const result2 = map2.set(placement, obj);
      }
    }
    map.delete(placement);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function handleFetchQuestToDeliverFailure(placement) {
    placement = placement.placement;
    map = new Map(map);
    map.delete(placement);
    closure_4 = Date.now();
    map1 = new Map(map);
    map = map1;
    const result = map1.set(placement, false);
    value = map3.get(placement);
    if (null == value) {
      const tmp9 = new BackoffDefault(closure_9, closure_10);
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
    const obj = { creative: null, fetchedAt, ttlMillis: AdDecisionUtils.resolveResponseTtl(responseTtlSeconds) };
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
      let obj = { type: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, questHomeHero: fetchedAt.questHomeHero };
      tmp2 = obj;
    }
    obj = {
      creative: tmp2,
      fetchedAt: fetchedAt.fetchedAt,
      ttlMillis: AdDecisionUtils.resolveResponseTtl(fetchedAt.responseTtlSeconds),
      adDecisionData: null,
      adContext: null,
      metadataSealed: null,
      trafficMetadataSealed: null,
      provenanceMetadataSealed: null,
    };
    ({
      adDecisionData: obj3.adDecisionData,
      adContext: obj3.adContext,
      metadataSealed: obj3.metadataSealed,
      trafficMetadataSealed: obj3.trafficMetadataSealed,
      provenanceMetadataSealed: obj3.provenanceMetadataSealed,
    } = fetchedAt);
    map1 = new Map(map1);
    const result1 = map1.set(fetchedAt.placement, obj);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function handleFetchQuestHomeHeroFailure(placement) {
    c12 = false;
    map = new Map(map);
    const result = map.set(placement.placement, false);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/ads/AdDeliveryStore.tsx");

export default adDeliveryStore;
