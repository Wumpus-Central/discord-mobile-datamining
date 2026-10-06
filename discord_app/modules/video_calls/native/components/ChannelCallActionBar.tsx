// === Module 9638: ChannelCallActionBar ===

// Module 9638 (ChannelCallActionBar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import CallConstants from "CallConstants" /* 4917 */;
import Constants from "Constants" /* 4921 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4948 */;
import StreamActionCreators from "StreamActionCreators" /* 5038 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5097 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6664 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import useIsRemoteDefault from "useIsRemote" /* 6784 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9024 */;
import VoiceChatHooks from "VoiceChatHooks" /* 9090 */;
import useActionBarHeight from "useActionBarHeight" /* 9111 */;
import CallBarActionAll from "CallBarAction" /* 9112 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 9115 */;
import openIgnoreThermalStateAlert from "openIgnoreThermalStateAlert" /* 9120 */;
import CallsUtils from "CallsUtils" /* 9334 */;
import CameraLottie2 from "CameraLottie" /* 9640 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 9644 */;
import AssetRegistryDefault from "AssetRegistry" /* 9666 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9667 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9668 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 9669 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 9699 */;
import DisconnectRemoteButton from "DisconnectRemoteButton" /* 9709 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import GameConsoleStore from "GameConsoleStore" /* 4913 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9101 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let importDefault;

let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
const Features = Constants.Features;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerForFiveButtonLayout: obj3 };
obj2 = { height: useActionBarHeight.CALL_ACTION_BAR_HEIGHT, justifyContent: "center", alignItems: "center", flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { height: useActionBarHeight.FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT, paddingHorizontal: 16, paddingTop: useActionBarHeight.FIVE_BUTTON_CONTAINER_PADDING_TOP, paddingBottom: useActionBarHeight.FIVE_BUTTON_CONTAINER_PADDING_BOTTOM, justifyContent: "center", flexDirection: "row" };
let closure_18 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_1;
  let reactingToThermalState;
  let ref;
  let stateFromStores2;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp25;
  let tmp6;
  let tmp7;
  let obj = channel(stateFromStores2[15]);
  const cResult = obj.c(21);
  channel = channel.channel;
  const tmp5 = require("useHasVideoPermission")(channel);
  const tmp4 = importDefault;
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
  const tmpResult = channel(stateFromStores2[17]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MediaEngineStore];
    const fn2 = function h() {
      return MediaEngineStore.isVideoEnabled();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp11 = fn2;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult4 = channel(stateFromStores2[17]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [MediaEngineStore];
    const fn3 = function v() {
      return MediaEngineStore.supports(constants.VIDEO);
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    tmp15 = fn3;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const tmpResult5 = channel(stateFromStores2[17]);
  stateFromStores2 = tmpResult5.useStateFromStores(tmp14, tmp15);
  const reachedLimit = tmp4(tmp2[18])(channel).reachedLimit;
  const tmpResult6 = channel(stateFromStores2[19]);
  const stageHasMedia = tmpResult6.useStageHasMedia(channel.id);
  let tmp19 = !stateFromStores2;
  if (stateFromStores2) {
    tmp19 = !tmp5;
  }
  if (!tmp19) {
    tmp19 = !stageHasMedia && reachedLimit;
  }
  ref = ref.useRef(null);
  let str = "unmute";
  if (stateFromStores1) {
    str = "mute";
  }
  if (cResult[6] !== str) {
    let obj2 = { ref, animation: str };
    cResult[6] = str;
    cResult[7] = closure_15(channel(stateFromStores2[20]).CameraLottie, obj2);
    const tmp24 = closure_15(channel(stateFromStores2[20]).CameraLottie, obj2);
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(channel) {
        const obj = CallsUtils;
        obj.handleToggleVideo(channel);
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
      }
    }
    cResult[8] = B;
    tmp25 = B;
  } else {
    class B {
      constructor(channel) {
        const obj = CallsUtils;
        obj.handleToggleVideo(channel);
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
      }
    }
  }
  B = tmp25;
  if (cResult[9] === channel) {
    class B {
      constructor(channel) {
        const obj = CallsUtils;
        obj.handleToggleVideo(channel);
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
      }
    }
  }
  class F {
    constructor() {
      tmp = closure_3;
      if (tmp) {
        tmp2 = closure_1;
        if (tmp2) {
          tmp6 = closure_2;
          if (tmp6) {
            tmp10 = closure_0;
            tmp11 = closure_3;
            obj2 = closure_0(closure_3[22]);
            result = obj2.openIgnoreThermalStateAlert(() => closure_1_5(channel));
          } else {
            tmp7 = closure_5;
            tmp8 = channel;
            tmp9 = closure_5(channel);
          }
        } else {
          tmp3 = closure_0;
          tmp4 = closure_3;
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
}) : ((channel) => {
  let closure_1;
  let intl;
  let reactingToThermalState;
  channel = channel.channel;
  importDefault = undefined;
  let stateFromStores1;
  const isSmallSize = channel.isSmallSize;
  const tmp3 = require("useHasVideoPermission")(channel);
  const tmp = importDefault;
  importDefault = tmp3;
  let obj = channel(stateFromStores1[17]);
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
  let obj2 = channel(stateFromStores1[17]);
  const items1 = [MediaEngineStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => MediaEngineStore.isVideoEnabled());
  const items2 = [MediaEngineStore];
  const obj3 = channel(stateFromStores1[17]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => MediaEngineStore.supports(constants.VIDEO));
  const reachedLimit = require("useChannelVideoLimit")(channel).reachedLimit;
  obj4 = channel(stateFromStores1[19]);
  const stageHasMedia = obj4.useStageHasMedia(channel.id);
  const ref = stateFromStores2.useRef(null);
  const items3 = [stateFromStores1];
  const memo = stateFromStores2.useMemo(() => {
    let str;
    const obj = { ref, animation: str };
    str = "unmute";
    const CameraLottie = CameraLottie2.CameraLottie;
    if (stateFromStores1) {
      str = "mute";
    }
    return closure_15(CameraLottie, obj);
  }, items3);
  const callback = stateFromStores2.useCallback((channel) => {
    const obj = CallsUtils;
    obj.handleToggleVideo(channel);
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
          const obj2 = openIgnoreThermalStateAlert;
          const result = obj2.openIgnoreThermalStateAlert(() => callback(channel));
        } else {
          callback(channel);
        }
      } else {
        const obj = CallsUtils;
        const result1 = obj.showCameraDisabledAlert();
      }
    }
  }, items4);
  let tmp13 = !stateFromStores2;
  const ToggledActionButton = stateFromStores(stateFromStores1[24]).ToggledActionButton;
  if (stateFromStores2) {
    tmp13 = !tmp3;
  }
  if (!tmp13) {
    tmp13 = !stageHasMedia && reachedLimit;
  }
  obj5 = { appearsDisabled: tmp13, isActive: stateFromStores1, onPress: callback1, accessibilityLabel: intl.string(channel(stateFromStores1[23]).t.HK4JIu), source: tmp(stateFromStores1[25]), isSmallSize, lottieComponent: memo };
  intl = tmp4(tmp2[23]).intl;
  return closure_15(ToggledActionButton, obj5);
});
let closure_19 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((isSmallSize) => {
  let imgSource;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  const obj = react2;
  const cResult = obj.c(10);
  isSmallSize = isSmallSize.isSmallSize;
  ({ isActive, onPress, imgSource, isFeatureEnabled } = useScreenshareUtilsDefault(isSmallSize.channel));
  useScreenshareUtilsDefault(isSmallSize.channel);
  if (cResult[0] === isFeatureEnabled) {
    let tmp5;
    let tmp8;
    if (cResult[1] === onPress) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t.XF1nZz);
      cResult[3] = stringResult;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === imgSource) {
      if (cResult[5] === isActive) {
        if (cResult[6] === isSmallSize) {
          if (cResult[7] === tmp5) {
            let tmp10;
            if (cResult[8] === !isFeatureEnabled) {
              tmp10 = cResult[9];
            }
            return tmp10;
          }
        }
      }
    }
    const obj2 = { appearsDisabled: !isFeatureEnabled, source: imgSource, isActive, accessibilityLabel: tmp8, onPress: tmp5, isSmallSize };
    const tmp13 = closure_15(CallBarActionAll.ToggledActionButton, obj2);
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
    fn = () => {

    };
  }
  cResult[0] = isFeatureEnabled;
  cResult[1] = onPress;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  let channel;
  let imgSource;
  let intl;
  let isActive;
  let isFeatureEnabled;
  let isSmallSize;
  let onPress;
  ({ channel, isSmallSize } = arg0);
  ({ onPress, isFeatureEnabled, isActive, imgSource } = useScreenshareUtilsDefault(channel));
  useScreenshareUtilsDefault(channel);
  if (!isFeatureEnabled) {
    onPress = () => {

    };
  }
  const obj = { appearsDisabled: !isFeatureEnabled, source: imgSource, isActive, accessibilityLabel: intl.string(intl2.t.XF1nZz), onPress, isSmallSize };
  const ToggledActionButton = CallBarActionAll.ToggledActionButton;
  intl = intl2.intl;
  return closure_15(ToggledActionButton, obj);
});
let closure_20 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let isAudioRouteEnabled;
  let toggleAudio;
  const obj = react2;
  const cResult = obj.c(10);
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  const obj2 = CallsUtils;
  const maskedSpeakerStates = obj2.useMaskedSpeakerStates();
  ({ isAudioRouteEnabled, toggleAudio } = maskedSpeakerStates);
  const routeSource = maskedSpeakerStates.routeSource;
  const obj3 = VoiceChatHooks;
  const isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(channel);
  if (cResult[0] === channel.id) {
    if (cResult[1] === isConnectedToVoiceChannel) {
      let tmp6;
      let tmp8;
      if (cResult[2] === toggleAudio) {
        tmp6 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["A/Ly/2"]);
        cResult[4] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === isAudioRouteEnabled) {
        if (cResult[6] === isSmallSize) {
          if (cResult[7] === routeSource) {
            let tmp10;
            if (cResult[8] === tmp6) {
              tmp10 = cResult[9];
            }
            return tmp10;
          }
        }
      }
      obj4 = { isActive: isAudioRouteEnabled, source: routeSource, onPress: tmp6, accessibilityLabel: tmp8, isSmallSize };
      const tmp13 = closure_15(CallBarActionAll.ToggledActionButton, obj4);
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
}) : ((channel) => {
  let c1;
  let intl;
  let isAudioRouteEnabled;
  let routeSource;
  channel = channel.channel;
  c1 = undefined;
  const isSmallSize = channel.isSmallSize;
  const obj = CallsUtils;
  const maskedSpeakerStates = obj.useMaskedSpeakerStates();
  ({ toggleAudio: c1, isAudioRouteEnabled, routeSource } = maskedSpeakerStates);
  const obj2 = VoiceChatHooks;
  let closure_2 = obj2.useIsConnectedToVoiceChannel(channel);
  const obj3 = {
    isActive: isAudioRouteEnabled,
    source: routeSource,
    onPress() {
      _undefined(channel.id, closure_2);
    },
    accessibilityLabel: intl.string(intl2.t["A/Ly/2"]),
    isSmallSize
  };
  const ToggledActionButton = CallBarActionAll.ToggledActionButton;
  intl = intl2.intl;
  return closure_15(ToggledActionButton, obj3);
});
let closure_21 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp6;
  let obj = channel(576);
  const cResult = obj.c(6);
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(channel(1126).t["6vrfgt"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function l() {
      const obj = CallsUtils;
      obj.handleDisconnect(channel);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === isSmallSize) {
    let tmp7;
    if (cResult[4] === tmp6) {
      tmp7 = cResult[5];
    }
    return tmp7;
  }
  const obj2 = { source: AssetRegistryDefault, accessibilityLabel: first, isSmallSize, onPress: tmp6 };
  const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
  const tmp8 = closure_15(PrimaryActionButton, obj2);
  cResult[3] = isSmallSize;
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((channel) => {
  let intl;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let obj = {
    source: AssetRegistryDefault,
    accessibilityLabel: intl.string(channel(1126).t["6vrfgt"]),
    isSmallSize,
    onPress() {
      const obj = CallsUtils;
      obj.handleDisconnect(channel);
    }
  };
  const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
  intl = channel(1126).intl;
  return closure_15(PrimaryActionButton, obj);
});
let closure_22 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp17;
  let tmp7;
  let tmp9;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(13);
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function l() {
      const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
      if (null != selectedParticipant) {
        let tmp4;
        if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
          tmp4 = null;
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStreamingStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class T {
      constructor() {
        let activeStreamForStreamKey = null;
        if (null != stateFromStores) {
          activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
        }
        return activeStreamForStreamKey;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = T;
  } else {
    class T {
      constructor() {
        let activeStreamForStreamKey = null;
        if (null != stateFromStores) {
          activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
        }
        return activeStreamForStreamKey;
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, T);
  let tmp13 = null;
  if (null != stateFromStores1) {
    let tmp14;
    class T {
      constructor() {
        let activeStreamForStreamKey = null;
        if (null != stateFromStores) {
          activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
        }
        return activeStreamForStreamKey;
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          let activeStreamForStreamKey = null;
          if (null != stateFromStores) {
            activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
          }
          return activeStreamForStreamKey;
        }
      }
      const stringResult = obj4.string(tmp(1126).t.q3O3J8);
      class N {
        constructor() {
          const obj = ChannelRTCActionCreatorsDefault;
          const participant = obj.selectParticipant(channel.id, null);
          const stopStream = StreamActionCreators.stopStream;
          StreamActionCreators;
          const obj2 = StreamKeyUtils;
          stopStream(obj2.encodeStreamKey(stateFromStores1));
        }
      }
      tmp14 = stringResult;
    } else {
      class T {
        constructor() {
          let activeStreamForStreamKey = null;
          if (null != stateFromStores) {
            activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
          }
          return activeStreamForStreamKey;
        }
      }
    }
    if (cResult[7] === stateFromStores1) {
      class T {
        constructor() {
          let activeStreamForStreamKey = null;
          if (null != stateFromStores) {
            activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
          }
          return activeStreamForStreamKey;
        }
      }
      if (cResult[10] === isSmallSize) {
        class T {
          constructor() {
            let activeStreamForStreamKey = null;
            if (null != stateFromStores) {
              activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
            }
            return activeStreamForStreamKey;
          }
        }
        tmp13 = tmp17;
      }
      class N {
        constructor() {
          const obj = ChannelRTCActionCreatorsDefault;
          const participant = obj.selectParticipant(channel.id, null);
          const stopStream = StreamActionCreators.stopStream;
          StreamActionCreators;
          const obj2 = StreamKeyUtils;
          stopStream(obj2.encodeStreamKey(stateFromStores1));
        }
      }
      const PrimaryActionButton = stateFromStores1(9112).PrimaryActionButton;
      tmp20[0] = stateFromStores(9667);
      tmp20[1] = tmp14;
      tmp20[2] = isSmallSize;
      tmp20[3] = N;
      const tmp22 = closure_15(PrimaryActionButton, tmp20);
      cResult[10] = isSmallSize;
      cResult[11] = N;
      cResult[12] = tmp22;
      tmp17 = tmp22;
    }
    class N {
      constructor() {
        const obj = ChannelRTCActionCreatorsDefault;
        const participant = obj.selectParticipant(channel.id, null);
        const stopStream = StreamActionCreators.stopStream;
        StreamActionCreators;
        const obj2 = StreamKeyUtils;
        stopStream(obj2.encodeStreamKey(stateFromStores1));
      }
    }
    cResult[7] = stateFromStores1;
    cResult[8] = channel.id;
    cResult[9] = N;
  }
  return tmp13;
}) : ((channel) => {
  let closure_1;
  let intl;
  channel = channel.channel;
  const tmp = channel;
  const isSmallSize = channel.isSmallSize;
  let obj = channel(504);
  const items = [ChannelRTCStore, AuthenticationStore];
  importDefault = obj.useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
    if (null != selectedParticipant) {
      let tmp4;
      if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
        tmp4 = null;
      }
      return tmp4;
    }
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    tmp4 = id;
  });
  let obj2 = channel(504);
  const items1 = [ApplicationStreamingStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let activeStreamForStreamKey = null;
    if (null != closure_1) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
    }
    return activeStreamForStreamKey;
  });
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj3 = {
      source: AssetRegistryDefault2,
      accessibilityLabel: intl.string(tmp(1126).t.q3O3J8),
      isSmallSize,
      onPress() {
          const obj = ChannelRTCActionCreatorsDefault;
          const participant = obj.selectParticipant(channel.id, null);
          const stopStream = StreamActionCreators.stopStream;
          StreamActionCreators;
          const obj2 = StreamKeyUtils;
          stopStream(obj2.encodeStreamKey(stateFromStores));
        }
    };
    const PrimaryActionButton = stateFromStores(9112).PrimaryActionButton;
    intl = tmp(1126).intl;
    tmp4 = closure_15(PrimaryActionButton, obj3);
  }
  return tmp4;
});
let closure_23 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((isSmallSize) => {
  let first;
  let tmp5;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(4);
  isSmallSize = isSmallSize.isSmallSize;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      let applicationId;
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let _location;
      const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
      EmbeddedActivitiesNativeManagerDefault;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj = { location: _location, applicationId };
      applicationId = undefined;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      leaveActivity(obj);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.k0Aph0);
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== isSmallSize) {
    const obj2 = { accessibilityLabel: tmp5, onPress: first, source: AssetRegistryDefault3, isSmallSize };
    const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
    const tmp11 = closure_15(PrimaryActionButton, obj2);
    cResult[2] = isSmallSize;
    cResult[3] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : ((isSmallSize) => {
  let intl;
  isSmallSize = isSmallSize.isSmallSize;
  let obj = {
    accessibilityLabel: intl.string(intl2.t.k0Aph0),
    onPress() {
      let applicationId;
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let _location;
      const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
      EmbeddedActivitiesNativeManagerDefault;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj = { location: _location, applicationId };
      applicationId = undefined;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      leaveActivity(obj);
    },
    source: AssetRegistryDefault3,
    isSmallSize
  };
  const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
  intl = intl2.intl;
  return closure_15(PrimaryActionButton, obj);
});
let obj4 = { NONE: 0, [0]: "NONE", SCREEN_SHARE_START: 1, [1]: "SCREEN_SHARE_START", SCREEN_SHARE_END: 2, [2]: "SCREEN_SHARE_END", AUDIO_ROUTE: 3, [3]: "AUDIO_ROUTE" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const obj = react2;
  const cResult = obj.c(4);
  channel = channel.channel;
  const obj2 = VoiceChatHooks;
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  const isActive = useScreenshareUtilsDefault(channel).isActive;
  const tmp3 = useIsRemoteDefault();
  if (cResult[0] === (isConnectedToVoiceChannel && !tmp3)) {
    if (cResult[1] === (isConnectedToVoiceChannel && !tmp3 && isActive)) {
      let tmp7;
      if (cResult[2] === (isConnectedToVoiceChannel && !tmp3)) {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  const obj3 = { [closure_1_25.AUDIO_ROUTE]: isConnectedToVoiceChannel && !tmp3, [closure_1_25.NONE]: true, [closure_1_25.SCREEN_SHARE_END]: isConnectedToVoiceChannel && !tmp3 && isActive, [closure_1_25.SCREEN_SHARE_START]: isConnectedToVoiceChannel && !tmp3 };
  cResult[0] = isConnectedToVoiceChannel && !tmp3;
  cResult[1] = isConnectedToVoiceChannel && !tmp3 && isActive;
  cResult[2] = isConnectedToVoiceChannel && !tmp3;
  cResult[3] = obj3;
  tmp7 = obj3;
}) : ((channel) => {
  channel = channel.channel;
  const obj = VoiceChatHooks;
  let isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const isActive = useScreenshareUtilsDefault(channel).isActive;
  const tmp2 = useIsRemoteDefault();
  let tmp4 = isConnectedToVoiceChannel;
  const AUDIO_ROUTE = obj4.AUDIO_ROUTE;
  if (isConnectedToVoiceChannel) {
    tmp4 = !tmp2;
  }
  const obj2 = {};
  obj2[AUDIO_ROUTE] = tmp4;
  obj2[obj4.NONE] = true;
  let tmp5 = isConnectedToVoiceChannel;
  const SCREEN_SHARE_END = obj4.SCREEN_SHARE_END;
  if (isConnectedToVoiceChannel) {
    tmp5 = !tmp2;
  }
  if (tmp5) {
    tmp5 = isActive;
  }
  obj2[SCREEN_SHARE_END] = tmp5;
  const SCREEN_SHARE_START = obj4.SCREEN_SHARE_START;
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp2;
  }
  obj2[SCREEN_SHARE_START] = isConnectedToVoiceChannel;
  return obj2;
});
let closure_26 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let AUDIO_ROUTE;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  channel = channel.channel;
  if (cResult[0] !== channel) {
    const obj2 = { channel };
    cResult[0] = channel;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_26(tmp2);
  if (tmp3[obj4.SCREEN_SHARE_END]) {
    AUDIO_ROUTE = obj4.SCREEN_SHARE_END;
  } else {
    if (!tmp3[obj4.AUDIO_ROUTE]) {
      AUDIO_ROUTE = tmp3[obj4.SCREEN_SHARE_START] ? obj4.SCREEN_SHARE_START : obj4.NONE;
    }
    AUDIO_ROUTE = obj4.AUDIO_ROUTE;
  }
  return AUDIO_ROUTE;
}) : ((channel) => {
  let AUDIO_ROUTE;
  channel = channel.channel;
  const tmp = closure_26({ channel });
  if (tmp[obj4.SCREEN_SHARE_END]) {
    AUDIO_ROUTE = obj4.SCREEN_SHARE_END;
  } else {
    if (!tmp[obj4.AUDIO_ROUTE]) {
      AUDIO_ROUTE = tmp[obj4.SCREEN_SHARE_START] ? obj4.SCREEN_SHARE_START : obj4.NONE;
    }
    AUDIO_ROUTE = obj4.AUDIO_ROUTE;
  }
  return AUDIO_ROUTE;
});
let closure_27 = tmp10;
let obj5 = { END_STREAM: 0, [0]: "END_STREAM", END_ACTIVITY: 1, [1]: "END_ACTIVITY", END_CALL: 2, [2]: "END_CALL", END_REMOTE: 3, [3]: "END_REMOTE" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let currentEmbeddedActivity;
  let first;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(15);
  channel = channel.channel;
  const obj2 = channel(9090);
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
    cResult[1] = channel.id;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, S);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
    const items1 = [ApplicationStreamingStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
  }
  if (cResult[4] !== stateFromStores) {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = tmp12;
  } else {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
    const items2 = [EmbeddedActivitiesStore];
    const fn = function v() {
      return null != currentEmbeddedActivity.getCurrentEmbeddedActivity();
    };
    cResult[6] = items2;
    cResult[7] = fn;
    tmp15 = fn;
    tmp14 = items2;
  } else {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp14, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
    const items3 = [GameConsoleStore];
    const fn2 = function b() {
      const obj = { awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() };
      return obj;
    };
    cResult[8] = items3;
    cResult[9] = fn2;
    tmp18 = fn2;
    tmp17 = items3;
  } else {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
    tmp18 = cResult[9];
  }
  const tmpResult6 = tmp(504);
  const stateFromStoresObject = tmpResult6.useStateFromStoresObject(tmp17, tmp18);
  let awaitingRemote = stateFromStoresObject.awaitingRemote;
  if (!awaitingRemote) {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
    awaitingRemote = null != tmp20;
  }
  if (cResult[10] === isConnectedToVoiceChannel) {
    class S {
      constructor() {
        const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
        if (null != selectedParticipant) {
          let tmp4;
          if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
            tmp4 = null;
          }
          return tmp4;
        }
        let id;
        if (selectedParticipant != null) {
          id = selectedParticipant.id;
        }
        tmp4 = id;
      }
    }
  }
  const obj3 = { [closure_28.END_ACTIVITY]: stateFromStores2, [closure_28.END_CALL]: isConnectedToVoiceChannel };
  obj3[obj5.END_REMOTE] = awaitingRemote;
  obj3[obj5.END_STREAM] = null != stateFromStores1;
  cResult[10] = isConnectedToVoiceChannel;
  cResult[11] = stateFromStores2;
  cResult[12] = null != stateFromStores1;
  cResult[13] = awaitingRemote;
  cResult[14] = obj3;
}) : ((channel) => {
  let currentEmbeddedActivity;
  channel = channel.channel;
  let obj = channel(9090);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const items = [ChannelRTCStore, AuthenticationStore];
  const obj2 = channel(504);
  let closure_1 = obj2.useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
    if (null != selectedParticipant) {
      let tmp4;
      if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
        tmp4 = null;
      }
      return tmp4;
    }
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    tmp4 = id;
  });
  const items1 = [ApplicationStreamingStore];
  const obj3 = channel(504);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let activeStreamForStreamKey = null;
    if (null != closure_1) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
    }
    return activeStreamForStreamKey;
  });
  const items2 = [EmbeddedActivitiesStore];
  obj4 = channel(504);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => null != currentEmbeddedActivity.getCurrentEmbeddedActivity());
  obj5 = channel(504);
  const items3 = [GameConsoleStore];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items3, () => {
    const obj = { awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() };
    return obj;
  });
  let awaitingRemote = stateFromStoresObject.awaitingRemote;
  const obj6 = { [closure_28.END_ACTIVITY]: stateFromStores1, [closure_28.END_CALL]: isConnectedToVoiceChannel };
  const END_REMOTE = obj5.END_REMOTE;
  const tmp6 = obj5;
  if (!awaitingRemote) {
    awaitingRemote = null != tmp5;
  }
  obj6[END_REMOTE] = awaitingRemote;
  obj6[tmp6.END_STREAM] = null != stateFromStores;
  return obj6;
});
let closure_29 = tmp11;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let END_REMOTE;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  channel = channel.channel;
  if (cResult[0] !== channel) {
    const obj2 = { channel };
    cResult[0] = channel;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_29(tmp2);
  if (tmp3[obj5.END_STREAM]) {
    END_REMOTE = obj5.END_STREAM;
  } else if (tmp3[obj5.END_REMOTE]) {
    END_REMOTE = obj5.END_REMOTE;
  } else {
    END_REMOTE = tmp3[obj5.END_ACTIVITY] ? obj5.END_ACTIVITY : obj5.END_CALL;
  }
  return END_REMOTE;
}) : ((channel) => {
  let END_REMOTE;
  const obj = { channel: channel.channel };
  const tmp = closure_29(obj);
  if (tmp[obj5.END_STREAM]) {
    END_REMOTE = obj5.END_STREAM;
  } else if (tmp[obj5.END_REMOTE]) {
    END_REMOTE = obj5.END_REMOTE;
  } else {
    END_REMOTE = tmp[obj5.END_ACTIVITY] ? obj5.END_ACTIVITY : obj5.END_CALL;
  }
  return END_REMOTE;
});
let closure_30 = tmp12;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let shouldShowConnectingScreen;
  let tmp10;
  let tmp16Result;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(17);
  ({ channel, shouldShowConnectingScreen } = arg0);
  const tmp5 = closure_18();
  const tmp7 = useIsRemoteDefault();
  if (cResult[0] !== channel) {
    const obj2 = { channel };
    cResult[0] = channel;
    cResult[1] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp9 = closure_27(tmp8);
  if (cResult[2] !== channel) {
    const obj3 = { channel };
    cResult[2] = channel;
    cResult[3] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[3];
  }
  const tmp11 = closure_30(tmp10);
  const tmp6Result = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp6Result(AnalyticsLocationDefault.CHANNEL_CALL_ACTION_BAR).analyticsLocations;
  const tmpResult = useIsFiveButtonLayout;
  const isFiveButtonLayout = tmpResult.useIsFiveButtonLayout(channel.id);
  const tmp14 = isFiveButtonLayout ? tmp5.containerForFiveButtonLayout : tmp5.container;
  if (cResult[4] === channel) {
    if (cResult[5] === isFiveButtonLayout) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp11) {
          if (cResult[8] === tmp9) {
            let tmp15;
            if (cResult[9] === (undefined !== shouldShowConnectingScreen && shouldShowConnectingScreen)) {
              tmp15 = cResult[10];
            }
            if (cResult[11] === tmp14) {
              let tmp34;
              if (cResult[12] === tmp15) {
                tmp34 = cResult[13];
              }
              if (cResult[14] === analyticsLocations) {
                let tmp38;
                if (cResult[15] === tmp34) {
                  tmp38 = cResult[16];
                }
                return tmp38;
              }
              obj4 = { value: analyticsLocations, children: tmp34 };
              const tmp40 = closure_15(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
              cResult[14] = analyticsLocations;
              cResult[15] = tmp34;
              cResult[16] = tmp40;
              tmp38 = tmp40;
            }
            obj5 = { pointerEvents: "box-none", style: tmp14, children: tmp15 };
            const tmp37 = closure_15(View, obj5);
            cResult[11] = tmp14;
            cResult[12] = tmp15;
            cResult[13] = tmp37;
            tmp34 = tmp37;
          }
        }
      }
    }
  }
  if (undefined !== shouldShowConnectingScreen && shouldShowConnectingScreen) {
    const obj6 = { channel };
    tmp16Result = closure_15(ChannelCallConnectingScreen.CallConnectingActionBar, obj6);
  } else {
    let tmp22;
    let tmp27Result;
    let tmp18 = null;
    if (!tmp7) {
      const obj7 = { channel, isSmallSize: isFiveButtonLayout };
      tmp18 = closure_15(closure_19, obj7);
    }
    const items = [tmp18, , , ];
    if (obj4.AUDIO_ROUTE === tmp9) {
      const obj8 = { isSmallSize: isFiveButtonLayout, channel };
      tmp22 = closure_15(closure_21, obj8);
    } else {
      if (obj4.SCREEN_SHARE_START !== tmp9) {
        if (obj4.SCREEN_SHARE_END !== tmp9) {
          const NONE = tmp21.NONE;
          tmp22 = null;
        }
      }
      const obj9 = { channel, isSmallSize: isFiveButtonLayout };
      tmp22 = closure_15(closure_20, obj9);
    }
    items[1] = tmp22;
    const obj10 = { channel, isSmallSize: isFiveButtonLayout };
    items[2] = closure_15(ChannelCallMicButton.ChannelCallMicButton, obj10);
    if (obj5.END_REMOTE === tmp11) {
      const obj11 = { channel, isSmallSize: isFiveButtonLayout };
      tmp27Result = closure_15(DisconnectRemoteButton.DisconnectRemoteButton, obj11);
    } else if (obj5.END_STREAM === tmp11) {
      const obj12 = { channel, isSmallSize: isFiveButtonLayout };
      tmp27Result = closure_15(closure_23, obj12);
    } else if (obj5.END_ACTIVITY === tmp11) {
      const obj13 = { isSmallSize: isFiveButtonLayout };
      tmp27Result = closure_15(closure_24, obj13);
    } else {
      tmp27Result = null;
      if (obj5.END_CALL === tmp11) {
        const obj14 = { channel, isSmallSize: isFiveButtonLayout };
        tmp27Result = closure_15(closure_22, obj14);
      }
    }
    const obj15 = { children: items };
    items[3] = tmp27Result;
    tmp16Result = closure_17(authStore3, obj15);
  }
  cResult[4] = channel;
  cResult[5] = isFiveButtonLayout;
  cResult[6] = tmp7;
  cResult[7] = tmp11;
  cResult[8] = tmp9;
  cResult[9] = undefined !== shouldShowConnectingScreen && shouldShowConnectingScreen;
  cResult[10] = tmp16Result;
  tmp15 = tmp16Result;
}) : ((arg0) => {
  let channel;
  let obj3;
  let shouldShowConnectingScreen;
  let tmp11Result;
  ({ channel, shouldShowConnectingScreen } = arg0);
  if (shouldShowConnectingScreen === undefined) {
    shouldShowConnectingScreen = false;
  }
  const tmp = closure_18();
  const tmp3 = useIsRemoteDefault();
  const tmp4 = closure_27({ channel });
  const tmp5 = closure_30({ channel });
  const tmp6 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp6(AnalyticsLocationDefault.CHANNEL_CALL_ACTION_BAR).analyticsLocations;
  const obj = useIsFiveButtonLayout;
  const isFiveButtonLayout = obj.useIsFiveButtonLayout(channel.id);
  const obj2 = { value: analyticsLocations, children: closure_15(View, obj3) };
  obj3 = { pointerEvents: "box-none", style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container, children: tmp11Result };
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  if (shouldShowConnectingScreen) {
    obj4 = { channel };
    tmp11Result = closure_15(ChannelCallConnectingScreen.CallConnectingActionBar, obj4);
  } else {
    let tmp9Result5;
    let tmp9Result6;
    let tmp9Result4 = null;
    if (!tmp3) {
      obj5 = { channel, isSmallSize: isFiveButtonLayout };
      tmp9Result4 = closure_15(closure_19, obj5);
    }
    const items = [tmp9Result4, , , ];
    if (obj4.AUDIO_ROUTE === tmp4) {
      const obj6 = { isSmallSize: isFiveButtonLayout, channel };
      tmp9Result5 = closure_15(closure_21, obj6);
    } else {
      if (obj4.SCREEN_SHARE_START !== tmp4) {
        if (obj4.SCREEN_SHARE_END !== tmp4) {
          const NONE = tmp15.NONE;
          tmp9Result5 = null;
        }
      }
      const obj7 = { channel, isSmallSize: isFiveButtonLayout };
      tmp9Result5 = closure_15(closure_20, obj7);
    }
    items[1] = tmp9Result5;
    const obj8 = { channel, isSmallSize: isFiveButtonLayout };
    items[2] = closure_15(ChannelCallMicButton.ChannelCallMicButton, obj8);
    if (obj5.END_REMOTE === tmp5) {
      const obj9 = { channel, isSmallSize: isFiveButtonLayout };
      tmp9Result6 = closure_15(DisconnectRemoteButton.DisconnectRemoteButton, obj9);
    } else if (obj5.END_STREAM === tmp5) {
      const obj10 = { channel, isSmallSize: isFiveButtonLayout };
      tmp9Result6 = closure_15(closure_23, obj10);
    } else if (obj5.END_ACTIVITY === tmp5) {
      const obj11 = { isSmallSize: isFiveButtonLayout };
      tmp9Result6 = closure_15(closure_24, obj11);
    } else {
      tmp9Result6 = null;
      if (obj5.END_CALL === tmp5) {
        const obj12 = { channel, isSmallSize: isFiveButtonLayout };
        tmp9Result6 = closure_15(closure_22, obj12);
      }
    }
    const obj13 = { children: items };
    items[3] = tmp9Result6;
    tmp11Result = closure_17(authStore3, obj13);
  }
  return closure_15(AnalyticsLocationProvider, obj2);
});
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallActionBar.tsx");

export default tmp13;
export const VideoButton = tmp4;
export const ScreenshareButton = tmp5;
export const AudioRouteButton = tmp6;
export const DisconnectCallButton = tmp7;
export const DisconnectStreamButton = tmp8;
export const ActionBarSecondButton = obj4;
export const useActionBarSecondButtons = tmp9;
export const useActionBarSecondButton = tmp10;
export const ActionBarPrimaryButton = obj5;
export const useActionBarPrimaryButtons = tmp11;
export const useActionBarPrimaryButton = tmp12;