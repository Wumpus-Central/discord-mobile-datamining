// === Module 13256: AddToWishlistGrid ===

// Module 13256 (AddToWishlistGrid)
import WishlistAnalyticsContext from "WishlistAnalyticsContext" /* 13255 */;
import AddToWishlistItemCardDefault from "AddToWishlistItemCard" /* 13257 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_5 = createStyles.createStyles({ itemsContainer: { flexDirection: "row", flexWrap: "wrap", gap: fn(7322).WISHLIST_SUGGESTION_CARD_GAP, justifyContent: "flex-start" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default function AddToWishlistGrid(arg0) {
  ({ items, wishlist: require, analyticsLocations: importDefault, cardSize: dependencyMap } = arg0);
  return <View style={closure_5().itemsContainer}>{items.map((itemSource, positionInSection) => {
    const sku = itemSource.sku;
    const obj = { newValue: { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine }, children: null };
    const obj3 = { sku, wishlistId: null, analyticsLocations: null, size: null };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    obj3.wishlistId = id;
    obj3.analyticsLocations = analyticsLocations;
    obj3.size = size;
    obj.children = jsx(AddToWishlistItemCardDefault, { sku, wishlistId: null, analyticsLocations: null, size: null });
    return jsx(WishlistAnalyticsContext.WishlistAnalyticsProvider, { newValue: { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine }, children: null }, sku.id);
  })}</View>;
};