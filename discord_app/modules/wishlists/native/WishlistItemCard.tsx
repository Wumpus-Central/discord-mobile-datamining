// discord_app/modules/wishlists/native/WishlistItemCard.tsx
import noopAll from "noop" /* 19 */;
import apexExperiment from "apexExperiment" /* 8323 */;
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard" /* 10368 */;
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard" /* 10370 */;
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard" /* 10371 */;
import { SKUProductLines } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default function WishlistItemCard(arg0) {
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  apexExperiment;
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
    obj[0] = sku;
    obj[1] = isOwned;
    obj[2] = source;
    obj[3] = wishlistOwnerId;
    const merged1 = Object.assign(merged);
    return jsx(CollectiblesWishlistItemCardDefault, { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
  } else if (tmp5.PREMIUM === productLine) {
    obj = { sku: null, source: null };
    obj[0] = sku;
    obj[1] = source;
    const merged2 = Object.assign(merged);
    return jsx(PremiumWishlistItemCardDefault, { sku: null, source: null });
  } else if (tmp5.SOCIAL_LAYER_GAME_ITEM === productLine) {
    let tmp6 = null;
    if (tmp4) {
      obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
      obj[0] = sku;
      obj[1] = isOwned;
      obj[2] = source;
      obj[3] = wishlistOwnerId;
      const merged3 = Object.assign(merged);
      tmp6 = jsx(SocialLayerStorefrontWishlistItemCardDefault, { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
      const tmp9 = SocialLayerStorefrontWishlistItemCardDefault;
    }
    return tmp6;
  } else {
    return null;
  }
};