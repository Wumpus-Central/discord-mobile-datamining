// === Module 13244: AddToWishlistGrid ===

// Module 13244 (AddToWishlistGrid)
import WishlistAnalyticsContext from "WishlistAnalyticsContext" /* 13245 */;
import AddToWishlistItemCardDefault from "AddToWishlistItemCard" /* 13246 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_5 = createStyles.createStyles({ itemsContainer: { flexDirection: "row", flexWrap: "wrap", gap: fn(6891).WISHLIST_SUGGESTION_CARD_GAP, justifyContent: "flex-start" } });
const ReactCompilerGating = fn(558);
let obj2 = { itemsContainer: { flexDirection: "row", flexWrap: "wrap", gap: fn(6891).WISHLIST_SUGGESTION_CARD_GAP, justifyContent: "flex-start" } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AddToWishlistGrid(analyticsLocations) {
  const cResult = wishlist(cardSize[6]).c(12);
  ({ items, wishlist } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  cardSize = analyticsLocations.cardSize;
  const tmp2 = closure_5();
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === cardSize) {
      if (cResult[2] === items) {
        let id;
        if (wishlist != null) {
          id = wishlist.id;
        }
        if (cResult[3] === id) {
          let tmp6 = cResult[4];
        }
        if (cResult[9] === tmp2.itemsContainer) {
          if (cResult[10] === tmp6) {
            let tmp14 = cResult[11];
          }
          return tmp14;
        }
        const obj2 = { style: tmp3, children: tmp6 };
        const tmp17 = <View style={tmp3}>{tmp6}</View>;
        cResult[9] = tmp2.itemsContainer;
        cResult[10] = tmp6;
        cResult[11] = tmp17;
        tmp14 = tmp17;
      }
    }
  }
  if (cResult[5] === analyticsLocations) {
    if (cResult[6] === cardSize) {
      let id1;
      if (wishlist != null) {
        id1 = wishlist.id;
      }
      if (cResult[7] === id1) {
        let tmp9 = cResult[8];
      }
      const mapped = items.map(tmp9);
      cResult[0] = analyticsLocations;
      cResult[1] = cardSize;
      cResult[2] = items;
      let id2;
      if (wishlist != null) {
        id2 = wishlist.id;
      }
      cResult[3] = id2;
      cResult[4] = mapped;
      tmp6 = mapped;
    }
  }
  cResult[5] = analyticsLocations;
  cResult[6] = cardSize;
  let id3;
  if (wishlist != null) {
    id3 = wishlist.id;
  }
  const fn = function l(itemSource, positionInSection) {
    const sku = itemSource.sku;
    const obj = { newValue: { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine }, children: null };
    const obj3 = { sku, wishlistId: null, analyticsLocations: null, size: null };
    let id;
    if (wishlist != null) {
      id = wishlist.id;
    }
    obj3.wishlistId = id;
    obj3.analyticsLocations = analyticsLocations;
    obj3.size = cardSize;
    obj.children = jsx(AddToWishlistItemCardDefault, { sku, wishlistId: null, analyticsLocations: null, size: null });
    return jsx(WishlistAnalyticsContext.WishlistAnalyticsProvider, { newValue: { positionInSection, skuId: sku.id, itemSource: itemSource.itemSource, productLine: sku.productLine }, children: null }, sku.id);
  };
  cResult[7] = id3;
  cResult[8] = fn;
  tmp9 = fn;
  let obj = wishlist(cardSize[6]);
}) : (function AddToWishlistGrid(arg0) {
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
});