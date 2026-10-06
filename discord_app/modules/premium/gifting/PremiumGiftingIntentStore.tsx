// discord_app/modules/premium/gifting/PremiumGiftingIntentStore.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import FriendAnniversaryUtils from "shared/FriendAnniversaryUtils.tsx";
import FriendAnniversaryGate from "FriendAnniversaryGate.tsx";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import ConsentStore from "../../../stores/ConsentStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _null, closure_10, closure_14, set2;

const f95599 = (userId) => {
  const userAffinity = UserAffinitiesV2Store.getUserAffinity(userId);
  let dmProbability;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  return dmProbability;
};
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
  const obj = FriendAnniversaryUtils;
  const result = obj.categorizeFriendAnniversariesByAffinity(closure_11, f95599, flag);
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
                  let self = this;
                  let self2 = this;
                  let date = new Date(since);
                  let tmp27 = date;
                  let obj = FriendAnniversaryUtils;
                  if (obj.isFriendAnniversary(date)) {
                    let arr = closure_11.push(tmp17);
                    let obj2 = { friendsSince: tmp27 };
                    closure_14[tmp17] = obj2;
                  }
                }
              }
            }
          }
          continue;
        }
        if (0 !== closure_11.length) {
          const obj4 = FriendAnniversaryGate;
          if (
            obj4.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" })
              .enabled
          ) {
            const sorted = closure_11.sort((arg0, arg1) => UserAffinitiesV2Store.compareByDmProbability(arg0, arg1));
            categorizeTopAffinityFriendAnniversaries();
          } else {
            resetFriendAnniversaries();
          }
        }
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
  new Set();
  closure_14 = {};
  const obj2 = set2(7761);
  if (
    obj2.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" }).enabled
  ) {
    const EnableFriendAnniversaryNotifications = tmp3(2028).EnableFriendAnniversaryNotifications;
    if (EnableFriendAnniversaryNotifications.getSetting()) {
      let closure_15 = c15;
      const friendIDs = RelationshipStore.getFriendIDs();
      const found = friendIDs.filter((item) => !RelationshipStore.isIgnored(item));
      const _Set = Set;
      let self = this;
      let self2 = this;
      set2 = new Set(found);
      if (null != _null) {
        if (_null.length === c15) {
          let sampleSizeResult;
          if (_null.every((item) => set2.has(item))) {
            sampleSizeResult = _null;
          }
          _null = sampleSizeResult;
          const item = sampleSizeResult.forEach(function (item) {
            const since = RelationshipStore.getSince(item);
            if (null != since) {
              const _Date = Date;
              const self = this;
              const self2 = this;
              const date = new Date(since);
              closure_1_11.push(item);
              const obj = { friendsSince: date };
              closure_14[item] = obj;
            }
          });
          const sorted = closure_11.sort((arg0, arg1) => UserAffinitiesV2Store.compareByDmProbability(arg0, arg1));
          const tmp3Result = set2(7760);
          const result = tmp3Result.categorizeFriendAnniversariesByAffinity(closure_11, f95599, true);
          ({ highestAffinity: set, highAffinity: set1 } = result);
        }
      }
      const obj3 = _modDef12;
      sampleSizeResult = obj3.sampleSize(found, c15);
    }
  }
}
const Consents = Constants.Consents;
const authStore = {
  messageGiftIntentLastShownMap: {},
  lastShownFriendsListGiftIntents: [],
  friendsTabBadgeLastDismissedTime: null,
  lastKnownGiftIntentDismissedAtMs: 0,
};
let closure_11 = [];
let set = new Set();
let set1 = new Set();
const authStore2 = {};
let c15 = null;
let c16 = null;
let c17 = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class PremiumGiftingIntentStore extends PersistedStore {
  initialize(friendsTabBadgeLastDismissedTime) {
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
      const tmp7 = closure_10;
      if (num == null) {
        num = 0;
      }
      tmp7.lastKnownGiftIntentDismissedAtMs = num;
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
    const pruneTimestampMap = FriendAnniversaryUtils.pruneTimestampMap;
    const messageGiftIntentLastShownMap = closure_10.messageGiftIntentLastShownMap;
    FriendAnniversaryUtils;
    const tmp9 = closure_10;
    if (c17 == null) {
      const _Date = Date;
      timestamp = Date.now();
    }
    tmp9.messageGiftIntentLastShownMap = pruneTimestampMap(messageGiftIntentLastShownMap, timestamp, 1209600000);
  }
  getState() {
    return closure_10;
  }
  getFriendAnniversaries() {
    return closure_11;
  }
  canShowFriendsTabBadge() {
    const arr = Array.from(set1);
    return arr.some((item) => {
      const lastShownFriendsListGiftIntents = closure_1_10.lastShownFriendsListGiftIntents;
      return !lastShownFriendsListGiftIntents.includes(item);
    });
  }
  getFriendAnniversaryYears(arg0) {
    let num = 0;
    if (null != closure_14[arg0]) {
      const obj = FriendAnniversaryUtils;
      num = obj.yearsSince(tmp.friendsSince);
    }
    return num;
  }
  isGiftIntentMessageInCooldown(found) {
    return null != closure_10.messageGiftIntentLastShownMap[found];
  }
  getDevToolTotalFriendAnniversaries() {
    return c15;
  }
  getDevToolCurrentDate() {
    return c17;
  }
  getHighestAffinityFriendAnniversaries() {
    return Array.from(set);
  }
  getHighAffinityFriendAnniversaries() {
    return Array.from(set1);
  }
  getMessageGiftIntentLastShownMap() {
    return closure_10.messageGiftIntentLastShownMap;
  }
  getLastKnownGiftIntentDismissedAtMs() {
    return closure_10.lastKnownGiftIntentDismissedAtMs;
  }
}
const prototype = PremiumGiftingIntentStore.prototype;
PremiumGiftingIntentStore.displayName = "PremiumGiftingIntentStore";
PremiumGiftingIntentStore.persistKey = "PremiumGiftingIntentStore";
let items = [
  (friendsTabBadgeLastDismissedTime) => {
    let prop1;
    let tmp = friendsTabBadgeLastDismissedTime;
    if (null != friendsTabBadgeLastDismissedTime) {
      let prop = friendsTabBadgeLastDismissedTime.friendsTabBadgeLastDismissedTime;
      if (prop == null) {
        prop = null;
      }
      const obj = {
        friendsTabBadgeLastDismissedTime: prop,
        lastShownFriendsListGiftIntents: prop1,
        messageGiftIntentLastShownMap: {},
      };
      prop1 = friendsTabBadgeLastDismissedTime.lastShownFriendsListGiftIntents;
      if (prop1 == null) {
        prop1 = [];
      }
      tmp = obj;
    }
    return tmp;
  },
  (lastShownFriendsListGiftIntents) => {
    let prop1;
    let tmp = lastShownFriendsListGiftIntents;
    if (null != lastShownFriendsListGiftIntents) {
      let prop = lastShownFriendsListGiftIntents.lastShownFriendsListGiftIntents;
      if (prop == null) {
        prop = [];
      }
      const obj = {
        friendsTabBadgeLastDismissedTime: null,
        lastShownFriendsListGiftIntents: prop,
        messageGiftIntentLastShownMap: prop1,
        giftUnreadNotificationLastDismissedTimes: [],
      };
      prop1 = lastShownFriendsListGiftIntents.messageGiftIntentLastShownMap;
      if (prop1 == null) {
        prop1 = {};
      }
      tmp = obj;
    }
    return tmp;
  },
  (lastShownFriendsListGiftIntents) => {
    let prop1;
    let prop2;
    let tmp = lastShownFriendsListGiftIntents;
    if (null != lastShownFriendsListGiftIntents) {
      let prop = lastShownFriendsListGiftIntents.lastShownFriendsListGiftIntents;
      if (prop == null) {
        prop = [];
      }
      const obj = {
        friendsTabBadgeLastDismissedTime: null,
        lastShownFriendsListGiftIntents: prop,
        messageGiftIntentLastShownMap: prop1,
        giftUnreadNotificationLastDismissedTimes: prop2,
        profilePopoutGiftIntentsDismissMap: {},
      };
      prop1 = lastShownFriendsListGiftIntents.messageGiftIntentLastShownMap;
      if (prop1 == null) {
        prop1 = {};
      }
      prop2 = lastShownFriendsListGiftIntents.giftUnreadNotificationLastDismissedTimes;
      if (prop2 == null) {
        prop2 = [];
      }
      tmp = obj;
    }
    return tmp;
  },
  (lastKnownGiftIntentDismissedAtMs) => {
    let num;
    let tmp = lastKnownGiftIntentDismissedAtMs;
    if (null != lastKnownGiftIntentDismissedAtMs) {
      const obj = { lastKnownGiftIntentDismissedAtMs: num };
      const merged = Object.assign(lastKnownGiftIntentDismissedAtMs);
      num = lastKnownGiftIntentDismissedAtMs.lastKnownGiftIntentDismissedAtMs;
      if (num == null) {
        num = 0;
      }
      tmp = obj;
    }
    return tmp;
  },
  (arg0) => {
    if (null != arg0) {
      delete tmp["profilePopoutGiftIntentsDismissMap"];
    }
    return arg0;
  },
  (arg0) => {
    if (null == arg0) {
      return arg0;
    } else {
      const obj = {};
      const merged = Object.assign(arg0);
      delete obj["giftUnreadNotificationLastDismissedTimes"];
      return obj;
    }
  },
];
PremiumGiftingIntentStore.migrations = items;
let obj = {
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
      const messageGiftIntentLastShownMap = closure_10.messageGiftIntentLastShownMap;
      if (c17 == null) {
        const _Date = Date;
        timestamp = Date.now();
      }
      messageGiftIntentLastShownMap[recipientUserId] = timestamp;
    }
  },
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: function handleFriendsListGiftIntentsShown() {
    closure_10.lastShownFriendsListGiftIntents = Array.from(closure_11);
  },
  GIFT_INTENT_FLOW_PURCHASED_GIFT: function handleGiftIntentFlowPurchasedGift(recipientUserId) {
    recipientUserId = recipientUserId.recipientUserId;
    if (null == closure_10.messageGiftIntentLastShownMap[recipientUserId]) {
      let timestamp = c17;
      const messageGiftIntentLastShownMap = closure_10.messageGiftIntentLastShownMap;
      if (c17 == null) {
        const _Date = Date;
        timestamp = Date.now();
      }
      messageGiftIntentLastShownMap[recipientUserId] = timestamp;
    }
  },
  GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: function handleGiftIntentDismissalsFetchSuccess(dismissals) {
    let dismissedAtMs;
    let targetId;
    dismissals = dismissals.dismissals;
    const obj = {};
    const settingsTimestampMs = dismissals.settingsTimestampMs;
    const merged = Object.assign(closure_10.messageGiftIntentLastShownMap);
    const iter = dismissals[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let bound;
      ({ targetId, dismissedAtMs } = nextResult);
      let tmp3 = obj[targetId];
      if (null == tmp3) {
        bound = dismissedAtMs;
      } else {
        let _Math = Math;
        bound = Math.max(tmp4, dismissedAtMs);
      }
      obj[targetId] = bound;
      continue;
    }
    const obj2 = FriendAnniversaryUtils;
    closure_10.messageGiftIntentLastShownMap = obj2.pruneTimestampMap(obj, getCurrentTime(), 1296000000);
    closure_10.lastKnownGiftIntentDismissedAtMs = settingsTimestampMs;
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
  DEV_TOOLS_SET_CURRENT_DATE: function handleDevToolSetCurrentDate(date) {},
  DEV_TOOLS_RESET_CURRENT_DATE: function handleDevToolResetCurrentDate() {
    c17 = null;
  },
};
const premiumGiftingIntentStore = new PremiumGiftingIntentStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentStore.tsx");

export default premiumGiftingIntentStore;
export const FRIENDS_LIST_ANNIVERSARY_DISPLAY_LIMIT = 5;
export const FRIENDS_TAB_BADGE_COOLDOWN_MS = 604800000;
