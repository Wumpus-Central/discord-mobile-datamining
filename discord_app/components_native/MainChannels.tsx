// discord_app/components_native/MainChannels.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "MobileHomeDrawerExperiment";
import get_ActivityIndicator from "context";
import ME from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
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
  let obj1 = importAllResult;
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
    const items = [first.side, ];
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
  const items3 = [callback2(isChatBesideChannelList(top[13]), { style: memo1 }), callback2(isChatBesideChannelList(top[14]), { style: memo1, selectedGuildId: tmp11, selectedChannelId: tmp4[1] })];
  obj[1] = items3;
  const tmp15Result = closure_10(first(top[12]).NativeFreezeScreens, obj);
  const items4 = [absoluteFill.absoluteFill, ];
  let tmp19;
  if (isChatBesideChannelList) {
    tmp19 = sum;
  }
  obj = { style: items4, children: null };
  items4[1] = { width: tmp19 };
  const items5 = [callback2(first(top[15]).HomePanelContent, {}), ];
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
  let gesture;
  let homeDrawerContext;
  let panelStyles;
  let obj = require("../modules/home_drawer/native/useHomeDrawerGesture.tsx") /* context */;
  const homeGesture = obj.useHomeGesture();
  ({ gesture, panelStyles, homeDrawerContext } = homeGesture);
  obj = { value: homeDrawerContext, children: null };
  obj = { gesture, children: null };
  obj[1] = callback2(LeftPanelContent, { panelStyles });
  obj[1] = callback2(require("../modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx") /* NonCollapsableGestureDetector */.NonCollapsableGestureDetector, obj);
  return callback2(require("../modules/home_drawer/native/useHomeDrawerGesture.tsx") /* context */.HomeDrawerStateContext.Provider, obj);
}
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
const DM_WIDTH = ME.DM_WIDTH;
ME = ME.ME;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { fill: { flex: 1 }, sideContainer: null, side: null, sideTablet: null };
obj = { position: "absolute", top: 0, left: DM_WIDTH, bottom: 0, right: 0, flexDirection: "row", borderLeftWidth: 1, borderTopWidth: 1, borderColor: require("Themes").colors.APP_FRAME_BORDER, borderTopLeftRadius: require("Themes").radii.xl };
obj[1] = obj;
createCacheKey = { borderTopLeftRadius: require("Themes").radii.xl - 1, borderTopRightRadius: require("Themes").radii.none };
obj[2] = createCacheKey;
obj[3] = { borderTopRightRadius: require("Themes").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_11 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo(function LeftMenuTabsInner() {
  const MobileHomeDrawerExperiment = require("../modules/home_drawer/native/HomeDrawerExperiment.tsx") /* MobileHomeDrawerExperiment */.MobileHomeDrawerExperiment;
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
let obj2 = { borderTopRightRadius: require("Themes").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
const memoResult = importAllResult.memo(function MainChannelsRedesignInner() {
  const obj = { profile: null, children: null };
  obj[0] = require("../modules/app_startup/StartupProfiler.tsx") /* setLevels */.Profiles.LeftPanel;
  obj[1] = callback2(closure_14, {});
  return callback2(require("../modules/app_startup/StartupProfiler.tsx"), obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/MainChannels.tsx");

export default memoResult;