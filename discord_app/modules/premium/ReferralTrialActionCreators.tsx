// === Module 6962: ReferralTrialActionCreators ===

// Module 6962 (ReferralTrialActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserTrialOfferRecord from "UserTrialOfferRecord" /* 6963 */;
import UserRecord from "UserRecord" /* 1391 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let limit, userTrialOffer, userTrialOffers;

let metroImportAll;
let metroImportDefault;
let obj = function _fetchReferralEligibleUsers() {
  obj = _asyncToGenerator(async (index, searchQuery, arg2) => {
    let c5;
    let closure_4;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      let obj6;
      const _JSON = JSON;
      const obj4 = { index, searchQuery };
      const json = JSON.stringify(obj4);
      if (map.has(json)) {
        return map.get(json);
      }
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants.GET_REFERRAL_ELIGIBLE_USERS, body: obj6, oldFormErrors: true, rejectWithError: false };
      obj6 = { index, limit, search_query: searchQuery };
      limit = closure_2;
      const post = HTTP.post;
      if (closure_2 == null) {
        limit = 10;
      }
      await post(request);
      const body = value.body;
      const users = body.users;
      const next_index = body.next_index;
      const obj9 = {
        users: users.map((item) => {
          const tmp = new closure_1_5(item);
          return tmp;
        }),
        nextIndex: next_index
      };
      const result = closure_133_10.set(json, obj9);
      return obj9;
    })();
  });
  return obj(...arguments);
};
obj = function _createReferralTrials() {
  obj = _asyncToGenerator(async (userTrialOffers) => {
    let closure_3;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let c2;
          let tmp2;
          let fromServer;
          c8 = 2;
          let tmp5 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_4 = tmp;
              c2 = undefined;
              tmp2 = undefined;
              fromServer = undefined;
              userTrialOffers = [];
              let _Map = Map;
              let self = this;
              let self2 = this;
              map = new Map();
              closure_2 = userTrialOffers;
              closure_1 = userTrialOffers[Symbol.iterator]();
            }
          } else if (1 === tmp5) {
            c6 = 0;
            closure_1.return();
            throw closure_1_5;
          } else {
            if (2 === tmp5) {
              c6 = 1;
              let closure_5 = closure_1_5;
              obj2 = closure_132_1(closure_132_2[7]);
              let captureExceptionResult = obj2.captureException(closure_5);
              let result = map.set(c2, closure_132_9.FAIL);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_1.return();
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              tmp2 = value;
              fromServer = null;
              if (null != tmp2.body) {
                fromServer = closure_132_4.createFromServer(tmp2.body);
              }
              if (null != fromServer) {
                let arr = userTrialOffers.push(fromServer);
              }
              let result1 = map.set(c2, closure_132_9.SUCCESS);
              c6 = 1;
            }
            c6 = 0;
          }
          if (closure_1 === undefined) {
            let obj5 = closure_132_1(closure_132_2[6]);
            let obj6 = { type: "CREATE_REFERRALS_SUCCESS", userTrialOffers };
            let dispatchResult = obj5.dispatch(obj6);
            c8 = 3;
            let obj7 = { value: map, done: true };
            return obj7;
          } else {
            c2 = tmp41;
            c6 = 2;
            let HTTP = closure_132_0(closure_132_2[5]).HTTP;
            let obj8 = { url: closure_132_8.CREATE_REFERRAL(c2), oldFormErrors: true, rejectWithError: true };
            let post = HTTP.post;
            c7 = 3;
            c8 = 1;
            let obj9 = { value: post(obj8), done: false };
            return obj9;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _createReferralTrial() {
  obj = _asyncToGenerator(async (arg0) => {
    let c4;
    let c5;
    let c6;
    let closure_1;
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    let currentlySelectedChannelId = tmp;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.CREATE_REFERRAL(closure_0), oldFormErrors: true, rejectWithError: false };
    const post = HTTP.post;
    await post(obj4);
    const obj6 = closure_130_1(closure_130_2[6]);
    obj6.dispatch({ type: "BILLING_CREATE_REFERRAL_FAIL" });
    if (tmp44.body.code === closure_130_7.INVALID_MESSAGE_SEND_USER) {
      currentlySelectedChannelId = closure_130_6.getCurrentlySelectedChannelId();
      if (null != currentlySelectedChannelId) {
        const obj7 = closure_130_1(closure_130_2[8]);
        obj7.sendClydeError(currentlySelectedChannelId, tmp44.body.code);
      }
    }
    await "IconComponent";
    closure_0 = value;
    let fromServer = null;
    if (null != closure_0.body) {
      fromServer = closure_130_4.createFromServer(closure_0.body);
    }
    if (null != fromServer) {
      const obj9 = { type: "BILLING_CREATE_REFERRAL_SUCCESS", userTrialOffer: fromServer };
      obj = closure_130_1(closure_130_2[6]);
      obj.dispatch(obj9);
    }
    const obj10 = { userTrialOffer: fromServer };
    return obj10;
  });
  return obj(...arguments);
};
obj = function _resolveReferralTrialOffer() {
  obj = _asyncToGenerator(async (userTrialOfferId) => {
    let closure_2;
    let closure_3;
    let closure_4;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0) => {
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: constants.REFERRAL_OFFER_ID_RESOLVE(userTrialOfferId), oldFormErrors: true, rejectWithError: false };
      await get(obj4);
      const obj7 = { type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId };
      const obj5 = closure_131_1(closure_131_2[6]);
      obj5.dispatch(obj7);
      await "IconComponent";
      userTrialOffer = value;
      let fromServer = null;
      if (null != userTrialOffer.body) {
        fromServer = closure_131_4.createFromServer(userTrialOffer.body);
      }
      userTrialOffer = fromServer;
      const dispatch = closure_131_1(closure_131_2[6]).dispatch;
      closure_131_1(closure_131_2[6]);
      if (fromServer == null) {
        userTrialOffer = undefined;
      }
      obj = { type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer };
      dispatch(obj);
      return { userTrialOffer: fromServer };
    })();
  });
  return obj(...arguments);
};
({ AbortCodes: metroImportDefault, Endpoints: metroImportAll } = Constants);
obj = { SUCCESS: 1, [1]: "SUCCESS", FAIL: 2, [2]: "FAIL" };
class EligibleUserCache {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj.cache = new Map();
    new Map();
    obj.expiration = Date.now() + 600000;
    return obj;
  }
  set(arg0, arg1) {
    const cache = this.cache;
    const result = cache.set(arg0, arg1);
  }
  get(arg0) {
    this._checkExpiration();
    const cache = this.cache;
    return cache.get(arg0);
  }
  has(arg0) {
    this._checkExpiration();
    const cache = this.cache;
    return cache.has(arg0);
  }
  _checkExpiration() {
    if (this.expiration < Date.now()) {
      const cache = this.cache;
      cache.clear();
    }
  }
}
const prototype = EligibleUserCache.prototype;
let obj2 = Object.create(EligibleUserCache.prototype);
let map = new Map();
obj2.cache = map;
obj2.expiration = Date.now() + 600000;
let result = size.fileFinishedImporting("modules/premium/ReferralTrialActionCreators.tsx");

export const ReferralOfferStatus = { REDEEMED: 1, [1]: "REDEEMED", PENDING: 2, [2]: "PENDING", CONVERTED: 3, [3]: "CONVERTED", REFERRER_REWARD_GRANTED: 4, [4]: "REFERRER_REWARD_GRANTED" };
export const CreateReferralStatus = obj;
export const fetchReferralEligibleUsers = function fetchReferralEligibleUsers() {
  return obj(...arguments);
};
export const fetchReferralsRemaining = function fetchReferralsRemaining() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  obj2 = { url: metroImportAll.GET_REFERRALS_REMAINING, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj2);
  return value.then((body) => {
    map = new Map();
    if (null != body.body) {
      if (null != body.body.recipient_status) {
        for (const key10014 in body.body.recipient_status) {
          let result = map.set(key10014, body.body.recipient_status[key10014]);
          continue;
        }
      }
    }
    let num = 0;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (null != body.body) {
      num = 0;
      if (null != body.body.referrals_remaining) {
        num = body.body.referrals_remaining;
      }
    }
    obj = { type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS", referrals_remaining: num, sent_user_ids: null, refresh_at: null, recipient_status: null, has_eligible_friends: null, reminder_state_id: null };
    if (null != body.body) {
      if (null != body.body.sent_user_ids) {
        const sent_user_ids = body.body.sent_user_ids;
      }
      obj.sent_user_ids = [];
      body = body.body;
      let refresh_at;
      if (body != null) {
        refresh_at = body.refresh_at;
      }
      if (refresh_at == null) {
        refresh_at = null;
      }
      obj.refresh_at = refresh_at;
      obj.recipient_status = map;
      const body2 = body.body;
      let flag;
      if (body2 != null) {
        flag = body2.has_eligible_friends;
      }
      if (flag == null) {
        flag = false;
      }
      obj.has_eligible_friends = flag;
      const body3 = body.body;
      let reminder_state_id;
      if (body3 != null) {
        reminder_state_id = body3.reminder_state_id;
      }
      if (reminder_state_id == null) {
        reminder_state_id = null;
      }
      obj.reminder_state_id = reminder_state_id;
      dispatch(obj);
    }
  }, (status) => {
    status = undefined;
    if (status != null) {
      status = status.status;
    }
    if (404 !== status) {
      obj = DispatcherDefault;
      obj.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" });
    }
  });
};
export const createReferralTrials = function createReferralTrials() {
  return obj(...arguments);
};
export const createReferralTrial = function createReferralTrial() {
  return obj(...arguments);
};
export const resolveReferralTrialOffer = function resolveReferralTrialOffer() {
  return obj(...arguments);
};