// discord_app/modules/payments/native/utils/createOrReuseGiftOrder.tsx
import timestampDefault from "../../../debug/Logger.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { ItemPurchaseType } from "../../PaymentConstants.tsx";
import { SubscriptionPlanInfo } from "../../../premium/PremiumConstants.tsx";
import { PaymentGateways } from "../../../../../discord_common/js/shared/Constants.tsx";
import { apexExperiment } from "../../../billing/experiments/AndroidShopOrdersExperiment.tsx";

const require = arg1;
let closure_8 = new timestampDefault("createOrReuseGiftOrder");
const tmp2 = new timestampDefault("createOrReuseGiftOrder");
let result = require("set").fileFinishedImporting("modules/payments/native/utils/createOrReuseGiftOrder.tsx");

export const useCreateOrReuseGiftOrder = function useCreateOrReuseGiftOrder(GiftPurchaseButton) {
  let _require = GiftPurchaseButton;
  let obj = apexExperiment;
  obj = { location: GiftPurchaseButton };
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled(obj);
  _require = undefined;
  _require = callback((arg0) => {
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
              c2 = tmp3;
              c1 = tmp7;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              ({ planId: c0, recipientUserId: c1, productId: c2 } = c0);
              let skuId;
              let skuId2;
              c5 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
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
              skuId = closure_2_6[c0];
              if (null == skuId) {
                const _Error = Error;
                const _HermesInternal2 = HermesInternal;
                error = new Error("Invalid plan id: " + callback);
                throw error;
              } else {
                skuId2 = skuId.skuId;
                let tmp25;
                if (closure_1_1) {
                  const obj2 = { line_items: null };
                  let obj3 = { external_product_id: null };
                  obj3[0] = c2;
                  const items = [obj3];
                  obj2[0] = items;
                  tmp25 = obj2;
                }
                c5 = tmp25;
                skuId2 = 1;
                let getOrCreateOrder = callback(closure_2_2[7]).getOrCreateOrder;
                const obj4 = { skuId: null, paymentGateway: null, recipientUserId: null, purchaseType: null, isGift: true, createdAfter: null, subscriptionPlanId: null, externalGatewayFacet: null };
                obj4[0] = skuId2;
                const tmp30 = callback(closure_2_2[7]);
                let tmp35 = closure_2_7;
                if (obj10.isAndroid()) {
                  let APPLE = tmp35.GOOGLE;
                } else {
                  APPLE = tmp35.APPLE;
                }
                obj4[1] = APPLE;
                obj4[2] = androidShopOrdersEnabled;
                obj4[3] = closure_2_5.ONE_TIME;
                obj10 = callback(closure_2_2[8]);
                const obj11 = androidShopOrdersEnabled(closure_2_2[9])();
                const utcResult = androidShopOrdersEnabled(closure_2_2[9])().utc();
                obj4[5] = androidShopOrdersEnabled(closure_2_2[9])().utc().subtract(callback(closure_2_2[7]).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
                obj4[6] = callback;
                tmp35 = closure_2_5;
                obj4[7] = closure_2_5;
                getOrCreateOrder = getOrCreateOrder(obj4);
                c5 = 3;
                c6 = 1;
                const subtractResult = androidShopOrdersEnabled(closure_2_2[9])().utc().subtract(callback(closure_2_2[7]).DRAFT_ORDER_LOOKBACK_DAYS, "days");
              }
            }
          } else if (2 === tmp7) {
            skuId2 = 0;
            c6 = skuId;
            const obj5 = { error: null, skuId: null, location: null };
            obj5[0] = c6;
            obj5[1] = skuId2;
            obj5[2] = callback;
            closure_2_8.error("Failed to create order for gift purchase", obj5);
            obj3 = callback(closure_2_2[10]);
            const obj6 = { tags: null };
            const obj7 = { skuId: null, source: null };
            obj7[0] = skuId2;
            const _HermesInternal = HermesInternal;
            obj7[1] = "" + callback + "_createOrder";
            obj6[0] = obj7;
            const result = obj3.captureBillingException(c6, obj6);
            throw c6;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            skuId2 = 0;
            c6 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            skuId2 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp52) {
          skuId = tmp52;
          if (tmp4 === skuId2) {
            c6 = tmp2;
            throw tmp52;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  let items = [GiftPurchaseButton, androidShopOrdersEnabled];
  return React.useCallback(function() {
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