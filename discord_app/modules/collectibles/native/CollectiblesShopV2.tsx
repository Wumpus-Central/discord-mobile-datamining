// === Module 17816: CollectiblesShopV2 ===

// Module 17816 (CollectiblesShopV2)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2059 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7763 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8758 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9551 */;
import ImprovedMobileShopLoadingExperiment from "ImprovedMobileShopLoadingExperiment" /* 9569 */;
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 9582 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9910 */;
import takeWhileDefault from "takeWhile" /* 17823 */;
import MobileNitroUpsellInShopFeedExperiment from "MobileNitroUpsellInShopFeedExperiment" /* 17826 */;
import ShopCategory from "ShopCategory" /* 17828 */;
import ShopNitroUpsellBanner from "ShopNitroUpsellBanner" /* 17830 */;
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage" /* 17831 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5627 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1383 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 5688 */;

const MobileNitroUpsellInShopFeedExperimentDefault = MobileNitroUpsellInShopFeedExperiment;

require = fn;
function ImprovedLoadingCollectiblesShopInternal(arg0) {
  const obj2 = {};
  const isImprovedMobileShopLoadingEnabled = ImprovedMobileShopLoadingExperiment.useIsImprovedMobileShopLoadingEnabled("collectibles_shop_v2");
  const merged = Object.assign(arg0);
  obj2.improvedLoading = isImprovedMobileShopLoadingEnabled;
  return dependencyMap(CollectiblesShopInternal, obj2);
}
class CollectiblesShopV2 {
  constructor(arg0) {
    tmp2 = closure_2;
    tmp = closure_1;
    obj = closure_1(closure_2[27]);
    nativeIAPPayments = obj.useNativeIAPPayments();
    nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    storeFront = nativeIAPPayments.storeFront;
    tmp5 = nativePaymentsConnected;
    tmp4 = closure_22();
    obj2 = nativePaymentsConnected(closure_2[17]);
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
    tmp5Result = tmp5(tmp2[25]);
    tmp11 = tmp5Result.isIOS() && !tmp5(tmp2[56]).isStable && isStaffResult;
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
      tmpResult = tmp(tmp2[48]);
      tmp5Result1 = tmp5(tmp2[25]);
      str = "collectibles mobile shop failed to connect to native payments isIOS: ";
      text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
      str2 = " isStable: ";
      captureMessageResult = tmpResult.captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${tmp5(tmp2[56]).isStable}`);
    }
    screen = global;
    if (global.screen !== closure_14.ORBS) {
      tmp5Result2 = tmp5(tmp2[57]);
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
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FeedBlockRecord = fn(7752).FeedBlockRecord;
const CollectiblesShopConstants = fn(1074);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: map1, CollectiblesMobileShopScreen: closure_14, CollectibleShopTab: closure_15, SHOP_ALL_PAGE_SIZE } = CollectiblesShopConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_17, PaymentGateways: closure_18 } = Constants);
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const createStyles = fn(5014);
const __initData2 = createStyles.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
const constants3 = { CATEGORY: "category", NITRO_UPSELL: "nitro_upsell", SKELETON: "skeleton" };
let closure_24 = 2 * SHOP_ALL_PAGE_SIZE;
let closure_25 = Array.from({ length: 3 }, (arg0, skeletonIndex) => ({ kind: constants3.SKELETON, skeletonIndex }));
let closure_26 = [];
function CollectiblesShopInternal(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  const improvedLoading = analyticsSource.improvedLoading;
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
  let categoryIndex;
  let first1;
  closure_29 = undefined;
  let first2;
  closure_31 = undefined;
  let dismiss;
  let memo6;
  closure_34 = undefined;
  let memo8;
  let first3;
  closure_37 = undefined;
  const commonTriggerPoint = analyticsSource(screen[15]).useCommonTriggerPoint(analyticsSource(screen[16]).CollectiblesShopOpenTriggerPoint);
  let obj = analyticsSource(screen[15]);
  let items = [HOME];
  const first = improvedLoading(analyticsSource(screen[17]).useStateFromStoresArray(items, () => {
    let num = HOME.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let obj2 = analyticsSource(screen[17]);
  let items1 = [sessionId];
  const stateFromStoresObject = analyticsSource(screen[17]).useStateFromStoresObject(items1, () => ({ bypassGoogleSkuSync: sessionId.get("bypass_google_sku_sync"), noCache: sessionId.get("shop_disable_cache"), includeUnpublished: sessionId.get("shop_include_unpublished") }));
  const bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  let tmp7 = stateFromStores1();
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  let tmp10 = onNavigateAway(screen[18])(() => {
    const obj = { sessionId: analyticsSource(screen[19]).v4() };
    return obj;
  });
  sessionId = tmp10.sessionId;
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
  const obj5 = { paymentGateway: stateFromStores.APPLE };
  let obj3 = analyticsSource(screen[17]);
  if (null != country) {
    let obj6 = { countryCode: country };
    let obj7 = obj6;
  } else {
    obj7 = {};
  }
  const merged = Object.assign(obj7);
  obj5.logPerf = true;
  obj5.skipFetch = improvedLoading;
  const tmp12Result = onNavigateAway(screen[20])(obj5, memo);
  categories = tmp12Result.categories;
  isFetchingCategories = tmp12Result.isFetchingCategories;
  if (screen === isLoading.ORBS) {
    HOME = hasMore.ORBS;
  } else {
    HOME = hasMore.HOME;
  }
  let tmp12 = onNavigateAway(screen[20]);
  let tmp18 = improvedLoading;
  if (improvedLoading) {
    tmp18 = screen === tmp15.SHOP_ALL;
  }
  const maybeFetchCollectiblesShopHome = analyticsSource(screen[21]).useMaybeFetchCollectiblesShopHome(HOME, { noCache, includeUnpublished, logPerf: true }, memo, false, tmp18);
  shopBlocks = maybeFetchCollectiblesShopHome.shopBlocks;
  ({ isFetchingShopHome, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const obj9 = { pageSize: prefetchThrough, includeUnpublished, noCache, enabled: null };
  let tmp21 = improvedLoading;
  const obj8 = { noCache, includeUnpublished, logPerf: true };
  const tmpResult = analyticsSource(screen[21]);
  if (improvedLoading) {
    tmp21 = screen === tmp15.SHOP_ALL;
  }
  obj9.enabled = tmp21;
  const tmp9ResultResult = onNavigateAway(screen[22])(obj9);
  categories1 = tmp9ResultResult.categories;
  isLoading = tmp9ResultResult.isLoading;
  hasMore = tmp9ResultResult.hasMore;
  prefetchThrough = tmp9ResultResult.prefetchThrough;
  const items3 = [shopBlocks];
  const memo1 = obj4.useMemo(() => shopBlocks.find((item) => item instanceof fetchShopHomeError), items3);
  resolvedSkuIds = tmp9(tmp2[23])(memo1).resolvedSkuIds;
  const items4 = [improvedLoading, screen, resolvedSkuIds];
  const effect = obj4.useEffect(() => {
    let tmp = improvedLoading;
    if (improvedLoading) {
      tmp = screen !== constants.SHOP_ALL;
    }
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(resolvedSkuIds);
    }
  }, items4);
  const tmp9Result = onNavigateAway(screen[22]);
  const items5 = [shopBlocks];
  const items6 = [HOME];
  stateFromStores = analyticsSource(screen[17]).useStateFromStores(items5, () => CollectiblesShopHomeStore.getCategories(HOME), items6);
  const items7 = [improvedLoading, categories, isFetchingCategories];
  const memo2 = obj4.useMemo(() => {
    if (!improvedLoading) {
      if (true !== isFetchingCategories) {
        if (false !== obj.isAndroid()) {
          const items = [];
          HermesBuiltin.arraySpread(categories.values(), 0);
          const googleSkuIds = collectibles_CollectiblesUtils.getGoogleSkuIds(items.flatMap((products) => products.products));
          const tmp2Result = collectibles_CollectiblesUtils;
        }
        return [];
      }
    }
  }, items7);
  const tmpResult8 = analyticsSource(screen[17]);
  let googleSkuIds = onNavigateAway(screen[27]).useGoogleSkuIds(memo2, true === isFetchingCategories, !improvedLoading);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  const items8 = [improvedLoading, screen, categories1, stateFromStores];
  const memo3 = obj4.useMemo(() => {
    if (improvedLoading) {
      return collectibles_CollectiblesUtils.getGoogleSkuIds(screen === constants.SHOP_ALL ? categories1 : stateFromStores.flatMap((products) => products.products));
    } else {
      return closure_26;
    }
  }, items8);
  const tmp9Result9 = onNavigateAway(screen[27]);
  loadedGoogleSkuIds = onNavigateAway(screen[27]).useLoadedGoogleSkuIds(memo3);
  const tmp9Result10 = onNavigateAway(screen[27]);
  currentUserIfAvailable = analyticsSource(screen[28]).useCurrentUserIfAvailable();
  const tmpResult9 = analyticsSource(screen[28]);
  const currentUserWishlist = analyticsSource(screen[29]).useCurrentUserWishlist();
  const tmpResult10 = analyticsSource(screen[29]);
  const items9 = [categories];
  stateFromStores1 = analyticsSource(screen[17]).useStateFromStores(items9, () => analyticsSource(screen[30]).isThemeDark(categories.theme));
  const tmpResult11 = analyticsSource(screen[17]);
  const items10 = [onNavigateAway(screen[14]).COLLECTIBLES_SHOP, ];
  if (isLoading.SHOP_ALL === screen) {
    let COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[14]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (tmp15.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[14]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp15.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[14]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items10[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = onNavigateAway(screen[31])(items10).analyticsLocations;
  const tmp9Result11 = onNavigateAway(screen[31]);
  navigation = analyticsSource(screen[32]).useNavigation();
  const items11 = [navigation, onNavigateAway];
  const effect1 = obj4.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if ("RESET" !== data.data.action.type) {
      if (onNavigateAway != null) {
        tmp();
      }
    }
  }), items11);
  const items12 = [categories1, loadedGoogleSkuIds];
  memo4 = obj4.useMemo(() => takeWhileDefault(categories1, (products) => {
    const googleSkuIds = analyticsSource(screen[26]).getGoogleSkuIds(products.products);
    return googleSkuIds.every((item) => set.has(item));
  }), items12);
  const items13 = [improvedLoading, memo4, categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  memo5 = obj4.useMemo(() => {
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
      const items = [];
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
  const tmpResult12 = analyticsSource(screen[32]);
  const tmp35 = Date.now() - first > categories1;
  categoryIndex = analyticsSource(screen[35]).useCollectiblesShopDeepLinkProps({ categories: memo5 }).categoryIndex;
  const tmpResult13 = analyticsSource(screen[35]);
  const tmp4Result = improvedLoading(bypassGoogleSkuSync.useState(analyticsSource(screen[36]).UNSAFE_isDismissibleContentDismissed(analyticsSource(screen[37]).DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL)), 2);
  first1 = tmp4Result[0];
  closure_29 = tmp38;
  const items14 = [currentUserIfAvailable, screen, first1];
  const tmp4Result3 = improvedLoading(bypassGoogleSkuSync.useMemo(() => {
    if (!obj.canUseShopDiscounts(currentUserIfAvailable)) {
      if (screen === constants.SHOP_ALL) {
        if (!first1) {
          const config = MobileNitroUpsellInShopFeedExperimentDefault.getConfig({ location: "CollectiblesShopV2ShopAll" });
          const items = [, ];
          ({ enabled: arr[0], buttonVariant: arr[1] } = config);
          return items;
        }
      }
    }
    const items1 = [false, null];
    return items1;
  }, items14), 2);
  first2 = tmp4Result3[0];
  closure_31 = tmp41;
  const items15 = [tmp4Result[1]];
  dismiss = obj4.useCallback(() => {
    closure_29(true);
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL, { dismissAction: ContentDismissActionType.USER_DISMISS });
  }, items15);
  const items16 = [memo5, first2, improvedLoading, isLoading, hasMore, memo4.length, categories1.length];
  memo6 = obj4.useMemo(() => {
    const mapped = memo5.map((category, categoryIndex) => ({ kind: constants.CATEGORY, category, categoryIndex }));
    let tmp = first2;
    if (first2) {
      tmp = mapped.length > 0;
    }
    if (tmp) {
      const obj = { kind: analyticsLocations.NITRO_UPSELL };
      mapped.splice(1, 0, obj);
    }
    let tmp4 = improvedLoading;
    if (improvedLoading) {
      let tmp5 = isLoading;
      if (!isLoading) {
        tmp5 = hasMore;
      }
      if (!tmp5) {
        tmp5 = memo4.length < categories1.length;
      }
      tmp4 = tmp5;
    }
    if (tmp4) {
      const push = mapped.push;
      const items = [];
      HermesBuiltin.arraySpread(closure_25, 0);
      HermesBuiltin.apply(items, mapped);
    }
    return mapped;
  }, items16);
  const items17 = [categoryIndex, memo6];
  const memo7 = obj4.useMemo(() => {
    if (null != categoryIndex) {
      let sum = categoryIndex;
      if (memo6.some((kind) => kind.kind === constants.NITRO_UPSELL)) {
        sum = categoryIndex;
        if (categoryIndex >= 1) {
          sum = categoryIndex + 1;
        }
      }
      return sum;
    }
  }, items17);
  closure_34 = obj4.useRef({ [tmp15.SHOP_ALL]: false, [tmp15.FEATURED_PAGE]: false, [tmp15.ORBS]: false });
  const items18 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect2 = obj4.useEffect(() => {
    let FEATURED_PAGE = screen;
    let tmp = null == screen;
    if (!tmp) {
      tmp = FEATURED_PAGE === constants.FEATURED_PAGE;
    }
    if (!tmp) {
      tmp = FEATURED_PAGE === constants.SHOP_ALL;
    }
    const obj2 = { location_stack: analyticsLocations, page_session_id: sessionId, source: analyticsSource, page_type: null };
    let str = "home";
    if (!tmp) {
      str = FEATURED_PAGE;
    }
    obj2.page_type = str;
    AnalyticsUtilsDefault.track(constants2.COLLECTIBLES_SHOP_VIEWED, obj2);
    const obj4 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
    if (FEATURED_PAGE == null) {
      FEATURED_PAGE = constants.FEATURED_PAGE;
    }
    obj4.tab = FEATURED_PAGE;
    obj4.unpublishedCategoriesShown = includeUnpublished;
    obj4.cacheDisabled = noCache;
    CollectiblesPerfLogging.trackShopPerf(obj4);
  }, items18);
  const items19 = [currentUserIfAvailable];
  const effect3 = obj4.useEffect(() => {
    if (null != currentUserIfAvailable) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items19);
  let tmp48 = improvedLoading;
  const tmpResult14 = analyticsSource(screen[36]);
  if (improvedLoading) {
    tmp48 = screen === tmp15.SHOP_ALL;
  }
  onNavigateAway(screen[43])({ enabled: tmp48, analyticsLocations, shopAnalyticsContext: tmp10 });
  const items20 = [sessionId, includeUnpublished, noCache, stateFromStores1, dismiss, tmp4Result3[1]];
  const callback1 = obj4.useCallback((item) => {
    item = item.item;
    if (item.kind === analyticsLocations.SKELETON) {
      let tmp18Result = dependencyMap(ShopCategory.ShopCategorySkeleton, {});
    } else if (item.kind === tmp.NITRO_UPSELL) {
      const obj2 = { isDarkTheme: stateFromStores1, dismiss, buttonVariant: null };
      let GET_NITRO = closure_31;
      if (closure_31 == null) {
        GET_NITRO = MobileNitroUpsellInShopFeedExperiment.NitroUpsellBannerButtonVariant.GET_NITRO;
      }
      obj2.buttonVariant = GET_NITRO;
      tmp18Result = dependencyMap(ShopNitroUpsellBanner.ShopNitroUpsellBanner, obj2);
    } else {
      let tmp4 = 0 !== item.categoryIndex;
      if (!tmp4) {
        tmp4 = closure_34.current[constants.SHOP_ALL];
      }
      if (!tmp4) {
        closure_34.current[constants.SHOP_ALL] = true;
        const obj3 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: constants.SHOP_ALL, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
        CollectiblesPerfLogging.trackShopPerf(obj3);
      }
      const obj4 = { category: item.category, isDarkTheme: stateFromStores1, index: item.categoryIndex };
      tmp18Result = dependencyMap(ShopCategory.ShopCategory, obj4);
    }
    return tmp18Result;
  }, items20);
  const callback2 = obj4.useCallback((kind) => kind.kind, []);
  const items21 = [categories1];
  const callback3 = obj4.useCallback((kind) => {
    kind = kind.kind;
    if (analyticsLocations.CATEGORY === kind) {
      return kind.category.skuId;
    } else if (tmp.SKELETON === kind) {
      const _HermesInternal = HermesInternal;
      return "" + kind.kind + "-" + kind.skeletonIndex;
    } else {
      return kind.kind;
    }
  }, []);
  memo8 = obj4.useMemo(() => new Map(categories1.map((skuId, index) => {
    const items = [skuId.skuId, index];
    return items;
  })), items21);
  const tmp4Result4 = improvedLoading(bypassGoogleSkuSync.useState(0), 2);
  first3 = tmp4Result4[0];
  closure_37 = tmp4Result4[1];
  const items22 = [memo8, prefetchThrough, memo5.length, categories1.length];
  const items23 = [improvedLoading, screen, hasMore, isLoading, memo4.length, categories1.length, memo5.length, first3, prefetchThrough];
  const callback4 = obj4.useCallback((arg0) => {
    let num = 0;
    let bound1 = 0;
    let num2 = 0;
    const iter = arg0.viewableItems[Symbol.iterator]();
    while (iter !== undefined) {
      let item = iter.next().item;
      let tmp = item;
      if (item.kind === analyticsLocations.SKELETON) {
        let _Math = Math;
        let bound = Math.max(num, memo5.length);
        num = bound;
        bound1 = bound;
        let _Math2 = Math;
        num2 = Math.max(num2, categories1.length);
      } else if (tmp.kind === tmp2.CATEGORY) {
        let _Math3 = Math;
        bound1 = Math.max(num, tmp.categoryIndex + 1);
        num = bound1;
        categoryIndex = memo8.get(tmp.category.skuId);
        if (categoryIndex == null) {
          categoryIndex = tmp.categoryIndex;
        }
        num2 = Math.max(num2, categoryIndex + 1);
      }
      continue;
    }
    prefetchThrough(num2);
    closure_37((arg0) => Math.max(arg0, bound1));
  }, items22);
  const effect4 = obj4.useEffect(() => {
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
      tmp = memo5.length < first3 + closure_24;
    }
    if (tmp) {
      prefetchThrough(categories1.length);
    }
  }, items23);
  const items24 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const items25 = [sessionId, includeUnpublished, noCache];
  const callback5 = obj4.useCallback((shopBlock) => {
    let tmp = 0 !== shopBlock.index;
    if (!tmp) {
      tmp = closure_34.current[constants.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_34.current[constants.FEATURED_PAGE] = true;
      const obj2 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: constants.FEATURED_PAGE, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      CollectiblesPerfLogging.trackShopPerf(obj2);
    }
    const obj3 = { shopBlock: shopBlock.item, fetchShopHomeError: null };
    let tmp16 = fetchShopHomeError;
    if (fetchShopHomeError == null) {
      tmp16 = null;
    }
    obj3.fetchShopHomeError = tmp16;
    return dependencyMap(CollectiblesShopFeaturedPageDefault, obj3);
  }, items24);
  const callback6 = obj4.useCallback(() => {
    if (!closure_34.current[constants.ORBS]) {
      closure_34.current[constants.ORBS] = true;
      const obj2 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: constants.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      CollectiblesPerfLogging.trackShopPerf(obj2);
    }
  }, items25);
  const callback7 = obj4.useCallback((type) => type.type, []);
  onNavigateAway(screen[47])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    if (improvedLoading) {
      if (tmp63) {
        if (tmp68) {
          const obj10 = { style: tmp7.spinner, size: "large" };
          return loadedGoogleSkuIds(noCache, obj10);
        }
      }
      tmp68 = false !== isFetchingShopHome || memo3.some((item) => !loadedGoogleSkuIds.has(item));
    } else {
      if (tmp63) {
        if (isFetchingShopHome) {
          const obj11 = { style: tmp7.spinner, size: "large" };
          return loadedGoogleSkuIds(noCache, obj11);
        }
      }
      if (tmp62) {
        const obj12 = { style: tmp7.spinner, size: "large" };
        return loadedGoogleSkuIds(noCache, obj12);
      }
    }
    let tmp69 = !improvedLoading;
    if (!improvedLoading) {
      tmp69 = first > 0;
    }
    if (tmp69) {
      tmp69 = false === isFetchingCategories;
    }
    if (tmp69) {
      tmp69 = 0 === categories.size;
    }
    if (tmp69) {
      tmp9(tmp2[48]).captureMessage("collectibles mobile shop loaded empty categories");
      const tmp9Result13 = tmp9(tmp2[48]);
    }
    if (null !== fetchError) {
      tmp9(tmp2[48]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
      const tmp9Result14 = tmp9(tmp2[48]);
    }
    const obj13 = { value: analyticsLocations, children: null };
    const obj14 = { newValue: tmp10, children: null };
    const obj15 = { style: tmp7.rootContainer, children: null };
    const obj16 = { skuIDs: [], activeSubscription: null, children: null };
    const obj17 = { value: improvedLoading, children: null };
    if (screen === tmp15.SHOP_ALL) {
      const obj18 = { data: memo6, renderItem: callback1, getItemType: callback2, keyExtractor: null, initialScrollIndex: null, onViewableItemsChanged: null };
      let tmp78;
      if (improvedLoading) {
        tmp78 = callback3;
      }
      obj18.keyExtractor = tmp78;
      obj18.initialScrollIndex = memo7;
      let tmp79;
      if (improvedLoading) {
        tmp79 = callback4;
      }
      obj18.onViewableItemsChanged = tmp79;
      let tmp72Result = tmp72(tmp9(tmp2[52]), obj18);
      const tmp9Result15 = tmp9(tmp2[52]);
    } else if (screen === tmp15.ORBS) {
      const obj19 = { shopBlocks, fetchShopHomeError: null, onRenderFirstOrbsItem: null, getItemType: null };
      if (fetchShopHomeError == null) {
        fetchShopHomeError = null;
      }
      obj19.fetchShopHomeError = fetchShopHomeError;
      obj19.onRenderFirstOrbsItem = callback6;
      obj19.getItemType = callback7;
      tmp72Result = tmp72(tmp9(tmp2[53]), obj19);
      const tmp9Result16 = tmp9(tmp2[53]);
    } else {
      const obj20 = { children: null };
      const obj21 = { data: shopBlocks, renderItem: callback5, getItemType: callback7 };
      obj20.children = tmp72(tmp9(tmp2[52]), obj21);
      tmp72Result = tmp72(tmp(tmp2[54]).CollectiblesCoachmarkScrollDismissProvider, obj20);
    }
    obj17.children = tmp72Result;
    obj16.children = loadedGoogleSkuIds(tmp(tmp2[51]).ImprovedMobileShopLoadingProvider, obj17);
    obj15.children = loadedGoogleSkuIds(tmp(tmp2[50]).NativePaymentContextProvider, obj16);
    const items26 = [loadedGoogleSkuIds(includeUnpublished, obj15), loadedGoogleSkuIds(tmp9(tmp2[55]), {})];
    obj14.children = items26;
    obj13.children = currentUserIfAvailable(tmp(tmp2[49]).CollectiblesAnalyticsProvider, obj14);
    return loadedGoogleSkuIds(tmp(tmp2[31]).AnalyticsLocationProvider, obj13);
  }
  const tmp9Result12 = onNavigateAway(screen[43]);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };