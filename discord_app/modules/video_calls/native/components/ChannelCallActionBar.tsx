// === Module 10203: ChannelCallActionBar ===

// Module 10203 (ChannelCallActionBar)
import util from "util" /* 1115 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4808 */;
import StreamActionCreators from "StreamActionCreators" /* 4898 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4957 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7407 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7427 */;
import useIsRemoteDefault from "useIsRemote" /* 7513 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9576 */;
import VoiceChatHooks from "VoiceChatHooks" /* 9644 */;
import CallBarActionAll from "CallBarAction" /* 9666 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 9669 */;
import openIgnoreThermalStateAlert from "openIgnoreThermalStateAlert" /* 9674 */;
import CallsUtils from "CallsUtils" /* 9904 */;
import CameraLottie from "CameraLottie" /* 10205 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 10209 */;
import _modDef10232 from "module_10232" /* 10232 */;
import _modDef10233 from "module_10233" /* 10233 */;
import _modDef10234 from "module_10234" /* 10234 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 10235 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 10259 */;
import DisconnectRemoteButton from "DisconnectRemoteButton" /* 10269 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4772 */;
import GameConsoleStore from "GameConsoleStore" /* 4773 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9655 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
class VideoButton {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    tmp2 = closure_3;
    tmp = closure_1;
    tmp3 = closure_1(closure_3[14])(channel);
    closure_1 = tmp3;
    tmp4 = channel;
    obj = channel(closure_3[15]);
    items = [];
    items[0] = closure_12;
    stateFromStores = obj.useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
    closure_2 = stateFromStores;
    obj2 = channel(closure_3[15]);
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj2.useStateFromStores(items1, () => MediaEngineStore.isVideoEnabled());
    closure_3 = stateFromStores1;
    obj3 = channel(closure_3[15]);
    items2 = [];
    items2[0] = closure_11;
    stateFromStores2 = obj3.useStateFromStores(items2, () => MediaEngineStore.supports(constants.VIDEO));
    closure_4 = stateFromStores2;
    obj4 = channel(closure_3[17]);
    stageHasMedia = obj4.useStageHasMedia(channel.id);
    closure_5 = closure_4.useRef(null);
    items3 = [];
    items3[0] = stateFromStores1;
    memo = closure_4.useMemo(() => {
      const obj = { ref, animation: null };
      let str = "unmute";
      if (stateFromStores1) {
        str = "mute";
      }
      obj.animation = str;
      return __initData(CameraLottie.CameraLottie, obj);
    }, items3);
    callback = closure_4.useCallback((channel) => {
      CallsUtils.handleToggleVideo(channel);
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }, []);
    closure_6 = callback;
    items4 = [, , , , ];
    items4[0] = channel;
    items4[1] = stateFromStores2;
    items4[2] = tmp3;
    items4[3] = stateFromStores;
    items4[4] = callback;
    callback1 = closure_4.useCallback(() => {
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
    tmp12 = jsx;
    tmp13 = !stateFromStores2;
    if (stateFromStores2) {
      tmp13 = !tmp3;
    }
    if (!tmp13) {
      reachedLimit = !stageHasMedia;
      if (!stageHasMedia) {
        reachedLimit = closure_1(closure_3[16])(channel).reachedLimit;
      }
      tmp13 = reachedLimit;
    }
    obj1 = { appearsDisabled: tmp13, isActive: stateFromStores1, onPress: callback1, accessibilityLabel: null, source: null, isSmallSize: null, lottieComponent: null };
    intl = tmp4(tmp2[22]).intl;
    obj1.accessibilityLabel = intl.string(tmp4(tmp2[22]).t.HK4JIu);
    obj1.source = tmp(tmp2[23]);
    obj1.isSmallSize = global.isSmallSize;
    obj1.lottieComponent = memo;
    return tmp12(closure_2(closure_3[21]).ToggledActionButton, obj1);
  }
}
class ScreenshareButton {
  constructor(arg0) {
    tmp = closure_3;
    ({ channel, isSmallSize } = global);
    tmp2 = closure_1(closure_3[24])(channel);
    ({ onPress, isFeatureEnabled, isActive, imgSource } = tmp2);
    if (!isFeatureEnabled) {
      onPress = () => {

      };
    }
    obj = { appearsDisabled: !isFeatureEnabled, source: imgSource, isActive, accessibilityLabel: null, onPress: null, isSmallSize: null };
    intl = closure_0(tmp[22]).intl;
    obj.accessibilityLabel = intl.string(closure_0(tmp[22]).t.XF1nZz);
    obj.onPress = onPress;
    obj.isSmallSize = isSmallSize;
    return jsx(closure_2(tmp[21]).ToggledActionButton, obj);
  }
}
class AudioRouteButton {
  constructor(arg0) {
    channel = global.channel;
    toggleAudio = undefined;
    closure_2 = undefined;
    obj = closure_0(closure_3[19]);
    maskedSpeakerStates = obj.useMaskedSpeakerStates();
    ({ toggleAudio, isAudioRouteEnabled, routeSource } = maskedSpeakerStates);
    obj2 = closure_0(closure_3[25]);
    closure_2 = obj2.useIsConnectedToVoiceChannel(channel);
    obj1 = {
      isActive: isAudioRouteEnabled,
      source: routeSource,
      onPress() {
            _undefined(channel.id, closure_2);
          },
      accessibilityLabel: null,
      isSmallSize: null
    };
    intl = closure_0(closure_3[22]).intl;
    obj1.accessibilityLabel = intl.string(closure_0(closure_3[22]).t["A/Ly/2"]);
    obj1.isSmallSize = global.isSmallSize;
    return jsx(closure_2(closure_3[21]).ToggledActionButton, obj1);
  }
}
class DisconnectCallButton {
  constructor(arg0) {
    channel = global.channel;
    obj = { source: closure_1(closure_3[26]), accessibilityLabel: null, isSmallSize: null, onPress: null };
    intl = channel(closure_3[22]).intl;
    obj.accessibilityLabel = intl.string(channel(closure_3[22]).t["6vrfgt"]);
    obj.isSmallSize = global.isSmallSize;
    obj.onPress = function onPress() {
      CallsUtils.handleDisconnect(channel);
    };
    return jsx(closure_2(closure_3[21]).PrimaryActionButton, obj);
  }
}
class DisconnectStreamButton {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    closure_2 = undefined;
    tmp = channel;
    tmp2 = closure_3;
    obj = channel(closure_3[15]);
    items = [, ];
    items[0] = closure_7;
    items[1] = closure_10;
    closure_1 = obj.useStateFromStores(items, () => {
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
    obj2 = channel(closure_3[15]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores = obj2.useStateFromStores(items1, () => {
      let activeStreamForStreamKey = null;
      if (null != closure_1) {
        activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
      }
      return activeStreamForStreamKey;
    });
    closure_2 = stateFromStores;
    tmp4 = null;
    if (null != stateFromStores) {
      tmp5 = jsx;
      tmp6 = closure_2;
      obj1 = { source: null, accessibilityLabel: null, isSmallSize: null, onPress: null };
      tmp7 = closure_1;
      obj1.source = closure_1(tmp2[27]);
      intl = tmp(tmp2[22]).intl;
      obj1.accessibilityLabel = intl.string(tmp(tmp2[22]).t.q3O3J8);
      obj1.isSmallSize = global.isSmallSize;
      obj1.onPress = function onPress() {
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
        const obj2 = StreamActionCreators;
        obj2.stopStream(StreamKeyUtils.encodeStreamKey(stateFromStores));
      };
      tmp4 = jsx(closure_2(tmp2[21]).PrimaryActionButton, obj1);
    }
    return tmp4;
  }
}
function LeaveActivityButton(isSmallSize) {
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
  obj.source = _modDef10234;
  obj.isSmallSize = isSmallSize.isSmallSize;
  return __initData(CallBarActionAll.PrimaryActionButton, obj);
}
function useActionBarSecondButton(channel) {
  channel = channel.channel;
  let isConnectedToVoiceChannel = VoiceChatHooks.useIsConnectedToVoiceChannel(channel);
  const tmp2 = useIsRemoteDefault();
  let tmp4 = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    tmp4 = !tmp2;
  }
  const obj2 = {};
  obj2[obj5.AUDIO_ROUTE] = tmp4;
  obj2[obj5.NONE] = true;
  let isActive = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    isActive = !tmp2;
  }
  if (isActive) {
    isActive = useScreenshareUtilsDefault(channel).isActive;
  }
  obj2[obj5.SCREEN_SHARE_END] = isActive;
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp2;
  }
  obj2[obj5.SCREEN_SHARE_START] = isConnectedToVoiceChannel;
  if (obj2[obj5.SCREEN_SHARE_END]) {
    let AUDIO_ROUTE = obj5.SCREEN_SHARE_END;
  } else {
    if (!obj2[obj5.AUDIO_ROUTE]) {
      AUDIO_ROUTE = obj2[obj5.SCREEN_SHARE_START] ? obj5.SCREEN_SHARE_START : obj5.NONE;
    }
    AUDIO_ROUTE = obj5.AUDIO_ROUTE;
  }
  return AUDIO_ROUTE;
}
function useActionBarPrimaryButtons(channel) {
  channel = channel.channel;
  const isConnectedToVoiceChannel = channel(9644).useIsConnectedToVoiceChannel(channel);
  const obj = channel(9644);
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
  const stateFromStores1 = channel(504).useStateFromStores(items2, () => null != currentEmbeddedActivity.getCurrentEmbeddedActivity());
  const obj4 = channel(504);
  const items3 = [GameConsoleStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items3, () => ({ awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() }));
  let awaitingRemote = stateFromStoresObject.awaitingRemote;
  obj6 = { [closure_27.END_ACTIVITY]: stateFromStores1, [closure_27.END_CALL]: isConnectedToVoiceChannel };
  if (!awaitingRemote) {
    awaitingRemote = null != tmp5;
  }
  obj6[obj6.END_REMOTE] = awaitingRemote;
  obj6[obj6.END_STREAM] = null != stateFromStores;
  return obj6;
}
const View = fn(17).View;
const ParticipantTypes = fn(4777).ParticipantTypes;
const Features = fn(4781).Features;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { height: fn(9665).CALL_ACTION_BAR_HEIGHT, justifyContent: "center", alignItems: "center", flexDirection: "row" }, containerForFiveButtonLayout: null };
let obj3 = { height: fn(9665).CALL_ACTION_BAR_HEIGHT, justifyContent: "center", alignItems: "center", flexDirection: "row" };
obj2.containerForFiveButtonLayout = { height: fn(9665).FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT, paddingHorizontal: 16, paddingTop: fn(9665).FIVE_BUTTON_CONTAINER_PADDING_TOP, paddingBottom: fn(9665).FIVE_BUTTON_CONTAINER_PADDING_BOTTOM, justifyContent: "center", flexDirection: "row" };
let closure_18 = createStyles.createStyles(obj2);
let obj5 = { NONE: 0, [0]: "NONE", SCREEN_SHARE_START: 1, [1]: "SCREEN_SHARE_START", SCREEN_SHARE_END: 2, [2]: "SCREEN_SHARE_END", AUDIO_ROUTE: 3, [3]: "AUDIO_ROUTE" };
let obj6 = { END_STREAM: 0, [0]: "END_STREAM", END_ACTIVITY: 1, [1]: "END_ACTIVITY", END_CALL: 2, [2]: "END_CALL", END_REMOTE: 3, [3]: "END_REMOTE" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallActionBar.tsx");

export default function ChannelCallActionBar(arg0) {
  ({ channel, shouldShowConnectingScreen } = arg0);
  if (shouldShowConnectingScreen === undefined) {
    shouldShowConnectingScreen = false;
  }
  const tmp = closure_18();
  const tmp5 = useActionBarSecondButton({ channel });
  const tmp6 = useActionBarPrimaryButtons({ channel });
  if (tmp6[obj6.END_STREAM]) {
    let END_REMOTE = tmp7.END_STREAM;
  } else if (tmp6[tmp7.END_REMOTE]) {
    END_REMOTE = tmp7.END_REMOTE;
  } else {
    END_REMOTE = tmp6[tmp7.END_ACTIVITY] ? tmp7.END_ACTIVITY : tmp7.END_CALL;
  }
  const tmp4 = useIsRemoteDefault();
  const tmp2Result = useAnalyticsLocationsDefault;
  const isFiveButtonLayout = useIsFiveButtonLayout.useIsFiveButtonLayout(channel.id);
  const obj2 = { value: tmp2Result(AnalyticsLocationDefault.CHANNEL_CALL_ACTION_BAR).analyticsLocations, children: null };
  const obj3 = { pointerEvents: "box-none", style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container, children: null };
  if (shouldShowConnectingScreen) {
    const obj4 = { channel };
    let tmp13Result = __initData(ChannelCallConnectingScreen.CallConnectingActionBar, obj4);
  } else {
    let tmp11Result4 = null;
    if (!tmp4) {
      obj5 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result4 = __initData(VideoButton, obj5);
    }
    const items = [tmp11Result4, , , ];
    if (obj5.AUDIO_ROUTE === tmp5) {
      obj6 = { isSmallSize: isFiveButtonLayout, channel };
      let tmp11Result5 = __initData(AudioRouteButton, obj6);
    } else {
      if (tmp17.SCREEN_SHARE_START !== tmp5) {
        if (tmp17.SCREEN_SHARE_END !== tmp5) {
          const NONE = tmp17.NONE;
          tmp11Result5 = null;
        }
      }
      const obj7 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result5 = __initData(ScreenshareButton, obj7);
    }
    items[1] = tmp11Result5;
    const obj8 = { channel, isSmallSize: isFiveButtonLayout };
    items[2] = __initData(ChannelCallMicButton.ChannelCallMicButton, obj8);
    if (tmp7.END_REMOTE === END_REMOTE) {
      const obj9 = { channel, isSmallSize: isFiveButtonLayout };
      let tmp11Result6 = __initData(DisconnectRemoteButton.DisconnectRemoteButton, obj9);
    } else if (tmp7.END_STREAM === END_REMOTE) {
      const obj10 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result6 = __initData(DisconnectStreamButton, obj10);
    } else if (tmp7.END_ACTIVITY === END_REMOTE) {
      const obj11 = { isSmallSize: isFiveButtonLayout };
      tmp11Result6 = __initData(LeaveActivityButton, obj11);
    } else {
      tmp11Result6 = null;
      if (tmp7.END_CALL === END_REMOTE) {
        const obj12 = { channel, isSmallSize: isFiveButtonLayout };
        tmp11Result6 = __initData(DisconnectCallButton, obj12);
      }
    }
    const obj13 = { children: null };
    items[3] = tmp11Result6;
    obj13.children = items;
    tmp13Result = closure_1_17(value2, obj13);
  }
  obj3.children = tmp13Result;
  obj2.children = __initData(View, obj3);
  return __initData(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
};
export { VideoButton };
export { ScreenshareButton };
export { AudioRouteButton };
export { DisconnectCallButton };
export { DisconnectStreamButton };
export const ActionBarSecondButton = obj5;
export const useActionBarSecondButtons = function useActionBarSecondButtons(channel) {
  channel = channel.channel;
  let isConnectedToVoiceChannel = VoiceChatHooks.useIsConnectedToVoiceChannel(channel);
  const tmp2 = useIsRemoteDefault();
  let tmp4 = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    tmp4 = !tmp2;
  }
  const obj2 = {};
  obj2[obj5.AUDIO_ROUTE] = tmp4;
  obj2[obj5.NONE] = true;
  let isActive = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    isActive = !tmp2;
  }
  if (isActive) {
    isActive = useScreenshareUtilsDefault(channel).isActive;
  }
  obj2[obj5.SCREEN_SHARE_END] = isActive;
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp2;
  }
  obj2[obj5.SCREEN_SHARE_START] = isConnectedToVoiceChannel;
  return obj2;
};
export { useActionBarSecondButton };
export const ActionBarPrimaryButton = obj6;
export { useActionBarPrimaryButtons };
export const useActionBarPrimaryButton = function useActionBarPrimaryButton(channel) {
  const tmp = useActionBarPrimaryButtons({ channel: channel.channel });
  if (tmp[obj6.END_STREAM]) {
    let END_REMOTE = obj6.END_STREAM;
  } else if (tmp[obj6.END_REMOTE]) {
    END_REMOTE = obj6.END_REMOTE;
  } else {
    END_REMOTE = tmp[obj6.END_ACTIVITY] ? obj6.END_ACTIVITY : obj6.END_CALL;
  }
  return END_REMOTE;
};