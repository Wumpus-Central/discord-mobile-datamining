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
fn(4560);
let createStyles = {
  container: null,
  containerWithBackground: null,
  backgroundImage: null,
  header: null,
  headingWrapper: null,
  listEdgeSpacer: null,
  listItemSeparator: null,
};
createStyles = { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.containerWithBackground = {
  marginTop: nativeDefault.space.PX_24,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_24,
  overflow: "hidden",
};
createStyles.backgroundImage = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  minWidth: "100%",
  aspectRatio: 2.5,
  resizeMode: "cover",
};
let obj1 = {
  marginTop: nativeDefault.space.PX_24,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_24,
  overflow: "hidden",
};
createStyles.header = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  zIndex: 1,
};
createStyles.headingWrapper = { flexShrink: 1 };
let obj2 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  zIndex: 1,
};
createStyles.listEdgeSpacer = { width: nativeDefault.space.PX_16 };
let obj3 = { width: nativeDefault.space.PX_16 };
createStyles.listItemSeparator = { width: nativeDefault.space.PX_12 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  let navigation;
  const tmp = closure_11();
  let obj = block(navigation[8]);
  navigation = obj.useNavigation();
  let obj1 = block(navigation[9]);
  const collectiblesAnalyticsContext = obj1.useCollectiblesAnalyticsContext();
  let obj2 = block(navigation[10]);
  let obj3 = block(navigation[13]);
  let items = [CollectiblesCategoryStore];
  const stateFromStores = obj3.useStateFromStores(items, () => {
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
  let obj4 = block(navigation[15]);
  const filteredAndSortedProducts = obj4.useFilteredAndSortedProducts({ products: memo });
  const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext];
  const items3 = [block.name, preferVCPrice];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    if (null != stateFromStores) {
      if (tmp.isOrbsExclusive) {
        let obj = { analyticsLocations: null, analyticsSource: null, screen: null };
        const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
        obj.analyticsLocations = items;
        obj.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        obj.screen = constants.ORBS;
        const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj);
      } else {
        obj = { category: tmp, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
      }
    }
  }, items2);
  const callback1 = collectiblesAnalyticsContext.useCallback((arg0) => {
    ({ item, index } = arg0);
    let obj = { newValue: null, children: null };
    obj = { tilePosition: index, pageSection: block.name };
    obj.newValue = obj;
    obj = { product: item, preferVCPrice };
    obj.children = React7(CollectiblesShopCardV2Default, obj);
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
    obj = { value: tmp7(preferVCPrice(navigation[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations, children: null };
    obj = { style: items4, children: null };
    let tmp14Result = tmp25;
    if (null != block.mobileBackgroundImage) {
      tmp14Result = null != block.mobileBackgroundImage;
    }
    if (tmp14Result) {
      obj1 = { style: tmp.backgroundImage, source: null };
      obj2 = { uri: block.mobileBackgroundImage };
      obj1.source = obj2;
      tmp14Result = tmp14(stateFromStores, obj1);
    }
    const items5 = [tmp14Result, ,];
    obj3 = { style: tmp.header, children: null };
    obj4 = { style: tmp.headingWrapper, children: null };
    let tmp19;
    if (null != block.mobileBackgroundImage) {
      let str = block.titleColor;
      if (str == null) {
        str = "#ffffff";
      }
      const obj5 = { color: str };
      tmp19 = obj5;
    }
    const obj6 = { variant: "text-md/semibold", style: tmp19, children: block.name };
    obj4.children = closure_9(tmp2(tmp3[18]).Heading, obj6);
    const items6 = [closure_9(closure_5, obj4)];
    tmp14Result = block.showButton && null != stateFromStores;
    if (tmp14Result) {
      let str2 = "secondary";
      if (tmp25) {
        str2 = "primary-overlay";
      }
      const obj7 = { variant: str2, size: "sm", shrink: true, grow: false, text: null, onPress: null };
      const intl = tmp2(tmp3[20]).intl;
      obj7.text = intl.string(tmp2(tmp3[20]).t.xFcotU);
      obj7.onPress = callback;
      tmp14Result = tmp14(tmp2(tmp3[19]).Button, obj7);
    }
    items6[1] = tmp14Result;
    obj3.children = items6;
    items5[1] = closure_10(closure_5, obj3);
    const obj8 = { children: null };
    const obj9 = {
      horizontal: true,
      accessibilityRole: "list",
      accessibilityLabel: block.name,
      data: filteredAndSortedProducts,
      keyExtractor: tmp13,
      onScroll: obj2.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll,
      renderItem: callback1,
      decelerationRate: "fast",
      snapToInterval: tmp2(tmp3[17]).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(tmp3[7]).space.PX_12,
      showsHorizontalScrollIndicator: false,
      ListHeaderComponent: ListEdgeSpacer,
      ListFooterComponent: ListEdgeSpacer,
      ItemSeparatorComponent: ListItemSeparator,
    };
    obj8.children = closure_9(tmp2(tmp3[22]).FlashList, obj9);
    items5[2] = closure_9(tmp2(tmp3[21]).LayerScope, obj8);
    obj.children = items5;
    obj.children = closure_10(closure_5, obj);
    return closure_9(tmp2(tmp3[11]).AnalyticsLocationProvider, obj);
  }
  tmp6 = preferVCPrice;
  tmp7 = preferVCPrice(navigation[11]);
}
