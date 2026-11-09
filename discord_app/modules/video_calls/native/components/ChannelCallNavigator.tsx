// discord_app/modules/video_calls/native/components/ChannelCallNavigator.tsx
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import GuildThemeGuildIdOverrideContextDefault from "../../../guild_themes/native/GuildThemeGuildIdOverrideContext.tsx";
import ChannelVoiceChatDefault from "ChannelVoiceChat.tsx";
import VoiceChatModalContext from "../../../voice_chat/native/VoiceChatModalContext.tsx";
import StageChannelCallNavigatorDefault from "../../../stage_channels/native/components/StageChannelCallNavigator.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SafeAreaDisabledStore from "../../../panels/morphable/native/SafeAreaDisabledStore.tsx";

const _modDef1652 = _mod1652;

require = fn;
function CallWithVoiceChat(channel) {
  channel = channel.channel;
  let tmp = closure_14();
  const result = 2 * useWindowDimensionsDefault().width;
  const voiceChatNavigationContext = VoiceChatModalContext.useVoiceChatNavigationContext();
  let translateX;
  if (voiceChatNavigationContext != null) {
    translateX = voiceChatNavigationContext.translateX;
  }
  items = [closure_15, result, translateX];
  c0 = undefined;
  c1 = undefined;
  [tmp8, tmp9, tmp10] = items;
  class ChannelCallNavigatorTsx1 {
    constructor() {
      obj = { width: closure_0, transform: null };
      obj2 = closure_1;
      num = undefined;
      if (closure_1 != null) {
        num = obj2.get();
      }
      if (num == null) {
        num = 0;
      }
      items = [];
      items[0] = { translateX: num };
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  ChannelCallNavigatorTsx1.__closure = items1;
  ChannelCallNavigatorTsx1.__workletHash = 5995455083313;
  ChannelCallNavigatorTsx1.__initData = tmp8;
  const animatedStyle = _mod1652.useAnimatedStyle(ChannelCallNavigatorTsx1);
  const tmp5Result = _mod1652;
  const items2 = [closure_16, _mod1652.interpolate, translateX, result];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp12, tmp13, tmp14, tmp15] = items2;
  class ChannelCallNavigatorTsx2 {
    constructor() {
      obj = closure_1;
      num = undefined;
      tmp = closure_0;
      if (closure_1 != null) {
        num = obj.get();
      }
      if (num == null) {
        num = 0;
      }
      obj1 = { backgroundColor: "black", opacity: null };
      items = [,];
      items[0] = -closure_2;
      items[1] = 0;
      obj1.opacity = tmp(num, items, [0.9, 0]);
      return obj1;
    }
  }
  const items3 = [tmp13, tmp14, tmp15];
  ChannelCallNavigatorTsx2.__closure = items3;
  ChannelCallNavigatorTsx2.__workletHash = 11313415463254;
  ChannelCallNavigatorTsx2.__initData = tmp12;
  let num;
  const animatedStyle1 = _mod1652.useAnimatedStyle(ChannelCallNavigatorTsx2);
  if (translateX != null) {
    num = translateX.get();
  }
  if (num == null) {
    num = 0;
  }
  const tmp5Result3 = _mod1652;
  [tmp19, tmp20] = noop.useState(num > 0);
  const tmp18 = _slicedToArray(noop.useState(num > 0), 2);
  const items4 = [closure_17, translateX];
  c0 = undefined;
  [tmp21, tmp22] = items4;
  class ChannelCallNavigatorTsx3 {
    constructor() {
      obj = closure_0;
      num = undefined;
      if (closure_0 != null) {
        num = obj.get();
      }
      if (num == null) {
        num = 0;
      }
      return Math.abs(num) > 0;
    }
  }
  const items5 = [tmp22];
  ChannelCallNavigatorTsx3.__closure = items5;
  ChannelCallNavigatorTsx3.__workletHash = 1580434919674;
  ChannelCallNavigatorTsx3.__initData = tmp21;
  const items6 = [closure_18, _mod1705.scheduleOnRN, tmp20];
  c0 = undefined;
  c1 = undefined;
  [tmp23, tmp24, tmp25] = items6;
  class ChannelCallNavigatorTsx4 {
    constructor(arg0, arg1) {
      tmp = channel;
      if (channel) {
        tmp2 = arg1;
        tmp = channel !== arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        flag = true;
        tmp5 = closure_0(closure_1, true);
      }
      return;
    }
  }
  const items7 = [tmp24, tmp25];
  ChannelCallNavigatorTsx4.__closure = items7;
  ChannelCallNavigatorTsx4.__workletHash = 8767813904799;
  ChannelCallNavigatorTsx4.__initData = tmp23;
  const animatedReaction = _mod1652.useAnimatedReaction(ChannelCallNavigatorTsx3, ChannelCallNavigatorTsx4);
  let obj2 = { style: null, children: null };
  const items8 = [tmp.textInVoiceContainer, animatedStyle];
  obj2.style = items8;
  const obj3 = { style: tmp.voiceContainer, children: null };
  let tmp29 = null;
  if (channel.isGuildStageVoice()) {
    const obj4 = { channel };
    tmp29 = application_id(StageChannelCallNavigatorDefault, obj4);
  }
  const items9 = [tmp29];
  const obj5 = { pointerEvents: "box-none", style: null };
  const items10 = [animatedStyle1, StyleSheet.absoluteFill];
  obj5.style = items10;
  items9[1] = application_id(_modDef1652.View, obj5);
  obj3.children = items9;
  const items11 = [state(timestampProducer, obj3)];
  const obj6 = { style: tmp.textContainer, children: null };
  let tmp31Result = null;
  if (tmp19) {
    const obj7 = { channel };
    tmp31Result = application_id(ChannelVoiceChatDefault, obj7);
  }
  obj6.children = tmp31Result;
  items11[1] = application_id(timestampProducer, obj6);
  obj2.children = items11;
  return state(_modDef1652.View, obj2);
}
function MainCallScreen(channel) {
  channel = channel.channel;
  let isConnectedToVoiceChannel;
  const tmp = closure_14();
  isConnectedToVoiceChannel = isConnectedToVoiceChannel(11134).useIsConnectedToVoiceChannel(channel);
  const id = noop.useId();
  items = [isConnectedToVoiceChannel, id];
  const effect = noop.useEffect(() => {
    state = SafeAreaDisabledStore.getState();
    let safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: id, lockEnabled: isConnectedToVoiceChannel });
    return () => {
      state = state.getState();
      const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
    };
  }, items);
  let obj = isConnectedToVoiceChannel(11134);
  const isChannelContentGated = isConnectedToVoiceChannel(6789).useIsChannelContentGated(channel);
  const effect1 = noop.useEffect(() => {
    function dismissOAuthModal() {
      if (c0) {
        id(6799).popWithKey(closure_2_11);
        c0 = false;
        const obj = id(6799);
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
              tmp2(paths[18]).popWithKey(closure_1_11);
              const obj5 = tmp2(paths[18]);
              const obj4 = {};
              const obj6 = tmp2(paths[18]);
              const merged = Object.assign(closure_0);
              obj4.dismissOAuthModal = dismissOAuthModal;
              paths = 1;
              c3 = 1;
              const obj7 = {
                value: obj6.pushLazy(closure_0(paths[20])(paths[19], paths.paths), obj4, closure_1_11),
                done: false,
              };
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
    let ComponentDispatch = isConnectedToVoiceChannel(showOAuth2Modal[21]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = isConnectedToVoiceChannel(1108).ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      if (c0) {
        id(6799).popWithKey(closure_2_11);
        c0 = false;
        const obj = id(6799);
      }
    };
  }, []);
  isConnectedToVoiceChannel(12075);
  if (isChannelContentGated) {
    let obj3 = { onReturnToSafety: id(6799).pop, guildId: null, channelId: null };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    let tmp14Result2 = closure_12(id(11358), obj3);
    let tmp11 = closure_12;
    const tmp20 = id(11358);
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
      tmp14Result = closure_12(id(12012), obj7);
    }
    obj5.children = tmp14Result;
    tmp14Result2 = closure_12(closure_6, obj5);
    tmp11 = closure_12;
  }
  let obj2 = isConnectedToVoiceChannel(6789);
  const tmp21 = id(5310)();
  const tmp22 = id(12024);
  const tmp2Result = isConnectedToVoiceChannel(1377);
  const tmp23 = isConnectedToVoiceChannel(1377).isAndroid() || !isConnectedToVoiceChannel;
  return tmp11(tmp22, {
    forceHide: isConnectedToVoiceChannel(1377).isAndroid() || !isConnectedToVoiceChannel,
    showWhenParticipantOnScreen: !isConnectedToVoiceChannel,
    children: tmp11(isConnectedToVoiceChannel(5199).ThemeContextProvider, { gradient: tmp21, children: tmp14Result2 }),
  });
}
get_ActivityIndicator = fn(17);
({ View: closure_6, StyleSheet } = get_ActivityIndicator);
const ChannelCallScreens = fn(11131).ChannelCallScreens;
const ComponentActions = fn(1072).ComponentActions;
let closure_11 = fn(11036).OAUTH2_AUTHORIZE_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5140);
let obj2 = {
  flex: { flex: 1, alignSelf: "stretch" },
  textInVoiceContainer: null,
  voiceContainer: null,
  textContainer: null,
};
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
let closure_15 = {
  code: "(function ChannelCallNavigatorTsx1(){let[width,translateX]=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};})",
};
let closure_16 = {
  code: "(function ChannelCallNavigatorTsx2(){let[interpolate,translateX,width]=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};})",
};
let closure_17 = {
  code: "(function ChannelCallNavigatorTsx3(){let[translateX]=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;})",
};
let closure_18 = {
  code: "(function ChannelCallNavigatorTsx4(isMoving,previous){let[scheduleOnRN,setShouldRenderChat]=this.__closure;if(!isMoving||isMoving===previous)return;scheduleOnRN(setShouldRenderChat,true);})",
};
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
          return application_id(MainCallScreen, { channel });
        },
      },
    },
    initialRouteName: ChannelCallScreens.MAIN_CALL_SCREEN,
  };
  obj.children = closure_12(channel(7231).Navigator, obj2);
  return closure_12(GuildThemeGuildIdOverrideContextDefault.Provider, obj);
}
