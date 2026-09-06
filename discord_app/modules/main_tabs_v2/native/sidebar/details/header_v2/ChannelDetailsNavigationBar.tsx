// discord_app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _modDef7052 from "../../../../../../../_runtime/metro/07052__.js";
import ChannelSettingsActionCreatorsDefault from "../../../../../../actions/ChannelSettingsActionCreators.tsx";
import openChannelLongPressActionSheet from "../../../../../channel/native/openChannelLongPressActionSheet.tsx";
import ChannelDetailsUtils from "../ChannelDetailsUtils.tsx";
import useSearchContext from "../../../../../search/native/hooks/useSearchContext.tsx";
import search_tracking_TrackingDefault from "../../../../../search/native/tracking/Tracking.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../../../../lurker_mode/LurkingStore.tsx";
import JoinedThreadsStore from "../../../../../threads/JoinedThreadsStore.tsx";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import UserGuildSettingsStore from "../../../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
function MuteButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [ChannelStore, JoinedThreadsStore, UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const navigation = channelId(1483).useNavigation();
  const items1 = [channelId, navigation];
  const callback = noop.useCallback(() => {
    navigation.navigate("sidebar", { screen: constants2.MUTE, channelId, source: "channel-details-navigation-bar" });
  }, items1);
  const obj2 = channelId(1483);
  const token = channelId(4262).useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(4262);
  const tmp5 = navigation;
  const token1 = channelId(4262).useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null };
  const intl = channelId(1114).intl;
  obj.accessibilityLabel = intl.string(channelId(1114).t.w4m945);
  obj.onPress = callback;
  obj.variant = token1;
  obj.size = token;
  obj.icon = tmp5(stateFromStores ? 9060 : 7949);
  return closure_15(channelId(8097).IconButton, obj, constants.MUTE);
}
function SearchButton(channelId) {
  channelId = channelId.channelId;
  const items = [channelId];
  const callback = noop.useCallback(() => {
    React7(channelId, true, "action");
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
      const isThreadResult = channel.isThread();
      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const obj2 = search_tracking_TrackingDefault;
      const obj = { searchContext: channelDetailsSearchContext, searchLocation: channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER };
      obj2.trackSearchOpened(obj);
      const tmp3 = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
    }
  }, items);
  let obj = channelId(504);
  const items1 = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const shouldHideChannelContent = channelId(4771).useShouldHideChannelContent(stateFromStores);
  let obj2 = channelId(4771);
  const token = channelId(4262).useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(4262);
  const token1 = channelId(4262).useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null, disabled: null };
  const intl = channelId(1114).intl;
  obj.accessibilityLabel = intl.string(channelId(1114).t["5h0QOP"]);
  obj.onPress = callback;
  obj.variant = token1;
  obj.size = token;
  obj.icon = _modDef7052;
  obj.disabled = shouldHideChannelContent;
  return closure_15(channelId(8097).IconButton, obj, constants.SEARCH);
}
function SettingsButton(channel) {
  channel = channel.channel;
  let obj = channel(1483);
  const navigation = obj.useNavigation();
  const items = [channel, navigation];
  const callback = noop.useCallback(() => {
    let obj = channel;
    if (null != channel) {
      if (!obj.isDM()) {
        if (!obj.isMultiUserDM()) {
          ChannelSettingsActionCreatorsDefault.init(obj.id);
          obj = { screen: ChannelSettingsSections.OVERVIEW, channelId: null, source: "channel-details-navigation-bar" };
          obj.channelId = obj.id;
          navigation.navigate("sidebar", obj);
        }
      }
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(obj.id);
    }
  }, items);
  const token = channel(4262).useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj2 = channel(4262);
  const token1 = channel(4262).useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, accessibilityRole: "button", variant: null, size: null, icon: null };
  const intl = channel(1114).intl;
  obj.accessibilityLabel = intl.string(channel(1114).t["3D5yo/"]);
  obj.onPress = callback;
  obj.variant = token1;
  obj.size = token;
  obj.icon = navigation(7381);
  return closure_15(channel(8097).IconButton, obj, constants.SETTINGS);
}
function NavigationHeader(channel) {
  channel = channel.channel;
  const width = channel.width;
  const cleanUp = channel.cleanUp;
  let stateFromStores;
  ({ onBackPress, transitionState } = channel);
  const tmp = closure_17();
  const tmp2 = transitionState < channel(cleanUp[29]).TransitionStates.YEETED;
  noop = tmp2;
  const guild_id = channel.guild_id;
  let obj = channel(cleanUp[15]);
  const items = [stateFromStores];
  const items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  }, items1);
  let obj1 = channel(cleanUp[30]);
  class S {
    constructor() {
      str = "none";
      tmp = closure_3;
      if (closure_3) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[31]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      fn = function n(arg0) {
        if (arg0) {
          channel(cleanUp[30]).runOnJS(closure_1_2)();
          const obj = channel(cleanUp[30]);
        }
      };
      obj = { runOnJS: tmp2(tmp3[30]).runOnJS, cleanUp };
      fn.__closure = obj;
      fn.__workletHash = 17272451769590;
      fn.__initData = closure_26;
      obj.opacity = obj2.withTiming(num, tmp2(tmp3[33]).timingFast, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: channel(cleanUp[31]).withTiming, timingFast: channel(cleanUp[33]).timingFast, runOnJS: channel(cleanUp[30]).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 15139742229370;
  S.__initData = __initData3;
  const items2 = [channel, stateFromStores];
  const animatedStyle = obj1.useAnimatedStyle(S);
  const memo = noop.useMemo(() => {
    const channelDetailsButtons = ChannelDetailsUtils.getChannelDetailsButtons(channel, stateFromStores);
    return channelDetailsButtons.map((item) => {
      if (constants.SEARCH === item) {
        let obj = { channelId: channel.id };
        let tmp3 = closure_2_15(SearchButton, obj, item);
      } else if (constants.MUTE === item) {
        obj = { channelId: channel.id };
        tmp3 = closure_2_15(MuteButton, obj, item);
      } else if (constants.SETTINGS === item) {
        obj = { channel };
        tmp3 = closure_2_15(SettingsButton, obj, item);
      } else if (constants.MORE === item) {
        const obj1 = { channel };
        tmp3 = closure_2_15(width(cleanUp[28]), obj1, item);
      }
      return tmp3;
    });
  }, items2);
  obj = { style: null, children: null };
  const items3 = [tmp.navigationHeader, animatedStyle];
  obj.style = items3;
  obj1 = { accessibilityLabel: null, onPress: null, children: null };
  const intl = channel(cleanUp[18]).intl;
  obj1.accessibilityLabel = intl.string(channel(cleanUp[18]).t["13/7kX"]);
  obj1.onPress = onBackPress;
  obj1.children = closure_15(channel(cleanUp[36]).ArrowLargeLeftIcon, { color: width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT });
  const items4 = [closure_15(channel(cleanUp[35]).PressableOpacity, obj1), closure_15(guild_id, { style: tmp.buttonsContainer, children: memo })];
  obj.children = items4;
  return closure_16(width(cleanUp[30]).View, obj);
}
function getItemKey(arg0) {
  return arg0;
}
const View = fn(17).View;
const ChannelDetailsStore = fn(7876);
({ setIsChannelDetailsSearchActive: closure_9, useIsChannelDetailsSearchActive: c10 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(10916);
({ ChannelDetailsButtonTypes: closure_11, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsConstants);
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
let closure_14 = fn(7877).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
fn(4560);
let obj = { container: null, navigationHeader: null, buttonsContainer: null, searchHeader: null };
obj = { position: "relative", zIndex: 1, height: fn(12370).SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 };
obj.container = obj;
const createStyles = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: fn(12370).SEARCH_BAR_HEIGHT };
obj.navigationHeader = createStyles;
obj.buttonsContainer = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
obj.searchHeader = { position: "absolute" };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { BUTTONS: "buttons", SEARCH: "search" };
const __initData = { code: "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
const __initData2 = { code: "function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let closure_24 = noop.forwardRef((cleanUp, ref) => {
  ({ channel, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  ({ onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState } = cleanUp);
  const tmp2 = transitionState !== width(4271).TransitionStates.YEETED;
  dependencyMap = tmp2;
  let obj = width(4296);
  class S {
    constructor() {
      str = "none";
      tmp = closure_2;
      if (closure_2) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[31]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj = { duration: 200, easing: null };
      Easing = tmp2(tmp3[30]).Easing;
      obj.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      fn = function n() { ... };
      obj1 = { runOnJS: tmp2(tmp3[30]).runOnJS, cleanUp };
      fn.__closure = obj1;
      fn.__workletHash = 10411737901360;
      fn.__initData = closure_23;
      obj.opacity = obj2.withTiming(num, obj, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: width(4561).withTiming, Easing: width(4296).Easing, runOnJS: width(4296).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 1270940013897;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: null, children: null };
  const items = [closure_17().searchHeader, animatedStyle];
  obj.style = items;
  obj.children = closure_15(cleanUp(16626), { ref, channelId: channel.id, guildId: channel.guild_id, onSuggestionsLayoutMesure: onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, showBackButton: true });
  return closure_15(cleanUp(4296).View, obj);
});
const __initData3 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
const __initData4 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let obj2 = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default noop.memo(noop.forwardRef((channel, ref) => {
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  const onSuggestionsLayoutMeasure = channel.onSuggestionsLayoutMeasure;
  const suggestionsDismissed = channel.suggestionsDismissed;
  const setSuggestionsDismissed = channel.setSuggestionsDismissed;
  const tmp2 = closure_10(channel.id);
  closure_7 = tmp2;
  let items = [tmp2];
  let items1 = [channel, onBackPress, componentWidth, ref, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed];
  const memo = onSuggestionsLayoutMeasure.useMemo(() => {
    if (closure_7) {
      const items = [constants.SEARCH];
      let items1 = items;
    } else {
      items1 = [constants.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: closure_17().container, children: null };
  const callback = onSuggestionsLayoutMeasure.useCallback((arg0, arg1, transitionState, cleanUp) => {
    if (constants.BUTTONS === arg1) {
      let obj = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return __initData(NavigationHeader, obj, arg0);
    } else if (tmp.SEARCH === arg1) {
      obj = { ref, channel, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState, width: componentWidth, cleanUp };
      return __initData(closure_24, obj, arg0);
    }
  }, items1);
  obj = { items: memo, getItemKey, renderItem: callback };
  obj.children = closure_15(channel(componentWidth[29]).TransitionGroup, obj);
  return closure_15(suggestionsDismissed, obj);
}));