// discord_app/modules/premium/UserOfferActionCreators.tsx
import set from "set";
import createFromServer from "createFromServer";
import closure_5 from "createFromServer";
import { PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID as closure_6 } from "GuildFeatures";
import ME from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
function _fetchUserOffer() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let set = arg3;
    let createFromServer = arg4;
    let c11 = 0;
    let c12 = 0;
    let c10 = 0;
    const iter = (function*(arg0) {
      if (c12 === 2) {
        c12 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c12 = 2;
            if (0 === discount_id) {
              if (arg0 === 1) {
                c12 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c12 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let obj4 = tmp3;
                let constants = tmp7;
                let flag;
                let obj1;
                let retries;
                let createFromServer;
                throwTypeErrorResult = callback;
                if (flag === undefined) {
                  flag = true;
                }
                if (obj1 === undefined) {
                  obj1 = { offerId: "r", paymentGatewayOverride: "accessibilityRole" };
                }
                throwTypeErrorResult = retries;
                throwTypeErrorResult = createFromServer;
                let offerId;
                let c6;
                constants = undefined;
                obj4 = undefined;
                let closure_9;
                let trial_id;
                discount_id = undefined;
                c12 = undefined;
                let error;
                discount_id = 1;
                c12 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                c12 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c12 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                throwTypeErrorResult = constants;
                throwTypeErrorResult = flag;
                if (flag) {
                  let obj10 = flag(obj1[6]);
                  obj10.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
                  trial_id = 1;
                  if (null != callback) {
                    let obj11 = flag(obj1[7]);
                    let obj3 = { call_location: null };
                    obj3[0] = callback;
                    obj11.track(constants.FETCH_USER_OFFER_STARTED, obj3);
                  }
                  offerId = obj1.offerId;
                  c6 = obj1.paymentGatewayOverride;
                  if (undefined !== c6) {
                    throwTypeErrorResult = constants;
                    let tmp99 = outer1_6;
                  } else {
                    tmp99 = (function getPaymentGateway() {
                      if (obj.isAndroid()) {
                        let GOOGLE = constants.GOOGLE;
                      } else {
                        GOOGLE = null;
                        if (tmpResult.isIOS()) {
                          GOOGLE = constants.APPLE;
                        }
                        tmpResult = callback(obj1[5]);
                      }
                      return GOOGLE;
                    })();
                  }
                  throwTypeErrorResult = constants;
                  const outer1_7 = tmp99;
                  throwTypeErrorResult = outer1_7;
                  if (null == outer1_7) {
                    throwTypeErrorResult = constants;
                    throwTypeErrorResult = outer1_5;
                    if (null == outer1_5) {
                      obj4 = {};
                    }
                    throwTypeErrorResult = constants;
                    throwTypeErrorResult = obj4;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = obj1;
                    const HTTP = callback(obj1[8]).HTTP;
                    let obj5 = { url: null, body: null, rejectWithError: true, retries: null };
                    throwTypeErrorResult = obj4;
                    obj5[0] = obj4.USER_OFFER;
                    throwTypeErrorResult = obj4;
                    obj5[1] = obj4;
                    throwTypeErrorResult = retries;
                    throwTypeErrorResult = undefined;
                    if (null != retries) {
                      throwTypeErrorResult = constants;
                      throwTypeErrorResult = retries;
                      throwTypeErrorResult = retries.retries;
                    }
                    obj5[3] = throwTypeErrorResult;
                    discount_id = 3;
                    c12 = 1;
                    const obj6 = { value: null, done: false };
                    obj6[0] = HTTP.post(obj5);
                    return obj6;
                  }
                  throwTypeErrorResult = constants;
                  const obj7 = { payment_gateway: null, offer_id: null };
                  throwTypeErrorResult = constants;
                  obj7[0] = constants;
                  throwTypeErrorResult = offerId;
                  obj7[1] = offerId;
                  obj4 = obj7;
                } else {
                  c12 = 3;
                  return { value: false, done: true };
                }
              }
            } else if (2 === tmp7) {
              trial_id = 0;
              let obj9 = flag(obj1[6]);
              obj9.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
              c12 = 3;
              return { value: false, done: true };
            } else if (arg0 === 1) {
              c12 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              trial_id = 0;
              c12 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              throwTypeErrorResult = constants;
              closure_9 = arg1;
              throwTypeErrorResult = closure_9;
              const user_trial_offer = closure_9.body.user_trial_offer;
              offerId = user_trial_offer;
              if (user_trial_offer == null) {
                offerId = null;
              }
              trial_id = offerId;
              const user_discount_offer = closure_9.body.user_discount_offer;
              c6 = user_discount_offer;
              if (user_discount_offer == null) {
                c6 = null;
              }
              discount_id = c6;
              trial_id = undefined;
              if (trial_id != null) {
                trial_id = trial_id.trial_id;
              }
              let tmp16 = trial_id === c6;
              if (tmp16) {
                obj = callback(obj1[9]);
                tmp16 = !obj.isAndroidTwoWeekTrialsExperimentEnabled({ location: "user_offer_action_creators" });
              }
              c12 = tmp16;
              if (null != offerId) {
                if (null != discount_id) {
                  if (discount_id.discount_id !== offerId) {
                    const _Error = Error;
                    error = new Error("Returned user discount offer does not match offer ID request parameter");
                    obj5 = flag(obj1[10]);
                    obj9 = { extra: null };
                    obj10 = { offer_id: null, user_discount_offer: null };
                    obj10[0] = offerId;
                    obj10[1] = discount_id;
                    obj9[0] = obj10;
                    const merged = Object.assign(createFromServer);
                    obj5.captureException(error, obj9);
                    throw error;
                  }
                }
              }
              let result = null == trial_id;
              if (result) {
                obj1 = callback(obj1[11]);
                result = obj1.UNSAFE_isDismissibleContentDismissed(callback(obj1[12]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
              }
              if (result) {
                obj2 = callback(obj1[13]);
                const result1 = obj2.removeDismissedContent(callback(obj1[12]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
              }
              obj3 = flag(obj1[6]);
              let fromServer = null;
              if (!c12) {
                fromServer = null;
                if (null != trial_id) {
                  fromServer = offerId.createFromServer(trial_id);
                }
              }
              obj11 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userTrialOffer: null, userDiscountOffer: null };
              obj11[1] = fromServer;
              let fromServer1 = null;
              if (null != discount_id) {
                fromServer1 = createFromServer.createFromServer(discount_id);
              }
              obj11[2] = fromServer1;
              obj3.dispatch(obj11);
              trial_id = 0;
              c12 = 3;
              return { value: true, done: true };
            }
          } catch (throwTypeErrorResult) {
            closure_9 = throwTypeErrorResult;
            throwTypeErrorResult = trial_id;
            if (tmp4 === trial_id) {
              throwTypeErrorResult = tmp2;
              c12 = tmp2;
              throw throwTypeErrorResult;
            } else {
              discount_id = throwTypeErrorResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fetchUserOffer = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchExistingChurnDiscountOffer() {
  const self = this;
  const tmp = callback(function*() {
    const dependencyMap = tmp3;
    outer1_1(outer1_2[6]).dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    let c4 = 1;
    const HTTP = outer1_0(outer1_2[8]).HTTP;
    const obj1 = { url: null, rejectWithError: true };
    obj1[0] = outer1_8.CHURN_USER_OFFER;
    yield HTTP.get(obj1);
    c4 = 0;
    let obj5 = fromServer(709);
    obj5.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    yield "HermesInternal";
    const offer = arg1.body.offer;
    let closure_0 = offer;
    if (offer == null) {
      closure_0 = null;
    }
    fromServer = null;
    if (null != closure_0) {
      fromServer = c4.createFromServer(closure_0);
    }
    const obj = fromServer(709);
    const obj4 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: null };
    obj4[1] = fromServer;
    obj.dispatch(obj4);
    obj5 = { userDiscountOffer: null };
    obj5[0] = fromServer;
    c4 = 0;
    return obj5;
  });
  const _fetchExistingChurnDiscountOffer = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchChurnDiscountOffer() {
  const self = this;
  const tmp = callback(function*() {
    const table = tmp3;
    let closure_0 = null;
    let c4 = 1;
    const HTTP = outer1_0(outer1_2[8]).HTTP;
    const obj1 = { url: null, rejectWithError: true };
    obj1[0] = outer1_8.CHURN_USER_OFFER;
    yield HTTP.post(obj1);
    if (1 === tmp7) {
      c4 = 0;
      let c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const offer = arg1.body.offer;
      closure_0 = offer;
      if (offer == null) {
        closure_0 = null;
      }
      const callback = closure_0;
      if (null != callback) {
        closure_0 = c4.createFromServer(callback);
        const obj = callback(table[6]);
        const obj3 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: null };
        obj3[1] = closure_0;
        obj.dispatch(obj3);
      }
      c4 = 0;
    }
    c4 = 0;
    return arg1;
  });
  const _fetchChurnDiscountOffer = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: error, Endpoints: metroImportAll, PaymentGateways: c9 } = ME);
let result = require("createFromServer").fileFinishedImporting("modules/premium/UserOfferActionCreators.tsx");

export const fetchUserOffer = function fetchUserOffer(MobilePremiumOfferManager, arg1, arg2) {
  const self = this;
  const apply = _fetchUserOffer.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchExistingChurnDiscountOffer = function fetchExistingChurnDiscountOffer() {
  const self = this;
  const apply = _fetchExistingChurnDiscountOffer.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchChurnDiscountOffer = function fetchChurnDiscountOffer() {
  const self = this;
  const apply = _fetchChurnDiscountOffer.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const acknowledgeUserOffer = function acknowledgeUserOffer(expiresAt, hasAcknowledged) {
  let id;
  if (null != expiresAt) {
    if (null == expiresAt.expiresAt) {
      id = expiresAt.id;
    }
  }
  let id1;
  if (null != hasAcknowledged) {
    if (!hasAcknowledged.hasAcknowledged()) {
      id1 = hasAcknowledged.id;
    }
  }
  const HTTP = sendRequest.HTTP;
  let obj = { url: constants.USER_OFFER_ACKNOWLEDGED, body: { user_trial_offer_id: id, user_discount_offer_id: id1 }, oldFormErrors: true, rejectWithError: false };
  const postResult = HTTP.post({ url: constants.USER_OFFER_ACKNOWLEDGED, body: { user_trial_offer_id: id, user_discount_offer_id: id1 }, oldFormErrors: true, rejectWithError: false });
  return HTTP.post({ url: constants.USER_OFFER_ACKNOWLEDGED, body: { user_trial_offer_id: id, user_discount_offer_id: id1 }, oldFormErrors: true, rejectWithError: false }).then((body) => {
    let user_discount = body.body.user_discount;
    if (user_discount == null) {
      user_discount = null;
    }
    let user_discount_offer = body.body.user_discount_offer;
    if (user_discount_offer == null) {
      user_discount_offer = null;
    }
    let user_trial_offer = body.body.user_trial_offer;
    if (user_trial_offer == null) {
      user_trial_offer = null;
    }
    let obj = callback(709);
    let fromServer = null;
    if (null != user_trial_offer) {
      fromServer = closure_5.createFromServer(user_trial_offer);
    }
    obj = { type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: fromServer, userDiscount: null, userDiscountOffer: null };
    let fromServer1 = null;
    if (null != user_discount) {
      fromServer1 = createFromServer.createFromServer(user_discount);
    }
    obj[2] = fromServer1;
    let fromServer2 = null;
    if (null != user_discount_offer) {
      fromServer2 = createFromServer.createFromServer(user_discount_offer);
    }
    obj[3] = fromServer2;
    obj.dispatch(obj);
  }).catch((status) => {
    if (404 === status.status) {
      callback(709).dispatch({ type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null, userDiscount: null, userDiscountOffer: null });
      const obj = callback(709);
    }
  });
};