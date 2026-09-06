// discord_app/modules/presence_subscriptions/PresenceSubscriptionsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ActivitiesActionCreatorsDefault from "../../actions/ActivitiesActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import PresenceStore from "../../stores/PresenceStore.tsx";

function handleConnectionOpenOrResumed() {
  closure_5 = {};
  closure_6 = {};
}
const INVITE_EXPIRATION_MS = fn(1920).INVITE_EXPIRATION_MS;
let closure_5 = {};
let closure_6 = {};
const delayedCall = new fn(4447).DelayedCall(3000, function flush() {
  const items = [];
  const entries = Object.entries(closure_6);
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    let arr = items.push(tmp9);
    closure_5[tmp8] = tmp9;
    delete tmp[tmp2];
    continue;
  }
  if (0 !== items.length) {
    ActivitiesActionCreatorsDefault.subscribeActivities(items);
  }
});
const Store = initializeDefault.Store;
class PresenceSubscriptionsStore extends Store {}
const prototype = PresenceSubscriptionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(PresenceStore);
};
prototype["isSubscribed"] = function isSubscribed(applicationId) {
  const combined = "" + applicationId.applicationId + ":" + applicationId.partyId;
  let tmp2 = combined in closure_5;
  if (!tmp2) {
    tmp2 = combined in closure_6;
  }
  return tmp2;
};
PresenceSubscriptionsStore.displayName = "PresenceSubscriptionsStore";
const presenceSubscriptionsStore = new PresenceSubscriptionsStore(DispatcherDefault, {
  PRESENCE_SUBSCRIPTIONS_ADD: function handleSubscriptionAdd(subscription) {
    subscription = subscription.subscription;
    const tmp = (function prune() {
      let flag = false;
      const timestamp = Date.now();
      const entries = Object.entries(closure_1_5);
      while (tmp7 !== undefined) {
        let tmp10 = _slicedToArray(tmp8, 2);
        if (tmp10[1].expiresAt < timestamp) {
          delete tmp4[tmp3];
          flag = true;
        }
        continue;
      }
      const entries1 = Object.entries(closure_1_6);
      for (const item10033 of entries1) {
        let tmp16 = _slicedToArray(item10033, 2);
        if (tmp16[1].expiresAt < timestamp) {
          delete tmp2[tmp];
          flag = true;
        }
        continue;
      }
      return flag;
    })();
    ({ applicationId, partyId } = subscription);
    ({ userId, messageId, channelId, inviteTime } = subscription);
    const combined = "" + subscription.applicationId + ":" + subscription.partyId;
    let tmp3 = combined in closure_5;
    if (!tmp3) {
      tmp3 = combined in closure_6;
    }
    if (tmp3) {
      return tmp;
    } else {
      const _Date = Date;
      const sum = inviteTime + INVITE_EXPIRATION_MS;
      if (sum < Date.now()) {
        return tmp;
      } else {
        const _HermesInternal = HermesInternal;
        const _Date2 = Date;
        const combined1 = "" + applicationId + ":" + partyId;
        const obj = { userId, applicationId, partyId, messageId, channelId, expiresAt: tmp5 + Date.now() };
        closure_6[combined1] = obj;
        delayedCall.delay();
        return true;
      }
      tmp5 = INVITE_EXPIRATION_MS;
    }
  },
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  LOGOUT: function handleLogout() {
    closure_5 = {};
    closure_6 = {};
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsStore.tsx");

export default presenceSubscriptionsStore;
