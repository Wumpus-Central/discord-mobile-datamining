// === Module 7617: validatePurchase ===

// Module 7617 (validatePurchase)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;
import { setGPlayAnalytics } from "setGPlayAnalytics" /* 7618 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import reset from "reset" /* 4045 */;
import updateProduct from "updateProduct" /* 5319 */;
import ME from "ME" /* 676 */;
import { PaymentGateways } from "sum" /* 505 */;

const require = fn;
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
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              dependencyMap = tmp3;
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
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
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
            const tmp18 = new lib(7619)(c6);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
  closure_15 = tmp;
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
let result = require("obj132").fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

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
  closure_4 = tmp5;
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
  _require = id((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp9 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = tmp4;
              c2 = tmp10;
              c0 = undefined;
              closure_1 = undefined;
              c2 = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              let flag2;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              let callback3;
              ({ productId: c0, skuId: closure_1, analyticsLoadId: c2, analyticsLocation: c3, analyticsLocations: c4, analyticsData: c5, isGift } = c0);
              if (isGift === undefined) {
                isGift = false;
              }
              c6 = isGift;
              let flag = tmp200.isOneTimePurchase;
              if (flag === undefined) {
                flag = false;
              }
              c7 = flag;
              flag2 = tmp200.allowPlanChange;
              if (flag2 === undefined) {
                flag2 = true;
              }
              ({ applicationId: c9, giftInfoOptions: c10, onPurchaseComplete: c11, onPurchaseError: c12 } = c0);
              c13 = undefined;
              c14 = undefined;
              c15 = undefined;
              c16 = undefined;
              c17 = undefined;
              c18 = undefined;
              let obj3;
              closure_20 = undefined;
              c21 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp10) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const constants = closure_2_8.getId();
                const lib = closure_2_10.getProduct(callback);
                let obj2 = { isGift: null, analyticsLoadId: null, analyticsLocation: null, analyticsLocations: null };
                obj2[0] = paymentGatewayPlanId;
                obj2[1] = premiumDiscountOffer;
                obj2[2] = isEligibleForBogoOffer;
                obj2[3] = callback2;
                const basePurchaseFlowAnalyticsFields = callback(premiumDiscountOffer[21]).getBasePurchaseFlowAnalyticsFields(obj2);
                closure_1 = id;
                if (id == null) {
                  closure_1 = {};
                }
                succeededOnlyFields = closure_1;
                succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
                closure_18 = callback2(succeededOnlyFields, isEligibleForBogoOffer);
                obj3 = {};
                const merged = Object.assign(basePurchaseFlowAnalyticsFields);
                obj3.subscription_plan_gateway_plan_id = callback;
                obj3.sku_id = premiumTrialOffer;
                let price;
                if (lib != null) {
                  price = lib.price;
                }
                obj3.price = price;
                let price1;
                if (lib != null) {
                  price1 = lib.price;
                }
                obj3.regular_price = price1;
                let formatted;
                if (lib != null) {
                  formatted = lib.currencyCode.toLowerCase();
                }
                obj3.currency = formatted;
                obj3.application_id = c9;
                const merged1 = Object.assign(c18);
                const obj4 = {};
                const merged2 = Object.assign(obj3);
                obj4.succeededOnlyFields = c17;
                prop(c0, obj4);
                closure_20 = (function getOfferId(c0, closure_1_3, closure_1_1, closure_1_2, c14) {
                  let offerIds;
                  if (_undefined != null) {
                    offerIds = _undefined.offerIds;
                  }
                  if (null != offerIds) {
                    if (null != closure_1_1) {
                      const tmp13 = _undefined(_undefined2[16]).TrialIdToProductOfferId[closure_1_1.trialId];
                      let tmp14;
                      if (tmp13 != null) {
                        tmp14 = tmp13[c0];
                      }
                      return tmp14;
                    } else if (null != closure_1_2) {
                      const tmp9 = _undefined(_undefined2[16]).DiscountIdToProductOfferId[closure_1_2.discountId];
                      let tmp10;
                      if (tmp9 != null) {
                        tmp10 = tmp9[c0];
                      }
                      return tmp10;
                    }
                  }
                  let BOGO_OFFER_ID = null;
                  if (closure_1_3) {
                    BOGO_OFFER_ID = null;
                    if (c0 === _undefined(_undefined2[16]).ProductIds.PREMIUM_TIER_2_MONTHLY) {
                      BOGO_OFFER_ID = _undefined(_undefined2[16]).BOGO_OFFER_ID;
                    }
                  }
                  return BOGO_OFFER_ID;
                })(c0, closure_1_3, closure_1_1, closure_1_2, c14);
                let obj14 = callback(premiumDiscountOffer[22]);
                let obj5 = {};
                const merged3 = Object.assign(obj3);
                obj5.payment_gateway = constants.GOOGLE;
                let result = obj14.trackPaymentFlowStartedAnalyticsAndCTP(obj5);
                c5 = 1;
                if (!paymentGatewayPlanId) {
                  if (!prop) {
                    let tmp108 = closure_1_4;
                    if (closure_1_4) {
                      tmp108 = !closure_2_8;
                    }
                    if (tmp108) {
                      if (closure_2_11 != null) {
                        const obj6 = { paymentGateway: null };
                        obj6[0] = constants.GOOGLE;
                        tmp134(obj6);
                      }
                      c5 = 0;
                    } else {
                      let tmp112 = null != c6;
                      if (tmp112) {
                        tmp112 = null != c7;
                      }
                      if (tmp112) {
                        tmp112 = null != c5;
                      }
                      if (tmp112) {
                        let obj16 = callback(premiumDiscountOffer[26]);
                        const result1 = obj16.updatePendingDowngrade(callback, c6, c7, c5);
                      }
                      const obj7 = { productId: null, premiumSubscription: null, offerId: null };
                      obj7[0] = callback;
                      obj7[1] = callback;
                      obj7[2] = closure_2_20;
                      c6 = 6;
                      c7 = 1;
                      let obj8 = { value: null, done: false };
                      obj8[0] = lib(obj7);
                      return obj8;
                    }
                  }
                }
                let tmp138 = paymentGatewayPlanId;
                if (paymentGatewayPlanId) {
                  tmp138 = null != closure_2_10;
                }
                if (tmp138) {
                  let tmp143 = null != premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache;
                  if (tmp143) {
                    tmp143 = null != premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache[callback];
                  }
                  if (tmp143) {
                    const giftInfoOptionsCache = premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache;
                    delete tmp7[tmp6];
                  }
                  let obj9 = {};
                  const merged4 = Object.assign(closure_2_10);
                  premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache[callback] = obj9;
                }
                closure_21 = null;
                if (null != lib) {
                  c5 = 2;
                  closure_21 = callback(premiumDiscountOffer[24]).convertToMinorCurrencyUnits(lib.price / 100, lib.currencyCode);
                  c5 = 1;
                  const obj22 = callback(premiumDiscountOffer[24]);
                }
                const obj10 = { productId: null, premiumSubscription: null, offerId: null, currency: null, price: null, isGift: null };
                obj10[0] = callback;
                obj10[1] = callback;
                let formatted1;
                if (lib != null) {
                  if (lib.currencyCode != null) {
                    formatted1 = str2.toLowerCase();
                  }
                }
                obj10[3] = formatted1;
                obj10[4] = closure_21;
                obj10[5] = paymentGatewayPlanId;
                c6 = 4;
                c7 = 1;
                let obj11 = { value: null, done: false };
                obj11[0] = lib(obj10);
                return obj11;
              }
            } else if (2 === tmp10) {
              c5 = 0;
              let message = c4;
              obj9 = premiumTrialOffer(premiumDiscountOffer[27]);
              const obj12 = {};
              const merged5 = Object.assign(obj3);
              obj12.payment_gateway = constants.GOOGLE;
              obj12.error_message = message.message;
              obj9.track(closure_2_11.PAYMENT_FLOW_FAILED, obj12);
              if (callback3 != null) {
                callback3();
              }
              obj11 = callback(premiumDiscountOffer[25]);
              const result2 = obj11.captureBillingException(closure_2_23);
              (function showPurchaseErrorModal(closure_2_23) {
                let billingError = closure_2_23;
                if (!(closure_2_23 instanceof _undefined(_undefined2[11]).BillingError)) {
                  billingError = new _undefined(_undefined2[11]).BillingError(closure_2_23);
                }
                let tmpResult = _undefined(_undefined2[12]);
                if (tmpResult.isSpendingLimitError(billingError)) {
                  tmpResult = _undefined(_undefined2[12]);
                  const result = tmpResult.showSpendingLimitReachedAlert();
                } else {
                  const intl = _undefined(_undefined2[13]).intl;
                  let tmp8 = billingError.code !== _undefined(_undefined2[14]).ErrorCodes.UNKNOWN;
                  if (tmp8) {
                    tmp8 = -1 !== billingError.code;
                  }
                  if (tmp8) {
                    tmp8 = null != billingError.message;
                  }
                  let message = intl.string(_undefined(_undefined2[13]).t.LFFx5G);
                  if (tmp8) {
                    message = billingError.message;
                  }
                  const stringResult = intl.string(_undefined(_undefined2[13]).t.LFFx5G);
                  const obj = { title: null, body: null, isDismissable: true };
                  const intl2 = _undefined(_undefined2[13]).intl;
                  obj[0] = intl2.string(_undefined(_undefined2[13]).t["U+H+kd"]);
                  obj[1] = message;
                  callback(_undefined2[15]).show(obj);
                  const obj2 = callback(_undefined2[15]);
                }
              })(closure_2_23);
              if (closure_2_23 instanceof premiumTrialOffer(premiumDiscountOffer[10])) {
                throw closure_2_23;
              }
            } else if (3 === tmp10) {
              c5 = 1;
              closure_22 = c4;
              obj8 = callback(premiumDiscountOffer[25]);
              const result3 = obj8.captureBillingException(closure_22);
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
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp179) {
          c4 = tmp179;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp179;
          } else if (tmp2 === tmp181) {
            c6 = tmp;
          } else {
            c6 = tmp3;
          }
        }
      }
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