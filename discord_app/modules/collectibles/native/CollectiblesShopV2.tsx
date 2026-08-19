// discord_app/modules/collectibles/native/CollectiblesShopV2.tsx
import _modDef1208 from "../../../utils/SentryUtils.native.tsx";
import notSupportedDefault from "../../payments/native/hooks/NativePaymentHooks.android.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import getUserAgnosticState from "../../devtools/dev_settings/DevSettingsStore.tsx";
import handleThemeChange from "../../user_settings/ThemeStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import updateCategoriesAndProducts from "../CollectiblesCategoryStore.tsx";
import items from "../CollectiblesShopConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
class CollectiblesShopV2 {
  constructor(arg0) {
    tmp2 = closure_2;
    tmp = closure_1;
    obj = require("notSupported");
    nativeIAPPayments = obj.useNativeIAPPayments();
    nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    tmp5 = nativePaymentsConnected;
    tmp4 = closure_18();
    obj2 = require("initialize");
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
          callback(true);
        }, 10000);
        return () => clearTimeout(closure_0);
      }
    }, items1);
    tmp5Result = require("obj132");
    tmp11 = tmp5Result.isIOS() && !require("isStable").isStable && isStaffResult;
    if (!nativePaymentsConnected) {
      if (!tmp11) {
        if (!tmp9) {
          tmp12 = jsx;
          tmp13 = ActivityIndicator;
          obj = { style: null, size: "large" };
          obj[0] = tmp4.spinner;
          tmp14 = jsx(ActivityIndicator, obj);
        }
        return tmp14;
      }
    }
    if (tmp9) {
      tmp9 = !nativePaymentsConnected;
    }
    if (tmp9) {
      tmpResult = require("../../../utils/SentryUtils.native.tsx");
      tmp5Result1 = require("obj132");
      str = "collectibles mobile shop failed to connect to native payments isIOS: ";
      text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
      str2 = " isStable: ";
      captureMessageResult = tmpResult.captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${require("isStable").isStable}`);
    }
    obj1 = {};
    merged = Object.assign(global);
    obj1.storeFront = nativeIAPPayments.storeFront;
    obj1.screen = global.screen;
    tmp14 = jsx(CollectiblesShopInternal, obj1);
    return;
  }
}
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: unpackModuleId, CollectiblesMobileShopScreen: closure_12, CollectibleShopTab: map1 } = items);
({ AnalyticEvents: closure_14, PaymentGateways: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = createCacheKey.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
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
  let constants;
  let obj = analyticsSource(screen[12]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(analyticsSource(screen[13]).CollectiblesShopOpenTriggerPoint);
  obj1 = analyticsSource(screen[14]);
  let items = [isFetchingGoogleSkus];
  const first = bypassGoogleSkuSync(obj1.useStateFromStoresArray(items, () => {
    let num = isFetchingGoogleSkus.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let obj2 = analyticsSource(screen[14]);
  const items1 = [categories];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ bypassGoogleSkuSync: categories.get("bypass_google_sku_sync"), noCache: categories.get("shop_disable_cache"), includeUnpublished: categories.get("shop_include_unpublished") }));
  bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  let spinner = callback3();
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
      FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
    }
    obj[1] = FEATURED_PAGE;
    return obj;
  }, items2);
  obj = { paymentGateway: constants.APPLE };
  if (null != country) {
    obj = { countryCode: null };
    obj[0] = country;
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj.logPerf = true;
  const tmp10Result = onNavigateAway(screen[17])(obj, memo);
  categories = tmp10Result.categories;
  isFetchingCategories = tmp10Result.isFetchingCategories;
  let tmpResult = tmp(screen[18]);
  if (screen === stateFromStores.ORBS) {
    let HOME = analyticsLocations.ORBS;
  } else {
    HOME = analyticsLocations.HOME;
  }
  const maybeFetchCollectiblesShopHome = tmpResult.useMaybeFetchCollectiblesShopHome(HOME, { noCache, includeUnpublished, logPerf: true }, memo);
  ({ shopBlocks, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const items3 = [categories, isFetchingCategories];
  const memo1 = obj3.useMemo(() => {
    if (true !== isFetchingCategories) {
      if (false !== obj.isAndroid()) {
        let items = [];
        const values = categories.values();
        for (const item10017 of values) {
          let products = item10017.products;
          let item = products.forEach((item, index) => {
            let tmp = undefined !== item.googleSkuIds;
            if (tmp) {
              tmp = null !== item.googleSkuIds;
            }
            if (tmp) {
              let push = items.push;
              let _Object = Object;
              items = [];
              HermesBuiltin.arraySpread(Object.values(item.googleSkuIds), 0);
              HermesBuiltin.apply(items, items);
            }
            if (obj.getIsVariantProduct(item)) {
              const variants = item.variants;
              item = variants.forEach((item, index) => {
                let tmp = undefined !== item.googleSkuIds;
                if (tmp) {
                  tmp = null !== item.googleSkuIds;
                }
                if (tmp) {
                  const push = navigation.push;
                  const _Object = Object;
                  items = [];
                  HermesBuiltin.arraySpread(Object.values(item.googleSkuIds), 0);
                  HermesBuiltin.apply(items, navigation);
                }
              });
            }
          });
          continue;
        }
        return items;
      }
      obj = analyticsSource(screen[19]);
    }
    return [];
  }, items3);
  let tmp7Result = tmp7(screen[21]);
  const googleSkuIds = tmp7Result.useGoogleSkuIds(memo1, true === isFetchingCategories);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  tmpResult = tmp(screen[22]);
  currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  const tmp10 = onNavigateAway(screen[17]);
  const currentUserWishlist = analyticsSource(screen[23]).useCurrentUserWishlist();
  const tmpResult1 = analyticsSource(screen[23]);
  const items4 = [isFetchingCategories];
  stateFromStores = analyticsSource(screen[14]).useStateFromStores(items4, () => analyticsSource(screen[24]).isThemeDark(isFetchingCategories.theme));
  tmp7Result = tmp7(screen[25]);
  const items5 = [onNavigateAway(screen[11]).COLLECTIBLES_SHOP, ];
  if (stateFromStores.SHOP_ALL === screen) {
    let COLLECTIBLES_SHOP_HOME_SCREEN = tmp7(screen[11]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (tmp13.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp7(screen[11]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp13.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp7(screen[11]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items5[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = tmp7Result(items5).analyticsLocations;
  const tmpResult2 = analyticsSource(screen[14]);
  navigation = analyticsSource(screen[26]).useNavigation();
  const items6 = [navigation, onNavigateAway];
  const effect = obj3.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if ("RESET" !== data.data.action.type) {
      if (closure_1 != null) {
        tmp();
      }
    }
  }), items6);
  const items7 = [categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  const memo2 = obj3.useMemo(() => {
    const items = [...categories.values()];
    const obj = analyticsSource(screen[27]);
    let result = items;
    if (obj2.isGooglePlayBillingSupported()) {
      result = items;
      if (!bypassGoogleSkuSync) {
        result = items;
        if (!isFetchingGoogleSkus) {
          result = items;
          if (!isFetchingCategories) {
            result = analyticsSource(screen[27]).filterGPlaySyncedCategories(items);
            const tmpResult = analyticsSource(screen[27]);
          }
        }
      }
    }
    return obj.filterHiddenCategories(result);
  }, items7);
  const tmpResult3 = analyticsSource(screen[26]);
  const tmp25 = Date.now() - first > currentUserIfAvailable;
  const categoryIndex = analyticsSource(screen[29]).useCollectiblesShopDeepLinkProps({ categories: memo2 }).categoryIndex;
  constants = obj3.useRef({ [tmp13.SHOP_ALL]: false, [tmp13.FEATURED_PAGE]: false, [tmp13.ORBS]: false });
  const items8 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect1 = obj3.useEffect(() => {
    let FEATURED_PAGE = screen;
    let tmp = null == screen;
    if (!tmp) {
      tmp = FEATURED_PAGE === stateFromStores.FEATURED_PAGE;
    }
    if (!tmp) {
      tmp = FEATURED_PAGE === stateFromStores.SHOP_ALL;
    }
    onNavigateAway(screen[30]);
    let obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: analyticsSource, page_type: null };
    let str = "home";
    if (!tmp) {
      str = FEATURED_PAGE;
    }
    obj[3] = str;
    obj.track(navigation.COLLECTIBLES_SHOP_VIEWED, obj);
    obj = { sessionId, checkpoint: analyticsSource(screen[31]).CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
    if (FEATURED_PAGE == null) {
      FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
    }
    obj[2] = FEATURED_PAGE;
    obj[3] = includeUnpublished;
    obj[4] = noCache;
    analyticsSource(screen[31]).trackShopPerf(obj);
    const obj3 = analyticsSource(screen[31]);
  }, items8);
  const items9 = [currentUserIfAvailable];
  const effect2 = obj3.useEffect(() => {
    if (null != currentUserIfAvailable) {
      onNavigateAway(screen[32])(tmp.id);
    }
  }, items9);
  const items10 = [sessionId, includeUnpublished, noCache, stateFromStores];
  const items11 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const callback = obj3.useCallback((category) => {
    const index = category.index;
    let tmp = 0 !== index;
    if (!tmp) {
      tmp = closure_15.current[stateFromStores.SHOP_ALL];
    }
    if (!tmp) {
      closure_15.current[stateFromStores.SHOP_ALL] = true;
      analyticsSource(screen[31]);
      let obj = { sessionId: null, checkpoint: null, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
      obj[0] = sessionId;
      obj[1] = analyticsSource(screen[31]).CollectiblesShopPerfCheckpoint.SHOP_RENDERED;
      obj[2] = stateFromStores.SHOP_ALL;
      obj[3] = includeUnpublished;
      obj[4] = noCache;
      obj.trackShopPerf(obj);
    }
    obj = { category: category.item, isDarkTheme: stateFromStores, index };
    return closure_1_16(analyticsSource(screen[33]).ShopCategory, obj);
  }, items10);
  const items12 = [sessionId, includeUnpublished, noCache];
  const callback1 = obj3.useCallback((index) => {
    let tmp = 0 !== index.index;
    if (!tmp) {
      tmp = closure_15.current[stateFromStores.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_15.current[stateFromStores.FEATURED_PAGE] = true;
      analyticsSource(screen[31]);
      let obj = { sessionId: null, checkpoint: null, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
      obj[0] = sessionId;
      obj[1] = analyticsSource(screen[31]).CollectiblesShopPerfCheckpoint.SHOP_RENDERED;
      obj[2] = stateFromStores.FEATURED_PAGE;
      obj[3] = includeUnpublished;
      obj[4] = noCache;
      obj.trackShopPerf(obj);
    }
    obj = { shopBlock: index.item, fetchShopHomeError: null };
    let tmp16 = fetchShopHomeError;
    if (fetchShopHomeError == null) {
      tmp16 = null;
    }
    obj[1] = tmp16;
    return closure_1_16(onNavigateAway(screen[34]), obj);
  }, items11);
  const callback2 = obj3.useCallback(() => {
    if (!closure_15.current[stateFromStores.ORBS]) {
      closure_15.current[stateFromStores.ORBS] = true;
      analyticsSource(screen[31]);
      const obj = { sessionId: null, checkpoint: null, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
      obj[0] = sessionId;
      obj[1] = analyticsSource(screen[31]).CollectiblesShopPerfCheckpoint.SHOP_RENDERED;
      obj[2] = stateFromStores.ORBS;
      obj[3] = includeUnpublished;
      obj[4] = noCache;
      obj.trackShopPerf(obj);
    }
  }, items12);
  callback3 = obj3.useCallback((type) => type.type, []);
  onNavigateAway(screen[35])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    if (screen !== tmp13.FEATURED_PAGE) {
      if (!tmp33) {
        if (tmp36) {
          tmp7(screen[36]).captureMessage("collectibles mobile shop loaded empty categories");
          const tmp7Result1 = tmp7(screen[36]);
        }
        if (null !== fetchError) {
          tmp7(screen[36]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
          const tmp7Result2 = tmp7(screen[36]);
        }
        obj2 = { value: null, children: null };
        obj2[0] = analyticsLocations;
        obj3 = { newValue: null, children: null };
        obj3[0] = tmp8;
        const obj4 = { style: null, children: null };
        obj4[0] = spinner.rootContainer;
        const obj5 = { skuIDs: null, activeSubscription: null, children: null };
        obj5[0] = [];
        if (screen === tmp13.SHOP_ALL) {
          const obj6 = { data: null, renderItem: null, initialScrollIndex: null };
          obj6[0] = memo2;
          obj6[1] = callback;
          obj6[2] = categoryIndex;
          let tmp39Result = tmp39(tmp7(screen[39]), obj6);
          const tmp7Result3 = tmp7(screen[39]);
        } else if (screen === tmp13.ORBS) {
          const obj7 = { shopBlocks: null, fetchShopHomeError: null, onRenderFirstOrbsItem: null, getItemType: null };
          obj7[0] = shopBlocks;
          if (fetchShopHomeError == null) {
            fetchShopHomeError = null;
          }
          obj7[1] = fetchShopHomeError;
          obj7[2] = callback2;
          obj7[3] = callback3;
          tmp39Result = tmp39(tmp7(screen[40]), obj7);
          const tmp7Result4 = tmp7(screen[40]);
        } else {
          const obj8 = { children: null };
          const obj9 = { data: null, renderItem: null, getItemType: null };
          obj9[0] = shopBlocks;
          obj9[1] = callback1;
          obj9[2] = callback3;
          obj8[0] = tmp39(tmp7(screen[39]), obj9);
          tmp39Result = tmp39(tmp(screen[41]).CollectiblesCoachmarkScrollDismissProvider, obj8);
        }
        obj5[2] = tmp39Result;
        obj4[1] = callback2(tmp(screen[38]).NativePaymentContextProvider, obj5);
        const items13 = [callback2(sessionId, obj4), callback2(tmp7(screen[42]), {})];
        obj3[1] = items13;
        obj2[1] = callback(tmp(screen[37]).CollectiblesAnalyticsProvider, obj3);
        tmp39Result = tmp39(tmp(screen[25]).AnalyticsLocationProvider, obj2);
        tmp36 = first > 0 && false === isFetchingCategories && 0 === categories.size;
      }
      const obj10 = { style: null, size: "large" };
      spinner = spinner.spinner;
      obj10[0] = spinner;
      tmp39Result = callback2(includeUnpublished, obj10);
    }
    if (maybeFetchCollectiblesShopHome.isFetchingShopHome) {
      const obj11 = { style: null, size: "large" };
      obj11[0] = spinner.spinner;
      return callback2(includeUnpublished, obj11);
    }
    tmp33 = 0 === memo2.length || tmp25;
  }
  const tmpResult4 = analyticsSource(screen[29]);
}
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };