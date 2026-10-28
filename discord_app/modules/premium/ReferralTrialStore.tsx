// === Module 7597: ReferralTrialStore ===

// Module 7597 (ReferralTrialStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageTypes from "MessageTypes" /* 1100 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 7598 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
function emitChanges() {
  return true;
}
function clearRecipientEligibility() {
  closure_14 = [];
  closure_15 = [];
}
function invalidateRecipientEligibility(userId) {
  closure_0 = userId;
  set3.delete(userId);
  closure_14 = closure_14.filter((item) => item !== id);
  closure_15 = closure_15.filter((item) => item !== id);
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((type) => {
    let content = null;
    if (type.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
      content = type.content;
    }
    if (null != content) {
      let hasItem = set2.has(content);
      if (!hasItem) {
        hasItem = set.has(content);
      }
      if (!hasItem) {
        set.add(content);
        const referralTrialOffer = ReferralTrialActionCreators.resolveReferralTrialOffer(content);
        referralTrialOffer.catch(NOOP_NULL);
        const tmpResult = ReferralTrialActionCreators;
      }
    }
    return false;
  });
}
const NOOP_NULL = fn(1084).NOOP_NULL;
let c4 = null;
let set = new Set();
let map = new Map();
let c7 = false;
let set1 = new Set();
let set2 = new Set();
let map1 = new Map();
map = map1;
let c11 = 0;
let c12 = null;
let set3 = new Set();
let closure_14 = [];
let closure_15 = [];
let c16 = false;
let c17 = false;
let c18 = null;
let c19 = null;
let c20 = null;
const Store = initializeDefault.Store;
class ReferralTrialStore extends Store {
}
const prototype = ReferralTrialStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
  const items = [UserStore];
  this.syncWith(items, emitChanges);
};
prototype["checkAndFetchReferralsRemaining"] = function checkAndFetchReferralsRemaining() {
  let tmp = null == c4;
  if (tmp) {
    tmp = !c7;
  }
  if (tmp) {
    tmp = c11 < 6;
  }
  if (tmp) {
    let tmp5 = null == c12;
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
  return c4;
};
prototype["getSentUserIds"] = function getSentUserIds() {
  const result = this.checkAndFetchReferralsRemaining();
  return Array.from(set.values());
};
prototype["isFetchingReferralsRemaining"] = function isFetchingReferralsRemaining() {
  return c7;
};
prototype["getRelevantUserTrialOffer"] = function getRelevantUserTrialOffer(referralTrialOfferId) {
  return map.get(referralTrialOfferId);
};
prototype["isResolving"] = function isResolving(arg0) {
  return set1.has(arg0);
};
prototype["getEligibleUsers"] = function getEligibleUsers() {
  return set3;
};
prototype["isFetchingUserEligibility"] = function isFetchingUserEligibility(arg0) {
  return closure_14.includes(arg0);
};
prototype["hasFetchedUserEligibility"] = function hasFetchedUserEligibility(arg0) {
  return closure_15.includes(arg0);
};
prototype["getIsEligibleToSendReferrals"] = function getIsEligibleToSendReferrals() {
  return c16;
};
prototype["getHasEligibleFriends"] = function getHasEligibleFriends() {
  return c17;
};
prototype["getRefreshAt"] = function getRefreshAt() {
  return c18;
};
prototype["getAllRelevantReferralTrialOffers"] = function getAllRelevantReferralTrialOffers() {
  return Array.from(map.values());
};
prototype["getRecipientStatus"] = function getRecipientStatus() {
  return map1;
};
prototype["getReminderStateId"] = function getReminderStateId() {
  let tmp = c20;
  if (c20 == null) {
    tmp = c19;
  }
  return tmp;
};
prototype["getRecurringReminderStateId"] = function getRecurringReminderStateId() {
  return c20;
};
ReferralTrialStore.displayName = "ReferralTrialStore";
const referralTrialStore = new ReferralTrialStore(DispatcherDefault, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function handleReferralTrialOfferUpdate(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    if (!c7) {
      const referralsRemaining = ReferralTrialActionCreators.fetchReferralsRemaining();
    }
    if (!set1.has(userTrialOfferId)) {
      set1.add(userTrialOfferId);
      const referralTrialOffer = ReferralTrialActionCreators.resolveReferralTrialOffer(userTrialOfferId);
      referralTrialOffer.catch(NOOP_NULL);
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function handleReferralsRemainingFetchStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c18 = null;
      c7 = true;
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function handleReferralsRemainingFetchSuccess(has_eligible_friends) {
    c16 = true;
    has_eligible_friends = has_eligible_friends.has_eligible_friends;
    c7 = false;
    const referrals_remaining = has_eligible_friends.referrals_remaining;
    ({ refresh_at, recipient_status, reminder_state_id, recurring_reminder_state_id } = has_eligible_friends);
    new Set(has_eligible_friends.sent_user_ids);
    c18 = refresh_at;
    c19 = reminder_state_id;
    c20 = recurring_reminder_state_id;
    if (0 === referrals_remaining) {
      const _Set = Set;
      set1 = new Set();
      closure_14 = [];
      closure_15 = [];
    }
    c11 = 0;
    c12 = null;
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function handleReferralsRemainingFetchFail(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c16 = false;
      c17 = false;
      c18 = null;
      c7 = false;
      const sum = c11 + 1;
      c11 = sum;
      if (sum <= 3) {
        const _Math2 = Math;
        let result = 1000 * Math.pow(2, c11);
      } else {
        const _Math = Math;
        result = 8000 * Math.pow(4, c11 - 3);
      }
      const _Date = Date;
      const _Math3 = Math;
      const timestamp = Date.now();
      c12 = timestamp + Math.min(300000, result);
    }
  },
  BILLING_CREATE_REFERRAL_SUCCESS: function handleCreateReferralSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    let hasItem = set.has(userTrialOffer.userId);
    const referralsRemaining = ReferralTrialActionCreators.fetchReferralsRemaining();
    const result = map.set(userTrialOffer.id, userTrialOffer);
    set.add(userTrialOffer.userId);
    const userId = userTrialOffer.userId;
    set3.delete(userId);
    closure_14 = closure_14.filter((item) => item !== id);
    closure_15 = closure_15.filter((item) => item !== id);
    if (!hasItem) {
      hasItem = null == c4;
    }
    if (!hasItem) {
      const _Math = Math;
      const bound = Math.max(0, c4 - 1);
      c4 = bound;
      if (0 === bound) {
        const _Set = Set;
        set = new Set();
        closure_14 = [];
        closure_15 = [];
        set3 = set;
      }
    }
  },
  CREATE_REFERRALS_SUCCESS: function handleCreateReferralsSuccess(userTrialOffers) {
    userTrialOffers = userTrialOffers.userTrialOffers;
    const found = userTrialOffers.filter((userId) => !set.has(userId.userId));
    set = new Set(found.map((userId) => userId.userId));
    const referralsRemaining = ReferralTrialActionCreators.fetchReferralsRemaining();
    const iter = userTrialOffers[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let result = map.set(nextResult.id, nextResult);
      let addResult = set.add(nextResult.userId);
      let tmp9 = invalidateRecipientEligibility(nextResult.userId);
      continue;
    }
    let tmp10 = null != c4;
    if (tmp10) {
      const _Math = Math;
      const bound = Math.max(0, c4 - set.size);
      c4 = bound;
      tmp10 = 0 === bound;
    }
    if (tmp10) {
      clearRecipientEligibility();
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
  REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_START: function handleRecipientEligibilityFetchStart(arg0) {
    for (const item10007 of tmp) {
      if (!closure_14.includes(item10007)) {
        let arr = closure_14.push(item10007);
      }
      continue;
    }
  },
  REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_SUCCESS: function handleRecipientEligibilityFetchSuccess(recipientIds) {
    recipientIds = recipientIds.recipientIds;
    set = new Set(recipientIds.eligibleRecipientIds);
    const iter = recipientIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (!closure_15.includes(nextResult)) {
        let arr = closure_15.push(tmp2);
      }
      let hasItem = set.has(tmp2);
      if (hasItem) {
        hasItem = !set.has(tmp2);
      }
      if (hasItem) {
        hasItem = 0 !== c4;
      }
      if (hasItem) {
        let addResult = set3.add(tmp2);
      }
      continue;
    }
    closure_14 = closure_14.filter((item) => !recipientIds.includes(item));
  },
  REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_FAILURE: function handleRecipientEligibilityFetchFailure(recipientIds) {
    recipientIds = recipientIds.recipientIds;
    closure_14 = closure_14.filter((item) => !recipientIds.includes(item));
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const id = relationship.relationship.id;
    let hasItem = set3.has(id);
    if (!hasItem) {
      hasItem = closure_14.includes(id);
    }
    if (!hasItem) {
      hasItem = closure_15.includes(id);
    }
    let flag = hasItem;
    if (flag) {
      set3.delete(id);
      closure_14 = closure_14.filter((item) => item !== id);
      closure_15 = closure_15.filter((item) => item !== id);
      flag = true;
    }
    return flag;
  },
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  MESSAGE_CREATE: function handleMessage(message) {
    message = message.message;
    let content = null;
    if (message.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
      content = message.content;
    }
    if (null != content) {
      let hasItem = set2.has(content);
      if (!hasItem) {
        hasItem = set1.has(content);
      }
      if (!hasItem) {
        set1.add(content);
        const referralTrialOffer = ReferralTrialActionCreators.resolveReferralTrialOffer(content);
        referralTrialOffer.catch(NOOP_NULL);
        const tmpResult = ReferralTrialActionCreators;
      }
    }
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOGOUT: function handleReset() {
    c4 = null;
    set = new Set();
    c7 = false;
    set1 = new Set();
    set2 = new Set();
    map = new Map();
    c11 = 0;
    c12 = null;
    set3 = new Set();
    closure_14 = [];
    closure_15 = [];
    c16 = false;
    c17 = false;
    c18 = null;
    map1 = new Map();
    c19 = null;
    c20 = null;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/ReferralTrialStore.tsx");

export default referralTrialStore;