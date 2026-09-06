// === Module 7703: QuestStore ===

// Module 7703 (QuestStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import QuestDataUtils from "QuestDataUtils" /* 7699 */;
import AdDecisionUtils from "AdDecisionUtils" /* 7701 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7708 */;
import getQuestLogger from "getQuestLogger" /* 7709 */;
import QuestServerUtils from "QuestServerUtils" /* 7710 */;
import _slicedToArray from "module_32" /* 32 */;
import ConsoleQuestUIStore from "ConsoleQuestUIStore" /* 7704 */;
import VideoQuestUIStore from "VideoQuestUIStore" /* 7705 */;

require = fn;
function initializeState() {
  c3 = false;
  c4 = false;
  c5 = false;
  new Map();
  map1 = new Map();
  new Map();
  new Map();
  c10 = 0;
  new Set();
  set1 = new Set();
  const map3 = new Map();
  new Set();
  const set2 = new Set();
  new Set();
  const set3 = new Set();
  set1 = new Set();
  const set4 = new Set();
  set = new Set();
  map4 = new Map();
  const set5 = new Set();
  map2 = new Map();
  const map5 = new Map();
  new Map();
  const map6 = new Map();
  new Map();
  const map7 = new Map();
  new Map();
  const map8 = new Map();
  map = new Map();
  set6 = new Set();
  map10 = new Map();
  const map9 = new Map();
  closure_24 = new Map();
  if (null != c33) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c33);
    c33 = null;
  }
  c26 = null;
  if (null != c34) {
    const _clearTimeout2 = clearTimeout;
    clearTimeout(c34);
    c34 = null;
  }
  const map11 = new Map();
  map1 = new Map();
  const map12 = new Map();
  map = new Map();
}
function updateQuestData(questId, result2) {
  map = new Map(map);
  value = map.get(questId);
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
          let obj2 = require("module_12");
          if (!obj2.isNil(item10011)) {
            let DESKTOP = require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypesSets.DESKTOP;
            if (DESKTOP.has(item10011.eventName)) {
              let heartbeat = item10011.heartbeat;
              let lastBeatAt;
              if (heartbeat != null) {
                lastBeatAt = heartbeat.lastBeatAt;
              }
              if (null != lastBeatAt) {
                let addResult = set.add(arg0);
              } else {
                let heartbeat2 = item10011.heartbeat;
                let lastBeatAt1;
                if (heartbeat2 != null) {
                  lastBeatAt1 = heartbeat2.lastBeatAt;
                }
                if (null == lastBeatAt1) {
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
  _require = false;
  map = new Map(map);
  const item = map.forEach((item, index) => {
    if (true !== map.get(index)) {
      if (obj2.isQuestExpired(item)) {
        const result = map.set(index, true);
        c0 = true;
      } else if (!map.has(index)) {
        const result1 = map.set(index, false);
      }
      obj2 = QuestDataUtils;
    }
  });
  if (_require) {
    questStore.emitChange();
  }
  let result = require("QuestDataUtils").findNextUpcomingExpirationEpochMs(Array.from(map.values()));
  if (null != result) {
    const _Math = Math;
    const _Date = Date;
    const bound = Math.max(5000, result - Date.now() + 2000);
    if (bound <= c36) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        _runExpirationCheck();
      }, bound);
    }
  }
  const obj = require("QuestDataUtils");
}
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
new Map();
let c33 = null;
let c34 = null;
let map = new Map();
let c36 = 864000000;
initializeState();
const Store = initializeDefault.Store;
class QuestStore extends Store {
}
const prototype = QuestStore.prototype;
Object.defineProperty(prototype, "quests", {
  get: function quests() {
    return map;
  },
  set: undefined
});
Object.defineProperty(prototype, "excludedQuests", {
  get: function excludedQuests() {
    return map2;
  },
  set: undefined
});
Object.defineProperty(prototype, "claimedQuests", {
  get: function claimedQuests() {
    return map;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingCurrentQuests", {
  get: function isFetchingCurrentQuests() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingClaimedQuests", {
  get: function isFetchingClaimedQuests() {
    return c4;
  },
  set: undefined
});
prototype["isFetchingQuestPreview"] = function isFetchingQuestPreview(questId) {
  return set.has(questId);
};
Object.defineProperty(prototype, "lastFetchedCurrentQuests", {
  get: function lastFetchedCurrentQuests() {
    return c10;
  },
  set: undefined
});
prototype["getQuestPreviewOverride"] = function getQuestPreviewOverride(QUEST_BAR_MOBILE) {
  map.get(QUEST_BAR_MOBILE);
  value = undefined;
  if (null != value) {
    value = map.get(value);
  }
  return value;
};
Object.defineProperty(prototype, "questEnrollmentBlockedUntil", {
  get: function questEnrollmentBlockedUntil() {
    return date;
  },
  set: undefined
});
Object.defineProperty(prototype, "questAccessSuspendedUntil", {
  get: function questAccessSuspendedUntil() {
    return c26;
  },
  set: undefined
});
Object.defineProperty(prototype, "isQuestAccessSuspended", {
  get: function isQuestAccessSuspended() {
    return null != c26;
  },
  set: undefined
});
prototype["getFetchQuestPreviewError"] = function getFetchQuestPreviewError(arg0) {
  return map.get(arg0);
};
prototype["isEnrolling"] = function isEnrolling(id) {
  return set.has(id);
};
prototype["isClaimingReward"] = function isClaimingReward(id) {
  return set.has(id);
};
prototype["isFetchingRewardCode"] = function isFetchingRewardCode(id) {
  return set.has(id);
};
prototype["isDismissingContent"] = function isDismissingContent(adCreativeId) {
  return set.has(adCreativeId);
};
prototype["isAdContentDismissed"] = function isAdContentDismissed(arg0) {
  return set1.has(arg0);
};
prototype["getRewardCode"] = function getRewardCode(id) {
  return map2.get(id);
};
prototype["getRewards"] = function getRewards(id) {
  return map.get(id);
};
prototype["getStreamHeartbeatFailure"] = function getStreamHeartbeatFailure(arg0) {
  return map.get(arg0);
};
prototype["getQuest"] = function getQuest(questId) {
  return map.get(questId);
};
prototype["getQuestConfig"] = function getQuestConfig(questId) {
  const quest = this.getQuest(questId);
  let config;
  if (quest != null) {
    config = quest.config;
  }
  return config;
};
prototype["isProgressingOnDesktop"] = function isProgressingOnDesktop(id) {
  return set6.has(id);
};
prototype["selectedTaskPlatform"] = function selectedTaskPlatform(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getOptimisticProgress"] = function getOptimisticProgress(id, WATCH_VIDEO) {
  map4.get(id);
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
  let flag = closure_24.get(arg0);
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getQuestLoadedViaPreview"] = function getQuestLoadedViaPreview(arg0) {
  return map1.get(arg0);
};
Object.defineProperty(prototype, "isFetchingEarnedQuestToDeliver", {
  get: function isFetchingEarnedQuestToDeliver() {
    return c5;
  },
  set: undefined
});
prototype["isFetchingEarnedQuestToDeliverByPlacement"] = function isFetchingEarnedQuestToDeliverByPlacement(content) {
  let flag;
  if (map != null) {
    flag = map.get(content);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
Object.defineProperty(prototype, "earnedQuestForPlacement", {
  get: function earnedQuestForPlacement() {
    return map10;
  },
  set: undefined
});
QuestStore.displayName = "QuestStore";
const questStore = new QuestStore(DispatcherDefault, {
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
    const state = VideoQuestUIStore.getState();
    state.clearState();
    const state1 = ConsoleQuestUIStore.getState();
    state1.reset();
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function handleFetchCurrentQuestsBegin() {
    c3 = true;
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function handleFetchCurrentQuestsSuccess(arg0) {
    ({ quests, excludedQuests, questEnrollmentBlockedUntil, questAccessSuspendedUntil } = arg0);
    const items = [...map.keys()];
    const mapped = quests.map((id) => id.id);
    const found = items.filter((item) => !mapped.includes(item));
    if (found.length > 0) {
      let obj = { category: "quests.store", message: null, data: null };
      const _HermesInternal = HermesInternal;
      obj.message = "handleFetchCurrentQuestsSuccess: " + found.length + " quest(s) removed during rebuild";
      obj = { prevQuestIds: items, nextQuestIds: mapped, removedIds: found };
      obj.data = obj;
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
      let result = map.set(nextResult.id, nextResult);
      let tmp13 = mapped;
      let obj5 = mapped(7699);
      let result1 = map1.set(nextResult.id, obj5.isQuestExpired(nextResult));
      let targetedContent = nextResult.targetedContent;
      if (targetedContent.includes(mapped(5447).QuestContent.QUEST_BAR)) {
        let tmp13Result = tmp13(7709);
        let obj1 = { location: QuestsExperimentLocations.QUESTS_STORE };
        let questLogger = tmp13Result.getQuestLogger(obj1);
        let _HermesInternal2 = HermesInternal;
        let str3 = "Delivered ";
        let str4 = " (";
        let str5 = ")";
        let logResult = questLogger.log("Delivered " + tmp9.config.messages.questName + " (" + tmp9.id + ")");
      }
      continue;
    }
    map2 = new Map();
    for (const item10116 of excludedQuests) {
      let result2 = map2.set(item10116.id, item10116);
      continue;
    }
    if (map1 != null) {
      const values = obj9.values();
    }
    for (const item10131 of values) {
      if (!map.has(item10131.id)) {
        let result3 = map.set(item10131.id, item10131);
        let obj10 = mapped(7699);
        let result4 = map1.set(item10131.id, obj10.isQuestExpired(item10131));
      }
      continue;
    }
    (function _startExpirationChecker() {
      if (null != c33) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c33);
        c33 = null;
      }
      _runExpirationCheck();
    })();
    if (null != questEnrollmentBlockedUntil) {
      let _Date = Date;
      new Date(questEnrollmentBlockedUntil);
    }
    if (null != questAccessSuspendedUntil) {
      const _Date2 = Date;
      new Date(questAccessSuspendedUntil);
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
        if (diff <= closure_1_36) {
          const _setTimeout = setTimeout;
          const _Math = Math;
          timeout = setTimeout(() => {
            c34 = null;
            c26 = null;
            closure_1_40.emitChange();
          }, Math.max(diff, 0));
        }
      }
    })();
    obj9 = map1;
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
    const responseTtl = AdDecisionUtils.resolveResponseTtl(responseTtlSeconds);
    value = map10.get(content);
    let prop;
    if (value != null) {
      prop = value.earnedDecisionByQuestId;
    }
    map1 = new Map(prop);
    while (tmp5 !== undefined) {
      let tmp8 = _slicedToArray(tmp6, 2);
      let first = tmp8[0];
      let tmp10 = first;
      let tmp11 = tmp8[1];
      let obj = { fetchedAt, ttlMillis: responseTtl, shouldDeliver: null != tmp11 };
      let tmp12 = tmp11;
      let result1 = map1.set(first, obj);
      if (null != tmp11) {
        value = map.get(tmp10);
        let obj8 = QuestServerUtils;
        let result2 = obj8.questWithUserStatusFromServer(tmp12);
        if (null != value) {
          let tmp31 = updateQuestData(tmp10, result2);
        } else {
          let _Map = Map;
          let tmp15 = new.target;
          let tmp16 = new.target;
          map2 = new Map(map);
          map = map2;
          let result3 = map2.set(tmp10, result2);
          let _Map2 = Map;
          let tmp22 = new.target;
          let tmp23 = new.target;
          let map3 = new Map(closure_24);
          closure_24 = map3;
          let tmp37Result = QuestDataUtils;
          let result4 = map3.set(tmp10, tmp37Result.isQuestExpired(result2));
        }
      }
      continue;
    }
    const result5 = map10.set(content, { earnedDecisionByQuestId: map1 });
    tmp5 = serverQuests[Symbol.iterator]();
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
    map = new Map(map1);
    const result = map.set(questId, quest);
    map1 = new Map(map);
    map = map1;
    const result1 = map1.set(questId, quest);
    map2 = new Map(map);
    map = map2;
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
    set6.add(questId);
    let obj = { userStatus: userStatus.userStatus };
    map = new Map(map);
    value = map.get(questId);
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
            let obj2 = require("module_12");
            if (!obj2.isNil(item10011)) {
              let DESKTOP = require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypesSets.DESKTOP;
              if (DESKTOP.has(item10011.eventName)) {
                let heartbeat = item10011.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let addResult = set.add(arg0);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
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
      if (null != map.get(streamKey)) {
        const _Map2 = Map;
        map2 = new Map(map);
        map = map2;
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
      const obj = { questId: streamKey.questId, streamKey, firstFailedAt: null };
      const _Date = Date;
      obj.firstFailedAt = Date.now();
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
    value = map.get(questId);
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
            let obj2 = require("module_12");
            if (!obj2.isNil(item10011)) {
              let DESKTOP = require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypesSets.DESKTOP;
              if (DESKTOP.has(item10011.eventName)) {
                let heartbeat = item10011.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let addResult = set.add(arg0);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
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
    map = new Map(map2);
    const result = map.set(questId, rewardCode);
    map2 = map;
    value = map.get(questId);
    let userStatus;
    if (value != null) {
      userStatus = value.userStatus;
    }
    if (tmp5) {
      let obj = { userStatus: null };
      obj = {};
      const merged = Object.assign(userStatus);
      obj.claimedAt = rewardCode.claimedAt;
      obj.userStatus = obj;
      const _Map = Map;
      map1 = new Map(map);
      map = map1;
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
              let obj2 = require("module_12");
              if (!obj2.isNil(item10011)) {
                let DESKTOP = require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypesSets.DESKTOP;
                if (DESKTOP.has(item10011.eventName)) {
                  let heartbeat = item10011.heartbeat;
                  let lastBeatAt;
                  if (heartbeat != null) {
                    lastBeatAt = heartbeat.lastBeatAt;
                  }
                  if (null != lastBeatAt) {
                    let addResult = set.add(arg0);
                  } else {
                    let heartbeat2 = item10011.heartbeat;
                    let lastBeatAt1;
                    if (heartbeat2 != null) {
                      lastBeatAt1 = heartbeat2.lastBeatAt;
                    }
                    if (null == lastBeatAt1) {
                      let deleteResult = set.delete(arg0);
                    }
                  }
                }
              }
              continue;
            }
          }
        })(questId, obj);
        const result1 = map.set(questId, obj1);
        if (map1.has(questId)) {
          const value1 = map1.get(questId);
          if (null != value1) {
            const _Map2 = Map;
            map2 = new Map(map1);
            map1 = map2;
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
    value = map.get(questId);
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
          map1 = new Map(map2);
          const result1 = map1.set(questId, rewardCode);
          map2 = map1;
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
        obj.userStatus = obj;
        const _Map2 = Map;
        map2 = new Map(map);
        map = map2;
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
                let obj2 = require("module_12");
                if (!obj2.isNil(item10011)) {
                  let DESKTOP = require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypesSets.DESKTOP;
                  if (DESKTOP.has(item10011.eventName)) {
                    let heartbeat = item10011.heartbeat;
                    let lastBeatAt;
                    if (heartbeat != null) {
                      lastBeatAt = heartbeat.lastBeatAt;
                    }
                    if (null != lastBeatAt) {
                      let addResult = set.add(arg0);
                    } else {
                      let heartbeat2 = item10011.heartbeat;
                      let lastBeatAt1;
                      if (heartbeat2 != null) {
                        lastBeatAt1 = heartbeat2.lastBeatAt;
                      }
                      if (null == lastBeatAt1) {
                        let deleteResult = set.delete(arg0);
                      }
                    }
                  }
                }
                continue;
              }
            }
          })(questId, obj);
          const result2 = map.set(questId, obj1);
          if (map1.has(questId)) {
            const value1 = map1.get(questId);
            if (null != value1) {
              const _Map3 = Map;
              const map3 = new Map(map1);
              map1 = map3;
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
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let first = tmp5[0];
      if (tmp5[1] === questId) {
        let deleteResult = map.delete(first);
        let flag = true;
      }
      continue;
    }
    tmp2 = map[Symbol.iterator]();
  },
  QUESTS_DISMISS_CONTENT_SUCCESS: function handleDismissContentSuccess(dismissedQuestUserStatus) {
    dismissedQuestUserStatus = dismissedQuestUserStatus.dismissedQuestUserStatus;
    const questId = dismissedQuestUserStatus.questId;
    let obj = { userStatus: dismissedQuestUserStatus };
    map = new Map(map);
    value = map.get(questId);
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
            let obj2 = require("module_12");
            if (!obj2.isNil(item10011)) {
              let DESKTOP = require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypesSets.DESKTOP;
              if (DESKTOP.has(item10011.eventName)) {
                let heartbeat = item10011.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let addResult = set.add(arg0);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
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
    let obj = { location: QuestsExperimentLocations.QUESTS_STORE };
    const questLogger = obj.getQuestLogger(obj);
    questLogger.log("Received user status update for " + user_status.quest_id, user_status);
    const result = QuestServerUtils.questUserStatusFromServer(user_status);
    const quest_id = user_status.quest_id;
    obj = { userStatus: result };
    map = new Map(map);
    value = map.get(quest_id);
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
            let obj2 = require("module_12");
            if (!obj2.isNil(item10011)) {
              let DESKTOP = require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypesSets.DESKTOP;
              if (DESKTOP.has(item10011.eventName)) {
                let heartbeat = item10011.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let addResult = set.add(arg0);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
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
      const isQuestExpiredResult = QuestDataUtils.isQuestExpired(value1);
      if (closure_24.get(user_status.quest_id) !== isQuestExpiredResult) {
        const _Map2 = Map;
        map2 = new Map(closure_24);
        closure_24 = map2.set(user_status.quest_id, isQuestExpiredResult);
      }
      const tmpResult = QuestDataUtils;
    }
    let hasItem = 0 === Object.keys(result.progress).length;
    if (hasItem) {
      hasItem = map4.has(result.questId);
    }
    if (hasItem) {
      const _HermesInternal = HermesInternal;
      questLogger.log("Removing optimistic progress for " + result.questId);
      map4.delete(result.questId);
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
    value = map.get(questId);
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
            let obj2 = require("module_12");
            if (!obj2.isNil(item10011)) {
              let DESKTOP = require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypesSets.DESKTOP;
              if (DESKTOP.has(item10011.eventName)) {
                let heartbeat = item10011.heartbeat;
                let lastBeatAt;
                if (heartbeat != null) {
                  lastBeatAt = heartbeat.lastBeatAt;
                }
                if (null != lastBeatAt) {
                  let addResult = set.add(arg0);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
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
      const map3 = new Map(map);
      map = map3;
      map3.delete(previewQuestUserStatus.questId);
      const state = VideoQuestUIStore.getState();
      state.resetQuest(previewQuestUserStatus.questId);
    }
    const value1 = map.get(previewQuestUserStatus.questId);
    if (null != value1) {
      const isQuestExpiredResult = QuestDataUtils.isQuestExpired(value1);
      if (closure_24.get(previewQuestUserStatus.questId) !== isQuestExpiredResult) {
        const _Map4 = Map;
        map4 = new Map(closure_24);
        closure_24 = map4.set(previewQuestUserStatus.questId, isQuestExpiredResult);
      }
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
    map = map4.get(questId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(taskEventName, progress);
    const result1 = map4.set(questId, map);
  },
  QUESTS_RESET_OPTIMISTIC_PROGRESS: function handleResetOptimisticProgress(questId) {
    questId = questId.questId;
    if (map4.has(questId)) {
      map4.delete(questId);
    }
    const state = VideoQuestUIStore.getState();
    state.resetQuest(questId);
  },
  QUESTS_USER_COMPLETION_UPDATE: function handleUserCompletionUpdate(quest_enrollment_blocked_until) {
    quest_enrollment_blocked_until = quest_enrollment_blocked_until.quest_enrollment_blocked_until;
    date = null;
    if (null != quest_enrollment_blocked_until) {
      const _Date = Date;
      date = new Date(quest_enrollment_blocked_until);
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/QuestStore.tsx");

export default questStore;