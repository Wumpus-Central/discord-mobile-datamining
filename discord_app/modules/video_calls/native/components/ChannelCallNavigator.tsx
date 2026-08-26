// === Module 10914: CallWithVoiceChat ===

// Module 10914 (CallWithVoiceChat)
import contextDefault from "context" /* 4324 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "module_10915" /* 10915 */;
import { ChannelCallScreens } from "BOX_MODE_ACTIONSHEET_WIDTH" /* 9963 */;
import { ComponentActions } from "ME" /* 676 */;
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_11 } from "OAUTH2_AUTHORIZE_MODAL_KEY" /* 10778 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
function CallWithVoiceChat(channel) {
  channel = channel.channel;
  let _require;
  let translateX;
  dependencyMap = undefined;
  let tmp = callback3();
  const result = 2 * translateX(1494)().width;
  _require = result;
  let obj = _require(9971);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  translateX = undefined;
  if (voiceChatNavigationContext != null) {
    translateX = voiceChatNavigationContext.translateX;
  }
  let tmp5Result = tmp5(4184);
  const fn = function o() {
    const obj = { width: c0, transform: null };
    let num;
    if (translateX != null) {
      num = translateX.get();
    }
    if (num == null) {
      num = 0;
    }
    const items = [{ translateX: num }];
    obj[1] = items;
    return obj;
  };
  fn.__closure = { width: result, translateX };
  fn.__workletHash = 4309613236072;
  fn.__initData = closure_15;
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  tmp5Result = tmp5(4184);
  const fn2 = function c() {
    let obj = _undefined(4184);
    let num;
    if (translateX != null) {
      num = translateX.get();
    }
    if (num == null) {
      num = 0;
    }
    obj = { backgroundColor: "black", opacity: obj.interpolate(num, items, [0.9, 0]) };
    items = [-_undefined, 0];
    return obj;
  };
  obj = { interpolate: tmp5(4184).interpolate, translateX, width: result };
  fn2.__closure = obj;
  fn2.__workletHash = 1339801810447;
  fn2.__initData = closure_16;
  let num;
  const animatedStyle1 = tmp5Result.useAnimatedStyle(fn2);
  if (translateX != null) {
    num = translateX.get();
  }
  if (num == null) {
    num = 0;
  }
  const tmp11 = callback(React.useState(num > 0), 2);
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
  fn3.__initData = closure_17;
  const fn4 = function h(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      _undefined(4184).runOnJS(dependencyMap)(true);
      const obj = _undefined(4184);
    }
  };
  obj = { runOnJS: tmp5(4184).runOnJS, setShouldRenderChat: tmp12 };
  fn4.__closure = obj;
  fn4.__workletHash = 661145094859;
  fn4.__initData = closure_18;
  const animatedReaction = _require(4184).useAnimatedReaction(fn3, fn4);
  obj1 = { style: items, children: null };
  items = [tmp.textInVoiceContainer, animatedStyle];
  const obj2 = { style: tmp.voiceContainer, children: null };
  let tmp16 = null;
  if (channel.isGuildStageVoice()) {
    const obj3 = { channel: null };
    obj3[0] = channel;
    tmp16 = callback2(tmp2(10916), obj3);
  }
  const items1 = [tmp16, ];
  const items2 = [animatedStyle1, StyleSheet.absoluteFill];
  items1[1] = callback2(translateX(4184).View, { pointerEvents: "box-none", style: items2 });
  obj2[1] = items1;
  const items3 = [closure_13(closure_6, obj2), ];
  const obj4 = { style: tmp.textContainer, children: null };
  let tmp18Result = null;
  if (tmp11[0]) {
    const obj5 = { channel: null };
    obj5[0] = channel;
    tmp18Result = tmp18(tmp2(9961), obj5);
  }
  obj4[1] = tmp18Result;
  items3[1] = callback2(closure_6, obj4);
  obj1[1] = items3;
  return closure_13(translateX(4184).View, obj1);
}
function MainCallScreen(channel) {
  channel = channel.channel;
  let isConnectedToVoiceChannel;
  let id;
  let obj = isConnectedToVoiceChannel(9966);
  isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  id = React.useId();
  const items = [isConnectedToVoiceChannel, id];
  const effect = React.useEffect(() => {
    let state = closure_1_8.getState();
    let safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: id, lockEnabled: isConnectedToVoiceChannel });
    return () => {
      const state = closure_1_8.getState();
      const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: closure_1, lockEnabled: false });
    };
  }, items);
  obj1 = isConnectedToVoiceChannel(4683);
  const isChannelContentGated = obj1.useIsChannelContentGated(channel);
  const effect1 = React.useEffect(() => {
    function dismissOAuthModal() {
      if (c0) {
        dismissOAuthModal(showOAuth2Modal[17]).popWithKey(closure_1_11);
        c0 = false;
        const obj = dismissOAuthModal(showOAuth2Modal[17]);
      }
    }
    function showOAuth2Modal() {
      const self = this;
      const apply = _showOAuth2Modal.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _showOAuth2Modal(arg0) {
      const self = this;
      const tmp = _showOAuth2Modal((arg0) => {
        closure_0 = arg0;
        c2 = 0;
        c3 = 0;
        return (function*(arg0) {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_1 = tmp2;
                  closure_1_1(paths[17]).popWithKey(closure_1_11);
                  const obj5 = closure_1_1(paths[17]);
                  obj1 = {};
                  const obj6 = closure_1_1(paths[17]);
                  const merged = Object.assign(c0);
                  obj1.dismissOAuthModal = closure_1_1;
                  paths = 1;
                  c3 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = obj6.pushLazy(callback(paths[19])(paths[18], paths.paths), obj1, closure_1_11);
                  return obj2;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c0 = true;
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp7) {
              c3 = tmp;
              throw tmp7;
            }
          }
        })();
      });
      closure_3 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    isConnectedToVoiceChannel = false;
    let ComponentDispatch = isConnectedToVoiceChannel(showOAuth2Modal[20]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = callback(showOAuth2Modal[20]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_1_10.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      if (callback) {
        dismissOAuthModal(showOAuth2Modal[17]).popWithKey(closure_1_11);
        callback = false;
        const obj = dismissOAuthModal(showOAuth2Modal[17]);
      }
    };
  }, []);
  isConnectedToVoiceChannel(10974);
  if (isChannelContentGated) {
    obj = { onReturnToSafety: null, guildId: null, channelId: null };
    obj[0] = id(4675).pop;
    ({ guild_id: obj6[1], id: obj6[2] } = channel);
    let tmp14Result = callback2(id(11117), obj);
    let tmp11 = callback2;
    const tmp20 = id(11117);
  } else {
    if (!tmp10) {
      if (!channel.isVocalThread()) {
        tmp11 = callback2;
        obj = { channel: null };
        obj[0] = channel;
        tmp14Result = callback2(CallWithVoiceChat, obj);
      }
    }
    obj1 = { style: null, children: null };
    obj1[0] = tmp.flex;
    tmp14Result = null;
    if (channel.isGuildStageVoice()) {
      let obj2 = { channel: null };
      obj2[0] = channel;
      tmp14Result = tmp14(id(10916), obj2);
    }
    obj1[1] = tmp14Result;
    tmp14Result = tmp14(closure_6, obj1);
    tmp11 = tmp14;
    const tmp15 = closure_6;
  }
  tmp = callback3();
  const tmp21 = id(4294)();
  const tmp22 = id(10930);
  const tmp2Result = isConnectedToVoiceChannel(500);
  const tmp23 = isConnectedToVoiceChannel(500).isAndroid() || !isConnectedToVoiceChannel;
  return tmp11(tmp22, { forceHide: isConnectedToVoiceChannel(500).isAndroid() || !isConnectedToVoiceChannel, showWhenParticipantOnScreen: !isConnectedToVoiceChannel, children: tmp11(isConnectedToVoiceChannel(4172).ThemeContextProvider, { gradient: tmp21, children: tmp14Result }) });
}
({ View: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { flex: { flex: 1, alignSelf: "stretch" }, textInVoiceContainer: null, voiceContainer: null, textContainer: null };
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.right = undefined;
createCacheKey[1] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.right = "50%";
createCacheKey[2] = obj1;
let obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.left = "50%";
createCacheKey[3] = obj2;
let closure_14 = createCacheKey.createStyles(createCacheKey);
let closure_15 = { code: "function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}" };
let closure_16 = { code: "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}" };
let closure_17 = { code: "function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}" };
let closure_18 = { code: "function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}" };
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigator.tsx");

export default function ChannelCallNavigator(channel) {
  channel = channel.channel;
  let guild_id = channel.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  obj = { value: guild_id, children: tmp2(channel(5955).Navigator, { screens: { [ChannelCallScreens.MAIN_CALL_SCREEN]: obj }, initialRouteName: ChannelCallScreens.MAIN_CALL_SCREEN }) };
  obj = {
    headerShown: false,
    ignoreKeyboard: true,
    gestureEnabled: false,
    title: "",
    render() {
      return closure_1_12(closure_1_20, { channel });
    }
  };
  return closure_12(contextDefault.Provider, obj);
};