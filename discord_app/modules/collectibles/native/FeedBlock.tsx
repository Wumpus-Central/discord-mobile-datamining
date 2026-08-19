// discord_app/modules/collectibles/native/FeedBlock.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import handleThemeChange from "../../user_settings/ThemeStore.tsx";
import hasConsented from "../../../stores/ConsentStore.tsx";
import { CollectiblesMobileShopScreen as closure_9 } from "../CollectiblesShopConstants.tsx";
import { Consents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "column", height: "100%", gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { display: "flex", gap: ThemesDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { width: "100%", resizeMode: "cover" };
createCacheKey[5] = { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(feedBlock) {
  feedBlock = feedBlock.feedBlock;
  const screen = feedBlock.screen;
  dependencyMap = undefined;
  ({ preferVCPrice, disableBundleStaticBackground } = feedBlock);
  let feedFooterOrbImage = callback2();
  let tmp5Result = dependencyMap;
  let obj = feedBlock(589);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => feedBlock(paths[11]).isThemeDark(theme.theme));
  obj1 = feedBlock(589);
  let items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_8.hasConsented(constants2.PERSONALIZATION));
  let tmp6 = stateFromStores1(14426)();
  dependencyMap = tmp6;
  const items2 = [feedBlock.sortedSkuIds, tmp6, stateFromStores1];
  const memo = React.useMemo(() => {
    const sortedSkuIds = feedBlock.sortedSkuIds;
    let items;
    if (sortedSkuIds != null) {
      items = sortedSkuIds[feedBlock(undefined, paths[13]).ShopHomeSortType.RECOMMENDED];
    }
    if (items == null) {
      items = [];
    }
    const sortedSkuIds2 = feedBlock.sortedSkuIds;
    let items1;
    if (sortedSkuIds2 != null) {
      items1 = sortedSkuIds2[feedBlock(undefined, paths[13]).ShopHomeSortType.POPULAR];
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
  let obj2 = feedBlock(14428);
  const filteredAndSortedProducts = obj2.useFilteredAndSortedProducts({ products: feedProducts, maxProducts: 36, screen });
  let obj3 = feedBlock(589);
  const items3 = [closure_6];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const intl = feedBlock(1236).intl;
  const string = intl.string;
  const t = feedBlock(1236).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  { value: stateFromStores1(7139)(stateFromStores1(7159).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations, children: null };
  obj = { style: feedFooterOrbImage.feedContainer, children: null };
  obj1 = { style: feedFooterOrbImage.feedHeader, children: null };
  obj2 = { style: feedFooterOrbImage.feedTitle, children: null };
  const items4 = [callback(feedBlock(4734).Heading, { variant: "heading-lg/semibold", children: stringResult }), ];
  if (isPersonalized) {
    obj3 = { onPress: null, hitSlop: 14, "aria-label": null, children: null };
    obj3[0] = function onPress() {
      return stateFromStores1(paths[21]).openLazy(feedBlock(paths[23])(paths[22], paths.paths), "PersonalizationDisclaimerActionSheet", {});
    };
    const intl2 = tmp(1236).intl;
    obj3[2] = intl2.string(tmp(1236).t.hvVgAZ);
    obj3[3] = callback(tmp(4330).CircleInformationIcon, { size: "xs" });
    isPersonalized = callback(tmp(5433).PressableOpacity, obj3);
  }
  function goToShopAll() {
    feedBlock(paths[15]);
    const obj = { analyticsLocations: null, analyticsSource: null, screen: null };
    const items = [stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
    obj[0] = items;
    obj[1] = stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    obj[2] = constants.SHOP_ALL;
    const result = obj.openCollectiblesShopMobile(obj);
  }
  items4[1] = isPersonalized;
  obj2[1] = items4;
  const items5 = [callback(closure_5, obj2), ];
  let tmp12Result = !tmp15;
  if (screen !== constants.ORBS) {
    const obj4 = { onPress: null, text: null, variant: "primary", size: "sm" };
    obj4[0] = goToShopAll;
    const intl3 = tmp(1236).intl;
    obj4[1] = intl3.string(tmp(1236).t.xFcotU);
    tmp12Result = callback(tmp(4745).Button, obj4);
  }
  items5[1] = tmp12Result;
  obj1[1] = items5;
  const items6 = [callback(closure_5, obj1), callback(stateFromStores1(14966), { products: filteredAndSortedProducts, loadingCardsNum: 36, preferVCPrice, accessibilityLabel: stringResult, disableBundleStaticBackground }), ];
  const obj5 = { style: feedFooterOrbImage.feedFooter, children: null };
  const obj6 = { variant: "heading-lg/bold", accessibilityRole: "header", children: null };
  const intl4 = tmp(1236).intl;
  obj6[2] = intl4.string(feedBlock(1236).t.Yr70c4);
  const items7 = [callback(feedBlock(4734).Text, obj6), , ];
  const obj7 = { onPress: goToShopAll, text: null, variant: "primary", size: "md" };
  const intl5 = tmp(1236).intl;
  obj7[1] = intl5.string(feedBlock(1236).t.AfrvRD);
  items7[1] = callback(feedBlock(4745).Button, obj7);
  if (screen === constants.ORBS) {
    if (stateFromStores2) {
      const obj8 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      const obj9 = { uri: null };
      tmp5Result = tmp5(14974);
      obj9[0] = tmp5Result;
      obj8[0] = obj9;
      feedFooterOrbImage = feedFooterOrbImage.feedFooterOrbImage;
      obj8[1] = feedFooterOrbImage;
      tmp12Result = callback(closure_4, obj8);
    } else {
      if (tmpResult.isAndroid()) {
        const obj10 = { url: null, autoplay: true, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        tmp5Result = tmp5(8406);
        obj10[0] = tmp5(14975);
        obj10[2] = feedFooterOrbImage.feedFooterOrbImage;
        tmp12Result = callback(tmp5Result, obj10);
      } else {
        const obj11 = { source: null, enableAnimation: true, resizeMode: "contain", style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        const obj12 = { uri: null };
        obj12[0] = tmp5(14975);
        obj11[0] = obj12;
        obj11[3] = feedFooterOrbImage.feedFooterOrbImage;
        tmp12Result = callback(tmp5(5449), obj11);
        const tmp5Result1 = tmp5(5449);
      }
      tmpResult = tmp(500);
    }
  } else {
    const obj13 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      obj13[0] = tmp(14976);
      obj13[1] = feedFooterOrbImage.feedFooterImage;
      let tmp18 = obj13;
    } else {
      obj13[0] = tmp(14977);
      obj13[1] = feedFooterOrbImage.feedFooterImage;
      tmp18 = obj13;
    }
    items7[2] = callback(closure_4, tmp18);
    obj5[1] = items7;
    items6[2] = callback(closure_5, obj5);
    obj[1] = items6;
    obj[1] = callback(closure_5, obj);
    return callback(tmp(7139).AnalyticsLocationProvider, obj);
  }
  const tmp10 = stateFromStores1(7139);
};