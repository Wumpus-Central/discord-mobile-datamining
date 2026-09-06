// discord_app/modules/wishlists/native/WishlistItemCard.tsx
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard.tsx";
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard.tsx";
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  } else if (tmp2.PREMIUM === productLine) {
    obj = { sku, source };
    const merged2 = Object.assign(merged);
    return jsx(PremiumWishlistItemCardDefault, { sku, source });
  } else if (tmp2.SOCIAL_LAYER_GAME_ITEM === productLine) {
    obj = { sku, isOwned, source, wishlistOwnerId };
    const merged3 = Object.assign(merged);
    return jsx(SocialLayerStorefrontWishlistItemCardDefault, { sku, isOwned, source, wishlistOwnerId });
  } else {
    return null;
  }
}
