// === Module 18186: FeaturedCategorySubblock ===

// Module 18186 (FeaturedCategorySubblock)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7795 */;
import VisibilitySensorDefault from "VisibilitySensor" /* 18181 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7796 */;

const FastImageDefault = tmp12(5842);
require = fn;
let closure_4 = fn(1074).CollectiblesMobileShopScreen;
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, UserSettingsSections: closure_6 } = Constants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
let closure_9 = createStyles.createStyles({ container: { position: "relative" }, bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" }, limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default function _default(subblock) {
  subblock = subblock.subblock;
  const tmp = closure_9();
  importDefault = subblock(1499).useNavigation();
  let obj = subblock(1499);
  dependencyMap = subblock(9543).useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj2 = subblock(9543);
  closure_3 = subblock(9656).useIsInImprovedMobileShopLoading();
  const obj3 = subblock(9656);
  items = [closure_3];
  const stateFromStores = subblock(504).useStateFromStores(items, () => CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId));
  let obj4 = subblock(504);
  let unpublishedAt = subblock.unpublishedAt;
  if (unpublishedAt == null) {
    let unpublishedAt1;
    if (stateFromStores != null) {
      unpublishedAt1 = stateFromStores.unpublishedAt;
    }
    unpublishedAt = unpublishedAt1;
  }
  let date = null;
  if (null != unpublishedAt) {
    const _Date = Date;
    date = new Date(unpublishedAt);
  }
  let obj6 = { onChange: subblock(18168).useTrackProductCardImpression(subblock.categoryStoreListingId, "mobile_home", "featured_block").handleCardVisibilityChange, children: null };
  let obj5 = subblock(18168);
  const obj7 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8, onPress: null, style: null, children: null };
  const intl = tmp2(1113).intl;
  obj7.accessibilityLabel = intl.formatToPlainString(subblock(1113).t.FNtLb3, { category: subblock.name });
  const intl2 = tmp2(1113).intl;
  obj7.accessibilityHint = intl2.string(subblock(1113).t.F8ma9x);
  const obj8 = { category: subblock.name };
  const tmp13 = VisibilitySensorDefault;
  obj7.androidRippleConfig = { radius: nativeDefault.radii.lg };
  obj7.onPress = function onTapViewAll() {
    let sessionId;
    if (analyticsContext != null) {
      sessionId = analyticsContext.sessionId;
    }
    const obj2 = { collectibles_shop_session_id: sessionId, sku_id: subblock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "FEATURED_BLOCK", tile_position: null, cta_name: null };
    let pageSection;
    if (analyticsContext != null) {
      pageSection = analyticsContext.pageSection;
    }
    obj2.page_section = pageSection;
    let pageCategory;
    if (analyticsContext != null) {
      pageCategory = analyticsContext.pageCategory;
    }
    obj2.page_category = pageCategory;
    let tilePosition;
    if (analyticsContext != null) {
      tilePosition = analyticsContext.tilePosition;
    }
    obj2.tile_position = String(tilePosition);
    AnalyticsUtilsDefault.track(constants.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj2);
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        const obj4 = { analyticsLocations: null, analyticsSource: null, screen: null };
        items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
        obj4.analyticsLocations = items;
        obj4.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        obj4.screen = stateFromStores.ORBS;
        const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
      } else {
        const obj6 = { category: stateFromStores, analyticsContext };
        navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj6);
      }
    } else {
      let tmp11 = closure_3;
      if (closure_3) {
        tmp11 = null != subblock.categorySkuId;
      }
      if (tmp11) {
        tmp11 = "" !== subblock.categorySkuId;
      }
      if (tmp11) {
        const obj10 = { categorySkuId: null, categoryName: null, analyticsContext: null };
        ({ categorySkuId: obj3.categorySkuId, name: obj3.categoryName } = subblock);
        obj10.analyticsContext = analyticsContext;
        navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj10);
      }
    }
  };
  obj7.style = tmp.container;
  let tmp11Result = null != assetUrl;
  if (tmp11Result) {
    let obj10 = { source: null, style: null };
    const obj11 = { uri: assetUrl };
    obj10.source = obj11;
    obj10.style = tmp.bannerImage;
    tmp11Result = closure_7(FastImageDefault, obj10);
  }
  const items1 = [tmp11Result, ];
  const obj9 = { radius: nativeDefault.radii.lg };
  let result = subblock(7808).shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj12 = { style: tmp.limitedTimeBadge };
    result = closure_7(tmp2(9610).LimitedTimeBadge, obj12);
  }
  items1[1] = result;
  obj7.children = items1;
  obj6.children = closure_8(subblock(7043).PressableOpacity, obj7);
  return closure_7(tmp13, obj6);
};