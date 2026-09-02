// === Module 12810: AddToWishlistGrid ===

// Module 12810 (AddToWishlistGrid)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ itemsContainer: { flexDirection: "row", flexWrap: "wrap", gap: require("ARBITRARY_LARGE_OFFSET").WISHLIST_SUGGESTION_CARD_GAP, justifyContent: "flex-start" } });
const result = require("set").fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default function AddToWishlistGrid(arg0) {
  ({ items, wishlist: require, analyticsLocations: importDefault, cardSize: dependencyMap } = arg0);
  return <View style={callback().itemsContainer}>{items.map((itemSource, positionInSection) => {
    const sku = itemSource.sku;
    obj = { newValue: obj, children: null };
    obj = { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine };
    obj = { sku, wishlistId: null, analyticsLocations: null, size: null };
    let id;
    if (id != null) {
      id = id.id;
    }
    obj[1] = id;
    obj[2] = closure_1;
    obj[3] = closure_2;
    obj[1] = closure_1_4(closure_1_1(closure_1_2[6]), obj);
    return closure_1_4(closure_1_0(closure_1_2[5]).WishlistAnalyticsProvider, obj, sku.id);
  })}</View>;
};