// discord_app/modules/main_tabs_v2/native/tabs/messages/Messages.tsx
import TTITrackerDefault from "../../../../tti_analytics/TTITracker.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useAnalyticsLocationsDefault from "../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import TTIAnalyticsUtils from "../../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import useMessagesSpecsDefault from "useMessagesSpecs.tsx";
import MessagesHeaderDefault from "MessagesHeader.tsx";
import useMessagesDataDefault from "useMessagesData.tsx";
import useMessagesScrollToTopDefault from "useMessagesScrollToTop.tsx";
import useMessagesReconnectToCallsEffectDefault from "useMessagesReconnectToCallsEffect.tsx";
import ChannelListPanelBackdropDefault from "../../../../channel_list_v2/native/components/ChannelListPanelBackdrop.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = {
  code: "(function MessagesTsx1(event){let[scrollPosition,handleGuildsNavigationScroll]=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default noop.memo(function Messages(style) {
  _require = undefined;
  const tmp3 = useAnalyticsLocationsDefault;
  const sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../../../_runtime/metro/01652__.js");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  const obj2 = require("useYouBarTotalHeight");
  const youBarTotalHeight1 = require("useYouBarTotalHeight").useYouBarTotalHeight(-16);
  const obj3 = require("useYouBarTotalHeight");
  const doesLandOnHomeDrawer = require("useHomeDrawerGesture").useDoesLandOnHomeDrawer();
  const obj4 = require("useHomeDrawerGesture");
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } =
    useMessagesSpecsDefault());
  const tmp10 = useMessagesDataDefault();
  _require = tmp10.sections;
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
  const commonTriggerPoint = require("useCommonTriggerPoint").useCommonTriggerPoint(
    tmp4(18640).DmGdmListRenderTriggerPoint,
  );
  const layoutEffect = noop.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    const reduced = _undefined.reduce((acc, item) => acc + item, 0);
    TTITrackerDefault.recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const tmp4Result = require("useCommonTriggerPoint");
  const tmp4Result3 = require("QuestDockExternalCoordinationContext");
  const externalScrollEventHandler = require("QuestDockExternalCoordinationContext").useExternalScrollEventHandler({
    id: "messages",
  });
  items = [closure_7, sharedValue, externalScrollEventHandler];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items;
  class MessagesTsx1 {
    constructor(arg0) {
      result = closure_0.set(style.contentOffset.y);
      tmp2 = closure_1(style.contentOffset.y, style.contentSize.height, style.layoutMeasurement.height);
      return;
    }
  }
  const items1 = [tmp21, tmp22];
  MessagesTsx1.__closure = items1;
  MessagesTsx1.__workletHash = 2610387438817;
  MessagesTsx1.__initData = tmp20;
  const obj7 = {
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
  const tmp4Result4 = require("../../../../../../_runtime/metro/01652__.js");
  const intl = tmp4(1113).intl;
  obj7.accessibilityLabel = intl.string(require("util").t.OIgYlQ);
  obj7.data = tmp10;
  obj7.handleScrollAnimated = require("../../../../../../_runtime/metro/01652__.js").useAnimatedScrollHandler(
    MessagesTsx1,
  );
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
  const animatedScrollHandler = require("../../../../../../_runtime/metro/01652__.js").useAnimatedScrollHandler(
    MessagesTsx1,
  );
  const obj10 = { backgroundColor: nativeDefault.colors.PANEL_BG, children: null };
  const items2 = [closure_5(MessagesHeaderDefault, { height: headerSize, scrollPosition: sharedValue }), ,];
  if (tmp10.showFullscreenEmptyState) {
    let tmp24Result = closure_5(tmp(18643), {});
  } else {
    if ("legend" === list) {
      let tmp27 = 18648;
    } else {
      tmp27 = "flash" === list ? 18692 : 18693;
    }
    const obj11 = { ref };
    const merged = Object.assign(obj7);
    tmp24Result = closure_5(tmp(tmp27), obj11);
    const tmpResult2 = tmp(tmp27);
  }
  items2[1] = tmp24Result;
  let tmp24Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp24Result2 = closure_5(tmp4(14097).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items2[2] = tmp24Result2;
  obj10.children = items2;
  obj9.children = closure_6(require("CutoutBackgroundContext").CutoutBackgroundProvider, obj10);
  obj8.children = closure_5(ChannelListPanelBackdropDefault, obj9);
  return closure_5(require("useAnalyticsLocations").AnalyticsLocationProvider, obj8);
});
