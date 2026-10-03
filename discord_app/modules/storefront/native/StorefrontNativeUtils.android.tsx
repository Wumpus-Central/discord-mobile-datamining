// discord_app/modules/storefront/native/StorefrontNativeUtils.android.tsx
import IAPStoreDefault from "../../../stores/native/IAPStore.android.tsx";
import GPlayActionCreators from "../../../actions/native/GPlayActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

export const useFormattedSKUPrice = ReactCompilerGating.isReactCompilerEnabled()
  ? (sku) => {
      const cResult = require("c").c(10);
      sku = sku.sku;
      let tmp5;
      if (sku != null) {
        const googleSkuIds = sku.googleSkuIds;
        if (googleSkuIds != null) {
          tmp5 = googleSkuIds[tmp4];
        }
      }
      if (tmp5 == null) {
        tmp5 = null;
      }
      _require = tmp5;
      if (cResult[0] !== tmp5) {
        const fn = function t() {
          if (null != c0) {
            const items = [tmp];
            const inAppSkus = GPlayActionCreators.loadInAppSkus(items);
          }
        };
        let items = [tmp5];
        cResult[0] = tmp5;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [IAPStoreDefault];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const fn2 = function o() {
          let product = null;
          if (null != c0) {
            product = IAPStoreDefault.getProduct(tmp);
          }
          return product;
        };
        const items2 = [tmp5];
        cResult[4] = tmp5;
        cResult[5] = fn2;
        cResult[6] = items2;
        let tmp12 = items2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp11, tmp12);
      let priceString;
      if (stateFromStores != null) {
        priceString = stateFromStores.priceString;
      }
      if (null == priceString) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
          cResult[9] = obj2;
        }
      } else {
        if (cResult[7] !== stateFromStores.priceString) {
          const obj4 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
          ({ priceString: obj3.normalPrice, priceString: obj3.userPrice } = stateFromStores);
          cResult[7] = stateFromStores.priceString;
          cResult[8] = obj4;
          let tmp15 = obj4;
        } else {
          tmp15 = cResult[8];
        }
        return tmp15;
      }
      const tmpResult = require("initialize");
    }
  : (sku) => {
      sku = sku.sku;
      _require = undefined;
      let stateFromStores;
      let tmp2;
      if (sku != null) {
        const googleSkuIds = sku.googleSkuIds;
        if (googleSkuIds != null) {
          tmp2 = googleSkuIds[tmp];
        }
      }
      if (tmp2 == null) {
        tmp2 = null;
      }
      _require = tmp2;
      let items = [tmp2];
      const effect = noop.useEffect(() => {
        if (null != c0) {
          const items = [tmp];
          const inAppSkus = GPlayActionCreators.loadInAppSkus(items);
        }
      }, items);
      const items1 = [stateFromStores(6739)];
      const items2 = [tmp2];
      stateFromStores = require("initialize").useStateFromStores(
        items1,
        () => {
          let product = null;
          if (null != c0) {
            product = IAPStoreDefault.getProduct(tmp);
          }
          return product;
        },
        items2,
      );
      const items3 = [stateFromStores];
      return noop.useMemo(() => {
        let priceString;
        if (stateFromStores != null) {
          priceString = stateFromStores.priceString;
        }
        if (null != priceString) {
          ({ priceString: obj2.normalPrice, priceString: obj2.userPrice } = stateFromStores);
          let obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
          const obj3 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
        } else {
          obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
        }
        return obj;
      }, items3);
    };
