// === Module 16176: CollectiblesShopV2 ===

// Module 16176 (CollectiblesShopV2)
import c from "c" /* 576 */;
import SentryUtilsDefault from "SentryUtils" /* 1255 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4782 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4938 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7309 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8311 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9058 */;
import ImprovedMobileShopLoadingExperiment from "ImprovedMobileShopLoadingExperiment" /* 9078 */;
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 9090 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9398 */;
import takeWhileDefault from "takeWhile" /* 16183 */;
import MobileNitroUpsellInShopFeedExperiment from "MobileNitroUpsellInShopFeedExperiment" /* 16186 */;
import ShopCategory from "ShopCategory" /* 16188 */;
import ShopNitroUpsellBanner from "ShopNitroUpsellBanner" /* 16190 */;
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage" /* 16191 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5091 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserStore from "UserStore" /* 1390 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7263 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7305 */;

const MobileNitroUpsellInShopFeedExperimentDefault = MobileNitroUpsellInShopFeedExperiment;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FeedBlockRecord = fn(7298).FeedBlockRecord;
const CollectiblesShopConstants = fn(1087);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: map1, CollectiblesMobileShopScreen: closure_14, CollectibleShopTab: closure_15, SHOP_ALL_PAGE_SIZE } = CollectiblesShopConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_17, PaymentGateways: closure_18 } = Constants);
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const createStyles = fn(5092);
let closure_22 = createStyles.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
const constants5 = { CATEGORY: "category", NITRO_UPSELL: "nitro_upsell", SKELETON: "skeleton" };
let closure_24 = 2 * SHOP_ALL_PAGE_SIZE;
let closure_25 = Array.from({ length: 3 }, (arg0, skeletonIndex) => ({ kind: constants5.SKELETON, skeletonIndex }));
let closure_26 = [];
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsSource) => {
  const cResult = analyticsSource(screen[16]).c(167);
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  const improvedLoading = analyticsSource.improvedLoading;
  let obj = analyticsSource(screen[16]);
  const commonTriggerPoint = analyticsSource(screen[17]).useCommonTriggerPoint(analyticsSource(screen[18]).CollectiblesShopOpenTriggerPoint);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesCategoryStore];
    const fn = function _() {
      let num = lastSuccessfulFetch.lastSuccessfulFetch;
      if (num == null) {
        num = 0;
      }
      const items = [num];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj2 = analyticsSource(screen[17]);
  const first = improvedLoading(analyticsSource(screen[19]).useStateFromStoresArray(tmp5, tmp6), 1)[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [HOME];
    class N {
      constructor() {
        obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
        return obj;
      }
    }
    cResult[2] = items1;
    cResult[3] = N;
    let tmp10 = N;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = analyticsSource(screen[19]);
  const stateFromStoresObject = analyticsSource(screen[19]).useStateFromStoresObject(tmp9, tmp10);
  ({ bypassGoogleSkuSync, noCache } = stateFromStoresObject);
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  closure_22();
  if (storeFront != null) {
    const country = storeFront.country;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        obj = { sessionId: null };
        obj2 = analyticsSource(screen[20]);
        obj.sessionId = obj2.v4();
        return obj;
      }
    }
    cResult[4] = V;
    class N {
      constructor() {
        obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
        return obj;
      }
    }
  } else {
    class V {
      constructor() {
        obj = { sessionId: null };
        obj2 = analyticsSource(screen[20]);
        obj.sessionId = obj2.v4();
        return obj;
      }
    }
  }
  const tmp15 = onNavigateAway;
  const tmpResult3 = analyticsSource(screen[19]);
  const sessionId = onNavigateAway(screen[21])(tmp14).sessionId;
  let FEATURED_PAGE = screen;
  if (screen == null) {
    class V {
      constructor() {
        obj = { sessionId: null };
        obj2 = analyticsSource(screen[20]);
        obj.sessionId = obj2.v4();
        return obj;
      }
    }
    FEATURED_PAGE = constants.FEATURED_PAGE;
  }
  if (cResult[5] === sessionId) {
    class V {
      constructor() {
        obj = { sessionId: null };
        obj2 = analyticsSource(screen[20]);
        obj.sessionId = obj2.v4();
        return obj;
      }
    }
    if (cResult[8] !== country) {
      class V {
        constructor() {
          obj = { sessionId: null };
          obj2 = analyticsSource(screen[20]);
          obj.sessionId = obj2.v4();
          return obj;
        }
      }
      cResult[8] = country;
      class N {
        constructor() {
          obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
          return obj;
        }
      }
      cResult[9] = tmp19;
    } else {
      class V {
        constructor() {
          obj = { sessionId: null };
          obj2 = analyticsSource(screen[20]);
          obj.sessionId = obj2.v4();
          return obj;
        }
      }
      if (cResult[10] === improvedLoading) {
        class V {
          constructor() {
            obj = { sessionId: null };
            obj2 = analyticsSource(screen[20]);
            obj.sessionId = obj2.v4();
            return obj;
          }
        }
        const categories = tmp15(screen[22])(tmp21, tmp17).categories;
        class N {
          constructor() {
            obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
            return obj;
          }
        }
        if (screen === constants.ORBS) {
          class V {
            constructor() {
              obj = { sessionId: null };
              obj2 = analyticsSource(screen[20]);
              obj.sessionId = obj2.v4();
              return obj;
            }
          }
          HOME = constants2.ORBS;
        } else {
          class V {
            constructor() {
              obj = { sessionId: null };
              obj2 = analyticsSource(screen[20]);
              obj.sessionId = obj2.v4();
              return obj;
            }
          }
          HOME = constants2.HOME;
        }
        if (cResult[13] === includeUnpublished) {
          class V {
            constructor() {
              obj = { sessionId: null };
              obj2 = analyticsSource(screen[20]);
              obj.sessionId = obj2.v4();
              return obj;
            }
          }
          class N {
            constructor() {
              obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
              return obj;
            }
          }
          if (improvedLoading) {
            class V {
              constructor() {
                obj = { sessionId: null };
                obj2 = analyticsSource(screen[20]);
                obj.sessionId = obj2.v4();
                return obj;
              }
            }
          }
          const tmpResult4 = tmp(screen[23]);
          ({ shopBlocks, isFetchingShopHome, fetchShopHomeError } = tmp29(HOME, tmp27, tmp17, false, improvedLoading));
          if (improvedLoading) {
            class V {
              constructor() {
                obj = { sessionId: null };
                obj2 = analyticsSource(screen[20]);
                obj.sessionId = obj2.v4();
                return obj;
              }
            }
          }
          if (cResult[16] === includeUnpublished) {
            class V {
              constructor() {
                obj = { sessionId: null };
                obj2 = analyticsSource(screen[20]);
                obj.sessionId = obj2.v4();
                return obj;
              }
            }
          }
          let obj3 = { pageSize: SHOP_ALL_PAGE_SIZE, includeUnpublished, noCache, enabled: improvedLoading };
          cResult[16] = includeUnpublished;
          cResult[17] = noCache;
          cResult[18] = improvedLoading;
          cResult[19] = obj3;
          const tmp29Result = tmp29(HOME, tmp27, tmp17, false, improvedLoading);
        }
        let obj4 = { noCache, includeUnpublished, logPerf: true };
        cResult[13] = includeUnpublished;
        cResult[14] = noCache;
        cResult[15] = obj4;
        const tmp25 = tmp15(screen[22])(tmp21, tmp17);
      }
      const obj5 = { paymentGateway: null };
      class N {
        constructor() {
          obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
          return obj;
        }
      }
      obj5.paymentGateway = constants4.APPLE;
      const merged = Object.assign(tmp18);
      obj5.logPerf = true;
      obj5.skipFetch = improvedLoading;
      cResult[10] = improvedLoading;
      cResult[11] = tmp18;
      cResult[12] = obj5;
      tmp21 = obj5;
    }
  }
  const obj6 = { sessionId, tab: FEATURED_PAGE };
  cResult[5] = sessionId;
  cResult[6] = FEATURED_PAGE;
  cResult[7] = obj6;
  let tmp16 = onNavigateAway(screen[21])(tmp14);
}) : ((analyticsSource) => {
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
  const commonTriggerPoint = analyticsSource(screen[17]).useCommonTriggerPoint(analyticsSource(screen[18]).CollectiblesShopOpenTriggerPoint);
  let obj = analyticsSource(screen[17]);
  let items = [HOME];
  const first = improvedLoading(analyticsSource(screen[19]).useStateFromStoresArray(items, () => {
    let num = HOME.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let obj2 = analyticsSource(screen[19]);
  let items1 = [sessionId];
  const stateFromStoresObject = analyticsSource(screen[19]).useStateFromStoresObject(items1, () => ({ bypassGoogleSkuSync: sessionId.get("bypass_google_sku_sync"), noCache: sessionId.get("shop_disable_cache"), includeUnpublished: sessionId.get("shop_include_unpublished") }));
  const bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  const tmp7 = stateFromStores1();
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  let tmp10 = onNavigateAway(screen[21])(() => {
    const obj = { sessionId: analyticsSource(screen[20]).v4() };
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
  let obj3 = analyticsSource(screen[19]);
  if (null != country) {
    let obj6 = { countryCode: country };
    let obj7 = obj6;
  } else {
    obj7 = {};
  }
  const merged = Object.assign(obj7);
  obj5.logPerf = true;
  obj5.skipFetch = improvedLoading;
  const tmp12Result = onNavigateAway(screen[22])(obj5, memo);
  categories = tmp12Result.categories;
  isFetchingCategories = tmp12Result.isFetchingCategories;
  if (screen === isLoading.ORBS) {
    HOME = hasMore.ORBS;
  } else {
    HOME = hasMore.HOME;
  }
  let tmp12 = onNavigateAway(screen[22]);
  let tmp18 = improvedLoading;
  if (improvedLoading) {
    tmp18 = screen === tmp15.SHOP_ALL;
  }
  const maybeFetchCollectiblesShopHome = analyticsSource(screen[23]).useMaybeFetchCollectiblesShopHome(HOME, { noCache, includeUnpublished, logPerf: true }, memo, false, tmp18);
  shopBlocks = maybeFetchCollectiblesShopHome.shopBlocks;
  ({ isFetchingShopHome, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const obj9 = { pageSize: prefetchThrough, includeUnpublished, noCache, enabled: null };
  let tmp21 = improvedLoading;
  const obj8 = { noCache, includeUnpublished, logPerf: true };
  const tmpResult = analyticsSource(screen[23]);
  if (improvedLoading) {
    tmp21 = screen === tmp15.SHOP_ALL;
  }
  obj9.enabled = tmp21;
  const tmp9ResultResult = onNavigateAway(screen[24])(obj9);
  categories1 = tmp9ResultResult.categories;
  isLoading = tmp9ResultResult.isLoading;
  hasMore = tmp9ResultResult.hasMore;
  prefetchThrough = tmp9ResultResult.prefetchThrough;
  const items3 = [shopBlocks];
  const memo1 = obj4.useMemo(() => shopBlocks.find((item) => item instanceof fetchShopHomeError), items3);
  resolvedSkuIds = tmp9(tmp2[25])(memo1).resolvedSkuIds;
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
  const tmp9Result = onNavigateAway(screen[24]);
  const items5 = [shopBlocks];
  const items6 = [HOME];
  stateFromStores = analyticsSource(screen[19]).useStateFromStores(items5, () => CollectiblesShopHomeStore.getCategories(HOME), items6);
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
  const tmpResult8 = analyticsSource(screen[19]);
  let googleSkuIds = onNavigateAway(screen[29]).useGoogleSkuIds(memo2, true === isFetchingCategories, !improvedLoading);
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
  const tmp9Result9 = onNavigateAway(screen[29]);
  loadedGoogleSkuIds = onNavigateAway(screen[29]).useLoadedGoogleSkuIds(memo3);
  const tmp9Result10 = onNavigateAway(screen[29]);
  currentUserIfAvailable = analyticsSource(screen[30]).useCurrentUserIfAvailable();
  const tmpResult9 = analyticsSource(screen[30]);
  const currentUserWishlist = analyticsSource(screen[31]).useCurrentUserWishlist();
  const tmpResult10 = analyticsSource(screen[31]);
  const items9 = [categories];
  stateFromStores1 = analyticsSource(screen[19]).useStateFromStores(items9, () => analyticsSource(screen[32]).isThemeDark(categories.theme));
  const tmpResult11 = analyticsSource(screen[19]);
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
  analyticsLocations = onNavigateAway(screen[33])(items10).analyticsLocations;
  const tmp9Result11 = onNavigateAway(screen[33]);
  navigation = analyticsSource(screen[34]).useNavigation();
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
    const googleSkuIds = analyticsSource(screen[28]).getGoogleSkuIds(products.products);
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
  const tmpResult12 = analyticsSource(screen[34]);
  const tmp35 = Date.now() - first > categories1;
  categoryIndex = analyticsSource(screen[37]).useCollectiblesShopDeepLinkProps({ categories: memo5 }).categoryIndex;
  const tmpResult13 = analyticsSource(screen[37]);
  const tmp4Result = improvedLoading(bypassGoogleSkuSync.useState(analyticsSource(screen[38]).UNSAFE_isDismissibleContentDismissed(analyticsSource(screen[39]).DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL)), 2);
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
    AnalyticsUtilsDefault.track(constants3.COLLECTIBLES_SHOP_VIEWED, obj2);
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
  const tmpResult14 = analyticsSource(screen[38]);
  if (improvedLoading) {
    tmp48 = screen === tmp15.SHOP_ALL;
  }
  onNavigateAway(screen[45])({ enabled: tmp48, analyticsLocations, shopAnalyticsContext: tmp10 });
  const items20 = [sessionId, includeUnpublished, noCache, stateFromStores1, dismiss, tmp4Result3[1]];
  const callback1 = obj4.useCallback((item) => {
    item = item.item;
    if (item.kind === analyticsLocations.SKELETON) {
      let tmp18Result = constants2(ShopCategory.ShopCategorySkeleton, {});
    } else if (item.kind === tmp.NITRO_UPSELL) {
      const obj2 = { isDarkTheme: stateFromStores1, dismiss, buttonVariant: null };
      let GET_NITRO = closure_31;
      if (closure_31 == null) {
        GET_NITRO = MobileNitroUpsellInShopFeedExperiment.NitroUpsellBannerButtonVariant.GET_NITRO;
      }
      obj2.buttonVariant = GET_NITRO;
      tmp18Result = constants2(ShopNitroUpsellBanner.ShopNitroUpsellBanner, obj2);
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
      tmp18Result = constants2(ShopCategory.ShopCategory, obj4);
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
  const items22 = [memo8, prefetchThrough];
  const items23 = [improvedLoading, screen, hasMore, isLoading, memo4.length, categories1.length, memo5.length, first3, prefetchThrough];
  const callback4 = obj4.useCallback((arg0) => {
    let num = 0;
    let bound = 0;
    let num2 = 0;
    const iter = arg0.viewableItems[Symbol.iterator]();
    while (iter !== undefined) {
      let item = iter.next().item;
      let tmp = item;
      if (item.kind === analyticsLocations.CATEGORY) {
        let _Math = Math;
        bound = Math.max(num, tmp.categoryIndex + 1);
        num = bound;
        categoryIndex = memo8.get(tmp.category.skuId);
        if (categoryIndex == null) {
          categoryIndex = tmp.categoryIndex;
        }
        num2 = Math.max(num2, categoryIndex + 1);
      }
      continue;
    }
    prefetchThrough(num2);
    closure_37((arg0) => Math.max(arg0, bound));
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
    return constants2(CollectiblesShopFeaturedPageDefault, obj3);
  }, items24);
  const callback6 = obj4.useCallback(() => {
    if (!closure_34.current[constants.ORBS]) {
      closure_34.current[constants.ORBS] = true;
      const obj2 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: constants.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      CollectiblesPerfLogging.trackShopPerf(obj2);
    }
  }, items25);
  const callback7 = obj4.useCallback((type) => type.type, []);
  onNavigateAway(screen[49])({ currentScreen: screen });
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
      tmp9(tmp2[50]).captureMessage("collectibles mobile shop loaded empty categories");
      const tmp9Result13 = tmp9(tmp2[50]);
    }
    if (null !== fetchError) {
      tmp9(tmp2[50]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
      const tmp9Result14 = tmp9(tmp2[50]);
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
      let tmp72Result = tmp72(tmp9(tmp2[51]), obj18);
      const tmp9Result15 = tmp9(tmp2[51]);
    } else if (screen === tmp15.ORBS) {
      const obj19 = { shopBlocks, fetchShopHomeError: null, onRenderFirstOrbsItem: null, getItemType: null };
      if (fetchShopHomeError == null) {
        fetchShopHomeError = null;
      }
      obj19.fetchShopHomeError = fetchShopHomeError;
      obj19.onRenderFirstOrbsItem = callback6;
      obj19.getItemType = callback7;
      tmp72Result = tmp72(tmp9(tmp2[52]), obj19);
      const tmp9Result16 = tmp9(tmp2[52]);
    } else {
      const obj20 = { children: null };
      const obj21 = { data: shopBlocks, renderItem: callback5, getItemType: callback7 };
      obj20.children = tmp72(tmp9(tmp2[51]), obj21);
      tmp72Result = tmp72(tmp(tmp2[53]).CollectiblesCoachmarkScrollDismissProvider, obj20);
    }
    obj17.children = tmp72Result;
    obj16.children = loadedGoogleSkuIds(tmp(tmp2[55]).ImprovedMobileShopLoadingProvider, obj17);
    obj15.children = loadedGoogleSkuIds(tmp(tmp2[54]).NativePaymentContextProvider, obj16);
    const items26 = [loadedGoogleSkuIds(includeUnpublished, obj15), loadedGoogleSkuIds(tmp9(tmp2[56]), {})];
    obj14.children = items26;
    obj13.children = currentUserIfAvailable(tmp(tmp2[57]).CollectiblesAnalyticsProvider, obj14);
    return loadedGoogleSkuIds(tmp(tmp2[33]).AnalyticsLocationProvider, obj13);
  }
  const tmp9Result12 = onNavigateAway(screen[45]);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImprovedLoadingCollectiblesShopInternal(arg0) {
  const cResult = c.c(3);
  const isImprovedMobileShopLoadingEnabled = ImprovedMobileShopLoadingExperiment.useIsImprovedMobileShopLoadingEnabled("collectibles_shop_v2");
  if (cResult[0] === isImprovedMobileShopLoadingEnabled) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.improvedLoading = isImprovedMobileShopLoadingEnabled;
  const tmp5 = constants2(closure_27, obj3);
  cResult[0] = isImprovedMobileShopLoadingEnabled;
  cResult[1] = arg0;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : (function ImprovedLoadingCollectiblesShopInternal(arg0) {
  const obj2 = {};
  const isImprovedMobileShopLoadingEnabled = ImprovedMobileShopLoadingExperiment.useIsImprovedMobileShopLoadingEnabled("collectibles_shop_v2");
  const merged = Object.assign(arg0);
  obj2.improvedLoading = isImprovedMobileShopLoadingEnabled;
  return constants2(closure_27, obj2);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesShopV2(screen) {
  const cResult = nativePaymentsConnected(576).c(13);
  const obj = nativePaymentsConnected(576);
  const nativeIAPPayments = NativePaymentHooksDefault.useNativeIAPPayments();
  nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
  const storeFront = nativeIAPPayments.storeFront;
  closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores = nativePaymentsConnected(504).useStateFromStores(tmp6, tmp7);
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  if (!isStaffResult) {
    let isStaffPersonalResult;
    if (stateFromStores != null) {
      isStaffPersonalResult = stateFromStores.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  const tmpResult = nativePaymentsConnected(504);
  [tmp12, importDefault] = noop.useState(false);
  if (cResult[2] !== nativePaymentsConnected) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
    const items1 = [nativePaymentsConnected];
    cResult[2] = nativePaymentsConnected;
    cResult[3] = E;
    cResult[4] = items1;
    let tmp14 = items1;
  } else {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
    tmp14 = cResult[4];
  }
  const effect = noop.useEffect(E, tmp14);
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  nativePaymentsConnected(1382).isIOS() && !nativePaymentsConnected(5730).isStable && isStaffResult;
  if (!nativePaymentsConnected) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }
  if (tmp12) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }
  if (tmp12) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
    tmp(1382);
    const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj8.isIOS()}`;
    obj7.captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj8.isIOS()}`} isStable: ${tmp(5730).isStable}`);
  }
  if (screen.screen !== constants.ORBS) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
    if (!obj9.isMetaQuest()) {
      class E {
        constructor() {
          if (closure_0) {
            return;
          } else {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 10000;
            closure_0 = setTimeout(() => {
              closure_1_1(true);
            }, 10000);
            return () => clearTimeout(closure_0);
          }
        }
      }
      const obj3 = {};
      const merged = Object.assign(screen);
      obj3.storeFront = storeFront;
      obj3.screen = screen.screen;
      const tmp25 = closure_20(closure_28, obj3);
      cResult[10] = screen;
      cResult[11] = storeFront;
      cResult[12] = tmp25;
    }
  }
  if (cResult[7] === screen) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }
  const obj4 = {};
  const merged1 = Object.assign(screen);
  obj4.storeFront = storeFront;
  obj4.screen = screen.screen;
  obj4.improvedLoading = false;
  const tmp27 = closure_20(closure_27, obj4);
  cResult[7] = screen;
  cResult[8] = storeFront;
  cResult[9] = tmp27;
  const tmpResult3 = nativePaymentsConnected(1382);
}) : (function CollectiblesShopV2(screen) {
  const nativeIAPPayments = NativePaymentHooksDefault.useNativeIAPPayments();
  const nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
  const storeFront = nativeIAPPayments.storeFront;
  const tmp4 = closure_22();
  const items = [UserStore];
  const stateFromStores = nativePaymentsConnected(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  if (!isStaffResult) {
    let isStaffPersonalResult;
    if (stateFromStores != null) {
      isStaffPersonalResult = stateFromStores.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  const obj2 = nativePaymentsConnected(504);
  [tmp9, importDefault] = noop.useState(false);
  const items1 = [nativePaymentsConnected];
  const effect = noop.useEffect(() => {
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        closure_1_1(true);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const tmp5Result = nativePaymentsConnected(1382);
  if (!nativePaymentsConnected) {
    if (!tmp11) {
      if (!tmp9) {
        const obj3 = { style: tmp4.spinner, size: "large" };
        return closure_20(closure_5, obj3);
      }
    }
  }
  if (tmp9) {
    tmp5(1382);
    const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
    SentryUtilsDefault.captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${tmp5(5730).isStable}`);
    const tmpResult = SentryUtilsDefault;
  }
  if (screen.screen !== constants.ORBS) {
    if (!tmp5Result4.isMetaQuest()) {
      const obj4 = {};
      const merged = Object.assign(screen);
      obj4.storeFront = storeFront;
      obj4.screen = screen.screen;
      let tmp21 = closure_20(closure_28, obj4);
    }
    tmp5Result4 = tmp5(1628);
  }
  const obj5 = {};
  const merged1 = Object.assign(screen);
  obj5.storeFront = storeFront;
  screen = screen.screen;
  obj5.screen = screen;
  obj5.improvedLoading = false;
  tmp21 = closure_20(closure_27, obj5);
  tmp11 = nativePaymentsConnected(1382).isIOS() && !nativePaymentsConnected(5730).isStable && isStaffResult;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default tmp6;
export const CollectiblesShopV2 = tmp6;