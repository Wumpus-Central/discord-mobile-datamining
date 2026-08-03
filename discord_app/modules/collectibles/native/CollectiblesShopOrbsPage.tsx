import noop from "noop";
import { View } from "get ActivityIndicator";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_8 = createCacheKey.createStyles({ container: { display: "flex", flex: 1 } });
let result = require("updateCategoriesAndProducts").fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default function _default(arg0) {
  let fetchShopHomeError;
  let getItemType;
  let onRenderFirstOrbsItem;
  let shopBlocks;
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
  let obj1 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[8]);
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
          found = products.find((skuId) => skuId.skuId === noop);
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
  obj1 = { style: { marginTop: 42 }, Illustration: null, body: null };
  obj1[1] = onRenderFirstOrbsItem(collectiblesAnalyticsContext[13]).NoResults;
  const intl = tmp4(tmp3[14]).intl;
  obj1[2] = intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[14]).t.eAn6z2);
  obj[1] = jsx(onRenderFirstOrbsItem(collectiblesAnalyticsContext[12]).EmptyState, { style: { marginTop: 42 }, Illustration: null, body: null });
  tmp10 = <initialVariantIndex style={callback().container}>{null}</initialVariantIndex>;
};