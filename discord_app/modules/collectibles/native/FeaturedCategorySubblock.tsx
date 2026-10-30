// === Module 17811: FeaturedCategorySubblock ===

// Module 17811 (FeaturedCategorySubblock)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import VisibilitySensorDefault from "VisibilitySensor" /* 17806 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7713 */;

const FastImageDefault = tmp12(5712);
require = fn;
let closure_4 = fn(1074).CollectiblesMobileShopScreen;
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let closure_9 = createStyles.createStyles({ container: { position: "relative" }, bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" }, limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default function _default(subblock) {
  subblock = subblock.subblock;
  let stateFromStores;
  const tmp = closure_9();
  importDefault = subblock(1498).useNavigation();
  let obj = subblock(1498);
  dependencyMap = subblock(9440).useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj2 = subblock(9440);
  let items = [stateFromStores];
  stateFromStores = subblock(504).useStateFromStores(items, () => CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId));
  let obj3 = subblock(504);
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
  let obj5 = { onChange: subblock(17791).useTrackProductCardImpression(subblock.categoryStoreListingId, "mobile_home", "featured_block").handleCardVisibilityChange, children: null };
  let obj4 = subblock(17791);
  const obj6 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8, onPress: null, style: null, children: null };
  const intl = tmp2(1114).intl;
  obj6.accessibilityLabel = intl.formatToPlainString(subblock(1114).t.FNtLb3, { category: subblock.name });
  const intl2 = tmp2(1114).intl;
  obj6.accessibilityHint = intl2.string(subblock(1114).t.F8ma9x);
  const obj7 = { category: subblock.name };
  const tmp13 = VisibilitySensorDefault;
  obj6.androidRippleConfig = { radius: nativeDefault.radii.lg };
  obj6.onPress = function onTapViewAll() {
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
        const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null };
        const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
        obj3.analyticsLocations = items;
        obj3.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        obj3.screen = constants.ORBS;
        const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
      } else {
        const obj5 = { category: stateFromStores, analyticsContext };
        navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj5);
      }
    }
  };
  obj6.style = tmp.container;
  let tmp11Result = null != assetUrl;
  if (tmp11Result) {
    const obj9 = { source: null, style: null };
    const obj10 = { uri: assetUrl };
    obj9.source = obj10;
    obj9.style = tmp.bannerImage;
    tmp11Result = closure_7(FastImageDefault, obj9);
  }
  const items1 = [tmp11Result, ];
  const obj8 = { radius: nativeDefault.radii.lg };
  let result = subblock(7725).shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj11 = { style: tmp.limitedTimeBadge };
    result = closure_7(tmp2(9504).LimitedTimeBadge, obj11);
  }
  items1[1] = result;
  obj6.children = items1;
  obj5.children = closure_8(subblock(6974).PressableOpacity, obj6);
  return closure_7(tmp13, obj5);
};