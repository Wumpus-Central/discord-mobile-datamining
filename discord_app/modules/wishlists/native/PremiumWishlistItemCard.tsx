// discord_app/modules/wishlists/native/PremiumWishlistItemCard.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { SourceIcon } from "WishlistItemCardBase.tsx";

const require = arg1;
const result = require("CollectiblesPreview").fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  let sku;
  let source;
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.create(null));
  const items = [size];
  const callback = React.useCallback(() => outer1_4(size(outer1_2[2]).PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(SourceIcon, { accessibilityLabel: sku.name, renderPreview: callback, source, isOwned: false, size });
};