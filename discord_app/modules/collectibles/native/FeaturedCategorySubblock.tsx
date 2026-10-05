// === Module 15737: FeaturedCategorySubblock ===

// Module 15737 (FeaturedCategorySubblock)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import VisibilitySensorDefault from "VisibilitySensor" /* 15735 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;

require = fn;
const Image = fn(17).Image;
const constants = fn(1087).CollectiblesMobileShopScreen;
const Constants = fn(1085);
({ AnalyticEvents: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles({ container: { position: "relative" }, bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" }, limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((subblock) => {
  const cResult = subblock(collectiblesAnalyticsContext[8]).c(52);
  subblock = subblock.subblock;
  const tmp4 = closure_10();
  let obj = subblock(collectiblesAnalyticsContext[8]);
  const navigation = subblock(collectiblesAnalyticsContext[9]).useNavigation();
  let obj2 = subblock(collectiblesAnalyticsContext[9]);
  collectiblesAnalyticsContext = subblock(collectiblesAnalyticsContext[10]).useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesCategoryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== subblock.categoryStoreListingId) {
    const fn = function _() {
      return CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId);
    };
    cResult[1] = subblock.categoryStoreListingId;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  let obj3 = subblock(collectiblesAnalyticsContext[10]);
  const stateFromStores = subblock(collectiblesAnalyticsContext[11]).useStateFromStores(first, tmp9);
  const tmpResult = subblock(collectiblesAnalyticsContext[11]);
  const handleCardVisibilityChange = subblock(collectiblesAnalyticsContext[12]).useTrackProductCardImpression(subblock.categoryStoreListingId, "mobile_home", "featured_block").handleCardVisibilityChange;
  if (cResult[3] === collectiblesAnalyticsContext) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === navigation) {
        if (cResult[6] === subblock.categoryStoreListingId) {
          let tmp11 = cResult[7];
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
                        let tmp14 = cResult[16];
                        let tmp15 = cResult[17];
                        let tmp16 = cResult[18];
                        let tmp17 = cResult[19];
                        let tmp18 = cResult[20];
                        let tmp19 = cResult[21];
                        let tmp20 = cResult[22];
                        let str = cResult[23];
                        let tmp21 = cResult[24];
                        let tmp22 = cResult[25];
                        let num4 = cResult[26];
                        let tmp23 = cResult[27];
                        let num5 = cResult[28];
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
                                          if (cResult[46] === num5) {
                                            let tmp41 = cResult[47];
                                          }
                                          if (cResult[48] === tmp15) {
                                            if (cResult[49] === tmp20) {
                                              if (cResult[50] === tmp41) {
                                                let tmp44 = cResult[51];
                                              }
                                              return tmp44;
                                            }
                                          }
                                          let obj4 = { onChange: tmp20, children: tmp41 };
                                          const tmp46 = closure_8(tmp15, obj4);
                                          cResult[48] = tmp15;
                                          cResult[49] = tmp20;
                                          cResult[50] = tmp41;
                                          cResult[51] = tmp46;
                                          tmp44 = tmp46;
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
                      let obj5 = { accessibilityRole: str, accessibilityLabel: tmp21, accessibilityHint: tmp22, activeOpacity: num4, androidRippleConfig: tmp23, hitSlop: num5, onPress: tmp16, style: tmp17, children: null };
                      const items1 = [tmp18, tmp19];
                      obj5.children = items1;
                      const tmp43 = closure_9(tmp14, obj5);
                      cResult[36] = tmp14;
                      cResult[37] = tmp16;
                      cResult[38] = tmp17;
                      cResult[39] = tmp18;
                      cResult[40] = tmp19;
                      cResult[41] = str;
                      cResult[42] = tmp21;
                      class O {
                        constructor() {
                          tmp = closure_1;
                          tmp2 = closure_2;
                          obj = closure_1(closure_2[13]);
                          tmp3 = closure_2;
                          sessionId = undefined;
                          if (closure_2 != null) {
                            sessionId = tmp3.sessionId;
                          }
                          obj1 = { collectibles_shop_session_id: sessionId, sku_id: subblock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "FEATURED_BLOCK", tile_position: null, cta_name: null };
                          pageSection = undefined;
                          if (tmp3 != null) {
                            pageSection = tmp3.pageSection;
                          }
                          obj1.page_section = pageSection;
                          pageCategory = undefined;
                          if (tmp3 != null) {
                            pageCategory = tmp3.pageCategory;
                          }
                          obj1.page_category = pageCategory;
                          tilePosition = undefined;
                          if (tmp3 != null) {
                            tilePosition = tmp3.tilePosition;
                          }
                          obj1.tile_position = String(tilePosition);
                          trackResult = obj.track(AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj1);
                          tmp9 = closure_3;
                          if (null != closure_3) {
                            if (tmp9.isOrbsExclusive) {
                              tmp13 = closure_0;
                              obj4 = closure_0(tmp2[14]);
                              obj6 = { analyticsLocations: null, analyticsSource: null, screen: null };
                              items = [];
                              items[0] = tmp(tmp2[15]).COLLECTIBLES_SHOP;
                              obj6.analyticsLocations = items;
                              obj6.analyticsSource = tmp(tmp2[15]).COLLECTIBLES_SHOP;
                              tmp14 = closure_5;
                              obj6.screen = closure_5.ORBS;
                              result = obj4.openCollectiblesShopMobile(obj6);
                            } else {
                              tmp10 = closure_1;
                              tmp11 = UserSettingsSections;
                              obj7 = { category: null, analyticsContext: null };
                              obj7.category = tmp9;
                              obj7.analyticsContext = tmp3;
                              navigateResult = closure_1.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj7);
                            }
                          }
                          return;
                        }
                      }
                      cResult[44] = num4;
                      cResult[45] = tmp23;
                      cResult[46] = num5;
                      cResult[47] = tmp43;
                      tmp41 = tmp43;
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
          date = new Date(unpublishedAt);
        }
        const tmp29 = navigation(tmp2[16]);
        const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
        if (cResult[29] !== subblock.name) {
          const intl = tmp(tmp2[18]).intl;
          const obj6 = { category: subblock.name };
          const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[18]).t.FNtLb3, obj6);
          cResult[29] = subblock.name;
          cResult[30] = formatToPlainStringResult;
          let tmp30 = formatToPlainStringResult;
        } else {
          tmp30 = cResult[30];
        }
        const _Symbol = Symbol;
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[18]).intl;
          const stringResult = intl2.string(tmp(tmp2[18]).t.F8ma9x);
          cResult[31] = stringResult;
          let tmp32 = stringResult;
        } else {
          tmp32 = cResult[31];
        }
        const _Symbol2 = Symbol;
        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { radius: tmp28(tmp2[19]).radii.lg };
          cResult[32] = obj7;
          let tmp34 = obj7;
        } else {
          tmp34 = cResult[32];
        }
        const container = tmp4.container;
        if (cResult[33] === assetUrl) {
          if (cResult[34] === tmp4.bannerImage) {
            let tmp35 = cResult[35];
          }
          let result = tmp(tmp2[20]).shouldShowLimitedTimeBadge(date);
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
          cResult[17] = tmp29;
          cResult[18] = tmp11;
          cResult[19] = container;
          cResult[20] = tmp35;
          cResult[21] = result;
          class O {
            constructor() {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[13]);
              tmp3 = closure_2;
              sessionId = undefined;
              if (closure_2 != null) {
                sessionId = tmp3.sessionId;
              }
              obj1 = { collectibles_shop_session_id: sessionId, sku_id: subblock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "FEATURED_BLOCK", tile_position: null, cta_name: null };
              pageSection = undefined;
              if (tmp3 != null) {
                pageSection = tmp3.pageSection;
              }
              obj1.page_section = pageSection;
              pageCategory = undefined;
              if (tmp3 != null) {
                pageCategory = tmp3.pageCategory;
              }
              obj1.page_category = pageCategory;
              tilePosition = undefined;
              if (tmp3 != null) {
                tilePosition = tmp3.tilePosition;
              }
              obj1.tile_position = String(tilePosition);
              trackResult = obj.track(AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj1);
              tmp9 = closure_3;
              if (null != closure_3) {
                if (tmp9.isOrbsExclusive) {
                  tmp13 = closure_0;
                  obj4 = closure_0(tmp2[14]);
                  obj6 = { analyticsLocations: null, analyticsSource: null, screen: null };
                  items = [];
                  items[0] = tmp(tmp2[15]).COLLECTIBLES_SHOP;
                  obj6.analyticsLocations = items;
                  obj6.analyticsSource = tmp(tmp2[15]).COLLECTIBLES_SHOP;
                  tmp14 = closure_5;
                  obj6.screen = closure_5.ORBS;
                  result = obj4.openCollectiblesShopMobile(obj6);
                } else {
                  tmp10 = closure_1;
                  tmp11 = UserSettingsSections;
                  obj7 = { category: null, analyticsContext: null };
                  obj7.category = tmp9;
                  obj7.analyticsContext = tmp3;
                  navigateResult = closure_1.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj7);
                }
              }
              return;
            }
          }
          cResult[22] = handleCardVisibilityChange;
          cResult[23] = "button";
          cResult[24] = tmp30;
          cResult[25] = tmp32;
          cResult[26] = 0.8;
          cResult[27] = tmp34;
          cResult[28] = 8;
          tmp19 = result;
          num5 = 8;
          tmp23 = tmp34;
          num4 = 0.8;
          tmp22 = tmp32;
          tmp21 = tmp30;
          str = "button";
          tmp20 = handleCardVisibilityChange;
          tmp18 = tmp35;
          tmp17 = container;
          tmp16 = tmp11;
          tmp15 = tmp29;
          tmp14 = PressableOpacity;
          const tmpResult4 = tmp(tmp2[20]);
        }
        let tmp36 = null != assetUrl;
        if (tmp36) {
          const obj9 = { source: null, style: null };
          const obj10 = { uri: assetUrl };
          obj9.source = obj10;
          obj9.style = tmp4.bannerImage;
          tmp36 = closure_8(stateFromStores, obj9);
        }
        cResult[33] = assetUrl;
        cResult[34] = tmp4.bannerImage;
        cResult[35] = tmp36;
        tmp35 = tmp36;
        tmp28 = navigation;
      }
    }
  }
  class O {
    constructor() {
      tmp = closure_1;
      tmp2 = closure_2;
      obj = closure_1(closure_2[13]);
      tmp3 = closure_2;
      sessionId = undefined;
      if (closure_2 != null) {
        sessionId = tmp3.sessionId;
      }
      obj1 = { collectibles_shop_session_id: sessionId, sku_id: subblock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "FEATURED_BLOCK", tile_position: null, cta_name: null };
      pageSection = undefined;
      if (tmp3 != null) {
        pageSection = tmp3.pageSection;
      }
      obj1.page_section = pageSection;
      pageCategory = undefined;
      if (tmp3 != null) {
        pageCategory = tmp3.pageCategory;
      }
      obj1.page_category = pageCategory;
      tilePosition = undefined;
      if (tmp3 != null) {
        tilePosition = tmp3.tilePosition;
      }
      obj1.tile_position = String(tilePosition);
      trackResult = obj.track(AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj1);
      tmp9 = closure_3;
      if (null != closure_3) {
        if (tmp9.isOrbsExclusive) {
          tmp13 = closure_0;
          obj4 = closure_0(tmp2[14]);
          obj6 = { analyticsLocations: null, analyticsSource: null, screen: null };
          items = [];
          items[0] = tmp(tmp2[15]).COLLECTIBLES_SHOP;
          obj6.analyticsLocations = items;
          obj6.analyticsSource = tmp(tmp2[15]).COLLECTIBLES_SHOP;
          tmp14 = closure_5;
          obj6.screen = closure_5.ORBS;
          result = obj4.openCollectiblesShopMobile(obj6);
        } else {
          tmp10 = closure_1;
          tmp11 = UserSettingsSections;
          obj7 = { category: null, analyticsContext: null };
          obj7.category = tmp9;
          obj7.analyticsContext = tmp3;
          navigateResult = closure_1.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj7);
        }
      }
      return;
    }
  }
  cResult[3] = collectiblesAnalyticsContext;
  cResult[4] = stateFromStores;
  cResult[5] = navigation;
  cResult[6] = subblock.categoryStoreListingId;
  cResult[7] = O;
  tmp11 = O;
  const tmpResult3 = subblock(collectiblesAnalyticsContext[12]);
}) : ((subblock) => {
  subblock = subblock.subblock;
  const tmp = closure_10();
  importDefault = subblock(1490).useNavigation();
  let obj = subblock(1490);
  dependencyMap = subblock(8421).useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj2 = subblock(8421);
  let items = [CollectiblesCategoryStore];
  const stateFromStores = subblock(504).useStateFromStores(items, () => CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId));
  let obj3 = subblock(504);
  let unpublishedAt = subblock.unpublishedAt;
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
    date = new Date(unpublishedAt);
  }
  let obj5 = { onChange: subblock(15717).useTrackProductCardImpression(subblock.categoryStoreListingId, "mobile_home", "featured_block").handleCardVisibilityChange, children: null };
  let obj4 = subblock(15717);
  const obj6 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8, onPress: null, style: null, children: null };
  const intl = tmp2(1126).intl;
  obj6.accessibilityLabel = intl.formatToPlainString(subblock(1126).t.FNtLb3, { category: subblock.name });
  const intl2 = tmp2(1126).intl;
  obj6.accessibilityHint = intl2.string(subblock(1126).t.F8ma9x);
  const obj7 = { category: subblock.name };
  const tmp12 = VisibilitySensorDefault;
  obj6.androidRippleConfig = { radius: nativeDefault.radii.lg };
  obj6.onPress = function onPress() {
    let sessionId;
    if (analyticsContext != null) {
      sessionId = analyticsContext.sessionId;
    }
    const obj2 = { collectibles_shop_session_id: sessionId, sku_id: subblock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "FEATURED_BLOCK", tile_position: null, cta_name: null };
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
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null };
        const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
        obj3.analyticsLocations = items;
        obj3.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        obj3.screen = constants.ORBS;
        const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
      } else {
        const obj5 = { category: stateFromStores, analyticsContext };
        navigation.navigate(constants3.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj5);
      }
    }
  };
  obj6.style = tmp.container;
  let tmp11Result = null != assetUrl;
  if (tmp11Result) {
    const obj9 = { source: null, style: null };
    const obj10 = { uri: assetUrl };
    obj9.source = obj10;
    obj9.style = tmp.bannerImage;
    tmp11Result = closure_8(stateFromStores, obj9);
  }
  const items1 = [tmp11Result, ];
  const obj8 = { radius: nativeDefault.radii.lg };
  let result = subblock(7065).shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj11 = { style: tmp.limitedTimeBadge };
    result = closure_8(tmp2(8486).LimitedTimeBadge, obj11);
  }
  items1[1] = result;
  obj6.children = items1;
  obj5.children = closure_9(subblock(5909).PressableOpacity, obj6);
  return closure_8(tmp12, obj5);
});