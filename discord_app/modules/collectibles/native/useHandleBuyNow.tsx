// === Module 13020: useHandleBuyNow ===

// Module 13020 (useHandleBuyNow)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2, c4, c5, closure_2, dependencyMap;

function useHandleBuyNow(product) {
  let analyticsLocations;
  let closure_4;
  let closure_5;
  let isBuying;
  let items;
  let orderId;
  product = product.product;
  require = product;
  const onBuySettled = product.onBuySettled;
  dependencyMap = product.stageCollectibleChangeForEditProfile;
  isBuying = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let obj = function _onPurchaseComplete() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              v1 = 1;
              const obj5 = tmp3(c2[6]);
              c2 = 1;
              const obj6 = { value: obj5.fetchCollectiblesPurchases(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_4(false);
            obj = v1(c2[7]);
            obj.hideAllActionSheets();
            const obj8 = { product: closure_128_0, useCategoryImage: true, stageCollectibleChangeForEditProfile: closure_128_2 };
            const obj2 = v1(c2[8]);
            obj2.open(obj8);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c2 = 3;
          throw tmp16;
        }
      }
    });
    return obj(...arguments);
  };
  ({ analyticsLocations, orderId } = product);
  [isBuying, _slicedToArray] = react.useState(false);
  obj = {
    product,
    analyticsLocations,
    onPurchaseComplete() {
      return obj(...arguments);
    },
    onPurchaseError() {
      closure_4(false);
      if (onBuySettled != null) {
        onBuySettled();
      }
    },
    onPurchasePending() {

    },
    orderId
  };
  const tmp3 = onBuySettled(10763)(obj);
  react = tmp3;
  let obj2 = {
    handleBuyNow: react.useCallback(isBuying(function*() {
      let closure_0;
      let closure_1;
      let intl;
      let obj10;
      let obj14;
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
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
              product = tmp4;
              const obj16 = product(closure_2[9]);
              if (obj16.isMetaQuest()) {
                c3 = 1;
                const _HermesInternal3 = HermesInternal;
                const combined = "" + constants.COLLECTIBLES_SHOP + "#itemSkuId=" + require.skuId;
                c4 = 3;
                c5 = 1;
                const obj6 = { value: obj9.redirectWithHandoffToken(combined, { forceExternalBrowser: true }), done: false };
                obj9 = tmp(closure_2[10]);
                return obj6;
              } else {
                c3 = 2;
                if (first) {
                  c3 = 0;
                } else {
                  v2(true);
                  c4 = 4;
                  c5 = 1;
                  const obj7 = { value: v3(), done: false };
                  return obj7;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            product = closure_2;
            const _JSON2 = JSON;
            const _HermesInternal2 = HermesInternal;
            logger.error("Error performing web handoff: " + JSON.stringify(product));
            const obj8 = { tags: obj10 };
            obj10 = { source: "useHandleBuyNow", skuId: closure_129_0.skuId };
            const obj4 = product(closure_2[11]);
            const result = obj4.captureBillingException(product, obj8);
            const obj11 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: intl.string(product(closure_2[13]).t["rTU7/z"]) };
            const open = tmp(closure_2[12]).open;
            const tmp37 = tmp(closure_2[12]);
            intl = product(closure_2[13]).intl;
            open(obj11);
            if (closure_129_1 != null) {
              closure_129_1();
            }
          } else if (2 === c4) {
            c3 = 0;
            closure_129_4(false);
            if (closure_129_1 != null) {
              closure_129_1();
            }
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            logger.error("Error running purchase: " + JSON.stringify(closure_2));
            let message;
            if (closure_2 != null) {
              message = tmp.message;
            }
            if ("Not ready to purchase" !== message) {
              const obj12 = { tags: obj14 };
              obj14 = { source: "useHandleBuyNow", skuId: closure_129_0.skuId };
              const obj13 = product(closure_2[11]);
              const result1 = obj13.captureBillingException(tmp, obj12);
            }
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              const obj2 = tmp(closure_2[7]);
              obj2.hideActionSheet();
              if (closure_129_1 != null) {
                closure_129_1();
              }
              c3 = 0;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp52) {
          closure_2 = tmp52;
          if (0 === c3) {
            c5 = 3;
            throw tmp52;
          } else if (1 === tmp54) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    }), items),
    isBuying
  };
  items = [tmp3, isBuying, product.skuId, onBuySettled];
  return obj2;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const Routes = Constants.Routes;
const tmp2 = new LoggerDefault("useHandleBuyNow");
let closure_7 = tmp2;
let result = size.fileFinishedImporting("modules/collectibles/native/useHandleBuyNow.tsx");

export default useHandleBuyNow;
export { useHandleBuyNow };