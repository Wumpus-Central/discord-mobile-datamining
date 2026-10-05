// === Module 15754: CollectiblesShopViewAllCategoryItems ===

// Module 15754 (CollectiblesShopViewAllCategoryItems)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import spring from "spring" /* 5597 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7099 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let category, set;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
let closure_6 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { rootContainer: obj2, border: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
const __initData = { code: "function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const __initData2 = { code: "function CollectiblesShopViewAllCategoryItemsTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((category) => {
  let analyticsLocations;
  let first;
  let items2;
  let items3;
  let logoUrl;
  let mobileBgUrl;
  let obj4;
  let obj9;
  let tmp10;
  let tmp7;
  const tmp2 = analyticsLocations;
  let obj = category(analyticsLocations[8]);
  const cResult = obj.c(48);
  category = category.category;
  const analyticsContext = category.analyticsContext;
  const tmp4 = closure_10();
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[9])(category.styles).backgroundColors;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsContext(tmp2[10]).COLLECTIBLES_SHOP_INDEX_PAGE];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  analyticsLocations = tmp5(tmp2[11])(first).analyticsLocations;
  const bottom = tmp5(tmp2[12])().bottom;
  if (cResult[1] !== category.products) {
    let obj2 = { products: category.products };
    cResult[1] = category.products;
    cResult[2] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = category(tmp2[13]);
  const filteredAndSortedProducts = tmpResult.useFilteredAndSortedProducts(tmp7);
  const tmpResult3 = category(tmp2[14]);
  const sharedValue = tmpResult3.useSharedValue(0);
  if (cResult[3] !== sharedValue) {
    const fn = function k(nativeEvent) {
      let num = 0;
      set = sharedValue.set;
      const withSpring = spring.withSpring;
      spring;
      if (nativeEvent.nativeEvent.contentOffset.y > 5) {
        num = 1;
      }
      const result = set(withSpring(num));
    };
    cResult[3] = sharedValue;
    cResult[4] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult4 = category(tmp2[14]);
  class T {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  T.__closure = { borderOpacity: sharedValue };
  T.__workletHash = 2446209469388;
  T.__initData = __initData;
  const animatedStyle = tmpResult4.useAnimatedStyle(T);
  let sessionId;
  const tmp12 = cResult[5];
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  if (tmp12 === sessionId) {
    if (cResult[6] === analyticsLocations) {
      let tmp14;
      if (cResult[7] === category.name) {
        tmp14 = cResult[8];
      }
      let sessionId1;
      if (analyticsContext != null) {
        sessionId1 = analyticsContext.sessionId;
      }
      if (cResult[9] === analyticsLocations) {
        if (cResult[10] === category.name) {
          let tmp17;
          if (cResult[11] === sessionId1) {
            tmp17 = cResult[12];
          }
          const effect = sharedValue.useEffect(tmp14, tmp17);
          if (cResult[13] === analyticsContext) {
            let tmp20;
            let tmp24;
            let tmp25;
            let tmp31;
            if (cResult[14] === category.name) {
              tmp20 = cResult[15];
            }
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const items1 = [];
              cResult[16] = items1;
              tmp24 = items1;
            } else {
              tmp24 = cResult[16];
            }
            const rootContainer = tmp4.rootContainer;
            if (cResult[17] !== mobileBgUrl) {
              const obj3 = { source: obj4, style: closure_5.absoluteFill };
              obj4 = { uri: mobileBgUrl };
              const tmp28 = closure_8(category(tmp2[18]).CollectiblesProgressiveImage, obj3);
              cResult[17] = mobileBgUrl;
              cResult[18] = tmp28;
              tmp25 = tmp28;
            } else {
              tmp25 = cResult[18];
            }
            let label1;
            const tmp29 = cResult[19];
            if (backgroundColors != null) {
              label1 = backgroundColors.label;
            }
            if (tmp29 !== label1) {
              let toHexStringResult;
              if (backgroundColors != null) {
                const label = backgroundColors.label;
                toHexStringResult = label.toHexString();
              }
              let label2;
              if (backgroundColors != null) {
                label2 = backgroundColors.label;
              }
              cResult[19] = label2;
              cResult[20] = toHexStringResult;
              tmp31 = toHexStringResult;
            } else {
              tmp31 = cResult[20];
            }
            if (cResult[21] === category.name) {
              if (cResult[22] === logoUrl) {
                let tmp34;
                if (cResult[23] === tmp31) {
                  tmp34 = cResult[24];
                }
                if (cResult[25] === animatedStyle) {
                  let tmp37;
                  let tmp41;
                  if (cResult[26] === tmp4.border) {
                    tmp37 = cResult[27];
                  }
                  const sum = bottom + tmp5(tmp2[6]).space.PX_16;
                  if (cResult[28] !== category.name) {
                    const intl = tmp(tmp2[20]).intl;
                    const obj5 = { category: category.name };
                    const formatToPlainStringResult = intl.formatToPlainString(category(tmp2[20]).t.FNtLb3, obj5);
                    cResult[28] = category.name;
                    cResult[29] = formatToPlainStringResult;
                    tmp41 = formatToPlainStringResult;
                  } else {
                    tmp41 = cResult[29];
                  }
                  if (cResult[30] === category) {
                    if (cResult[31] === tmp10) {
                      if (cResult[32] === filteredAndSortedProducts) {
                        if (cResult[33] === sum) {
                          let tmp43;
                          if (cResult[34] === tmp41) {
                            tmp43 = cResult[35];
                          }
                          if (cResult[36] === tmp4.rootContainer) {
                            if (cResult[37] === tmp25) {
                              if (cResult[38] === tmp34) {
                                if (cResult[39] === tmp37) {
                                  let tmp47;
                                  if (cResult[40] === tmp43) {
                                    tmp47 = cResult[41];
                                  }
                                  if (cResult[42] === tmp47) {
                                    let tmp52;
                                    if (cResult[43] === tmp20) {
                                      tmp52 = cResult[44];
                                    }
                                    if (cResult[45] === analyticsLocations) {
                                      let tmp55;
                                      if (cResult[46] === tmp52) {
                                        tmp55 = cResult[47];
                                      }
                                      return tmp55;
                                    }
                                    const obj6 = { value: analyticsLocations, children: tmp52 };
                                    const tmp57 = closure_8(category(tmp2[11]).AnalyticsLocationProvider, obj6);
                                    cResult[45] = analyticsLocations;
                                    cResult[46] = tmp52;
                                    cResult[47] = tmp57;
                                    tmp55 = tmp57;
                                  }
                                  const obj7 = { newValue: tmp20, children: tmp47 };
                                  const tmp54 = closure_8(category(tmp2[23]).CollectiblesAnalyticsProvider, obj7);
                                  cResult[42] = tmp47;
                                  cResult[43] = tmp20;
                                  cResult[44] = tmp54;
                                  tmp52 = tmp54;
                                }
                              }
                            }
                          }
                          const obj8 = { skuIDs: tmp24, activeSubscription: null, children: closure_9(closure_4, obj9) };
                          obj9 = { style: rootContainer, children: items2 };
                          items2 = [tmp25, tmp34, tmp37, tmp43];
                          const NativePaymentContextProvider = tmp(tmp2[22]).NativePaymentContextProvider;
                          const tmp51 = closure_8(NativePaymentContextProvider, obj8);
                          cResult[36] = tmp4.rootContainer;
                          cResult[37] = tmp25;
                          cResult[38] = tmp34;
                          cResult[39] = tmp37;
                          cResult[40] = tmp43;
                          cResult[41] = tmp51;
                          tmp47 = tmp51;
                        }
                      }
                    }
                  }
                  const obj10 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: tmp10, paddingTop: analyticsContext(tmp2[6]).space.PX_16, paddingBottom: sum, muteBundleStaticBackground: true, accessibilityLabel: tmp41 };
                  const tmp5Result = analyticsContext(tmp2[21]);
                  const tmp46 = closure_8(tmp5Result, obj10);
                  cResult[30] = category;
                  cResult[31] = tmp10;
                  cResult[32] = filteredAndSortedProducts;
                  cResult[33] = sum;
                  cResult[34] = tmp41;
                  cResult[35] = tmp46;
                  tmp43 = tmp46;
                }
                const obj11 = { style: items3 };
                items3 = [tmp4.border, animatedStyle];
                const tmp39 = closure_8(analyticsContext(tmp2[14]).View, obj11);
                cResult[25] = animatedStyle;
                cResult[26] = tmp4.border;
                cResult[27] = tmp39;
                tmp37 = tmp39;
              }
            }
            const obj12 = { logoUrl, buttonColor: tmp31, categoryName: category.name };
            const tmp36 = closure_8(analyticsContext(tmp2[19]), obj12);
            cResult[21] = category.name;
            cResult[22] = logoUrl;
            cResult[23] = tmp31;
            cResult[24] = tmp36;
            tmp34 = tmp36;
          }
          const obj13 = { pageCategory: category.name };
          const merged = Object.assign(analyticsContext);
          cResult[13] = analyticsContext;
          cResult[14] = category.name;
          cResult[15] = obj13;
          tmp20 = obj13;
        }
      }
      const items4 = [sessionId1, analyticsLocations, category.name];
      cResult[9] = analyticsLocations;
      cResult[10] = category.name;
      cResult[11] = sessionId1;
      cResult[12] = items4;
      tmp17 = items4;
    }
  }
  let sessionId2;
  if (analyticsContext != null) {
    sessionId2 = analyticsContext.sessionId;
  }
  const fn2 = function w() {
    let sessionId;
    const obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: AnalyticsLocationDefault.COLLECTIBLES_SHOP, page_type: "index", category: category.name };
    sessionId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_SHOP_VIEWED = AnalyticEvents.COLLECTIBLES_SHOP_VIEWED;
    AnalyticsUtilsDefault;
    if (analyticsContext != null) {
      sessionId = analyticsContext.sessionId;
    }
    track(COLLECTIBLES_SHOP_VIEWED, obj);
    let sessionId1;
    const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
    CollectiblesPerfLogging;
    if (analyticsContext != null) {
      sessionId1 = analyticsContext.sessionId;
    }
    const obj2 = { sessionId: sessionId1, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: constants.SHOP_ALL, unpublishedCategoriesShown: false, cacheDisabled: false };
    trackShopPerf(obj2);
  };
  cResult[5] = sessionId2;
  cResult[6] = analyticsLocations;
  cResult[7] = category.name;
  cResult[8] = fn2;
  tmp14 = fn2;
}) : ((category) => {
  let CollectiblesAnalyticsProvider;
  let NativePaymentContextProvider;
  let intl;
  let items3;
  let items4;
  let logoUrl;
  let mobileBgUrl;
  let obj14;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let toHexStringResult;
  category = category.category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  const tmp = closure_10();
  const tmp2 = analyticsContext;
  const tmp3 = analyticsLocations;
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[9])(category.styles).backgroundColors;
  const items = [];
  const tmp4 = analyticsContext(analyticsLocations[11]);
  items[0] = analyticsContext(analyticsLocations[10]).COLLECTIBLES_SHOP_INDEX_PAGE;
  analyticsLocations = tmp4(items).analyticsLocations;
  const bottom = analyticsContext(analyticsLocations[12])().bottom;
  let obj = category(analyticsLocations[13]);
  let obj2 = { products: category.products };
  const filteredAndSortedProducts = obj.useFilteredAndSortedProducts(obj2);
  const obj3 = category(analyticsLocations[14]);
  const sharedValue = obj3.useSharedValue(0);
  const items1 = [sharedValue];
  const callback = sharedValue.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = set(withSpring(num));
  }, items1);
  const fn = function _() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 1455596227791;
  fn.__initData = __initData2;
  let sessionId;
  const obj4 = category(analyticsLocations[14]);
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const useEffect = sharedValue.useEffect;
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items2 = [sessionId, analyticsLocations, category.name];
  const effect = useEffect(() => {
    let sessionId;
    const obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: AnalyticsLocationDefault.COLLECTIBLES_SHOP, page_type: "index", category: category.name };
    sessionId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_SHOP_VIEWED = AnalyticEvents.COLLECTIBLES_SHOP_VIEWED;
    AnalyticsUtilsDefault;
    if (analyticsContext != null) {
      sessionId = analyticsContext.sessionId;
    }
    track(COLLECTIBLES_SHOP_VIEWED, obj);
    let sessionId1;
    const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
    CollectiblesPerfLogging;
    if (analyticsContext != null) {
      sessionId1 = analyticsContext.sessionId;
    }
    const obj2 = { sessionId: sessionId1, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: constants.SHOP_ALL, unpublishedCategoriesShown: false, cacheDisabled: false };
    trackShopPerf(obj2);
  }, items2);
  const obj5 = { value: analyticsLocations, children: closure_8(CollectiblesAnalyticsProvider, obj6) };
  const AnalyticsLocationProvider = tmp5(tmp3[11]).AnalyticsLocationProvider;
  obj6 = { newValue: obj7, children: closure_8(NativePaymentContextProvider, obj8) };
  obj7 = { pageCategory: category.name };
  CollectiblesAnalyticsProvider = tmp5(tmp3[23]).CollectiblesAnalyticsProvider;
  const merged = Object.assign(analyticsContext);
  obj8 = { skuIDs: [], activeSubscription: null, children: closure_9(closure_4, obj9) };
  obj9 = { style: tmp.rootContainer, children: items3 };
  NativePaymentContextProvider = tmp5(tmp3[22]).NativePaymentContextProvider;
  items3 = [, , , ];
  const obj10 = { source: { uri: mobileBgUrl }, style: closure_5.absoluteFill };
  items3[0] = closure_8(category(tmp3[18]).CollectiblesProgressiveImage, obj10);
  const obj11 = { logoUrl, buttonColor: toHexStringResult, categoryName: category.name };
  toHexStringResult = undefined;
  const tmp2Result = tmp2(tmp3[19]);
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  items3[1] = closure_8(tmp2Result, obj11);
  const obj12 = { style: items4 };
  items4 = [tmp.border, animatedStyle];
  items3[2] = closure_8(tmp2(tmp3[14]).View, obj12);
  const obj13 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: callback, paddingTop: tmp2(tmp3[6]).space.PX_16, paddingBottom: bottom + tmp2(tmp3[6]).space.PX_16, muteBundleStaticBackground: true, accessibilityLabel: intl.formatToPlainString(category(tmp3[20]).t.FNtLb3, obj14) };
  const tmp2Result2 = tmp2(tmp3[21]);
  intl = tmp5(tmp3[20]).intl;
  obj14 = { category: category.name };
  items3[3] = closure_8(tmp2Result2, obj13);
  return closure_8(AnalyticsLocationProvider, obj5);
}));
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default memoResult;