// === Module 12680: WishlistItemCard ===

// Module 12680 (WishlistItemCard)
import c from "c" /* 576 */;
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard" /* 12681 */;
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard" /* 12683 */;
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard" /* 12684 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["sku", "isOwned", "source", "wishlistOwnerId"];
const SKUProductLines = fn(1085).SKUProductLines;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WishlistItemCard(arg0) {
  const cResult = c.c(22);
  if (cResult[0] !== arg0) {
    ({ sku, isOwned, source, wishlistOwnerId } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = isOwned;
    cResult[2] = tmp10;
    cResult[3] = sku;
    cResult[4] = source;
    cResult[5] = wishlistOwnerId;
    let tmp7 = wishlistOwnerId;
    let tmp6 = source;
    let tmp5 = sku;
    let tmp4 = tmp10;
    let tmp3 = isOwned;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
  }
  const productLine = tmp5.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    if (cResult[6] === tmp3) {
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp7) {
              let tmp29 = cResult[11];
            }
            return tmp29;
          }
        }
      }
    }
    const obj2 = { sku: tmp5, isOwned: tmp3, source: tmp6, wishlistOwnerId: tmp7 };
    const merged = Object.assign(tmp4);
    const tmp36 = jsx(CollectiblesWishlistItemCardDefault, { sku: tmp5, isOwned: tmp3, source: tmp6, wishlistOwnerId: tmp7 });
    cResult[6] = tmp3;
    cResult[7] = tmp4;
    cResult[8] = tmp5;
    cResult[9] = tmp6;
    cResult[10] = tmp7;
    cResult[11] = tmp36;
    tmp29 = tmp36;
  } else if (SKUProductLines.PREMIUM === productLine) {
    if (cResult[12] === tmp4) {
      if (cResult[13] === tmp5) {
        if (cResult[14] === tmp6) {
          let tmp21 = cResult[15];
        }
        return tmp21;
      }
    }
    const obj3 = { sku: tmp5, source: tmp6 };
    const merged1 = Object.assign(tmp4);
    const tmp28 = jsx(PremiumWishlistItemCardDefault, { sku: tmp5, source: tmp6 });
    cResult[12] = tmp4;
    cResult[13] = tmp5;
    cResult[14] = tmp6;
    cResult[15] = tmp28;
    tmp21 = tmp28;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    if (cResult[16] === tmp3) {
      if (cResult[17] === tmp4) {
        if (cResult[18] === tmp5) {
          if (cResult[19] === tmp6) {
            if (cResult[20] === tmp7) {
              let tmp13 = cResult[21];
            }
            return tmp13;
          }
        }
      }
    }
    const obj4 = { sku: tmp5, isOwned: tmp3, source: tmp6, wishlistOwnerId: tmp7 };
    const merged2 = Object.assign(tmp4);
    const tmp20 = jsx(SocialLayerStorefrontWishlistItemCardDefault, { sku: tmp5, isOwned: tmp3, source: tmp6, wishlistOwnerId: tmp7 });
    cResult[16] = tmp3;
    cResult[17] = tmp4;
    cResult[18] = tmp5;
    cResult[19] = tmp6;
    cResult[20] = tmp7;
    cResult[21] = tmp20;
    tmp13 = tmp20;
  } else {
    return null;
  }
}) : (function WishlistItemCard(arg0) {
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  const merged = Object.assign(arg0, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0 }));
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    const obj2 = { sku, isOwned, source, wishlistOwnerId };
    const merged1 = Object.assign(merged);
    return jsx(CollectiblesWishlistItemCardDefault, { sku, isOwned, source, wishlistOwnerId });
  } else if (SKUProductLines.PREMIUM === productLine) {
    const obj3 = { sku, source };
    const merged2 = Object.assign(merged);
    return jsx(PremiumWishlistItemCardDefault, { sku, source });
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    const obj = { sku, isOwned, source, wishlistOwnerId };
    const merged3 = Object.assign(merged);
    return jsx(SocialLayerStorefrontWishlistItemCardDefault, { sku, isOwned, source, wishlistOwnerId });
  } else {
    return null;
  }
});