// discord_app/modules/wishlists/native/CollectiblesWishlistItemCard.tsx
import SKUPreview from "../../skus/native/SKUPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SentGiftsStore from "../SentGiftsStore.tsx";

require = fn;
let closure_4 = fn(7546).transformSKUToCollectiblesItem;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/CollectiblesWishlistItemCard.tsx");

export default function CollectiblesWishlistItemCard(sku) {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  const size = sku.size;
  const merged = Object.assign(sku, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 }));
  let memo;
  let obj = sku(size[4]);
  const items = [SentGiftsStore];
  const items1 = [sku.id, wishlistOwnerId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let hasSentGiftResult = null != wishlistOwnerId;
      if (hasSentGiftResult) {
        hasSentGiftResult = SentGiftsStore.hasSentGift(sku.id, tmp);
      }
      return hasSentGiftResult;
    },
    items1,
  );
  const items2 = [sku];
  const productNameAndTypeFromSku = sku(size[5]).getProductNameAndTypeFromSku(sku);
  memo = memo.useMemo(() => closure_4(sku), items2);
  const items3 = [memo, size];
  const callback = memo.useCallback(() => {
    let tmp2 = null;
    if (null != memo) {
      const obj = { collectiblesItemData: tmp, size };
      tmp2 = jsx(SKUPreview.CollectiblesPreview, { collectiblesItemData: tmp, size });
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
}
