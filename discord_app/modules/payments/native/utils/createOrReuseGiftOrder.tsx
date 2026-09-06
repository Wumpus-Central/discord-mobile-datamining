// discord_app/modules/payments/native/utils/createOrReuseGiftOrder.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import _modDef4153 from "../../../../../_runtime/metro/04153__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ItemPurchaseType = fn(4542).ItemPurchaseType;
const SubscriptionPlanInfo = fn(1373).SubscriptionPlanInfo;
const PaymentGateways = fn(1085).PaymentGateways;
let closure_8 = new LoggerDefault("createOrReuseGiftOrder");
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/utils/createOrReuseGiftOrder.tsx");

export const useCreateOrReuseGiftOrder = function useCreateOrReuseGiftOrder(GiftPurchaseButton) {
  closure_0 = asyncGeneratorStep(async (_location) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (_location === 1) {
        throw value;
      } else if (_location === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (_location === 1) {
            c6 = 3;
            throw value;
          } else if (_location === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            ({ planId: closure_129_0, recipientUserId: closure_129_1, productId: closure_129_2 } = _location);
            closure_129_3 = undefined;
            let skuId;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (_location === 1) {
            c6 = 3;
            throw value;
          } else if (_location === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_129_3 = SubscriptionPlanInfo[closure_129_0];
            if (null == closure_129_3) {
              const _Error = Error;
              const _HermesInternal2 = HermesInternal;
              const error = new Error("Invalid plan id: " + closure_129_0);
              throw error;
            } else {
              skuId = closure_129_3.skuId;
              c4 = 1;
              let getOrCreateOrder = _location(7429).getOrCreateOrder;
              const obj2 = {
                skuId,
                paymentGateway: null,
                recipientUserId: null,
                purchaseType: null,
                isGift: true,
                createdAfter: null,
                subscriptionPlanId: null,
                externalGatewayFacet: null,
              };
              const tmp60 = _location(7429);
              let obj3 = PaymentGateways;
              if (obj16.isAndroid()) {
                let APPLE = obj3.GOOGLE;
              } else {
                APPLE = obj3.APPLE;
              }
              obj2.paymentGateway = APPLE;
              obj2.recipientUserId = closure_129_1;
              obj2.purchaseType = constants.ONE_TIME;
              let obj6 = _modDef4153();
              obj16 = _location(1115);
              const utcResult = obj6.utc();
              obj2.createdAfter = obj6.utc().subtract(_location(7429).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
              obj2.subscriptionPlanId = closure_129_0;
              obj3 = { line_items: null };
              const obj4 = { external_product_id: closure_129_2 };
              const items = [obj4];
              obj3.line_items = items;
              obj2.externalGatewayFacet = obj3;
              getOrCreateOrder = getOrCreateOrder(obj2);
              c5 = 3;
              c6 = 1;
              const subtractResult = obj6.utc().subtract(_location(7429).DRAFT_ORDER_LOOKBACK_DAYS, "days");
            }
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_5 = closure_3;
          const obj5 = { error: closure_129_5, skuId, location: _location };
          logger.error("Failed to create order for gift purchase", obj5);
          obj3 = _location(4233);
          obj6 = { tags: null };
          const obj7 = { skuId, source: null };
          const _HermesInternal = HermesInternal;
          obj7.source = "" + _location + "_createOrder";
          obj6.tags = obj7;
          const result = obj3.captureBillingException(closure_129_5, obj6);
          throw closure_129_5;
        } else if (_location === 1) {
          c6 = 3;
          throw value;
        } else if (_location === 2) {
          c4 = 0;
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
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
  });
  let items = [GiftPurchaseButton];
  return noop.useCallback(function () {
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
