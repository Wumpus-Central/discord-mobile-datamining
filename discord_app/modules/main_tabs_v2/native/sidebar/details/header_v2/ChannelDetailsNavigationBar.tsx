// === Module 17307: ChannelDetailsNavigationBar ===

// Module 17307 (ChannelDetailsNavigationBar)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import timing from "timing" /* 4830 */;
import timingPresets from "timingPresets" /* 4833 */;
import _modDef7385 from "module_7385" /* 7385 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8983 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11265 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11950 */;
import useSearchContext from "useSearchContext" /* 12642 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12701 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 4465 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4466 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;

require = fn;
function MuteButton(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore, JoinedThreadsStore, UserGuildSettingsStore];
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
  const navigation = channelId(1484).useNavigation();
  const items1 = [channelId, navigation];
  const callback = noop.useCallback(() => {
    navigation.navigate("sidebar", { screen: constants2.MUTE, channelId, source: "channel-details-navigation-bar" });
  }, items1);
  const obj2 = channelId(1484);
  const token = channelId(4526).useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(4526);
  const tmp5 = navigation;
  const token1 = channelId(4526).useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  const obj5 = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null };
  const intl = channelId(1115).intl;
  obj5.accessibilityLabel = intl.string(channelId(1115).t.w4m945);
  obj5.onPress = callback;
  obj5.variant = token1;
  obj5.size = token;
  obj5.icon = tmp5(stateFromStores ? 10501 : 8297);
  return closure_15(channelId(8269).IconButton, obj5, constants.MUTE);
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
  const items1 = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj = channelId(504);
  const shouldHideChannelContent = channelId(5039).useShouldHideChannelContent(stateFromStores);
  let obj2 = channelId(5039);
  const token = channelId(4526).useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(4526);
  const token1 = channelId(4526).useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  const obj5 = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null, disabled: null };
  const intl = channelId(1115).intl;
  obj5.accessibilityLabel = intl.string(channelId(1115).t["5h0QOP"]);
  obj5.onPress = callback;
  obj5.variant = token1;
  obj5.size = token;
  obj5.icon = _modDef7385;
  obj5.disabled = shouldHideChannelContent;
  return closure_15(channelId(8269).IconButton, obj5, constants.SEARCH);
}
function SettingsButton(channel) {
  channel = channel.channel;
  const navigation = channel(1484).useNavigation();
  const items = [channel, navigation];
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
  const obj = channel(1484);
  const token = channel(4526).useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj2 = channel(4526);
  const token1 = channel(4526).useToken(navigation(576).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  let obj4 = { accessibilityLabel: null, onPress: null, accessibilityRole: "button", variant: null, size: null, icon: null };
  const intl = channel(1115).intl;
  obj4.accessibilityLabel = intl.string(channel(1115).t["3D5yo/"]);
  obj4.onPress = callback;
  obj4.variant = token1;
  obj4.size = token;
  obj4.icon = navigation(7711);
  return closure_15(channel(8269).IconButton, obj4, constants.SETTINGS);
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
  const items = [stateFromStores];
  const items1 = [guild_id];
  stateFromStores = channel(cleanUp[15]).useStateFromStores(items, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  }, items1);
  let obj = channel(cleanUp[15]);
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
      obj1 = { runOnJS: tmp2(tmp3[30]).runOnJS, cleanUp };
      fn.__closure = obj1;
      fn.__workletHash = 17272451769590;
      fn.__initData = closure_26;
      obj.opacity = obj2.withTiming(num, tmp2(tmp3[33]).timingFast, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  let obj2 = channel(cleanUp[30]);
  S.__closure = { isActive: tmp2, withTiming: channel(cleanUp[31]).withTiming, timingFast: channel(cleanUp[33]).timingFast, runOnJS: channel(cleanUp[30]).runOnJS, cleanUp, width };
  S.__workletHash = 15139742229370;
  S.__initData = __initData3;
  const items2 = [channel, stateFromStores];
  const animatedStyle = obj2.useAnimatedStyle(S);
  const memo = noop.useMemo(() => {
    const channelDetailsButtons = ChannelDetailsUtils.getChannelDetailsButtons(channel, stateFromStores);
    return channelDetailsButtons.map((item) => {
      if (constants.SEARCH === item) {
        const obj2 = { channelId: channel.id };
        let tmp3 = closure_2_15(SearchButton, obj2, item);
      } else if (constants.MUTE === item) {
        const obj3 = { channelId: channel.id };
        tmp3 = closure_2_15(MuteButton, obj3, item);
      } else if (constants.SETTINGS === item) {
        const obj = { channel };
        tmp3 = closure_2_15(SettingsButton, obj, item);
      } else if (constants.MORE === item) {
        const obj4 = { channel };
        tmp3 = closure_2_15(width(cleanUp[28]), obj4, item);
      }
      return tmp3;
    });
  }, items2);
  let obj4 = { style: null, children: null };
  const items3 = [tmp.navigationHeader, animatedStyle];
  obj4.style = items3;
  const obj5 = { accessibilityLabel: null, onPress: null, children: null };
  const intl = channel(cleanUp[18]).intl;
  obj5.accessibilityLabel = intl.string(channel(cleanUp[18]).t["13/7kX"]);
  obj5.onPress = onBackPress;
  let obj3 = { isActive: tmp2, withTiming: channel(cleanUp[31]).withTiming, timingFast: channel(cleanUp[33]).timingFast, runOnJS: channel(cleanUp[30]).runOnJS, cleanUp, width };
  obj5.children = closure_15(channel(cleanUp[36]).ArrowLargeLeftIcon, { color: width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT });
  const items4 = [closure_15(channel(cleanUp[35]).PressableOpacity, obj5), closure_15(guild_id, { style: tmp.buttonsContainer, children: memo })];
  obj4.children = items4;
  return closure_16(width(cleanUp[30]).View, obj4);
}
function getItemKey(arg0) {
  return arg0;
}
const View = fn(17).View;
const ChannelDetailsStore = fn(8207);
({ setIsChannelDetailsSearchActive: closure_9, useIsChannelDetailsSearchActive: c10 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(11268);
({ ChannelDetailsButtonTypes: closure_11, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsConstants);
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
let closure_14 = fn(8208).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4829);
let obj = { container: { position: "relative", zIndex: 1, height: fn(12719).SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 }, navigationHeader: null, buttonsContainer: null, searchHeader: null };
let obj3 = { position: "relative", zIndex: 1, height: fn(12719).SEARCH_BAR_HEIGHT, marginTop: nativeDefault.space.PX_8 };
obj.navigationHeader = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: fn(12719).SEARCH_BAR_HEIGHT };
let obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, position: "absolute", height: fn(12719).SEARCH_BAR_HEIGHT };
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
  const tmp2 = transitionState !== width(4535).TransitionStates.YEETED;
  dependencyMap = tmp2;
  const tmp = closure_17();
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
      obj1 = { duration: 200, easing: null };
      Easing = tmp2(tmp3[30]).Easing;
      obj1.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
      fn = function n() { ... };
      obj5 = { runOnJS: tmp2(tmp3[30]).runOnJS, cleanUp };
      fn.__closure = obj5;
      fn.__workletHash = 10411737901360;
      fn.__initData = closure_23;
      obj.opacity = obj2.withTiming(num, obj1, "animate-always", fn);
      obj.width = width;
      return obj;
    }
  }
  let obj = width(4561);
  S.__closure = { isActive: tmp2, withTiming: width(4830).withTiming, Easing: width(4561).Easing, runOnJS: width(4561).runOnJS, cleanUp, width };
  S.__workletHash = 1270940013897;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  let obj3 = { style: null, children: closure_15(cleanUp(17192), { ref, channelId: channel.id, guildId: channel.guild_id, onSuggestionsLayoutMesure: onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, showBackButton: true }) };
  const items = [tmp.searchHeader, animatedStyle];
  obj3.style = items;
  return closure_15(cleanUp(4561).View, obj3);
});
const __initData3 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
const __initData4 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let obj5 = { flex: 1, flexDirection: "row", gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
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
      const obj2 = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
      return __initData(NavigationHeader, obj2, arg0);
    } else if (tmp.SEARCH === arg1) {
      const obj = { ref, channel, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState, width: componentWidth, cleanUp };
      return __initData(closure_24, obj, arg0);
    }
  }, items1);
  obj.children = closure_15(channel(componentWidth[29]).TransitionGroup, { items: memo, getItemKey, renderItem: callback });
  return closure_15(suggestionsDismissed, obj);
}));