// discord_app/modules/collectibles/native/FeedBlock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ShopHomeSortType from "../../../../discord_common/js/shared/shared-constants/ShopHomeSortType.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import ConsentStore from "../../../stores/ConsentStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1076).CollectiblesMobileShopScreen;
const Consents = fn(1074).Consents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4827);
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
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(feedBlock) {
  feedBlock = feedBlock.feedBlock;
  const screen = feedBlock.screen;
  dependencyMap = undefined;
  ({ preferVCPrice, disableBundleStaticBackground } = feedBlock);
  let feedFooterOrbImage = closure_13();
  let tmp5Result = dependencyMap;
  let items = [ThemeStore];
  const stateFromStores = feedBlock(504).useStateFromStores(items, () => feedBlock(paths[11]).isThemeDark(theme.theme));
  const obj = feedBlock(504);
  let items1 = [ConsentStore];
  const stateFromStores1 = feedBlock(504).useStateFromStores(items1, () =>
    ConsentStore.hasConsented(constants2.PERSONALIZATION),
  );
  let tmp6 = stateFromStores1(16206)();
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
  let obj2 = feedBlock(504);
  const filteredAndSortedProducts = feedBlock(15402).useFilteredAndSortedProducts({
    products: feedProducts,
    maxProducts: 36,
    screen,
  });
  const obj3 = feedBlock(15402);
  const items3 = [AccessibilityStore];
  const stateFromStores2 = feedBlock(504).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const obj4 = feedBlock(504);
  const intl = feedBlock(1115).intl;
  const string = intl.string;
  const t = feedBlock(1115).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj5 = {
    value: stateFromStores1(7493)(stateFromStores1(7513).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations,
    children: null,
  };
  const obj6 = { style: feedFooterOrbImage.feedContainer, children: null };
  const obj7 = { style: feedFooterOrbImage.feedHeader, children: null };
  const obj8 = { style: feedFooterOrbImage.feedTitle, children: null };
  const items4 = [closure_11(feedBlock(4823).Heading, { variant: "heading-lg/semibold", children: stringResult })];
  if (isPersonalized) {
    const obj9 = {
      onPress() {
        return stateFromStores1(paths[21]).openLazy(
          feedBlock(paths[23])(paths[22], paths.paths),
          "PersonalizationDisclaimerActionSheet",
          {},
        );
      },
      hitSlop: 14,
      "aria-label": null,
      children: null,
    };
    const intl2 = tmp(1115).intl;
    obj9["aria-label"] = intl2.string(tmp(1115).t.hvVgAZ);
    obj9.children = closure_11(tmp(4781).CircleInformationIcon, { size: "xs" });
    isPersonalized = closure_11(tmp(5425).PressableOpacity, obj9);
  }
  function goToShopAll() {
    const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
    const items = [stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
    obj2.analyticsLocations = items;
    obj2.analyticsSource = stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    obj2.screen = constants.SHOP_ALL;
    const result = feedBlock(paths[15]).openCollectiblesShopMobile(obj2);
  }
  items4[1] = isPersonalized;
  obj8.children = items4;
  const items5 = [closure_12(closure_5, obj8)];
  let tmp12Result = !tmp15;
  if (screen !== constants.ORBS) {
    const obj10 = { onPress: goToShopAll, text: null, variant: "primary", size: "sm" };
    const intl3 = tmp(1115).intl;
    obj10.text = intl3.string(tmp(1115).t.xFcotU);
    tmp12Result = closure_11(tmp(5271).Button, obj10);
  }
  items5[1] = tmp12Result;
  obj7.children = items5;
  const items6 = [
    closure_12(closure_5, obj7),
    closure_11(stateFromStores1(16213), {
      products: filteredAndSortedProducts,
      loadingCardsNum: 36,
      preferVCPrice,
      accessibilityLabel: stringResult,
      disableBundleStaticBackground,
    }),
  ];
  const obj11 = { style: feedFooterOrbImage.feedFooter, children: null };
  const obj12 = { variant: "heading-lg/bold", accessibilityRole: "header", children: null };
  const intl4 = tmp(1115).intl;
  obj12.children = intl4.string(feedBlock(1115).t.Yr70c4);
  const items7 = [closure_11(feedBlock(4823).Text, obj12), ,];
  const obj13 = { onPress: goToShopAll, text: null, variant: "primary", size: "md" };
  const intl5 = tmp(1115).intl;
  obj13.text = intl5.string(feedBlock(1115).t.AfrvRD);
  items7[1] = closure_11(feedBlock(5271).Button, obj13);
  if (screen === constants.ORBS) {
    if (stateFromStores2) {
      const obj14 = {
        source: null,
        style: null,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
      };
      const obj15 = { uri: null };
      tmp5Result = tmp5(16221);
      obj15.uri = tmp5Result;
      obj14.source = obj15;
      feedFooterOrbImage = feedFooterOrbImage.feedFooterOrbImage;
      obj14.style = feedFooterOrbImage;
      let tmp12Result2 = closure_11(closure_4, obj14);
    } else {
      if (tmpResult.isAndroid()) {
        const obj16 = {
          url: tmp5(16222),
          autoplay: true,
          style: feedFooterOrbImage.feedFooterOrbImage,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        tmp12Result2 = closure_11(tmp5(9166), obj16);
        const tmp5Result3 = tmp5(9166);
      } else {
        const obj17 = {
          source: null,
          enableAnimation: true,
          resizeMode: "contain",
          style: null,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        const obj18 = { uri: tmp5(16222) };
        obj17.source = obj18;
        obj17.style = feedFooterOrbImage.feedFooterOrbImage;
        tmp12Result2 = closure_11(tmp5(5890), obj17);
        const tmp5Result4 = tmp5(5890);
      }
      tmpResult = tmp(1364);
    }
  } else {
    const obj19 = {
      source: null,
      style: null,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
    };
    if (stateFromStores) {
      obj19.source = tmp(16223);
      obj19.style = feedFooterOrbImage.feedFooterImage;
      let tmp18 = obj19;
    } else {
      obj19.source = tmp(16224);
      obj19.style = feedFooterOrbImage.feedFooterImage;
      tmp18 = obj19;
    }
    items7[2] = closure_11(closure_4, tmp18);
    obj11.children = items7;
    items6[2] = closure_12(closure_5, obj11);
    obj6.children = items6;
    obj5.children = closure_12(closure_5, obj6);
    return closure_11(tmp(7493).AnalyticsLocationProvider, obj5);
  }
  const tmp10 = stateFromStores1(7493);
}
