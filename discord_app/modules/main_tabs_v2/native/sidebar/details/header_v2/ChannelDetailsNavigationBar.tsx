// === Module 16159: MuteButton ===

// Module 16159 (MuteButton)
import ThemesDefault from "Themes" /* 712 */;
import registerAssetDefault from "registerAsset" /* 6182 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "initialize" /* 4090 */;
import closure_6 from "storeThread" /* 4091 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "updateUserGuildSettingsInternal" /* 4653 */;
import useChannelDetailsStore from "useChannelDetailsStore" /* 8620 */;
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens" /* 9886 */;
import { ChannelSettingsSections } from "ME" /* 676 */;
import { SearchEntrypointAnalyticsLocations as closure_14 } from "SearchEntrypointAnalyticsLocations" /* 8621 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
function MuteButton(channelId) {
  channelId = channelId.channelId;
  let navigation;
  let obj = channelId(589);
  const items = [closure_7, closure_6, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id = closure_1_7.getChannel(channelId);
    if (null == id) {
      return tmp;
    } else if (id.isThread()) {
      id = id.id;
      let isMutedResult = closure_1_6.isMuted(id);
    } else {
      isMutedResult = closure_1_8.isChannelMuted(id.getGuildId(), id.id);
    }
  });
  navigation = channelId(1500).useNavigation();
  const items1 = [channelId, navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.navigate("sidebar", { screen: closure_1_12.MUTE, channelId, source: "channel-details-navigation-bar" });
  }, items1);
  const obj2 = channelId(1500);
  const token = channelId(4165).useToken(navigation(712).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(4165);
  const tmp5 = navigation;
  const token1 = channelId(4165).useToken(navigation(712).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t.w4m945);
  obj[1] = callback;
  obj[2] = token1;
  obj[3] = token;
  obj[4] = tmp5(stateFromStores ? 9955 : 8276);
  return closure_15(channelId(7963).IconButton, obj, constants.MUTE);
}
function SearchButton(channelId) {
  channelId = channelId.channelId;
  const items = [channelId];
  const callback = importAllResult.useCallback(() => {
    closure_1_9(channelId, true, "action");
    const channel = closure_1_7.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
      let trackSearchOpenedResult = closure_1_2;
      const isThreadResult = channel.isThread();
      const channelDetailsSearchContext = channelId(closure_1_2[21]).getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      let obj2 = closure_1_14;
      const obj4 = channelId(closure_1_2[21]);
      obj2 = closure_1_1(trackSearchOpenedResult[22]);
      const obj = { searchContext: null, searchLocation: null };
      obj[0] = channelDetailsSearchContext;
      obj[1] = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
      trackSearchOpenedResult = obj2.trackSearchOpened(obj);
      const tmp3 = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
    }
  }, items);
  let obj = channelId(589);
  const items1 = [closure_7];
  const stateFromStores = obj.useStateFromStores(items1, () => closure_1_7.getChannel(channelId));
  const shouldHideChannelContent = channelId(4683).useShouldHideChannelContent(stateFromStores);
  let obj2 = channelId(4683);
  const token = channelId(4165).useToken(ThemesDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(4165);
  const token1 = channelId(4165).useToken(ThemesDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null, disabled: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t["5h0QOP"]);
  obj[1] = callback;
  obj[2] = token1;
  obj[3] = token;
  obj[4] = registerAssetDefault;
  obj[5] = shouldHideChannelContent;
  return callback2(channelId(7963).IconButton, obj, constants.SEARCH);
}
function SettingsButton(channel) {
  channel = channel.channel;
  let navigation;
  let obj = channel(1500);
  navigation = obj.useNavigation();
  const items = [channel, navigation];
  const callback = importAllResult.useCallback(() => {
    let obj = channel;
    if (null != channel) {
      if (!obj.isDM()) {
        if (!obj.isMultiUserDM()) {
          navigation(closure_1_2[26]).init(obj.id);
          obj = { screen: null, channelId: null, source: "channel-details-navigation-bar" };
          obj[0] = closure_1_13.OVERVIEW;
          obj[1] = obj.id;
          navigation.navigate("sidebar", obj);
          const obj2 = navigation(closure_1_2[26]);
        }
      }
      const result = channel(closure_1_2[25]).openChannelLongPressActionSheet(obj.id);
      const obj4 = channel(closure_1_2[25]);
    }
  }, items);
  const token = channel(4165).useToken(navigation(712).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj2 = channel(4165);
  const token1 = channel(4165).useToken(navigation(712).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, accessibilityRole: "button", variant: null, size: null, icon: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t["3D5yo/"]);
  obj[1] = callback;
  obj[3] = token1;
  obj[4] = token;
  obj[5] = navigation(6187);
  return callback2(channel(7963).IconButton, obj, constants.SETTINGS);
}
function NavigationHeader(channel) {
  channel = channel.channel;
  const width = channel.width;
  const cleanUp = channel.cleanUp;
  importAllResult = undefined;
  let guild_id;
  let stateFromStores;
  ({ onBackPress, transitionState } = channel);
  const tmp = callback4();
  const tmp2 = transitionState < channel(cleanUp[29]).TransitionStates.YEETED;
  importAllResult = tmp2;
  guild_id = channel.guild_id;
  let obj = channel(cleanUp[15]);
  const items = [stateFromStores];
  const items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = stateFromStores.isLurking(tmp);
    }
    return isLurkingResult;
  }, items1);
  obj1 = channel(cleanUp[30]);
  class S {
    constructor() {
      str = "none";
      tmp = closure_3;
      if (closure_3) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = channel;
      tmp3 = cleanUp;
      obj2 = channel(cleanUp[31]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      fn = function n(arg0) {
        if (arg0) {
          closure_1_0(closure_1_2[30]).runOnJS(closure_2)();
          const obj = closure_1_0(closure_1_2[30]);
        }
      };
      obj = { runOnJS: tmp2(tmp3[30]).runOnJS, cleanUp };
      fn.__closure = obj;
      fn.__workletHash = 17272451769590;
      fn.__initData = closure_1_26;
      obj[1] = obj2.withTiming(num, tmp2(tmp3[33]).timingFast, "animate-always", fn);
      obj[2] = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: channel(cleanUp[31]).withTiming, timingFast: channel(cleanUp[33]).timingFast, runOnJS: channel(cleanUp[30]).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 15139742229370;
  S.__initData = closure_25;
  const items2 = [channel, stateFromStores];
  const animatedStyle = obj1.useAnimatedStyle(S);
  const memo = importAllResult.useMemo(() => {
    const channelDetailsButtons = channel(cleanUp[34]).getChannelDetailsButtons(channel, stateFromStores);
    return channelDetailsButtons.map((arg0) => {
      if (closure_1_11.SEARCH === arg0) {
        let obj = { channelId: null };
        obj[0] = tmp.id;
        let tmp3 = closure_1_15(closure_1_20, obj, arg0);
      } else if (tmp2.MUTE === arg0) {
        obj = { channelId: null };
        obj[0] = tmp.id;
        tmp3 = closure_1_15(closure_1_19, obj, arg0);
      } else if (tmp2.SETTINGS === arg0) {
        obj = { channel: null };
        obj[0] = tmp;
        tmp3 = closure_1_15(closure_1_21, obj, arg0);
      } else if (tmp2.MORE === arg0) {
        obj1 = { channel: null };
        obj1[0] = tmp;
        tmp3 = closure_1_15(closure_1_1(closure_1_2[28]), obj1, arg0);
      }
      return tmp3;
    });
  }, items2);
  obj = { style: items3, children: null };
  items3 = [tmp.navigationHeader, animatedStyle];
  obj1 = { accessibilityLabel: null, onPress: null, children: null };
  const intl = channel(cleanUp[18]).intl;
  obj1[0] = intl.string(channel(cleanUp[18]).t["13/7kX"]);
  obj1[1] = onBackPress;
  obj1[2] = callback2(channel(cleanUp[36]).ArrowLargeLeftIcon, { color: width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT });
  const items4 = [callback2(channel(cleanUp[35]).PressableOpacity, obj1), callback2(guild_id, { style: tmp.buttonsContainer, children: memo })];
  obj[1] = items4;
  return callback3(width(cleanUp[30]).View, obj);
}
function getItemKey(arg0) {
  return arg0;
}
let c3 = importAllResult;
({ setIsChannelDetailsSearchActive: c9, useIsChannelDetailsSearchActive: c10 } = useChannelDetailsStore);
({ ChannelDetailsButtonTypes: unpackModuleId, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsNavigatorScreens);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = { container: null, navigationHeader: null, buttonsContainer: null, searchHeader: null };
obj = { position: "relative", zIndex: 1, height: require("SEARCH_BAR_HEIGHT").SEARCH_BAR_HEIGHT, marginTop: ThemesDefault.space.PX_8 };
obj[0] = obj;
createCacheKey = { flexDirection: "row", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_4, position: "absolute", height: require("SEARCH_BAR_HEIGHT").SEARCH_BAR_HEIGHT };
obj[1] = createCacheKey;
obj[2] = { flex: 1, flexDirection: "row", gap: ThemesDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
obj[3] = { position: "absolute" };
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = { BUTTONS: "buttons", SEARCH: "search" };
let closure_22 = { code: "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_23 = { code: "function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let closure_24 = importAllResult.forwardRef((cleanUp, ref) => {
  ({ channel, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  dependencyMap = undefined;
  ({ onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState } = cleanUp);
  const tmp2 = transitionState !== width(4172).TransitionStates.YEETED;
  dependencyMap = tmp2;
  let obj = width(4184);
  class S {
    constructor() {
      str = "none";
      tmp = closure_2;
      if (closure_2) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = width;
      tmp3 = closure_2;
      obj2 = width(closure_2[31]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj = { duration: 200, easing: null };
      Easing = tmp2(tmp3[30]).Easing;
      obj[1] = Easing.bezier(0.25, 0.1, 0.25, 1);
      fn = function n() { ... };
      obj1 = { runOnJS: tmp2(tmp3[30]).runOnJS, cleanUp };
      fn.__closure = obj1;
      fn.__workletHash = 10411737901360;
      fn.__initData = closure_1_23;
      obj[1] = obj2.withTiming(num, obj, "animate-always", fn);
      obj[2] = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: width(4445).withTiming, Easing: width(4184).Easing, runOnJS: width(4184).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 1270940013897;
  S.__initData = closure_22;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items, children: callback2(cleanUp(16058), obj1) };
  items = [callback4().searchHeader, animatedStyle];
  return callback2(cleanUp(4184).View, obj);
});
let closure_25 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_26 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let obj2 = { flex: 1, flexDirection: "row", gap: ThemesDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
const memoResult = importAllResult.memo(importAllResult.forwardRef((channel) => {
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  const onSuggestionsLayoutMeasure = channel.onSuggestionsLayoutMeasure;
  const suggestionsDismissed = channel.suggestionsDismissed;
  const setSuggestionsDismissed = channel.setSuggestionsDismissed;
  closure_6 = arg1;
  closure_7 = undefined;
  const tmp2 = callback(channel.id);
  closure_7 = tmp2;
  let items = [tmp2];
  let items1 = [channel, onBackPress, componentWidth, arg1, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed];
  const memo = onSuggestionsLayoutMeasure.useMemo(() => {
    if (closure_7) {
      const items = [tmp.SEARCH];
      let items1 = items;
    } else {
      items1 = [tmp.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: callback4().container, children: null };
  callback = onSuggestionsLayoutMeasure.useCallback((arg0, arg1, arg2, arg3) => {
    if (closure_1_18.BUTTONS === arg1) {
      let obj = { channel: null, onBackPress: null, transitionState: null, width: null, cleanUp: null };
      obj[0] = channel;
      obj[1] = onBackPress;
      obj[2] = arg2;
      obj[3] = componentWidth;
      obj[4] = arg3;
      return closure_1_15(closure_1_27, obj, arg0);
    } else if (tmp.SEARCH === arg1) {
      obj = { ref: null, channel: null, onSuggestionsLayoutMeasure: null, suggestionsDismissed: null, setSuggestionsDismissed: null, transitionState: null, width: null, cleanUp: null };
      obj[0] = closure_6;
      obj[1] = channel;
      obj[2] = onSuggestionsLayoutMeasure;
      obj[3] = suggestionsDismissed;
      obj[4] = setSuggestionsDismissed;
      obj[5] = arg2;
      obj[6] = componentWidth;
      obj[7] = arg3;
      return closure_1_15(closure_1_24, obj, arg0);
    }
  }, items1);
  obj = { items: memo, getItemKey, renderItem: callback };
  obj[1] = callback2(channel(componentWidth[29]).TransitionGroup, obj);
  return callback2(suggestionsDismissed, obj);
}));
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default memoResult;