// === Module 10487: createOrReuseGiftOrder ===

// Module 10487 (createOrReuseGiftOrder)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1096 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import _modDef4467 from "module_4467" /* 4467 */;
import PaymentConstants from "PaymentConstants" /* 4875 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c5, c6;

const ItemPurchaseType = PaymentConstants.ItemPurchaseType;
const SubscriptionPlanInfo = PremiumConstants.SubscriptionPlanInfo;
const PaymentGateways = Constants.PaymentGateways;
let closure_8 = new LoggerDefault("createOrReuseGiftOrder");
new LoggerDefault("createOrReuseGiftOrder");
let result = size.fileFinishedImporting("modules/payments/native/utils/createOrReuseGiftOrder.tsx");

export const useCreateOrReuseGiftOrder = function useCreateOrReuseGiftOrder(GiftPurchaseButton) {
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async function(arg0) {
    let APPLE;
    let c0;
    let c1;
    let c2;
    let items;
    let obj12;
    let obj7;
    let subtractResult;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let skuId;
      try {
        let subscriptionPlanId;
        let recipientUserId;
        let external_product_id;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            subscriptionPlanId = undefined;
            recipientUserId = undefined;
            external_product_id = undefined;
            ({ planId: c0, recipientUserId: c1, productId: c2 } = location);
            skuId = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          let error;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              skuId = SubscriptionPlanInfo[subscriptionPlanId];
              if (null == skuId) {
                const _Error = Error;
                const _HermesInternal2 = HermesInternal;
                const self = this;
                const self2 = this;
                error = new Error("Invalid plan id: " + subscriptionPlanId);
                throw error;
              } else {
                skuId = skuId.skuId;
                c4 = 1;
                const obj5 = { skuId, paymentGateway: APPLE, recipientUserId, purchaseType: constants.ONE_TIME, isGift: true, createdAfter: subtractResult.toISOString(), subscriptionPlanId, externalGatewayFacet: obj7 };
                const getOrCreateOrder = location(dependencyMap[6]).getOrCreateOrder;
                const tmp55 = location(dependencyMap[6]);
                const obj16 = location(dependencyMap[7]);
                if (obj16.isAndroid()) {
                  APPLE = constants.GOOGLE;
                } else {
                  APPLE = constants.APPLE;
                }
                const obj6 = _modDef4467();
                const utcResult = obj6.utc();
                subtractResult = utcResult.subtract(location(dependencyMap[6]).DRAFT_ORDER_LOOKBACK_DAYS, "days");
                obj7 = { line_items: items };
                const obj8 = { external_product_id };
                items = [obj8];
                c5 = 3;
                c6 = 1;
                const obj9 = { value: getOrCreateOrder(obj5), done: false };
                return obj9;
              }
            }
          } else if (2 === c5) {
            c4 = 0;
            error = skuId;
            const obj10 = { error, skuId, location };
            logger.error("Failed to create order for gift purchase", obj10);
            const obj11 = { tags: obj12 };
            obj12 = { skuId, source: "" + location + "_createOrder" };
            const _HermesInternal = HermesInternal;
            const captureBillingException = location(dependencyMap[9]).captureBillingException;
            const tmp16 = location(dependencyMap[9]);
            const result = captureBillingException(error, obj11);
            throw error;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
        }
      } catch (tmp36) {
        skuId = tmp36;
        if (0 === c4) {
          c6 = 3;
          throw tmp36;
        } else {
          c5 = 2;
        }
      }
    }
  });
  let items = [GiftPurchaseButton];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
};