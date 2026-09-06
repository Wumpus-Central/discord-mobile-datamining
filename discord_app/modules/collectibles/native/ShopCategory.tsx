// === Module 15812: ShopCategory ===

// Module 15812 (ShopCategory)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8176 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8764 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8767 */;
import noop from "module_19" /* 19 */;

require = fn;
function Spacing() {
  return React5(View, { style: { width: 12 } });
}
function HeaderAndFooterSpacing() {
  return React5(View, { style: { width: 16 } });
}
const View = fn(17).View;
let closure_5 = fn(1076).CollectiblesMobileShopScreen;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const sum = 100 + fn(8764).COLLECTIBLES_SHOP_CARD_HEIGHT;
fn(4560);
let createStyles = { categoryContainer: null, categoryHeader: null, categoryHeaderBorderDark: null, categoryHeaderBorderLight: null, imageBackground: null, viewAllIcon: null };
createStyles = { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum };
createStyles.categoryContainer = createStyles;
createStyles.categoryHeader = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
let obj1 = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
createStyles.categoryHeaderBorderDark = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
let obj2 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
createStyles.categoryHeaderBorderLight = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.imageBackground = { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" };
let obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.viewAllIcon = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategory = function ShopCategory(category) {
  category = category.category;
  let analyticsLocations;
  initialProductSkuId = undefined;
  let collectiblesAnalyticsContext;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  const tmp3 = closure_9();
  let obj = category(1483);
  dependencyMap = obj.useNavigation();
  const unpublishedAt = category.unpublishedAt;
  let obj1 = category(15074);
  obj = { products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const filteredAndSortedProducts = obj1.useFilteredAndSortedProducts(obj);
  const mobileBannerUrl = category.mobileBannerUrl;
  let obj3 = category(15811);
  const collectiblesShopDeepLinkProps = obj3.useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  let obj4 = unpublishedAt;
  const ref = unpublishedAt.useRef(null);
  let obj5 = category(8874);
  let items = [category.storeListingId];
  const recyclingState = obj5.useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  let obj6 = category(15813);
  let tmp9 = null != productIndex;
  if (tmp9) {
    tmp9 = productIndex > 0;
  }
  obj = { shouldScroll: tmp9, initialScrollIndex: productIndex, flashListRef: ref, afterMs: tmp4(15813).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  const scrollToInitialIndexOnce = obj6.useScrollToInitialIndexOnce(obj);
  collectiblesAnalyticsContext = category(8767).useCollectiblesAnalyticsContext();
  const items1 = [initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = obj4.useEffect(() => {
    let found = null;
    if (null != initialProductSkuId) {
      found = filteredAndSortedProducts.find((skuId) => skuId.skuId === initialProductSkuId);
    }
    if (null != found) {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      obj = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
      const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj);
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = obj4.useCallback((arg0) => {
    ({ item, index } = arg0);
    let obj = { newValue: { tilePosition: index }, children: null };
    obj = { product: item, unpublishedAt };
    obj.children = React5(CollectiblesShopCardV2Default, obj);
    return React5(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items2);
  obj1 = { newValue: { categoryPosition: index }, children: null };
  let obj2 = { style: tmp3.categoryContainer, children: null };
  const items3 = [tmp3.categoryHeader, ];
  obj3 = { style: items3, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const intl = tmp4(1114).intl;
  obj4 = { category: category.name };
  obj3.accessibilityLabel = intl.formatToPlainString(category(1114).t.FNtLb3, obj4);
  const intl2 = tmp4(1114).intl;
  obj3.accessibilityHint = intl2.string(category(1114).t.F8ma9x);
  obj5 = { radius: tmp(576).radii.lg };
  obj3.androidRippleConfig = obj5;
  obj3.onPress = function onPress() {
    if (category.isOrbsExclusive) {
      let obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj.analyticsLocations = items;
      obj.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      obj.screen = initialProductSkuId.ORBS;
      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj);
    } else {
      obj = { category: tmp, analyticsContext: collectiblesAnalyticsContext };
      navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
    }
  };
  let tmp14Result = null != mobileBannerUrl;
  if (tmp14Result) {
    obj6 = { source: null, resizeMode: "cover", style: null };
    const obj7 = { uri: mobileBannerUrl };
    obj6.source = obj7;
    obj6.style = tmp3.imageBackground;
    tmp14Result = tmp14(tmp(5587), obj6);
  }
  const items4 = [tmp14Result, ];
  const tmp4Result = category(8767);
  items4[1] = ref(filteredAndSortedProducts, { style: tmp3.viewAllIcon, children: ref(category(7209).ChevronSmallRightIcon, { size: "sm", color: "white" }) });
  obj3.children = items4;
  const items5 = [collectiblesAnalyticsContext(category(5123).PressableOpacity, obj3, category.storeListingId), ];
  const obj9 = { ref, horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, renderItem: null, drawDistance: 150, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, initialScrollIndex: null };
  const intl3 = tmp4(1114).intl;
  obj9.accessibilityLabel = intl3.formatToPlainString(category(1114).t.FNtLb3, { category: category.name });
  obj9.data = filteredAndSortedProducts;
  obj9.renderItem = callback;
  obj9.snapToInterval = category(8764).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
  obj9.ListHeaderComponent = HeaderAndFooterSpacing;
  obj9.ListFooterComponent = HeaderAndFooterSpacing;
  obj9.ItemSeparatorComponent = Spacing;
  obj9.initialScrollIndex = productIndex;
  items5[1] = ref(category(8874).FlashList, obj9);
  obj2.children = items5;
  obj1.children = collectiblesAnalyticsContext(filteredAndSortedProducts, obj2);
  return ref(category(8767).CollectiblesAnalyticsProvider, obj1);
};