// discord_app/modules/stage_channels/native/components/StageChannelCallNavigator.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import MessageManagerDefault from "../../../messages/MessageManager.tsx";
import participantHasVideoDefault from "../../../video_calls/participantHasVideo.tsx";
import StageActionBarButtons from "StageActionBarButtons.tsx";
import JoinStageViewDefault from "JoinStageView.tsx";
import ThemeContextProvider_RootThemeContextProvider from "../../../../design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let channel, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_1;
      let closure_3;
      let first;
      let first1;
      let tmp10;
      let tmp22;
      let tmp9;
      const tmp = first1;
      let obj = first(first1[6]);
      const cResult = obj.c(14);
      channel = channel.channel;
      const obj2 = first(first1[7]);
      const tmp3 = _slicedToArray(obj2.useModeratorOverlayChannelState(channel.id), 2);
      first = tmp3[0];
      importDefault = tmp5;
      [first1, _slicedToArray] = react.useState(first);
      const fn = function c() {
        let num = 0;
        const withSpring = spring.withSpring;
        spring;
        if (first1) {
          num = 1;
        }
        const obj = { opacity: withSpring(num, viewAnimationConfig) };
        return obj;
      };
      const obj4 = first(first1[8]);
      fn.__closure = { withSpring: first(first1[9]).withSpring, showStartStageView: first1, viewAnimationConfig };
      fn.__workletHash = 3663814804791;
      fn.__initData = __initData;
      ({ withSpring: first(first1[9]).withSpring, showStartStageView: first1, viewAnimationConfig });
      const animatedStyle = obj4.useAnimatedStyle(fn);
      if (cResult[0] !== first) {
        const fn2 = function s() {
          let closure_0;
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
        let num = 0;
        cResult[0] = first;
        cResult[1] = fn2;
        cResult[2] = items;
        tmp10 = items;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[1];
        tmp10 = cResult[2];
      }
      const effect = react.useEffect(tmp9, tmp10);
      if (cResult[3] !== tmp3[1]) {
        class S {
          constructor() {
            closure_3(false);
            closure_1();
          }
        }
        cResult[3] = tmp3[1];
        cResult[4] = S;
      } else {
        class S {
          constructor() {
            closure_3(false);
            closure_1();
          }
        }
      }
      let tmp13 = null;
      if (first1) {
        class S {
          constructor() {
            closure_3(false);
            closure_1();
          }
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              closure_3(false);
              closure_1();
            }
          }
          tmp15[0] = require("native").unsafe_rawColors.PRIMARY_800;
          cResult[5] = tmp15;
        } else {
          class S {
            constructor() {
              closure_3(false);
              closure_1();
            }
          }
        }
        if (cResult[6] !== animatedStyle) {
          class S {
            constructor() {
              closure_3(false);
              closure_1();
            }
          }
          const items1 = [closure_5.absoluteFill, tmp15, animatedStyle];
          cResult[6] = animatedStyle;
          cResult[7] = items1;
        } else {
          class S {
            constructor() {
              closure_3(false);
              closure_1();
            }
          }
        }
        if (cResult[8] === channel) {
          class S {
            constructor() {
              closure_3(false);
              closure_1();
            }
          }
          if (cResult[11] === tmp17) {
            class S {
              constructor() {
                closure_3(false);
                closure_1();
              }
            }
            tmp13 = tmp22;
          }
          const obj6 = { style: tmp17, children: tmp18 };
          const tmp25 = closure_8(require("ReanimatedRexport").View, obj6);
          cResult[11] = tmp17;
          cResult[12] = tmp18;
          cResult[13] = tmp25;
          tmp22 = tmp25;
        }
        const obj7 = { channel, onSkip: S };
        cResult[8] = channel;
        cResult[9] = S;
        cResult[10] = closure_8(require("ModeratorStartStageView"), obj7);
        const tmp21 = closure_8(require("ModeratorStartStageView"), obj7);
      }
      return tmp13;
    }
  : (channel) => {
      let closure_1;
      let closure_3;
      let first;
      let items1;
      let obj6;
      channel = channel.channel;
      first = undefined;
      let first1;
      _slicedToArray = undefined;
      const tmp = first1;
      let obj = first(first1[7]);
      [first, [][0]] = obj.useModeratorOverlayChannelState(channel.id);
      importDefault = tmp4;
      const tmp5 = _slicedToArray(react.useState(first), 2);
      first1 = tmp5[0];
      _slicedToArray = tmp5[1];
      const fn = function c() {
        let num = 0;
        const withSpring = spring.withSpring;
        spring;
        if (first1) {
          num = 1;
        }
        const obj = { opacity: withSpring(num, viewAnimationConfig) };
        return obj;
      };
      const obj2 = first(first1[8]);
      fn.__closure = { withSpring: first(first1[9]).withSpring, showStartStageView: first1, viewAnimationConfig };
      fn.__workletHash = 4916554991060;
      fn.__initData = __initData2;
      const items = [first];
      ({ withSpring: first(first1[9]).withSpring, showStartStageView: first1, viewAnimationConfig });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const effect = react.useEffect(() => {
        let closure_0;
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
        const obj4 = { style: items1, children: closure_8(require("ModeratorStartStageView"), obj6) };
        items1 = [closure_5.absoluteFill, ,];
        const obj5 = { backgroundColor: require("native").unsafe_rawColors.PRIMARY_800 };
        const View = require("ReanimatedRexport").View;
        items1[1] = obj5;
        items1[2] = animatedStyle;
        obj6 = { channel, onSkip: tmp9 };
        tmp10 = closure_8(View, obj4);
      }
      return tmp10;
    };
const __initData3 = {
  code: "function StageChannelCallNavigatorTsx3(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}",
};
const __initData4 = {
  code: "function StageChannelCallNavigatorTsx4(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_1;
      let showOverlay;
      let tmp11;
      let tmp13;
      let tmp6;
      let tmp7;
      let tmp9;
      let obj = showOverlay(576);
      const cResult = obj.c(10);
      channel = channel.channel;
      [showOverlay, importDefault] = react.useState(false);
      const fn = function c() {
        let num = 0;
        const withSpring = spring.withSpring;
        spring;
        if (first) {
          num = 1;
        }
        const obj = { opacity: withSpring(num, viewAnimationConfig) };
        return obj;
      };
      const obj3 = showOverlay(4612);
      fn.__closure = { withSpring: showOverlay(5597).withSpring, showOverlay, viewAnimationConfig };
      fn.__workletHash = 3866068723381;
      fn.__initData = __initData3;
      ({ withSpring: showOverlay(5597).withSpring, showOverlay, viewAnimationConfig });
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s() {
          let closure_0;
          const timeout = setTimeout(() => {
            closure_1_1(true);
          }, closure_1_13);
          return () => {
            clearTimeout(closure_0);
          };
        };
        const items = [];
        let num = 0;
        cResult[0] = fn2;
        cResult[1] = items;
        tmp6 = fn2;
        tmp7 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const effect = react.useEffect(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
        cResult[2] = obj5;
        tmp9 = obj5;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== animatedStyle) {
        const items1 = [closure_5.absoluteFill, tmp9, animatedStyle];
        cResult[3] = animatedStyle;
        cResult[4] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== channel) {
        const obj6 = { channel };
        const tmp16 = closure_8(JoinStageViewDefault, obj6);
        cResult[5] = channel;
        cResult[6] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === tmp11) {
        let tmp17;
        if (cResult[8] === tmp13) {
          tmp17 = cResult[9];
        }
        return tmp17;
      }
      const tmp18 = closure_8(ReanimatedRexportDefault.View, { style: tmp11, children: tmp13 });
      cResult[7] = tmp11;
      cResult[8] = tmp13;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    }
  : (channel) => {
      let closure_1;
      let items;
      let showOverlay;
      showOverlay = undefined;
      importDefault = undefined;
      channel = channel.channel;
      [showOverlay, importDefault] = react.useState(false);
      let obj = showOverlay(4612);
      const fn = function c() {
        let num = 0;
        const withSpring = spring.withSpring;
        spring;
        if (first) {
          num = 1;
        }
        const obj = { opacity: withSpring(num, viewAnimationConfig) };
        return obj;
      };
      fn.__closure = { withSpring: showOverlay(5597).withSpring, showOverlay, viewAnimationConfig };
      fn.__workletHash = 17555856853074;
      fn.__initData = __initData4;
      ({ withSpring: showOverlay(5597).withSpring, showOverlay, viewAnimationConfig });
      const animatedStyle = obj.useAnimatedStyle(fn);
      const effect = react.useEffect(() => {
        let closure_0;
        const timeout = setTimeout(() => {
          closure_1_1(true);
        }, closure_1_13);
        return () => {
          clearTimeout(closure_0);
        };
      }, []);
      const obj3 = { style: items, children: closure_8(JoinStageViewDefault, { channel }) };
      items = [closure_5.absoluteFill, ,];
      const obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
      const View = ReanimatedRexportDefault.View;
      items[1] = obj4;
      items[2] = animatedStyle;
      return closure_8(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_1;
      let closure_3;
      let closure_4;
      let closure_5;
      let first1;
      let isLive;
      let isModerator;
      let items2;
      let tmp = channel;
      let tmp2 = first1;
      let obj = channel(first1[6]);
      const cResult = obj.c(31);
      channel = channel.channel;
      let obj2 = channel(first1[13]);
      const stageChannelStartEvent = obj2.useStageChannelStartEvent(channel.id);
      ({ isModerator, isLive } = stageChannelStartEvent);
      const first = _slicedToArray(react.useState(isLive), 1)[0];
      let tmp8 = isModerator;
      const obj4 = channel(first1[14]);
      const isConnectedToVoiceChannel = obj4.useIsConnectedToVoiceChannel(channel);
      if (isModerator) {
        tmp8 = !isLive;
      }
      importDefault = tmp8;
      const tmpResult = tmp(tmp2[7]);
      const tmp5Result = _slicedToArray(tmpResult.useModeratorOverlayChannelState(channel.id), 2);
      first1 = tmp5Result[0];
      _slicedToArray = tmp11;
      if (isLive) {
        isLive = !isConnectedToVoiceChannel;
      }
      if (isLive) {
        isLive = !first1;
      }
      if (isModerator) {
        isModerator = !first;
      }
      if (isModerator) {
        isModerator = !first1;
      }
      const tmp12 = require("useSelectedParticipant")(channel);
      react = tmp12;
      [r10046, closure_5] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          return closure_5(true);
        };
        cResult[0] = fn;
        let first2 = fn;
      } else {
        first2 = cResult[0];
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
        let tmp20;
        class Y {
          constructor() {
            return closure_5(false);
          }
        }
        const effect = obj3.useEffect(B, items2);
        const ref = obj3.useRef(channel.id);
        if (cResult[6] !== channel.id) {
          class U {
            constructor() {
              ref.current = channel.id;
            }
          }
          cResult[6] = channel.id;
          cResult[7] = U;
        } else {
          class U {
            constructor() {
              ref.current = channel.id;
            }
          }
        }
        const effect1 = obj3.useEffect(U);
        if (cResult[8] !== tmp12) {
          class U {
            constructor() {
              ref.current = channel.id;
            }
          }
          const items = [tmp12];
          cResult[8] = tmp12;
          cResult[9] = tmp21;
          class J {
            constructor() {
              const tmp = first1 && !closure_1;
              if (tmp) {
                closure_3();
              }
            }
          }
          tmp20 = items;
        } else {
          class U {
            constructor() {
              ref.current = channel.id;
            }
          }
          tmp20 = cResult[10];
        }
        const effect2 = obj3.useEffect(tmp21, tmp20);
        if (cResult[11] === tmp8) {
          class U {
            constructor() {
              ref.current = channel.id;
            }
          }
        }
        class J {
          constructor() {
            const tmp = first1 && !closure_1;
            if (tmp) {
              closure_3();
            }
          }
        }
        const items1 = [tmp8, tmp5Result[1], first1];
        cResult[11] = tmp8;
        cResult[12] = tmp5Result[1];
        cResult[13] = first1;
        cResult[14] = J;
        cResult[15] = items1;
      }
      class B {
        constructor() {
          const obj = MessageManagerDefault;
          const obj2 = { guildId: channel.guild_id, channelId: channel.id };
          const messages = obj.fetchMessages(obj2);
        }
      }
      items2 = [,];
      ({ id: arr[0], guild_id: arr[1], guild_id: tmp3[2] } = channel);
      cResult[3] = channel.id;
      cResult[4] = B;
      cResult[5] = items2;
    }
  : (channel) => {
      let _undefined;
      let c5;
      let closure_1;
      let closure_3;
      let closure_4;
      let isLive;
      let isModerator;
      let items3;
      let items5;
      let obj11;
      let obj15;
      let obj7;
      let obj9;
      let tmp11Result;
      let tmp14;
      let tmp19Result;
      let tmp19Result2;
      channel = channel.channel;
      importDefault = undefined;
      let first1;
      _slicedToArray = undefined;
      react = undefined;
      c5 = undefined;
      let ref;
      let tmp = channel;
      let tmp2 = first1;
      let obj = channel(first1[13]);
      const stageChannelStartEvent = obj.useStageChannelStartEvent(channel.id);
      ({ isModerator, isLive } = stageChannelStartEvent);
      let obj2 = react;
      const first = _slicedToArray(react.useState(isLive), 1)[0];
      let tmp7 = isModerator;
      const obj3 = channel(first1[14]);
      const isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(channel);
      if (isModerator) {
        tmp7 = !isLive;
      }
      importDefault = tmp7;
      const tmpResult = tmp(tmp2[7]);
      const tmp4Result = _slicedToArray(tmpResult.useModeratorOverlayChannelState(channel.id), 2);
      first1 = tmp4Result[0];
      _slicedToArray = tmp10;
      const tmp12 = require("useSelectedParticipant")(channel);
      react = tmp12;
      [tmp14, c5] = _slicedToArray(obj2.useState(false), 2);
      const items = [,];
      ({ id: arr[0], guild_id: arr[1] } = channel);
      _slicedToArray(obj2.useState(false), 2);
      const effect = obj2.useEffect(() => {
        const obj = MessageManagerDefault;
        const obj2 = { guildId: channel.guild_id, channelId: channel.id };
        const messages = obj.fetchMessages(obj2);
      }, items);
      ref = obj2.useRef(channel.id);
      const effect1 = obj2.useEffect(() => {
        ref.current = channel.id;
      });
      const items1 = [tmp12];
      const effect2 = obj2.useEffect(() => {
        const tmp2 = null == closure_4 || participantHasVideoDefault(tmp);
        if (!tmp2) {
          const obj = ChannelRTCActionCreatorsDefault;
          const participant = obj.selectParticipant(ref.current, null);
        }
      }, items1);
      const items2 = [tmp7, tmp4Result[1], first1];
      const effect3 = obj2.useEffect(() => {
        const tmp = first1 && !closure_1;
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
      const obj5 = { theme: ThemeTypes.DARK, children: tmp19Result2 };
      const ThemeContextProvider = tmp(tmp2[21]).ThemeContextProvider;
      if (null != tmp12) {
        const obj6 = { style: fullScreen.fullScreen, children: closure_9(tmp11Result, obj7) };
        obj7 = { channel, children: items3 };
        const obj8 = { children: closure_8(tmp(tmp2[24]).ChannelCallSingleController, obj9) };
        obj9 = { channel, selectedParticipant: tmp12 };
        tmp11Result = require("RevealProvider");
        const tmp11Result5 = require("GestureContainer");
        items3 = [closure_8(tmp11Result5, obj8), ,];
        const obj10 = { header: closure_8(require("StageActionHeader"), obj11) };
        obj11 = {
          channel,
          fullscreenStream: true,
          onOpenRTCDebugOverlay() {
            return _undefined(true);
          },
        };
        const tmp11Result6 = require("FocusedControls");
        const merged = Object.assign(obj4);
        items3[1] = closure_8(tmp11Result6, obj10);
        const tmp27 = ref;
        if (tmp19Result) {
          const obj12 = {
            onClose() {
              return _undefined(false);
            },
          };
          tmp19Result = closure_8(require("RTCDebugOverlay"), obj12);
        }
        items3[2] = tmp19Result;
        tmp19Result2 = closure_8(tmp27, obj6);
      } else {
        let tmp11Result7;
        if (first1) {
          tmp11Result7 = closure_16;
        } else {
          if (isLive) {
            if (!isConnectedToVoiceChannel) {
              if (!first1) {
                tmp11Result7 = closure_19;
              }
            }
          }
          tmp11Result7 = tmp11(tmp2[28]);
        }
        const obj13 = { channel };
        const items4 = [closure_8(tmp11Result7, obj13)];
        const obj14 = { header: closure_8(importDefault(first1 ? tmp2[29] : tmp2[26]), obj15), children: items5 };
        obj15 = { channel };
        const tmp11Result8 = require("FocusedControls");
        const merged1 = Object.assign(obj4);
        const obj16 = { channel };
        items5 = [closure_8(require("ActiveSpeakerTooltip"), obj16)];
        if (isModerator) {
          isModerator = !first;
        }
        if (isModerator) {
          isModerator = !first1;
        }
        if (isModerator) {
          const obj17 = { channel };
          isModerator = closure_8(closure_21, obj17);
        }
        const obj18 = { children: items4 };
        items5[1] = isModerator;
        items4[1] = closure_9(tmp11Result8, obj14);
        tmp19Result2 = closure_9(closure_10, obj18);
      }
      return closure_8(ThemeContextProvider, obj5);
    };
let obj = { startStagePrompt: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_20 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let obj3;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      channel = channel.channel;
      if (cResult[0] !== channel) {
        const obj2 = { children: metroImportAll(closure_22, obj3) };
        obj3 = { channel };
        const DisableCustomTheme = ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme;
        const tmp7 = metroImportAll(DisableCustomTheme, obj2);
        cResult[0] = channel;
        cResult[1] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (channel) => {
      channel = channel.channel;
      const obj = { children: metroImportAll(closure_22, { channel }) };
      const DisableCustomTheme = ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme;
      return metroImportAll(DisableCustomTheme, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const obj = react2;
      const cResult = obj.c(3);
      channel = channel.channel;
      const tmp4 = closure_20();
      if (cResult[0] === channel) {
        let tmp5;
        if (cResult[1] === tmp4.startStagePrompt) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj2 = { channel, style: tmp4.startStagePrompt };
      const tmp6 = metroImportAll(StageActionBarButtons.AnimatedStartStagePrompt, obj2);
      cResult[0] = channel;
      cResult[1] = tmp4.startStagePrompt;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (channel) => {
      channel = channel.channel;
      const obj = { channel, style: closure_20().startStagePrompt };
      return metroImportAll(StageActionBarButtons.AnimatedStartStagePrompt, obj);
    };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallNavigator.tsx");

export default tmp4;
