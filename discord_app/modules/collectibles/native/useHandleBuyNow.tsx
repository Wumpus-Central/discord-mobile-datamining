// discord_app/modules/collectibles/native/useHandleBuyNow.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

let require = fn;
function useHandleBuyNow(product) {
  product = product.product;
  require = product;
  const onBuy = product.onBuy;
  const onBuySettled = product.onBuySettled;
  asyncGeneratorStep = product.stageCollectibleChangeForEditProfile;
  let isBuying;
  noop = undefined;
  closure_7 = async function _onPurchaseComplete() {
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
            const obj6 = { value: tmp4(7655).fetchCollectiblesPurchases(), done: false };
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
          closure_128_5(false);
          v1(4607).hideAllActionSheets();
          const obj = v1(4607);
          const obj8 = {
            product: closure_128_0,
            useCategoryImage: true,
            stageCollectibleChangeForEditProfile: closure_128_3,
          };
          v1(11238).open(obj8);
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
  const tmp = isBuying(noop.useState(false), 2);
  isBuying = tmp[0];
  noop = tmp[1];
  const tmp3 = onBuy(onBuySettled[5])({
    product,
    analyticsLocations,
    onPurchaseComplete() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onPurchaseError() {
      closure_5(false);
      if (onBuySettled != null) {
        onBuySettled();
      }
    },
    onPurchasePending() {},
    orderId,
  });
  closure_6 = tmp3;
  let obj2 = { handleBuyNow: null, isBuying };
  const items = [tmp3, isBuying, onBuy, product.skuId, onBuySettled];
  obj2.handleBuyNow = noop.useCallback(
    asyncGeneratorStep(async () => {
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
                const combined = "" + closure_1_6.COLLECTIBLES_SHOP + "#itemSkuId=" + product.skuId;
                c4 = 3;
                c5 = 1;
                const obj6 = {
                  value: tmp4(tmp61[10]).redirectWithHandoffToken(combined, { forceExternalBrowser: true }),
                  done: false,
                };
                return obj6;
              } else {
                c3 = 2;
                if (first) {
                  c3 = 0;
                } else {
                  v3(true);
                  c4 = 4;
                  c5 = 1;
                  const obj8 = { value: closure_6(), done: false };
                  return obj8;
                }
              }
              obj17 = product(tmp61[9]);
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              closure_128_0 = tmp61;
              const _JSON2 = JSON;
              const _HermesInternal2 = HermesInternal;
              logger.error("Error performing web handoff: " + JSON.stringify(closure_128_0));
              const obj9 = { tags: null };
              const obj11 = { source: "useHandleBuyNow", skuId: closure_129_0.skuId };
              obj9.tags = obj11;
              const result = product(tmp61[11]).captureBillingException(closure_128_0, obj9);
              const obj7 = product(tmp61[11]);
              const obj12 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
              const intl = product(tmp61[13]).intl;
              obj12.content = intl.string(product(tmp61[13]).t["rTU7/z"]);
              tmp4(tmp61[12]).open(obj12);
              if (closure_129_2 != null) {
                closure_129_2();
              }
              const obj10 = tmp4(tmp61[12]);
            } else {
              if (2 === tmp8) {
                c3 = 0;
                closure_128_1 = tmp61;
                closure_129_5(false);
                if (closure_129_2 != null) {
                  closure_129_2();
                }
                const _JSON = JSON;
                const _HermesInternal = HermesInternal;
                logger.error("Error running purchase: " + JSON.stringify(closure_128_1));
                const obj14 = { tags: null };
                const obj15 = { source: "useHandleBuyNow", skuId: closure_129_0.skuId };
                obj14.tags = obj15;
                const result1 = product(tmp61[11]).captureBillingException(closure_128_1, obj14);
                const obj4 = product(tmp61[11]);
              } else if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  tmp4(tmp61[7]).hideActionSheet();
                  if (closure_129_2 != null) {
                    closure_129_2();
                  }
                  c3 = 0;
                  const obj2 = tmp4(tmp61[7]);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                if (null != closure_129_1) {
                  closure_129_1();
                }
              }
              c3 = 0;
              c5 = 3;
              const obj16 = { value, done: true };
              return obj16;
            }
            c5 = 3;
          }
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp61) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp61;
          } else if (tmp2 === tmp63) {
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
