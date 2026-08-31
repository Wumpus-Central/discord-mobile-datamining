// discord_app/modules/collectibles/native/HeroBlock.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../CollectiblesCategoryStore.tsx";
import { CollectiblesMobileShopScreen as closure_7 } from "../CollectiblesShopConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function SkeletonLoading(accessibilityLabel) {
  let obj = {
    style: callback2().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: Array.from({ length: 10 }).map((arg0, arg1) => {
      const obj = { width: callback(8850).COLLECTIBLES_SHOP_CARD_WIDTH };
      return callback3(callback2(14654), obj, arg1);
    })
  };
  return callback(closure_5, obj);
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_8, UserSettingsSections: c9, VerticalGradient: c10 } = ME);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
const result = 0.75 * require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH;
createCacheKey = { heroContainer: { width: "100%" }, heroBannerContainer: createCacheKey, heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" }, orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 }, heroInfoContainer: { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 }, innerContainer: null, heroLogoContainer: null, heroLogo: null, heroViewAllIcon: null, orbsInnerContainer: null, orbsTitle: null, productCardsContainer: null, skeletonContainer: null };
createCacheKey = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: ThemesDefault.space.PX_16, width: "100%", height: "100%" };
createCacheKey[7] = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
createCacheKey[8] = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: ThemesDefault.space.PX_16, width: "100%", height: "100%" };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round };
let obj2 = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round };
createCacheKey[10] = { paddingHorizontal: ThemesDefault.space.PX_16, alignItems: "flex-start", gap: ThemesDefault.space.PX_16 };
createCacheKey[11] = { fontSize: 24, lineHeight: 30 };
createCacheKey[12] = { zIndex: 1 };
let obj3 = { paddingHorizontal: ThemesDefault.space.PX_16, alignItems: "flex-start", gap: ThemesDefault.space.PX_16 };
createCacheKey[13] = { flexDirection: "row", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "row", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
const result1 = require("set").fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  dependencyMap = undefined;
  let React;
  let stateFromStores;
  closure_5 = undefined;
  closure_6 = undefined;
  let obj = heroBlock(15383);
  obj1 = heroBlock(1499);
  dependencyMap = obj1.useNavigation();
  let obj2 = heroBlock(8853);
  React = obj2.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let tmpResult = tmp(589);
  const items = [closure_6];
  stateFromStores = tmpResult.useStateFromStores(items, () => category.getCategory(heroBlock.categorySkuId));
  tmpResult = tmp(11047);
  let isEligibleForQuests = tmpResult.getIsEligibleForQuests();
  const tmp7 = preferVCPrice(4383)();
  const tmp8 = callback2();
  const tmpResult1 = heroBlock(12593);
  const token = heroBlock(4167).useToken(preferVCPrice(712).colors.BACKGROUND_BASE_LOW);
  const tmpResult2 = heroBlock(4167);
  const tmpResult3 = heroBlock(4296);
  const tmpResult4 = heroBlock(4296);
  const hexToRgbaStringResult = tmpResult3.hexToRgbaString(heroBlock(4296).hexWithOpacity(token, 0));
  const token1 = heroBlock(4167).useToken(preferVCPrice(712).colors.BACKGROUND_BASE_LOWEST);
  const tmp12 = preferVCPrice(14641)();
  closure_5 = tmp12;
  const items1 = [heroBlock.rankedSkuIds, tmp12];
  const memo = React.useMemo(() => callback(heroBlock.rankedSkuIds), items1);
  const tmpResult5 = heroBlock(4167);
  const filteredAndSortedProducts = heroBlock(14643).useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp4 });
  closure_6 = tmp14;
  const tmpResult6 = heroBlock(14643);
  let unpublishedAt;
  if (stateFromStores != null) {
    unpublishedAt = stateFromStores.unpublishedAt;
  }
  const items2 = [unpublishedAt, preferVCPrice, heroBlock.screen === constants.FEATURED_PAGE];
  if (undefined === stateFromStores) {
    return null;
  } else {
    const tmp18 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
    const tmp19 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
    if (!tmp4) {
      obj = { value: null, children: null };
      obj[0] = tmp15(preferVCPrice(5941).COLLECTIBLES_SHOP_HERO).analyticsLocations;
      obj = { onChange: null, resetKey: null, children: null };
      obj[0] = tmpResult1.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange;
      obj[1] = heroBlock.categoryStoreListingId;
      obj1 = { style: null, children: null };
      obj1[0] = tmp8.heroContainer;
      obj2 = { style: null, children: null };
      obj2[0] = tmp8.heroBannerContainer;
      let tmp24Result = null != heroBannerUrl;
      let tmp6Result = tmp6(12596);
      if (tmp24Result) {
        let tmp22Result = tmp4;
        if (tmp4) {
          const obj3 = { colors: null, start: null, end: null, style: null };
          obj3[0] = ["rgba(39, 30, 173, 0.3)", "transparent"];
          ({ START: obj17[1], END: obj17[2] } = closure_10);
          obj3[3] = tmp8.orbsBackgroundGradient;
          tmp22Result = tmp22(tmp6(4908), obj3);
        }
        const obj4 = { children: null };
        const items3 = [tmp22Result, , ];
        const obj5 = { style: null, source: null };
        const items4 = [tmp8.heroBannerImage];
        obj5[0] = items4;
        const obj6 = { uri: null };
        obj6[0] = heroBannerUrl;
        obj5[1] = obj6;
        items3[1] = tmp22(stateFromStores, obj5);
        const obj7 = { colors: null, start: null, end: null, style: null };
        const items5 = [hexToRgbaStringResult, token1];
        obj7[0] = items5;
        ({ START: obj21[1], END: obj21[2] } = closure_10);
        obj7[3] = tmp8.fadeOutGradient;
        items3[2] = tmp22(tmp6(4908), obj7);
        obj4[0] = items3;
        tmp24Result = tmp24(closure_12, obj4);
        const tmp27 = closure_12;
      }
      obj2[1] = tmp24Result;
      const items6 = [closure_11(closure_5, obj2), , ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp8.heroInfoContainer;
      if (tmp4) {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp8.orbsInnerContainer;
        tmp22Result = null != tmp18;
        if (tmp22Result) {
          const obj10 = { variant: "display-md", color: "mobile-text-heading-primary", style: null, children: null };
          obj10[2] = tmp8.orbsTitle;
          obj10[3] = tmp18;
          tmp22Result = tmp22(tmp(4444).Text, obj10);
        }
        const items7 = [tmp22Result, ];
        let tmp22Result1 = null != tmp19;
        if (tmp22Result1) {
          tmp22Result1 = "" !== tmp19;
        }
        if (tmp22Result1) {
          const obj11 = { variant: "text-md/medium", children: null };
          obj11[1] = tmp19;
          tmp22Result1 = tmp22(tmp(4444).Text, obj11);
        }
        const obj12 = { children: null };
        items7[1] = tmp22Result1;
        obj12[0] = items7;
        const items8 = [tmp24(tmp25, obj12), ];
        if (isEligibleForQuests) {
          const obj13 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: null, onPress: null };
          const intl3 = tmp(1236).intl;
          obj13[4] = intl3.string(tmp(1236).t.ynollq);
          obj13[5] = function onPress() {
            let obj = heroBlock(navigation[33]);
            obj = { mergeExistingRoutes: true, fromContent: heroBlock(navigation[34]).QuestContent.ORBS_SHOP_HERO_CTA };
            obj.openQuestHome(obj);
          };
          isEligibleForQuests = tmp22(tmp(4896).Button, obj13);
        }
        items8[1] = isEligibleForQuests;
        obj9[1] = items8;
        tmp24Result = tmp24(tmp25, obj9);
      } else {
        const obj14 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.6, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
        const intl = tmp(1236).intl;
        const obj15 = { category: null };
        obj15[0] = stateFromStores.name;
        obj14[1] = intl.formatToPlainString(tmp(1236).t.FNtLb3, obj15);
        const intl2 = tmp(1236).intl;
        obj14[2] = intl2.string(tmp(1236).t.F8ma9x);
        const obj16 = { radius: null };
        obj16[0] = tmp6(712).radii.lg;
        obj14[4] = obj16;
        obj14[6] = function onPress() {
          let obj = preferVCPrice(navigation[24]);
          let sessionId;
          if (closure_3 != null) {
            sessionId = tmp2.sessionId;
          }
          obj = { collectibles_shop_session_id: sessionId, sku_id: heroBlock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "HERO_BLOCK", tile_position: null, cta_name: null };
          let pageSection;
          if (closure_3 != null) {
            pageSection = tmp2.pageSection;
          }
          obj[3] = pageSection;
          let pageCategory;
          if (closure_3 != null) {
            pageCategory = tmp2.pageCategory;
          }
          obj[4] = pageCategory;
          let tilePosition;
          if (closure_3 != null) {
            tilePosition = tmp2.tilePosition;
          }
          obj[6] = String(tilePosition);
          obj.track(closure_1_8.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          navigation.navigate(closure_1_9.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, { category: stateFromStores, analyticsContext: closure_3 });
        };
        const obj17 = { style: null, children: null };
        obj17[0] = tmp8.innerContainer;
        let tmp22Result2 = null != heroLogoUrl;
        if (tmp22Result2) {
          const obj18 = { style: null, children: null };
          obj18[0] = tmp8.heroLogoContainer;
          const obj19 = { style: null, source: null };
          obj19[0] = tmp8.heroLogo;
          const obj20 = { uri: null };
          obj20[0] = heroLogoUrl;
          obj19[1] = obj20;
          obj18[1] = tmp22(stateFromStores, obj19);
          tmp22Result2 = tmp22(tmp25, obj18);
        }
        const items9 = [tmp22Result2, ];
        const obj21 = { style: null, children: null };
        obj21[0] = tmp8.heroViewAllIcon;
        obj21[1] = tmp22(tmp(5971).ChevronSmallRightIcon, { size: "sm", color: "white" });
        items9[1] = tmp22(tmp25, obj21);
        obj17[1] = items9;
        obj14[7] = tmp24(tmp25, obj17);
        tmp24Result = tmp22(tmp(5036).PressableOpacity, obj14, stateFromStores.storeListingId);
      }
      obj8[1] = tmp24Result;
      items6[1] = closure_11(closure_5, obj8);
      const obj22 = { style: null, children: null };
      obj22[0] = tmp8.productCardsContainer;
      if (tmp4) {
        const obj23 = { products: null, loadingCardsNum: null, preferVCPrice: null, accessibilityLabel: null };
        obj23[0] = filteredAndSortedProducts;
        let num = 4;
        tmp6Result = tmp6(15388);
        if (0 !== filteredAndSortedProducts.length) {
          num = filteredAndSortedProducts.length;
        }
        obj23[1] = num;
        obj23[2] = preferVCPrice;
        const intl5 = tmp(1236).intl;
        const obj24 = { category: null };
        obj24[0] = stateFromStores.name;
        obj23[3] = intl5.formatToPlainString(tmp(1236).t.FNtLb3, obj24);
        let tmp22Result3 = tmp22(tmp6Result, obj23);
      } else {
        if (0 === filteredAndSortedProducts.length) {
          const obj25 = { accessibilityLabel: null };
          const intl4 = tmp(1236).intl;
          const obj26 = { category: null };
          obj26[0] = stateFromStores.name;
          obj25[0] = intl4.formatToPlainString(tmp(1236).t.FNtLb3, obj26);
          let tmp22Result4 = tmp22(SkeletonLoading, obj25);
        } else {
          const obj27 = { horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, onScroll: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
          const intl6 = tmp(1236).intl;
          const obj28 = { category: null };
          obj28[0] = stateFromStores.name;
          obj27[1] = intl6.formatToPlainString(tmp(1236).t.FNtLb3, obj28);
          obj27[3] = filteredAndSortedProducts;
          obj27[4] = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj27[5] = tmp17;
          obj27[7] = tmp(8850).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(712).space.PX_12;
          obj27[9] = function ListHeaderComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj[0] = obj;
            return callback2(closure_5, obj);
          };
          obj27[10] = function ListFooterComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj[0] = obj;
            return callback2(closure_5, obj);
          };
          obj27[11] = function ItemSeparatorComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_12 };
            obj[0] = obj;
            return callback2(closure_5, obj);
          };
          tmp22Result4 = tmp22(tmp(8073).FlashList, obj27);
        }
        const obj29 = { children: null };
        obj29[0] = tmp22Result4;
        tmp22Result3 = tmp22(closure_12, obj29);
        const tmp37 = closure_12;
      }
      const obj30 = { children: null };
      obj30[0] = tmp22Result3;
      obj22[1] = closure_11(tmp(5908).LayerScope, obj30);
      items6[2] = closure_11(closure_5, obj22);
      obj1[1] = items6;
      obj[2] = closure_13(closure_5, obj1);
      obj[1] = closure_11(tmp6Result, obj);
      return closure_11(tmp(5921).AnalyticsLocationProvider, obj);
    } else {
      if (tmpResult7.isThemeDark(tmp7)) {
        let tmp6Result1 = tmp6(15386);
      } else {
        tmp6Result1 = tmp6(15387);
      }
      tmpResult7 = tmp(1363);
    }
  }
};