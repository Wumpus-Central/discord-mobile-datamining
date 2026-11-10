// discord_app/modules/stage_channels/native/components/StageChannelCallNavigator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import MessageManagerDefault from "../../../messages/MessageManager.tsx";
import participantHasVideoDefault from "../../../video_calls/participantHasVideo.tsx";
import ModeratorOverlayState from "ModeratorOverlayState.tsx";
import ModeratorStartStageViewDefault from "ModeratorStartStageView.tsx";
import StageActionBarButtons from "StageActionBarButtons.tsx";
import JoinStageViewDefault from "JoinStageView.tsx";
import ThemeContextProvider_RootThemeContextProvider from "../../../../design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function ModeratorViewOverlay(channel) {
  channel = channel.channel;
  [first, [][0]] = ModeratorOverlayState.useModeratorOverlayChannelState(channel.id);
  [tmp6, c2] = _slicedToArray(noop.useState(first), 2);
  const tmp5 = _slicedToArray(noop.useState(first), 2);
  items = [closure_13, spring_spring.withSpring, tmp6, closure_11];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp7, tmp8, tmp9, tmp10] = items;
  class StageChannelCallNavigatorTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp8, tmp9, tmp10];
  StageChannelCallNavigatorTsx1.__closure = items1;
  StageChannelCallNavigatorTsx1.__workletHash = 5590822981710;
  StageChannelCallNavigatorTsx1.__initData = tmp7;
  const items2 = [first];
  const animatedStyle = _mod1652.useAnimatedStyle(StageChannelCallNavigatorTsx1);
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!closure_0) {
        _undefined2(false);
      }
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items2);
  let tmp14 = null;
  if (tmp6) {
    const obj4 = { style: null, children: null };
    const items3 = [hasOwnProperty.absoluteFill, ,];
    const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
    items3[1] = obj5;
    items3[2] = animatedStyle;
    obj4.style = items3;
    const obj6 = { channel, onSkip: tmp13 };
    obj4.children = React5(ModeratorStartStageViewDefault, obj6);
    tmp14 = React5(_modDef1652.View, obj4);
  }
  return tmp14;
}
function JoinStageOverlay(channel) {
  const tmp = _slicedToArray(noop.useState(false), 2);
  items = [closure_15, spring_spring.withSpring, tmp[0], closure_11];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp3, tmp4, tmp5, tmp6] = items;
  class StageChannelCallNavigatorTsx2 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp4, tmp5, tmp6];
  StageChannelCallNavigatorTsx2.__closure = items1;
  StageChannelCallNavigatorTsx2.__workletHash = 5763143772621;
  StageChannelCallNavigatorTsx2.__initData = tmp3;
  const animatedStyle = _mod1652.useAnimatedStyle(StageChannelCallNavigatorTsx2);
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_0(true);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const obj3 = { style: null, children: null };
  const items2 = [hasOwnProperty.absoluteFill, ,];
  items2[1] = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
  items2[2] = animatedStyle;
  obj3.style = items2;
  obj3.children = React5(JoinStageViewDefault, { channel: channel.channel });
  return React5(_modDef1652.View, obj3);
}
function StagePromptWrapper(channel) {
  return React5(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, {
    children: React5(StagePromptInner, { channel: channel.channel }),
  });
}
function StagePromptInner(channel) {
  const tmp = closure_17();
  return React5(StageActionBarButtons.AnimatedStartStagePrompt, {
    channel: channel.channel,
    style: closure_17().startStagePrompt,
  });
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
let closure_11 = { mass: 0.5, stiffness: 600, damping: 30, overshootClamping: false };
const fullScreen = { fullScreen: { flex: 1 } };
let closure_13 = {
  code: "(function StageChannelCallNavigatorTsx1(){let[withSpring,showStartStageView,viewAnimationConfig]=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};})",
};
let closure_15 = {
  code: "(function StageChannelCallNavigatorTsx2(){let[withSpring,showOverlay,viewAnimationConfig]=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};})",
};
const createStyles = fn(5142);
let obj2 = { startStagePrompt: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallNavigator.tsx");

export default function StageChannelCallNavigator(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let first;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  let ref;
  const stageChannelStartEvent = channel(first[11]).useStageChannelStartEvent(channel.id);
  ({ isModerator, isLive } = stageChannelStartEvent);
  let obj = channel(first[11]);
  let tmp6 = isModerator;
  const isConnectedToVoiceChannel = channel(first[12]).useIsConnectedToVoiceChannel(channel);
  if (isModerator) {
    tmp6 = !isLive;
  }
  importDefault = tmp6;
  const obj3 = channel(first[12]);
  const tmp4Result = _slicedToArray(channel(first[5]).useModeratorOverlayChannelState(channel.id), 2);
  first = tmp4Result[0];
  _slicedToArray = tmp9;
  const tmp11 = require("useSelectedParticipant")(channel);
  noop = tmp11;
  const tmpResult = channel(first[5]);
  [tmp13, c5] = noop.useState(false);
  items = [,];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = obj2.useEffect(() => {
    const messages = MessageManagerDefault.fetchMessages({ guildId: channel.guild_id, channelId: channel.id });
  }, items);
  ref = obj2.useRef(channel.id);
  const effect1 = obj2.useEffect(() => {
    closure_6.current = channel.id;
  });
  const items1 = [tmp11];
  const effect2 = obj2.useEffect(() => {
    let tmp2 = null == closure_4;
    if (!tmp2) {
      tmp2 = participantHasVideoDefault(tmp);
    }
    if (!tmp2) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(ref.current, null);
    }
  }, items1);
  const items2 = [tmp6, tmp4Result[1], first];
  const effect3 = obj2.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = !closure_1;
    }
    if (tmp) {
      closure_3();
    }
  }, items2);
  const obj4 = {
    actionBar: closure_8(require("StageActionBar"), { channel }),
    expandedControls: closure_8(require("StageChannelExpandedControls"), { channel }),
    isTouchingLeftScreenEdge: true,
    channel,
  };
  const obj5 = { theme: ThemeTypes.DARK, children: null };
  if (null != tmp11) {
    const obj6 = { style: fullScreen.fullScreen, children: null };
    const obj7 = { channel, children: null };
    const obj8 = { children: null };
    const tmp10Result = tmp10(tmp2[20]);
    const tmp26 = ref;
    const obj9 = { channel, selectedParticipant: tmp11 };
    obj8.children = closure_8(tmp(tmp2[22]).ChannelCallSingleController, obj9);
    const items3 = [closure_8(tmp10(tmp2[21]), obj8), ,];
    const obj10 = { header: null };
    const tmp10Result5 = tmp10(tmp2[21]);
    const obj11 = {
      channel,
      fullscreenStream: true,
      onOpenRTCDebugOverlay() {
        return _undefined(true);
      },
    };
    obj10.header = closure_8(tmp10(tmp2[24]), obj11);
    const merged = Object.assign(obj4);
    items3[1] = closure_8(tmp10(tmp2[23]), obj10);
    if (tmp18Result) {
      const obj12 = {
        onClose: function onCloseRTCDebugOverlay() {
          return _undefined(false);
        },
      };
      tmp18Result = closure_8(tmp10(tmp2[25]), obj12);
    }
    items3[2] = tmp18Result;
    obj7.children = items3;
    obj6.children = closure_9(tmp10Result, obj7);
    let tmp18Result2 = closure_8(tmp26, obj6);
    const tmp10Result6 = tmp10(tmp2[23]);
  } else {
    if (first) {
      let tmp10Result7 = ModeratorViewOverlay;
    } else {
      if (isLive) {
        if (!isConnectedToVoiceChannel) {
          if (!first) {
            tmp10Result7 = JoinStageOverlay;
          }
        }
      }
      tmp10Result7 = tmp10(tmp2[26]);
    }
    const obj13 = { channel };
    const items4 = [closure_8(tmp10Result7, obj13)];
    const obj14 = { header: null };
    const obj15 = { channel };
    obj14.header = closure_8(tmp10(first ? tmp2[27] : tmp2[24]), obj15);
    const merged1 = Object.assign(obj4);
    const obj16 = { channel };
    const items5 = [closure_8(tmp10(tmp2[28]), obj16)];
    if (isModerator) {
      isModerator = !_slicedToArray(noop.useState(isLive), 1)[0];
    }
    if (isModerator) {
      isModerator = !first;
    }
    if (isModerator) {
      const obj17 = { channel };
      isModerator = closure_8(StagePromptWrapper, obj17);
    }
    const obj18 = { children: null };
    items5[1] = isModerator;
    obj14.children = items5;
    items4[1] = closure_9(tmp10(tmp2[23]), obj14);
    obj18.children = items4;
    tmp18Result2 = closure_9(closure_10, obj18);
    const tmp10Result8 = tmp10(tmp2[23]);
  }
  obj5.children = tmp18Result2;
  return closure_8(channel(first[19]).ThemeContextProvider, obj5);
}
