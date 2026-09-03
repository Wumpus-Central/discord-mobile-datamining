// === Module 7459: initializeState ===

// Module 7459 (initializeState)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import _modDef1205 from "module_1205" /* 1205 */;
import getQuestDeliveryDataForPlacement from "getQuestDeliveryDataForPlacement" /* 7454 */;
import result6 from "result" /* 7456 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7464 */;
import getQuestLogger from "getQuestLogger" /* 7465 */;
import progressFromServer from "progressFromServer" /* 7466 */;
import closure_28 from "_slicedToArray" /* 32 */;
import closure_29 from "useConsoleQuestUIStore" /* 7460 */;
import closure_30 from "_toPropertyKey" /* 7461 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5396 */;

require = arg1;
function initializeState() {
  c3 = false;
  c4 = false;
  c5 = false;
  map = new Map();
  map1 = new Map();
  const map2 = new Map();
  const map3 = new Map();
  c10 = 0;
  const set = new Set();
  const set1 = new Set();
  const set2 = new Set();
  const set3 = new Set();
  const set4 = new Set();
  const set5 = new Set();
  const map4 = new Map();
  const map5 = new Map();
  const map6 = new Map();
  const map7 = new Map();
  const map8 = new Map();
  const map9 = new Map();
  const set6 = new Set();
  const map10 = new Map();
  const map11 = new Map();
  if (null != c33) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c33);
    c33 = null;
  }
  c25 = null;
  c26 = null;
  if (null != c34) {
    const _clearTimeout2 = clearTimeout;
    clearTimeout(c34);
    c34 = null;
  }
  const map12 = new Map();
  const map13 = new Map();
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
          let obj2 = callback(table[4]);
          if (!obj2.isNil(item10011)) {
            let DESKTOP = tmp5(tmp6[5]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
function handleAdContentDismissEnd(adCreativeId) {
  set = new Set(set);
  set.delete(adCreativeId.adCreativeId);
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
      obj2 = callback(closure_1_2[8]);
    }
  });
  if (_require) {
    questStore.emitChange();
  }
  let result = _require(7454).findNextUpcomingExpirationEpochMs(Array.from(store.values()));
  if (null != result) {
    const _Math = Math;
    const _Date = Date;
    const bound = Math.max(5000, result - Date.now() + 2000);
    if (bound <= c36) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback2();
      }, bound);
    }
  }
}
let map = new Map();
let c33 = null;
let c34 = null;
let map1 = new Map();
let c36 = 864000000;
initializeState();
const Store = initializeDefault.Store;
class QuestStore extends Store {
}
const prototype = QuestStore.prototype;
Object.defineProperty(prototype, "quests", {
  get: function quests() {
    return closure_7;
  },
  set: undefined
});
Object.defineProperty(prototype, "excludedQuests", {
  get: function excludedQuests() {
    return closure_8;
  },
  set: undefined
});
Object.defineProperty(prototype, "claimedQuests", {
  get: function claimedQuests() {
    return closure_9;
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
    return closure_4;
  },
  set: undefined
});
prototype["isFetchingQuestPreview"] = function isFetchingQuestPreview(closure_0) {
  return set6.has(closure_0);
};
Object.defineProperty(prototype, "lastFetchedCurrentQuests", {
  get: function lastFetchedCurrentQuests(isEligibleForQuests, arg1) {
    return closure_10;
  },
  set: undefined
});
prototype["getQuestPreviewOverride"] = function getQuestPreviewOverride(QUEST_BAR_MOBILE) {
  let value = closure_21.get(QUEST_BAR_MOBILE);
  value = undefined;
  if (null != value) {
    value = store.get(value);
  }
  return value;
};
Object.defineProperty(prototype, "questEnrollmentBlockedUntil", {
  get: function questEnrollmentBlockedUntil() {
    return closure_25;
  },
  set: undefined
});
Object.defineProperty(prototype, "questAccessSuspendedUntil", {
  get: function questAccessSuspendedUntil() {
    return closure_26;
  },
  set: undefined
});
Object.defineProperty(prototype, "isQuestAccessSuspended", {
  get: function isQuestAccessSuspended() {
    return null != closure_26;
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
prototype["isDismissingContent"] = function isDismissingContent(adCreativeId) {
  return set4.has(adCreativeId);
};
prototype["isAdContentDismissed"] = function isAdContentDismissed(arg0) {
  return set5.has(arg0);
};
prototype["getRewardCode"] = function getRewardCode(id) {
  return closure_18.get(id);
};
prototype["getRewards"] = function getRewards(id) {
  return closure_19.get(id);
};
prototype["getStreamHeartbeatFailure"] = function getStreamHeartbeatFailure(arg0) {
  return closure_20.get(arg0);
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
  return set7.has(id);
};
prototype["selectedTaskPlatform"] = function selectedTaskPlatform(closure_0) {
  let value = closure_22.get(closure_0);
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
  return closure_24;
};
prototype["isQuestExpired"] = function isQuestExpired(arg0) {
  let flag = store3.get(arg0);
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getQuestLoadedViaPreview"] = function getQuestLoadedViaPreview(arg0) {
  return closure_27.get(arg0);
};
Object.defineProperty(prototype, "isFetchingEarnedQuestToDeliver", {
  get: function isFetchingEarnedQuestToDeliver() {
    return closure_5;
  },
  set: undefined
});
prototype["isFetchingEarnedQuestToDeliverByPlacement"] = function isFetchingEarnedQuestToDeliverByPlacement(prop) {
  let flag;
  if (closure_6 != null) {
    flag = closure_6.get(prop);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
Object.defineProperty(prototype, "earnedQuestForPlacement", {
  get: function earnedQuestForPlacement() {
    return closure_23;
  },
  set: undefined
});
QuestStore.displayName = "QuestStore";
const questStore = new QuestStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (null != c33) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c33);
      c33 = null;
    }
    if (null != c34) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c34);
      c34 = null;
    }
    initializeState();
    const state = store4.getState();
    state.clearState();
    const state1 = state.getState();
    state1.reset();
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function handleFetchCurrentQuestsBegin() {
    c3 = true;
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function handleFetchCurrentQuestsSuccess(arg0) {
    ({ quests, excludedQuests, questEnrollmentBlockedUntil, questAccessSuspendedUntil } = arg0);
    let mapped;
    const items = [...map.keys()];
    mapped = quests.map((id) => id.id);
    const found = items.filter((arg0) => !mapped.includes(arg0));
    if (found.length > 0) {
      let obj = _modDef1205;
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
    closure_10 = Date.now();
    c3 = false;
    map = new Map();
    map1 = new Map();
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
      let obj5 = mapped(7454);
      let result1 = map1.set(nextResult.id, obj5.isQuestExpired(nextResult));
      let targetedContent = nextResult.targetedContent;
      if (targetedContent.includes(mapped(5399).QuestContent.QUEST_BAR)) {
        let tmp17 = tmp12;
        let tmp18 = tmp14;
        let tmp13Result = tmp13(7465);
        obj1 = { location: null };
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
    if (closure_27 != null) {
      const values = closure_27.values();
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
        let obj10 = mapped(7454);
        let result4 = map1.set(tmp26.id, obj10.isQuestExpired(tmp26));
      }
      continue;
    }
    (function _startExpirationChecker() {
      if (null != c33) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c33);
        c33 = null;
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
        if (diff <= closure_36) {
          const _setTimeout = setTimeout;
          const _Math = Math;
          timeout = setTimeout(() => {
            c34 = null;
            c26 = null;
            closure_40.emitChange();
          }, Math.max(diff, 0));
        }
      }
    })();
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function handleFetchCurrentQuestsFailure() {
    c10 = 0;
    c3 = false;
  },
  QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function handleFetchClaimedQuestsBegin() {
    c4 = true;
  },
  QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function handleFetchClaimedQuestsSuccess(arg0) {
    c4 = false;
    map = new Map();
    for (const item10013 of tmp) {
      let tmp3 = map;
      let result = map.set(item10013.id, item10013);
      continue;
    }
  },
  QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function handleFetchClaimedQuestsFailure() {
    c4 = false;
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function handleFetchEarnedQuestToDeliverBegin(content) {
    c5 = true;
    map = new Map(map);
    const result = map.set(content.content, true);
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function handleFetchEarnedQuestToDeliverSuccess(arg0) {
    ({ serverQuests, content } = arg0);
    c5 = false;
    ({ fetchedAt, responseTtlSeconds } = arg0);
    map = new Map(map);
    const result = map.set(content, false);
    const responseTtl = result6.resolveResponseTtl(responseTtlSeconds);
    let value = store2.get(content);
    let prop;
    if (value != null) {
      prop = value.earnedDecisionByQuestId;
    }
    map1 = new Map(prop);
    const obj2 = result6;
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
          let tmp37Result = tmp37(7454);
          let result4 = map3.set(tmp10, tmp37Result.isQuestExpired(result2));
        }
      }
      continue;
    }
    const result5 = store2.set(content, { earnedDecisionByQuestId: map1 });
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function handleFetchEarnedQuestToDeliverFailure(content) {
    c5 = false;
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
    ({ questId, streamKey } = userStatus);
    set7.add(questId);
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
            let obj2 = callback(table[4]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[5]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
            let obj2 = callback(table[4]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[5]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
        obj1 = {};
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
              let obj2 = callback(table[4]);
              if (!obj2.isNil(item10011)) {
                let DESKTOP = tmp5(tmp6[5]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
          obj1 = {};
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
                let obj2 = callback(table[4]);
                if (!obj2.isNil(item10011)) {
                  let DESKTOP = tmp5(tmp6[5]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
            let obj2 = callback(table[4]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[5]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
  AD_CONTENT_DISMISS_BEGIN: function handleAdContentDismissBegin(adCreativeId) {
    adCreativeId = adCreativeId.adCreativeId;
    set = new Set(set);
    set.add(adCreativeId);
    set1 = new Set(set1);
    set1.add(adCreativeId);
  },
  AD_CONTENT_DISMISS_SUCCESS: handleAdContentDismissEnd,
  AD_CONTENT_DISMISS_FAILURE: handleAdContentDismissEnd,
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
      obj1 = {};
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
            let obj2 = callback(table[4]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[5]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
            let obj2 = callback(table[4]);
            if (!obj2.isNil(item10011)) {
              let DESKTOP = tmp5(tmp6[5]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
      const state = store4.getState();
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
    ({ placement, questId } = arg0);
    map = new Map(map);
    if (map.get(placement) === questId) {
      map.delete(placement);
    } else {
      const result = map.set(placement, questId);
    }
  },
  QUESTS_SELECT_TASK_PLATFORM: function handleSelectTaskPlatform(arg0) {
    ({ questId, platform } = arg0);
    map = new Map(map);
    if (null == platform) {
      map.delete(questId);
    } else {
      const result = map.set(questId, platform);
    }
  },
  QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function handleUpdateOptimisticProgress(questId) {
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
    const state = store4.getState();
    state.resetQuest(questId);
  },
  QUESTS_USER_COMPLETION_UPDATE: function handleUserCompletionUpdate(quest_enrollment_blocked_until) {
    quest_enrollment_blocked_until = quest_enrollment_blocked_until.quest_enrollment_blocked_until;
    let date = null;
    if (null != quest_enrollment_blocked_until) {
      const _Date = Date;
      date = new Date(quest_enrollment_blocked_until);
    }
  }
});
let result = require("set").fileFinishedImporting("modules/quests/QuestStore.tsx");

export default questStore;