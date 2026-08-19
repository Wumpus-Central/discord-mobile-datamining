// discord_app/modules/wishlists/native/WishlistItemCard.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import apexExperiment from "../../slayer_storefront/experiments/SocialLayerStorefrontMobilePurchasingExperiment.tsx";
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard.tsx";
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard.tsx";
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard.tsx";
import { SKUProductLines } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

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
  } else if (SKUProductLines.PREMIUM === productLine) {
    obj = { sku: null, source: null };
    obj[0] = sku;
    obj[1] = source;
    const merged2 = Object.assign(merged);
    return jsx(PremiumWishlistItemCardDefault, { sku: null, source: null });
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    let tmp6 = null;
    if (tmp4) {
      obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
      obj[0] = sku;
      obj[1] = isOwned;
      obj[2] = source;
      obj[3] = wishlistOwnerId;
      const merged3 = Object.assign(merged);
      tmp6 = jsx(SocialLayerStorefrontWishlistItemCardDefault, { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
    }
    return tmp6;
  } else {
    return null;
  }
};