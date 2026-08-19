// discord_app/modules/collectibles/native/ShopCategory.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { CollectiblesMobileShopScreen as closure_5 } from "../CollectiblesShopConstants.tsx";
import { UserSettingsSections } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function Spacing() {
  return callback(View, { style: { width: 12 } });
}
function HeaderAndFooterSpacing() {
  return callback(View, { style: { width: 16 } });
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
const sum = 100 + require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT;
const createCacheKey = { marginTop: ThemesDefault.space.PX_16, marginBottom: 24, height: sum };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
createCacheKey[2] = { borderColor: ThemesDefault.unsafe_rawColors.PRIMARY_660 };
createCacheKey[3] = { borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[4] = { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: ThemesDefault.radii.round };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategory = function ShopCategory(category) {
  category = category.category;
  let analyticsLocations;
  initialProductSkuId = undefined;
  let collectiblesAnalyticsContext;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(7139)().analyticsLocations;
  const tmp3 = callback2();
  let obj = category(1500);
  dependencyMap = obj.useNavigation();
  const unpublishedAt = category.unpublishedAt;
  obj1 = category(14428);
  obj = { products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const filteredAndSortedProducts = obj1.useFilteredAndSortedProducts(obj);
  const mobileBannerUrl = category.mobileBannerUrl;
  let obj3 = category(14955);
  const collectiblesShopDeepLinkProps = obj3.useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  let obj4 = unpublishedAt;
  const ref = unpublishedAt.useRef(null);
  let obj5 = category(8029);
  let items = [category.storeListingId];
  const recyclingState = obj5.useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  let obj6 = category(14957);
  let tmp9 = null != productIndex;
  if (tmp9) {
    tmp9 = productIndex > 0;
  }
  obj = { shouldScroll: tmp9, initialScrollIndex: productIndex, flashListRef: ref, afterMs: tmp4(14957).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  const scrollToInitialIndexOnce = obj6.useScrollToInitialIndexOnce(obj);
  collectiblesAnalyticsContext = category(9175).useCollectiblesAnalyticsContext();
  const items1 = [initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = obj4.useEffect(() => {
    let found = null;
    if (null != initialProductSkuId) {
      found = filteredAndSortedProducts.find((item, index) => item.skuId === closure_5);
    }
    if (null != found) {
      let obj = analyticsLocations(navigation[15]);
      obj.hideActionSheet();
      obj = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
      obj[0] = found;
      obj[1] = initialVariantIndex;
      obj[2] = analyticsLocations;
      obj[3] = collectiblesAnalyticsContext;
      const result = category(navigation[16]).openProductDetailsActionSheet(obj);
      const obj2 = category(navigation[16]);
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = obj4.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { product: item, unpublishedAt };
    obj[1] = ref(analyticsLocations(navigation[5]), obj);
    return ref(category(navigation[14]).CollectiblesAnalyticsProvider, obj);
  }, items2);
  obj1 = { newValue: { categoryPosition: index }, children: null };
  let obj2 = { style: tmp3.categoryContainer, children: null };
  const items3 = [tmp3.categoryHeader, ];
  obj3 = { style: items3, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const intl = tmp4(1236).intl;
  obj4 = { category: category.name };
  obj3[2] = intl.formatToPlainString(category(1236).t.FNtLb3, obj4);
  const intl2 = tmp4(1236).intl;
  obj3[3] = intl2.string(category(1236).t.F8ma9x);
  obj5 = { radius: tmp(712).radii.lg };
  obj3[5] = obj5;
  obj3[7] = function onPress() {
    if (category.isOrbsExclusive) {
      let obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [analyticsLocations(navigation[18]).COLLECTIBLES_SHOP];
      obj[0] = items;
      obj[1] = analyticsLocations(navigation[18]).COLLECTIBLES_SHOP;
      obj[2] = initialProductSkuId.ORBS;
      const result = category(navigation[17]).openCollectiblesShopMobile(obj);
      const obj2 = category(navigation[17]);
    } else {
      obj = { category: null, analyticsContext: null };
      obj[0] = tmp;
      obj[1] = collectiblesAnalyticsContext;
      navigation.navigate(initialVariantIndex.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
    }
  };
  let tmp14Result = null != mobileBannerUrl;
  if (tmp14Result) {
    obj6 = { source: null, resizeMode: "cover", style: null };
    const obj7 = { uri: null };
    obj7[0] = mobileBannerUrl;
    obj6[0] = obj7;
    obj6[2] = tmp3.imageBackground;
    tmp14Result = tmp14(tmp(5449), obj6);
  }
  const items4 = [tmp14Result, ];
  const tmp4Result = category(9175);
  items4[1] = ref(filteredAndSortedProducts, { style: tmp3.viewAllIcon, children: ref(category(6685).ChevronSmallRightIcon, { size: "sm", color: "white" }) });
  obj3[8] = items4;
  const items5 = [collectiblesAnalyticsContext(category(5433).PressableOpacity, obj3, category.storeListingId), ];
  const obj9 = { ref, horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, renderItem: null, drawDistance: 150, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, initialScrollIndex: null };
  const intl3 = tmp4(1236).intl;
  obj9[2] = intl3.formatToPlainString(category(1236).t.FNtLb3, { category: category.name });
  obj9[4] = filteredAndSortedProducts;
  obj9[5] = callback;
  obj9[8] = category(9172).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
  obj9[10] = HeaderAndFooterSpacing;
  obj9[11] = HeaderAndFooterSpacing;
  obj9[12] = Spacing;
  obj9[13] = productIndex;
  items5[1] = ref(category(8029).FlashList, obj9);
  obj2[1] = items5;
  obj1[1] = collectiblesAnalyticsContext(filteredAndSortedProducts, obj2);
  return ref(category(9175).CollectiblesAnalyticsProvider, obj1);
};