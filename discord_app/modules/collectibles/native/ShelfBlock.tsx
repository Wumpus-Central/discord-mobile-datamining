// discord_app/modules/collectibles/native/ShelfBlock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
function ListEdgeSpacer() {
  return React7(hasOwnProperty, { style: closure_11().listEdgeSpacer });
}
function ListItemSeparator() {
  return React7(hasOwnProperty, { style: closure_11().listItemSeparator });
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_7 = fn(1076).CollectiblesMobileShopScreen;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 },
  containerWithBackground: null,
  backgroundImage: null,
  header: null,
  headingWrapper: null,
  listEdgeSpacer: null,
  listItemSeparator: null,
};
let obj3 = { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.containerWithBackground = {
  marginTop: nativeDefault.space.PX_24,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_24,
  overflow: "hidden",
};
obj2.backgroundImage = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  minWidth: "100%",
  aspectRatio: 2.5,
  resizeMode: "cover",
};
let obj4 = {
  marginTop: nativeDefault.space.PX_24,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_24,
  overflow: "hidden",
};
obj2.header = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  zIndex: 1,
};
obj2.headingWrapper = { flexShrink: 1 };
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  zIndex: 1,
};
obj2.listEdgeSpacer = { width: nativeDefault.space.PX_16 };
let obj6 = { width: nativeDefault.space.PX_16 };
obj2.listItemSeparator = { width: nativeDefault.space.PX_12 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  let navigation;
  const tmp = closure_11();
  navigation = block(navigation[8]).useNavigation();
  let obj = block(navigation[8]);
  const collectiblesAnalyticsContext = block(navigation[9]).useCollectiblesAnalyticsContext();
  let obj2 = block(navigation[9]);
  let obj3 = block(navigation[10]);
  const tmp6 = preferVCPrice;
  const tmp7 = preferVCPrice(navigation[11]);
  let items = [CollectiblesCategoryStore];
  const stateFromStores = block(navigation[13]).useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
    }
    return category;
  });
  const tmp9 = preferVCPrice(navigation[14])();
  closure_5 = tmp9;
  const items1 = [block.rankedSkuIds, tmp9];
  const memo = collectiblesAnalyticsContext.useMemo(() => closure_5(block.rankedSkuIds), items1);
  const obj4 = block(navigation[13]);
  const filteredAndSortedProducts = block(navigation[15]).useFilteredAndSortedProducts({ products: memo });
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
    const obj = {
      newValue: { tilePosition: index, pageSection: block.name },
      children: React7(CollectiblesShopCardV2Default, { product: item, preferVCPrice }),
    };
    return React7(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items3);
  if (0 === filteredAndSortedProducts.length) {
    return null;
  } else {
    const items4 = [tmp.container];
    let containerWithBackground = tmp25;
    if (null != block.mobileBackgroundImage) {
      containerWithBackground = tmp.containerWithBackground;
    }
    items4[1] = containerWithBackground;
    const obj6 = {
      value: tmp7(preferVCPrice(navigation[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations,
      children: null,
    };
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
    const items5 = [tmp14Result, ,];
    const obj10 = { style: tmp.header, children: null };
    const obj11 = { style: tmp.headingWrapper, children: null };
    let tmp19;
    if (null != block.mobileBackgroundImage) {
      let str = block.titleColor;
      if (str == null) {
        str = "#ffffff";
      }
      const obj12 = { color: str };
      tmp19 = obj12;
    }
    const obj13 = { variant: "text-md/semibold", style: tmp19, children: block.name };
    obj11.children = closure_9(tmp2(tmp3[18]).Heading, obj13);
    const items6 = [closure_9(closure_5, obj11)];
    let tmp14Result2 = block.showButton && null != stateFromStores;
    if (tmp14Result2) {
      let str2 = "secondary";
      if (tmp25) {
        str2 = "primary-overlay";
      }
      const obj14 = { variant: str2, size: "sm", shrink: true, grow: false, text: null, onPress: null };
      const intl = tmp2(tmp3[20]).intl;
      obj14.text = intl.string(tmp2(tmp3[20]).t.xFcotU);
      obj14.onPress = callback;
      tmp14Result2 = closure_9(tmp2(tmp3[19]).Button, obj14);
    }
    items6[1] = tmp14Result2;
    obj10.children = items6;
    items5[1] = closure_10(closure_5, obj10);
    const obj15 = { children: null };
    const obj16 = {
      horizontal: true,
      accessibilityRole: "list",
      accessibilityLabel: block.name,
      data: filteredAndSortedProducts,
      keyExtractor: tmp13,
      onScroll: obj3.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll,
      renderItem: callback1,
      decelerationRate: "fast",
      snapToInterval: tmp2(tmp3[17]).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(tmp3[7]).space.PX_12,
      showsHorizontalScrollIndicator: false,
      ListHeaderComponent: ListEdgeSpacer,
      ListFooterComponent: ListEdgeSpacer,
      ItemSeparatorComponent: ListItemSeparator,
    };
    obj15.children = closure_9(tmp2(tmp3[22]).FlashList, obj16);
    items5[2] = closure_9(tmp2(tmp3[21]).LayerScope, obj15);
    obj7.children = items5;
    obj6.children = closure_10(closure_5, obj7);
    return closure_9(tmp2(tmp3[11]).AnalyticsLocationProvider, obj6);
  }
  const obj5 = block(navigation[15]);
}
