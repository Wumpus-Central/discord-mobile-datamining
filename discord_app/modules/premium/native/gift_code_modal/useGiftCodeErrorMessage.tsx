// === Module 11440: useGiftCodeErrorMessage ===

// Module 11440 (useGiftCodeErrorMessage)
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;
import GiftCodeStore from "GiftCodeStore" /* 11429 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default function useGiftCodeErrorMessage(arg0, id) {
  _require = arg0;
  let items = [GiftCodeStore];
  const tmp3 = _slicedToArray(require("initialize").useStateFromStoresArray(items, () => {
    const items = [GiftCodeStore.get(closure_0), GiftCodeStore.getError(closure_0)];
    return items;
  }), 2);
  first = tmp3[0];
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
    const intl3 = tmp(tmp2[4]).intl;
    let stringResult = intl3.string(tmp(tmp2[4]).t.JZxgJX);
  } else {
    let isClaimed;
    if (first != null) {
      isClaimed = first.isClaimed;
    }
    if (isClaimed) {
      const intl2 = tmp(tmp2[4]).intl;
      stringResult = intl2.string(tmp(tmp2[4]).t.ilcBeX);
    } else if (null != stateFromStores) {
      const intl = tmp(tmp2[4]).intl;
      stringResult = intl.string(tmp(tmp2[4]).t.mdLtb5);
    } else {
      stringResult = null;
      if (null != tmp5) {
        stringResult = tmp(tmp2[5]).getGiftCodeRedeemError(tmp5);
        const tmpResult = tmp(tmp2[5]);
      }
    }
  }
  return stringResult;
};