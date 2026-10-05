// discord_app/modules/main_tabs_v2/native/tabs/messages/Messages.tsx
import TTITrackerDefault from "../../../../tti_analytics/TTITracker.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import NavigationRouteUtils from "../../../helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import DeprecatedLayoutAnimation from "../../../../animations/native/DeprecatedLayoutAnimation.tsx";
import TTIAnalyticsUtils from "../../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let recordRenderResult, style, trackAppUIViewedResult;

let metroImportDefault;
let metroRequire;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const __initData = {
  code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}",
};
const __initData2 = {
  code: "function MessagesTsx2(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let dataKey;
        let externalScrollEventHandler;
        let first;
        let headerSize;
        let list;
        let listItemHeight;
        let listItemSizes;
        let listItemSuggestedFriendHeight;
        let listLeft;
        let listTop;
        let recycleItems;
        let sections;
        let sharedValue;
        let tmp16;
        let tmp20;
        let tmp21;
        let tmp29;
        let tmp2 = sections;
        let obj = sharedValue(sections[5]);
        const cResult = obj.c(40);
        const tmp5 = dataKey(sections[6]);
        const analyticsLocations = tmp5(dataKey(sections[7]).MESSAGES).analyticsLocations;
        const obj2 = sharedValue(sections[8]);
        sharedValue = obj2.useSharedValue(0);
        const obj3 = sharedValue(sections[9]);
        const youBarTotalHeight = obj3.useYouBarTotalHeight();
        const obj4 = sharedValue(sections[9]);
        const youBarTotalHeight1 = obj4.useYouBarTotalHeight(-16);
        const obj5 = sharedValue(sections[10]);
        const doesLandOnHomeDrawer = obj5.useDoesLandOnHomeDrawer();
        ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(
          sections[11],
        )());
        dataKey(sections[11])();
        const tmp11 = dataKey(sections[12])();
        dataKey = tmp11.dataKey;
        sections = tmp11.sections;
        let obj6 = externalScrollEventHandler;
        const ref = externalScrollEventHandler.useRef(null);
        const ref1 = externalScrollEventHandler.useRef(null);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { location: "Messages Tab" };
          cResult[0] = obj7;
          first = obj7;
        } else {
          first = cResult[0];
        }
        const tmp4Result = dataKey(tmp2[13]);
        const config = tmp4Result.useConfig(first);
        ({ list, recycleItems } = config);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { listRef: ref, listRefHappeningNow: ref1 };
          cResult[1] = obj8;
          tmp16 = obj8;
        } else {
          tmp16 = cResult[1];
        }
        dataKey(tmp2[14])(tmp16);
        dataKey(tmp2[15])();
        const tmpResult = sharedValue(tmp2[16]);
        const commonTriggerPoint = tmpResult.useCommonTriggerPoint(tmp(tmp2[17]).DmGdmListRenderTriggerPoint);
        if (cResult[2] !== dataKey) {
          const fn = function z() {
            if (null != dataKey) {
              const obj6 = PlatformUtils;
              if (!obj6.isAndroid()) {
                if (!AccessibilityStore.useReducedMotion) {
                  const tmp6Result = RootNavigationRef;
                  const rootNavigationRef = tmp6Result.getRootNavigationRef();
                  let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
                  if (tmp2) {
                    const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
                    NavigationRouteUtils;
                    const tmp6Result5 = RootNavigationRef;
                    const rootNavigationRef1 = tmp6Result5.getRootNavigationRef();
                    let currentRoute;
                    if (rootNavigationRef1 != null) {
                      currentRoute = rootNavigationRef1.getCurrentRoute();
                    }
                    tmp2 = null != coerceGuildsRoute(currentRoute);
                  }
                  if (tmp2) {
                    const tmp6Result6 = DeprecatedLayoutAnimation;
                    const result = tmp6Result6.DeprecatedLayoutAnimation();
                  }
                }
              }
            }
          };
          const items = [dataKey];
          cResult[2] = dataKey;
          cResult[3] = fn;
          cResult[4] = items;
          tmp21 = items;
          tmp20 = fn;
        } else {
          tmp20 = cResult[3];
          tmp21 = cResult[4];
        }
        const effect = obj6.useEffect(tmp20, tmp21);
        if (cResult[5] !== sections) {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              tmp2 = closure_1(closure_2[23]);
              recordRender = tmp2.recordRender;
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
          cResult[5] = sections;
          cResult[6] = D;
        } else {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              tmp2 = closure_1(closure_2[23]);
              recordRender = tmp2.recordRender;
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
        }
        const layoutEffect = obj6.useLayoutEffect(D);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              tmp2 = closure_1(closure_2[23]);
              recordRender = tmp2.recordRender;
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
          cResult[7] = tmp26;
        } else {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              tmp2 = closure_1(closure_2[23]);
              recordRender = tmp2.recordRender;
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
        }
        const tmpResult3 = sharedValue(tmp2[24]);
        externalScrollEventHandler = tmpResult3.useExternalScrollEventHandler(tmp26);
        const tmpResult4 = sharedValue(tmp2[8]);
        class V {
          constructor(contentOffset) {
            const result = sharedValue.set(contentOffset.contentOffset.y);
            externalScrollEventHandler(
              contentOffset.contentOffset.y,
              contentOffset.contentSize.height,
              contentOffset.layoutMeasurement.height,
            );
          }
        }
        V.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
        V.__workletHash = 5461403437592;
        V.__initData = __initData;
        const animatedScrollHandler = tmpResult4.useAnimatedScrollHandler(V);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              tmp2 = closure_1(closure_2[23]);
              recordRender = tmp2.recordRender;
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
          const stringResult = obj13.string(sharedValue(tmp2[25]).t.OIgYlQ);
          cResult[8] = stringResult;
          tmp29 = stringResult;
        } else {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              tmp2 = closure_1(closure_2[23]);
              recordRender = tmp2.recordRender;
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
        }
        if (cResult[9] === tmp11) {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              tmp2 = closure_1(closure_2[23]);
              recordRender = tmp2.recordRender;
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
        }
        const obj9 = {
          accessibilityLabel: tmp29,
          data: tmp11,
          handleScrollAnimated: animatedScrollHandler,
          insetEnd: youBarTotalHeight,
          listItemHeight,
          listItemSizes,
          listItemSuggestedFriendHeight,
          listLeft,
          listRefHappeningNow: ref1,
          listTop,
          recycleItems,
          scrollIndicatorInsetBottom: youBarTotalHeight1,
          scrollPosition: sharedValue,
        };
        cResult[9] = tmp11;
        cResult[10] = animatedScrollHandler;
        cResult[11] = listItemHeight;
        cResult[12] = listItemSizes;
        cResult[13] = listItemSuggestedFriendHeight;
        cResult[14] = listLeft;
        cResult[15] = listTop;
        cResult[16] = recycleItems;
        cResult[17] = youBarTotalHeight1;
        cResult[18] = sharedValue;
        cResult[19] = youBarTotalHeight;
        cResult[20] = obj9;
      }
    : (style) => {
        let CutoutBackgroundProvider;
        let animatedScrollHandler;
        let headerSize;
        let intl;
        let items1;
        let list;
        let listItemHeight;
        let listItemSizes;
        let listItemSuggestedFriendHeight;
        let listLeft;
        let listTop;
        let obj11;
        let obj12;
        let recycleItems;
        let tmp21Result;
        let tmp22;
        let sharedValue;
        let dataKey;
        let sections;
        let externalScrollEventHandler;
        let tmp2 = sections;
        style = style.style;
        const tmp3 = dataKey(sections[6]);
        const analyticsLocations = tmp3(dataKey(sections[7]).MESSAGES).analyticsLocations;
        let obj = sharedValue(sections[8]);
        const tmp4 = sharedValue;
        sharedValue = obj.useSharedValue(0);
        const obj2 = sharedValue(sections[9]);
        const youBarTotalHeight = obj2.useYouBarTotalHeight();
        const obj3 = sharedValue(sections[9]);
        const youBarTotalHeight1 = obj3.useYouBarTotalHeight(-16);
        const obj4 = sharedValue(sections[10]);
        const doesLandOnHomeDrawer = obj4.useDoesLandOnHomeDrawer();
        ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(
          sections[11],
        )());
        dataKey(sections[11])();
        const tmp10 = dataKey(sections[12])();
        dataKey = tmp10.dataKey;
        sections = tmp10.sections;
        const showFullscreenEmptyState = tmp10.showFullscreenEmptyState;
        const ref = externalScrollEventHandler.useRef(null);
        const ref1 = externalScrollEventHandler.useRef(null);
        const obj5 = dataKey(sections[13]);
        const config = obj5.useConfig({ location: "Messages Tab" });
        ({ list, recycleItems } = config);
        dataKey(sections[14])({ listRef: ref, listRefHappeningNow: ref1 });
        dataKey(sections[15])();
        let obj6 = sharedValue(sections[16]);
        const commonTriggerPoint = obj6.useCommonTriggerPoint(sharedValue(sections[17]).DmGdmListRenderTriggerPoint);
        const items = [dataKey];
        const effect = externalScrollEventHandler.useEffect(() => {
          if (null != dataKey) {
            const obj6 = PlatformUtils;
            if (!obj6.isAndroid()) {
              if (!AccessibilityStore.useReducedMotion) {
                const tmp6Result = RootNavigationRef;
                const rootNavigationRef = tmp6Result.getRootNavigationRef();
                let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
                if (tmp2) {
                  const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
                  NavigationRouteUtils;
                  const tmp6Result5 = RootNavigationRef;
                  const rootNavigationRef1 = tmp6Result5.getRootNavigationRef();
                  let currentRoute;
                  if (rootNavigationRef1 != null) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  tmp2 = null != coerceGuildsRoute(currentRoute);
                }
                if (tmp2) {
                  const tmp6Result6 = DeprecatedLayoutAnimation;
                  const result = tmp6Result6.DeprecatedLayoutAnimation();
                }
              }
            }
          }
        }, items);
        const layoutEffect = externalScrollEventHandler.useLayoutEffect(() => {
          const obj = TTIAnalyticsUtils;
          obj.trackAppUIViewed();
          const recordRender = TTITrackerDefault.recordRender;
          TTITrackerDefault;
          const reduced = sections.reduce((acc, item) => acc + item, 0);
          recordRender(reduced, GatewayConnectionStore.isConnected());
        });
        const obj7 = sharedValue(sections[24]);
        externalScrollEventHandler = obj7.useExternalScrollEventHandler({ id: "messages" });
        const fn = function w(contentOffset) {
          const result = sharedValue.set(contentOffset.contentOffset.y);
          externalScrollEventHandler(
            contentOffset.contentOffset.y,
            contentOffset.contentSize.height,
            contentOffset.layoutMeasurement.height,
          );
        };
        fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
        fn.__workletHash = 17197843851355;
        fn.__initData = __initData2;
        const obj9 = {
          accessibilityLabel: intl.string(sharedValue(sections[25]).t.OIgYlQ),
          data: tmp10,
          handleScrollAnimated: animatedScrollHandler,
          insetEnd: youBarTotalHeight,
          listItemHeight,
          listItemSizes,
          listItemSuggestedFriendHeight,
          listLeft,
          listRefHappeningNow: ref1,
          listTop,
          recycleItems,
          scrollIndicatorInsetBottom: youBarTotalHeight1,
          scrollPosition: sharedValue,
        };
        const obj8 = sharedValue(sections[8]);
        animatedScrollHandler = obj8.useAnimatedScrollHandler(fn);
        intl = sharedValue(sections[25]).intl;
        const obj10 = { value: analyticsLocations, children: closure_6(tmp22, obj11) };
        const AnalyticsLocationProvider = sharedValue(sections[6]).AnalyticsLocationProvider;
        obj11 = { style, children: closure_7(CutoutBackgroundProvider, obj12) };
        obj12 = { backgroundColor: dataKey(sections[33]).colors.PANEL_BG, children: items1 };
        tmp22 = dataKey(sections[34]);
        CutoutBackgroundProvider = sharedValue(sections[32]).CutoutBackgroundProvider;
        items1 = [closure_6(dataKey(sections[26]), { height: headerSize, scrollPosition: sharedValue }), ,];
        if (showFullscreenEmptyState) {
          tmp21Result = closure_6(tmp(tmp2[27]), {});
        } else {
          let tmp24;
          if ("legend" === list) {
            tmp24 = tmp2[28];
          } else {
            tmp24 = "flash" === list ? tmp2[29] : tmp2[30];
          }
          const obj13 = { ref };
          const tmpResult = dataKey(tmp24);
          const merged = Object.assign(obj9);
          tmp21Result = closure_6(tmpResult, obj13);
        }
        items1[1] = tmp21Result;
        let tmp21Result2 = null;
        if (!doesLandOnHomeDrawer) {
          tmp21Result2 = closure_6(tmp4(tmp2[31]).TTIFirstContentfulPaint, { label: "messages_tabs" });
        }
        items1[2] = tmp21Result2;
        return closure_6(AnalyticsLocationProvider, obj10);
      },
);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
