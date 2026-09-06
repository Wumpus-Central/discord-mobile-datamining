// discord_app/modules/video_calls/native/components/ChannelCallNavigator.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import GuildThemeGuildIdOverrideContextDefault from "../../../guild_themes/native/GuildThemeGuildIdOverrideContext.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SafeAreaDisabledStore from "../../../panels/morphable/native/SafeAreaDisabledStore.tsx";

require = fn;
function CallWithVoiceChat(channel) {
  channel = channel.channel;
  let translateX;
  dependencyMap = undefined;
  let tmp = closure_14();
  const result = 2 * translateX(1477)().width;
  _require = result;
  let obj = require("VoiceChatModalContext");
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  translateX = undefined;
  if (voiceChatNavigationContext != null) {
    translateX = voiceChatNavigationContext.translateX;
  }
  let tmp5Result = tmp5(4296);
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
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  tmp5Result = tmp5(4296);
  const fn2 = function c() {
    let obj = ReanimatedRexport;
    let num;
    if (translateX != null) {
      num = translateX.get();
    }
    if (num == null) {
      num = 0;
    }
    obj = { backgroundColor: "black", opacity: null };
    const items = [-c0, 0];
    obj.opacity = obj.interpolate(num, items, [0.9, 0]);
    return obj;
  };
  obj = { interpolate: tmp5(4296).interpolate, translateX, width: result };
  fn2.__closure = obj;
  fn2.__workletHash = 1339801810447;
  fn2.__initData = __initData2;
  let num;
  const animatedStyle1 = tmp5Result.useAnimatedStyle(fn2);
  if (translateX != null) {
    num = translateX.get();
  }
  if (num == null) {
    num = 0;
  }
  const tmp11 = _slicedToArray(noop.useState(num > 0), 2);
  dependencyMap = tmp12;
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
  obj = { runOnJS: tmp5(4296).runOnJS, setShouldRenderChat: tmp12 };
  fn4.__closure = obj;
  fn4.__workletHash = 661145094859;
  fn4.__initData = __initData4;
  const animatedReaction = require("ReanimatedRexport").useAnimatedReaction(fn3, fn4);
  const obj1 = { style: null, children: null };
  let items = [tmp.textInVoiceContainer, animatedStyle];
  obj1.style = items;
  const obj2 = { style: tmp.voiceContainer, children: null };
  let tmp16 = null;
  if (channel.isGuildStageVoice()) {
    const obj3 = { channel };
    tmp16 = closure_12(tmp2(9659), obj3);
  }
  const items1 = [tmp16];
  const obj4 = { pointerEvents: "box-none", style: null };
  const items2 = [animatedStyle1, StyleSheet.absoluteFill];
  obj4.style = items2;
  items1[1] = closure_12(translateX(4296).View, obj4);
  obj2.children = items1;
  const items3 = [closure_13(closure_6, obj2)];
  const obj5 = { style: tmp.textContainer, children: null };
  let tmp18Result = null;
  if (tmp11[0]) {
    const obj6 = { channel };
    tmp18Result = closure_12(tmp2(10076), obj6);
  }
  obj5.children = tmp18Result;
  items3[1] = closure_12(closure_6, obj5);
  obj1.children = items3;
  return closure_13(translateX(4296).View, obj1);
}
function MainCallScreen(channel) {
  channel = channel.channel;
  let isConnectedToVoiceChannel;
  let obj = isConnectedToVoiceChannel(9471);
  isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
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
  let obj1 = isConnectedToVoiceChannel(4771);
  const isChannelContentGated = obj1.useIsChannelContentGated(channel);
  const effect1 = noop.useEffect(() => {
    function dismissOAuthModal() {
      if (c0) {
        id(4763).popWithKey(closure_2_11);
        c0 = false;
        const obj = id(4763);
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              tmp2(paths[17]).popWithKey(closure_1_11);
              const obj5 = tmp2(paths[17]);
              const obj1 = {};
              const obj6 = tmp2(paths[17]);
              const merged = Object.assign(closure_0);
              obj1.dismissOAuthModal = dismissOAuthModal;
              paths = 1;
              c3 = 1;
              const obj2 = {
                value: obj6.pushLazy(closure_0(paths[19])(paths[18], paths.paths), obj1, closure_1_11),
                done: false,
              };
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
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
      const ComponentDispatch = isConnectedToVoiceChannel(1109).ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      if (c0) {
        id(4763).popWithKey(closure_2_11);
        c0 = false;
        const obj = id(4763);
      }
    };
  }, []);
  isConnectedToVoiceChannel(9937);
  if (isChannelContentGated) {
    obj = { onReturnToSafety: id(4763).pop, guildId: null, channelId: null };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    let tmp14Result = closure_12(id(12665), obj);
    let tmp11 = closure_12;
    const tmp20 = id(12665);
  } else {
    if (!tmp10) {
      if (!channel.isVocalThread()) {
        tmp11 = closure_12;
        obj = { channel };
        tmp14Result = closure_12(CallWithVoiceChat, obj);
      }
    }
    obj1 = { style: tmp.flex, children: null };
    tmp14Result = null;
    if (channel.isGuildStageVoice()) {
      let obj2 = { channel };
      tmp14Result = closure_12(id(9659), obj2);
    }
    obj1.children = tmp14Result;
    tmp14Result = closure_12(closure_6, obj1);
    tmp11 = closure_12;
  }
  tmp = closure_14();
  const tmp21 = id(4413)();
  const tmp22 = id(9683);
  const tmp2Result = isConnectedToVoiceChannel(1115);
  const tmp23 = isConnectedToVoiceChannel(1115).isAndroid() || !isConnectedToVoiceChannel;
  return tmp11(tmp22, {
    forceHide: isConnectedToVoiceChannel(1115).isAndroid() || !isConnectedToVoiceChannel,
    showWhenParticipantOnScreen: !isConnectedToVoiceChannel,
    children: tmp11(isConnectedToVoiceChannel(4271).ThemeContextProvider, { gradient: tmp21, children: tmp14Result }),
  });
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const ChannelCallScreens = fn(9468).ChannelCallScreens;
const ComponentActions = fn(1074).ComponentActions;
let closure_11 = fn(9574).OAUTH2_AUTHORIZE_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = {
  flex: { flex: 1, alignSelf: "stretch" },
  textInVoiceContainer: null,
  voiceContainer: null,
  textContainer: null,
};
createStyles = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.right = undefined;
createStyles.textInVoiceContainer = createStyles;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.right = "50%";
createStyles.voiceContainer = obj1;
let obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.left = "50%";
createStyles.textContainer = obj2;
let closure_14 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}",
};
const __initData2 = {
  code: "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}",
};
const __initData3 = {
  code: "function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}",
};
const __initData4 = {
  code: "function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigator.tsx");

export default function ChannelCallNavigator(channel) {
  channel = channel.channel;
  let guild_id = channel.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let obj = { value: guild_id, children: null };
  obj = { screens: null, initialRouteName: ChannelCallScreens.MAIN_CALL_SCREEN };
  obj = {
    headerShown: false,
    ignoreKeyboard: true,
    gestureEnabled: false,
    title: "",
    render() {
      return closure_2_12(MainCallScreen, { channel });
    },
  };
  obj.screens = { [ChannelCallScreens.MAIN_CALL_SCREEN]: obj };
  obj.children = closure_12(channel(7000).Navigator, obj);
  return closure_12(GuildThemeGuildIdOverrideContextDefault.Provider, obj);
}
