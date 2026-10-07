// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesPerfLogging from "../utils/CollectiblesPerfLogging.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(1087).CollectiblesMobileShopScreen;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj = { rootContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, border: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.border = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
const __initData2 = {
  code: "function CollectiblesShopViewAllCategoryItemsTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
const ReactCompilerGating = fn(558);
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (category) => {
        const cResult = category(analyticsLocations[8]).c(48);
        category = category.category;
        const analyticsContext = category.analyticsContext;
        const tmp4 = closure_10();
        ({ mobileBgUrl, logoUrl } = category);
        const backgroundColors = analyticsContext(analyticsLocations[9])(category.styles).backgroundColors;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [tmp5(tmp2[10]).COLLECTIBLES_SHOP_INDEX_PAGE];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        analyticsLocations = tmp5(tmp2[11])(first).analyticsLocations;
        if (cResult[1] !== category.products) {
          let obj2 = { products: category.products };
          cResult[1] = category.products;
          cResult[2] = obj2;
          let tmp7 = obj2;
        } else {
          tmp7 = cResult[2];
        }
        let obj = category(analyticsLocations[8]);
        const filteredAndSortedProducts = category(analyticsLocations[13]).useFilteredAndSortedProducts(tmp7);
        const tmpResult = category(analyticsLocations[13]);
        const sharedValue = category(analyticsLocations[14]).useSharedValue(0);
        if (cResult[3] !== sharedValue) {
          const fn = function k(nativeEvent) {
            let num = 0;
            if (nativeEvent.nativeEvent.contentOffset.y > 5) {
              num = 1;
            }
            const result = sharedValue.set(spring.withSpring(num));
          };
          cResult[3] = sharedValue;
          cResult[4] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[4];
        }
        const tmpResult3 = category(analyticsLocations[14]);
        class T {
          constructor() {
            obj = { opacity: closure_3.get() };
            return obj;
          }
        }
        T.__closure = { borderOpacity: sharedValue };
        T.__workletHash = 2446209469388;
        T.__initData = __initData;
        const animatedStyle = category(analyticsLocations[14]).useAnimatedStyle(T);
        let sessionId;
        if (analyticsContext != null) {
          sessionId = analyticsContext.sessionId;
        }
        if (cResult[5] === sessionId) {
          if (cResult[6] === analyticsLocations) {
            if (cResult[7] === category.name) {
              let tmp13 = cResult[8];
            }
            let sessionId1;
            if (analyticsContext != null) {
              sessionId1 = analyticsContext.sessionId;
            }
            if (cResult[9] === analyticsLocations) {
              if (cResult[10] === category.name) {
                if (cResult[11] === sessionId1) {
                  let tmp16 = cResult[12];
                }
                const effect = sharedValue.useEffect(tmp13, tmp16);
                if (cResult[13] === analyticsContext) {
                  if (cResult[14] === category.name) {
                    let tmp19 = cResult[15];
                  }
                  const _Symbol = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const items1 = [];
                    cResult[16] = items1;
                    let tmp23 = items1;
                  } else {
                    tmp23 = cResult[16];
                  }
                  if (cResult[17] !== mobileBgUrl) {
                    let obj3 = { source: null, style: null };
                    let obj4 = { uri: mobileBgUrl };
                    obj3.source = obj4;
                    obj3.style = closure_5.absoluteFill;
                    const tmp27 = closure_8(tmp(tmp2[18]).CollectiblesProgressiveImage, obj3);
                    cResult[17] = mobileBgUrl;
                    cResult[18] = tmp27;
                    let tmp24 = tmp27;
                  } else {
                    tmp24 = cResult[18];
                  }
                  let label1;
                  if (backgroundColors != null) {
                    label1 = backgroundColors.label;
                  }
                  if (cResult[19] !== label1) {
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
                    let tmp29 = toHexStringResult;
                  } else {
                    tmp29 = cResult[20];
                  }
                  if (cResult[21] === category.name) {
                    if (cResult[22] === logoUrl) {
                      if (cResult[23] === tmp29) {
                        let tmp32 = cResult[24];
                      }
                      if (cResult[25] === animatedStyle) {
                        if (cResult[26] === tmp4.border) {
                          let tmp35 = cResult[27];
                        }
                        const sum = tmp5(tmp2[12])().bottom + tmp5(tmp2[6]).space.PX_16;
                        if (cResult[28] !== category.name) {
                          const intl = tmp(tmp2[20]).intl;
                          const obj5 = { category: category.name };
                          const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[20]).t.FNtLb3, obj5);
                          cResult[28] = category.name;
                          cResult[29] = formatToPlainStringResult;
                          let tmp39 = formatToPlainStringResult;
                        } else {
                          tmp39 = cResult[29];
                        }
                        if (cResult[30] === category) {
                          if (cResult[31] === tmp10) {
                            if (cResult[32] === filteredAndSortedProducts) {
                              if (cResult[33] === sum) {
                                if (cResult[34] === tmp39) {
                                  let tmp41 = cResult[35];
                                }
                                if (cResult[36] === tmp4.rootContainer) {
                                  if (cResult[37] === tmp24) {
                                    if (cResult[38] === tmp32) {
                                      if (cResult[39] === tmp35) {
                                        if (cResult[40] === tmp41) {
                                          let tmp45 = cResult[41];
                                        }
                                        if (cResult[42] === tmp45) {
                                          if (cResult[43] === tmp19) {
                                            let tmp50 = cResult[44];
                                          }
                                          if (cResult[45] === analyticsLocations) {
                                            if (cResult[46] === tmp50) {
                                              let tmp53 = cResult[47];
                                            }
                                            return tmp53;
                                          }
                                          const obj6 = { value: analyticsLocations, children: tmp50 };
                                          const tmp55 = closure_8(tmp(tmp2[11]).AnalyticsLocationProvider, obj6);
                                          cResult[45] = analyticsLocations;
                                          cResult[46] = tmp50;
                                          cResult[47] = tmp55;
                                          tmp53 = tmp55;
                                        }
                                        const obj7 = { newValue: tmp19, children: tmp45 };
                                        const tmp52 = closure_8(tmp(tmp2[23]).CollectiblesAnalyticsProvider, obj7);
                                        cResult[42] = tmp45;
                                        cResult[43] = tmp19;
                                        cResult[44] = tmp52;
                                        tmp50 = tmp52;
                                      }
                                    }
                                  }
                                }
                                const obj8 = { skuIDs: tmp23, activeSubscription: null, children: null };
                                const obj9 = { style: tmp4.rootContainer, children: null };
                                const items2 = [tmp24, tmp32, tmp35, tmp41];
                                obj9.children = items2;
                                obj8.children = closure_9(closure_4, obj9);
                                const tmp49 = closure_8(tmp(tmp2[22]).NativePaymentContextProvider, obj8);
                                cResult[36] = tmp4.rootContainer;
                                cResult[37] = tmp24;
                                cResult[38] = tmp32;
                                cResult[39] = tmp35;
                                cResult[40] = tmp41;
                                cResult[41] = tmp49;
                                tmp45 = tmp49;
                              }
                            }
                          }
                        }
                        const obj10 = {
                          category,
                          products: filteredAndSortedProducts,
                          scrollEnabled: true,
                          onScroll: tmp10,
                          paddingTop: tmp5(tmp2[6]).space.PX_16,
                          paddingBottom: sum,
                          muteBundleStaticBackground: true,
                          accessibilityLabel: tmp39,
                        };
                        const tmp44 = closure_8(tmp5(tmp2[21]), obj10);
                        cResult[30] = category;
                        cResult[31] = tmp10;
                        cResult[32] = filteredAndSortedProducts;
                        cResult[33] = sum;
                        cResult[34] = tmp39;
                        cResult[35] = tmp44;
                        tmp41 = tmp44;
                        const tmp5Result = tmp5(tmp2[21]);
                      }
                      const obj11 = { style: null };
                      const items3 = [tmp4.border, animatedStyle];
                      obj11.style = items3;
                      const tmp37 = closure_8(tmp5(tmp2[14]).View, obj11);
                      cResult[25] = animatedStyle;
                      cResult[26] = tmp4.border;
                      cResult[27] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                  const obj12 = { logoUrl, buttonColor: tmp29, categoryName: category.name };
                  const tmp34 = closure_8(tmp5(tmp2[19]), obj12);
                  cResult[21] = category.name;
                  cResult[22] = logoUrl;
                  cResult[23] = tmp29;
                  cResult[24] = tmp34;
                  tmp32 = tmp34;
                }
                const obj13 = {};
                const merged = Object.assign(analyticsContext);
                obj13.pageCategory = category.name;
                cResult[13] = analyticsContext;
                cResult[14] = category.name;
                cResult[15] = obj13;
                tmp19 = obj13;
              }
            }
            const items4 = [sessionId1, analyticsLocations, category.name];
            cResult[9] = analyticsLocations;
            cResult[10] = category.name;
            cResult[11] = sessionId1;
            cResult[12] = items4;
            tmp16 = items4;
          }
        }
        let sessionId2;
        if (analyticsContext != null) {
          sessionId2 = analyticsContext.sessionId;
        }
        const fn2 = function w() {
          const obj2 = {
            location_stack: analyticsLocations,
            page_session_id: null,
            source: null,
            page_type: "index",
            category: null,
          };
          let sessionId;
          if (analyticsContext != null) {
            sessionId = analyticsContext.sessionId;
          }
          obj2.page_session_id = sessionId;
          obj2.source = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
          obj2.category = category.name;
          AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, obj2);
          let sessionId1;
          if (analyticsContext != null) {
            sessionId1 = analyticsContext.sessionId;
          }
          const obj3 = CollectiblesPerfLogging;
          obj3.trackShopPerf({
            sessionId: sessionId1,
            checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
            tab: constants.SHOP_ALL,
            unpublishedCategoriesShown: false,
            cacheDisabled: false,
          });
          const obj4 = {
            sessionId: sessionId1,
            checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
            tab: constants.SHOP_ALL,
            unpublishedCategoriesShown: false,
            cacheDisabled: false,
          };
        };
        cResult[5] = sessionId2;
        cResult[6] = analyticsLocations;
        cResult[7] = category.name;
        cResult[8] = fn2;
        tmp13 = fn2;
        const tmpResult4 = category(analyticsLocations[14]);
      }
    : (category) => {
        category = category.category;
        const analyticsContext = category.analyticsContext;
        let analyticsLocations;
        const tmp = closure_10();
        ({ mobileBgUrl, logoUrl } = category);
        const backgroundColors = analyticsContext(analyticsLocations[9])(category.styles).backgroundColors;
        const items = [analyticsContext(analyticsLocations[10]).COLLECTIBLES_SHOP_INDEX_PAGE];
        analyticsLocations = analyticsContext(analyticsLocations[11])(items).analyticsLocations;
        const tmp4 = analyticsContext(analyticsLocations[11]);
        const filteredAndSortedProducts = category(analyticsLocations[13]).useFilteredAndSortedProducts({
          products: category.products,
        });
        let obj = category(analyticsLocations[13]);
        let obj2 = { products: category.products };
        const sharedValue = category(analyticsLocations[14]).useSharedValue(0);
        const items1 = [sharedValue];
        const callback = sharedValue.useCallback((nativeEvent) => {
          let num = 0;
          if (nativeEvent.nativeEvent.contentOffset.y > 5) {
            num = 1;
          }
          const result = sharedValue.set(spring.withSpring(num));
        }, items1);
        let obj3 = category(analyticsLocations[14]);
        const fn = function _() {
          return { opacity: sharedValue.get() };
        };
        fn.__closure = { borderOpacity: sharedValue };
        fn.__workletHash = 1455596227791;
        fn.__initData = __initData2;
        let sessionId;
        const animatedStyle = category(analyticsLocations[14]).useAnimatedStyle(fn);
        if (analyticsContext != null) {
          sessionId = analyticsContext.sessionId;
        }
        const items2 = [sessionId, analyticsLocations, category.name];
        const effect = sharedValue.useEffect(() => {
          const obj2 = {
            location_stack: analyticsLocations,
            page_session_id: null,
            source: null,
            page_type: "index",
            category: null,
          };
          let sessionId;
          if (analyticsContext != null) {
            sessionId = analyticsContext.sessionId;
          }
          obj2.page_session_id = sessionId;
          obj2.source = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
          obj2.category = category.name;
          AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, obj2);
          let sessionId1;
          if (analyticsContext != null) {
            sessionId1 = analyticsContext.sessionId;
          }
          const obj3 = CollectiblesPerfLogging;
          obj3.trackShopPerf({
            sessionId: sessionId1,
            checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
            tab: constants.SHOP_ALL,
            unpublishedCategoriesShown: false,
            cacheDisabled: false,
          });
          const obj4 = {
            sessionId: sessionId1,
            checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
            tab: constants.SHOP_ALL,
            unpublishedCategoriesShown: false,
            cacheDisabled: false,
          };
        }, items2);
        const obj5 = { value: analyticsLocations, children: null };
        const obj6 = { newValue: null, children: null };
        const obj7 = {};
        const merged = Object.assign(analyticsContext);
        obj7.pageCategory = category.name;
        obj6.newValue = obj7;
        const obj8 = { skuIDs: [], activeSubscription: null, children: null };
        const obj9 = { style: tmp.rootContainer, children: null };
        const items3 = [
          closure_8(category(analyticsLocations[18]).CollectiblesProgressiveImage, {
            source: { uri: mobileBgUrl },
            style: closure_5.absoluteFill,
          }),
          ,
          ,
        ];
        const obj11 = { logoUrl, buttonColor: null, categoryName: null };
        let toHexStringResult;
        const obj10 = { source: { uri: mobileBgUrl }, style: closure_5.absoluteFill };
        let obj4 = category(analyticsLocations[14]);
        if (backgroundColors != null) {
          const label = backgroundColors.label;
          toHexStringResult = label.toHexString();
        }
        obj11.buttonColor = toHexStringResult;
        obj11.categoryName = category.name;
        items3[1] = closure_8(analyticsContext(analyticsLocations[19]), obj11);
        const obj12 = { style: null };
        const items4 = [tmp.border, animatedStyle];
        obj12.style = items4;
        items3[2] = closure_8(analyticsContext(analyticsLocations[14]).View, obj12);
        const obj13 = {
          category,
          products: filteredAndSortedProducts,
          scrollEnabled: true,
          onScroll: callback,
          paddingTop: null,
          paddingBottom: null,
          muteBundleStaticBackground: true,
          accessibilityLabel: null,
        };
        const tmp2Result = analyticsContext(analyticsLocations[19]);
        obj13.paddingTop = analyticsContext(analyticsLocations[6]).space.PX_16;
        obj13.paddingBottom =
          analyticsContext(analyticsLocations[12])().bottom + analyticsContext(analyticsLocations[6]).space.PX_16;
        const intl = tmp5(tmp3[20]).intl;
        obj13.accessibilityLabel = intl.formatToPlainString(category(analyticsLocations[20]).t.FNtLb3, {
          category: category.name,
        });
        items3[3] = closure_8(analyticsContext(analyticsLocations[21]), obj13);
        obj9.children = items3;
        obj8.children = closure_9(closure_4, obj9);
        obj6.children = closure_8(category(analyticsLocations[22]).NativePaymentContextProvider, obj8);
        obj5.children = closure_8(category(analyticsLocations[23]).CollectiblesAnalyticsProvider, obj6);
        return closure_8(category(analyticsLocations[11]).AnalyticsLocationProvider, obj5);
      },
);
