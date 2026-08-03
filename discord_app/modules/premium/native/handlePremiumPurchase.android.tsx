// === Module 6254: validatePurchase ===

// Module 6254 (validatePurchase)
import _objectWithoutProperties from "_objectWithoutProperties";
import reset from "reset";
import set from "set";
import { setGPlayAnalytics } from "setGPlayAnalytics";
import fetchFingerprint from "fetchFingerprint";
import closure_9 from "reset";
import updateProduct from "updateProduct";
import ME from "ME";
import { PaymentGateways } from "sum";

let closure_12;
let unpackModuleId;
const require = arg1;
function validatePurchase() {
  const self = this;
  const apply = _validatePurchase.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _validatePurchase() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp3;
              let lib = tmp5;
              let callback;
              lib = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ productId: c0, premiumSubscription: c1, offerId: c2, currency: c3, price: c4, isGift: c5 } = callback);
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 1;
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: false };
              obj2[0] = constants.GOOGLE_PLAY_VALIDATE_PURCHASE;
              const obj3 = { product_id: null, offer_id: null, subscription_id: null, currency: null, price: null, is_gift: null };
              obj3[0] = callback;
              obj3[1] = dependencyMap;
              let id;
              if (lib != null) {
                id = lib.id;
              }
              obj3[2] = id;
              obj3[3] = c3;
              obj3[4] = c4;
              obj3[5] = c5;
              obj2[1] = obj3;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (2 === tmp8) {
            c4 = 0;
            c6 = c3;
            const tmp18 = new lib(6256)(c6);
            throw tmp18;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          c3 = tmp25;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp25;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _validatePurchase = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["succeededOnlyFields"];
({ AnalyticEvents: unpackModuleId, Endpoints: closure_12 } = ME);
let result = require("noop").fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

export const useHandlePremiumPurchase = function useHandlePremiumPurchase() {
  const items = [closure_9];
  const stateFromStores = _require(premiumDiscountOffer[17]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  _require = stateFromStores;
  let obj = _require(premiumDiscountOffer[17]);
  const premiumTrialOffer = _require(premiumDiscountOffer[18]).usePremiumTrialOffer();
  let obj2 = _require(premiumDiscountOffer[18]);
  premiumDiscountOffer = _require(premiumDiscountOffer[19]).usePremiumDiscountOffer();
  let obj3 = _require(premiumDiscountOffer[19]);
  const isEligibleForBogoOffer = _require(premiumDiscountOffer[20]).useIsEligibleForBogoOffer();
  let _objectWithoutProperties = tmp5;
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let paymentGatewayPlanId;
  if (stateFromStores != null) {
    paymentGatewayPlanId = stateFromStores.paymentGatewayPlanId;
  }
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.paymentGatewaySubscriptionId;
  }
  _require = undefined;
  _require = id((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c10;
      let c11;
      let c12;
      let c2;
      let c3;
      let c4;
      let c5;
      let c9;
      let closure_1;
      let isGift;
      c3 = tmp4;
      c2 = tmp10;
      c0 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      let c6;
      let c7;
      let flag2;
      c9 = undefined;
      c10 = undefined;
      c11 = undefined;
      let callback3;
      let throwTypeErrorResult = c0;
      ({ productId: c0, skuId: closure_1, analyticsLoadId: c2, analyticsLocation: c3, analyticsLocations: c4, analyticsData: c5, isGift } = c0);
      if (isGift === undefined) {
        isGift = false;
      }
      c6 = isGift;
      let flag = throwTypeErrorResult.isOneTimePurchase;
      if (flag === undefined) {
        flag = false;
      }
      c7 = flag;
      flag2 = throwTypeErrorResult.allowPlanChange;
      if (flag2 === undefined) {
        flag2 = true;
      }
      ({ applicationId: c9, giftInfoOptions: c10, onPurchaseComplete: c11, onPurchaseError: c12 } = throwTypeErrorResult);
      let c13;
      let c14;
      let c15;
      let c16;
      let c17;
      let c18;
      let obj3;
      let c21;
      c6 = 1;
      c7 = 1;
      yield "ct";
      if (1 === tmp10) {
        if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          throwTypeErrorResult = c2;
          throwTypeErrorResult = c3;
          throwTypeErrorResult = outer2_8;
          const outer2_13 = outer2_8.getId();
          throwTypeErrorResult = outer2_10;
          throwTypeErrorResult = callback;
          const outer2_14 = outer2_10.getProduct(callback);
          throwTypeErrorResult = callback;
          throwTypeErrorResult = premiumDiscountOffer;
          let obj2 = { isGift: null, analyticsLoadId: null, analyticsLocation: null, analyticsLocations: null };
          throwTypeErrorResult = paymentGatewayPlanId;
          obj2[0] = paymentGatewayPlanId;
          throwTypeErrorResult = premiumDiscountOffer;
          obj2[1] = premiumDiscountOffer;
          throwTypeErrorResult = isEligibleForBogoOffer;
          obj2[2] = isEligibleForBogoOffer;
          throwTypeErrorResult = callback2;
          obj2[3] = callback2;
          const outer2_15 = callback(premiumDiscountOffer[21]).getBasePurchaseFlowAnalyticsFields(obj2);
          throwTypeErrorResult = id;
          closure_1 = id;
          if (id == null) {
            closure_1 = {};
          }
          const outer2_16 = closure_1;
          const outer2_17 = outer2_16.succeededOnlyFields;
          const outer2_18 = callback2(outer2_16, isEligibleForBogoOffer);
          obj3 = {};
          const merged = Object.assign(outer2_15);
          obj3.subscription_plan_gateway_plan_id = callback;
          obj3.sku_id = premiumTrialOffer;
          let price;
          if (outer2_14 != null) {
            price = outer2_14.price;
          }
          obj3.price = price;
          let price1;
          if (outer2_14 != null) {
            price1 = outer2_14.price;
          }
          obj3.regular_price = price1;
          let formatted;
          if (outer2_14 != null) {
            formatted = outer2_14.currencyCode.toLowerCase();
            const str = outer2_14.currencyCode;
          }
          obj3.currency = formatted;
          obj3.application_id = c9;
          const merged1 = Object.assign(c18);
          const obj4 = {};
          const merged2 = Object.assign(obj3);
          obj4.succeededOnlyFields = c17;
          prop(c0, obj4);
          let closure_20 = (function getOfferId(c0, outer1_3, outer1_1, outer1_2, c14) {
            let offerIds;
            if (c14 != null) {
              offerIds = c14.offerIds;
            }
            if (null != offerIds) {
              if (null != outer1_1) {
                const tmp13 = _undefined(_undefined2[16]).TrialIdToProductOfferId[outer1_1.trial_id];
                let tmp14;
                if (tmp13 != null) {
                  tmp14 = tmp13[c0];
                }
                return tmp14;
              } else if (null != outer1_2) {
                const tmp9 = _undefined(_undefined2[16]).DiscountIdToProductOfferId[outer1_2.discountId];
                let tmp10;
                if (tmp9 != null) {
                  tmp10 = tmp9[c0];
                }
                return tmp10;
              }
            }
            let BOGO_OFFER_ID = null;
            if (outer1_3) {
              BOGO_OFFER_ID = null;
              if (c0 === _undefined(_undefined2[16]).ProductIds.PREMIUM_TIER_2_MONTHLY) {
                BOGO_OFFER_ID = tmp5(tmp6[16]).BOGO_OFFER_ID;
              }
              tmp5 = _undefined;
              tmp6 = _undefined2;
            }
            return BOGO_OFFER_ID;
          })(c0, outer1_3, outer1_1, outer1_2, c14);
          let obj14 = callback(premiumDiscountOffer[22]);
          let obj5 = {};
          throwTypeErrorResult = obj5;
          throwTypeErrorResult = Object.assign(obj3);
          throwTypeErrorResult = outer2_13;
          obj5.payment_gateway = outer2_13.GOOGLE;
          throwTypeErrorResult = obj14.trackPaymentFlowStartedAnalyticsAndCTP(obj5);
          throwTypeErrorResult = c2;
          c5 = 1;
          throwTypeErrorResult = paymentGatewayPlanId;
          if (!paymentGatewayPlanId) {
            throwTypeErrorResult = prop;
            if (!prop) {
              throwTypeErrorResult = c3;
              throwTypeErrorResult = outer1_4;
              if (outer1_4) {
                throwTypeErrorResult = outer2_8;
                throwTypeErrorResult = !outer2_8;
              }
              if (throwTypeErrorResult) {
                throwTypeErrorResult = c2;
                if (outer2_11 != null) {
                  throwTypeErrorResult = c3;
                  const obj6 = { paymentGateway: null };
                  throwTypeErrorResult = outer2_13;
                  obj6[0] = outer2_13.GOOGLE;
                  throwTypeErrorResult = throwTypeErrorResult(obj6);
                }
                c5 = 0;
              } else {
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c6;
                throwTypeErrorResult = null != c6;
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = c7;
                  throwTypeErrorResult = null != c7;
                }
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = c5;
                  throwTypeErrorResult = null != c5;
                }
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = premiumDiscountOffer;
                  let obj16 = callback(premiumDiscountOffer[26]);
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = c6;
                  throwTypeErrorResult = c7;
                  throwTypeErrorResult = c5;
                  throwTypeErrorResult = obj16;
                  throwTypeErrorResult = obj16.updatePendingDowngrade(callback, c6, c7, c5);
                }
                throwTypeErrorResult = c2;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = outer2_14;
                const obj7 = { productId: null, premiumSubscription: null, offerId: null };
                throwTypeErrorResult = callback;
                obj7[0] = callback;
                throwTypeErrorResult = callback;
                obj7[1] = callback;
                throwTypeErrorResult = outer2_20;
                obj7[2] = outer2_20;
                c6 = 6;
                c7 = 1;
                let obj8 = { value: null, done: false };
                obj8[0] = outer2_14(obj7);
                return obj8;
              }
            }
          }
          throwTypeErrorResult = paymentGatewayPlanId;
          if (paymentGatewayPlanId) {
            throwTypeErrorResult = outer2_10;
            throwTypeErrorResult = null != outer2_10;
          }
          if (throwTypeErrorResult) {
            throwTypeErrorResult = c3;
            throwTypeErrorResult = premiumTrialOffer;
            throwTypeErrorResult = premiumDiscountOffer;
            throwTypeErrorResult = null != premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache;
            if (throwTypeErrorResult) {
              throwTypeErrorResult = c2;
              throwTypeErrorResult = c3;
              throwTypeErrorResult = premiumTrialOffer;
              throwTypeErrorResult = premiumDiscountOffer;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = null != premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache[callback];
            }
            if (throwTypeErrorResult) {
              throwTypeErrorResult = c2;
              throwTypeErrorResult = c3;
              throwTypeErrorResult = premiumTrialOffer;
              throwTypeErrorResult = premiumDiscountOffer;
              const giftInfoOptionsCache = premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache;
              throwTypeErrorResult = callback;
              delete tmp7[tmp6];
            }
            throwTypeErrorResult = c2;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = premiumTrialOffer;
            throwTypeErrorResult = premiumDiscountOffer;
            throwTypeErrorResult = callback;
            let obj9 = {};
            throwTypeErrorResult = outer2_10;
            throwTypeErrorResult = obj9;
            throwTypeErrorResult = Object.assign(outer2_10);
            premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache[callback] = obj9;
          }
          throwTypeErrorResult = c2;
          let outer2_21 = null;
          throwTypeErrorResult = outer2_14;
          if (null != outer2_14) {
            throwTypeErrorResult = c2;
            throwTypeErrorResult = c3;
            c5 = 2;
            throwTypeErrorResult = callback;
            throwTypeErrorResult = premiumDiscountOffer;
            throwTypeErrorResult = outer2_14;
            throwTypeErrorResult = outer2_14;
            outer2_21 = callback(premiumDiscountOffer[24]).convertToMinorCurrencyUnits(outer2_14.price / 100, outer2_14.currencyCode);
            c5 = 1;
            const obj22 = callback(premiumDiscountOffer[24]);
          }
          throwTypeErrorResult = c2;
          throwTypeErrorResult = c3;
          const obj10 = { productId: null, premiumSubscription: null, offerId: null, currency: null, price: null, isGift: null };
          throwTypeErrorResult = callback;
          obj10[0] = callback;
          throwTypeErrorResult = callback;
          obj10[1] = callback;
          throwTypeErrorResult = undefined;
          throwTypeErrorResult = outer2_14;
          if (outer2_14 != null) {
            if (outer2_14.currencyCode != null) {
              throwTypeErrorResult = str2.toLowerCase();
            }
          }
          throwTypeErrorResult = c2;
          obj10[3] = throwTypeErrorResult;
          throwTypeErrorResult = outer2_21;
          obj10[4] = outer2_21;
          throwTypeErrorResult = paymentGatewayPlanId;
          obj10[5] = paymentGatewayPlanId;
          c6 = 4;
          c7 = 1;
          let obj11 = { value: null, done: false };
          obj11[0] = throwTypeErrorResult(obj10);
          return obj11;
        }
      } else if (2 === tmp10) {
        c5 = 0;
        let message = c4;
        obj9 = premiumTrialOffer(premiumDiscountOffer[27]);
        const obj12 = {};
        const merged3 = Object.assign(obj3);
        obj12.payment_gateway = outer2_13.GOOGLE;
        obj12.error_message = message.message;
        obj9.track(outer2_11.PAYMENT_FLOW_FAILED, obj12);
        if (callback3 != null) {
          callback3();
        }
        obj11 = callback(premiumDiscountOffer[25]);
        let result = obj11.captureBillingException(outer2_23);
        (function showPurchaseErrorModal(outer2_23) {
          let billingError = outer2_23;
          if (!(outer2_23 instanceof _undefined(_undefined2[11]).BillingError)) {
            billingError = new tmp(tmp2[11]).BillingError(outer2_23);
          }
          let tmpResult = tmp(tmp2[12]);
          if (tmpResult.isSpendingLimitError(billingError)) {
            tmpResult = tmp(tmp2[12]);
            const result = tmpResult.showSpendingLimitReachedAlert();
          } else {
            const intl = tmp(tmp2[13]).intl;
            let tmp8 = billingError.code !== tmp(tmp2[14]).ErrorCodes.UNKNOWN;
            if (tmp8) {
              tmp8 = -1 !== billingError.code;
            }
            if (tmp8) {
              tmp8 = null != billingError.message;
            }
            let message = intl.string(tmp(tmp2[13]).t.LFFx5G);
            if (tmp8) {
              message = billingError.message;
            }
            const stringResult = intl.string(tmp(tmp2[13]).t.LFFx5G);
            const obj = { title: null, body: null, isDismissable: true };
            const intl2 = tmp(tmp2[13]).intl;
            obj[0] = intl2.string(tmp(tmp2[13]).t["U+H+kd"]);
            obj[1] = message;
            callback(tmp2[15]).show(obj);
            const obj2 = callback(tmp2[15]);
          }
        })(outer2_23);
        if (outer2_23 instanceof premiumTrialOffer(premiumDiscountOffer[10])) {
          throw outer2_23;
        }
      } else if (3 === tmp10) {
        c5 = 1;
        let closure_22 = c4;
        obj8 = callback(premiumDiscountOffer[25]);
        const result1 = obj8.captureBillingException(closure_22);
      } else if (4 === tmp10) {
        if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj13 = { value: null, done: true };
          obj13[0] = arg1;
          return obj13;
        } else {
          obj5 = callback(premiumDiscountOffer[26]);
          c6 = 5;
          c7 = 1;
          obj14 = { value: null, done: false };
          obj14[0] = obj5.purchase(c0, c13);
          return obj14;
        }
      } else if (5 === tmp10) {
        if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj15 = { value: null, done: true };
          obj15[0] = arg1;
          return obj15;
        }
      } else if (6 === tmp10) {
        if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj16 = { value: null, done: true };
          obj16[0] = arg1;
          return obj16;
        } else {
          obj1 = callback(premiumDiscountOffer[26]);
          c6 = 7;
          c7 = 1;
          const obj17 = { value: null, done: false };
          obj17[0] = obj1.subscribe(c0, c13, c6, c7, closure_20);
          return obj17;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      }
      c7 = 3;
      yield "HermesInternal";
    })();
    iter.next();
    return iter;
  });
  const items1 = [null != stateFromStores, paymentGatewayPlanId, prop, id, premiumTrialOffer, premiumDiscountOffer, stateFromStores, isEligibleForBogoOffer];
  return paymentGatewayPlanId.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
};