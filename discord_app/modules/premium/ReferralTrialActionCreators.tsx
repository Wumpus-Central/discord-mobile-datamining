// === Module 7453: ReferralTrialActionCreators ===

// Module 7453 (ReferralTrialActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserTrialOfferRecord from "UserTrialOfferRecord" /* 7454 */;
import UserRecord from "UserRecord" /* 1385 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
let closure_11 = async function _fetchReferralEligibleUsers(index, searchQuery, arg2) {
  closure_2 = arg2;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value, arg2) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 0;
            closure_4 = tmp2;
            closure_132_0 = undefined;
            let body;
            let users;
            let next_index;
            closure_132_4 = undefined;
            const _JSON = JSON;
            const obj1 = { index, searchQuery };
            const json = JSON.stringify(obj1);
            closure_132_0 = json;
            if (map.has(json)) {
              c7 = 3;
              const obj2 = { value: map.get(json), done: true };
              return obj2;
            } else {
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.GET_REFERRAL_ELIGIBLE_USERS, body: null, oldFormErrors: true, rejectWithError: false };
              const obj3 = { index: tmp27, limit: null, search_query: null };
              limit = tmp29;
              if (tmp29 == null) {
                limit = 10;
              }
              obj3.limit = limit;
              obj3.search_query = tmp28;
              request.body = obj3;
              c6 = 1;
              c7 = 1;
              const obj4 = { value: HTTP.post(request), done: false };
              return obj4;
            }
            tmp27 = index;
            tmp28 = searchQuery;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          body = value.body;
          users = body.users;
          next_index = body.next_index;
          const obj6 = { users: users.map((item) => new closure_1_5(item)), nextIndex: next_index };
          closure_132_4 = obj6;
          const result = closure_133_10.set(closure_132_0, closure_132_4);
          c7 = 3;
          obj = { value: closure_132_4, done: true };
          return obj;
        }
      } catch (tmp12) {
        c7 = tmp;
        throw tmp12;
      }
    }
  })();
};
let closure_12 = async function _createReferralTrials(arg0) {
  dependencyMap = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c8 = 2;
        let tmp5 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp;
            closure_3 = tmp2;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_0 = [];
            let _Map = Map;
            let tmp62 = new.target;
            let tmp63 = new.target;
            let map = new Map();
            closure_131_1 = map;
            closure_2 = dependencyMap;
            closure_1 = dependencyMap[Symbol.iterator]();
          }
        } else if (1 === tmp5) {
          c6 = 0;
          closure_1.return();
          throw closure_1_5;
        } else {
          if (2 === tmp5) {
            c6 = 1;
            closure_131_5 = closure_1_5;
            let obj1 = closure_132_1(closure_132_2[7]);
            let captureExceptionResult = obj1.captureException(closure_131_5);
            let result = closure_131_1.set(closure_131_2, closure_132_9.FAIL);
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
            closure_131_3 = value;
            let fromServer = null;
            if (null != closure_131_3.body) {
              fromServer = closure_132_4.createFromServer(closure_131_3.body);
            }
            closure_131_4 = fromServer;
            if (null != closure_131_4) {
              let arr = closure_131_0.push(closure_131_4);
            }
            let result1 = closure_131_1.set(closure_131_2, closure_132_9.SUCCESS);
            c6 = 1;
          }
          c6 = 0;
        }
        if (closure_1 === undefined) {
          let obj4 = closure_132_1(closure_132_2[6]);
          obj1 = { type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: null };
          obj1.userTrialOffers = closure_131_0;
          let dispatchResult = obj4.dispatch(obj1);
          c8 = 3;
          let obj2 = { value: closure_131_1, done: true };
          return obj2;
        } else {
          closure_131_2 = tmp41;
          c6 = 2;
          let HTTP = closure_132_0(closure_132_2[5]).HTTP;
          let obj3 = { url: null, oldFormErrors: true, rejectWithError: true };
          obj3.url = closure_132_8.CREATE_REFERRAL(closure_131_2);
          c7 = 3;
          c8 = 1;
          obj4 = { value: HTTP.post(obj3), done: false };
          return obj4;
        }
      }
    }
  })();
};
let closure_13 = async function _createReferralTrial() {
  closure_2 = tmp3;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: constants.CREATE_REFERRAL(closure_0), oldFormErrors: true, rejectWithError: false });
  closure_129_3 = closure_3;
  let obj5 = closure_130_1(closure_130_2[6]);
  obj5.dispatch({ type: "BILLING_CREATE_REFERRAL_FAIL" });
  if (closure_129_3.body.code === closure_130_7.INVALID_MESSAGE_SEND_USER) {
    const currentlySelectedChannelId = closure_130_6.getCurrentlySelectedChannelId();
    if (null != currentlySelectedChannelId) {
      closure_130_1(closure_130_2[8]).sendClydeError(currentlySelectedChannelId, closure_129_3.body.code);
      closure_130_1(closure_130_2[8]);
    }
  }
  closure_129_0 = await "HermesInternal";
  let fromServer = null;
  if (null != closure_129_0.body) {
    fromServer = closure_130_4.createFromServer(closure_129_0.body);
  }
  closure_129_1 = fromServer;
  if (null != closure_129_1) {
    closure_130_1(closure_130_2[6]).dispatch({ type: "BILLING_CREATE_REFERRAL_SUCCESS", userTrialOffer: closure_129_1 });
    closure_130_1(closure_130_2[6]);
  }
  obj5 = { userTrialOffer: closure_129_1 };
  return obj5;
};
let closure_14 = async function _resolveReferralTrialOffer() {
  closure_3 = tmp3;
  closure_130_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.REFERRAL_OFFER_ID_RESOLVE(closure_0), oldFormErrors: true, rejectWithError: false });
  let obj5 = closure_131_1(closure_131_2[6]);
  obj5.dispatch({ type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId: closure_130_0 });
  closure_130_1 = await "HermesInternal";
  let fromServer = null;
  if (null != closure_130_1.body) {
    fromServer = closure_131_4.createFromServer(closure_130_1.body);
  }
  closure_130_2 = fromServer;
  { url: constants.REFERRAL_OFFER_ID_RESOLVE(closure_0), oldFormErrors: true, rejectWithError: false };
  let userTrialOffer = closure_130_2;
  if (closure_130_2 == null) {
    userTrialOffer = undefined;
  }
  obj5 = { type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer };
  closure_131_1(closure_131_2[6]).dispatch(obj5);
  return { userTrialOffer: closure_130_2 };
};
const Constants = fn(1074);
({ AbortCodes: closure_7, Endpoints: closure_8 } = Constants);
let obj = { SUCCESS: 1, [1]: "SUCCESS", FAIL: 2, [2]: "FAIL" };
class EligibleUserCache {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj.cache = map;
    obj.expiration = Date.now() + 600000;
    return obj;
  }
}
const prototype = EligibleUserCache.prototype;
prototype["set"] = function set(arg0, arg1) {
  const cache = this.cache;
  const result = cache.set(arg0, arg1);
};
prototype["get"] = function get(arg0) {
  this._checkExpiration();
  const cache = this.cache;
  return cache.get(arg0);
};
prototype["has"] = function has(arg0) {
  this._checkExpiration();
  const cache = this.cache;
  return cache.has(arg0);
};
prototype["_checkExpiration"] = function _checkExpiration() {
  if (this.expiration < Date.now()) {
    const cache = this.cache;
    cache.clear();
  }
};
obj = Object.create(EligibleUserCache.prototype);
obj.cache = new Map();
obj.expiration = Date.now() + 600000;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/ReferralTrialActionCreators.tsx");

export const ReferralOfferStatus = { REDEEMED: 1, [1]: "REDEEMED", PENDING: 2, [2]: "PENDING", CONVERTED: 3, [3]: "CONVERTED", REFERRER_REWARD_GRANTED: 4, [4]: "REFERRER_REWARD_GRANTED" };
export const CreateReferralStatus = obj;
export const fetchReferralEligibleUsers = function fetchReferralEligibleUsers() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchReferralsRemaining = function fetchReferralsRemaining() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  obj = { url: constants.GET_REFERRALS_REMAINING, oldFormErrors: true, rejectWithError: false };
  value = HTTP.get(obj);
  return value.then((body) => {
    const map = new Map();
    if (null != body.body) {
      if (null != body.body.recipient_status) {
        for (const key10014 in arg0.body.recipient_status) {
          let result = map.set(key10014, arg0.body.recipient_status[key10014]);
          continue;
        }
      }
    }
    let num = 0;
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
      obj2.dispatch(obj);
    }
  }, (status) => {
    status = undefined;
    if (status != null) {
      status = status.status;
    }
    if (404 !== status) {
      DispatcherDefault.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" });
    }
  });
};
export const createReferralTrials = function createReferralTrials() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createReferralTrial = function createReferralTrial() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resolveReferralTrialOffer = function resolveReferralTrialOffer() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};