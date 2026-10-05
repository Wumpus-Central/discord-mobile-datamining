// discord_app/modules/collectibles/native/FeedBlock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import ShopHomeSortType from "../../../../discord_common/js/shared/shared-constants/ShopHomeSortType.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import ConsentStore from "../../../stores/ConsentStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let closure_12;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const Consents = Constants.Consents;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  feedContainer: obj2,
  feedHeader: obj3,
  feedTitle: obj4,
  feedFooter: obj5,
  feedFooterImage: { width: "100%", resizeMode: "cover" },
  feedFooterOrbImage: { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 },
};
obj2 = { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj5 = {
  display: "flex",
  gap: nativeDefault.space.PX_16,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(feedBlock) {
  let constants2;
  let disableBundleStaticBackground;
  let feedProducts;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isPersonalized;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj15;
  let obj18;
  let obj6;
  let paths;
  let preferVCPrice;
  let stringResult;
  let theme;
  let tmp13Result4;
  let useReducedMotion;
  feedBlock = feedBlock.feedBlock;
  const screen = feedBlock.screen;
  ({ preferVCPrice, disableBundleStaticBackground } = feedBlock);
  const tmp = closure_13();
  let obj = feedBlock(504);
  let items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = feedBlock(paths[11]);
    return obj.isThemeDark(theme.theme);
  });
  let items1 = [ConsentStore];
  const obj2 = feedBlock(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ConsentStore.hasConsented(constants2.PERSONALIZATION));
  const tmp6 = stateFromStores1;
  const tmp7 = stateFromStores1(15718)();
  dependencyMap = tmp7;
  const items2 = [feedBlock.sortedSkuIds, tmp7, stateFromStores1];
  const memo = react.useMemo(() => {
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
    if (stateFromStores1 && items.length > 0) {
      items1 = items;
    }
    const obj = { feedProducts: paths(items1), isPersonalized: stateFromStores1 && items.length > 0 };
    return obj;
  }, items2);
  ({ isPersonalized, feedProducts } = memo);
  const obj3 = feedBlock(14876);
  const filteredAndSortedProducts = obj3.useFilteredAndSortedProducts({
    products: feedProducts,
    maxProducts: 36,
    screen,
  });
  const ORBS = constants.ORBS;
  const items3 = [AccessibilityStore];
  const obj4 = feedBlock(504);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp11 = stateFromStores1(6657);
  const analyticsLocations = tmp11(stateFromStores1(6681).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations;
  const intl = feedBlock(1126).intl;
  const string = intl.string;
  const t = feedBlock(1126).t;
  if (isPersonalized) {
    stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj5 = { value: analyticsLocations, children: closure_12(closure_5, obj6) };
  obj6 = { style: tmp.feedContainer, children: items6 };
  const obj7 = { style: tmp.feedHeader, children: items5 };
  const obj8 = { style: tmp.feedTitle, children: items4 };
  const AnalyticsLocationProvider = tmp2(6657).AnalyticsLocationProvider;
  items4 = [closure_11(feedBlock(4886).Heading, { variant: "heading-lg/semibold", children: stringResult })];
  if (isPersonalized) {
    const obj9 = {
      onPress() {
        const obj = stateFromStores1(paths[21]);
        return obj.openLazy(feedBlock(paths[23])(paths[22], paths.paths), "PersonalizationDisclaimerActionSheet", {});
      },
      hitSlop: 14,
      "aria-label": intl2.string(feedBlock(1126).t.hvVgAZ),
      children: closure_11(feedBlock(4812).CircleInformationIcon, { size: "xs" }),
    };
    const PressableOpacity = tmp2(5909).PressableOpacity;
    intl2 = tmp2(1126).intl;
    isPersonalized = closure_11(PressableOpacity, obj9);
  }
  function goToShopAll() {
    let items;
    const obj = {
      analyticsLocations: items,
      analyticsSource: stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON,
      screen: constants.SHOP_ALL,
    };
    const openCollectiblesShopMobile = feedBlock(paths[15]).openCollectiblesShopMobile;
    items = [];
    feedBlock(paths[15]);
    items[0] = stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    const result = openCollectiblesShopMobile(obj);
  }
  items4[1] = isPersonalized;
  items5 = [closure_12(closure_5, obj8)];
  let tmp13Result = !tmp16;
  if (tmp13Result) {
    const obj10 = {
      onPress: goToShopAll,
      text: intl3.string(feedBlock(1126).t.xFcotU),
      variant: "primary",
      size: "sm",
    };
    const Button = tmp2(5594).Button;
    intl3 = tmp2(1126).intl;
    tmp13Result = closure_11(Button, obj10);
  }
  items5[1] = tmp13Result;
  items6 = [
    closure_12(closure_5, obj7),
    closure_11(tmp6(15732), {
      products: filteredAndSortedProducts,
      loadingCardsNum: 36,
      preferVCPrice,
      accessibilityLabel: stringResult,
      disableBundleStaticBackground,
    }),
  ];
  const obj11 = { style: tmp.feedFooter, children: items7 };
  const obj12 = {
    variant: "heading-lg/bold",
    accessibilityRole: "header",
    children: intl4.string(feedBlock(1126).t.Yr70c4),
  };
  const Text = tmp2(4886).Text;
  intl4 = tmp2(1126).intl;
  items7 = [closure_11(Text, obj12), ,];
  const obj13 = { onPress: goToShopAll, text: intl5.string(feedBlock(1126).t.AfrvRD), variant: "primary", size: "md" };
  const Button2 = tmp2(5594).Button;
  intl5 = tmp2(1126).intl;
  items7[1] = closure_11(Button2, obj13);
  if (screen === ORBS) {
    let tmp13Result3;
    if (stateFromStores2) {
      const obj14 = {
        source: obj15,
        style: tmp.feedFooterOrbImage,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
      };
      obj15 = { uri: tmp6(15741) };
      tmp13Result3 = closure_11(closure_4, obj14);
    } else {
      const tmp2Result = feedBlock(1369);
      if (tmp2Result.isAndroid()) {
        const obj16 = {
          url: tmp6(15742),
          autoplay: true,
          style: tmp.feedFooterOrbImage,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        const tmp6Result = tmp6(8465);
        tmp13Result3 = closure_11(tmp6Result, obj16);
      } else {
        const obj17 = {
          source: obj18,
          enableAnimation: true,
          resizeMode: "contain",
          style: tmp.feedFooterOrbImage,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        obj18 = { uri: tmp6(15742) };
        const tmp6Result2 = tmp6(5974);
        tmp13Result3 = closure_11(tmp6Result2, obj17);
      }
    }
    tmp13Result4 = tmp13Result3;
  } else {
    let tmp19;
    const obj19 = {
      source: null,
      style: null,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
    };
    if (stateFromStores) {
      obj19.source = feedBlock(15743);
      obj19.style = tmp.feedFooterImage;
      tmp19 = obj19;
    } else {
      obj19.source = feedBlock(15744);
      obj19.style = tmp.feedFooterImage;
      tmp19 = obj19;
    }
    tmp13Result4 = closure_11(closure_4, tmp19);
  }
  items7[2] = tmp13Result4;
  items6[2] = closure_12(closure_5, obj11);
  return closure_11(AnalyticsLocationProvider, obj5);
}
