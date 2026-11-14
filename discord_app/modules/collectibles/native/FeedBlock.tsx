// discord_app/modules/collectibles/native/FeedBlock.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import uniqByDefault from "../../../../_runtime/18501_uniqBy.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const constants = fn(1074).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = [];
let closure_11 = [];
const createStyles = fn(5306);
let obj2 = {
  feedContainer: { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 },
  feedHeader: null,
  feedTitle: null,
  feedFooter: null,
  feedFooterImage: null,
  feedFooterOrbImage: null,
};
let obj3 = { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 };
obj2.feedHeader = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj4 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.feedTitle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 1,
  gap: nativeDefault.space.PX_8,
};
let obj5 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 1,
  gap: nativeDefault.space.PX_8,
};
obj2.feedFooter = {
  display: "flex",
  gap: nativeDefault.space.PX_16,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
obj2.feedFooterImage = { width: "100%", resizeMode: "cover" };
obj2.feedFooterOrbImage = { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(screen) {
  screen = screen.screen;
  let isInImprovedMobileShopLoading;
  importDefault = undefined;
  let shownSkuIds;
  resolvedSkuIds = undefined;
  let collectiblesShopProducts;
  let memo;
  let loadedGoogleSkuIds;
  ({ feedBlock, preferVCPrice, disableBundleStaticBackground } = screen);
  let feedFooterOrbImage = closure_12();
  let obj = shownSkuIds;
  items = [loadedGoogleSkuIds];
  const stateFromStores = isInImprovedMobileShopLoading(shownSkuIds[8]).useStateFromStores(items, () =>
    isInImprovedMobileShopLoading(shownSkuIds[9]).isThemeDark(loadedGoogleSkuIds.theme),
  );
  let obj2 = isInImprovedMobileShopLoading(shownSkuIds[8]);
  isInImprovedMobileShopLoading = isInImprovedMobileShopLoading(shownSkuIds[10]).useIsInImprovedMobileShopLoading();
  const tmp5 = require("useGetProductsFromSkus")();
  importDefault = tmp5;
  let tmp6 = require("useFeedBlockSkuIds")(feedBlock);
  shownSkuIds = tmp6.shownSkuIds;
  ({ resolvedSkuIds, isPersonalized } = tmp6);
  if (!isInImprovedMobileShopLoading) {
    resolvedSkuIds = closure_10;
  }
  const obj3 = isInImprovedMobileShopLoading(shownSkuIds[10]);
  collectiblesShopProducts = isInImprovedMobileShopLoading(obj[13]).useCollectiblesShopProducts(resolvedSkuIds);
  const items1 = [isInImprovedMobileShopLoading, tmp5, shownSkuIds, resolvedSkuIds, collectiblesShopProducts];
  memo = resolvedSkuIds.useMemo(() => {
    if (isInImprovedMobileShopLoading) {
      const mapped = resolvedSkuIds.map((item) => {
        let product;
        if (collectiblesShopProducts[item] != null) {
          product = tmp.product;
        }
        return product;
      });
      let tmp6Result = uniqByDefault(
        mapped.filter((item) => null != item),
        "storeListingId",
      );
    } else {
      tmp6Result = closure_1(shownSkuIds);
    }
    return tmp6Result;
  }, items1);
  const items2 = [isInImprovedMobileShopLoading, memo];
  const effect = resolvedSkuIds.useEffect(() => {
    if (isInImprovedMobileShopLoading) {
      const Emitter = initializeDefault.Emitter;
      Emitter.batched(() =>
        memo.forEach(isInImprovedMobileShopLoading(shownSkuIds[15]).seedCollectiblesProductFromStandaloneLoad),
      );
    }
  }, items2);
  const items3 = [isInImprovedMobileShopLoading, memo];
  const memo1 = resolvedSkuIds.useMemo(() => {
    if (isInImprovedMobileShopLoading) {
      let googleSkuIds = collectibles_CollectiblesUtils.getGoogleSkuIds(memo);
    } else {
      googleSkuIds = closure_11;
    }
    return googleSkuIds;
  }, items3);
  const tmpResult = isInImprovedMobileShopLoading(obj[13]);
  loadedGoogleSkuIds = require("NativePaymentHooks").useLoadedGoogleSkuIds(memo1);
  const items4 = [isInImprovedMobileShopLoading, memo, loadedGoogleSkuIds];
  const memo2 = resolvedSkuIds.useMemo(() => {
    if (isInImprovedMobileShopLoading) {
      let found = memo.filter((item) => {
        items = [item];
        const googleSkuIds = isInImprovedMobileShopLoading(shownSkuIds[16]).getGoogleSkuIds(items);
        return googleSkuIds.every((item) => set.has(item));
      });
    } else {
      found = memo;
    }
    return found;
  }, items4);
  const tmp4Result = require("NativePaymentHooks");
  const tmpResult3 = isInImprovedMobileShopLoading(obj[18]);
  const filteredAndSortedProducts = tmpResult3.useFilteredAndSortedProducts({
    products: memo2,
    maxProducts: isInImprovedMobileShopLoading(obj[12]).MAX_FEED_PRODUCTS,
    screen,
  });
  const obj4 = { products: memo2, maxProducts: isInImprovedMobileShopLoading(obj[12]).MAX_FEED_PRODUCTS, screen };
  const items5 = [memo];
  const stateFromStores1 = isInImprovedMobileShopLoading(obj[8]).useStateFromStores(
    items5,
    () => memo.useReducedMotion,
  );
  const tmpResult4 = isInImprovedMobileShopLoading(obj[8]);
  const intl = tmp(obj[21]).intl;
  const string = intl.string;
  const t = tmp(obj[21]).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj5 = {
    value: require("useAnalyticsLocations")(require("AnalyticsLocation").COLLECTIBLES_SHOP_POPULAR_PICKS)
      .analyticsLocations,
    children: null,
  };
  const obj6 = { style: feedFooterOrbImage.feedContainer, children: null };
  const obj7 = { style: feedFooterOrbImage.feedHeader, children: null };
  const obj8 = { style: feedFooterOrbImage.feedTitle, children: null };
  const items6 = [
    closure_8(isInImprovedMobileShopLoading(obj[22]).Heading, {
      variant: "heading-lg/semibold",
      children: stringResult,
    }),
  ];
  if (isPersonalized) {
    const obj9 = {
      onPress() {
        return closure_1(shownSkuIds[24]).openLazy(
          isInImprovedMobileShopLoading(shownSkuIds[26])(shownSkuIds[25], shownSkuIds.paths),
          "PersonalizationDisclaimerActionSheet",
          {},
        );
      },
      hitSlop: 14,
      "aria-label": null,
      children: null,
    };
    const intl2 = tmp(obj[21]).intl;
    obj9["aria-label"] = intl2.string(tmp(obj[21]).t.hvVgAZ);
    obj9.children = closure_8(tmp(obj[27]).CircleInformationIcon, { size: "xs" });
    isPersonalized = closure_8(tmp(obj[23]).PressableOpacity, obj9);
  }
  function goToShopAll() {
    const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
    items = [closure_1(shownSkuIds[19]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
    obj2.analyticsLocations = items;
    obj2.analyticsSource = closure_1(shownSkuIds[19]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    obj2.screen = constants.SHOP_ALL;
    const result = isInImprovedMobileShopLoading(shownSkuIds[15]).openCollectiblesShopMobile(obj2);
  }
  items6[1] = isPersonalized;
  obj8.children = items6;
  const items7 = [closure_9(collectiblesShopProducts, obj8)];
  let tmp17Result = !tmp20;
  if (screen !== constants.ORBS) {
    const obj10 = { onPress: goToShopAll, text: null, variant: "primary", size: "sm" };
    const intl3 = tmp(obj[21]).intl;
    obj10.text = intl3.string(tmp(obj[21]).t.xFcotU);
    tmp17Result = closure_8(tmp(obj[28]).Button, obj10);
  }
  items7[1] = tmp17Result;
  obj7.children = items7;
  const items8 = [closure_9(collectiblesShopProducts, obj7), ,];
  const obj11 = {
    products: filteredAndSortedProducts,
    loadingCardsNum: null,
    preferVCPrice: null,
    accessibilityLabel: null,
    disableBundleStaticBackground: null,
  };
  const tmp4Result3 = require("useAnalyticsLocations");
  obj11.loadingCardsNum = isInImprovedMobileShopLoading(obj[12]).MAX_FEED_PRODUCTS;
  obj11.preferVCPrice = preferVCPrice;
  obj11.accessibilityLabel = stringResult;
  obj11.disableBundleStaticBackground = disableBundleStaticBackground;
  items8[1] = closure_8(require("FeedProductList"), obj11);
  const obj12 = { style: feedFooterOrbImage.feedFooter, children: null };
  const obj13 = { variant: "heading-lg/semibold", accessibilityRole: "header", children: null };
  const intl4 = tmp(obj[21]).intl;
  obj13.children = intl4.string(isInImprovedMobileShopLoading(obj[21]).t.Yr70c4);
  const items9 = [closure_8(isInImprovedMobileShopLoading(obj[22]).Text, obj13), ,];
  const obj14 = { onPress: goToShopAll, text: null, variant: "primary", size: "md" };
  const intl5 = tmp(obj[21]).intl;
  obj14.text = intl5.string(isInImprovedMobileShopLoading(obj[21]).t.AfrvRD);
  items9[1] = closure_8(isInImprovedMobileShopLoading(obj[28]).Button, obj14);
  if (screen === constants.ORBS) {
    obj = {
      source: null,
      enableAnimation: null,
      resizeMode: "contain",
      style: null,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
    };
    const obj15 = { uri: tmp4(stateFromStores1 ? obj[31] : obj[32]) };
    obj.source = obj15;
    obj.enableAnimation = !stateFromStores1;
    feedFooterOrbImage = feedFooterOrbImage.feedFooterOrbImage;
    obj.style = feedFooterOrbImage;
    const tmp25 = stateFromStores1 ? obj[31] : obj[32];
  } else {
    const obj16 = {
      source: null,
      style: null,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
    };
    if (stateFromStores) {
      obj16.source = tmp(obj[33]);
      obj16.style = feedFooterOrbImage.feedFooterImage;
      let tmp24 = obj16;
    } else {
      obj16.source = tmp(obj[34]);
      obj16.style = feedFooterOrbImage.feedFooterImage;
      tmp24 = obj16;
    }
    items9[2] = closure_8(tmp23, tmp24);
    obj12.children = items9;
    items8[2] = closure_9(tmp19, obj12);
    obj6.children = items8;
    obj5.children = closure_9(tmp19, obj6);
    return closure_8(tmp(obj[20]).AnalyticsLocationProvider, obj5);
  }
  const tmp4Result4 = require("FeedProductList");
}
