// discord_app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx
import importAllResult from "registerAsset";
import { View } from "IconButton";
import initialize from "initialize";
import storeThread from "storeThread";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import useChannelDetailsStore from "useChannelDetailsStore";
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens";
import { ChannelSettingsSections } from "ME";
import { SearchEntrypointAnalyticsLocations as closure_14 } from "SearchEntrypointAnalyticsLocations";
import jsxProd from "useGuildSearchContext";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let unpackModuleId;
const require = arg1;
function MuteButton(channelId) {
  channelId = channelId.channelId;
  let navigation;
  let obj = channelId(589);
  const items = [ensureGuildLoaded, storeThread, updateUserGuildSettingsInternal];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id = outer1_7.getChannel(channelId);
    if (null == id) {
      return tmp;
    } else if (id.isThread()) {
      id = id.id;
      let isMutedResult = outer1_6.isMuted(id);
    } else {
      isMutedResult = outer1_8.isChannelMuted(id.getGuildId(), id.id);
    }
  });
  navigation = channelId(1480).useNavigation();
  const items1 = [channelId, navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.navigate("sidebar", { screen: outer1_12.MUTE, channelId, source: "channel-details-navigation-bar" });
  }, items1);
  const obj2 = channelId(1480);
  const token = channelId(3989).useToken(navigation(712).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(3989);
  const tmp5 = navigation;
  const token1 = channelId(3989).useToken(navigation(712).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t.w4m945);
  obj[1] = callback;
  obj[2] = token1;
  obj[3] = token;
  obj[4] = tmp5(stateFromStores ? 9648 : 7868);
  return closure_15(channelId(7672).IconButton, obj, constants.MUTE);
}
function SearchButton(channelId) {
  channelId = channelId.channelId;
  const items = [channelId];
  const callback = importAllResult.useCallback(() => {
    outer1_9(channelId, true, "action");
    const channel = outer1_7.getChannel(channelId);
    if (null != channel) {
      const guildId = channel.getGuildId();
      let trackSearchOpenedResult = outer1_2;
      const isThreadResult = channel.isThread();
      const channelDetailsSearchContext = channelId(outer1_2[21]).getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      let obj2 = outer1_14;
      const obj4 = channelId(outer1_2[21]);
      obj2 = outer1_1(trackSearchOpenedResult[22]);
      const obj = { searchContext: null, searchLocation: null };
      obj[0] = channelDetailsSearchContext;
      obj[1] = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
      trackSearchOpenedResult = obj2.trackSearchOpened(obj);
      const tmp3 = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
    }
  }, items);
  let obj = channelId(589);
  const items1 = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_7.getChannel(channelId));
  const shouldHideChannelContent = channelId(4498).useShouldHideChannelContent(stateFromStores);
  let obj2 = channelId(4498);
  const token = channelId(3989).useToken(require("../../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  const obj3 = channelId(3989);
  const token1 = channelId(3989).useToken(require("../../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null, disabled: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t["5h0QOP"]);
  obj[1] = callback;
  obj[2] = token1;
  obj[3] = token;
  obj[4] = require("../../../../../../../_runtime/05916_registerAsset.js");
  obj[5] = shouldHideChannelContent;
  return callback2(channelId(7672).IconButton, obj, constants.SEARCH);
}
function SettingsButton(channel) {
  channel = channel.channel;
  let navigation;
  let obj = channel(1480);
  navigation = obj.useNavigation();
  const items = [channel, navigation];
  const callback = importAllResult.useCallback(() => {
    let obj = channel;
    if (null != channel) {
      if (!obj.isDM()) {
        if (!obj.isMultiUserDM()) {
          navigation(outer1_2[26]).init(obj.id);
          obj = { screen: null, channelId: null, source: "channel-details-navigation-bar" };
          obj[0] = outer1_13.OVERVIEW;
          obj[1] = obj.id;
          navigation.navigate("sidebar", obj);
          const obj2 = navigation(outer1_2[26]);
        }
      }
      const result = channel(outer1_2[25]).openChannelLongPressActionSheet(obj.id);
      const obj4 = channel(outer1_2[25]);
    }
  }, items);
  const token = channel(3989).useToken(navigation(712).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
  let obj2 = channel(3989);
  const token1 = channel(3989).useToken(navigation(712).modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
  obj = { accessibilityLabel: null, onPress: null, accessibilityRole: "button", variant: null, size: null, icon: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t["3D5yo/"]);
  obj[1] = callback;
  obj[3] = token1;
  obj[4] = token;
  obj[5] = navigation(5921);
  return callback2(channel(7672).IconButton, obj, constants.SETTINGS);
}
function NavigationHeader(channel) {
  let onBackPress;
  let transitionState;
  channel = channel.channel;
  const width = channel.width;
  const cleanUp = channel.cleanUp;
  let importAllResult;
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
  let obj1 = channel(cleanUp[30]);
  class S {
    constructor() {
      str = "none";
      tmp = c3;
      if (c3) {
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
          outer1_0(outer1_2[30]).runOnJS(closure_2)();
          const obj = outer1_0(outer1_2[30]);
        }
      };
      obj = { runOnJS: null, cleanUp: null };
      obj[0] = tmp2(tmp3[30]).runOnJS;
      obj[1] = cleanUp;
      fn.__closure = obj;
      fn.__workletHash = 17272451769590;
      fn.__initData = outer1_26;
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
      if (outer1_11.SEARCH === arg0) {
        let obj = { channelId: null };
        obj[0] = tmp.id;
        let tmp3 = outer1_15(outer1_20, obj, arg0);
      } else if (tmp2.MUTE === arg0) {
        obj = { channelId: null };
        obj[0] = tmp.id;
        tmp3 = outer1_15(outer1_19, obj, arg0);
      } else if (tmp2.SETTINGS === arg0) {
        obj = { channel: null };
        obj[0] = tmp;
        tmp3 = outer1_15(outer1_21, obj, arg0);
      } else if (tmp2.MORE === arg0) {
        const obj1 = { channel: null };
        obj1[0] = tmp;
        tmp3 = outer1_15(outer1_1(outer1_2[28]), obj1, arg0);
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
  const obj2 = { color: null };
  obj2[0] = width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT;
  obj1[2] = callback2(channel(cleanUp[36]).ArrowLargeLeftIcon, obj2);
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
obj = { position: "relative", zIndex: 1, height: require("SEARCH_BAR_HEIGHT").SEARCH_BAR_HEIGHT, marginTop: require("Themes").space.PX_8 };
obj[0] = obj;
createCacheKey = { flexDirection: "row", alignItems: "center", paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_4, position: "absolute", height: require("SEARCH_BAR_HEIGHT").SEARCH_BAR_HEIGHT };
obj[1] = createCacheKey;
obj[2] = { flex: 1, flexDirection: "row", gap: require("Themes").modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
obj[3] = { position: "absolute" };
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = { BUTTONS: "buttons", SEARCH: "search" };
let closure_22 = { code: "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_23 = { code: "function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let closure_24 = importAllResult.forwardRef((cleanUp, ref) => {
  let channel;
  let onSuggestionsLayoutMeasure;
  let setSuggestionsDismissed;
  let suggestionsDismissed;
  let transitionState;
  let width;
  ({ channel, width } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let dependencyMap;
  ({ onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, transitionState } = cleanUp);
  const tmp2 = transitionState !== width(4629).TransitionStates.YEETED;
  dependencyMap = tmp2;
  let obj = width(4146);
  class S {
    constructor() {
      str = "none";
      tmp = c2;
      if (c2) {
        str = "auto";
      }
      obj = { pointerEvents: str, opacity: null, width: null };
      tmp2 = width;
      tmp3 = c2;
      obj2 = width(c2[31]);
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
      fn.__initData = outer1_23;
      obj[1] = obj2.withTiming(num, obj, "animate-always", fn);
      obj[2] = width;
      return obj;
    }
  }
  obj = { isActive: tmp2, withTiming: width(4286).withTiming, Easing: width(4146).Easing, runOnJS: width(4146).runOnJS, cleanUp, width };
  S.__closure = obj;
  S.__workletHash = 1270940013897;
  S.__initData = closure_22;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items, children: null };
  items = [callback4().searchHeader, animatedStyle];
  obj[1] = callback2(cleanUp(15581), { ref, channelId: channel.id, guildId: channel.guild_id, onSuggestionsLayoutMesure: onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed, showBackButton: true });
  return callback2(cleanUp(4146).View, obj);
});
let closure_25 = { code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}" };
let closure_26 = { code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}" };
let obj2 = { flex: 1, flexDirection: "row", gap: require("Themes").modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP, justifyContent: "flex-end" };
const memoResult = importAllResult.memo(importAllResult.forwardRef((channel) => {
  channel = channel.channel;
  const onBackPress = channel.onBackPress;
  const componentWidth = channel.componentWidth;
  const onSuggestionsLayoutMeasure = channel.onSuggestionsLayoutMeasure;
  const suggestionsDismissed = channel.suggestionsDismissed;
  const setSuggestionsDismissed = channel.setSuggestionsDismissed;
  let storeThread = arg1;
  let c7;
  const tmp2 = callback(channel.id);
  c7 = tmp2;
  let items = [tmp2];
  let items1 = [channel, onBackPress, componentWidth, arg1, onSuggestionsLayoutMeasure, suggestionsDismissed, setSuggestionsDismissed];
  const memo = onSuggestionsLayoutMeasure.useMemo(() => {
    if (c7) {
      const items = [tmp.SEARCH];
      let items1 = items;
    } else {
      items1 = [tmp.BUTTONS];
    }
    return items1;
  }, items);
  let obj = { style: callback4().container, children: null };
  callback = onSuggestionsLayoutMeasure.useCallback((arg0, arg1, arg2, arg3) => {
    if (outer1_18.BUTTONS === arg1) {
      let obj = { channel: null, onBackPress: null, transitionState: null, width: null, cleanUp: null };
      obj[0] = channel;
      obj[1] = onBackPress;
      obj[2] = arg2;
      obj[3] = componentWidth;
      obj[4] = arg3;
      return outer1_15(outer1_27, obj, arg0);
    } else if (tmp.SEARCH === arg1) {
      obj = { ref: null, channel: null, onSuggestionsLayoutMeasure: null, suggestionsDismissed: null, setSuggestionsDismissed: null, transitionState: null, width: null, cleanUp: null };
      obj[0] = storeThread;
      obj[1] = channel;
      obj[2] = onSuggestionsLayoutMeasure;
      obj[3] = suggestionsDismissed;
      obj[4] = setSuggestionsDismissed;
      obj[5] = arg2;
      obj[6] = componentWidth;
      obj[7] = arg3;
      return outer1_15(outer1_24, obj, arg0);
    }
  }, items1);
  obj = { items: memo, getItemKey, renderItem: callback };
  obj[1] = callback2(channel(componentWidth[29]).TransitionGroup, obj);
  return callback2(suggestionsDismissed, obj);
}));
let result = require("initialize").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx");

export default memoResult;