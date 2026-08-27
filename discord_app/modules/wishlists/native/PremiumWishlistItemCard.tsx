// === Module 10703: PremiumWishlistItemCard ===

// Module 10703 (PremiumWishlistItemCard)
import SourceIconDefault from "SourceIcon" /* 10701 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.create(null));
  const items = [size];
  const callback = React.useCallback(() => closure_1_4(size(closure_1_2[2]).PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(SourceIconDefault, { accessibilityLabel: sku.name, renderPreview: callback, source, size });
};