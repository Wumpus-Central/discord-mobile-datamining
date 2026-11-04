// === Module 18320: messages/Messages ===

// Module 18320 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import RootNavigationRef from "RootNavigationRef" /* 5323 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5745 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7462 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7794 */;
import useMessagesSpecsDefault from "useMessagesSpecs" /* 18325 */;
import MessagesHeaderDefault from "MessagesHeader" /* 18326 */;
import useMessagesDataDefault from "useMessagesData" /* 18343 */;
import useMessagesScrollToTopDefault from "useMessagesScrollToTop" /* 18346 */;
import useMessagesReconnectToCallsEffectDefault from "useMessagesReconnectToCallsEffect" /* 18347 */;
import ChannelListPanelBackdropDefault from "ChannelListPanelBackdrop" /* 18349 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6703 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = { code: "(function MessagesTsx1(event){let[scrollPosition,handleGuildsNavigationScroll]=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default noop.memo(function Messages(style) {
  _require = undefined;
  const tmp3 = useAnalyticsLocationsDefault;
  const sharedValue = require("module_1652").useSharedValue(0);
  let obj = require("module_1652");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  const obj2 = require("useYouBarTotalHeight");
  const youBarTotalHeight1 = require("useYouBarTotalHeight").useYouBarTotalHeight(-16);
  const obj3 = require("useYouBarTotalHeight");
  const doesLandOnHomeDrawer = require("useHomeDrawerGesture").useDoesLandOnHomeDrawer();
  const obj4 = require("useHomeDrawerGesture");
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = useMessagesSpecsDefault());
  const tmp10 = useMessagesDataDefault();
  const dataKey = tmp10.dataKey;
  _require = dataKey;
  importDefault = tmp10.sections;
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const tmp9 = useMessagesSpecsDefault();
  if (obj6.isAndroid()) {
    let AndroidMessagesListImplExperiment = tmp4(tmp13).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp(tmp13);
  }
  const config = AndroidMessagesListImplExperiment.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  useMessagesScrollToTopDefault({ listRef: ref, listRefHappeningNow: ref1 });
  useMessagesReconnectToCallsEffectDefault();
  obj6 = require("PlatformUtils");
  const commonTriggerPoint = require("useCommonTriggerPoint").useCommonTriggerPoint(tmp4(18348).DmGdmListRenderTriggerPoint);
  items = [dataKey];
  const effect = noop.useEffect(() => {
    if (null != c0) {
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
  const layoutEffect = noop.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    const reduced = _undefined2.reduce((acc, item) => acc + item, 0);
    TTITrackerDefault.recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const tmp4Result = require("useCommonTriggerPoint");
  const tmp4Result3 = require("QuestDockExternalCoordinationContext");
  const externalScrollEventHandler = require("QuestDockExternalCoordinationContext").useExternalScrollEventHandler({ id: "messages" });
  const items1 = [closure_8, sharedValue, externalScrollEventHandler];
  _require = undefined;
  importDefault = undefined;
  [tmp21, tmp22, tmp23] = items1;
  class MessagesTsx1 {
    constructor(arg0) {
      result = closure_0.set(style.contentOffset.y);
      tmp2 = closure_1(style.contentOffset.y, style.contentSize.height, style.layoutMeasurement.height);
      return;
    }
  }
  const items2 = [tmp22, tmp23];
  MessagesTsx1.__closure = items2;
  MessagesTsx1.__workletHash = 2610387438817;
  MessagesTsx1.__initData = tmp21;
  let obj7 = { accessibilityLabel: null, data: null, handleScrollAnimated: null, insetEnd: null, listItemHeight: null, listItemSizes: null, listItemSuggestedFriendHeight: null, listLeft: null, listRefHappeningNow: null, listTop: null, recycleItems: null, scrollIndicatorInsetBottom: null, scrollPosition: null };
  const tmp4Result4 = require("module_1652");
  const intl = tmp4(1113).intl;
  obj7.accessibilityLabel = intl.string(require("util").t.OIgYlQ);
  obj7.data = tmp10;
  obj7.handleScrollAnimated = require("module_1652").useAnimatedScrollHandler(MessagesTsx1);
  obj7.insetEnd = youBarTotalHeight;
  obj7.listItemHeight = listItemHeight;
  obj7.listItemSizes = listItemSizes;
  obj7.listItemSuggestedFriendHeight = listItemSuggestedFriendHeight;
  obj7.listLeft = listLeft;
  obj7.listRefHappeningNow = ref1;
  obj7.listTop = listTop;
  obj7.recycleItems = recycleItems;
  obj7.scrollIndicatorInsetBottom = youBarTotalHeight1;
  obj7.scrollPosition = sharedValue;
  const obj8 = { value: tmp3(AnalyticsLocationDefault.MESSAGES).analyticsLocations, children: null };
  const obj9 = { style: style.style, children: null };
  const animatedScrollHandler = require("module_1652").useAnimatedScrollHandler(MessagesTsx1);
  const obj10 = { backgroundColor: nativeDefault.colors.PANEL_BG, children: null };
  const items3 = [closure_6(MessagesHeaderDefault, { height: headerSize, scrollPosition: sharedValue }), , ];
  if (tmp10.showFullscreenEmptyState) {
    let tmp25Result = closure_6(tmp(18351), {});
  } else {
    if ("legend" === list) {
      let tmp28 = 18356;
    } else {
      tmp28 = "flash" === list ? 18400 : 18401;
    }
    const obj11 = { ref };
    const merged = Object.assign(obj7);
    tmp25Result = closure_6(tmp(tmp28), obj11);
    const tmpResult2 = tmp(tmp28);
  }
  items3[1] = tmp25Result;
  let tmp25Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp25Result2 = closure_6(tmp4(13555).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items3[2] = tmp25Result2;
  obj10.children = items3;
  obj9.children = closure_7(require("CutoutBackgroundContext").CutoutBackgroundProvider, obj10);
  obj8.children = closure_6(ChannelListPanelBackdropDefault, obj9);
  return closure_6(require("useAnalyticsLocations").AnalyticsLocationProvider, obj8);
});