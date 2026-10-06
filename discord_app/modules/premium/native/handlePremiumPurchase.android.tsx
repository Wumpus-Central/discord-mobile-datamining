// === Module 10448: handlePremiumPurchase ===

// Module 10448 (handlePremiumPurchase)
import Constants2 from "Constants" /* 1096 */;
import GPlayAnalyticsStore from "GPlayAnalyticsStore" /* 8902 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import IAPStore from "IAPStore" /* 6931 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c6;

let closure_12;
let unpackModuleId;
function validatePurchase() {
  return obj(...arguments);
}
let obj = function _validatePurchase() {
  obj = _asyncToGenerator(async function(product_id) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let is_gift;
    let obj5;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (product_id === 1) {
        throw value;
      } else if (product_id === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let price;
      try {
        let id;
        let offer_id;
        let currency;
        c6 = 2;
        if (0 === is_gift) {
          if (product_id === 1) {
            c6 = 3;
            throw value;
          } else if (product_id === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            product_id = undefined;
            id = undefined;
            offer_id = undefined;
            currency = undefined;
            price = undefined;
            ({ productId: c0, premiumSubscription: c1, offerId: c2, currency: c3, price: c4, isGift: c5 } = closure_0);
            is_gift = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          let self;
          if (1 === is_gift) {
            if (product_id === 1) {
              c6 = 3;
              throw value;
            } else if (product_id === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              price = 1;
              const HTTP = closure_130_0(closure_130_2[9]).HTTP;
              self = HTTP.post;
              const request = { url: closure_130_12.GOOGLE_PLAY_VALIDATE_PURCHASE, body: obj5, rejectWithError: false };
              obj5 = { product_id, offer_id, subscription_id: id, currency, price, is_gift };
              id = undefined;
              if (id != null) {
                id = id.id;
              }
              self = self(request);
              is_gift = 3;
              c6 = 1;
              const obj6 = { value: self, done: false };
              return obj6;
            }
          } else if (2 === is_gift) {
            price = 0;
            let closure_6 = closure_3;
            self = this;
            const self2 = this;
            const tmp12 = new closure_130_1(closure_130_2[10])(closure_6);
            throw tmp12;
          } else if (product_id === 1) {
            c6 = 3;
            throw value;
          } else if (product_id === 2) {
            price = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            price = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp19) {
        closure_3 = tmp19;
        if (0 === price) {
          c6 = 3;
          throw tmp19;
        } else {
          is_gift = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = ["succeededOnlyFields"];
const setGPlayAnalytics = GPlayAnalyticsStore.setGPlayAnalytics;
({ AnalyticEvents: unpackModuleId, Endpoints: closure_12 } = Constants);
const PaymentGateways = Constants2.PaymentGateways;
let result = size.fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

export const useHandlePremiumPurchase = function useHandlePremiumPurchase() {
  let premiumDiscountOffer;
  let premiumTypeSubscription;
  let stateFromStores;
  obj = stateFromStores(premiumDiscountOffer[17]);
  const items = [SubscriptionStore];
  stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj2 = stateFromStores(premiumDiscountOffer[18]);
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  const obj3 = stateFromStores(premiumDiscountOffer[19]);
  premiumDiscountOffer = obj3.usePremiumDiscountOffer();
  const obj4 = stateFromStores(premiumDiscountOffer[20]);
  const isEligibleForBogoOffer = obj4.useIsEligibleForBogoOffer();
  let closure_4 = tmp5;
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
  const useCallback = paymentGatewayPlanId.useCallback;
  let closure_0 = id(function*(arg0) {
    let c0;
    let c1;
    let c10;
    let c11;
    let c12;
    let c2;
    let c3;
    let c4;
    let c5;
    let c7;
    let c9;
    let flag;
    let flag2;
    let formatted;
    let formatted1;
    let id2;
    let isGift;
    let obj6;
    let obj8;
    let offerId;
    let price;
    let price1;
    function getOfferId(c0, arg1, arg2, arg3, offerIds) {
      offerIds = undefined;
      if (offerIds != null) {
        offerIds = offerIds.offerIds;
      }
      if (null != offerIds) {
        if (null != arg2) {
          const tmp13 = closure_1_0(analyticsLoadId[16]).TrialIdToProductOfferId[arg2.trialId];
          let tmp14;
          if (tmp13 != null) {
            tmp14 = tmp13[c0];
          }
          return tmp14;
        } else if (null != arg3) {
          const tmp9 = closure_1_0(analyticsLoadId[16]).DiscountIdToProductOfferId[arg3.discountId];
          let tmp10;
          if (tmp9 != null) {
            tmp10 = tmp9[c0];
          }
          return tmp10;
        }
      }
      let BOGO_OFFER_ID = null;
      if (arg1) {
        BOGO_OFFER_ID = null;
        if (c0 === closure_1_0(analyticsLoadId[16]).ProductIds.PREMIUM_TIER_2_MONTHLY) {
          BOGO_OFFER_ID = closure_1_0(analyticsLoadId[16]).BOGO_OFFER_ID;
        }
      }
      return BOGO_OFFER_ID;
    }
    function showPurchaseErrorModal(combined) {
      let intl2;
      let billingError = combined;
      if (!(combined instanceof closure_1_0(analyticsLoadId[11]).BillingError)) {
        const self = this;
        const self2 = this;
        billingError = new closure_1_0(analyticsLoadId[11]).BillingError(combined);
      }
      const tmpResult = closure_1_0(analyticsLoadId[12]);
      if (tmpResult.isSpendingLimitError(billingError)) {
        const tmpResult2 = closure_1_0(analyticsLoadId[12]);
        const result = tmpResult2.showSpendingLimitReachedAlert();
      } else {
        const intl = closure_1_0(analyticsLoadId[13]).intl;
        const stringResult = intl.string(closure_1_0(analyticsLoadId[13]).t.LFFx5G);
        message = stringResult;
        const tmp6 = billingError.code !== closure_1_0(analyticsLoadId[14]).ErrorCodes.UNKNOWN && -1 !== billingError.code && null != billingError.message;
        if (tmp6) {
          message = billingError.message;
        }
        obj = { title: intl2.string(closure_1_0(analyticsLoadId[13]).t["U+H+kd"]), body: message, isDismissable: true };
        const show = sku_id(analyticsLoadId[15]).show;
        sku_id(analyticsLoadId[15]);
        intl2 = closure_1_0(analyticsLoadId[13]).intl;
        show(obj);
      }
    }
    if (1 === tmp4) {
      if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        id2 = id.getId();
        const product2 = product.getProduct(productId);
        const obj7 = { isGift, analyticsLoadId, analyticsLocation, analyticsLocations };
        const obj25 = premiumSubscription(premiumDiscountOffer[21]);
        const basePurchaseFlowAnalyticsFields = obj25.getBasePurchaseFlowAnalyticsFields(obj7);
        let closure_1 = c5;
        if (c5 == null) {
          closure_1 = {};
        }
        let succeededOnlyFields = closure_1;
        succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
        let closure_18 = closure_2_4(succeededOnlyFields, isEligibleForBogoOffer);
        obj8 = { subscription_plan_gateway_plan_id: productId, sku_id, price, regular_price: price1, currency: formatted, application_id };
        const merged = Object.assign(basePurchaseFlowAnalyticsFields);
        price = undefined;
        if (product2 != null) {
          price = product2.price;
        }
        price1 = undefined;
        if (product2 != null) {
          price1 = product2.price;
        }
        formatted = undefined;
        if (product2 != null) {
          const str = product2.currencyCode;
          formatted = str.toLowerCase();
        }
        const merged1 = Object.assign(closure_18);
        const obj10 = { succeededOnlyFields };
        const merged2 = Object.assign(obj8);
        prop(productId, obj10);
        offerId = getOfferId(productId, closure_3, closure_1, closure_2, product2);
        c5 = 1;
        const tmp93 = isGift;
        if (!tmp93) {
          const tmp94 = flag;
          if (!tmp94) {
            const tmp96 = closure_4 && !flag2;
            if (tmp96) {
              if (c11 != null) {
                const obj12 = { paymentGateway: constants2.GOOGLE };
                tmp122(obj12);
              }
              c5 = 0;
            } else {
              const tmp100 = null != c6 && null != c7 && null != c5;
              if (tmp100) {
                const obj14 = premiumSubscription(premiumDiscountOffer[25]);
                let result = obj14.updatePendingDowngrade(productId, c6, c7, c5);
              }
              const obj13 = { productId, premiumSubscription, offerId };
              c6 = 6;
              c7 = 1;
              const obj15 = { value: validatePurchase(obj13), done: false };
              return obj15;
            }
          }
        }
        const tmp126 = isGift && null != c10;
        if (tmp126) {
          const tmp131 = null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache && null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[productId];
          if (tmp131) {
            delete premiumTrialOffer(undefined, premiumDiscountOffer[22]).giftInfoOptionsCache[productId];
          }
          const obj16 = {};
          const giftInfoOptionsCache = premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache;
          const merged3 = Object.assign(c10);
          giftInfoOptionsCache[productId] = obj16;
        }
        price = null;
        if (null != product2) {
          const obj19 = premiumSubscription(premiumDiscountOffer[23]);
          price = obj19.convertToMinorCurrencyUnits(product2.price / 100, product2.currencyCode);
          c5 = 1;
        }
        const obj17 = { productId, premiumSubscription, offerId: null, currency: formatted1, price, isGift };
        formatted1 = undefined;
        if (product2 != null) {
          if (product2.currencyCode != null) {
            formatted1 = str2.toLowerCase();
          }
        }
        c6 = 4;
        c7 = 1;
        const obj18 = { value: validatePurchase(obj17), done: false };
        return obj18;
      }
    } else if (2 === tmp4) {
      c5 = 0;
      let message = closure_4;
      const obj20 = { payment_gateway: constants2.GOOGLE, error_message: message.message };
      const track = premiumTrialOffer(premiumDiscountOffer[26]).track;
      const PAYMENT_FLOW_FAILED = constants.PAYMENT_FLOW_FAILED;
      const tmp35 = premiumTrialOffer(premiumDiscountOffer[26]);
      const merged4 = Object.assign(obj8);
      track(PAYMENT_FLOW_FAILED, obj20);
      if (c12 != null) {
        c12();
      }
      const obj11 = premiumSubscription(premiumDiscountOffer[24]);
      const result1 = obj11.captureBillingException(message);
      showPurchaseErrorModal(message);
      if (message instanceof premiumTrialOffer(premiumDiscountOffer[10])) {
        throw message;
      }
    } else if (3 === tmp4) {
      c5 = 1;
      let closure_22 = closure_4;
      const obj9 = premiumSubscription(premiumDiscountOffer[24]);
      const result2 = obj9.captureBillingException(closure_22);
    } else if (4 === tmp4) {
      if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj21 = { value, done: true };
        return obj21;
      } else {
        c6 = 5;
        c7 = 1;
        const obj22 = { value: obj6.purchase(productId, id2), done: false };
        obj6 = premiumSubscription(premiumDiscountOffer[25]);
        return obj22;
      }
    } else if (5 === tmp4) {
      if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj23 = { value, done: true };
        return obj23;
      }
    } else if (6 === tmp4) {
      if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj24 = { value, done: true };
        return obj24;
      } else {
        let tmp6 = closure_3;
        const obj2 = premiumSubscription(premiumDiscountOffer[25]);
        let tmp9 = productId;
        let tmp10 = id2;
        let tmp13 = offerId;
        let tmp14 = obj2;
        c6 = 7;
        c7 = 1;
        const obj26 = { value: obj2.subscribe(productId, id2, c6, c7, offerId), done: false };
        return obj26;
      }
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 0;
      c7 = 3;
      obj = { value, done: true };
      return obj;
    }
    yield "IconComponent";
    closure_3 = tmp;
    ({ productId: c0, skuId: c1, analyticsLoadId: c2, analyticsLocation: c3, analyticsLocations: c4, analyticsData: c5, isGift } = premiumSubscription);
    if (isGift === undefined) {
      isGift = false;
    }
    flag = premiumSubscription.isOneTimePurchase ?? false;
    flag2 = premiumSubscription.allowPlanChange ?? true;
    ({ applicationId: c9, giftInfoOptions: c10, onPurchaseComplete: c11, onPurchaseError: c12 } = premiumSubscription);
    return "Reflect";
  });
  const items1 = [tmp5, paymentGatewayPlanId, prop, id, premiumTrialOffer, premiumDiscountOffer, stateFromStores, isEligibleForBogoOffer];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items1);
};