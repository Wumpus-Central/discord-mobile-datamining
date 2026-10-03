// discord_app/modules/main_tabs_v2/native/tabs/messages/Messages.tsx
import TTITrackerDefault from "../../../../tti_analytics/TTITracker.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import NavigationRouteUtils from "../../../helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import DeprecatedLayoutAnimation from "../../../../animations/native/DeprecatedLayoutAnimation.tsx";
import TTIAnalyticsUtils from "../../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const __initData = {
  code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}",
};
const __initData2 = {
  code: "function MessagesTsx2(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = sharedValue(sections[5]).c(40);
        let obj = sharedValue(sections[5]);
        const analyticsLocations = dataKey(sections[6])(dataKey(sections[7]).MESSAGES).analyticsLocations;
        const tmp5 = dataKey(sections[6]);
        sharedValue = sharedValue(sections[8]).useSharedValue(0);
        const obj2 = sharedValue(sections[8]);
        const youBarTotalHeight = sharedValue(sections[9]).useYouBarTotalHeight();
        const obj3 = sharedValue(sections[9]);
        const youBarTotalHeight1 = sharedValue(sections[9]).useYouBarTotalHeight(-16);
        const obj4 = sharedValue(sections[9]);
        const doesLandOnHomeDrawer = sharedValue(sections[10]).useDoesLandOnHomeDrawer();
        const obj5 = sharedValue(sections[10]);
        ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(
          sections[11],
        )());
        const tmp11 = dataKey(sections[12])();
        dataKey = tmp11.dataKey;
        sections = tmp11.sections;
        const tmp10 = dataKey(sections[11])();
        const ref1 = externalScrollEventHandler.useRef(null);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj7 = { location: "Messages Tab" };
          cResult[0] = obj7;
          let first = obj7;
        } else {
          first = cResult[0];
        }
        const ref = externalScrollEventHandler.useRef(null);
        const config = dataKey(sections[13]).useConfig(first);
        ({ list, recycleItems } = config);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { listRef: ref, listRefHappeningNow: ref1 };
          cResult[1] = obj8;
          let tmp16 = obj8;
        } else {
          tmp16 = cResult[1];
        }
        dataKey(sections[14])(tmp16);
        dataKey(sections[15])();
        const tmp4Result = dataKey(sections[13]);
        const commonTriggerPoint = sharedValue(sections[16]).useCommonTriggerPoint(
          tmp(tmp2[17]).DmGdmListRenderTriggerPoint,
        );
        if (cResult[2] !== dataKey) {
          const fn = function z() {
            if (null != dataKey) {
              if (!obj7.isAndroid()) {
                if (!AccessibilityStore.useReducedMotion) {
                  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
                  let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
                  if (tmp2) {
                    const tmp5Result4 = NavigationRouteUtils;
                    const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
                    let currentRoute;
                    if (rootNavigationRef1 != null) {
                      currentRoute = rootNavigationRef1.getCurrentRoute();
                    }
                    tmp2 = null != tmp5Result4.coerceGuildsRoute(currentRoute);
                    const tmp5Result5 = RootNavigationRef;
                  }
                  if (tmp2) {
                    const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
                    const tmp5Result6 = DeprecatedLayoutAnimation;
                  }
                  const tmp5Result = RootNavigationRef;
                }
              }
              obj7 = PlatformUtils;
            }
          };
          const items = [dataKey];
          cResult[2] = dataKey;
          cResult[3] = fn;
          cResult[4] = items;
          let tmp21 = items;
          let tmp20 = fn;
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
              obj2 = closure_1(closure_2[23]);
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
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
              obj2 = closure_1(closure_2[23]);
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
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
              obj2 = closure_1(closure_2[23]);
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
          cResult[7] = tmp26;
        } else {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              obj2 = closure_1(closure_2[23]);
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
        }
        const tmpResult = sharedValue(sections[16]);
        externalScrollEventHandler = sharedValue(sections[24]).useExternalScrollEventHandler(tmp26);
        const tmpResult3 = sharedValue(sections[24]);
        class V {
          constructor(arg0) {
            result = closure_0.set(arg0.contentOffset.y);
            tmp2 = closure_3(arg0.contentOffset.y, arg0.contentSize.height, arg0.layoutMeasurement.height);
            return;
          }
        }
        V.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
        V.__workletHash = 5461403437592;
        V.__initData = __initData;
        const animatedScrollHandler = sharedValue(sections[8]).useAnimatedScrollHandler(V);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              obj2 = closure_1(closure_2[23]);
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
          const stringResult = obj13.string(tmp(tmp2[25]).t.OIgYlQ);
          cResult[8] = stringResult;
          const tmp29 = stringResult;
        } else {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              obj2 = closure_1(closure_2[23]);
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
        }
        if (cResult[9] === tmp11) {
          class D {
            constructor() {
              obj = closure_0(closure_2[22]);
              trackAppUIViewedResult = obj.trackAppUIViewed();
              obj2 = closure_1(closure_2[23]);
              reduced = sections.reduce((acc, item) => acc + item, 0);
              recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
              return;
            }
          }
        }
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
        cResult[20] = {
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
        const tmpResult4 = sharedValue(sections[8]);
      }
    : (style) => {
        let sharedValue;
        let dataKey;
        let sections;
        let externalScrollEventHandler;
        const tmp3 = dataKey(sections[6]);
        const tmp4 = sharedValue;
        sharedValue = sharedValue(sections[8]).useSharedValue(0);
        let obj = sharedValue(sections[8]);
        const youBarTotalHeight = sharedValue(sections[9]).useYouBarTotalHeight();
        const obj2 = sharedValue(sections[9]);
        const youBarTotalHeight1 = sharedValue(sections[9]).useYouBarTotalHeight(-16);
        const obj3 = sharedValue(sections[9]);
        const doesLandOnHomeDrawer = sharedValue(sections[10]).useDoesLandOnHomeDrawer();
        const obj4 = sharedValue(sections[10]);
        ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(
          sections[11],
        )());
        const tmp10 = dataKey(sections[12])();
        dataKey = tmp10.dataKey;
        sections = tmp10.sections;
        const ref = externalScrollEventHandler.useRef(null);
        const ref1 = externalScrollEventHandler.useRef(null);
        const tmp9 = dataKey(sections[11])();
        const config = dataKey(sections[13]).useConfig({ location: "Messages Tab" });
        ({ list, recycleItems } = config);
        dataKey(sections[14])({ listRef: ref, listRefHappeningNow: ref1 });
        dataKey(sections[15])();
        const obj5 = dataKey(sections[13]);
        const commonTriggerPoint = sharedValue(sections[16]).useCommonTriggerPoint(
          sharedValue(sections[17]).DmGdmListRenderTriggerPoint,
        );
        const items = [dataKey];
        const effect = externalScrollEventHandler.useEffect(() => {
          if (null != dataKey) {
            if (!obj7.isAndroid()) {
              if (!AccessibilityStore.useReducedMotion) {
                const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
                let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
                if (tmp2) {
                  const tmp5Result4 = NavigationRouteUtils;
                  const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
                  let currentRoute;
                  if (rootNavigationRef1 != null) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  tmp2 = null != tmp5Result4.coerceGuildsRoute(currentRoute);
                  const tmp5Result5 = RootNavigationRef;
                }
                if (tmp2) {
                  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
                  const tmp5Result6 = DeprecatedLayoutAnimation;
                }
                const tmp5Result = RootNavigationRef;
              }
            }
            obj7 = PlatformUtils;
          }
        }, items);
        const layoutEffect = externalScrollEventHandler.useLayoutEffect(() => {
          TTIAnalyticsUtils.trackAppUIViewed();
          const reduced = sections.reduce((acc, item) => acc + item, 0);
          TTITrackerDefault.recordRender(reduced, GatewayConnectionStore.isConnected());
        });
        const obj6 = sharedValue(sections[16]);
        externalScrollEventHandler = sharedValue(sections[24]).useExternalScrollEventHandler({ id: "messages" });
        let obj7 = sharedValue(sections[24]);
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
          accessibilityLabel: null,
          data: null,
          handleScrollAnimated: null,
          insetEnd: null,
          listItemHeight: null,
          listItemSizes: null,
          listItemSuggestedFriendHeight: null,
          listLeft: null,
          listRefHappeningNow: null,
          listTop: null,
          recycleItems: null,
          scrollIndicatorInsetBottom: null,
          scrollPosition: null,
        };
        const obj8 = sharedValue(sections[8]);
        const intl = sharedValue(sections[25]).intl;
        obj9.accessibilityLabel = intl.string(sharedValue(sections[25]).t.OIgYlQ);
        obj9.data = tmp10;
        obj9.handleScrollAnimated = sharedValue(sections[8]).useAnimatedScrollHandler(fn);
        obj9.insetEnd = youBarTotalHeight;
        obj9.listItemHeight = listItemHeight;
        obj9.listItemSizes = listItemSizes;
        obj9.listItemSuggestedFriendHeight = listItemSuggestedFriendHeight;
        obj9.listLeft = listLeft;
        obj9.listRefHappeningNow = ref1;
        obj9.listTop = listTop;
        obj9.recycleItems = recycleItems;
        obj9.scrollIndicatorInsetBottom = youBarTotalHeight1;
        obj9.scrollPosition = sharedValue;
        const obj10 = { value: tmp3(dataKey(sections[7]).MESSAGES).analyticsLocations, children: null };
        const obj11 = { style: style.style, children: null };
        const animatedScrollHandler = sharedValue(sections[8]).useAnimatedScrollHandler(fn);
        const obj12 = { backgroundColor: dataKey(sections[33]).colors.PANEL_BG, children: null };
        const items1 = [closure_6(dataKey(sections[26]), { height: headerSize, scrollPosition: sharedValue }), ,];
        if (tmp10.showFullscreenEmptyState) {
          let tmp21Result = closure_6(tmp(tmp2[27]), {});
        } else {
          if ("legend" === list) {
            let tmp24 = tmp2[28];
          } else {
            tmp24 = "flash" === list ? tmp2[29] : tmp2[30];
          }
          const obj13 = { ref };
          const merged = Object.assign(obj9);
          tmp21Result = closure_6(tmp(tmp24), obj13);
          const tmpResult = tmp(tmp24);
        }
        items1[1] = tmp21Result;
        let tmp21Result2 = null;
        if (!doesLandOnHomeDrawer) {
          tmp21Result2 = closure_6(tmp4(tmp2[31]).TTIFirstContentfulPaint, { label: "messages_tabs" });
        }
        items1[2] = tmp21Result2;
        obj12.children = items1;
        obj11.children = closure_7(sharedValue(sections[32]).CutoutBackgroundProvider, obj12);
        obj10.children = closure_6(dataKey(sections[34]), obj11);
        return closure_6(sharedValue(sections[6]).AnalyticsLocationProvider, obj10);
      },
);
