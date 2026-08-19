// === Module 10368: CollectiblesWishlistItemCard ===

// Module 10368 (CollectiblesWishlistItemCard)
import noop from "noop" /* 19 */;
import { transformSKUToCollectiblesItem as closure_4 } from "createCollectiblesItemsFromServerResponse" /* 5305 */;
import initialize from "initialize" /* 10369 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/wishlists/native/CollectiblesWishlistItemCard.tsx");

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
  const items = [closure_5];
  const items1 = [sku.id, wishlistOwnerId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let hasSentGiftResult = null != wishlistOwnerId;
    if (hasSentGiftResult) {
      hasSentGiftResult = closure_1_5.hasSentGift(sku.id, tmp);
    }
    return hasSentGiftResult;
  }, items1);
  const items2 = [sku];
  const productNameAndTypeFromSku = sku(size[5]).getProductNameAndTypeFromSku(sku);
  memo = memo.useMemo(() => closure_1_4(sku), items2);
  const items3 = [memo, size];
  const callback = memo.useCallback(() => {
    let tmp2 = null;
    if (null != memo) {
      const obj = { collectiblesItemData: null, size: null };
      obj[0] = tmp;
      obj[1] = size;
      tmp2 = jsx(sku(size[6]).CollectiblesPreview, { collectiblesItemData: null, size: null });
    }
    return tmp2;
  }, items3);
  obj = { accessibilityLabel: productNameAndTypeFromSku, renderPreview: callback, source: sku.source, size };
  const obj2 = sku(size[5]);
  let tmp2 = sku;
  const tmp3 = size;
  const merged1 = Object.assign(merged);
  if (!flag) {
    if (!stateFromStores) {
      let OWNED = merged.overlay;
    }
    obj.overlay = OWNED;
    return <tmp9 {...obj} />;
  }
  OWNED = tmp2(tmp3[7]).WishlistItemCardOverlay.OWNED;
  const tmp9 = wishlistOwnerId(size[7]);
};