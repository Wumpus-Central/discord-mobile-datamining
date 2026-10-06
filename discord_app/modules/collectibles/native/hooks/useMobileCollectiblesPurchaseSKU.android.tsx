// === Module 10763: useMobileCollectiblesPurchaseSKU ===

// Module 10763 (useMobileCollectiblesPurchaseSKU)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8539 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10557 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let product;

let closure_3 = ["product"];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let currentUser;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react;
  const cResult = obj.c(12);
  if (cResult[0] !== product) {
    product = product.product;
    const tmp8 = _objectWithoutProperties(product, closure_3);
    cResult[0] = product;
    cResult[1] = product;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = product;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[3] = items;
    cResult[4] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[5] === tmp4) {
    let tmp13;
    if (cResult[6] === stateFromStores) {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp13) {
      if (cResult[9] === tmp4.skuId) {
        let tmp15;
        if (cResult[10] === tmp5) {
          tmp15 = cResult[11];
        }
        return useMobilePurchaseSKUDefault(tmp15);
      }
    }
    const obj2 = { skuId: tmp4.skuId, platformSkuId: tmp13, isFreeForStaffSelfPurchase: true };
    const merged = Object.assign(tmp5);
    cResult[8] = tmp13;
    cResult[9] = tmp4.skuId;
    cResult[10] = tmp5;
    cResult[11] = obj2;
    tmp15 = obj2;
  }
  const tmpResult2 = collectibles_CollectiblesUtils;
  const collectibleGoogleSkuId = tmpResult2.getCollectibleGoogleSkuId(tmp4, stateFromStores);
  cResult[5] = tmp4;
  cResult[6] = stateFromStores;
  cResult[7] = collectibleGoogleSkuId;
  tmp13 = collectibleGoogleSkuId;
}) : ((product) => {
  let currentUser;
  product = product.product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = collectibles_CollectiblesUtils;
  const collectibleGoogleSkuId = obj2.getCollectibleGoogleSkuId(product, stateFromStores);
  const obj3 = { skuId: product.skuId, platformSkuId: collectibleGoogleSkuId, isFreeForStaffSelfPurchase: true };
  const tmp4 = useMobilePurchaseSKUDefault;
  const merged1 = Object.assign(merged);
  return tmp4(obj3);
});
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default tmp2;