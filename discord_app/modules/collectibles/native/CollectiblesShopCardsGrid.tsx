// === Module 15357: ShopCardGridItem ===

// Module 15357 (ShopCardGridItem)
import CollectiblesShopCardInternalV2Default from "CollectiblesShopCardInternalV2" /* 8827 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "updateCategoriesAndProducts" /* 7234 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
function ShopCardGridItem(index) {
  index = index.index;
  const items = [index];
  ({ product, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = index);
  const memo = React.useMemo(() => ({ tilePosition: index }), items);
  return jsx(index(8830).CollectiblesAnalyticsProvider, { newValue: memo, children: jsx(CollectiblesShopCardInternalV2Default, { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground }) });
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
createCacheKey = { rowContainer: null };
createCacheKey = { flexDirection: "row", gap: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default function CollectiblesShopCardsGrid(accessibilityLabel) {
  const products = accessibilityLabel.products;
  ({ category: importDefault, preferVCPrice: dependencyMap, scrollEnabled } = accessibilityLabel);
  if (scrollEnabled === undefined) {
    scrollEnabled = false;
  }
  ({ disableBundleStaticBackground: closure_3, muteBundleStaticBackground: closure_4 } = accessibilityLabel);
  closure_5 = undefined;
  let columns;
  let cardWidth;
  ({ onScroll, paddingTop, paddingBottom } = accessibilityLabel);
  closure_5 = callback();
  let obj = products(15356);
  const cardLayout = obj.useCardLayout();
  columns = cardLayout.columns;
  cardWidth = cardLayout.cardWidth;
  const items = [products, columns];
  const memo = React.useMemo(() => closure_1_1(closure_1_2[8]).chunk(products, columns), items);
  obj = { accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityRole: "list", scrollEnabled, showsVerticalScrollIndicator: false, onScroll, contentContainerStyle: null, children: null };
  obj = { gap: products(8827).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: cardLayout.rowWidth, alignSelf: "center" };
  obj[5] = obj;
  obj[6] = memo.map((arr) => {
    closure_0 = arg1;
    return cardWidth(closure_1_4, {
      style: rowContainer.rowContainer,
      children: arr.map((product) => {
        let categoryForProduct = closure_1_1;
        if (closure_1_1 == null) {
          categoryForProduct = columns.getCategoryForProduct(product.skuId);
        }
        const obj = { product, index: closure_0 * closure_1_6 + arg1, cardWidth: closure_1_7, unpublishedAt: null, preferVCPrice: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
        let unpublishedAt;
        if (categoryForProduct != null) {
          unpublishedAt = categoryForProduct.unpublishedAt;
        }
        obj[3] = unpublishedAt;
        obj[4] = closure_1_2;
        obj[5] = closure_1_3;
        obj[6] = closure_1_4;
        return cardWidth(closure_2_9, obj, product.skuId);
      })
    }, arg1);
  });
  return cardWidth(closure_5, obj);
};