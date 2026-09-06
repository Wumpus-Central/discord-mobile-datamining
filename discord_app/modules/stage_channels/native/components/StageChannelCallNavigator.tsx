// === Module 9659: StageChannelCallNavigator ===

// Module 9659 (StageChannelCallNavigator)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import spring from "spring" /* 4974 */;
import participantHasVideoDefault from "participantHasVideo" /* 9622 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9898 */;
import JoinStageViewDefault from "JoinStageView" /* 9940 */;
import MessageManagerDefault from "MessageManager" /* 9941 */;
import ThemeContextProvider_RootThemeContextProvider from "ThemeContextProvider/RootThemeContextProvider" /* 10075 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ModeratorViewOverlay(channel) {
  channel = channel.channel;
  let first;
  let first1;
  _slicedToArray = undefined;
  let obj = first(first1[5]);
  const tmp2 = _slicedToArray(obj.useModeratorOverlayChannelState(channel.id), 2);
  first = tmp2[0];
  importDefault = tmp4;
  const tmp5 = _slicedToArray(noop.useState(first), 2);
  first1 = tmp5[0];
  _slicedToArray = tmp5[1];
  let obj1 = first(first1[6]);
  const fn = function s() {
    let obj = spring;
    let num = 0;
    if (first1) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_11) };
    return obj;
  };
  obj = { withSpring: first(first1[7]).withSpring, showStartStageView: first1, viewAnimationConfig };
  fn.__closure = obj;
  fn.__workletHash = 3663814804791;
  fn.__initData = __initData;
  const items = [first];
  const animatedStyle = obj1.useAnimatedStyle(fn);
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
  [][0] = tmp2[1];
  let tmp10 = null;
  if (first1) {
    obj = { style: null, children: null };
    const items1 = [closure_5.absoluteFill, , ];
    obj1 = { backgroundColor: require("native").unsafe_rawColors.PRIMARY_800 };
    items1[1] = obj1;
    items1[2] = animatedStyle;
    obj.style = items1;
    const obj2 = { channel, onSkip: tmp9 };
    obj.children = closure_8(require("ModeratorStartStageView"), obj2);
    tmp10 = closure_8(require("ReanimatedRexport").View, obj);
  }
  return tmp10;
}
function JoinStageOverlay(channel) {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const showOverlay = tmp[0];
  importDefault = tmp[1];
  showOverlay(4296);
  const fn = function s() {
    let obj = spring;
    let num = 0;
    if (first) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_11) };
    return obj;
  };
  let obj = { withSpring: showOverlay(4974).withSpring, showOverlay, viewAnimationConfig };
  fn.__closure = obj;
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
  obj = { style: null, children: null };
  const items = [closure_5.absoluteFill, { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 }, animatedStyle];
  obj.style = items;
  obj.children = closure_8(JoinStageViewDefault, { channel: channel.channel });
  return closure_8(ReanimatedRexportDefault.View, obj);
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
fn(4560);
let createStyles = { startStagePrompt: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.startStagePrompt = createStyles;
let closure_17 = createStyles.createStyles(createStyles);
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
  let obj = channel(first[11]);
  const stageChannelStartEvent = obj.useStageChannelStartEvent(channel.id);
  ({ isModerator, isLive } = stageChannelStartEvent);
  let obj1 = noop;
  let obj2 = channel(first[12]);
  let tmp6 = isModerator;
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  if (isModerator) {
    tmp6 = !isLive;
  }
  importDefault = tmp6;
  let tmp4Result = tmp4(channel(first[5]).useModeratorOverlayChannelState(channel.id), 2);
  first = tmp4Result[0];
  _slicedToArray = tmp9;
  const tmp11 = require("useSelectedParticipant")(channel);
  noop = tmp11;
  tmp4Result = tmp4(obj1.useState(false), 2);
  [tmp13, c5] = tmp4Result;
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = obj1.useEffect(() => {
    const obj = { guildId: channel.guild_id, channelId: channel.id };
    const messages = obj.fetchMessages(obj);
  }, items);
  ref = obj1.useRef(channel.id);
  const effect1 = obj1.useEffect(() => {
    closure_6.current = channel.id;
  });
  const items1 = [tmp11];
  const effect2 = obj1.useEffect(() => {
    let tmp2 = null == closure_4;
    if (!tmp2) {
      tmp2 = participantHasVideoDefault(tmp);
    }
    if (!tmp2) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(ref.current, null);
    }
  }, items1);
  const items2 = [tmp6, tmp4Result[1], first];
  const effect3 = obj1.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = !closure_1;
    }
    if (tmp) {
      closure_3();
    }
  }, items2);
  obj = { actionBar: closure_8(require("StageActionBar"), { channel }), expandedControls: closure_8(require("StageChannelExpandedControls"), { channel }), isTouchingLeftScreenEdge: true, channel };
  obj = { theme: ThemeTypes.DARK, children: null };
  if (null != tmp11) {
    obj1 = { style: fullScreen.fullScreen, children: null };
    obj2 = { channel, children: null };
    tmp10(tmp2[20]);
    const obj3 = { children: null };
    const tmp10Result = tmp10(tmp2[21]);
    const obj4 = { channel, selectedParticipant: tmp11 };
    obj3.children = tmp18(tmp(tmp2[22]).ChannelCallSingleController, obj4);
    const items3 = [tmp18(tmp10Result, obj3), , ];
    const obj5 = { header: null };
    const obj6 = {
      channel,
      fullscreenStream: true,
      onOpenRTCDebugOverlay() {
          return _undefined(true);
        }
    };
    obj5.header = tmp18(tmp10(tmp2[24]), obj6);
    const merged = Object.assign(obj);
    items3[1] = tmp18(tmp10(tmp2[23]), obj5);
    if (tmp18Result) {
      const obj7 = {
        onClose() {
              return _undefined(false);
            }
      };
      tmp18Result = tmp18(tmp10(tmp2[25]), obj7);
    }
    items3[2] = tmp18Result;
    obj2.children = items3;
    obj1.children = closure_9(tmp10Result, obj2);
    tmp18Result = tmp18(ref, obj1);
    const tmp10Result1 = tmp10(tmp2[23]);
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
    const obj8 = { channel };
    const items4 = [tmp18(tmp10Result2, obj8), ];
    const obj9 = { header: null };
    const obj10 = { channel };
    obj9.header = tmp18(tmp10(first ? tmp2[27] : tmp2[24]), obj10);
    const merged1 = Object.assign(obj);
    const obj11 = { channel };
    const items5 = [tmp18(tmp10(tmp2[28]), obj11), ];
    if (isModerator) {
      isModerator = !_slicedToArray(noop.useState(isLive), 1)[0];
    }
    if (isModerator) {
      isModerator = !first;
    }
    if (isModerator) {
      const obj12 = { channel };
      isModerator = tmp18(StagePromptWrapper, obj12);
    }
    const obj13 = { children: null };
    items5[1] = isModerator;
    obj9.children = items5;
    items4[1] = closure_9(tmp10(tmp2[23]), obj9);
    obj13.children = items4;
    tmp18Result = tmp35(closure_10, obj13);
    const tmp10Result3 = tmp10(tmp2[23]);
  }
  obj.children = tmp18Result;
  return closure_8(channel(first[19]).ThemeContextProvider, obj);
};