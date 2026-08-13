// discord_app/modules/quests/QuestStore.tsx
import _slicedToArray from "_slicedToArray";
import useConsoleQuestUIStore from "useConsoleQuestUIStore";
import _toPropertyKey from "_toPropertyKey";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { Store } from "initialize";
import { fails } from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import { QuestRewardTypes } from "../../../discord_common/js/shared/shared-constants/QuestRewardTypes.tsx";
import { SentryUtils.native } from "../../utils/SentryUtils.native.tsx";
import { result } from "../ads/utils/AdDecisionUtils.tsx";
import { getQuestLogger } from "lib/getQuestLogger.tsx";
import { getQuestDeliveryDataForPlacement } from "utils/QuestDataUtils.tsx";
import { progressFromServer } from "utils/QuestServerUtils.tsx";

const require = arg1;
function initializeState() {
  let c3 = false;
  let c4 = false;
  const map = new Map();
  let c6 = false;
  let c7 = false;
  const map1 = new Map();
  const map2 = new Map();
  const map3 = new Map();
  const map4 = new Map();
  let c12 = 0;
  let c13 = 0;
  const set = new Set();
  const set1 = new Set();
  const set2 = new Set();
  const set3 = new Set();
  const set4 = new Set();
  const map5 = new Map();
  const map6 = new Map();
  const map7 = new Map();
  const map8 = new Map();
  const map9 = new Map();
  const map10 = new Map();
  const set5 = new Set();
  const map11 = new Map();
  const map12 = new Map();
  const map13 = new Map();
  if (null != c39) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c39);
    c39 = null;
  }
  let c28 = null;
  let c29 = null;
  if (null != c40) {
    const _clearTimeout2 = clearTimeout;
    clearTimeout(c40);
    c40 = null;
  }
  const map14 = new Map();
  const map15 = new Map();
  const map16 = new Map();
  const map17 = new Map();
  const map18 = new Map();
  let c43 = null;
  let c45 = null;
}
function updateQuestData(questId, result2) {
  map = new Map(map);
  let value = map.get(questId);
  if (null != value) {
    let obj = {};
    const merged = Object.assign(value);
    const merged1 = Object.assign(result2);
    (function syncQuestProgressingOnDesktop(questId, userStatus) {
      if (null != userStatus.userStatus) {
        userStatus = userStatus.userStatus;
        let progress;
        if (userStatus != null) {
          progress = userStatus.progress;
        }
        if (progress == null) {
          progress = {};
        }
        const values = Object.values(progress);
        for (const item10011 of values) {
          let tmp4 = item10011;
          let tmp5 = callback;
          let tmp6 = table;
          let obj2 = callback(table[5]);
          if (!obj2.isNil(item10011)) {
            let DESKTOP = tmp5(tmp6[6]).FirstPartyQuestTaskTypesSets.DESKTOP;
            let tmp7 = item10011;
            if (DESKTOP.has(tmp4.eventName)) {
              let tmp8 = item10011;
              let heartbeat = tmp4.heartbeat;
              let lastBeatAt;
              if (heartbeat != null) {
                lastBeatAt = heartbeat.lastBeatAt;
              }
              if (null != lastBeatAt) {
                let tmp14 = set;
                let addResult = set.add(arg0);
              } else {
                let tmp10 = item10011;
                let heartbeat2 = tmp4.heartbeat;
                let lastBeatAt1;
                if (heartbeat2 != null) {
                  lastBeatAt1 = heartbeat2.lastBeatAt;
                }
                if (null == lastBeatAt1) {
                  let tmp12 = set;
                  let deleteResult = set.delete(arg0);
                }
              }
            }
          }
          continue;
        }
      }
    })(questId, result2);
    const result = map.set(questId, obj);
    if (map1.has(questId)) {
      value = map1.get(questId);
      if (null != value) {
        const _Map = Map;
        map1 = new Map(map1);
        obj = {};
        const merged2 = Object.assign(value);
        const merged3 = Object.assign(result2);
        const result1 = map1.set(questId, obj);
      }
    }
  }
}
function _runExpirationCheck() {
  const _require = false;
  map = new Map(map);
  const item = store.forEach((arg0, arg1) => {
    if (true !== map.get(arg1)) {
      if (obj2.isQuestExpired(arg0)) {
        const result = obj.set(arg1, true);
        const callback = true;
      } else if (!obj.has(arg1)) {
        const result1 = obj.set(arg1, false);
      }
      obj2 = callback(outer1_2[9]);
    }
  });
  if (_require) {
    questStore.emitChange();
  }
  let result = _getQuestDeliveryDataForPlacement.findNextUpcomingExpirationEpochMs(Array.from(store.values()));
  if (null != result) {
    const _Math = Math;
    const _Date = Date;
    const bound = Math.max(5000, result - Date.now() + 2000);
    if (bound <= c47) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback2();
      }, bound);
    }
  }
}
let map = new Map();
let c39 = null;
let c40 = null;
let closure_41 = 30 * require("set").Millis.SECOND;
let closure_42 = 10 * require("set").Millis.MINUTE;
let c43 = null;
let c44 = false;
let c45 = null;
let map1 = new Map();
let c47 = 864000000;
initializeState();
class QuestStore extends Store {
}
const prototype = QuestStore.prototype;
Object.defineProperty(prototype, "quests", {
  get: function quests() {
    return closure_9;
  },
  set: undefined
});
Object.defineProperty(prototype, "excludedQuests", {
  get: function excludedQuests() {
    return closure_10;
  },
  set: undefined
});
Object.defineProperty(prototype, "claimedQuests", {
  get: function claimedQuests() {
    return closure_11;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingCurrentQuests", {
  get: function isFetchingCurrentQuests() {
    return closure_3;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingClaimedQuests", {
  get: function isFetchingClaimedQuests() {
    return closure_6;
  },
  set: undefined
});
prototype["isFetchingQuestPreview"] = function isFetchingQuestPreview(closure_0) {
  return set5.has(closure_0);
};
Object.defineProperty(prototype, "lastFetchedCurrentQuests", {
  get: function lastFetchedCurrentQuests(isEligibleForQuests, arg1) {
    return closure_12;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedQuestToDeliver", {
  get: function lastFetchedQuestToDeliver() {
    return closure_13;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingQuestToDeliver", {
  get: function isFetchingQuestToDeliver() {
    return closure_4;
  },
  set: undefined
});
prototype["isFetchingQuestToDeliverByPlacement"] = function isFetchingQuestToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP) {
  let flag;
  if (closure_5 != null) {
    flag = closure_5.get(QUEST_HOME_BANNER_DESKTOP);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["canRefreshAd"] = function canRefreshAd(QUEST_HOME_BANNER_DESKTOP) {
  let value;
  if (closure_32 != null) {
    value = closure_32.get(QUEST_HOME_BANNER_DESKTOP);
  }
  let tmp3 = null == value;
  if (!tmp3) {
    const _Date = Date;
    tmp3 = Date.now() >= value;
  }
  return tmp3;
};
prototype["getQuestPreviewOverride"] = function getQuestPreviewOverride(QUEST_BAR_MOBILE) {
  let value = closure_23.get(QUEST_BAR_MOBILE);
  value = undefined;
  if (null != value) {
    value = store.get(value);
  }
  return value;
};
Object.defineProperty(prototype, "questToDeliverForPlacement", {
  get: function questToDeliverForPlacement() {
    return closure_25;
  },
  set: undefined
});
Object.defineProperty(prototype, "questEnrollmentBlockedUntil", {
  get: function questEnrollmentBlockedUntil() {
    return closure_28;
  },
  set: undefined
});
Object.defineProperty(prototype, "questAccessSuspendedUntil", {
  get: function questAccessSuspendedUntil() {
    return closure_29;
  },
  set: undefined
});
Object.defineProperty(prototype, "isQuestAccessSuspended", {
  get: function isQuestAccessSuspended() {
    return null != closure_29;
  },
  set: undefined
});
Object.defineProperty(prototype, "questAdDecisionByPlacement", {
  get: function questAdDecisionByPlacement() {
    return closure_30;
  },
  set: undefined
});
prototype["getFetchQuestPreviewError"] = function getFetchQuestPreviewError(arg0) {
  return map1.get(arg0);
};
prototype["isEnrolling"] = function isEnrolling(id) {
  return set.has(id);
};
prototype["isClaimingReward"] = function isClaimingReward(id) {
  return set2.has(id);
};
prototype["isFetchingRewardCode"] = function isFetchingRewardCode(id) {
  return set3.has(id);
};
prototype["isDismissingContent"] = function isDismissingContent(closure_0) {
  return set4.has(closure_0);
};
prototype["getRewardCode"] = function getRewardCode(id) {
  return closure_20.get(id);
};
prototype["getRewards"] = function getRewards(id) {
  return closure_21.get(id);
};
prototype["getStreamHeartbeatFailure"] = function getStreamHeartbeatFailure(arg0) {
  return closure_22.get(arg0);
};
prototype["getQuest"] = function getQuest(closure_0) {
  return store.get(closure_0);
};
prototype["getQuestConfig"] = function getQuestConfig(closure_0) {
  const quest = this.getQuest(closure_0);
  let config;
  if (quest != null) {
    config = quest.config;
  }
  return config;
};
prototype["isProgressingOnDesktop"] = function isProgressingOnDesktop(id) {
  return set6.has(id);
};
prototype["selectedTaskPlatform"] = function selectedTaskPlatform(closure_0) {
  let value = closure_24.get(closure_0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getOptimisticProgress"] = function getOptimisticProgress(id, WATCH_VIDEO) {
  let value = map.get(id);
  value = undefined;
  if (value != null) {
    value = value.get(WATCH_VIDEO);
  }
  return value;
};
prototype["getExpiredQuestsMap"] = function getExpiredQuestsMap() {
  return closure_27;
};
prototype["isQuestExpired"] = function isQuestExpired(arg0) {
  let flag = store3.get(arg0);
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getQuestLoadedViaPreview"] = function getQuestLoadedViaPreview(arg0) {
  return closure_33.get(arg0);
};
prototype["isFetchingQuestHomeHero"] = function isFetchingQuestHomeHero() {
  return c44;
};
prototype["getQuestHomeHero"] = function getQuestHomeHero() {
  return c45;
};
prototype["getLastFetchedQuestHomeHero"] = function getLastFetchedQuestHomeHero() {
  return c43;
};
Object.defineProperty(prototype, "isFetchingEarnedQuestToDeliver", {
  get: function isFetchingEarnedQuestToDeliver() {
    return closure_7;
  },
  set: undefined
});
prototype["isFetchingEarnedQuestToDeliverByPlacement"] = function isFetchingEarnedQuestToDeliverByPlacement(prop) {
  let flag;
  if (closure_8 != null) {
    flag = closure_8.get(prop);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
Object.defineProperty(prototype, "earnedQuestForPlacement", {
  get: function earnedQuestForPlacement() {
    return closure_26;
  },
  set: undefined
});
QuestStore.displayName = "QuestStore";
const questStore = new QuestStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    if (null != c39) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c39);
      c39 = null;
    }
    if (null != c40) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c40);
      c40 = null;
    }
    initializeState();
    const state = store5.getState();
    state.clearState();
    const state1 = state.getState();
    state1.reset();
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function handleFetchCurrentQuestsBegin() {
    let c3 = true;
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function handleFetchCurrentQuestsSuccess(arg0) {
    let excludedQuests;
    let questAccessSuspendedUntil;
    let questEnrollmentBlockedUntil;
    let quests;
    ({ quests, excludedQuests, questEnrollmentBlockedUntil, questAccessSuspendedUntil } = arg0);
    let mapped;
    const items = [...map.keys()];
    mapped = quests.map((id) => id.id);
    const found = items.filter((arg0) => !mapped.includes(arg0));
    if (found.length > 0) {
      let obj = SentryUtils.native;
      obj = { category: "quests.store", message: null, data: null };
      const _HermesInternal = HermesInternal;
      obj[1] = "handleFetchCurrentQuestsSuccess: " + found.length + " quest(s) removed during rebuild";
      obj = { prevQuestIds: null, nextQuestIds: null, removedIds: null };
      obj[0] = items;
      obj[1] = mapped;
      obj[2] = found;
      obj[2] = obj;
      obj.addBreadcrumb(obj);
    }
    let closure_12 = Date.now();
    let c3 = false;
    map = new Map();
    const map1 = new Map();
    const iter = quests[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp9 = nextResult;
      let tmp10 = map;
      let result = map.set(nextResult.id, nextResult);
      let tmp12 = mapped;
      let tmp13 = mapped;
      let tmp14 = dependencyMap;
      let tmp15 = dependencyMap;
      let obj5 = mapped(7204);
      let result1 = map1.set(nextResult.id, obj5.isQuestExpired(nextResult));
      let targetedContent = nextResult.targetedContent;
      if (targetedContent.includes(mapped(5205).QuestContent.QUEST_BAR)) {
        let tmp17 = tmp12;
        let tmp18 = tmp14;
        let tmp13Result = tmp13(7212);
        let obj1 = { location: null };
        let tmp19 = QuestsExperimentLocations;
        obj1[0] = QuestsExperimentLocations.QUESTS_STORE;
        let questLogger = tmp13Result.getQuestLogger(obj1);
        let tmp20 = nextResult;
        let _HermesInternal2 = HermesInternal;
        let str3 = "Delivered ";
        let str4 = " (";
        let str5 = ")";
        let logResult = questLogger.log("Delivered " + tmp9.config.messages.questName + " (" + tmp9.id + ")");
      }
      continue;
    }
    const map2 = new Map();
    for (const item10116 of excludedQuests) {
      let tmp23 = map2;
      let result2 = map2.set(item10116.id, item10116);
      continue;
    }
    if (closure_33 != null) {
      const values = closure_33.values();
    }
    for (const item10131 of values) {
      let tmp26 = item10131;
      let tmp27 = map;
      if (!map.has(item10131.id)) {
        let tmp28 = map;
        let tmp29 = item10131;
        let result3 = map.set(tmp26.id, tmp26);
        let tmp31 = mapped;
        let tmp32 = mapped;
        let tmp33 = dependencyMap;
        let tmp34 = dependencyMap;
        let obj10 = mapped(7204);
        let result4 = map1.set(tmp26.id, obj10.isQuestExpired(tmp26));
      }
      continue;
    }
    (function _startExpirationChecker() {
      if (null != c39) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c39);
        c39 = null;
      }
      callback();
    })();
    let date = null;
    if (null != questEnrollmentBlockedUntil) {
      let _Date = Date;
      date = new Date(questEnrollmentBlockedUntil);
    }
    let date1 = null;
    if (null != questAccessSuspendedUntil) {
      const _Date2 = Date;
      date1 = new Date(questAccessSuspendedUntil);
    }
    (function _startSuspensionExpirationTimer() {
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      if (null != date1) {
        const _Date = Date;
        const time = date1.getTime();
        const diff = time - Date.now();
        if (diff <= closure_47) {
          const _setTimeout = setTimeout;
          const _Math = Math;
          timeout = setTimeout(() => {
            let c40 = null;
            let c29 = null;
            closure_51.emitChange();
          }, Math.max(diff, 0));
        }
      }
    })();
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function handleFetchCurrentQuestsFailure() {
    let c12 = 0;
    let c3 = false;
  },
  QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function handleFetchClaimedQuestsBegin() {
    let c6 = true;
  },
  QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function handleFetchClaimedQuestsSuccess(arg0) {
    let c6 = false;
    const map = new Map();
    for (const item10013 of tmp) {
      let tmp3 = map;
      let result = map.set(item10013.id, item10013);
      continue;
    }
  },
  QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function handleFetchClaimedQuestsFailure() {
    let c6 = false;
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    let c4 = true;
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    let adContext;
    let adDecisionData;
    let fetchedAt;
    let metadataSealed;
    let placement;
    let quest;
    let responseTtlSeconds;
    let trafficMetadataSealed;
    ({ quest, placement } = arg0);
    ({ adDecisionData, adContext, responseTtlSeconds, metadataSealed, trafficMetadataSealed, fetchedAt } = arg0);
    let closure_13 = Date.now();
    let c4 = false;
    map = new Map(map);
    const result = map.set(placement, false);
    const value = store4.get(placement);
    if (value != null) {
      value.succeed();
    }
    map.delete(placement);
    let id;
    if (quest != null) {
      id = quest.id;
    }
    if (id == null) {
      id = null;
    }
    const obj = { questId: id, adCreativeId: null, fetchedAt: null, ttlMillis: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null };
    let id1;
    if (quest != null) {
      id1 = quest.id;
    }
    if (id1 == null) {
      id1 = null;
    }
    obj[1] = id1;
    obj[2] = fetchedAt;
    obj[3] = result.resolveResponseTtl(responseTtlSeconds);
    obj[4] = adDecisionData;
    obj[5] = adContext;
    obj[6] = metadataSealed;
    obj[7] = trafficMetadataSealed;
    map1 = new Map(map1);
    const result1 = map1.set(placement, obj);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function handleFetchQuestToDeliverFailure(placement) {
    placement = placement.placement;
    set7.delete(placement);
    let closure_13 = Date.now();
    let c4 = false;
    map = new Map(map);
    const result = map.set(placement, false);
    let value = store4.get(placement);
    if (null == value) {
      const tmp9 = new fails(closure_41, closure_42);
      const result1 = store4.set(placement, tmp9);
      value = tmp9;
    }
    const timestamp = Date.now();
    const result2 = map.set(placement, timestamp + value.fail());
  },
  QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function handleClearExpiredQuestToDeliver(placement) {
    let fetchedAt;
    let responseTtlSeconds;
    placement = placement.placement;
    let c4 = false;
    ({ responseTtlSeconds, fetchedAt } = placement);
    map = new Map(map);
    const result = map.set(placement, false);
    const obj = { questId: null, adCreativeId: null, fetchedAt, ttlMillis: null };
    obj[3] = result.resolveResponseTtl(responseTtlSeconds);
    map1 = new Map(map1);
    const result1 = map1.set(placement, obj);
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function handleFetchEarnedQuestToDeliverBegin(content) {
    let c7 = true;
    map = new Map(map);
    const result = map.set(content.content, true);
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function handleFetchEarnedQuestToDeliverSuccess(arg0) {
    let content;
    let fetchedAt;
    let responseTtlSeconds;
    let serverQuests;
    ({ serverQuests, content } = arg0);
    let c7 = false;
    ({ fetchedAt, responseTtlSeconds } = arg0);
    map = new Map(map);
    const result = map.set(content, false);
    const responseTtl = result.resolveResponseTtl(responseTtlSeconds);
    let value = store2.get(content);
    let prop;
    if (value != null) {
      prop = value.earnedDecisionByQuestId;
    }
    const map1 = new Map(prop);
    const obj2 = result;
    while (tmp5 !== undefined) {
      let tmp7 = callback;
      let tmp8 = callback(tmp6, 2);
      let first = tmp8[0];
      let tmp10 = first;
      let tmp11 = tmp8[1];
      let obj = { fetchedAt: null, ttlMillis: null, shouldDeliver: null };
      obj[0] = fetchedAt;
      obj[1] = responseTtl;
      obj[2] = null != tmp11;
      let tmp12 = tmp11;
      let result1 = map1.set(first, obj);
      if (null != tmp11) {
        let tmp33 = map2;
        let tmp34 = first;
        value = map2.get(tmp10);
        let tmp36 = require;
        let tmp37 = require;
        let tmp38 = dependencyMap;
        let tmp39 = dependencyMap;
        let obj8 = progressFromServer;
        let tmp40 = tmp11;
        let result2 = obj8.questWithUserStatusFromServer(tmp12);
        if (null != value) {
          let tmp28 = updateQuestData;
          let tmp29 = first;
          let tmp30 = result2;
          let tmp31 = updateQuestData(tmp10, result2);
        } else {
          let _Map = Map;
          let tmp14 = map2;
          let tmp15 = new.target;
          let tmp16 = new.target;
          map2 = new Map(map2);
          let tmp17 = map2;
          let tmp18 = first;
          let tmp19 = result2;
          let result3 = map2.set(tmp10, result2);
          let _Map2 = Map;
          let tmp21 = map3;
          let tmp22 = new.target;
          let tmp23 = new.target;
          map3 = new Map(map3);
          let tmp24 = map3;
          let tmp25 = tmp36;
          let tmp26 = tmp38;
          let tmp37Result = tmp37(7204);
          let result4 = map3.set(tmp10, tmp37Result.isQuestExpired(result2));
        }
      }
      continue;
    }
    const result5 = store2.set(content, { earnedDecisionByQuestId: map1 });
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function handleFetchEarnedQuestToDeliverFailure(content) {
    let c7 = false;
    map = new Map(map);
    const result = map.set(content.content, false);
  },
  QUESTS_FETCH_PREVIEW_BEGIN: function handleFetchQuestPreviewBegin(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.add(questId);
    map = new Map(map);
    map.delete(questId);
  },
  QUESTS_FETCH_PREVIEW_SUCCESS: function handleFetchQuestPreviewSuccess(arg0) {
    let quest;
    let questId;
    ({ questId, quest } = arg0);
    set = new Set(set);
    set.delete(questId);
    map = new Map(map);
    const result = map.set(questId, quest);
    map1 = new Map(map1);
    const result1 = map1.set(questId, quest);
    map2 = new Map(map2);
    map2.delete(questId);
  },
  QUESTS_FETCH_PREVIEW_FAILURE: function handleFetchQuestPreviewFailure(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.delete(questId);
    map = new Map(map);
    const result = map.set(questId, questId.error);
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function handleSendHeartbeatSuccess(userStatus) {
    let questId;
    let streamKey;
    ({ questId, streamKey } = userStatus);
    set6.add(questId);
    let obj = { userStatus: userStatus.userStatus };
    map = new Map(map);
    let value = map.get(questId);
    if (null != value) {
      obj = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values = Object.values(progress);
          for (const item10011 of values) {
            let tmp4 = item10011;
            let tmp5 = callback;
            let tmp6 = table;
            let obj2 = callback(table[5]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[6]).FirstPartyQuestTaskTypesSets.DESKTOP;
              let tmp7 = item10011;
              if (DESKTOP.has(tmp4.eventName)) {
                let tmp8 = item10011;
                let heartbeat = tmp4.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let tmp14 = set;
                  let addResult = set.add(arg0);
                } else {
                  let tmp10 = item10011;
                  let heartbeat2 = tmp4.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let tmp12 = set;
                    let deleteResult = set.delete(arg0);
                  }
                }
              }
            }
            continue;
          }
        }
      })(questId, obj);
      const result = map.set(questId, obj);
      if (map1.has(questId)) {
        value = map1.get(questId);
        if (null != value) {
          const _Map = Map;
          map1 = new Map(map1);
          obj = {};
          const merged2 = Object.assign(value);
          const merged3 = Object.assign(obj);
          const result1 = map1.set(questId, obj);
        }
      }
    }
    if (null != streamKey) {
      if (null != map2.get(streamKey)) {
        const _Map2 = Map;
        map2 = new Map(map2);
        map2.delete(streamKey);
      }
    }
  },
  QUESTS_SEND_HEARTBEAT_FAILURE: function handleSendHeartbeatFailure(streamKey) {
    streamKey = streamKey.streamKey;
    let tmp = null != streamKey;
    if (tmp) {
      tmp = null == map.get(streamKey);
    }
    if (tmp) {
      const _Map = Map;
      map = new Map(map);
      const obj = { questId: null, streamKey: null, firstFailedAt: null };
      obj[0] = streamKey.questId;
      obj[1] = streamKey;
      const _Date = Date;
      obj[2] = Date.now();
      const result = map.set(streamKey, obj);
    }
  },
  QUESTS_ENROLL_BEGIN: function handleEnrollBegin(questId) {
    set = new Set(set);
    set.add(questId.questId);
  },
  QUESTS_ENROLL_SUCCESS: function handleEnrollSuccess(enrolledQuestUserStatus) {
    enrolledQuestUserStatus = enrolledQuestUserStatus.enrolledQuestUserStatus;
    const questId = enrolledQuestUserStatus.questId;
    let obj = { userStatus: enrolledQuestUserStatus };
    map = new Map(map);
    let value = map.get(questId);
    if (null != value) {
      obj = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values = Object.values(progress);
          for (const item10011 of values) {
            let tmp4 = item10011;
            let tmp5 = callback;
            let tmp6 = table;
            let obj2 = callback(table[5]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[6]).FirstPartyQuestTaskTypesSets.DESKTOP;
              let tmp7 = item10011;
              if (DESKTOP.has(tmp4.eventName)) {
                let tmp8 = item10011;
                let heartbeat = tmp4.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let tmp14 = set;
                  let addResult = set.add(arg0);
                } else {
                  let tmp10 = item10011;
                  let heartbeat2 = tmp4.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let tmp12 = set;
                    let deleteResult = set.delete(arg0);
                  }
                }
              }
            }
            continue;
          }
        }
      })(questId, obj);
      const result = map.set(questId, obj);
      if (map1.has(questId)) {
        value = map1.get(questId);
        if (null != value) {
          const _Map = Map;
          map1 = new Map(map1);
          obj = {};
          const merged2 = Object.assign(value);
          const merged3 = Object.assign(obj);
          const result1 = map1.set(questId, obj);
        }
      }
    }
    set = new Set(set);
    set.delete(enrolledQuestUserStatus.questId);
  },
  QUESTS_ENROLL_FAILURE: function handleEnrollFailure(questId) {
    set = new Set(set);
    set.delete(questId.questId);
  },
  QUESTS_FETCH_REWARD_CODE_BEGIN: function handleFetchRewardCodeBegin(questId) {
    set = new Set(set);
    set.add(questId.questId);
  },
  QUESTS_FETCH_REWARD_CODE_SUCCESS: function handleFetchRewardCodeSuccess(arg0) {
    let questId;
    let rewardCode;
    ({ questId, rewardCode } = arg0);
    set = new Set(set);
    set.delete(questId);
    map = new Map(map);
    const result = map.set(questId, rewardCode);
    let value = map1.get(questId);
    let userStatus;
    if (value != null) {
      userStatus = value.userStatus;
    }
    if (tmp5) {
      let obj = { userStatus: null };
      obj = {};
      const merged = Object.assign(userStatus);
      obj.claimedAt = rewardCode.claimedAt;
      obj[0] = obj;
      const _Map = Map;
      map1 = new Map(map1);
      value = map1.get(questId);
      if (null != value) {
        const obj1 = {};
        const merged1 = Object.assign(value);
        const merged2 = Object.assign(obj);
        (function syncQuestProgressingOnDesktop(questId, userStatus) {
          if (null != userStatus.userStatus) {
            userStatus = userStatus.userStatus;
            let progress;
            if (userStatus != null) {
              progress = userStatus.progress;
            }
            if (progress == null) {
              progress = {};
            }
            const values = Object.values(progress);
            for (const item10011 of values) {
              let tmp4 = item10011;
              let tmp5 = callback;
              let tmp6 = table;
              let obj2 = callback(table[5]);
              if (!obj2.isNil(item10011)) {
                let DESKTOP = tmp5(tmp6[6]).FirstPartyQuestTaskTypesSets.DESKTOP;
                let tmp7 = item10011;
                if (DESKTOP.has(tmp4.eventName)) {
                  let tmp8 = item10011;
                  let heartbeat = tmp4.heartbeat;
                  let lastBeatAt;
                  if (heartbeat != null) {
                    lastBeatAt = heartbeat.lastBeatAt;
                  }
                  if (null != lastBeatAt) {
                    let tmp14 = set;
                    let addResult = set.add(arg0);
                  } else {
                    let tmp10 = item10011;
                    let heartbeat2 = tmp4.heartbeat;
                    let lastBeatAt1;
                    if (heartbeat2 != null) {
                      lastBeatAt1 = heartbeat2.lastBeatAt;
                    }
                    if (null == lastBeatAt1) {
                      let tmp12 = set;
                      let deleteResult = set.delete(arg0);
                    }
                  }
                }
              }
              continue;
            }
          }
        })(questId, obj);
        const result1 = map1.set(questId, obj1);
        if (map2.has(questId)) {
          const value1 = map2.get(questId);
          if (null != value1) {
            const _Map2 = Map;
            map2 = new Map(map2);
            const obj2 = {};
            const merged3 = Object.assign(value1);
            const merged4 = Object.assign(obj);
            const result2 = map2.set(questId, obj2);
          }
        }
      }
    }
  },
  QUESTS_FETCH_REWARD_CODE_FAILURE: function handleFetchRewardCodeFailure(questId) {
    set = new Set(set);
    set.delete(questId.questId);
  },
  QUESTS_CLAIM_REWARD_BEGIN: function handleClaimRewardBegin(questId) {
    set = new Set(set);
    set.add(questId.questId);
  },
  QUESTS_CLAIM_REWARD_SUCCESS: function handleClaimRewardSuccess(arg0) {
    let entitlements;
    let questId;
    ({ questId, entitlements } = arg0);
    set = new Set(set);
    set.delete(questId);
    map = new Map(map);
    const result = map.set(questId, entitlements.items);
    let value = map2.get(questId);
    let userStatus;
    if (value != null) {
      userStatus = value.userStatus;
    }
    if (null != userStatus) {
      if (null == userStatus.claimedAt) {
        const tenantMetadata = entitlements.items[0].tenantMetadata;
        let reward;
        if (tenantMetadata != null) {
          reward = tenantMetadata.questRewards.reward;
        }
        let tag;
        if (reward != null) {
          tag = reward.tag;
        }
        let rewardCode = null;
        if (tag === QuestRewardTypes.QuestRewardTypes.REWARD_CODE) {
          rewardCode = reward.rewardCode;
        }
        if (null != rewardCode) {
          const _Map = Map;
          map1 = new Map(map1);
          const result1 = map1.set(questId, rewardCode);
        }
        let obj = {};
        const merged = Object.assign(userStatus);
        obj.claimedAt = entitlements.claimedAt;
        let tier;
        if (rewardCode != null) {
          tier = rewardCode.tier;
        }
        if (tier == null) {
          tier = null;
        }
        obj = { userStatus: null, claimedTier: tier };
        obj[0] = obj;
        const _Map2 = Map;
        map2 = new Map(map2);
        value = map2.get(questId);
        if (null != value) {
          const obj1 = {};
          const merged1 = Object.assign(value);
          const merged2 = Object.assign(obj);
          (function syncQuestProgressingOnDesktop(questId, userStatus) {
            if (null != userStatus.userStatus) {
              userStatus = userStatus.userStatus;
              let progress;
              if (userStatus != null) {
                progress = userStatus.progress;
              }
              if (progress == null) {
                progress = {};
              }
              const values = Object.values(progress);
              for (const item10011 of values) {
                let tmp4 = item10011;
                let tmp5 = callback;
                let tmp6 = table;
                let obj2 = callback(table[5]);
                if (!obj2.isNil(item10011)) {
                  let DESKTOP = tmp5(tmp6[6]).FirstPartyQuestTaskTypesSets.DESKTOP;
                  let tmp7 = item10011;
                  if (DESKTOP.has(tmp4.eventName)) {
                    let tmp8 = item10011;
                    let heartbeat = tmp4.heartbeat;
                    let lastBeatAt;
                    if (heartbeat != null) {
                      lastBeatAt = heartbeat.lastBeatAt;
                    }
                    if (null != lastBeatAt) {
                      let tmp14 = set;
                      let addResult = set.add(arg0);
                    } else {
                      let tmp10 = item10011;
                      let heartbeat2 = tmp4.heartbeat;
                      let lastBeatAt1;
                      if (heartbeat2 != null) {
                        lastBeatAt1 = heartbeat2.lastBeatAt;
                      }
                      if (null == lastBeatAt1) {
                        let tmp12 = set;
                        let deleteResult = set.delete(arg0);
                      }
                    }
                  }
                }
                continue;
              }
            }
          })(questId, obj);
          const result2 = map2.set(questId, obj1);
          if (map3.has(questId)) {
            const value1 = map3.get(questId);
            if (null != value1) {
              const _Map3 = Map;
              map3 = new Map(map3);
              const obj2 = {};
              const merged3 = Object.assign(value1);
              const merged4 = Object.assign(obj);
              const result3 = map3.set(questId, obj2);
            }
          }
        }
      }
    }
  },
  QUESTS_CLAIM_REWARD_FAILURE: function handleClaimRewardFailure(questId) {
    set = new Set(set);
    set.delete(questId.questId);
  },
  QUESTS_DISMISS_CONTENT_BEGIN: function handleDismissContentBegin(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.add(questId);
    map = new Map(map);
    let flag = false;
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      let first = tmp5[0];
      if (tmp5[1] === questId) {
        let tmp7 = first;
        let deleteResult = map.delete(first);
        flag = true;
      }
      continue;
    }
  },
  QUESTS_DISMISS_CONTENT_SUCCESS: function handleDismissContentSuccess(dismissedQuestUserStatus) {
    dismissedQuestUserStatus = dismissedQuestUserStatus.dismissedQuestUserStatus;
    const questId = dismissedQuestUserStatus.questId;
    let obj = { userStatus: dismissedQuestUserStatus };
    map = new Map(map);
    let value = map.get(questId);
    if (null != value) {
      obj = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values = Object.values(progress);
          for (const item10011 of values) {
            let tmp4 = item10011;
            let tmp5 = callback;
            let tmp6 = table;
            let obj2 = callback(table[5]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[6]).FirstPartyQuestTaskTypesSets.DESKTOP;
              let tmp7 = item10011;
              if (DESKTOP.has(tmp4.eventName)) {
                let tmp8 = item10011;
                let heartbeat = tmp4.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let tmp14 = set;
                  let addResult = set.add(arg0);
                } else {
                  let tmp10 = item10011;
                  let heartbeat2 = tmp4.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let tmp12 = set;
                    let deleteResult = set.delete(arg0);
                  }
                }
              }
            }
            continue;
          }
        }
      })(questId, obj);
      const result = map.set(questId, obj);
      if (map1.has(questId)) {
        value = map1.get(questId);
        if (null != value) {
          const _Map = Map;
          map1 = new Map(map1);
          obj = {};
          const merged2 = Object.assign(value);
          const merged3 = Object.assign(obj);
          const result1 = map1.set(questId, obj);
        }
      }
    }
    set = new Set(set);
    set.delete(dismissedQuestUserStatus.questId);
  },
  QUESTS_DISMISS_CONTENT_FAILURE: function handleDismissContentFailure(questId) {
    set = new Set(set);
    set.delete(questId.questId);
  },
  QUESTS_USER_STATUS_UPDATE: function handleQuestUserStatusUpdate(user_status) {
    user_status = user_status.user_status;
    let obj = getQuestLogger;
    obj = { location: QuestsExperimentLocations.QUESTS_STORE };
    const questLogger = obj.getQuestLogger(obj);
    questLogger.log("Received user status update for " + user_status.quest_id, user_status);
    const result = progressFromServer.questUserStatusFromServer(user_status);
    const quest_id = user_status.quest_id;
    obj = { userStatus: result };
    map = new Map(map);
    let value = map.get(quest_id);
    if (null != value) {
      const obj1 = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values = Object.values(progress);
          for (const item10011 of values) {
            let tmp4 = item10011;
            let tmp5 = callback;
            let tmp6 = table;
            let obj2 = callback(table[5]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[6]).FirstPartyQuestTaskTypesSets.DESKTOP;
              let tmp7 = item10011;
              if (DESKTOP.has(tmp4.eventName)) {
                let tmp8 = item10011;
                let heartbeat = tmp4.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let tmp14 = set;
                  let addResult = set.add(arg0);
                } else {
                  let tmp10 = item10011;
                  let heartbeat2 = tmp4.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let tmp12 = set;
                    let deleteResult = set.delete(arg0);
                  }
                }
              }
            }
            continue;
          }
        }
      })(quest_id, obj);
      const result1 = map.set(quest_id, obj1);
      if (map1.has(quest_id)) {
        value = map1.get(quest_id);
        if (null != value) {
          const _Map = Map;
          map1 = new Map(map1);
          const obj2 = {};
          const merged2 = Object.assign(value);
          const merged3 = Object.assign(obj);
          const result2 = map1.set(quest_id, obj2);
        }
      }
    }
    const value1 = map.get(user_status.quest_id);
    if (null != value1) {
      const isQuestExpiredResult = getQuestDeliveryDataForPlacement.isQuestExpired(value1);
      if (store3.get(user_status.quest_id) !== isQuestExpiredResult) {
        const _Map2 = Map;
        const map2 = new Map(store3);
        store3 = map2.set(user_status.quest_id, isQuestExpiredResult);
      }
      const tmpResult = getQuestDeliveryDataForPlacement;
    }
    let hasItem = 0 === Object.keys(result.progress).length;
    if (hasItem) {
      hasItem = map.has(result.questId);
    }
    if (hasItem) {
      const _HermesInternal = HermesInternal;
      questLogger.log("Removing optimistic progress for " + result.questId);
      map.delete(result.questId);
    }
  },
  STREAM_CLOSE: function handleStreamClose(streamKey) {
    streamKey = streamKey.streamKey;
    if (null != map.get(streamKey)) {
      const _Map = Map;
      map = new Map(map);
      map.delete(streamKey);
    }
  },
  QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function handleDismissProgressTrackingFailureNotice(streamKey) {
    streamKey = streamKey.streamKey;
    if (null != map.get(streamKey)) {
      const _Map = Map;
      map = new Map(map);
      map.delete(streamKey);
    }
  },
  QUESTS_PREVIEW_UPDATE_SUCCESS: function handlePreviewUpdateSuccess(previewQuestUserStatus) {
    previewQuestUserStatus = previewQuestUserStatus.previewQuestUserStatus;
    const questId = previewQuestUserStatus.questId;
    let obj = { userStatus: previewQuestUserStatus };
    map = new Map(map);
    let value = map.get(questId);
    if (null != value) {
      obj = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values = Object.values(progress);
          for (const item10011 of values) {
            let tmp4 = item10011;
            let tmp5 = callback;
            let tmp6 = table;
            let obj2 = callback(table[5]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[6]).FirstPartyQuestTaskTypesSets.DESKTOP;
              let tmp7 = item10011;
              if (DESKTOP.has(tmp4.eventName)) {
                let tmp8 = item10011;
                let heartbeat = tmp4.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let tmp14 = set;
                  let addResult = set.add(arg0);
                } else {
                  let tmp10 = item10011;
                  let heartbeat2 = tmp4.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let tmp12 = set;
                    let deleteResult = set.delete(arg0);
                  }
                }
              }
            }
            continue;
          }
        }
      })(questId, obj);
      const result = map.set(questId, obj);
      if (map1.has(questId)) {
        value = map1.get(questId);
        if (null != value) {
          const _Map = Map;
          map1 = new Map(map1);
          obj = {};
          const merged2 = Object.assign(value);
          const merged3 = Object.assign(obj);
          const result1 = map1.set(questId, obj);
        }
      }
    }
    if (null == previewQuestUserStatus.claimedAt) {
      const _Map2 = Map;
      map2 = new Map(map2);
      map2.delete(previewQuestUserStatus.questId);
    }
    if (null == previewQuestUserStatus.enrolledAt) {
      const _Map3 = Map;
      map3 = new Map(map3);
      map3.delete(previewQuestUserStatus.questId);
      const state = store5.getState();
      state.resetQuest(previewQuestUserStatus.questId);
    }
    const value1 = map.get(previewQuestUserStatus.questId);
    if (null != value1) {
      const isQuestExpiredResult = getQuestDeliveryDataForPlacement.isQuestExpired(value1);
      if (store3.get(previewQuestUserStatus.questId) !== isQuestExpiredResult) {
        const _Map4 = Map;
        const map4 = new Map(store3);
        store3 = map4.set(previewQuestUserStatus.questId, isQuestExpiredResult);
      }
      const obj8 = getQuestDeliveryDataForPlacement;
    }
  },
  QUESTS_PREVIEW_OVERRIDE: function handlePreviewOverride(arg0) {
    let placement;
    let questId;
    ({ placement, questId } = arg0);
    map = new Map(map);
    if (map.get(placement) === questId) {
      map.delete(placement);
    } else {
      const result = map.set(placement, questId);
    }
  },
  QUESTS_SELECT_TASK_PLATFORM: function handleSelectTaskPlatform(arg0) {
    let platform;
    let questId;
    ({ questId, platform } = arg0);
    map = new Map(map);
    if (null == platform) {
      map.delete(questId);
    } else {
      const result = map.set(questId, platform);
    }
  },
  QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function handleUpdateOptimisticProgress(questId) {
    let progress;
    let taskEventName;
    questId = questId.questId;
    ({ taskEventName, progress } = questId);
    map = map.get(questId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(taskEventName, progress);
    const result1 = map.set(questId, map);
  },
  QUESTS_RESET_OPTIMISTIC_PROGRESS: function handleResetOptimisticProgress(questId) {
    questId = questId.questId;
    if (map.has(questId)) {
      map.delete(questId);
    }
    const state = store5.getState();
    state.resetQuest(questId);
  },
  QUESTS_USER_COMPLETION_UPDATE: function handleUserCompletionUpdate(quest_enrollment_blocked_until) {
    quest_enrollment_blocked_until = quest_enrollment_blocked_until.quest_enrollment_blocked_until;
    let date = null;
    if (null != quest_enrollment_blocked_until) {
      const _Date = Date;
      date = new Date(quest_enrollment_blocked_until);
    }
  },
  QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function handleFetchQuestHomeHeroBegin(placement) {
    let c44 = true;
    map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(fetchedAt) {
    let c45;
    let questHomeHero;
    let c44 = false;
    let closure_43 = Date.now();
    map = new Map(map);
    const result = map.set(fetchedAt.placement, false);
    ({ questHomeHero: c45, questHomeHero } = fetchedAt);
    let id;
    if (questHomeHero != null) {
      id = questHomeHero.id;
    }
    if (id == null) {
      id = null;
    }
    const obj = { questId: null, adCreativeId: id, fetchedAt: fetchedAt.fetchedAt, ttlMillis: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null };
    obj[3] = result.resolveResponseTtl(fetchedAt.responseTtlSeconds);
    ({ adDecisionData: obj2[4], adContext: obj2[5], metadataSealed: obj2[6], trafficMetadataSealed: obj2[7] } = fetchedAt);
    map1 = new Map(map1);
    const result1 = map1.set(fetchedAt.placement, obj);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function handleFetchQuestHomeHeroFailure(placement) {
    let c44 = false;
    map = new Map(map);
    const result = map.set(placement.placement, false);
  }
});
let result = require("_toPropertyKey").fileFinishedImporting("modules/quests/QuestStore.tsx");

export default questStore;