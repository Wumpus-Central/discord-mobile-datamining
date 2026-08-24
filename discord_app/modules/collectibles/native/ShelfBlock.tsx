// === Module 15042: ListEdgeSpacer ===

// Module 15042 (ListEdgeSpacer)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "updateCategoriesAndProducts" /* 5306 */;
import { CollectiblesMobileShopScreen as closure_7 } from "items" /* 678 */;
import { UserSettingsSections } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
function ListEdgeSpacer() {
  return callback(closure_5, { style: callback2().listEdgeSpacer });
}
function ListItemSeparator() {
  return callback(closure_5, { style: callback2().listItemSeparator });
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, containerWithBackground: null, backgroundImage: null, header: null, headingWrapper: null, listEdgeSpacer: null, listItemSeparator: null };
createCacheKey = { width: "100%", paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, paddingTop: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_24, overflow: "hidden" };
createCacheKey[2] = { position: "absolute", top: 0, left: 0, bottom: 0, minWidth: "100%", aspectRatio: 2.5, resizeMode: "cover" };
let obj1 = { marginTop: ThemesDefault.space.PX_24, paddingTop: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_24, overflow: "hidden" };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, zIndex: 1 };
createCacheKey[4] = { flexShrink: 1 };
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, zIndex: 1 };
createCacheKey[5] = { width: ThemesDefault.space.PX_16 };
let obj3 = { width: ThemesDefault.space.PX_16 };
createCacheKey[6] = { width: ThemesDefault.space.PX_12 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj4 = { width: ThemesDefault.space.PX_12 };
let result = require("set").fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  let navigation;
  let collectiblesAnalyticsContext;
  let stateFromStores;
  closure_5 = undefined;
  const tmp = callback2();
  let obj = block(navigation[8]);
  navigation = obj.useNavigation();
  obj1 = block(navigation[9]);
  collectiblesAnalyticsContext = obj1.useCollectiblesAnalyticsContext();
  let obj2 = block(navigation[10]);
  let obj3 = block(navigation[13]);
  let items = [closure_6];
  stateFromStores = obj3.useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = closure_1_6.getCategory(tmp.categorySkuId);
    }
    return category;
  });
  const tmp9 = preferVCPrice(navigation[14])();
  closure_5 = tmp9;
  const items1 = [block.rankedSkuIds, tmp9];
  const memo = collectiblesAnalyticsContext.useMemo(() => callback(block.rankedSkuIds), items1);
  let obj4 = block(navigation[15]);
  const filteredAndSortedProducts = obj4.useFilteredAndSortedProducts({ products: memo });
  const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext];
  const items3 = [block.name, preferVCPrice];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    if (null != stateFromStores) {
      if (tmp.isOrbsExclusive) {
        let obj = { analyticsLocations: null, analyticsSource: null, screen: null };
        const items = [preferVCPrice(navigation[12]).COLLECTIBLES_SHOP];
        obj[0] = items;
        obj[1] = preferVCPrice(navigation[12]).COLLECTIBLES_SHOP;
        obj[2] = closure_1_7.ORBS;
        const result = block(navigation[16]).openCollectiblesShopMobile(obj);
        const obj2 = block(navigation[16]);
      } else {
        obj = { category: null, analyticsContext: null };
        obj[0] = tmp;
        obj[1] = collectiblesAnalyticsContext;
        navigation.navigate(closure_1_8.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
      }
    }
  }, items2);
  const callback1 = collectiblesAnalyticsContext.useCallback((arg0) => {
    ({ item, index } = arg0);
    obj = { newValue: obj, children: null };
    obj = { tilePosition: index, pageSection: block.name };
    obj = { product: item, preferVCPrice };
    obj[1] = closure_1_9(preferVCPrice(navigation[17]), obj);
    return closure_1_9(block(navigation[9]).CollectiblesAnalyticsProvider, obj);
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
    obj = { value: null, children: null };
    obj[0] = tmp7(preferVCPrice(navigation[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
    obj = { style: null, children: null };
    obj[0] = items4;
    let tmp14Result = tmp25;
    if (null != block.mobileBackgroundImage) {
      tmp14Result = null != block.mobileBackgroundImage;
    }
    if (tmp14Result) {
      obj1 = { style: null, source: null };
      obj1[0] = tmp.backgroundImage;
      obj2 = { uri: null };
      obj2[0] = block.mobileBackgroundImage;
      obj1[1] = obj2;
      tmp14Result = tmp14(stateFromStores, obj1);
    }
    const items5 = [tmp14Result, , ];
    obj3 = { style: null, children: null };
    obj3[0] = tmp.header;
    obj4 = { style: null, children: null };
    obj4[0] = tmp.headingWrapper;
    let tmp19;
    if (null != block.mobileBackgroundImage) {
      let str = block.titleColor;
      if (str == null) {
        str = "#ffffff";
      }
      const obj5 = { color: null };
      obj5[0] = str;
      tmp19 = obj5;
    }
    const obj6 = { variant: "text-md/semibold", style: null, children: null };
    obj6[1] = tmp19;
    obj6[2] = block.name;
    obj4[1] = closure_9(tmp2(tmp3[18]).Heading, obj6);
    const items6 = [closure_9(closure_5, obj4), ];
    tmp14Result = block.showButton && null != stateFromStores;
    if (tmp14Result) {
      let str2 = "secondary";
      if (tmp25) {
        str2 = "primary-overlay";
      }
      const obj7 = { variant: null, size: "sm", shrink: true, grow: false, text: null, onPress: null };
      obj7[0] = str2;
      const intl = tmp2(tmp3[20]).intl;
      obj7[4] = intl.string(tmp2(tmp3[20]).t.xFcotU);
      obj7[5] = callback;
      tmp14Result = tmp14(tmp2(tmp3[19]).Button, obj7);
    }
    items6[1] = tmp14Result;
    obj3[1] = items6;
    items5[1] = closure_10(closure_5, obj3);
    const obj8 = { children: null };
    const obj9 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, data: null, keyExtractor: null, onScroll: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
    obj9[2] = block.name;
    obj9[3] = filteredAndSortedProducts;
    obj9[4] = tmp13;
    obj9[5] = obj2.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
    obj9[6] = callback1;
    obj9[8] = tmp2(tmp3[17]).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(tmp3[7]).space.PX_12;
    obj9[10] = ListEdgeSpacer;
    obj9[11] = ListEdgeSpacer;
    obj9[12] = ListItemSeparator;
    obj8[0] = closure_9(tmp2(tmp3[22]).FlashList, obj9);
    items5[2] = closure_9(tmp2(tmp3[21]).LayerScope, obj8);
    obj[1] = items5;
    obj[1] = closure_10(closure_5, obj);
    return closure_9(tmp2(tmp3[11]).AnalyticsLocationProvider, obj);
  }
  tmp6 = preferVCPrice;
  tmp7 = preferVCPrice(navigation[11]);
};