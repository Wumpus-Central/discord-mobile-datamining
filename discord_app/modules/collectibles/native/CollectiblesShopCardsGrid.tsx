// === Module 18515: CollectiblesShopCardsGrid ===

// Module 18515 (CollectiblesShopCardsGrid)
import applyDefault from "apply" /* 12 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9420 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 10416 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8485 */;

require = fn;
function ShopCardGridItem(index) {
  index = index.index;
  items = [index];
  ({ product, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = index);
  const memo = noop.useMemo(() => ({ tilePosition: index }), items);
  return metroImportDefault(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: memo, children: metroImportDefault(CollectiblesShopCardV2Default, { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground }) });
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { rowContainer: { flexDirection: "row", gap: fn(10416).COLLECTIBLES_SHOP_CARD_GAP } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default function CollectiblesShopCardsGrid(accessibilityLabel) {
  const products = accessibilityLabel.products;
  ({ category: importDefault, preferVCPrice: dependencyMap, scrollEnabled } = accessibilityLabel);
  if (scrollEnabled === undefined) {
    scrollEnabled = false;
  }
  ({ disableBundleStaticBackground: noop, muteBundleStaticBackground: closure_4 } = accessibilityLabel);
  ({ onScroll, paddingTop, paddingBottom, header } = accessibilityLabel);
  const rowContainer = closure_9();
  const cardLayout = products(18514).useCardLayout();
  const columns = cardLayout.columns;
  const cardWidth = cardLayout.cardWidth;
  items = [products, columns];
  ({ rowWidth, ref, onLayout } = cardLayout);
  const memo = noop.useMemo(() => applyDefault.chunk(products, columns), items);
  const obj2 = { accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityRole: "list", scrollEnabled, showsVerticalScrollIndicator: false, onScroll, ref, onLayout, contentContainerStyle: null, children: null };
  let obj = products(18514);
  obj2.contentContainerStyle = { gap: products(10416).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" };
  const items1 = [
    header,
    memo.map((arr, index) => {
      closure_0 = index;
      return cardWidth(muteBundleStaticBackground, {
        style: rowContainer.rowContainer,
        children: arr.map((product, index) => {
          let categoryForProduct = importDefault;
          if (importDefault == null) {
            categoryForProduct = CollectiblesCategoryStore.getCategoryForProduct(product.skuId);
          }
          const obj = { product, index: closure_0 * columns + index, cardWidth, unpublishedAt: null, preferVCPrice: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
          let unpublishedAt;
          if (categoryForProduct != null) {
            unpublishedAt = categoryForProduct.unpublishedAt;
          }
          obj.unpublishedAt = unpublishedAt;
          obj.preferVCPrice = preferVCPrice;
          obj.disableBundleStaticBackground = disableBundleStaticBackground;
          obj.muteBundleStaticBackground = muteBundleStaticBackground;
          return metroImportDefault(ShopCardGridItem, obj, product.skuId);
        })
      }, index);
    })
  ];
  obj2.children = items1;
  return closure_8(rowContainer, obj2);
};