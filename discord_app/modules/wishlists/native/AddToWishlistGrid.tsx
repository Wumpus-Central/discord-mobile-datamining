// === Module 12327: AddToWishlistGrid ===

// Module 12327 (AddToWishlistGrid)
import noopAll from "noop" /* 19 */;
import context from "context" /* 12326 */;
import AddToWishlistItemCardDefault from "AddToWishlistItemCard" /* 12328 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_5 = createCacheKey.createStyles({ itemsContainer: { flexDirection: "row", flexWrap: "wrap", gap: require("ARBITRARY_LARGE_OFFSET").WISHLIST_SUGGESTION_CARD_GAP, justifyContent: "flex-start" } });
const result = require("obj132").fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default function AddToWishlistGrid(arg0) {
  ({ items, wishlist: require, analyticsLocations: importDefault, cardSize: dependencyMap } = arg0);
  return <View style={callback().itemsContainer}>{items.map((item, index) => {
    const sku = item.sku;
    const obj = { sku, wishlistId: null, analyticsLocations: null, size: null };
    let id;
    if (id != null) {
      id = id.id;
    }
    obj[1] = id;
    obj[2] = closure_1;
    obj[3] = closure_2;
    obj[1] = jsx(AddToWishlistItemCardDefault, { sku, wishlistId: null, analyticsLocations: null, size: null });
    return jsx(context.WishlistAnalyticsProvider, { sku, wishlistId: null, analyticsLocations: null, size: null }, sku.id);
  })}</View>;
};