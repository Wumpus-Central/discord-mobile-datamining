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
  let stateFromStores2;
  closure_6 = undefined;
  let memo;
  let isBillingReady;
  c9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  closure_12 = undefined;
  ({ categoryName, analyticsContext } = categorySkuId);
  let items13 = closure_18();
  let stringResult = category;
  const stackNavigation = categorySkuId(category[12]).useStackNavigation();
  let obj = categorySkuId(category[12]);
  items = [c9];
  const stateFromStores = categorySkuId(category[13]).useStateFromStores(items, () =>
    _undefined.get("shop_include_unpublished"),
  );
  const tmp7 = stackNavigation(category[14])(categorySkuId, {
    includeUnpublished: stateFromStores,
    includePricing: true,
  });
  category = tmp7.category;
  ({ state, retry } = tmp7);
  const obj2 = categorySkuId(category[13]);
  let tmp4 = c9;
  const tmp6 = stackNavigation;
  const items1 = [c10];
  const items2 = [categorySkuId];
  let tmp10 = "ready" === state;
  let stateFromStores1 = categorySkuId(category[13]).useStateFromStores(
    items1,
    () =>
      "success" === StorefrontCollectionStore.getFetchState(categorySkuId) &&
      StorefrontCollectionStore.hasPricingCoverage(categorySkuId),
    items2,
  );
  if (tmp10) {
    tmp10 = null != category;
  }
  if (tmp10) {
    tmp10 = stateFromStores1;
  }
  stateFromStores1 = tmp10;
  const obj3 = categorySkuId(category[13]);
  const tmp8 = c10;
  const items3 = [tmp8];
  const items4 = [categorySkuId, tmp10];
  stateFromStores2 = categorySkuId(stringResult[13]).useStateFromStores(
    items3,
    () => {
      let tmp = stateFromStores1;
      if (stateFromStores1) {
        const collection = StorefrontCollectionStore.getCollection(categorySkuId);
        let isOrbsExclusive;
        if (collection != null) {
          isOrbsExclusive = collection.isOrbsExclusive;
        }
        tmp = true === isOrbsExclusive;
      }
      return tmp;
    },
    items4,
  );
  const tmpResult = categorySkuId(stringResult[13]);
  const items5 = [tmp4];
  const stateFromStores3 = categorySkuId(stringResult[13]).useStateFromStores(items5, () =>
    _undefined.get("bypass_google_sku_sync"),
  );
  const tmpResult4 = categorySkuId(stringResult[13]);
  let tmp14 = categorySkuId(stringResult[15]).isGooglePlayBillingSupported() && !stateFromStores3 && !stateFromStores2;
  closure_6 = tmp14;
  const items6 = [category];
  memo = stateFromStores2.useMemo(() => {
    if (null != category) {
      let googleSkuIds = collectibles_CollectiblesUtils.getGoogleSkuIds(tmp.products);
    } else {
      googleSkuIds = [];
    }
    items = [...new Set(googleSkuIds)];
    const sorted = items.sort();
    return sorted.join(",");
  }, items6);
  const tmpResult5 = categorySkuId(stringResult[15]);
  const items7 = [closure_11];
  const stateFromStoresObject = categorySkuId(stringResult[13]).useStateFromStoresObject(items7, () => ({
    isBillingReady: closure_11.isReady(),
    hasConnectionError: closure_11.hasConnectionError(),
  }));
  isBillingReady = stateFromStoresObject.isBillingReady;
  const tmpResult6 = categorySkuId(stringResult[13]);
  [tmp18, c9] = stateFromStores1(stateFromStores2.useState(0), 2);
  const tmp17 = stateFromStores1(stateFromStores2.useState(0), 2);
  [hasConnectionError, c10] = stateFromStores1(stateFromStores2.useState(false), 2);
  const tmp20 = stateFromStores1(stateFromStores2.useState(null), 2);
  closure_11 = tmp20[1];
  let tmp21 = tmp10;
  if (tmp10) {
    tmp21 = tmp14;
  }
  if (tmp21) {
    let tmp22 = !isBillingReady;
    if (isBillingReady) {
      tmp22 = !("" === memo || tmp20[0] === memo);
      const tmp23 = "" === memo || tmp20[0] === memo;
    }
    tmp21 = tmp22;
  }
  closure_12 = tmp21;
  const items8 = [tmp21, tmp18];
  const effect = obj7.useEffect(() => {
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => _undefined2(true), 30000);
      return () => clearTimeout(closure_0);
    }
  }, items8);
  const items9 = [tmp10, tmp14, isBillingReady, memo, tmp18];
  const effect1 = obj7.useEffect(() => {
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
    if (stateFromStores1) {
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
  }, items9);
  const items10 = [tmp14, tmp10, retry];
  const items11 = [stateFromStores2, stackNavigation];
  const callback = obj7.useCallback(() => {
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
    if (!stateFromStores1) {
      retry();
    }
  }, items10);
  const effect2 = obj7.useEffect(() => {
    if (stateFromStores2) {
      const obj = { screen: constants.ORBS, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP };
      const replaced = stackNavigation.replace(constants3.COLLECTIBLES_SHOP, obj);
    }
  }, items11);
  let tmp28 = null == categorySkuId;
  if (!tmp28) {
    tmp28 = "" === categorySkuId;
  }
  let tmp29 = tmp28;
  if (!tmp28) {
    tmp29 = "error" === state;
  }
  if (!tmp29) {
    if (tmp14) {
      if (!hasConnectionError) {
        hasConnectionError = stateFromStoresObject.hasConnectionError;
      }
      tmp14 = hasConnectionError;
    }
    tmp29 = tmp14;
  }
  if (!tmp29) {
    if (tmp10) {
      if (!tmp21) {
        if (!stateFromStores2) {
          const obj4 = { value: true, children: null };
          const obj5 = { category, analyticsContext };
          obj4.children = closure_16(CategoryItemsContent, obj5);
          return closure_16(tmp(stringResult[19]).ImprovedMobileShopLoadingProvider, obj4);
        }
      }
    }
  }
  const obj6 = { style: items13.rootContainer, children: null };
  let logoUrl;
  const tmp19 = stateFromStores1(stateFromStores2.useState(false), 2);
  if (category != null) {
    logoUrl = category.logoUrl;
  }
  const obj8 = { logoUrl, buttonColor: "Array", categoryName: "Array" };
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
  obj8.categoryName = name;
  const items12 = [closure_16(tmp6(stringResult[20]), obj8)];
  if (tmp29) {
    const obj9 = { style: items13.errorContainer, children: null };
    const obj10 = {
      variant: "body-md/medium",
      color: "text-default",
      accessibilityLiveRegion: "polite",
      children: null,
    };
    const intl2 = tmp(stringResult[21]).intl;
    obj10.children = intl2.string(tmp(stringResult[21]).t.eAn6z2);
    items13 = [closure_16(tmp(stringResult[22]).Text, obj10)];
    let tmp34Result = !tmp28;
    if (!tmp28) {
      const obj11 = { variant: "secondary", text: null, onPress: null };
      const intl3 = tmp(stringResult[21]).intl;
      stringResult = intl3.string(tmp(stringResult[21]).t["+hivLW"]);
      obj11.text = stringResult;
      obj11.onPress = callback;
      tmp34Result = closure_16(tmp(stringResult[23]).Button, obj11);
    }
    items13[1] = tmp34Result;
    obj9.children = items13;
    let tmp34Result1 = closure_17(tmp33, obj9);
  } else {
    tmp34Result1 = closure_16(tmp(stringResult[24]).ShopCategorySkeleton, {});
  }
  items12[1] = tmp34Result1;
  obj6.children = items12;
  closure_17(memo, obj6);
  const tmp6Result = tmp6(stringResult[20]);
}
function CategoryItemsContent(category) {
  category = category.category;
  _require = category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  const tmp = closure_18();
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
  const sharedValue = require("../../../../_runtime/metro/01653__.js").useSharedValue(0);
  const items1 = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = sharedValue.set(spring_spring.withSpring(num, springPresets.Reanimated3DefaultSpringConfig));
  }, items1);
  let obj3 = require("../../../../_runtime/metro/01653__.js");
  const items2 = [closure_20, sharedValue];
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
  const animatedStyle = require("../../../../_runtime/metro/01653__.js").useAnimatedStyle(
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
    AnalyticsUtilsDefault.track(constants2.COLLECTIBLES_SHOP_VIEWED, obj2);
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
    closure_16(require("CollectiblesProgressiveImage").CollectiblesProgressiveImage, {
      source: { uri: mobileBgUrl },
      style: absoluteFill.absoluteFill,
    }),
    ,
    ,
  ];
  const obj12 = { logoUrl, buttonColor: null, categoryName: null };
  let toHexStringResult;
  const obj11 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  const obj5 = require("../../../../_runtime/metro/01653__.js");
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  obj12.buttonColor = toHexStringResult;
  obj12.categoryName = category.name;
  items5[1] = closure_16(analyticsContext(analyticsLocations[20]), obj12);
  const obj13 = { style: null };
  const items6 = [tmp.border, animatedStyle];
  obj13.style = items6;
  items5[2] = closure_16(analyticsContext(analyticsLocations[29]).View, obj13);
  const obj14 = {
    category,
    products: filteredAndSortedProducts,
    scrollEnabled: true,
    onScroll: callback,
    paddingTop: null,
    paddingBottom: null,
    muteBundleStaticBackground: true,
    header: null,
    accessibilityLabel: null,
  };
  const tmp2Result = analyticsContext(analyticsLocations[20]);
  obj14.paddingTop = analyticsContext(analyticsLocations[11]).space.PX_16;
  obj14.paddingBottom =
    analyticsContext(analyticsLocations[27])().bottom + analyticsContext(analyticsLocations[11]).space.PX_16;
  let tmp14Result;
  if (category.skuId === closure_13) {
    const obj15 = { collectionSkuId: category.skuId };
    tmp14Result = closure_16(tmp5(tmp3[38]).TwelveDaysIndexNotice, obj15);
  }
  obj14.header = tmp14Result;
  const intl = tmp5(tmp3[21]).intl;
  obj14.accessibilityLabel = intl.formatToPlainString(require("util").t.FNtLb3, { category: category.name });
  items5[3] = closure_16(analyticsContext(analyticsLocations[37]), obj14);
  obj10.children = items5;
  obj9.children = closure_17(closure_7, obj10);
  obj7.children = closure_16(require("NativePaymentContext").NativePaymentContextProvider, obj9);
  obj6.children = closure_16(require("CollectiblesAnalyticsContext").CollectiblesAnalyticsProvider, obj7);
  return closure_16(require("useAnalyticsLocations").AnalyticsLocationProvider, obj6);
}
get_ActivityIndicator = fn(17);
({ NativeModules: closure_6, View: metroImportDefault, StyleSheet: closure_8 } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1073);
({ CollectiblesMobileShopScreen: closure_12, TWELVE_DAYS_COLLECTION_SKU_ID: map1 } = CollectiblesShopConstants);
const Constants = fn(1071);
({ AnalyticEvents: closure_14, UserSettingsSections: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4794);
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
let closure_18 = createStyles.createStyles(obj);
let closure_20 = {
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
    let tmp6 = closure_1_16(CategoryItemsContent, { category: null, analyticsContext: null });
    const obj3 = { category: null, analyticsContext: null };
  } else {
    const obj = {};
    const merged = Object.assign(category);
    tmp6 = closure_1_16(CategoryItemsBySku, obj);
  }
  return tmp6;
});
