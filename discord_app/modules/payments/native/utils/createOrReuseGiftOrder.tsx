// === Module 10519: useCreateOrReuseGiftOrder ===

// Module 10519 (useCreateOrReuseGiftOrder)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { ItemPurchaseType } from "CustomCheckoutFlow" /* 4460 */;
import { SubscriptionPlanInfo } from "GuildFeatures" /* 1924 */;
import { PaymentGateways } from "sum" /* 505 */;

const require = arg1;
let closure_8 = new timestampDefault("createOrReuseGiftOrder");
const tmp2 = new timestampDefault("createOrReuseGiftOrder");
let result = require("set").fileFinishedImporting("modules/payments/native/utils/createOrReuseGiftOrder.tsx");

export const useCreateOrReuseGiftOrder = function useCreateOrReuseGiftOrder(GiftPurchaseButton) {
  closure_0 = GiftPurchaseButton;
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              c2 = tmp3;
              c1 = tmp7;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              ({ planId: c0, recipientUserId: c1, productId: c2 } = c0);
              closure_3 = undefined;
              c4 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              closure_3 = closure_2_6[c0];
              if (null == closure_3) {
                const _Error = Error;
                const _HermesInternal2 = HermesInternal;
                error = new Error("Invalid plan id: " + c0);
                throw error;
              } else {
                skuId = closure_2_3.skuId;
                c4 = 1;
                let getOrCreateOrder = callback(closure_2_2[6]).getOrCreateOrder;
                const obj2 = { skuId: null, paymentGateway: null, recipientUserId: null, purchaseType: null, isGift: true, createdAfter: null, subscriptionPlanId: null, externalGatewayFacet: null };
                obj2[0] = c4;
                const tmp61 = callback(closure_2_2[6]);
                let obj3 = closure_2_7;
                if (obj16.isAndroid()) {
                  let APPLE = obj3.GOOGLE;
                } else {
                  APPLE = obj3.APPLE;
                }
                obj2[1] = APPLE;
                obj2[2] = c1;
                obj2[3] = closure_2_5.ONE_TIME;
                let obj6 = closure_2_1(closure_2_2[8])();
                obj16 = callback(closure_2_2[7]);
                const utcResult = obj6.utc();
                obj2[5] = obj6.utc().subtract(callback(closure_2_2[6]).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
                obj2[6] = c0;
                obj3 = { line_items: null };
                const obj4 = { external_product_id: null };
                obj4[0] = c2;
                const items = [obj4];
                obj3[0] = items;
                obj2[7] = obj3;
                getOrCreateOrder = getOrCreateOrder(obj2);
                c5 = 3;
                c6 = 1;
                const subtractResult = obj6.utc().subtract(callback(closure_2_2[6]).DRAFT_ORDER_LOOKBACK_DAYS, "days");
              }
            }
          } else if (2 === tmp7) {
            c4 = 0;
            c5 = closure_3;
            const obj5 = { error: null, skuId: null, location: null };
            obj5[0] = c5;
            obj5[1] = c4;
            obj5[2] = callback;
            closure_2_8.error("Failed to create order for gift purchase", obj5);
            obj3 = callback(closure_2_2[9]);
            obj6 = { tags: null };
            const obj7 = { skuId: null, source: null };
            obj7[0] = c4;
            const _HermesInternal = HermesInternal;
            obj7[1] = "" + callback + "_createOrder";
            obj6[0] = obj7;
            const result = obj3.captureBillingException(c5, obj6);
            throw c5;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp40) {
          closure_3 = tmp40;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp40;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  let items = [GiftPurchaseButton];
  return skuId.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
};