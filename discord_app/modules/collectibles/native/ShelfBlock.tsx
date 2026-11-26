// === Module 17532: ShelfBlock ===

// Module 17532 (ShelfBlock)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6310 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 11211 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 11214 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6311 */;

require = fn;
function ListEdgeSpacer() {
  return React6(View, { style: closure_11().listEdgeSpacer });
}
function ListItemSeparator() {
  return React6(View, { style: closure_11().listItemSeparator });
}
const View = fn(17).View;
let closure_6 = fn(1073).CollectiblesMobileShopScreen;
const Constants = fn(1071);
({ AnalyticEvents: metroImportDefault, UserSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5043);
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
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const screen = block.screen;
  const preferVCPrice = block.preferVCPrice;
  const tmp = closure_11();
  const navigation = block(preferVCPrice[8]).useNavigation();
  let obj = block(preferVCPrice[8]);
  const collectiblesAnalyticsContext = block(preferVCPrice[9]).useCollectiblesAnalyticsContext();
  let obj2 = block(preferVCPrice[9]);
  let obj3 = block(preferVCPrice[10]);
  const analyticsLocations = screen(preferVCPrice[11])(screen(preferVCPrice[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
  const tmp7 = screen(preferVCPrice[11]);
  items = [analyticsLocations];
  const stateFromStores = block(preferVCPrice[13]).useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
    }
    return category;
  });
  const tmp9 = screen(preferVCPrice[14])();
  closure_7 = tmp9;
  const items1 = [block.rankedSkuIds, tmp9];
  const memo = navigation.useMemo(() => closure_7(block.rankedSkuIds), items1);
  let obj4 = block(preferVCPrice[13]);
  const filteredAndSortedProducts = block(preferVCPrice[15]).useFilteredAndSortedProducts({ products: memo });
  const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext, screen, analyticsLocations];
  const items3 = [block.name, preferVCPrice];
  const callback = navigation.useCallback(() => {
    if (null != stateFromStores) {
      let sessionId;
      if (collectiblesAnalyticsContext != null) {
        sessionId = collectiblesAnalyticsContext.sessionId;
      }
      const obj = { collectibles_shop_session_id: sessionId, page_type: screen, page_section: null, page_category: null, location_stack: null, cta_name: "shelf header shop all" };
      let pageSection;
      if (collectiblesAnalyticsContext != null) {
        pageSection = collectiblesAnalyticsContext.pageSection;
      }
      obj.page_section = pageSection;
      obj.page_category = stateFromStores.name;
      obj.location_stack = analyticsLocations;
      AnalyticsUtilsDefault.track(constants.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      if (stateFromStores.isOrbsExclusive) {
        const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
        items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
        obj2.analyticsLocations = items;
        obj2.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        obj2.screen = stateFromStores.ORBS;
        const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj2);
      } else {
        const obj4 = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj4);
      }
    }
  }, items2);
  const callback1 = navigation.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index, pageSection: block.name }, children: React6(CollectiblesShopCardV2Default, { product: item, preferVCPrice }) };
    return React6(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items3);
  if (0 === filteredAndSortedProducts.length) {
    return null;
  } else {
    const items4 = [tmp.container, ];
    let containerWithBackground = tmp24;
    if (null != block.mobileBackgroundImage) {
      containerWithBackground = tmp.containerWithBackground;
    }
    items4[1] = containerWithBackground;
    const obj6 = { value: analyticsLocations, children: null };
    const obj7 = { style: items4, children: null };
    let tmp14Result = tmp24;
    if (null != block.mobileBackgroundImage) {
      tmp14Result = null != block.mobileBackgroundImage;
    }
    if (tmp14Result) {
      const obj8 = { style: tmp.backgroundImage, source: null };
      const obj9 = { uri: block.mobileBackgroundImage };
      obj8.source = obj9;
      tmp14Result = closure_9(tmp6(tmp3[19]), obj8);
    }
    const items5 = [tmp14Result, , ];
    const obj10 = { style: tmp.header, children: null };
    const obj11 = { style: tmp.headingWrapper, children: null };
    let tmp18;
    if (null != block.mobileBackgroundImage) {
      let str = block.titleColor;
      if (str == null) {
        str = "#ffffff";
      }
      const obj12 = { color: str };
      tmp18 = obj12;
    }
    const obj13 = { variant: "body-md/semibold", style: tmp18, children: block.name };
    obj11.children = closure_9(tmp2(tmp3[20]).Heading, obj13);
    const items6 = [closure_9(collectiblesAnalyticsContext, obj11), ];
    let tmp14Result2 = block.showButton && null != stateFromStores;
    if (tmp14Result2) {
      let str2 = "secondary";
      if (tmp24) {
        str2 = "primary-overlay";
      }
      const obj14 = { variant: str2, size: "sm", shrink: true, grow: false, text: null, onPress: null };
      const intl = tmp2(tmp3[22]).intl;
      obj14.text = intl.string(tmp2(tmp3[22]).t.xFcotU);
      obj14.onPress = callback;
      tmp14Result2 = closure_9(tmp2(tmp3[21]).Button, obj14);
    }
    items6[1] = tmp14Result2;
    obj10.children = items6;
    items5[1] = closure_10(collectiblesAnalyticsContext, obj10);
    const obj15 = { children: null };
    const obj16 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: block.name, data: filteredAndSortedProducts, keyExtractor: tmp13, onScroll: obj3.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll, renderItem: callback1, decelerationRate: "fast", snapToInterval: tmp2(tmp3[18]).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(tmp3[7]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListEdgeSpacer, ListFooterComponent: ListEdgeSpacer, ItemSeparatorComponent: ListItemSeparator };
    obj15.children = closure_9(tmp2(tmp3[24]).FlashList, obj16);
    items5[2] = closure_9(tmp2(tmp3[23]).LayerScope, obj15);
    obj7.children = items5;
    obj6.children = closure_10(collectiblesAnalyticsContext, obj7);
    return closure_9(tmp2(tmp3[11]).AnalyticsLocationProvider, obj6);
  }
  let obj5 = block(preferVCPrice[15]);
};