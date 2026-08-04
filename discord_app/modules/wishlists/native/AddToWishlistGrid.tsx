// discord_app/modules/wishlists/native/AddToWishlistGrid.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ itemsContainer: { flexDirection: "row", flexWrap: "wrap", gap: require("ARBITRARY_LARGE_OFFSET").WISHLIST_SUGGESTION_CARD_GAP, justifyContent: "flex-start" } });
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default function AddToWishlistGrid(arg0) {
  let dependencyMap;
  let importDefault;
  let items;
  let require;
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
    obj[1] = outer1_4(outer1_1(outer1_2[6]), obj);
    return outer1_4(outer1_0(outer1_2[5]).WishlistAnalyticsProvider, obj, sku.id);
  })}</View>;
};