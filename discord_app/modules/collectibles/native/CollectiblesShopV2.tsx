// discord_app/modules/collectibles/native/CollectiblesShopV2.tsx
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesPerfLogging from "../utils/CollectiblesPerfLogging.tsx";
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import NativePaymentHooksDefault from "../../payments/native/hooks/NativePaymentHooks.android.tsx";
import MobileNitroUpsellInShopFeedExperiment from "MobileNitroUpsellInShopFeedExperiment.tsx";
import ShopNitroUpsellBanner from "ShopNitroUpsellBanner.tsx";
import ShopCategory from "ShopCategory.tsx";
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

const MobileNitroUpsellInShopFeedExperimentDefault = MobileNitroUpsellInShopFeedExperiment;

require = fn;
function screenToAnalyticsLocation(screen) {
  if (constants.SHOP_ALL === screen) {
    return AnalyticsLocationDefault.COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (constants.ORBS === screen) {
    return AnalyticsLocationDefault.COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    const FEATURED_PAGE = constants.FEATURED_PAGE;
    return AnalyticsLocationDefault.COLLECTIBLES_SHOP_HOME_SCREEN;
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1087);
({
  COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_11,
  CollectiblesMobileShopScreen: closure_12,
  CollectibleShopTab: map1,
} = CollectiblesShopConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_14, PaymentGateways: closure_15 } = Constants);
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5091);
let closure_19 = createStyles.createStyles({
  rootContainer: { height: "100%", width: "100%" },
  spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 },
});
let closure_20 = { CATEGORY: "category", NITRO_UPSELL: "nitro_upsell" };
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (analyticsSource) => {
      const cResult = analyticsSource(screen[14]).c(99);
      analyticsSource = analyticsSource.analyticsSource;
      const onNavigateAway = analyticsSource.onNavigateAway;
      ({ storeFront, screen } = analyticsSource);
      let obj = analyticsSource(screen[14]);
      const commonTriggerPoint = analyticsSource(screen[15]).useCommonTriggerPoint(
        analyticsSource(screen[16]).CollectiblesShopOpenTriggerPoint,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [isFetchingGoogleSkus];
        const fn = function h() {
          let num = isFetchingGoogleSkus.lastSuccessfulFetch;
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
      let obj2 = analyticsSource(screen[15]);
      const first = bypassGoogleSkuSync(analyticsSource(screen[17]).useStateFromStoresArray(tmp5, tmp6), 1)[0];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DevSettingsStore];
        class T {
          constructor() {
            obj = {
              bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
              noCache: isFetchingCategories.get("shop_disable_cache"),
              includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
            };
            return obj;
          }
        }
        cResult[2] = items1;
        cResult[3] = T;
        let tmp10 = T;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = analyticsSource(screen[17]);
      const stateFromStoresObject = analyticsSource(screen[17]).useStateFromStoresObject(tmp9, tmp10);
      bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
      const noCache = stateFromStoresObject.noCache;
      const includeUnpublished = stateFromStoresObject.includeUnpublished;
      closure_19();
      if (storeFront != null) {
        const country = storeFront.country;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            obj = { sessionId: null };
            obj2 = analyticsSource(screen[18]);
            obj.sessionId = obj2.v4();
            return obj;
          }
        }
        cResult[4] = F;
        class T {
          constructor() {
            obj = {
              bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
              noCache: isFetchingCategories.get("shop_disable_cache"),
              includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
            };
            return obj;
          }
        }
      } else {
        class F {
          constructor() {
            obj = { sessionId: null };
            obj2 = analyticsSource(screen[18]);
            obj.sessionId = obj2.v4();
            return obj;
          }
        }
      }
      const tmp15 = onNavigateAway;
      const tmpResult3 = analyticsSource(screen[17]);
      const sessionId = onNavigateAway(screen[19])(tmp14).sessionId;
      let FEATURED_PAGE = screen;
      if (screen == null) {
        class F {
          constructor() {
            obj = { sessionId: null };
            obj2 = analyticsSource(screen[18]);
            obj.sessionId = obj2.v4();
            return obj;
          }
        }
        FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
      }
      if (cResult[5] === sessionId) {
        class F {
          constructor() {
            obj = { sessionId: null };
            obj2 = analyticsSource(screen[18]);
            obj.sessionId = obj2.v4();
            return obj;
          }
        }
        if (cResult[8] !== country) {
          class F {
            constructor() {
              obj = { sessionId: null };
              obj2 = analyticsSource(screen[18]);
              obj.sessionId = obj2.v4();
              return obj;
            }
          }
          tmp19[0] = constants3.APPLE;
          class T {
            constructor() {
              obj = {
                bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
                noCache: isFetchingCategories.get("shop_disable_cache"),
                includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
              };
              return obj;
            }
          }
          const merged = Object.assign(tmp21);
          tmp19.logPerf = true;
          cResult[8] = country;
          cResult[9] = tmp19;
        } else {
          class F {
            constructor() {
              obj = { sessionId: null };
              obj2 = analyticsSource(screen[18]);
              obj.sessionId = obj2.v4();
              return obj;
            }
          }
          const categories = tmp15(screen[20])(tmp18, tmp17).categories;
          class T {
            constructor() {
              obj = {
                bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
                noCache: isFetchingCategories.get("shop_disable_cache"),
                includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
              };
              return obj;
            }
          }
          DevSettingsStore = tmp27;
          if (cResult[10] === includeUnpublished) {
            class F {
              constructor() {
                obj = { sessionId: null };
                obj2 = analyticsSource(screen[18]);
                obj.sessionId = obj2.v4();
                return obj;
              }
            }
            tmp(screen[21]);
            class T {
              constructor() {
                obj = {
                  bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
                  noCache: isFetchingCategories.get("shop_disable_cache"),
                  includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
                };
                return obj;
              }
            }
            if (screen === stateFromStores.ORBS) {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              let HOME = analyticsLocations.ORBS;
            } else {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              HOME = analyticsLocations.HOME;
            }
            const tmp30Result = tmp30(HOME, tmp28, tmp17);
            ({ shopBlocks, fetchShopHomeError } = tmp30Result);
            const isFetchingShopHome = tmp30Result.isFetchingShopHome;
            if (true !== tmp27) {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              if (false !== obj7.isAndroid()) {
                class F {
                  constructor() {
                    obj = { sessionId: null };
                    obj2 = analyticsSource(screen[18]);
                    obj.sessionId = obj2.v4();
                    return obj;
                  }
                }
              }
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              cResult[13] = tmp34;
              class T {
                constructor() {
                  obj = {
                    bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
                    noCache: isFetchingCategories.get("shop_disable_cache"),
                    includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
            } else {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
            }
            const googleSkuIds = onNavigateAway(screen[24]).useGoogleSkuIds(tmp33, true === tmp27);
            isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
            const fetchError = googleSkuIds.fetchError;
            const obj8 = onNavigateAway(screen[24]);
            const currentUserIfAvailable = analyticsSource(screen[25]).useCurrentUserIfAvailable();
            const obj9 = analyticsSource(screen[25]);
            const currentUserWishlist = analyticsSource(screen[26]).useCurrentUserWishlist();
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              const items2 = [fetchShopHomeError];
              class T {
                constructor() {
                  obj = {
                    bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
                    noCache: isFetchingCategories.get("shop_disable_cache"),
                    includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
              cResult[16] = items2;
              cResult[17] = tmp45;
              let tmp44 = tmp45;
              const tmp43 = items2;
            } else {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              tmp44 = cResult[17];
            }
            const obj10 = analyticsSource(screen[26]);
            stateFromStores = analyticsSource(screen[17]).useStateFromStores(tmp43, tmp44);
            if (cResult[18] !== screen) {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              const tmp48 = screenToAnalyticsLocation(screen);
              class T {
                constructor() {
                  obj = {
                    bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
                    noCache: isFetchingCategories.get("shop_disable_cache"),
                    includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
              cResult[18] = screen;
              cResult[19] = tmp48;
            } else {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
            }
            if (cResult[20] !== tmp47) {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              tmp50[0] = tmp37(screen[12]).COLLECTIBLES_SHOP;
              tmp50[1] = tmp47;
              class T {
                constructor() {
                  obj = {
                    bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
                    noCache: isFetchingCategories.get("shop_disable_cache"),
                    includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
              cResult[20] = tmp47;
              cResult[21] = tmp50;
            } else {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
            }
            analyticsLocations = tmp37(screen[28])(tmp50).analyticsLocations;
            const tmp40Result = analyticsSource(screen[17]);
            const navigation = analyticsSource(screen[29]).useNavigation();
            if (cResult[22] === navigation) {
              class F {
                constructor() {
                  obj = { sessionId: null };
                  obj2 = analyticsSource(screen[18]);
                  obj.sessionId = obj2.v4();
                  return obj;
                }
              }
              const effect = noCache.useEffect(tmp52, tmp53);
              class T {
                constructor() {
                  obj = {
                    bypassGoogleSkuSync: isFetchingCategories.get("bypass_google_sku_sync"),
                    noCache: isFetchingCategories.get("shop_disable_cache"),
                    includeUnpublished: isFetchingCategories.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
              const items3 = [];
              HermesBuiltin.arraySpread(categories.values(), 0);
              let result = items3;
              if (
                (function shouldFilterGPlayCategories() {
                  let result = BillingPlatformUtils.isGooglePlayBillingSupported();
                  if (result) {
                    let tmp3 = !bypassGoogleSkuSync;
                    if (!bypassGoogleSkuSync) {
                      let tmp5 = !isFetchingGoogleSkus;
                      if (!isFetchingGoogleSkus) {
                        tmp5 = !closure_7;
                      }
                      tmp3 = tmp5;
                    }
                    result = tmp3;
                  }
                  return result;
                })()
              ) {
                class F {
                  constructor() {
                    obj = { sessionId: null };
                    obj2 = analyticsSource(screen[18]);
                    obj.sessionId = obj2.v4();
                    return obj;
                  }
                }
                result = obj14.filterGPlaySyncedCategories(items3);
              }
              const result1 = tmp40(screen[31]).filterHiddenCategories(result);
              cResult[26] = bypassGoogleSkuSync;
              cResult[27] = categories;
              cResult[28] = tmp27;
              cResult[29] = isFetchingGoogleSkus;
              cResult[30] = result1;
              const tmp40Result4 = tmp40(screen[31]);
            }
            function ge() {
              return navigation.addListener("beforeRemove", (data) => {
                if ("RESET" !== data.data.action.type) {
                  if (onNavigateAway != null) {
                    tmp();
                  }
                }
              });
            }
            const items4 = [navigation, onNavigateAway];
            cResult[22] = navigation;
            cResult[23] = onNavigateAway;
            cResult[24] = ge;
            cResult[25] = items4;
            const tmp40Result3 = analyticsSource(screen[29]);
            tmp52 = ge;
            tmp53 = items4;
          }
          let obj3 = { noCache, includeUnpublished, logPerf: true };
          cResult[10] = includeUnpublished;
          cResult[11] = noCache;
          cResult[12] = obj3;
          const tmp26 = tmp15(screen[20])(tmp18, tmp17);
          tmp28 = obj3;
        }
      }
      let obj4 = { sessionId, tab: FEATURED_PAGE };
      cResult[5] = sessionId;
      cResult[6] = FEATURED_PAGE;
      cResult[7] = obj4;
      let tmp16 = onNavigateAway(screen[19])(tmp14);
    }
  : (analyticsSource) => {
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
      const commonTriggerPoint = analyticsSource(screen[15]).useCommonTriggerPoint(
        analyticsSource(screen[16]).CollectiblesShopOpenTriggerPoint,
      );
      let obj = analyticsSource(screen[15]);
      let items = [isFetchingGoogleSkus];
      const first = bypassGoogleSkuSync(
        analyticsSource(screen[17]).useStateFromStoresArray(items, () => {
          let num = isFetchingGoogleSkus.lastSuccessfulFetch;
          if (num == null) {
            num = 0;
          }
          const items = [num];
          return items;
        }),
        1,
      )[0];
      let obj2 = analyticsSource(screen[17]);
      let items1 = [categories];
      const stateFromStoresObject = analyticsSource(screen[17]).useStateFromStoresObject(items1, () => ({
        bypassGoogleSkuSync: categories.get("bypass_google_sku_sync"),
        noCache: categories.get("shop_disable_cache"),
        includeUnpublished: categories.get("shop_include_unpublished"),
      }));
      bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
      const noCache = stateFromStoresObject.noCache;
      const includeUnpublished = stateFromStoresObject.includeUnpublished;
      let spinner = first2();
      let country;
      if (storeFront != null) {
        country = storeFront.country;
      }
      const tmp9 = onNavigateAway(screen[19])(() => {
        const obj = { sessionId: analyticsSource(screen[18]).v4() };
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
      let obj3 = analyticsSource(screen[17]);
      if (null != country) {
        const obj6 = { countryCode: country };
        let obj7 = obj6;
      } else {
        obj7 = {};
      }
      const merged = Object.assign(obj7);
      obj5.logPerf = true;
      const tmp11Result = onNavigateAway(screen[20])(obj5, memo);
      categories = tmp11Result.categories;
      isFetchingCategories = tmp11Result.isFetchingCategories;
      const tmp11 = onNavigateAway(screen[20]);
      if (screen === stateFromStores.ORBS) {
        let HOME = analyticsLocations.ORBS;
      } else {
        HOME = analyticsLocations.HOME;
      }
      const maybeFetchCollectiblesShopHome = analyticsSource(screen[21]).useMaybeFetchCollectiblesShopHome(
        HOME,
        { noCache, includeUnpublished, logPerf: true },
        memo,
      );
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
      let tmpResult = analyticsSource(screen[21]);
      const googleSkuIds = onNavigateAway(screen[24]).useGoogleSkuIds(memo1, true === isFetchingCategories);
      isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
      const fetchError = googleSkuIds.fetchError;
      const tmp8Result = onNavigateAway(screen[24]);
      currentUserIfAvailable = analyticsSource(screen[25]).useCurrentUserIfAvailable();
      const tmpResult7 = analyticsSource(screen[25]);
      const currentUserWishlist = analyticsSource(screen[26]).useCurrentUserWishlist();
      const tmpResult8 = analyticsSource(screen[26]);
      const items4 = [isFetchingCategories];
      stateFromStores = analyticsSource(screen[17]).useStateFromStores(items4, () =>
        analyticsSource(screen[27]).isThemeDark(isFetchingCategories.theme),
      );
      const tmpResult9 = analyticsSource(screen[17]);
      const items5 = [onNavigateAway(screen[12]).COLLECTIBLES_SHOP];
      if (stateFromStores.SHOP_ALL === screen) {
        let COLLECTIBLES_SHOP_HOME_SCREEN = tmp8(tmp2[12]).COLLECTIBLES_SHOP_INDEX_PAGE;
      } else if (tmp14.ORBS === screen) {
        COLLECTIBLES_SHOP_HOME_SCREEN = tmp8(tmp2[12]).COLLECTIBLES_SHOP_ORBS_TAB;
      } else {
        let FEATURED_PAGE = tmp14.FEATURED_PAGE;
        COLLECTIBLES_SHOP_HOME_SCREEN = tmp8(tmp2[12]).COLLECTIBLES_SHOP_HOME_SCREEN;
      }
      items5[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
      analyticsLocations = onNavigateAway(screen[28])(items5).analyticsLocations;
      const tmp8Result6 = onNavigateAway(screen[28]);
      navigation = analyticsSource(screen[29]).useNavigation();
      const items6 = [navigation, onNavigateAway];
      const effect = obj4.useEffect(
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
      memo2 = obj4.useMemo(() => {
        const items = [...categories.values()];
        const obj = collectibles_CollectiblesUtils;
        let result1 = BillingPlatformUtils.isGooglePlayBillingSupported();
        if (result1) {
          let tmp5 = !bypassGoogleSkuSync;
          if (!bypassGoogleSkuSync) {
            let tmp7 = !isFetchingGoogleSkus;
            if (!isFetchingGoogleSkus) {
              tmp7 = !isFetchingCategories;
            }
            tmp5 = tmp7;
          }
          result1 = tmp5;
        }
        let result = items;
        if (result1) {
          result = collectibles_CollectiblesUtils.filterGPlaySyncedCategories(items);
          const tmpResult = collectibles_CollectiblesUtils;
        }
        return obj.filterHiddenCategories(result);
      }, items7);
      const tmpResult10 = analyticsSource(screen[29]);
      const tmp26 = Date.now() - first > currentUserIfAvailable;
      categoryIndex = analyticsSource(screen[32]).useCollectiblesShopDeepLinkProps({ categories: memo2 }).categoryIndex;
      const tmpResult11 = analyticsSource(screen[32]);
      const tmp4Result = bypassGoogleSkuSync(
        noCache.useState(
          analyticsSource(screen[33]).UNSAFE_isDismissibleContentDismissed(
            analyticsSource(screen[34]).DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL,
          ),
        ),
        2,
      );
      first1 = tmp4Result[0];
      closure_18 = tmp29;
      const items8 = [currentUserIfAvailable, screen, first1];
      const tmp4Result2 = bypassGoogleSkuSync(
        noCache.useMemo(() => {
          if (!obj.canUseShopDiscounts(currentUserIfAvailable)) {
            if (screen === constants.SHOP_ALL) {
              if (!first1) {
                const config = MobileNitroUpsellInShopFeedExperimentDefault.getConfig({
                  location: "CollectiblesShopV2ShopAll",
                });
                const items = [,];
                ({ enabled: arr[0], buttonVariant: arr[1] } = config);
                return items;
              }
            }
          }
          const items1 = [false, null];
          return items1;
        }, items8),
        2,
      );
      first2 = tmp4Result2[0];
      constants = tmp32;
      const items9 = [tmp4Result[1]];
      dismiss = obj4.useCallback(() => {
        closure_18(true);
        const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
          dismissible_content.DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL,
          { dismissAction: ContentDismissActionType.USER_DISMISS },
        );
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
            const obj3 = {
              sessionId,
              checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
              tab: constants.SHOP_ALL,
              unpublishedCategoriesShown: includeUnpublished,
              cacheDisabled: noCache,
            };
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
        return closure_2_17(CollectiblesShopFeaturedPageDefault, obj3);
      }, items15);
      const callback4 = obj4.useCallback(() => {
        if (!closure_23.current[constants.ORBS]) {
          closure_23.current[constants.ORBS] = true;
          const obj2 = {
            sessionId,
            checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
            tab: constants.ORBS,
            unpublishedCategoriesShown: includeUnpublished,
            cacheDisabled: noCache,
          };
          CollectiblesPerfLogging.trackShopPerf(obj2);
        }
      }, items16);
      const callback5 = obj4.useCallback((type) => type.type, []);
      onNavigateAway(screen[43])({ currentScreen: screen });
      if (null == currentUserIfAvailable) {
        return null;
      } else {
        if (screen !== tmp14.FEATURED_PAGE) {
          if (!tmp43) {
            if (tmp46) {
              tmp8(tmp2[44]).captureMessage("collectibles mobile shop loaded empty categories");
              const tmp8Result7 = tmp8(tmp2[44]);
            }
            if (null !== fetchError) {
              tmp8(tmp2[44]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
              const tmp8Result8 = tmp8(tmp2[44]);
            }
            const obj8 = { value: analyticsLocations, children: null };
            const obj9 = { newValue: tmp9, children: null };
            const obj10 = { style: spinner.rootContainer, children: null };
            const obj11 = { skuIDs: [], activeSubscription: null, children: null };
            if (screen === tmp14.SHOP_ALL) {
              const obj12 = { data: memo3, renderItem: callback1, getItemType: callback2, initialScrollIndex: memo4 };
              let tmp49Result = tmp49(tmp8(tmp2[46]), obj12);
              const tmp8Result9 = tmp8(tmp2[46]);
            } else if (screen === tmp14.ORBS) {
              const obj13 = { shopBlocks, fetchShopHomeError: null, onRenderFirstOrbsItem: null, getItemType: null };
              if (fetchShopHomeError == null) {
                fetchShopHomeError = null;
              }
              obj13.fetchShopHomeError = fetchShopHomeError;
              obj13.onRenderFirstOrbsItem = callback4;
              obj13.getItemType = callback5;
              tmp49Result = tmp49(tmp8(tmp2[47]), obj13);
              const tmp8Result10 = tmp8(tmp2[47]);
            } else {
              const obj14 = { children: null };
              const obj15 = { data: shopBlocks, renderItem: callback3, getItemType: callback5 };
              obj14.children = tmp49(tmp8(tmp2[46]), obj15);
              tmp49Result = tmp49(tmp(tmp2[48]).CollectiblesCoachmarkScrollDismissProvider, obj14);
            }
            obj11.children = tmp49Result;
            obj10.children = first1(tmp(tmp2[45]).NativePaymentContextProvider, obj11);
            const items17 = [first1(sessionId, obj10), first1(tmp8(tmp2[49]), {})];
            obj9.children = items17;
            obj8.children = closure_18(tmp(tmp2[50]).CollectiblesAnalyticsProvider, obj9);
            let tmp49Result2 = tmp49(tmp(tmp2[28]).AnalyticsLocationProvider, obj8);
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
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectiblesShopV2(screen) {
      const cResult = nativePaymentsConnected(576).c(10);
      const obj = nativePaymentsConnected(576);
      const nativeIAPPayments = NativePaymentHooksDefault.useNativeIAPPayments();
      nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
      const storeFront = nativeIAPPayments.storeFront;
      const tmp6 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function l() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const stateFromStores = nativePaymentsConnected(504).useStateFromStores(tmp7, tmp8);
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
      [tmp13, importDefault] = noop.useState(false);
      if (cResult[2] !== nativePaymentsConnected) {
        const fn2 = function _() {
          if (!timeout) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              closure_1_1(true);
            }, 10000);
            return () => clearTimeout(closure_0);
          }
        };
        const items1 = [nativePaymentsConnected];
        cResult[2] = nativePaymentsConnected;
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp15 = items1;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[3];
        tmp15 = cResult[4];
      }
      const effect = noop.useEffect(tmp14, tmp15);
      const tmp12 = _slicedToArray(noop.useState(false), 2);
      const tmpResult3 = nativePaymentsConnected(1382);
      if (!nativePaymentsConnected) {
        if (!tmp17) {
          if (!tmp13) {
            if (cResult[5] !== tmp6.spinner) {
              const obj3 = { style: tmp6.spinner, size: "large" };
              const tmp21 = closure_17(closure_5, obj3);
              cResult[5] = tmp6.spinner;
              cResult[6] = tmp21;
              let tmp18 = tmp21;
            } else {
              tmp18 = cResult[6];
            }
            return tmp18;
          }
        }
      }
      if (tmp13) {
        tmp(1382);
        const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj9.isIOS()}`;
        SentryUtilsDefault.captureMessage(
          `${`collectibles mobile shop failed to connect to native payments isIOS: ${obj9.isIOS()}`} isStable: ${tmp(5727).isStable}`,
        );
        const tmp4Result = SentryUtilsDefault;
      }
      if (cResult[7] === screen) {
      }
      const obj4 = {};
      const merged = Object.assign(screen);
      obj4.storeFront = storeFront;
      obj4.screen = screen.screen;
      const tmp26 = closure_17(closure_22, obj4);
      cResult[7] = screen;
      cResult[8] = storeFront;
      cResult[9] = tmp26;
      tmp17 = nativePaymentsConnected(1382).isIOS() && !nativePaymentsConnected(5727).isStable && isStaffResult;
    }
  : function CollectiblesShopV2(screen) {
      const nativeIAPPayments = NativePaymentHooksDefault.useNativeIAPPayments();
      const nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
      const tmp4 = closure_19();
      const items = [UserStore];
      const stateFromStores = nativePaymentsConnected(504).useStateFromStores(items, () =>
        currentUser.getCurrentUser(),
      );
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
            let tmp14 = closure_17(closure_5, obj3);
          }
          return tmp14;
        }
      }
      if (tmp9) {
        tmp5(1382);
        const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
        SentryUtilsDefault.captureMessage(
          `${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${tmp5(5727).isStable}`,
        );
        const tmpResult = SentryUtilsDefault;
      }
      const obj4 = {};
      const merged = Object.assign(screen);
      obj4.storeFront = nativeIAPPayments.storeFront;
      obj4.screen = screen.screen;
      tmp14 = closure_17(closure_22, obj4);
      tmp11 = nativePaymentsConnected(1382).isIOS() && !nativePaymentsConnected(5727).isStable && isStaffResult;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default tmp6;
export const CollectiblesShopV2 = tmp6;
