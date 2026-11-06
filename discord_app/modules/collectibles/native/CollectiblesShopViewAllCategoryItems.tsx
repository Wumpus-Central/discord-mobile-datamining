// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesPerfLogging from "../utils/CollectiblesPerfLogging.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import StorefrontCollectionStore from "../../storefront/StorefrontCollectionStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

require = fn;
function CategoryItemsBySku(categorySkuId) {
  categorySkuId = categorySkuId.categorySkuId;
  let category;
  retry = undefined;
  let stateFromStores1;
  closure_6 = undefined;
  let memo;
  let isBillingReady;
  c9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  constants = undefined;
  ({ categoryName, analyticsContext } = categorySkuId);
  let items12 = closure_17();
  let stringResult = category;
  const stackNavigation = categorySkuId(category[12]).useStackNavigation();
  const tmp5 = stackNavigation(category[13])(categorySkuId, { includePricing: true });
  category = tmp5.category;
  ({ state, retry } = tmp5);
  let obj = categorySkuId(category[12]);
  let tmp4 = stackNavigation;
  items = [c10];
  const items1 = [categorySkuId];
  let tmp8 = "ready" === state;
  let stateFromStores = categorySkuId(category[14]).useStateFromStores(
    items,
    () =>
      "success" === StorefrontCollectionStore.getFetchState(categorySkuId) &&
      StorefrontCollectionStore.hasPricingCoverage(categorySkuId),
    items1,
  );
  if (tmp8) {
    tmp8 = null != category;
  }
  if (tmp8) {
    tmp8 = stateFromStores;
  }
  stateFromStores = tmp8;
  const obj2 = categorySkuId(category[14]);
  const tmp6 = c10;
  const items2 = [tmp6];
  const items3 = [categorySkuId, tmp8];
  stateFromStores1 = categorySkuId(stringResult[14]).useStateFromStores(
    items2,
    () => {
      let tmp = stateFromStores;
      if (stateFromStores) {
        const collection = StorefrontCollectionStore.getCollection(categorySkuId);
        let isOrbsExclusive;
        if (collection != null) {
          isOrbsExclusive = collection.isOrbsExclusive;
        }
        tmp = true === isOrbsExclusive;
      }
      return tmp;
    },
    items3,
  );
  const tmpResult = categorySkuId(stringResult[14]);
  const items4 = [c9];
  const stateFromStores2 = categorySkuId(stringResult[14]).useStateFromStores(items4, () =>
    _undefined.get("bypass_google_sku_sync"),
  );
  const tmpResult4 = categorySkuId(stringResult[14]);
  let tmp12 = categorySkuId(stringResult[15]).isGooglePlayBillingSupported() && !stateFromStores2 && !stateFromStores1;
  closure_6 = tmp12;
  const items5 = [category];
  memo = stateFromStores1.useMemo(() => {
    if (null != category) {
      let googleSkuIds = collectibles_CollectiblesUtils.getGoogleSkuIds(tmp.products);
    } else {
      googleSkuIds = [];
    }
    items = [...new Set(googleSkuIds)];
    const sorted = items.sort();
    return sorted.join(",");
  }, items5);
  const tmpResult5 = categorySkuId(stringResult[15]);
  const items6 = [closure_11];
  const stateFromStoresObject = categorySkuId(stringResult[14]).useStateFromStoresObject(items6, () => ({
    isBillingReady: closure_11.isReady(),
    hasConnectionError: closure_11.hasConnectionError(),
  }));
  isBillingReady = stateFromStoresObject.isBillingReady;
  const tmpResult6 = categorySkuId(stringResult[14]);
  [tmp16, c9] = stateFromStores(stateFromStores1.useState(0), 2);
  const tmp15 = stateFromStores(stateFromStores1.useState(0), 2);
  [hasConnectionError, c10] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp18 = stateFromStores(stateFromStores1.useState(null), 2);
  closure_11 = tmp18[1];
  let tmp19 = tmp8;
  if (tmp8) {
    tmp19 = tmp12;
  }
  if (tmp19) {
    let tmp20 = !isBillingReady;
    if (isBillingReady) {
      tmp20 = !("" === memo || tmp18[0] === memo);
      const tmp21 = "" === memo || tmp18[0] === memo;
    }
    tmp19 = tmp20;
  }
  constants = tmp19;
  const items7 = [tmp19, tmp16];
  const effect = obj6.useEffect(() => {
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => _undefined2(true), 30000);
      return () => clearTimeout(closure_0);
    }
  }, items7);
  const items8 = [tmp8, tmp12, isBillingReady, memo, tmp16];
  const effect1 = obj6.useEffect(() => {
    closure_1 = async function _loadSkus() {
      closure_0 = tmp3;
      await closure_2_0(closure_2_2[17]).loadInAppSkus(closure_1_7.split(","));
      if (1 === tmp7) {
        c2 = 0;
        if (closure_128_0) {
          _undefined2(true);
        }
        c3 = 3;
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (closure_128_0) {
          closure_1_11(memo);
        }
        c2 = 0;
      }
      return value;
    };
    if (stateFromStores) {
      if (closure_6) {
        if (isBillingReady) {
          if ("" !== memo) {
            c0 = true;
            (function loadSkus() {
              const self = this;
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
            return () => {
              c0 = false;
            };
          }
        }
      }
    }
  }, items8);
  const items9 = [tmp12, tmp8, retry];
  const items10 = [stateFromStores1, stackNavigation];
  const callback = obj6.useCallback(() => {
    _undefined2(false);
    closure_11(null);
    _undefined((arg0) => arg0 + 1);
    let tmp4 = closure_6;
    if (closure_6) {
      tmp4 = !IAPStore.isReady();
    }
    if (tmp4) {
      BillingManager = BillingManager.BillingManager;
      BillingManager.open();
    }
    if (!stateFromStores) {
      retry();
    }
  }, items9);
  const effect2 = obj6.useEffect(() => {
    if (stateFromStores1) {
      const obj = { screen: constants.ORBS, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP };
      const replaced = stackNavigation.replace(constants2.COLLECTIBLES_SHOP, obj);
    }
  }, items10);
  let tmp26 = null == categorySkuId;
  if (!tmp26) {
    tmp26 = "" === categorySkuId;
  }
  let tmp27 = tmp26;
  if (!tmp26) {
    tmp27 = "error" === state;
  }
  if (!tmp27) {
    if (tmp12) {
      if (!hasConnectionError) {
        hasConnectionError = stateFromStoresObject.hasConnectionError;
      }
      tmp12 = hasConnectionError;
    }
    tmp27 = tmp12;
  }
  if (!tmp27) {
    if (tmp8) {
      if (!tmp19) {
        if (!stateFromStores1) {
          const obj3 = { value: true, children: null };
          const obj4 = { category, analyticsContext };
          obj3.children = closure_15(CategoryItemsContent, obj4);
          return closure_15(tmp(stringResult[19]).ImprovedMobileShopLoadingProvider, obj3);
        }
      }
    }
  }
  const obj5 = { style: items12.rootContainer, children: null };
  let logoUrl;
  const tmp17 = stateFromStores(stateFromStores1.useState(false), 2);
  if (category != null) {
    logoUrl = category.logoUrl;
  }
  const obj7 = { logoUrl, buttonColor: "Array", categoryName: "svg" };
  let name;
  if (category != null) {
    name = category.name;
  }
  if (name == null) {
    name = categoryName;
  }
  if (name == null) {
    const intl = tmp(stringResult[21]).intl;
    name = intl.string(tmp(stringResult[21]).t.ZTNur7);
  }
  obj7.categoryName = name;
  const items11 = [closure_15(tmp4(stringResult[20]), obj7)];
  if (tmp27) {
    const obj8 = { style: items12.errorContainer, children: null };
    const obj9 = {
      variant: "body-md/medium",
      color: "text-default",
      accessibilityLiveRegion: "polite",
      children: null,
    };
    const intl2 = tmp(stringResult[21]).intl;
    obj9.children = intl2.string(tmp(stringResult[21]).t.eAn6z2);
    items12 = [closure_15(tmp(stringResult[22]).Text, obj9)];
    let tmp32Result = !tmp26;
    if (!tmp26) {
      const obj10 = { variant: "secondary", text: null, onPress: null };
      const intl3 = tmp(stringResult[21]).intl;
      stringResult = intl3.string(tmp(stringResult[21]).t["+hivLW"]);
      obj10.text = stringResult;
      obj10.onPress = callback;
      tmp32Result = closure_15(tmp(stringResult[23]).Button, obj10);
    }
    items12[1] = tmp32Result;
    obj8.children = items12;
    let tmp32Result1 = closure_16(tmp31, obj8);
  } else {
    tmp32Result1 = closure_15(tmp(stringResult[24]).ShopCategorySkeleton, {});
  }
  items11[1] = tmp32Result1;
  obj5.children = items11;
  closure_16(memo, obj5);
  const tmp4Result = tmp4(stringResult[20]);
}
function CategoryItemsContent(category) {
  category = category.category;
  _require = category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  const tmp = closure_17();
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[25])(category.styles).backgroundColors;
  items = [analyticsContext(analyticsLocations[18]).COLLECTIBLES_SHOP_INDEX_PAGE];
  analyticsLocations = analyticsContext(analyticsLocations[26])(items).analyticsLocations;
  const tmp4 = analyticsContext(analyticsLocations[26]);
  const filteredAndSortedProducts = require("useFilteredAndSortedProducts").useFilteredAndSortedProducts({
    products: category.products,
  });
  let obj = require("useFilteredAndSortedProducts");
  let obj2 = { products: category.products };
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const items1 = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = sharedValue.set(spring_spring.withSpring(num, springPresets.Reanimated3DefaultSpringConfig));
  }, items1);
  let obj3 = require("../../../../_runtime/metro/01652__.js");
  const items2 = [closure_19, sharedValue];
  _require = undefined;
  [tmp9, tmp10] = items2;
  class CollectiblesShopViewAllCategoryItemsTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp10];
  CollectiblesShopViewAllCategoryItemsTsx1.__closure = items3;
  CollectiblesShopViewAllCategoryItemsTsx1.__workletHash = 3426078799765;
  CollectiblesShopViewAllCategoryItemsTsx1.__initData = tmp9;
  let sessionId;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    CollectiblesShopViewAllCategoryItemsTsx1,
  );
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items4 = [sessionId, analyticsLocations, category.name];
  const effect = noop.useEffect(() => {
    const obj2 = {
      location_stack: analyticsLocations,
      page_session_id: null,
      source: null,
      page_type: "index",
      category: null,
    };
    let sessionId;
    if (analyticsContext != null) {
      sessionId = analyticsContext.sessionId;
    }
    obj2.page_session_id = sessionId;
    obj2.source = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
    obj2.category = _undefined.name;
    AnalyticsUtilsDefault.track(constants.COLLECTIBLES_SHOP_VIEWED, obj2);
    let sessionId1;
    if (analyticsContext != null) {
      sessionId1 = analyticsContext.sessionId;
    }
    const obj3 = CollectiblesPerfLogging;
    obj3.trackShopPerf({
      sessionId: sessionId1,
      checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
      tab: constants.SHOP_ALL,
      unpublishedCategoriesShown: false,
      cacheDisabled: false,
    });
    const obj4 = {
      sessionId: sessionId1,
      checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
      tab: constants.SHOP_ALL,
      unpublishedCategoriesShown: false,
      cacheDisabled: false,
    };
  }, items4);
  const obj6 = { value: analyticsLocations, children: null };
  const obj7 = { newValue: null, children: null };
  const obj8 = {};
  const merged = Object.assign(analyticsContext);
  obj8.pageCategory = category.name;
  obj7.newValue = obj8;
  const obj9 = { skuIDs: [], activeSubscription: null, children: null };
  const obj10 = { style: tmp.rootContainer, children: null };
  const items5 = [
    closure_15(require("CollectiblesProgressiveImage").CollectiblesProgressiveImage, {
      source: { uri: mobileBgUrl },
      style: absoluteFill.absoluteFill,
    }),
    ,
    ,
  ];
  const obj12 = { logoUrl, buttonColor: null, categoryName: null };
  let toHexStringResult;
  const obj11 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  const obj5 = require("../../../../_runtime/metro/01652__.js");
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  obj12.buttonColor = toHexStringResult;
  obj12.categoryName = category.name;
  items5[1] = closure_15(analyticsContext(analyticsLocations[20]), obj12);
  const obj13 = { style: null };
  const items6 = [tmp.border, animatedStyle];
  obj13.style = items6;
  items5[2] = closure_15(analyticsContext(analyticsLocations[29]).View, obj13);
  const obj14 = {
    category,
    products: filteredAndSortedProducts,
    scrollEnabled: true,
    onScroll: callback,
    paddingTop: null,
    paddingBottom: null,
    muteBundleStaticBackground: true,
    accessibilityLabel: null,
  };
  const tmp2Result = analyticsContext(analyticsLocations[20]);
  obj14.paddingTop = analyticsContext(analyticsLocations[11]).space.PX_16;
  obj14.paddingBottom =
    analyticsContext(analyticsLocations[27])().bottom + analyticsContext(analyticsLocations[11]).space.PX_16;
  const intl = tmp5(tmp3[21]).intl;
  obj14.accessibilityLabel = intl.formatToPlainString(require("util").t.FNtLb3, { category: category.name });
  items5[3] = closure_15(analyticsContext(analyticsLocations[37]), obj14);
  obj10.children = items5;
  obj9.children = closure_16(closure_7, obj10);
  obj7.children = closure_15(require("NativePaymentContext").NativePaymentContextProvider, obj9);
  obj6.children = closure_15(require("CollectiblesAnalyticsContext").CollectiblesAnalyticsProvider, obj7);
  return closure_15(require("useAnalyticsLocations").AnalyticsLocationProvider, obj6);
}
get_ActivityIndicator = fn(17);
({ NativeModules: closure_6, View: metroImportDefault, StyleSheet: closure_8 } = get_ActivityIndicator);
let closure_12 = fn(1074).CollectiblesMobileShopScreen;
const Constants = fn(1072);
({ AnalyticEvents: map1, UserSettingsSections: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5170);
let obj = {
  rootContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  border: null,
  errorContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.border = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.errorContainer = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
let closure_17 = createStyles.createStyles(obj);
let closure_19 = {
  code: "(function CollectiblesShopViewAllCategoryItemsTsx1(){let[borderOpacity]=this.__closure;return{opacity:borderOpacity.get()};})",
};
let obj5 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default noop.memo(function CollectiblesShopViewAllCategoryItems(category) {
  if (null != category.category) {
    ({ category: obj2.category, analyticsContext: obj2.analyticsContext } = category);
    let tmp6 = closure_1_15(CategoryItemsContent, { category: null, analyticsContext: null });
    const obj3 = { category: null, analyticsContext: null };
  } else {
    const obj = {};
    const merged = Object.assign(category);
    tmp6 = closure_1_15(CategoryItemsBySku, obj);
  }
  return tmp6;
});
