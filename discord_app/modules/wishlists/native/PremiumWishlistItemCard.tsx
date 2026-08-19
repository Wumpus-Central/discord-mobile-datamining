// === Module 10370: PremiumWishlistItemCard ===

// Module 10370 (PremiumWishlistItemCard)
import SourceIconDefault from "SourceIcon" /* 9182 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.create(null));
  const items = [size];
  const callback = React.useCallback(() => jsx(size(dependencyMap[2]).PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(SourceIconDefault, { accessibilityLabel: sku.name, renderPreview: callback, source, size });
};