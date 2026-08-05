// discord_app/modules/premium/ReferralTrialActionCreators.tsx
import dispatcher from "dispatcher";
import createdAt from "createdAt";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

let closure_6;
let error;
const require = arg1;
function _fetchReferralEligibleUsers() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, body) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              constants = 3;
              throw body;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let c5 = 0;
              let obj7 = tmp2;
              let json;
              body = undefined;
              let users;
              let next_index;
              obj7 = undefined;
              const _JSON = JSON;
              const obj1 = { index: null, searchQuery: null };
              obj1[0] = json;
              obj1[1] = body;
              json = JSON.stringify(obj1);
              if (outer1_9.has(json)) {
                constants = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = outer1_9.get(json);
                return obj2;
              } else {
                const HTTP = callback(table[4]).HTTP;
                const obj3 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
                obj3[0] = constants.GET_REFERRAL_ELIGIBLE_USERS;
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
                constants = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = HTTP.post(obj3);
                return obj5;
              }
              tmp28 = json;
              tmp29 = body;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw body;
          } else if (arg0 === 2) {
            constants = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            body = body.body;
            users = body.users;
            next_index = body.next_index;
            obj7 = { users: null, nextIndex: null };
            obj7[0] = users.map((arg0) => new obj7(arg0));
            obj7[1] = next_index;
            const result = closure_9.set(json, obj7);
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = obj7;
            return obj;
          }
        } catch (tmp12) {
          constants = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const _fetchReferralEligibleUsers = tmp;
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
    let closure_0 = arg0;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, body) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          c9 = 2;
          let tmp5 = constants;
          if (0 === constants) {
            if (arg0 === 1) {
              let num7 = 3;
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              let num6 = 3;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let handleConnectionOpen = tmp;
              let createdAt = tmp2;
              let tmp56 = arr;
              let store;
              let dependencyMap;
              let dispatcher;
              arr = [];
              let _Map = Map;
              let tmp57 = new.target;
              let tmp58 = new.target;
              let map = new Map();
              let tmp60 = map;
              store = map;
              dependencyMap = arr;
              let tmp61 = arr;
              dependencyMap = arr;
              store = arr[Symbol.iterator]();
            }
          } else if (1 === tmp5) {
            let tmp32 = closure_6;
            let tmp33 = closure_6;
            let c7 = 0;
            let tmp34 = store;
            store.return();
            throw closure_6;
          } else {
            if (2 === tmp5) {
              let tmp20 = createdAt;
              let tmp21 = handleConnectionOpen;
              let tmp22 = closure_6;
              let tmp23 = closure_6;
              c7 = 1;
              createdAt = closure_6;
              let tmp24 = store;
              let tmp25 = dependencyMap;
              let obj1 = store(1208);
              let tmp26 = createdAt;
              let captureExceptionResult = obj1.captureException(createdAt);
              let tmp28 = store;
              let tmp29 = dependencyMap;
              let tmp30 = constants;
              let result = store.set(dependencyMap, constants.FAIL);
            } else if (arg0 === 1) {
              let num3 = 3;
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 0;
              let tmp19 = store;
              store.return();
              let num2 = 3;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              body = body.body;
              dispatcher = body;
              if (body == null) {
                dispatcher = null;
              }
              let tmp6 = createdAt;
              let tmp7 = dispatcher;
              let tmp8 = dispatcher;
              if (null != dispatcher) {
                let tmp9 = createdAt;
                let tmp10 = arr;
                let tmp11 = dispatcher;
                arr = arr.push(dispatcher);
              }
              let tmp13 = createdAt;
              let tmp14 = handleConnectionOpen;
              let tmp15 = store;
              let tmp16 = dependencyMap;
              let tmp17 = constants;
              let result1 = store.set(dependencyMap, constants.SUCCESS);
              c7 = 1;
            }
            c7 = 0;
          }
          let tmp35 = dependencyMap;
          let tmp36 = store;
          if (store === undefined) {
            let tmp44 = createdAt;
            let tmp45 = handleConnectionOpen;
            let tmp46 = store;
            let tmp47 = dependencyMap;
            let obj4 = store(709);
            obj1 = { type: "CREATE_REFERRALS_SUCCESS", userTrialOffers: null };
            let tmp48 = arr;
            obj1[1] = arr;
            let dispatchResult = obj4.dispatch(obj1);
            let num5 = 3;
            c9 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = store;
            return obj2;
          } else {
            let tmp38 = createdAt;
            dependencyMap = tmp37;
            let tmp39 = handleConnectionOpen;
            c7 = 2;
            let tmp40 = arr;
            let tmp41 = dependencyMap;
            let HTTP = arr(530).HTTP;
            let obj3 = { url: null, oldFormErrors: true, rejectWithError: true };
            let tmp42 = c7;
            let tmp43 = dependencyMap;
            obj3[0] = c7.CREATE_REFERRAL(dependencyMap);
            constants = 3;
            let num4 = 1;
            c9 = 1;
            obj4 = { value: null, done: false };
            obj4[0] = HTTP.post(obj3);
            return obj4;
          }
        }
      }
    })();
  });
  const _createReferralTrials = tmp;
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
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      let dispatcher = tmp3;
      let currentlySelectedChannelId = 1;
      const HTTP = callback(outer1_2[4]).HTTP;
      const obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
      obj1[0] = c7.CREATE_REFERRAL(callback);
      yield HTTP.post(obj1);
      currentlySelectedChannelId = 0;
      let closure_2 = createdAt;
      let obj5 = callback2(closure_2[5]);
      obj5.dispatch({ type: "BILLING_CREATE_REFERRAL_FAIL" });
      if (closure_2.body.code === constants.INVALID_MESSAGE_SEND_USER) {
        callback2 = currentlySelectedChannelId.getCurrentlySelectedChannelId();
        if (null != callback2) {
          const obj6 = callback2(closure_2[7]);
          obj6.sendClydeError(callback2, closure_2.body.code);
        }
      }
      yield "HermesInternal";
      body = body.body;
      callback2 = body;
      if (body == null) {
        callback2 = null;
      }
      callback = callback2;
      const obj = callback2(closure_2[5]);
      const obj4 = { type: "BILLING_CREATE_REFERRAL_SUCCESS", userTrialOffer: null };
      obj4[1] = callback;
      obj.dispatch(obj4);
      obj5 = { userTrialOffer: null };
      obj5[0] = callback;
      currentlySelectedChannelId = 0;
      return obj5;
    })();
  });
  const _createReferralTrial = tmp;
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
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      let dispatcher = tmp3;
      let c5 = 1;
      const HTTP = callback(outer1_2[4]).HTTP;
      const obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
      obj1[0] = c7.REFERRAL_OFFER_ID_RESOLVE(callback);
      yield HTTP.get(obj1);
      c5 = 0;
      let obj5 = callback2(709);
      const obj3 = { type: "BILLING_REFERRAL_RESOLVE_FAIL", userTrialOfferId: null };
      obj3[1] = callback;
      obj5.dispatch(obj3);
      yield "HermesInternal";
      body = body.body;
      callback2 = body;
      if (body == null) {
        callback2 = null;
      }
      const obj = callback2(709);
      obj5 = { type: "BILLING_REFERRAL_RESOLVE_SUCCESS", userTrialOffer: null };
      obj5[1] = callback2;
      obj.dispatch(obj5);
      const obj6 = { userTrialOffer: null };
      obj6[0] = callback2;
      c5 = 0;
      return obj6;
    })();
  });
  const _resolveReferralTrialOffer = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AbortCodes: closure_6, Endpoints: error } = ME);
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
let result = require("handleConnectionOpen").fileFinishedImporting("modules/premium/ReferralTrialActionCreators.tsx");

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
  let obj = dispatcher;
  obj.dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_START" });
  const HTTP = sendRequest.HTTP;
  obj = { url: constants.GET_REFERRALS_REMAINING, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((body) => {
    const map = new Map();
    if (null != body.body) {
      if (null != body.body.recipient_status) {
        for (const key10014 in arg0.body.recipient_status) {
          let tmp4 = key10014;
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
    const obj = { type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS", referrals_remaining: num, sent_user_ids: null, refresh_at: null, recipient_status: null, has_eligible_friends: null, reminder_state_id: null };
    if (null != body.body) {
      if (null != body.body.sent_user_ids) {
        const sent_user_ids = body.body.sent_user_ids;
      }
      obj[2] = [];
      body = body.body;
      let refresh_at;
      if (body != null) {
        refresh_at = body.refresh_at;
      }
      if (refresh_at == null) {
        refresh_at = null;
      }
      obj[3] = refresh_at;
      obj[4] = map;
      const body2 = body.body;
      let flag;
      if (body2 != null) {
        flag = body2.has_eligible_friends;
      }
      if (flag == null) {
        flag = false;
      }
      obj[5] = flag;
      const body3 = body.body;
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
  }, (status) => {
    status = undefined;
    if (status != null) {
      status = status.status;
    }
    if (404 !== status) {
      callback(709).dispatch({ type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL" });
      const obj = callback(709);
    }
  });
};
export const createReferralTrials = function createReferralTrials(closure_0) {
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