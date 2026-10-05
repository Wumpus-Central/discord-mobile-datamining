// discord_app/modules/presence_subscriptions/PresenceSubscriptionsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../activities/Constants.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import ActivitiesActionCreatorsDefault from "../../actions/ActivitiesActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import PresenceStore from "../../stores/PresenceStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleConnectionOpenOrResumed() {
  closure_5 = {};
  closure_6 = {};
}
const INVITE_EXPIRATION_MS = Constants.INVITE_EXPIRATION_MS;
let closure_5 = {};
let closure_6 = {};
const delayedCall = new Timers.DelayedCall(3000, function flush() {
  let tmp6;
  let tmp7;
  const items = [];
  const entries = Object.entries(closure_6);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let arr = items.push(tmp7);
    closure_5[tmp6] = tmp7;
    delete closure_6[tmp6];
    continue;
  }
  if (0 !== items.length) {
    const obj = ActivitiesActionCreatorsDefault;
    obj.subscribeActivities(items);
  }
});
const Store = get_initializedDefault.Store;
class PresenceSubscriptionsStore extends Store {
  initialize() {
    this.waitFor(PresenceStore);
  }
  isSubscribed(applicationId) {
    const combined = "" + applicationId.applicationId + ":" + applicationId.partyId;
    return combined in closure_5 || combined in closure_6;
  }
}
const prototype = PresenceSubscriptionsStore.prototype;
PresenceSubscriptionsStore.displayName = "PresenceSubscriptionsStore";
let obj = {
  PRESENCE_SUBSCRIPTIONS_ADD: function handleSubscriptionAdd(subscription) {
    let applicationId;
    let channelId;
    let inviteTime;
    let messageId;
    let partyId;
    let userId;
    function prune() {
      let flag = false;
      const timestamp = Date.now();
      const entries = Object.entries(closure_1_5);
      const tmp3 = entries[Symbol.iterator]();
      while (tmp3 !== undefined) {
        let tmp6 = _slicedToArray(tmp4, 2);
        if (tmp6[1].expiresAt < timestamp) {
          delete closure_1_5[tmp7];
          flag = true;
        }
        continue;
      }
      const entries1 = Object.entries(closure_1_6);
      for (const item10033 of entries1) {
        let tmp10 = _slicedToArray(item10033, 2);
        if (tmp10[1].expiresAt < timestamp) {
          delete closure_1_6[tmp11];
          flag = true;
        }
        continue;
      }
      return flag;
    }
    subscription = subscription.subscription;
    const tmp = prune();
    ({ applicationId, partyId } = subscription);
    ({ userId, messageId, channelId, inviteTime } = subscription);
    const combined = "" + subscription.applicationId + ":" + subscription.partyId;
    let tmp3 = combined in closure_5 || combined in closure_6;
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
        closure_6[combined1] = {
          userId,
          applicationId,
          partyId,
          messageId,
          channelId,
          expiresAt: INVITE_EXPIRATION_MS + Date.now(),
        };
        const obj = {
          userId,
          applicationId,
          partyId,
          messageId,
          channelId,
          expiresAt: INVITE_EXPIRATION_MS + Date.now(),
        };
        delayedCall.delay();
        let flag = true;
        return true;
      }
    }
  },
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  LOGOUT: function handleLogout() {
    closure_5 = {};
    closure_6 = {};
  },
};
const presenceSubscriptionsStore = new PresenceSubscriptionsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsStore.tsx");

export default presenceSubscriptionsStore;
