// discord_app/modules/collectibles/native/HeroBlock.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import SkeletonCardDefault from "SkeletonCard.tsx";
import FeaturedFirstCardCoachmarkAnchorDefault from "FeaturedFirstCardCoachmarkAnchor.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
const View = fn(17).View;
let constants = fn(1087).CollectiblesMobileShopScreen;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8, VerticalGradient: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const result = 0.75 * fn(8937).COLLECTIBLES_SHOP_CARD_WIDTH;
const createStyles = fn(5090);
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
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SkeletonLoading(accessibilityLabel) {
      const cResult = c.c(5);
      accessibilityLabel = accessibilityLabel.accessibilityLabel;
      const tmp2 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { busy: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const _Array = Array;
        const mapped = Array.from({ length: 10 }).map((item, index) => {
          const obj = { width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH };
          return closure_1_10(SkeletonCardDefault, obj, index);
        });
        cResult[1] = mapped;
        let tmp4 = mapped;
        const arr = Array.from({ length: 10 });
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === accessibilityLabel) {
        if (cResult[3] === tmp2.skeletonContainer) {
          let tmp6 = cResult[4];
        }
        return tmp6;
      }
      const tmp7 = collapsed(View, {
        style: tmp2.skeletonContainer,
        accessibilityRole: "list",
        accessibilityLabel,
        accessibilityState: first,
        accessible: true,
        children: tmp4,
      });
      cResult[2] = accessibilityLabel;
      cResult[3] = tmp2.skeletonContainer;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : function SkeletonLoading(accessibilityLabel) {
      let obj = {
        style: closure_13().skeletonContainer,
        accessibilityRole: "list",
        accessibilityLabel: accessibilityLabel.accessibilityLabel,
        accessibilityState: { busy: true },
        accessible: true,
        children: Array.from({ length: 10 }).map((item, index) => {
          const obj = { width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH };
          return closure_1_10(SkeletonCardDefault, obj, index);
        }),
      };
      return collapsed(View, obj);
    };
ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (heroBlock) => {
      const cResult = heroBlock(navigation[10]).c(70);
      heroBlock = heroBlock.heroBlock;
      const preferVCPrice = heroBlock.preferVCPrice;
      let obj = heroBlock(navigation[10]);
      const handleDismissCoachmarkOnScroll = heroBlock(navigation[12]).useCollectiblesCoachmarkScrollDismissContext()
        .handleDismissCoachmarkOnScroll;
      let obj2 = heroBlock(navigation[12]);
      navigation = heroBlock(navigation[13]).useNavigation();
      let obj3 = heroBlock(navigation[13]);
      const collectiblesAnalyticsContext = heroBlock(navigation[14]).useCollectiblesAnalyticsContext();
      let heroBannerUrl = heroBlock.mobileHeroUrl;
      if (heroBannerUrl == null) {
        heroBannerUrl = heroBlock.heroBannerUrl;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesCategoryStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== heroBlock.categorySkuId) {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
        cResult[1] = heroBlock.categorySkuId;
        cResult[2] = C;
      } else {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
      }
      const obj4 = heroBlock(navigation[14]);
      const stateFromStores = heroBlock(navigation[15]).useStateFromStores(first, C);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
        const isEligibleForQuests = obj6.getIsEligibleForQuests();
        cResult[3] = isEligibleForQuests;
      } else {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
      }
      preferVCPrice(navigation[17])();
      let tmpResult = heroBlock(navigation[15]);
      const handleCardVisibilityChange = heroBlock(navigation[18]).useTrackProductCardImpression(
        heroBlock.categoryStoreListingId,
        "mobile_home",
        "hero_block",
      ).handleCardVisibilityChange;
      closure_13();
      const tmpResult6 = heroBlock(navigation[18]);
      const token = heroBlock(navigation[19]).useToken(preferVCPrice(tmp2[8]).colors.BACKGROUND_BASE_LOW);
      if (cResult[4] !== token) {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
        const hexToRgbaStringResult = obj9.hexToRgbaString(tmp(tmp2[20]).hexWithOpacity(token, 0));
        cResult[4] = token;
        cResult[5] = hexToRgbaStringResult;
        const tmpResult8 = tmp(tmp2[20]);
      } else {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
      }
      const tmpResult7 = heroBlock(navigation[19]);
      const token1 = heroBlock(navigation[19]).useToken(tmp13(tmp2[8]).colors.BACKGROUND_BASE_LOWEST);
      const tmp20 = preferVCPrice(navigation[21])();
      const rankedSkuIds = heroBlock.rankedSkuIds;
      if (cResult[6] === tmp20) {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
        if (cResult[9] === tmp21) {
          class C {
            constructor() {
              return closure_5.getCategory(heroBlock.categorySkuId);
            }
          }
          const filteredAndSortedProducts = tmp(tmp2[22]).useFilteredAndSortedProducts(tmp23);
          CollectiblesCategoryStore = tmp26;
          const tmpResult10 = tmp(tmp2[22]);
          const analyticsLocations = tmp13(tmp2[23])(tmp13(tmp2[24]).COLLECTIBLES_SHOP_HERO).analyticsLocations;
          if (stateFromStores != null) {
            class C {
              constructor() {
                return closure_5.getCategory(heroBlock.categorySkuId);
              }
            }
          }
          if (cResult[12] === undefined) {
            class C {
              constructor() {
                return closure_5.getCategory(heroBlock.categorySkuId);
              }
            }
          }
          if (stateFromStores != null) {
            class C {
              constructor() {
                return closure_5.getCategory(heroBlock.categorySkuId);
              }
            }
          }
          class M {
            constructor(arg0) {
              index = heroBlock.index;
              tmp = jsx;
              tmp3 = closure_2;
              tmp2 = closure_1;
              obj = { solidBackground: true, product: heroBlock.item, unpublishedAt: null, preferVCPrice: null };
              unpublishedAt = undefined;
              tmp4 = closure_1(closure_2[6]);
              if (closure_4 != null) {
                unpublishedAt = closure_4.unpublishedAt;
              }
              obj.unpublishedAt = unpublishedAt;
              obj.preferVCPrice = preferVCPrice;
              tmpResult = tmp(tmp4, obj);
              obj1 = { newValue: { tilePosition: index }, children: null };
              tmpResult1 = tmpResult;
              if (0 === index) {
                tmp8 = closure_5;
                tmpResult1 = tmpResult;
                if (closure_5) {
                  obj4 = { children: null };
                  obj4.children = tmpResult;
                  tmpResult1 = tmp(tmp2(tmp3[25]), obj4);
                }
              }
              obj1.children = tmpResult1;
              return tmp(closure_0(tmp3[14]).CollectiblesAnalyticsProvider, obj1);
            }
          }
          cResult[12] = undefined;
          cResult[13] = heroBlock.screen === constants.FEATURED_PAGE;
          cResult[14] = preferVCPrice;
          cResult[15] = M;
          const tmp13Result = tmp13(tmp2[23]);
        }
        const obj5 = { products: tmp21, bypassAndroidUnsyncedFilter: tmp10 };
        cResult[9] = tmp21;
        cResult[10] = tmp10;
        cResult[11] = obj5;
        tmp23 = obj5;
      }
      const tmp20Result = tmp20(rankedSkuIds);
      cResult[6] = tmp20;
      cResult[7] = rankedSkuIds;
      cResult[8] = tmp20Result;
      const tmpResult9 = heroBlock(navigation[19]);
    }
  : (heroBlock) => {
      heroBlock = heroBlock.heroBlock;
      const preferVCPrice = heroBlock.preferVCPrice;
      let stateFromStores;
      closure_5 = undefined;
      constants = undefined;
      let obj = heroBlock(16010);
      dependencyMap = heroBlock(1502).useNavigation();
      let obj2 = heroBlock(1502);
      noop = heroBlock(8940).useCollectiblesAnalyticsContext();
      let heroBannerUrl = heroBlock.mobileHeroUrl;
      if (heroBannerUrl == null) {
        heroBannerUrl = heroBlock.heroBannerUrl;
      }
      const heroLogoUrl = heroBlock.heroLogoUrl;
      let obj3 = heroBlock(8940);
      const items = [closure_5];
      stateFromStores = heroBlock(504).useStateFromStores(items, () =>
        CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId),
      );
      let tmpResult = heroBlock(504);
      let isEligibleForQuests = heroBlock(10576).getIsEligibleForQuests();
      const tmpResult9 = heroBlock(10576);
      const tmp7 = preferVCPrice(4991)();
      const tmp8 = closure_13();
      const tmpResult10 = heroBlock(16011);
      const token = heroBlock(4778).useToken(preferVCPrice(587).colors.BACKGROUND_BASE_LOW);
      const tmpResult11 = heroBlock(4778);
      const tmpResult12 = heroBlock(4927);
      const tmpResult13 = heroBlock(4927);
      const hexToRgbaStringResult = tmpResult12.hexToRgbaString(heroBlock(4927).hexWithOpacity(token, 0));
      const token1 = heroBlock(4778).useToken(preferVCPrice(587).colors.BACKGROUND_BASE_LOWEST);
      const tmp12 = preferVCPrice(16012)();
      closure_5 = tmp12;
      const items1 = [heroBlock.rankedSkuIds, tmp12];
      const memo = noop.useMemo(() => closure_5(heroBlock.rankedSkuIds), items1);
      const tmpResult14 = heroBlock(4778);
      const filteredAndSortedProducts = heroBlock(15154).useFilteredAndSortedProducts({
        products: memo,
        bypassAndroidUnsyncedFilter: tmp4,
      });
      constants = tmp14;
      const tmpResult15 = heroBlock(15154);
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
          const obj4 = { value: tmp15(preferVCPrice(6865).COLLECTIBLES_SHOP_HERO).analyticsLocations, children: null };
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
              ({ START: obj17.start, END: obj17.end } = closure_9);
              obj8.style = tmp8.orbsBackgroundGradient;
              tmp22Result = closure_10(tmp6(5387), obj8);
            }
            const obj9 = { children: null };
            const items3 = [tmp22Result, ,];
            const obj10 = { style: tmp8.heroBannerImage, source: null };
            const obj11 = { uri: heroBannerUrl };
            obj10.source = obj11;
            items3[1] = closure_10(tmp6(6164), obj10);
            const obj12 = { colors: null, start: null, end: null, style: null };
            const items4 = [hexToRgbaStringResult, token1];
            obj12.colors = items4;
            ({ START: obj21.start, END: obj21.end } = closure_9);
            obj12.style = tmp8.fadeOutGradient;
            items3[2] = closure_10(tmp6(5387), obj12);
            obj9.children = items3;
            tmp24Result = closure_12(closure_11, obj9);
          }
          obj7.children = tmp24Result;
          const items5 = [closure_10(stateFromStores, obj7), ,];
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
              tmp22Result6 = closure_10(tmp(5086).Text, obj15);
            }
            const items6 = [tmp22Result6];
            let tmp22Result7 = null != tmp19;
            if (tmp22Result7) {
              tmp22Result7 = "" !== tmp19;
            }
            if (tmp22Result7) {
              const obj16 = { variant: "text-md/medium", children: tmp19 };
              tmp22Result7 = closure_10(tmp(5086).Text, obj16);
            }
            const obj18 = { children: null };
            items6[1] = tmp22Result7;
            obj18.children = items6;
            const items7 = [closure_12(tmp25, obj18)];
            if (isEligibleForQuests) {
              const obj19 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: null, onPress: null };
              const intl3 = tmp(1126).intl;
              obj19.text = intl3.string(tmp(1126).t.ynollq);
              obj19.onPress = function onTapEarnOrbs() {
                const obj = heroBlock(navigation[27]);
                obj.openQuestHome({
                  mergeExistingRoutes: true,
                  fromContent: heroBlock(navigation[28]).QuestContent.ORBS_SHOP_HERO_CTA,
                });
              };
              isEligibleForQuests = closure_10(tmp(5375).Button, obj19);
            }
            items7[1] = isEligibleForQuests;
            obj14.children = items7;
            let tmp24Result2 = closure_12(tmp25, obj14);
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
            const intl = tmp(1126).intl;
            const obj22 = { category: stateFromStores.name };
            obj20.accessibilityLabel = intl.formatToPlainString(tmp(1126).t.FNtLb3, obj22);
            const intl2 = tmp(1126).intl;
            obj20.accessibilityHint = intl2.string(tmp(1126).t.F8ma9x);
            const obj23 = { radius: tmp6(587).radii.lg };
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
              obj25.children = closure_10(tmp6(6164), obj26);
              tmp22Result8 = closure_10(tmp25, obj25);
            }
            const items8 = [tmp22Result8];
            const obj28 = {
              style: tmp8.heroViewAllIcon,
              children: closure_10(tmp(6892).ChevronSmallRightIcon, { size: "sm", color: "white" }),
            };
            items8[1] = closure_10(tmp25, obj28);
            obj24.children = items8;
            obj20.children = closure_12(tmp25, obj24);
            tmp24Result2 = closure_10(tmp(6189).PressableOpacity, obj20, stateFromStores.storeListingId);
          }
          obj13.children = tmp24Result2;
          items5[1] = closure_10(stateFromStores, obj13);
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
            const intl5 = tmp(1126).intl;
            const obj31 = { category: stateFromStores.name };
            obj30.accessibilityLabel = intl5.formatToPlainString(tmp(1126).t.FNtLb3, obj31);
            let tmp22Result9 = closure_10(tmp6(16026), obj30);
            const tmp6Result3 = tmp6(16026);
          } else {
            if (0 === filteredAndSortedProducts.length) {
              const obj32 = { accessibilityLabel: null };
              const intl4 = tmp(1126).intl;
              const obj33 = { category: stateFromStores.name };
              obj32.accessibilityLabel = intl4.formatToPlainString(tmp(1126).t.FNtLb3, obj33);
              let tmp22Result10 = closure_10(closure_14, obj32);
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
              const intl6 = tmp(1126).intl;
              const obj35 = { category: stateFromStores.name };
              obj34.accessibilityLabel = intl6.formatToPlainString(tmp(1126).t.FNtLb3, obj35);
              obj34.data = filteredAndSortedProducts;
              obj34.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
              obj34.renderItem = tmp17;
              obj34.snapToInterval = tmp(8937).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(587).space.PX_12;
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
              tmp22Result10 = closure_10(tmp(8600).FlashList, obj34);
            }
            const obj36 = { children: tmp22Result10 };
            tmp22Result9 = closure_10(closure_11, obj36);
          }
          const obj37 = { children: tmp22Result9 };
          obj29.children = closure_10(tmp(6835).LayerScope, obj37);
          items5[2] = closure_10(stateFromStores, obj29);
          obj6.children = items5;
          obj5.children = closure_12(stateFromStores, obj6);
          obj4.children = closure_10(tmp6(16029), obj5);
          return closure_10(tmp(6841).AnalyticsLocationProvider, obj4);
        } else {
          if (tmpResult16.isThemeDark(tmp7)) {
            let tmp6Result4 = tmp6(16024);
          } else {
            tmp6Result4 = tmp6(16025);
          }
          tmpResult16 = tmp(4929);
        }
      }
      tmp15 = preferVCPrice(6841);
    };
