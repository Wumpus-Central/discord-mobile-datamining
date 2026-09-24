// === Module 16221: ShopCategory ===

// Module 16221 (ShopCategory)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7871 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8524 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 9124 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9127 */;
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
const sum = 100 + fn(9124).COLLECTIBLES_SHOP_CARD_HEIGHT;
const createStyles = fn(4829);
let obj2 = { categoryContainer: { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum }, categoryHeader: null, categoryHeaderBorderDark: null, categoryHeaderBorderLight: null, imageBackground: null, viewAllIcon: null };
let obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum };
obj2.categoryHeader = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
let obj4 = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
obj2.categoryHeaderBorderDark = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
const obj5 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj2.categoryHeaderBorderLight = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.imageBackground = { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" };
let obj6 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.viewAllIcon = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj2);
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
  analyticsLocations = analyticsLocations(7495)().analyticsLocations;
  const tmp3 = closure_9();
  dependencyMap = category(1484).useNavigation();
  const unpublishedAt = category.unpublishedAt;
  let obj = category(1484);
  const filteredAndSortedProducts = category(15411).useFilteredAndSortedProducts({ products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive });
  const mobileBannerUrl = category.mobileBannerUrl;
  let obj2 = category(15411);
  let obj3 = { products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const collectiblesShopDeepLinkProps = category(16218).useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  const obj4 = category(16218);
  let items = [category.storeListingId];
  const recyclingState = category(9077).useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  const obj6 = category(9077);
  let tmp9 = null != productIndex;
  if (tmp9) {
    tmp9 = productIndex > 0;
  }
  const obj7 = category(16222);
  const scrollToInitialIndexOnce = obj7.useScrollToInitialIndexOnce({ shouldScroll: tmp9, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(16222).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId });
  const obj8 = { shouldScroll: tmp9, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(16222).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  collectiblesAnalyticsContext = category(9127).useCollectiblesAnalyticsContext();
  const items1 = [initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = obj5.useEffect(() => {
    let found = null;
    if (null != initialProductSkuId) {
      found = filteredAndSortedProducts.find((skuId) => skuId.skuId === initialProductSkuId);
    }
    if (null != found) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj3 = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
      const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj3);
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = obj5.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index }, children: React5(CollectiblesShopCardV2Default, { product: item, unpublishedAt }) };
    return React5(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items2);
  const obj9 = { newValue: { categoryPosition: index }, children: null };
  const obj10 = { style: tmp3.categoryContainer, children: null };
  const items3 = [tmp3.categoryHeader, ];
  const obj11 = { style: items3, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const intl = tmp4(1115).intl;
  obj11.accessibilityLabel = intl.formatToPlainString(category(1115).t.FNtLb3, { category: category.name });
  const intl2 = tmp4(1115).intl;
  obj11.accessibilityHint = intl2.string(category(1115).t.F8ma9x);
  const obj12 = { category: category.name };
  const tmp4Result = category(9127);
  obj11.androidRippleConfig = { radius: analyticsLocations(576).radii.lg };
  obj11.onPress = function onPress() {
    if (category.isOrbsExclusive) {
      const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj3.analyticsLocations = items;
      obj3.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      obj3.screen = initialProductSkuId.ORBS;
      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
    } else {
      const obj = { category: tmp, analyticsContext: collectiblesAnalyticsContext };
      navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
    }
  };
  let tmp14Result = null != mobileBannerUrl;
  if (tmp14Result) {
    const obj14 = { source: null, resizeMode: "cover", style: null };
    const obj15 = { uri: mobileBannerUrl };
    obj14.source = obj15;
    obj14.style = tmp3.imageBackground;
    tmp14Result = tmp14(tmp(5892), obj14);
  }
  const items4 = [tmp14Result, ];
  const obj13 = { radius: analyticsLocations(576).radii.lg };
  items4[1] = ref(filteredAndSortedProducts, { style: tmp3.viewAllIcon, children: ref(category(7542).ChevronSmallRightIcon, { size: "sm", color: "white" }) });
  obj11.children = items4;
  const items5 = [collectiblesAnalyticsContext(category(5427).PressableOpacity, obj11, category.storeListingId), ];
  const obj17 = { ref, horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, renderItem: null, drawDistance: 150, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, initialScrollIndex: null };
  const intl3 = tmp4(1115).intl;
  obj17.accessibilityLabel = intl3.formatToPlainString(category(1115).t.FNtLb3, { category: category.name });
  obj17.data = filteredAndSortedProducts;
  obj17.renderItem = callback;
  obj17.snapToInterval = category(9124).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
  obj17.ListHeaderComponent = HeaderAndFooterSpacing;
  obj17.ListFooterComponent = HeaderAndFooterSpacing;
  obj17.ItemSeparatorComponent = Spacing;
  obj17.initialScrollIndex = productIndex;
  items5[1] = ref(category(9077).FlashList, obj17);
  obj10.children = items5;
  obj9.children = collectiblesAnalyticsContext(filteredAndSortedProducts, obj10);
  return ref(category(9127).CollectiblesAnalyticsProvider, obj9);
};