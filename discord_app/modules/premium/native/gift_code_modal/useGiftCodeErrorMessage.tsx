// === Module 10487: useGiftCodeErrorMessage ===

// Module 10487 (useGiftCodeErrorMessage)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "map" /* 7164 */;
import closure_4 from "updateGiftCode" /* 10481 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default function useGiftCodeErrorMessage(arg0, id) {
  const _require = arg0;
  let items = [closure_4];
  const tmp3 = callback(_require(first[3]).useStateFromStoresArray(items, () => {
    const items = [closure_1_4.get(closure_0), closure_1_4.getError(closure_0)];
    return items;
  }), 2);
  first = tmp3[0];
  const obj = _require(first[3]);
  const items1 = [closure_3];
  let userId;
  const stateFromStores = _require(first[3]).useStateFromStores(items1, () => {
    let skuId;
    if (first != null) {
      skuId = first.skuId;
    }
    return closure_1_3.getPurchase(skuId);
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