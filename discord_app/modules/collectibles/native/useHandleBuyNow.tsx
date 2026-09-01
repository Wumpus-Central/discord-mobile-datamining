// discord_app/modules/collectibles/native/useHandleBuyNow.tsx
import timestampDefault from "../../debug/Logger.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { Routes } from "../../../Constants.tsx";

let require = arg1;
function useHandleBuyNow(product) {
  product = product.product;
  require = product;
  const onBuy = product.onBuy;
  const onBuySettled = product.onBuySettled;
  let first;
  let callback;
  let React;
  function _onPurchaseComplete() {
    const self = this;
    const tmp = first(function*() {
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
              closure_0 = tmp4;
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(7286).fetchCollectiblesPurchases();
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
            obj = v0(4445);
            obj.hideActionSheet();
            obj1 = v0(10824);
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
    closure_6 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  ({ analyticsLocations, orderId } = product);
  let tmp = callback(React.useState(false), 2);
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
      if (onBuySettled != null) {
        onBuySettled();
      }
    },
    onPurchasePending() {

    },
    orderId
  };
  const tmp3 = onBuy(onBuySettled[5])(obj);
  React = tmp3;
  obj = {
    handleBuyNow: React.useCallback(first(function*() {
      if (v02 === 2) {
        v02 = 3;
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
          v02 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp4;
              let lib = tmp8;
              if (obj17.isMetaQuest()) {
                c3 = 1;
                const _HermesInternal3 = HermesInternal;
                const combined = "" + closure_1_6.COLLECTIBLES_SHOP + "#itemSkuId=" + lib.skuId;
                v0 = 3;
                v02 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_1(closure_1_2[10]).redirectWithHandoffToken(combined, { forceExternalBrowser: true });
                return obj1;
              } else {
                c3 = 2;
                if (c3) {
                  c3 = 0;
                } else {
                  v0(true);
                  v0 = 4;
                  v02 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = v02();
                  return obj2;
                }
              }
              obj17 = lib(closure_1_2[9]);
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              lib = callback2;
              const _JSON2 = JSON;
              const _HermesInternal2 = HermesInternal;
              closure_1_7.error("Error performing web handoff: " + JSON.stringify(lib));
              let obj6 = lib(closure_1_2[11]);
              let obj3 = { tags: null };
              const obj4 = { source: "useHandleBuyNow", skuId: null };
              obj4[1] = lib.skuId;
              obj3[0] = obj4;
              const result = obj6.captureBillingException(lib, obj3);
              const obj5 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
              const intl = lib(closure_1_2[13]).intl;
              obj5[1] = intl.string(lib(closure_1_2[13]).t["rTU7/z"]);
              closure_1_1(closure_1_2[12]).open(obj5);
              if (callback2 != null) {
                callback2();
              }
              const obj10 = closure_1_1(closure_1_2[12]);
            } else {
              if (2 === tmp8) {
                c3 = 0;
                callback = callback2;
                v0(false);
                if (callback2 != null) {
                  callback2();
                }
                const _JSON = JSON;
                const _HermesInternal = HermesInternal;
                closure_1_7.error("Error running purchase: " + JSON.stringify(callback));
                obj3 = lib(closure_1_2[11]);
                obj6 = { tags: null };
                const obj7 = { source: "useHandleBuyNow", skuId: null };
                obj7[1] = lib.skuId;
                obj6[0] = obj7;
                const result1 = obj3.captureBillingException(callback, obj6);
              } else if (3 === tmp8) {
                if (arg0 === 1) {
                  v02 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  obj1 = closure_1_1(closure_1_2[7]);
                  obj1.hideActionSheet();
                  if (callback2 != null) {
                    callback2();
                  }
                  c3 = 0;
                }
              } else if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (null != callback) {
                  callback();
                }
              }
              c3 = 0;
              v02 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            }
            v02 = 3;
          }
          c3 = 0;
          v02 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp61) {
          callback2 = tmp61;
          if (tmp5 === c3) {
            v02 = tmp3;
            throw tmp61;
          } else if (tmp2 === tmp63) {
            v0 = tmp2;
          } else {
            v0 = tmp;
          }
        }
      }
    }), items),
    isBuying: first
  };
  items = [tmp3, first, onBuy, product.skuId, onBuySettled];
  return obj;
}
let closure_7 = new timestampDefault("useHandleBuyNow");
const tmp2 = new timestampDefault("useHandleBuyNow");
let result = require("set").fileFinishedImporting("modules/collectibles/native/useHandleBuyNow.tsx");

export default useHandleBuyNow;
export { useHandleBuyNow };