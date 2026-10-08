// === Module 10758: ChannelCallNavigator ===

// Module 10758 (ChannelCallNavigator)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 4962 */;
import VoiceChatModalContext from "VoiceChatModalContext" /* 10339 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 10759 */;

require = fn;
function MainCallScreen(channel) {
  channel = channel.channel;
  let isConnectedToVoiceChannel;
  const tmp = closure_14();
  isConnectedToVoiceChannel = isConnectedToVoiceChannel(10337).useIsConnectedToVoiceChannel(channel);
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
  let obj = isConnectedToVoiceChannel(10337);
  const isChannelContentGated = isConnectedToVoiceChannel(5930).useIsChannelContentGated(channel);
  const effect1 = noop.useEffect(() => {
    function dismissOAuthModal() {
      if (c0) {
        id(5940).popWithKey(closure_2_11);
        c0 = false;
        const obj = id(5940);
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
              tmp2(paths[19]).popWithKey(closure_1_11);
              const obj5 = tmp2(paths[19]);
              const obj4 = {};
              const obj6 = tmp2(paths[19]);
              const merged = Object.assign(closure_0);
              obj4.dismissOAuthModal = dismissOAuthModal;
              paths = 1;
              c3 = 1;
              const obj7 = { value: obj6.pushLazy(closure_0(paths[21])(paths[20], paths.paths), obj4, closure_1_11), done: false };
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          c3 = tmp;
          throw tmp7;
        }
      }
    };
    isConnectedToVoiceChannel = false;
    let ComponentDispatch = isConnectedToVoiceChannel(showOAuth2Modal[22]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = isConnectedToVoiceChannel(1121).ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      if (c0) {
        id(5940).popWithKey(closure_2_11);
        c0 = false;
        const obj = id(5940);
      }
    };
  }, []);
  isConnectedToVoiceChannel(10806);
  if (isChannelContentGated) {
    let obj3 = { onReturnToSafety: id(5940).pop, guildId: null, channelId: null };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    let tmp14Result2 = closure_12(id(10975), obj3);
    let tmp11 = closure_12;
    const tmp20 = id(10975);
  } else {
    if (!tmp10) {
      if (!channel.isVocalThread()) {
        tmp11 = closure_12;
        let obj4 = { channel };
        tmp14Result2 = closure_12(closure_23, obj4);
      }
    }
    let obj5 = { style: tmp.flex, children: null };
    let tmp14Result = null;
    if (channel.isGuildStageVoice()) {
      let obj7 = { channel };
      tmp14Result = closure_12(id(10760), obj7);
    }
    obj5.children = tmp14Result;
    tmp14Result2 = closure_12(closure_6, obj5);
    tmp11 = closure_12;
  }
  let obj2 = isConnectedToVoiceChannel(5930);
  const tmp21 = id(4932)();
  const tmp22 = id(10817);
  const tmp2Result = isConnectedToVoiceChannel(1381);
  const tmp23 = isConnectedToVoiceChannel(1381).isAndroid() || !isConnectedToVoiceChannel;
  return tmp11(tmp22, { forceHide: isConnectedToVoiceChannel(1381).isAndroid() || !isConnectedToVoiceChannel, showWhenParticipantOnScreen: !isConnectedToVoiceChannel, children: tmp11(isConnectedToVoiceChannel(4787).ThemeContextProvider, { gradient: tmp21, children: tmp14Result2 }) });
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const ChannelCallScreens = fn(10334).ChannelCallScreens;
const ComponentActions = fn(1085).ComponentActions;
let closure_11 = fn(10641).OAUTH2_AUTHORIZE_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5090);
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
const __initData2 = { code: "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:\"black\",opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}" };
const __initData3 = { code: "function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}" };
const __initData4 = { code: "function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous){return;}runOnJS(setShouldRenderChat)(true);}" };
const __initData5 = { code: "function ChannelCallNavigatorTsx5(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}" };
const __initData6 = { code: "function ChannelCallNavigatorTsx6(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}" };
const __initData7 = { code: "function ChannelCallNavigatorTsx7(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}" };
const __initData8 = { code: "function ChannelCallNavigatorTsx8(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}" };
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function CallWithVoiceChat(channel) {
  const cResult = c.c(23);
  channel = channel.channel;
  const tmp4 = closure_14();
  const result = 2 * translateX(1496)().width;
  const require = result;
  const voiceChatNavigationContext = VoiceChatModalContext.useVoiceChatNavigationContext();
  translateX = undefined;
  if (voiceChatNavigationContext != null) {
    translateX = voiceChatNavigationContext.translateX;
  }
  const fn = function o() {
    const obj = { width: result, transform: null };
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
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const tmpResult = ReanimatedRexport;
  const fn2 = function c() {
    let num;
    if (translateX != null) {
      num = translateX.get();
    }
    if (num == null) {
      num = 0;
    }
    const obj3 = { backgroundColor: "black", opacity: null };
    const items = [-result, 0];
    obj3.opacity = ReanimatedRexport.interpolate(num, items, [0.9, 0]);
    return obj3;
  };
  const tmpResult3 = ReanimatedRexport;
  fn2.__closure = { interpolate: ReanimatedRexport.interpolate, translateX, width: result };
  fn2.__workletHash = 6685006809487;
  fn2.__initData = __initData2;
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
    let tmp11 = num;
  } else {
    tmp11 = cResult[1];
  }
  let obj3 = { interpolate: ReanimatedRexport.interpolate, translateX, width: result };
  [tmp13, tmp14] = noop.useState(tmp11 > 0);
  dependencyMap = tmp14;
  const tmp12 = _slicedToArray(noop.useState(tmp11 > 0), 2);
  const fn3 = function k() {
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
  const fn4 = function $(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(closure_2)(true);
    }
  };
  const tmpResult4 = ReanimatedRexport;
  fn4.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShouldRenderChat: tmp14 };
  fn4.__workletHash = 11056363056621;
  fn4.__initData = __initData4;
  const animatedReaction = tmpResult4.useAnimatedReaction(fn3, fn4);
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp4.textInVoiceContainer) {
      let tmp16 = cResult[4];
    }
    if (cResult[5] !== channel) {
      let tmp18 = null;
      if (channel.isGuildStageVoice()) {
        const obj5 = { channel };
        tmp18 = closure_12(tmp5(10760), obj5);
      }
      cResult[5] = channel;
      cResult[6] = tmp18;
      let tmp17 = tmp18;
    } else {
      tmp17 = cResult[6];
    }
    if (cResult[7] !== animatedStyle1) {
      const obj6 = { pointerEvents: "box-none", style: null };
      let items = [animatedStyle1, StyleSheet.absoluteFill];
      obj6.style = items;
      const tmp23 = closure_12(tmp5(4810).View, obj6);
      cResult[7] = animatedStyle1;
      cResult[8] = tmp23;
      let tmp20 = tmp23;
    } else {
      tmp20 = cResult[8];
    }
    if (cResult[9] === tmp4.voiceContainer) {
      if (cResult[10] === tmp17) {
        if (cResult[11] === tmp20) {
          let tmp24 = cResult[12];
        }
        if (cResult[13] === channel) {
          if (cResult[14] === tmp13) {
            let tmp28 = cResult[15];
          }
          if (cResult[16] === tmp4.textContainer) {
            if (cResult[17] === tmp28) {
              let tmp31 = cResult[18];
            }
            if (cResult[19] === tmp16) {
              if (cResult[20] === tmp24) {
                if (cResult[21] === tmp31) {
                  let tmp35 = cResult[22];
                }
                return tmp35;
              }
            }
            const obj7 = { style: tmp16, children: null };
            const items1 = [tmp24, tmp31];
            obj7.children = items1;
            const tmp37 = closure_13(tmp5(4810).View, obj7);
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
          tmp29 = closure_12(tmp5(10332), obj9);
        }
        cResult[13] = channel;
        cResult[14] = tmp13;
        cResult[15] = tmp29;
        tmp28 = tmp29;
      }
    }
    const obj10 = { style: tmp4.voiceContainer, children: null };
    const items2 = [tmp17, tmp20];
    obj10.children = items2;
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
  const obj4 = { runOnJS: ReanimatedRexport.runOnJS, setShouldRenderChat: tmp14 };
}) : (function CallWithVoiceChat(channel) {
  channel = channel.channel;
  let translateX;
  dependencyMap = undefined;
  let tmp = closure_14();
  const result = 2 * translateX(1496)().width;
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
  fn.__workletHash = 6302430761580;
  fn.__initData = __initData5;
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
  fn2.__workletHash = 16939170329355;
  fn2.__initData = __initData6;
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
  const fn3 = function h() {
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
  fn3.__workletHash = 5069632819207;
  fn3.__initData = __initData7;
  const fn4 = function _(arg0, arg1) {
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
  fn4.__workletHash = 2530050428359;
  fn4.__initData = __initData8;
  const animatedReaction = tmp5Result4.useAnimatedReaction(fn3, fn4);
  const obj4 = { style: null, children: null };
  let items = [tmp.textInVoiceContainer, animatedStyle];
  obj4.style = items;
  const obj5 = { style: tmp.voiceContainer, children: null };
  let tmp16 = null;
  if (channel.isGuildStageVoice()) {
    const obj6 = { channel };
    tmp16 = closure_12(tmp2(10760), obj6);
  }
  const items1 = [tmp16, ];
  const obj7 = { pointerEvents: "box-none", style: null };
  const items2 = [animatedStyle1, StyleSheet.absoluteFill];
  obj7.style = items2;
  items1[1] = closure_12(translateX(4810).View, obj7);
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
  return closure_13(translateX(4810).View, obj4);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelCallNavigator(channel) {
  const cResult = channel(576).c(7);
  channel = channel.channel;
  let guild_id = channel.guild_id;
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
          return __initData(MainCallScreen, { channel });
        }
    };
    obj2[ChannelCallScreens.MAIN_CALL_SCREEN] = obj3;
    cResult[0] = channel;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj4 = { screens: tmp6, initialRouteName: ChannelCallScreens.MAIN_CALL_SCREEN };
    const tmp9 = closure_12(tmp(6679).Navigator, obj4);
    cResult[2] = tmp6;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === guild_id) {
    if (cResult[5] === tmp7) {
      let tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = closure_12(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: tmp7 });
  cResult[4] = guild_id;
  cResult[5] = tmp7;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const obj = channel(576);
  tmp = channel;
}) : (function ChannelCallNavigator(channel) {
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
          return __initData(MainCallScreen, { channel });
        }
      }
    },
    initialRouteName: ChannelCallScreens.MAIN_CALL_SCREEN
  };
  obj.children = closure_12(channel(6679).Navigator, obj2);
  return closure_12(GuildThemeGuildIdOverrideContextDefault.Provider, obj);
});