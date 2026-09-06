// === Module 15829: FeedBlock ===

// Module 15829 (FeedBlock)
import nativeDefault from "native" /* 576 */;
import ShopHomeSortType from "ShopHomeSortType" /* 15830 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import ConsentStore from "ConsentStore" /* 6595 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1076).CollectiblesMobileShopScreen;
const Consents = fn(1074).Consents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { feedContainer: null, feedHeader: null, feedTitle: null, feedFooter: null, feedFooterImage: null, feedFooterOrbImage: null };
createStyles = { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 };
createStyles.feedContainer = createStyles;
createStyles.feedHeader = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj1 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.feedTitle = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
let obj2 = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
createStyles.feedFooter = { display: "flex", gap: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
createStyles.feedFooterImage = { width: "100%", resizeMode: "cover" };
createStyles.feedFooterOrbImage = { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(feedBlock) {
  feedBlock = feedBlock.feedBlock;
  const screen = feedBlock.screen;
  dependencyMap = undefined;
  ({ preferVCPrice, disableBundleStaticBackground } = feedBlock);
  let feedFooterOrbImage = closure_13();
  let tmp5Result = dependencyMap;
  let obj = feedBlock(504);
  let items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => feedBlock(paths[11]).isThemeDark(theme.theme));
  let obj1 = feedBlock(504);
  let items1 = [ConsentStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => ConsentStore.hasConsented(constants2.PERSONALIZATION));
  let tmp6 = stateFromStores1(15072)();
  dependencyMap = tmp6;
  const items2 = [feedBlock.sortedSkuIds, tmp6, stateFromStores1];
  const memo = noop.useMemo(() => {
    const sortedSkuIds = feedBlock.sortedSkuIds;
    let items;
    if (sortedSkuIds != null) {
      items = sortedSkuIds[ShopHomeSortType.ShopHomeSortType.RECOMMENDED];
    }
    if (items == null) {
      items = [];
    }
    const sortedSkuIds2 = feedBlock.sortedSkuIds;
    let items1;
    if (sortedSkuIds2 != null) {
      items1 = sortedSkuIds2[ShopHomeSortType.ShopHomeSortType.POPULAR];
    }
    if (items1 == null) {
      items1 = [];
    }
    let tmp6 = stateFromStores1;
    if (stateFromStores1) {
      tmp6 = items.length > 0;
    }
    if (tmp6) {
      items1 = items;
    }
    return { feedProducts: paths(items1), isPersonalized: tmp6 };
  }, items2);
  ({ isPersonalized, feedProducts } = memo);
  let obj2 = feedBlock(15074);
  const filteredAndSortedProducts = obj2.useFilteredAndSortedProducts({ products: feedProducts, maxProducts: 36, screen });
  let obj3 = feedBlock(504);
  const items3 = [AccessibilityStore];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const intl = feedBlock(1114).intl;
  const string = intl.string;
  const t = feedBlock(1114).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  obj = { value: stateFromStores1(7162)(stateFromStores1(7182).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations, children: null };
  obj = { style: feedFooterOrbImage.feedContainer, children: null };
  obj1 = { style: feedFooterOrbImage.feedHeader, children: null };
  obj2 = { style: feedFooterOrbImage.feedTitle, children: null };
  const items4 = [closure_11(feedBlock(4556).Heading, { variant: "heading-lg/semibold", children: stringResult }), ];
  if (isPersonalized) {
    obj3 = {
      onPress() {
          return stateFromStores1(paths[21]).openLazy(feedBlock(paths[23])(paths[22], paths.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14,
      "aria-label": null,
      children: null
    };
    const intl2 = tmp(1114).intl;
    obj3["aria-label"] = intl2.string(tmp(1114).t.hvVgAZ);
    obj3.children = closure_11(tmp(4515).CircleInformationIcon, { size: "xs" });
    isPersonalized = closure_11(tmp(5123).PressableOpacity, obj3);
  }
  function goToShopAll() {
    feedBlock(paths[15]);
    const obj = { analyticsLocations: null, analyticsSource: null, screen: null };
    const items = [stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
    obj.analyticsLocations = items;
    obj.analyticsSource = stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    obj.screen = constants.SHOP_ALL;
    const result = obj.openCollectiblesShopMobile(obj);
  }
  items4[1] = isPersonalized;
  obj2.children = items4;
  const items5 = [closure_12(closure_5, obj2), ];
  let tmp12Result = !tmp15;
  if (screen !== constants.ORBS) {
    const obj4 = { onPress: goToShopAll, text: null, variant: "primary", size: "sm" };
    const intl3 = tmp(1114).intl;
    obj4.text = intl3.string(tmp(1114).t.xFcotU);
    tmp12Result = closure_11(tmp(4975).Button, obj4);
  }
  items5[1] = tmp12Result;
  obj1.children = items5;
  const items6 = [closure_12(closure_5, obj1), closure_11(stateFromStores1(15824), { products: filteredAndSortedProducts, loadingCardsNum: 36, preferVCPrice, accessibilityLabel: stringResult, disableBundleStaticBackground }), ];
  const obj5 = { style: feedFooterOrbImage.feedFooter, children: null };
  const obj6 = { variant: "heading-lg/bold", accessibilityRole: "header", children: null };
  const intl4 = tmp(1114).intl;
  obj6.children = intl4.string(feedBlock(1114).t.Yr70c4);
  const items7 = [closure_11(feedBlock(4556).Text, obj6), , ];
  const obj7 = { onPress: goToShopAll, text: null, variant: "primary", size: "md" };
  const intl5 = tmp(1114).intl;
  obj7.text = intl5.string(feedBlock(1114).t.AfrvRD);
  items7[1] = closure_11(feedBlock(4975).Button, obj7);
  if (screen === constants.ORBS) {
    if (stateFromStores2) {
      const obj8 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      const obj9 = { uri: null };
      tmp5Result = tmp5(15832);
      obj9.uri = tmp5Result;
      obj8.source = obj9;
      feedFooterOrbImage = feedFooterOrbImage.feedFooterOrbImage;
      obj8.style = feedFooterOrbImage;
      tmp12Result = closure_11(closure_4, obj8);
    } else {
      if (tmpResult.isAndroid()) {
        const obj10 = { url: null, autoplay: true, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        tmp5Result = tmp5(8809);
        obj10.url = tmp5(15833);
        obj10.style = feedFooterOrbImage.feedFooterOrbImage;
        tmp12Result = closure_11(tmp5Result, obj10);
      } else {
        const obj11 = { source: null, enableAnimation: true, resizeMode: "contain", style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        const obj12 = { uri: tmp5(15833) };
        obj11.source = obj12;
        obj11.style = feedFooterOrbImage.feedFooterOrbImage;
        tmp12Result = closure_11(tmp5(5587), obj11);
        const tmp5Result1 = tmp5(5587);
      }
      tmpResult = tmp(1115);
    }
  } else {
    const obj13 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      obj13.source = tmp(15834);
      obj13.style = feedFooterOrbImage.feedFooterImage;
      let tmp18 = obj13;
    } else {
      obj13.source = tmp(15835);
      obj13.style = feedFooterOrbImage.feedFooterImage;
      tmp18 = obj13;
    }
    items7[2] = closure_11(closure_4, tmp18);
    obj5.children = items7;
    items6[2] = closure_12(closure_5, obj5);
    obj.children = items6;
    obj.children = closure_12(closure_5, obj);
    return closure_11(tmp(7162).AnalyticsLocationProvider, obj);
  }
  const tmp10 = stateFromStores1(7162);
};