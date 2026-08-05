// discord_app/modules/collectibles/native/useHandleBuyNow.tsx
import useMobileCollectiblesPurchaseSKU from "useMobileCollectiblesPurchaseSKU";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { Routes } from "ME";

let require = arg1;
function useHandleBuyNow(product) {
  let analyticsLocations;
  let orderId;
  product = product.product;
  const require = product;
  const onBuy = product.onBuy;
  let first;
  let callback;
  let callback2;
  function _onPurchaseComplete() {
    const self = this;
    const tmp = callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp4;
              v0 = 1;
              dependencyMap = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_0(6909).fetchCollectiblesPurchases();
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            callback(false);
            obj = v0(4253);
            obj.hideActionSheet();
            obj1 = v0(10040);
            const obj3 = { product: null, useCategoryImage: true };
            obj3[0] = closure_0;
            obj1.open(obj3);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          dependencyMap = tmp;
          throw tmp16;
        }
      }
    });
    const _onPurchaseComplete = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  ({ analyticsLocations, orderId } = product);
  let tmp = callback2(_onPurchaseComplete.useState(false), 2);
  first = tmp[0];
  callback = tmp[1];
  let obj = {
    product,
    analyticsLocations,
    onPurchaseComplete() {
      const self = this;
      const apply = _onPurchaseComplete.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onPurchaseError() {
      callback(false);
    },
    onPurchasePending() {

    },
    orderId
  };
  const tmp3 = onBuy(first[5])(obj);
  callback2 = tmp3;
  obj = {
    handleBuyNow: _onPurchaseComplete.useCallback(callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback = tmp4;
              let closure_0 = tmp8;
              if (obj17.isMetaQuest()) {
                let v0 = 1;
                const _HermesInternal3 = HermesInternal;
                const combined = "" + outer1_6.COLLECTIBLES_SHOP + "#itemSkuId=" + outer1_0.skuId;
                v02 = 3;
                c5 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = outer1_1(outer1_2[10]).redirectWithHandoffToken(combined, { forceExternalBrowser: true });
                return obj1;
              } else {
                v0 = 2;
                if (outer1_2) {
                  v0 = 0;
                } else {
                  v0(true);
                  v02 = 4;
                  c5 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = v02();
                  return obj2;
                }
              }
              obj17 = outer1_0(outer1_2[9]);
            }
          } else {
            if (1 === tmp8) {
              v0 = 0;
              outer1_0 = closure_2;
              const _JSON2 = JSON;
              const _HermesInternal2 = HermesInternal;
              outer1_7.error("Error performing web handoff: " + JSON.stringify(outer1_0));
              let obj6 = outer1_0(outer1_2[11]);
              let obj3 = { tags: null };
              const obj4 = { source: "useHandleBuyNow", skuId: null };
              obj4[1] = closure_0.skuId;
              obj3[0] = obj4;
              const result = obj6.captureBillingException(outer1_0, obj3);
              const obj5 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
              const intl = outer1_0(outer1_2[13]).intl;
              obj5[1] = intl.string(outer1_0(outer1_2[13]).t["rTU7/z"]);
              outer1_1(outer1_2[12]).open(obj5);
              const obj10 = outer1_1(outer1_2[12]);
            } else {
              if (2 === tmp8) {
                v0 = 0;
                outer1_1 = closure_2;
                v0(false);
                const _JSON = JSON;
                const _HermesInternal = HermesInternal;
                outer1_7.error("Error running purchase: " + JSON.stringify(outer1_1));
                obj3 = outer1_0(outer1_2[11]);
                obj6 = { tags: null };
                const obj7 = { source: "useHandleBuyNow", skuId: null };
                obj7[1] = closure_0.skuId;
                obj6[0] = obj7;
                const result1 = obj3.captureBillingException(outer1_1, obj6);
              } else if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  obj1 = outer1_1(outer1_2[7]);
                  obj1.hideActionSheet();
                  v0 = 0;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (null != callback) {
                  callback();
                }
              }
              v0 = 0;
              c5 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            }
            c5 = 3;
          }
          v0 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp57) {
          closure_2 = tmp57;
          if (tmp5 === v0) {
            c5 = tmp3;
            throw tmp57;
          } else if (tmp2 === tmp59) {
            v02 = tmp2;
          } else {
            v02 = tmp;
          }
        }
      }
    }), items),
    isBuying: first
  };
  items = [tmp3, first, onBuy, product.skuId];
  return obj;
}
const error = new require("ME")("useHandleBuyNow");
const tmp2 = new require("ME")("useHandleBuyNow");
let result = require("noop").fileFinishedImporting("modules/collectibles/native/useHandleBuyNow.tsx");

export default useHandleBuyNow;
export { useHandleBuyNow };