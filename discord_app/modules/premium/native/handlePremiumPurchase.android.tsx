// discord_app/modules/premium/native/handlePremiumPurchase.android.tsx
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

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
          ({
            productId: closure_129_0,
            premiumSubscription: closure_129_1,
            offerId: closure_129_2,
            currency: closure_129_3,
            price: closure_129_4,
            isGift: closure_129_5,
          } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "flexDirection", done: true };
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
          const obj5 = {
            product_id: closure_129_0,
            offer_id: closure_129_2,
            subscription_id: null,
            currency: null,
            price: null,
            is_gift: null,
          };
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
const setGPlayAnalytics = fn(9891).setGPlayAnalytics;
const Constants = fn(1072);
({ AnalyticEvents: closure_11, Endpoints: closure_12 } = Constants);
const PaymentGateways = fn(1083).PaymentGateways;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

export function useHandlePremiumPurchase() {
  const items = [SubscriptionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
  _require = stateFromStores;
  let obj = require("initialize");
  const premiumTrialOffer = require("usePremiumTrialOffer").usePremiumTrialOffer();
  let obj2 = require("usePremiumTrialOffer");
  premiumDiscountOffer = require("hooks/usePremiumDiscountOffer").usePremiumDiscountOffer();
  const obj3 = require("hooks/usePremiumDiscountOffer");
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
  _require = id(function* (premiumSubscription) {
    if (1 === tmp10) {
      if (premiumSubscription === 1) {
        c9 = 3;
        throw value;
      } else if (premiumSubscription === 2) {
        c9 = 3;
        return { value, done: true };
      } else {
        const id2 = id.getId();
        const product2 = product.getProduct(closure_132_0);
        closure_132_16 = (function getOneTimeOffer(oneTimeOffers, arg1) {
          closure_0 = arg1;
          let tmp = null;
          if (null != arg1) {
            let found;
            if (oneTimeOffers != null) {
              oneTimeOffers = oneTimeOffers.oneTimeOffers;
              if (oneTimeOffers != null) {
                found = oneTimeOffers.find((offerId) => offerId.offerId === closure_0);
              }
            }
            if (found == null) {
              found = null;
            }
            tmp = found;
          }
          return tmp;
        })(product2, closure_132_11);
        let price;
        if (closure_132_16 != null) {
          price = closure_132_16.price;
        }
        let price1 = price;
        if (price == null) {
          price1 = undefined;
          if (product2 != null) {
            price1 = product2.price;
          }
        }
        closure_132_17 = price1;
        const basePurchaseFlowAnalyticsFields = premiumSubscription(
          premiumDiscountOffer[21],
        ).getBasePurchaseFlowAnalyticsFields({
          isGift: closure_132_6,
          analyticsLoadId: closure_132_2,
          analyticsLocation: closure_132_3,
          analyticsLocations: closure_132_4,
        });
        dependencyMap = closure_132_5;
        if (closure_132_5 == null) {
          dependencyMap = {};
        }
        closure_132_19 = dependencyMap;
        const succeededOnlyFields = closure_132_19.succeededOnlyFields;
        closure_132_21 = closure_4(closure_132_19, isEligibleForBogoOffer);
        const obj8 = {};
        const merged = Object.assign(basePurchaseFlowAnalyticsFields);
        obj8.subscription_plan_gateway_plan_id = closure_132_0;
        obj8.sku_id = closure_132_1;
        obj8.price = closure_132_17;
        let price2;
        if (product2 != null) {
          price2 = product2.price;
        }
        obj8.regular_price = price2;
        let formatted;
        if (product2 != null) {
          formatted = product2.currencyCode.toLowerCase();
        }
        obj8.currency = formatted;
        obj8.application_id = closure_132_9;
        const merged1 = Object.assign(closure_132_21);
        closure_132_22 = obj8;
        const obj11 = {};
        const merged2 = Object.assign(closure_132_22);
        obj11.succeededOnlyFields = succeededOnlyFields;
        prop(closure_132_0, obj11);
        closure_132_23 = (function getOfferId(arg0, c3, price1, dependencyMap, offerIds) {
          offerIds = undefined;
          if (offerIds != null) {
            offerIds = offerIds.offerIds;
          }
          if (null != offerIds) {
            if (null != price1) {
              const tmp13 = premiumSubscription(7586).TrialIdToProductOfferId[price1.trialId];
              let tmp14;
              if (tmp13 != null) {
                tmp14 = tmp13[arg0];
              }
              return tmp14;
            } else if (null != dependencyMap) {
              const tmp9 = premiumSubscription(7586).DiscountIdToProductOfferId[dependencyMap.discountId];
              let tmp10;
              if (tmp9 != null) {
                tmp10 = tmp9[arg0];
              }
              return tmp10;
            }
          }
          let BOGO_OFFER_ID = null;
          if (c3) {
            BOGO_OFFER_ID = null;
            if (arg0 === premiumSubscription(7586).ProductIds.PREMIUM_TIER_2_MONTHLY) {
              BOGO_OFFER_ID = premiumSubscription(7586).BOGO_OFFER_ID;
            }
          }
          return BOGO_OFFER_ID;
        })(closure_132_0, c3, price1, dependencyMap, product2);
        c7 = 1;
        if (!closure_132_6) {
          if (!closure_132_7) {
            let tmp115 = closure_4;
            if (closure_4) {
              tmp115 = !closure_132_8;
            }
            if (tmp115) {
              if (closure_132_12 != null) {
                tmp141({ paymentGateway: constants2.GOOGLE });
              }
              c7 = 0;
            } else {
              let tmp119 = null != closure_6;
              if (tmp119) {
                tmp119 = null != c7;
              }
              if (tmp119) {
                tmp119 = null != closure_5;
              }
              if (tmp119) {
                let result = premiumSubscription(premiumDiscountOffer[25]).updatePendingDowngrade(
                  closure_132_0,
                  closure_6,
                  c7,
                  closure_5,
                );
                premiumSubscription(premiumDiscountOffer[25]);
              }
              c8 = 6;
              c9 = 1;
              return {
                value: validatePurchase({ productId: closure_132_0, premiumSubscription, offerId: closure_132_23 }),
                done: false,
              };
            }
          }
        }
        let tmp145 = closure_132_6;
        if (closure_132_6) {
          tmp145 = null != closure_132_10;
        }
        if (tmp145) {
          let tmp150 = null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache;
          if (tmp150) {
            tmp150 = null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[closure_132_0];
          }
          if (tmp150) {
            const giftInfoOptionsCache = premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache;
            delete tmp7[tmp6];
          }
          const merged3 = Object.assign(closure_132_10);
          premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[closure_132_0] = {};
        }
        if (null != closure_132_11) {
          if (null == closure_132_16) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Google Play offer " + closure_132_11 + " is unavailable for " + closure_132_0);
            throw error;
          }
        }
        closure_132_24 = null;
        if (null != product2) {
          if (null != closure_132_17) {
            closure_132_24 = premiumSubscription(premiumDiscountOffer[23]).convertToMinorCurrencyUnits(
              closure_132_17 / 100,
              product2.currencyCode,
            );
            c7 = 1;
            premiumSubscription(premiumDiscountOffer[23]);
          }
        }
        const obj19 = {
          productId: closure_132_0,
          premiumSubscription,
          offerId: null,
          currency: null,
          price: null,
          isGift: null,
        };
        let formatted1;
        if (product2 != null) {
          if (product2.currencyCode != null) {
            formatted1 = str2.toLowerCase();
          }
        }
        obj19.currency = formatted1;
        obj19.price = closure_132_24;
        obj19.isGift = closure_132_6;
        c8 = 4;
        c9 = 1;
        return { value: validatePurchase(obj19), done: false };
      }
    } else if (2 === tmp10) {
      c7 = 0;
      closure_132_26 = closure_6;
      const obj21 = {};
      const merged4 = Object.assign(closure_132_22);
      obj21.payment_gateway = constants2.GOOGLE;
      obj21.error_message = closure_132_26.message;
      premiumTrialOffer(premiumDiscountOffer[26]).track(constants.PAYMENT_FLOW_FAILED, obj21);
      if (closure_132_13 != null) {
        closure_132_13();
      }
      premiumTrialOffer(premiumDiscountOffer[26]);
      const result1 = premiumSubscription(premiumDiscountOffer[24]).captureBillingException(closure_132_26);
      (function showPurchaseErrorModal(message) {
        let billingError = message;
        if (!(message instanceof premiumSubscription(6440).BillingError)) {
          billingError = new premiumSubscription(6440).BillingError(message);
        }
        if (tmpResult.isSpendingLimitError(billingError)) {
          const result = premiumSubscription(10549).showSpendingLimitReachedAlert();
          const tmpResult2 = premiumSubscription(10549);
        } else {
          const intl = premiumSubscription(1114).intl;
          let tmp8 = billingError.code !== premiumSubscription(4829).ErrorCodes.UNKNOWN;
          if (tmp8) {
            tmp8 = -1 !== billingError.code;
          }
          if (tmp8) {
            tmp8 = null != billingError.message;
          }
          message = intl.string(premiumSubscription(1114).t.LFFx5G);
          if (tmp8) {
            message = billingError.message;
          }
          const stringResult = intl.string(premiumSubscription(1114).t.LFFx5G);
          const obj = { title: null, body: null, isDismissable: true };
          const intl2 = premiumSubscription(1114).intl;
          obj.title = intl2.string(premiumSubscription(1114).t["U+H+kd"]);
          obj.body = message;
          price1(5953).show(obj);
          const obj2 = price1(5953);
        }
        tmpResult = premiumSubscription(10549);
      })(closure_132_26);
      if (closure_132_26 instanceof premiumTrialOffer(premiumDiscountOffer[10])) {
        throw closure_132_26;
      }
      premiumSubscription(premiumDiscountOffer[24]);
    } else if (3 === tmp10) {
      c7 = 1;
      closure_132_25 = closure_6;
      const result2 = premiumSubscription(premiumDiscountOffer[24]).captureBillingException(closure_132_25);
      premiumSubscription(premiumDiscountOffer[24]);
    } else if (4 === tmp10) {
      if (premiumSubscription === 1) {
        c9 = 3;
        throw value;
      } else if (premiumSubscription === 2) {
        c7 = 0;
        c9 = 3;
        return { value, done: true };
      } else {
        let offerId;
        if (closure_132_16 != null) {
          offerId = closure_132_16.offerId;
        }
        c3 = offerId;
        if (offerId == null) {
          c3 = null;
        }
        c8 = 5;
        c9 = 1;
        return { value: premiumSubscription(premiumDiscountOffer[25]).purchase(closure_132_0, id2, c3), done: false };
      }
    } else if (5 === tmp10) {
      if (premiumSubscription === 1) {
        c9 = 3;
        throw value;
      } else if (premiumSubscription === 2) {
        c7 = 0;
        c9 = 3;
        return { value, done: true };
      }
    } else if (6 === tmp10) {
      if (premiumSubscription === 1) {
        c9 = 3;
        throw value;
      } else if (premiumSubscription === 2) {
        c7 = 0;
        c9 = 3;
        return { value, done: true };
      } else {
        c8 = 7;
        c9 = 1;
        premiumSubscription(premiumDiscountOffer[25]);
        return {
          value: premiumSubscription(premiumDiscountOffer[25]).subscribe(
            closure_132_0,
            id2,
            closure_6,
            c7,
            closure_132_23,
          ),
          done: false,
        };
      }
    } else if (premiumSubscription === 1) {
      c9 = 3;
      throw value;
    } else if (premiumSubscription === 2) {
      c7 = 0;
      c9 = 3;
      return { value, done: true };
    }
    yield "HermesInternal";
    closure_5 = tmp4;
    ({
      productId: closure_132_0,
      skuId: closure_132_1,
      analyticsLoadId: closure_132_2,
      analyticsLocation: closure_132_3,
      analyticsLocations: closure_132_4,
      analyticsData: closure_132_5,
      isGift,
    } = premiumSubscription);
    if (isGift === undefined) {
      isGift = false;
    }
    closure_132_6 = isGift;
    let flag = premiumSubscription.isOneTimePurchase;
    if (flag === undefined) {
      flag = false;
    }
    closure_132_7 = flag;
    let flag2 = premiumSubscription.allowPlanChange;
    if (flag2 === undefined) {
      flag2 = true;
    }
    closure_132_8 = flag2;
    ({
      applicationId: closure_132_9,
      giftInfoOptions: closure_132_10,
      googleOfferId: closure_132_11,
      onPurchaseComplete: closure_132_12,
      onPurchaseError: closure_132_13,
    } = premiumSubscription);
    return "flexDirection";
  });
  const items1 = [
    null != stateFromStores,
    paymentGatewayPlanId,
    prop,
    id,
    premiumTrialOffer,
    premiumDiscountOffer,
    stateFromStores,
    isEligibleForBogoOffer,
  ];
  return paymentGatewayPlanId.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
}
