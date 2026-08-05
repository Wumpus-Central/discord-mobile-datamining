// discord_app/modules/wishlists/native/WishlistItemCard.tsx
import "noop";
import { SKUProductLines } from "ME";
import { jsx } from "jsxProd";
import { apexExperiment } from "../../slayer_storefront/experiments/SocialLayerStorefrontMobilePurchasingExperiment.tsx";
import { CollectiblesWishlistItemCard } from "CollectiblesWishlistItemCard.tsx";
import { PremiumWishlistItemCard } from "PremiumWishlistItemCard.tsx";
import { SocialLayerStorefrontWishlistItemCard } from "SocialLayerStorefrontWishlistItemCard.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default function WishlistItemCard(arg0) {
  let isOwned;
  let sku;
  let source;
  let wishlistOwnerId;
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  apexExperiment /* apexExperiment */;
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
    obj[0] = sku;
    obj[1] = isOwned;
    obj[2] = source;
    obj[3] = wishlistOwnerId;
    const merged1 = Object.assign(merged);
    return jsx(CollectiblesWishlistItemCard, { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
  } else if (tmp5.PREMIUM === productLine) {
    obj = { sku: null, source: null };
    obj[0] = sku;
    obj[1] = source;
    const merged2 = Object.assign(merged);
    return jsx(PremiumWishlistItemCard, { sku: null, source: null });
  } else if (tmp5.SOCIAL_LAYER_GAME_ITEM === productLine) {
    let tmp6 = null;
    if (tmp4) {
      obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
      obj[0] = sku;
      obj[1] = isOwned;
      obj[2] = source;
      obj[3] = wishlistOwnerId;
      const merged3 = Object.assign(merged);
      tmp6 = jsx(SocialLayerStorefrontWishlistItemCard, { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
      const tmp9 = SocialLayerStorefrontWishlistItemCard;
    }
    return tmp6;
  } else {
    return null;
  }
};