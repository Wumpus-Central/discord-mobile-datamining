// discord_app/modules/payments/native/utils/createOrReuseGiftOrder.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ItemPurchaseType = fn(5872).ItemPurchaseType;
const SubscriptionPlanInfo = fn(1387).SubscriptionPlanInfo;
const PaymentGateways = fn(1083).PaymentGateways;
let closure_8 = new LoggerDefault("createOrReuseGiftOrder");
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/utils/createOrReuseGiftOrder.tsx");

export function useCreateOrReuseGiftOrder(GiftPurchaseButton) {
  mobileStoreFront = mobileStoreFront(10032).useMobileStoreFront();
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
            dependencyMap = tmp3;
            let country = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            ({ planId: closure_129_0, recipientUserId: closure_129_1, productId: closure_129_2 } = _location);
            closure_129_3 = undefined;
            let skuId;
            closure_129_5 = undefined;
            closure_129_6 = undefined;
            closure_129_7 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "flexDirection", done: true };
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
              const _Error2 = Error;
              const _HermesInternal2 = HermesInternal;
              const error = new Error("Invalid plan id: " + closure_129_0);
              throw error;
            } else {
              skuId = closure_129_3.skuId;
              closure_129_5 = (function getGiftPaymentGateway() {
                if (obj.isAndroid()) {
                  let APPLE = constants.GOOGLE;
                } else {
                  if (tmpResult.isIOS()) {
                    const NitroGiftACOMExperiment = _location(dependencyMap[7]).NitroGiftACOMExperiment;
                    if (NitroGiftACOMExperiment.getConfig({ location: "useCreateOrReuseGiftOrder" }).enabled) {
                      APPLE = constants.APPLE_ADVANCED_COMMERCE;
                    }
                  }
                  APPLE = constants.APPLE;
                  tmpResult = _location(dependencyMap[6]);
                }
                return APPLE;
              })();
              let tmp25;
              if (closure_129_5 !== constants2.APPLE_ADVANCED_COMMERCE) {
                const obj6 = { line_items: null };
                const obj7 = { external_product_id: closure_129_2 };
                items = [obj7];
                obj6.line_items = items;
                tmp25 = obj6;
              }
              closure_129_6 = tmp25;
              c4 = 1;
              country = undefined;
              if (country != null) {
                country = country.country;
              }
              closure_129_7 = country;
              if (closure_129_5 === constants2.APPLE_ADVANCED_COMMERCE) {
                if (null == closure_129_7) {
                  const _Error = Error;
                  const error1 = new Error("Missing App Store country");
                  throw error1;
                }
              }
              const obj8 = {
                skuId,
                paymentGateway: closure_129_5,
                recipientUserId: closure_129_1,
                purchaseType: constants.ONE_TIME,
                isGift: true,
                createdAfter: null,
                subscriptionPlanId: null,
                externalGatewayFacet: null,
                countryCode: null,
              };
              const obj9 = _location(7690);
              const obj11 = mobileStoreFront(2166)();
              const utcResult = mobileStoreFront(2166)().utc();
              obj8.createdAfter = mobileStoreFront(2166)()
                .utc()
                .subtract(_location(7690).DRAFT_ORDER_LOOKBACK_DAYS, "days")
                .toISOString();
              obj8.subscriptionPlanId = closure_129_0;
              obj8.externalGatewayFacet = closure_129_6;
              obj8.countryCode = closure_129_7;
              c5 = 3;
              c6 = 1;
              const obj10 = { value: obj9.getOrCreateOrder(obj8), done: false };
              return obj10;
            }
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_8 = closure_3;
          const obj12 = { error: closure_129_8, skuId, location: _location };
          logger.error("Failed to create order for gift purchase", obj12);
          const obj13 = { tags: null };
          const obj14 = { skuId, source: null };
          const _HermesInternal = HermesInternal;
          obj14.source = "" + _location + "_createOrder";
          obj13.tags = obj14;
          const result = _location(4953).captureBillingException(closure_129_8, obj13);
          throw closure_129_8;
        } else if (_location === 1) {
          c6 = 3;
          throw value;
        } else if (_location === 2) {
          c4 = 0;
          c6 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp61) {
        closure_3 = tmp61;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp61;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  items = [GiftPurchaseButton, mobileStoreFront];
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
}
