// === Module 10703: handlePremiumPurchase ===

// Module 10703 (handlePremiumPurchase)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import IAPStore from "IAPStore" /* 7237 */;

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
let closure_15 = async function _validatePurchase(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[9]).HTTP;
          const request = { url: closure_130_12.GOOGLE_PLAY_VALIDATE_PURCHASE, body: null, rejectWithError: false };
          const obj2 = { product_id: closure_129_0, offer_id: closure_129_2, subscription_id: null, currency: null, price: null, is_gift: null };
          let id;
          if (closure_129_1 != null) {
            id = closure_129_1.id;
          }
          obj2.subscription_id = id;
          obj2.currency = closure_129_3;
          obj2.price = closure_129_4;
          obj2.is_gift = closure_129_5;
          request.body = obj2;
          c5 = 3;
          c6 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
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
        obj = { value, done: true };
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
const setGPlayAnalytics = fn(9368).setGPlayAnalytics;
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
  _require = id((premiumSubscription) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0, value) {
      if (1 === tmp10) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          const id2 = id.getId();
          const product2 = product.getProduct(closure_130_0);
          const basePurchaseFlowAnalyticsFields = premiumSubscription(premiumDiscountOffer[21]).getBasePurchaseFlowAnalyticsFields({ isGift: closure_130_6, analyticsLoadId: closure_130_2, analyticsLocation: closure_130_3, analyticsLocations: closure_130_4 });
          closure_1 = closure_130_5;
          if (closure_130_5 == null) {
            closure_1 = {};
          }
          closure_130_16 = closure_1;
          const succeededOnlyFields = closure_130_16.succeededOnlyFields;
          closure_130_18 = tmp172(closure_130_16, isEligibleForBogoOffer);
          const obj3 = {};
          const merged = Object.assign(basePurchaseFlowAnalyticsFields);
          obj3.subscription_plan_gateway_plan_id = closure_130_0;
          obj3.sku_id = closure_130_1;
          let price;
          if (product2 != null) {
            price = product2.price;
          }
          obj3.price = price;
          let price1;
          if (product2 != null) {
            price1 = product2.price;
          }
          obj3.regular_price = price1;
          let formatted;
          if (product2 != null) {
            formatted = product2.currencyCode.toLowerCase();
          }
          obj3.currency = formatted;
          obj3.application_id = closure_130_9;
          const merged1 = Object.assign(closure_130_18);
          closure_130_19 = obj3;
          const obj4 = {};
          const merged2 = Object.assign(closure_130_19);
          obj4.succeededOnlyFields = succeededOnlyFields;
          prop(closure_130_0, obj4);
          closure_130_20 = (function getOfferId(arg0, arg1, arg2, arg3, offerIds) {
            offerIds = undefined;
            if (offerIds != null) {
              offerIds = offerIds.offerIds;
            }
            if (null != offerIds) {
              if (null != arg2) {
                const tmp13 = premiumSubscription(7240).TrialIdToProductOfferId[arg2.trialId];
                let tmp14;
                if (tmp13 != null) {
                  tmp14 = tmp13[arg0];
                }
                return tmp14;
              } else if (null != arg3) {
                const tmp9 = premiumSubscription(7240).DiscountIdToProductOfferId[arg3.discountId];
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
              if (arg0 === premiumSubscription(7240).ProductIds.PREMIUM_TIER_2_MONTHLY) {
                BOGO_OFFER_ID = tmp5(7240).BOGO_OFFER_ID;
              }
              tmp5 = premiumSubscription;
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
                  let obj5 = { paymentGateway: constants2.GOOGLE };
                  tmp127(obj5);
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
                  let obj14 = premiumSubscription(premiumDiscountOffer[25]);
                  let result = obj14.updatePendingDowngrade(closure_130_0, c6, c7, c5);
                }
                c6 = 6;
                c7 = 1;
                return { value: validatePurchase({ productId: closure_130_0, premiumSubscription, offerId: closure_130_20 }), done: false };
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
            let obj8 = {};
            const merged3 = Object.assign(closure_130_10);
            premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[closure_130_0] = obj8;
          }
          closure_130_21 = null;
          if (null != product2) {
            closure_130_21 = premiumSubscription(premiumDiscountOffer[23]).convertToMinorCurrencyUnits(product2.price / 100, product2.currencyCode);
            c5 = 1;
            premiumSubscription(premiumDiscountOffer[23]);
          }
          let obj9 = { productId: closure_130_0, premiumSubscription, offerId: null, currency: null, price: null, isGift: null };
          let formatted1;
          if (product2 != null) {
            if (product2.currencyCode != null) {
              formatted1 = str2.toLowerCase();
            }
          }
          obj9.currency = formatted1;
          obj9.price = closure_130_21;
          obj9.isGift = closure_130_6;
          c6 = 4;
          c7 = 1;
          return { value: validatePurchase(obj9), done: false };
        }
      } else if (2 === tmp10) {
        c5 = 0;
        closure_130_23 = tmp172;
        obj9 = premiumTrialOffer(premiumDiscountOffer[26]);
        let obj11 = {};
        const merged4 = Object.assign(closure_130_19);
        obj11.payment_gateway = constants2.GOOGLE;
        obj11.error_message = closure_130_23.message;
        obj9.track(constants.PAYMENT_FLOW_FAILED, obj11);
        if (closure_130_12 != null) {
          closure_130_12();
        }
        obj11 = premiumSubscription(premiumDiscountOffer[24]);
        const result1 = obj11.captureBillingException(closure_130_23);
        (function showPurchaseErrorModal(combined) {
          let billingError = combined;
          if (!(combined instanceof premiumSubscription(4461).BillingError)) {
            billingError = new tmp(4461).BillingError(combined);
          }
          let tmpResult = tmp(10705);
          if (tmpResult.isSpendingLimitError(billingError)) {
            tmpResult = tmp(10705);
            const result = tmpResult.showSpendingLimitReachedAlert();
          } else {
            const intl = tmp(1114).intl;
            let tmp8 = billingError.code !== tmp(4240).ErrorCodes.UNKNOWN;
            if (tmp8) {
              tmp8 = -1 !== billingError.code;
            }
            if (tmp8) {
              tmp8 = null != billingError.message;
            }
            let message = intl.string(tmp(1114).t.LFFx5G);
            if (tmp8) {
              message = billingError.message;
            }
            const stringResult = intl.string(tmp(1114).t.LFFx5G);
            const obj = { title: null, body: null, isDismissable: true };
            const intl2 = tmp(1114).intl;
            obj.title = intl2.string(tmp(1114).t["U+H+kd"]);
            obj.body = message;
            closure_1_1(4904).show(obj);
            const obj2 = closure_1_1(4904);
          }
        })(closure_130_23);
        if (closure_130_23 instanceof premiumTrialOffer(premiumDiscountOffer[10])) {
          throw closure_130_23;
        }
      } else if (3 === tmp10) {
        c5 = 1;
        closure_130_22 = tmp172;
        obj8 = premiumSubscription(premiumDiscountOffer[24]);
        const result2 = obj8.captureBillingException(closure_130_22);
      } else if (4 === tmp10) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          return { value, done: true };
        } else {
          obj5 = premiumSubscription(premiumDiscountOffer[25]);
          c6 = 5;
          c7 = 1;
          return { value: obj5.purchase(closure_130_0, id2), done: false };
        }
      } else if (5 === tmp10) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj14 = { value, done: true };
          return obj14;
        }
      } else if (6 === tmp10) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          return { value, done: true };
        } else {
          obj1 = premiumSubscription(premiumDiscountOffer[25]);
          c6 = 7;
          c7 = 1;
          return { value: obj1.subscribe(closure_130_0, id2, c6, c7, closure_130_20), done: false };
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        return { value, done: true };
      }
      yield "HermesInternal";
      closure_3 = tmp4;
      ({ productId: closure_130_0, skuId: closure_130_1, analyticsLoadId: closure_130_2, analyticsLocation: closure_130_3, analyticsLocations: closure_130_4, analyticsData: closure_130_5, isGift } = premiumSubscription);
      if (isGift === undefined) {
        isGift = false;
      }
      closure_130_6 = isGift;
      let flag = tmp192.isOneTimePurchase;
      if (flag === undefined) {
        flag = false;
      }
      closure_130_7 = flag;
      let flag2 = tmp192.allowPlanChange;
      if (flag2 === undefined) {
        flag2 = true;
      }
      closure_130_8 = flag2;
      ({ applicationId: closure_130_9, giftInfoOptions: closure_130_10, onPurchaseComplete: closure_130_11, onPurchaseError: closure_130_12 } = premiumSubscription);
      return "PX_16";
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