// === Module 15711: ShopCategory ===

// Module 15711 (ShopCategory)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 7847 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8418 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8421 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(1087).CollectiblesMobileShopScreen;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const sum = 100 + fn(8418).COLLECTIBLES_SHOP_CARD_HEIGHT;
const createStyles = fn(4890);
let obj2 = { categoryContainer: { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum }, categoryHeader: null, categoryHeaderBorderDark: null, categoryHeaderBorderLight: null, imageBackground: null, viewAllIcon: null };
let obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum };
obj2.categoryHeader = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
let obj4 = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
obj2.categoryHeaderBorderDark = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
let obj5 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj2.categoryHeaderBorderLight = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.imageBackground = { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" };
let obj6 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.viewAllIcon = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { width: 12 } };
    const tmp5 = React5(View, obj2);
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => React5(View, { style: { width: 12 } }));
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { width: 16 } };
    const tmp5 = React5(View, obj2);
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => React5(View, { style: { width: 16 } }));
ReactCompilerGating = fn(558);
let obj7 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategory = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = category(navigation[9]).c(63);
  ({ index, category } = arg0);
  analyticsLocations = analyticsLocations(navigation[10])().analyticsLocations;
  closure_9();
  let obj = category(navigation[9]);
  navigation = category(navigation[11]).useNavigation();
  ({ products, unpublishedAt } = category);
  if (cResult[0] === category.isOrbsExclusive) {
    if (cResult[1] === products) {
      let tmp6 = cResult[2];
    }
    const filteredAndSortedProducts = category(tmp2[12]).useFilteredAndSortedProducts(tmp6);
    const mobileBannerUrl = category.mobileBannerUrl;
    if (cResult[3] !== filteredAndSortedProducts) {
      let obj3 = { products: filteredAndSortedProducts };
      cResult[3] = filteredAndSortedProducts;
      cResult[4] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[4];
    }
    const tmpResult = category(tmp2[12]);
    const collectiblesShopDeepLinkProps = category(tmp2[13]).useCollectiblesShopDeepLinkProps(tmp8);
    ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
    const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
    const tmpResult3 = category(tmp2[13]);
    if (cResult[5] !== category.storeListingId) {
      let items = [category.storeListingId];
      cResult[5] = category.storeListingId;
      cResult[6] = items;
      let tmp13 = items;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          current = closure_7.current;
          if (current != null) {
            scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
          }
          return;
        }
      }
      cResult[7] = P;
    } else {
      class P {
        constructor() {
          current = closure_7.current;
          if (current != null) {
            scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
          }
          return;
        }
      }
    }
    const ref = unpublishedAt.useRef(null);
    const recyclingState = category(tmp2[14]).useRecyclingState(null, tmp13, P);
    let tmp17 = null != productIndex;
    if (tmp17) {
      class P {
        constructor() {
          current = closure_7.current;
          if (current != null) {
            scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
          }
          return;
        }
      }
      tmp17 = productIndex > 0;
    }
    if (cResult[8] === category.storeListingId) {
      class P {
        constructor() {
          current = closure_7.current;
          if (current != null) {
            scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
          }
          return;
        }
      }
    }
    const obj4 = { shouldScroll: tmp17, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(tmp2[15]).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
    cResult[8] = category.storeListingId;
    cResult[9] = productIndex;
    cResult[10] = tmp17;
    cResult[11] = obj4;
    const tmpResult4 = category(tmp2[14]);
  }
  const obj5 = { products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  cResult[0] = category.isOrbsExclusive;
  cResult[1] = products;
  cResult[2] = obj5;
  tmp6 = obj5;
  let obj2 = category(navigation[11]);
}) : ((category) => {
  category = category.category;
  let analyticsLocations;
  initialProductSkuId = undefined;
  let collectiblesAnalyticsContext;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  const tmp3 = closure_9();
  dependencyMap = category(1490).useNavigation();
  const unpublishedAt = category.unpublishedAt;
  let obj = category(1490);
  const filteredAndSortedProducts = category(14876).useFilteredAndSortedProducts({ products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive });
  const mobileBannerUrl = category.mobileBannerUrl;
  let obj2 = category(14876);
  let obj3 = { products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const collectiblesShopDeepLinkProps = category(15708).useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  const obj4 = category(15708);
  let items = [category.storeListingId];
  const recyclingState = category(8371).useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  const obj6 = category(8371);
  let tmp9 = null != productIndex;
  if (tmp9) {
    tmp9 = productIndex > 0;
  }
  const obj7 = category(15712);
  const scrollToInitialIndexOnce = obj7.useScrollToInitialIndexOnce({ shouldScroll: tmp9, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(15712).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId });
  const obj8 = { shouldScroll: tmp9, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(15712).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  collectiblesAnalyticsContext = category(8421).useCollectiblesAnalyticsContext();
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
  const intl = tmp4(1126).intl;
  obj11.accessibilityLabel = intl.formatToPlainString(category(1126).t.FNtLb3, { category: category.name });
  const intl2 = tmp4(1126).intl;
  obj11.accessibilityHint = intl2.string(category(1126).t.F8ma9x);
  const obj12 = { category: category.name };
  const tmp4Result = category(8421);
  obj11.androidRippleConfig = { radius: analyticsLocations(587).radii.lg };
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
    tmp14Result = tmp14(tmp(5974), obj14);
  }
  const items4 = [tmp14Result, ];
  const obj13 = { radius: analyticsLocations(587).radii.lg };
  items4[1] = ref(filteredAndSortedProducts, { style: tmp3.viewAllIcon, children: ref(category(6708).ChevronSmallRightIcon, { size: "sm", color: "white" }) });
  obj11.children = items4;
  const items5 = [collectiblesAnalyticsContext(category(5909).PressableOpacity, obj11, category.storeListingId), ];
  const obj17 = { ref, horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, renderItem: null, drawDistance: 150, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, initialScrollIndex: null };
  const intl3 = tmp4(1126).intl;
  obj17.accessibilityLabel = intl3.formatToPlainString(category(1126).t.FNtLb3, { category: category.name });
  obj17.data = filteredAndSortedProducts;
  obj17.renderItem = callback;
  obj17.snapToInterval = category(8418).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
  obj17.ListHeaderComponent = ListFooterComponent;
  obj17.ListFooterComponent = ListFooterComponent;
  obj17.ItemSeparatorComponent = ItemSeparatorComponent;
  obj17.initialScrollIndex = productIndex;
  items5[1] = ref(category(8371).FlashList, obj17);
  obj10.children = items5;
  obj9.children = collectiblesAnalyticsContext(filteredAndSortedProducts, obj10);
  return ref(category(8421).CollectiblesAnalyticsProvider, obj9);
});