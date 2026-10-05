// === Module 10543: useMobileSocialLayerPurchaseSKU ===

// Module 10543 (useMobileSocialLayerPurchaseSKU)
import Constants from "Constants" /* 1085 */;
import GPlayActionCreators from "GPlayActionCreators" /* 8872 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10544 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, sku;

let closure_3 = ["sku"];
const constants = Constants.PriceSetAssignmentPurchaseTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku) => {
  let c0;
  let tmp19;
  let tmp3;
  let tmp4;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] !== sku) {
    sku = sku.sku;
    const tmp7 = _objectWithoutProperties(sku, closure_3);
    cResult[0] = sku;
    cResult[1] = tmp7;
    cResult[2] = sku;
    tmp4 = sku;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const giftParams = tmp3.giftParams;
  let isGift;
  if (giftParams != null) {
    isGift = giftParams.isGift;
  }
  if (isGift != null) {
    let DEFAULT;
    let tmp12;
    let tmp16;
    if (isGift) {
      DEFAULT = constants.GIFT;
    }
    let googleSkuIds;
    const tmp10 = cResult[3];
    if (tmp4 != null) {
      googleSkuIds = tmp4.googleSkuIds;
    }
    if (tmp10 !== googleSkuIds) {
      let googleSkuIds1;
      if (tmp4 != null) {
        googleSkuIds1 = tmp4.googleSkuIds;
      }
      if (googleSkuIds1 == null) {
        googleSkuIds1 = {};
      }
      let googleSkuIds2;
      if (tmp4 != null) {
        googleSkuIds2 = tmp4.googleSkuIds;
      }
      cResult[3] = googleSkuIds2;
      cResult[4] = googleSkuIds1;
      tmp12 = googleSkuIds1;
    } else {
      tmp12 = cResult[4];
    }
    let tmp14 = tmp12[DEFAULT];
    if (tmp14 == null) {
      tmp14 = null;
    }
    _require = tmp14;
    if (cResult[5] !== tmp14) {
      class I {
        constructor() {
          if (null != c0) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[5]);
            items = [];
            items[0] = tmp;
            inAppSkus = obj.loadInAppSkus(items);
          }
          return;
        }
      }
      let items = [tmp14];
      cResult[5] = tmp14;
      cResult[6] = I;
      cResult[7] = items;
      tmp16 = items;
    } else {
      class I {
        constructor() {
          if (null != c0) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[5]);
            items = [];
            items[0] = tmp;
            inAppSkus = obj.loadInAppSkus(items);
          }
          return;
        }
      }
      tmp16 = cResult[7];
    }
    const effect = react.useEffect(I, tmp16);
    if (cResult[8] === tmp14) {
      class I {
        constructor() {
          if (null != c0) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[5]);
            items = [];
            items[0] = tmp;
            inAppSkus = obj.loadInAppSkus(items);
          }
          return;
        }
      }
      return useMobilePurchaseSKUDefault(tmp19);
    }
    const obj2 = { platformSkuId: tmp14, isFreeForStaffSelfPurchase: false };
    const merged = Object.assign(tmp3);
    cResult[8] = tmp14;
    cResult[9] = tmp3;
    cResult[10] = obj2;
    tmp19 = obj2;
  }
  DEFAULT = constants.DEFAULT;
}) : ((sku) => {
  sku = sku.sku;
  const merged = Object.assign(sku, Object.assign({ sku: 0 }));
  let c0;
  const giftParams = merged.giftParams;
  let isGift;
  if (giftParams != null) {
    isGift = giftParams.isGift;
  }
  if (isGift != null) {
    let DEFAULT;
    if (isGift) {
      DEFAULT = constants.GIFT;
    }
    let googleSkuIds;
    if (sku != null) {
      googleSkuIds = sku.googleSkuIds;
    }
    if (googleSkuIds == null) {
      googleSkuIds = {};
    }
    let tmp4 = googleSkuIds[DEFAULT];
    if (tmp4 == null) {
      tmp4 = null;
    }
    c0 = tmp4;
    let items = [tmp4];
    const effect = react.useEffect(() => {
      if (null != c0) {
        const items = [tmp];
        const obj = GPlayActionCreators;
        const inAppSkus = obj.loadInAppSkus(items);
      }
    }, items);
    let obj = { platformSkuId: tmp4, isFreeForStaffSelfPurchase: false };
    const tmp9 = useMobilePurchaseSKUDefault;
    const merged1 = Object.assign(merged);
    return tmp9(obj);
  }
  DEFAULT = constants.DEFAULT;
});
const result = size.fileFinishedImporting("modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx");

export default tmp2;