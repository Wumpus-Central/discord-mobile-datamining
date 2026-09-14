// === Module 9789: StageChannelCallNavigator ===

// Module 9789 (StageChannelCallNavigator)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4373 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4837 */;
import spring from "spring" /* 5055 */;
import participantHasVideoDefault from "participantHasVideo" /* 9752 */;
import StageActionBarButtons from "StageActionBarButtons" /* 10028 */;
import JoinStageViewDefault from "JoinStageView" /* 10070 */;
import MessageManagerDefault from "MessageManager" /* 10071 */;
import ThemeContextProvider_RootThemeContextProvider from "ThemeContextProvider/RootThemeContextProvider" /* 10204 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ModeratorViewOverlay(channel) {
  channel = channel.channel;
  first = undefined;
  let first1;
  _slicedToArray = undefined;
  [first, [][0]] = first(first1[5]).useModeratorOverlayChannelState(channel.id);
  importDefault = tmp4;
  const tmp5 = _slicedToArray(noop.useState(first), 2);
  first1 = tmp5[0];
  _slicedToArray = tmp5[1];
  let obj = first(first1[5]);
  const fn = function s() {
    let num = 0;
    if (first1) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, closure_11) };
  };
  const obj2 = first(first1[6]);
  fn.__closure = { withSpring: first(first1[7]).withSpring, showStartStageView: first1, viewAnimationConfig };
  fn.__workletHash = 3663814804791;
  fn.__initData = __initData;
  const items = [first];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!closure_0) {
        closure_1_3(false);
      }
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let tmp10 = null;
  if (first1) {
    const obj4 = { style: null, children: null };
    const items1 = [closure_5.absoluteFill, , ];
    const obj5 = { backgroundColor: require("native").unsafe_rawColors.PRIMARY_800 };
    items1[1] = obj5;
    items1[2] = animatedStyle;
    obj4.style = items1;
    const obj6 = { channel, onSkip: tmp9 };
    obj4.children = closure_8(require("ModeratorStartStageView"), obj6);
    tmp10 = closure_8(require("ReanimatedRexport").View, obj4);
  }
  return tmp10;
}
function JoinStageOverlay(channel) {
  showOverlay = undefined;
  importDefault = undefined;
  [showOverlay, importDefault] = noop.useState(false);
  const fn = function s() {
    let num = 0;
    if (first) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, closure_11) };
  };
  let obj = showOverlay(4373);
  fn.__closure = { withSpring: showOverlay(5055).withSpring, showOverlay, viewAnimationConfig };
  fn.__workletHash = 1929951426580;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_1(true);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const obj3 = { style: null, children: null };
  const items = [closure_5.absoluteFill, , ];
  const obj2 = { withSpring: showOverlay(5055).withSpring, showOverlay, viewAnimationConfig };
  items[1] = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
  items[2] = animatedStyle;
  obj3.style = items;
  obj3.children = closure_8(JoinStageViewDefault, { channel: channel.channel });
  return closure_8(ReanimatedRexportDefault.View, obj3);
}
function StagePromptWrapper(channel) {
  return React6(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, { children: React6(StagePromptInner, { channel: channel.channel }) });
}
function StagePromptInner(channel) {
  const tmp = closure_17();
  return React6(StageActionBarButtons.AnimatedStartStagePrompt, { channel: channel.channel, style: closure_17().startStagePrompt });
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const viewAnimationConfig = { mass: 0.5, stiffness: 600, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
const fullScreen = { fullScreen: { flex: 1 } };
const __initData = { code: "function StageChannelCallNavigatorTsx1(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}" };
const __initData2 = { code: "function StageChannelCallNavigatorTsx2(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}" };
const createStyles = fn(4636);
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
  const items = [, ];
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
  const obj4 = { actionBar: closure_8(require("StageActionBar"), { channel }), expandedControls: closure_8(require("StageChannelExpandedControls"), { channel }), isTouchingLeftScreenEdge: true, channel };
  const obj5 = { theme: ThemeTypes.DARK, children: null };
  if (null != tmp11) {
    const obj6 = { style: fullScreen.fullScreen, children: null };
    const obj7 = { channel, children: null };
    const obj8 = { children: null };
    const tmp10Result = tmp10(tmp2[20]);
    const tmp26 = ref;
    const obj9 = { channel, selectedParticipant: tmp11 };
    obj8.children = closure_8(tmp(tmp2[22]).ChannelCallSingleController, obj9);
    const items3 = [closure_8(tmp10(tmp2[21]), obj8), , ];
    const obj10 = { header: null };
    const tmp10Result5 = tmp10(tmp2[21]);
    const obj11 = {
      channel,
      fullscreenStream: true,
      onOpenRTCDebugOverlay() {
          return _undefined(true);
        }
    };
    obj10.header = closure_8(tmp10(tmp2[24]), obj11);
    const merged = Object.assign(obj4);
    items3[1] = closure_8(tmp10(tmp2[23]), obj10);
    if (tmp18Result) {
      const obj12 = {
        onClose() {
              return _undefined(false);
            }
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
    const items4 = [closure_8(tmp10Result7, obj13), ];
    const obj14 = { header: null };
    const obj15 = { channel };
    obj14.header = closure_8(tmp10(first ? tmp2[27] : tmp2[24]), obj15);
    const merged1 = Object.assign(obj4);
    const obj16 = { channel };
    const items5 = [closure_8(tmp10(tmp2[28]), obj16), ];
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
};