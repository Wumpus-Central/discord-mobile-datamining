// === Module 19385: ChannelDetailsNavigationBar ===

// Module 19385 (ChannelDetailsNavigationBar)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5314 */;
import timing_timing from "timing/timing" /* 5485 */;
import _modDef7761 from "module_7761" /* 7761 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10831 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10856 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 12471 */;
import useSearchContext from "useSearchContext" /* 14587 */;
import TrackingDefault from "Tracking" /* 14652 */;
import ChannelDetailsSearchBarDefault from "ChannelDetailsSearchBar" /* 19258 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 5176 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 5177 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6895 */;

const _modDef1652 = _mod1652;

require = fn;
function MuteButton(channelId) {
  channelId = channelId.channelId;
  items = [ChannelStore, JoinedThreadsStore, UserGuildSettingsStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let id = ChannelStore.getChannel(channelId);
    if (null == id) {
      return tmp;
    } else if (id.isThread()) {
      id = id.id;
      let isMutedResult = JoinedThreadsStore.isMuted(id);
    } else {
      isMutedResult = UserGuildSettingsStore.isChannelMuted(id.getGuildId(), id.id);
    }
  });
  const obj = channelId(504);
  const navigation = channelId(1499).useNavigation();
  const items1 = [channelId, navigation];
  const callback = noop.useCallback(() => {
    navigation.navigate("sidebar", { screen: constants2.MUTE, channelId, source: "channel-details-navigation-bar" });
  }, items1);
  const obj2 = channelId(1499);
  const token = channelId(5839).useToken(navigation(575).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(5839);
  const tmp5 = navigation;
  const token1 = channelId(5839).useToken(navigation(575).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  const obj5 = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null };
  const intl = channelId(1113).intl;
  obj5.accessibilityLabel = intl.string(channelId(1113).t.w4m945);
  obj5.onPress = callback;
  obj5.variant = token1;
  obj5.size = token;
  obj5.icon = tmp5(stateFromStores ? 10932 : 9107);
  return closure_15(channelId(7922).IconButton, obj5, constants.MUTE);
}
function SearchButton(channelId) {
  channelId = channelId.channelId;
  items = [channelId];
  const callback = noop.useCallback(() => {
    React6(channelId, true, "action");
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
      const isThreadResult = channel.isThread();
      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const obj2 = TrackingDefault;
      const obj = { searchContext: channelDetailsSearchContext, searchLocation: channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER };
      obj2.trackSearchOpened(obj);
      const tmp3 = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
    }
  }, items);
  const items1 = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj = channelId(504);
  const shouldHideChannelContent = channelId(6775).useShouldHideChannelContent(stateFromStores);
  let obj2 = channelId(6775);
  const token = channelId(5839).useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(5839);
  const token1 = channelId(5839).useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  const obj5 = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null, disabled: null };
  const intl = channelId(1113).intl;
  obj5.accessibilityLabel = intl.string(channelId(1113).t["5h0QOP"]);
  obj5.onPress = callback;
  obj5.variant = token1;
  obj5.size = token;
  obj5.icon = _modDef7761;
  obj5.disabled = shouldHideChannelContent;
  return closure_15(channelId(7922).IconButton, obj5, constants.SEARCH);
}
function SettingsButton(channel) {
  channel = channel.channel;
  const navigation = channel(1499).useNavigation();
  items = [channel, navigation];
  const callback = noop.useCallback(() => {
    if (null != channel) {
      if (!channel.isDM()) {
        if (!channel.isMultiUserDM()) {
          ChannelSettingsActionCreatorsDefault.init(channel.id);
          const obj3 = { screen: ChannelSettingsSections.OVERVIEW, channelId: channel.id, source: "channel-details-navigation-bar" };
          navigation.navigate("sidebar", obj3);
        }
      }
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
    }
  }, items);
  const obj = channel(1499);
  const token = channel(5839).useToken(navigation(575).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj2 = channel(5839);
  const token1 = channel(5839).useToken(navigation(575).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  let obj4 = { accessibilityLabel: null, onPress: null, accessibilityRole: "button", variant: null, size: null, icon: null };
  const intl = channel(1113).intl;
  obj4.accessibilityLabel = intl.string(channel(1113).t["3D5yo/"]);
  obj4.onPress = callback;
  obj4.variant = token1;
  obj4.size = token;
  obj4.icon = navigation(10503);
  return closure_15(channel(7922).IconButton, obj4, constants.SETTINGS);
}
function SearchBar(channel) {
  channel = channel.channel;
  ({ transitionState, width, cleanUp, ref } = channel);
  const tmp = closure_17();
  items = [closure_23, transitionState !== native.TransitionStates.YEETED, timing_timing.withTiming, _mod1652.Easing, closure_22, _mod1705.scheduleOnRN, cleanUp, width];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class ChannelDetailsNavigationBarTsx2 {
    constructor() {
      str = "none";
      tmp = closure_0;
      if (closure_0) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      num = 0;
      tmp2 = closure_1;
      if (tmp) {
        num = 1;
      }
      obj1 = { duration: 200, easing: closure_2.bezier(0.25, 0.1, 0.25, 1) };
      items = [, , ];
      items[0] = closure_3;
      items[1] = closure_4;
      items[2] = closure_5;
      closure_0 = undefined;
      closure_1 = undefined;
      [tmp3, tmp4, tmp5] = items;
      class ChannelDetailsNavigationBarTsx1 {
        constructor(arg0) {
          if (channel) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      items1 = [, ];
      items1[0] = tmp4;
      items1[1] = tmp5;
      ChannelDetailsNavigationBarTsx1.__closure = items1;
      ChannelDetailsNavigationBarTsx1.__workletHash = 1231697703371;
      ChannelDetailsNavigationBarTsx1.__initData = tmp3;
      obj.opacity = tmp2(num, obj1, "animate-always", ChannelDetailsNavigationBarTsx1);
      obj.width = closure_6;
      return obj;
    }
  }
  let items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  ChannelDetailsNavigationBarTsx2.__closure = items1;
  ChannelDetailsNavigationBarTsx2.__workletHash = 15404870983083;
  ChannelDetailsNavigationBarTsx2.__initData = tmp3;
  const animatedStyle = _mod1652.useAnimatedStyle(ChannelDetailsNavigationBarTsx2);
  const obj2 = { style: null, children: colors(ChannelDetailsSearchBarDefault, { ref, channelId: channel.id, guildId: channel.guild_id, showBackButton: true }) };
  const items2 = [tmp.searchHeader, animatedStyle];
  obj2.style = items2;
  return colors(_modDef1652.View, obj2);
}
function NavigationHeader(channel) {
  channel = channel.channel;
  _require = channel;
  ({ onBackPress, transitionState, width, cleanUp } = channel);
  const tmp = closure_17();
  const guild_id = channel.guild_id;
  const tmp4 = transitionState < require("native").TransitionStates.YEETED;
  items = [c5];
  let items1 = [guild_id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let isLurkingResult = null != c1;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  }, items1);
  let obj = require("initialize");
  const items2 = [closure_26, tmp4, require("timing/timing").withTiming, require("timingPresets").timingFast, closure_25, require("module_1705").scheduleOnRN, cleanUp, width];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items2;
  class ChannelDetailsNavigationBarTsx4 {
    constructor() {
      str = "none";
      tmp = closure_0;
      if (closure_0) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      num = 0;
      tmp2 = closure_1;
      if (tmp) {
        num = 1;
      }
      tmp3 = closure_2;
      items = [, , ];
      items[0] = closure_3;
      items[1] = closure_4;
      items[2] = closure_5;
      [tmp4, tmp5, tmp6] = items;
      class ChannelDetailsNavigationBarTsx3 {
        constructor(arg0) {
          if (channel) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      items1 = [, ];
      items1[0] = tmp5;
      items1[1] = tmp6;
      ChannelDetailsNavigationBarTsx3.__closure = items1;
      ChannelDetailsNavigationBarTsx3.__workletHash = 12987339612745;
      ChannelDetailsNavigationBarTsx3.__initData = tmp4;
      obj.opacity = tmp2(num, tmp3, "animate-always", ChannelDetailsNavigationBarTsx3);
      obj.width = closure_6;
      return obj;
    }
  }
  const items3 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  ChannelDetailsNavigationBarTsx4.__closure = items3;
  ChannelDetailsNavigationBarTsx4.__workletHash = 4229809886411;
  ChannelDetailsNavigationBarTsx4.__initData = tmp6;
  const items4 = [channel, stateFromStores];
  const animatedStyle = require("module_1652").useAnimatedStyle(ChannelDetailsNavigationBarTsx4);
  const memo = noop.useMemo(() => {
    const channelDetailsButtons = ChannelDetailsUtils.getChannelDetailsButtons(c0, c2);
    return channelDetailsButtons.map((item) => {
      if (constants.SEARCH === item) {
        const obj2 = { channelId: _undefined.id };
        let tmp3 = closure_2_15(SearchButton, obj2, item);
      } else if (constants.MUTE === item) {
        const obj3 = { channelId: _undefined.id };
        tmp3 = closure_2_15(MuteButton, obj3, item);
      } else if (constants.SETTINGS === item) {
        const obj = { channel: _undefined };
        tmp3 = closure_2_15(SettingsButton, obj, item);
      } else if (constants.MORE === item) {
        const obj4 = { channel: _undefined };
        tmp3 = closure_2_15(c1(c2[28]), obj4, item);
      }
      return tmp3;
    });
  }, items4);
  let obj3 = { style: null, children: null };
  const items5 = [tmp.navigationHeader, animatedStyle];
  obj3.style = items5;
  let obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl = tmp2(1113).intl;
  obj4.accessibilityLabel = intl.string(require("util").t["13/7kX"]);
  obj4.onPress = onBackPress;
  obj4.style = tmp.backButton;
  let obj2 = require("module_1652");
  obj4.children = closure_15(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  const items6 = [closure_15(require("Pressables").PressableOpacity, obj4), closure_15(c4, { style: tmp.buttonsContainer, children: memo })];
  obj3.children = items6;
  return closure_16(_modDef1652.View, obj3);
}
function getItemKey(arg0) {
  return arg0;
}
const View = fn(17).View;
const ChannelDetailsStore = fn(8998);
({ setIsChannelDetailsSearchActive: closure_9, useIsChannelDetailsSearchActive: closure_10 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(10834);
({ ChannelDetailsButtonTypes: closure_11, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsConstants);
const ChannelSettingsSections = fn(1072).ChannelSettingsSections;
let closure_14 = fn(8999).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5243);
let obj = { container: { position: "relative", zIndex: 1, height: fn(14671).SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 }, navigationHeader: null, backButton: null, buttonsContainer: null, searchHeader: null };
let obj3 = { position: "relative", zIndex: 1, height: fn(14671).SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 };
obj.navigationHeader = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: fn(14671).SEARCH_BAR_HEIGHT };
obj.backButton = { alignSelf: "stretch", justifyContent: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: fn(14671).SEARCH_BAR_HEIGHT };
obj.buttonsContainer = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
obj.searchHeader = { position: "absolute" };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { BUTTONS: "buttons", SEARCH: "search" };
let closure_22 = { code: "(function ChannelDetailsNavigationBarTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished)scheduleOnRN(cleanUp);})" };
let closure_23 = { code: "(function ChannelDetailsNavigationBarTsx2(){let[isActive,withTiming,Easing,_worklet_1231697703371_init_data,scheduleOnRN,cleanUp,width]=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function ChannelDetailsNavigationBarTsx1Factory([_worklet_1231697703371_init_data,scheduleOnRN,cleanUp]){const ChannelDetailsNavigationBarTsx1=function(finished){if(finished)scheduleOnRN(cleanUp);};ChannelDetailsNavigationBarTsx1.__closure=[scheduleOnRN,cleanUp];ChannelDetailsNavigationBarTsx1.__workletHash=1231697703371;ChannelDetailsNavigationBarTsx1.__initData=_worklet_1231697703371_init_data;return ChannelDetailsNavigationBarTsx1;}([_worklet_1231697703371_init_data,scheduleOnRN,cleanUp])),width:width};})" };
let closure_25 = { code: "(function ChannelDetailsNavigationBarTsx3(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished)scheduleOnRN(cleanUp);})" };
let closure_26 = { code: "(function ChannelDetailsNavigationBarTsx4(){let[isActive,withTiming,timingFast,_worklet_12987339612745_init_data,scheduleOnRN,cleanUp,width]=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function ChannelDetailsNavigationBarTsx3Factory([_worklet_12987339612745_init_data,scheduleOnRN,cleanUp]){const ChannelDetailsNavigationBarTsx3=function(finished){if(finished)scheduleOnRN(cleanUp);};ChannelDetailsNavigationBarTsx3.__closure=[scheduleOnRN,cleanUp];ChannelDetailsNavigationBarTsx3.__workletHash=12987339612745;ChannelDetailsNavigationBarTsx3.__initData=_worklet_12987339612745_init_data;return ChannelDetailsNavigationBarTsx3;}([_worklet_12987339612745_init_data,scheduleOnRN,cleanUp])),width:width};})" };
let obj5 = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default noop.memo(function NavigationHeaderWithSearchWrapped(channel) {
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  const ref = channel.ref;
  const tmp2 = closure_10(channel.id);
  closure_4 = tmp2;
  items = [tmp2];
  let items1 = [channel, onBackPress, componentWidth, ref];
  const memo = ref.useMemo(() => {
    if (closure_4) {
      items = [constants.SEARCH];
      let items1 = items;
    } else {
      items1 = [constants.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: closure_17().container, children: null };
  const callback = ref.useCallback((arg0, arg1, transitionState, cleanUp) => {
    if (constants.BUTTONS === arg1) {
      const obj2 = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return colors(NavigationHeader, obj2, arg0);
    } else if (tmp.SEARCH === arg1) {
      const obj = { ref, channel, transitionState, width: componentWidth, cleanUp };
      return colors(SearchBar, obj, arg0);
    }
  }, items1);
  obj.children = closure_15(channel(componentWidth[29]).TransitionGroup, { items: memo, getItemKey, renderItem: callback });
  return closure_15(closure_4, obj);
});