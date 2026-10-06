// === Module 15747: ShopCategory ===

// Module 15747 (ShopCategory)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet" /* 7858 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8451 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8454 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CollectiblesShopCardV2Default = CollectiblesShopCardV2;
let dependencyMap, navigation, scrollToOffsetResult;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const sum = 100 + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT;
let createStyles = createStyles_mod;
let obj = { categoryContainer: obj2, categoryHeader: obj3, categoryHeaderBorderDark: obj4, categoryHeaderBorderLight: obj5, imageBackground: { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" }, viewAllIcon: obj6 };
obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
obj4 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj6 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { width: 12 } };
    const tmp5 = metroImportDefault(View, obj2);
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => metroImportDefault(View, { style: { width: 12 } }));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { width: 16 } };
    const tmp5 = metroImportDefault(View, obj2);
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => metroImportDefault(View, { style: { width: 16 } }));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsContext;
  let analyticsLocations;
  let category;
  let index;
  let initialProductSkuId;
  let productIndex;
  let products;
  let unpublishedAt;
  let obj = category(navigation[9]);
  const cResult = obj.c(63);
  ({ index, category } = arg0);
  analyticsLocations = analyticsLocations(navigation[10])().analyticsLocations;
  closure_9();
  let obj2 = category(navigation[11]);
  navigation = obj2.useNavigation();
  ({ products, unpublishedAt } = category);
  if (cResult[0] === category.isOrbsExclusive) {
    let tmp6;
    let tmp8;
    let tmp13;
    if (cResult[1] === products) {
      tmp6 = cResult[2];
    }
    const tmpResult = category(navigation[12]);
    const filteredAndSortedProducts = tmpResult.useFilteredAndSortedProducts(tmp6);
    const mobileBannerUrl = category.mobileBannerUrl;
    if (cResult[3] !== filteredAndSortedProducts) {
      const obj3 = { products: filteredAndSortedProducts };
      cResult[3] = filteredAndSortedProducts;
      cResult[4] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[4];
    }
    const tmpResult3 = category(navigation[13]);
    const collectiblesShopDeepLinkProps = tmpResult3.useCollectiblesShopDeepLinkProps(tmp8);
    ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
    const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
    const ref = unpublishedAt.useRef(null);
    if (cResult[5] !== category.storeListingId) {
      let items = [category.storeListingId];
      cResult[5] = category.storeListingId;
      cResult[6] = items;
      tmp13 = items;
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
    const tmpResult4 = category(navigation[14]);
    const recyclingState = tmpResult4.useRecyclingState(null, tmp13, P);
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
    cResult[8] = category.storeListingId;
    cResult[9] = productIndex;
    cResult[10] = tmp17;
    cResult[11] = { shouldScroll: tmp17, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(navigation[15]).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
    const obj4 = { shouldScroll: tmp17, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(navigation[15]).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  }
  const obj5 = { products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  cResult[0] = category.isOrbsExclusive;
  cResult[1] = products;
  cResult[2] = obj5;
  tmp6 = obj5;
}) : ((category) => {
  let index;
  let initialProductSkuId;
  let intl;
  let intl2;
  let intl3;
  let isDarkTheme;
  let items4;
  let items5;
  let obj11;
  let obj14;
  let obj17;
  let obj9;
  let productIndex;
  category = category.category;
  let analyticsLocations;
  initialProductSkuId = undefined;
  let collectiblesAnalyticsContext;
  const tmp = analyticsLocations;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(6664)().analyticsLocations;
  const tmp3 = closure_9();
  let obj = category(1490);
  dependencyMap = obj.useNavigation();
  const unpublishedAt = category.unpublishedAt;
  const products = category.products;
  let obj2 = category(14892);
  const obj3 = { products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const filteredAndSortedProducts = obj2.useFilteredAndSortedProducts(obj3);
  const mobileBannerUrl = category.mobileBannerUrl;
  const obj4 = category(15744);
  const collectiblesShopDeepLinkProps = obj4.useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  let items = [category.storeListingId];
  const obj6 = category(8404);
  const recyclingState = obj6.useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  let tmp10 = null != productIndex;
  const useScrollToInitialIndexOnce = category(15748).useScrollToInitialIndexOnce;
  category(15748);
  if (tmp10) {
    tmp10 = productIndex > 0;
  }
  const obj7 = { shouldScroll: tmp10, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(15748).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  const scrollToInitialIndexOnce = useScrollToInitialIndexOnce(obj7);
  const tmp4Result = category(8454);
  collectiblesAnalyticsContext = tmp4Result.useCollectiblesAnalyticsContext();
  const items1 = [initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = obj5.useEffect(() => {
    let found = null;
    if (null != initialProductSkuId) {
      found = filteredAndSortedProducts.find((skuId) => skuId.skuId === initialProductSkuId);
    }
    if (null != found) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
      const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
      openProductDetailsActionSheet2;
      const result = openProductDetailsActionSheet(obj2);
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = obj5.useCallback((arg0) => {
    let index;
    let item;
    let obj2;
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index }, children: metroImportDefault(CollectiblesShopCardV2Default, obj2) };
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    obj2 = { product: item, unpublishedAt };
    return metroImportDefault(CollectiblesAnalyticsProvider, obj);
  }, items2);
  const obj8 = { newValue: { categoryPosition: index }, children: collectiblesAnalyticsContext(filteredAndSortedProducts, obj9) };
  obj9 = { style: tmp3.categoryContainer, children: items5 };
  let CollectiblesAnalyticsProvider = tmp4(8454).CollectiblesAnalyticsProvider;
  const items3 = [tmp3.categoryHeader, ];
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const obj10 = {
    style: items3,
    accessibilityRole: "button",
    accessibilityLabel: intl.formatToPlainString(category(1126).t.FNtLb3, obj11),
    accessibilityHint: intl2.string(category(1126).t.F8ma9x),
    activeOpacity: 0.8,
    androidRippleConfig: { radius: tmp(587).radii.lg },
    hitSlop: 8,
    onPress() {
      let items;
      if (category.isOrbsExclusive) {
        const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: initialProductSkuId.ORBS };
        const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
        items = [];
        CollectiblesActionCreators;
        items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj2);
      } else {
        const obj = { category: tmp, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
      }
    },
    children: items4
  };
  const PressableOpacity = tmp4(5916).PressableOpacity;
  intl = tmp4(1126).intl;
  obj11 = { category: category.name };
  intl2 = tmp4(1126).intl;
  let tmp15Result = null != mobileBannerUrl;
  ({ radius: tmp(587).radii.lg });
  if (tmp15Result) {
    const obj13 = { source: obj14, resizeMode: "cover", style: tmp3.imageBackground };
    obj14 = { uri: mobileBannerUrl };
    tmp15Result = tmp15(tmp(5981), obj13);
  }
  items4 = [tmp15Result, ];
  const obj15 = { style: tmp3.viewAllIcon, children: ref(category(6715).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
  items4[1] = ref(filteredAndSortedProducts, obj15);
  items5 = [collectiblesAnalyticsContext(PressableOpacity, obj10, category.storeListingId), ];
  const obj16 = { ref, horizontal: true, accessibilityLabel: intl3.formatToPlainString(category(1126).t.FNtLb3, obj17), accessibilityRole: "list", data: filteredAndSortedProducts, renderItem: callback, drawDistance: 150, decelerationRate: "fast", snapToInterval: category(8451).COLLECTIBLES_SHOP_CARD_WIDTH + 12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListFooterComponent, ListFooterComponent, ItemSeparatorComponent, initialScrollIndex: productIndex };
  const FlashList = tmp4(8404).FlashList;
  intl3 = tmp4(1126).intl;
  obj17 = { category: category.name };
  items5[1] = ref(FlashList, obj16);
  return ref(CollectiblesAnalyticsProvider, obj8);
});
let result = size.fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategory = tmp5;