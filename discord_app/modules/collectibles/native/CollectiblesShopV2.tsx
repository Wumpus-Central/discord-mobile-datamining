// === Module 16214: CollectiblesShopV2 ===

// Module 16214 (CollectiblesShopV2)
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4649 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7919 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8535 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9207 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9561 */;
import MobileNitroUpsellInShopFeedExperiment from "MobileNitroUpsellInShopFeedExperiment" /* 16219 */;
import ShopNitroUpsellBanner from "ShopNitroUpsellBanner" /* 16220 */;
import ShopCategory from "ShopCategory" /* 16221 */;
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage" /* 16223 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4828 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserStore from "UserStore" /* 1372 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7872 */;

const MobileNitroUpsellInShopFeedExperimentDefault = MobileNitroUpsellInShopFeedExperiment;

require = fn;
class CollectiblesShopV2 {
  constructor(arg0) {
    tmp2 = closure_2;
    tmp = closure_1;
    obj = closure_1(closure_2[22]);
    nativeIAPPayments = obj.useNativeIAPPayments();
    nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    tmp5 = nativePaymentsConnected;
    tmp4 = closure_19();
    obj2 = nativePaymentsConnected(closure_2[15]);
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
    tmp5Result = tmp5(tmp2[20]);
    tmp11 = tmp5Result.isIOS() && !tmp5(tmp2[49]).isStable && isStaffResult;
    if (!nativePaymentsConnected) {
      if (!tmp11) {
        if (!tmp9) {
          tmp12 = jsx;
          tmp13 = ActivityIndicator;
          obj1 = { style: null, size: "large" };
          obj1.style = tmp4.spinner;
          tmp14 = jsx(ActivityIndicator, obj1);
        }
        return tmp14;
      }
    }
    if (tmp9) {
      tmp9 = !nativePaymentsConnected;
    }
    if (tmp9) {
      tmpResult = tmp(tmp2[42]);
      tmp5Result1 = tmp5(tmp2[20]);
      str = "collectibles mobile shop failed to connect to native payments isIOS: ";
      text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
      str2 = " isStable: ";
      captureMessageResult = tmpResult.captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${tmp5(tmp2[49]).isStable}`);
    }
    obj9 = {};
    merged = Object.assign(global);
    obj9.storeFront = nativeIAPPayments.storeFront;
    obj9.screen = global.screen;
    tmp14 = jsx(CollectiblesShopInternal, obj9);
    return;
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1076);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_11, CollectiblesMobileShopScreen: closure_12, CollectibleShopTab: map1 } = CollectiblesShopConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, PaymentGateways: closure_15 } = Constants);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4829);
let closure_19 = createStyles.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
let closure_20 = { CATEGORY: "category", NITRO_UPSELL: "nitro_upsell" };
function CollectiblesShopInternal(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  let bypassGoogleSkuSync;
  let sessionId;
  let categories;
  let isFetchingCategories;
  fetchShopHomeError = undefined;
  let isFetchingGoogleSkus;
  let currentUserIfAvailable;
  let stateFromStores;
  let analyticsLocations;
  let navigation;
  let memo2;
  let categoryIndex;
  let first1;
  closure_18 = undefined;
  let first2;
  constants = undefined;
  let dismiss;
  let memo3;
  closure_23 = undefined;
  const commonTriggerPoint = analyticsSource(screen[13]).useCommonTriggerPoint(analyticsSource(screen[14]).CollectiblesShopOpenTriggerPoint);
  let obj = analyticsSource(screen[13]);
  let items = [isFetchingGoogleSkus];
  const first = bypassGoogleSkuSync(analyticsSource(screen[15]).useStateFromStoresArray(items, () => {
    let num = isFetchingGoogleSkus.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let obj2 = analyticsSource(screen[15]);
  let items1 = [categories];
  const stateFromStoresObject = analyticsSource(screen[15]).useStateFromStoresObject(items1, () => ({ bypassGoogleSkuSync: categories.get("bypass_google_sku_sync"), noCache: categories.get("shop_disable_cache"), includeUnpublished: categories.get("shop_include_unpublished") }));
  bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  let spinner = first2();
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  const tmp9 = onNavigateAway(screen[16])(() => {
    const obj = { sessionId: analyticsSource(screen[17]).v4() };
    return obj;
  });
  sessionId = tmp9.sessionId;
  const items2 = [sessionId, screen];
  const memo = noCache.useMemo(() => {
    const obj = { sessionId, tab: null };
    let FEATURED_PAGE = screen;
    if (screen == null) {
      FEATURED_PAGE = constants.FEATURED_PAGE;
    }
    obj.tab = FEATURED_PAGE;
    return obj;
  }, items2);
  const obj5 = { paymentGateway: memo2.APPLE };
  let obj3 = analyticsSource(screen[15]);
  if (null != country) {
    const obj6 = { countryCode: country };
    let obj7 = obj6;
  } else {
    obj7 = {};
  }
  const merged = Object.assign(obj7);
  obj5.logPerf = true;
  const tmp11Result = onNavigateAway(screen[18])(obj5, memo);
  categories = tmp11Result.categories;
  isFetchingCategories = tmp11Result.isFetchingCategories;
  const tmp11 = onNavigateAway(screen[18]);
  if (screen === stateFromStores.ORBS) {
    let HOME = analyticsLocations.ORBS;
  } else {
    HOME = analyticsLocations.HOME;
  }
  const maybeFetchCollectiblesShopHome = analyticsSource(screen[19]).useMaybeFetchCollectiblesShopHome(HOME, { noCache, includeUnpublished, logPerf: true }, memo);
  ({ shopBlocks, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const items3 = [categories, isFetchingCategories];
  const memo1 = obj4.useMemo(() => {
    if (true !== isFetchingCategories) {
      if (false !== obj.isAndroid()) {
        let items = [];
        const values = categories.values();
        for (const item10017 of values) {
          let products = item10017.products;
          let item = products.forEach((googleSkuIds) => {
            let tmp = undefined !== googleSkuIds.googleSkuIds;
            if (tmp) {
              tmp = null !== googleSkuIds.googleSkuIds;
            }
            if (tmp) {
              let push = items.push;
              let _Object = Object;
              items = [];
              HermesBuiltin.arraySpread(Object.values(googleSkuIds.googleSkuIds), 0);
              HermesBuiltin.apply(items, items);
            }
            if (obj.getIsVariantProduct(googleSkuIds)) {
              const variants = googleSkuIds.variants;
              const item = variants.forEach((googleSkuIds) => {
                let tmp = undefined !== googleSkuIds.googleSkuIds;
                if (tmp) {
                  tmp = null !== googleSkuIds.googleSkuIds;
                }
                if (tmp) {
                  const push = navigation.push;
                  const _Object = Object;
                  items = [];
                  HermesBuiltin.arraySpread(Object.values(googleSkuIds.googleSkuIds), 0);
                  HermesBuiltin.apply(items, navigation);
                }
              });
            }
          });
          continue;
        }
        return items;
      }
      obj = PlatformUtils;
    }
    return [];
  }, items3);
  let tmpResult = analyticsSource(screen[19]);
  const googleSkuIds = onNavigateAway(screen[22]).useGoogleSkuIds(memo1, true === isFetchingCategories);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  const tmp8Result = onNavigateAway(screen[22]);
  currentUserIfAvailable = analyticsSource(screen[23]).useCurrentUserIfAvailable();
  const tmpResult7 = analyticsSource(screen[23]);
  const currentUserWishlist = analyticsSource(screen[24]).useCurrentUserWishlist();
  const tmpResult8 = analyticsSource(screen[24]);
  const items4 = [isFetchingCategories];
  stateFromStores = analyticsSource(screen[15]).useStateFromStores(items4, () => analyticsSource(screen[25]).isThemeDark(isFetchingCategories.theme));
  const tmpResult9 = analyticsSource(screen[15]);
  const items5 = [onNavigateAway(screen[12]).COLLECTIBLES_SHOP, ];
  if (stateFromStores.SHOP_ALL === screen) {
    let COLLECTIBLES_SHOP_HOME_SCREEN = tmp8(tmp2[12]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (tmp14.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp8(tmp2[12]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp14.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp8(tmp2[12]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items5[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = onNavigateAway(screen[26])(items5).analyticsLocations;
  const tmp8Result6 = onNavigateAway(screen[26]);
  navigation = analyticsSource(screen[27]).useNavigation();
  const items6 = [navigation, onNavigateAway];
  const effect = obj4.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if ("RESET" !== data.data.action.type) {
      if (onNavigateAway != null) {
        tmp();
      }
    }
  }), items6);
  const items7 = [categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  memo2 = obj4.useMemo(() => {
    const items = [...categories.values()];
    const obj = collectibles_CollectiblesUtils;
    let result = items;
    if (obj2.isGooglePlayBillingSupported()) {
      result = items;
      if (!bypassGoogleSkuSync) {
        result = items;
        if (!isFetchingGoogleSkus) {
          result = items;
          if (!isFetchingCategories) {
            result = collectibles_CollectiblesUtils.filterGPlaySyncedCategories(items);
            const tmpResult = collectibles_CollectiblesUtils;
          }
        }
      }
    }
    return obj.filterHiddenCategories(result);
  }, items7);
  const tmpResult10 = analyticsSource(screen[27]);
  const tmp26 = Date.now() - first > currentUserIfAvailable;
  categoryIndex = analyticsSource(screen[30]).useCollectiblesShopDeepLinkProps({ categories: memo2 }).categoryIndex;
  const tmpResult11 = analyticsSource(screen[30]);
  const tmp4Result = bypassGoogleSkuSync(noCache.useState(analyticsSource(screen[31]).UNSAFE_isDismissibleContentDismissed(analyticsSource(screen[32]).DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL)), 2);
  first1 = tmp4Result[0];
  closure_18 = tmp29;
  const items8 = [currentUserIfAvailable, screen, first1];
  const tmp4Result2 = bypassGoogleSkuSync(noCache.useMemo(() => {
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
  }, items8), 2);
  first2 = tmp4Result2[0];
  constants = tmp32;
  const items9 = [tmp4Result[1]];
  dismiss = obj4.useCallback(() => {
    closure_18(true);
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL, { dismissAction: ContentDismissActionType.USER_DISMISS });
  }, items9);
  const items10 = [memo2, first2];
  memo3 = obj4.useMemo(() => {
    const mapped = memo2.map((category, categoryIndex) => ({ kind: constants.CATEGORY, category, categoryIndex }));
    let tmp = first2;
    if (first2) {
      tmp = mapped.length > 0;
    }
    if (tmp) {
      const obj = { kind: constants.NITRO_UPSELL };
      mapped.splice(1, 0, obj);
    }
    return mapped;
  }, items10);
  const items11 = [categoryIndex, memo3.length, memo2.length];
  const memo4 = obj4.useMemo(() => {
    if (null != categoryIndex) {
      let sum = categoryIndex;
      if (memo3.length > memo2.length) {
        sum = categoryIndex;
        if (categoryIndex >= 1) {
          sum = categoryIndex + 1;
        }
      }
      return sum;
    }
  }, items11);
  closure_23 = obj4.useRef({ [tmp14.SHOP_ALL]: false, [tmp14.FEATURED_PAGE]: false, [tmp14.ORBS]: false });
  const items12 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect1 = obj4.useEffect(() => {
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
  }, items12);
  const items13 = [currentUserIfAvailable];
  const effect2 = obj4.useEffect(() => {
    if (null != currentUserIfAvailable) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items13);
  const items14 = [sessionId, includeUnpublished, noCache, stateFromStores, dismiss, tmp4Result2[1]];
  const callback1 = obj4.useCallback((item) => {
    item = item.item;
    if (item.kind === constants.NITRO_UPSELL) {
      const obj2 = { isDarkTheme: stateFromStores, dismiss, buttonVariant: null };
      let GET_NITRO = constants;
      if (constants == null) {
        GET_NITRO = MobileNitroUpsellInShopFeedExperiment.NitroUpsellBannerButtonVariant.GET_NITRO;
      }
      obj2.buttonVariant = GET_NITRO;
      let tmp17Result = closure_2_17(ShopNitroUpsellBanner.ShopNitroUpsellBanner, obj2);
    } else {
      let tmp3 = 0 !== item.categoryIndex;
      if (!tmp3) {
        tmp3 = closure_23.current[constants.SHOP_ALL];
      }
      if (!tmp3) {
        closure_23.current[constants.SHOP_ALL] = true;
        const obj3 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: constants.SHOP_ALL, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
        CollectiblesPerfLogging.trackShopPerf(obj3);
      }
      const obj4 = { category: item.category, isDarkTheme: stateFromStores, index: item.categoryIndex };
      tmp17Result = closure_2_17(ShopCategory.ShopCategory, obj4);
    }
    return tmp17Result;
  }, items14);
  const items15 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const callback2 = obj4.useCallback((kind) => kind.kind, []);
  const items16 = [sessionId, includeUnpublished, noCache];
  const callback3 = obj4.useCallback((shopBlock) => {
    let tmp = 0 !== shopBlock.index;
    if (!tmp) {
      tmp = closure_23.current[constants.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_23.current[constants.FEATURED_PAGE] = true;
      const obj2 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: constants.FEATURED_PAGE, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      CollectiblesPerfLogging.trackShopPerf(obj2);
    }
    const obj3 = { shopBlock: shopBlock.item, fetchShopHomeError: null };
    let tmp16 = fetchShopHomeError;
    if (fetchShopHomeError == null) {
      tmp16 = null;
    }
    obj3.fetchShopHomeError = tmp16;
    return closure_2_17(CollectiblesShopFeaturedPageDefault, obj3);
  }, items15);
  const callback4 = obj4.useCallback(() => {
    if (!closure_23.current[constants.ORBS]) {
      closure_23.current[constants.ORBS] = true;
      const obj2 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: constants.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      CollectiblesPerfLogging.trackShopPerf(obj2);
    }
  }, items16);
  const callback5 = obj4.useCallback((type) => type.type, []);
  onNavigateAway(screen[41])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    if (screen !== tmp14.FEATURED_PAGE) {
      if (!tmp43) {
        if (tmp46) {
          tmp8(tmp2[42]).captureMessage("collectibles mobile shop loaded empty categories");
          const tmp8Result7 = tmp8(tmp2[42]);
        }
        if (null !== fetchError) {
          tmp8(tmp2[42]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
          const tmp8Result8 = tmp8(tmp2[42]);
        }
        const obj8 = { value: analyticsLocations, children: null };
        const obj9 = { newValue: tmp9, children: null };
        const obj10 = { style: spinner.rootContainer, children: null };
        const obj11 = { skuIDs: [], activeSubscription: null, children: null };
        if (screen === tmp14.SHOP_ALL) {
          const obj12 = { data: memo3, renderItem: callback1, getItemType: callback2, initialScrollIndex: memo4 };
          let tmp49Result = tmp49(tmp8(tmp2[45]), obj12);
          const tmp8Result9 = tmp8(tmp2[45]);
        } else if (screen === tmp14.ORBS) {
          const obj13 = { shopBlocks, fetchShopHomeError: null, onRenderFirstOrbsItem: null, getItemType: null };
          if (fetchShopHomeError == null) {
            fetchShopHomeError = null;
          }
          obj13.fetchShopHomeError = fetchShopHomeError;
          obj13.onRenderFirstOrbsItem = callback4;
          obj13.getItemType = callback5;
          tmp49Result = tmp49(tmp8(tmp2[46]), obj13);
          const tmp8Result10 = tmp8(tmp2[46]);
        } else {
          const obj14 = { children: null };
          const obj15 = { data: shopBlocks, renderItem: callback3, getItemType: callback5 };
          obj14.children = tmp49(tmp8(tmp2[45]), obj15);
          tmp49Result = tmp49(tmp(tmp2[47]).CollectiblesCoachmarkScrollDismissProvider, obj14);
        }
        obj11.children = tmp49Result;
        obj10.children = first1(tmp(tmp2[44]).NativePaymentContextProvider, obj11);
        const items17 = [first1(sessionId, obj10), first1(tmp8(tmp2[48]), {})];
        obj9.children = items17;
        obj8.children = closure_18(tmp(tmp2[43]).CollectiblesAnalyticsProvider, obj9);
        let tmp49Result2 = tmp49(tmp(tmp2[26]).AnalyticsLocationProvider, obj8);
        tmp46 = first > 0 && false === isFetchingCategories && 0 === categories.size;
      }
      const obj16 = { style: null, size: "large" };
      spinner = spinner.spinner;
      obj16.style = spinner;
      tmp49Result2 = first1(includeUnpublished, obj16);
    }
    if (maybeFetchCollectiblesShopHome.isFetchingShopHome) {
      const obj17 = { style: spinner.spinner, size: "large" };
      return first1(includeUnpublished, obj17);
    }
    tmp43 = 0 === memo2.length || tmp26;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };