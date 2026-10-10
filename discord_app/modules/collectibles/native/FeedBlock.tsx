// === Module 16216: FeedBlock ===

// Module 16216 (FeedBlock)
import initializeDefault from "initialize" /* 504 */;
import nativeDefault from "native" /* 587 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9058 */;
import uniqByDefault from "uniqBy" /* 16197 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ThemeStore from "ThemeStore" /* 1205 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const constants = fn(1087).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = [];
let closure_11 = [];
const createStyles = fn(5092);
let obj2 = { feedContainer: { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 }, feedHeader: null, feedTitle: null, feedFooter: null, feedFooterImage: null, feedFooterOrbImage: null };
let obj3 = { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 };
obj2.feedHeader = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.feedTitle = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
let obj5 = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj2.feedFooter = { display: "flex", gap: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
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
  let tmp5Result11 = shownSkuIds;
  let items = [loadedGoogleSkuIds];
  const stateFromStores = isInImprovedMobileShopLoading(shownSkuIds[8]).useStateFromStores(items, () => isInImprovedMobileShopLoading(shownSkuIds[9]).isThemeDark(loadedGoogleSkuIds.theme));
  let obj = isInImprovedMobileShopLoading(shownSkuIds[8]);
  isInImprovedMobileShopLoading = isInImprovedMobileShopLoading(shownSkuIds[10]).useIsInImprovedMobileShopLoading();
  let tmp6 = require("useGetProductsFromSkus")();
  importDefault = tmp6;
  const tmp7 = require("useFeedBlockSkuIds")(feedBlock);
  shownSkuIds = tmp7.shownSkuIds;
  ({ resolvedSkuIds, isPersonalized } = tmp7);
  if (!isInImprovedMobileShopLoading) {
    resolvedSkuIds = closure_10;
  }
  let obj2 = isInImprovedMobileShopLoading(shownSkuIds[10]);
  collectiblesShopProducts = isInImprovedMobileShopLoading(tmp5Result11[13]).useCollectiblesShopProducts(resolvedSkuIds);
  const items1 = [isInImprovedMobileShopLoading, tmp6, shownSkuIds, resolvedSkuIds, collectiblesShopProducts];
  memo = resolvedSkuIds.useMemo(() => {
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
      tmp6Result = closure_1(shownSkuIds);
    }
    return tmp6Result;
  }, items1);
  const items2 = [isInImprovedMobileShopLoading, memo];
  const effect = resolvedSkuIds.useEffect(() => {
    if (isInImprovedMobileShopLoading) {
      const Emitter = initializeDefault.Emitter;
      Emitter.batched(() => memo.forEach(isInImprovedMobileShopLoading(shownSkuIds[15]).seedCollectiblesProductFromStandaloneLoad));
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
  const tmpResult = isInImprovedMobileShopLoading(tmp5Result11[13]);
  loadedGoogleSkuIds = require("NativePaymentHooks").useLoadedGoogleSkuIds(memo1);
  const items4 = [isInImprovedMobileShopLoading, memo, loadedGoogleSkuIds];
  const memo2 = resolvedSkuIds.useMemo(() => {
    if (isInImprovedMobileShopLoading) {
      let found = memo.filter((item) => {
        const items = [item];
        const googleSkuIds = isInImprovedMobileShopLoading(shownSkuIds[16]).getGoogleSkuIds(items);
        return googleSkuIds.every((item) => set.has(item));
      });
    } else {
      found = memo;
    }
    return found;
  }, items4);
  const tmp5Result = require("NativePaymentHooks");
  const tmpResult4 = isInImprovedMobileShopLoading(tmp5Result11[18]);
  const filteredAndSortedProducts = tmpResult4.useFilteredAndSortedProducts({ products: memo2, maxProducts: isInImprovedMobileShopLoading(tmp5Result11[12]).MAX_FEED_PRODUCTS, screen });
  const obj3 = { products: memo2, maxProducts: isInImprovedMobileShopLoading(tmp5Result11[12]).MAX_FEED_PRODUCTS, screen };
  const items5 = [memo];
  const stateFromStores1 = isInImprovedMobileShopLoading(tmp5Result11[8]).useStateFromStores(items5, () => memo.useReducedMotion);
  const tmpResult5 = isInImprovedMobileShopLoading(tmp5Result11[8]);
  const intl = tmp(tmp5Result11[21]).intl;
  const string = intl.string;
  const t = tmp(tmp5Result11[21]).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj4 = { value: require("useAnalyticsLocations")(require("AnalyticsLocation").COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations, children: null };
  const obj5 = { style: feedFooterOrbImage.feedContainer, children: null };
  const obj6 = { style: feedFooterOrbImage.feedHeader, children: null };
  const obj7 = { style: feedFooterOrbImage.feedTitle, children: null };
  const items6 = [closure_8(isInImprovedMobileShopLoading(tmp5Result11[22]).Heading, { variant: "heading-lg/semibold", children: stringResult }), ];
  if (isPersonalized) {
    const obj8 = {
      onPress() {
          return closure_1(shownSkuIds[24]).openLazy(isInImprovedMobileShopLoading(shownSkuIds[26])(shownSkuIds[25], shownSkuIds.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14,
      "aria-label": null,
      children: null
    };
    const intl2 = tmp(tmp5Result11[21]).intl;
    obj8["aria-label"] = intl2.string(tmp(tmp5Result11[21]).t.hvVgAZ);
    obj8.children = closure_8(tmp(tmp5Result11[27]).CircleInformationIcon, { size: "xs" });
    isPersonalized = closure_8(tmp(tmp5Result11[23]).PressableOpacity, obj8);
  }
  function goToShopAll() {
    const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
    const items = [closure_1(shownSkuIds[19]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
    obj2.analyticsLocations = items;
    obj2.analyticsSource = closure_1(shownSkuIds[19]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    obj2.screen = constants.SHOP_ALL;
    const result = isInImprovedMobileShopLoading(shownSkuIds[15]).openCollectiblesShopMobile(obj2);
  }
  items6[1] = isPersonalized;
  obj7.children = items6;
  const items7 = [closure_9(collectiblesShopProducts, obj7), ];
  let tmp18Result = !tmp21;
  if (screen !== constants.ORBS) {
    const obj9 = { onPress: goToShopAll, text: null, variant: "primary", size: "sm" };
    const intl3 = tmp(tmp5Result11[21]).intl;
    obj9.text = intl3.string(tmp(tmp5Result11[21]).t.xFcotU);
    tmp18Result = closure_8(tmp(tmp5Result11[28]).Button, obj9);
  }
  items7[1] = tmp18Result;
  obj6.children = items7;
  const items8 = [closure_9(collectiblesShopProducts, obj6), , ];
  const obj10 = { products: filteredAndSortedProducts, loadingCardsNum: null, preferVCPrice: null, accessibilityLabel: null, disableBundleStaticBackground: null };
  const tmp5Result8 = require("useAnalyticsLocations");
  obj10.loadingCardsNum = isInImprovedMobileShopLoading(tmp5Result11[12]).MAX_FEED_PRODUCTS;
  obj10.preferVCPrice = preferVCPrice;
  obj10.accessibilityLabel = stringResult;
  obj10.disableBundleStaticBackground = disableBundleStaticBackground;
  items8[1] = closure_8(require("FeedProductList"), obj10);
  const obj11 = { style: feedFooterOrbImage.feedFooter, children: null };
  const obj12 = { variant: "heading-lg/bold", accessibilityRole: "header", children: null };
  const intl4 = tmp(tmp5Result11[21]).intl;
  obj12.children = intl4.string(isInImprovedMobileShopLoading(tmp5Result11[21]).t.Yr70c4);
  const items9 = [closure_8(isInImprovedMobileShopLoading(tmp5Result11[22]).Text, obj12), , ];
  const obj13 = { onPress: goToShopAll, text: null, variant: "primary", size: "md" };
  const intl5 = tmp(tmp5Result11[21]).intl;
  obj13.text = intl5.string(isInImprovedMobileShopLoading(tmp5Result11[21]).t.AfrvRD);
  items9[1] = closure_8(isInImprovedMobileShopLoading(tmp5Result11[28]).Button, obj13);
  if (screen === constants.ORBS) {
    if (stateFromStores1) {
      const obj14 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      const obj15 = { uri: null };
      tmp5Result11 = tmp5(tmp5Result11[31]);
      obj15.uri = tmp5Result11;
      obj14.source = obj15;
      feedFooterOrbImage = feedFooterOrbImage.feedFooterOrbImage;
      obj14.style = feedFooterOrbImage;
      let tmp18Result2 = closure_8(tmp5(tmp5Result11[30]), obj14);
      const tmp5Result10 = tmp5(tmp5Result11[30]);
    } else {
      if (tmpResult6.isAndroid()) {
        const obj16 = { url: tmp5(tmp5Result11[34]), autoplay: true, style: feedFooterOrbImage.feedFooterOrbImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        tmp18Result2 = closure_8(tmp5(tmp5Result11[33]), obj16);
        const tmp5Result12 = tmp5(tmp5Result11[33]);
      } else {
        const obj17 = { source: null, enableAnimation: true, resizeMode: "contain", style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        const obj18 = { uri: tmp5(tmp5Result11[34]) };
        obj17.source = obj18;
        obj17.style = feedFooterOrbImage.feedFooterOrbImage;
        tmp18Result2 = closure_8(tmp5(tmp5Result11[30]), obj17);
        const tmp5Result13 = tmp5(tmp5Result11[30]);
      }
      tmpResult6 = tmp(tmp5Result11[32]);
    }
  } else {
    const obj19 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      obj19.source = tmp(tmp5Result11[35]);
      obj19.style = feedFooterOrbImage.feedFooterImage;
      let tmp25 = obj19;
    } else {
      obj19.source = tmp(tmp5Result11[36]);
      obj19.style = feedFooterOrbImage.feedFooterImage;
      tmp25 = obj19;
    }
    items9[2] = closure_8(tmp5(tmp5Result11[30]), tmp25);
    obj11.children = items9;
    items8[2] = closure_9(tmp20, obj11);
    obj5.children = items8;
    obj4.children = closure_9(tmp20, obj5);
    return closure_8(tmp(tmp5Result11[20]).AnalyticsLocationProvider, obj4);
  }
  const tmp5Result9 = require("FeedProductList");
};