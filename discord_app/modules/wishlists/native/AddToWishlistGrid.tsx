// discord_app/modules/wishlists/native/AddToWishlistGrid.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import context from "../WishlistAnalyticsContext.tsx";
import AddToWishlistItemCardDefault from "AddToWishlistItemCard.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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