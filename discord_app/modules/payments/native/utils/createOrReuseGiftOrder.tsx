// === Module 10875: createOrReuseGiftOrder ===

// Module 10875 (createOrReuseGiftOrder)
import LoggerDefault from "Logger" /* 3 */;
import _modDef4228 from "module_4228" /* 4228 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ItemPurchaseType = fn(4618).ItemPurchaseType;
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
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
            const obj5 = { value, done: true };
            return obj5;
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
              let getOrCreateOrder = _location(7532).getOrCreateOrder;
              const obj6 = { skuId, paymentGateway: null, recipientUserId: null, purchaseType: null, isGift: true, createdAfter: null, subscriptionPlanId: null, externalGatewayFacet: null };
              const tmp60 = _location(7532);
              let obj8 = PaymentGateways;
              if (obj16.isAndroid()) {
                let APPLE = obj8.GOOGLE;
              } else {
                APPLE = obj8.APPLE;
              }
              obj6.paymentGateway = APPLE;
              obj6.recipientUserId = closure_129_1;
              obj6.purchaseType = constants.ONE_TIME;
              obj16 = _location(1363);
              const obj7 = _modDef4228();
              const utcResult = _modDef4228().utc();
              obj6.createdAfter = _modDef4228().utc().subtract(_location(7532).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
              obj6.subscriptionPlanId = closure_129_0;
              obj8 = { line_items: null };
              const obj9 = { external_product_id: closure_129_2 };
              const items = [obj9];
              obj8.line_items = items;
              obj6.externalGatewayFacet = obj8;
              getOrCreateOrder = getOrCreateOrder(obj6);
              c5 = 3;
              c6 = 1;
              const subtractResult = _modDef4228().utc().subtract(_location(7532).DRAFT_ORDER_LOOKBACK_DAYS, "days");
            }
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_5 = closure_3;
          const obj10 = { error: closure_129_5, skuId, location: _location };
          logger.error("Failed to create order for gift purchase", obj10);
          const obj11 = { tags: null };
          const obj12 = { skuId, source: null };
          const _HermesInternal = HermesInternal;
          obj12.source = "" + _location + "_createOrder";
          obj11.tags = obj12;
          const result = _location(4309).captureBillingException(closure_129_5, obj11);
          throw closure_129_5;
        } else if (_location === 1) {
          c6 = 3;
          throw value;
        } else if (_location === 2) {
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
  return noop.useCallback(function() {
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