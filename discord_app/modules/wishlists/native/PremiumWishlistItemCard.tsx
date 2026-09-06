// discord_app/modules/wishlists/native/PremiumWishlistItemCard.tsx
import SKUPreview from "../../skus/native/SKUPreview.tsx";
import WishlistItemCardBaseDefault from "WishlistItemCardBase.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.assign({ sku: 0, source: 0, size: 0 }));
  const items = [size];
  const callback = noop.useCallback(() => jsx(SKUPreview.PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(WishlistItemCardBaseDefault, { accessibilityLabel: sku.name, renderPreview: callback, source, size });
}
