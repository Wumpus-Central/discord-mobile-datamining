// discord_app/components_native/MainChannels.tsx
import ThemesDefault from "../../discord_common/js/packages/tokens/native.tsx";
import MobileHomeDrawerExperiment2 from "../modules/home_drawer/native/HomeDrawerExperiment.tsx";
import setLevels from "../modules/app_startup/StartupProfiler.tsx";
import setLevelsDefault from "../modules/app_startup/StartupProfiler.tsx";
import context from "../modules/home_drawer/native/useHomeDrawerGesture.tsx";
import NonCollapsableGestureDetector from "../modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx";
import closure_3 from "../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../Constants.tsx";
import jsxProd from "../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../design/components/Styles/native/createStyles.tsx";

require = arg1;
function LeftPanelContent(panelStyles) {
  panelStyles = panelStyles.panelStyles;
  let first;
  let isChatBesideChannelList;
  let top;
  const tmp = callback3();
  first = undefined;
  isChatBesideChannelList = undefined;
  let obj = first(top[5]);
  const tmp4 = callback(obj.useGuildsRouteGuildAndChannelId(), 2);
  first = tmp4[0];
  obj1 = importAllResult;
  const ref = importAllResult.useRef(first);
  isChatBesideChannelList = ref;
  let items = [first];
  const effect = importAllResult.useEffect(() => {
    isChatBesideChannelList.current = first;
  }, items);
  let tmp8 = null != first;
  if (tmp8) {
    tmp8 = first !== ME;
  }
  let tmp11 = isChatBesideChannelList(tmp3[6])(ref);
  if (tmp8) {
    tmp11 = first;
  }
  isChatBesideChannelList = tmp10(tmp3[9])().isChatBesideChannelList;
  top = tmp10(tmp3[10])().top;
  const items1 = [tmp, top];
  const items2 = [tmp, isChatBesideChannelList];
  const memo = obj1.useMemo(() => {
    const items = [first.sideContainer, { marginTop: top }];
    return items;
  }, items1);
  const memo1 = obj1.useMemo(() => {
    const items = [first.side];
    let sideTablet = isChatBesideChannelList;
    if (isChatBesideChannelList) {
      sideTablet = first.sideTablet;
    }
    items[1] = sideTablet;
    return items;
  }, items2);
  const sum = DM_WIDTH + tmp10(tmp3[11])();
  let num = 0;
  if (tmp8) {
    num = 1;
  }
  obj = { activeIndex: num, children: null };
  const items3 = [
    callback2(isChatBesideChannelList(top[13]), { style: memo1 }),
    callback2(isChatBesideChannelList(top[14]), { style: memo1, selectedGuildId: tmp11, selectedChannelId: tmp4[1] }),
  ];
  obj[1] = items3;
  const tmp15Result = closure_10(first(top[12]).NativeFreezeScreens, obj);
  const items4 = [absoluteFill.absoluteFill];
  let tmp19;
  if (isChatBesideChannelList) {
    tmp19 = sum;
  }
  obj = { style: items4, children: null };
  items4[1] = { width: tmp19 };
  const items5 = [callback2(first(top[15]).HomePanelContent, {})];
  if (null == panelStyles) {
    obj1 = { style: null, pointerEvents: "box-none", nativeID: "messages-parent-view", children: null };
    obj1[0] = memo;
    obj1[3] = tmp15Result;
    let tmp16Result = tmp16(tmp18, obj1);
  } else {
    const obj2 = { style: null, pointerEvents: "box-none", nativeID: "messages-parent-view", children: null };
    const items6 = [panelStyles, tmp.sideContainer];
    obj2[0] = items6;
    obj2[3] = tmp15Result;
    tmp16Result = tmp16(tmp10(tmp3[16]).View, obj2);
  }
  items5[1] = tmp16Result;
  obj[1] = items5;
  return closure_10(closure_5, obj);
}
function LeftPanelHomeDrawerContainer() {
  let obj = context;
  const homeGesture = obj.useHomeGesture();
  ({ gesture, panelStyles, homeDrawerContext } = homeGesture);
  obj = { value: homeDrawerContext, children: null };
  obj = { gesture, children: callback2(LeftPanelContent, { panelStyles }) };
  obj[1] = callback2(NonCollapsableGestureDetector.NonCollapsableGestureDetector, obj);
  return callback2(context.HomeDrawerStateContext.Provider, obj);
}
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
const DM_WIDTH = ME.DM_WIDTH;
ME = ME.ME;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { fill: { flex: 1 }, sideContainer: null, side: null, sideTablet: null };
obj = {
  position: "absolute",
  top: 0,
  left: DM_WIDTH,
  bottom: 0,
  right: 0,
  flexDirection: "row",
  borderLeftWidth: 1,
  borderTopWidth: 1,
  borderColor: ThemesDefault.colors.APP_FRAME_BORDER,
  borderTopLeftRadius: ThemesDefault.radii.xl,
};
obj[1] = obj;
createCacheKey = { borderTopLeftRadius: ThemesDefault.radii.xl - 1, borderTopRightRadius: ThemesDefault.radii.none };
obj[2] = createCacheKey;
obj[3] = { borderTopRightRadius: ThemesDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_11 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo(function LeftMenuTabsInner() {
  const MobileHomeDrawerExperiment = MobileHomeDrawerExperiment2.MobileHomeDrawerExperiment;
  if (MobileHomeDrawerExperiment.useConfig({ location: "gesture" }).enableHome) {
    let tmp2Result = tmp2(LeftPanelHomeDrawerContainer, {});
  } else {
    const obj = { style: null, children: null };
    obj[0] = tmp.fill;
    obj[1] = tmp2(LeftPanelContent, {});
    tmp2Result = tmp2(closure_5, obj);
  }
  return tmp2Result;
});
let obj2 = { borderTopRightRadius: ThemesDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
const memoResult = importAllResult.memo(function MainChannelsRedesignInner() {
  const obj = { profile: setLevels.Profiles.LeftPanel, children: callback2(closure_14, {}) };
  return callback2(setLevelsDefault, obj);
});
const result = require("set").fileFinishedImporting("components_native/MainChannels.tsx");

export default memoResult;
