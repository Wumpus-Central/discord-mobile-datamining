// discord_app/modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import CollectiblesPurchaseStore from "../../../collectibles/CollectiblesPurchaseStore.tsx";
import GiftCodeStore from "../../../../stores/GiftCodeStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default function useGiftCodeErrorMessage(arg0, id) {
  _require = arg0;
  let ilcBeX = first;
  items = [GiftCodeStore];
  [first] = require("initialize").useStateFromStoresArray(items, () => {
    items = [GiftCodeStore.get(closure_0), GiftCodeStore.getError(closure_0)];
    return items;
  });
  const obj = require("initialize");
  const items1 = [CollectiblesPurchaseStore];
  let result = null != first;
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let skuId;
    if (first != null) {
      skuId = first.skuId;
    }
    return CollectiblesPurchaseStore.getPurchase(skuId);
  });
  if (result) {
    result = tmp(ilcBeX[4]).needsGiftSubscriptionAgreement(first);
    const tmpResult = tmp(ilcBeX[4]);
  }
  let userId;
  if (first != null) {
    userId = first.userId;
  }
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (userId === id) {
    if (!result) {
      if (null != first) {
        if (tmpResult3.isPendingGiftSubscriptionCode(first)) {
          let JZxgJX = tmp(ilcBeX[5]).t.wa9h7F;
        }
        return tmp9(JZxgJX);
      }
      JZxgJX = tmp(ilcBeX[5]).t.JZxgJX;
    }
  }
  let isClaimed;
  if (first != null) {
    isClaimed = first.isClaimed;
  }
  if (isClaimed) {
    const intl2 = tmp(ilcBeX[5]).intl;
    ilcBeX = tmp(ilcBeX[5]).t.ilcBeX;
    intl2.string(ilcBeX);
  } else if (null != stateFromStores) {
    const intl = tmp(ilcBeX[5]).intl;
    intl.string(tmp(ilcBeX[5]).t.mdLtb5);
  } else if (null != tmp4) {
    if (!result) {
      tmp(ilcBeX[7]).getGiftCodeRedeemError(tmp4);
      const tmpResult4 = tmp(ilcBeX[7]);
    }
  }
}
