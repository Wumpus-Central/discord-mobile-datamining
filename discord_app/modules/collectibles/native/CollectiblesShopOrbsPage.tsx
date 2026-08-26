// === Module 15156: onRenderFirstOrbsItem ===

// Module 15156 (onRenderFirstOrbsItem)
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "updateCategoriesAndProducts" /* 7214 */;
import { CollectiblesMobileShopScreen as closure_6 } from "items" /* 678 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
let closure_8 = createCacheKey.createStyles({ container: { display: "flex", flex: 1 } });
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default function _default(arg0) {
  ({ shopBlocks, onRenderFirstOrbsItem } = arg0);
  let analyticsLocations;
  let collectiblesAnalyticsContext;
  let initialProductSkuId;
  let initialVariantIndex;
  let initialCategorySkuId;
  ({ fetchShopHomeError, getItemType } = arg0);
  analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[6])().analyticsLocations;
  let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]);
  collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  obj1 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[8]);
  const collectiblesShopDeepLinkProps = obj1.useCollectiblesShopDeepLinkProps({});
  initialProductSkuId = collectiblesShopDeepLinkProps.initialProductSkuId;
  initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  initialCategorySkuId = collectiblesShopDeepLinkProps.initialCategorySkuId;
  const items = [initialProductSkuId, initialVariantIndex, initialCategorySkuId, analyticsLocations, collectiblesAnalyticsContext];
  const effect = initialProductSkuId.useEffect(() => {
    if (null != initialProductSkuId) {
      if (null != initialCategorySkuId) {
        const category = initialCategorySkuId.getCategory(tmp10);
        let found;
        if (category != null) {
          const products = category.products;
          found = products.find((skuId) => skuId.skuId === closure_3);
        }
        if (null != found) {
          let obj = analyticsLocations(collectiblesAnalyticsContext[9]);
          obj.hideActionSheet();
          obj = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
          obj[0] = found;
          obj[1] = initialVariantIndex;
          obj[2] = analyticsLocations;
          obj[3] = collectiblesAnalyticsContext;
          const result = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]).openProductDetailsActionSheet(obj);
          const obj2 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]);
          const tmp8 = collectiblesAnalyticsContext;
        }
      }
    }
  }, items);
  [][0] = onRenderFirstOrbsItem;
  if (null === fetchShopHomeError) {
    if (0 !== shopBlocks.length) {
      obj = { data: null, renderItem: null, getItemType: null };
      obj[0] = shopBlocks;
      obj[1] = tmp8;
      obj[2] = getItemType;
      let tmp10 = jsx(analyticsLocations(tmp3[15]), { data: null, renderItem: null, getItemType: null });
    }
    return tmp10;
  }
  obj = { style: callback().container, children: null };
  obj1 = { style: { marginTop: 42 }, Illustration: tmp4(tmp3[13]).NoResults, body: null };
  const intl = tmp4(tmp3[14]).intl;
  obj1[2] = intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[14]).t.eAn6z2);
  obj[1] = jsx(onRenderFirstOrbsItem(collectiblesAnalyticsContext[12]).EmptyState, { style: { marginTop: 42 }, Illustration: tmp4(tmp3[13]).NoResults, body: null });
  tmp10 = <initialVariantIndex style={callback().container}>{null}</initialVariantIndex>;
};