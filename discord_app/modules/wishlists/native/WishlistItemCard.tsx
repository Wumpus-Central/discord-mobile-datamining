// discord_app/modules/wishlists/native/WishlistItemCard.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard.tsx";
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard.tsx";
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard.tsx";
import { SKUProductLines } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

noopAll;
const result = require("set").fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default function WishlistItemCard(arg0) {
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
    obj[0] = sku;
    obj[1] = isOwned;
    obj[2] = source;
    obj[3] = wishlistOwnerId;
    const merged1 = Object.assign(merged);
    return jsx(CollectiblesWishlistItemCardDefault, { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
  } else if (tmp2.PREMIUM === productLine) {
    obj = { sku: null, source: null };
    obj[0] = sku;
    obj[1] = source;
    const merged2 = Object.assign(merged);
    return jsx(PremiumWishlistItemCardDefault, { sku: null, source: null });
  } else if (tmp2.SOCIAL_LAYER_GAME_ITEM === productLine) {
    obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
    obj[0] = sku;
    obj[1] = isOwned;
    obj[2] = source;
    obj[3] = wishlistOwnerId;
    const merged3 = Object.assign(merged);
    return jsx(SocialLayerStorefrontWishlistItemCardDefault, { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
  } else {
    return null;
  }
};