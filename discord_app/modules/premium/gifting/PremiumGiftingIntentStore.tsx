// discord_app/modules/premium/gifting/PremiumGiftingIntentStore.tsx
import getHash from "getHash";
import initialize from "initialize";
import recomputeAffinities from "recomputeAffinities";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import hasConsented from "hasConsented";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { Consents } from "ME";
import { PersistedStore } from "initialize";
import set from "recomputeAffinities";
import { apply } from "../../../../_runtime/00012_apply.js";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";
import { getFriendAnniversaryGateConfig } from "FriendAnniversaryGate.native.tsx";
import { FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS } from "shared/FriendAnniversaryUtils.tsx";

const require = arg1;
function getCurrentTime() {
  let timestamp = c17;
  if (c17 == null) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp;
}
function categorizeTopAffinityFriendAnniversaries() {
  let set;
  let set1;
  let flag;
  flag = false;
  const result = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS.categorizeFriendAnniversariesByAffinity(closure_11, (userId) => {
    const userAffinity = recomputeAffinities.getUserAffinity(userId);
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
    if (hasConsented.hasConsented(Consents.PERSONALIZATION)) {
      const EnableFriendAnniversaryNotifications = explicitContentFromProto.EnableFriendAnniversaryNotifications;
      if (EnableFriendAnniversaryNotifications.getSetting()) {
        const friendIDs = store.getFriendIDs();
        const iter = friendIDs[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp17 = nextResult;
          let tmp18 = store;
          let since = store.getSince(nextResult);
          let tmp20 = userAffinity;
          userAffinity = userAffinity.getUserAffinity(nextResult);
          if (store.isFriend(nextResult)) {
            let tmp22 = userAffinity;
            if (null != userAffinity) {
              let tmp47 = userAffinity;
              if (userAffinity.dmProbability > 0) {
                let tmp23 = since;
                if (null != since) {
                  let _Date = Date;
                  let tmp24 = since;
                  let tmp25 = new.target;
                  let tmp26 = new.target;
                  let date = new Date(since);
                  let tmp30 = require;
                  let tmp31 = dependencyMap;
                  let tmp28 = date;
                  let tmp29 = date;
                  let obj = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS;
                  if (obj.isFriendAnniversary(date)) {
                    let tmp32 = arr;
                    let tmp33 = arr;
                    let tmp34 = nextResult;
                    arr = arr.push(tmp17);
                    let tmp36 = closure_14;
                    obj = { friendsSince: null };
                    let tmp37 = tmp28;
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
            const sorted = obj3.sort((arg0, arg1) => recomputeAffinities.compareByDmProbability(arg0, arg1));
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
  const set = new Set();
  const set1 = new Set();
  let closure_14 = {};
}
function generateFriendAnniversaries(c15) {
  let highAffinity;
  let highestAffinity;
  closure_11.length = 0;
  highestAffinity = new Set();
  const set = new Set();
  highAffinity = new Set();
  let closure_14 = {};
  highestAffinity = set2;
  highAffinity = dependencyMap;
  const set1 = new Set();
  if (obj2.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" }).enabled) {
    const EnableFriendAnniversaryNotifications = highestAffinity(4066).EnableFriendAnniversaryNotifications;
    if (EnableFriendAnniversaryNotifications.getSetting()) {
      let closure_15 = c15;
      const friendIDs = store.getFriendIDs();
      const found = friendIDs.filter((arg0) => !markAllUserIdListsStale.isIgnored(arg0));
      const _Set = Set;
      set2 = new Set(found);
      if (null != _null) {
        if (_null.length === c15) {
          _null = sampleSizeResult;
          const item = sampleSizeResult.forEach((userId) => {
            const since = markAllUserIdListsStale.getSince(userId);
            if (null != since) {
              const _Date = Date;
              const date = new Date(since);
              arr = arr.push(userId);
              const obj = { friendsSince: null };
              obj[0] = date;
              closure_14[userId] = obj;
            }
          });
          const sorted = obj.sort((arg0, arg1) => recomputeAffinities.compareByDmProbability(arg0, arg1));
          const result = highestAffinity(8291).categorizeFriendAnniversariesByAffinity(obj, (userId) => {
            const userAffinity = recomputeAffinities.getUserAffinity(userId);
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
      sampleSizeResult = apply.sampleSize(found, c15);
      const obj3 = apply;
    }
  }
}
let closure_10 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
let closure_11 = [];
let set = new Set();
let set1 = new Set();
let closure_14 = {};
let c15 = null;
let c16 = null;
let c17 = null;
class PremiumGiftingIntentStore extends PersistedStore {
}
const prototype = PremiumGiftingIntentStore.prototype;
prototype["initialize"] = function initialize(friendsTabBadgeLastDismissedTime) {
  let closure_10 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
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
    const tmp7 = closure_10;
  }
  const items = [markAllUserIdListsStale, recomputeAffinities, hasConsented, getHash, initialize, handleConnectionClosedOrResumed];
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
  return Array.from(set1).some((arg0) => {
    const lastShownFriendsListGiftIntents = obj.lastShownFriendsListGiftIntents;
    return !lastShownFriendsListGiftIntents.includes(arg0);
  });
};
prototype["getFriendAnniversaryYears"] = function getFriendAnniversaryYears(arg0) {
  let num = 0;
  if (null != table[arg0]) {
    num = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS.yearsSince(tmp.friendsSince);
    const obj = FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS;
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
const premiumGiftingIntentStore = new PremiumGiftingIntentStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_11.length = 0;
    const set = new Set();
    const set1 = new Set();
    let closure_14 = {};
  },
  LOGOUT: function handleLogout() {
    let closure_10 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
    closure_11.length = 0;
    const set = new Set();
    const set1 = new Set();
    let closure_14 = {};
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
    let dismissedAtMs;
    let targetId;
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
        let tmp5 = tmp3;
        let tmp6 = dismissedAtMs;
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
      let c15 = null;
      let c16 = null;
      updateFriendAnniversaries();
    } else {
      generateFriendAnniversaries(total);
    }
  },
  DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function handleDevToolResampleFriendAnniversaries() {
    let flag = null != c15;
    if (flag) {
      let c16 = null;
      generateFriendAnniversaries(c15);
      flag = true;
    }
    return flag;
  },
  DEV_TOOLS_SET_CURRENT_DATE: function handleDevToolSetCurrentDate(date) {

  },
  DEV_TOOLS_RESET_CURRENT_DATE: function handleDevToolResetCurrentDate() {
    let c17 = null;
  }
});
let result = set.fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentStore.tsx");

export default premiumGiftingIntentStore;
export const FRIENDS_LIST_ANNIVERSARY_DISPLAY_LIMIT = 5;
export const FRIENDS_TAB_BADGE_COOLDOWN_MS = 604800000;