// discord_app/modules/stage_channels/native/components/StageChannelCallNavigator.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import MessageManagerDefault from "../../../messages/MessageManager.tsx";
import participantHasVideoDefault from "../../../video_calls/participantHasVideo.tsx";
import StageActionBarButtons from "StageActionBarButtons.tsx";
import JoinStageViewDefault from "JoinStageView.tsx";
import ThemeContextProvider_RootThemeContextProvider from "../../../../design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const viewAnimationConfig = {
  mass: 0.5,
  stiffness: 600,
  damping: 30,
  overshootClamping: false,
  restSpeedThreshold: 0.01,
  restDisplacementThreshold: 0.01,
};
const fullScreen = { fullScreen: { flex: 1 } };
let c13 = 500;
const __initData = {
  code: "function StageChannelCallNavigatorTsx1(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}",
};
const __initData2 = {
  code: "function StageChannelCallNavigatorTsx2(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}",
};
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp = first1;
      const cResult = first(first1[6]).c(14);
      channel = channel.channel;
      let obj = first(first1[6]);
      const tmp3 = _slicedToArray(first(first1[7]).useModeratorOverlayChannelState(channel.id), 2);
      first = tmp3[0];
      importDefault = tmp5;
      [first1, _slicedToArray] = noop.useState(first);
      const obj2 = first(first1[7]);
      const fn = function c() {
        let num = 0;
        if (first1) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, closure_11) };
      };
      const obj4 = first(first1[8]);
      fn.__closure = { withSpring: first(first1[9]).withSpring, showStartStageView: first1, viewAnimationConfig };
      fn.__workletHash = 3663814804791;
      fn.__initData = __initData;
      const animatedStyle = obj4.useAnimatedStyle(fn);
      if (cResult[0] !== first) {
        const fn2 = function s() {
          const timeout = setTimeout(() => {
            if (!closure_0) {
              closure_1_3(false);
            }
          }, closure_1_13);
          return () => {
            clearTimeout(closure_0);
          };
        };
        const items = [first];
        cResult[0] = first;
        cResult[1] = fn2;
        cResult[2] = items;
        let tmp10 = items;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[1];
        tmp10 = cResult[2];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      if (cResult[3] !== tmp3[1]) {
        class S {
          constructor() {
            tmp = closure_3(false);
            tmp2 = closure_1();
            return;
          }
        }
        cResult[3] = tmp5;
        cResult[4] = S;
      } else {
        class S {
          constructor() {
            tmp = closure_3(false);
            tmp2 = closure_1();
            return;
          }
        }
      }
      if (!first1) {
        class S {
          constructor() {
            tmp = closure_3(false);
            tmp2 = closure_1();
            return;
          }
        }
      } else {
        class S {
          constructor() {
            tmp = closure_3(false);
            tmp2 = closure_1();
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              tmp = closure_3(false);
              tmp2 = closure_1();
              return;
            }
          }
          tmp14[0] = require("native").unsafe_rawColors.PRIMARY_800;
          cResult[5] = tmp14;
        } else {
          class S {
            constructor() {
              tmp = closure_3(false);
              tmp2 = closure_1();
              return;
            }
          }
        }
        if (cResult[6] !== animatedStyle) {
          class S {
            constructor() {
              tmp = closure_3(false);
              tmp2 = closure_1();
              return;
            }
          }
          const items1 = [closure_5.absoluteFill, tmp14, animatedStyle];
          cResult[6] = animatedStyle;
          cResult[7] = items1;
        } else {
          class S {
            constructor() {
              tmp = closure_3(false);
              tmp2 = closure_1();
              return;
            }
          }
        }
        if (cResult[8] === channel) {
          class S {
            constructor() {
              tmp = closure_3(false);
              tmp2 = closure_1();
              return;
            }
          }
          if (cResult[11] === tmp16) {
            class S {
              constructor() {
                tmp = closure_3(false);
                tmp2 = closure_1();
                return;
              }
            }
          }
          const obj6 = { style: tmp16, children: tmp17 };
          tmp = closure_8(require("ReanimatedRexport").View, obj6);
          cResult[11] = tmp16;
          cResult[12] = tmp17;
          cResult[13] = tmp;
        }
        const obj7 = { channel, onSkip: S };
        const tmp20 = closure_8(require("ModeratorStartStageView"), obj7);
        cResult[8] = channel;
        cResult[9] = S;
        cResult[10] = tmp20;
      }
      const obj5 = { withSpring: first(first1[9]).withSpring, showStartStageView: first1, viewAnimationConfig };
    }
  : (channel) => {
      channel = channel.channel;
      first = undefined;
      let first1;
      _slicedToArray = undefined;
      [first, [][0]] = first(first1[7]).useModeratorOverlayChannelState(channel.id);
      importDefault = tmp4;
      const tmp5 = _slicedToArray(noop.useState(first), 2);
      first1 = tmp5[0];
      _slicedToArray = tmp5[1];
      let obj = first(first1[7]);
      const fn = function c() {
        let num = 0;
        if (first1) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, closure_11) };
      };
      const obj2 = first(first1[8]);
      fn.__closure = { withSpring: first(first1[9]).withSpring, showStartStageView: first1, viewAnimationConfig };
      fn.__workletHash = 4916554991060;
      fn.__initData = __initData2;
      const items = [first];
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const effect = noop.useEffect(() => {
        const timeout = setTimeout(() => {
          if (!closure_0) {
            closure_1_3(false);
          }
        }, closure_1_13);
        return () => {
          clearTimeout(closure_0);
        };
      }, items);
      let tmp10 = null;
      if (first1) {
        const obj4 = { style: null, children: null };
        const items1 = [closure_5.absoluteFill, ,];
        const obj5 = { backgroundColor: require("native").unsafe_rawColors.PRIMARY_800 };
        items1[1] = obj5;
        items1[2] = animatedStyle;
        obj4.style = items1;
        const obj6 = { channel, onSkip: tmp9 };
        obj4.children = closure_8(require("ModeratorStartStageView"), obj6);
        tmp10 = closure_8(require("ReanimatedRexport").View, obj4);
      }
      return tmp10;
    };
const __initData3 = {
  code: "function StageChannelCallNavigatorTsx3(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}",
};
const __initData4 = {
  code: "function StageChannelCallNavigatorTsx4(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}",
};
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = showOverlay(576).c(10);
      channel = channel.channel;
      [showOverlay, importDefault] = noop.useState(false);
      let obj = showOverlay(576);
      const fn = function c() {
        let num = 0;
        if (first) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, closure_11) };
      };
      const obj3 = showOverlay(4618);
      fn.__closure = { withSpring: showOverlay(5604).withSpring, showOverlay, viewAnimationConfig };
      fn.__workletHash = 3866068723381;
      fn.__initData = __initData3;
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s() {
          const timeout = setTimeout(() => {
            closure_1_1(true);
          }, closure_1_13);
          return () => {
            clearTimeout(closure_0);
          };
        };
        const items = [];
        cResult[0] = fn2;
        cResult[1] = items;
        tmp6 = fn2;
        tmp7 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
        cResult[2] = obj5;
        let tmp9 = obj5;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== animatedStyle) {
        const items1 = [closure_5.absoluteFill, tmp9, animatedStyle];
        cResult[3] = animatedStyle;
        cResult[4] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== channel) {
        const obj6 = { channel };
        const tmp16 = closure_8(JoinStageViewDefault, obj6);
        cResult[5] = channel;
        cResult[6] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === tmp11) {
        if (cResult[8] === tmp13) {
          let tmp17 = cResult[9];
        }
        return tmp17;
      }
      const tmp18 = closure_8(ReanimatedRexportDefault.View, { style: tmp11, children: tmp13 });
      cResult[7] = tmp11;
      cResult[8] = tmp13;
      cResult[9] = tmp18;
      tmp17 = tmp18;
      const obj4 = { withSpring: showOverlay(5604).withSpring, showOverlay, viewAnimationConfig };
    }
  : (channel) => {
      showOverlay = undefined;
      importDefault = undefined;
      [showOverlay, importDefault] = noop.useState(false);
      const fn = function c() {
        let num = 0;
        if (first) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, closure_11) };
      };
      let obj = showOverlay(4618);
      fn.__closure = { withSpring: showOverlay(5604).withSpring, showOverlay, viewAnimationConfig };
      fn.__workletHash = 17555856853074;
      fn.__initData = __initData4;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const effect = noop.useEffect(() => {
        const timeout = setTimeout(() => {
          closure_1_1(true);
        }, closure_1_13);
        return () => {
          clearTimeout(closure_0);
        };
      }, []);
      const obj3 = { style: null, children: null };
      const items = [closure_5.absoluteFill, ,];
      const obj2 = { withSpring: showOverlay(5604).withSpring, showOverlay, viewAnimationConfig };
      items[1] = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
      items[2] = animatedStyle;
      obj3.style = items;
      obj3.children = closure_8(JoinStageViewDefault, { channel: channel.channel });
      return closure_8(ReanimatedRexportDefault.View, obj3);
    };
ReactCompilerGating = fn(558);
const createStyles = fn(4896);
let obj5 = { startStagePrompt: null };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(first[6]).c(31);
      channel = channel.channel;
      let obj = channel(first[6]);
      let tmp = channel;
      const stageChannelStartEvent = channel(first[13]).useStageChannelStartEvent(channel.id);
      ({ isModerator, isLive } = stageChannelStartEvent);
      const obj2 = channel(first[13]);
      let tmp7 = isModerator;
      const isConnectedToVoiceChannel = channel(first[14]).useIsConnectedToVoiceChannel(channel);
      if (isModerator) {
        tmp7 = !isLive;
      }
      importDefault = tmp7;
      const obj4 = channel(first[14]);
      [first] = tmp(first[7]).useModeratorOverlayChannelState(channel.id);
      _slicedToArray = tmp10;
      if (isLive) {
        isLive = !isConnectedToVoiceChannel;
      }
      if (isLive) {
        isLive = !first;
      }
      if (isModerator) {
        isModerator = !_slicedToArray(noop.useState(isLive), 1)[0];
      }
      if (isModerator) {
        isModerator = !first;
      }
      const tmp11 = require("useSelectedParticipant")(channel);
      noop = tmp11;
      const tmpResult = tmp(first[7]);
      [r10046, closure_5] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          return closure_1_5(true);
        };
        cResult[0] = fn;
        let first1 = fn;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return closure_5(false);
          }
        }
        cResult[1] = Y;
      } else {
        class Y {
          constructor() {
            return closure_5(false);
          }
        }
      }
      if (cResult[2] === channel.guild_id) {
        class Y {
          constructor() {
            return closure_5(false);
          }
        }
        const effect = obj3.useEffect(B, items2);
        obj3.useRef(channel.id);
        if (cResult[6] !== channel.id) {
          class U {
            constructor() {
              closure_6.current = channel.id;
              return;
            }
          }
          cResult[6] = channel.id;
          cResult[7] = U;
        } else {
          class U {
            constructor() {
              closure_6.current = channel.id;
              return;
            }
          }
        }
        const effect1 = obj3.useEffect(U);
        if (cResult[8] !== tmp11) {
          class U {
            constructor() {
              closure_6.current = channel.id;
              return;
            }
          }
          const items = [tmp11];
          cResult[8] = tmp11;
          cResult[9] = tmp20;
          class J {
            constructor() {
              tmp = closure_2;
              if (closure_2) {
                tmp2 = closure_1;
                tmp = !closure_1;
              }
              if (tmp) {
                tmp3 = closure_3;
                tmp4 = closure_3();
              }
              return;
            }
          }
          let tmp19 = items;
        } else {
          class U {
            constructor() {
              closure_6.current = channel.id;
              return;
            }
          }
          tmp19 = cResult[10];
        }
        const effect2 = obj3.useEffect(tmp20, tmp19);
        if (cResult[11] === tmp7) {
          class U {
            constructor() {
              closure_6.current = channel.id;
              return;
            }
          }
        }
        class J {
          constructor() {
            tmp = closure_2;
            if (closure_2) {
              tmp2 = closure_1;
              tmp = !closure_1;
            }
            if (tmp) {
              tmp3 = closure_3;
              tmp4 = closure_3();
            }
            return;
          }
        }
        const items1 = [tmp7, tmp10, first];
        cResult[11] = tmp7;
        cResult[12] = tmp10;
        cResult[13] = first;
        cResult[14] = J;
        cResult[15] = items1;
      }
      class B {
        constructor() {
          obj = closure_1(closure_2[16]);
          obj1 = { guildId: channel.guild_id, channelId: channel.id };
          messages = obj.fetchMessages(obj1);
          return;
        }
      }
      items2 = [,];
      ({ id: arr[0], guild_id: arr[1], guild_id: tmp3[2] } = channel);
      cResult[3] = channel.id;
      cResult[4] = B;
      cResult[5] = items2;
      const tmp5Result2 = _slicedToArray(noop.useState(false), 2);
    }
  : (channel) => {
      channel = channel.channel;
      importDefault = undefined;
      let first;
      _slicedToArray = undefined;
      noop = undefined;
      c5 = undefined;
      let ref;
      const stageChannelStartEvent = channel(first[13]).useStageChannelStartEvent(channel.id);
      ({ isModerator, isLive } = stageChannelStartEvent);
      let obj = channel(first[13]);
      let tmp6 = isModerator;
      const isConnectedToVoiceChannel = channel(first[14]).useIsConnectedToVoiceChannel(channel);
      if (isModerator) {
        tmp6 = !isLive;
      }
      importDefault = tmp6;
      const obj3 = channel(first[14]);
      const tmp4Result = _slicedToArray(channel(first[7]).useModeratorOverlayChannelState(channel.id), 2);
      first = tmp4Result[0];
      _slicedToArray = tmp9;
      const tmp11 = require("useSelectedParticipant")(channel);
      noop = tmp11;
      const tmpResult = channel(first[7]);
      [tmp13, c5] = noop.useState(false);
      const items = [,];
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
        const tmp10Result = tmp10(tmp2[22]);
        const tmp26 = ref;
        const obj9 = { channel, selectedParticipant: tmp11 };
        obj8.children = closure_8(tmp(tmp2[24]).ChannelCallSingleController, obj9);
        const items3 = [closure_8(tmp10(tmp2[23]), obj8), ,];
        const obj10 = { header: null };
        const tmp10Result5 = tmp10(tmp2[23]);
        const obj11 = {
          channel,
          fullscreenStream: true,
          onOpenRTCDebugOverlay() {
            return _undefined(true);
          },
        };
        obj10.header = closure_8(tmp10(tmp2[26]), obj11);
        const merged = Object.assign(obj4);
        items3[1] = closure_8(tmp10(tmp2[25]), obj10);
        if (tmp18Result) {
          const obj12 = {
            onClose() {
              return _undefined(false);
            },
          };
          tmp18Result = closure_8(tmp10(tmp2[27]), obj12);
        }
        items3[2] = tmp18Result;
        obj7.children = items3;
        obj6.children = closure_9(tmp10Result, obj7);
        let tmp18Result2 = closure_8(tmp26, obj6);
        const tmp10Result6 = tmp10(tmp2[25]);
      } else {
        if (first) {
          let tmp10Result7 = closure_16;
        } else {
          if (isLive) {
            if (!isConnectedToVoiceChannel) {
              if (!first) {
                tmp10Result7 = closure_19;
              }
            }
          }
          tmp10Result7 = tmp10(tmp2[28]);
        }
        const obj13 = { channel };
        const items4 = [closure_8(tmp10Result7, obj13)];
        const obj14 = { header: null };
        const obj15 = { channel };
        obj14.header = closure_8(tmp10(first ? tmp2[29] : tmp2[26]), obj15);
        const merged1 = Object.assign(obj4);
        const obj16 = { channel };
        const items5 = [closure_8(tmp10(tmp2[30]), obj16)];
        if (isModerator) {
          isModerator = !_slicedToArray(noop.useState(isLive), 1)[0];
        }
        if (isModerator) {
          isModerator = !first;
        }
        if (isModerator) {
          const obj17 = { channel };
          isModerator = closure_8(closure_21, obj17);
        }
        const obj18 = { children: null };
        items5[1] = isModerator;
        obj14.children = items5;
        items4[1] = closure_9(tmp10(tmp2[25]), obj14);
        obj18.children = items4;
        tmp18Result2 = closure_9(closure_10, obj18);
        const tmp10Result8 = tmp10(tmp2[25]);
      }
      obj5.children = tmp18Result2;
      return closure_8(channel(first[21]).ThemeContextProvider, obj5);
    };
obj5.startStagePrompt = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_20 = createStyles.createStyles(obj5);
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(2);
      channel = channel.channel;
      if (cResult[0] !== channel) {
        const obj2 = { children: null };
        const obj3 = { channel };
        obj2.children = closure_1_8(closure_22, obj3);
        const tmp7 = closure_1_8(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, obj2);
        cResult[0] = channel;
        cResult[1] = tmp7;
        let tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (channel) =>
      closure_1_8(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, {
        children: closure_1_8(closure_22, { channel: channel.channel }),
      });
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(3);
      channel = channel.channel;
      const tmp4 = closure_20();
      if (cResult[0] === channel) {
        if (cResult[1] === tmp4.startStagePrompt) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = closure_1_8(StageActionBarButtons.AnimatedStartStagePrompt, {
        channel,
        style: tmp4.startStagePrompt,
      });
      cResult[0] = channel;
      cResult[1] = tmp4.startStagePrompt;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj2 = { channel, style: tmp4.startStagePrompt };
    }
  : (channel) => {
      const tmp = closure_20();
      return closure_1_8(StageActionBarButtons.AnimatedStartStagePrompt, {
        channel: channel.channel,
        style: closure_20().startStagePrompt,
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallNavigator.tsx");

export default tmp4;
