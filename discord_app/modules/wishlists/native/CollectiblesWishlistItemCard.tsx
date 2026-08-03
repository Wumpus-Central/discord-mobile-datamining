// === Module 9931: CollectiblesWishlistItemCard ===

// Module 9931 (CollectiblesWishlistItemCard)
import noop from "noop";
import { transformSKUToCollectiblesItem as closure_4 } from "createCollectiblesItemsFromServerResponse";
import initialize from "initialize";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/wishlists/native/CollectiblesWishlistItemCard.tsx");

export default function CollectiblesWishlistItemCard(sku) {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  const size = sku.size;
  const merged = Object.assign(sku, Object.create(null));
  let memo;
  let obj = sku(size[4]);
  const isProfileFrameGiftingEnabled = obj.useIsProfileFrameGiftingEnabled("CollectiblesWishlistItemCard");
  const items = [initialize];
  const items1 = [sku.id, wishlistOwnerId];
  const stateFromStores = sku(size[5]).useStateFromStores(items, () => {
    let hasSentGiftResult = null != wishlistOwnerId;
    if (hasSentGiftResult) {
      hasSentGiftResult = outer1_5.hasSentGift(sku.id, tmp);
    }
    return hasSentGiftResult;
  }, items1);
  const obj2 = sku(size[5]);
  let tmp2 = sku;
  const items2 = [sku];
  const productNameAndTypeFromSku = sku(size[6]).getProductNameAndTypeFromSku(sku);
  memo = memo.useMemo(() => outer1_4(sku), items2);
  const items3 = [memo, size];
  let type;
  const callback = memo.useCallback(() => {
    let tmp2 = null;
    if (null != memo) {
      const obj = { collectiblesItemData: null, size: null };
      obj[0] = tmp;
      obj[1] = size;
      tmp2 = outer1_6(sku(size[7]).CollectiblesPreview, obj);
    }
    return tmp2;
  }, items3);
  if (memo != null) {
    type = memo.type;
  }
  if ("single" === type) {
    if (memo.item.type === tmp2(tmp3[8]).CollectiblesItemType.PROFILE_FRAME) {
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  obj = { accessibilityLabel: productNameAndTypeFromSku, renderPreview: callback, source: sku.source, isOwned: null, size: null };
  const obj3 = sku(size[6]);
  const tmp11 = jsx;
  if (!flag) {
    flag = stateFromStores;
  }
  obj[3] = flag;
  obj[4] = size;
  const merged1 = Object.assign(merged);
  tmp11Result = tmp11(wishlistOwnerId(size[9]), obj);
};