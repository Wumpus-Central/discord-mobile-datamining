// === Module 10360: handlePremiumPurchase ===

// Module 10360 (handlePremiumPurchase)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SubscriptionStore from "SubscriptionStore" /* 4523 */;
import IAPStore from "IAPStore" /* 6845 */;

const require = globalThis.__r;

const require = fn;
function validatePurchase() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _validatePurchase(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ productId: closure_129_0, premiumSubscription: closure_129_1, offerId: closure_129_2, currency: closure_129_3, price: closure_129_4, isGift: closure_129_5 } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: null };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[9]).HTTP;
          const request = { url: closure_130_12.GOOGLE_PLAY_VALIDATE_PURCHASE, body: null, rejectWithError: false };
          const obj5 = { product_id: closure_129_0, offer_id: closure_129_2, subscription_id: null, currency: null, price: null, is_gift: null };
          let id;
          if (closure_129_1 != null) {
            id = closure_129_1.id;
          }
          obj5.subscription_id = id;
          obj5.currency = closure_129_3;
          obj5.price = closure_129_4;
          obj5.is_gift = closure_129_5;
          request.body = obj5;
          c5 = 3;
          c6 = 1;
          const obj6 = { value: HTTP.post(request), done: false };
          return obj6;
        }
      } else if (2 === tmp8) {
        c4 = 0;
        closure_129_6 = closure_3;
        const tmp18 = new closure_130_1(closure_130_2[10])(closure_129_6);
        throw tmp18;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_3 = ["succeededOnlyFields"];
const setGPlayAnalytics = fn(8860).setGPlayAnalytics;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, Endpoints: closure_12 } = Constants);
const PaymentGateways = fn(1085).PaymentGateways;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

export const useHandlePremiumPurchase = function useHandlePremiumPurchase() {
  const items = [SubscriptionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  _require = stateFromStores;
  let obj = require("initialize");
  const premiumTrialOffer = require("usePremiumTrialOffer").usePremiumTrialOffer();
  let obj2 = require("usePremiumTrialOffer");
  premiumDiscountOffer = require("hooks/usePremiumDiscountOffer").usePremiumDiscountOffer();
  let obj3 = require("hooks/usePremiumDiscountOffer");
  const isEligibleForBogoOffer = require("useIsEligibleForBogoOffer").useIsEligibleForBogoOffer();
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
  _require = id(function*(premiumSubscription) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp9 === 3) {
      if (premiumSubscription === 1) {
        throw value;
      } else if (premiumSubscription === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (premiumSubscription === 1) {
            c7 = 3;
            throw value;
          } else if (premiumSubscription === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp4;
            dependencyMap = tmp10;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            closure_130_6 = undefined;
            closure_130_7 = undefined;
            closure_130_8 = undefined;
            closure_130_9 = undefined;
            closure_130_10 = undefined;
            closure_130_11 = undefined;
            closure_130_12 = undefined;
            ({ productId: closure_130_0, skuId: closure_130_1, analyticsLoadId: closure_130_2, analyticsLocation: closure_130_3, analyticsLocations: closure_130_4, analyticsData: closure_130_5, isGift } = premiumSubscription);
            if (isGift === undefined) {
              isGift = false;
            }
            closure_130_6 = isGift;
            let flag = premiumSubscription.isOneTimePurchase;
            if (flag === undefined) {
              flag = false;
            }
            closure_130_7 = flag;
            let flag2 = premiumSubscription.allowPlanChange;
            if (flag2 === undefined) {
              flag2 = true;
            }
            closure_130_8 = flag2;
            ({ applicationId: closure_130_9, giftInfoOptions: closure_130_10, onPurchaseComplete: closure_130_11, onPurchaseError: closure_130_12 } = premiumSubscription);
            let id2;
            let product2;
            let basePurchaseFlowAnalyticsFields;
            closure_130_16 = undefined;
            let succeededOnlyFields;
            closure_130_18 = undefined;
            closure_130_19 = undefined;
            closure_130_20 = undefined;
            closure_130_21 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "flex", done: null };
          }
        } else {
          if (1 === tmp10) {
            if (premiumSubscription === 1) {
              c7 = 3;
              throw value;
            } else if (premiumSubscription === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              id2 = id.getId();
              product2 = product.getProduct(closure_130_0);
              const obj7 = { isGift: closure_130_6, analyticsLoadId: closure_130_2, analyticsLocation: closure_130_3, analyticsLocations: closure_130_4 };
              basePurchaseFlowAnalyticsFields = premiumSubscription(premiumDiscountOffer[21]).getBasePurchaseFlowAnalyticsFields(obj7);
              closure_1 = closure_130_5;
              if (closure_130_5 == null) {
                closure_1 = {};
              }
              closure_130_16 = closure_1;
              succeededOnlyFields = closure_130_16.succeededOnlyFields;
              closure_130_18 = tmp172(closure_130_16, isEligibleForBogoOffer);
              const obj8 = {};
              const merged = Object.assign(basePurchaseFlowAnalyticsFields);
              obj8.subscription_plan_gateway_plan_id = closure_130_0;
              obj8.sku_id = closure_130_1;
              let price;
              if (product2 != null) {
                price = product2.price;
              }
              obj8.price = price;
              let price1;
              if (product2 != null) {
                price1 = product2.price;
              }
              obj8.regular_price = price1;
              let formatted;
              if (product2 != null) {
                formatted = product2.currencyCode.toLowerCase();
              }
              obj8.currency = formatted;
              obj8.application_id = closure_130_9;
              const merged1 = Object.assign(closure_130_18);
              closure_130_19 = obj8;
              const obj11 = {};
              const merged2 = Object.assign(closure_130_19);
              obj11.succeededOnlyFields = succeededOnlyFields;
              prop(closure_130_0, obj11);
              closure_130_20 = (function getOfferId(arg0, arg1, arg2, dependencyMap, offerIds) {
                offerIds = undefined;
                if (offerIds != null) {
                  offerIds = offerIds.offerIds;
                }
                if (null != offerIds) {
                  if (null != arg2) {
                    const tmp13 = premiumSubscription(6848).TrialIdToProductOfferId[arg2.trialId];
                    let tmp14;
                    if (tmp13 != null) {
                      tmp14 = tmp13[arg0];
                    }
                    return tmp14;
                  } else if (null != dependencyMap) {
                    const tmp9 = premiumSubscription(6848).DiscountIdToProductOfferId[dependencyMap.discountId];
                    let tmp10;
                    if (tmp9 != null) {
                      tmp10 = tmp9[arg0];
                    }
                    return tmp10;
                  }
                }
                let BOGO_OFFER_ID = null;
                if (arg1) {
                  BOGO_OFFER_ID = null;
                  if (arg0 === premiumSubscription(6848).ProductIds.PREMIUM_TIER_2_MONTHLY) {
                    BOGO_OFFER_ID = premiumSubscription(6848).BOGO_OFFER_ID;
                  }
                }
                return BOGO_OFFER_ID;
              })(closure_130_0, closure_3, closure_1, dependencyMap, product2);
              c5 = 1;
              if (!closure_130_6) {
                if (!closure_130_7) {
                  let tmp101 = tmp172;
                  if (tmp172) {
                    tmp101 = !closure_130_8;
                  }
                  if (tmp101) {
                    if (closure_130_11 != null) {
                      const obj13 = { paymentGateway: constants2.GOOGLE };
                      tmp127(obj13);
                    }
                    c5 = 0;
                  } else {
                    let tmp105 = null != c6;
                    if (tmp105) {
                      tmp105 = null != c7;
                    }
                    if (tmp105) {
                      tmp105 = null != c5;
                    }
                    if (tmp105) {
                      const obj15 = premiumSubscription(premiumDiscountOffer[25]);
                      let result = obj15.updatePendingDowngrade(closure_130_0, c6, c7, c5);
                    }
                    const obj14 = { productId: closure_130_0, premiumSubscription, offerId: closure_130_20 };
                    c6 = 6;
                    c7 = 1;
                    const obj16 = { value: validatePurchase(obj14), done: false };
                    return obj16;
                  }
                }
              }
              let tmp131 = closure_130_6;
              if (closure_130_6) {
                tmp131 = null != closure_130_10;
              }
              if (tmp131) {
                let tmp136 = null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache;
                if (tmp136) {
                  tmp136 = null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[closure_130_0];
                }
                if (tmp136) {
                  const giftInfoOptionsCache = premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache;
                  delete tmp7[tmp6];
                }
                const obj17 = {};
                const merged3 = Object.assign(closure_130_10);
                premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[closure_130_0] = obj17;
              }
              closure_130_21 = null;
              if (null != product2) {
                c5 = 2;
                closure_130_21 = premiumSubscription(premiumDiscountOffer[23]).convertToMinorCurrencyUnits(product2.price / 100, product2.currencyCode);
                c5 = 1;
                const obj20 = premiumSubscription(premiumDiscountOffer[23]);
              }
              const obj18 = { productId: closure_130_0, premiumSubscription, offerId: null, currency: null, price: null, isGift: null };
              let formatted1;
              if (product2 != null) {
                if (product2.currencyCode != null) {
                  formatted1 = str2.toLowerCase();
                }
              }
              obj18.currency = formatted1;
              obj18.price = closure_130_21;
              obj18.isGift = closure_130_6;
              c6 = 4;
              c7 = 1;
              const obj19 = { value: validatePurchase(obj18), done: false };
              return obj19;
            }
          } else if (2 === tmp10) {
            c5 = 0;
            closure_130_23 = tmp172;
            const obj21 = {};
            const merged4 = Object.assign(closure_130_19);
            obj21.payment_gateway = constants2.GOOGLE;
            obj21.error_message = closure_130_23.message;
            premiumTrialOffer(premiumDiscountOffer[26]).track(constants.PAYMENT_FLOW_FAILED, obj21);
            if (closure_130_12 != null) {
              closure_130_12();
            }
            const obj10 = premiumTrialOffer(premiumDiscountOffer[26]);
            const result1 = premiumSubscription(premiumDiscountOffer[24]).captureBillingException(closure_130_23);
            (function showPurchaseErrorModal(combined) {
              let billingError = combined;
              if (!(combined instanceof premiumSubscription(5266).BillingError)) {
                billingError = new premiumSubscription(5266).BillingError(combined);
              }
              if (tmpResult.isSpendingLimitError(billingError)) {
                const result = premiumSubscription(10362).showSpendingLimitReachedAlert();
                const tmpResult2 = premiumSubscription(10362);
              } else {
                const intl = premiumSubscription(1115).intl;
                let tmp8 = billingError.code !== premiumSubscription(4539).ErrorCodes.UNKNOWN;
                if (tmp8) {
                  tmp8 = -1 !== billingError.code;
                }
                if (tmp8) {
                  tmp8 = null != billingError.message;
                }
                let message = intl.string(premiumSubscription(1115).t.LFFx5G);
                if (tmp8) {
                  message = billingError.message;
                }
                const stringResult = intl.string(premiumSubscription(1115).t.LFFx5G);
                const obj = { title: null, body: null, isDismissable: true };
                const intl2 = premiumSubscription(1115).intl;
                obj.title = intl2.string(premiumSubscription(1115).t["U+H+kd"]);
                obj.body = message;
                closure_1_1(5387).show(obj);
                const obj2 = closure_1_1(5387);
              }
              tmpResult = premiumSubscription(10362);
            })(closure_130_23);
            if (closure_130_23 instanceof premiumTrialOffer(premiumDiscountOffer[10])) {
              throw closure_130_23;
            }
            const obj12 = premiumSubscription(premiumDiscountOffer[24]);
          } else if (3 === tmp10) {
            c5 = 1;
            closure_130_22 = tmp172;
            const result2 = premiumSubscription(premiumDiscountOffer[24]).captureBillingException(closure_130_22);
            const obj9 = premiumSubscription(premiumDiscountOffer[24]);
          } else if (4 === tmp10) {
            if (premiumSubscription === 1) {
              c7 = 3;
              throw value;
            } else if (premiumSubscription === 2) {
              c5 = 0;
              c7 = 3;
              const obj22 = { value, done: true };
              return obj22;
            } else {
              c6 = 5;
              c7 = 1;
              const obj23 = { value: premiumSubscription(premiumDiscountOffer[25]).purchase(closure_130_0, id2), done: false };
              return obj23;
            }
          } else if (5 === tmp10) {
            if (premiumSubscription === 1) {
              c7 = 3;
              throw value;
            } else if (premiumSubscription === 2) {
              c5 = 0;
              c7 = 3;
              const obj24 = { value, done: true };
              return obj24;
            }
          } else if (6 === tmp10) {
            if (premiumSubscription === 1) {
              c7 = 3;
              throw value;
            } else if (premiumSubscription === 2) {
              c5 = 0;
              c7 = 3;
              const obj25 = { value, done: true };
              return obj25;
            } else {
              let obj2 = premiumSubscription(premiumDiscountOffer[25]);
              c6 = 7;
              c7 = 1;
              const obj27 = { value: obj2.subscribe(closure_130_0, id2, c6, c7, closure_130_20), done: false };
              return obj27;
            }
          } else if (premiumSubscription === 1) {
            c7 = 3;
            throw value;
          } else if (premiumSubscription === 2) {
            c5 = 0;
            c7 = 3;
            let obj = { value, done: true };
            return obj;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp172) {
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp172;
        } else if (tmp2 === tmp174) {
          c6 = tmp;
        } else {
          c6 = tmp3;
        }
      }
    }
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