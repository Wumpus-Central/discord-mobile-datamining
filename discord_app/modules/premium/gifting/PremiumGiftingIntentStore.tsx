// === Module 8290: getCurrentTime ===

// Module 8290 (getCurrentTime)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS from "FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS" /* 8291 */;
import getFriendAnniversaryGateConfig from "getFriendAnniversaryGateConfig" /* 8292 */;
import getHash from "getHash" /* 4288 */;
import initialize from "initialize" /* 1212 */;
import recomputeAffinities from "recomputeAffinities" /* 5407 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import hasConsented from "hasConsented" /* 5258 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import { Consents } from "ME" /* 676 */;

require = fn;
function getCurrentTime() {
  let timestamp = c17;
  if (c17 == null) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp;
}
function categorizeTopAffinityFriendAnniversaries() {
  const flag = false;
  const result = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS.categorizeFriendAnniversariesByAffinity(closure_11, (userId) => {
    const userAffinity = closure_5.getUserAffinity(userId);
    let dmProbability;
    if (userAffinity != null) {
      dmProbability = userAffinity.dmProbability;
    }
    return dmProbability;
  }, flag);
  ({ highestAffinity: set, highAffinity: set1 } = result);
}
function updateFriendAnniversaries() {
  let arr;
  if (null == c15) {
    resetFriendAnniversaries();
    if (closure_7.hasConsented(Consents.PERSONALIZATION)) {
      const EnableFriendAnniversaryNotifications = explicitContentFromProto.EnableFriendAnniversaryNotifications;
      if (EnableFriendAnniversaryNotifications.getSetting()) {
        const friendIDs = store.getFriendIDs();
        const iter = friendIDs[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp17 = nextResult;
          let since = store.getSince(nextResult);
          userAffinity = userAffinity.getUserAffinity(nextResult);
          if (store.isFriend(nextResult)) {
            if (null != userAffinity) {
              if (userAffinity.dmProbability > 0) {
                if (null != since) {
                  let _Date = Date;
                  let date = new Date(since);
                  let tmp29 = date;
                  let obj = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS;
                  if (obj.isFriendAnniversary(date)) {
                    arr = arr.push(tmp17);
                    obj = { friendsSince: null };
                    obj[0] = tmp29;
                    closure_14[tmp17] = obj;
                  }
                }
              }
            }
          }
          continue;
        }
        if (0 !== arr.length) {
          if (obj4.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" }).enabled) {
            const sorted = obj3.sort((arg0, arg1) => closure_5.compareByDmProbability(arg0, arg1));
            categorizeTopAffinityFriendAnniversaries();
          } else {
            resetFriendAnniversaries();
          }
          obj4 = getFriendAnniversaryGateConfig;
        }
        obj3 = arr;
      }
    }
  } else {
    generateFriendAnniversaries(c15);
  }
}
function resetFriendAnniversaries() {
  closure_11.length = 0;
  set = new Set();
  set1 = new Set();
  closure_14 = {};
}
function generateFriendAnniversaries(c15) {
  closure_11.length = 0;
  new Set();
  set = new Set();
  new Set();
  closure_14 = {};
  highestAffinity = set2;
  highAffinity = dependencyMap;
  set1 = new Set();
  if (obj2.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" }).enabled) {
    const EnableFriendAnniversaryNotifications = highestAffinity(4066).EnableFriendAnniversaryNotifications;
    if (EnableFriendAnniversaryNotifications.getSetting()) {
      closure_15 = c15;
      const friendIDs = store.getFriendIDs();
      const found = friendIDs.filter((item, index) => !closure_8.isIgnored(item));
      const _Set = Set;
      set2 = new Set(found);
      if (null != _null) {
        if (_null.length === c15) {
          _null = sampleSizeResult;
          const item = sampleSizeResult.forEach((item, index) => {
            const since = closure_8.getSince(item);
            if (null != since) {
              const _Date = Date;
              const date = new Date(since);
              arr = arr.push(item);
              const obj = { friendsSince: null };
              obj[0] = date;
              closure_14[item] = obj;
            }
          });
          const sorted = closure_11.sort((arg0, arg1) => closure_5.compareByDmProbability(arg0, arg1));
          const result = highestAffinity(8291).categorizeFriendAnniversariesByAffinity(closure_11, (userId) => {
            const userAffinity = closure_5.getUserAffinity(userId);
            let dmProbability;
            if (userAffinity != null) {
              dmProbability = userAffinity.dmProbability;
            }
            return dmProbability;
          }, true);
          ({ highestAffinity, highAffinity } = result);
          const highestAffinityResult = highestAffinity(8291);
        }
        sampleSizeResult = _null;
      }
      sampleSizeResult = applyDefault.sampleSize(found, c15);
    }
  }
  obj2 = set2(8292);
}
let closure_10 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
let closure_11 = [];
let set = new Set();
let set1 = new Set();
let closure_14 = {};
let c15 = null;
let c16 = null;
let c17 = null;
const PersistedStore = initializeDefault.PersistedStore;
class PremiumGiftingIntentStore extends PersistedStore {
}
const prototype = PremiumGiftingIntentStore.prototype;
prototype["initialize"] = function initialize(friendsTabBadgeLastDismissedTime) {
  closure_10 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
  if (null != friendsTabBadgeLastDismissedTime) {
    closure_10.friendsTabBadgeLastDismissedTime = friendsTabBadgeLastDismissedTime.friendsTabBadgeLastDismissedTime;
    const _Array = Array;
    closure_10.lastShownFriendsListGiftIntents = Array.from(friendsTabBadgeLastDismissedTime.lastShownFriendsListGiftIntents);
    const obj = {};
    const merged = Object.assign(friendsTabBadgeLastDismissedTime.messageGiftIntentLastShownMap);
    closure_10.messageGiftIntentLastShownMap = obj;
    let num = friendsTabBadgeLastDismissedTime.lastKnownGiftIntentDismissedAtMs;
    if (num == null) {
      num = 0;
    }
    closure_10.lastKnownGiftIntentDismissedAtMs = num;
  }
  const items = [closure_8, closure_5, closure_7, closure_3, closure_4, closure_6];
  this.syncWith(items, updateFriendAnniversaries);
  let timestamp = c17;
  if (c17 == null) {
    const _Date = Date;
    timestamp = Date.now();
  }
  closure_10.messageGiftIntentLastShownMap = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS.pruneTimestampMap(closure_10.messageGiftIntentLastShownMap, timestamp, 1209600000);
};
prototype["getState"] = function getState() {
  return closure_10;
};
prototype["getFriendAnniversaries"] = function getFriendAnniversaries() {
  return closure_11;
};
prototype["canShowFriendsTabBadge"] = function canShowFriendsTabBadge() {
  return Array.from(set1).some((item, index) => {
    const lastShownFriendsListGiftIntents = obj.lastShownFriendsListGiftIntents;
    return !lastShownFriendsListGiftIntents.includes(item);
  });
};
prototype["getFriendAnniversaryYears"] = function getFriendAnniversaryYears(arg0) {
  let num = 0;
  if (null != table[arg0]) {
    num = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS.yearsSince(tmp.friendsSince);
  }
  return num;
};
prototype["isGiftIntentMessageInCooldown"] = function isGiftIntentMessageInCooldown(closure_0) {
  return null != closure_10.messageGiftIntentLastShownMap[closure_0];
};
prototype["getDevToolTotalFriendAnniversaries"] = function getDevToolTotalFriendAnniversaries() {
  return c15;
};
prototype["getDevToolCurrentDate"] = function getDevToolCurrentDate() {
  return c17;
};
prototype["getHighestAffinityFriendAnniversaries"] = function getHighestAffinityFriendAnniversaries() {
  return Array.from(set);
};
prototype["getHighAffinityFriendAnniversaries"] = function getHighAffinityFriendAnniversaries() {
  return Array.from(set1);
};
prototype["getMessageGiftIntentLastShownMap"] = function getMessageGiftIntentLastShownMap() {
  return closure_10.messageGiftIntentLastShownMap;
};
prototype["getLastKnownGiftIntentDismissedAtMs"] = function getLastKnownGiftIntentDismissedAtMs() {
  return closure_10.lastKnownGiftIntentDismissedAtMs;
};
PremiumGiftingIntentStore.displayName = "PremiumGiftingIntentStore";
PremiumGiftingIntentStore.persistKey = "PremiumGiftingIntentStore";
let items = [
  (friendsTabBadgeLastDismissedTime) => {
    let tmp = friendsTabBadgeLastDismissedTime;
    if (null != friendsTabBadgeLastDismissedTime) {
      let prop = friendsTabBadgeLastDismissedTime.friendsTabBadgeLastDismissedTime;
      if (prop == null) {
        prop = null;
      }
      const obj = { friendsTabBadgeLastDismissedTime: null, lastShownFriendsListGiftIntents: null, messageGiftIntentLastShownMap: null };
      obj[0] = prop;
      let prop1 = friendsTabBadgeLastDismissedTime.lastShownFriendsListGiftIntents;
      if (prop1 == null) {
        prop1 = [];
      }
      obj[1] = prop1;
      obj[2] = {};
      tmp = obj;
    }
    return tmp;
  },
  (lastShownFriendsListGiftIntents) => {
    let tmp = lastShownFriendsListGiftIntents;
    if (null != lastShownFriendsListGiftIntents) {
      let prop = lastShownFriendsListGiftIntents.lastShownFriendsListGiftIntents;
      if (prop == null) {
        prop = [];
      }
      const obj = { friendsTabBadgeLastDismissedTime: null, lastShownFriendsListGiftIntents: null, messageGiftIntentLastShownMap: null, giftUnreadNotificationLastDismissedTimes: null };
      obj[1] = prop;
      let prop1 = lastShownFriendsListGiftIntents.messageGiftIntentLastShownMap;
      if (prop1 == null) {
        prop1 = {};
      }
      obj[2] = prop1;
      obj[3] = [];
      tmp = obj;
    }
    return tmp;
  },
  (lastShownFriendsListGiftIntents) => {
    let tmp = lastShownFriendsListGiftIntents;
    if (null != lastShownFriendsListGiftIntents) {
      let prop = lastShownFriendsListGiftIntents.lastShownFriendsListGiftIntents;
      if (prop == null) {
        prop = [];
      }
      const obj = { friendsTabBadgeLastDismissedTime: null, lastShownFriendsListGiftIntents: null, messageGiftIntentLastShownMap: null, giftUnreadNotificationLastDismissedTimes: null, profilePopoutGiftIntentsDismissMap: null };
      obj[1] = prop;
      let prop1 = lastShownFriendsListGiftIntents.messageGiftIntentLastShownMap;
      if (prop1 == null) {
        prop1 = {};
      }
      obj[2] = prop1;
      let prop2 = lastShownFriendsListGiftIntents.giftUnreadNotificationLastDismissedTimes;
      if (prop2 == null) {
        prop2 = [];
      }
      obj[3] = prop2;
      obj[4] = {};
      tmp = obj;
    }
    return tmp;
  },
  (lastKnownGiftIntentDismissedAtMs) => {
    let tmp = lastKnownGiftIntentDismissedAtMs;
    if (null != lastKnownGiftIntentDismissedAtMs) {
      const obj = {};
      const merged = Object.assign(lastKnownGiftIntentDismissedAtMs);
      let num = lastKnownGiftIntentDismissedAtMs.lastKnownGiftIntentDismissedAtMs;
      if (num == null) {
        num = 0;
      }
      obj.lastKnownGiftIntentDismissedAtMs = num;
      tmp = obj;
    }
    return tmp;
  },
  (arg0) => {
    if (null != arg0) {
      delete tmp[tmp2];
    }
    return arg0;
  },
  (arg0) => {
    if (null == arg0) {
      return arg0;
    } else {
      const obj = {};
      const merged = Object.assign(arg0);
      delete tmp[tmp2];
      return obj;
    }
  }
];
PremiumGiftingIntentStore.migrations = items;
const premiumGiftingIntentStore = new PremiumGiftingIntentStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_11.length = 0;
    set = new Set();
    set1 = new Set();
    closure_14 = {};
  },
  LOGOUT: function handleLogout() {
    closure_10 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
    closure_11.length = 0;
    set = new Set();
    set1 = new Set();
    closure_14 = {};
  },
  MESSAGE_GIFT_INTENT_SHOWN: function handleMessageGiftIntentShown(recipientUserId) {
    recipientUserId = recipientUserId.recipientUserId;
    if (null == closure_10.messageGiftIntentLastShownMap[recipientUserId]) {
      let timestamp = c17;
      if (c17 == null) {
        const _Date = Date;
        timestamp = Date.now();
      }
      closure_10.messageGiftIntentLastShownMap[recipientUserId] = timestamp;
    }
  },
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: function handleFriendsListGiftIntentsShown() {
    closure_10.lastShownFriendsListGiftIntents = Array.from(closure_11);
  },
  GIFT_INTENT_FLOW_PURCHASED_GIFT: function handleGiftIntentFlowPurchasedGift(recipientUserId) {
    recipientUserId = recipientUserId.recipientUserId;
    if (null == closure_10.messageGiftIntentLastShownMap[recipientUserId]) {
      let timestamp = c17;
      if (c17 == null) {
        const _Date = Date;
        timestamp = Date.now();
      }
      closure_10.messageGiftIntentLastShownMap[recipientUserId] = timestamp;
    }
  },
  GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: function handleGiftIntentDismissalsFetchSuccess(settingsTimestampMs) {
    const obj = {};
    const merged = Object.assign(closure_10.messageGiftIntentLastShownMap);
    const iter = settingsTimestampMs.dismissals[Symbol.iterator]();
    while (iter !== undefined) {
      ({ targetId, dismissedAtMs } = nextResult);
      let tmp3 = obj[targetId];
      if (null == tmp3) {
        let bound = dismissedAtMs;
      } else {
        let _Math = Math;
        bound = Math.max(tmp4, dismissedAtMs);
      }
      obj[targetId] = bound;
      continue;
    }
    nextResult = iter.next();
    closure_10.messageGiftIntentLastShownMap = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS.pruneTimestampMap(obj, getCurrentTime(), 1296000000);
    closure_10.lastKnownGiftIntentDismissedAtMs = settingsTimestampMs.settingsTimestampMs;
  },
  DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function handleDevToolResetFriendsListGiftIntentsShown() {
    closure_10.lastShownFriendsListGiftIntents = [];
  },
  DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function handleDevToolResetGiftMessageCooldown() {
    closure_10.messageGiftIntentLastShownMap = {};
  },
  DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function handleDevToolSetFriendAnniversaryCount(total) {
    total = total.total;
    if (null == total) {
      c15 = null;
      c16 = null;
      updateFriendAnniversaries();
    } else {
      generateFriendAnniversaries(total);
    }
  },
  DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function handleDevToolResampleFriendAnniversaries() {
    let flag = null != c15;
    if (flag) {
      c16 = null;
      generateFriendAnniversaries(c15);
      flag = true;
    }
    return flag;
  },
  DEV_TOOLS_SET_CURRENT_DATE: function handleDevToolSetCurrentDate(date) {

  },
  DEV_TOOLS_RESET_CURRENT_DATE: function handleDevToolResetCurrentDate() {
    c17 = null;
  }
});
let result = require("obj132").fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentStore.tsx");

export default premiumGiftingIntentStore;
export const FRIENDS_LIST_ANNIVERSARY_DISPLAY_LIMIT = 5;
export const FRIENDS_TAB_BADGE_COOLDOWN_MS = 604800000;