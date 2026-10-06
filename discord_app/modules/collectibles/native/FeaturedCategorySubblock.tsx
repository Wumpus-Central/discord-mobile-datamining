// discord_app/modules/collectibles/native/FeaturedCategorySubblock.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import VisibilitySensorDefault from "VisibilitySensor.tsx";
import react from "../../../../_runtime/00019_react.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, navigation;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const Image = react_native.Image;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ AnalyticEvents: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  container: { position: "relative" },
  bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" },
  limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 },
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (subblock) {
      let collectiblesAnalyticsContext;
      let first;
      let items1;
      let obj10;
      let tmp9;
      let obj = subblock(collectiblesAnalyticsContext[8]);
      const cResult = obj.c(52);
      subblock = subblock.subblock;
      const tmp4 = closure_10();
      let obj2 = subblock(collectiblesAnalyticsContext[9]);
      navigation = obj2.useNavigation();
      let obj3 = subblock(collectiblesAnalyticsContext[10]);
      collectiblesAnalyticsContext = obj3.useCollectiblesAnalyticsContext();
      const assetUrl = subblock.assetUrl;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [CollectiblesCategoryStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== subblock.categoryStoreListingId) {
        const fn = function _() {
          return CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId);
        };
        cResult[1] = subblock.categoryStoreListingId;
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = subblock(collectiblesAnalyticsContext[11]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      const tmpResult3 = subblock(collectiblesAnalyticsContext[12]);
      const handleCardVisibilityChange = tmpResult3.useTrackProductCardImpression(
        subblock.categoryStoreListingId,
        "mobile_home",
        "featured_block",
      ).handleCardVisibilityChange;
      if (cResult[3] === collectiblesAnalyticsContext) {
        if (cResult[4] === stateFromStores) {
          if (cResult[5] === navigation) {
            let tmp11;
            let tmp28;
            let tmp30;
            let tmp32;
            let tmp19;
            let num5;
            let tmp23;
            let num4;
            let tmp22;
            let tmp21;
            let str;
            let tmp20;
            let tmp18;
            let tmp17;
            let tmp16;
            let tmp15;
            let tmp14;
            if (cResult[6] === subblock.categoryStoreListingId) {
              tmp11 = cResult[7];
            }
            let unpublishedAt = subblock.unpublishedAt;
            if (unpublishedAt == null) {
              let unpublishedAt1;
              if (stateFromStores != null) {
                unpublishedAt1 = stateFromStores.unpublishedAt;
              }
              unpublishedAt = unpublishedAt1;
            }
            if (cResult[8] === assetUrl) {
              if (cResult[9] === handleCardVisibilityChange) {
                if (cResult[10] === tmp11) {
                  if (cResult[11] === tmp4.bannerImage) {
                    if (cResult[12] === tmp4.container) {
                      if (cResult[13] === tmp4.limitedTimeBadge) {
                        if (cResult[14] === subblock.name) {
                          if (cResult[15] === unpublishedAt) {
                            tmp14 = cResult[16];
                            tmp15 = cResult[17];
                            tmp16 = cResult[18];
                            tmp17 = cResult[19];
                            tmp18 = cResult[20];
                            tmp19 = cResult[21];
                            tmp20 = cResult[22];
                            str = cResult[23];
                            tmp21 = cResult[24];
                            tmp22 = cResult[25];
                            num4 = cResult[26];
                            tmp23 = cResult[27];
                            num5 = cResult[28];
                          }
                          if (cResult[36] === tmp14) {
                            if (cResult[37] === tmp16) {
                              if (cResult[38] === tmp17) {
                                if (cResult[39] === tmp18) {
                                  if (cResult[40] === tmp19) {
                                    if (cResult[41] === str) {
                                      if (cResult[42] === tmp21) {
                                        if (cResult[43] === tmp22) {
                                          if (cResult[44] === num4) {
                                            if (cResult[45] === tmp23) {
                                              let tmp39;
                                              if (cResult[46] === num5) {
                                                tmp39 = cResult[47];
                                              }
                                              if (cResult[48] === tmp15) {
                                                if (cResult[49] === tmp20) {
                                                  let tmp42;
                                                  if (cResult[50] === tmp39) {
                                                    tmp42 = cResult[51];
                                                  }
                                                  return tmp42;
                                                }
                                              }
                                              const obj4 = { onChange: tmp20, children: tmp39 };
                                              const tmp44 = closure_8(tmp15, obj4);
                                              cResult[48] = tmp15;
                                              cResult[49] = tmp20;
                                              cResult[50] = tmp39;
                                              cResult[51] = tmp44;
                                              tmp42 = tmp44;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const obj5 = {
                            accessibilityRole: str,
                            accessibilityLabel: tmp21,
                            accessibilityHint: tmp22,
                            activeOpacity: num4,
                            androidRippleConfig: tmp23,
                            hitSlop: num5,
                            onPress: tmp16,
                            style: tmp17,
                            children: items1,
                          };
                          items1 = [tmp18, tmp19];
                          const tmp41 = closure_9(tmp14, obj5);
                          cResult[36] = tmp14;
                          cResult[37] = tmp16;
                          cResult[38] = tmp17;
                          cResult[39] = tmp18;
                          cResult[40] = tmp19;
                          cResult[41] = str;
                          cResult[42] = tmp21;
                          class O {
                            constructor() {
                              let _String;
                              let items;
                              let pageCategory;
                              let pageSection;
                              let tilePosition;
                              let sessionId;
                              const track = AnalyticsUtilsDefault.track;
                              const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroRequire.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                              AnalyticsUtilsDefault;
                              if (collectiblesAnalyticsContext != null) {
                                sessionId = collectiblesAnalyticsContext.sessionId;
                              }
                              const obj = {
                                collectibles_shop_session_id: sessionId,
                                sku_id: subblock.categoryStoreListingId,
                                page_type: "mobile_home",
                                page_section: pageSection,
                                page_category: pageCategory,
                                tile_type: "FEATURED_BLOCK",
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
                              if (null != stateFromStores) {
                                if (stateFromStores.isOrbsExclusive) {
                                  const obj2 = {
                                    analyticsLocations: items,
                                    analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
                                    screen: constants.ORBS,
                                  };
                                  const openCollectiblesShopMobile =
                                    CollectiblesActionCreators.openCollectiblesShopMobile;
                                  items = [];
                                  CollectiblesActionCreators;
                                  items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
                                  const result = openCollectiblesShopMobile(obj2);
                                } else {
                                  const obj3 = {
                                    category: stateFromStores,
                                    analyticsContext: collectiblesAnalyticsContext,
                                  };
                                  navigation.navigate(
                                    metroImportDefault.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
                                    obj3,
                                  );
                                }
                              }
                            }
                          }
                          cResult[44] = num4;
                          cResult[45] = tmp23;
                          cResult[46] = num5;
                          cResult[47] = tmp41;
                          tmp39 = tmp41;
                        }
                      }
                    }
                  }
                }
              }
            }
            let date = null;
            if (null != unpublishedAt) {
              const _Date = Date;
              const self = this;
              const self2 = this;
              date = new Date(unpublishedAt);
            }
            const tmp27 = navigation(collectiblesAnalyticsContext[16]);
            const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
            const tmp26 = navigation;
            if (cResult[29] !== subblock.name) {
              const intl = tmp(tmp2[18]).intl;
              const obj6 = { category: subblock.name };
              const formatToPlainStringResult = intl.formatToPlainString(
                subblock(collectiblesAnalyticsContext[18]).t.FNtLb3,
                obj6,
              );
              cResult[29] = subblock.name;
              cResult[30] = formatToPlainStringResult;
              tmp28 = formatToPlainStringResult;
            } else {
              tmp28 = cResult[30];
            }
            const _Symbol = Symbol;
            if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[18]).intl;
              const stringResult = intl2.string(subblock(collectiblesAnalyticsContext[18]).t.F8ma9x);
              cResult[31] = stringResult;
              tmp30 = stringResult;
            } else {
              tmp30 = cResult[31];
            }
            const _Symbol2 = Symbol;
            if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { radius: tmp26(collectiblesAnalyticsContext[19]).radii.lg };
              cResult[32] = obj7;
              tmp32 = obj7;
            } else {
              tmp32 = cResult[32];
            }
            const container = tmp4.container;
            if (cResult[33] === assetUrl) {
              let tmp33;
              if (cResult[34] === tmp4.bannerImage) {
                tmp33 = cResult[35];
              }
              const tmpResult4 = subblock(collectiblesAnalyticsContext[20]);
              let result = tmpResult4.shouldShowLimitedTimeBadge(date);
              if (result) {
                const obj8 = { style: tmp4.limitedTimeBadge };
                result = closure_8(tmp(tmp2[21]).LimitedTimeBadge, obj8);
              }
              cResult[8] = assetUrl;
              cResult[9] = handleCardVisibilityChange;
              cResult[10] = tmp11;
              cResult[11] = tmp4.bannerImage;
              cResult[12] = tmp4.container;
              cResult[13] = tmp4.limitedTimeBadge;
              cResult[14] = subblock.name;
              cResult[15] = unpublishedAt;
              cResult[16] = PressableOpacity;
              cResult[17] = tmp27;
              cResult[18] = tmp11;
              cResult[19] = container;
              cResult[20] = tmp33;
              cResult[21] = result;
              class O {
                constructor() {
                  let _String;
                  let items;
                  let pageCategory;
                  let pageSection;
                  let tilePosition;
                  let sessionId;
                  const track = AnalyticsUtilsDefault.track;
                  const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroRequire.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                  AnalyticsUtilsDefault;
                  if (collectiblesAnalyticsContext != null) {
                    sessionId = collectiblesAnalyticsContext.sessionId;
                  }
                  const obj = {
                    collectibles_shop_session_id: sessionId,
                    sku_id: subblock.categoryStoreListingId,
                    page_type: "mobile_home",
                    page_section: pageSection,
                    page_category: pageCategory,
                    tile_type: "FEATURED_BLOCK",
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
                  if (null != stateFromStores) {
                    if (stateFromStores.isOrbsExclusive) {
                      const obj2 = {
                        analyticsLocations: items,
                        analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
                        screen: constants.ORBS,
                      };
                      const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
                      items = [];
                      CollectiblesActionCreators;
                      items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
                      const result = openCollectiblesShopMobile(obj2);
                    } else {
                      const obj3 = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
                      navigation.navigate(metroImportDefault.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj3);
                    }
                  }
                }
              }
              cResult[22] = handleCardVisibilityChange;
              cResult[23] = "button";
              cResult[24] = tmp28;
              cResult[25] = tmp30;
              cResult[26] = 0.8;
              cResult[27] = tmp32;
              cResult[28] = 8;
              tmp19 = result;
              num5 = 8;
              tmp23 = tmp32;
              num4 = 0.8;
              tmp22 = tmp30;
              tmp21 = tmp28;
              str = "button";
              tmp20 = handleCardVisibilityChange;
              tmp18 = tmp33;
              tmp17 = container;
              tmp16 = tmp11;
              tmp15 = tmp27;
              tmp14 = PressableOpacity;
            }
            let tmp34 = null != assetUrl;
            if (tmp34) {
              const obj9 = { source: obj10, style: tmp4.bannerImage };
              obj10 = { uri: assetUrl };
              tmp34 = closure_8(stateFromStores, obj9);
            }
            cResult[33] = assetUrl;
            cResult[34] = tmp4.bannerImage;
            cResult[35] = tmp34;
            tmp33 = tmp34;
          }
        }
      }
      class O {
        constructor() {
          let _String;
          let items;
          let pageCategory;
          let pageSection;
          let tilePosition;
          let sessionId;
          const track = AnalyticsUtilsDefault.track;
          const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroRequire.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
          AnalyticsUtilsDefault;
          if (collectiblesAnalyticsContext != null) {
            sessionId = collectiblesAnalyticsContext.sessionId;
          }
          const obj = {
            collectibles_shop_session_id: sessionId,
            sku_id: subblock.categoryStoreListingId,
            page_type: "mobile_home",
            page_section: pageSection,
            page_category: pageCategory,
            tile_type: "FEATURED_BLOCK",
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
          if (null != stateFromStores) {
            if (stateFromStores.isOrbsExclusive) {
              const obj2 = {
                analyticsLocations: items,
                analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
                screen: constants.ORBS,
              };
              const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
              items = [];
              CollectiblesActionCreators;
              items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
              const result = openCollectiblesShopMobile(obj2);
            } else {
              const obj3 = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
              navigation.navigate(metroImportDefault.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj3);
            }
          }
        }
      }
      cResult[3] = collectiblesAnalyticsContext;
      cResult[4] = stateFromStores;
      cResult[5] = navigation;
      cResult[6] = subblock.categoryStoreListingId;
      cResult[7] = O;
      tmp11 = O;
    }
  : function (subblock) {
      let PressableOpacity;
      let analyticsContext;
      let intl;
      let intl2;
      let items1;
      let obj10;
      let obj6;
      let obj7;
      subblock = subblock.subblock;
      dependencyMap = undefined;
      const tmp = closure_10();
      let obj = subblock(1490);
      importDefault = obj.useNavigation();
      let obj2 = subblock(8454);
      dependencyMap = obj2.useCollectiblesAnalyticsContext();
      const assetUrl = subblock.assetUrl;
      let obj3 = subblock(504);
      let items = [CollectiblesCategoryStore];
      const stateFromStores = obj3.useStateFromStores(items, () =>
        CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId),
      );
      let unpublishedAt = subblock.unpublishedAt;
      const obj4 = subblock(15753);
      const handleCardVisibilityChange = obj4.useTrackProductCardImpression(
        subblock.categoryStoreListingId,
        "mobile_home",
        "featured_block",
      ).handleCardVisibilityChange;
      if (unpublishedAt == null) {
        let unpublishedAt1;
        if (stateFromStores != null) {
          unpublishedAt1 = stateFromStores.unpublishedAt;
        }
        unpublishedAt = unpublishedAt1;
      }
      let date = null;
      if (null != unpublishedAt) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(unpublishedAt);
      }
      const obj5 = { onChange: handleCardVisibilityChange, children: closure_9(PressableOpacity, obj6) };
      obj6 = {
        accessibilityRole: "button",
        accessibilityLabel: intl.formatToPlainString(subblock(1126).t.FNtLb3, obj7),
        accessibilityHint: intl2.string(subblock(1126).t.F8ma9x),
        activeOpacity: 0.8,
        androidRippleConfig: { radius: nativeDefault.radii.lg },
        hitSlop: 8,
        onPress() {
          let _String;
          let items;
          let pageCategory;
          let pageSection;
          let tilePosition;
          let sessionId;
          const track = AnalyticsUtilsDefault.track;
          const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroRequire.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
          AnalyticsUtilsDefault;
          if (analyticsContext != null) {
            sessionId = analyticsContext.sessionId;
          }
          const obj = {
            collectibles_shop_session_id: sessionId,
            sku_id: subblock.categoryStoreListingId,
            page_type: "mobile_home",
            page_section: pageSection,
            page_category: pageCategory,
            tile_type: "FEATURED_BLOCK",
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
          if (null != stateFromStores) {
            if (stateFromStores.isOrbsExclusive) {
              const obj2 = {
                analyticsLocations: items,
                analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
                screen: constants.ORBS,
              };
              const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
              items = [];
              CollectiblesActionCreators;
              items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
              const result = openCollectiblesShopMobile(obj2);
            } else {
              const obj3 = { category: stateFromStores, analyticsContext };
              navigation.navigate(metroImportDefault.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj3);
            }
          }
        },
        style: tmp.container,
        children: items1,
      };
      const tmp10 = VisibilitySensorDefault;
      PressableOpacity = tmp2(5916).PressableOpacity;
      intl = tmp2(1126).intl;
      obj7 = { category: subblock.name };
      intl2 = tmp2(1126).intl;
      let tmp9Result = null != assetUrl;
      ({ radius: nativeDefault.radii.lg });
      if (tmp9Result) {
        const obj9 = { source: obj10, style: tmp.bannerImage };
        obj10 = { uri: assetUrl };
        tmp9Result = closure_8(stateFromStores, obj9);
      }
      items1 = [tmp9Result];
      const tmp2Result = subblock(7078);
      let result = tmp2Result.shouldShowLimitedTimeBadge(date);
      if (result) {
        const obj11 = { style: tmp.limitedTimeBadge };
        result = closure_8(tmp2(8519).LimitedTimeBadge, obj11);
      }
      items1[1] = result;
      return closure_8(tmp10, obj5);
    };
let result = size.fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default tmp5;
