// discord_app/modules/collectibles/native/useHandleBuyNow.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

let require = fn;
function useHandleBuyNow(product) {
  product = product.product;
  require = product;
  const onBuySettled = product.onBuySettled;
  dependencyMap = product.stageCollectibleChangeForEditProfile;
  isBuying = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = async function _onPurchaseComplete() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            v1 = 1;
            dependencyMap = 1;
            const obj6 = { value: tmp4(6956).fetchCollectiblesPurchases(), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_128_4(false);
          v1(4796).hideAllActionSheets();
          const obj = v1(4796);
          const obj8 = {
            product: closure_128_0,
            useCategoryImage: true,
            stageCollectibleChangeForEditProfile: closure_128_2,
          };
          v1(10531).open(obj8);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        dependencyMap = tmp;
        throw tmp17;
      }
    }
  };
  ({ analyticsLocations, orderId } = product);
  [isBuying, _slicedToArray] = noop.useState(false);
  const tmp3 = onBuySettled(10469)({
    product,
    analyticsLocations,
    onPurchaseComplete() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onPurchaseError() {
      closure_4(false);
      if (onBuySettled != null) {
        onBuySettled();
      }
    },
    onPurchasePending() {},
    orderId,
  });
  noop = tmp3;
  let obj2 = { handleBuyNow: null, isBuying };
  const items = [tmp3, isBuying, product.skuId, onBuySettled];
  obj2.handleBuyNow = noop.useCallback(
    isBuying(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              product = tmp8;
              if (obj17.isMetaQuest()) {
                c3 = 1;
                const _HermesInternal3 = HermesInternal;
                const combined = "" + constants.COLLECTIBLES_SHOP + "#itemSkuId=" + product.skuId;
                c4 = 3;
                c5 = 1;
                const obj6 = {
                  value: tmp4(tmp59[10]).redirectWithHandoffToken(combined, { forceExternalBrowser: true }),
                  done: false,
                };
                return obj6;
              } else {
                c3 = 2;
                if (first) {
                  c3 = 0;
                } else {
                  v4(true);
                  c4 = 4;
                  c5 = 1;
                  const obj8 = { value: v3(), done: false };
                  return obj8;
                }
              }
              obj17 = product(tmp59[9]);
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_0 = tmp59;
            const _JSON2 = JSON;
            const _HermesInternal2 = HermesInternal;
            logger.error("Error performing web handoff: " + JSON.stringify(closure_128_0));
            const obj9 = { tags: null };
            const obj11 = { source: "useHandleBuyNow", skuId: closure_129_0.skuId };
            obj9.tags = obj11;
            const result = product(tmp59[11]).captureBillingException(closure_128_0, obj9);
            const obj7 = product(tmp59[11]);
            const obj12 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
            const intl = product(tmp59[13]).intl;
            obj12.content = intl.string(product(tmp59[13]).t["rTU7/z"]);
            tmp4(tmp59[12]).open(obj12);
            if (closure_129_1 != null) {
              closure_129_1();
            }
            const obj10 = tmp4(tmp59[12]);
          } else {
            if (2 === tmp8) {
              c3 = 0;
              closure_128_1 = tmp59;
              closure_129_4(false);
              if (closure_129_1 != null) {
                closure_129_1();
              }
              const _JSON = JSON;
              const _HermesInternal = HermesInternal;
              logger.error("Error running purchase: " + JSON.stringify(closure_128_1));
              const obj14 = { tags: null };
              const obj15 = { source: "useHandleBuyNow", skuId: closure_129_0.skuId };
              obj14.tags = obj15;
              const result1 = product(tmp59[11]).captureBillingException(closure_128_1, obj14);
              const obj4 = product(tmp59[11]);
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                tmp4(tmp59[7]).hideActionSheet();
                if (closure_129_1 != null) {
                  closure_129_1();
                }
                c3 = 0;
                const obj2 = tmp4(tmp59[7]);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c3 = 0;
            c5 = 3;
            const obj16 = { value, done: true };
            return obj16;
          }
          c5 = 3;
        } catch (tmp59) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp59;
          } else if (tmp2 === tmp61) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items,
  );
  return obj2;
}
const Routes = fn(1074).Routes;
let closure_7 = new LoggerDefault("useHandleBuyNow");
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useHandleBuyNow.tsx");

export default useHandleBuyNow;
export { useHandleBuyNow };
