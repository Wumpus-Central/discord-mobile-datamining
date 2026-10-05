// discord_app/modules/ads/AdDeliveryStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import AdPlacement from "../../../discord_common/js/shared/shared-constants/AdPlacement.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AdDecisionUtils from "utils/AdDecisionUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

let closure_9 = 30 * DurationsDefault.Millis.SECOND;
let closure_10 = 10 * DurationsDefault.Millis.MINUTE;
new Map();
let closure_4 = 0;
let map1 = new Map();
let map2 = new Map();
let map = map2;
const map3 = new Map();
const map4 = new Map();
let closure_11 = null;
let c12 = false;
const Store = get_initializedDefault.Store;
class AdDeliveryStore extends Store {
  isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA) {
    let flag;
    if (map != null) {
      flag = map.get(MOBILE_HOME_DOCK_AREA);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  canRefreshAd(MOBILE_HOME_DOCK_AREA) {
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
  }
  getNoFillForPlacement(arg0, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.includeExpired;
    if (flag === undefined) {
      flag = false;
    }
    const value = map.get(arg0);
    let tmp2 = null;
    if (null != value) {
      let tmp5;
      if (flag) {
        tmp5 = value;
      } else {
        const _Date = Date;
        const sum = value.fetchedAt + value.ttlMillis;
        tmp5 = null;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }
  isFetchingQuestHomeHero() {
    return c12;
  }
  getLastFetchedQuestHomeHero() {
    return closure_11;
  }
  getQuestHomeHero() {
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
  }
}
const prototype = AdDeliveryStore.prototype;
Object.defineProperty(prototype, "lastFetchedQuestToDeliver", {
  get: function lastFetchedQuestToDeliver() {
    return closure_4;
  },
  set: undefined,
});
Object.defineProperty(prototype, "deliveryAdDecisionByPlacement", {
  get: function deliveryAdDecisionByPlacement() {
    return map1;
  },
  set: undefined,
});
AdDeliveryStore.displayName = "AdDeliveryStore";
let obj = {
  LOGOUT: function handleLogout() {
    new Map();
    closure_4 = 0;
    new Map();
    new Map();
    new Map();
    new Map();
    new Map();
    closure_11 = null;
    c12 = false;
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    placement = placement.placement;
    map = new Map(map);
    const result = map.set(placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    let adContext;
    let adDecisionData;
    let creative;
    let fetchedAt;
    let isNoFill;
    let metadataSealed;
    let obj3;
    let obj6;
    let placement;
    let provenanceMetadataSealed;
    let quest;
    let responseTtlSeconds;
    let trafficMetadataSealed;
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
          const obj = {
            decisionId: adDecisionData.decision_id,
            metadataSealed,
            trafficMetadataSealed,
            fetchedAt,
            ttlMillis: obj3.resolveResponseTtl(responseTtlSeconds),
          };
          set = map.set;
          obj3 = AdDecisionUtils;
          const result1 = set(placement, obj);
        }
        const value = map3.get(placement);
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
          ttlMillis: obj6.resolveResponseTtl(responseTtlSeconds),
          adDecisionData,
          adContext,
          metadataSealed,
          trafficMetadataSealed,
          provenanceMetadataSealed,
        };
        const _Map = Map;
        const self = this;
        const self2 = this;
        obj6 = AdDecisionUtils;
        const map2 = new Map(map1);
        map1 = map2;
        const result2 = map2.set(placement, obj2);
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
    let value = map3.get(placement);
    if (null == value) {
      const self = this;
      const self2 = this;
      const tmp7 = new BackoffDefault(closure_9, closure_10);
      const result1 = map3.set(placement, tmp7);
      value = tmp7;
    }
    set = map4.set;
    const timestamp = Date.now();
    const result2 = set(placement, timestamp + value.fail());
  },
  QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function handleClearExpiredQuestToDeliver(placement) {
    let fetchedAt;
    let obj3;
    let responseTtlSeconds;
    placement = placement.placement;
    ({ responseTtlSeconds, fetchedAt } = placement);
    map = new Map(map);
    const result = map.set(placement, false);
    const obj = { creative: null, fetchedAt, ttlMillis: obj3.resolveResponseTtl(responseTtlSeconds) };
    obj3 = AdDecisionUtils;
    map1 = new Map(map1);
    const result1 = map1.set(placement, obj);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function handleFetchQuestHomeHeroBegin(placement) {
    c12 = true;
    placement = placement.placement;
    map = new Map(map);
    const result = map.set(placement, true);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(fetchedAt) {
    let obj4;
    c12 = false;
    closure_11 = Date.now();
    const placement = fetchedAt.placement;
    map = new Map(map);
    const result = map.set(placement, false);
    let tmp2 = null;
    if (null != fetchedAt.questHomeHero) {
      tmp2 = { type: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, questHomeHero: fetchedAt.questHomeHero };
      const obj = { type: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, questHomeHero: fetchedAt.questHomeHero };
    }
    const obj2 = {
      creative: tmp2,
      fetchedAt: fetchedAt.fetchedAt,
      ttlMillis: obj4.resolveResponseTtl(fetchedAt.responseTtlSeconds),
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
    obj4 = AdDecisionUtils;
    map1 = new Map(map1);
    const result1 = map1.set(fetchedAt.placement, obj2);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function handleFetchQuestHomeHeroFailure(placement) {
    c12 = false;
    placement = placement.placement;
    map = new Map(map);
    const result = map.set(placement, false);
  },
};
const adDeliveryStore = new AdDeliveryStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/ads/AdDeliveryStore.tsx");

export default adDeliveryStore;
