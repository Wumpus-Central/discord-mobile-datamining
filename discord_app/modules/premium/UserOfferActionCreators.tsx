// === Module 7733: UserOfferActionCreators ===

// Module 7733 (UserOfferActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserDiscountOfferRecord from "UserDiscountOfferRecord" /* 7734 */;
import UserTrialOfferRecord from "UserTrialOfferRecord" /* 6963 */;
import UserOfferStore from "UserOfferStore" /* 6959 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, body, closure_12, closure_8, trial_id;

let c10;
let c9;
let metroImportAll;
function getPaymentGateway() {
  let GOOGLE;
  obj = PlatformUtils;
  if (obj.isAndroid()) {
    GOOGLE = constants2.GOOGLE;
  } else {
    GOOGLE = null;
    const tmpResult = PlatformUtils;
    if (tmpResult.isIOS()) {
      GOOGLE = constants2.APPLE;
    }
  }
  return GOOGLE;
}
let obj = function _fetchUserOffer() {
  obj = _asyncToGenerator(async (call_location) => {
    let closure_9;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let retries = arg3;
    let closure_4 = arg4;
    let c12 = 0;
    let c13 = 0;
    let c11 = 0;
    const iter = (async function(arg0) {
      let fromServer1;
      let obj17;
      if (c13 === 2) {
        c13 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c11;
        try {
          let obj6;
          let flag;
          let offerId;
          let paymentGatewayOverride;
          let obj12;
          let tmp;
          let error;
          c13 = 2;
          if (0 === c12) {
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              return { value, done: true };
            } else {
              closure_8 = tmp4;
              obj6 = undefined;
              retries = undefined;
              closure_4 = undefined;
              flag = closure_1;
              if (closure_1 === undefined) {
                flag = true;
              }
              obj6 = closure_2;
              if (closure_2 === undefined) {
                obj6 = { offerId: "Array", paymentGatewayOverride: "Set" };
              }
              offerId = undefined;
              paymentGatewayOverride = undefined;
              _null = undefined;
              obj12 = undefined;
              tmp = undefined;
              trial_id = undefined;
              user_discount_offer = undefined;
              closure_12 = undefined;
              error = undefined;
              c12 = 1;
              c13 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c12) {
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              return { value, done: true };
            } else {
              const tmp132 = flag;
              if (tmp132) {
                let tmp100;
                const obj9 = closure_137_1(closure_137_2[7]);
                obj9.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
                c11 = 1;
                if (null != call_location) {
                  const obj11 = { call_location };
                  const obj10 = closure_137_1(closure_137_2[8]);
                  obj10.track(closure_137_8.FETCH_USER_OFFER_STARTED, obj11);
                }
                offerId = obj6.offerId;
                paymentGatewayOverride = obj6.paymentGatewayOverride;
                if (undefined !== paymentGatewayOverride) {
                  tmp100 = paymentGatewayOverride;
                } else {
                  tmp100 = closure_137_11();
                }
                _null = tmp100;
                if (null == _null) {
                  if (null == offerId) {
                    obj12 = { allow_triggers: false };
                  }
                  const HTTP = closure_137_0(closure_137_2[9]).HTTP;
                  const request = { url: closure_137_9.USER_OFFER, body: obj12, rejectWithError: true, retries };
                  retries = undefined;
                  const post = HTTP.post;
                  if (null != retries) {
                    retries = retries.retries;
                  }
                  c12 = 3;
                  c13 = 1;
                  const obj13 = { value: post(request), done: false };
                  return obj13;
                }
                obj12 = { payment_gateway: _null, offer_id: offerId, allow_triggers: false };
                const obj14 = { payment_gateway: _null, offer_id: offerId, allow_triggers: false };
              } else {
                c13 = 3;
                return { value: false, done: true };
              }
            }
          } else if (2 === c12) {
            c11 = 0;
            const obj8 = closure_137_1(closure_137_2[7]);
            obj8.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
            c13 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 0;
            c13 = 3;
            return { value, done: true };
          } else {
            tmp = value;
            const user_trial_offer = tmp.body.user_trial_offer;
            c5 = user_trial_offer;
            if (user_trial_offer == null) {
              c5 = null;
            }
            trial_id = c5;
            user_discount_offer = tmp.body.user_discount_offer;
            c6 = user_discount_offer;
            if (user_discount_offer == null) {
              c6 = null;
            }
            user_discount_offer = c6;
            trial_id = undefined;
            if (trial_id != null) {
              trial_id = trial_id.trial_id;
            }
            let tmp13 = trial_id === closure_137_7;
            if (tmp13) {
              obj = closure_137_0(closure_137_2[10]);
              tmp13 = !obj.isTwoWeekTrialOfferIngestAllowed({ location: "user_offer_action_creators" });
            }
            closure_12 = tmp13;
            if (null != offerId) {
              if (null != user_discount_offer) {
                if (user_discount_offer.discount_id !== offerId) {
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  error = new Error("Returned user discount offer does not match offer ID request parameter");
                  const obj16 = { extra: obj17 };
                  obj17 = { offer_id: offerId, user_discount_offer };
                  const captureException = closure_137_1(closure_137_2[11]).captureException;
                  closure_137_1(closure_137_2[11]);
                  const merged = Object.assign(closure_4);
                  captureException(error, obj16);
                  throw error;
                }
              }
            }
            let result = null == trial_id;
            if (result) {
              const obj2 = closure_137_0(closure_137_2[12]);
              result = obj2.UNSAFE_isDismissibleContentDismissed(closure_137_0(closure_137_2[13]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
            }
            if (result) {
              const obj3 = closure_137_0(closure_137_2[14]);
              const result1 = obj3.removeDismissedContent(closure_137_0(closure_137_2[13]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
            }
            let fromServer = null;
            const dispatch = closure_137_1(closure_137_2[7]).dispatch;
            closure_137_1(closure_137_2[7]);
            if (!closure_12) {
              fromServer = null;
              if (null != trial_id) {
                fromServer = closure_137_5.createFromServer(trial_id);
              }
            }
            const obj18 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userTrialOffer: fromServer, userDiscountOffer: fromServer1, shouldTriggerOffer: _null };
            fromServer1 = null;
            if (null != user_discount_offer) {
              fromServer1 = closure_137_4.createFromServer(user_discount_offer);
            }
            const should_trigger_offer = tmp.body.should_trigger_offer;
            _null = should_trigger_offer;
            if (should_trigger_offer == null) {
              _null = null;
            }
            dispatch(obj18);
            c11 = 0;
            c13 = 3;
            return { value: true, done: true };
          }
        } catch (tmp121) {
          trial_id = tmp121;
          if (0 === c11) {
            c13 = 3;
            throw tmp121;
          } else {
            c12 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchExistingChurnDiscountOffer() {
  obj = _asyncToGenerator(async () => {
    let c4;
    let c5;
    let c6;
    let closure_1;
    let closure_2;
    let closure_3;
    const obj10 = DispatcherDefault;
    obj10.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: constants.CHURN_USER_OFFER, rejectWithError: true };
    await HTTP.get(obj4);
    const obj6 = closure_130_1(closure_130_2[7]);
    obj6.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    await "IconComponent";
    const offer = value.body.offer;
    let c0 = offer;
    if (offer == null) {
      c0 = null;
    }
    let closure_0 = c0;
    let fromServer = null;
    if (null != closure_0) {
      fromServer = closure_130_4.createFromServer(closure_0);
    }
    const obj8 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: fromServer };
    obj = closure_130_1(closure_130_2[7]);
    obj.dispatch(obj8);
    const obj9 = { userDiscountOffer: fromServer };
    return obj9;
  });
  return obj(...arguments);
};
obj = function _fetchChurnDiscountOffer() {
  obj = _asyncToGenerator(async () => {
    let closure_2;
    let closure_3;
    let closure_1 = tmp4;
    let _null = null;
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: constants.CHURN_USER_OFFER, rejectWithError: true };
    await HTTP.post(obj4);
    if (1 === c5) {
      let c4 = 0;
    } else if (arg0 === 1) {
      let c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      const obj6 = { value, done: true };
      return obj6;
    } else {
      const offer = value.body.offer;
      let c0 = offer;
      if (offer == null) {
        c0 = null;
      }
      closure_1 = c0;
      if (null != closure_1) {
        _null = closure_130_4.createFromServer(closure_1);
        const obj7 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: _null };
        obj = closure_130_1(closure_130_2[7]);
        obj.dispatch(obj7);
      }
      c4 = 0;
    }
    return _null;
  });
  return obj(...arguments);
};
let closure_7 = PremiumConstants.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
({ AnalyticEvents: metroImportAll, Endpoints: c9, PaymentGateways: c10 } = Constants);
let result = size.fileFinishedImporting("modules/premium/UserOfferActionCreators.tsx");

export const fetchUserOffer = function fetchUserOffer() {
  return obj(...arguments);
};
export const fetchExistingChurnDiscountOffer = function fetchExistingChurnDiscountOffer() {
  return obj(...arguments);
};
export const fetchChurnDiscountOffer = function fetchChurnDiscountOffer() {
  return obj(...arguments);
};
export const acknowledgeUserOffer = function acknowledgeUserOffer(hasAcknowledged, userDiscountOffer) {
  let id;
  if (null != hasAcknowledged) {
    if (!hasAcknowledged.hasAcknowledged) {
      id = hasAcknowledged.id;
    }
  }
  let id1;
  if (null != userDiscountOffer) {
    if (!userDiscountOffer.hasAcknowledged()) {
      id1 = userDiscountOffer.id;
    }
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.USER_OFFER_ACKNOWLEDGED, body: { user_trial_offer_id: id, user_discount_offer_id: id1 }, oldFormErrors: true, rejectWithError: false };
  const postResult = HTTP.post(request);
  const nextPromise = postResult.then((body) => {
    let fromServer1;
    let fromServer2;
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
    let fromServer = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (null != user_trial_offer) {
      fromServer = UserTrialOfferRecord.createFromServer(user_trial_offer);
    }
    obj = { type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: fromServer, userDiscount: fromServer1, userDiscountOffer: fromServer2 };
    fromServer1 = null;
    if (null != user_discount) {
      fromServer1 = UserDiscountOfferRecord.createFromServer(user_discount);
    }
    fromServer2 = null;
    if (null != user_discount_offer) {
      fromServer2 = UserDiscountOfferRecord.createFromServer(user_discount_offer);
    }
    dispatch(obj);
  });
  return nextPromise.catch((error) => {
    if (404 === error.status) {
      obj = DispatcherDefault;
      obj.dispatch({ type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null, userDiscount: null, userDiscountOffer: null });
    }
  });
};
export const triggerUserOffer = function triggerUserOffer(triggerType, trigger_location_stack, fn) {
  _require = triggerType;
  if (UserOfferStore.canTriggerUserOffer(triggerType)) {
    let GOOGLE;
    const obj3 = { type: "BILLING_USER_OFFER_TRIGGER_ATTEMPT", triggerType };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
    let tmp6;
    if (fn != null) {
      tmp6 = fn();
    }
    const obj4 = require("PlatformUtils");
    if (obj4.isAndroid()) {
      GOOGLE = constants2.GOOGLE;
    } else {
      GOOGLE = null;
      const tmp7Result = require("PlatformUtils");
      if (tmp7Result.isIOS()) {
        GOOGLE = constants2.APPLE;
      }
    }
    const _JSON = JSON;
    const obj5 = { payment_gateway: GOOGLE, trigger_type: triggerType, trigger_location_stack, trigger_metadata: JSON.stringify(tmp6), trigger_uptime_app: UserOfferStore.getUptimeForTrigger() };
    const HTTP = tmp7(1282).HTTP;
    const request = { url: constants.USER_OFFER_TRIGGER, body: obj5, rejectWithError: true };
    const postResult = HTTP.post(request);
    postResult.then((body) => {
      let fromServer;
      let fromServer1;
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
      obj = { type: "BILLING_USER_OFFER_TRIGGER_SUCCESS", triggerType, retryAfter: body.retry_after, triggerSuccess: body.trigger_success, userTrialOffer: fromServer, userDiscountOffer: fromServer1 };
      fromServer = null;
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (null != user_trial_offer) {
        fromServer = UserTrialOfferRecord.createFromServer(user_trial_offer);
      }
      fromServer1 = null;
      if (null != user_discount_offer) {
        fromServer1 = UserDiscountOfferRecord.createFromServer(user_discount_offer);
      }
      dispatch(obj);
    });
  }
};