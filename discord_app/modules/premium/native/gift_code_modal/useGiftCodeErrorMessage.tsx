// discord_app/modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import CollectiblesPurchaseStore from "../../../collectibles/CollectiblesPurchaseStore.tsx";
import GiftCodeStore from "../../../../stores/GiftCodeStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, id) => {
      _require = arg0;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GiftCodeStore];
        cResult[0] = items;
        let first = items;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const tmpResult = require("initialize");
      first1 = _slicedToArray(require("initialize").useStateFromStoresArray(first, tmp6), 2)[0];
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CollectiblesPurchaseStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      let skuId;
      if (first1 != null) {
        skuId = first1.skuId;
      }
      if (cResult[4] !== skuId) {
        let skuId1;
        if (first1 != null) {
          skuId1 = first1.skuId;
        }
        class S {
          constructor() {
            skuId = undefined;
            tmp = closure_3;
            if (closure_1 != null) {
              skuId = closure_1.skuId;
            }
            return closure_3.getPurchase(skuId);
          }
        }
        cResult[4] = skuId1;
        cResult[5] = S;
        let tmp12 = S;
      } else {
        tmp12 = cResult[5];
      }
      const tmp7 = _slicedToArray(require("initialize").useStateFromStoresArray(first, tmp6), 2);
      let userId;
      const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp12);
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
            skuId = undefined;
            tmp = closure_3;
            if (closure_1 != null) {
              skuId = closure_1.skuId;
            }
            return closure_3.getPurchase(skuId);
          }
        }
      } else {
        if (first1 != null) {
          const isClaimed = first1.isClaimed;
        }
        class S {
          constructor() {
            skuId = undefined;
            tmp = closure_3;
            if (closure_1 != null) {
              skuId = closure_1.skuId;
            }
            return closure_3.getPurchase(skuId);
          }
        }
      }
      const tmpResult2 = require("initialize");
    }
  : (arg0, id) => {
      _require = arg0;
      let items = [GiftCodeStore];
      [first] = require("initialize").useStateFromStoresArray(items, () => {
        const items = [GiftCodeStore.get(closure_0), GiftCodeStore.getError(closure_0)];
        return items;
      });
      const obj = require("initialize");
      const items1 = [CollectiblesPurchaseStore];
      let userId;
      const stateFromStores = require("initialize").useStateFromStores(items1, () => {
        let skuId;
        if (first != null) {
          skuId = first.skuId;
        }
        return CollectiblesPurchaseStore.getPurchase(skuId);
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
        let stringResult = intl3.string(tmp(tmp2[6]).t.JZxgJX);
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
          if (null != tmp5) {
            stringResult = tmp(tmp2[7]).getGiftCodeRedeemError(tmp5);
            const tmpResult = tmp(tmp2[7]);
          }
        }
      }
      return stringResult;
    };
