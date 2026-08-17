// discord_app/modules/presence_subscriptions/PresenceSubscriptionsStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef10673 from "module_10673" /* 10673 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "sortActivity" /* 4559 */;
import { INVITE_EXPIRATION_MS } from "items3" /* 4481 */;

function handleConnectionOpenOrResumed() {
  closure_5 = {};
  closure_6 = {};
}
let closure_5 = {};
let closure_6 = {};
const delayedCall = new require("start").DelayedCall(3000, function flush() {
  const items = [];
  const entries = Object.entries(closure_6);
  while (tmp4 !== undefined) {
    let tmp6 = callback;
    let tmp7 = callback(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    let arr = items.push(tmp9);
    let tmp11 = closure_5;
    closure_5[tmp8] = tmp9;
    let tmp12 = closure_6;
    delete tmp[tmp2];
    continue;
  }
  if (0 !== items.length) {
    _modDef10673.subscribeActivities(items);
    const obj = _modDef10673;
  }
});
const Store = initializeDefault.Store;
class PresenceSubscriptionsStore extends Store {
}
const prototype = PresenceSubscriptionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
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
const presenceSubscriptionsStore = new PresenceSubscriptionsStore(dispatcherDefault, {
  PRESENCE_SUBSCRIPTIONS_ADD: function handleSubscriptionAdd(subscription) {
    subscription = subscription.subscription;
    const tmp = (function prune() {
      let flag = false;
      const timestamp = Date.now();
      const entries = Object.entries(closure_5);
      while (tmp7 !== undefined) {
        let tmp9 = callback;
        let tmp10 = callback(tmp8, 2);
        if (tmp10[1].expiresAt < timestamp) {
          let tmp12 = closure_5;
          let tmp13 = tmp11;
          delete tmp4[tmp3];
          flag = true;
        }
        continue;
      }
      const entries1 = Object.entries(closure_6);
      for (const item10033 of entries1) {
        let tmp15 = callback;
        let tmp16 = callback(item10033, 2);
        if (tmp16[1].expiresAt < timestamp) {
          let tmp18 = closure_6;
          let tmp19 = tmp17;
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
        const obj = { userId: null, applicationId: null, partyId: null, messageId: null, channelId: null, expiresAt: null };
        obj[0] = userId;
        obj[1] = applicationId;
        obj[2] = partyId;
        obj[3] = messageId;
        obj[4] = channelId;
        obj[5] = tmp5 + Date.now();
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
  }
});
const result = require("set").fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsStore.tsx");

export default presenceSubscriptionsStore;