// discord_app/modules/collectibles/native/FeaturedCategorySubblock.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import onChangeDefault from "VisibilitySensor.tsx";
import { Image } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../CollectiblesCategoryStore.tsx";
import { CollectiblesMobileShopScreen as closure_5 } from "../CollectiblesShopConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ AnalyticEvents: closure_6, UserSettingsSections: error } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({
  container: { position: "relative" },
  bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" },
  limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 },
});
let result = require("set").fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default function _default(subblock) {
  subblock = subblock.subblock;
  importDefault = undefined;
  dependencyMap = undefined;
  let stateFromStores;
  const tmp = callback();
  let obj = subblock(1498);
  importDefault = obj.useNavigation();
  obj1 = subblock(8905);
  dependencyMap = obj1.useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj2 = subblock(586);
  let items = [closure_4];
  stateFromStores = obj2.useStateFromStores(items, () =>
    closure_1_4.getCategoryByStoreListingId(subblock.categoryStoreListingId),
  );
  let obj3 = subblock(15646);
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
  const intl = tmp2(1233).intl;
  obj1 = { category: subblock.name };
  obj[1] = intl.formatToPlainString(subblock(1233).t.FNtLb3, obj1);
  const intl2 = tmp2(1233).intl;
  obj[2] = intl2.string(subblock(1233).t.F8ma9x);
  obj2 = { radius: ThemesDefault.radii.lg };
  obj[4] = obj2;
  obj[6] = function onPress() {
    let obj = navigation(table[15]);
    let sessionId;
    if (table != null) {
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
    if (table != null) {
      pageSection = tmp3.pageSection;
    }
    obj[3] = pageSection;
    let pageCategory;
    if (table != null) {
      pageCategory = tmp3.pageCategory;
    }
    obj[4] = pageCategory;
    let tilePosition;
    if (table != null) {
      tilePosition = tmp3.tilePosition;
    }
    obj[6] = String(tilePosition);
    obj.track(closure_1_6.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
    if (null != stateFromStores) {
      if (tmp9.isOrbsExclusive) {
        obj = { analyticsLocations: null, analyticsSource: null, screen: null };
        const items = [tmp(tmp2[17]).COLLECTIBLES_SHOP];
        obj[0] = items;
        obj[1] = tmp(tmp2[17]).COLLECTIBLES_SHOP;
        obj[2] = closure_1_5.ORBS;
        const result = subblock(tmp2[16]).openCollectiblesShopMobile(obj);
        const obj4 = subblock(tmp2[16]);
      } else {
        obj1 = { category: null, analyticsContext: null };
        obj1[0] = tmp9;
        obj1[1] = tmp3;
        navigation.navigate(closure_1_7.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj1);
      }
    }
  };
  obj[7] = tmp.container;
  let tmp11Result = null != assetUrl;
  if (tmp11Result) {
    obj3 = { source: null, style: null };
    let obj4 = { uri: null };
    obj4[0] = assetUrl;
    obj3[0] = obj4;
    obj3[1] = tmp.bannerImage;
    tmp11Result = tmp11(stateFromStores, obj3);
  }
  const items1 = [tmp11Result];
  const tmp12 = onChangeDefault;
  const tmp13 = closure_9;
  let result = subblock(7308).shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj5 = { style: null };
    obj5[0] = tmp.limitedTimeBadge;
    result = tmp11(tmp2(8102).LimitedTimeBadge, obj5);
  }
  items1[1] = result;
  obj[8] = items1;
  obj[1] = tmp13(subblock(5076).PressableOpacity, obj);
  return closure_8(tmp12, obj);
}
