// discord_app/modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx
import GPlayActionCreators from "../../../../actions/native/GPlayActionCreators.tsx";
import useMobilePurchaseSKUDefault from "../../../billing/native/hooks/useMobilePurchaseSKU.android.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["sku"];
const constants = fn(1085).PriceSetAssignmentPurchaseTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useMobileSocialLayerPurchaseSKU(sku) {
      const cResult = require("c").c(11);
      if (cResult[0] !== sku) {
        sku = sku.sku;
        const tmp7 = _objectWithoutProperties(sku, closure_3);
        cResult[0] = sku;
        cResult[1] = tmp7;
        cResult[2] = sku;
        let tmp4 = sku;
        let tmp3 = tmp7;
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
        if (isGift) {
          let DEFAULT = constants.GIFT;
        }
        let googleSkuIds;
        if (tmp4 != null) {
          googleSkuIds = tmp4.googleSkuIds;
        }
        if (cResult[3] !== googleSkuIds) {
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
          let tmp11 = googleSkuIds1;
        } else {
          tmp11 = cResult[4];
        }
        let tmp13 = tmp11[DEFAULT];
        if (tmp13 == null) {
          tmp13 = null;
        }
        _require = tmp13;
        if (cResult[5] !== tmp13) {
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
          let items = [tmp13];
          cResult[5] = tmp13;
          cResult[6] = I;
          cResult[7] = items;
          let tmp15 = items;
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
          tmp15 = cResult[7];
        }
        const effect = noop.useEffect(I, tmp15);
        if (cResult[8] === tmp13) {
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
          return useMobilePurchaseSKUDefault(tmp18);
        }
        const obj2 = {};
        const merged = Object.assign(tmp3);
        obj2.platformSkuId = tmp13;
        obj2.isFreeForStaffSelfPurchase = false;
        cResult[8] = tmp13;
        cResult[9] = tmp3;
        cResult[10] = obj2;
        tmp18 = obj2;
      }
      DEFAULT = constants.DEFAULT;
      let obj = require("c");
    }
  : function useMobileSocialLayerPurchaseSKU(sku) {
      sku = sku.sku;
      const merged = Object.assign(sku, Object.assign({ sku: 0 }));
      c0 = undefined;
      const giftParams = merged.giftParams;
      let isGift;
      if (giftParams != null) {
        isGift = giftParams.isGift;
      }
      if (isGift != null) {
        if (isGift) {
          let DEFAULT = constants.GIFT;
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
        const effect = noop.useEffect(() => {
          if (null != c0) {
            const items = [tmp];
            const inAppSkus = GPlayActionCreators.loadInAppSkus(items);
          }
        }, items);
        let obj = {};
        const merged1 = Object.assign(merged);
        obj.platformSkuId = tmp4;
        obj.isFreeForStaffSelfPurchase = false;
        return useMobilePurchaseSKUDefault(obj);
      }
      DEFAULT = constants.DEFAULT;
    };
