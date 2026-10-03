// discord_app/modules/video_calls/native/components/ChannelCallActionBar.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useIsRemoteDefault from "../../../game_console/hooks/useIsRemote.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import VoiceChatHooks from "../../../voice_chat/VoiceChatHooks.tsx";
import CallBarActionAll from "CallBarAction.tsx";
import useIsFiveButtonLayout from "../useIsFiveButtonLayout.tsx";
import openIgnoreThermalStateAlert from "../../../activities/native/openIgnoreThermalStateAlert.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import CameraLottie from "../../../../design/components/LottieIcon/native/generated/CameraLottie.tsx";
import useScreenshareUtilsDefault from "../useScreenshareUtils.tsx";
import _modDef9653 from "../../../../../_runtime/metro/09653__.js";
import _modDef9654 from "../../../../../_runtime/metro/09654__.js";
import _modDef9655 from "../../../../../_runtime/metro/09655__.js";
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen.tsx";
import ChannelCallMicButton from "ChannelCallMicButton.tsx";
import DisconnectRemoteButton from "DisconnectRemoteButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import ChannelCallLifecycleStore from "../ChannelCallLifecycleStore.tsx";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
let View = fn(17).View;
const ParticipantTypes = fn(4911).ParticipantTypes;
const Features = fn(4915).Features;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: {
    height: fn(9075).CALL_ACTION_BAR_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerForFiveButtonLayout: null,
};
let obj3 = {
  height: fn(9075).CALL_ACTION_BAR_HEIGHT,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};
obj2.containerForFiveButtonLayout = {
  height: fn(9075).FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT,
  paddingHorizontal: 16,
  paddingTop: fn(9075).FIVE_BUTTON_CONTAINER_PADDING_TOP,
  paddingBottom: fn(9075).FIVE_BUTTON_CONTAINER_PADDING_BOTTOM,
  justifyContent: "center",
  flexDirection: "row",
};
let closure_18 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(stateFromStores2[15]).c(21);
      channel = channel.channel;
      const tmp5 = require("useHasVideoPermission")(channel);
      importDefault = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelCallLifecycleStore];
        const fn = function o() {
          return reactingToThermalState.isReactingToThermalState();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj = channel(stateFromStores2[15]);
      const tmp4 = importDefault;
      const stateFromStores = channel(stateFromStores2[17]).useStateFromStores(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MediaEngineStore];
        const fn2 = function h() {
          return MediaEngineStore.isVideoEnabled();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp11 = fn2;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult = channel(stateFromStores2[17]);
      const stateFromStores1 = channel(stateFromStores2[17]).useStateFromStores(tmp10, tmp11);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [MediaEngineStore];
        const fn3 = function v() {
          return MediaEngineStore.supports(constants.VIDEO);
        };
        cResult[4] = items2;
        cResult[5] = fn3;
        let tmp15 = fn3;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[4];
        tmp15 = cResult[5];
      }
      const tmpResult4 = channel(stateFromStores2[17]);
      stateFromStores2 = channel(stateFromStores2[17]).useStateFromStores(tmp14, tmp15);
      const tmpResult5 = channel(stateFromStores2[17]);
      const stageHasMedia = channel(stateFromStores2[19]).useStageHasMedia(channel.id);
      let tmp19 = !stateFromStores2;
      if (stateFromStores2) {
        tmp19 = !tmp5;
      }
      if (!tmp19) {
        let reachedLimit = !stageHasMedia;
        if (!stageHasMedia) {
          reachedLimit = tmp4(tmp2[18])(channel).reachedLimit;
        }
        tmp19 = reachedLimit;
      }
      ref = ref.useRef(null);
      let str = "unmute";
      if (stateFromStores1) {
        str = "mute";
      }
      if (cResult[6] !== str) {
        let obj2 = { ref, animation: str };
        const tmp23 = closure_15(tmp(tmp2[20]).CameraLottie, obj2);
        cResult[6] = str;
        cResult[7] = tmp23;
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            obj = closure_0(closure_3[21]);
            handleToggleVideoResult = obj.handleToggleVideo(channel);
            if (closure_4 != null) {
              current = closure_4.current;
              if (current != null) {
                playResult = current.play();
              }
            }
            return;
          }
        }
        cResult[8] = B;
      } else {
        class B {
          constructor(arg0) {
            obj = closure_0(closure_3[21]);
            handleToggleVideoResult = obj.handleToggleVideo(channel);
            if (closure_4 != null) {
              current = closure_4.current;
              if (current != null) {
                playResult = current.play();
              }
            }
            return;
          }
        }
      }
      View = B;
      if (cResult[9] === channel) {
        class B {
          constructor(arg0) {
            obj = closure_0(closure_3[21]);
            handleToggleVideoResult = obj.handleToggleVideo(channel);
            if (closure_4 != null) {
              current = closure_4.current;
              if (current != null) {
                playResult = current.play();
              }
            }
            return;
          }
        }
      }
      class F {
        constructor() {
          if (closure_3) {
            tmp = closure_1;
            if (closure_1) {
              tmp5 = closure_2;
              if (closure_2) {
                tmp9 = closure_0;
                tmp10 = closure_3;
                obj2 = closure_0(closure_3[22]);
                result = obj2.openIgnoreThermalStateAlert(() => closure_1_5(channel));
              } else {
                tmp6 = closure_5;
                tmp7 = channel;
                tmp8 = closure_5(channel);
              }
            } else {
              tmp2 = closure_0;
              tmp3 = closure_3;
              obj = closure_0(closure_3[21]);
              result1 = obj.showCameraDisabledAlert();
            }
          }
          return;
        }
      }
      cResult[9] = channel;
      cResult[10] = tmp5;
      cResult[11] = stateFromStores;
      cResult[12] = stateFromStores2;
      cResult[13] = F;
      const tmpResult6 = channel(stateFromStores2[19]);
    }
  : (channel) => {
      channel = channel.channel;
      importDefault = undefined;
      let stateFromStores1;
      const tmp3 = require("useHasVideoPermission")(channel);
      importDefault = tmp3;
      const items = [ChannelCallLifecycleStore];
      const stateFromStores = channel(stateFromStores1[17]).useStateFromStores(items, () =>
        reactingToThermalState.isReactingToThermalState(),
      );
      let obj = channel(stateFromStores1[17]);
      const tmp = importDefault;
      const items1 = [MediaEngineStore];
      stateFromStores1 = channel(stateFromStores1[17]).useStateFromStores(items1, () =>
        MediaEngineStore.isVideoEnabled(),
      );
      let obj2 = channel(stateFromStores1[17]);
      const items2 = [MediaEngineStore];
      const stateFromStores2 = channel(stateFromStores1[17]).useStateFromStores(items2, () =>
        MediaEngineStore.supports(constants.VIDEO),
      );
      const obj3 = channel(stateFromStores1[17]);
      const stageHasMedia = channel(stateFromStores1[19]).useStageHasMedia(channel.id);
      stateFromStores2.useRef(null);
      const items3 = [stateFromStores1];
      const memo = stateFromStores2.useMemo(() => {
        const obj = { ref, animation: null };
        let str = "unmute";
        if (stateFromStores1) {
          str = "mute";
        }
        obj.animation = str;
        return closure_2_15(CameraLottie.CameraLottie, obj);
      }, items3);
      const callback = stateFromStores2.useCallback((channel) => {
        CallsUtils.handleToggleVideo(channel);
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
      }, []);
      const items4 = [channel, stateFromStores2, tmp3, stateFromStores, callback];
      const callback1 = stateFromStores2.useCallback(() => {
        if (stateFromStores2) {
          if (closure_1) {
            if (stateFromStores) {
              const result = openIgnoreThermalStateAlert.openIgnoreThermalStateAlert(() => callback(channel));
            } else {
              callback(channel);
            }
          } else {
            const result1 = CallsUtils.showCameraDisabledAlert();
          }
        }
      }, items4);
      let tmp13 = !stateFromStores2;
      if (stateFromStores2) {
        tmp13 = !tmp3;
      }
      if (!tmp13) {
        let reachedLimit = !stageHasMedia;
        if (!stageHasMedia) {
          reachedLimit = require("useChannelVideoLimit")(channel).reachedLimit;
        }
        tmp13 = reachedLimit;
      }
      const obj5 = {
        appearsDisabled: tmp13,
        isActive: stateFromStores1,
        onPress: callback1,
        accessibilityLabel: null,
        source: null,
        isSmallSize: null,
        lottieComponent: null,
      };
      const intl = tmp4(tmp2[23]).intl;
      obj5.accessibilityLabel = intl.string(channel(stateFromStores1[23]).t.HK4JIu);
      obj5.source = tmp(stateFromStores1[25]);
      obj5.isSmallSize = channel.isSmallSize;
      obj5.lottieComponent = memo;
      return closure_15(stateFromStores(stateFromStores1[24]).ToggledActionButton, obj5);
    };
let closure_19 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isSmallSize) => {
      const cResult = c.c(10);
      isSmallSize = isSmallSize.isSmallSize;
      ({ isActive, onPress, imgSource, isFeatureEnabled } = useScreenshareUtilsDefault(isSmallSize.channel));
      if (cResult[0] === isFeatureEnabled) {
        if (cResult[1] === onPress) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.XF1nZz);
          cResult[3] = stringResult;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] === imgSource) {
          if (cResult[5] === isActive) {
            if (cResult[6] === isSmallSize) {
              if (cResult[7] === tmp5) {
                if (cResult[8] === tmp6) {
                  let tmp10 = cResult[9];
                }
                return tmp10;
              }
            }
          }
        }
        const obj2 = {
          appearsDisabled: !isFeatureEnabled,
          source: imgSource,
          isActive,
          accessibilityLabel: tmp8,
          onPress: tmp5,
          isSmallSize,
        };
        const tmp13 = closure_1_15(CallBarActionAll.ToggledActionButton, obj2);
        cResult[4] = imgSource;
        cResult[5] = isActive;
        cResult[6] = isSmallSize;
        cResult[7] = tmp5;
        cResult[8] = !isFeatureEnabled;
        cResult[9] = tmp13;
        tmp10 = tmp13;
      }
      let fn = onPress;
      if (!isFeatureEnabled) {
        fn = () => {};
      }
      cResult[0] = isFeatureEnabled;
      cResult[1] = onPress;
      cResult[2] = fn;
      tmp5 = fn;
      const tmp4 = useScreenshareUtilsDefault(isSmallSize.channel);
    }
  : (arg0) => {
      ({ channel, isSmallSize } = arg0);
      ({ onPress, isFeatureEnabled, isActive, imgSource } = useScreenshareUtilsDefault(channel));
      if (!isFeatureEnabled) {
        onPress = () => {};
      }
      const obj = {
        appearsDisabled: !isFeatureEnabled,
        source: imgSource,
        isActive,
        accessibilityLabel: null,
        onPress: null,
        isSmallSize: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.XF1nZz);
      obj.onPress = onPress;
      obj.isSmallSize = isSmallSize;
      return closure_1_15(CallBarActionAll.ToggledActionButton, obj);
    };
let closure_20 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(10);
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      const maskedSpeakerStates = CallsUtils.useMaskedSpeakerStates();
      ({ isAudioRouteEnabled, toggleAudio } = maskedSpeakerStates);
      const routeSource = maskedSpeakerStates.routeSource;
      const isConnectedToVoiceChannel = VoiceChatHooks.useIsConnectedToVoiceChannel(channel);
      if (cResult[0] === channel.id) {
        if (cResult[1] === isConnectedToVoiceChannel) {
          if (cResult[2] === toggleAudio) {
            let tmp6 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t["A/Ly/2"]);
            cResult[4] = stringResult;
            let tmp8 = stringResult;
          } else {
            tmp8 = cResult[4];
          }
          if (cResult[5] === isAudioRouteEnabled) {
            if (cResult[6] === isSmallSize) {
              if (cResult[7] === routeSource) {
                if (cResult[8] === tmp6) {
                  let tmp10 = cResult[9];
                }
                return tmp10;
              }
            }
          }
          const obj4 = {
            isActive: isAudioRouteEnabled,
            source: routeSource,
            onPress: tmp6,
            accessibilityLabel: tmp8,
            isSmallSize,
          };
          const tmp13 = closure_1_15(CallBarActionAll.ToggledActionButton, obj4);
          cResult[5] = isAudioRouteEnabled;
          cResult[6] = isSmallSize;
          cResult[7] = routeSource;
          cResult[8] = tmp6;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
      }
      const fn = function n() {
        toggleAudio(channel.id, isConnectedToVoiceChannel);
      };
      cResult[0] = channel.id;
      cResult[1] = isConnectedToVoiceChannel;
      cResult[2] = toggleAudio;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (channel) => {
      channel = channel.channel;
      c1 = undefined;
      const maskedSpeakerStates = CallsUtils.useMaskedSpeakerStates();
      ({ toggleAudio: c1, isAudioRouteEnabled, routeSource } = maskedSpeakerStates);
      closure_2 = VoiceChatHooks.useIsConnectedToVoiceChannel(channel);
      const obj3 = {
        isActive: isAudioRouteEnabled,
        source: routeSource,
        onPress() {
          _undefined(channel.id, closure_2);
        },
        accessibilityLabel: null,
        isSmallSize: null,
      };
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t["A/Ly/2"]);
      obj3.isSmallSize = channel.isSmallSize;
      return closure_1_15(CallBarActionAll.ToggledActionButton, obj3);
    };
let closure_21 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(6);
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["6vrfgt"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function l() {
          CallsUtils.handleDisconnect(channel);
        };
        cResult[1] = channel;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === isSmallSize) {
        if (cResult[4] === tmp6) {
          let tmp7 = cResult[5];
        }
        return tmp7;
      }
      const obj = channel(576);
      const tmp8 = closure_15(CallBarActionAll.PrimaryActionButton, {
        source: _modDef9653,
        accessibilityLabel: first,
        isSmallSize,
        onPress: tmp6,
      });
      cResult[3] = isSmallSize;
      cResult[4] = tmp6;
      cResult[5] = tmp8;
      tmp7 = tmp8;
      const obj2 = { source: _modDef9653, accessibilityLabel: first, isSmallSize, onPress: tmp6 };
    }
  : (channel) => {
      channel = channel.channel;
      const obj = { source: _modDef9653, accessibilityLabel: null, isSmallSize: null, onPress: null };
      const intl = channel(1126).intl;
      obj.accessibilityLabel = intl.string(channel(1126).t["6vrfgt"]);
      obj.isSmallSize = channel.isSmallSize;
      obj.onPress = function onPress() {
        CallsUtils.handleDisconnect(channel);
      };
      return closure_15(CallBarActionAll.PrimaryActionButton, obj);
    };
let closure_22 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp2 = dependencyMap;
      const cResult = channel(576).c(13);
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore, AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function l() {
          const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
          if (null != selectedParticipant) {
            if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
              let tmp4 = null;
            }
            return tmp4;
          }
          let id;
          if (selectedParticipant != null) {
            id = selectedParticipant.id;
          }
          tmp4 = id;
        };
        cResult[1] = channel.id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationStreamingStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        class T {
          constructor() {
            activeStreamForStreamKey = null;
            if (null != closure_1) {
              tmp3 = closure_9;
              activeStreamForStreamKey = closure_9.getActiveStreamForStreamKey(tmp);
            }
            return activeStreamForStreamKey;
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = T;
      } else {
        class T {
          constructor() {
            activeStreamForStreamKey = null;
            if (null != closure_1) {
              tmp3 = closure_9;
              activeStreamForStreamKey = closure_9.getActiveStreamForStreamKey(tmp);
            }
            return activeStreamForStreamKey;
          }
        }
      }
      const tmpResult = channel(504);
      const stateFromStores1 = channel(504).useStateFromStores(tmp9, T);
      if (null == stateFromStores1) {
        class T {
          constructor() {
            activeStreamForStreamKey = null;
            if (null != closure_1) {
              tmp3 = closure_9;
              activeStreamForStreamKey = closure_9.getActiveStreamForStreamKey(tmp);
            }
            return activeStreamForStreamKey;
          }
        }
      } else {
        class T {
          constructor() {
            activeStreamForStreamKey = null;
            if (null != closure_1) {
              tmp3 = closure_9;
              activeStreamForStreamKey = closure_9.getActiveStreamForStreamKey(tmp);
            }
            return activeStreamForStreamKey;
          }
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              activeStreamForStreamKey = null;
              if (null != closure_1) {
                tmp3 = closure_9;
                activeStreamForStreamKey = closure_9.getActiveStreamForStreamKey(tmp);
              }
              return activeStreamForStreamKey;
            }
          }
          class N {
            constructor() {
              obj = closure_1(closure_3[29]);
              participant = obj.selectParticipant(channel.id, null);
              obj2 = closure_0(closure_3[30]);
              obj3 = closure_0(closure_3[31]);
              stopStreamResult = obj2.stopStream(obj3.encodeStreamKey(closure_2));
              return;
            }
          }
          const stringResult = obj4.string(tmp(1126).t.q3O3J8);
          const tmp13 = obj4.string(tmp(1126).t.q3O3J8);
        } else {
          class T {
            constructor() {
              activeStreamForStreamKey = null;
              if (null != closure_1) {
                tmp3 = closure_9;
                activeStreamForStreamKey = closure_9.getActiveStreamForStreamKey(tmp);
              }
              return activeStreamForStreamKey;
            }
          }
        }
        if (cResult[7] === stateFromStores1) {
          class T {
            constructor() {
              activeStreamForStreamKey = null;
              if (null != closure_1) {
                tmp3 = closure_9;
                activeStreamForStreamKey = closure_9.getActiveStreamForStreamKey(tmp);
              }
              return activeStreamForStreamKey;
            }
          }
          if (cResult[10] === isSmallSize) {
            class T {
              constructor() {
                activeStreamForStreamKey = null;
                if (null != closure_1) {
                  tmp3 = closure_9;
                  activeStreamForStreamKey = closure_9.getActiveStreamForStreamKey(tmp);
                }
                return activeStreamForStreamKey;
              }
            }
          }
          class N {
            constructor() {
              obj = closure_1(closure_3[29]);
              participant = obj.selectParticipant(channel.id, null);
              obj2 = closure_0(closure_3[30]);
              obj3 = closure_0(closure_3[31]);
              stopStreamResult = obj2.stopStream(obj3.encodeStreamKey(closure_2));
              return;
            }
          }
          tmp2 = stateFromStores(9654);
          tmp19[0] = tmp2;
          tmp19[1] = tmp13;
          tmp19[2] = isSmallSize;
          tmp19[3] = N;
          const tmp21 = closure_15(stateFromStores1(9076).PrimaryActionButton, tmp19);
          cResult[10] = isSmallSize;
          cResult[11] = N;
          cResult[12] = tmp21;
        }
        class N {
          constructor() {
            obj = closure_1(closure_3[29]);
            participant = obj.selectParticipant(channel.id, null);
            obj2 = closure_0(closure_3[30]);
            obj3 = closure_0(closure_3[31]);
            stopStreamResult = obj2.stopStream(obj3.encodeStreamKey(closure_2));
            return;
          }
        }
        cResult[7] = stateFromStores1;
        cResult[8] = channel.id;
        cResult[9] = N;
      }
      const tmpResult2 = channel(504);
    }
  : (channel) => {
      channel = channel.channel;
      const items = [ChannelRTCStore, AuthenticationStore];
      importDefault = channel(504).useStateFromStores(items, () => {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            let tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      });
      let obj = channel(504);
      const items1 = [ApplicationStreamingStore];
      const stateFromStores = channel(504).useStateFromStores(items1, () => {
        let activeStreamForStreamKey = null;
        if (null != closure_1) {
          activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
        }
        return activeStreamForStreamKey;
      });
      let tmp4 = null;
      if (null != stateFromStores) {
        const obj3 = { source: _modDef9654, accessibilityLabel: null, isSmallSize: null, onPress: null };
        const intl = tmp(1126).intl;
        obj3.accessibilityLabel = intl.string(tmp(1126).t.q3O3J8);
        obj3.isSmallSize = channel.isSmallSize;
        obj3.onPress = function onPress() {
          const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
          const obj2 = StreamActionCreators;
          obj2.stopStream(StreamKeyUtils.encodeStreamKey(stateFromStores));
        };
        tmp4 = closure_15(stateFromStores(9076).PrimaryActionButton, obj3);
      }
      return tmp4;
    };
let closure_23 = tmp7;
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isSmallSize) => {
      const cResult = c.c(4);
      isSmallSize = isSmallSize.isSmallSize;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
          let _location;
          if (currentEmbeddedActivity != null) {
            _location = currentEmbeddedActivity.location;
          }
          const obj2 = { location: _location, applicationId: null };
          let applicationId;
          if (currentEmbeddedActivity != null) {
            applicationId = currentEmbeddedActivity.applicationId;
          }
          obj2.applicationId = applicationId;
          EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.k0Aph0);
        cResult[1] = stringResult;
        let tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== isSmallSize) {
        let obj2 = { accessibilityLabel: tmp5, onPress: first, source: _modDef9655, isSmallSize };
        const tmp11 = closure_1_15(CallBarActionAll.PrimaryActionButton, obj2);
        cResult[2] = isSmallSize;
        cResult[3] = tmp11;
        let tmp7 = tmp11;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : (isSmallSize) => {
      const obj = { accessibilityLabel: null, onPress: null, source: null, isSmallSize: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.k0Aph0);
      obj.onPress = function onPress() {
        currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
        let _location;
        if (currentEmbeddedActivity != null) {
          _location = currentEmbeddedActivity.location;
        }
        const obj2 = { location: _location, applicationId: null };
        let applicationId;
        if (currentEmbeddedActivity != null) {
          applicationId = currentEmbeddedActivity.applicationId;
        }
        obj2.applicationId = applicationId;
        EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
      };
      obj.source = _modDef9655;
      obj.isSmallSize = isSmallSize.isSmallSize;
      return closure_1_15(CallBarActionAll.PrimaryActionButton, obj);
    };
let obj11 = {
  NONE: 0,
  [0]: "NONE",
  SCREEN_SHARE_START: 1,
  [1]: "SCREEN_SHARE_START",
  SCREEN_SHARE_END: 2,
  [2]: "SCREEN_SHARE_END",
  AUDIO_ROUTE: 3,
  [3]: "AUDIO_ROUTE",
};
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(4);
      channel = channel.channel;
      const isConnectedToVoiceChannel = VoiceChatHooks.useIsConnectedToVoiceChannel(channel);
      const tmp3 = useIsRemoteDefault();
      let tmp4 = isConnectedToVoiceChannel;
      if (isConnectedToVoiceChannel) {
        tmp4 = !tmp3;
      }
      let isActive = isConnectedToVoiceChannel;
      if (isConnectedToVoiceChannel) {
        isActive = !tmp3;
      }
      if (isActive) {
        isActive = useScreenshareUtilsDefault(channel).isActive;
      }
      let tmp5 = isConnectedToVoiceChannel;
      if (isConnectedToVoiceChannel) {
        tmp5 = !tmp3;
      }
      if (cResult[0] === tmp4) {
        if (cResult[1] === isActive) {
          if (cResult[2] === tmp5) {
            let tmp6 = cResult[3];
          }
          return tmp6;
        }
      }
      const obj3 = {};
      obj3[obj11.AUDIO_ROUTE] = tmp4;
      obj3[obj11.NONE] = true;
      obj3[obj11.SCREEN_SHARE_END] = isActive;
      obj3[obj11.SCREEN_SHARE_START] = tmp5;
      cResult[0] = tmp4;
      cResult[1] = isActive;
      cResult[2] = tmp5;
      cResult[3] = obj3;
      tmp6 = obj3;
    }
  : (channel) => {
      channel = channel.channel;
      let isConnectedToVoiceChannel = VoiceChatHooks.useIsConnectedToVoiceChannel(channel);
      const tmp2 = useIsRemoteDefault();
      let tmp4 = isConnectedToVoiceChannel;
      if (isConnectedToVoiceChannel) {
        tmp4 = !tmp2;
      }
      const obj2 = {};
      obj2[obj11.AUDIO_ROUTE] = tmp4;
      obj2[obj11.NONE] = true;
      let isActive = isConnectedToVoiceChannel;
      if (isConnectedToVoiceChannel) {
        isActive = !tmp2;
      }
      if (isActive) {
        isActive = useScreenshareUtilsDefault(channel).isActive;
      }
      obj2[obj11.SCREEN_SHARE_END] = isActive;
      if (isConnectedToVoiceChannel) {
        isConnectedToVoiceChannel = !tmp2;
      }
      obj2[obj11.SCREEN_SHARE_START] = isConnectedToVoiceChannel;
      return obj2;
    };
let closure_26 = tmp8;
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(2);
      channel = channel.channel;
      if (cResult[0] !== channel) {
        const obj2 = { channel };
        cResult[0] = channel;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      const tmp3 = closure_26(tmp2);
      if (tmp3[obj11.SCREEN_SHARE_END]) {
        let AUDIO_ROUTE = obj11.SCREEN_SHARE_END;
      } else {
        if (!tmp3[obj11.AUDIO_ROUTE]) {
          AUDIO_ROUTE = tmp3[obj11.SCREEN_SHARE_START] ? obj11.SCREEN_SHARE_START : obj11.NONE;
        }
        AUDIO_ROUTE = obj11.AUDIO_ROUTE;
      }
      return AUDIO_ROUTE;
    }
  : (channel) => {
      channel = channel.channel;
      const tmp = closure_26({ channel });
      if (tmp[obj11.SCREEN_SHARE_END]) {
        let AUDIO_ROUTE = obj11.SCREEN_SHARE_END;
      } else {
        if (!tmp[obj11.AUDIO_ROUTE]) {
          AUDIO_ROUTE = tmp[obj11.SCREEN_SHARE_START] ? obj11.SCREEN_SHARE_START : obj11.NONE;
        }
        AUDIO_ROUTE = obj11.AUDIO_ROUTE;
      }
      return AUDIO_ROUTE;
    };
let closure_27 = tmp9;
let obj14 = {
  END_STREAM: 0,
  [0]: "END_STREAM",
  END_ACTIVITY: 1,
  [1]: "END_ACTIVITY",
  END_CALL: 2,
  [2]: "END_CALL",
  END_REMOTE: 3,
  [3]: "END_REMOTE",
};
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(15);
      channel = channel.channel;
      const obj = channel(576);
      const isConnectedToVoiceChannel = channel(9054).useIsConnectedToVoiceChannel(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore, AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
        cResult[1] = channel.id;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
      }
      const obj2 = channel(9054);
      const stateFromStores = channel(504).useStateFromStores(first, S);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
        const items1 = [ApplicationStreamingStore];
        cResult[3] = items1;
        const tmp10 = items1;
      } else {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
      }
      if (cResult[4] !== stateFromStores) {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = tmp12;
      } else {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
      }
      const tmpResult = channel(504);
      const stateFromStores1 = channel(504).useStateFromStores(tmp10, tmp12);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
        const items2 = [EmbeddedActivitiesStore];
        const fn = function v() {
          return null != currentEmbeddedActivity.getCurrentEmbeddedActivity();
        };
        cResult[6] = items2;
        cResult[7] = fn;
        let tmp15 = fn;
        const tmp14 = items2;
      } else {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
        tmp15 = cResult[7];
      }
      const tmpResult4 = channel(504);
      const stateFromStores2 = channel(504).useStateFromStores(tmp14, tmp15);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
        const items3 = [GameConsoleStore];
        const fn2 = function b() {
          return {
            awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(),
            remoteSessionId: GameConsoleStore.getRemoteSessionId(),
          };
        };
        cResult[8] = items3;
        cResult[9] = fn2;
        let tmp18 = fn2;
        const tmp17 = items3;
      } else {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
        tmp18 = cResult[9];
      }
      const tmpResult5 = channel(504);
      const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp17, tmp18);
      let awaitingRemote = stateFromStoresObject.awaitingRemote;
      if (!awaitingRemote) {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
        awaitingRemote = null != tmp20;
      }
      if (cResult[10] === isConnectedToVoiceChannel) {
        class S {
          constructor() {
            selectedParticipant = closure_7.getSelectedParticipant(channel.id);
            if (null != selectedParticipant) {
              tmp2 = ParticipantTypes;
              if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
                tmp3 = closure_10;
                tmp4 = null;
              }
              return tmp4;
            }
            id = undefined;
            if (selectedParticipant != null) {
              id = selectedParticipant.id;
            }
            tmp4 = id;
            return;
          }
        }
      }
      const obj3 = { [closure_28.END_ACTIVITY]: stateFromStores2, [closure_28.END_CALL]: isConnectedToVoiceChannel };
      obj3[obj14.END_REMOTE] = awaitingRemote;
      obj3[obj14.END_STREAM] = null != stateFromStores1;
      cResult[10] = isConnectedToVoiceChannel;
      cResult[11] = stateFromStores2;
      cResult[12] = null != stateFromStores1;
      cResult[13] = awaitingRemote;
      cResult[14] = obj3;
      const tmpResult6 = channel(504);
    }
  : (channel) => {
      channel = channel.channel;
      const isConnectedToVoiceChannel = channel(9054).useIsConnectedToVoiceChannel(channel);
      const obj = channel(9054);
      const items = [ChannelRTCStore, AuthenticationStore];
      closure_1 = channel(504).useStateFromStores(items, () => {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            let tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      });
      const obj2 = channel(504);
      const items1 = [ApplicationStreamingStore];
      const stateFromStores = channel(504).useStateFromStores(items1, () => {
        let activeStreamForStreamKey = null;
        if (null != closure_1) {
          activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
        }
        return activeStreamForStreamKey;
      });
      const obj3 = channel(504);
      const items2 = [EmbeddedActivitiesStore];
      const stateFromStores1 = channel(504).useStateFromStores(
        items2,
        () => null != currentEmbeddedActivity.getCurrentEmbeddedActivity(),
      );
      const obj4 = channel(504);
      const items3 = [GameConsoleStore];
      const stateFromStoresObject = channel(504).useStateFromStoresObject(items3, () => ({
        awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(),
        remoteSessionId: GameConsoleStore.getRemoteSessionId(),
      }));
      let awaitingRemote = stateFromStoresObject.awaitingRemote;
      const obj6 = { [closure_28.END_ACTIVITY]: stateFromStores1, [closure_28.END_CALL]: isConnectedToVoiceChannel };
      if (!awaitingRemote) {
        awaitingRemote = null != tmp5;
      }
      obj6[obj14.END_REMOTE] = awaitingRemote;
      obj6[obj14.END_STREAM] = null != stateFromStores;
      return obj6;
    };
let closure_29 = tmp10;
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(2);
      channel = channel.channel;
      if (cResult[0] !== channel) {
        const obj2 = { channel };
        cResult[0] = channel;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      const tmp3 = closure_29(tmp2);
      if (tmp3[obj14.END_STREAM]) {
        let END_REMOTE = obj14.END_STREAM;
      } else if (tmp3[obj14.END_REMOTE]) {
        END_REMOTE = obj14.END_REMOTE;
      } else {
        END_REMOTE = tmp3[obj14.END_ACTIVITY] ? obj14.END_ACTIVITY : obj14.END_CALL;
      }
      return END_REMOTE;
    }
  : (channel) => {
      const tmp = closure_29({ channel: channel.channel });
      if (tmp[obj14.END_STREAM]) {
        let END_REMOTE = obj14.END_STREAM;
      } else if (tmp[obj14.END_REMOTE]) {
        END_REMOTE = obj14.END_REMOTE;
      } else {
        END_REMOTE = tmp[obj14.END_ACTIVITY] ? obj14.END_ACTIVITY : obj14.END_CALL;
      }
      return END_REMOTE;
    };
let closure_30 = tmp11;
ReactCompilerGating = fn(558);
let obj4 = {
  height: fn(9075).FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT,
  paddingHorizontal: 16,
  paddingTop: fn(9075).FIVE_BUTTON_CONTAINER_PADDING_TOP,
  paddingBottom: fn(9075).FIVE_BUTTON_CONTAINER_PADDING_BOTTOM,
  justifyContent: "center",
  flexDirection: "row",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallActionBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(17);
      ({ channel, shouldShowConnectingScreen } = arg0);
      const tmp5 = closure_18();
      const tmp7 = useIsRemoteDefault();
      if (cResult[0] !== channel) {
        const obj2 = { channel };
        cResult[0] = channel;
        cResult[1] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[1];
      }
      const tmp9 = closure_27(tmp8);
      if (cResult[2] !== channel) {
        const obj3 = { channel };
        cResult[2] = channel;
        cResult[3] = obj3;
        let tmp10 = obj3;
      } else {
        tmp10 = cResult[3];
      }
      const tmp11 = closure_30(tmp10);
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.CHANNEL_CALL_ACTION_BAR,
      ).analyticsLocations;
      const tmp6Result = useAnalyticsLocationsDefault;
      const isFiveButtonLayout = useIsFiveButtonLayout.useIsFiveButtonLayout(channel.id);
      const tmp14 = isFiveButtonLayout ? tmp5.containerForFiveButtonLayout : tmp5.container;
      if (cResult[4] === channel) {
        if (cResult[5] === isFiveButtonLayout) {
          if (cResult[6] === tmp7) {
            if (cResult[7] === tmp11) {
              if (cResult[8] === tmp9) {
                if (cResult[9] === tmp4) {
                  if (cResult[11] === tmp14) {
                    if (cResult[12] === tmp15) {
                      let tmp34 = cResult[13];
                    }
                    if (cResult[14] === analyticsLocations) {
                      if (cResult[15] === tmp34) {
                        let tmp38 = cResult[16];
                      }
                      return tmp38;
                    }
                    const obj4 = { value: analyticsLocations, children: tmp34 };
                    const tmp40 = closure_1_15(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
                    cResult[14] = analyticsLocations;
                    cResult[15] = tmp34;
                    cResult[16] = tmp40;
                    tmp38 = tmp40;
                  }
                  const obj5 = { pointerEvents: "box-none", style: tmp14, children: cResult[10] };
                  const tmp37 = closure_1_15(View, obj5);
                  cResult[11] = tmp14;
                  cResult[12] = cResult[10];
                  cResult[13] = tmp37;
                  tmp34 = tmp37;
                }
              }
            }
          }
        }
      }
      if (undefined !== shouldShowConnectingScreen && shouldShowConnectingScreen) {
        const obj6 = { channel };
        let tmp16Result = closure_1_15(ChannelCallConnectingScreen.CallConnectingActionBar, obj6);
      } else {
        let tmp18 = null;
        if (!tmp7) {
          const obj7 = { channel, isSmallSize: isFiveButtonLayout };
          tmp18 = closure_1_15(closure_19, obj7);
        }
        const items = [tmp18, , ,];
        if (obj11.AUDIO_ROUTE === tmp9) {
          const obj8 = { isSmallSize: isFiveButtonLayout, channel };
          let tmp22 = closure_1_15(closure_21, obj8);
        } else {
          if (tmp21.SCREEN_SHARE_START !== tmp9) {
            if (tmp21.SCREEN_SHARE_END !== tmp9) {
              const NONE = tmp21.NONE;
              tmp22 = null;
            }
          }
          const obj9 = { channel, isSmallSize: isFiveButtonLayout };
          tmp22 = closure_1_15(closure_20, obj9);
        }
        items[1] = tmp22;
        const obj10 = { channel, isSmallSize: isFiveButtonLayout };
        items[2] = closure_1_15(ChannelCallMicButton.ChannelCallMicButton, obj10);
        if (obj14.END_REMOTE === tmp11) {
          obj11 = { channel, isSmallSize: isFiveButtonLayout };
          let tmp27Result = closure_1_15(DisconnectRemoteButton.DisconnectRemoteButton, obj11);
        } else if (tmp28.END_STREAM === tmp11) {
          const obj12 = { channel, isSmallSize: isFiveButtonLayout };
          tmp27Result = closure_1_15(closure_23, obj12);
        } else if (tmp28.END_ACTIVITY === tmp11) {
          const obj13 = { isSmallSize: isFiveButtonLayout };
          tmp27Result = closure_1_15(closure_24, obj13);
        } else {
          tmp27Result = null;
          if (tmp28.END_CALL === tmp11) {
            obj14 = { channel, isSmallSize: isFiveButtonLayout };
            tmp27Result = closure_1_15(closure_22, obj14);
          }
        }
        const obj15 = { children: null };
        items[3] = tmp27Result;
        obj15.children = items;
        tmp16Result = constants(value2, obj15);
      }
      cResult[4] = channel;
      cResult[5] = isFiveButtonLayout;
      cResult[6] = tmp7;
      cResult[7] = tmp11;
      cResult[8] = tmp9;
      cResult[9] = undefined !== shouldShowConnectingScreen && shouldShowConnectingScreen;
      cResult[10] = tmp16Result;
      const tmpResult = useIsFiveButtonLayout;
    }
  : (arg0) => {
      ({ channel, shouldShowConnectingScreen } = arg0);
      if (shouldShowConnectingScreen === undefined) {
        shouldShowConnectingScreen = false;
      }
      const tmp = closure_18();
      const tmp4 = closure_27({ channel });
      const tmp5 = closure_30({ channel });
      const tmp3 = useIsRemoteDefault();
      const tmp6 = useAnalyticsLocationsDefault;
      const isFiveButtonLayout = useIsFiveButtonLayout.useIsFiveButtonLayout(channel.id);
      const obj2 = { value: tmp6(AnalyticsLocationDefault.CHANNEL_CALL_ACTION_BAR).analyticsLocations, children: null };
      const obj3 = {
        pointerEvents: "box-none",
        style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container,
        children: null,
      };
      if (shouldShowConnectingScreen) {
        const obj4 = { channel };
        let tmp11Result = closure_1_15(ChannelCallConnectingScreen.CallConnectingActionBar, obj4);
      } else {
        let tmp9Result4 = null;
        if (!tmp3) {
          const obj5 = { channel, isSmallSize: isFiveButtonLayout };
          tmp9Result4 = closure_1_15(closure_19, obj5);
        }
        const items = [tmp9Result4, , ,];
        if (obj11.AUDIO_ROUTE === tmp4) {
          const obj6 = { isSmallSize: isFiveButtonLayout, channel };
          let tmp9Result5 = closure_1_15(closure_21, obj6);
        } else {
          if (tmp15.SCREEN_SHARE_START !== tmp4) {
            if (tmp15.SCREEN_SHARE_END !== tmp4) {
              const NONE = tmp15.NONE;
              tmp9Result5 = null;
            }
          }
          const obj7 = { channel, isSmallSize: isFiveButtonLayout };
          tmp9Result5 = closure_1_15(closure_20, obj7);
        }
        items[1] = tmp9Result5;
        const obj8 = { channel, isSmallSize: isFiveButtonLayout };
        items[2] = closure_1_15(ChannelCallMicButton.ChannelCallMicButton, obj8);
        if (obj14.END_REMOTE === tmp5) {
          const obj9 = { channel, isSmallSize: isFiveButtonLayout };
          let tmp9Result6 = closure_1_15(DisconnectRemoteButton.DisconnectRemoteButton, obj9);
        } else if (obj14.END_STREAM === tmp5) {
          const obj10 = { channel, isSmallSize: isFiveButtonLayout };
          tmp9Result6 = closure_1_15(closure_23, obj10);
        } else if (obj14.END_ACTIVITY === tmp5) {
          obj11 = { isSmallSize: isFiveButtonLayout };
          tmp9Result6 = closure_1_15(closure_24, obj11);
        } else {
          tmp9Result6 = null;
          if (obj14.END_CALL === tmp5) {
            const obj12 = { channel, isSmallSize: isFiveButtonLayout };
            tmp9Result6 = closure_1_15(closure_22, obj12);
          }
        }
        const obj13 = { children: null };
        items[3] = tmp9Result6;
        obj13.children = items;
        tmp11Result = constants(value2, obj13);
      }
      obj3.children = tmp11Result;
      obj2.children = closure_1_15(View, obj3);
      return closure_1_15(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
    };
export const VideoButton = tmp3;
export const ScreenshareButton = tmp4;
export const AudioRouteButton = tmp5;
export const DisconnectCallButton = tmp6;
export const DisconnectStreamButton = tmp7;
export const ActionBarSecondButton = obj11;
export const useActionBarSecondButtons = tmp8;
export const useActionBarSecondButton = tmp9;
export const ActionBarPrimaryButton = obj14;
export const useActionBarPrimaryButtons = tmp10;
export const useActionBarPrimaryButton = tmp11;
