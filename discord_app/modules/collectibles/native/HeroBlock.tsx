// discord_app/modules/collectibles/native/HeroBlock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesShopCardV2 from "CollectiblesShopCardV2.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import SkeletonCardDefault from "SkeletonCard.tsx";
import FeaturedFirstCardCoachmarkAnchorDefault from "FeaturedFirstCardCoachmarkAnchor.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

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
    }),
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
const result = 0.75 * fn(8890).COLLECTIBLES_SHOP_CARD_WIDTH;
const createStyles = fn(4636);
let obj2 = {
  heroContainer: { width: "100%" },
  heroBannerContainer: null,
  heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" },
  orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 },
  fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 },
  heroInfoContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    minWidth: "100%",
    maxHeight: 240,
    aspectRatio: 2.2,
  },
  innerContainer: null,
  heroLogoContainer: null,
  heroLogo: null,
  heroViewAllIcon: null,
  orbsInnerContainer: null,
  orbsTitle: null,
  productCardsContainer: null,
  skeletonContainer: null,
};
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  maxHeight: 240 + result,
  aspectRatio: 1.4883720930232558,
};
obj2.heroBannerContainer = rect;
let size = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: nativeDefault.space.PX_16,
  width: "100%",
  height: "100%",
};
obj2.innerContainer = size;
obj2.heroLogoContainer = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
obj2.heroLogo = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
obj2.heroViewAllIcon = {
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
};
obj2.orbsInnerContainer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_16,
};
obj2.orbsTitle = { fontSize: 24, lineHeight: 30 };
obj2.productCardsContainer = { zIndex: 1 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
obj2.skeletonContainer = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  let stateFromStores;
  closure_5 = undefined;
  closure_6 = undefined;
  let obj = heroBlock(15910);
  dependencyMap = heroBlock(1483).useNavigation();
  let obj2 = heroBlock(1483);
  noop = heroBlock(8893).useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let obj3 = heroBlock(8893);
  const items = [closure_6];
  stateFromStores = heroBlock(504).useStateFromStores(items, () =>
    CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId),
  );
  let tmpResult = heroBlock(504);
  let isEligibleForQuests = heroBlock(11618).getIsEligibleForQuests();
  const tmpResult9 = heroBlock(11618);
  const tmp7 = preferVCPrice(4571)();
  const tmp8 = closure_14();
  const tmpResult10 = heroBlock(15911);
  const token = heroBlock(4338).useToken(preferVCPrice(576).colors.BACKGROUND_BASE_LOW);
  const tmpResult11 = heroBlock(4338);
  const tmpResult12 = heroBlock(4486);
  const tmpResult13 = heroBlock(4486);
  const hexToRgbaStringResult = tmpResult12.hexToRgbaString(heroBlock(4486).hexWithOpacity(token, 0));
  const token1 = heroBlock(4338).useToken(preferVCPrice(576).colors.BACKGROUND_BASE_LOWEST);
  const tmp12 = preferVCPrice(15154)();
  closure_5 = tmp12;
  const items1 = [heroBlock.rankedSkuIds, tmp12];
  const memo = noop.useMemo(() => closure_5(heroBlock.rankedSkuIds), items1);
  const tmpResult14 = heroBlock(4338);
  const filteredAndSortedProducts = heroBlock(15156).useFilteredAndSortedProducts({
    products: memo,
    bypassAndroidUnsyncedFilter: tmp4,
  });
  closure_6 = tmp14;
  const tmpResult15 = heroBlock(15156);
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
      const obj4 = { value: tmp15(preferVCPrice(7285).COLLECTIBLES_SHOP_HERO).analyticsLocations, children: null };
      const obj5 = {
        onChange: tmpResult10.useTrackProductCardImpression(
          heroBlock.categoryStoreListingId,
          "mobile_home",
          "hero_block",
        ).handleCardVisibilityChange,
        resetKey: heroBlock.categoryStoreListingId,
        children: null,
      };
      const obj6 = { style: tmp8.heroContainer, children: null };
      const obj7 = { style: tmp8.heroBannerContainer, children: null };
      let tmp24Result = null != heroBannerUrl;
      if (tmp24Result) {
        let tmp22Result = tmp4;
        if (tmp4) {
          const obj8 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"], start: null, end: null, style: null };
          ({ START: obj17.start, END: obj17.end } = closure_10);
          obj8.style = tmp8.orbsBackgroundGradient;
          tmp22Result = closure_11(tmp6(5068), obj8);
        }
        const obj9 = { children: null };
        const items3 = [tmp22Result, ,];
        const obj10 = { style: null, source: null };
        const items4 = [tmp8.heroBannerImage];
        obj10.style = items4;
        const obj11 = { uri: heroBannerUrl };
        obj10.source = obj11;
        items3[1] = closure_11(stateFromStores, obj10);
        const obj12 = { colors: null, start: null, end: null, style: null };
        const items5 = [hexToRgbaStringResult, token1];
        obj12.colors = items5;
        ({ START: obj21.start, END: obj21.end } = closure_10);
        obj12.style = tmp8.fadeOutGradient;
        items3[2] = closure_11(tmp6(5068), obj12);
        obj9.children = items3;
        tmp24Result = closure_13(closure_12, obj9);
      }
      obj7.children = tmp24Result;
      const items6 = [closure_11(closure_5, obj7), ,];
      const obj13 = { style: tmp8.heroInfoContainer, children: null };
      if (tmp4) {
        const obj14 = { style: tmp8.orbsInnerContainer, children: null };
        let tmp22Result6 = null != tmp18;
        if (tmp22Result6) {
          const obj15 = {
            variant: "display-md",
            color: "mobile-text-heading-primary",
            style: tmp8.orbsTitle,
            children: tmp18,
          };
          tmp22Result6 = closure_11(tmp(4632).Text, obj15);
        }
        const items7 = [tmp22Result6];
        let tmp22Result7 = null != tmp19;
        if (tmp22Result7) {
          tmp22Result7 = "" !== tmp19;
        }
        if (tmp22Result7) {
          const obj16 = { variant: "text-md/medium", children: tmp19 };
          tmp22Result7 = closure_11(tmp(4632).Text, obj16);
        }
        const obj18 = { children: null };
        items7[1] = tmp22Result7;
        obj18.children = items7;
        const items8 = [closure_13(tmp25, obj18)];
        if (isEligibleForQuests) {
          const obj19 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: null, onPress: null };
          const intl3 = tmp(1114).intl;
          obj19.text = intl3.string(tmp(1114).t.ynollq);
          obj19.onPress = function onPress() {
            const obj = heroBlock(navigation[33]);
            obj.openQuestHome({
              mergeExistingRoutes: true,
              fromContent: heroBlock(navigation[34]).QuestContent.ORBS_SHOP_HERO_CTA,
            });
          };
          isEligibleForQuests = closure_11(tmp(5056).Button, obj19);
        }
        items8[1] = isEligibleForQuests;
        obj14.children = items8;
        let tmp24Result2 = closure_13(tmp25, obj14);
      } else {
        const obj20 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityHint: null,
          activeOpacity: 0.6,
          androidRippleConfig: null,
          hitSlop: 8,
          onPress: null,
          children: null,
        };
        const intl = tmp(1114).intl;
        const obj22 = { category: stateFromStores.name };
        obj20.accessibilityLabel = intl.formatToPlainString(tmp(1114).t.FNtLb3, obj22);
        const intl2 = tmp(1114).intl;
        obj20.accessibilityHint = intl2.string(tmp(1114).t.F8ma9x);
        const obj23 = { radius: tmp6(576).radii.lg };
        obj20.androidRippleConfig = obj23;
        obj20.onPress = function onPress() {
          let sessionId;
          if (analyticsContext != null) {
            sessionId = analyticsContext.sessionId;
          }
          const obj2 = {
            collectibles_shop_session_id: sessionId,
            sku_id: heroBlock.categoryStoreListingId,
            page_type: "mobile_home",
            page_section: null,
            page_category: null,
            tile_type: "HERO_BLOCK",
            tile_position: null,
            cta_name: null,
          };
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
          navigation.navigate(constants3.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, {
            category: stateFromStores,
            analyticsContext,
          });
        };
        const obj24 = { style: tmp8.innerContainer, children: null };
        let tmp22Result8 = null != heroLogoUrl;
        if (tmp22Result8) {
          const obj25 = { style: tmp8.heroLogoContainer, children: null };
          const obj26 = { style: tmp8.heroLogo, source: null };
          const obj27 = { uri: heroLogoUrl };
          obj26.source = obj27;
          obj25.children = closure_11(stateFromStores, obj26);
          tmp22Result8 = closure_11(tmp25, obj25);
        }
        const items9 = [tmp22Result8];
        const obj28 = {
          style: tmp8.heroViewAllIcon,
          children: closure_11(tmp(7312).ChevronSmallRightIcon, { size: "sm", color: "white" }),
        };
        items9[1] = closure_11(tmp25, obj28);
        obj24.children = items9;
        obj20.children = closure_13(tmp25, obj24);
        tmp24Result2 = closure_11(tmp(5204).PressableOpacity, obj20, stateFromStores.storeListingId);
      }
      obj13.children = tmp24Result2;
      items6[1] = closure_11(closure_5, obj13);
      const obj29 = { style: tmp8.productCardsContainer, children: null };
      if (tmp4) {
        const obj30 = {
          products: filteredAndSortedProducts,
          loadingCardsNum: null,
          preferVCPrice: null,
          accessibilityLabel: null,
        };
        let num = 4;
        if (0 !== filteredAndSortedProducts.length) {
          num = filteredAndSortedProducts.length;
        }
        obj30.loadingCardsNum = num;
        obj30.preferVCPrice = preferVCPrice;
        const intl5 = tmp(1114).intl;
        const obj31 = { category: stateFromStores.name };
        obj30.accessibilityLabel = intl5.formatToPlainString(tmp(1114).t.FNtLb3, obj31);
        let tmp22Result9 = closure_11(tmp6(15917), obj30);
        const tmp6Result3 = tmp6(15917);
      } else {
        if (0 === filteredAndSortedProducts.length) {
          const obj32 = { accessibilityLabel: null };
          const intl4 = tmp(1114).intl;
          const obj33 = { category: stateFromStores.name };
          obj32.accessibilityLabel = intl4.formatToPlainString(tmp(1114).t.FNtLb3, obj33);
          let tmp22Result10 = closure_11(SkeletonLoading, obj32);
        } else {
          const obj34 = {
            horizontal: true,
            accessibilityLabel: null,
            accessibilityRole: "list",
            data: null,
            onScroll: null,
            renderItem: null,
            decelerationRate: "fast",
            snapToInterval: null,
            showsHorizontalScrollIndicator: false,
            ListHeaderComponent: null,
            ListFooterComponent: null,
            ItemSeparatorComponent: null,
          };
          const intl6 = tmp(1114).intl;
          const obj35 = { category: stateFromStores.name };
          obj34.accessibilityLabel = intl6.formatToPlainString(tmp(1114).t.FNtLb3, obj35);
          obj34.data = filteredAndSortedProducts;
          obj34.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj34.renderItem = tmp17;
          obj34.snapToInterval = tmp(8890).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(576).space.PX_12;
          obj34.ListHeaderComponent = function ListHeaderComponent() {
            const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_16 } };
            return closure_1_11(closure_5, obj);
          };
          obj34.ListFooterComponent = function ListFooterComponent() {
            const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_16 } };
            return closure_1_11(closure_5, obj);
          };
          obj34.ItemSeparatorComponent = function ItemSeparatorComponent() {
            const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_12 } };
            return closure_1_11(closure_5, obj);
          };
          tmp22Result10 = closure_11(tmp(9003).FlashList, obj34);
        }
        const obj36 = { children: tmp22Result10 };
        tmp22Result9 = closure_11(closure_12, obj36);
      }
      const obj37 = { children: tmp22Result9 };
      obj29.children = closure_11(tmp(7259).LayerScope, obj37);
      items6[2] = closure_11(closure_5, obj29);
      obj6.children = items6;
      obj5.children = closure_13(closure_5, obj6);
      obj4.children = closure_11(tmp6(15916), obj5);
      return closure_11(tmp(7265).AnalyticsLocationProvider, obj4);
    } else {
      if (tmpResult16.isThemeDark(tmp7)) {
        let tmp6Result4 = tmp6(15914);
      } else {
        tmp6Result4 = tmp6(15915);
      }
      tmpResult16 = tmp(4488);
    }
  }
  tmp15 = preferVCPrice(7265);
}
