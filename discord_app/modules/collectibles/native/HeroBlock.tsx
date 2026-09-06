// === Module 15816: HeroBlock ===

// Module 15816 (HeroBlock)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8764 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8767 */;
import SkeletonCardDefault from "SkeletonCard" /* 15085 */;
import FeaturedFirstCardCoachmarkAnchorDefault from "FeaturedFirstCardCoachmarkAnchor" /* 15819 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;

require = fn;
function SkeletonLoading(accessibilityLabel) {
  let obj = {
    style: closure_14().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: Array.from({ length: 10 }).map((item, index) => {
      const obj = { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH };
      return closure_1_11(SkeletonCardDefault, obj, index);
    })
  };
  return closure_1_11(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1076).CollectiblesMobileShopScreen;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, UserSettingsSections: closure_9, VerticalGradient: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const result = 0.75 * fn(8764).COLLECTIBLES_SHOP_CARD_WIDTH;
fn(4560);
let createStyles = { heroContainer: { width: "100%" }, heroBannerContainer: null, heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" }, orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 }, heroInfoContainer: { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 }, innerContainer: null, heroLogoContainer: null, heroLogo: null, heroViewAllIcon: null, orbsInnerContainer: null, orbsTitle: null, productCardsContainer: null, skeletonContainer: null };
const rect = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
createStyles.heroBannerContainer = rect;
let size = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, width: "100%", height: "100%" };
createStyles.innerContainer = size;
createStyles.heroLogoContainer = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
createStyles.heroLogo = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
createStyles = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
createStyles.heroViewAllIcon = createStyles;
createStyles.orbsInnerContainer = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
createStyles.orbsTitle = { fontSize: 24, lineHeight: 30 };
createStyles.productCardsContainer = { zIndex: 1 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
createStyles.skeletonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(createStyles);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  let stateFromStores;
  closure_5 = undefined;
  closure_6 = undefined;
  let obj = heroBlock(15817);
  let obj1 = heroBlock(1483);
  dependencyMap = obj1.useNavigation();
  let obj2 = heroBlock(8767);
  noop = obj2.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let tmpResult = tmp(504);
  const items = [closure_6];
  stateFromStores = tmpResult.useStateFromStores(items, () => CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId));
  tmpResult = tmp(11484);
  let isEligibleForQuests = tmpResult.getIsEligibleForQuests();
  const tmp7 = preferVCPrice(4495)();
  const tmp8 = closure_14();
  const tmpResult1 = heroBlock(15818);
  const token = heroBlock(4262).useToken(preferVCPrice(576).colors.BACKGROUND_BASE_LOW);
  const tmpResult2 = heroBlock(4262);
  const tmpResult3 = heroBlock(4409);
  const tmpResult4 = heroBlock(4409);
  const hexToRgbaStringResult = tmpResult3.hexToRgbaString(heroBlock(4409).hexWithOpacity(token, 0));
  const token1 = heroBlock(4262).useToken(preferVCPrice(576).colors.BACKGROUND_BASE_LOWEST);
  const tmp12 = preferVCPrice(15072)();
  closure_5 = tmp12;
  const items1 = [heroBlock.rankedSkuIds, tmp12];
  const memo = noop.useMemo(() => closure_5(heroBlock.rankedSkuIds), items1);
  const tmpResult5 = heroBlock(4262);
  const filteredAndSortedProducts = heroBlock(15074).useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp4 });
  closure_6 = tmp14;
  const tmpResult6 = heroBlock(15074);
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
      obj = { value: tmp15(preferVCPrice(7182).COLLECTIBLES_SHOP_HERO).analyticsLocations, children: null };
      obj = { onChange: tmpResult1.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId, children: null };
      obj1 = { style: tmp8.heroContainer, children: null };
      obj2 = { style: tmp8.heroBannerContainer, children: null };
      let tmp24Result = null != heroBannerUrl;
      let tmp6Result = tmp6(15823);
      if (tmp24Result) {
        let tmp22Result = tmp4;
        if (tmp4) {
          const obj3 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"], start: null, end: null, style: null };
          ({ START: obj17.start, END: obj17.end } = closure_10);
          obj3.style = tmp8.orbsBackgroundGradient;
          tmp22Result = tmp22(tmp6(4987), obj3);
        }
        const obj4 = { children: null };
        const items3 = [tmp22Result, , ];
        const obj5 = { style: null, source: null };
        const items4 = [tmp8.heroBannerImage];
        obj5.style = items4;
        const obj6 = { uri: heroBannerUrl };
        obj5.source = obj6;
        items3[1] = tmp22(stateFromStores, obj5);
        const obj7 = { colors: null, start: null, end: null, style: null };
        const items5 = [hexToRgbaStringResult, token1];
        obj7.colors = items5;
        ({ START: obj21.start, END: obj21.end } = closure_10);
        obj7.style = tmp8.fadeOutGradient;
        items3[2] = tmp22(tmp6(4987), obj7);
        obj4.children = items3;
        tmp24Result = tmp24(closure_12, obj4);
      }
      obj2.children = tmp24Result;
      const items6 = [closure_11(closure_5, obj2), , ];
      const obj8 = { style: tmp8.heroInfoContainer, children: null };
      if (tmp4) {
        const obj9 = { style: tmp8.orbsInnerContainer, children: null };
        tmp22Result = null != tmp18;
        if (tmp22Result) {
          const obj10 = { variant: "display-md", color: "mobile-text-heading-primary", style: tmp8.orbsTitle, children: tmp18 };
          tmp22Result = tmp22(tmp(4556).Text, obj10);
        }
        const items7 = [tmp22Result, ];
        let tmp22Result1 = null != tmp19;
        if (tmp22Result1) {
          tmp22Result1 = "" !== tmp19;
        }
        if (tmp22Result1) {
          const obj11 = { variant: "text-md/medium", children: tmp19 };
          tmp22Result1 = tmp22(tmp(4556).Text, obj11);
        }
        const obj12 = { children: null };
        items7[1] = tmp22Result1;
        obj12.children = items7;
        const items8 = [tmp24(tmp25, obj12), ];
        if (isEligibleForQuests) {
          const obj13 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: null, onPress: null };
          const intl3 = tmp(1114).intl;
          obj13.text = intl3.string(tmp(1114).t.ynollq);
          obj13.onPress = function onPress() {
            heroBlock(navigation[33]);
            const obj = { mergeExistingRoutes: true, fromContent: heroBlock(navigation[34]).QuestContent.ORBS_SHOP_HERO_CTA };
            obj.openQuestHome(obj);
          };
          isEligibleForQuests = tmp22(tmp(4975).Button, obj13);
        }
        items8[1] = isEligibleForQuests;
        obj9.children = items8;
        tmp24Result = tmp24(tmp25, obj9);
      } else {
        const obj14 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.6, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
        const intl = tmp(1114).intl;
        const obj15 = { category: stateFromStores.name };
        obj14.accessibilityLabel = intl.formatToPlainString(tmp(1114).t.FNtLb3, obj15);
        const intl2 = tmp(1114).intl;
        obj14.accessibilityHint = intl2.string(tmp(1114).t.F8ma9x);
        const obj16 = { radius: tmp6(576).radii.lg };
        obj14.androidRippleConfig = obj16;
        obj14.onPress = function onPress() {
          let obj = AnalyticsUtilsDefault;
          let sessionId;
          if (analyticsContext != null) {
            sessionId = tmp2.sessionId;
          }
          obj = { collectibles_shop_session_id: sessionId, sku_id: heroBlock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "HERO_BLOCK", tile_position: null, cta_name: null };
          let pageSection;
          if (analyticsContext != null) {
            pageSection = tmp2.pageSection;
          }
          obj.page_section = pageSection;
          let pageCategory;
          if (analyticsContext != null) {
            pageCategory = tmp2.pageCategory;
          }
          obj.page_category = pageCategory;
          let tilePosition;
          if (analyticsContext != null) {
            tilePosition = tmp2.tilePosition;
          }
          obj.tile_position = String(tilePosition);
          obj.track(constants2.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          navigation.navigate(constants3.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, { category: stateFromStores, analyticsContext });
        };
        const obj17 = { style: tmp8.innerContainer, children: null };
        let tmp22Result2 = null != heroLogoUrl;
        if (tmp22Result2) {
          const obj18 = { style: tmp8.heroLogoContainer, children: null };
          const obj19 = { style: tmp8.heroLogo, source: null };
          const obj20 = { uri: heroLogoUrl };
          obj19.source = obj20;
          obj18.children = tmp22(stateFromStores, obj19);
          tmp22Result2 = tmp22(tmp25, obj18);
        }
        const items9 = [tmp22Result2, ];
        const obj21 = { style: tmp8.heroViewAllIcon, children: tmp22(tmp(7209).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
        items9[1] = tmp22(tmp25, obj21);
        obj17.children = items9;
        obj14.children = tmp24(tmp25, obj17);
        tmp24Result = tmp22(tmp(5123).PressableOpacity, obj14, stateFromStores.storeListingId);
      }
      obj8.children = tmp24Result;
      items6[1] = closure_11(closure_5, obj8);
      const obj22 = { style: tmp8.productCardsContainer, children: null };
      if (tmp4) {
        const obj23 = { products: filteredAndSortedProducts, loadingCardsNum: null, preferVCPrice: null, accessibilityLabel: null };
        let num = 4;
        tmp6Result = tmp6(15824);
        if (0 !== filteredAndSortedProducts.length) {
          num = filteredAndSortedProducts.length;
        }
        obj23.loadingCardsNum = num;
        obj23.preferVCPrice = preferVCPrice;
        const intl5 = tmp(1114).intl;
        const obj24 = { category: stateFromStores.name };
        obj23.accessibilityLabel = intl5.formatToPlainString(tmp(1114).t.FNtLb3, obj24);
        let tmp22Result3 = tmp22(tmp6Result, obj23);
      } else {
        if (0 === filteredAndSortedProducts.length) {
          const obj25 = { accessibilityLabel: null };
          const intl4 = tmp(1114).intl;
          const obj26 = { category: stateFromStores.name };
          obj25.accessibilityLabel = intl4.formatToPlainString(tmp(1114).t.FNtLb3, obj26);
          let tmp22Result4 = tmp22(SkeletonLoading, obj25);
        } else {
          const obj27 = { horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, onScroll: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
          const intl6 = tmp(1114).intl;
          const obj28 = { category: stateFromStores.name };
          obj27.accessibilityLabel = intl6.formatToPlainString(tmp(1114).t.FNtLb3, obj28);
          obj27.data = filteredAndSortedProducts;
          obj27.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj27.renderItem = tmp17;
          obj27.snapToInterval = tmp(8764).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(576).space.PX_12;
          obj27.ListHeaderComponent = function ListHeaderComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj.style = obj;
            return closure_1_11(closure_5, obj);
          };
          obj27.ListFooterComponent = function ListFooterComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj.style = obj;
            return closure_1_11(closure_5, obj);
          };
          obj27.ItemSeparatorComponent = function ItemSeparatorComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_12 };
            obj.style = obj;
            return closure_1_11(closure_5, obj);
          };
          tmp22Result4 = tmp22(tmp(8874).FlashList, obj27);
        }
        const obj29 = { children: tmp22Result4 };
        tmp22Result3 = tmp22(closure_12, obj29);
      }
      const obj30 = { children: tmp22Result3 };
      obj22.children = closure_11(tmp(7156).LayerScope, obj30);
      items6[2] = closure_11(closure_5, obj22);
      obj1.children = items6;
      obj.children = closure_13(closure_5, obj1);
      obj.children = closure_11(tmp6Result, obj);
      return closure_11(tmp(7162).AnalyticsLocationProvider, obj);
    } else {
      if (tmpResult7.isThemeDark(tmp7)) {
        let tmp6Result1 = tmp6(15821);
      } else {
        tmp6Result1 = tmp6(15822);
      }
      tmpResult7 = tmp(4411);
    }
  }
};