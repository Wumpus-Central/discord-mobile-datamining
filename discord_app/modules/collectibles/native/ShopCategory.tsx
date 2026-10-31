// discord_app/modules/collectibles/native/ShopCategory.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import openProductDetailsActionSheet from "openProductDetailsActionSheet.tsx";
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function Spacing() {
  return React5(View, { style: { width: 12 } });
}
function HeaderAndFooterSpacing() {
  return React5(View, { style: { width: 16 } });
}
const View = fn(17).View;
let closure_5 = fn(1074).CollectiblesMobileShopScreen;
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const sum = 100 + fn(9459).COLLECTIBLES_SHOP_CARD_HEIGHT;
const createStyles = fn(5014);
let obj2 = {
  categoryContainer: { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum },
  categoryHeader: null,
  categoryHeaderBorderDark: null,
  categoryHeaderBorderLight: null,
  imageBackground: null,
  categoryHeaderSkeleton: null,
  productSkeleton: null,
  productsSkeleton: null,
  viewAllIcon: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum };
obj2.categoryHeader = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: 16,
  marginHorizontal: 16,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 1,
  height: 84,
  padding: 20,
};
let obj4 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: 16,
  marginHorizontal: 16,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 1,
  height: 84,
  padding: 20,
};
obj2.categoryHeaderBorderDark = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
let obj5 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj2.categoryHeaderBorderLight = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.imageBackground = { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" };
let obj6 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.categoryHeaderSkeleton = {
  height: 84,
  marginBottom: 16,
  marginHorizontal: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let size = {
  width: fn(9459).COLLECTIBLES_SHOP_CARD_WIDTH,
  height: fn(9459).COLLECTIBLES_SHOP_CARD_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.productSkeleton = size;
obj2.productsSkeleton = { flexDirection: "row", gap: 12, paddingHorizontal: 16 };
let obj7 = {
  height: 84,
  marginBottom: 16,
  marginHorizontal: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.viewAllIcon = {
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  padding: 6,
  borderRadius: nativeDefault.radii.round,
};
let closure_9 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ShopCategoryTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export function ShopCategorySkeleton() {
  const tmp = closure_9();
  _require = tmp;
  const sharedValue = require("ReanimatedRexport").useSharedValue(0.3);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = require("ReanimatedRexport");
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 1317875237641;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const obj3 = { style: null, accessibilityLabel: null, accessibilityState: null, accessible: true, children: null };
  const items1 = [tmp.categoryContainer, animatedStyle];
  obj3.style = items1;
  const intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(require("util").t.ZTNur7);
  obj3.accessibilityState = { busy: true };
  const items2 = [closure_7(View, { style: tmp.categoryHeaderSkeleton })];
  const obj5 = { style: tmp.productsSkeleton, children: null };
  const obj2 = require("ReanimatedRexport");
  const obj4 = { style: tmp.categoryHeaderSkeleton };
  obj5.children = Array.from({ length: 3 }).map((item, index) =>
    React5(View, { style: productSkeleton.productSkeleton }, index),
  );
  items2[1] = closure_7(View, obj5);
  obj3.children = items2;
  return closure_8(sharedValue(5095).View, obj3);
}
export function ShopCategory(category) {
  category = category.category;
  let analyticsLocations;
  initialProductSkuId = undefined;
  let collectiblesAnalyticsContext;
  let isInImprovedMobileShopLoading;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(7326)().analyticsLocations;
  const tmp3 = isInImprovedMobileShopLoading();
  dependencyMap = category(1497).useNavigation();
  const unpublishedAt = category.unpublishedAt;
  let obj = category(1497);
  const filteredAndSortedProducts = category(16978).useFilteredAndSortedProducts({
    products: category.products,
    bypassAndroidUnsyncedFilter: category.isOrbsExclusive,
  });
  const mobileBannerUrl = category.mobileBannerUrl;
  let obj2 = category(16978);
  let obj3 = { products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const collectiblesShopDeepLinkProps = category(17825).useCollectiblesShopDeepLinkProps({
    products: filteredAndSortedProducts,
  });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  const obj4 = category(17825);
  let items = [category.storeListingId];
  const recyclingState = category(7294).useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  const obj6 = category(7294);
  let tmp9 = null != productIndex;
  if (tmp9) {
    tmp9 = productIndex > 0;
  }
  const obj7 = category(17829);
  const scrollToInitialIndexOnce = obj7.useScrollToInitialIndexOnce({
    shouldScroll: tmp9,
    initialScrollIndex: productIndex,
    flashListRef: ref,
    afterMs: category(17829).INITIAL_SCROLL_DELAY_MS,
    resetKey: category.storeListingId,
  });
  const obj8 = {
    shouldScroll: tmp9,
    initialScrollIndex: productIndex,
    flashListRef: ref,
    afterMs: category(17829).INITIAL_SCROLL_DELAY_MS,
    resetKey: category.storeListingId,
  };
  collectiblesAnalyticsContext = category(9462).useCollectiblesAnalyticsContext();
  const tmp4Result = category(9462);
  isInImprovedMobileShopLoading = category(9569).useIsInImprovedMobileShopLoading();
  const items1 = [
    isInImprovedMobileShopLoading,
    initialProductSkuId,
    initialVariantIndex,
    filteredAndSortedProducts,
    analyticsLocations,
    collectiblesAnalyticsContext,
  ];
  const effect = obj5.useEffect(() => {
    if (!isInImprovedMobileShopLoading) {
      let found = null;
      if (null != initialProductSkuId) {
        found = filteredAndSortedProducts.find((skuId) => skuId.skuId === initialProductSkuId);
      }
      if (null != found) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = {
          product: found,
          initialVariantIndex,
          analyticsLocations,
          shopAnalyticsContext: collectiblesAnalyticsContext,
        };
        const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj3);
      }
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = obj5.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = {
      newValue: { tilePosition: index },
      children: React5(CollectiblesShopCardV2Default, { product: item, unpublishedAt }),
    };
    return React5(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items2);
  const obj9 = { newValue: { categoryPosition: index }, children: null };
  const obj10 = { style: tmp3.categoryContainer, children: null };
  const items3 = [tmp3.categoryHeader];
  const obj11 = {
    style: items3,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
    activeOpacity: 0.8,
    androidRippleConfig: null,
    hitSlop: 8,
    onPress: null,
    children: null,
  };
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const intl = tmp4(1113).intl;
  obj11.accessibilityLabel = intl.formatToPlainString(category(1113).t.FNtLb3, { category: category.name });
  const intl2 = tmp4(1113).intl;
  obj11.accessibilityHint = intl2.string(category(1113).t.F8ma9x);
  const obj12 = { category: category.name };
  const tmp4Result2 = category(9569);
  obj11.androidRippleConfig = { radius: analyticsLocations(575).radii.lg };
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
  let tmp15Result = null != mobileBannerUrl;
  if (tmp15Result) {
    const obj14 = { source: null, resizeMode: "cover", style: null };
    const obj15 = { uri: mobileBannerUrl };
    obj14.source = obj15;
    obj14.style = tmp3.imageBackground;
    tmp15Result = tmp15(tmp(5717), obj14);
  }
  const items4 = [tmp15Result];
  const obj13 = { radius: analyticsLocations(575).radii.lg };
  items4[1] = ref(filteredAndSortedProducts, {
    style: tmp3.viewAllIcon,
    children: ref(category(7378).ChevronSmallRightIcon, { size: "sm", color: "white" }),
  });
  obj11.children = items4;
  const items5 = [collectiblesAnalyticsContext(category(6980).PressableOpacity, obj11, category.storeListingId)];
  const obj17 = {
    ref,
    horizontal: true,
    accessibilityLabel: null,
    accessibilityRole: "list",
    data: null,
    renderItem: null,
    drawDistance: 150,
    decelerationRate: "fast",
    snapToInterval: null,
    showsHorizontalScrollIndicator: false,
    ListHeaderComponent: null,
    ListFooterComponent: null,
    ItemSeparatorComponent: null,
    initialScrollIndex: null,
  };
  const intl3 = tmp4(1113).intl;
  obj17.accessibilityLabel = intl3.formatToPlainString(category(1113).t.FNtLb3, { category: category.name });
  obj17.data = filteredAndSortedProducts;
  obj17.renderItem = callback;
  obj17.snapToInterval = category(9459).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
  obj17.ListHeaderComponent = HeaderAndFooterSpacing;
  obj17.ListFooterComponent = HeaderAndFooterSpacing;
  obj17.ItemSeparatorComponent = Spacing;
  obj17.initialScrollIndex = productIndex;
  items5[1] = ref(category(7294).FlashList, obj17);
  obj10.children = items5;
  obj9.children = collectiblesAnalyticsContext(filteredAndSortedProducts, obj10);
  return ref(category(9462).CollectiblesAnalyticsProvider, obj9);
}
