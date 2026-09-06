// discord_app/modules/premium/ReferralTrialStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ReferralTrialActionCreators from "ReferralTrialActionCreators.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function emitChanges() {
  return true;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((type) => {
    let content = null;
    if (type.type === content(1089).MessageTypes.PREMIUM_REFERRAL) {
      content = type.content;
    }
    if (null != content) {
      let hasItem = set2.has(content);
      if (!hasItem) {
        hasItem = set.has(content);
      }
      if (!hasItem) {
        set.add(content);
        closure_1(573).wait(() => {
          const referralTrialOffer = ReferralTrialActionCreators.resolveReferralTrialOffer(content);
          return referralTrialOffer.catch(NOOP_NULL);
        });
        const obj = closure_1(573);
      }
    }
    return false;
  });
}
const NOOP_NULL = fn(1074).NOOP_NULL;
let c5 = null;
let set = new Set();
let map = new Map();
let c8 = false;
let set1 = new Set();
let set2 = new Set();
let map1 = new Map();
map = map1;
let c12 = 0;
let c13 = null;
let closure_14 = [];
let c15 = false;
let c16 = 0;
let c17 = false;
let c18 = false;
let c19 = null;
let c20 = null;
const Store = initializeDefault.Store;
class ReferralTrialStore extends Store {}
const prototype = ReferralTrialStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
  const items = [UserStore];
  this.syncWith(items, emitChanges);
};
prototype["checkAndFetchReferralsRemaining"] = function checkAndFetchReferralsRemaining() {
  let tmp = null == c5;
  if (tmp) {
    tmp = !c8;
  }
  if (tmp) {
    tmp = c12 < 6;
  }
  if (tmp) {
    let tmp5 = null == c13;
    if (!tmp5) {
      const _Date = Date;
      tmp5 = tmp4 < Date.now();
    }
    tmp = tmp5;
  }
  if (tmp) {
    const referralsRemaining = ReferralTrialActionCreators.fetchReferralsRemaining();
  }
};
prototype["getReferralsRemaining"] = function getReferralsRemaining(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.bypassFetch;
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    const self = this;
    const result = this.checkAndFetchReferralsRemaining();
  }
  return c5;
};
prototype["getSentUserIds"] = function getSentUserIds() {
  const result = this.checkAndFetchReferralsRemaining();
  return Array.from(set.values());
};
prototype["isFetchingReferralsRemaining"] = function isFetchingReferralsRemaining() {
  return c8;
};
prototype["getRelevantUserTrialOffer"] = function getRelevantUserTrialOffer(referralTrialOfferId) {
  return map.get(referralTrialOfferId);
};
prototype["isResolving"] = function isResolving(arg0) {
  return set1.has(arg0);
};
prototype["getEligibleUsers"] = function getEligibleUsers() {
  return closure_14;
};
prototype["getFetchingEligibleUsers"] = function getFetchingEligibleUsers() {
  return c15;
};
prototype["getNextIndexOfEligibleUsers"] = function getNextIndexOfEligibleUsers() {
  return c16;
};
prototype["getIsEligibleToSendReferrals"] = function getIsEligibleToSendReferrals() {
  return c17;
};
prototype["getHasEligibleFriends"] = function getHasEligibleFriends() {
  return c18;
};
prototype["getRefreshAt"] = function getRefreshAt() {
  return c19;
};
prototype["getAllRelevantReferralTrialOffers"] = function getAllRelevantReferralTrialOffers() {
  return Array.from(map.values());
};
prototype["getRecipientStatus"] = function getRecipientStatus() {
  return map1;
};
prototype["getReminderStateId"] = function getReminderStateId() {
  return c20;
};
ReferralTrialStore.displayName = "ReferralTrialStore";
const referralTrialStore = new ReferralTrialStore(DispatcherDefault, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function handleReferralTrialOfferUpdate(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    if (!c8) {
      const referralsRemaining = userTrialOfferId(7453).fetchReferralsRemaining();
      const obj = userTrialOfferId(7453);
    }
    if (!set1.has(userTrialOfferId)) {
      set1.add(userTrialOfferId);
      DispatcherDefault.wait(() => {
        const referralTrialOffer = ReferralTrialActionCreators.resolveReferralTrialOffer(userTrialOfferId);
        return referralTrialOffer.catch(NOOP_NULL);
      });
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function handleReferralsRemainingFetchStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c19 = null;
      c8 = true;
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function handleReferralsRemainingFetchSuccess(has_eligible_friends) {
    c17 = true;
    has_eligible_friends = has_eligible_friends.has_eligible_friends;
    c8 = false;
    const referrals_remaining = has_eligible_friends.referrals_remaining;
    ({ refresh_at, recipient_status, reminder_state_id } = has_eligible_friends);
    new Set(has_eligible_friends.sent_user_ids);
    c19 = refresh_at;
    c20 = reminder_state_id;
    c12 = 0;
    c13 = null;
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function handleReferralsRemainingFetchFail(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c17 = false;
      c18 = false;
      c19 = null;
      c8 = false;
      const sum = c12 + 1;
      c12 = sum;
      if (sum <= 3) {
        const _Math2 = Math;
        let result = 1000 * Math.pow(2, c12);
      } else {
        const _Math = Math;
        result = 8000 * Math.pow(4, c12 - 3);
      }
      const _Date = Date;
      const _Math3 = Math;
      const timestamp = Date.now();
      c13 = timestamp + Math.min(300000, result);
    }
  },
  BILLING_CREATE_REFERRAL_SUCCESS: function handleCreateReferralSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    const referralsRemaining = ReferralTrialActionCreators.fetchReferralsRemaining();
    const result = map.set(userTrialOffer.id, userTrialOffer);
    set.add(userTrialOffer.userId);
  },
  CREATE_REFERRALS_SUCCESS: function handleCreateReferralsSuccess(arg0) {
    const referralsRemaining = ReferralTrialActionCreators.fetchReferralsRemaining();
    for (const item10012 of tmp) {
      let result = map.set(item10012.id, item10012);
      let addResult = set.add(item10012.userId);
      continue;
    }
  },
  BILLING_REFERRAL_RESOLVE_SUCCESS: function handleReferralTrialResolveSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    if (null != userTrialOffer) {
      set1.delete(userTrialOffer.id);
      set2.add(userTrialOffer.id);
      const result = map.set(userTrialOffer.id, userTrialOffer);
    }
  },
  BILLING_REFERRAL_RESOLVE_FAIL: function handleReferralTrialResolveFail(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    set1.delete(userTrialOfferId);
    set2.add(userTrialOfferId);
  },
  REFERRALS_FETCH_ELIGIBLE_USER_START: function handleReferralsFetchEligibleUsersStart() {
    c15 = true;
  },
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function handleReferralsFetchEligibleUsersSuccess(arg0) {
    c15 = false;
    ({ users: closure_14, nextIndex: c16 } = arg0);
  },
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function handleReferralsFetchEligibleUsersFail() {
    c15 = false;
  },
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  MESSAGE_CREATE: function handleMessage(message) {
    message = message.message;
    let content = null;
    if (message.type === content(1089).MessageTypes.PREMIUM_REFERRAL) {
      content = message.content;
    }
    if (null != content) {
      let hasItem = set2.has(content);
      if (!hasItem) {
        hasItem = set1.has(content);
      }
      if (!hasItem) {
        set1.add(content);
        DispatcherDefault.wait(() => {
          const referralTrialOffer = ReferralTrialActionCreators.resolveReferralTrialOffer(content);
          return referralTrialOffer.catch(NOOP_NULL);
        });
      }
    }
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOGOUT: function handleReset() {
    c5 = null;
    set = new Set();
    c8 = false;
    set1 = new Set();
    set2 = new Set();
    map = new Map();
    c12 = 0;
    c13 = null;
    closure_14 = [];
    c15 = false;
    c16 = 0;
    c17 = false;
    c18 = false;
    c19 = null;
    map1 = new Map();
    c20 = null;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/ReferralTrialStore.tsx");

export default referralTrialStore;
