// discord_app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _modDef6556 from "../../../../../../../_runtime/metro/06556__.js";
import ChannelSettingsActionCreatorsDefault from "../../../../../../actions/ChannelSettingsActionCreators.tsx";
import openChannelLongPressActionSheet from "../../../../../channel/native/openChannelLongPressActionSheet.tsx";
import ChannelDetailsUtils from "../ChannelDetailsUtils.tsx";
import useSearchContext from "../../../../../search/native/hooks/useSearchContext.tsx";
import search_tracking_TrackingDefault from "../../../../../search/native/tracking/Tracking.tsx";
import ChannelDetailsMoreButtonDefault from "../ChannelDetailsMoreButton.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../../../../lurker_mode/LurkingStore.tsx";
import JoinedThreadsStore from "../../../../../threads/JoinedThreadsStore.tsx";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import UserGuildSettingsStore from "../../../../../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
function getItemKey(arg0) {
  return arg0;
}
const View = fn(17).View;
const ChannelDetailsStore = fn(7522);
({ setIsChannelDetailsSearchActive: closure_9, useIsChannelDetailsSearchActive: c10 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(10666);
({ ChannelDetailsButtonTypes: closure_11, ChannelDetailsNavigatorScreens: closure_12 } = ChannelDetailsConstants);
const ChannelSettingsSections = fn(1085).ChannelSettingsSections;
let closure_14 = fn(7523).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  container: {
    position: "relative",
    zIndex: 1,
    height: fn(12022).SEARCH_BAR_HEIGHT,
    marginTop: nativeDefault.space.PX_8,
  },
  navigationHeader: null,
  buttonsContainer: null,
  searchHeader: null,
};
let obj3 = {
  position: "relative",
  zIndex: 1,
  height: fn(12022).SEARCH_BAR_HEIGHT,
  marginTop: nativeDefault.space.PX_8,
};
obj.navigationHeader = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
  position: "absolute",
  height: fn(12022).SEARCH_BAR_HEIGHT,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
  position: "absolute",
  height: fn(12022).SEARCH_BAR_HEIGHT,
};
obj.buttonsContainer = {
  flex: 1,
  flexDirection: "row",
  gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP,
  justifyContent: "flex-end",
};
obj.searchHeader = { position: "absolute" };
let closure_17 = createStyles.createStyles(obj);
const constants3 = { BUTTONS: "buttons", SEARCH: "search" };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE);
      const token1 = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
      if (cResult[0] === token) {
        if (cResult[1] === token1) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj4 = { size: token, variant: token1 };
      cResult[0] = token;
      cResult[1] = token1;
      cResult[2] = obj4;
      tmp4 = obj4;
    }
  : () => {
      const obj = {
        size: useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE),
        variant: null,
      };
      obj.variant = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT);
      return obj;
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(576).c(12);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, JoinedThreadsStore, UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function s() {
          let id = ChannelStore.getChannel(channelId);
          if (null == id) {
            return tmp;
          } else if (id.isThread()) {
            id = id.id;
            let isMutedResult = JoinedThreadsStore.isMuted(id);
          } else {
            isMutedResult = UserGuildSettingsStore.isChannelMuted(id.getGuildId(), id.id);
          }
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj = channelId(576);
      const stateFromStores = channelId(504).useStateFromStores(first, tmp8);
      const tmpResult = channelId(504);
      const navigation = channelId(1490).useNavigation();
      if (cResult[3] === channelId) {
        if (cResult[4] === navigation) {
          let tmp11 = cResult[5];
        }
        ({ size, variant } = closure_19());
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.w4m945);
          cResult[6] = stringResult;
          let tmp14 = stringResult;
        } else {
          tmp14 = cResult[6];
        }
        const tmp16 = navigation(stateFromStores ? 9827 : 7619);
        if (cResult[7] === tmp11) {
          if (cResult[8] === size) {
            if (cResult[9] === tmp16) {
              if (cResult[10] === variant) {
                let tmp17 = cResult[11];
              }
              return tmp17;
            }
          }
        }
        const obj2 = { accessibilityLabel: tmp14, onPress: tmp11, variant, size, icon: tmp16 };
        const tmp20 = closure_15(tmp(7586).IconButton, obj2, constants.MUTE);
        cResult[7] = tmp11;
        cResult[8] = size;
        cResult[9] = tmp16;
        cResult[10] = variant;
        cResult[11] = tmp20;
        tmp17 = tmp20;
        const tmp13 = closure_19();
      }
      const fn2 = function _() {
        navigation.navigate("sidebar", {
          screen: constants2.MUTE,
          channelId,
          source: "channel-details-navigation-bar",
        });
      };
      cResult[3] = channelId;
      cResult[4] = navigation;
      cResult[5] = fn2;
      tmp11 = fn2;
      const tmpResult2 = channelId(1490);
    }
  : (channelId) => {
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
      const navigation = channelId(1490).useNavigation();
      const items1 = [channelId, navigation];
      const callback = noop.useCallback(() => {
        navigation.navigate("sidebar", {
          screen: constants2.MUTE,
          channelId,
          source: "channel-details-navigation-bar",
        });
      }, items1);
      const obj2 = channelId(1490);
      ({ size, variant } = closure_19());
      const obj3 = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null };
      const intl = channelId(1126).intl;
      obj3.accessibilityLabel = intl.string(channelId(1126).t.w4m945);
      obj3.onPress = callback;
      obj3.variant = variant;
      obj3.size = size;
      obj3.icon = navigation(stateFromStores ? 9827 : 7619);
      return closure_15(channelId(7586).IconButton, obj3, constants.MUTE);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(576).c(11);
      channelId = channelId.channelId;
      if (cResult[0] !== channelId) {
        const fn = function t() {
          options(channelId, true, "action");
          const channel = ChannelStore.getChannel(channelId);
          if (null != channel) {
            const guildId = channel.getGuildId();
            const isThreadResult = channel.isThread();
            const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(
              channelId,
              guildId,
              isThreadResult,
            );
            const obj2 = search_tracking_TrackingDefault;
            const obj = {
              searchContext: channelDetailsSearchContext,
              searchLocation: channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER,
            };
            obj2.trackSearchOpened(obj);
            const tmp3 = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
          }
        };
        cResult[0] = channelId;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[2] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] !== channelId) {
        const fn2 = function u() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[3] = channelId;
        cResult[4] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[4];
      }
      let obj = channelId(576);
      const stateFromStores = channelId(504).useStateFromStores(tmp5, tmp7);
      const tmpResult = channelId(504);
      const shouldHideChannelContent = channelId(5106).useShouldHideChannelContent(stateFromStores);
      const tmpResult2 = channelId(5106);
      ({ size, variant } = closure_19());
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["5h0QOP"]);
        cResult[5] = stringResult;
        let tmp11 = stringResult;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === shouldHideChannelContent) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === size) {
            if (cResult[9] === variant) {
              let tmp13 = cResult[10];
            }
            return tmp13;
          }
        }
      }
      const tmp10 = closure_19();
      const tmp14 = closure_15(
        channelId(7586).IconButton,
        {
          accessibilityLabel: tmp11,
          onPress: tmp4,
          variant,
          size,
          icon: _modDef6556,
          disabled: shouldHideChannelContent,
        },
        constants.SEARCH,
      );
      cResult[6] = shouldHideChannelContent;
      cResult[7] = tmp4;
      cResult[8] = size;
      cResult[9] = variant;
      cResult[10] = tmp14;
      tmp13 = tmp14;
      let obj2 = {
        accessibilityLabel: tmp11,
        onPress: tmp4,
        variant,
        size,
        icon: _modDef6556,
        disabled: shouldHideChannelContent,
      };
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const items = [channelId];
      const callback = noop.useCallback(() => {
        options(channelId, true, "action");
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          const guildId = channel.getGuildId();
          const isThreadResult = channel.isThread();
          const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(
            channelId,
            guildId,
            isThreadResult,
          );
          const obj2 = search_tracking_TrackingDefault;
          const obj = {
            searchContext: channelDetailsSearchContext,
            searchLocation: channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER,
          };
          obj2.trackSearchOpened(obj);
          const tmp3 = channel.isPrivate() ? obj2.INDIVIDUAL_DM : obj2.CHANNEL_DETAILS_HEADER;
        }
      }, items);
      const items1 = [ChannelStore];
      const stateFromStores = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
      let obj = channelId(504);
      const shouldHideChannelContent = channelId(5106).useShouldHideChannelContent(stateFromStores);
      let obj2 = channelId(5106);
      ({ size, variant } = closure_19());
      const obj3 = { accessibilityLabel: null, onPress: null, variant: null, size: null, icon: null, disabled: null };
      const intl = channelId(1126).intl;
      obj3.accessibilityLabel = intl.string(channelId(1126).t["5h0QOP"]);
      obj3.onPress = callback;
      obj3.variant = variant;
      obj3.size = size;
      obj3.icon = _modDef6556;
      obj3.disabled = shouldHideChannelContent;
      return closure_15(channelId(7586).IconButton, obj3, constants.SEARCH);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(8);
      channel = channel.channel;
      const obj = channel(576);
      const navigation = channel(1490).useNavigation();
      if (cResult[0] === channel) {
        if (cResult[1] === navigation) {
          let tmp5 = cResult[2];
        }
        ({ size, variant } = closure_19());
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["3D5yo/"]);
          cResult[3] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          if (cResult[5] === size) {
            if (cResult[6] === variant) {
              let tmp11 = cResult[7];
            }
            return tmp11;
          }
        }
        let obj3 = {
          accessibilityLabel: tmp9,
          onPress: tmp5,
          accessibilityRole: "button",
          variant,
          size,
          icon: navigation(6894),
        };
        const tmp15 = closure_15(tmp(7586).IconButton, obj3, constants.SETTINGS);
        cResult[4] = tmp5;
        cResult[5] = size;
        cResult[6] = variant;
        cResult[7] = tmp15;
        tmp11 = tmp15;
        const tmp7 = closure_19();
      }
      const fn = function t() {
        if (null != channel) {
          if (!channel.isDM()) {
            if (!channel.isMultiUserDM()) {
              ChannelSettingsActionCreatorsDefault.init(channel.id);
              const obj3 = {
                screen: ChannelSettingsSections.OVERVIEW,
                channelId: channel.id,
                source: "channel-details-navigation-bar",
              };
              navigation.navigate("sidebar", obj3);
            }
          }
          const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
        }
      };
      cResult[0] = channel;
      cResult[1] = navigation;
      cResult[2] = fn;
      tmp5 = fn;
      let obj2 = channel(1490);
    }
  : (channel) => {
      channel = channel.channel;
      const navigation = channel(1490).useNavigation();
      const items = [channel, navigation];
      const callback = noop.useCallback(() => {
        if (null != channel) {
          if (!channel.isDM()) {
            if (!channel.isMultiUserDM()) {
              ChannelSettingsActionCreatorsDefault.init(channel.id);
              const obj3 = {
                screen: ChannelSettingsSections.OVERVIEW,
                channelId: channel.id,
                source: "channel-details-navigation-bar",
              };
              navigation.navigate("sidebar", obj3);
            }
          }
          const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
        }
      }, items);
      const obj = channel(1490);
      ({ size, variant } = closure_19());
      let obj2 = {
        accessibilityLabel: null,
        onPress: null,
        accessibilityRole: "button",
        variant: null,
        size: null,
        icon: null,
      };
      const intl = channel(1126).intl;
      obj2.accessibilityLabel = intl.string(channel(1126).t["3D5yo/"]);
      obj2.onPress = callback;
      obj2.variant = variant;
      obj2.size = size;
      obj2.icon = navigation(6894);
      return closure_15(channel(7586).IconButton, obj2, constants.SETTINGS);
    };
const __initData = {
  code: 'function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?"auto":"none",opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1)},"animate-always",function(finished){if(finished){runOnJS(cleanUp)();}}),width:width};}',
};
let closure_24 = {
  code: "function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}",
};
const __initData2 = {
  code: "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}",
};
let closure_26 = {
  code: "function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}",
};
ReactCompilerGating = fn(558);
let closure_27 = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (cleanUp, ref) => {
        const cResult = width(576).c(10);
        ({ channel, width } = cleanUp);
        cleanUp = cleanUp.cleanUp;
        const tmp3 = closure_17();
        const tmp4 = cleanUp.transitionState !== width(4595).TransitionStates.YEETED;
        dependencyMap = tmp4;
        let obj = width(576);
        let fn = function s() {
          let str = "none";
          if (dependencyMap) {
            str = "auto";
          }
          let obj = { pointerEvents: str, opacity: null, width: null };
          let num = 0;
          if (dependencyMap) {
            num = 1;
          }
          const obj3 = { duration: 200, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj3.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
          const fn = function n(arg0) {
            if (arg0) {
              width(dependencyMap[32]).runOnJS(cleanUp)();
              const obj = width(dependencyMap[32]);
            }
          };
          const obj2 = timing;
          fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
          fn.__workletHash = 1906721458806;
          fn.__initData = __initData;
          obj.opacity = obj2.withTiming(num, obj3, "animate-always", fn);
          obj.width = width;
          return obj;
        };
        let obj2 = width(4618);
        fn.__closure = {
          isActive: tmp4,
          withTiming: width(4897).withTiming,
          Easing: width(4618).Easing,
          runOnJS: width(4618).runOnJS,
          cleanUp,
          width,
        };
        fn.__workletHash = 2346374481841;
        fn.__initData = __initData;
        const animatedStyle = obj2.useAnimatedStyle(fn);
        if (cResult[0] === animatedStyle) {
          if (cResult[1] === tmp3.searchHeader) {
            let tmp6 = cResult[2];
          }
          if (cResult[3] === channel.guild_id) {
            if (cResult[4] === channel.id) {
              if (cResult[5] === ref) {
                let tmp8 = cResult[6];
              }
              if (cResult[7] === tmp6) {
                if (cResult[8] === tmp8) {
                  let tmp12 = cResult[9];
                }
                return tmp12;
              }
              const obj5 = { style: tmp6, children: tmp8 };
              const tmp15 = closure_15(cleanUp(4618).View, obj5);
              cResult[7] = tmp6;
              cResult[8] = tmp8;
              cResult[9] = tmp15;
              tmp12 = tmp15;
            }
          }
          const obj8 = { ref, channelId: null, guildId: null, showBackButton: true };
          ({ id: obj4.channelId, guild_id: obj4.guildId } = channel);
          const tmp11 = closure_15(cleanUp(16811), obj8);
          cResult[3] = channel.guild_id;
          cResult[4] = channel.id;
          cResult[5] = ref;
          cResult[6] = tmp11;
          tmp8 = tmp11;
        }
        const items = [tmp3.searchHeader, animatedStyle];
        cResult[0] = animatedStyle;
        cResult[1] = tmp3.searchHeader;
        cResult[2] = items;
        tmp6 = items;
        let obj3 = {
          isActive: tmp4,
          withTiming: width(4897).withTiming,
          Easing: width(4618).Easing,
          runOnJS: width(4618).runOnJS,
          cleanUp,
          width,
        };
      }
    : (cleanUp, ref) => {
        ({ channel, width } = cleanUp);
        cleanUp = cleanUp.cleanUp;
        const tmp2 = cleanUp.transitionState !== width(4595).TransitionStates.YEETED;
        dependencyMap = tmp2;
        const tmp = closure_17();
        let fn = function l() {
          let str = "none";
          if (dependencyMap) {
            str = "auto";
          }
          let obj = { pointerEvents: str, opacity: null, width: null };
          let num = 0;
          if (dependencyMap) {
            num = 1;
          }
          const obj3 = { duration: 200, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj3.easing = Easing.bezier(0.25, 0.1, 0.25, 1);
          const fn = function n(arg0) {
            if (arg0) {
              width(dependencyMap[32]).runOnJS(cleanUp)();
              const obj = width(dependencyMap[32]);
            }
          };
          const obj2 = timing;
          fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
          fn.__workletHash = 17272451769590;
          fn.__initData = __initData;
          obj.opacity = obj2.withTiming(num, obj3, "animate-always", fn);
          obj.width = width;
          return obj;
        };
        let obj = width(4618);
        fn.__closure = {
          isActive: tmp2,
          withTiming: width(4897).withTiming,
          Easing: width(4618).Easing,
          runOnJS: width(4618).runOnJS,
          cleanUp,
          width,
        };
        fn.__workletHash = 14243423616139;
        fn.__initData = __initData2;
        const animatedStyle = obj.useAnimatedStyle(fn);
        let obj3 = {
          style: null,
          children: closure_15(cleanUp(16811), {
            ref,
            channelId: channel.id,
            guildId: channel.guild_id,
            showBackButton: true,
          }),
        };
        const items = [tmp.searchHeader, animatedStyle];
        obj3.style = items;
        return closure_15(cleanUp(4618).View, obj3);
      },
);
const __initData3 = {
  code: 'function ChannelDetailsNavigationBarTsx5(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?"auto":"none",opacity:withTiming(isActive?1:0,timingFast,"animate-always",function(finished){if(finished){runOnJS(cleanUp)();}}),width:width};}',
};
let closure_29 = {
  code: "function ChannelDetailsNavigationBarTsx6(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}",
};
const __initData4 = {
  code: "function ChannelDetailsNavigationBarTsx7(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}",
};
let closure_31 = {
  code: "function ChannelDetailsNavigationBarTsx8(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}",
};
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(cleanUp[15]).c(23);
      channel = channel.channel;
      ({ onBackPress, width } = channel);
      cleanUp = channel.cleanUp;
      const tmp4 = closure_17();
      const tmp5 = channel.transitionState < channel(cleanUp[31]).TransitionStates.YEETED;
      closure_3 = tmp5;
      const guild_id = channel.guild_id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LurkingStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild_id) {
        let fn = function c() {
          let isLurkingResult = null != guild_id;
          if (isLurkingResult) {
            isLurkingResult = LurkingStore.isLurking(tmp);
          }
          return isLurkingResult;
        };
        const items1 = [guild_id];
        cResult[1] = guild_id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      let obj = channel(cleanUp[15]);
      const stateFromStores = channel(cleanUp[17]).useStateFromStores(first, tmp8, tmp9);
      const tmpResult = channel(cleanUp[17]);
      const fn2 = function b() {
        let str = "none";
        if (closure_3) {
          str = "auto";
        }
        let obj = { pointerEvents: str, opacity: null, width: null };
        let num = 0;
        if (closure_3) {
          num = 1;
        }
        const fn = function n(arg0) {
          if (arg0) {
            channel(cleanUp[32]).runOnJS(closure_1_2)();
            const obj = channel(cleanUp[32]);
          }
        };
        const obj2 = timing;
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
        fn.__workletHash = 4666893285618;
        fn.__initData = __initData;
        obj.opacity = obj2.withTiming(num, timingPresets.timingFast, "animate-always", fn);
        obj.width = width;
        return obj;
      };
      const tmpResult3 = channel(cleanUp[32]);
      fn2.__closure = {
        isActive: tmp5,
        withTiming: channel(cleanUp[33]).withTiming,
        timingFast: channel(cleanUp[35]).timingFast,
        runOnJS: channel(cleanUp[32]).runOnJS,
        cleanUp,
        width,
      };
      fn2.__workletHash = 5691901693466;
      fn2.__initData = __initData3;
      const animatedStyle = tmpResult3.useAnimatedStyle(fn2);
      if (cResult[4] === channel) {
        if (cResult[5] === stateFromStores) {
          if (cResult[9] === animatedStyle) {
            if (cResult[10] === tmp4.navigationHeader) {
              let tmp15 = cResult[11];
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[19]).intl;
              const stringResult = intl.string(tmp(tmp2[19]).t["13/7kX"]);
              cResult[12] = stringResult;
              let tmp16 = stringResult;
            } else {
              tmp16 = cResult[12];
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              let obj3 = { color: width(tmp2[13]).colors.INTERACTIVE_TEXT_DEFAULT };
              const tmp21 = closure_15(tmp(tmp2[37]).ArrowLargeLeftIcon, obj3);
              cResult[13] = tmp21;
              let tmp18 = tmp21;
            } else {
              tmp18 = cResult[13];
            }
            if (cResult[14] !== onBackPress) {
              let obj4 = { accessibilityLabel: tmp16, onPress: onBackPress, children: tmp18 };
              const tmp24 = closure_15(tmp(tmp2[38]).PressableOpacity, obj4);
              cResult[14] = onBackPress;
              cResult[15] = tmp24;
              let tmp22 = tmp24;
            } else {
              tmp22 = cResult[15];
            }
            if (cResult[16] === tmp12) {
              if (cResult[17] === tmp4.buttonsContainer) {
                let tmp25 = cResult[18];
              }
              if (cResult[19] === tmp15) {
                if (cResult[20] === tmp22) {
                  if (cResult[21] === tmp25) {
                    let tmp29 = cResult[22];
                  }
                  return tmp29;
                }
              }
              const obj5 = { style: tmp15, children: null };
              const items2 = [tmp22, tmp25];
              obj5.children = items2;
              const tmp32 = closure_16(width(tmp2[32]).View, obj5);
              cResult[19] = tmp15;
              cResult[20] = tmp22;
              cResult[21] = tmp25;
              cResult[22] = tmp32;
              tmp29 = tmp32;
            }
            const obj6 = { style: tmp4.buttonsContainer, children: tmp12 };
            const tmp28 = closure_15(guild_id, obj6);
            cResult[16] = tmp12;
            cResult[17] = tmp4.buttonsContainer;
            cResult[18] = tmp28;
            tmp25 = tmp28;
          }
          const items3 = [tmp4.navigationHeader, animatedStyle];
          cResult[9] = animatedStyle;
          cResult[10] = tmp4.navigationHeader;
          cResult[11] = items3;
          tmp15 = items3;
        }
      }
      if (cResult[7] !== channel) {
        const fn3 = function y(arg0) {
          if (constants.SEARCH === arg0) {
            const obj2 = { channelId: channel.id };
            let tmp3 = closure_2_15(closure_21, obj2, arg0);
          } else if (constants.MUTE === arg0) {
            const obj3 = { channelId: channel.id };
            tmp3 = closure_2_15(closure_20, obj3, arg0);
          } else if (constants.SETTINGS === arg0) {
            const obj = { channel };
            tmp3 = closure_2_15(closure_22, obj, arg0);
          } else if (constants.MORE === arg0) {
            const obj4 = { channel };
            tmp3 = closure_2_15(ChannelDetailsMoreButtonDefault, obj4, arg0);
          }
          return tmp3;
        };
        cResult[7] = channel;
        cResult[8] = fn3;
        let tmp13 = fn3;
      } else {
        tmp13 = cResult[8];
      }
      let obj2 = {
        isActive: tmp5,
        withTiming: channel(cleanUp[33]).withTiming,
        timingFast: channel(cleanUp[35]).timingFast,
        runOnJS: channel(cleanUp[32]).runOnJS,
        cleanUp,
        width,
      };
      const channelDetailsButtons = channel(cleanUp[36]).getChannelDetailsButtons(channel, stateFromStores);
      const mapped = channelDetailsButtons.map(tmp13);
      cResult[4] = channel;
      cResult[5] = stateFromStores;
      cResult[6] = mapped;
      const tmpResult4 = channel(cleanUp[36]);
    }
  : (channel) => {
      channel = channel.channel;
      const width = channel.width;
      const cleanUp = channel.cleanUp;
      let stateFromStores;
      ({ onBackPress, transitionState } = channel);
      const tmp = closure_17();
      const tmp2 = transitionState < channel(cleanUp[31]).TransitionStates.YEETED;
      noop = tmp2;
      const guild_id = channel.guild_id;
      const items = [stateFromStores];
      const items1 = [guild_id];
      stateFromStores = channel(cleanUp[17]).useStateFromStores(
        items,
        () => {
          let isLurkingResult = null != guild_id;
          if (isLurkingResult) {
            isLurkingResult = LurkingStore.isLurking(tmp);
          }
          return isLurkingResult;
        },
        items1,
      );
      let obj = channel(cleanUp[17]);
      let fn = function _() {
        let str = "none";
        if (closure_3) {
          str = "auto";
        }
        let obj = { pointerEvents: str, opacity: null, width: null };
        let num = 0;
        if (closure_3) {
          num = 1;
        }
        const fn = function n(arg0) {
          if (arg0) {
            channel(cleanUp[32]).runOnJS(closure_1_2)();
            const obj = channel(cleanUp[32]);
          }
        };
        const obj2 = timing;
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
        fn.__workletHash = 7047546467450;
        fn.__initData = __initData;
        obj.opacity = obj2.withTiming(num, timingPresets.timingFast, "animate-always", fn);
        obj.width = width;
        return obj;
      };
      let obj2 = channel(cleanUp[32]);
      fn.__closure = {
        isActive: tmp2,
        withTiming: channel(cleanUp[33]).withTiming,
        timingFast: channel(cleanUp[35]).timingFast,
        runOnJS: channel(cleanUp[32]).runOnJS,
        cleanUp,
        width,
      };
      fn.__workletHash = 12379570402558;
      fn.__initData = __initData4;
      const items2 = [channel, stateFromStores];
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const memo = noop.useMemo(() => {
        const channelDetailsButtons = ChannelDetailsUtils.getChannelDetailsButtons(channel, stateFromStores);
        return channelDetailsButtons.map((item) => {
          if (constants.SEARCH === item) {
            const obj2 = { channelId: channel.id };
            let tmp3 = closure_2_15(closure_2_21, obj2, item);
          } else if (constants.MUTE === item) {
            const obj3 = { channelId: channel.id };
            tmp3 = closure_2_15(closure_2_20, obj3, item);
          } else if (constants.SETTINGS === item) {
            const obj = { channel };
            tmp3 = closure_2_15(closure_2_22, obj, item);
          } else if (constants.MORE === item) {
            const obj4 = { channel };
            tmp3 = closure_2_15(width(cleanUp[30]), obj4, item);
          }
          return tmp3;
        });
      }, items2);
      let obj4 = { style: null, children: null };
      const items3 = [tmp.navigationHeader, animatedStyle];
      obj4.style = items3;
      const obj5 = { accessibilityLabel: null, onPress: null, children: null };
      const intl = channel(cleanUp[19]).intl;
      obj5.accessibilityLabel = intl.string(channel(cleanUp[19]).t["13/7kX"]);
      obj5.onPress = onBackPress;
      let obj3 = {
        isActive: tmp2,
        withTiming: channel(cleanUp[33]).withTiming,
        timingFast: channel(cleanUp[35]).timingFast,
        runOnJS: channel(cleanUp[32]).runOnJS,
        cleanUp,
        width,
      };
      obj5.children = closure_15(channel(cleanUp[37]).ArrowLargeLeftIcon, {
        color: width(cleanUp[13]).colors.INTERACTIVE_TEXT_DEFAULT,
      });
      const items4 = [
        closure_15(channel(cleanUp[38]).PressableOpacity, obj5),
        closure_15(guild_id, { style: tmp.buttonsContainer, children: memo }),
      ];
      obj4.children = items4;
      return closure_16(width(cleanUp[32]).View, obj4);
    };
ReactCompilerGating = fn(558);
let obj5 = {
  flex: 1,
  flexDirection: "row",
  gap: nativeDefault.modules.mobile.CHANNEL_DETAILS_NAV_BUTTONS_GAP,
  justifyContent: "flex-end",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx",
);

export default noop.memo(
  noop.forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (channel, ref) => {
          const _require = ref;
          const cResult = require("c").c(13);
          channel = channel.channel;
          onBackPress = channel.onBackPress;
          const componentWidth = channel.componentWidth;
          const tmp4 = closure_17();
          const tmp5 = closure_10(channel.id);
          if (cResult[0] !== tmp5) {
            let items = constants3;
            if (tmp5) {
              items = [];
              items[0] = items.SEARCH;
              let items1 = items;
            } else {
              items1 = [items.BUTTONS];
            }
            cResult[0] = tmp5;
            cResult[1] = items1;
          } else {
            if (cResult[2] === channel) {
              if (cResult[3] === componentWidth) {
                if (cResult[4] === onBackPress) {
                  if (cResult[5] === ref) {
                    let tmp8 = cResult[6];
                  }
                  if (cResult[7] === tmp8) {
                    if (cResult[8] === tmp6) {
                      let tmp9 = cResult[9];
                    }
                    if (cResult[10] === tmp4.container) {
                      if (cResult[11] === tmp9) {
                        let tmp12 = cResult[12];
                      }
                      return tmp12;
                    }
                    class T {
                      constructor(arg0, arg1, arg2, arg3) {
                        if (closure_18.BUTTONS === ref) {
                          tmp7 = jsx;
                          tmp8 = f75705;
                          obj1 = {
                            channel: null,
                            onBackPress: null,
                            transitionState: null,
                            width: null,
                            cleanUp: null,
                          };
                          tmp9 = channel;
                          obj1.channel = channel;
                          tmp10 = onBackPress;
                          obj1.onBackPress = onBackPress;
                          obj1.transitionState = arg2;
                          tmp11 = componentWidth;
                          obj1.width = componentWidth;
                          obj1.cleanUp = arg3;
                          return jsx(f75705, obj1, channel);
                        } else if (tmp.SEARCH === ref) {
                          tmp2 = jsx;
                          tmp3 = closure_27;
                          obj = { ref: null, channel: null, transitionState: null, width: null, cleanUp: null };
                          tmp4 = closure_0;
                          obj.ref = closure_0;
                          tmp5 = channel;
                          obj.channel = channel;
                          obj.transitionState = arg2;
                          tmp6 = componentWidth;
                          obj.width = componentWidth;
                          obj.cleanUp = arg3;
                          return jsx(closure_27, obj, channel);
                        } else {
                          return;
                        }
                      }
                    }
                    let obj2 = { style: tmp4.container, children: tmp9 };
                    const tmp14 = closure_15(View, obj2);
                    cResult[10] = tmp4.container;
                    cResult[11] = tmp9;
                    cResult[12] = tmp14;
                    tmp12 = tmp14;
                  }
                  class T {
                    constructor(arg0, arg1, arg2, arg3) {
                      if (closure_18.BUTTONS === ref) {
                        tmp7 = jsx;
                        tmp8 = f75705;
                        obj1 = { channel: null, onBackPress: null, transitionState: null, width: null, cleanUp: null };
                        tmp9 = channel;
                        obj1.channel = channel;
                        tmp10 = onBackPress;
                        obj1.onBackPress = onBackPress;
                        obj1.transitionState = arg2;
                        tmp11 = componentWidth;
                        obj1.width = componentWidth;
                        obj1.cleanUp = arg3;
                        return jsx(f75705, obj1, channel);
                      } else if (tmp.SEARCH === ref) {
                        tmp2 = jsx;
                        tmp3 = closure_27;
                        obj = { ref: null, channel: null, transitionState: null, width: null, cleanUp: null };
                        tmp4 = closure_0;
                        obj.ref = closure_0;
                        tmp5 = channel;
                        obj.channel = channel;
                        obj.transitionState = arg2;
                        tmp6 = componentWidth;
                        obj.width = componentWidth;
                        obj.cleanUp = arg3;
                        return jsx(closure_27, obj, channel);
                      } else {
                        return;
                      }
                    }
                  }
                  const obj3 = { items: tmp6, getItemKey, renderItem: tmp8 };
                  const tmp11 = closure_15(tmp(tmp2[31]).TransitionGroup, obj3);
                  cResult[7] = tmp8;
                  cResult[8] = tmp6;
                  cResult[9] = tmp11;
                  tmp9 = tmp11;
                }
              }
            }
            class T {
              constructor(arg0, arg1, arg2, arg3) {
                if (closure_18.BUTTONS === ref) {
                  tmp7 = jsx;
                  tmp8 = f75705;
                  obj1 = { channel: null, onBackPress: null, transitionState: null, width: null, cleanUp: null };
                  tmp9 = channel;
                  obj1.channel = channel;
                  tmp10 = onBackPress;
                  obj1.onBackPress = onBackPress;
                  obj1.transitionState = arg2;
                  tmp11 = componentWidth;
                  obj1.width = componentWidth;
                  obj1.cleanUp = arg3;
                  return jsx(f75705, obj1, channel);
                } else if (tmp.SEARCH === ref) {
                  tmp2 = jsx;
                  tmp3 = closure_27;
                  obj = { ref: null, channel: null, transitionState: null, width: null, cleanUp: null };
                  tmp4 = closure_0;
                  obj.ref = closure_0;
                  tmp5 = channel;
                  obj.channel = channel;
                  obj.transitionState = arg2;
                  tmp6 = componentWidth;
                  obj.width = componentWidth;
                  obj.cleanUp = arg3;
                  return jsx(closure_27, obj, channel);
                } else {
                  return;
                }
              }
            }
            cResult[2] = channel;
            cResult[3] = componentWidth;
            cResult[4] = onBackPress;
            cResult[5] = ref;
            cResult[6] = T;
            tmp8 = T;
          }
          let obj = require("c");
          tmp = _require;
          tmp2 = onBackPress;
        }
      : (channel, ref) => {
          channel = channel.channel;
          const onBackPress = channel.onBackPress;
          const componentWidth = channel.componentWidth;
          noop = ref;
          const tmp2 = closure_10(channel.id);
          closure_4 = tmp2;
          let items = [tmp2];
          let items1 = [channel, onBackPress, componentWidth, ref];
          const memo = noop.useMemo(() => {
            if (closure_4) {
              const items = [constants.SEARCH];
              let items1 = items;
            } else {
              items1 = [constants.BUTTONS];
            }
            return items1;
          }, items);
          let obj = { style: closure_17().container, children: null };
          const callback = noop.useCallback((arg0, arg1, transitionState, cleanUp) => {
            if (constants.BUTTONS === arg1) {
              const obj2 = { channel, onBackPress, transitionState, width: componentWidth, cleanUp };
              return closure_2_15(closure_32, obj2, arg0);
            } else if (tmp.SEARCH === arg1) {
              const obj = { ref, channel, transitionState, width: componentWidth, cleanUp };
              return closure_2_15(closure_27, obj, arg0);
            }
          }, items1);
          obj.children = closure_15(channel(componentWidth[31]).TransitionGroup, {
            items: memo,
            getItemKey,
            renderItem: callback,
          });
          return closure_15(closure_4, obj);
        },
  ),
);
