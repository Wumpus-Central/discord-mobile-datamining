// discord_app/modules/collectibles/native/FeaturedCategorySubblock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import VisibilitySensorDefault from "VisibilitySensor.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

const FastImageDefault = tmp12(6163);
require = fn;
let closure_4 = fn(1087).CollectiblesMobileShopScreen;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles({
  container: { position: "relative" },
  bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" },
  limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (subblock) => {
      const cResult = subblock(collectiblesAnalyticsContext[7]).c(52);
      subblock = subblock.subblock;
      closure_9();
      let obj = subblock(collectiblesAnalyticsContext[7]);
      const navigation = subblock(collectiblesAnalyticsContext[8]).useNavigation();
      let obj2 = subblock(collectiblesAnalyticsContext[8]);
      collectiblesAnalyticsContext = subblock(collectiblesAnalyticsContext[9]).useCollectiblesAnalyticsContext();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [stateFromStores];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== subblock.categoryStoreListingId) {
        class S {
          constructor() {
            return closure_3.getCategoryByStoreListingId(subblock.categoryStoreListingId);
          }
        }
        cResult[1] = subblock.categoryStoreListingId;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return closure_3.getCategoryByStoreListingId(subblock.categoryStoreListingId);
          }
        }
      }
      let obj3 = subblock(collectiblesAnalyticsContext[9]);
      stateFromStores = subblock(collectiblesAnalyticsContext[10]).useStateFromStores(first, S);
      const tmpResult = subblock(collectiblesAnalyticsContext[10]);
      const handleCardVisibilityChange = subblock(collectiblesAnalyticsContext[11]).useTrackProductCardImpression(
        subblock.categoryStoreListingId,
        "mobile_home",
        "featured_block",
      ).handleCardVisibilityChange;
      if (cResult[3] === collectiblesAnalyticsContext) {
        class S {
          constructor() {
            return closure_3.getCategoryByStoreListingId(subblock.categoryStoreListingId);
          }
        }
      }
      function onTapViewAll() {
        let sessionId;
        if (collectiblesAnalyticsContext != null) {
          sessionId = collectiblesAnalyticsContext.sessionId;
        }
        const obj2 = {
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
        if (collectiblesAnalyticsContext != null) {
          pageSection = collectiblesAnalyticsContext.pageSection;
        }
        obj2.page_section = pageSection;
        let pageCategory;
        if (collectiblesAnalyticsContext != null) {
          pageCategory = collectiblesAnalyticsContext.pageCategory;
        }
        obj2.page_category = pageCategory;
        let tilePosition;
        if (collectiblesAnalyticsContext != null) {
          tilePosition = collectiblesAnalyticsContext.tilePosition;
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
            const obj5 = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
            navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj5);
          }
        }
      }
      cResult[3] = collectiblesAnalyticsContext;
      cResult[4] = stateFromStores;
      cResult[5] = navigation;
      cResult[6] = subblock.categoryStoreListingId;
      cResult[7] = onTapViewAll;
      const tmpResult2 = subblock(collectiblesAnalyticsContext[11]);
    }
  : (subblock) => {
      subblock = subblock.subblock;
      let stateFromStores;
      const tmp = closure_9();
      importDefault = subblock(1503).useNavigation();
      let obj = subblock(1503);
      dependencyMap = subblock(8951).useCollectiblesAnalyticsContext();
      const assetUrl = subblock.assetUrl;
      let obj2 = subblock(8951);
      let items = [stateFromStores];
      stateFromStores = subblock(504).useStateFromStores(items, () =>
        CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId),
      );
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
      let obj5 = {
        onChange: subblock(16127).useTrackProductCardImpression(
          subblock.categoryStoreListingId,
          "mobile_home",
          "featured_block",
        ).handleCardVisibilityChange,
        children: null,
      };
      let obj4 = subblock(16127);
      const obj6 = {
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
      const intl = tmp2(1126).intl;
      obj6.accessibilityLabel = intl.formatToPlainString(subblock(1126).t.FNtLb3, { category: subblock.name });
      const intl2 = tmp2(1126).intl;
      obj6.accessibilityHint = intl2.string(subblock(1126).t.F8ma9x);
      const obj7 = { category: subblock.name };
      const tmp13 = VisibilitySensorDefault;
      obj6.androidRippleConfig = { radius: nativeDefault.radii.lg };
      obj6.onPress = function onTapViewAll() {
        let sessionId;
        if (analyticsContext != null) {
          sessionId = analyticsContext.sessionId;
        }
        const obj2 = {
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
      const items1 = [tmp11Result];
      const obj8 = { radius: nativeDefault.radii.lg };
      let result = subblock(7269).shouldShowLimitedTimeBadge(date);
      if (result) {
        const obj11 = { style: tmp.limitedTimeBadge };
        result = closure_7(tmp2(9014).LimitedTimeBadge, obj11);
      }
      items1[1] = result;
      obj6.children = items1;
      obj5.children = closure_8(subblock(6191).PressableOpacity, obj6);
      return closure_7(tmp13, obj5);
    };
