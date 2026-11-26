// === Module 17526: FeedBlock ===

// Module 17526 (FeedBlock)
import initializeDefault from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6310 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 11245 */;
import uniqByDefault from "uniqBy" /* 17509 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import ThemeStore from "ThemeStore" /* 1191 */;

require = fn;
const View = fn(17).View;
let closure_7 = fn(1073).CollectiblesMobileShopScreen;
const AnalyticEvents = fn(1071).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = [];
let closure_12 = [];
const createStyles = fn(5043);
let obj2 = { feedContainer: { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 }, feedHeader: null, feedTitle: null, feedFooter: null, feedFooterImage: null, feedFooterOrbImage: null };
let obj3 = { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 };
obj2.feedHeader = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.feedTitle = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
let obj5 = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj2.feedFooter = { display: "flex", gap: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
obj2.feedFooterImage = { width: "100%", resizeMode: "cover" };
obj2.feedFooterOrbImage = { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(screen) {
  screen = screen.screen;
  dependencyMap = undefined;
  resolvedSkuIds = undefined;
  let collectiblesShopProducts;
  let memo;
  let loadedGoogleSkuIds;
  let analyticsLocations;
  closure_9 = undefined;
  ({ feedBlock, preferVCPrice, disableBundleStaticBackground } = screen);
  let feedFooterOrbImage = closure_13();
  let obj = dependencyMap;
  items = [memo];
  const stateFromStores = screen(504).useStateFromStores(items, () => screen(closure_2[10]).isThemeDark(memo.theme));
  let obj2 = screen(504);
  const isInImprovedMobileShopLoading = screen(11265).useIsInImprovedMobileShopLoading();
  const tmp5 = isInImprovedMobileShopLoading(17508)();
  dependencyMap = tmp5;
  let tmp6 = isInImprovedMobileShopLoading(17489)(feedBlock);
  const shownSkuIds = tmp6.shownSkuIds;
  ({ resolvedSkuIds, isPersonalized } = tmp6);
  if (!isInImprovedMobileShopLoading) {
    resolvedSkuIds = closure_11;
  }
  let obj3 = screen(11265);
  collectiblesShopProducts = screen(11600).useCollectiblesShopProducts(resolvedSkuIds);
  const items1 = [isInImprovedMobileShopLoading, tmp5, shownSkuIds, resolvedSkuIds, collectiblesShopProducts];
  memo = shownSkuIds.useMemo(() => {
    if (isInImprovedMobileShopLoading) {
      const mapped = resolvedSkuIds.map((item) => {
        let product;
        if (collectiblesShopProducts[item] != null) {
          product = tmp.product;
        }
        return product;
      });
      let tmp6Result = uniqByDefault(mapped.filter((item) => null != item), "storeListingId");
    } else {
      tmp6Result = closure_2(shownSkuIds);
    }
    return tmp6Result;
  }, items1);
  const items2 = [isInImprovedMobileShopLoading, memo];
  const effect = shownSkuIds.useEffect(() => {
    if (isInImprovedMobileShopLoading) {
      const Emitter = initializeDefault.Emitter;
      Emitter.batched(() => memo.forEach(screen(closure_2[16]).seedCollectiblesProductFromStandaloneLoad));
    }
  }, items2);
  const items3 = [isInImprovedMobileShopLoading, memo];
  const memo1 = shownSkuIds.useMemo(() => {
    if (isInImprovedMobileShopLoading) {
      let googleSkuIds = collectibles_CollectiblesUtils.getGoogleSkuIds(memo);
    } else {
      googleSkuIds = closure_12;
    }
    return googleSkuIds;
  }, items3);
  const tmpResult = screen(11600);
  loadedGoogleSkuIds = isInImprovedMobileShopLoading(9269).useLoadedGoogleSkuIds(memo1);
  const items4 = [isInImprovedMobileShopLoading, memo, loadedGoogleSkuIds];
  const memo2 = shownSkuIds.useMemo(() => {
    if (isInImprovedMobileShopLoading) {
      let found = memo.filter((item) => {
        items = [item];
        const googleSkuIds = screen(closure_2[17]).getGoogleSkuIds(items);
        return googleSkuIds.every((item) => set.has(item));
      });
    } else {
      found = memo;
    }
    return found;
  }, items4);
  const tmp4Result = isInImprovedMobileShopLoading(9269);
  const tmpResult4 = screen(16593);
  const filteredAndSortedProducts = tmpResult4.useFilteredAndSortedProducts({ products: memo2, maxProducts: screen(17489).MAX_FEED_PRODUCTS, screen });
  let obj4 = { products: memo2, maxProducts: screen(17489).MAX_FEED_PRODUCTS, screen };
  const items5 = [collectiblesShopProducts];
  const stateFromStores1 = screen(504).useStateFromStores(items5, () => collectiblesShopProducts.useReducedMotion);
  const tmpResult5 = screen(504);
  analyticsLocations = isInImprovedMobileShopLoading(6379)(tmp4(6380).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations;
  const tmp4Result3 = isInImprovedMobileShopLoading(6379);
  closure_9 = screen(11214).useCollectiblesAnalyticsContext();
  const intl = tmp(1112).intl;
  const string = intl.string;
  const t = tmp(1112).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj5 = { value: analyticsLocations, children: null };
  const obj6 = { style: feedFooterOrbImage.feedContainer, children: null };
  const obj7 = { style: feedFooterOrbImage.feedHeader, children: null };
  const obj8 = { style: feedFooterOrbImage.feedTitle, children: null };
  const items6 = [closure_9(screen(5634).Heading, { variant: "heading-lg/semibold", children: stringResult }), ];
  if (isPersonalized) {
    const obj9 = {
      onPress() {
          return isInImprovedMobileShopLoading(closure_2[26]).openLazy(screen(closure_2[28])(closure_2[27], closure_2.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14,
      "aria-label": null,
      children: null
    };
    const intl2 = tmp(1112).intl;
    obj9["aria-label"] = intl2.string(tmp(1112).t.hvVgAZ);
    obj9.children = tmp17(tmp(5747).CircleInformationIcon, { size: "xs" });
    isPersonalized = tmp17(tmp(6152).PressableOpacity, obj9);
  }
  items6[1] = isPersonalized;
  obj8.children = items6;
  const items7 = [closure_10(resolvedSkuIds, obj8), ];
  let tmp17Result = !tmp20;
  if (screen !== loadedGoogleSkuIds.ORBS) {
    const obj10 = {
      onPress: function handleHeaderShopAllPress() {
          let sessionId;
          if (closure_9 != null) {
            sessionId = closure_9.sessionId;
          }
          const obj2 = { collectibles_shop_session_id: sessionId, page_type: screen, page_section: null, page_category: null, location_stack: null, cta_name: "feed header shop all" };
          let pageSection;
          if (closure_9 != null) {
            pageSection = closure_9.pageSection;
          }
          obj2.page_section = pageSection;
          let pageCategory;
          if (closure_9 != null) {
            pageCategory = closure_9.pageCategory;
          }
          obj2.page_category = pageCategory;
          obj2.location_stack = analyticsLocations;
          AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj2);
          const obj4 = { analyticsLocations: null, analyticsSource: null, screen: null };
          items = [AnalyticsLocationDefault.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
          obj4.analyticsLocations = items;
          obj4.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
          obj4.screen = loadedGoogleSkuIds.SHOP_ALL;
          const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
        },
      text: null,
      variant: "primary",
      size: "sm"
    };
    const intl3 = tmp(1112).intl;
    obj10.text = intl3.string(tmp(1112).t.xFcotU);
    tmp17Result = tmp17(tmp(5641).Button, obj10);
  }
  items7[1] = tmp17Result;
  obj7.children = items7;
  const items8 = [closure_10(resolvedSkuIds, obj7), , ];
  const obj11 = { products: filteredAndSortedProducts, loadingCardsNum: null, preferVCPrice: null, accessibilityLabel: null, disableBundleStaticBackground: null };
  const tmpResult6 = screen(11214);
  obj11.loadingCardsNum = screen(17489).MAX_FEED_PRODUCTS;
  obj11.preferVCPrice = preferVCPrice;
  obj11.accessibilityLabel = stringResult;
  obj11.disableBundleStaticBackground = disableBundleStaticBackground;
  items8[1] = closure_9(isInImprovedMobileShopLoading(17521), obj11);
  const obj12 = { style: feedFooterOrbImage.feedFooter, children: null };
  const obj13 = { variant: "heading-lg/semibold", accessibilityRole: "header", children: null };
  const intl4 = tmp(1112).intl;
  obj13.children = intl4.string(screen(1112).t.Yr70c4);
  const items9 = [closure_9(screen(5634).Text, obj13), , ];
  const obj14 = {
    onPress: function handleFooterShopAllPress() {
      let sessionId;
      if (closure_9 != null) {
        sessionId = closure_9.sessionId;
      }
      const obj2 = { collectibles_shop_session_id: sessionId, page_type: screen, page_section: null, page_category: null, location_stack: null, cta_name: "feed footer shop all" };
      let pageSection;
      if (closure_9 != null) {
        pageSection = closure_9.pageSection;
      }
      obj2.page_section = pageSection;
      let pageCategory;
      if (closure_9 != null) {
        pageCategory = closure_9.pageCategory;
      }
      obj2.page_category = pageCategory;
      obj2.location_stack = analyticsLocations;
      AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj2);
      const obj4 = { analyticsLocations: null, analyticsSource: null, screen: null };
      items = [AnalyticsLocationDefault.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
      obj4.analyticsLocations = items;
      obj4.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
      obj4.screen = loadedGoogleSkuIds.SHOP_ALL;
      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
    },
    text: null,
    variant: "primary",
    size: "md"
  };
  const intl5 = tmp(1112).intl;
  obj14.text = intl5.string(screen(1112).t.AfrvRD);
  items9[1] = closure_9(screen(5641).Button, obj14);
  if (screen === loadedGoogleSkuIds.ORBS) {
    obj = { source: null, enableAnimation: null, resizeMode: "contain", style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const obj15 = { uri: tmp4(stateFromStores1 ? 17528 : 17529) };
    obj.source = obj15;
    obj.enableAnimation = !stateFromStores1;
    feedFooterOrbImage = feedFooterOrbImage.feedFooterOrbImage;
    obj.style = feedFooterOrbImage;
    const tmp25 = stateFromStores1 ? 17528 : 17529;
  } else {
    const obj16 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      obj16.source = tmp(17530);
      obj16.style = feedFooterOrbImage.feedFooterImage;
      let tmp24 = obj16;
    } else {
      obj16.source = tmp(17531);
      obj16.style = feedFooterOrbImage.feedFooterImage;
      tmp24 = obj16;
    }
    items9[2] = tmp17(tmp23, tmp24);
    obj12.children = items9;
    items8[2] = closure_10(tmp19, obj12);
    obj6.children = items8;
    obj5.children = closure_10(tmp19, obj6);
    return tmp17(tmp(6379).AnalyticsLocationProvider, obj5);
  }
  const tmp4Result4 = isInImprovedMobileShopLoading(17521);
};