// discord_app/components_native/MainChannels.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../modules/safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../_runtime/metro/01652__.js";
import useChatLayoutDefault from "../modules/chat/native/useChatLayout.tsx";
import HomeDrawerExperiment from "../modules/home_drawer/native/HomeDrawerExperiment.tsx";
import useRefValueDefault from "../hooks/useRefValue.tsx";
import StartupProfiler from "../modules/app_startup/StartupProfiler.tsx";
import useAppFrameDefault from "../modules/main_tabs_v2/native/useAppFrame.tsx";
import isJankScreenReportingEnabled from "../modules/jank_stats/native/isJankScreenReportingEnabled.tsx";
import getJankScreenName from "../modules/jank_stats/native/getJankScreenName.tsx";
import JankSlidingSurfaceReporterDefault from "../modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx";
import useGuildsRouteGuildId from "../modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx";
import useChannelListWidthDefault from "../modules/channel_list_v2/native/useChannelListWidth.tsx";
import NativeFreezeScreens from "../modules/freeze/native/NativeFreezeScreens.tsx";
import messages_MessagesDefault from "../modules/main_tabs_v2/native/tabs/messages/Messages.tsx";
import useHomeDrawerGesture from "../modules/home_drawer/native/useHomeDrawerGesture.tsx";
import RedesignChannelListDefault from "../modules/channel_list_v2/native/RedesignChannelList.tsx";
import HomePanelContent from "../modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx";
import NonCollapsableGestureDetector from "../modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";
import HomeDrawerStore from "../modules/home_drawer/native/HomeDrawerStore.tsx";

const StartupProfilerDefault = StartupProfiler;

require = fn;
function LeftPanelContent(panelStyles) {
  panelStyles = panelStyles.panelStyles;
  let top;
  const hasFrame = useAppFrameDefault().hasFrame;
  const tmp3 = closure_14(hasFrame);
  const tmp5 = _slicedToArray(useGuildsRouteGuildId.useGuildsRouteGuildAndChannelId(), 2);
  const current = tmp5[0];
  const ref = noop.useRef(current);
  let isChatBesideChannelList = ref;
  items = [current];
  const effect = noop.useEffect(() => {
    isChatBesideChannelList.current = current;
  }, items);
  let tmp9 = null != current;
  if (tmp9) {
    tmp9 = current !== React6;
  }
  let tmp11 = useRefValueDefault(ref);
  if (tmp9) {
    tmp11 = current;
  }
  isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  top = useSafeAreaInsetsDefault().top;
  const items1 = [tmp3, top];
  const memo = noop.useMemo(() => {
    items = [first.sideContainer, { marginTop: top }];
    return items;
  }, items1);
  const items2 = [tmp3, isChatBesideChannelList];
  const memo1 = noop.useMemo(() => {
    items = [first.side];
    let sideTablet = isChatBesideChannelList;
    if (isChatBesideChannelList) {
      sideTablet = first.sideTablet;
    }
    items[1] = sideTablet;
    return items;
  }, items2);
  const sum = left + useChannelListWidthDefault();
  let num = 0;
  if (tmp9) {
    num = 1;
  }
  const obj3 = { activeIndex: num, children: null };
  const items3 = [
    closure_1_11(messages_MessagesDefault, { style: memo1 }),
    closure_1_11(RedesignChannelListDefault, { style: memo1, selectedGuildId: tmp11, selectedChannelId: tmp5[1] }),
  ];
  obj3.children = items3;
  const items4 = [application_id(NativeFreezeScreens.NativeFreezeScreens, obj3)];
  let tmp16Result = null;
  if (hasFrame) {
    const obj4 = { pointerEvents: "none", style: tmp3.framedBorder };
    tmp16Result = closure_1_11(hasOwnProperty, obj4);
  }
  items4[1] = tmp16Result;
  const tmp15Result = application_id(state, { children: items4 });
  const items5 = [timestampProducer.absoluteFill];
  let tmp22;
  if (isChatBesideChannelList) {
    tmp22 = sum;
  }
  const obj5 = { style: items5, children: null };
  items5[1] = { width: tmp22 };
  const items6 = [closure_1_11(HomePanelContent.HomePanelContent, {})];
  if (null == panelStyles) {
    const obj6 = { style: memo, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp15Result };
    let tmp16Result2 = closure_1_11(hasOwnProperty, obj6);
  } else {
    const obj7 = { style: null, pointerEvents: "box-none", nativeID: "messages-parent-view", children: null };
    const items7 = [memo, panelStyles];
    obj7.style = items7;
    obj7.children = tmp15Result;
    tmp16Result2 = closure_1_11(_modDef1652.View, obj7);
  }
  items6[1] = tmp16Result2;
  obj5.children = items6;
  return application_id(hasOwnProperty, obj5);
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
        const obj4 = {
          position: tmp4,
          openAt: tmp5,
          closedAt: 0,
          resolveOpenName: resolveHomeDrawerName,
          resolveClosedName: getJankScreenName.getBaseScreenName,
        };
        tmp7 = closure_1_11(JankSlidingSurfaceReporterDefault, obj4);
      }
    }
  }
  items = [tmp7];
  obj3 = isJankScreenReportingEnabled;
  items[1] = closure_1_11(NonCollapsableGestureDetector.NonCollapsableGestureDetector, {
    gesture,
    children: closure_1_11(LeftPanelContent, { panelStyles }),
  });
  obj2.children = items;
  return application_id(useHomeDrawerGesture.HomeDrawerStateContext.Provider, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6 } = get_ActivityIndicator);
const Constants = fn(1072);
({ DM_WIDTH: closure_8, ME: closure_9 } = Constants);
const HOME_DRAWER_SCREEN = fn(18429).HOME_DRAWER_SCREEN;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5142);
let closure_14 = createStyles.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const obj = { fill: { flex: 1 }, sideContainer: null, side: null, sideTablet: null, framedBorder: null };
  const rect = {
    position: "absolute",
    top: 0,
    left,
    bottom: 0,
    right: 0,
    flexDirection: "row",
    borderLeftWidth: null,
    borderTopWidth: null,
    borderColor: null,
    borderTopLeftRadius: null,
  };
  let num = 1;
  if (flag) {
    num = 0;
  }
  rect.borderLeftWidth = num;
  let num2 = 1;
  if (flag) {
    num2 = 0;
  }
  rect.borderTopWidth = num2;
  rect.borderColor = nativeDefault.colors.APP_FRAME_BORDER;
  rect.borderTopLeftRadius = nativeDefault.radii.xl;
  obj.sideContainer = rect;
  const xl = nativeDefault.radii.xl;
  obj.side = { borderTopLeftRadius: flag ? xl : xl - 1, borderTopRightRadius: nativeDefault.radii.none };
  const obj2 = { borderTopLeftRadius: flag ? xl : xl - 1, borderTopRightRadius: nativeDefault.radii.none };
  obj.sideTablet = { borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
  const obj4 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj4.borderLeftWidth = 1;
  obj4.borderTopWidth = 1;
  obj4.borderColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj4.borderTopLeftRadius = nativeDefault.radii.xl;
  obj.framedBorder = obj4;
  return obj;
});
let closure_18 = noop.memo(function LeftMenuTabsInner() {
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  if (MobileHomeDrawerExperiment.useConfig({ location: "gesture" }).enableHome) {
    let tmp2Result = closure_1_11(LeftPanelHomeDrawerContainer, {});
  } else {
    const obj = { style: tmp.fill, children: closure_1_11(LeftPanelContent, {}) };
    tmp2Result = closure_1_11(hasOwnProperty, obj);
  }
  return tmp2Result;
});
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MainChannels.tsx");

export default noop.memo(function MainChannelsRedesignInner() {
  const obj = { profile: StartupProfiler.Profiles.LeftPanel, children: closure_1_11(closure_18, {}) };
  return closure_1_11(StartupProfilerDefault, obj);
});
