// === Module 6961: ReferralTrialStore ===

// Module 6961 (ReferralTrialStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 6962 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

function emitChanges() {
  return true;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((type) => {
    let content = null;
    if (type.type === content(closure_2[4]).MessageTypes.PREMIUM_REFERRAL) {
      content = type.content;
    }
    if (null != content) {
      const hasItem = set2.has(content) || set.has(content);
      if (!hasItem) {
        set.add(content);
        let obj = closure_1(closure_2[3]);
        obj.wait(() => {
          const obj = ReferralTrialActionCreators;
          const referralTrialOffer = obj.resolveReferralTrialOffer(content);
          return referralTrialOffer.catch(NOOP_NULL);
        });
      }
    }
    return false;
  });
}
const NOOP_NULL = Constants.NOOP_NULL;
let c5 = null;
let set = new Set();
let map = new Map();
let recipient_status = map;
let c8 = false;
const set1 = new Set();
const set2 = new Set();
const map1 = new Map();
map = map1;
let c12 = 0;
let c13 = null;
let closure_14 = [];
let c15 = false;
let c16 = 0;
let c17 = false;
let c18 = false;
let refresh_at = null;
let reminder_state_id = null;
const Store = get_initializedDefault.Store;
class ReferralTrialStore extends Store {
  initialize() {
    this.waitFor(UserStore);
    const items = [UserStore];
    this.syncWith(items, emitChanges);
  }
  checkAndFetchReferralsRemaining() {
    let tmp = null == c5 && !c8 && c12 < 6;
    if (tmp) {
      let tmp5 = null == c13;
      if (!tmp5) {
        const _Date = Date;
        tmp5 = tmp4 < Date.now();
      }
      tmp = tmp5;
    }
    if (tmp) {
      const obj = ReferralTrialActionCreators;
      const referralsRemaining = obj.fetchReferralsRemaining();
    }
  }
  getReferralsRemaining() {
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
  }
  getSentUserIds() {
    const result = this.checkAndFetchReferralsRemaining();
    return Array.from(set.values());
  }
  isFetchingReferralsRemaining() {
    return c8;
  }
  getRelevantUserTrialOffer(referralTrialOfferId) {
    return map.get(referralTrialOfferId);
  }
  isResolving(arg0) {
    return set1.has(arg0);
  }
  getEligibleUsers() {
    return closure_14;
  }
  getFetchingEligibleUsers() {
    return c15;
  }
  getNextIndexOfEligibleUsers() {
    return c16;
  }
  getIsEligibleToSendReferrals() {
    return c17;
  }
  getHasEligibleFriends() {
    return c18;
  }
  getRefreshAt() {
    return refresh_at;
  }
  getAllRelevantReferralTrialOffers() {
    return Array.from(map.values());
  }
  getRecipientStatus() {
    return recipient_status;
  }
  getReminderStateId() {
    return reminder_state_id;
  }
}
const prototype = ReferralTrialStore.prototype;
ReferralTrialStore.displayName = "ReferralTrialStore";
let obj = {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function handleReferralTrialOfferUpdate(userTrialOfferId) {
    userTrialOfferId = userTrialOfferId.userTrialOfferId;
    if (!c8) {
      let obj = userTrialOfferId(6962);
      const referralsRemaining = obj.fetchReferralsRemaining();
    }
    if (!set1.has(userTrialOfferId)) {
      set1.add(userTrialOfferId);
      const obj2 = DispatcherDefault;
      obj2.wait(() => {
        const obj = ReferralTrialActionCreators;
        const referralTrialOffer = obj.resolveReferralTrialOffer(userTrialOfferId);
        return referralTrialOffer.catch(NOOP_NULL);
      });
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function handleReferralsRemainingFetchStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      refresh_at = null;
      c8 = true;
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function handleReferralsRemainingFetchSuccess(has_eligible_friends) {
    c17 = true;
    has_eligible_friends = has_eligible_friends.has_eligible_friends;
    c8 = false;
    const referrals_remaining = has_eligible_friends.referrals_remaining;
    ({ refresh_at, recipient_status, reminder_state_id } = has_eligible_friends);
    set = new Set(has_eligible_friends.sent_user_ids);
    c12 = 0;
    c13 = null;
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function handleReferralsRemainingFetchFail(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      let result;
      c17 = false;
      c18 = false;
      refresh_at = null;
      c8 = false;
      const sum = c12 + 1;
      c12 = sum;
      if (sum <= 3) {
        const _Math2 = Math;
        result = 1000 * Math.pow(2, c12);
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
    const obj = ReferralTrialActionCreators;
    const referralsRemaining = obj.fetchReferralsRemaining();
    const result = map.set(userTrialOffer.id, userTrialOffer);
    set.add(userTrialOffer.userId);
  },
  CREATE_REFERRALS_SUCCESS: function handleCreateReferralsSuccess(userTrialOffers) {
    userTrialOffers = userTrialOffers.userTrialOffers;
    const obj = ReferralTrialActionCreators;
    const referralsRemaining = obj.fetchReferralsRemaining();
    for (const item10012 of userTrialOffers) {
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
    if (message.type === content(1101).MessageTypes.PREMIUM_REFERRAL) {
      content = message.content;
    }
    if (null != content) {
      const hasItem = set2.has(content) || set1.has(content);
      if (!hasItem) {
        set1.add(content);
        const obj = DispatcherDefault;
        obj.wait(() => {
          const obj = ReferralTrialActionCreators;
          const referralTrialOffer = obj.resolveReferralTrialOffer(content);
          return referralTrialOffer.catch(NOOP_NULL);
        });
      }
    }
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOGOUT: function handleReset() {
    c5 = null;
    new Set();
    c8 = false;
    new Set();
    new Set();
    new Map();
    c12 = 0;
    c13 = null;
    closure_14 = [];
    c15 = false;
    c16 = 0;
    c17 = false;
    c18 = false;
    refresh_at = null;
    recipient_status = new Map();
    reminder_state_id = null;
    new Map();
  }
};
const referralTrialStore = new ReferralTrialStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/premium/ReferralTrialStore.tsx");

export default referralTrialStore;