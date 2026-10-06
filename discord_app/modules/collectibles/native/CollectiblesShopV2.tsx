// discord_app/modules/collectibles/native/CollectiblesShopV2.tsx
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesPerfLogging from "../utils/CollectiblesPerfLogging.tsx";
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import NativePaymentHooksDefault from "../../payments/native/hooks/NativePaymentHooks.android.tsx";
import MobileNitroUpsellInShopFeedExperiment from "MobileNitroUpsellInShopFeedExperiment.tsx";
import ShopNitroUpsellBanner2 from "ShopNitroUpsellBanner.tsx";
import ShopCategory from "ShopCategory.tsx";
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const MobileNitroUpsellInShopFeedExperimentDefault = MobileNitroUpsellInShopFeedExperiment;
let analyticsSource, constants, navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroRequire;
let unpackModuleId;
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
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({
  COLLECTIBLES_SHOP_CACHE_DURATION_MS: unpackModuleId,
  CollectiblesMobileShopScreen: closure_12,
  CollectibleShopTab: map1,
} = CollectiblesShopConstants);
({ AnalyticEvents: closure_14, PaymentGateways: closure_15 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles({
  rootContainer: { height: "100%", width: "100%" },
  spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 },
});
let closure_20 = { CATEGORY: "category", NITRO_UPSELL: "nitro_upsell" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (analyticsSource) => {
      let analyticsLocations;
      let bypassGoogleSkuSync;
      let country;
      let dismiss;
      let fetchError;
      let fetchShopHomeError;
      let isFetchingGoogleSkus;
      let noCache;
      let screen;
      let shopBlocks;
      let storeFront;
      let tmp10;
      let tmp11;
      let tmp50;
      let tmp51;
      let tmp6;
      let tmp7;
      let tmp2 = analyticsSource;
      let obj = analyticsSource(screen[14]);
      const cResult = obj.c(99);
      analyticsSource = analyticsSource.analyticsSource;
      const onNavigateAway = analyticsSource.onNavigateAway;
      ({ storeFront, screen } = analyticsSource);
      let obj2 = analyticsSource(screen[15]);
      const commonTriggerPoint = obj2.useCommonTriggerPoint(
        analyticsSource(screen[16]).CollectiblesShopOpenTriggerPoint,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp8 = analyticsLocations;
        let items = [analyticsLocations];
        const fn = function h() {
          let num = analyticsLocations.lastSuccessfulFetch;
          if (num == null) {
            num = 0;
          }
          const items = [num];
          return items;
        };
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmp2Result = tmp2(screen[17]);
      const first = noCache(tmp2Result.useStateFromStoresArray(tmp6, tmp7), 1)[0];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DevSettingsStore];
        class T {
          constructor() {
            const obj = {
              bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
              noCache: DevSettingsStore.get("shop_disable_cache"),
              includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
            };
            return obj;
          }
        }
        cResult[2] = items1;
        cResult[3] = T;
        tmp11 = T;
        tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmp2Result3 = tmp2(screen[17]);
      const stateFromStoresObject = tmp2Result3.useStateFromStoresObject(tmp10, tmp11);
      ({ bypassGoogleSkuSync, noCache } = stateFromStoresObject);
      const includeUnpublished = stateFromStoresObject.includeUnpublished;
      closure_19();
      if (storeFront != null) {
        country = storeFront.country;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            let obj2;
            const obj = { sessionId: obj2.v4() };
            obj2 = analyticsSource(screen[18]);
            return obj;
          }
        }
        cResult[4] = B;
        class T {
          constructor() {
            const obj = {
              bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
              noCache: DevSettingsStore.get("shop_disable_cache"),
              includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
            };
            return obj;
          }
        }
      } else {
        class B {
          constructor() {
            let obj2;
            const obj = { sessionId: obj2.v4() };
            obj2 = analyticsSource(screen[18]);
            return obj;
          }
        }
      }
      let tmp16 = onNavigateAway;
      let tmp17 = onNavigateAway(screen[19])(tmp15);
      const sessionId = tmp17.sessionId;
      let FEATURED_PAGE = screen;
      if (screen == null) {
        class B {
          constructor() {
            let obj2;
            const obj = { sessionId: obj2.v4() };
            obj2 = analyticsSource(screen[18]);
            return obj;
          }
        }
        FEATURED_PAGE = constants.FEATURED_PAGE;
      }
      if (cResult[5] === sessionId) {
        class B {
          constructor() {
            let obj2;
            const obj = { sessionId: obj2.v4() };
            obj2 = analyticsSource(screen[18]);
            return obj;
          }
        }
        if (cResult[8] !== country) {
          class B {
            constructor() {
              let obj2;
              const obj = { sessionId: obj2.v4() };
              obj2 = analyticsSource(screen[18]);
              return obj;
            }
          }
          tmp20[0] = constants4.APPLE;
          class T {
            constructor() {
              const obj = {
                bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
                noCache: DevSettingsStore.get("shop_disable_cache"),
                includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
              };
              return obj;
            }
          }
          const merged = Object.assign(tmp22);
          tmp20.logPerf = true;
          cResult[8] = country;
          cResult[9] = tmp20;
        } else {
          class B {
            constructor() {
              let obj2;
              const obj = { sessionId: obj2.v4() };
              obj2 = analyticsSource(screen[18]);
              return obj;
            }
          }
        }
        const tmp26 = tmp16(screen[20])(tmp20, tmp18);
        class T {
          constructor() {
            const obj = {
              bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
              noCache: DevSettingsStore.get("shop_disable_cache"),
              includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
            };
            return obj;
          }
        }
        const isFetchingCategories = tmp26.isFetchingCategories;
        if (cResult[10] === includeUnpublished) {
          let HOME;
          class B {
            constructor() {
              let obj2;
              const obj = { sessionId: obj2.v4() };
              obj2 = analyticsSource(screen[18]);
              return obj;
            }
          }
          tmp2(screen[21]);
          class T {
            constructor() {
              const obj = {
                bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
                noCache: DevSettingsStore.get("shop_disable_cache"),
                includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
              };
              return obj;
            }
          }
          if (screen === constants.ORBS) {
            class B {
              constructor() {
                let obj2;
                const obj = { sessionId: obj2.v4() };
                obj2 = analyticsSource(screen[18]);
                return obj;
              }
            }
            HOME = constants2.ORBS;
          } else {
            class B {
              constructor() {
                let obj2;
                const obj = { sessionId: obj2.v4() };
                obj2 = analyticsSource(screen[18]);
                return obj;
              }
            }
            HOME = constants2.HOME;
          }
          ({ shopBlocks, fetchShopHomeError } = tmp29(HOME, tmp27, tmp18));
          tmp29(HOME, tmp27, tmp18);
          if (true !== isFetchingCategories) {
            let tmp42;
            let tmp41;
            class B {
              constructor() {
                let obj2;
                const obj = { sessionId: obj2.v4() };
                obj2 = analyticsSource(screen[18]);
                return obj;
              }
            }
            if (false !== obj8.isAndroid()) {
              class B {
                constructor() {
                  let obj2;
                  const obj = { sessionId: obj2.v4() };
                  obj2 = analyticsSource(screen[18]);
                  return obj;
                }
              }
            }
            class T {
              constructor() {
                const obj = {
                  bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
                  noCache: DevSettingsStore.get("shop_disable_cache"),
                  includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
                };
                return obj;
              }
            }
            const obj9 = onNavigateAway(screen[24]);
            const googleSkuIds = obj9.useGoogleSkuIds(tmp34, true === isFetchingCategories);
            ({ isFetchingGoogleSkus, fetchError } = googleSkuIds);
            const obj10 = analyticsSource(screen[25]);
            const currentUserIfAvailable = obj10.useCurrentUserIfAvailable();
            const obj11 = analyticsSource(screen[26]);
            const currentUserWishlist = obj11.useCurrentUserWishlist();
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class B {
                constructor() {
                  let obj2;
                  const obj = { sessionId: obj2.v4() };
                  obj2 = analyticsSource(screen[18]);
                  return obj;
                }
              }
              const items2 = [currentUserIfAvailable];
              class T {
                constructor() {
                  const obj = {
                    bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
                    noCache: DevSettingsStore.get("shop_disable_cache"),
                    includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
              cResult[16] = items2;
              cResult[17] = tmp43;
              tmp42 = tmp43;
              tmp41 = items2;
            } else {
              class B {
                constructor() {
                  let obj2;
                  const obj = { sessionId: obj2.v4() };
                  obj2 = analyticsSource(screen[18]);
                  return obj;
                }
              }
              tmp42 = cResult[17];
            }
            const tmp38Result = analyticsSource(screen[17]);
            const stateFromStores = tmp38Result.useStateFromStores(tmp41, tmp42);
            if (cResult[18] !== screen) {
              class B {
                constructor() {
                  let obj2;
                  const obj = { sessionId: obj2.v4() };
                  obj2 = analyticsSource(screen[18]);
                  return obj;
                }
              }
              const tmp46 = screenToAnalyticsLocation(screen);
              class T {
                constructor() {
                  const obj = {
                    bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
                    noCache: DevSettingsStore.get("shop_disable_cache"),
                    includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
              cResult[18] = screen;
              cResult[19] = tmp46;
            } else {
              class B {
                constructor() {
                  let obj2;
                  const obj = { sessionId: obj2.v4() };
                  obj2 = analyticsSource(screen[18]);
                  return obj;
                }
              }
            }
            if (cResult[20] !== tmp45) {
              class B {
                constructor() {
                  let obj2;
                  const obj = { sessionId: obj2.v4() };
                  obj2 = analyticsSource(screen[18]);
                  return obj;
                }
              }
              tmp48[0] = tmp35(screen[12]).COLLECTIBLES_SHOP;
              tmp48[1] = tmp45;
              class T {
                constructor() {
                  const obj = {
                    bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
                    noCache: DevSettingsStore.get("shop_disable_cache"),
                    includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
              cResult[20] = tmp45;
              cResult[21] = tmp48;
            } else {
              class B {
                constructor() {
                  let obj2;
                  const obj = { sessionId: obj2.v4() };
                  obj2 = analyticsSource(screen[18]);
                  return obj;
                }
              }
            }
            analyticsLocations = tmp35(screen[28])(tmp48).analyticsLocations;
            const tmp38Result4 = analyticsSource(screen[29]);
            navigation = tmp38Result4.useNavigation();
            if (cResult[22] === navigation) {
              class B {
                constructor() {
                  let obj2;
                  const obj = { sessionId: obj2.v4() };
                  obj2 = analyticsSource(screen[18]);
                  return obj;
                }
              }
              const effect = includeUnpublished.useEffect(tmp50, tmp51);
              class T {
                constructor() {
                  const obj = {
                    bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
                    noCache: DevSettingsStore.get("shop_disable_cache"),
                    includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
                  };
                  return obj;
                }
              }
              const items3 = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items3, obj6.values(), 0);
              const filterHiddenCategories = analyticsSource(screen[31]).filterHiddenCategories;
              analyticsSource(screen[31]);
              let result = items3;
              const tmp38Result6 = analyticsSource(screen[30]);
              if (tmp38Result6.isGooglePlayBillingSupported()) {
                class B {
                  constructor() {
                    let obj2;
                    const obj = { sessionId: obj2.v4() };
                    obj2 = analyticsSource(screen[18]);
                    return obj;
                  }
                }
                if (!bypassGoogleSkuSync) {
                  class B {
                    constructor() {
                      let obj2;
                      const obj = { sessionId: obj2.v4() };
                      obj2 = analyticsSource(screen[18]);
                      return obj;
                    }
                  }
                  if (!isFetchingGoogleSkus) {
                    class B {
                      constructor() {
                        let obj2;
                        const obj = { sessionId: obj2.v4() };
                        obj2 = analyticsSource(screen[18]);
                        return obj;
                      }
                    }
                    if (!isFetchingCategories) {
                      class B {
                        constructor() {
                          let obj2;
                          const obj = { sessionId: obj2.v4() };
                          obj2 = analyticsSource(screen[18]);
                          return obj;
                        }
                      }
                      result = obj15.filterGPlaySyncedCategories(items3);
                    }
                  }
                }
              }
              const result1 = filterHiddenCategories(result);
              cResult[26] = bypassGoogleSkuSync;
              cResult[27] = obj6;
              cResult[28] = isFetchingCategories;
              cResult[29] = isFetchingGoogleSkus;
              cResult[30] = result1;
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
            tmp50 = ge;
            tmp51 = items4;
          }
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor() {
                let obj2;
                const obj = { sessionId: obj2.v4() };
                obj2 = analyticsSource(screen[18]);
                return obj;
              }
            }
            cResult[13] = tmp33;
            class T {
              constructor() {
                const obj = {
                  bypassGoogleSkuSync: DevSettingsStore.get("bypass_google_sku_sync"),
                  noCache: DevSettingsStore.get("shop_disable_cache"),
                  includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
                };
                return obj;
              }
            }
          } else {
            class B {
              constructor() {
                let obj2;
                const obj = { sessionId: obj2.v4() };
                obj2 = analyticsSource(screen[18]);
                return obj;
              }
            }
          }
        }
        let obj3 = { noCache, includeUnpublished, logPerf: true };
        cResult[10] = includeUnpublished;
        cResult[11] = noCache;
        cResult[12] = obj3;
      }
      const obj4 = { sessionId, tab: FEATURED_PAGE };
      cResult[5] = sessionId;
      cResult[6] = FEATURED_PAGE;
      cResult[7] = obj4;
    }
  : (analyticsSource) => {
      let COLLECTIBLES_SHOP_HOME_SCREEN;
      let CollectiblesAnalyticsProvider;
      let HOME;
      let NativePaymentContextProvider;
      let fetchShopHomeError;
      let items17;
      let obj11;
      let obj15;
      let obj7;
      let obj9;
      let screen;
      let shopBlocks;
      let storeFront;
      let tmp52Result;
      let tmp53;
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
      navigation = undefined;
      let memo2;
      let categoryIndex;
      let first1;
      let closure_18;
      let first2;
      constants = undefined;
      let dismiss;
      let memo3;
      let closure_23;
      let tmp = analyticsSource;
      let tmp2 = screen;
      let obj = analyticsSource(screen[15]);
      const commonTriggerPoint = obj.useCommonTriggerPoint(
        analyticsSource(screen[16]).CollectiblesShopOpenTriggerPoint,
      );
      let obj2 = analyticsSource(screen[17]);
      let items = [isFetchingGoogleSkus];
      const tmp4 = bypassGoogleSkuSync;
      const first = bypassGoogleSkuSync(
        obj2.useStateFromStoresArray(items, () => {
          let num = isFetchingGoogleSkus.lastSuccessfulFetch;
          if (num == null) {
            num = 0;
          }
          const items = [num];
          return items;
        }),
        1,
      )[0];
      let obj3 = analyticsSource(screen[17]);
      let items1 = [categories];
      const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
        const obj = {
          bypassGoogleSkuSync: categories.get("bypass_google_sku_sync"),
          noCache: categories.get("shop_disable_cache"),
          includeUnpublished: categories.get("shop_include_unpublished"),
        };
        return obj;
      });
      bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
      const noCache = stateFromStoresObject.noCache;
      const includeUnpublished = stateFromStoresObject.includeUnpublished;
      const tmp7 = first2();
      let country;
      if (storeFront != null) {
        country = storeFront.country;
      }
      const tmp9 = onNavigateAway;
      const tmp10 = onNavigateAway(tmp2[19])(() => {
        let obj2;
        const obj = { sessionId: obj2.v4() };
        obj2 = analyticsSource(screen[18]);
        return obj;
      });
      sessionId = tmp10.sessionId;
      const items2 = [sessionId, screen];
      const memo = noCache.useMemo(() => {
        let FEATURED_PAGE;
        const obj = { sessionId, tab: FEATURED_PAGE };
        FEATURED_PAGE = screen;
        if (screen == null) {
          FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
        }
        return obj;
      }, items2);
      const obj5 = { paymentGateway: memo2.APPLE, logPerf: true };
      const tmp12 = onNavigateAway(tmp2[20]);
      if (null != country) {
        obj7 = { countryCode: country };
        const obj6 = { countryCode: country };
      } else {
        obj7 = {};
      }
      const merged = Object.assign(obj7);
      const tmp12Result = tmp12(obj5, memo);
      categories = tmp12Result.categories;
      isFetchingCategories = tmp12Result.isFetchingCategories;
      let tmpResult = tmp(tmp2[21]);
      let tmp16 = stateFromStores;
      const useMaybeFetchCollectiblesShopHome = tmpResult.useMaybeFetchCollectiblesShopHome;
      if (screen === stateFromStores.ORBS) {
        HOME = analyticsLocations.ORBS;
      } else {
        let tmp17 = analyticsLocations;
        HOME = analyticsLocations.HOME;
      }
      const maybeFetchCollectiblesShopHome = useMaybeFetchCollectiblesShopHome(
        HOME,
        { noCache, includeUnpublished, logPerf: true },
        memo,
      );
      ({ shopBlocks, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
      const items3 = [categories, isFetchingCategories];
      const isFetchingShopHome = maybeFetchCollectiblesShopHome.isFetchingShopHome;
      const memo1 = obj4.useMemo(() => {
        if (true !== isFetchingCategories) {
          let obj = PlatformUtils;
          if (false !== obj.isAndroid()) {
            let items = [];
            const values = categories.values();
            for (const item10017 of values) {
              let products = item10017.products;
              let item = products.forEach((googleSkuIds) => {
                let tmp2 = undefined !== googleSkuIds.googleSkuIds;
                if (tmp2) {
                  tmp2 = null !== googleSkuIds.googleSkuIds;
                }
                if (tmp2) {
                  let push = items.push;
                  let _Object = Object;
                  items = [];
                  HermesBuiltin.arraySpread(items, Object.values(googleSkuIds.googleSkuIds), 0);
                  HermesBuiltin.apply(push, items, items);
                }
                const obj = analyticsSource(screen[23]);
                if (obj.getIsVariantProduct(googleSkuIds)) {
                  const variants = googleSkuIds.variants;
                  const item = variants.forEach((googleSkuIds) => {
                    const tmp2 = undefined !== googleSkuIds.googleSkuIds && null !== googleSkuIds.googleSkuIds;
                    if (tmp2) {
                      const push = navigation.push;
                      const _Object = Object;
                      items = [];
                      HermesBuiltin.arraySpread(items, Object.values(googleSkuIds.googleSkuIds), 0);
                      HermesBuiltin.apply(push, items, navigation);
                    }
                  });
                }
              });
              continue;
            }
            return items;
          }
        }
        return [];
      }, items3);
      const tmp9Result = tmp9(tmp2[24]);
      const googleSkuIds = tmp9Result.useGoogleSkuIds(memo1, true === isFetchingCategories);
      isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
      const fetchError = googleSkuIds.fetchError;
      const tmpResult7 = tmp(tmp2[25]);
      currentUserIfAvailable = tmpResult7.useCurrentUserIfAvailable();
      const tmpResult8 = tmp(tmp2[26]);
      const currentUserWishlist = tmpResult8.useCurrentUserWishlist();
      const items4 = [isFetchingCategories];
      const tmpResult9 = tmp(tmp2[17]);
      stateFromStores = tmpResult9.useStateFromStores(items4, () => {
        const obj = analyticsSource(screen[27]);
        return obj.isThemeDark(isFetchingCategories.theme);
      });
      const items5 = [,];
      const tmp9Result6 = tmp9(tmp2[28]);
      items5[0] = tmp9(tmp2[12]).COLLECTIBLES_SHOP;
      if (tmp16.SHOP_ALL === screen) {
        COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[12]).COLLECTIBLES_SHOP_INDEX_PAGE;
      } else if (tmp16.ORBS === screen) {
        COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[12]).COLLECTIBLES_SHOP_ORBS_TAB;
      } else {
        let FEATURED_PAGE = tmp16.FEATURED_PAGE;
        COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[12]).COLLECTIBLES_SHOP_HOME_SCREEN;
      }
      items5[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
      analyticsLocations = tmp9Result6(items5).analyticsLocations;
      const tmpResult10 = tmp(tmp2[29]);
      navigation = tmpResult10.useNavigation();
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
        const filterHiddenCategories = collectibles_CollectiblesUtils.filterHiddenCategories;
        collectibles_CollectiblesUtils;
        let result = items;
        const obj = BillingPlatformUtils;
        if (obj.isGooglePlayBillingSupported()) {
          result = items;
          if (!bypassGoogleSkuSync) {
            result = items;
            if (!isFetchingGoogleSkus) {
              result = items;
              if (!isFetchingCategories) {
                const tmpResult = collectibles_CollectiblesUtils;
                result = tmpResult.filterGPlaySyncedCategories(items);
              }
            }
          }
        }
        return filterHiddenCategories(result);
      }, items7);
      const tmp28 = Date.now() - first > currentUserIfAvailable;
      const tmpResult11 = tmp(tmp2[32]);
      categoryIndex = tmpResult11.useCollectiblesShopDeepLinkProps({ categories: memo2 }).categoryIndex;
      const useState = obj4.useState;
      const tmpResult12 = tmp(tmp2[33]);
      const tmp4Result = tmp4(
        useState(
          tmpResult12.UNSAFE_isDismissibleContentDismissed(
            tmp(tmp2[34]).DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL,
          ),
        ),
        2,
      );
      first1 = tmp4Result[0];
      closure_18 = tmp31;
      const items8 = [currentUserIfAvailable, screen, first1];
      const tmp4Result2 = tmp4(
        noCache.useMemo(() => {
          const obj = PremiumUtilsDefault;
          if (!obj.canUseShopDiscounts(currentUserIfAvailable)) {
            if (screen === stateFromStores.SHOP_ALL) {
              if (!first1) {
                const tmpResult = MobileNitroUpsellInShopFeedExperimentDefault;
                const config = tmpResult.getConfig({ location: "CollectiblesShopV2ShopAll" });
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
      constants = tmp34;
      const items9 = [tmp4Result[1]];
      dismiss = obj4.useCallback(() => {
        closure_18(true);
        const obj = DismissibleContentUnsafeUtils;
        const obj2 = { dismissAction: ContentDismissActionType.USER_DISMISS };
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(
          dismissible_content.DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL,
          obj2,
        );
      }, items9);
      const items10 = [memo2, first2];
      memo3 = obj4.useMemo(() => {
        const mapped = memo2.map((category, categoryIndex) => ({ kind: constants.CATEGORY, category, categoryIndex }));
        const tmp = first2 && mapped.length > 0;
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
      closure_23 = obj4.useRef({ [tmp16.SHOP_ALL]: false, [tmp16.FEATURED_PAGE]: false, [tmp16.ORBS]: false });
      const items12 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
      const effect1 = obj4.useEffect(() => {
        let str;
        let FEATURED_PAGE = screen;
        const obj = {
          location_stack: analyticsLocations,
          page_session_id: sessionId,
          source: analyticsSource,
          page_type: str,
        };
        str = "home";
        const tmp =
          null == screen ||
          FEATURED_PAGE === stateFromStores.FEATURED_PAGE ||
          FEATURED_PAGE === stateFromStores.SHOP_ALL;
        const track = AnalyticsUtilsDefault.track;
        const COLLECTIBLES_SHOP_VIEWED = navigation.COLLECTIBLES_SHOP_VIEWED;
        AnalyticsUtilsDefault;
        if (!tmp) {
          str = FEATURED_PAGE;
        }
        track(COLLECTIBLES_SHOP_VIEWED, obj);
        const tmp8 = CollectiblesPerfLogging;
        const trackShopPerf = tmp8.trackShopPerf;
        const obj2 = {
          sessionId,
          checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
          tab: FEATURED_PAGE,
          unpublishedCategoriesShown: includeUnpublished,
          cacheDisabled: noCache,
        };
        if (FEATURED_PAGE == null) {
          FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
        }
        trackShopPerf(obj2);
      }, items12);
      const items13 = [currentUserIfAvailable];
      const effect2 = obj4.useEffect(() => {
        if (null != currentUserIfAvailable) {
          maybeFetchUserProfileDefault(tmp.id);
        }
      }, items13);
      const items14 = [sessionId, includeUnpublished, noCache, stateFromStores, dismiss, tmp4Result2[1]];
      const callback1 = obj4.useCallback((item) => {
        let GET_NITRO;
        let tmp18Result;
        item = item.item;
        if (item.kind === stateFromStores.NITRO_UPSELL) {
          const obj2 = { isDarkTheme: stateFromStores, dismiss, buttonVariant: GET_NITRO };
          GET_NITRO = stateFromStores;
          const ShopNitroUpsellBanner = ShopNitroUpsellBanner2.ShopNitroUpsellBanner;
          if (stateFromStores == null) {
            GET_NITRO = MobileNitroUpsellInShopFeedExperiment.NitroUpsellBannerButtonVariant.GET_NITRO;
          }
          tmp18Result = first1(ShopNitroUpsellBanner, obj2);
        } else {
          const tmp3 = 0 !== item.categoryIndex || closure_23.current[stateFromStores.SHOP_ALL];
          if (!tmp3) {
            closure_23.current[stateFromStores.SHOP_ALL] = true;
            const obj = {
              sessionId,
              checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
              tab: stateFromStores.SHOP_ALL,
              unpublishedCategoriesShown: includeUnpublished,
              cacheDisabled: noCache,
            };
            const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
            CollectiblesPerfLogging;
            trackShopPerf(obj);
          }
          const obj3 = { category: item.category, isDarkTheme: stateFromStores, index: item.categoryIndex };
          tmp18Result = first1(ShopCategory.ShopCategory, obj3);
        }
        return tmp18Result;
      }, items14);
      const items15 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
      const callback2 = obj4.useCallback((kind) => kind.kind, []);
      const items16 = [sessionId, includeUnpublished, noCache];
      const callback3 = obj4.useCallback((index) => {
        let tmp17;
        let tmp = 0 !== index.index;
        const item = index.item;
        if (!tmp) {
          tmp = closure_23.current[stateFromStores.FEATURED_PAGE];
        }
        if (!tmp) {
          closure_23.current[stateFromStores.FEATURED_PAGE] = true;
          const obj = {
            sessionId,
            checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
            tab: stateFromStores.FEATURED_PAGE,
            unpublishedCategoriesShown: includeUnpublished,
            cacheDisabled: noCache,
          };
          const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
          CollectiblesPerfLogging;
          trackShopPerf(obj);
        }
        const obj2 = { shopBlock: item, fetchShopHomeError: tmp17 };
        tmp17 = fetchShopHomeError;
        const tmp16 = CollectiblesShopFeaturedPageDefault;
        if (fetchShopHomeError == null) {
          tmp17 = null;
        }
        return first1(tmp16, obj2);
      }, items15);
      const callback4 = obj4.useCallback(() => {
        if (!closure_23.current[stateFromStores.ORBS]) {
          closure_23.current[stateFromStores.ORBS] = true;
          const obj = {
            sessionId,
            checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED,
            tab: stateFromStores.ORBS,
            unpublishedCategoriesShown: includeUnpublished,
            cacheDisabled: noCache,
          };
          const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
          CollectiblesPerfLogging;
          trackShopPerf(obj);
        }
      }, items16);
      const callback5 = obj4.useCallback((type) => type.type, []);
      tmp9(tmp2[43])({ currentScreen: screen });
      if (null == currentUserIfAvailable) {
        return null;
      } else {
        let tmp48;
        let num = 0;
        const tmp45 = 0 === memo2.length || tmp28;
        if (screen !== tmp16.FEATURED_PAGE) {
          let tmp52Result2;
          if (!tmp45) {
            const tmp49 = first > 0 && false === isFetchingCategories && 0 === categories.size;
            if (tmp49) {
              let str = "collectibles mobile shop loaded empty categories";
              const tmp9Result7 = tmp9(tmp2[44]);
              tmp9Result7.captureMessage("collectibles mobile shop loaded empty categories");
            }
            if (null !== fetchError) {
              const tmp9Result8 = tmp9(tmp2[44]);
              tmp9Result8.captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
            }
            const obj8 = { value: analyticsLocations, children: tmp53(CollectiblesAnalyticsProvider, obj9) };
            const AnalyticsLocationProvider = tmp(tmp2[28]).AnalyticsLocationProvider;
            obj9 = { newValue: tmp10, children: items17 };
            const obj10 = { style: tmp7.rootContainer, children: first1(NativePaymentContextProvider, obj11) };
            CollectiblesAnalyticsProvider = tmp(tmp2[50]).CollectiblesAnalyticsProvider;
            obj11 = { skuIDs: [], activeSubscription: null, children: tmp52Result };
            NativePaymentContextProvider = tmp(tmp2[45]).NativePaymentContextProvider;
            tmp53 = closure_18;
            const tmp54 = sessionId;
            if (screen === tmp16.SHOP_ALL) {
              const obj12 = { data: memo3, renderItem: callback1, getItemType: callback2, initialScrollIndex: memo4 };
              const tmp9Result9 = tmp9(tmp2[46]);
              tmp52Result = tmp52(tmp9Result9, obj12);
            } else if (screen === tmp16.ORBS) {
              const obj13 = {
                shopBlocks,
                fetchShopHomeError,
                onRenderFirstOrbsItem: callback4,
                getItemType: callback5,
              };
              const tmp9Result10 = tmp9(tmp2[47]);
              if (fetchShopHomeError == null) {
                fetchShopHomeError = null;
              }
              tmp52Result = tmp52(tmp9Result10, obj13);
            } else {
              const obj14 = { children: first1(tmp9(tmp2[46]), obj15) };
              const CollectiblesCoachmarkScrollDismissProvider = tmp(
                tmp2[48],
              ).CollectiblesCoachmarkScrollDismissProvider;
              obj15 = { data: shopBlocks, renderItem: callback3, getItemType: callback5 };
              tmp52Result = tmp52(CollectiblesCoachmarkScrollDismissProvider, obj14);
            }
            items17 = [first1(tmp54, obj10), first1(tmp9(tmp2[49]), {})];
            tmp52Result2 = tmp52(AnalyticsLocationProvider, obj8);
          } else {
            const obj16 = { style: tmp7.spinner, size: "large" };
            tmp52Result2 = first1(includeUnpublished, obj16);
          }
          tmp48 = tmp52Result2;
          return tmp48;
        }
        if (isFetchingShopHome) {
          const obj17 = { style: tmp7.spinner, size: "large" };
          tmp48 = first1(includeUnpublished, obj17);
        }
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (screen) => {
      let currentUser;
      let nativePaymentsConnected;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp18;
      let tmp7;
      let tmp8;
      const tmp = nativePaymentsConnected;
      const obj = nativePaymentsConnected(576);
      const cResult = obj.c(10);
      const obj2 = NativePaymentHooksDefault;
      const nativeIAPPayments = obj2.useNativeIAPPayments();
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
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
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
      [tmp13, importDefault] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[2] !== nativePaymentsConnected) {
        const fn2 = function _() {
          let closure_0;
          let timeout;
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
        tmp15 = items1;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[3];
        tmp15 = cResult[4];
      }
      const effect = react.useEffect(tmp14, tmp15);
      const tmpResult3 = tmp(1369);
      const tmp17 = tmpResult3.isIOS() && !tmp(5417).isStable && isStaffResult;
      if (!nativePaymentsConnected) {
        if (!tmp17) {
          if (!tmp13) {
            if (cResult[5] !== tmp6.spinner) {
              const obj3 = { style: tmp6.spinner, size: "large" };
              const tmp21 = closure_17(closure_5, obj3);
              cResult[5] = tmp6.spinner;
              cResult[6] = tmp21;
              tmp18 = tmp21;
            } else {
              tmp18 = cResult[6];
            }
          }
          return tmp18;
        }
      }
      if (tmp13) {
        const captureMessage = SentryUtilsDefault.captureMessage;
        SentryUtilsDefault;
        tmp(1369);
        const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj8.isIOS()}`;
        captureMessage(
          `${`collectibles mobile shop failed to connect to native payments isIOS: ${obj8.isIOS()}`} isStable: ${tmp(5417).isStable}`,
        );
      }
      if (cResult[7] === screen) {
        let tmp25;
        if (cResult[8] === storeFront) {
          tmp25 = cResult[9];
        }
        tmp18 = tmp25;
      }
      const obj4 = { storeFront, screen: screen.screen };
      const merged = Object.assign(screen);
      const tmp27 = closure_17(closure_22, obj4);
      cResult[7] = screen;
      cResult[8] = storeFront;
      cResult[9] = tmp27;
      tmp25 = tmp27;
    }
  : (screen) => {
      let currentUser;
      let tmp9;
      const obj = NativePaymentHooksDefault;
      const nativeIAPPayments = obj.useNativeIAPPayments();
      const nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
      const storeFront = nativeIAPPayments.storeFront;
      const items = [UserStore];
      const tmp4 = closure_19();
      const obj2 = nativePaymentsConnected(504);
      const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
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
      [tmp9, importDefault] = react.useState(false);
      const items1 = [nativePaymentsConnected];
      _slicedToArray(react.useState(false), 2);
      const effect = react.useEffect(() => {
        let closure_0;
        let timeout;
        if (!timeout) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }, items1);
      const tmp5Result = nativePaymentsConnected(1369);
      const tmp11 = tmp5Result.isIOS() && !nativePaymentsConnected(5417).isStable && isStaffResult;
      if (!nativePaymentsConnected) {
        if (!tmp11) {
          let tmp14;
          if (!tmp9) {
            const obj3 = { style: tmp4.spinner, size: "large" };
            tmp14 = closure_17(closure_5, obj3);
          }
          return tmp14;
        }
      }
      if (tmp9) {
        const captureMessage = SentryUtilsDefault.captureMessage;
        SentryUtilsDefault;
        nativePaymentsConnected(1369);
        const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`;
        captureMessage(
          `${`collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`} isStable: ${nativePaymentsConnected(5417).isStable}`,
        );
      }
      const obj4 = { storeFront, screen: screen.screen };
      const merged = Object.assign(screen);
      tmp14 = closure_17(closure_22, obj4);
    };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default tmp6;
export const CollectiblesShopV2 = tmp6;
