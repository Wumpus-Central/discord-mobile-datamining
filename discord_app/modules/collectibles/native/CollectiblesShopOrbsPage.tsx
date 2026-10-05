// discord_app/modules/collectibles/native/CollectiblesShopOrbsPage.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet.tsx";
import ShopBlockItemDefault from "ShopBlockItem.tsx";
import react from "../../../../_runtime/00019_react.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ container: { display: "flex", flex: 1 } });
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (getItemType) => {
      let analyticsLocations;
      let collectiblesAnalyticsContext;
      let first;
      let onRenderFirstOrbsItem;
      let shopBlocks;
      let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]);
      const cResult = obj.c(18);
      ({ shopBlocks, onRenderFirstOrbsItem } = getItemType);
      getItemType = getItemType.getItemType;
      const fetchShopHomeError = getItemType.fetchShopHomeError;
      const tmp4 = closure_8();
      const tmp5 = analyticsLocations;
      analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[8])().analyticsLocations;
      let obj2 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[9]);
      collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {};
        cResult[0] = obj3;
        first = obj3;
      } else {
        first = cResult[0];
      }
      const tmpResult = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]);
      const collectiblesShopDeepLinkProps = tmpResult.useCollectiblesShopDeepLinkProps(first);
      const initialProductSkuId = collectiblesShopDeepLinkProps.initialProductSkuId;
      const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
      const initialCategorySkuId = collectiblesShopDeepLinkProps.initialCategorySkuId;
      if (cResult[1] === collectiblesAnalyticsContext) {
        if (cResult[2] === analyticsLocations) {
          if (cResult[3] === initialCategorySkuId) {
            if (cResult[4] === initialProductSkuId) {
              let tmp9;
              let tmp10;
              let tmp20;
              let tmp22;
              if (cResult[5] === initialVariantIndex) {
                tmp9 = cResult[6];
                tmp10 = cResult[7];
              }
              const tmp11 = initialProductSkuId;
              const effect = initialProductSkuId.useEffect(tmp9, tmp10);
              if (cResult[8] !== onRenderFirstOrbsItem) {
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
                cResult[8] = onRenderFirstOrbsItem;
                cResult[9] = A;
              } else {
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
              }
              if (null === fetchShopHomeError) {
                let tmp15;
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
                if (0 !== shopBlocks.length) {
                  class A {
                    constructor(item) {
                      item = item.item;
                      if (0 === item.index) {
                        onRenderFirstOrbsItem();
                      }
                      return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                    }
                  }
                  const tmp17 = jsx(tmp5(collectiblesAnalyticsContext[17]), {
                    data: shopBlocks,
                    renderItem: A,
                    getItemType,
                  });
                  cResult[14] = getItemType;
                  cResult[15] = A;
                  cResult[16] = shopBlocks;
                  cResult[17] = tmp17;
                  tmp15 = tmp17;
                }
                return tmp15;
              }
              const _Symbol = Symbol;
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
                cResult[10] = tmp19;
              } else {
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
                const EmptyState = onRenderFirstOrbsItem(tmp2[14]).EmptyState;
                const intl = onRenderFirstOrbsItem(tmp2[16]).intl;
                const tmp21 = (
                  <EmptyState
                    style={tmp19}
                    Illustration={onRenderFirstOrbsItem(collectiblesAnalyticsContext[15]).NoResults}
                    body={intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[16]).t.eAn6z2)}
                  />
                );
                cResult[11] = tmp21;
                tmp20 = tmp21;
              } else {
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
              }
              if (cResult[12] !== tmp4.container) {
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
                const tmp24 = <initialVariantIndex style={tmp4.container}>{tmp20}</initialVariantIndex>;
                cResult[12] = tmp4.container;
                cResult[13] = tmp24;
                tmp22 = tmp24;
              } else {
                class A {
                  constructor(item) {
                    item = item.item;
                    if (0 === item.index) {
                      onRenderFirstOrbsItem();
                    }
                    return jsx(ShopBlockItemDefault, { block: item, screen: constants.ORBS, preferVCPrice: true });
                  }
                }
              }
              tmp15 = tmp22;
            }
          }
        }
      }
      const fn = function k() {
        if (null != initialProductSkuId) {
          if (null != initialCategorySkuId) {
            const category = CollectiblesCategoryStore.getCategory(tmp11);
            let found;
            if (category != null) {
              const products = category.products;
              found = products.find((skuId) => skuId.skuId === initialProductSkuId);
            }
            if (null != found) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = {
                product: found,
                initialVariantIndex,
                analyticsLocations,
                shopAnalyticsContext: collectiblesAnalyticsContext,
              };
              const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
              openProductDetailsActionSheet2;
              const result = openProductDetailsActionSheet(obj2);
            }
          }
        }
      };
      const items = [
        initialProductSkuId,
        initialVariantIndex,
        initialCategorySkuId,
        analyticsLocations,
        collectiblesAnalyticsContext,
      ];
      cResult[1] = collectiblesAnalyticsContext;
      cResult[2] = analyticsLocations;
      cResult[3] = initialCategorySkuId;
      cResult[4] = initialProductSkuId;
      cResult[5] = initialVariantIndex;
      cResult[6] = fn;
      cResult[7] = items;
      tmp10 = items;
      tmp9 = fn;
    }
  : (arg0) => {
      let fetchShopHomeError;
      let getItemType;
      let intl;
      let onRenderFirstOrbsItem;
      let shopBlocks;
      ({ shopBlocks, onRenderFirstOrbsItem } = arg0);
      let analyticsLocations;
      let collectiblesAnalyticsContext;
      ({ fetchShopHomeError, getItemType } = arg0);
      const tmp = closure_8();
      const tmp2 = analyticsLocations;
      analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[8])().analyticsLocations;
      let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[9]);
      collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
      let obj2 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]);
      const collectiblesShopDeepLinkProps = obj2.useCollectiblesShopDeepLinkProps({});
      const initialProductSkuId = collectiblesShopDeepLinkProps.initialProductSkuId;
      const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
      const initialCategorySkuId = collectiblesShopDeepLinkProps.initialCategorySkuId;
      const items = [
        initialProductSkuId,
        initialVariantIndex,
        initialCategorySkuId,
        analyticsLocations,
        collectiblesAnalyticsContext,
      ];
      const effect = initialProductSkuId.useEffect(() => {
        if (null != initialProductSkuId) {
          if (null != initialCategorySkuId) {
            const category = CollectiblesCategoryStore.getCategory(tmp11);
            let found;
            if (category != null) {
              const products = category.products;
              found = products.find((skuId) => skuId.skuId === initialProductSkuId);
            }
            if (null != found) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = {
                product: found,
                initialVariantIndex,
                analyticsLocations,
                shopAnalyticsContext: collectiblesAnalyticsContext,
              };
              const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
              openProductDetailsActionSheet2;
              const result = openProductDetailsActionSheet(obj2);
            }
          }
        }
      }, items);
      [][0] = onRenderFirstOrbsItem;
      if (null === fetchShopHomeError) {
        let tmp10;
        if (0 !== shopBlocks.length) {
          tmp10 = jsx(tmp2(tmp3[17]), { data: shopBlocks, renderItem: tmp8, getItemType });
        }
        return tmp10;
      }
      ({
        style: { marginTop: 42 },
        Illustration: onRenderFirstOrbsItem(collectiblesAnalyticsContext[15]).NoResults,
        body: intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[16]).t.eAn6z2),
      });
      const EmptyState = onRenderFirstOrbsItem(tmp3[14]).EmptyState;
      intl = onRenderFirstOrbsItem(tmp3[16]).intl;
      tmp10 = <initialVariantIndex style={tmp.container}>{null}</initialVariantIndex>;
    };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default tmp2;
