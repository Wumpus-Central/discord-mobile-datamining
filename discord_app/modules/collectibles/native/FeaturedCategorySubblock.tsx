// discord_app/modules/collectibles/native/FeaturedCategorySubblock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import VisibilitySensorDefault from "VisibilitySensor.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
const Image = fn(17).Image;
let closure_5 = fn(1076).CollectiblesMobileShopScreen;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({
  container: { position: "relative" },
  bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" },
  limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default function _default(subblock) {
  subblock = subblock.subblock;
  const tmp = closure_10();
  let obj = subblock(1483);
  importDefault = obj.useNavigation();
  let obj1 = subblock(8767);
  dependencyMap = obj1.useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj2 = subblock(504);
  let items = [CollectiblesCategoryStore];
  const stateFromStores = obj2.useStateFromStores(items, () =>
    CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId),
  );
  let obj3 = subblock(15818);
  let unpublishedAt = subblock.unpublishedAt;
  if (unpublishedAt == null) {
    unpublishedAt = undefined;
    if (stateFromStores != null) {
      unpublishedAt = stateFromStores.unpublishedAt;
    }
  }
  let date = null;
  if (null != unpublishedAt) {
    const _Date = Date;
    date = new Date(unpublishedAt);
  }
  obj = {
    onChange: obj3.useTrackProductCardImpression(subblock.categoryStoreListingId, "mobile_home", "featured_block")
      .handleCardVisibilityChange,
    children: null,
  };
  obj = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
    activeOpacity: 0.8,
    androidRippleConfig: null,
    hitSlop: 8,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = tmp2(1114).intl;
  obj1 = { category: subblock.name };
  obj.accessibilityLabel = intl.formatToPlainString(subblock(1114).t.FNtLb3, obj1);
  const intl2 = tmp2(1114).intl;
  obj.accessibilityHint = intl2.string(subblock(1114).t.F8ma9x);
  obj2 = { radius: nativeDefault.radii.lg };
  obj.androidRippleConfig = obj2;
  obj.onPress = function onPress() {
    let obj = AnalyticsUtilsDefault;
    let sessionId;
    if (closure_2 != null) {
      sessionId = tmp3.sessionId;
    }
    obj = {
      collectibles_shop_session_id: sessionId,
      sku_id: subblock.categoryStoreListingId,
      page_type: "mobile_home",
      page_section: null,
      page_category: null,
      tile_type: "FEATURED_BLOCK",
      tile_position: null,
      cta_name: null,
    };
    let pageSection;
    if (closure_2 != null) {
      pageSection = tmp3.pageSection;
    }
    obj.page_section = pageSection;
    let pageCategory;
    if (closure_2 != null) {
      pageCategory = tmp3.pageCategory;
    }
    obj.page_category = pageCategory;
    let tilePosition;
    if (closure_2 != null) {
      tilePosition = tmp3.tilePosition;
    }
    obj.tile_position = String(tilePosition);
    obj.track(constants.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
    if (null != stateFromStores) {
      if (tmp9.isOrbsExclusive) {
        obj = { analyticsLocations: null, analyticsSource: null, screen: null };
        const items = [tmp(7182).COLLECTIBLES_SHOP];
        obj.analyticsLocations = items;
        obj.analyticsSource = tmp(7182).COLLECTIBLES_SHOP;
        obj.screen = constants.ORBS;
        const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj);
      } else {
        const obj1 = { category: tmp9, analyticsContext: tmp3 };
        navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj1);
      }
    }
  };
  obj.style = tmp.container;
  let tmp11Result = null != assetUrl;
  if (tmp11Result) {
    obj3 = { source: null, style: null };
    let obj4 = { uri: assetUrl };
    obj3.source = obj4;
    obj3.style = tmp.bannerImage;
    tmp11Result = tmp11(stateFromStores, obj3);
  }
  const items1 = [tmp11Result];
  const tmp12 = VisibilitySensorDefault;
  const tmp13 = closure_9;
  let result = subblock(7554).shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj5 = { style: tmp.limitedTimeBadge };
    result = tmp11(tmp2(8832).LimitedTimeBadge, obj5);
  }
  items1[1] = result;
  obj.children = items1;
  obj.children = tmp13(subblock(5123).PressableOpacity, obj);
  return closure_8(tmp12, obj);
}
