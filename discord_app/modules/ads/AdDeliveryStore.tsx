// === Module 8362: AdDeliveryStore ===

// Module 8362 (AdDeliveryStore)
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1088 */;
import AdPlacement from "AdPlacement" /* 6877 */;
import AdCreativeType from "AdCreativeType" /* 6878 */;
import AdDecisionUtils from "AdDecisionUtils" /* 8363 */;
import QuestServerUtils from "QuestServerUtils" /* 8364 */;
import _toArray from "_toArray" /* 717 */;

require = fn;
function updateQuestSeriesRewardUserStatus(fn, fn2) {
  const QUEST_HOME_BANNER_DESKTOP = AdPlacement.AdPlacement.QUEST_HOME_BANNER_DESKTOP;
  let items1 = map1.get(QUEST_HOME_BANNER_DESKTOP);
  if (items1 == null) {
    items1 = [];
  }
  const arr2 = _toArray(items1);
  const first = arr2[0];
  const substr = arr2.slice(1);
  let creative;
  if (first != null) {
    creative = first.creative;
  }
  let type;
  if (creative != null) {
    type = creative.type;
  }
  if (type !== AdCreativeType.AdCreativeType.QUEST_HOME_HERO) {
    return false;
  } else {
    const questHomeHero = creative.questHomeHero;
    const questSeries = questHomeHero.questSeries;
    if (null != questSeries) {
      if (fn(questSeries.rewardQuest, questHomeHero)) {
        const obj = {};
        const merged = Object.assign(questSeries.rewardQuest);
        obj.userStatus = fn2(questSeries.rewardQuest);
        const _Map = Map;
        map = new Map(map1);
        const obj2 = {};
        const merged1 = Object.assign(first);
        const obj3 = {};
        const merged2 = Object.assign(creative);
        const obj4 = {};
        const merged3 = Object.assign(questHomeHero);
        const obj5 = {};
        const merged4 = Object.assign(questSeries);
        obj5.rewardQuest = obj;
        obj4.questSeries = obj5;
        obj3.questHomeHero = obj4;
        obj2.creative = obj3;
        items = [obj2];
        HermesBuiltin.arraySpread(substr, 1);
        const result = map.set(QUEST_HOME_BANNER_DESKTOP, items);
        return true;
      }
    }
    return false;
  }
}
let closure_10 = [];
let closure_11 = 30 * DurationsDefault.Millis.SECOND;
let closure_12 = 10 * DurationsDefault.Millis.MINUTE;
new Set();
new Map();
let closure_4 = 0;
let map1 = new Map();
let map = new Map();
let map3 = new Map();
let map4 = new Map();
let closure_13 = null;
let c14 = false;
let map2 = new Map();
let set = new Set();
const Store = initializeDefault.Store;
class AdDeliveryStore extends Store {
}
const prototype = AdDeliveryStore.prototype;
Object.defineProperty(prototype, "lastFetchedQuestToDeliver", {
  get: function lastFetchedQuestToDeliver() {
    return closure_4;
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
  value = undefined;
  if (map4 != null) {
    value = map4.get(QUEST_HOME_BANNER_DESKTOP);
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
prototype["getAdDecisionsForPlacement"] = function getAdDecisionsForPlacement(QUEST_HOME_BANNER_DESKTOP) {
  value = map1.get(QUEST_HOME_BANNER_DESKTOP);
  if (value == null) {
    value = closure_10;
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
  return c14;
};
prototype["getLastFetchedQuestHomeHero"] = function getLastFetchedQuestHomeHero() {
  return closure_13;
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
prototype["isClaimingQuestSeriesReward"] = function isClaimingQuestSeriesReward(arg0) {
  return set.has(arg0);
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
    closure_13 = null;
    c14 = false;
    set = new Set();
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    ({ creative, noFillAdContentId, placement, adDecisionData, responseTtlSeconds, metadataSealed, trafficMetadataSealed, fetchedAt } = arg0);
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
          const obj = { decisionId: adDecisionData.decision_id, adContentId: noFillAdContentId, metadataSealed, trafficMetadataSealed, fetchedAt, ttlMillis: AdDecisionUtils.resolveResponseTtl(responseTtlSeconds) };
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
        const obj2 = { creative, fetchedAt, ttlMillis: AdDecisionUtils.resolveResponseTtl(responseTtlSeconds), adDecisionData, adContext, metadataSealed, trafficMetadataSealed, provenanceMetadataSealed };
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
      const tmp9 = new BackoffDefault(closure_11, closure_12);
      const result1 = map3.set(placement, tmp9);
      value = tmp9;
    }
    const timestamp = Date.now();
    const result2 = map4.set(placement, timestamp + value.fail());
  },
  QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function handleClearExpiredQuestToDeliver(arg0) {
    ({ placement, responseTtlSeconds, fetchedAt, refetchOnFocus } = arg0);
    map = new Map(map1);
    if (refetchOnFocus) {
      items = [];
    } else {
      const obj = { creative: null, fetchedAt, ttlMillis: AdDecisionUtils.resolveResponseTtl(responseTtlSeconds) };
      items = [obj];
    }
    const result = map.set(placement, items);
    map1 = map;
  },
  QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function handleFetchQuestHomeHeroBegin(placement) {
    c14 = true;
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(fetchedAt) {
    c14 = false;
    closure_13 = Date.now();
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
    const obj2 = { creative: tmp4, fetchedAt: fetchedAt.fetchedAt, ttlMillis: AdDecisionUtils.resolveResponseTtl(fetchedAt.responseTtlSeconds), adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
    ({ adDecisionData: obj4.adDecisionData, adContext: obj4.adContext, metadataSealed: obj4.metadataSealed, trafficMetadataSealed: obj4.trafficMetadataSealed, provenanceMetadataSealed: obj4.provenanceMetadataSealed } = fetchedAt);
    map1 = new Map(map1);
    items = [obj2];
    const result1 = map1.set(fetchedAt.placement, items);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function handleFetchQuestHomeHeroFailure(placement) {
    placement = placement.placement;
    c14 = false;
    map = new Map(map);
    const result = map.set(placement, false);
    value = map3.get(placement);
    if (null == value) {
      const tmp8 = new BackoffDefault(closure_11, closure_12);
      const result1 = map3.set(placement, tmp8);
      value = tmp8;
    }
    const timestamp = Date.now();
    const result2 = map4.set(placement, timestamp + value.fail());
  },
  QUEST_SERIES_CLAIM_REWARD_BEGIN: function handleQuestSeriesClaimRewardBegin(heroId) {
    set = new Set(set);
    set.add(heroId.heroId);
  },
  QUEST_SERIES_CLAIM_REWARD_SUCCESS: function handleQuestSeriesClaimRewardSuccess(heroId) {
    heroId = heroId.heroId;
    const entitlements = heroId.entitlements;
    set = new Set(set);
    set.delete(heroId);
    updateQuestSeriesRewardUserStatus((arg0, id) => {
      let tmp2 = id.id === heroId;
      if (tmp2) {
        tmp2 = null != tmp;
      }
      return tmp2;
    }, (userStatus) => {
      userStatus = userStatus.userStatus;
      let tmp = null;
      if (null != userStatus) {
        const obj = {};
        const merged = Object.assign(userStatus);
        obj.claimedAt = entitlements.claimedAt;
        tmp = obj;
      }
      return tmp;
    });
  },
  QUEST_SERIES_CLAIM_REWARD_FAILURE: function handleQuestSeriesClaimRewardFailure(heroId) {
    set = new Set(set);
    set.delete(heroId.heroId);
  },
  QUESTS_USER_STATUS_UPDATE: function handleQuestUserStatusUpdate(user_status) {
    user_status = user_status.user_status;
    return updateQuestSeriesRewardUserStatus((id) => id.id === user_status.quest_id, () => QuestServerUtils.questUserStatusFromServer(user_status));
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/ads/AdDeliveryStore.tsx");

export default adDeliveryStore;