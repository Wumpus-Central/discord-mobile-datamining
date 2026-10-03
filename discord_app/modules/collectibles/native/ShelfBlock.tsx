// === Module 15741: ShelfBlock ===

// Module 15741 (ShelfBlock)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8418 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8421 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1087).CollectiblesMobileShopScreen;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = "#ffffff";
const createStyles = fn(4890);
let obj2 = { container: { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, containerWithBackground: null, backgroundImage: null, header: null, headingWrapper: null, listEdgeSpacer: null, listItemSeparator: null };
let obj3 = { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.containerWithBackground = { marginTop: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, overflow: "hidden" };
obj2.backgroundImage = { position: "absolute", top: 0, left: 0, bottom: 0, minWidth: "100%", aspectRatio: 2.5, resizeMode: "cover" };
let obj4 = { marginTop: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, overflow: "hidden" };
obj2.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, zIndex: 1 };
obj2.headingWrapper = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, zIndex: 1 };
obj2.listEdgeSpacer = { width: nativeDefault.space.PX_16 };
let obj6 = { width: nativeDefault.space.PX_16 };
obj2.listItemSeparator = { width: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_12();
  if (cResult[0] !== tmp2.listEdgeSpacer) {
    const obj2 = { style: tmp2.listEdgeSpacer };
    const tmp6 = options(hasOwnProperty, obj2);
    cResult[0] = tmp2.listEdgeSpacer;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => options(hasOwnProperty, { style: closure_12().listEdgeSpacer }));
ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_12();
  if (cResult[0] !== tmp2.listItemSeparator) {
    const obj2 = { style: tmp2.listItemSeparator };
    const tmp6 = options(hasOwnProperty, obj2);
    cResult[0] = tmp2.listItemSeparator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => options(hasOwnProperty, { style: closure_12().listItemSeparator }));
ReactCompilerGating = fn(558);
let obj7 = { width: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((block) => {
  const cResult = block(navigation[9]).c(54);
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  closure_12();
  let obj = block(navigation[9]);
  navigation = block(navigation[10]).useNavigation();
  let obj2 = block(navigation[10]);
  const collectiblesAnalyticsContext = block(navigation[11]).useCollectiblesAnalyticsContext();
  let obj3 = block(navigation[11]);
  const handleDismissCoachmarkOnScroll = block(navigation[12]).useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  const obj4 = block(navigation[12]);
  const tmp7 = preferVCPrice;
  const analyticsLocations = preferVCPrice(navigation[13])(preferVCPrice(navigation[14]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesCategoryStore];
    cResult[0] = items;
    let first = items;
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
    let tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  const tmp8 = preferVCPrice(navigation[13]);
  const stateFromStores = block(navigation[15]).useStateFromStores(first, tmp11);
  const tmp13 = tmp7(navigation[16])();
  const rankedSkuIds = block.rankedSkuIds;
  if (cResult[3] === tmp13) {
    if (cResult[4] === rankedSkuIds) {
      let tmp14 = cResult[5];
    }
    if (cResult[6] !== tmp14) {
      const obj5 = { products: tmp14 };
      cResult[6] = tmp14;
      class R {
        constructor() {
          tmp = closure_4;
          if (null != closure_4) {
            if (tmp.isOrbsExclusive) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj2 = closure_0(closure_2[18]);
              obj1 = { analyticsLocations: null, analyticsSource: null, screen: null };
              tmp8 = closure_1;
              items = [];
              items[0] = closure_1(closure_2[14]).COLLECTIBLES_SHOP;
              obj1.analyticsLocations = items;
              obj1.analyticsSource = closure_1(closure_2[14]).COLLECTIBLES_SHOP;
              tmp9 = closure_7;
              obj1.screen = closure_7.ORBS;
              result = obj2.openCollectiblesShopMobile(obj1);
            } else {
              tmp2 = closure_2;
              tmp3 = UserSettingsSections;
              obj = { category: null, analyticsContext: null };
              obj.category = tmp;
              tmp4 = closure_3;
              obj.analyticsContext = closure_3;
              navigateResult = closure_2.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
            }
          }
          return;
        }
      }
      let tmp16 = obj5;
    } else {
      tmp16 = cResult[7];
    }
    const filteredAndSortedProducts = tmp(tmp2[17]).useFilteredAndSortedProducts(tmp16);
    if (cResult[8] === collectiblesAnalyticsContext) {
      if (cResult[9] === stateFromStores) {
        if (cResult[12] === block.name) {
          const _Symbol = Symbol;
          class W {
            constructor(arg0) {
              ({ item, index } = block);
              obj = { newValue: null, children: null };
              obj1 = { tilePosition: index, pageSection: block.name };
              obj.newValue = obj1;
              obj4 = { product: item, preferVCPrice };
              obj.children = jsx(closure_1(closure_2[19]), obj4);
              return jsx(closure_0(closure_2[11]).CollectiblesAnalyticsProvider, obj);
            }
          }
          if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function z(skuId) {
              return skuId.skuId;
            };
            class W {
              constructor(arg0) {
                ({ item, index } = block);
                obj = { newValue: null, children: null };
                obj1 = { tilePosition: index, pageSection: block.name };
                obj.newValue = obj1;
                obj4 = { product: item, preferVCPrice };
                obj.children = jsx(closure_1(closure_2[19]), obj4);
                return jsx(closure_0(closure_2[11]).CollectiblesAnalyticsProvider, obj);
              }
            }
          }
          class R {
            constructor() {
              tmp = closure_4;
              if (null != closure_4) {
                if (tmp.isOrbsExclusive) {
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj2 = closure_0(closure_2[18]);
                  obj1 = { analyticsLocations: null, analyticsSource: null, screen: null };
                  tmp8 = closure_1;
                  items = [];
                  items[0] = closure_1(closure_2[14]).COLLECTIBLES_SHOP;
                  obj1.analyticsLocations = items;
                  obj1.analyticsSource = closure_1(closure_2[14]).COLLECTIBLES_SHOP;
                  tmp9 = closure_7;
                  obj1.screen = closure_7.ORBS;
                  result = obj2.openCollectiblesShopMobile(obj1);
                } else {
                  tmp2 = closure_2;
                  tmp3 = UserSettingsSections;
                  obj = { category: null, analyticsContext: null };
                  obj.category = tmp;
                  tmp4 = closure_3;
                  obj.analyticsContext = closure_3;
                  navigateResult = closure_2.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
                }
              }
              return;
            }
          }
        }
        class W {
          constructor(arg0) {
            ({ item, index } = block);
            obj = { newValue: null, children: null };
            obj1 = { tilePosition: index, pageSection: block.name };
            obj.newValue = obj1;
            obj4 = { product: item, preferVCPrice };
            obj.children = jsx(closure_1(closure_2[19]), obj4);
            return jsx(closure_0(closure_2[11]).CollectiblesAnalyticsProvider, obj);
          }
        }
        cResult[12] = block.name;
        class R {
          constructor() {
            tmp = closure_4;
            if (null != closure_4) {
              if (tmp.isOrbsExclusive) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj2 = closure_0(closure_2[18]);
                obj1 = { analyticsLocations: null, analyticsSource: null, screen: null };
                tmp8 = closure_1;
                items = [];
                items[0] = closure_1(closure_2[14]).COLLECTIBLES_SHOP;
                obj1.analyticsLocations = items;
                obj1.analyticsSource = closure_1(closure_2[14]).COLLECTIBLES_SHOP;
                tmp9 = closure_7;
                obj1.screen = closure_7.ORBS;
                result = obj2.openCollectiblesShopMobile(obj1);
              } else {
                tmp2 = closure_2;
                tmp3 = UserSettingsSections;
                obj = { category: null, analyticsContext: null };
                obj.category = tmp;
                tmp4 = closure_3;
                obj.analyticsContext = closure_3;
                navigateResult = closure_2.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
              }
            }
            return;
          }
        }
        cResult[13] = preferVCPrice;
        cResult[14] = W;
      }
    }
    class R {
      constructor() {
        tmp = closure_4;
        if (null != closure_4) {
          if (tmp.isOrbsExclusive) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj2 = closure_0(closure_2[18]);
            obj1 = { analyticsLocations: null, analyticsSource: null, screen: null };
            tmp8 = closure_1;
            items = [];
            items[0] = closure_1(closure_2[14]).COLLECTIBLES_SHOP;
            obj1.analyticsLocations = items;
            obj1.analyticsSource = closure_1(closure_2[14]).COLLECTIBLES_SHOP;
            tmp9 = closure_7;
            obj1.screen = closure_7.ORBS;
            result = obj2.openCollectiblesShopMobile(obj1);
          } else {
            tmp2 = closure_2;
            tmp3 = UserSettingsSections;
            obj = { category: null, analyticsContext: null };
            obj.category = tmp;
            tmp4 = closure_3;
            obj.analyticsContext = closure_3;
            navigateResult = closure_2.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
          }
        }
        return;
      }
    }
    cResult[8] = collectiblesAnalyticsContext;
    cResult[9] = stateFromStores;
    cResult[10] = navigation;
    cResult[11] = R;
    const tmpResult2 = tmp(tmp2[17]);
  }
  const tmp13Result = tmp13(rankedSkuIds);
  cResult[3] = tmp13;
  cResult[4] = rankedSkuIds;
  cResult[5] = tmp13Result;
  tmp14 = tmp13Result;
  const tmpResult = block(navigation[15]);
}) : ((block) => {
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  let navigation;
  const tmp = closure_12();
  navigation = block(navigation[10]).useNavigation();
  let obj = block(navigation[10]);
  const collectiblesAnalyticsContext = block(navigation[11]).useCollectiblesAnalyticsContext();
  let obj2 = block(navigation[11]);
  let obj3 = block(navigation[12]);
  const tmp6 = preferVCPrice;
  const tmp7 = preferVCPrice(navigation[13]);
  let items = [CollectiblesCategoryStore];
  const stateFromStores = block(navigation[15]).useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
    }
    return category;
  });
  const tmp9 = preferVCPrice(navigation[16])();
  closure_5 = tmp9;
  const items1 = [block.rankedSkuIds, tmp9];
  const memo = collectiblesAnalyticsContext.useMemo(() => closure_5(block.rankedSkuIds), items1);
  const obj4 = block(navigation[15]);
  const filteredAndSortedProducts = block(navigation[17]).useFilteredAndSortedProducts({ products: memo });
  const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext];
  const items3 = [block.name, preferVCPrice];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null };
        const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
        obj3.analyticsLocations = items;
        obj3.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        obj3.screen = constants.ORBS;
        const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
      } else {
        const obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
      }
    }
  }, items2);
  const callback1 = collectiblesAnalyticsContext.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index, pageSection: block.name }, children: options(CollectiblesShopCardV2Default, { product: item, preferVCPrice }) };
    return options(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items3);
  if (0 === filteredAndSortedProducts.length) {
    return null;
  } else {
    const items4 = [tmp.container, ];
    let containerWithBackground = tmp25;
    if (null != block.mobileBackgroundImage) {
      containerWithBackground = tmp.containerWithBackground;
    }
    items4[1] = containerWithBackground;
    const obj6 = { value: tmp7(preferVCPrice(navigation[14]).COLLECTIBLES_SHOP_SHELF).analyticsLocations, children: null };
    const obj7 = { style: items4, children: null };
    let tmp14Result = tmp25;
    if (null != block.mobileBackgroundImage) {
      tmp14Result = null != block.mobileBackgroundImage;
    }
    if (tmp14Result) {
      const obj8 = { style: tmp.backgroundImage, source: null };
      const obj9 = { uri: block.mobileBackgroundImage };
      obj8.source = obj9;
      tmp14Result = closure_9(stateFromStores, obj8);
    }
    const items5 = [tmp14Result, , ];
    const obj10 = { style: tmp.header, children: null };
    const obj11 = { style: tmp.headingWrapper, children: null };
    let tmp19;
    if (null != block.mobileBackgroundImage) {
      let titleColor = block.titleColor;
      if (titleColor == null) {
        titleColor = c11;
      }
      const obj12 = { color: titleColor };
      tmp19 = obj12;
    }
    const obj13 = { variant: "text-md/semibold", style: tmp19, children: block.name };
    obj11.children = closure_9(tmp2(tmp3[20]).Heading, obj13);
    const items6 = [closure_9(closure_5, obj11), ];
    let tmp14Result2 = block.showButton && null != stateFromStores;
    if (tmp14Result2) {
      let str = "secondary";
      if (tmp25) {
        str = "primary-overlay";
      }
      const obj14 = { variant: str, size: "sm", shrink: true, grow: false, text: null, onPress: null };
      const intl = tmp2(tmp3[22]).intl;
      obj14.text = intl.string(tmp2(tmp3[22]).t.xFcotU);
      obj14.onPress = callback;
      tmp14Result2 = closure_9(tmp2(tmp3[21]).Button, obj14);
    }
    items6[1] = tmp14Result2;
    obj10.children = items6;
    items5[1] = closure_10(closure_5, obj10);
    const obj15 = { children: null };
    const obj16 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: block.name, data: filteredAndSortedProducts, keyExtractor: tmp13, onScroll: obj3.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll, renderItem: callback1, decelerationRate: "fast", snapToInterval: tmp2(tmp3[19]).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(tmp3[7]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListFooterComponent, ListFooterComponent, ItemSeparatorComponent };
    obj15.children = closure_9(tmp2(tmp3[24]).FlashList, obj16);
    items5[2] = closure_9(tmp2(tmp3[23]).LayerScope, obj15);
    obj7.children = items5;
    obj6.children = closure_10(closure_5, obj7);
    return closure_9(tmp2(tmp3[13]).AnalyticsLocationProvider, obj6);
  }
  const obj5 = block(navigation[17]);
});