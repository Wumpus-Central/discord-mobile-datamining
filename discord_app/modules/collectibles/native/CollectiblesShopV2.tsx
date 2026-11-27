// discord_app/modules/collectibles/native/CollectiblesShopV2.tsx
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import CollectiblesPerfLogging from "../utils/CollectiblesPerfLogging.tsx";
import NativePaymentHooksDefault from "../../payments/native/hooks/NativePaymentHooks.android.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import ImprovedMobileShopLoadingExperiment from "../experiments/ImprovedMobileShopLoadingExperiment.tsx";
import CollectiblesShopManager2 from "../CollectiblesShopManager.tsx";
import takeWhileDefault from "../../../../_runtime/17498_takeWhile.js";
import ShopCategory from "ShopCategory.tsx";
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesShopHomeStore from "../CollectiblesShopHomeStore.tsx";

require = fn;
function ImprovedLoadingCollectiblesShopInternal(arg0) {
  const obj2 = {};
  const isImprovedMobileShopLoadingEnabled =
    ImprovedMobileShopLoadingExperiment.useIsImprovedMobileShopLoadingEnabled("collectibles_shop_v2");
  const merged = Object.assign(arg0);
  obj2.improvedLoading = isImprovedMobileShopLoadingEnabled;
  return guild(CollectiblesShopInternal, obj2);
}
class CollectiblesShopV2 {
  constructor(arg0) {
    tmp2 = closure_2;
    tmp = closure_1;
    obj = closure_1(closure_2[28]);
    nativeIAPPayments = obj.useNativeIAPPayments();
    nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    storeFront = nativeIAPPayments.storeFront;
    tmp5 = nativePaymentsConnected;
    tmp4 = closure_23();
    obj2 = nativePaymentsConnected(closure_2[18]);
    items = [];
    items[0] = closure_9;
    stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    isStaffResult = undefined;
    if (stateFromStores != null) {
      isStaffResult = stateFromStores.isStaff();
    }
    if (!isStaffResult) {
      isStaffPersonalResult = undefined;
      if (stateFromStores != null) {
        isStaffPersonalResult = stateFromStores.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    tmp8 = closure_3(closure_4.useState(false), 2);
    [tmp9, closure_1] = tmp8;
    items1 = [];
    items1[0] = nativePaymentsConnected;
    effect = closure_4.useEffect(() => {
      if (!timeout) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_1(true);
        }, 10000);
        return () => clearTimeout(closure_0);
      }
    }, items1);
    tmp5Result = tmp5(tmp2[26]);
    tmp11 = tmp5Result.isIOS() && !tmp5(tmp2[53]).isStable && isStaffResult;
    if (!nativePaymentsConnected) {
      if (!tmp11) {
        if (!tmp9) {
          tmp12 = jsx;
          tmp13 = ActivityIndicator;
          obj1 = { style: null, size: "large" };
          obj1.style = tmp4.spinner;
          return jsx(ActivityIndicator, obj1);
        }
      }
    }
    if (tmp9) {
      tmp9 = !nativePaymentsConnected;
    }
    if (tmp9) {
      tmpResult = tmp(tmp2[44]);
      tmp5Result1 = tmp5(tmp2[26]);
      str = "collectibles mobile shop failed to connect to native payments isIOS: ";
      text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
      str2 = " isStable: ";
      captureMessageResult = tmpResult.captureMessage(
        `${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${tmp5(tmp2[53]).isStable}`,
      );
    }
    screen = global;
    if (global.screen !== closure_14.ORBS) {
      tmp5Result2 = tmp5(tmp2[54]);
      if (!tmp5Result2.isMetaQuest()) {
        tmp16 = jsx;
        tmp17 = ImprovedLoadingCollectiblesShopInternal;
        obj11 = {};
        tmp18 = obj11;
        tmp19 = screen;
        merged = Object.assign(screen);
        obj11.storeFront = storeFront;
        obj11.screen = screen.screen;
        tmp21 = jsx(ImprovedLoadingCollectiblesShopInternal, obj11);
      }
      tmp23 = tmp21;
    }
    obj12 = {};
    merged1 = Object.assign(screen);
    obj12.storeFront = storeFront;
    screen = screen.screen;
    obj12.screen = screen;
    obj12.improvedLoading = false;
    tmp21 = jsx(CollectiblesShopInternal, obj12);
    return;
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const FeedBlockRecord = fn(6348).FeedBlockRecord;
const CollectiblesShopConstants = fn(1073);
({
  COLLECTIBLES_SHOP_CACHE_DURATION_MS: map1,
  CollectiblesMobileShopScreen: closure_14,
  CollectibleShopTab: closure_15,
  SHOP_ALL_PAGE_SIZE,
} = CollectiblesShopConstants);
let closure_17 = CollectiblesShopConstants.TWELVE_DAYS_COLLECTION_SKU_ID;
const Constants = fn(1071);
({ AnalyticEvents: closure_18, COLLECTIBLES_APPLICATION_ID: closure_19, PaymentGateways: closure_20 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(5043);
let closure_23 = createStyles.createStyles({
  rootContainer: { height: "100%", width: "100%" },
  spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 },
});
const constants3 = { CATEGORY: "category", SKELETON: "skeleton" };
let closure_25 = 2 * SHOP_ALL_PAGE_SIZE;
let closure_26 = Array.from({ length: 3 }, (arg0, skeletonIndex) => ({ kind: constants3.SKELETON, skeletonIndex }));
let closure_27 = [];
function CollectiblesShopInternal(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  const improvedLoading = analyticsSource.improvedLoading;
  let bypassGoogleSkuSync;
  let noCache;
  let includeUnpublished;
  let sessionId;
  let categories;
  let isFetchingCategories;
  let HOME;
  let shopBlocks;
  fetchShopHomeError = undefined;
  let categories1;
  let isLoading;
  let hasMore;
  let prefetchThrough;
  let resolvedSkuIds;
  let stateFromStores;
  let isFetchingGoogleSkus;
  let loadedGoogleSkuIds;
  let currentUserIfAvailable;
  let stateFromStores1;
  let analyticsLocations;
  let navigation;
  let memo4;
  let memo5;
  closure_27 = undefined;
  let memo7;
  let first1;
  closure_30 = undefined;
  const commonTriggerPoint = analyticsSource(screen[14]).useCommonTriggerPoint(
    analyticsSource(screen[15]).CollectiblesShopOpenTriggerPoint,
  );
  let obj = analyticsSource(screen[14]);
  const collectiblesPromotionEndpointReferenceMobile = analyticsSource(
    screen[16],
  ).useCollectiblesPromotionEndpointReferenceMobile("CollectiblesShopV2");
  let tmp7;
  let obj2 = analyticsSource(screen[16]);
  if (collectiblesPromotionEndpointReferenceMobile) {
    tmp7 = isFetchingGoogleSkus;
  }
  onNavigateAway(screen[17])(tmp7);
  let tmp6 = onNavigateAway(screen[17]);
  items = [HOME];
  const first = improvedLoading(
    analyticsSource(screen[18]).useStateFromStoresArray(items, () => {
      let num = HOME.lastSuccessfulFetch;
      if (num == null) {
        num = 0;
      }
      items = [num];
      return items;
    }),
    1,
  )[0];
  let tmp9 = improvedLoading;
  const tmpResult = analyticsSource(screen[18]);
  const items1 = [sessionId];
  const stateFromStoresObject = analyticsSource(screen[18]).useStateFromStoresObject(items1, () => ({
    bypassGoogleSkuSync: sessionId.get("bypass_google_sku_sync"),
    noCache: sessionId.get("shop_disable_cache"),
    includeUnpublished: sessionId.get("shop_include_unpublished"),
  }));
  bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  noCache = stateFromStoresObject.noCache;
  includeUnpublished = stateFromStoresObject.includeUnpublished;
  let tmp12 = analyticsLocations();
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  const tmp14 = onNavigateAway(screen[19])(() => {
    const obj = { sessionId: analyticsSource(screen[20]).v4() };
    return obj;
  });
  sessionId = tmp14.sessionId;
  const items2 = [sessionId, screen];
  const memo = bypassGoogleSkuSync.useMemo(() => {
    const obj = { sessionId, tab: null };
    let FEATURED_PAGE = screen;
    if (screen == null) {
      FEATURED_PAGE = constants.FEATURED_PAGE;
    }
    obj.tab = FEATURED_PAGE;
    return obj;
  }, items2);
  let obj3 = { paymentGateway: loadedGoogleSkuIds.APPLE };
  const tmpResult9 = analyticsSource(screen[18]);
  if (null != country) {
    let obj4 = { countryCode: country };
    let obj6 = obj4;
  } else {
    obj6 = {};
  }
  const merged = Object.assign(obj6);
  obj3.logPerf = true;
  obj3.skipFetch = improvedLoading;
  const tmp5ResultResult = onNavigateAway(screen[21])(obj3, memo);
  categories = tmp5ResultResult.categories;
  isFetchingCategories = tmp5ResultResult.isFetchingCategories;
  if (screen === isLoading.ORBS) {
    HOME = hasMore.ORBS;
  } else {
    HOME = hasMore.HOME;
  }
  const tmp5Result = onNavigateAway(screen[21]);
  let tmp22 = improvedLoading;
  if (improvedLoading) {
    tmp22 = screen === tmp19.SHOP_ALL;
  }
  const maybeFetchCollectiblesShopHome = analyticsSource(screen[22]).useMaybeFetchCollectiblesShopHome(
    HOME,
    { noCache, includeUnpublished, logPerf: true },
    memo,
    false,
    tmp22,
  );
  shopBlocks = maybeFetchCollectiblesShopHome.shopBlocks;
  ({ isFetchingShopHome, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const obj8 = { pageSize: prefetchThrough, includeUnpublished, noCache, enabled: null };
  let tmp25 = improvedLoading;
  const obj7 = { noCache, includeUnpublished, logPerf: true };
  const tmpResult10 = analyticsSource(screen[22]);
  if (improvedLoading) {
    tmp25 = screen === tmp19.SHOP_ALL;
  }
  obj8.enabled = tmp25;
  const tmp5Result1Result = onNavigateAway(screen[23])(obj8);
  categories1 = tmp5Result1Result.categories;
  isLoading = tmp5Result1Result.isLoading;
  hasMore = tmp5Result1Result.hasMore;
  prefetchThrough = tmp5Result1Result.prefetchThrough;
  const items3 = [shopBlocks];
  const memo1 = obj5.useMemo(() => shopBlocks.find((item) => item instanceof fetchShopHomeError), items3);
  resolvedSkuIds = tmp5(tmp2[24])(memo1).resolvedSkuIds;
  const items4 = [improvedLoading, screen, resolvedSkuIds];
  const effect = obj5.useEffect(() => {
    let tmp = improvedLoading;
    if (improvedLoading) {
      tmp = screen !== constants.SHOP_ALL;
    }
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(resolvedSkuIds);
    }
  }, items4);
  const tmp5Result10 = onNavigateAway(screen[23]);
  const items5 = [shopBlocks];
  const items6 = [HOME];
  stateFromStores = analyticsSource(screen[18]).useStateFromStores(
    items5,
    () => CollectiblesShopHomeStore.getCategories(HOME),
    items6,
  );
  const items7 = [improvedLoading, categories, isFetchingCategories];
  const memo2 = obj5.useMemo(() => {
    if (!improvedLoading) {
      if (true !== isFetchingCategories) {
        if (false !== obj.isAndroid()) {
          items = [];
          HermesBuiltin.arraySpread(categories.values(), 0);
          const googleSkuIds = collectibles_CollectiblesUtils.getGoogleSkuIds(
            items.flatMap((products) => products.products),
          );
          const tmp2Result = collectibles_CollectiblesUtils;
        }
        return [];
      }
    }
  }, items7);
  const tmpResult11 = analyticsSource(screen[18]);
  let googleSkuIds = onNavigateAway(screen[28]).useGoogleSkuIds(memo2, true === isFetchingCategories, !improvedLoading);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  const items8 = [improvedLoading, screen, categories1, stateFromStores];
  const memo3 = obj5.useMemo(() => {
    if (improvedLoading) {
      return collectibles_CollectiblesUtils.getGoogleSkuIds(
        screen === constants.SHOP_ALL ? categories1 : stateFromStores.flatMap((products) => products.products),
      );
    } else {
      return closure_27;
    }
  }, items8);
  const tmp5Result11 = onNavigateAway(screen[28]);
  loadedGoogleSkuIds = onNavigateAway(screen[28]).useLoadedGoogleSkuIds(memo3);
  const tmp5Result12 = onNavigateAway(screen[28]);
  currentUserIfAvailable = analyticsSource(screen[29]).useCurrentUserIfAvailable();
  const tmpResult12 = analyticsSource(screen[29]);
  const currentUserWishlist = analyticsSource(screen[30]).useCurrentUserWishlist();
  const tmpResult13 = analyticsSource(screen[30]);
  const items9 = [categories];
  stateFromStores1 = analyticsSource(screen[18]).useStateFromStores(items9, () =>
    analyticsSource(screen[31]).isThemeDark(categories.theme),
  );
  const tmpResult14 = analyticsSource(screen[18]);
  const items10 = [onNavigateAway(screen[13]).COLLECTIBLES_SHOP];
  if (isLoading.SHOP_ALL === screen) {
    let COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[13]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (tmp19.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[13]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp19.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[13]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items10[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = onNavigateAway(screen[32])(items10).analyticsLocations;
  const tmp5Result13 = onNavigateAway(screen[32]);
  navigation = analyticsSource(screen[33]).useNavigation();
  const items11 = [navigation, onNavigateAway];
  const effect1 = obj5.useEffect(
    () =>
      navigation.addListener("beforeRemove", (data) => {
        if ("RESET" !== data.data.action.type) {
          if (onNavigateAway != null) {
            tmp();
          }
        }
      }),
    items11,
  );
  const items12 = [categories1, loadedGoogleSkuIds];
  memo4 = obj5.useMemo(
    () =>
      takeWhileDefault(categories1, (products) => {
        const googleSkuIds = analyticsSource(screen[27]).getGoogleSkuIds(products.products);
        return googleSkuIds.every((item) => set.has(item));
      }),
    items12,
  );
  const items13 = [improvedLoading, memo4, categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  memo5 = obj5.useMemo(() => {
    if (improvedLoading) {
      let result = BillingPlatformUtils.isGooglePlayBillingSupported();
      if (result) {
        result = !bypassGoogleSkuSync;
      }
      if (result) {
        let result1 = collectibles_CollectiblesUtils.filterGPlaySyncedCategories(memo4);
      } else {
        result1 = memo4;
      }
      return collectibles_CollectiblesUtils.filterHiddenCategories(result1);
    } else {
      items = [];
      HermesBuiltin.arraySpread(categories.values(), 0);
      const obj = collectibles_CollectiblesUtils;
      let result3 = BillingPlatformUtils.isGooglePlayBillingSupported();
      if (result3) {
        let tmp10 = !bypassGoogleSkuSync;
        if (!bypassGoogleSkuSync) {
          let tmp12 = !isFetchingGoogleSkus;
          if (!isFetchingGoogleSkus) {
            tmp12 = !isFetchingCategories;
          }
          tmp10 = tmp12;
        }
        result3 = tmp10;
      }
      let result2 = items;
      if (result3) {
        result2 = collectibles_CollectiblesUtils.filterGPlaySyncedCategories(items);
      }
      return obj.filterHiddenCategories(result2);
    }
  }, items13);
  const tmpResult15 = analyticsSource(screen[33]);
  const tmp39 = Date.now() - first > categories1;
  let categoryIndex = analyticsSource(screen[36]).useCollectiblesShopDeepLinkProps({ categories: memo5 }).categoryIndex;
  const items14 = [memo5, improvedLoading, isLoading, hasMore, memo4.length, categories1.length];
  const memo6 = obj5.useMemo(() => {
    const mapped = memo5.map((category, categoryIndex) => ({ kind: constants.CATEGORY, category, categoryIndex }));
    let tmp = improvedLoading;
    if (improvedLoading) {
      let tmp2 = isLoading;
      if (!isLoading) {
        tmp2 = hasMore;
      }
      if (!tmp2) {
        tmp2 = memo4.length < categories1.length;
      }
      tmp = tmp2;
    }
    if (tmp) {
      const push = mapped.push;
      items = [];
      HermesBuiltin.arraySpread(closure_26, 0);
      HermesBuiltin.apply(items, mapped);
    }
    return mapped;
  }, items14);
  closure_27 = obj5.useRef({ [tmp19.SHOP_ALL]: false, [tmp19.FEATURED_PAGE]: false, [tmp19.ORBS]: false });
  const items15 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect2 = obj5.useEffect(() => {
    let FEATURED_PAGE = screen;
    let tmp = null == screen;
    if (!tmp) {
      tmp = FEATURED_PAGE === constants.FEATURED_PAGE;
    }
    if (!tmp) {
      tmp = FEATURED_PAGE === constants.SHOP_ALL;
    }
    const obj2 = {
      location_stack: analyticsLocations,
      page_session_id: sessionId,
      source: analyticsSource,
      page_type: null,
    };
    let str = "home";
    if (!tmp) {
      str = FEATURED_PAGE;
    }
    obj2.page_type = str;
    AnalyticsUtilsDefault.track(constants2.COLLECTIBLES_SHOP_VIEWED, obj2);
    const obj4 = {
      sessionId,
      checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
      tab: null,
      unpublishedCategoriesShown: null,
      cacheDisabled: null,
    };
    if (FEATURED_PAGE == null) {
      FEATURED_PAGE = constants.FEATURED_PAGE;
    }
    obj4.tab = FEATURED_PAGE;
    obj4.unpublishedCategoriesShown = includeUnpublished;
    obj4.cacheDisabled = noCache;
    CollectiblesPerfLogging.trackShopPerf(obj4);
  }, items15);
  const items16 = [currentUserIfAvailable];
  const effect3 = obj5.useEffect(() => {
    if (null != currentUserIfAvailable) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items16);
  let tmp44 = improvedLoading;
  const tmpResult16 = analyticsSource(screen[36]);
  if (improvedLoading) {
    tmp44 = screen === tmp19.SHOP_ALL;
  }
  onNavigateAway(screen[40])({ enabled: tmp44, analyticsLocations, shopAnalyticsContext: tmp14 });
  const items17 = [sessionId, includeUnpublished, noCache, stateFromStores1];
  const callback = obj5.useCallback((item) => {
    item = item.item;
    if (item.kind === navigation.SKELETON) {
      let tmp16 = guild(ShopCategory.ShopCategorySkeleton, {});
    } else {
      let tmp3 = 0 !== item.categoryIndex;
      if (!tmp3) {
        tmp3 = closure_27.current[constants.SHOP_ALL];
      }
      if (!tmp3) {
        closure_27.current[constants.SHOP_ALL] = true;
        const obj2 = {
          sessionId,
          checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
          tab: constants.SHOP_ALL,
          unpublishedCategoriesShown: includeUnpublished,
          cacheDisabled: noCache,
        };
        CollectiblesPerfLogging.trackShopPerf(obj2);
      }
      const obj3 = { category: item.category, isDarkTheme: stateFromStores1, index: item.categoryIndex };
      tmp16 = guild(ShopCategory.ShopCategory, obj3);
    }
    return tmp16;
  }, items17);
  const callback1 = obj5.useCallback((kind) => kind.kind, []);
  const items18 = [categories1];
  const callback2 = obj5.useCallback((kind) => {
    kind = kind.kind;
    if (navigation.CATEGORY === kind) {
      return kind.category.skuId;
    } else if (tmp.SKELETON === kind) {
      const _HermesInternal = HermesInternal;
      return "" + kind.kind + "-" + kind.skeletonIndex;
    }
  }, []);
  memo7 = obj5.useMemo(
    () =>
      new Map(
        categories1.map((skuId, index) => {
          items = [skuId.skuId, index];
          return items;
        }),
      ),
    items18,
  );
  const tmp9Result = tmp9(bypassGoogleSkuSync.useState(0), 2);
  first1 = tmp9Result[0];
  closure_30 = tmp9Result[1];
  const items19 = [memo7, prefetchThrough, memo5.length, categories1.length];
  const items20 = [
    improvedLoading,
    screen,
    hasMore,
    isLoading,
    memo4.length,
    categories1.length,
    memo5.length,
    first1,
    prefetchThrough,
  ];
  const callback3 = obj5.useCallback((arg0) => {
    let num = 0;
    let bound1 = 0;
    let num2 = 0;
    const iter = arg0.viewableItems[Symbol.iterator]();
    while (iter !== undefined) {
      let item = iter.next().item;
      let tmp = item;
      if (item.kind === navigation.SKELETON) {
        let _Math2 = Math;
        let bound = Math.max(num, memo5.length);
        num = bound;
        bound1 = bound;
        let _Math3 = Math;
        num2 = Math.max(num2, categories1.length);
      } else {
        let _Math = Math;
        bound1 = Math.max(num, tmp.categoryIndex + 1);
        num = bound1;
        let categoryIndex = memo7.get(tmp.category.skuId);
        if (categoryIndex == null) {
          categoryIndex = tmp.categoryIndex;
        }
        num2 = Math.max(num2, categoryIndex + 1);
      }
      continue;
    }
    prefetchThrough(num2);
    closure_30((arg0) => Math.max(arg0, bound1));
  }, items19);
  const effect4 = obj5.useEffect(() => {
    let tmp = improvedLoading;
    if (improvedLoading) {
      tmp = screen === constants.SHOP_ALL;
    }
    if (tmp) {
      tmp = hasMore;
    }
    if (tmp) {
      tmp = !isLoading;
    }
    if (tmp) {
      tmp = memo4.length === categories1.length;
    }
    if (tmp) {
      tmp = memo5.length < first1 + closure_25;
    }
    if (tmp) {
      prefetchThrough(categories1.length);
    }
  }, items20);
  const items21 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const items22 = [sessionId, includeUnpublished, noCache];
  const callback4 = obj5.useCallback((shopBlock) => {
    let tmp = 0 !== shopBlock.index;
    if (!tmp) {
      tmp = closure_27.current[constants.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_27.current[constants.FEATURED_PAGE] = true;
      const obj2 = {
        sessionId,
        checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
        tab: constants.FEATURED_PAGE,
        unpublishedCategoriesShown: includeUnpublished,
        cacheDisabled: noCache,
      };
      CollectiblesPerfLogging.trackShopPerf(obj2);
    }
    const obj3 = { shopBlock: shopBlock.item, fetchShopHomeError: null };
    let tmp16 = fetchShopHomeError;
    if (fetchShopHomeError == null) {
      tmp16 = null;
    }
    obj3.fetchShopHomeError = tmp16;
    return guild(CollectiblesShopFeaturedPageDefault, obj3);
  }, items21);
  const callback5 = obj5.useCallback(() => {
    if (!closure_27.current[constants.ORBS]) {
      closure_27.current[constants.ORBS] = true;
      const obj2 = {
        sessionId,
        checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
        tab: constants.ORBS,
        unpublishedCategoriesShown: includeUnpublished,
        cacheDisabled: noCache,
      };
      CollectiblesPerfLogging.trackShopPerf(obj2);
    }
  }, items22);
  const callback6 = obj5.useCallback((type) => type.type, []);
  onNavigateAway(screen[43])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    if (improvedLoading) {
      if (tmp59) {
        if (tmp64) {
          const obj9 = { style: tmp12.spinner, size: "large" };
          return currentUserIfAvailable(noCache, obj9);
        }
      }
      tmp64 = false !== isFetchingShopHome || memo3.some((item) => !loadedGoogleSkuIds.has(item));
    } else {
      if (tmp59) {
        if (isFetchingShopHome) {
          const obj10 = { style: tmp12.spinner, size: "large" };
          return currentUserIfAvailable(noCache, obj10);
        }
      }
      if (tmp58) {
        const obj11 = { style: tmp12.spinner, size: "large" };
        return currentUserIfAvailable(noCache, obj11);
      }
    }
    let tmp65 = !improvedLoading;
    if (!improvedLoading) {
      tmp65 = first > 0;
    }
    if (tmp65) {
      tmp65 = false === isFetchingCategories;
    }
    if (tmp65) {
      tmp65 = 0 === categories.size;
    }
    if (tmp65) {
      tmp5(tmp2[44]).captureMessage("collectibles mobile shop loaded empty categories");
      const tmp5Result15 = tmp5(tmp2[44]);
    }
    if (null !== fetchError) {
      tmp5(tmp2[44]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
      const tmp5Result16 = tmp5(tmp2[44]);
    }
    const obj12 = { value: analyticsLocations, children: null };
    const obj13 = { newValue: tmp14, children: null };
    const obj14 = { style: tmp12.rootContainer, children: null };
    const obj15 = { skuIDs: [], activeSubscription: null, children: null };
    const obj16 = { value: improvedLoading, children: null };
    if (screen === tmp19.SHOP_ALL) {
      const obj17 = {
        data: memo6,
        renderItem: callback,
        getItemType: callback1,
        keyExtractor: null,
        initialScrollIndex: null,
        onViewableItemsChanged: null,
      };
      let tmp76;
      if (improvedLoading) {
        tmp76 = callback2;
      }
      obj17.keyExtractor = tmp76;
      obj17.initialScrollIndex = categoryIndex;
      let tmp77;
      if (improvedLoading) {
        tmp77 = callback3;
      }
      obj17.onViewableItemsChanged = tmp77;
      let tmp69Result = tmp68(tmp5(tmp2[48]), obj17);
      const tmp5Result17 = tmp5(tmp2[48]);
    } else if (screen === tmp19.ORBS) {
      const obj18 = { shopBlocks, fetchShopHomeError: null, onRenderFirstOrbsItem: null, getItemType: null };
      if (fetchShopHomeError == null) {
        fetchShopHomeError = null;
      }
      obj18.fetchShopHomeError = fetchShopHomeError;
      obj18.onRenderFirstOrbsItem = callback5;
      obj18.getItemType = callback6;
      tmp69Result = tmp68(tmp5(tmp2[49]), obj18);
      const tmp5Result18 = tmp5(tmp2[49]);
    } else {
      let tmp68Result2 = shopBlocks.length > 0;
      if (tmp68Result2) {
        const obj19 = { collectionSkuId: resolvedSkuIds };
        tmp68Result2 = tmp68(tmp(tmp2[51]).TwelveDaysHomeNagbar, obj19);
      }
      const obj20 = { children: null };
      const items23 = [tmp68Result2];
      const obj21 = { data: shopBlocks, renderItem: callback4, getItemType: callback6 };
      items23[1] = tmp68(tmp5(tmp2[48]), obj21);
      obj20.children = items23;
      tmp69Result = tmp69(tmp(tmp2[50]).CollectiblesCoachmarkScrollDismissProvider, obj20);
    }
    obj16.children = tmp69Result;
    obj15.children = currentUserIfAvailable(tmp(tmp2[47]).ImprovedMobileShopLoadingProvider, obj16);
    obj14.children = currentUserIfAvailable(tmp(tmp2[46]).NativePaymentContextProvider, obj15);
    const items24 = [currentUserIfAvailable(includeUnpublished, obj14), currentUserIfAvailable(tmp5(tmp2[52]), {})];
    obj13.children = items24;
    obj12.children = stateFromStores1(tmp(tmp2[45]).CollectiblesAnalyticsProvider, obj13);
    return currentUserIfAvailable(tmp(tmp2[32]).AnalyticsLocationProvider, obj12);
  }
  const tmp5Result14 = onNavigateAway(screen[40]);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };
