// discord_app/modules/ads/AdDeliveryStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import AdPlacement from "../../../discord_common/js/shared/shared-constants/AdPlacement.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AdDecisionUtils from "utils/AdDecisionUtils.tsx";

require = fn;
let closure_9 = [];
let closure_10 = 30 * DurationsDefault.Millis.SECOND;
let closure_11 = 10 * DurationsDefault.Millis.MINUTE;
new Map();
let closure_4 = 0;
let map1 = new Map();
let map = new Map();
let map3 = new Map();
let map4 = new Map();
let closure_12 = null;
let c13 = false;
const Store = initializeDefault.Store;
class AdDeliveryStore extends Store {}
const prototype = AdDeliveryStore.prototype;
Object.defineProperty(prototype, "lastFetchedQuestToDeliver", {
  get: function lastFetchedQuestToDeliver() {
    return closure_4;
  },
  set: undefined,
});
prototype["isFetchingAdToDeliverByPlacement"] = function isFetchingAdToDeliverByPlacement(current) {
  let flag;
  if (map != null) {
    flag = map.get(current);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["canRefreshAd"] = function canRefreshAd(current) {
  value = undefined;
  if (map4 != null) {
    value = map4.get(current);
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
prototype["getAdDecisionsForPlacement"] = function getAdDecisionsForPlacement(MOBILE_HOME_DOCK_AREA) {
  value = map1.get(MOBILE_HOME_DOCK_AREA);
  if (value == null) {
    value = closure_9;
  }
  return value;
};
prototype["getNoFillForPlacement"] = function getNoFillForPlacement(arg0) {
  value = map.get(arg0);
  let tmp2 = null;
  if (null != value) {
    const _Date = Date;
    const sum = value.fetchedAt + value.ttlMillis;
    let tmp5 = null;
    if (sum >= Date.now()) {
      tmp5 = value;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
prototype["isFetchingQuestHomeHero"] = function isFetchingQuestHomeHero() {
  return c13;
};
prototype["getLastFetchedQuestHomeHero"] = function getLastFetchedQuestHomeHero() {
  return closure_12;
};
prototype["getQuestHomeHero"] = function getQuestHomeHero() {
  const first = this.getAdDecisionsForPlacement(AdPlacement.AdPlacement.QUEST_HOME_BANNER_DESKTOP)[0];
  let creative;
  if (first != null) {
    creative = first.creative;
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
    closure_12 = null;
    c13 = false;
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    ({
      creative,
      noFillAdContentId,
      placement,
      adDecisionData,
      responseTtlSeconds,
      metadataSealed,
      trafficMetadataSealed,
      fetchedAt,
    } = arg0);
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
          const obj = {
            decisionId: adDecisionData.decision_id,
            adContentId: noFillAdContentId,
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
        const obj2 = {
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
        items = [obj2];
        const result2 = map2.set(placement, items);
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
      const tmp9 = new BackoffDefault(closure_10, closure_11);
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
    items = [obj];
    const result1 = map1.set(placement, items);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function handleFetchQuestHomeHeroBegin(placement) {
    c13 = true;
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(fetchedAt) {
    c13 = false;
    closure_12 = Date.now();
    map = new Map(map);
    const result = map.set(fetchedAt.placement, false);
    value = map3.get(fetchedAt.placement);
    if (value != null) {
      value.succeed();
    }
    map4.delete(fetchedAt.placement);
    let tmp4 = null;
    if (null != fetchedAt.questHomeHero) {
      const obj = { type: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, questHomeHero: fetchedAt.questHomeHero };
      tmp4 = obj;
    }
    const obj2 = {
      creative: tmp4,
      fetchedAt: fetchedAt.fetchedAt,
      ttlMillis: AdDecisionUtils.resolveResponseTtl(fetchedAt.responseTtlSeconds),
      adDecisionData: null,
      adContext: null,
      metadataSealed: null,
      trafficMetadataSealed: null,
      provenanceMetadataSealed: null,
    };
    ({
      adDecisionData: obj4.adDecisionData,
      adContext: obj4.adContext,
      metadataSealed: obj4.metadataSealed,
      trafficMetadataSealed: obj4.trafficMetadataSealed,
      provenanceMetadataSealed: obj4.provenanceMetadataSealed,
    } = fetchedAt);
    map1 = new Map(map1);
    items = [obj2];
    const result1 = map1.set(fetchedAt.placement, items);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function handleFetchQuestHomeHeroFailure(placement) {
    placement = placement.placement;
    c13 = false;
    map = new Map(map);
    const result = map.set(placement, false);
    value = map3.get(placement);
    if (null == value) {
      const tmp8 = new BackoffDefault(closure_10, closure_11);
      const result1 = map3.set(placement, tmp8);
      value = tmp8;
    }
    const timestamp = Date.now();
    const result2 = map4.set(placement, timestamp + value.fail());
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/ads/AdDeliveryStore.tsx");

export default adDeliveryStore;
