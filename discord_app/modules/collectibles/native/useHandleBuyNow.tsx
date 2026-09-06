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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            v1 = 1;
            dependencyMap = 1;
            let obj1 = { value: tmp4(7541).fetchCollectiblesPurchases(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_5(false);
          obj = v1(4527);
          obj.hideAllActionSheets();
          obj1 = v1(11077);
          const obj3 = {
            product: closure_128_0,
            useCategoryImage: true,
            stageCollectibleChangeForEditProfile: closure_128_3,
          };
          obj1.open(obj3);
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
  let obj = {
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
  };
  const tmp3 = onBuy(onBuySettled[5])(obj);
  closure_6 = tmp3;
  obj = { handleBuyNow: null, isBuying };
  const items = [tmp3, isBuying, onBuy, product.skuId, onBuySettled];
  obj.handleBuyNow = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              product = tmp8;
              if (obj17.isMetaQuest()) {
                c3 = 1;
                const _HermesInternal3 = HermesInternal;
                const combined = "" + closure_1_6.COLLECTIBLES_SHOP + "#itemSkuId=" + product.skuId;
                c4 = 3;
                c5 = 1;
                let obj1 = {
                  value: tmp4(tmp61[10]).redirectWithHandoffToken(combined, { forceExternalBrowser: true }),
                  done: false,
                };
                return obj1;
              } else {
                c3 = 2;
                if (first) {
                  c3 = 0;
                } else {
                  v3(true);
                  c4 = 4;
                  c5 = 1;
                  const obj2 = { value: closure_6(), done: false };
                  return obj2;
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
              let obj6 = product(tmp61[11]);
              let obj3 = { tags: null };
              const obj4 = { source: "useHandleBuyNow", skuId: closure_129_0.skuId };
              obj3.tags = obj4;
              const result = obj6.captureBillingException(closure_128_0, obj3);
              const obj5 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
              const intl = product(tmp61[13]).intl;
              obj5.content = intl.string(product(tmp61[13]).t["rTU7/z"]);
              tmp4(tmp61[12]).open(obj5);
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
                obj3 = product(tmp61[11]);
                obj6 = { tags: null };
                const obj7 = { source: "useHandleBuyNow", skuId: closure_129_0.skuId };
                obj6.tags = obj7;
                const result1 = obj3.captureBillingException(closure_128_1, obj6);
              } else if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  obj1 = tmp4(tmp61[7]);
                  obj1.hideActionSheet();
                  if (closure_129_2 != null) {
                    closure_129_2();
                  }
                  c3 = 0;
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
              const obj8 = { value, done: true };
              return obj8;
            }
            c5 = 3;
          }
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
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
  return obj;
}
const Routes = fn(1074).Routes;
let closure_7 = new LoggerDefault("useHandleBuyNow");
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useHandleBuyNow.tsx");

export default useHandleBuyNow;
export { useHandleBuyNow };
