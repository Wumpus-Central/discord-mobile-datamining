// discord_app/modules/video_calls/native/components/ChannelCallNavigator.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import reactDefault from "../../../guild_themes/native/GuildThemeGuildIdOverrideContext.tsx";
import Constants2 from "../../../oauth2/native/Constants.tsx";
import ChannelCallConstants from "../ChannelCallConstants.tsx";
import VoiceChatModalContext from "../../../voice_chat/native/VoiceChatModalContext.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import SafeAreaDisabledStore from "../../../panels/morphable/native/SafeAreaDisabledStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let _require, c0, c3, dependencyMap, state;

let StyleSheet;
let closure_12;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const ReanimatedRexport = tmp(4618);
function MainCallScreen(channel) {
  let SHOW_OAUTH2_MODAL;
  let tmp11;
  let tmp14Result;
  let tmp14Result2;
  channel = channel.channel;
  let isConnectedToVoiceChannel;
  let tmp = closure_14();
  let obj = isConnectedToVoiceChannel(9090);
  isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const id = react.useId();
  const items = [isConnectedToVoiceChannel, id];
  const effect = react.useEffect(() => {
    let key;
    state = SafeAreaDisabledStore.getState();
    let obj = { key: id, lockEnabled: isConnectedToVoiceChannel };
    let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
    return () => {
      state = state.getState();
      const obj = { key, lockEnabled: false };
      const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
    };
  }, items);
  let obj2 = isConnectedToVoiceChannel(5106);
  const isChannelContentGated = obj2.useIsChannelContentGated(channel);
  const effect1 = react.useEffect(() => {
    function dismissOAuthModal() {
      const tmp = c0;
      if (tmp) {
        obj = id(dependencyMap[19]);
        obj.popWithKey(closure_2_11);
        c0 = false;
      }
    }
    function showOAuth2Modal() {
      return obj(...arguments);
    }
    let obj = function _showOAuth2Modal() {
      obj = _asyncToGenerator(async (arg0) => {
        let closure_1;
        let paths;
        let closure_0 = arg0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === paths) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const obj5 = tmp(paths[19]);
                obj5.popWithKey(closure_1_11);
                const pushLazy = tmp(paths[19]).pushLazy;
                const obj4 = { dismissOAuthModal };
                const tmp15 = tmp(paths[19]);
                const tmp17 = closure_0(paths[21])(paths[20], paths.paths);
                const merged = Object.assign(closure_0);
                paths = 1;
                c3 = 1;
                const obj6 = { value: pushLazy(tmp17, obj4, closure_1_11), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c0 = true;
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp6) {
            c3 = 3;
            throw tmp6;
          }
        }
      });
      return obj(...arguments);
    };
    isConnectedToVoiceChannel = false;
    let ComponentDispatch = isConnectedToVoiceChannel(showOAuth2Modal[22]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = isConnectedToVoiceChannel(dependencyMap[22]).ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      const tmp3 = c0;
      if (tmp3) {
        obj = id(dependencyMap[19]);
        obj.popWithKey(closure_2_11);
        c0 = false;
      }
    };
  }, []);
  isConnectedToVoiceChannel(9613);
  if (isChannelContentGated) {
    let obj3 = { onReturnToSafety: id(5099).pop, guildId: null, channelId: null };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    const tmp20 = id(12331);
    tmp14Result2 = closure_12(tmp20, obj3);
    tmp11 = closure_12;
  } else {
    if (!tmp10) {
      if (!channel.isVocalThread()) {
        tmp11 = closure_12;
        let obj4 = { channel };
        tmp14Result2 = closure_12(closure_23, obj4);
      }
    }
    let obj5 = { style: tmp.flex, children: tmp14Result };
    tmp14Result = null;
    if (channel.isGuildStageVoice()) {
      let tmp17 = id;
      const obj7 = { channel };
      tmp14Result = closure_12(id(9192), obj7);
    }
    tmp14Result2 = closure_12(closure_6, obj5);
    tmp11 = closure_12;
  }
  const tmp21 = id(4738)();
  const tmp22 = id(9624);
  const tmp2Result = isConnectedToVoiceChannel(1369);
  const tmp23 = tmp2Result.isAndroid() || !isConnectedToVoiceChannel;
  const obj8 = {
    forceHide: tmp23,
    showWhenParticipantOnScreen: !isConnectedToVoiceChannel,
    children: tmp11(isConnectedToVoiceChannel(4595).ThemeContextProvider, { gradient: tmp21, children: tmp14Result2 }),
  };
  return tmp11(tmp22, obj8);
}
({ View: metroRequire, StyleSheet } = react_native);
const ChannelCallScreens = ChannelCallConstants.ChannelCallScreens;
const ComponentActions = Constants.ComponentActions;
let closure_11 = Constants2.OAUTH2_AUTHORIZE_MODAL_KEY;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  flex: { flex: 1, alignSelf: "stretch" },
  textInVoiceContainer: obj2,
  voiceContainer: obj3,
  textContainer: obj4,
};
obj2 = { right: undefined };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { right: "50%" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { left: "50%" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
const __initData = {
  code: "function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}",
};
const __initData2 = {
  code: 'function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:"black",opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}',
};
const __initData3 = {
  code: "function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}",
};
const __initData4 = {
  code: "function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous){return;}runOnJS(setShouldRenderChat)(true);}",
};
const __initData5 = {
  code: "function ChannelCallNavigatorTsx5(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}",
};
const __initData6 = {
  code: "function ChannelCallNavigatorTsx6(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}",
};
const __initData7 = {
  code: "function ChannelCallNavigatorTsx7(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}",
};
const __initData8 = {
  code: "function ChannelCallNavigatorTsx8(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_2;
      let items;
      let items1;
      let items2;
      let require;
      let tmp11;
      let tmp13;
      let tmp14;
      let translateX;
      let tmp = require;
      let obj = react2;
      const cResult = obj.c(23);
      channel = channel.channel;
      const tmp4 = closure_14();
      const result = 2 * translateX(1484)().width;
      require = result;
      let obj2 = VoiceChatModalContext;
      const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
      translateX = undefined;
      if (voiceChatNavigationContext != null) {
        translateX = voiceChatNavigationContext.translateX;
      }
      const fn = function o() {
        let items;
        let num;
        const obj = { width: require, transform: items };
        if (translateX != null) {
          num = translateX.get();
        }
        if (num == null) {
          num = 0;
        }
        items = [{ translateX: num }];
        return obj;
      };
      fn.__closure = { width: result, translateX };
      fn.__workletHash = 4309613236072;
      fn.__initData = __initData;
      const tmpResult = ReanimatedRexport;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      const fn2 = function c() {
        let items;
        let num;
        const interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        if (translateX != null) {
          num = translateX.get();
        }
        if (num == null) {
          num = 0;
        }
        const obj2 = { backgroundColor: "black", opacity: interpolate(num, items, [0.9, 0]) };
        items = [-require, 0];
        return obj2;
      };
      const tmpResult3 = ReanimatedRexport;
      fn2.__closure = { interpolate: ReanimatedRexport.interpolate, translateX, width: result };
      fn2.__workletHash = 6685006809487;
      fn2.__initData = __initData2;
      ({ interpolate: ReanimatedRexport.interpolate, translateX, width: result });
      const animatedStyle1 = tmpResult3.useAnimatedStyle(fn2);
      if (cResult[0] !== translateX) {
        let num;
        if (translateX != null) {
          num = translateX.get();
        }
        if (num == null) {
          num = 0;
        }
        cResult[0] = translateX;
        cResult[1] = num;
        tmp11 = num;
      } else {
        tmp11 = cResult[1];
      }
      [tmp13, tmp14] = react.useState(tmp11 > 0);
      dependencyMap = tmp14;
      _slicedToArray(react.useState(tmp11 > 0), 2);
      const fn3 = function k() {
        let num;
        const _Math = Math;
        if (translateX != null) {
          num = translateX.get();
        }
        if (num == null) {
          num = 0;
        }
        return abs(num) > 0;
      };
      fn3.__closure = { translateX };
      fn3.__workletHash = 3076815293699;
      fn3.__initData = __initData3;
      const fn4 = function $(arg0, arg1) {
        const tmp = arg0 && arg0 !== arg1;
        if (tmp) {
          const obj = ReanimatedRexport;
          obj.runOnJS(dependencyMap)(true);
        }
      };
      const tmpResult4 = ReanimatedRexport;
      fn4.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShouldRenderChat: tmp14 };
      fn4.__workletHash = 11056363056621;
      fn4.__initData = __initData4;
      ({ runOnJS: ReanimatedRexport.runOnJS, setShouldRenderChat: tmp14 });
      const animatedReaction = tmpResult4.useAnimatedReaction(fn3, fn4);
      if (cResult[2] === animatedStyle) {
        let tmp16;
        let tmp17;
        let tmp20;
        if (cResult[3] === tmp4.textInVoiceContainer) {
          tmp16 = cResult[4];
        }
        if (cResult[5] !== channel) {
          let tmp18 = null;
          if (channel.isGuildStageVoice()) {
            const obj5 = { channel };
            tmp18 = closure_12(tmp5(9192), obj5);
          }
          cResult[5] = channel;
          cResult[6] = tmp18;
          tmp17 = tmp18;
        } else {
          tmp17 = cResult[6];
        }
        if (cResult[7] !== animatedStyle1) {
          const obj6 = { pointerEvents: "box-none", style: items };
          items = [animatedStyle1, StyleSheet.absoluteFill];
          const tmp23 = closure_12(translateX(4618).View, obj6);
          cResult[7] = animatedStyle1;
          cResult[8] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[8];
        }
        if (cResult[9] === tmp4.voiceContainer) {
          if (cResult[10] === tmp17) {
            let tmp24;
            if (cResult[11] === tmp20) {
              tmp24 = cResult[12];
            }
            if (cResult[13] === channel) {
              let tmp28;
              if (cResult[14] === tmp13) {
                tmp28 = cResult[15];
              }
              if (cResult[16] === tmp4.textContainer) {
                let tmp31;
                if (cResult[17] === tmp28) {
                  tmp31 = cResult[18];
                }
                if (cResult[19] === tmp16) {
                  if (cResult[20] === tmp24) {
                    let tmp35;
                    if (cResult[21] === tmp31) {
                      tmp35 = cResult[22];
                    }
                    return tmp35;
                  }
                }
                const obj7 = { style: tmp16, children: items1 };
                items1 = [tmp24, tmp31];
                const tmp37 = closure_13(translateX(4618).View, obj7);
                cResult[19] = tmp16;
                cResult[20] = tmp24;
                cResult[21] = tmp31;
                cResult[22] = tmp37;
                tmp35 = tmp37;
              }
              const obj8 = { style: tmp4.textContainer, children: tmp28 };
              const tmp34 = closure_12(closure_6, obj8);
              cResult[16] = tmp4.textContainer;
              cResult[17] = tmp28;
              cResult[18] = tmp34;
              tmp31 = tmp34;
            }
            let tmp29 = null;
            if (tmp13) {
              const obj9 = { channel };
              tmp29 = closure_12(tmp5(9772), obj9);
            }
            cResult[13] = channel;
            cResult[14] = tmp13;
            cResult[15] = tmp29;
            tmp28 = tmp29;
          }
        }
        const obj10 = { style: tmp4.voiceContainer, children: items2 };
        items2 = [tmp17, tmp20];
        const tmp27 = closure_13(closure_6, obj10);
        cResult[9] = tmp4.voiceContainer;
        cResult[10] = tmp17;
        cResult[11] = tmp20;
        cResult[12] = tmp27;
        tmp24 = tmp27;
      }
      const items3 = [tmp4.textInVoiceContainer, animatedStyle];
      cResult[2] = animatedStyle;
      cResult[3] = tmp4.textInVoiceContainer;
      cResult[4] = items3;
      tmp16 = items3;
    }
  : (channel) => {
      let closure_2;
      let items;
      let items1;
      let items2;
      let items3;
      let tmp19Result;
      let width;
      channel = channel.channel;
      let translateX;
      dependencyMap = undefined;
      let tmp = closure_14();
      const result = 2 * translateX(1484)().width;
      _require = result;
      let obj = require("VoiceChatModalContext");
      const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
      translateX = undefined;
      if (voiceChatNavigationContext != null) {
        translateX = voiceChatNavigationContext.translateX;
      }
      const fn = function o() {
        let items;
        let num;
        const obj = { width, transform: items };
        if (translateX != null) {
          num = translateX.get();
        }
        if (num == null) {
          num = 0;
        }
        items = [{ translateX: num }];
        return obj;
      };
      fn.__closure = { width: result, translateX };
      fn.__workletHash = 6302430761580;
      fn.__initData = __initData5;
      const tmp5Result = require("ReanimatedRexport");
      const animatedStyle = tmp5Result.useAnimatedStyle(fn);
      const fn2 = function c() {
        let items;
        let num;
        const interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        if (translateX != null) {
          num = translateX.get();
        }
        if (num == null) {
          num = 0;
        }
        const obj2 = { backgroundColor: "black", opacity: interpolate(num, items, [0.9, 0]) };
        items = [-c0, 0];
        return obj2;
      };
      const tmp5Result3 = require("ReanimatedRexport");
      let obj2 = { interpolate: tmp5(4618).interpolate, translateX, width: result };
      fn2.__closure = obj2;
      fn2.__workletHash = 16939170329355;
      fn2.__initData = __initData6;
      let num;
      const animatedStyle1 = tmp5Result3.useAnimatedStyle(fn2);
      const useState = react.useState;
      if (translateX != null) {
        num = translateX.get();
      }
      if (num == null) {
        num = 0;
      }
      const tmp11 = _slicedToArray(useState(num > 0), 2);
      dependencyMap = tmp13;
      const first = tmp11[0];
      const fn3 = function h() {
        let num;
        const _Math = Math;
        if (translateX != null) {
          num = translateX.get();
        }
        if (num == null) {
          num = 0;
        }
        return abs(num) > 0;
      };
      fn3.__closure = { translateX };
      fn3.__workletHash = 5069632819207;
      fn3.__initData = __initData7;
      const fn4 = function _(arg0, arg1) {
        const tmp = arg0 && arg0 !== arg1;
        if (tmp) {
          const obj = ReanimatedRexport;
          obj.runOnJS(closure_2)(true);
        }
      };
      const tmp5Result4 = require("ReanimatedRexport");
      fn4.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setShouldRenderChat: tmp11[1] };
      fn4.__workletHash = 2530050428359;
      fn4.__initData = __initData8;
      ({ runOnJS: require("ReanimatedRexport").runOnJS, setShouldRenderChat: tmp11[1] });
      const animatedReaction = tmp5Result4.useAnimatedReaction(fn3, fn4);
      const obj4 = { style: items, children: items3 };
      items = [tmp.textInVoiceContainer, animatedStyle];
      const obj5 = { style: tmp.voiceContainer, children: items1 };
      const View = tmp2(4618).View;
      let tmp17 = null;
      if (channel.isGuildStageVoice()) {
        const obj6 = { channel };
        tmp17 = closure_12(tmp2(9192), obj6);
      }
      items1 = [tmp17];
      const obj7 = { pointerEvents: "box-none", style: items2 };
      items2 = [animatedStyle1, StyleSheet.absoluteFill];
      items1[1] = closure_12(translateX(4618).View, obj7);
      items3 = [closure_13(closure_6, obj5)];
      const obj8 = { style: tmp.textContainer, children: tmp19Result };
      tmp19Result = null;
      if (first) {
        const obj9 = { channel };
        tmp19Result = closure_12(tmp2(9772), obj9);
      }
      items3[1] = closure_12(closure_6, obj8);
      return closure_13(View, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp6;
      let tmp7;
      const obj = channel(576);
      const cResult = obj.c(7);
      const tmp = channel;
      channel = channel.channel;
      let guild_id = channel.guild_id;
      const MAIN_CALL_SCREEN = ChannelCallScreens.MAIN_CALL_SCREEN;
      if (guild_id == null) {
        guild_id = null;
      }
      if (cResult[0] !== channel) {
        const obj2 = {};
        const obj3 = {
          headerShown: false,
          ignoreKeyboard: true,
          gestureEnabled: false,
          title: "",
          render() {
            const obj = { channel };
            return closure_12(MainCallScreen, obj);
          },
        };
        obj2[ChannelCallScreens.MAIN_CALL_SCREEN] = obj3;
        cResult[0] = channel;
        cResult[1] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp6) {
        const obj4 = { screens: tmp6, initialRouteName: MAIN_CALL_SCREEN };
        const tmp9 = closure_12(tmp(6503).Navigator, obj4);
        cResult[2] = tmp6;
        cResult[3] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === guild_id) {
        let tmp10;
        if (cResult[5] === tmp7) {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
      const tmp11 = closure_12(reactDefault.Provider, { value: guild_id, children: tmp7 });
      cResult[4] = guild_id;
      cResult[5] = tmp7;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (channel) => {
      let obj2;
      let obj3;
      channel = channel.channel;
      const MAIN_CALL_SCREEN = ChannelCallScreens.MAIN_CALL_SCREEN;
      let guild_id = channel.guild_id;
      const Provider = reactDefault.Provider;
      if (guild_id == null) {
        guild_id = null;
      }
      let obj = { value: guild_id, children: closure_12(channel(6503).Navigator, obj2) };
      obj2 = { screens: { [ChannelCallScreens.MAIN_CALL_SCREEN]: obj3 }, initialRouteName: MAIN_CALL_SCREEN };
      obj3 = {
        headerShown: false,
        ignoreKeyboard: true,
        gestureEnabled: false,
        title: "",
        render() {
          const obj = { channel };
          return closure_12(MainCallScreen, obj);
        },
      };
      return closure_12(Provider, obj);
    };
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigator.tsx");

export default tmp8;
