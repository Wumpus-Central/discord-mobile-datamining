// === Module 8376: useGiftCodeErrorMessage ===

// Module 8376 (useGiftCodeErrorMessage)
import _slicedToArray from "_slicedToArray";
import map from "map";
import updateGiftCode from "updateGiftCode";

const require = arg1;
const result = require("updateGiftCode").fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default function useGiftCodeErrorMessage(arg0, id) {
  const _require = arg0;
  let items = [updateGiftCode];
  const tmp3 = callback(_require(first[3]).useStateFromStoresArray(items, () => {
    const items = [outer1_4.get(closure_0), outer1_4.getError(closure_0)];
    return items;
  }), 2);
  first = tmp3[0];
  const obj = _require(first[3]);
  const items1 = [map];
  let userId;
  const stateFromStores = _require(first[3]).useStateFromStores(items1, () => {
    let skuId;
    if (first != null) {
      skuId = first.skuId;
    }
    return outer1_3.getPurchase(skuId);
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