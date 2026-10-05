// === Module 10769: WishlistItemCard ===

// Module 10769 (WishlistItemCard)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import CollectiblesWishlistItemCardDefault from "CollectiblesWishlistItemCard" /* 10770 */;
import PremiumWishlistItemCardDefault from "PremiumWishlistItemCard" /* 10772 */;
import SocialLayerStorefrontWishlistItemCardDefault from "SocialLayerStorefrontWishlistItemCard" /* 10773 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["sku", "isOwned", "source", "wishlistOwnerId"];
const SKUProductLines = Constants.SKUProductLines;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isOwned;
  let sku;
  let source;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let wishlistOwnerId;
  const obj = react2;
  const cResult = obj.c(22);
  if (cResult[0] !== arg0) {
    ({ sku, isOwned, source, wishlistOwnerId } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = isOwned;
    cResult[2] = tmp10;
    cResult[3] = sku;
    cResult[4] = source;
    cResult[5] = wishlistOwnerId;
    tmp7 = wishlistOwnerId;
    tmp6 = source;
    tmp5 = sku;
    tmp4 = tmp10;
    tmp3 = isOwned;
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
            let tmp29;
            if (cResult[10] === tmp7) {
              tmp29 = cResult[11];
            }
            return tmp29;
          }
        }
      }
    }
    CollectiblesWishlistItemCardDefault;
    const merged = Object.assign(tmp4);
    const tmp36 = <tmp32 sku={tmp5} isOwned={tmp3} source={tmp6} wishlistOwnerId={tmp7} />;
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
        let tmp21;
        if (cResult[14] === tmp6) {
          tmp21 = cResult[15];
        }
        return tmp21;
      }
    }
    PremiumWishlistItemCardDefault;
    const merged1 = Object.assign(tmp4);
    const tmp28 = <tmp24 sku={tmp5} source={tmp6} />;
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
            let tmp13;
            if (cResult[20] === tmp7) {
              tmp13 = cResult[21];
            }
            return tmp13;
          }
        }
      }
    }
    SocialLayerStorefrontWishlistItemCardDefault;
    const merged2 = Object.assign(tmp4);
    const tmp20 = <tmp16 sku={tmp5} isOwned={tmp3} source={tmp6} wishlistOwnerId={tmp7} />;
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
}) : ((arg0) => {
  let isOwned;
  let sku;
  let source;
  let wishlistOwnerId;
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  const merged = Object.assign(arg0, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0 }));
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    CollectiblesWishlistItemCardDefault;
    const merged1 = Object.assign(merged);
    return <tmp20 sku={sku} isOwned={isOwned} source={source} wishlistOwnerId={wishlistOwnerId} />;
  } else if (SKUProductLines.PREMIUM === productLine) {
    PremiumWishlistItemCardDefault;
    const merged2 = Object.assign(merged);
    return <tmp13 sku={sku} source={source} />;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    SocialLayerStorefrontWishlistItemCardDefault;
    const merged3 = Object.assign(merged);
    return <tmp6 sku={sku} isOwned={isOwned} source={source} wishlistOwnerId={wishlistOwnerId} />;
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default tmp3;