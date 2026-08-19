// === Module 7424: _fetchReferralEligibleUsers ===

// Module 7424 (_fetchReferralEligibleUsers)
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import createFromServer from "createFromServer" /* 7425 */;
import createdAt from "createdAt" /* 1930 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import ME from "ME" /* 676 */;

require = fn;
function _fetchReferralEligibleUsers() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              c5 = 0;
              let obj7 = tmp2;
              let json;
              body = undefined;
              let users;
              let next_index;
              obj7 = undefined;
              const _JSON = JSON;
              obj1 = { index: null, searchQuery: null };
              obj1[0] = json;
              obj1[1] = body;
              json = JSON.stringify(obj1);
              if (closure_1_10.has(json)) {
                c7 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = closure_1_10.get(json);
                return obj2;
              } else {
                const HTTP = callback(table[5]).HTTP;
                const obj3 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
                obj3[0] = closure_1_8.GET_REFERRAL_ELIGIBLE_USERS;
                const obj4 = { index: null, limit: null, search_query: null };
                obj4[0] = tmp28;
                next_index = tmp30;
                if (tmp30 == null) {
                  next_index = 10;
                }
                obj4[1] = next_index;
                obj4[2] = tmp29;
                obj3[1] = obj4;
                c6 = 1;
                c7 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = HTTP.post(obj3);
                return obj5;
              }
              tmp28 = json;
              tmp29 = body;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            body = body.body;
            users = body.users;
            next_index = body.next_index;
            obj7 = { users: null, nextIndex: null };
            obj7[0] = users.map((item, index) => new c5(item));
            obj7[1] = next_index;
            const result = closure_10.set(json, obj7);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = obj7;
            return obj;
          }
        } catch (tmp12) {
          c7 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createReferralTrials() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c8 = 2;
          let tmp5 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = undefined;
              let fromServer;
              let arr = [];
              let _Map = Map;
              let map = new Map();
              dependencyMap = arr;
              let store = arr[Symbol.iterator]();
            }
          } else if (1 === tmp5) {
            c6 = 0;
            store.return();
            throw closure_5;
          } else {
            if (2 === tmp5) {
              c6 = 1;
              obj1 = store(1208);
              let captureExceptionResult = obj1.captureException(closure_5);
              let result = store.set(dependencyMap, constants.FAIL);
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              store.return();
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = arg1;
              fromServer = null;
              if (null != closure_3.body) {
                fromServer = fromServer.createFromServer(closure_3.body);
              }
              if (null != fromServer) {
                arr = arr.push(fromServer);
              }
              let result1 = store.set(dependencyMap, constants.SUCCESS);
              c6 = 1;
            }
            c6 = 0;
          }
          if (store === undefined) {
            let obj4 = store(709);
            obj1 = { type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: null };
            obj1[1] = arr;
            let dispatchResult = obj4.dispatch(obj1);
            c8 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = store;
            return obj2;
          } else {
            dependencyMap = tmp41;
            c6 = 2;
            let HTTP = arr(530).HTTP;
            let obj3 = { url: null, oldFormErrors: true, rejectWithError: true };
            obj3[0] = c8.CREATE_REFERRAL(dependencyMap);
            c7 = 3;
            c8 = 1;
            obj4 = { value: null, done: false };
            obj4[0] = HTTP.post(obj3);
            return obj4;
          }
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createReferralTrial() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      const HTTP = lib(closure_1_2[5]).HTTP;
      obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
      obj1[0] = closure_1_8.CREATE_REFERRAL(lib);
      yield HTTP.post(obj1);
      c4 = 0;
      let obj5 = fromServer(709);
      obj5.dispatch({ type: "BILLING_CREATE_REFERRAL_FAIL" });
      if (closure_3.body.code === constants.INVALID_MESSAGE_SEND_USER) {
        dependencyMap = currentlySelectedChannelId.getCurrentlySelectedChannelId();
        if (null != dependencyMap) {
          const obj6 = fromServer(7427);
          obj6.sendClydeError(dependencyMap, closure_3.body.code);
        }
      }
      lib = yield "HermesInternal";
      fromServer = null;
      if (null != lib.body) {
        fromServer = c4.createFromServer(lib.body);
      }
      if (null != fromServer) {
        obj = fromServer(709);
        const obj4 = { type: "BILLING_CREATE_REFERRAL_SUCCESS", userTrialOffer: null };
        obj4[1] = fromServer;
        obj.dispatch(obj4);
      }
      obj5 = { userTrialOffer: null };
      obj5[0] = fromServer;
      c4 = 0;
      return obj5;
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resolveReferralTrialOffer() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
      closure_3 = tmp3;
      const HTTP = callback(closure_1_2[5]).HTTP;
      obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
      obj1[0] = closure_1_8.REFERRAL_OFFER_ID_RESOLVE(callback);
      yield HTTP.get(obj1);
      c5 = 0;
      let obj5 = lib(fromServer[6]);
      const obj3 = { type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId: null };
      obj3[1] = callback;
      obj5.dispatch(obj3);
      lib = yield "HermesInternal";
      fromServer = null;
      if (null != lib.body) {
        fromServer = closure_4.createFromServer(lib.body);
      }
      obj = lib(fromServer[6]);
      lib = fromServer;
      if (fromServer == null) {
        lib = undefined;
      }
      obj5 = { type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer: null };
      obj5[1] = lib;
      obj.dispatch(obj5);
      const obj6 = { userTrialOffer: null };
      obj6[0] = fromServer;
      c5 = 0;
      return obj6;
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AbortCodes: error, Endpoints: closure_8 } = ME);
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
let map = new Map();
let result = require("obj132").fileFinishedImporting("modules/premium/ReferralTrialActionCreators.tsx");

export const ReferralOfferStatus = { REDEEMED: 1, [1]: "REDEEMED", PENDING: 2, [2]: "PENDING", CONVERTED: 3, [3]: "CONVERTED" };
export const CreateReferralStatus = obj;
export const fetchReferralEligibleUsers = function fetchReferralEligibleUsers(closure_0, closure_02, closure_1) {
  const self = this;
  const apply = _fetchReferralEligibleUsers.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchReferralsRemaining = function fetchReferralsRemaining() {
  obj = dispatcherDefault;
  obj.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" });
  const HTTP = sendRequest.HTTP;
  obj = { url: constants.GET_REFERRALS_REMAINING, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((result) => {
    const map = new Map();
    if (null != result.body) {
      if (null != result.body.recipient_status) {
        for (const key10014 in arg0.body.recipient_status) {
          result = map.set(key10014, arg0.body.recipient_status[key10014]);
          continue;
        }
      }
    }
    let num = 0;
    if (null != result.body) {
      num = 0;
      if (null != result.body.referrals_remaining) {
        num = result.body.referrals_remaining;
      }
    }
    obj = { type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS", referrals_remaining: num, sent_user_ids: null, refresh_at: null, recipient_status: null, has_eligible_friends: null, reminder_state_id: null };
    if (null != result.body) {
      if (null != result.body.sent_user_ids) {
        const sent_user_ids = result.body.sent_user_ids;
      }
      obj[2] = [];
      const body = result.body;
      let refresh_at;
      if (body != null) {
        refresh_at = body.refresh_at;
      }
      if (refresh_at == null) {
        refresh_at = null;
      }
      obj[3] = refresh_at;
      obj[4] = map;
      const body2 = result.body;
      let flag;
      if (body2 != null) {
        flag = body2.has_eligible_friends;
      }
      if (flag == null) {
        flag = false;
      }
      obj[5] = flag;
      const body3 = result.body;
      let reminder_state_id;
      if (body3 != null) {
        reminder_state_id = body3.reminder_state_id;
      }
      if (reminder_state_id == null) {
        reminder_state_id = null;
      }
      obj[6] = reminder_state_id;
      obj2.dispatch(obj);
    }
    obj2 = callback(709);
  }, (status) => {
    status = undefined;
    if (status != null) {
      status = status.status;
    }
    if (404 !== status) {
      callback(709).dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" });
      obj = callback(709);
    }
  });
};
export const createReferralTrials = function createReferralTrials(arg0) {
  const self = this;
  const apply = _createReferralTrials.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createReferralTrial = function createReferralTrial() {
  const self = this;
  const apply = _createReferralTrial.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resolveReferralTrialOffer = function resolveReferralTrialOffer(content) {
  const self = this;
  const apply = _resolveReferralTrialOffer.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};