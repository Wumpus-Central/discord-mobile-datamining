// === Module 11033: WishlistItemCard ===

// Module 11033 (WishlistItemCard)
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard" /* 11034 */;
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard" /* 11036 */;
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard" /* 11037 */;
import noop from "module_19" /* 19 */;

const SKUProductLines = fn(1074).SKUProductLines;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default function WishlistItemCard(arg0) {
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  const merged = Object.assign(arg0, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0 }));
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku, isOwned, source, wishlistOwnerId };
    const merged1 = Object.assign(merged);
    return jsx(CollectiblesWishlistItemCardDefault, { sku, isOwned, source, wishlistOwnerId });
  } else if (SKUProductLines.PREMIUM === productLine) {
    obj = { sku, source };
    const merged2 = Object.assign(merged);
    return jsx(PremiumWishlistItemCardDefault, { sku, source });
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    obj = { sku, isOwned, source, wishlistOwnerId };
    const merged3 = Object.assign(merged);
    return jsx(SocialLayerStorefrontWishlistItemCardDefault, { sku, isOwned, source, wishlistOwnerId });
  } else {
    return null;
  }
};