// === Module 9744: ChannelCallNavigator ===

// Module 9744 (ChannelCallNavigator)
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 4639 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 9745 */;

require = fn;
function CallWithVoiceChat(channel) {
  channel = channel.channel;
  let translateX;
  dependencyMap = undefined;
  let tmp = closure_14();
  const result = 2 * translateX(1478)().width;
  _require = result;
  const voiceChatNavigationContext = require("VoiceChatModalContext").useVoiceChatNavigationContext();
  translateX = undefined;
  if (voiceChatNavigationContext != null) {
    translateX = voiceChatNavigationContext.translateX;
  }
  let obj = require("VoiceChatModalContext");
  const fn = function o() {
    const obj = { width, transform: null };
    let num;
    if (translateX != null) {
      num = translateX.get();
    }
    if (num == null) {
      num = 0;
    }
    const items = [{ translateX: num }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { width: result, translateX };
  fn.__workletHash = 4309613236072;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const tmp5Result = require("ReanimatedRexport");
  const fn2 = function c() {
    let num;
    if (translateX != null) {
      num = translateX.get();
    }
    if (num == null) {
      num = 0;
    }
    const obj3 = { backgroundColor: "black", opacity: null };
    const items = [-c0, 0];
    obj3.opacity = ReanimatedRexport.interpolate(num, items, [0.9, 0]);
    return obj3;
  };
  const tmp5Result3 = require("ReanimatedRexport");
  fn2.__closure = { interpolate: require("ReanimatedRexport").interpolate, translateX, width: result };
  fn2.__workletHash = 1339801810447;
  fn2.__initData = __initData2;
  let num;
  const animatedStyle1 = tmp5Result3.useAnimatedStyle(fn2);
  if (translateX != null) {
    num = translateX.get();
  }
  if (num == null) {
    num = 0;
  }
  const tmp11 = _slicedToArray(noop.useState(num > 0), 2);
  dependencyMap = tmp12;
  const obj2 = { interpolate: require("ReanimatedRexport").interpolate, translateX, width: result };
  const fn3 = function _() {
    let num;
    if (translateX != null) {
      num = translateX.get();
    }
    if (num == null) {
      num = 0;
    }
    return Math.abs(num) > 0;
  };
  fn3.__closure = { translateX };
  fn3.__workletHash = 3076815293699;
  fn3.__initData = __initData3;
  const fn4 = function h(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(closure_2)(true);
    }
  };
  const tmp5Result4 = require("ReanimatedRexport");
  fn4.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setShouldRenderChat: tmp11[1] };
  fn4.__workletHash = 661145094859;
  fn4.__initData = __initData4;
  const animatedReaction = tmp5Result4.useAnimatedReaction(fn3, fn4);
  const obj4 = { style: null, children: null };
  let items = [tmp.textInVoiceContainer, animatedStyle];
  obj4.style = items;
  const obj5 = { style: tmp.voiceContainer, children: null };
  let tmp16 = null;
  if (channel.isGuildStageVoice()) {
    const obj6 = { channel };
    tmp16 = closure_12(tmp2(9746), obj6);
  }
  const items1 = [tmp16, ];
  const obj7 = { pointerEvents: "box-none", style: null };
  const items2 = [animatedStyle1, StyleSheet.absoluteFill];
  obj7.style = items2;
  items1[1] = closure_12(translateX(4492).View, obj7);
  obj5.children = items1;
  const items3 = [closure_13(closure_6, obj5), ];
  const obj8 = { style: tmp.textContainer, children: null };
  let tmp18Result = null;
  if (tmp11[0]) {
    const obj9 = { channel };
    tmp18Result = closure_12(tmp2(10332), obj9);
  }
  obj8.children = tmp18Result;
  items3[1] = closure_12(closure_6, obj8);
  obj4.children = items3;
  return closure_13(translateX(4492).View, obj4);
}
function MainCallScreen(channel) {
  channel = channel.channel;
  let isConnectedToVoiceChannel;
  const tmp = closure_14();
  isConnectedToVoiceChannel = isConnectedToVoiceChannel(9643).useIsConnectedToVoiceChannel(channel);
  const id = noop.useId();
  const items = [isConnectedToVoiceChannel, id];
  const effect = noop.useEffect(() => {
    state = SafeAreaDisabledStore.getState();
    let safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: id, lockEnabled: isConnectedToVoiceChannel });
    return () => {
      state = state.getState();
      const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
    };
  }, items);
  let obj = isConnectedToVoiceChannel(9643);
  const isChannelContentGated = isConnectedToVoiceChannel(4966).useIsChannelContentGated(channel);
  const effect1 = noop.useEffect(() => {
    function dismissOAuthModal() {
      if (c0) {
        id(4959).popWithKey(closure_2_11);
        c0 = false;
        const obj = id(4959);
      }
    }
    function showOAuth2Modal() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_3 = async function _showOAuth2Modal(arg0) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
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
              tmp2(paths[17]).popWithKey(closure_1_11);
              const obj5 = tmp2(paths[17]);
              const obj4 = {};
              const obj6 = tmp2(paths[17]);
              const merged = Object.assign(closure_0);
              obj4.dismissOAuthModal = dismissOAuthModal;
              paths = 1;
              c3 = 1;
              const obj7 = { value: obj6.pushLazy(closure_0(paths[19])(paths[18], paths.paths), obj4, closure_1_11), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = true;
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp7) {
          c3 = tmp;
          throw tmp7;
        }
      }
    };
    isConnectedToVoiceChannel = false;
    let ComponentDispatch = isConnectedToVoiceChannel(showOAuth2Modal[20]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = isConnectedToVoiceChannel(1110).ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      if (c0) {
        id(4959).popWithKey(closure_2_11);
        c0 = false;
        const obj = id(4959);
      }
    };
  }, []);
  isConnectedToVoiceChannel(10194);
  if (isChannelContentGated) {
    let obj3 = { onReturnToSafety: id(4959).pop, guildId: null, channelId: null };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    let tmp14Result2 = closure_12(id(12916), obj3);
    let tmp11 = closure_12;
    const tmp20 = id(12916);
  } else {
    if (!tmp10) {
      if (!channel.isVocalThread()) {
        tmp11 = closure_12;
        let obj4 = { channel };
        tmp14Result2 = closure_12(CallWithVoiceChat, obj4);
      }
    }
    let obj5 = { style: tmp.flex, children: null };
    let tmp14Result = null;
    if (channel.isGuildStageVoice()) {
      let obj7 = { channel };
      tmp14Result = closure_12(id(9746), obj7);
    }
    obj5.children = tmp14Result;
    tmp14Result2 = closure_12(closure_6, obj5);
    tmp11 = closure_12;
  }
  let obj2 = isConnectedToVoiceChannel(4966);
  const tmp21 = id(4609)();
  const tmp22 = id(9771);
  const tmp2Result = isConnectedToVoiceChannel(1364);
  const tmp23 = isConnectedToVoiceChannel(1364).isAndroid() || !isConnectedToVoiceChannel;
  return tmp11(tmp22, { forceHide: isConnectedToVoiceChannel(1364).isAndroid() || !isConnectedToVoiceChannel, showWhenParticipantOnScreen: !isConnectedToVoiceChannel, children: tmp11(isConnectedToVoiceChannel(4466).ThemeContextProvider, { gradient: tmp21, children: tmp14Result2 }) });
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const ChannelCallScreens = fn(9640).ChannelCallScreens;
const ComponentActions = fn(1074).ComponentActions;
let closure_11 = fn(9319).OAUTH2_AUTHORIZE_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { flex: { flex: 1, alignSelf: "stretch" }, textInVoiceContainer: null, voiceContainer: null, textContainer: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.right = undefined;
obj2.textInVoiceContainer = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.right = "50%";
obj2.voiceContainer = obj4;
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.left = "50%";
obj2.textContainer = obj5;
let closure_14 = createStyles.createStyles(obj2);
const __initData = { code: "function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}" };
const __initData2 = { code: "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}" };
const __initData3 = { code: "function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}" };
const __initData4 = { code: "function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigator.tsx");

export default function ChannelCallNavigator(channel) {
  channel = channel.channel;
  let guild_id = channel.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  const obj = { value: guild_id, children: null };
  const obj2 = {
    screens: {
      [ChannelCallScreens.MAIN_CALL_SCREEN]: {
        headerShown: false,
        ignoreKeyboard: true,
        gestureEnabled: false,
        title: "",
        render() {
          return closure_2_12(MainCallScreen, { channel });
        }
      }
    },
    initialRouteName: ChannelCallScreens.MAIN_CALL_SCREEN
  };
  obj.children = closure_12(channel(7240).Navigator, obj2);
  return closure_12(GuildThemeGuildIdOverrideContextDefault.Provider, obj);
};