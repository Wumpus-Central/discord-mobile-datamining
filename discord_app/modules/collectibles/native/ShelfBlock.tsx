// discord_app/modules/collectibles/native/ShelfBlock.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let block, navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = "#ffffff";
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  containerWithBackground: obj3,
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    minWidth: "100%",
    aspectRatio: 2.5,
    resizeMode: "cover",
  },
  header: obj4,
  headingWrapper: { flexShrink: 1 },
  listEdgeSpacer: obj5,
  listItemSeparator: obj6,
};
obj2 = { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {
  marginTop: nativeDefault.space.PX_24,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_24,
  overflow: "hidden",
};
obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  zIndex: 1,
};
obj5 = { width: nativeDefault.space.PX_16 };
obj6 = { width: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_12();
      if (cResult[0] !== tmp2.listEdgeSpacer) {
        const obj2 = { style: tmp2.listEdgeSpacer };
        const tmp6 = React4(hasOwnProperty, obj2);
        cResult[0] = tmp2.listEdgeSpacer;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_12().listEdgeSpacer };
      return React4(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_12();
      if (cResult[0] !== tmp2.listItemSeparator) {
        const obj2 = { style: tmp2.listItemSeparator };
        const tmp6 = React4(hasOwnProperty, obj2);
        cResult[0] = tmp2.listItemSeparator;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_12().listItemSeparator };
      return React4(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (block) => {
      let first;
      let tmp11;
      const tmp = block;
      let obj = block(navigation[9]);
      const cResult = obj.c(54);
      block = block.block;
      const preferVCPrice = block.preferVCPrice;
      closure_12();
      let obj2 = block(navigation[10]);
      navigation = obj2.useNavigation();
      let obj3 = block(navigation[11]);
      const collectiblesAnalyticsContext = obj3.useCollectiblesAnalyticsContext();
      const obj4 = block(navigation[12]);
      const handleDismissCoachmarkOnScroll =
        obj4.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
      const tmp8 = preferVCPrice(navigation[13]);
      const analyticsLocations = tmp8(preferVCPrice(navigation[14]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
      const tmp7 = preferVCPrice;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [CollectiblesCategoryStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== block.categorySkuId) {
        const fn = function p() {
          let category;
          if (null != block.categorySkuId) {
            category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
          }
          return category;
        };
        cResult[1] = block.categorySkuId;
        cResult[2] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[2];
      }
      const tmpResult = tmp(navigation[15]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
      const tmp13 = tmp7(navigation[16])();
      const rankedSkuIds = block.rankedSkuIds;
      if (cResult[3] === tmp13) {
        let tmp14;
        let tmp16;
        if (cResult[4] === rankedSkuIds) {
          tmp14 = cResult[5];
        }
        if (cResult[6] !== tmp14) {
          const obj5 = { products: tmp14 };
          cResult[6] = tmp14;
          class R {
            constructor() {
              let items;
              if (null != stateFromStores) {
                if (stateFromStores.isOrbsExclusive) {
                  const obj2 = {
                    analyticsLocations: items,
                    analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
                    screen: constants.ORBS,
                  };
                  const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
                  items = [];
                  CollectiblesActionCreators;
                  items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
                  const result = openCollectiblesShopMobile(obj2);
                } else {
                  const obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
                  navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
                }
              }
            }
          }
          tmp16 = obj5;
        } else {
          tmp16 = cResult[7];
        }
        const tmpResult2 = tmp(navigation[17]);
        const filteredAndSortedProducts = tmpResult2.useFilteredAndSortedProducts(tmp16);
        if (cResult[8] === collectiblesAnalyticsContext) {
          if (cResult[9] === stateFromStores) {
            if (cResult[12] === block.name) {
              const _Symbol = Symbol;
              class W {
                constructor(arg0) {
                  let index;
                  let item;
                  let obj2;
                  let obj3;
                  ({ item, index } = arg0);
                  const obj = { newValue: obj2, children: React4(CollectiblesShopCardV2Default, obj3) };
                  obj2 = { tilePosition: index, pageSection: block.name };
                  const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
                  obj3 = { product: item, preferVCPrice };
                  return React4(CollectiblesAnalyticsProvider, obj);
                }
              }
              if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function z(skuId) {
                  return skuId.skuId;
                };
                class W {
                  constructor(arg0) {
                    let index;
                    let item;
                    let obj2;
                    let obj3;
                    ({ item, index } = arg0);
                    const obj = { newValue: obj2, children: React4(CollectiblesShopCardV2Default, obj3) };
                    obj2 = { tilePosition: index, pageSection: block.name };
                    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
                    obj3 = { product: item, preferVCPrice };
                    return React4(CollectiblesAnalyticsProvider, obj);
                  }
                }
              }
              class R {
                constructor() {
                  let items;
                  if (null != stateFromStores) {
                    if (stateFromStores.isOrbsExclusive) {
                      const obj2 = {
                        analyticsLocations: items,
                        analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
                        screen: constants.ORBS,
                      };
                      const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
                      items = [];
                      CollectiblesActionCreators;
                      items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
                      const result = openCollectiblesShopMobile(obj2);
                    } else {
                      const obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
                      navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
                    }
                  }
                }
              }
            }
            class W {
              constructor(arg0) {
                let index;
                let item;
                let obj2;
                let obj3;
                ({ item, index } = arg0);
                const obj = { newValue: obj2, children: React4(CollectiblesShopCardV2Default, obj3) };
                obj2 = { tilePosition: index, pageSection: block.name };
                const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
                obj3 = { product: item, preferVCPrice };
                return React4(CollectiblesAnalyticsProvider, obj);
              }
            }
            cResult[12] = block.name;
            class R {
              constructor() {
                let items;
                if (null != stateFromStores) {
                  if (stateFromStores.isOrbsExclusive) {
                    const obj2 = {
                      analyticsLocations: items,
                      analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
                      screen: constants.ORBS,
                    };
                    const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
                    items = [];
                    CollectiblesActionCreators;
                    items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
                    const result = openCollectiblesShopMobile(obj2);
                  } else {
                    const obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
                    navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
                  }
                }
              }
            }
            cResult[13] = preferVCPrice;
            cResult[14] = W;
          }
        }
        class R {
          constructor() {
            let items;
            if (null != stateFromStores) {
              if (stateFromStores.isOrbsExclusive) {
                const obj2 = {
                  analyticsLocations: items,
                  analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
                  screen: constants.ORBS,
                };
                const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
                items = [];
                CollectiblesActionCreators;
                items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
                const result = openCollectiblesShopMobile(obj2);
              } else {
                const obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
                navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
              }
            }
          }
        }
        cResult[8] = collectiblesAnalyticsContext;
        cResult[9] = stateFromStores;
        cResult[10] = navigation;
        cResult[11] = R;
      }
      const tmp13Result = tmp13(rankedSkuIds);
      cResult[3] = tmp13;
      cResult[4] = rankedSkuIds;
      cResult[5] = tmp13Result;
      tmp14 = tmp13Result;
    }
  : (block) => {
      let FlashList;
      let Heading;
      let intl;
      let items5;
      let items6;
      let obj13;
      let obj16;
      let obj7;
      let obj9;
      block = block.block;
      const preferVCPrice = block.preferVCPrice;
      navigation = undefined;
      const tmp = closure_12();
      let obj = block(navigation[10]);
      navigation = obj.useNavigation();
      let obj2 = block(navigation[11]);
      const collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
      let obj3 = block(navigation[12]);
      const handleDismissCoachmarkOnScroll =
        obj3.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
      const tmp7 = preferVCPrice(navigation[13]);
      const analyticsLocations = tmp7(preferVCPrice(navigation[14]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
      let items = [CollectiblesCategoryStore];
      const obj4 = block(navigation[15]);
      const stateFromStores = obj4.useStateFromStores(items, () => {
        let category;
        if (null != block.categorySkuId) {
          category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
        }
        return category;
      });
      const tmp9 = preferVCPrice(navigation[16])();
      let closure_5 = tmp9;
      const items1 = [block.rankedSkuIds, tmp9];
      const memo = collectiblesAnalyticsContext.useMemo(() => closure_5(block.rankedSkuIds), items1);
      const obj5 = block(navigation[17]);
      const filteredAndSortedProducts = obj5.useFilteredAndSortedProducts({ products: memo });
      const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext];
      const items3 = [block.name, preferVCPrice];
      const callback = collectiblesAnalyticsContext.useCallback(() => {
        let items;
        if (null != stateFromStores) {
          if (stateFromStores.isOrbsExclusive) {
            const obj2 = {
              analyticsLocations: items,
              analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
              screen: constants.ORBS,
            };
            const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
            items = [];
            CollectiblesActionCreators;
            items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
            const result = openCollectiblesShopMobile(obj2);
          } else {
            const obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
            navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
          }
        }
      }, items2);
      const callback1 = collectiblesAnalyticsContext.useCallback((arg0) => {
        let index;
        let item;
        let obj2;
        let obj3;
        ({ item, index } = arg0);
        const obj = { newValue: obj2, children: React4(CollectiblesShopCardV2Default, obj3) };
        obj2 = { tilePosition: index, pageSection: block.name };
        const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
        obj3 = { product: item, preferVCPrice };
        return React4(CollectiblesAnalyticsProvider, obj);
      }, items3);
      const tmp6 = preferVCPrice;
      if (0 === filteredAndSortedProducts.length) {
        return null;
      } else {
        const items4 = [tmp.container, null != block.mobileBackgroundImage && tmp.containerWithBackground];
        const obj6 = { value: analyticsLocations, children: closure_10(closure_5, obj7) };
        let tmp14Result = tmp25;
        obj7 = { style: items4, children: items5 };
        const AnalyticsLocationProvider = tmp2(tmp3[13]).AnalyticsLocationProvider;
        if (null != block.mobileBackgroundImage) {
          tmp14Result = null != block.mobileBackgroundImage;
        }
        if (tmp14Result) {
          const obj8 = { style: tmp.backgroundImage, source: obj9 };
          obj9 = { uri: block.mobileBackgroundImage };
          tmp14Result = closure_9(stateFromStores, obj8);
        }
        items5 = [tmp14Result, ,];
        const obj10 = { style: tmp.header, children: items6 };
        let tmp19;
        const obj11 = { style: tmp.headingWrapper, children: closure_9(Heading, obj13) };
        Heading = tmp2(tmp3[20]).Heading;
        if (null != block.mobileBackgroundImage) {
          let titleColor = block.titleColor;
          if (titleColor == null) {
            titleColor = c11;
          }
          tmp19 = { color: titleColor };
          const obj12 = { color: titleColor };
        }
        obj13 = { variant: "text-md/semibold", style: tmp19, children: block.name };
        items6 = [closure_9(closure_5, obj11)];
        let tmp14Result2 = block.showButton && null != stateFromStores;
        if (tmp14Result2) {
          let str = "secondary";
          const Button = tmp2(tmp3[21]).Button;
          if (null != block.mobileBackgroundImage) {
            str = "primary-overlay";
          }
          const obj14 = {
            variant: str,
            size: "sm",
            shrink: true,
            grow: false,
            text: intl.string(block(navigation[22]).t.xFcotU),
            onPress: callback,
          };
          intl = tmp2(tmp3[22]).intl;
          tmp14Result2 = closure_9(Button, obj14);
        }
        items6[1] = tmp14Result2;
        items5[1] = closure_10(closure_5, obj10);
        const obj15 = { children: closure_9(FlashList, obj16) };
        const LayerScope = tmp2(tmp3[23]).LayerScope;
        obj16 = {
          horizontal: true,
          accessibilityRole: "list",
          accessibilityLabel: block.name,
          data: filteredAndSortedProducts,
          keyExtractor: tmp13,
          onScroll: handleDismissCoachmarkOnScroll,
          renderItem: callback1,
          decelerationRate: "fast",
          snapToInterval: block(navigation[19]).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(navigation[7]).space.PX_12,
          showsHorizontalScrollIndicator: false,
          ListHeaderComponent: ListFooterComponent,
          ListFooterComponent,
          ItemSeparatorComponent,
        };
        FlashList = tmp2(tmp3[24]).FlashList;
        items5[2] = closure_9(LayerScope, obj15);
        return closure_9(AnalyticsLocationProvider, obj6);
      }
    };
let result = size.fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default tmp5;
