// === Module 15841: CollectiblesShopOrbsPage ===

// Module 15841 (CollectiblesShopOrbsPage)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8176 */;
import ShopBlockItemDefault from "ShopBlockItem" /* 15815 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { display: "flex", flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default function _default(arg0) {
  ({ shopBlocks, onRenderFirstOrbsItem } = arg0);
  let analyticsLocations;
  let collectiblesAnalyticsContext;
  ({ fetchShopHomeError, getItemType } = arg0);
  analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[6])().analyticsLocations;
  let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]);
  collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  let obj1 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[8]);
  const collectiblesShopDeepLinkProps = obj1.useCollectiblesShopDeepLinkProps({});
  const initialProductSkuId = collectiblesShopDeepLinkProps.initialProductSkuId;
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const initialCategorySkuId = collectiblesShopDeepLinkProps.initialCategorySkuId;
  const items = [initialProductSkuId, initialVariantIndex, initialCategorySkuId, analyticsLocations, collectiblesAnalyticsContext];
  const effect = initialProductSkuId.useEffect(() => {
    if (null != initialProductSkuId) {
      if (null != initialCategorySkuId) {
        const category = CollectiblesCategoryStore.getCategory(tmp10);
        let found;
        if (category != null) {
          const products = category.products;
          found = products.find((skuId) => skuId.skuId === initialProductSkuId);
        }
        if (null != found) {
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          obj = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
          const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj);
        }
      }
    }
  }, items);
  [][0] = onRenderFirstOrbsItem;
  if (null === fetchShopHomeError) {
    if (0 !== shopBlocks.length) {
      obj = { data: shopBlocks, renderItem: tmp8, getItemType };
      let tmp10 = jsx(analyticsLocations(tmp3[15]), { data: shopBlocks, renderItem: tmp8, getItemType });
    }
    return tmp10;
  }
  obj = { style: closure_8().container, children: null };
  obj1 = { style: { marginTop: 42 }, Illustration: tmp4(tmp3[13]).NoResults, body: null };
  const intl = tmp4(tmp3[14]).intl;
  obj1.body = intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[14]).t.eAn6z2);
  obj.children = jsx(onRenderFirstOrbsItem(collectiblesAnalyticsContext[12]).EmptyState, { style: { marginTop: 42 }, Illustration: tmp4(tmp3[13]).NoResults, body: null });
  tmp10 = <initialVariantIndex style={closure_8().container}>{null}</initialVariantIndex>;
};