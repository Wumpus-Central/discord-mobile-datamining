// === Module 16175: MainChannels ===

// Module 16175 (MainChannels)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4376 */;
import useChatLayoutDefault from "useChatLayout" /* 4500 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4503 */;
import useRefValueDefault from "useRefValue" /* 5674 */;
import StartupProfiler from "StartupProfiler" /* 11683 */;
import isJankScreenReportingEnabled from "isJankScreenReportingEnabled" /* 16163 */;
import getJankScreenName from "getJankScreenName" /* 16165 */;
import JankSlidingSurfaceReporterDefault from "JankSlidingSurfaceReporter" /* 16168 */;
import useGuildsRouteGuildId from "useGuildsRouteGuildId" /* 16178 */;
import useChannelListWidthDefault from "useChannelListWidth" /* 16179 */;
import NativeFreezeScreens from "NativeFreezeScreens" /* 16180 */;
import messages_MessagesDefault from "messages/Messages" /* 16181 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16182 */;
import RedesignChannelListDefault from "RedesignChannelList" /* 16263 */;
import HomePanelContent from "HomePanelContent" /* 16441 */;
import NonCollapsableGestureDetector from "NonCollapsableGestureDetector" /* 16522 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16176 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
function LeftPanelContent(panelStyles) {
  panelStyles = panelStyles.panelStyles;
  let top;
  const tmp = closure_13();
  const tmp4 = _slicedToArray(useGuildsRouteGuildId.useGuildsRouteGuildAndChannelId(), 2);
  const current = tmp4[0];
  const ref = noop.useRef(current);
  let isChatBesideChannelList = ref;
  let items = [current];
  const effect = noop.useEffect(() => {
    isChatBesideChannelList.current = current;
  }, items);
  let tmp8 = null != current;
  if (tmp8) {
    tmp8 = current !== ME;
  }
  let tmp11 = useRefValueDefault(ref);
  if (tmp8) {
    tmp11 = current;
  }
  isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  top = useSafeAreaInsetsDefault().top;
  const items1 = [tmp, top];
  const memo = noop.useMemo(() => {
    const items = [first.sideContainer, { marginTop: top }];
    return items;
  }, items1);
  const items2 = [tmp, isChatBesideChannelList];
  const memo1 = noop.useMemo(() => {
    const items = [first.side, ];
    let sideTablet = isChatBesideChannelList;
    if (isChatBesideChannelList) {
      sideTablet = first.sideTablet;
    }
    items[1] = sideTablet;
    return items;
  }, items2);
  const sum = DM_WIDTH + useChannelListWidthDefault();
  let num = 0;
  if (tmp8) {
    num = 1;
  }
  const obj3 = { activeIndex: num, children: null };
  const items3 = [closure_1_11(messages_MessagesDefault, { style: memo1 }), closure_1_11(RedesignChannelListDefault, { style: memo1, selectedGuildId: tmp11, selectedChannelId: tmp4[1] })];
  obj3.children = items3;
  const tmp15Result = closure_1_12(NativeFreezeScreens.NativeFreezeScreens, obj3);
  const items4 = [absoluteFill.absoluteFill, ];
  let tmp19;
  if (isChatBesideChannelList) {
    tmp19 = sum;
  }
  const obj4 = { style: items4, children: null };
  items4[1] = { width: tmp19 };
  const items5 = [closure_1_11(HomePanelContent.HomePanelContent, {}), ];
  if (null == panelStyles) {
    const obj5 = { style: memo, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp15Result };
    let tmp16Result = closure_1_11(hasOwnProperty, obj5);
  } else {
    const obj6 = { style: null, pointerEvents: "box-none", nativeID: "messages-parent-view", children: null };
    const items6 = [memo, panelStyles];
    obj6.style = items6;
    obj6.children = tmp15Result;
    tmp16Result = closure_1_11(ReanimatedRexportDefault.View, obj6);
  }
  items5[1] = tmp16Result;
  obj4.children = items5;
  return closure_1_12(hasOwnProperty, obj4);
}
function resolveHomeDrawerName() {
  return HOME_DRAWER_SCREEN;
}
function LeftPanelHomeDrawerContainer() {
  const homeGesture = useHomeDrawerGesture.useHomeGesture();
  const homeDrawerContext = homeGesture.homeDrawerContext;
  ({ gesture, panelStyles } = homeGesture);
  const tmp5 = HomeDrawerStore((maxX) => maxX.maxX);
  const obj2 = { value: homeDrawerContext, children: null };
  const tmp4 = HomeDrawerStore((panelX) => panelX.panelX);
  let tmp7 = null;
  if (obj3.isJankScreenReportingEnabled()) {
    tmp7 = null;
    if (homeDrawerContext.enableHome) {
      tmp7 = null;
      if (tmp5 > 0) {
        const obj4 = { position: tmp4, openAt: tmp5, closedAt: 0, resolveOpenName: resolveHomeDrawerName, resolveClosedName: getJankScreenName.getBaseScreenName };
        tmp7 = closure_1_11(JankSlidingSurfaceReporterDefault, obj4);
      }
    }
  }
  const items = [tmp7, ];
  obj3 = isJankScreenReportingEnabled;
  items[1] = closure_1_11(NonCollapsableGestureDetector.NonCollapsableGestureDetector, { gesture, children: closure_1_11(LeftPanelContent, { panelStyles }) });
  obj2.children = items;
  return closure_1_12(useHomeDrawerGesture.HomeDrawerStateContext.Provider, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
const DM_WIDTH = Constants.DM_WIDTH;
const ME = Constants.ME;
const HOME_DRAWER_SCREEN = fn(16166).HOME_DRAWER_SCREEN;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4640);
let obj = { fill: { flex: 1 }, sideContainer: null, side: null, sideTablet: null };
const rect = { position: "absolute", top: 0, left: DM_WIDTH, bottom: 0, right: 0, flexDirection: "row", borderLeftWidth: 1, borderTopWidth: 1, borderColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopLeftRadius: nativeDefault.radii.xl };
obj.sideContainer = rect;
obj.side = { borderTopLeftRadius: nativeDefault.radii.xl - 1, borderTopRightRadius: nativeDefault.radii.none };
let obj3 = { borderTopLeftRadius: nativeDefault.radii.xl - 1, borderTopRightRadius: nativeDefault.radii.none };
obj.sideTablet = { borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_13 = createStyles.createStyles(obj);
let closure_17 = noop.memo(function LeftMenuTabsInner() {
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  if (MobileHomeDrawerExperiment.useConfig({ location: "gesture" }).enableHome) {
    let tmp2Result = closure_1_11(LeftPanelHomeDrawerContainer, {});
  } else {
    const obj = { style: tmp.fill, children: closure_1_11(LeftPanelContent, {}) };
    tmp2Result = closure_1_11(hasOwnProperty, obj);
  }
  return tmp2Result;
});
let obj4 = { borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MainChannels.tsx");

export default noop.memo(function MainChannelsRedesignInner() {
  const obj = { profile: StartupProfiler.Profiles.LeftPanel, children: closure_1_11(closure_17, {}) };
  return closure_1_11(StartupProfilerDefault, obj);
});