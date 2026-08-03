import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import get_ActivityIndicator from "GuildChannels";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
const DM_WIDTH = ME.DM_WIDTH;
ME = ME.ME;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { sideContainer: null, side: null, sideTablet: null };
obj = { position: "absolute", top: 0, left: DM_WIDTH, bottom: 0, right: 0, flexDirection: "row", borderLeftWidth: 1, borderTopWidth: 1, borderColor: require("Themes").colors.APP_FRAME_BORDER, borderTopLeftRadius: require("Themes").radii.xl };
obj[0] = obj;
createCacheKey = { borderTopLeftRadius: require("Themes").radii.xl - 1, borderTopRightRadius: require("Themes").radii.none };
obj[1] = createCacheKey;
obj[2] = { borderTopRightRadius: require("Themes").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = importAllResult.memo(function LeftMenuTabsInner() {
  let gesture;
  let homeDrawerState;
  let panelStyles;
  const tmp = callback3();
  let first;
  let isChatBesideChannelList;
  let obj = first(14947);
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
  let tmp11 = isChatBesideChannelList(5182)(ref);
  if (tmp8) {
    tmp11 = first;
  }
  isChatBesideChannelList = tmp10(4047)().isChatBesideChannelList;
  const items1 = [tmp, isChatBesideChannelList];
  const memo = obj1.useMemo(() => {
    const items = [first.side, ];
    let sideTablet = isChatBesideChannelList;
    if (isChatBesideChannelList) {
      sideTablet = first.sideTablet;
    }
    items[1] = sideTablet;
    return items;
  }, items1);
  const homeGesture = first(14948).useHomeGesture();
  ({ gesture, panelStyles, homeDrawerState } = homeGesture);
  const sum = DM_WIDTH + tmp10(14953)();
  obj = { value: homeDrawerState, children: null };
  obj = { gesture, children: null };
  const items2 = [absoluteFill.absoluteFill, ];
  let tmp18;
  if (isChatBesideChannelList) {
    tmp18 = sum;
  }
  obj1 = { style: items2, children: null };
  items2[1] = { width: tmp18 };
  const items3 = [closure_9(first(14955).HomePanelContent, {}), ];
  const obj2 = { style: items4, pointerEvents: "box-none", nativeID: "messages-parent-view", children: null };
  items4 = [panelStyles, tmp.sideContainer];
  let num = 0;
  if (tmp8) {
    num = 1;
  }
  const obj3 = { activeIndex: num, children: null };
  const items5 = [closure_9(isChatBesideChannelList(15042), { style: memo }), closure_9(isChatBesideChannelList(15118), { style: memo, selectedGuildId: tmp11, selectedChannelId: tmp4[1] })];
  obj3[1] = items5;
  obj2[3] = closure_10(first(15041).NativeFreezeScreens, obj3);
  items3[1] = closure_9(isChatBesideChannelList(4054).View, obj2);
  obj1[1] = items3;
  obj[1] = closure_10(closure_5, obj1);
  obj[1] = closure_9(first(14954).NonCollapsableGestureDetector, obj);
  return closure_9(first(14948).HomeDrawerStateContext.Provider, obj);
});
let obj2 = { borderTopRightRadius: require("Themes").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
const memoResult = importAllResult.memo(function MainChannelsRedesignInner() {
  const obj = { profile: null, children: null };
  obj[0] = require(10910) /* setLevels */.Profiles.LeftPanel;
  obj[1] = callback2(closure_12, {});
  return callback2(importDefault(10910), obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/MainChannels.tsx");

export default memoResult;