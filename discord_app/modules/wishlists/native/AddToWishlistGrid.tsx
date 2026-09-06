// discord_app/modules/wishlists/native/AddToWishlistGrid.tsx
import WishlistAnalyticsContext from "../WishlistAnalyticsContext.tsx";
import AddToWishlistItemCardDefault from "AddToWishlistItemCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = {
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: fn(7208).WISHLIST_SUGGESTION_CARD_GAP,
    justifyContent: "flex-start",
  },
};
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default function AddToWishlistGrid(arg0) {
  ({ items, wishlist: require, analyticsLocations: importDefault, cardSize: dependencyMap } = arg0);
  return (
    <View style={closure_5().itemsContainer}>
      {items.map((itemSource, positionInSection) => {
        const sku = itemSource.sku;
        let obj = { newValue: null, children: null };
        obj = { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine };
        obj.newValue = obj;
        obj = { sku, wishlistId: null, analyticsLocations: null, size: null };
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        obj.wishlistId = id;
        obj.analyticsLocations = analyticsLocations;
        obj.size = size;
        obj.children = jsx(AddToWishlistItemCardDefault, {
          sku,
          wishlistId: null,
          analyticsLocations: null,
          size: null,
        });
        return jsx(
          WishlistAnalyticsContext.WishlistAnalyticsProvider,
          { sku, wishlistId: null, analyticsLocations: null, size: null },
          sku.id,
        );
      })}
    </View>
  );
}
