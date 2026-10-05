// discord_app/modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import CollectiblesPurchaseStore from "../../../collectibles/CollectiblesPurchaseStore.tsx";
import GiftCodeStore from "../../../../stores/GiftCodeStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, id) => {
      let closure_0;
      let first;
      let first1;
      let tmp13;
      let tmp6;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GiftCodeStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          const items = [GiftCodeStore.get(closure_0), GiftCodeStore.getError(closure_0)];
          return items;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      first1 = _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp6), 2)[0];
      _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp6), 2);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CollectiblesPurchaseStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      let skuId;
      const tmp11 = cResult[4];
      if (first1 != null) {
        skuId = first1.skuId;
      }
      if (tmp11 !== skuId) {
        let skuId1;
        if (first1 != null) {
          skuId1 = first1.skuId;
        }
        class S {
          constructor() {
            let skuId;
            const getPurchase = CollectiblesPurchaseStore.getPurchase;
            if (first1 != null) {
              skuId = first1.skuId;
            }
            return getPurchase(skuId);
          }
        }
        cResult[4] = skuId1;
        cResult[5] = S;
        tmp13 = S;
      } else {
        tmp13 = cResult[5];
      }
      let userId;
      const tmpResult2 = require("get initialized");
      const stateFromStores = tmpResult2.useStateFromStores(tmp9, tmp13);
      if (first1 != null) {
        userId = first1.userId;
      }
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      if (userId === id) {
        const _Symbol = Symbol;
        class S {
          constructor() {
            let skuId;
            const getPurchase = CollectiblesPurchaseStore.getPurchase;
            if (first1 != null) {
              skuId = first1.skuId;
            }
            return getPurchase(skuId);
          }
        }
      } else {
        if (first1 != null) {
          const isClaimed = first1.isClaimed;
        }
        class S {
          constructor() {
            let skuId;
            const getPurchase = CollectiblesPurchaseStore.getPurchase;
            if (first1 != null) {
              skuId = first1.skuId;
            }
            return getPurchase(skuId);
          }
        }
      }
      return tmp20;
    }
  : (arg0, id) => {
      let closure_0;
      let first;
      let stringResult;
      _require = arg0;
      let items = [GiftCodeStore];
      const obj = require("get initialized");
      const tmp3 = _slicedToArray(
        obj.useStateFromStoresArray(items, () => {
          const items = [GiftCodeStore.get(closure_0), GiftCodeStore.getError(closure_0)];
          return items;
        }),
        2,
      );
      first = tmp3[0];
      const items1 = [CollectiblesPurchaseStore];
      let userId;
      const obj2 = require("get initialized");
      const stateFromStores = obj2.useStateFromStores(items1, () => {
        let skuId;
        const getPurchase = CollectiblesPurchaseStore.getPurchase;
        if (first != null) {
          skuId = first.skuId;
        }
        return getPurchase(skuId);
      });
      if (first != null) {
        userId = first.userId;
      }
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      if (userId === id) {
        const intl3 = tmp(tmp2[6]).intl;
        stringResult = intl3.string(tmp(tmp2[6]).t.JZxgJX);
      } else {
        let isClaimed;
        if (first != null) {
          isClaimed = first.isClaimed;
        }
        if (isClaimed) {
          const intl2 = tmp(tmp2[6]).intl;
          stringResult = intl2.string(tmp(tmp2[6]).t.ilcBeX);
        } else if (null != stateFromStores) {
          const intl = tmp(tmp2[6]).intl;
          stringResult = intl.string(tmp(tmp2[6]).t.mdLtb5);
        } else {
          stringResult = null;
          if (null != tmp3[1]) {
            const tmpResult = require("GiftCodeUtils");
            stringResult = tmpResult.getGiftCodeRedeemError(tmp5);
          }
        }
      }
      return stringResult;
    };
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default tmp2;
