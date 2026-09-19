// === Module 16160: CollectiblesShopOrbsPage ===

// Module 16160 (CollectiblesShopOrbsPage)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8444 */;
import ShopBlockItemDefault from "ShopBlockItem" /* 16132 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7782 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles({ container: { display: "flex", flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default function _default(arg0) {
  ({ shopBlocks, onRenderFirstOrbsItem } = arg0);
  let analyticsLocations;
  let collectiblesAnalyticsContext;
  ({ fetchShopHomeError, getItemType } = arg0);
  analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[6])().analyticsLocations;
  const tmp = closure_8();
  const tmp2 = analyticsLocations;
  collectiblesAnalyticsContext = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]).useCollectiblesAnalyticsContext();
  let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]);
  const collectiblesShopDeepLinkProps = onRenderFirstOrbsItem(collectiblesAnalyticsContext[8]).useCollectiblesShopDeepLinkProps({});
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
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const obj3 = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
          const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj3);
        }
      }
    }
  }, items);
  [][0] = onRenderFirstOrbsItem;
  if (null === fetchShopHomeError) {
    if (0 !== shopBlocks.length) {
      let obj3 = { data: shopBlocks, renderItem: tmp8, getItemType };
      let tmp10 = jsx(tmp2(tmp3[15]), { data: shopBlocks, renderItem: tmp8, getItemType });
    }
    return tmp10;
  }
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: { marginTop: 42 }, Illustration: onRenderFirstOrbsItem(collectiblesAnalyticsContext[13]).NoResults, body: null };
  const intl = onRenderFirstOrbsItem(tmp3[14]).intl;
  obj5.body = intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[14]).t.eAn6z2);
  obj4.children = jsx(onRenderFirstOrbsItem(collectiblesAnalyticsContext[12]).EmptyState, { style: { marginTop: 42 }, Illustration: onRenderFirstOrbsItem(collectiblesAnalyticsContext[13]).NoResults, body: null });
  tmp10 = <initialVariantIndex style={tmp.container}>{null}</initialVariantIndex>;
  let obj2 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[8]);
};