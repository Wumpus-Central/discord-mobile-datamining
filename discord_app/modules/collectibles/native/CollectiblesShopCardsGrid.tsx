import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function ShopCardGridItem(index) {
  let cardWidth;
  let disableBundleStaticBackground;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let product;
  let unpublishedAt;
  index = index.index;
  const items = [index];
  ({ product, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = index);
  const memo = React.useMemo(() => ({ tilePosition: index }), items);
  const obj = { newValue: memo, children: null };
  obj[1] = jsx(importDefault(8670), { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground });
  return jsx(index(8673).CollectiblesAnalyticsProvider, { newValue: memo, children: null });
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
createCacheKey = { rowContainer: null };
createCacheKey = { justifyContent: "center", flexDirection: "row", gap: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("updateCategoriesAndProducts").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default function CollectiblesShopCardsGrid(accessibilityLabel) {
  let noop;
  let closure_4;
  let dependencyMap;
  let importDefault;
  let onScroll;
  let paddingBottom;
  let paddingTop;
  let scrollEnabled;
  const products = accessibilityLabel.products;
  ({ category: importDefault, preferVCPrice: dependencyMap, scrollEnabled } = accessibilityLabel);
  if (scrollEnabled === undefined) {
    scrollEnabled = false;
  }
  ({ disableBundleStaticBackground: noop, muteBundleStaticBackground: closure_4 } = accessibilityLabel);
  let closure_5;
  let columns;
  let cardWidth;
  ({ onScroll, paddingTop, paddingBottom } = accessibilityLabel);
  closure_5 = createCacheKey();
  let obj = products(14639);
  const cardLayout = obj.useCardLayout();
  columns = cardLayout.columns;
  cardWidth = cardLayout.cardWidth;
  const items = [products, columns];
  const memo = React.useMemo(() => outer1_1(outer1_2[8]).chunk(products, columns), items);
  obj = { accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityRole: "list", scrollEnabled, showsVerticalScrollIndicator: false, onScroll, contentContainerStyle: null, children: null };
  obj = { gap: products(8670).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom };
  obj[5] = obj;
  obj[6] = memo.map((arr) => {
    let closure_0 = arg1;
    return cardWidth(outer1_4, {
      style: rowContainer.rowContainer,
      children: arr.map((product) => {
        let categoryForProduct = outer1_1;
        if (outer1_1 == null) {
          categoryForProduct = columns.getCategoryForProduct(product.skuId);
        }
        const obj = { product, index: closure_0 * outer1_6 + arg1, cardWidth: outer1_7, unpublishedAt: null, preferVCPrice: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
        let unpublishedAt;
        if (categoryForProduct != null) {
          unpublishedAt = categoryForProduct.unpublishedAt;
        }
        obj[3] = unpublishedAt;
        obj[4] = outer1_2;
        obj[5] = outer1_3;
        obj[6] = outer1_4;
        return cardWidth(outer2_9, obj, product.skuId);
      })
    }, arg1);
  });
  return cardWidth(closure_5, obj);
};