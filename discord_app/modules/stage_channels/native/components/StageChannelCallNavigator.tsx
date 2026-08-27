// discord_app/modules/stage_channels/native/components/StageChannelCallNavigator.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4185 from "../../../reanimated/ReanimatedRexport.tsx";
import AgeVerificationSpeakerActionSheet from "StageActionBarButtons.tsx";
import JoinStageViewDefault from "JoinStageView.tsx";
import RootThemeContextProvider from "../../../../design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ModeratorViewOverlay(channel) {
  channel = channel.channel;
  let first;
  importDefault = undefined;
  let first1;
  let callback;
  let obj = first(first1[5]);
  const tmp2 = callback(obj.useModeratorOverlayChannelState(channel.id), 2);
  first = tmp2[0];
  importDefault = tmp4;
  const tmp5 = callback(React.useState(first), 2);
  first1 = tmp5[0];
  callback = tmp5[1];
  obj1 = first(first1[6]);
  const fn = function s() {
    let obj = first(first1[7]);
    let num = 0;
    if (first1) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_11) };
    return obj;
  };
  obj = { withSpring: first(first1[7]).withSpring, showStartStageView: first1, viewAnimationConfig: closure_11 };
  fn.__closure = obj;
  fn.__workletHash = 3663814804791;
  fn.__initData = closure_13;
  const items = [first];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!closure_0) {
        callback(false);
      }
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  [][0] = tmp2[1];
  let tmp10 = null;
  if (first1) {
    obj = { style: null, children: null };
    const items1 = [closure_5.absoluteFill, , ];
    obj1 = { backgroundColor: null };
    obj1[0] = importDefault(tmp[8]).unsafe_rawColors.PRIMARY_800;
    items1[1] = obj1;
    items1[2] = animatedStyle;
    obj[0] = items1;
    const obj2 = { channel: null, onSkip: null };
    obj2[0] = channel;
    obj2[1] = tmp9;
    obj[1] = callback2(importDefault(tmp[9]), obj2);
    tmp10 = callback2(importDefault(tmp[6]).View, obj);
  }
  return tmp10;
}
function JoinStageOverlay(channel) {
  let first;
  importDefault = undefined;
  const tmp = callback(React.useState(false), 2);
  first = tmp[0];
  importDefault = tmp[1];
  let obj = first(4185);
  const fn = function s() {
    let obj = first(closure_1_2[7]);
    let num = 0;
    if (first) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_11) };
    return obj;
  };
  obj = { withSpring: first(4879).withSpring, showOverlay: first, viewAnimationConfig: closure_11 };
  fn.__closure = obj;
  fn.__workletHash = 1929951426580;
  fn.__initData = closure_15;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(true);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  obj = { style: null, children: null };
  const items = [closure_5.absoluteFill, { backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_800 }, animatedStyle];
  obj[0] = items;
  obj[1] = callback2(JoinStageViewDefault, { channel: channel.channel });
  return callback2(_modDef4185.View, obj);
}
function StagePromptWrapper(channel) {
  return callback2(RootThemeContextProvider.DisableCustomTheme, { children: callback2(StagePromptInner, { channel: channel.channel }) });
}
function StagePromptInner(channel) {
  const tmp = callback3();
  return callback2(AgeVerificationSpeakerActionSheet.AnimatedStartStagePrompt, { channel: channel.channel, style: callback3().startStagePrompt });
}
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
let closure_11 = { mass: 0.5, stiffness: 600, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let closure_12 = { fullScreen: { flex: 1 } };
let closure_13 = { code: "function StageChannelCallNavigatorTsx1(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}" };
let closure_15 = { code: "function StageChannelCallNavigatorTsx2(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}" };
createCacheKey = { startStagePrompt: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
let closure_17 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallNavigator.tsx");

export default function StageChannelCallNavigator(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let first;
  let callback;
  let React;
  c5 = undefined;
  closure_6 = undefined;
  let obj = channel(first[11]);
  const stageChannelStartEvent = obj.useStageChannelStartEvent(channel.id);
  ({ isModerator, isLive } = stageChannelStartEvent);
  obj1 = React;
  let obj2 = channel(first[12]);
  let tmp6 = isModerator;
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  if (isModerator) {
    tmp6 = !isLive;
  }
  importDefault = tmp6;
  let tmp4Result = tmp4(channel(first[5]).useModeratorOverlayChannelState(channel.id), 2);
  first = tmp4Result[0];
  callback = tmp9;
  const tmp11 = importDefault(first[13])(channel);
  React = tmp11;
  tmp4Result = tmp4(obj1.useState(false), 2);
  [tmp13, c5] = tmp4Result;
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = obj1.useEffect(() => {
    let obj = callback(first[14]);
    obj = { guildId: channel.guild_id, channelId: channel.id };
    const messages = obj.fetchMessages(obj);
  }, items);
  closure_6 = obj1.useRef(channel.id);
  const effect1 = obj1.useEffect(() => {
    closure_6.current = channel.id;
  });
  const items1 = [tmp11];
  const effect2 = obj1.useEffect(() => {
    let tmp2 = null == closure_4;
    if (!tmp2) {
      tmp2 = callback(first[15])(tmp);
    }
    if (!tmp2) {
      const participant = callback(first[16]).selectParticipant(ref.current, null);
      const obj = callback(first[16]);
    }
  }, items1);
  const items2 = [tmp6, tmp4Result[1], first];
  const effect3 = obj1.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = !closure_1;
    }
    if (tmp) {
      callback2();
    }
  }, items2);
  obj = { actionBar: callback2(importDefault(tmp2[17]), { channel }), expandedControls: callback2(importDefault(tmp2[18]), { channel }), isTouchingLeftScreenEdge: true, channel };
  obj = { theme: ThemeTypes.DARK, children: null };
  if (null != tmp11) {
    obj1 = { style: null, children: null };
    obj1[0] = fullScreen.fullScreen;
    obj2 = { channel: null, children: null };
    obj2[0] = channel;
    let tmp10Result = tmp10(tmp2[20]);
    const obj3 = { children: null };
    tmp10Result = tmp10(tmp2[21]);
    const obj4 = { channel: null, selectedParticipant: null };
    obj4[0] = channel;
    obj4[1] = tmp11;
    obj3[0] = tmp18(tmp(tmp2[22]).ChannelCallSingleController, obj4);
    const items3 = [tmp18(tmp10Result, obj3), , ];
    const obj5 = { header: null };
    const obj6 = { channel: null, fullscreenStream: true, onOpenRTCDebugOverlay: null };
    obj6[0] = channel;
    obj6[2] = function onOpenRTCDebugOverlay(arg0) {
      return _undefined(true);
    };
    obj5[0] = tmp18(tmp10(tmp2[24]), obj6);
    const merged = Object.assign(obj);
    items3[1] = tmp18(tmp10(tmp2[23]), obj5);
    if (tmp18Result) {
      const obj7 = { onClose: null };
      obj7[0] = function onClose() {
        return _undefined(false);
      };
      tmp18Result = tmp18(tmp10(tmp2[25]), obj7);
    }
    items3[2] = tmp18Result;
    obj2[1] = items3;
    obj1[1] = closure_9(tmp10Result, obj2);
    tmp18Result = tmp18(closure_6, obj1);
    const tmp10Result1 = tmp10(tmp2[23]);
    const tmp26 = closure_6;
    const tmp28 = closure_9;
  } else {
    if (first) {
      let tmp10Result2 = ModeratorViewOverlay;
    } else {
      if (isLive) {
        if (!isConnectedToVoiceChannel) {
          if (!first) {
            tmp10Result2 = JoinStageOverlay;
          }
        }
      }
      tmp10Result2 = tmp10(tmp2[26]);
    }
    const obj8 = { channel: null };
    obj8[0] = channel;
    const items4 = [tmp18(tmp10Result2, obj8), ];
    const obj9 = { header: null };
    const obj10 = { channel: null };
    obj10[0] = channel;
    obj9[0] = tmp18(tmp10(first ? tmp2[27] : tmp2[24]), obj10);
    const merged1 = Object.assign(obj);
    const obj11 = { channel: null };
    obj11[0] = channel;
    const items5 = [tmp18(tmp10(tmp2[28]), obj11), ];
    if (isModerator) {
      isModerator = !callback(React.useState(isLive), 1)[0];
    }
    if (isModerator) {
      isModerator = !first;
    }
    if (isModerator) {
      const obj12 = { channel: null };
      obj12[0] = channel;
      isModerator = tmp18(StagePromptWrapper, obj12);
    }
    const obj13 = { children: null };
    items5[1] = isModerator;
    obj9.children = items5;
    items4[1] = closure_9(tmp10(tmp2[23]), obj9);
    obj13[0] = items4;
    tmp18Result = tmp35(closure_10, obj13);
    const tmp10Result3 = tmp10(tmp2[23]);
    const tmp36 = closure_10;
  }
  obj[1] = tmp18Result;
  return callback2(channel(first[19]).ThemeContextProvider, obj);
};