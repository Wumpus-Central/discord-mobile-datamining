// === Module 7917: getPaymentGateway ===

// Module 7917 (getPaymentGateway)
import set from "set" /* 500 */;
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createFromServer" /* 7918 */;
import closure_5 from "createFromServer" /* 7146 */;
import closure_6 from "emitChanges" /* 7142 */;
import { PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID as closure_7 } from "GuildFeatures" /* 1925 */;
import ME from "ME" /* 676 */;

require = arg1;
function getPaymentGateway() {
  if (obj.isAndroid()) {
    let GOOGLE = constants2.GOOGLE;
  } else {
    GOOGLE = null;
    if (tmpResult.isIOS()) {
      GOOGLE = constants2.APPLE;
    }
    tmpResult = set;
  }
  return GOOGLE;
}
function _fetchUserOffer() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c12 = 0;
    c13 = 0;
    c11 = 0;
    const iter = (function*(arg0) {
      if (c13 === 2) {
        c13 = 3;
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
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c13 = 2;
            if (0 === c12) {
              if (arg0 === 1) {
                c13 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c13 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_9 = tmp3;
                let obj4 = tmp7;
                let flag;
                obj1 = undefined;
                let retries;
                closure_4 = undefined;
                throwTypeErrorResult = callback;
                if (flag === undefined) {
                  flag = true;
                }
                if (obj1 === undefined) {
                  obj1 = { offerId: "Array", paymentGatewayOverride: "ct" };
                }
                throwTypeErrorResult = retries;
                throwTypeErrorResult = closure_4;
                let offerId;
                c6 = undefined;
                c7 = undefined;
                obj4 = undefined;
                closure_9 = undefined;
                let trial_id;
                let v0;
                c12 = undefined;
                c13 = undefined;
                c12 = 1;
                c13 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                c13 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c13 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                throwTypeErrorResult = obj4;
                throwTypeErrorResult = flag;
                if (flag) {
                  let obj10 = flag(obj1[7]);
                  obj10.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
                  v0 = 1;
                  if (null != callback) {
                    let obj11 = flag(obj1[8]);
                    let obj3 = { call_location: null };
                    obj3[0] = callback;
                    obj11.track(obj4.FETCH_USER_OFFER_STARTED, obj3);
                  }
                  offerId = obj1.offerId;
                  c6 = obj1.paymentGatewayOverride;
                  throwTypeErrorResult = c6;
                  if (undefined !== c6) {
                    throwTypeErrorResult = obj4;
                    throwTypeErrorResult = c6;
                  } else {
                    throwTypeErrorResult = closure_9;
                    throwTypeErrorResult = v0;
                    throwTypeErrorResult = v0();
                  }
                  throwTypeErrorResult = obj4;
                  c7 = throwTypeErrorResult;
                  throwTypeErrorResult = c7;
                  if (null == c7) {
                    throwTypeErrorResult = obj4;
                    throwTypeErrorResult = offerId;
                    if (null == offerId) {
                      obj4 = { allow_triggers: false };
                    }
                    throwTypeErrorResult = obj4;
                    throwTypeErrorResult = closure_9;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = obj1;
                    const HTTP = callback(obj1[9]).HTTP;
                    let obj5 = { url: null, body: null, rejectWithError: true, retries: null };
                    throwTypeErrorResult = closure_9;
                    obj5[0] = closure_9.USER_OFFER;
                    throwTypeErrorResult = obj4;
                    obj5[1] = obj4;
                    throwTypeErrorResult = retries;
                    throwTypeErrorResult = undefined;
                    if (null != retries) {
                      throwTypeErrorResult = obj4;
                      throwTypeErrorResult = retries;
                      throwTypeErrorResult = retries.retries;
                    }
                    obj5[3] = throwTypeErrorResult;
                    c12 = 3;
                    c13 = 1;
                    const obj6 = { value: null, done: false };
                    obj6[0] = HTTP.post(obj5);
                    return obj6;
                  }
                  throwTypeErrorResult = obj4;
                  const obj7 = { payment_gateway: null, offer_id: null, allow_triggers: false };
                  throwTypeErrorResult = c7;
                  obj7[0] = c7;
                  throwTypeErrorResult = offerId;
                  obj7[1] = offerId;
                  obj4 = obj7;
                } else {
                  c13 = 3;
                  return { value: false, done: true };
                }
              }
            } else if (2 === tmp7) {
              v0 = 0;
              let obj9 = flag(obj1[7]);
              obj9.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
              c13 = 3;
              return { value: false, done: true };
            } else if (arg0 === 1) {
              c13 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              c13 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              throwTypeErrorResult = obj4;
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
              v0 = c6;
              trial_id = undefined;
              if (trial_id != null) {
                trial_id = trial_id.trial_id;
              }
              let tmp16 = trial_id === c7;
              if (tmp16) {
                obj = callback(obj1[10]);
                tmp16 = !obj.isTwoWeekTrialOfferIngestAllowed({ location: "user_offer_action_creators" });
              }
              c12 = tmp16;
              if (null != offerId) {
                if (null != v0) {
                  if (v0.discount_id !== offerId) {
                    const _Error = Error;
                    error = new Error("Returned user discount offer does not match offer ID request parameter");
                    c13 = error;
                    obj5 = flag(obj1[11]);
                    obj9 = { extra: null };
                    obj10 = { offer_id: null, user_discount_offer: null };
                    obj10[0] = offerId;
                    obj10[1] = v0;
                    obj9[0] = obj10;
                    const merged = Object.assign(closure_4);
                    obj5.captureException(c13, obj9);
                    throw c13;
                  }
                }
              }
              let result = null == trial_id;
              if (result) {
                obj1 = callback(obj1[12]);
                result = obj1.UNSAFE_isDismissibleContentDismissed(callback(obj1[13]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
              }
              if (result) {
                obj2 = callback(obj1[14]);
                const result1 = obj2.removeDismissedContent(callback(obj1[13]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
              }
              obj3 = flag(obj1[7]);
              let fromServer = null;
              if (!c12) {
                fromServer = null;
                if (null != trial_id) {
                  fromServer = offerId.createFromServer(trial_id);
                }
              }
              obj11 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userTrialOffer: null, userDiscountOffer: null, shouldTriggerOffer: null };
              obj11[1] = fromServer;
              let fromServer1 = null;
              if (null != v0) {
                fromServer1 = closure_4.createFromServer(v0);
              }
              obj11[2] = fromServer1;
              const should_trigger_offer = closure_9.body.should_trigger_offer;
              c7 = should_trigger_offer;
              if (should_trigger_offer == null) {
                c7 = null;
              }
              obj11[3] = c7;
              obj3.dispatch(obj11);
              v0 = 0;
              c13 = 3;
              return { value: true, done: true };
            }
          } catch (throwTypeErrorResult) {
            trial_id = throwTypeErrorResult;
            throwTypeErrorResult = v0;
            if (tmp4 === v0) {
              throwTypeErrorResult = tmp2;
              c13 = tmp2;
              throw throwTypeErrorResult;
            } else {
              c12 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function _fetchExistingChurnDiscountOffer() {
  const self = this;
  const tmp = callback(function*() {
    dependencyMap = tmp3;
    closure_1_1(closure_1_2[7]).dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    c4 = 1;
    const HTTP = closure_1_0(closure_1_2[9]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_9.CHURN_USER_OFFER;
    yield HTTP.get(obj1);
    c4 = 0;
    let obj5 = fromServer(709);
    obj5.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    yield "HermesInternal";
    const offer = arg1.body.offer;
    closure_0 = offer;
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
  closure_13 = tmp;
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
    closure_0 = null;
    c4 = 1;
    const HTTP = closure_1_0(closure_1_2[9]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_9.CHURN_USER_OFFER;
    yield HTTP.post(obj1);
    if (1 === tmp7) {
      c4 = 0;
      c6 = 3;
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
        const obj = callback(table[7]);
        const obj3 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: null };
        obj3[1] = closure_0;
        obj.dispatch(obj3);
      }
      c4 = 0;
    }
    c4 = 0;
    return arg1;
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
({ AnalyticEvents: closure_8, Endpoints: c9, PaymentGateways: c10 } = ME);
let result = require("set").fileFinishedImporting("modules/premium/UserOfferActionCreators.tsx");

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
export const acknowledgeUserOffer = function acknowledgeUserOffer(hasAcknowledged, hasAcknowledged2) {
  let id;
  if (null != hasAcknowledged) {
    if (!hasAcknowledged.hasAcknowledged) {
      id = hasAcknowledged.id;
    }
  }
  let id1;
  if (null != hasAcknowledged2) {
    if (!hasAcknowledged2.hasAcknowledged()) {
      id1 = hasAcknowledged2.id;
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
      fromServer1 = closure_4.createFromServer(user_discount);
    }
    obj[2] = fromServer1;
    let fromServer2 = null;
    if (null != user_discount_offer) {
      fromServer2 = closure_4.createFromServer(user_discount_offer);
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
export const triggerUserOffer = function triggerUserOffer(arg0, arg1, arg2) {
  let _JSON = arg0;
  const _require = arg0;
  let obj = closure_6;
  if (closure_6.canTriggerUserOffer(arg0)) {
    let then = dependencyMap;
    obj1 = dispatcherDefault;
    obj = { type: "BILLING_USER_OFFER_TRIGGER_ATTEMPT", triggerType: null };
    obj[1] = _JSON;
    obj1.dispatch(obj);
    let tmp5;
    if (arg2 != null) {
      tmp5 = arg2();
    }
    let postResult = _require;
    if (obj4.isAndroid()) {
      let GOOGLE = constants2.GOOGLE;
    } else {
      GOOGLE = null;
      if (postResultResult.isIOS()) {
        GOOGLE = constants2.APPLE;
      }
      postResultResult = postResult(500);
    }
    obj = { payment_gateway: null, trigger_type: null, trigger_location_stack: null, trigger_metadata: null, trigger_uptime_app: null };
    obj[0] = GOOGLE;
    obj[1] = _JSON;
    obj[2] = arg1;
    _JSON = JSON;
    obj[3] = JSON.stringify(tmp5);
    obj[4] = obj.getUptimeForTrigger();
    const HTTP = postResult(530).HTTP;
    obj1 = { url: null, body: null, rejectWithError: true };
    obj1[0] = constants.USER_OFFER_TRIGGER;
    obj1[1] = obj;
    postResult = HTTP.post(obj1);
    then = postResult.then;
    then((body) => {
      body = body.body;
      const offer = body.offer;
      let user_trial_offer;
      if (offer != null) {
        user_trial_offer = offer.user_trial_offer;
      }
      const offer2 = body.offer;
      let user_discount_offer;
      if (offer2 != null) {
        user_discount_offer = offer2.user_discount_offer;
      }
      let obj = closure_1_1(closure_1_2[7]);
      obj = { type: "BILLING_USER_OFFER_TRIGGER_SUCCESS", triggerType: closure_0, retryAfter: body.retry_after, triggerSuccess: body.trigger_success, userTrialOffer: null, userDiscountOffer: null };
      let fromServer = null;
      if (null != user_trial_offer) {
        fromServer = closure_1_5.createFromServer(user_trial_offer);
      }
      obj[4] = fromServer;
      let fromServer1 = null;
      if (null != user_discount_offer) {
        fromServer1 = closure_1_4.createFromServer(user_discount_offer);
      }
      obj[5] = fromServer1;
      obj.dispatch(obj);
    });
    obj4 = _require(500);
  }
};