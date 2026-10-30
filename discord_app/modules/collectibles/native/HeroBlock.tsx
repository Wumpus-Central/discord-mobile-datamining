// === Module 17789: HeroBlock ===

// Module 17789 (HeroBlock)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 9437 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9440 */;
import SkeletonCardDefault from "SkeletonCard" /* 9556 */;
import FeaturedFirstCardCoachmarkAnchorDefault from "FeaturedFirstCardCoachmarkAnchor" /* 17802 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7713 */;

require = fn;
function SkeletonLoading(accessibilityLabel) {
  let obj = {
    style: closure_13().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: Array.from({ length: 10 }).map((item, index) => {
      const obj = { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH };
      return closure_1_10(SkeletonCardDefault, obj, index);
    })
  };
  return closure_1_10(View, obj);
}
const View = fn(17).View;
let constants = fn(1074).CollectiblesMobileShopScreen;
const Constants = fn(1072);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8, VerticalGradient: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const result = 0.75 * fn(9437).COLLECTIBLES_SHOP_CARD_WIDTH;
const createStyles = fn(5009);
let obj2 = { heroContainer: { width: "100%" }, heroBannerContainer: null, heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" }, orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 }, heroInfoContainer: { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 }, innerContainer: null, heroLogoContainer: null, heroLogo: null, heroViewAllIcon: null, orbsInnerContainer: null, orbsTitle: null, productCardsContainer: null, skeletonContainer: null };
const rect = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
obj2.heroBannerContainer = rect;
let size = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, width: "100%", height: "100%" };
obj2.innerContainer = size;
obj2.heroLogoContainer = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
obj2.heroLogo = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
obj2.heroViewAllIcon = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
let obj3 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.orbsInnerContainer = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
obj2.orbsTitle = { fontSize: 24, lineHeight: 30 };
obj2.productCardsContainer = { zIndex: 1 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
obj2.skeletonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  let stateFromStores;
  closure_5 = undefined;
  constants = undefined;
  let obj = heroBlock(17790);
  dependencyMap = heroBlock(1498).useNavigation();
  let obj2 = heroBlock(1498);
  noop = heroBlock(9440).useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let obj3 = heroBlock(9440);
  const items = [closure_5];
  stateFromStores = heroBlock(504).useStateFromStores(items, () => CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId));
  let tmpResult = heroBlock(504);
  let isEligibleForQuests = heroBlock(9653).getIsEligibleForQuests();
  const tmpResult9 = heroBlock(9653);
  const tmp7 = preferVCPrice(5248)();
  const tmp8 = closure_13();
  const tmpResult10 = heroBlock(17791);
  const token = heroBlock(5591).useToken(preferVCPrice(575).colors.BACKGROUND_BASE_LOW);
  const tmpResult11 = heroBlock(5591);
  const tmpResult12 = heroBlock(5006);
  const tmpResult13 = heroBlock(5006);
  const hexToRgbaStringResult = tmpResult12.hexToRgbaString(heroBlock(5006).hexWithOpacity(token, 0));
  const token1 = heroBlock(5591).useToken(preferVCPrice(575).colors.BACKGROUND_BASE_LOWEST);
  const tmp12 = preferVCPrice(17792)();
  closure_5 = tmp12;
  const items1 = [heroBlock.rankedSkuIds, tmp12];
  const memo = noop.useMemo(() => closure_5(heroBlock.rankedSkuIds), items1);
  const tmpResult14 = heroBlock(5591);
  const filteredAndSortedProducts = heroBlock(16922).useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp4 });
  constants = tmp14;
  const tmpResult15 = heroBlock(16922);
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
      const obj4 = { value: tmp15(preferVCPrice(7345).COLLECTIBLES_SHOP_HERO).analyticsLocations, children: null };
      const obj5 = { onChange: tmpResult10.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId, children: null };
      const obj6 = { style: tmp8.heroContainer, children: null };
      const obj7 = { style: tmp8.heroBannerContainer, children: null };
      let tmp24Result = null != heroBannerUrl;
      if (tmp24Result) {
        let tmp22Result = tmp4;
        if (tmp4) {
          const obj8 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"], start: null, end: null, style: null };
          ({ START: obj17.start, END: obj17.end } = closure_9);
          obj8.style = tmp8.orbsBackgroundGradient;
          tmp22Result = closure_10(tmp6(5582), obj8);
        }
        const obj9 = { children: null };
        const items3 = [tmp22Result, , ];
        const obj10 = { style: tmp8.heroBannerImage, source: null };
        const obj11 = { uri: heroBannerUrl };
        obj10.source = obj11;
        items3[1] = closure_10(tmp6(5712), obj10);
        const obj12 = { colors: null, start: null, end: null, style: null };
        const items4 = [hexToRgbaStringResult, token1];
        obj12.colors = items4;
        ({ START: obj21.start, END: obj21.end } = closure_9);
        obj12.style = tmp8.fadeOutGradient;
        items3[2] = closure_10(tmp6(5582), obj12);
        obj9.children = items3;
        tmp24Result = closure_12(closure_11, obj9);
      }
      obj7.children = tmp24Result;
      const items5 = [closure_10(stateFromStores, obj7), , ];
      const obj13 = { style: tmp8.heroInfoContainer, children: null };
      if (tmp4) {
        const obj14 = { style: tmp8.orbsInnerContainer, children: null };
        let tmp22Result6 = null != tmp18;
        if (tmp22Result6) {
          const obj15 = { variant: "display-md", color: "mobile-text-heading-primary", style: tmp8.orbsTitle, children: tmp18 };
          tmp22Result6 = closure_10(tmp(5619).Text, obj15);
        }
        const items6 = [tmp22Result6, ];
        let tmp22Result7 = null != tmp19;
        if (tmp22Result7) {
          tmp22Result7 = "" !== tmp19;
        }
        if (tmp22Result7) {
          const obj16 = { variant: "text-md/medium", children: tmp19 };
          tmp22Result7 = closure_10(tmp(5619).Text, obj16);
        }
        const obj18 = { children: null };
        items6[1] = tmp22Result7;
        obj18.children = items6;
        const items7 = [closure_12(tmp25, obj18), ];
        if (isEligibleForQuests) {
          const obj19 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: null, onPress: null };
          const intl3 = tmp(1114).intl;
          obj19.text = intl3.string(tmp(1114).t.ynollq);
          obj19.onPress = function onTapEarnOrbs() {
            const obj = heroBlock(navigation[34]);
            obj.openQuestHome({ mergeExistingRoutes: true, fromContent: heroBlock(navigation[35]).QuestContent.ORBS_SHOP_HERO_CTA });
          };
          isEligibleForQuests = closure_10(tmp(5629).Button, obj19);
        }
        items7[1] = isEligibleForQuests;
        obj14.children = items7;
        let tmp24Result2 = closure_12(tmp25, obj14);
      } else {
        const obj20 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.6, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
        const intl = tmp(1114).intl;
        const obj22 = { category: stateFromStores.name };
        obj20.accessibilityLabel = intl.formatToPlainString(tmp(1114).t.FNtLb3, obj22);
        const intl2 = tmp(1114).intl;
        obj20.accessibilityHint = intl2.string(tmp(1114).t.F8ma9x);
        const obj23 = { radius: tmp6(575).radii.lg };
        obj20.androidRippleConfig = obj23;
        obj20.onPress = function onPress() {
          let sessionId;
          if (analyticsContext != null) {
            sessionId = analyticsContext.sessionId;
          }
          const obj2 = { collectibles_shop_session_id: sessionId, sku_id: heroBlock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "HERO_BLOCK", tile_position: null, cta_name: null };
          let pageSection;
          if (analyticsContext != null) {
            pageSection = analyticsContext.pageSection;
          }
          obj2.page_section = pageSection;
          let pageCategory;
          if (analyticsContext != null) {
            pageCategory = analyticsContext.pageCategory;
          }
          obj2.page_category = pageCategory;
          let tilePosition;
          if (analyticsContext != null) {
            tilePosition = analyticsContext.tilePosition;
          }
          obj2.tile_position = String(tilePosition);
          AnalyticsUtilsDefault.track(constants2.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj2);
          navigation.navigate(constants3.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, { category: stateFromStores, analyticsContext });
        };
        const obj24 = { style: tmp8.innerContainer, children: null };
        let tmp22Result8 = null != heroLogoUrl;
        if (tmp22Result8) {
          const obj25 = { style: tmp8.heroLogoContainer, children: null };
          const obj26 = { style: tmp8.heroLogo, source: null };
          const obj27 = { uri: heroLogoUrl };
          obj26.source = obj27;
          obj25.children = closure_10(tmp6(5712), obj26);
          tmp22Result8 = closure_10(tmp25, obj25);
        }
        const items8 = [tmp22Result8, ];
        const obj28 = { style: tmp8.heroViewAllIcon, children: closure_10(tmp(7372).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
        items8[1] = closure_10(tmp25, obj28);
        obj24.children = items8;
        obj20.children = closure_12(tmp25, obj24);
        tmp24Result2 = closure_10(tmp(6974).PressableOpacity, obj20, stateFromStores.storeListingId);
      }
      obj13.children = tmp24Result2;
      items5[1] = closure_10(stateFromStores, obj13);
      const obj29 = { style: tmp8.productCardsContainer, children: null };
      if (tmp4) {
        const obj30 = { products: filteredAndSortedProducts, loadingCardsNum: null, preferVCPrice: null, accessibilityLabel: null };
        let num = 4;
        if (0 !== filteredAndSortedProducts.length) {
          num = filteredAndSortedProducts.length;
        }
        obj30.loadingCardsNum = num;
        obj30.preferVCPrice = preferVCPrice;
        const intl5 = tmp(1114).intl;
        const obj31 = { category: stateFromStores.name };
        obj30.accessibilityLabel = intl5.formatToPlainString(tmp(1114).t.FNtLb3, obj31);
        let tmp22Result9 = closure_10(tmp6(17807), obj30);
        const tmp6Result3 = tmp6(17807);
      } else {
        if (0 === filteredAndSortedProducts.length) {
          const obj32 = { accessibilityLabel: null };
          const intl4 = tmp(1114).intl;
          const obj33 = { category: stateFromStores.name };
          obj32.accessibilityLabel = intl4.formatToPlainString(tmp(1114).t.FNtLb3, obj33);
          let tmp22Result10 = closure_10(SkeletonLoading, obj32);
        } else {
          const obj34 = { horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, onScroll: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
          const intl6 = tmp(1114).intl;
          const obj35 = { category: stateFromStores.name };
          obj34.accessibilityLabel = intl6.formatToPlainString(tmp(1114).t.FNtLb3, obj35);
          obj34.data = filteredAndSortedProducts;
          obj34.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj34.renderItem = tmp17;
          obj34.snapToInterval = tmp(9437).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(575).space.PX_12;
          obj34.ListHeaderComponent = function ListHeaderComponent() {
            const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_16 } };
            return closure_1_10(stateFromStores, obj);
          };
          obj34.ListFooterComponent = function ListFooterComponent() {
            const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_16 } };
            return closure_1_10(stateFromStores, obj);
          };
          obj34.ItemSeparatorComponent = function ItemSeparatorComponent() {
            const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_12 } };
            return closure_1_10(stateFromStores, obj);
          };
          tmp22Result10 = closure_10(tmp(7288).FlashList, obj34);
        }
        const obj36 = { children: tmp22Result10 };
        tmp22Result9 = closure_10(closure_11, obj36);
      }
      const obj37 = { children: tmp22Result9 };
      obj29.children = closure_10(tmp(5606).LayerScope, obj37);
      items5[2] = closure_10(stateFromStores, obj29);
      obj6.children = items5;
      obj5.children = closure_12(stateFromStores, obj6);
      obj4.children = closure_10(tmp6(17806), obj5);
      return closure_10(tmp(7320).AnalyticsLocationProvider, obj4);
    } else {
      if (tmpResult16.isThemeDark(tmp7)) {
        let tmp6Result4 = tmp6(17804);
      } else {
        tmp6Result4 = tmp6(17805);
      }
      tmpResult16 = tmp(5016);
    }
  }
  tmp15 = preferVCPrice(7320);
};