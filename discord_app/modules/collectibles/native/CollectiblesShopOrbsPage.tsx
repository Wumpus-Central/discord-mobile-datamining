// === Module 15750: CollectiblesShopOrbsPage ===

// Module 15750 (CollectiblesShopOrbsPage)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 7847 */;
import ShopBlockItemDefault from "ShopBlockItem" /* 15714 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;

require = fn;
const View = fn(17).View;
const constants = fn(1087).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ container: { display: "flex", flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((getItemType) => {
  const cResult = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]).c(18);
  ({ shopBlocks, onRenderFirstOrbsItem } = getItemType);
  getItemType = getItemType.getItemType;
  let container = closure_8();
  analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[8])().analyticsLocations;
  let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]);
  const tmp4 = analyticsLocations;
  collectiblesAnalyticsContext = onRenderFirstOrbsItem(collectiblesAnalyticsContext[9]).useCollectiblesAnalyticsContext();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {};
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  let obj2 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[9]);
  const collectiblesShopDeepLinkProps = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]).useCollectiblesShopDeepLinkProps(first);
  const initialProductSkuId = collectiblesShopDeepLinkProps.initialProductSkuId;
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const initialCategorySkuId = collectiblesShopDeepLinkProps.initialCategorySkuId;
  if (cResult[1] === collectiblesAnalyticsContext) {
    if (cResult[2] === analyticsLocations) {
      if (cResult[3] === initialCategorySkuId) {
        if (cResult[4] === initialProductSkuId) {
          if (cResult[5] === initialVariantIndex) {
            let tmp8 = cResult[6];
            let tmp9 = cResult[7];
          }
          const effect = initialProductSkuId.useEffect(tmp8, tmp9);
          if (cResult[8] !== onRenderFirstOrbsItem) {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
            cResult[8] = onRenderFirstOrbsItem;
            cResult[9] = A;
          } else {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
          }
          if (null === getItemType.fetchShopHomeError) {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
            if (0 !== shopBlocks.length) {
              class A {
                constructor(arg0) {
                  if (0 === getItemType.index) {
                    tmp = onRenderFirstOrbsItem;
                    tmp2 = onRenderFirstOrbsItem();
                  }
                  obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                  return jsx(closure_1(closure_2[13]), obj);
                }
              }
              const obj4 = { data: shopBlocks, renderItem: A, getItemType };
              const tmp16 = jsx(tmp4(tmp2[17]), { data: shopBlocks, renderItem: A, getItemType });
              cResult[14] = getItemType;
              cResult[15] = A;
              cResult[16] = shopBlocks;
              cResult[17] = tmp16;
            }
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
            cResult[10] = tmp18;
          } else {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
            const obj5 = { style: tmp18, Illustration: onRenderFirstOrbsItem(tmp2[15]).NoResults, body: null };
            const intl = onRenderFirstOrbsItem(tmp2[16]).intl;
            obj5.body = intl.string(onRenderFirstOrbsItem(tmp2[16]).t.eAn6z2);
            const tmp20 = jsx(onRenderFirstOrbsItem(tmp2[14]).EmptyState, { style: tmp18, Illustration: onRenderFirstOrbsItem(tmp2[15]).NoResults, body: null });
            cResult[11] = tmp20;
            const tmp19 = tmp20;
          } else {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
          }
          if (cResult[12] !== container.container) {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
            const obj6 = { style: container.container, children: tmp19 };
            const tmp23 = <initialVariantIndex style={container.container}>{tmp19}</initialVariantIndex>;
            container = container.container;
            cResult[12] = container;
            cResult[13] = tmp23;
          } else {
            class A {
              constructor(arg0) {
                if (0 === getItemType.index) {
                  tmp = onRenderFirstOrbsItem;
                  tmp2 = onRenderFirstOrbsItem();
                }
                obj = { block: getItemType.item, screen: closure_6.ORBS, preferVCPrice: true };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
          }
        }
      }
    }
  }
  const fn = function k() {
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
  };
  const items = [initialProductSkuId, initialVariantIndex, initialCategorySkuId, analyticsLocations, collectiblesAnalyticsContext];
  cResult[1] = collectiblesAnalyticsContext;
  cResult[2] = analyticsLocations;
  cResult[3] = initialCategorySkuId;
  cResult[4] = initialProductSkuId;
  cResult[5] = initialVariantIndex;
  cResult[6] = fn;
  cResult[7] = items;
  tmp9 = items;
  tmp8 = fn;
  const tmpResult = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]);
}) : ((arg0) => {
  ({ shopBlocks, onRenderFirstOrbsItem } = arg0);
  let analyticsLocations;
  let collectiblesAnalyticsContext;
  ({ fetchShopHomeError, getItemType } = arg0);
  analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[8])().analyticsLocations;
  const tmp = closure_8();
  const tmp2 = analyticsLocations;
  collectiblesAnalyticsContext = onRenderFirstOrbsItem(collectiblesAnalyticsContext[9]).useCollectiblesAnalyticsContext();
  let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[9]);
  const collectiblesShopDeepLinkProps = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]).useCollectiblesShopDeepLinkProps({});
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
      let tmp10 = jsx(tmp2(tmp3[17]), { data: shopBlocks, renderItem: tmp8, getItemType });
    }
    return tmp10;
  }
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: { marginTop: 42 }, Illustration: onRenderFirstOrbsItem(collectiblesAnalyticsContext[15]).NoResults, body: null };
  const intl = onRenderFirstOrbsItem(tmp3[16]).intl;
  obj5.body = intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[16]).t.eAn6z2);
  obj4.children = jsx(onRenderFirstOrbsItem(collectiblesAnalyticsContext[14]).EmptyState, { style: { marginTop: 42 }, Illustration: onRenderFirstOrbsItem(collectiblesAnalyticsContext[15]).NoResults, body: null });
  tmp10 = <initialVariantIndex style={tmp.container}>{null}</initialVariantIndex>;
  let obj2 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]);
});