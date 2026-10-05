// discord_app/modules/storefront/native/StorefrontNativeUtils.android.tsx
import IAPStoreDefault from "../../../stores/native/IAPStore.android.tsx";
import GPlayActionCreators from "../../../actions/native/GPlayActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, sku;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (sku) => {
      let c0;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp6;
      let tmp7;
      let tmp9;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(10);
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
            const obj = GPlayActionCreators;
            const inAppSkus = obj.loadInAppSkus(items);
          }
        };
        let items = [tmp5];
        cResult[0] = tmp5;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(tmp6, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [IAPStoreDefault];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const fn2 = function o() {
          let product = null;
          if (null != c0) {
            const obj = IAPStoreDefault;
            product = obj.getProduct(tmp);
          }
          return product;
        };
        const items2 = [tmp5];
        cResult[4] = tmp5;
        cResult[5] = fn2;
        cResult[6] = items2;
        tmp12 = items2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
      let priceString;
      if (stateFromStores != null) {
        priceString = stateFromStores.priceString;
      }
      if (null == priceString) {
        let tmp16;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
          cResult[9] = obj2;
          tmp16 = obj2;
        } else {
          tmp16 = cResult[9];
        }
        tmp15 = tmp16;
      } else if (cResult[7] !== stateFromStores.priceString) {
        const obj4 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
        ({ priceString: obj3.normalPrice, priceString: obj3.userPrice } = stateFromStores);
        cResult[7] = stateFromStores.priceString;
        cResult[8] = obj4;
        tmp15 = obj4;
      } else {
        tmp15 = cResult[8];
      }
      return tmp15;
    }
  : (sku) => {
      let c0;
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
      const effect = react.useEffect(() => {
        if (null != c0) {
          const items = [tmp];
          const obj = GPlayActionCreators;
          const inAppSkus = obj.loadInAppSkus(items);
        }
      }, items);
      const useStateFromStores = require("get initialized").useStateFromStores;
      const items1 = [];
      require("get initialized");
      items1[0] = stateFromStores(6739);
      const items2 = [tmp2];
      stateFromStores = useStateFromStores(
        items1,
        () => {
          let product = null;
          if (null != c0) {
            const obj = IAPStoreDefault;
            product = obj.getProduct(tmp);
          }
          return product;
        },
        items2,
      );
      const items3 = [stateFromStores];
      return react.useMemo(() => {
        let obj;
        let priceString;
        if (stateFromStores != null) {
          priceString = stateFromStores.priceString;
        }
        if (null != priceString) {
          const obj3 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
          ({ priceString: obj2.normalPrice, priceString: obj2.userPrice } = stateFromStores);
          obj = obj3;
        } else {
          obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
        }
        return obj;
      }, items3);
    };
const result = size.fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

export const useFormattedSKUPrice = tmp2;
