// discord_app/modules/collectibles/native/HeroBlock.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesShopCardV2 from "CollectiblesShopCardV2.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import SkeletonCardDefault from "SkeletonCard.tsx";
import FeaturedFirstCardCoachmarkAnchorDefault from "FeaturedFirstCardCoachmarkAnchor.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const CollectiblesShopCardV2Default = CollectiblesShopCardV2;
let accessibilityLabel, dependencyMap, heroBlock, navigation;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let unpackModuleId;
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ AnalyticEvents: metroImportAll, UserSettingsSections: c9, VerticalGradient: c10 } = Constants);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
const result = 0.75 * CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
let createStyles = createStyles_mod;
let obj = {
  heroContainer: { width: "100%" },
  heroBannerContainer: rect,
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
  innerContainer: size,
  heroLogoContainer: { flex: 1, maxWidth: "80%", maxHeight: "80%" },
  heroLogo: { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 },
  heroViewAllIcon: obj2,
  orbsInnerContainer: obj3,
  orbsTitle: { fontSize: 24, lineHeight: 30 },
  productCardsContainer: { zIndex: 1 },
  skeletonContainer: obj4,
};
rect = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  maxHeight: 240 + result,
  aspectRatio: 1.4883720930232558,
};
size = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: nativeDefault.space.PX_16,
  width: "100%",
  height: "100%",
};
createStyles = createStyles.createStyles;
obj2 = {
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
};
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (accessibilityLabel) => {
      let first;
      let tmp4;
      let obj = react2;
      const cResult = obj.c(5);
      accessibilityLabel = accessibilityLabel.accessibilityLabel;
      const tmp2 = closure_14();
      const skeletonContainer = tmp2.skeletonContainer;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { busy: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const _Array = Array;
        const arr = Array.from({ length: 10 });
        const mapped = arr.map((item, index) => {
          const obj = { width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH };
          const tmp = SkeletonCardDefault;
          return closure_1_11(tmp, obj, index);
        });
        cResult[1] = mapped;
        tmp4 = mapped;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === accessibilityLabel) {
        let tmp6;
        if (cResult[3] === tmp2.skeletonContainer) {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
      const tmp7 = unpackModuleId(hasOwnProperty, {
        style: skeletonContainer,
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
  : (accessibilityLabel) => {
      let arr;
      let obj = {
        style: closure_14().skeletonContainer,
        accessibilityRole: "list",
        accessibilityLabel: accessibilityLabel.accessibilityLabel,
        accessibilityState: { busy: true },
        accessible: true,
        children: arr.map((item, index) => {
          const obj = { width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH };
          const tmp = SkeletonCardDefault;
          return closure_1_11(tmp, obj, index);
        }),
      };
      arr = Array.from({ length: 10 });
      return unpackModuleId(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (heroBlock) => {
      let first;
      let items1;
      let items2;
      let items3;
      let obj8;
      let tmp17;
      let tmp8;
      const tmp = heroBlock;
      let obj = heroBlock(navigation[10]);
      const cResult = obj.c(70);
      heroBlock = heroBlock.heroBlock;
      const preferVCPrice = heroBlock.preferVCPrice;
      const screen = heroBlock.screen;
      let obj2 = heroBlock(navigation[12]);
      const handleDismissCoachmarkOnScroll =
        obj2.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
      let obj3 = heroBlock(navigation[13]);
      navigation = obj3.useNavigation();
      const obj4 = heroBlock(navigation[14]);
      const collectiblesAnalyticsContext = obj4.useCollectiblesAnalyticsContext();
      let heroBannerUrl = heroBlock.mobileHeroUrl;
      if (heroBannerUrl == null) {
        heroBannerUrl = heroBlock.heroBannerUrl;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesCategoryStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== heroBlock.categorySkuId) {
        const fn = function h() {
          return CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId);
        };
        cResult[1] = heroBlock.categorySkuId;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      let tmpResult = tmp(tmp2[15]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult9 = tmp(navigation[16]);
        const isEligibleForQuests = tmpResult9.getIsEligibleForQuests();
        cResult[3] = isEligibleForQuests;
      }
      preferVCPrice(navigation[17])();
      const tmpResult10 = tmp(navigation[18]);
      const handleCardVisibilityChange = tmpResult10.useTrackProductCardImpression(
        heroBlock.categoryStoreListingId,
        "mobile_home",
        "hero_block",
      ).handleCardVisibilityChange;
      const tmp15 = closure_14();
      const tmpResult11 = tmp(navigation[19]);
      const token = tmpResult11.useToken(preferVCPrice(tmp2[8]).colors.BACKGROUND_BASE_LOW);
      if (cResult[4] !== token) {
        const hexToRgbaString = tmp(navigation[20]).hexToRgbaString;
        tmp(navigation[20]);
        const tmpResult13 = tmp(navigation[20]);
        const hexToRgbaStringResult = hexToRgbaString(tmpResult13.hexWithOpacity(token, 0));
        cResult[4] = token;
        cResult[5] = hexToRgbaStringResult;
        tmp17 = hexToRgbaStringResult;
      } else {
        tmp17 = cResult[5];
      }
      const tmpResult14 = tmp(navigation[19]);
      const token1 = tmpResult14.useToken(tmp13(tmp2[8]).colors.BACKGROUND_BASE_LOWEST);
      const tmp21 = preferVCPrice(navigation[21])();
      const rankedSkuIds = heroBlock.rankedSkuIds;
      if (cResult[6] === tmp21) {
        let tmp22;
        if (cResult[7] === rankedSkuIds) {
          tmp22 = cResult[8];
        }
        if (cResult[9] === tmp22) {
          let tmp24;
          if (cResult[10] === (null != stateFromStores && stateFromStores.isOrbsExclusive)) {
            tmp24 = cResult[11];
          }
          const tmpResult15 = tmp(navigation[22]);
          const filteredAndSortedProducts = tmpResult15.useFilteredAndSortedProducts(tmp24);
          let closure_5 = tmp27;
          const tmp13Result = preferVCPrice(navigation[23]);
          const analyticsLocations = tmp13Result(tmp13(tmp2[24]).COLLECTIBLES_SHOP_HERO).analyticsLocations;
          let unpublishedAt;
          const tmp29 = cResult[12];
          if (stateFromStores != null) {
            unpublishedAt = stateFromStores.unpublishedAt;
          }
          if (tmp29 === unpublishedAt) {
            if ((cResult[13] === screen) === constants.FEATURED_PAGE) {
              if (undefined === stateFromStores) {
                return null;
              } else {
                if (cResult[16] === collectiblesAnalyticsContext) {
                  if (cResult[17] === heroBlock.categoryStoreListingId) {
                    class J {
                      constructor(category) {
                        let _String;
                        let pageCategory;
                        let pageSection;
                        let tilePosition;
                        let sessionId;
                        const track = AnalyticsUtilsDefault.track;
                        const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportAll.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                        AnalyticsUtilsDefault;
                        if (collectiblesAnalyticsContext != null) {
                          sessionId = collectiblesAnalyticsContext.sessionId;
                        }
                        const obj = {
                          collectibles_shop_session_id: sessionId,
                          sku_id: heroBlock.categoryStoreListingId,
                          page_type: "mobile_home",
                          page_section: pageSection,
                          page_category: pageCategory,
                          tile_type: "HERO_BLOCK",
                          tile_position: _String(tilePosition),
                          cta_name: null,
                        };
                        pageSection = undefined;
                        if (collectiblesAnalyticsContext != null) {
                          pageSection = collectiblesAnalyticsContext.pageSection;
                        }
                        pageCategory = undefined;
                        if (collectiblesAnalyticsContext != null) {
                          pageCategory = collectiblesAnalyticsContext.pageCategory;
                        }
                        tilePosition = undefined;
                        _String = String;
                        if (collectiblesAnalyticsContext != null) {
                          tilePosition = collectiblesAnalyticsContext.tilePosition;
                        }
                        track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
                        const obj2 = { category, analyticsContext: collectiblesAnalyticsContext };
                        navigation.navigate(constants.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj2);
                      }
                    }
                    const _Symbol = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      const fn2 = function $() {
                        const obj = heroBlock(navigation[27]);
                        const obj2 = {
                          mergeExistingRoutes: true,
                          fromContent: heroBlock(navigation[28]).QuestContent.ORBS_SHOP_HERO_CTA,
                        };
                        obj.openQuestHome(obj2);
                      };
                      class J {
                        constructor(category) {
                          let _String;
                          let pageCategory;
                          let pageSection;
                          let tilePosition;
                          let sessionId;
                          const track = AnalyticsUtilsDefault.track;
                          const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportAll.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                          AnalyticsUtilsDefault;
                          if (collectiblesAnalyticsContext != null) {
                            sessionId = collectiblesAnalyticsContext.sessionId;
                          }
                          const obj = {
                            collectibles_shop_session_id: sessionId,
                            sku_id: heroBlock.categoryStoreListingId,
                            page_type: "mobile_home",
                            page_section: pageSection,
                            page_category: pageCategory,
                            tile_type: "HERO_BLOCK",
                            tile_position: _String(tilePosition),
                            cta_name: null,
                          };
                          pageSection = undefined;
                          if (collectiblesAnalyticsContext != null) {
                            pageSection = collectiblesAnalyticsContext.pageSection;
                          }
                          pageCategory = undefined;
                          if (collectiblesAnalyticsContext != null) {
                            pageCategory = collectiblesAnalyticsContext.pageCategory;
                          }
                          tilePosition = undefined;
                          _String = String;
                          if (collectiblesAnalyticsContext != null) {
                            tilePosition = collectiblesAnalyticsContext.tilePosition;
                          }
                          track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
                          const obj2 = { category, analyticsContext: collectiblesAnalyticsContext };
                          navigation.navigate(constants.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj2);
                        }
                      }
                      cResult[20] = fn2;
                    }
                    if (null != stateFromStores && stateFromStores.isOrbsExclusive) {
                      tmp(navigation[29]);
                      class J {
                        constructor(category) {
                          let _String;
                          let pageCategory;
                          let pageSection;
                          let tilePosition;
                          let sessionId;
                          const track = AnalyticsUtilsDefault.track;
                          const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportAll.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                          AnalyticsUtilsDefault;
                          if (collectiblesAnalyticsContext != null) {
                            sessionId = collectiblesAnalyticsContext.sessionId;
                          }
                          const obj = {
                            collectibles_shop_session_id: sessionId,
                            sku_id: heroBlock.categoryStoreListingId,
                            page_type: "mobile_home",
                            page_section: pageSection,
                            page_category: pageCategory,
                            tile_type: "HERO_BLOCK",
                            tile_position: _String(tilePosition),
                            cta_name: null,
                          };
                          pageSection = undefined;
                          if (collectiblesAnalyticsContext != null) {
                            pageSection = collectiblesAnalyticsContext.pageSection;
                          }
                          pageCategory = undefined;
                          if (collectiblesAnalyticsContext != null) {
                            pageCategory = collectiblesAnalyticsContext.pageCategory;
                          }
                          tilePosition = undefined;
                          _String = String;
                          if (collectiblesAnalyticsContext != null) {
                            tilePosition = collectiblesAnalyticsContext.tilePosition;
                          }
                          track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
                          const obj2 = { category, analyticsContext: collectiblesAnalyticsContext };
                          navigation.navigate(constants.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj2);
                        }
                      }
                      heroBannerUrl = tmp38;
                    }
                    if (cResult[21] === token1) {
                      if (cResult[22] === tmp17) {
                        if (cResult[23] === heroBannerUrl) {
                          if (cResult[24] === (null != stateFromStores && stateFromStores.isOrbsExclusive)) {
                            if (cResult[25] === tmp15.fadeOutGradient) {
                              if (cResult[26] === tmp15.heroBannerImage) {
                                let tmp39;
                                if (cResult[27] === tmp15.orbsBackgroundGradient) {
                                  tmp39 = cResult[28];
                                }
                                class J {
                                  constructor(category) {
                                    let _String;
                                    let pageCategory;
                                    let pageSection;
                                    let tilePosition;
                                    let sessionId;
                                    const track = AnalyticsUtilsDefault.track;
                                    const COLLECTIBLES_SHOP_ELEMENT_CLICKED =
                                      metroImportAll.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                                    AnalyticsUtilsDefault;
                                    if (collectiblesAnalyticsContext != null) {
                                      sessionId = collectiblesAnalyticsContext.sessionId;
                                    }
                                    const obj = {
                                      collectibles_shop_session_id: sessionId,
                                      sku_id: heroBlock.categoryStoreListingId,
                                      page_type: "mobile_home",
                                      page_section: pageSection,
                                      page_category: pageCategory,
                                      tile_type: "HERO_BLOCK",
                                      tile_position: _String(tilePosition),
                                      cta_name: null,
                                    };
                                    pageSection = undefined;
                                    if (collectiblesAnalyticsContext != null) {
                                      pageSection = collectiblesAnalyticsContext.pageSection;
                                    }
                                    pageCategory = undefined;
                                    if (collectiblesAnalyticsContext != null) {
                                      pageCategory = collectiblesAnalyticsContext.pageCategory;
                                    }
                                    tilePosition = undefined;
                                    _String = String;
                                    if (collectiblesAnalyticsContext != null) {
                                      tilePosition = collectiblesAnalyticsContext.tilePosition;
                                    }
                                    track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
                                    const obj2 = { category, analyticsContext: collectiblesAnalyticsContext };
                                    navigation.navigate(constants.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj2);
                                  }
                                }
                                const obj5 = { style: tmp15.heroBannerContainer, children: tmp39 };
                                cResult[29] = tmp15.heroBannerContainer;
                                cResult[30] = tmp39;
                                cResult[31] = closure_11(closure_5, obj5);
                                closure_11(closure_5, obj5);
                                class Q {
                                  constructor(product) {
                                    let tmpResult2;
                                    let unpublishedAt;
                                    const index = product.index;
                                    const obj = {
                                      solidBackground: true,
                                      product: product.item,
                                      unpublishedAt,
                                      preferVCPrice,
                                    };
                                    unpublishedAt = undefined;
                                    const tmp4 = CollectiblesShopCardV2Default;
                                    if (stateFromStores != null) {
                                      unpublishedAt = stateFromStores.unpublishedAt;
                                    }
                                    const tmpResult = unpackModuleId(tmp4, obj);
                                    const obj2 = { newValue: { tilePosition: index }, children: tmpResult2 };
                                    tmpResult2 = tmpResult;
                                    const CollectiblesAnalyticsProvider =
                                      CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
                                    if (0 === index) {
                                      tmpResult2 = tmpResult;
                                      if (closure_5) {
                                        const obj3 = { children: tmpResult };
                                        tmpResult2 = unpackModuleId(FeaturedFirstCardCoachmarkAnchorDefault, obj3);
                                      }
                                    }
                                    return unpackModuleId(CollectiblesAnalyticsProvider, obj2);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp41Result = null != heroBannerUrl;
                    if (tmp41Result) {
                      let tmp43 = tmp10;
                      class J {
                        constructor(category) {
                          let _String;
                          let pageCategory;
                          let pageSection;
                          let tilePosition;
                          let sessionId;
                          const track = AnalyticsUtilsDefault.track;
                          const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportAll.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                          AnalyticsUtilsDefault;
                          if (collectiblesAnalyticsContext != null) {
                            sessionId = collectiblesAnalyticsContext.sessionId;
                          }
                          const obj = {
                            collectibles_shop_session_id: sessionId,
                            sku_id: heroBlock.categoryStoreListingId,
                            page_type: "mobile_home",
                            page_section: pageSection,
                            page_category: pageCategory,
                            tile_type: "HERO_BLOCK",
                            tile_position: _String(tilePosition),
                            cta_name: null,
                          };
                          pageSection = undefined;
                          if (collectiblesAnalyticsContext != null) {
                            pageSection = collectiblesAnalyticsContext.pageSection;
                          }
                          pageCategory = undefined;
                          if (collectiblesAnalyticsContext != null) {
                            pageCategory = collectiblesAnalyticsContext.pageCategory;
                          }
                          tilePosition = undefined;
                          _String = String;
                          if (collectiblesAnalyticsContext != null) {
                            tilePosition = collectiblesAnalyticsContext.tilePosition;
                          }
                          track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
                          const obj2 = { category, analyticsContext: collectiblesAnalyticsContext };
                          navigation.navigate(constants.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj2);
                        }
                      }
                      if (null != stateFromStores && stateFromStores.isOrbsExclusive) {
                        class J {
                          constructor(category) {
                            let _String;
                            let pageCategory;
                            let pageSection;
                            let tilePosition;
                            let sessionId;
                            const track = AnalyticsUtilsDefault.track;
                            const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportAll.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                            AnalyticsUtilsDefault;
                            if (collectiblesAnalyticsContext != null) {
                              sessionId = collectiblesAnalyticsContext.sessionId;
                            }
                            const obj = {
                              collectibles_shop_session_id: sessionId,
                              sku_id: heroBlock.categoryStoreListingId,
                              page_type: "mobile_home",
                              page_section: pageSection,
                              page_category: pageCategory,
                              tile_type: "HERO_BLOCK",
                              tile_position: _String(tilePosition),
                              cta_name: null,
                            };
                            pageSection = undefined;
                            if (collectiblesAnalyticsContext != null) {
                              pageSection = collectiblesAnalyticsContext.pageSection;
                            }
                            pageCategory = undefined;
                            if (collectiblesAnalyticsContext != null) {
                              pageCategory = collectiblesAnalyticsContext.pageCategory;
                            }
                            tilePosition = undefined;
                            _String = String;
                            if (collectiblesAnalyticsContext != null) {
                              tilePosition = collectiblesAnalyticsContext.tilePosition;
                            }
                            track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
                            const obj2 = { category, analyticsContext: collectiblesAnalyticsContext };
                            navigation.navigate(constants.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj2);
                          }
                        }
                        tmp45[0] = ["rgba(39, 30, 173, 0.3)", "transparent"];
                        ({ START: tmp45[1], END: tmp45[2] } = closure_10);
                        tmp45[3] = tmp15.orbsBackgroundGradient;
                        tmp43 = closure_11(tmp13(tmp2[32]), tmp45);
                      }
                      const obj6 = { children: items1 };
                      items1 = [tmp43, ,];
                      const obj7 = { style: items2, source: obj8 };
                      items2 = [tmp15.heroBannerImage];
                      obj8 = { uri: null };
                      class Q {
                        constructor(product) {
                          let tmpResult2;
                          let unpublishedAt;
                          const index = product.index;
                          const obj = { solidBackground: true, product: product.item, unpublishedAt, preferVCPrice };
                          unpublishedAt = undefined;
                          const tmp4 = CollectiblesShopCardV2Default;
                          if (stateFromStores != null) {
                            unpublishedAt = stateFromStores.unpublishedAt;
                          }
                          const tmpResult = unpackModuleId(tmp4, obj);
                          const obj2 = { newValue: { tilePosition: index }, children: tmpResult2 };
                          tmpResult2 = tmpResult;
                          const CollectiblesAnalyticsProvider =
                            CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
                          if (0 === index) {
                            tmpResult2 = tmpResult;
                            if (closure_5) {
                              const obj3 = { children: tmpResult };
                              tmpResult2 = unpackModuleId(FeaturedFirstCardCoachmarkAnchorDefault, obj3);
                            }
                          }
                          return unpackModuleId(CollectiblesAnalyticsProvider, obj2);
                        }
                      }
                      items1[1] = closure_11(stateFromStores, obj7);
                      const obj9 = { colors: items3, start: null, end: null, style: tmp15.fadeOutGradient };
                      items3 = [tmp17, token1];
                      ({ START: obj16.start, END: obj16.end } = closure_10);
                      items1[2] = closure_11(preferVCPrice(navigation[32]), obj9);
                      tmp41Result = tmp41(closure_12, obj6);
                    }
                    cResult[21] = token1;
                    class Q {
                      constructor(product) {
                        let tmpResult2;
                        let unpublishedAt;
                        const index = product.index;
                        const obj = { solidBackground: true, product: product.item, unpublishedAt, preferVCPrice };
                        unpublishedAt = undefined;
                        const tmp4 = CollectiblesShopCardV2Default;
                        if (stateFromStores != null) {
                          unpublishedAt = stateFromStores.unpublishedAt;
                        }
                        const tmpResult = unpackModuleId(tmp4, obj);
                        const obj2 = { newValue: { tilePosition: index }, children: tmpResult2 };
                        tmpResult2 = tmpResult;
                        const CollectiblesAnalyticsProvider =
                          CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
                        if (0 === index) {
                          tmpResult2 = tmpResult;
                          if (closure_5) {
                            const obj3 = { children: tmpResult };
                            tmpResult2 = unpackModuleId(FeaturedFirstCardCoachmarkAnchorDefault, obj3);
                          }
                        }
                        return unpackModuleId(CollectiblesAnalyticsProvider, obj2);
                      }
                    }
                    cResult[23] = heroBannerUrl;
                    cResult[24] = null != stateFromStores && stateFromStores.isOrbsExclusive;
                    cResult[25] = tmp15.fadeOutGradient;
                    cResult[26] = tmp15.heroBannerImage;
                    cResult[27] = tmp15.orbsBackgroundGradient;
                    cResult[28] = tmp41Result;
                    tmp39 = tmp41Result;
                  }
                }
                class J {
                  constructor(category) {
                    let _String;
                    let pageCategory;
                    let pageSection;
                    let tilePosition;
                    let sessionId;
                    const track = AnalyticsUtilsDefault.track;
                    const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportAll.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                    AnalyticsUtilsDefault;
                    if (collectiblesAnalyticsContext != null) {
                      sessionId = collectiblesAnalyticsContext.sessionId;
                    }
                    const obj = {
                      collectibles_shop_session_id: sessionId,
                      sku_id: heroBlock.categoryStoreListingId,
                      page_type: "mobile_home",
                      page_section: pageSection,
                      page_category: pageCategory,
                      tile_type: "HERO_BLOCK",
                      tile_position: _String(tilePosition),
                      cta_name: null,
                    };
                    pageSection = undefined;
                    if (collectiblesAnalyticsContext != null) {
                      pageSection = collectiblesAnalyticsContext.pageSection;
                    }
                    pageCategory = undefined;
                    if (collectiblesAnalyticsContext != null) {
                      pageCategory = collectiblesAnalyticsContext.pageCategory;
                    }
                    tilePosition = undefined;
                    _String = String;
                    if (collectiblesAnalyticsContext != null) {
                      tilePosition = collectiblesAnalyticsContext.tilePosition;
                    }
                    track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
                    const obj2 = { category, analyticsContext: collectiblesAnalyticsContext };
                    navigation.navigate(constants.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj2);
                  }
                }
                cResult[16] = collectiblesAnalyticsContext;
                cResult[17] = heroBlock.categoryStoreListingId;
                cResult[18] = navigation;
                cResult[19] = J;
              }
            }
          }
          let unpublishedAt1;
          if (stateFromStores != null) {
            unpublishedAt1 = stateFromStores.unpublishedAt;
          }
          class Q {
            constructor(product) {
              let tmpResult2;
              let unpublishedAt;
              const index = product.index;
              const obj = { solidBackground: true, product: product.item, unpublishedAt, preferVCPrice };
              unpublishedAt = undefined;
              const tmp4 = CollectiblesShopCardV2Default;
              if (stateFromStores != null) {
                unpublishedAt = stateFromStores.unpublishedAt;
              }
              const tmpResult = unpackModuleId(tmp4, obj);
              const obj2 = { newValue: { tilePosition: index }, children: tmpResult2 };
              tmpResult2 = tmpResult;
              const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
              if (0 === index) {
                tmpResult2 = tmpResult;
                if (closure_5) {
                  const obj3 = { children: tmpResult };
                  tmpResult2 = unpackModuleId(FeaturedFirstCardCoachmarkAnchorDefault, obj3);
                }
              }
              return unpackModuleId(CollectiblesAnalyticsProvider, obj2);
            }
          }
          cResult[12] = unpublishedAt1;
          cResult[13] = screen === constants.FEATURED_PAGE;
          cResult[14] = preferVCPrice;
          cResult[15] = Q;
        }
        const obj10 = {
          products: tmp22,
          bypassAndroidUnsyncedFilter: null != stateFromStores && stateFromStores.isOrbsExclusive,
        };
        cResult[9] = tmp22;
        cResult[10] = null != stateFromStores && stateFromStores.isOrbsExclusive;
        cResult[11] = obj10;
        tmp24 = obj10;
      }
      const tmp21Result = tmp21(rankedSkuIds);
      cResult[6] = tmp21;
      cResult[7] = rankedSkuIds;
      cResult[8] = tmp21Result;
      tmp22 = tmp21Result;
    }
  : (heroBlock) => {
      let LayerScope;
      let analyticsContext;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items3;
      let items4;
      let items5;
      let items6;
      let items8;
      let items9;
      let num;
      let obj11;
      let obj22;
      let obj23;
      let obj24;
      let obj26;
      let obj27;
      let obj31;
      let obj33;
      let obj35;
      let obj37;
      let obj5;
      let obj6;
      let tmp24Result;
      let tmp24Result2;
      let tmp6Result3;
      heroBlock = heroBlock.heroBlock;
      const preferVCPrice = heroBlock.preferVCPrice;
      dependencyMap = undefined;
      let stateFromStores;
      let closure_5;
      let closure_6;
      const screen = heroBlock.screen;
      let obj = heroBlock(15752);
      const handleDismissCoachmarkOnScroll =
        obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
      let obj2 = heroBlock(1490);
      dependencyMap = obj2.useNavigation();
      let obj3 = heroBlock(8454);
      react = obj3.useCollectiblesAnalyticsContext();
      let heroBannerUrl = heroBlock.mobileHeroUrl;
      if (heroBannerUrl == null) {
        heroBannerUrl = heroBlock.heroBannerUrl;
      }
      const heroLogoUrl = heroBlock.heroLogoUrl;
      let tmpResult = tmp(504);
      const items = [closure_6];
      stateFromStores = tmpResult.useStateFromStores(items, () =>
        CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId),
      );
      let tmp4 = null != stateFromStores && stateFromStores.isOrbsExclusive;
      const tmpResult9 = heroBlock(10925);
      let isEligibleForQuests = tmpResult9.getIsEligibleForQuests();
      const tmp7 = preferVCPrice(4797)();
      const tmpResult10 = heroBlock(15753);
      const handleCardVisibilityChange = tmpResult10.useTrackProductCardImpression(
        heroBlock.categoryStoreListingId,
        "mobile_home",
        "hero_block",
      ).handleCardVisibilityChange;
      const tmp8 = closure_14();
      const tmpResult11 = heroBlock(4586);
      const token = tmpResult11.useToken(preferVCPrice(587).colors.BACKGROUND_BASE_LOW);
      const hexToRgbaString = heroBlock(4733).hexToRgbaString;
      heroBlock(4733);
      const tmpResult13 = heroBlock(4733);
      const hexToRgbaStringResult = hexToRgbaString(tmpResult13.hexWithOpacity(token, 0));
      const tmpResult14 = heroBlock(4586);
      const token1 = tmpResult14.useToken(preferVCPrice(587).colors.BACKGROUND_BASE_LOWEST);
      const tmp13 = preferVCPrice(15754)();
      closure_5 = tmp13;
      const items1 = [heroBlock.rankedSkuIds, tmp13];
      const memo = react.useMemo(() => closure_5(heroBlock.rankedSkuIds), items1);
      const tmpResult15 = heroBlock(14892);
      const filteredAndSortedProducts = tmpResult15.useFilteredAndSortedProducts({
        products: memo,
        bypassAndroidUnsyncedFilter: tmp4,
      });
      closure_6 = tmp15;
      let unpublishedAt;
      const tmp16 = preferVCPrice(6664);
      const analyticsLocations = tmp16(preferVCPrice(6688).COLLECTIBLES_SHOP_HERO).analyticsLocations;
      if (stateFromStores != null) {
        unpublishedAt = stateFromStores.unpublishedAt;
      }
      const items2 = [unpublishedAt, preferVCPrice, screen === constants.FEATURED_PAGE];
      if (undefined === stateFromStores) {
        return null;
      } else {
        let tmp22Result9;
        const tmp19 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
        const tmp20 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
        if (tmp4) {
          let tmp6Result;
          const tmpResult16 = heroBlock(4735);
          if (tmpResult16.isThemeDark(tmp7)) {
            tmp6Result = tmp6(15766);
          } else {
            tmp6Result = tmp6(15767);
          }
          heroBannerUrl = tmp6Result;
        }
        const obj4 = { value: analyticsLocations, children: closure_11(tmp6Result3, obj5) };
        const AnalyticsLocationProvider = tmp(6664).AnalyticsLocationProvider;
        obj5 = {
          onChange: handleCardVisibilityChange,
          resetKey: heroBlock.categoryStoreListingId,
          children: closure_13(closure_5, obj6),
        };
        const obj7 = { style: tmp8.heroBannerContainer, children: tmp24Result };
        tmp24Result = null != heroBannerUrl;
        obj6 = { style: tmp8.heroContainer, children: items6 };
        tmp6Result3 = preferVCPrice(15771);
        if (tmp24Result) {
          let tmp22Result = tmp4;
          if (tmp22Result) {
            const obj8 = {
              colors: ["rgba(39, 30, 173, 0.3)", "transparent"],
              start: null,
              end: null,
              style: tmp8.orbsBackgroundGradient,
            };
            ({ START: obj16.start, END: obj16.end } = closure_10);
            tmp22Result = closure_11(tmp6(5612), obj8);
          }
          const obj9 = { children: items3 };
          items3 = [tmp22Result, ,];
          const obj10 = { style: items4, source: obj11 };
          items4 = [tmp8.heroBannerImage];
          obj11 = { uri: heroBannerUrl };
          items3[1] = closure_11(stateFromStores, obj10);
          const obj12 = { colors: items5, start: null, end: null, style: tmp8.fadeOutGradient };
          items5 = [hexToRgbaStringResult, token1];
          ({ START: obj20.start, END: obj20.end } = closure_10);
          items3[2] = closure_11(preferVCPrice(5612), obj12);
          tmp24Result = closure_13(closure_12, obj9);
        }
        items6 = [closure_11(closure_5, obj7), ,];
        const obj13 = { style: tmp8.heroInfoContainer, children: tmp24Result2 };
        if (tmp4) {
          let tmp22Result6 = null != tmp19;
          const obj14 = { style: tmp8.orbsInnerContainer, children: items8 };
          if (tmp22Result6) {
            const obj15 = {
              variant: "display-md",
              color: "mobile-text-heading-primary",
              style: tmp8.orbsTitle,
              children: tmp19,
            };
            tmp22Result6 = closure_11(tmp(4892).Text, obj15);
          }
          const items7 = [tmp22Result6];
          let tmp22Result7 = null != tmp20 && "" !== tmp20;
          if (tmp22Result7) {
            const obj17 = { variant: "text-md/medium", children: tmp20 };
            tmp22Result7 = closure_11(tmp(4892).Text, obj17);
          }
          const obj18 = { children: items7 };
          items7[1] = tmp22Result7;
          items8 = [closure_13(closure_5, obj18)];
          if (isEligibleForQuests) {
            const obj19 = {
              variant: "tertiary",
              shrink: true,
              grow: false,
              size: "sm",
              text: intl3.string(heroBlock(1126).t.ynollq),
              onPress() {
                const obj = heroBlock(navigation[27]);
                const obj2 = {
                  mergeExistingRoutes: true,
                  fromContent: heroBlock(navigation[28]).QuestContent.ORBS_SHOP_HERO_CTA,
                };
                obj.openQuestHome(obj2);
              },
            };
            const Button = tmp(5601).Button;
            intl3 = tmp(1126).intl;
            isEligibleForQuests = closure_11(Button, obj19);
          }
          items8[1] = isEligibleForQuests;
          tmp24Result2 = closure_13(tmp25, obj14);
        } else {
          const obj21 = {
            accessibilityRole: "button",
            accessibilityLabel: intl.formatToPlainString(heroBlock(1126).t.FNtLb3, obj22),
            accessibilityHint: intl2.string(heroBlock(1126).t.F8ma9x),
            activeOpacity: 0.6,
            androidRippleConfig: obj23,
            hitSlop: 8,
            onPress() {
              let _String;
              let pageCategory;
              let pageSection;
              let tilePosition;
              let sessionId;
              const track = AnalyticsUtilsDefault.track;
              const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportAll.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
              AnalyticsUtilsDefault;
              if (analyticsContext != null) {
                sessionId = analyticsContext.sessionId;
              }
              const obj = {
                collectibles_shop_session_id: sessionId,
                sku_id: heroBlock.categoryStoreListingId,
                page_type: "mobile_home",
                page_section: pageSection,
                page_category: pageCategory,
                tile_type: "HERO_BLOCK",
                tile_position: _String(tilePosition),
                cta_name: null,
              };
              pageSection = undefined;
              if (analyticsContext != null) {
                pageSection = analyticsContext.pageSection;
              }
              pageCategory = undefined;
              if (analyticsContext != null) {
                pageCategory = analyticsContext.pageCategory;
              }
              tilePosition = undefined;
              _String = String;
              if (analyticsContext != null) {
                tilePosition = analyticsContext.tilePosition;
              }
              track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
              navigation.navigate(constants.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, {
                category: stateFromStores,
                analyticsContext,
              });
            },
            children: closure_13(closure_5, obj24),
          };
          const PressableOpacity = tmp(5916).PressableOpacity;
          intl = tmp(1126).intl;
          obj22 = { category: stateFromStores.name };
          intl2 = tmp(1126).intl;
          let tmp22Result8 = null != heroLogoUrl;
          obj23 = { radius: preferVCPrice(587).radii.lg };
          obj24 = { style: tmp8.innerContainer, children: items9 };
          if (tmp22Result8) {
            const obj25 = { style: tmp8.heroLogoContainer, children: closure_11(stateFromStores, obj26) };
            obj26 = { style: tmp8.heroLogo, source: obj27 };
            obj27 = { uri: heroLogoUrl };
            tmp22Result8 = closure_11(tmp25, obj25);
          }
          items9 = [tmp22Result8];
          const obj28 = {
            style: tmp8.heroViewAllIcon,
            children: closure_11(heroBlock(6715).ChevronSmallRightIcon, { size: "sm", color: "white" }),
          };
          items9[1] = closure_11(closure_5, obj28);
          tmp24Result2 = closure_11(PressableOpacity, obj21, stateFromStores.storeListingId);
        }
        items6[1] = closure_11(closure_5, obj13);
        const obj29 = { style: tmp8.productCardsContainer, children: closure_11(LayerScope, obj37) };
        LayerScope = tmp(6658).LayerScope;
        if (tmp4) {
          const obj30 = {
            products: filteredAndSortedProducts,
            loadingCardsNum: num,
            preferVCPrice,
            accessibilityLabel: intl5.formatToPlainString(heroBlock(1126).t.FNtLb3, obj31),
          };
          num = 4;
          const tmp6Result4 = preferVCPrice(15768);
          if (0 !== filteredAndSortedProducts.length) {
            num = filteredAndSortedProducts.length;
          }
          intl5 = tmp(1126).intl;
          obj31 = { category: stateFromStores.name };
          tmp22Result9 = closure_11(tmp6Result4, obj30);
        } else {
          let tmp22Result10;
          if (0 === filteredAndSortedProducts.length) {
            const obj32 = { accessibilityLabel: intl4.formatToPlainString(heroBlock(1126).t.FNtLb3, obj33) };
            intl4 = tmp(1126).intl;
            obj33 = { category: stateFromStores.name };
            tmp22Result10 = closure_11(closure_15, obj32);
          } else {
            const obj34 = {
              horizontal: true,
              accessibilityLabel: intl6.formatToPlainString(heroBlock(1126).t.FNtLb3, obj35),
              accessibilityRole: "list",
              data: filteredAndSortedProducts,
              onScroll: handleDismissCoachmarkOnScroll,
              renderItem: tmp18,
              decelerationRate: "fast",
              snapToInterval: heroBlock(8451).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(587).space.PX_12,
              showsHorizontalScrollIndicator: false,
              ListHeaderComponent() {
                const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_16 } };
                ({ width: preferVCPrice(navigation[8]).space.PX_16 });
                return closure_1_11(closure_5, obj);
              },
              ListFooterComponent() {
                const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_16 } };
                ({ width: preferVCPrice(navigation[8]).space.PX_16 });
                return closure_1_11(closure_5, obj);
              },
              ItemSeparatorComponent() {
                const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_12 } };
                ({ width: preferVCPrice(navigation[8]).space.PX_12 });
                return closure_1_11(closure_5, obj);
              },
            };
            const FlashList = tmp(8404).FlashList;
            intl6 = tmp(1126).intl;
            obj35 = { category: stateFromStores.name };
            tmp22Result10 = closure_11(FlashList, obj34);
          }
          const obj36 = { children: tmp22Result10 };
          tmp22Result9 = closure_11(closure_12, obj36);
        }
        obj37 = { children: tmp22Result9 };
        items6[2] = closure_11(closure_5, obj29);
        return closure_11(AnalyticsLocationProvider, obj4);
      }
    };
size = size_mod;
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default tmp7;
