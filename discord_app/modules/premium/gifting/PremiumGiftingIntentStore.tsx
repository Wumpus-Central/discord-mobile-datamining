// discord_app/modules/premium/gifting/PremiumGiftingIntentStore.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import FriendAnniversaryUtils from "shared/FriendAnniversaryUtils.tsx";
import FriendAnniversaryGate from "FriendAnniversaryGate.native.tsx";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import ConsentStore from "../../../stores/ConsentStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

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
  const result = FriendAnniversaryUtils.categorizeFriendAnniversariesByAffinity(
    closure_11,
    (userId) => {
      const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
      let dmProbability;
      if (userAffinity != null) {
        dmProbability = userAffinity.dmProbability;
      }
      return dmProbability;
    },
    flag,
  );
  ({ highestAffinity: set, highAffinity: set1 } = result);
}
function updateFriendAnniversaries() {
  if (null == c15) {
    resetFriendAnniversaries();
    if (ConsentStore.hasConsented(Consents.PERSONALIZATION)) {
      const EnableFriendAnniversaryNotifications = UserSettings.EnableFriendAnniversaryNotifications;
      if (EnableFriendAnniversaryNotifications.getSetting()) {
        const friendIDs = RelationshipStore.getFriendIDs();
        const iter = friendIDs[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp17 = nextResult;
          let since = RelationshipStore.getSince(nextResult);
          let userAffinity = UserAffinitiesV2Store.getUserAffinity(nextResult);
          if (RelationshipStore.isFriend(nextResult)) {
            if (null != userAffinity) {
              if (userAffinity.dmProbability > 0) {
                if (null != since) {
                  let _Date = Date;
                  let tmp26 = new.target;
                  let tmp27 = new.target;
                  let date = new Date(since);
                  let tmp30 = date;
                  let obj = FriendAnniversaryUtils;
                  if (obj.isFriendAnniversary(date)) {
                    let arr = closure_11.push(tmp17);
                    obj = { friendsSince: null };
                    obj.friendsSince = tmp30;
                    closure_14[tmp17] = obj;
                  }
                }
              }
            }
          }
          continue;
        }
        if (0 !== closure_11.length) {
          if (
            obj4.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" })
              .enabled
          ) {
            const sorted = obj3.sort((arg0, arg1) => UserAffinitiesV2Store.compareByDmProbability(arg0, arg1));
            categorizeTopAffinityFriendAnniversaries();
          } else {
            resetFriendAnniversaries();
          }
          obj4 = FriendAnniversaryGate;
        }
        obj3 = closure_11;
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
  if (
    obj2.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" }).enabled
  ) {
    const EnableFriendAnniversaryNotifications = highestAffinity(1935).EnableFriendAnniversaryNotifications;
    if (EnableFriendAnniversaryNotifications.getSetting()) {
      closure_15 = c15;
      const friendIDs = RelationshipStore.getFriendIDs();
      const found = friendIDs.filter((item) => !RelationshipStore.isIgnored(item));
      const _Set = Set;
      set2 = new Set(found);
      if (null != _null) {
        if (_null.length === c15) {
          _null = sampleSizeResult;
          const item = sampleSizeResult.forEach((item) => {
            const since = RelationshipStore.getSince(item);
            if (null != since) {
              const _Date = Date;
              const date = new Date(since);
              closure_1_11.push(item);
              const obj = { friendsSince: date };
              closure_14[item] = obj;
            }
          });
          const sorted = obj.sort((arg0, arg1) => UserAffinitiesV2Store.compareByDmProbability(arg0, arg1));
          const result = highestAffinity(8079).categorizeFriendAnniversariesByAffinity(
            obj,
            (userId) => {
              const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
              let dmProbability;
              if (userAffinity != null) {
                dmProbability = userAffinity.dmProbability;
              }
              return dmProbability;
            },
            true,
          );
          ({ highestAffinity, highAffinity } = result);
          const highestAffinityResult = highestAffinity(8079);
        }
        sampleSizeResult = _null;
      }
      sampleSizeResult = _modDef12.sampleSize(found, c15);
    }
  }
}
const Consents = fn(1074).Consents;
let closure_10 = {
  messageGiftIntentLastShownMap: {},
  lastShownFriendsListGiftIntents: [],
  friendsTabBadgeLastDismissedTime: null,
  lastKnownGiftIntentDismissedAtMs: 0,
};
let closure_11 = [];
let set = new Set();
let set1 = new Set();
let closure_14 = {};
let c15 = null;
let c16 = null;
let c17 = null;
const PersistedStore = initializeDefault.PersistedStore;
class PremiumGiftingIntentStore extends PersistedStore {}
const prototype = PremiumGiftingIntentStore.prototype;
prototype["initialize"] = function initialize(friendsTabBadgeLastDismissedTime) {
  closure_10 = {
    messageGiftIntentLastShownMap: {},
    lastShownFriendsListGiftIntents: [],
    friendsTabBadgeLastDismissedTime: null,
    lastKnownGiftIntentDismissedAtMs: 0,
  };
  if (null != friendsTabBadgeLastDismissedTime) {
    closure_10.friendsTabBadgeLastDismissedTime = friendsTabBadgeLastDismissedTime.friendsTabBadgeLastDismissedTime;
    const _Array = Array;
    closure_10.lastShownFriendsListGiftIntents = Array.from(
      friendsTabBadgeLastDismissedTime.lastShownFriendsListGiftIntents,
    );
    const obj = {};
    const merged = Object.assign(friendsTabBadgeLastDismissedTime.messageGiftIntentLastShownMap);
    closure_10.messageGiftIntentLastShownMap = obj;
    let num = friendsTabBadgeLastDismissedTime.lastKnownGiftIntentDismissedAtMs;
    if (num == null) {
      num = 0;
    }
    closure_10.lastKnownGiftIntentDismissedAtMs = num;
  }
  const items = [
    RelationshipStore,
    UserAffinitiesV2Store,
    ConsentStore,
    ExperimentStore,
    ApexExperimentStore,
    UserSettingsProtoStore,
  ];
  this.syncWith(items, updateFriendAnniversaries);
  let timestamp = c17;
  if (c17 == null) {
    const _Date = Date;
    timestamp = Date.now();
  }
  closure_10.messageGiftIntentLastShownMap = FriendAnniversaryUtils.pruneTimestampMap(
    closure_10.messageGiftIntentLastShownMap,
    timestamp,
    1209600000,
  );
};
prototype["getState"] = function getState() {
  return closure_10;
};
prototype["getFriendAnniversaries"] = function getFriendAnniversaries() {
  return closure_11;
};
prototype["canShowFriendsTabBadge"] = function canShowFriendsTabBadge() {
  return Array.from(set1).some((item) => {
    const lastShownFriendsListGiftIntents = closure_1_10.lastShownFriendsListGiftIntents;
    return !lastShownFriendsListGiftIntents.includes(item);
  });
};
prototype["getFriendAnniversaryYears"] = function getFriendAnniversaryYears(arg0) {
  let num = 0;
  if (null != closure_14[arg0]) {
    num = FriendAnniversaryUtils.yearsSince(tmp.friendsSince);
  }
  return num;
};
prototype["isGiftIntentMessageInCooldown"] = function isGiftIntentMessageInCooldown(found) {
  return null != closure_10.messageGiftIntentLastShownMap[found];
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
      const obj = {
        friendsTabBadgeLastDismissedTime: prop,
        lastShownFriendsListGiftIntents: null,
        messageGiftIntentLastShownMap: null,
      };
      let prop1 = friendsTabBadgeLastDismissedTime.lastShownFriendsListGiftIntents;
      if (prop1 == null) {
        prop1 = [];
      }
      obj.lastShownFriendsListGiftIntents = prop1;
      obj.messageGiftIntentLastShownMap = {};
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
      const obj = {
        friendsTabBadgeLastDismissedTime: null,
        lastShownFriendsListGiftIntents: prop,
        messageGiftIntentLastShownMap: null,
        giftUnreadNotificationLastDismissedTimes: null,
      };
      let prop1 = lastShownFriendsListGiftIntents.messageGiftIntentLastShownMap;
      if (prop1 == null) {
        prop1 = {};
      }
      obj.messageGiftIntentLastShownMap = prop1;
      obj.giftUnreadNotificationLastDismissedTimes = [];
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
      const obj = {
        friendsTabBadgeLastDismissedTime: null,
        lastShownFriendsListGiftIntents: prop,
        messageGiftIntentLastShownMap: null,
        giftUnreadNotificationLastDismissedTimes: null,
        profilePopoutGiftIntentsDismissMap: null,
      };
      let prop1 = lastShownFriendsListGiftIntents.messageGiftIntentLastShownMap;
      if (prop1 == null) {
        prop1 = {};
      }
      obj.messageGiftIntentLastShownMap = prop1;
      let prop2 = lastShownFriendsListGiftIntents.giftUnreadNotificationLastDismissedTimes;
      if (prop2 == null) {
        prop2 = [];
      }
      obj.giftUnreadNotificationLastDismissedTimes = prop2;
      obj.profilePopoutGiftIntentsDismissMap = {};
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
  },
];
PremiumGiftingIntentStore.migrations = items;
const premiumGiftingIntentStore = new PremiumGiftingIntentStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_11.length = 0;
    set = new Set();
    set1 = new Set();
    closure_14 = {};
  },
  LOGOUT: function handleLogout() {
    closure_10 = {
      messageGiftIntentLastShownMap: {},
      lastShownFriendsListGiftIntents: [],
      friendsTabBadgeLastDismissedTime: null,
      lastKnownGiftIntentDismissedAtMs: 0,
    };
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
    closure_10.messageGiftIntentLastShownMap = FriendAnniversaryUtils.pruneTimestampMap(
      obj,
      getCurrentTime(),
      1296000000,
    );
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
  DEV_TOOLS_SET_CURRENT_DATE: function handleDevToolSetCurrentDate(date) {},
  DEV_TOOLS_RESET_CURRENT_DATE: function handleDevToolResetCurrentDate() {
    c17 = null;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentStore.tsx");

export default premiumGiftingIntentStore;
export const FRIENDS_LIST_ANNIVERSARY_DISPLAY_LIMIT = 5;
export const FRIENDS_TAB_BADGE_COOLDOWN_MS = 604800000;
