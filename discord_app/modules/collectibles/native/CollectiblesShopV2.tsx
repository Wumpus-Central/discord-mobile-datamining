// discord_app/modules/collectibles/native/CollectiblesShopV2.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesPerfLogging from "../utils/CollectiblesPerfLogging.tsx";
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import NativePaymentHooksDefault from "../../payments/native/hooks/NativePaymentHooks.android.tsx";
import ShopCategory from "ShopCategory.tsx";
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

const SentryUtilsDefault = tmp(1232);
require = fn;
class CollectiblesShopV2 {
  constructor(arg0) {
    tmp2 = closure_2;
    tmp = closure_1;
    obj = closure_1(closure_2[21]);
    nativeIAPPayments = obj.useNativeIAPPayments();
    nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    tmp5 = nativePaymentsConnected;
    tmp4 = closure_18();
    obj2 = nativePaymentsConnected(closure_2[14]);
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
    tmp5Result = tmp5(tmp2[19]);
    tmp11 = tmp5Result.isIOS() && !tmp5(tmp2[43]).isStable && isStaffResult;
    if (!nativePaymentsConnected) {
      if (!tmp11) {
        if (!tmp9) {
          tmp12 = jsx;
          tmp13 = ActivityIndicator;
          obj = { style: null, size: "large" };
          obj.style = tmp4.spinner;
          tmp14 = jsx(ActivityIndicator, obj);
        }
        return tmp14;
      }
    }
    if (tmp9) {
      tmp9 = !nativePaymentsConnected;
    }
    if (tmp9) {
      tmpResult = tmp(tmp2[36]);
      tmp5Result1 = tmp5(tmp2[19]);
      str = "collectibles mobile shop failed to connect to native payments isIOS: ";
      text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
      str2 = " isStable: ";
      captureMessageResult = tmpResult.captureMessage(
        `${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${tmp5(tmp2[43]).isStable}`,
      );
    }
    obj1 = {};
    merged = Object.assign(global);
    obj1.storeFront = nativeIAPPayments.storeFront;
    obj1.screen = global.screen;
    tmp14 = jsx(CollectiblesShopInternal, obj1);
    return;
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1076);
({
  COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_11,
  CollectiblesMobileShopScreen: closure_12,
  CollectibleShopTab: map1,
} = CollectiblesShopConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, PaymentGateways: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4560);
const collapsedCategories = createStyles.createStyles({
  rootContainer: { height: "100%", width: "100%" },
  spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 },
});
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
  constants3 = undefined;
  let obj = analyticsSource(screen[12]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(analyticsSource(screen[13]).CollectiblesShopOpenTriggerPoint);
  let obj1 = analyticsSource(screen[14]);
  let items = [isFetchingGoogleSkus];
  const first = bypassGoogleSkuSync(
    obj1.useStateFromStoresArray(items, () => {
      let num = isFetchingGoogleSkus.lastSuccessfulFetch;
      if (num == null) {
        num = 0;
      }
      const items = [num];
      return items;
    }),
    1,
  )[0];
  let obj2 = analyticsSource(screen[14]);
  const items1 = [categories];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({
    bypassGoogleSkuSync: categories.get("bypass_google_sku_sync"),
    noCache: categories.get("shop_disable_cache"),
    includeUnpublished: categories.get("shop_include_unpublished"),
  }));
  bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  let spinner = closure_18();
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  const tmp8 = onNavigateAway(screen[15])(() => {
    const obj = { sessionId: analyticsSource(screen[16]).v4() };
    return obj;
  });
  sessionId = tmp8.sessionId;
  let obj3 = noCache;
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
  obj = { paymentGateway: constants3.APPLE };
  if (null != country) {
    obj = { countryCode: country };
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj.logPerf = true;
  const tmp10Result = onNavigateAway(screen[17])(obj, memo);
  categories = tmp10Result.categories;
  isFetchingCategories = tmp10Result.isFetchingCategories;
  let tmpResult = tmp(tmp2[18]);
  if (screen === stateFromStores.ORBS) {
    let HOME = analyticsLocations.ORBS;
  } else {
    HOME = analyticsLocations.HOME;
  }
  const maybeFetchCollectiblesShopHome = tmpResult.useMaybeFetchCollectiblesShopHome(
    HOME,
    { noCache, includeUnpublished, logPerf: true },
    memo,
  );
  ({ shopBlocks, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const items3 = [categories, isFetchingCategories];
  const memo1 = obj3.useMemo(() => {
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
  let tmp7Result = tmp7(tmp2[21]);
  const googleSkuIds = tmp7Result.useGoogleSkuIds(memo1, true === isFetchingCategories);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  tmpResult = tmp(tmp2[22]);
  currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  const tmp10 = onNavigateAway(screen[17]);
  const currentUserWishlist = analyticsSource(screen[23]).useCurrentUserWishlist();
  const tmpResult1 = analyticsSource(screen[23]);
  const items4 = [isFetchingCategories];
  stateFromStores = analyticsSource(screen[14]).useStateFromStores(items4, () =>
    analyticsSource(screen[24]).isThemeDark(isFetchingCategories.theme),
  );
  tmp7Result = tmp7(tmp2[25]);
  const items5 = [onNavigateAway(screen[11]).COLLECTIBLES_SHOP];
  if (stateFromStores.SHOP_ALL === screen) {
    let COLLECTIBLES_SHOP_HOME_SCREEN = tmp7(tmp2[11]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (tmp13.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp7(tmp2[11]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp13.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp7(tmp2[11]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items5[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = tmp7Result(items5).analyticsLocations;
  const tmpResult2 = analyticsSource(screen[14]);
  navigation = analyticsSource(screen[26]).useNavigation();
  const items6 = [navigation, onNavigateAway];
  const effect = obj3.useEffect(
    () =>
      navigation.addListener("beforeRemove", (data) => {
        if ("RESET" !== data.data.action.type) {
          if (onNavigateAway != null) {
            tmp();
          }
        }
      }),
    items6,
  );
  const items7 = [categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  const memo2 = obj3.useMemo(() => {
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
  const tmpResult3 = analyticsSource(screen[26]);
  const tmp25 = Date.now() - first > currentUserIfAvailable;
  const categoryIndex = analyticsSource(screen[29]).useCollectiblesShopDeepLinkProps({
    categories: memo2,
  }).categoryIndex;
  constants3 = obj3.useRef({ [tmp13.SHOP_ALL]: false, [tmp13.FEATURED_PAGE]: false, [tmp13.ORBS]: false });
  const items8 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect1 = obj3.useEffect(() => {
    let FEATURED_PAGE = screen;
    let tmp = null == screen;
    if (!tmp) {
      tmp = FEATURED_PAGE === constants.FEATURED_PAGE;
    }
    if (!tmp) {
      tmp = FEATURED_PAGE === constants.SHOP_ALL;
    }
    let obj = {
      location_stack: analyticsLocations,
      page_session_id: sessionId,
      source: analyticsSource,
      page_type: null,
    };
    let str = "home";
    if (!tmp) {
      str = FEATURED_PAGE;
    }
    obj.page_type = str;
    obj.track(constants2.COLLECTIBLES_SHOP_VIEWED, obj);
    obj = {
      sessionId,
      checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
      tab: null,
      unpublishedCategoriesShown: null,
      cacheDisabled: null,
    };
    if (FEATURED_PAGE == null) {
      FEATURED_PAGE = constants.FEATURED_PAGE;
    }
    obj.tab = FEATURED_PAGE;
    obj.unpublishedCategoriesShown = includeUnpublished;
    obj.cacheDisabled = noCache;
    CollectiblesPerfLogging.trackShopPerf(obj);
  }, items8);
  const items9 = [currentUserIfAvailable];
  const effect2 = obj3.useEffect(() => {
    if (null != currentUserIfAvailable) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items9);
  const items10 = [sessionId, includeUnpublished, noCache, stateFromStores];
  const items11 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const callback = obj3.useCallback((category) => {
    const index = category.index;
    let tmp = 0 !== index;
    if (!tmp) {
      tmp = closure_15.current[constants.SHOP_ALL];
    }
    if (!tmp) {
      closure_15.current[constants.SHOP_ALL] = true;
      let obj = {
        sessionId,
        checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
        tab: constants.SHOP_ALL,
        unpublishedCategoriesShown: includeUnpublished,
        cacheDisabled: noCache,
      };
      obj.trackShopPerf(obj);
    }
    obj = { category: category.item, isDarkTheme: stateFromStores, index };
    return value2(ShopCategory.ShopCategory, obj);
  }, items10);
  const items12 = [sessionId, includeUnpublished, noCache];
  const callback1 = obj3.useCallback((shopBlock) => {
    let tmp = 0 !== shopBlock.index;
    if (!tmp) {
      tmp = closure_15.current[constants.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_15.current[constants.FEATURED_PAGE] = true;
      let obj = {
        sessionId,
        checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
        tab: constants.FEATURED_PAGE,
        unpublishedCategoriesShown: includeUnpublished,
        cacheDisabled: noCache,
      };
      obj.trackShopPerf(obj);
    }
    obj = { shopBlock: shopBlock.item, fetchShopHomeError: null };
    let tmp16 = fetchShopHomeError;
    if (fetchShopHomeError == null) {
      tmp16 = null;
    }
    obj.fetchShopHomeError = tmp16;
    return value2(CollectiblesShopFeaturedPageDefault, obj);
  }, items11);
  const callback2 = obj3.useCallback(() => {
    if (!closure_15.current[constants.ORBS]) {
      closure_15.current[tmp.ORBS] = true;
      const obj = {
        sessionId,
        checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
        tab: tmp.ORBS,
        unpublishedCategoriesShown: includeUnpublished,
        cacheDisabled: noCache,
      };
      obj.trackShopPerf(obj);
    }
  }, items12);
  const callback3 = obj3.useCallback((type) => type.type, []);
  onNavigateAway(screen[35])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    if (screen !== tmp13.FEATURED_PAGE) {
      if (!tmp33) {
        if (tmp36) {
          tmp7(tmp2[36]).captureMessage("collectibles mobile shop loaded empty categories");
          const tmp7Result1 = tmp7(tmp2[36]);
        }
        if (null !== fetchError) {
          tmp7(tmp2[36]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
          const tmp7Result2 = tmp7(tmp2[36]);
        }
        obj2 = { value: analyticsLocations, children: null };
        obj3 = { newValue: tmp8, children: null };
        const obj4 = { style: spinner.rootContainer, children: null };
        const obj5 = { skuIDs: [], activeSubscription: null, children: null };
        if (screen === tmp13.SHOP_ALL) {
          const obj6 = { data: memo2, renderItem: callback, initialScrollIndex: categoryIndex };
          let tmp39Result = tmp39(tmp7(tmp2[39]), obj6);
          const tmp7Result3 = tmp7(tmp2[39]);
        } else if (screen === tmp13.ORBS) {
          const obj7 = { shopBlocks, fetchShopHomeError: null, onRenderFirstOrbsItem: null, getItemType: null };
          if (fetchShopHomeError == null) {
            fetchShopHomeError = null;
          }
          obj7.fetchShopHomeError = fetchShopHomeError;
          obj7.onRenderFirstOrbsItem = callback2;
          obj7.getItemType = callback3;
          tmp39Result = tmp39(tmp7(tmp2[40]), obj7);
          const tmp7Result4 = tmp7(tmp2[40]);
        } else {
          const obj8 = { children: null };
          const obj9 = { data: shopBlocks, renderItem: callback1, getItemType: callback3 };
          obj8.children = tmp39(tmp7(tmp2[39]), obj9);
          tmp39Result = tmp39(tmp(tmp2[41]).CollectiblesCoachmarkScrollDismissProvider, obj8);
        }
        obj5.children = tmp39Result;
        obj4.children = closure_16(tmp(tmp2[38]).NativePaymentContextProvider, obj5);
        const items13 = [closure_16(sessionId, obj4), closure_16(tmp7(tmp2[42]), {})];
        obj3.children = items13;
        obj2.children = closure_17(tmp(tmp2[37]).CollectiblesAnalyticsProvider, obj3);
        tmp39Result = tmp39(tmp(tmp2[25]).AnalyticsLocationProvider, obj2);
        tmp36 = first > 0 && false === isFetchingCategories && 0 === categories.size;
      }
      const obj10 = { style: null, size: "large" };
      spinner = spinner.spinner;
      obj10.style = spinner;
      tmp39Result = closure_16(includeUnpublished, obj10);
    }
    if (maybeFetchCollectiblesShopHome.isFetchingShopHome) {
      const obj11 = { style: spinner.spinner, size: "large" };
      return closure_16(includeUnpublished, obj11);
    }
    tmp33 = 0 === memo2.length || tmp25;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };
