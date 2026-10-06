// === Module 7200: QuestStore ===

// Module 7200 (QuestStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import QuestDataUtils from "QuestDataUtils" /* 7196 */;
import AdDecisionUtils from "AdDecisionUtils" /* 7198 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7205 */;
import getQuestLogger from "getQuestLogger" /* 7206 */;
import QuestServerUtils from "QuestServerUtils" /* 7207 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ConsoleQuestUIStore from "ConsoleQuestUIStore" /* 7201 */;
import VideoQuestUIStore from "VideoQuestUIStore" /* 7202 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c10, c26, c3, c4, c5, closure_24, map2, set, set2;

function initializeState() {
  c3 = false;
  c4 = false;
  c5 = false;
  new Map();
  map1 = new Map();
  new Map();
  new Map();
  c10 = 0;
  new Map();
  new Set();
  new Set();
  new Set();
  new Set();
  new Set();
  new Set();
  new Set();
  new Set();
  new Set();
  new Set();
  new Set();
  new Map();
  new Map();
  new Map();
  new Map();
  new Map();
  new Map();
  new Map();
  new Map();
  new Map();
  new Map();
  new Map();
  new Set();
  new Map();
  closure_24 = new Map();
  new Map();
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
  map1 = new Map();
  new Map();
  new Map();
  new Map();
}
function updateQuestData(questId, result2) {
  map = new Map(map);
  const value = map.get(questId);
  if (null != value) {
    const obj = {};
    const merged = Object.assign(value);
    const merged1 = Object.assign(result2);
    (function syncQuestProgressingOnDesktop(questId, userStatus) {
      if (null != userStatus.userStatus) {
        userStatus = userStatus.userStatus;
        let progress;
        const _Object = Object;
        if (userStatus != null) {
          progress = userStatus.progress;
        }
        if (progress == null) {
          progress = {};
        }
        const values2 = values(progress);
        for (const item10011 of values2) {
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
                let addResult = set.add(questId);
              } else {
                let heartbeat2 = item10011.heartbeat;
                let lastBeatAt1;
                if (heartbeat2 != null) {
                  lastBeatAt1 = heartbeat2.lastBeatAt;
                }
                if (null == lastBeatAt1) {
                  let deleteResult = set.delete(questId);
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
      const value2 = map1.get(questId);
      if (null != value2) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map1 = new Map(map1);
        const obj2 = {};
        set = map1.set;
        const merged2 = Object.assign(value2);
        const merged3 = Object.assign(result2);
        const result1 = set(questId, obj2);
      }
    }
  }
}
function handleAdContentDismissEnd(adCreativeId) {
  adCreativeId = adCreativeId.adCreativeId;
  set = new Set(set);
  set.delete(adCreativeId);
}
function _runExpirationCheck() {
  let closure_33;
  _require = false;
  map = new Map(map);
  const item = map.forEach((item, index) => {
    if (true !== map.get(index)) {
      const obj2 = QuestDataUtils;
      if (obj2.isQuestExpired(item)) {
        const result = map.set(index, true);
        c0 = true;
      } else if (!map.has(index)) {
        const result1 = map.set(index, false);
      }
    }
  });
  const tmp3 = _require;
  if (tmp3) {
    questStore.emitChange();
  }
  const obj = require("QuestDataUtils");
  let result = obj.findNextUpcomingExpirationEpochMs(Array.from(map.values()));
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
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
let map = new Map();
let map4 = map;
let c33 = null;
let c34 = null;
let map1 = new Map();
map = map1;
let c36 = 864000000;
initializeState();
const Store = get_initializedDefault.Store;
class QuestStore extends Store {
  isFetchingQuestPreview(questId) {
    return set.has(questId);
  }
  getQuestPreviewOverride(QUEST_BAR_MOBILE) {
    const value = map.get(QUEST_BAR_MOBILE);
    let value2;
    if (null != value) {
      value2 = map.get(value);
    }
    return value2;
  }
  getFetchQuestPreviewError(arg0) {
    return map.get(arg0);
  }
  isEnrolling(id) {
    return set.has(id);
  }
  isClaimingReward(id) {
    return set.has(id);
  }
  isFetchingRewardCode(id) {
    return set.has(id);
  }
  isDismissingContent(adCreativeId) {
    return set.has(adCreativeId);
  }
  isAdContentDismissed(arg0) {
    return set.has(arg0);
  }
  getRewardCode(id) {
    return map2.get(id);
  }
  getRewards(id) {
    return map.get(id);
  }
  getStreamHeartbeatFailure(arg0) {
    return map.get(arg0);
  }
  getQuest(questId) {
    return map.get(questId);
  }
  getQuestConfig(questId) {
    const quest = this.getQuest(questId);
    let config;
    if (quest != null) {
      config = quest.config;
    }
    return config;
  }
  isProgressingOnDesktop(id) {
    return set6.has(id);
  }
  selectedTaskPlatform(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getOptimisticProgress(id, WATCH_VIDEO) {
    const value = map4.get(id);
    let value2;
    if (value != null) {
      value2 = value.get(WATCH_VIDEO);
    }
    return value2;
  }
  getExpiredQuestsMap() {
    return closure_24;
  }
  isQuestExpired(arg0) {
    let flag = closure_24.get(arg0);
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getQuestLoadedViaPreview(arg0) {
    return map1.get(arg0);
  }
  isFetchingEarnedQuestToDeliverByPlacement(content) {
    let flag;
    if (map != null) {
      flag = map.get(content);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
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
Object.defineProperty(prototype, "lastFetchedCurrentQuests", {
  get: function lastFetchedCurrentQuests() {
    return c10;
  },
  set: undefined
});
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
Object.defineProperty(prototype, "isFetchingEarnedQuestToDeliver", {
  get: function isFetchingEarnedQuestToDeliver() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "earnedQuestForPlacement", {
  get: function earnedQuestForPlacement() {
    return map10;
  },
  set: undefined
});
QuestStore.displayName = "QuestStore";
let obj = {
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
    let closure_34;
    let excludedQuests;
    let obj2;
    let questAccessSuspendedUntil;
    let questEnrollmentBlockedUntil;
    let quests;
    function _startExpirationChecker() {
      if (null != c33) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c33);
        c33 = null;
      }
      _runExpirationCheck();
    }
    function _startSuspensionExpirationTimer() {
      let timeout;
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
    }
    ({ quests, excludedQuests, questEnrollmentBlockedUntil, questAccessSuspendedUntil } = arg0);
    const items = [...map.keys()];
    const mapped = quests.map((id) => id.id);
    const found = items.filter((item) => !mapped.includes(item));
    if (found.length > 0) {
      const _HermesInternal = HermesInternal;
      const obj = { category: "quests.store", message: "handleFetchCurrentQuestsSuccess: " + found.length + " quest(s) removed during rebuild", data: obj2 };
      const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
      SentryUtilsDefault;
      obj2 = { prevQuestIds: items, nextQuestIds: mapped, removedIds: found };
      addBreadcrumb(obj);
    }
    let closure_10 = Date.now();
    c3 = false;
    map = new Map();
    map1 = new Map();
    const iter = quests[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp11 = nextResult;
      let result = map.set(nextResult.id, nextResult);
      set = map1.set;
      let id = nextResult.id;
      let tmp15 = mapped;
      let obj3 = mapped(7196);
      let result1 = set(id, obj3.isQuestExpired(nextResult));
      let targetedContent = nextResult.targetedContent;
      if (targetedContent.includes(mapped(5633).QuestContent.QUEST_BAR)) {
        let tmp15Result = tmp15(7206);
        let obj4 = { location: QuestsExperimentLocations.QUESTS_STORE };
        let questLogger = tmp15Result.getQuestLogger(obj4);
        let _HermesInternal2 = HermesInternal;
        let str3 = "Delivered ";
        let str4 = " (";
        let str5 = ")";
        let logResult = questLogger.log("Delivered " + tmp11.config.messages.questName + " (" + tmp11.id + ")");
      }
      continue;
    }
    map2 = new Map();
    for (const item10116 of excludedQuests) {
      let result2 = map2.set(item10116.id, item10116);
      continue;
    }
    const obj7 = map1;
    if (map1 != null) {
      const values = obj7.values();
    }
    for (const item10131 of values) {
      if (!map.has(item10131.id)) {
        let result3 = map.set(item10131.id, item10131);
        set2 = map1.set;
        let id2 = item10131.id;
        let obj8 = mapped(7196);
        let set2Result = set2(id2, obj8.isQuestExpired(item10131));
      }
      continue;
    }
    _startExpirationChecker();
    if (null != questEnrollmentBlockedUntil) {
      let _Date = Date;
      const self = this;
      const self2 = this;
      new Date(questEnrollmentBlockedUntil);
    }
    let date1 = null;
    if (null != questAccessSuspendedUntil) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date1 = new Date(questAccessSuspendedUntil);
    }
    _startSuspensionExpirationTimer();
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function handleFetchCurrentQuestsFailure() {
    c10 = 0;
    c3 = false;
  },
  QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function handleFetchClaimedQuestsBegin() {
    c4 = true;
  },
  QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function handleFetchClaimedQuestsSuccess(quests) {
    quests = quests.quests;
    c4 = false;
    map = new Map();
    for (const item10013 of quests) {
      let result = map.set(item10013.id, item10013);
      continue;
    }
  },
  QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function handleFetchClaimedQuestsFailure() {
    c4 = false;
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function handleFetchEarnedQuestToDeliverBegin(content) {
    c5 = true;
    content = content.content;
    map = new Map(map);
    const result = map.set(content, true);
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function handleFetchEarnedQuestToDeliverSuccess(arg0) {
    let content;
    let fetchedAt;
    let first;
    let responseTtlSeconds;
    let serverQuests;
    let tmp11;
    ({ serverQuests, content } = arg0);
    c5 = false;
    ({ fetchedAt, responseTtlSeconds } = arg0);
    map = new Map(map);
    const result = map.set(content, false);
    const obj2 = AdDecisionUtils;
    const responseTtl = obj2.resolveResponseTtl(responseTtlSeconds);
    const value = map10.get(content);
    let prop;
    const _Map = Map;
    if (value != null) {
      prop = value.earnedDecisionByQuestId;
    }
    const _Map1 = new _Map(prop);
    const tmp5 = serverQuests[Symbol.iterator]();
    while (tmp5 !== undefined) {
      [first, tmp11] = tmp6;
      let tmp10 = first;
      let obj = { fetchedAt, ttlMillis: responseTtl, shouldDeliver: null != tmp11 };
      let tmp12 = tmp11;
      let result1 = _Map1.set(first, obj);
      if (null != tmp11) {
        let value2 = map.get(tmp10);
        let obj7 = QuestServerUtils;
        let result2 = obj7.questWithUserStatusFromServer(tmp12);
        if (null != value2) {
          let tmp28 = updateQuestData(tmp10, result2);
        } else {
          let _Map2 = Map;
          let self = this;
          let self2 = this;
          map1 = new Map(map);
          map = map1;
          let result3 = map1.set(tmp10, result2);
          let _Map3 = Map;
          let self3 = this;
          let self4 = this;
          map2 = new Map(closure_24);
          closure_24 = map2;
          set = map2.set;
          let tmp34Result = QuestDataUtils;
          let result4 = set(tmp10, tmp34Result.isQuestExpired(result2));
        }
      }
      continue;
    }
    const result5 = map10.set(content, { earnedDecisionByQuestId: _Map1 });
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function handleFetchEarnedQuestToDeliverFailure(content) {
    c5 = false;
    content = content.content;
    map = new Map(map);
    const result = map.set(content, false);
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
    const error = questId.error;
    set = new Set(set);
    set.delete(questId);
    map = new Map(map);
    const result = map.set(questId, error);
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function handleSendHeartbeatSuccess(userStatus) {
    let questId;
    let streamKey;
    ({ questId, streamKey } = userStatus);
    userStatus = userStatus.userStatus;
    set6.add(questId);
    const obj = { userStatus };
    map = new Map(map);
    const value = map.get(questId);
    if (null != value) {
      const obj2 = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          const _Object = Object;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values2 = values(progress);
          for (const item10011 of values2) {
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
                  let addResult = set.add(questId);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let deleteResult = set.delete(questId);
                  }
                }
              }
            }
            continue;
          }
        }
      })(questId, obj);
      const result = map.set(questId, obj2);
      if (map1.has(questId)) {
        const value2 = map1.get(questId);
        if (null != value2) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map1 = new Map(map1);
          const obj3 = {};
          set = map1.set;
          const merged2 = Object.assign(value2);
          const merged3 = Object.assign(obj);
          const result1 = set(questId, obj3);
        }
      }
    }
    if (null != streamKey) {
      if (null != map.get(streamKey)) {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map2 = new Map(map);
        map = map2;
        map2.delete(streamKey);
      }
    }
  },
  QUESTS_SEND_HEARTBEAT_FAILURE: function handleSendHeartbeatFailure(streamKey) {
    streamKey = streamKey.streamKey;
    let tmp = null != streamKey;
    const questId = streamKey.questId;
    if (tmp) {
      tmp = null == map.get(streamKey);
    }
    if (tmp) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const _Date = Date;
      const obj = { questId, streamKey, firstFailedAt: Date.now() };
      set = map.set;
      const result = set(streamKey, obj);
    }
  },
  QUESTS_ENROLL_BEGIN: function handleEnrollBegin(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.add(questId);
  },
  QUESTS_ENROLL_SUCCESS: function handleEnrollSuccess(enrolledQuestUserStatus) {
    enrolledQuestUserStatus = enrolledQuestUserStatus.enrolledQuestUserStatus;
    const questId = enrolledQuestUserStatus.questId;
    const obj = { userStatus: enrolledQuestUserStatus };
    map = new Map(map);
    const value = map.get(questId);
    if (null != value) {
      const obj2 = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          const _Object = Object;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values2 = values(progress);
          for (const item10011 of values2) {
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
                  let addResult = set.add(questId);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let deleteResult = set.delete(questId);
                  }
                }
              }
            }
            continue;
          }
        }
      })(questId, obj);
      const result = map.set(questId, obj2);
      if (map1.has(questId)) {
        const value2 = map1.get(questId);
        if (null != value2) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map1 = new Map(map1);
          set = map1.set;
          const obj3 = {};
          const merged2 = Object.assign(value2);
          const merged3 = Object.assign(obj);
          const result1 = set(questId, obj3);
        }
      }
    }
    const questId2 = enrolledQuestUserStatus.questId;
    const set1 = new Set(set);
    set1.delete(questId2);
    set = set1;
  },
  QUESTS_ENROLL_FAILURE: function handleEnrollFailure(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.delete(questId);
  },
  QUESTS_FETCH_REWARD_CODE_BEGIN: function handleFetchRewardCodeBegin(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.add(questId);
  },
  QUESTS_FETCH_REWARD_CODE_SUCCESS: function handleFetchRewardCodeSuccess(arg0) {
    let obj2;
    let questId;
    let rewardCode;
    ({ questId, rewardCode } = arg0);
    const set1 = new Set(set);
    set1.delete(questId);
    set = set1;
    map = new Map(map2);
    const result = map.set(questId, rewardCode);
    map2 = map;
    const value = map.get(questId);
    let userStatus;
    if (value != null) {
      userStatus = value.userStatus;
    }
    const tmp5 = null != userStatus && null == userStatus.claimedAt;
    if (tmp5) {
      const obj = { userStatus: obj2 };
      obj2 = { claimedAt: rewardCode.claimedAt };
      const merged = Object.assign(userStatus);
      const _Map = Map;
      const self = this;
      const self2 = this;
      map1 = new Map(map);
      map = map1;
      const value3 = map1.get(questId);
      if (null != value3) {
        const obj3 = {};
        const merged1 = Object.assign(value3);
        const merged2 = Object.assign(obj);
        (function syncQuestProgressingOnDesktop(questId, userStatus) {
          if (null != userStatus.userStatus) {
            userStatus = userStatus.userStatus;
            let progress;
            const _Object = Object;
            if (userStatus != null) {
              progress = userStatus.progress;
            }
            if (progress == null) {
              progress = {};
            }
            const values2 = values(progress);
            for (const item10011 of values2) {
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
                    let addResult = set.add(questId);
                  } else {
                    let heartbeat2 = item10011.heartbeat;
                    let lastBeatAt1;
                    if (heartbeat2 != null) {
                      lastBeatAt1 = heartbeat2.lastBeatAt;
                    }
                    if (null == lastBeatAt1) {
                      let deleteResult = set.delete(questId);
                    }
                  }
                }
              }
              continue;
            }
          }
        })(questId, obj);
        const result1 = map.set(questId, obj3);
        if (map1.has(questId)) {
          const value4 = map1.get(questId);
          if (null != value4) {
            const _Map2 = Map;
            const self3 = this;
            const self4 = this;
            map2 = new Map(map1);
            map1 = map2;
            set = map2.set;
            const obj4 = {};
            const merged3 = Object.assign(value4);
            const merged4 = Object.assign(obj);
            const result2 = set(questId, obj4);
          }
        }
      }
    }
  },
  QUESTS_FETCH_REWARD_CODE_FAILURE: function handleFetchRewardCodeFailure(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.delete(questId);
  },
  QUESTS_CLAIM_REWARD_BEGIN: function handleClaimRewardBegin(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.add(questId);
  },
  QUESTS_CLAIM_REWARD_SUCCESS: function handleClaimRewardSuccess(arg0) {
    let entitlements;
    let questId;
    let tier;
    ({ questId, entitlements } = arg0);
    const set1 = new Set(set);
    set1.delete(questId);
    set = set1;
    map = new Map(map);
    const result = map.set(questId, entitlements.items);
    const value = map.get(questId);
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
          const self = this;
          const self2 = this;
          map1 = new Map(map2);
          const result1 = map1.set(questId, rewardCode);
          map2 = map1;
        }
        const obj = { claimedAt: entitlements.claimedAt, claimedTier: tier };
        const merged = Object.assign(userStatus);
        tier = undefined;
        if (rewardCode != null) {
          tier = rewardCode.tier;
        }
        if (tier == null) {
          tier = null;
        }
        const obj2 = { userStatus: obj };
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map2 = new Map(map);
        map = map2;
        const value3 = map2.get(questId);
        if (null != value3) {
          const obj3 = {};
          const merged1 = Object.assign(value3);
          const merged2 = Object.assign(obj2);
          (function syncQuestProgressingOnDesktop(questId, userStatus) {
            if (null != userStatus.userStatus) {
              userStatus = userStatus.userStatus;
              let progress;
              const _Object = Object;
              if (userStatus != null) {
                progress = userStatus.progress;
              }
              if (progress == null) {
                progress = {};
              }
              const values2 = values(progress);
              for (const item10011 of values2) {
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
                      let addResult = set.add(questId);
                    } else {
                      let heartbeat2 = item10011.heartbeat;
                      let lastBeatAt1;
                      if (heartbeat2 != null) {
                        lastBeatAt1 = heartbeat2.lastBeatAt;
                      }
                      if (null == lastBeatAt1) {
                        let deleteResult = set.delete(questId);
                      }
                    }
                  }
                }
                continue;
              }
            }
          })(questId, obj2);
          const result2 = map.set(questId, obj3);
          if (map1.has(questId)) {
            const value4 = map1.get(questId);
            if (null != value4) {
              const _Map3 = Map;
              const self5 = this;
              const self6 = this;
              const map3 = new Map(map1);
              map1 = map3;
              set = map3.set;
              const obj4 = {};
              const merged3 = Object.assign(value4);
              const merged4 = Object.assign(obj2);
              const result3 = set(questId, obj4);
            }
          }
        }
      }
    }
  },
  QUESTS_CLAIM_REWARD_FAILURE: function handleClaimRewardFailure(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.delete(questId);
  },
  QUESTS_DISMISS_CONTENT_BEGIN: function handleDismissContentBegin(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.add(questId);
    map = new Map(map);
    const tmp2 = map[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let first = tmp5[0];
      if (tmp5[1] === questId) {
        let deleteResult = map.delete(first);
        let flag = true;
      }
      continue;
    }
  },
  QUESTS_DISMISS_CONTENT_SUCCESS: function handleDismissContentSuccess(dismissedQuestUserStatus) {
    dismissedQuestUserStatus = dismissedQuestUserStatus.dismissedQuestUserStatus;
    const questId = dismissedQuestUserStatus.questId;
    const obj = { userStatus: dismissedQuestUserStatus };
    map = new Map(map);
    const value = map.get(questId);
    if (null != value) {
      const obj2 = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          const _Object = Object;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values2 = values(progress);
          for (const item10011 of values2) {
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
                  let addResult = set.add(questId);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let deleteResult = set.delete(questId);
                  }
                }
              }
            }
            continue;
          }
        }
      })(questId, obj);
      const result = map.set(questId, obj2);
      if (map1.has(questId)) {
        const value2 = map1.get(questId);
        if (null != value2) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map1 = new Map(map1);
          set = map1.set;
          const obj3 = {};
          const merged2 = Object.assign(value2);
          const merged3 = Object.assign(obj);
          const result1 = set(questId, obj3);
        }
      }
    }
    const questId2 = dismissedQuestUserStatus.questId;
    const set1 = new Set(set);
    set1.delete(questId2);
    set = set1;
  },
  QUESTS_DISMISS_CONTENT_FAILURE: function handleDismissContentFailure(questId) {
    questId = questId.questId;
    set = new Set(set);
    set.delete(questId);
  },
  AD_CONTENT_DISMISS_BEGIN: function handleAdContentDismissBegin(adCreativeId) {
    adCreativeId = adCreativeId.adCreativeId;
    set = new Set(set);
    set.add(adCreativeId);
    const set1 = new Set(set);
    set1.add(adCreativeId);
    set = set1;
  },
  AD_CONTENT_DISMISS_SUCCESS: handleAdContentDismissEnd,
  AD_CONTENT_DISMISS_FAILURE: handleAdContentDismissEnd,
  ADS_CREATIVE_PREVIEW_DELIVERY_STATE_RESET: function handleAdsCreativePreviewDeliveryStateReset(adCreativeId) {
    adCreativeId = adCreativeId.adCreativeId;
    if (set.has(adCreativeId)) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
      set.delete(adCreativeId);
    } else {
      return false;
    }
  },
  ADS_PREVIEW_DELIVERY_STATE_LOOKBACK_RESET: function handleAdsPreviewDeliveryStateLookbackReset() {
    if (0 === set.size) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
  },
  QUESTS_USER_STATUS_UPDATE: function handleQuestUserStatusUpdate(user_status) {
    user_status = user_status.user_status;
    const obj = getQuestLogger;
    const obj2 = { location: QuestsExperimentLocations.QUESTS_STORE };
    const questLogger = obj.getQuestLogger(obj2);
    questLogger.log("Received user status update for " + user_status.quest_id, user_status);
    const obj4 = QuestServerUtils;
    const result = obj4.questUserStatusFromServer(user_status);
    const quest_id = user_status.quest_id;
    const obj3 = { userStatus: result };
    map = new Map(map);
    const value = map.get(quest_id);
    if (null != value) {
      const obj5 = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj3);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          const _Object = Object;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values2 = values(progress);
          for (const item10011 of values2) {
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
                  let addResult = set.add(questId);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let deleteResult = set.delete(questId);
                  }
                }
              }
            }
            continue;
          }
        }
      })(quest_id, obj3);
      const result1 = map.set(quest_id, obj5);
      if (map1.has(quest_id)) {
        const value3 = map1.get(quest_id);
        if (null != value3) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map1 = new Map(map1);
          const obj6 = {};
          set = map1.set;
          const merged2 = Object.assign(value3);
          const merged3 = Object.assign(obj3);
          const result2 = set(quest_id, obj6);
        }
      }
    }
    const value4 = map.get(user_status.quest_id);
    if (null != value4) {
      const tmpResult = QuestDataUtils;
      const isQuestExpiredResult = tmpResult.isQuestExpired(value4);
      if (closure_24.get(user_status.quest_id) !== isQuestExpiredResult) {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map2 = new Map(closure_24);
        closure_24 = map2.set(user_status.quest_id, isQuestExpiredResult);
      }
    }
    const hasItem = 0 === Object.keys(result.progress).length && map4.has(result.questId);
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
      const self = this;
      const self2 = this;
      map = new Map(map);
      map.delete(streamKey);
    }
  },
  QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function handleDismissProgressTrackingFailureNotice(streamKey) {
    streamKey = streamKey.streamKey;
    if (null != map.get(streamKey)) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      map.delete(streamKey);
    }
  },
  QUESTS_PREVIEW_UPDATE_SUCCESS: function handlePreviewUpdateSuccess(previewQuestUserStatus) {
    previewQuestUserStatus = previewQuestUserStatus.previewQuestUserStatus;
    const questId = previewQuestUserStatus.questId;
    const obj = { userStatus: previewQuestUserStatus };
    map = new Map(map);
    const value = map.get(questId);
    if (null != value) {
      let obj2 = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(obj);
      (function syncQuestProgressingOnDesktop(questId, userStatus) {
        if (null != userStatus.userStatus) {
          userStatus = userStatus.userStatus;
          let progress;
          const _Object = Object;
          if (userStatus != null) {
            progress = userStatus.progress;
          }
          if (progress == null) {
            progress = {};
          }
          const values2 = values(progress);
          for (const item10011 of values2) {
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
                  let addResult = set.add(questId);
                } else {
                  let heartbeat2 = item10011.heartbeat;
                  let lastBeatAt1;
                  if (heartbeat2 != null) {
                    lastBeatAt1 = heartbeat2.lastBeatAt;
                  }
                  if (null == lastBeatAt1) {
                    let deleteResult = set.delete(questId);
                  }
                }
              }
            }
            continue;
          }
        }
      })(questId, obj);
      const result = map.set(questId, obj2);
      if (map1.has(questId)) {
        const value3 = map1.get(questId);
        if (null != value3) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map1 = new Map(map1);
          set = map1.set;
          const obj3 = {};
          const merged2 = Object.assign(value3);
          const merged3 = Object.assign(obj);
          const result1 = set(questId, obj3);
        }
      }
    }
    if (null == previewQuestUserStatus.claimedAt) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map2 = new Map(map2);
      let deleteResult = map2.delete(previewQuestUserStatus.questId);
    }
    if (null == previewQuestUserStatus.enrolledAt) {
      const _Map3 = Map;
      const self5 = this;
      const self6 = this;
      const map3 = new Map(map);
      map = map3;
      map3.delete(previewQuestUserStatus.questId);
      const state = VideoQuestUIStore.getState();
      state.resetQuest(previewQuestUserStatus.questId);
    }
    const value4 = map.get(previewQuestUserStatus.questId);
    if (null != value4) {
      const obj7 = QuestDataUtils;
      const isQuestExpiredResult = obj7.isQuestExpired(value4);
      if (closure_24.get(previewQuestUserStatus.questId) !== isQuestExpiredResult) {
        const _Map4 = Map;
        const self7 = this;
        const self8 = this;
        map4 = new Map(closure_24);
        closure_24 = map4.set(previewQuestUserStatus.questId, isQuestExpiredResult);
      }
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
    map = map4.get(questId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
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
    if (null != quest_enrollment_blocked_until) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      new Date(quest_enrollment_blocked_until);
    }
  }
};
const questStore = new QuestStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/quests/QuestStore.tsx");

export default questStore;