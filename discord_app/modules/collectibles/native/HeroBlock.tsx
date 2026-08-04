// discord_app/modules/collectibles/native/HeroBlock.tsx
import useFilteredAndSortedProducts from "useFilteredAndSortedProducts";
import get_ActivityIndicator from "hexToRgba";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { CollectiblesMobileShopScreen as closure_7 } from "items";
import ME from "ME";
import jsxProd from "QUICK_SWITCHER";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function SkeletonLoading(accessibilityLabel) {
  let obj = { style: createCacheKey().skeletonContainer, accessibilityRole: "list", accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityState: { busy: true }, accessible: true, children: null };
  obj[5] = Array.from({ length: 10 }).map((arg0, arg1) => {
    const obj = { width: null };
    obj[0] = callback(8670).COLLECTIBLES_SHOP_CARD_WIDTH;
    return callback3(callback2(14127), obj, arg1);
  });
  return callback(closure_5, obj);
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ AnalyticEvents: metroImportAll, UserSettingsSections: c9, VerticalGradient: c10 } = ME);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
const result = 0.75 * require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH;
createCacheKey = { heroContainer: { width: "100%" }, heroBannerContainer: createCacheKey, heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" }, orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 }, heroInfoContainer: { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 }, innerContainer: null, heroLogoContainer: null, heroLogo: null, heroViewAllIcon: null, orbsInnerContainer: null, orbsTitle: null, productCardsContainer: null, skeletonContainer: null };
createCacheKey = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("Themes").space.PX_16, width: "100%", height: "100%" };
createCacheKey[7] = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
createCacheKey[8] = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("Themes").space.PX_16, width: "100%", height: "100%" };
createCacheKey[9] = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round };
let obj2 = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round };
createCacheKey[10] = { paddingHorizontal: require("Themes").space.PX_16, alignItems: "flex-start", gap: require("Themes").space.PX_16 };
createCacheKey[11] = { fontSize: 24, lineHeight: 30 };
createCacheKey[12] = { zIndex: 1 };
let obj3 = { paddingHorizontal: require("Themes").space.PX_16, alignItems: "flex-start", gap: require("Themes").space.PX_16 };
createCacheKey[13] = { flexDirection: "row", gap: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "row", gap: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16 };
const result1 = require("updateCategoriesAndProducts").fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  let dependencyMap;
  let React;
  let stateFromStores;
  let c5;
  let c6;
  let obj = heroBlock(14633);
  let obj1 = heroBlock(1480);
  dependencyMap = obj1.useNavigation();
  let obj2 = heroBlock(8673);
  React = obj2.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let tmpResult = tmp(589);
  const items = [c6];
  stateFromStores = tmpResult.useStateFromStores(items, () => _undefined2.getCategory(heroBlock.categorySkuId));
  tmpResult = tmp(11930);
  const tmp7 = createCacheKey();
  const tmp6 = preferVCPrice(4129)();
  const token = heroBlock(3897).useToken(preferVCPrice(712).colors.BACKGROUND_BASE_LOW);
  const tmpResult1 = heroBlock(3897);
  const tmpResult2 = heroBlock(4037);
  const tmpResult3 = heroBlock(4037);
  const hexToRgbaStringResult = tmpResult2.hexToRgbaString(heroBlock(4037).hexWithOpacity(token, 0));
  const token1 = heroBlock(3897).useToken(preferVCPrice(712).colors.BACKGROUND_BASE_LOWEST);
  const tmp11 = preferVCPrice(14119)();
  c5 = tmp11;
  const items1 = [heroBlock.rankedSkuIds, tmp11];
  const memo = React.useMemo(() => _undefined(heroBlock.rankedSkuIds), items1);
  const tmpResult4 = heroBlock(3897);
  const filteredAndSortedProducts = heroBlock(14121).useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp4 });
  c6 = tmp13;
  const tmpResult5 = heroBlock(14121);
  let unpublishedAt;
  if (stateFromStores != null) {
    unpublishedAt = stateFromStores.unpublishedAt;
  }
  const items2 = [unpublishedAt, preferVCPrice, heroBlock.screen === constants.FEATURED_PAGE];
  if (undefined === stateFromStores) {
    return null;
  } else {
    const tmp17 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
    const tmp18 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
    if (!tmp4) {
      obj = { value: null, children: null };
      obj[0] = tmp14(preferVCPrice(5539).COLLECTIBLES_SHOP_HERO).analyticsLocations;
      obj = { onChange: null, resetKey: null, children: null };
      obj[0] = tmpResult.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange;
      obj[1] = heroBlock.categoryStoreListingId;
      obj1 = { style: null, children: null };
      obj1[0] = tmp7.heroContainer;
      obj2 = { style: null, children: null };
      obj2[0] = tmp7.heroBannerContainer;
      let tmp23Result = null != heroBannerUrl;
      let tmp5Result = tmp5(11933);
      if (tmp23Result) {
        let tmp21Result = tmp4;
        if (tmp4) {
          const obj3 = { colors: null, start: null, end: null, style: null };
          obj3[0] = ["rgba(39, 30, 173, 0.3)", "transparent"];
          ({ START: obj16[1], END: obj16[2] } = closure_10);
          obj3[3] = tmp7.orbsBackgroundGradient;
          tmp21Result = tmp21(tmp5(4615), obj3);
        }
        const obj4 = { children: null };
        const items3 = [tmp21Result, , ];
        const obj5 = { style: null, source: null };
        const items4 = [tmp7.heroBannerImage];
        obj5[0] = items4;
        const obj6 = { uri: null };
        obj6[0] = heroBannerUrl;
        obj5[1] = obj6;
        items3[1] = tmp21(stateFromStores, obj5);
        const obj7 = { colors: null, start: null, end: null, style: null };
        const items5 = [hexToRgbaStringResult, token1];
        obj7[0] = items5;
        ({ START: obj20[1], END: obj20[2] } = closure_10);
        obj7[3] = tmp7.fadeOutGradient;
        items3[2] = tmp21(tmp5(4615), obj7);
        obj4[0] = items3;
        tmp23Result = tmp23(closure_12, obj4);
        const tmp26 = closure_12;
      }
      obj2[1] = tmp23Result;
      const items6 = [closure_11(c5, obj2), , ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp7.heroInfoContainer;
      if (tmp4) {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp7.orbsInnerContainer;
        tmp21Result = null != tmp17;
        if (tmp21Result) {
          const obj10 = { variant: "display-md", color: "mobile-text-heading-primary", style: null, children: null };
          obj10[2] = tmp7.orbsTitle;
          obj10[3] = tmp17;
          tmp21Result = tmp21(tmp(4189).Text, obj10);
        }
        const items7 = [tmp21Result, ];
        let tmp21Result1 = null != tmp18;
        if (tmp21Result1) {
          tmp21Result1 = "" !== tmp18;
        }
        if (tmp21Result1) {
          const obj11 = { variant: "text-md/medium", children: null };
          obj11[1] = tmp18;
          tmp21Result1 = tmp21(tmp(4189).Text, obj11);
        }
        const obj12 = { children: null };
        items7[1] = tmp21Result1;
        obj12[0] = items7;
        const items8 = [tmp23(tmp24, obj12), ];
        const obj13 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: null, onPress: null };
        const intl3 = tmp(1236).intl;
        obj13[4] = intl3.string(tmp(1236).t.ynollq);
        obj13[5] = function onPress() {
          let obj = heroBlock(navigation[32]);
          obj = { mergeExistingRoutes: true, fromContent: heroBlock(navigation[33]).QuestContent.ORBS_SHOP_HERO_CTA };
          obj.openQuestHome(obj);
        };
        items8[1] = tmp21(tmp(4604).Button, obj13);
        obj9[1] = items8;
        tmp23Result = tmp23(tmp24, obj9);
      } else {
        const obj14 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.6, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
        const intl = tmp(1236).intl;
        const obj15 = { category: null };
        obj15[0] = stateFromStores.name;
        obj14[1] = intl.formatToPlainString(tmp(1236).t.FNtLb3, obj15);
        const intl2 = tmp(1236).intl;
        obj14[2] = intl2.string(tmp(1236).t.F8ma9x);
        const obj16 = { radius: null };
        obj16[0] = tmp5(712).radii.lg;
        obj14[4] = obj16;
        obj14[6] = function onPress() {
          let obj = preferVCPrice(navigation[23]);
          let sessionId;
          if (useFilteredAndSortedProducts != null) {
            sessionId = tmp2.sessionId;
          }
          obj = { collectibles_shop_session_id: sessionId, sku_id: heroBlock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "HERO_BLOCK", tile_position: null, cta_name: null };
          let pageSection;
          if (useFilteredAndSortedProducts != null) {
            pageSection = tmp2.pageSection;
          }
          obj[3] = pageSection;
          let pageCategory;
          if (useFilteredAndSortedProducts != null) {
            pageCategory = tmp2.pageCategory;
          }
          obj[4] = pageCategory;
          let tilePosition;
          if (useFilteredAndSortedProducts != null) {
            tilePosition = tmp2.tilePosition;
          }
          obj[6] = String(tilePosition);
          obj.track(outer1_8.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          navigation.navigate(outer1_9.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, { category: stateFromStores, analyticsContext: useFilteredAndSortedProducts });
        };
        const obj17 = { style: null, children: null };
        obj17[0] = tmp7.innerContainer;
        let tmp21Result2 = null != heroLogoUrl;
        if (tmp21Result2) {
          const obj18 = { style: null, children: null };
          obj18[0] = tmp7.heroLogoContainer;
          const obj19 = { style: null, source: null };
          obj19[0] = tmp7.heroLogo;
          const obj20 = { uri: null };
          obj20[0] = heroLogoUrl;
          obj19[1] = obj20;
          obj18[1] = tmp21(stateFromStores, obj19);
          tmp21Result2 = tmp21(tmp24, obj18);
        }
        const items9 = [tmp21Result2, ];
        const obj21 = { style: null, children: null };
        obj21[0] = tmp7.heroViewAllIcon;
        obj21[1] = tmp21(tmp(5569).ChevronSmallRightIcon, { size: "sm", color: "white" });
        items9[1] = tmp21(tmp24, obj21);
        obj17[1] = items9;
        obj14[7] = tmp23(tmp24, obj17);
        tmp23Result = tmp21(tmp(4721).PressableOpacity, obj14, stateFromStores.storeListingId);
      }
      obj8[1] = tmp23Result;
      items6[1] = closure_11(c5, obj8);
      const obj22 = { style: null, children: null };
      obj22[0] = tmp7.productCardsContainer;
      if (tmp4) {
        const obj23 = { products: null, loadingCardsNum: null, preferVCPrice: null, accessibilityLabel: null };
        obj23[0] = filteredAndSortedProducts;
        let num = 4;
        tmp5Result = tmp5(14638);
        if (0 !== filteredAndSortedProducts.length) {
          num = filteredAndSortedProducts.length;
        }
        obj23[1] = num;
        obj23[2] = preferVCPrice;
        const intl5 = tmp(1236).intl;
        const obj24 = { category: null };
        obj24[0] = stateFromStores.name;
        obj23[3] = intl5.formatToPlainString(tmp(1236).t.FNtLb3, obj24);
        let tmp21Result3 = tmp21(tmp5Result, obj23);
      } else {
        if (0 === filteredAndSortedProducts.length) {
          const obj25 = { accessibilityLabel: null };
          const intl4 = tmp(1236).intl;
          const obj26 = { category: null };
          obj26[0] = stateFromStores.name;
          obj25[0] = intl4.formatToPlainString(tmp(1236).t.FNtLb3, obj26);
          let tmp21Result4 = tmp21(SkeletonLoading, obj25);
        } else {
          const obj27 = { horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, onScroll: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
          const intl6 = tmp(1236).intl;
          const obj28 = { category: null };
          obj28[0] = stateFromStores.name;
          obj27[1] = intl6.formatToPlainString(tmp(1236).t.FNtLb3, obj28);
          obj27[3] = filteredAndSortedProducts;
          obj27[4] = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj27[5] = tmp16;
          obj27[7] = tmp(8670).COLLECTIBLES_SHOP_CARD_WIDTH + tmp5(712).space.PX_12;
          obj27[9] = function ListHeaderComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj[0] = obj;
            return callback(c5, obj);
          };
          obj27[10] = function ListFooterComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj[0] = obj;
            return callback(c5, obj);
          };
          obj27[11] = function ItemSeparatorComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_12 };
            obj[0] = obj;
            return callback(c5, obj);
          };
          tmp21Result4 = tmp21(tmp(6679).FlashList, obj27);
        }
        const obj29 = { children: null };
        obj29[0] = tmp21Result4;
        tmp21Result3 = tmp21(closure_12, obj29);
        const tmp36 = closure_12;
      }
      const obj30 = { children: null };
      obj30[0] = tmp21Result3;
      obj22[1] = closure_11(tmp(5506).LayerScope, obj30);
      items6[2] = closure_11(c5, obj22);
      obj1[1] = items6;
      obj[2] = closure_13(c5, obj1);
      obj[1] = closure_11(tmp5Result, obj);
      return closure_11(tmp(5519).AnalyticsLocationProvider, obj);
    } else {
      if (tmpResult6.isThemeDark(tmp6)) {
        let tmp5Result1 = tmp5(14636);
      } else {
        tmp5Result1 = tmp5(14637);
      }
      tmpResult6 = tmp(4039);
    }
  }
};