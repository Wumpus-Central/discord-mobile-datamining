// === Module 8062: UserOfferActionCreators ===

// Module 8062 (UserOfferActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserDiscountOfferRecord from "UserDiscountOfferRecord" /* 8063 */;
import UserTrialOfferRecord from "UserTrialOfferRecord" /* 7454 */;
import UserOfferStore from "UserOfferStore" /* 7450 */;

require = fn;
function getPaymentGateway() {
  if (obj.isAndroid()) {
    let GOOGLE = constants2.GOOGLE;
  } else {
    GOOGLE = null;
    if (tmpResult.isIOS()) {
      GOOGLE = constants2.APPLE;
    }
    tmpResult = PlatformUtils;
  }
  return GOOGLE;
}
let closure_12 = async function _fetchUserOffer(arg0, value) {
  if (c13 === 2) {
    c13 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_9 = tmp3;
          closure_8 = tmp7;
          closure_136_1 = undefined;
          closure_136_2 = undefined;
          closure_136_3 = undefined;
          closure_136_4 = undefined;
          closure_136_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = true;
          }
          closure_136_1 = flag;
          let obj1 = closure_2;
          if (closure_2 === undefined) {
            obj1 = { offerId: "hash", paymentGatewayOverride: "call" };
          }
          closure_136_2 = obj1;
          closure_136_3 = closure_3;
          closure_136_4 = closure_4;
          let offerId;
          closure_136_6 = undefined;
          closure_136_7 = undefined;
          closure_136_8 = undefined;
          closure_136_9 = undefined;
          closure_136_10 = undefined;
          closure_136_11 = undefined;
          closure_136_12 = undefined;
          closure_136_13 = undefined;
          c12 = 1;
          c13 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else if (closure_136_1) {
          let obj10 = closure_137_1(closure_137_2[7]);
          obj10.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
          c11 = 1;
          if (null != closure_136_0) {
            let obj3 = { call_location: closure_136_0 };
            closure_137_1(closure_137_2[8]).track(closure_137_8.FETCH_USER_OFFER_STARTED, obj3);
            const obj12 = closure_137_1(closure_137_2[8]);
          }
          offerId = closure_136_2.offerId;
          closure_136_6 = closure_136_2.paymentGatewayOverride;
          if (undefined !== closure_136_6) {
            let tmp103 = closure_136_6;
          } else {
            tmp103 = closure_137_11();
          }
          closure_136_7 = tmp103;
          if (null == closure_136_7) {
            if (null == offerId) {
              let obj4 = { allow_triggers: false };
            }
            closure_136_8 = obj4;
            const HTTP = closure_137_0(closure_137_2[9]).HTTP;
            const request = { url: closure_137_9.USER_OFFER, body: closure_136_8, rejectWithError: true, retries: null };
            let retries;
            if (null != closure_136_3) {
              retries = closure_136_3.retries;
            }
            request.retries = retries;
            c12 = 3;
            c13 = 1;
            let obj5 = { value: HTTP.post(request), done: false };
            return obj5;
          }
          const obj6 = { payment_gateway: closure_136_7, offer_id: offerId, allow_triggers: false };
          obj4 = obj6;
        } else {
          c13 = 3;
          return { value: false, done: true };
        }
      } else if (2 === tmp7) {
        c11 = 0;
        let obj9 = closure_137_1(closure_137_2[7]);
        obj9.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        c13 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c13 = 3;
        throw value;
      } else if (arg0 === 2) {
        c11 = 0;
        c13 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_136_9 = value;
        const user_trial_offer = closure_136_9.body.user_trial_offer;
        c5 = user_trial_offer;
        if (user_trial_offer == null) {
          c5 = null;
        }
        closure_136_10 = c5;
        const user_discount_offer = closure_136_9.body.user_discount_offer;
        c6 = user_discount_offer;
        if (user_discount_offer == null) {
          c6 = null;
        }
        closure_136_11 = c6;
        let trial_id;
        if (closure_136_10 != null) {
          trial_id = closure_136_10.trial_id;
        }
        let tmp16 = trial_id === closure_137_7;
        if (tmp16) {
          obj = closure_137_0(closure_137_2[10]);
          tmp16 = !obj.isTwoWeekTrialOfferIngestAllowed({ location: "user_offer_action_creators" });
        }
        closure_136_12 = tmp16;
        if (null != offerId) {
          if (null != closure_136_11) {
            if (closure_136_11.discount_id !== offerId) {
              const _Error = Error;
              const error = new Error("Returned user discount offer does not match offer ID request parameter");
              closure_136_13 = error;
              obj5 = closure_137_1(closure_137_2[11]);
              const obj8 = { extra: null };
              obj9 = { offer_id: offerId, user_discount_offer: closure_136_11 };
              obj8.extra = obj9;
              const merged = Object.assign(closure_136_4);
              obj5.captureException(closure_136_13, obj8);
              throw closure_136_13;
            }
          }
        }
        let result = null == closure_136_10;
        if (result) {
          obj1 = closure_137_0(closure_137_2[12]);
          result = obj1.UNSAFE_isDismissibleContentDismissed(closure_137_0(closure_137_2[13]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
        }
        if (result) {
          obj2 = closure_137_0(closure_137_2[14]);
          const result1 = obj2.removeDismissedContent(closure_137_0(closure_137_2[13]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
        }
        obj3 = closure_137_1(closure_137_2[7]);
        let fromServer = null;
        if (!closure_136_12) {
          fromServer = null;
          if (null != closure_136_10) {
            fromServer = closure_137_5.createFromServer(closure_136_10);
          }
        }
        obj10 = { type: "BILLING_USER_OFFER_FETCH_SUCCESS", userTrialOffer: fromServer, userDiscountOffer: null, shouldTriggerOffer: null };
        let fromServer1 = null;
        if (null != closure_136_11) {
          fromServer1 = closure_137_4.createFromServer(closure_136_11);
        }
        obj10.userDiscountOffer = fromServer1;
        const should_trigger_offer = closure_136_9.body.should_trigger_offer;
        let shouldTriggerOffer = should_trigger_offer;
        if (should_trigger_offer == null) {
          shouldTriggerOffer = null;
        }
        obj10.shouldTriggerOffer = shouldTriggerOffer;
        obj3.dispatch(obj10);
        c11 = 0;
        c13 = 3;
        return { value: true, done: true };
      }
    } catch (tmp124) {
      closure_10 = tmp124;
      if (tmp4 === c11) {
        c13 = tmp2;
        throw tmp124;
      } else {
        c12 = tmp;
      }
    }
  }
};
let closure_13 = async function _fetchExistingChurnDiscountOffer() {
  closure_2 = tmp3;
  DispatcherDefault.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: constants.CHURN_USER_OFFER, rejectWithError: true });
  let obj5 = closure_130_1(closure_130_2[7]);
  obj5.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
  await "HermesInternal";
  const offer = arg1.body.offer;
  c0 = offer;
  if (offer == null) {
    c0 = null;
  }
  closure_129_0 = c0;
  let fromServer = null;
  if (null != closure_129_0) {
    fromServer = closure_130_4.createFromServer(closure_129_0);
  }
  closure_129_1 = fromServer;
  closure_130_1(closure_130_2[7]).dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: closure_129_1 });
  obj5 = { userDiscountOffer: closure_129_1 };
  return obj5;
};
let closure_14 = async function _fetchChurnDiscountOffer() {
  closure_2 = tmp3;
  closure_129_0 = null;
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.post({ url: constants.CHURN_USER_OFFER, rejectWithError: true });
  if (1 === tmp7) {
    c4 = 0;
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    const offer = arg1.body.offer;
    c0 = offer;
    if (offer == null) {
      c0 = null;
    }
    closure_129_1 = c0;
    if (null != closure_129_1) {
      closure_129_0 = closure_130_4.createFromServer(closure_129_1);
      closure_130_1(closure_130_2[7]).dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: closure_129_0 });
      closure_130_1(closure_130_2[7]);
    }
    c4 = 0;
  }
  return arg1;
};
let closure_7 = fn(1373).PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, Endpoints: closure_9, PaymentGateways: c10 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/UserOfferActionCreators.tsx");

export const fetchUserOffer = function fetchUserOffer() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchExistingChurnDiscountOffer = function fetchExistingChurnDiscountOffer() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchChurnDiscountOffer = function fetchChurnDiscountOffer() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
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
  return HTTP.post(request).then((body) => {
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
    let obj = DispatcherDefault;
    let fromServer = null;
    if (null != user_trial_offer) {
      fromServer = UserTrialOfferRecord.createFromServer(user_trial_offer);
    }
    obj = { type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: fromServer, userDiscount: null, userDiscountOffer: null };
    let fromServer1 = null;
    if (null != user_discount) {
      fromServer1 = UserDiscountOfferRecord.createFromServer(user_discount);
    }
    obj.userDiscount = fromServer1;
    let fromServer2 = null;
    if (null != user_discount_offer) {
      fromServer2 = UserDiscountOfferRecord.createFromServer(user_discount_offer);
    }
    obj.userDiscountOffer = fromServer2;
    obj.dispatch(obj);
  }).catch((error) => {
    if (404 === error.status) {
      DispatcherDefault.dispatch({ type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null, userDiscount: null, userDiscountOffer: null });
    }
  });
};
export const triggerUserOffer = function triggerUserOffer(triggerType, trigger_location_stack, fn) {
  let _JSON = triggerType;
  _require = triggerType;
  let obj = UserOfferStore;
  if (UserOfferStore.canTriggerUserOffer(triggerType)) {
    let then = dependencyMap;
    obj = { type: "BILLING_USER_OFFER_TRIGGER_ATTEMPT", triggerType: _JSON };
    DispatcherDefault.dispatch(obj);
    let tmp5;
    if (fn != null) {
      tmp5 = fn();
    }
    let postResult = _require;
    if (obj4.isAndroid()) {
      let GOOGLE = constants2.GOOGLE;
    } else {
      GOOGLE = null;
      if (postResultResult.isIOS()) {
        GOOGLE = constants2.APPLE;
      }
      postResultResult = postResult(1115);
    }
    obj = { payment_gateway: GOOGLE, trigger_type: _JSON, trigger_location_stack, trigger_metadata: null, trigger_uptime_app: null };
    _JSON = JSON;
    obj.trigger_metadata = JSON.stringify(tmp5);
    obj.trigger_uptime_app = obj.getUptimeForTrigger();
    const HTTP = postResult(1272).HTTP;
    const request = { url: constants.USER_OFFER_TRIGGER, body: obj, rejectWithError: true };
    postResult = HTTP.post(request);
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
      const obj = { type: "BILLING_USER_OFFER_TRIGGER_SUCCESS", triggerType, retryAfter: body.retry_after, triggerSuccess: body.trigger_success, userTrialOffer: null, userDiscountOffer: null };
      let fromServer = null;
      if (null != user_trial_offer) {
        fromServer = UserTrialOfferRecord.createFromServer(user_trial_offer);
      }
      obj.userTrialOffer = fromServer;
      let fromServer1 = null;
      if (null != user_discount_offer) {
        fromServer1 = UserDiscountOfferRecord.createFromServer(user_discount_offer);
      }
      obj.userDiscountOffer = fromServer1;
      obj.dispatch(obj);
    });
    obj4 = require("PlatformUtils");
  }
};