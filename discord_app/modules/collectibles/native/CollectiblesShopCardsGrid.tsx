// discord_app/modules/collectibles/native/CollectiblesShopCardsGrid.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import CollectiblesShopCardInternalV2Default from "CollectiblesShopCardV2.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import updateCategoriesAndProducts from "../CollectiblesCategoryStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function ShopCardGridItem(index) {
  index = index.index;
  const items = [index];
  ({ product, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = index);
  const memo = React.useMemo(() => ({ tilePosition: index }), items);
  return jsx(index(9175).CollectiblesAnalyticsProvider, { newValue: memo, children: jsx(CollectiblesShopCardInternalV2Default, { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground }) });
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
const createCacheKey = { justifyContent: "center", flexDirection: "row", gap: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default function CollectiblesShopCardsGrid(accessibilityLabel) {
  const products = accessibilityLabel.products;
  ({ category: importDefault, preferVCPrice: dependencyMap, scrollEnabled } = accessibilityLabel);
  if (scrollEnabled === undefined) {
    scrollEnabled = false;
  }
  ({ disableBundleStaticBackground: closure_3, muteBundleStaticBackground: closure_4 } = accessibilityLabel);
  ({ onScroll, paddingTop, paddingBottom } = accessibilityLabel);
  closure_5 = callback();
  let obj = products(14967);
  const cardLayout = obj.useCardLayout();
  const columns = cardLayout.columns;
  const cardWidth = cardLayout.cardWidth;
  const items = [products, columns];
  const memo = React.useMemo(() => applyDefault.chunk(products, columns), items);
  obj = { gap: products(9172).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom };
  obj[5] = obj;
  obj[6] = memo.map((item, index) => {
    closure_0 = index;
    return cardWidth(closure_1_4, {
      style: rowContainer.rowContainer,
      children: item.map((item, index) => {
        let categoryForProduct = closure_1_1;
        if (closure_1_1 == null) {
          categoryForProduct = columns.getCategoryForProduct(item.skuId);
        }
        const obj = { product: item, index: closure_0 * closure_1_6 + index, cardWidth: closure_1_7, unpublishedAt: null, preferVCPrice: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
        let unpublishedAt;
        if (categoryForProduct != null) {
          unpublishedAt = categoryForProduct.unpublishedAt;
        }
        obj[3] = unpublishedAt;
        obj[4] = closure_1_2;
        obj[5] = closure_1_3;
        obj[6] = closure_1_4;
        return cardWidth(ShopCardGridItem, obj, item.skuId);
      })
    }, index);
  });
  return cardWidth(closure_5, obj);
};