// discord_app/modules/video_calls/native/components/ChannelCallActionBar.tsx
import util from "../../../../intl/index.native.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import useIsRemoteDefault from "../../../game_console/hooks/useIsRemote.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import VoiceChatHooks from "../../../voice_chat/VoiceChatHooks.tsx";
import CallBarActionAll from "CallBarAction.tsx";
import useIsFiveButtonLayout from "../useIsFiveButtonLayout.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import openIgnoreThermalStateAlert from "../../../activities/native/openIgnoreThermalStateAlert.tsx";
import CameraLottie from "../../../../design/components/LottieIcon/native/generated/CameraLottie.tsx";
import useScreenshareUtilsDefault from "../useScreenshareUtils.tsx";
import _modDef9975 from "../../../../../_runtime/metro/09975__.js";
import _modDef9976 from "../../../../../_runtime/metro/09976__.js";
import _modDef9977 from "../../../../../_runtime/metro/09977__.js";
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
    items4 = [, , , ,];
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
    obj = {
      appearsDisabled: tmp13,
      isActive: stateFromStores1,
      onPress: callback1,
      accessibilityLabel: null,
      source: null,
      isSmallSize: null,
      lottieComponent: null,
    };
    intl = tmp4(tmp2[22]).intl;
    obj.accessibilityLabel = intl.string(tmp4(tmp2[22]).t.HK4JIu);
    obj.source = tmp(tmp2[23]);
    obj.isSmallSize = global.isSmallSize;
    obj.lottieComponent = memo;
    return tmp12(closure_2(closure_3[21]).ToggledActionButton, obj);
  }
}
class ScreenshareButton {
  constructor(arg0) {
    tmp = closure_3;
    ({ channel, isSmallSize } = global);
    tmp2 = closure_1(closure_3[24])(channel);
    ({ onPress, isFeatureEnabled, isActive, imgSource } = tmp2);
    if (!isFeatureEnabled) {
      onPress = () => {};
    }
    obj = {
      appearsDisabled: !isFeatureEnabled,
      source: imgSource,
      isActive,
      accessibilityLabel: null,
      onPress: null,
      isSmallSize: null,
    };
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
    obj = {
      isActive: isAudioRouteEnabled,
      source: routeSource,
      onPress() {
        _undefined(channel.id, closure_2);
      },
      accessibilityLabel: null,
      isSmallSize: null,
    };
    intl = closure_0(closure_3[22]).intl;
    obj.accessibilityLabel = intl.string(closure_0(closure_3[22]).t["A/Ly/2"]);
    obj.isSmallSize = global.isSmallSize;
    return jsx(closure_2(closure_3[21]).ToggledActionButton, obj);
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
    items = [,];
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
      obj = { source: null, accessibilityLabel: null, isSmallSize: null, onPress: null };
      tmp7 = closure_1;
      obj.source = closure_1(tmp2[27]);
      intl = tmp(tmp2[22]).intl;
      obj.accessibilityLabel = intl.string(tmp(tmp2[22]).t.q3O3J8);
      obj.isSmallSize = global.isSmallSize;
      obj.onPress = function onPress() {
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
        obj2 = StreamActionCreators;
        obj2.stopStream(StreamKeyUtils.encodeStreamKey(stateFromStores));
      };
      tmp4 = jsx(closure_2(tmp2[21]).PrimaryActionButton, obj);
    }
    return tmp4;
  }
}
function LeaveActivityButton(isSmallSize) {
  let obj = { accessibilityLabel: null, onPress: null, source: null, isSmallSize: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.k0Aph0);
  obj.onPress = function onPress() {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let obj = EmbeddedActivitiesNativeManagerDefault;
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    obj = { location: _location, applicationId: null };
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj.applicationId = applicationId;
    obj.leaveActivity(obj);
  };
  obj.source = _modDef9977;
  obj.isSmallSize = isSmallSize.isSmallSize;
  return __initData(CallBarActionAll.PrimaryActionButton, obj);
}
function useActionBarSecondButton(channel) {
  channel = channel.channel;
  let obj = VoiceChatHooks;
  let isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const tmp2 = useIsRemoteDefault();
  let tmp4 = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    tmp4 = !tmp2;
  }
  obj = {};
  obj[obj2.AUDIO_ROUTE] = tmp4;
  obj[obj2.NONE] = true;
  let isActive = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    isActive = !tmp2;
  }
  if (isActive) {
    isActive = useScreenshareUtilsDefault(channel).isActive;
  }
  obj[obj2.SCREEN_SHARE_END] = isActive;
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp2;
  }
  obj[obj2.SCREEN_SHARE_START] = isConnectedToVoiceChannel;
  if (obj[obj2.SCREEN_SHARE_END]) {
    let AUDIO_ROUTE = tmp3.SCREEN_SHARE_END;
  } else {
    if (!obj[tmp3.AUDIO_ROUTE]) {
      AUDIO_ROUTE = obj[tmp3.SCREEN_SHARE_START] ? tmp3.SCREEN_SHARE_START : tmp3.NONE;
    }
    AUDIO_ROUTE = tmp3.AUDIO_ROUTE;
  }
  return AUDIO_ROUTE;
}
function useActionBarPrimaryButtons(channel) {
  channel = channel.channel;
  let obj = channel(9471);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
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
  obj3 = channel(504);
  const items1 = [ApplicationStreamingStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let activeStreamForStreamKey = null;
    if (null != closure_1) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
    }
    return activeStreamForStreamKey;
  });
  obj2 = channel(504);
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
  obj = { [closure_27.END_ACTIVITY]: stateFromStores1, [closure_27.END_CALL]: isConnectedToVoiceChannel };
  if (!awaitingRemote) {
    awaitingRemote = null != tmp5;
  }
  obj[obj3.END_REMOTE] = awaitingRemote;
  obj[obj3.END_STREAM] = null != stateFromStores;
  return obj;
}
const View = fn(17).View;
const ParticipantTypes = fn(4581).ParticipantTypes;
const Features = fn(4585).Features;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let createStyles = { container: null, containerForFiveButtonLayout: null };
createStyles = {
  height: fn(9496).CALL_ACTION_BAR_HEIGHT,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};
createStyles.container = createStyles;
createStyles.containerForFiveButtonLayout = {
  height: fn(9496).FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT,
  paddingHorizontal: 16,
  paddingTop: fn(9496).FIVE_BUTTON_CONTAINER_PADDING_TOP,
  paddingBottom: fn(9496).FIVE_BUTTON_CONTAINER_PADDING_BOTTOM,
  justifyContent: "center",
  flexDirection: "row",
};
let closure_18 = createStyles.createStyles(createStyles);
let obj2 = {
  NONE: 0,
  [0]: "NONE",
  SCREEN_SHARE_START: 1,
  [1]: "SCREEN_SHARE_START",
  SCREEN_SHARE_END: 2,
  [2]: "SCREEN_SHARE_END",
  AUDIO_ROUTE: 3,
  [3]: "AUDIO_ROUTE",
};
let obj3 = {
  END_STREAM: 0,
  [0]: "END_STREAM",
  END_ACTIVITY: 1,
  [1]: "END_ACTIVITY",
  END_CALL: 2,
  [2]: "END_CALL",
  END_REMOTE: 3,
  [3]: "END_REMOTE",
};
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
  if (tmp6[obj3.END_STREAM]) {
    let END_REMOTE = tmp7.END_STREAM;
  } else if (tmp6[tmp7.END_REMOTE]) {
    END_REMOTE = tmp7.END_REMOTE;
  } else {
    END_REMOTE = tmp6[tmp7.END_ACTIVITY] ? tmp7.END_ACTIVITY : tmp7.END_CALL;
  }
  const tmp4 = useIsRemoteDefault();
  let obj = useIsFiveButtonLayout;
  const isFiveButtonLayout = obj.useIsFiveButtonLayout(channel.id);
  obj = { value: useAnalyticsLocationsDefault(tmp2(7182).CHANNEL_CALL_ACTION_BAR).analyticsLocations, children: null };
  obj = {
    pointerEvents: "box-none",
    style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container,
    children: null,
  };
  if (shouldShowConnectingScreen) {
    const obj1 = { channel };
    let tmp13Result = tmp11(tmp9(9978).CallConnectingActionBar, obj1);
  } else {
    let tmp11Result = null;
    if (!tmp4) {
      obj2 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result = tmp11(VideoButton, obj2);
    }
    const items = [tmp11Result, , ,];
    if (obj2.AUDIO_ROUTE === tmp5) {
      obj3 = { isSmallSize: isFiveButtonLayout, channel };
      let tmp11Result1 = tmp11(AudioRouteButton, obj3);
    } else {
      if (tmp17.SCREEN_SHARE_START !== tmp5) {
        if (tmp17.SCREEN_SHARE_END !== tmp5) {
          const NONE = tmp17.NONE;
          tmp11Result1 = null;
        }
      }
      const obj4 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result1 = tmp11(ScreenshareButton, obj4);
    }
    items[1] = tmp11Result1;
    const obj5 = { channel, isSmallSize: isFiveButtonLayout };
    items[2] = tmp11(tmp9(10002).ChannelCallMicButton, obj5);
    if (tmp7.END_REMOTE === END_REMOTE) {
      const obj6 = { channel, isSmallSize: isFiveButtonLayout };
      let tmp11Result2 = tmp11(tmp9(10012).DisconnectRemoteButton, obj6);
    } else if (tmp7.END_STREAM === END_REMOTE) {
      const obj7 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result2 = tmp11(DisconnectStreamButton, obj7);
    } else if (tmp7.END_ACTIVITY === END_REMOTE) {
      const obj8 = { isSmallSize: isFiveButtonLayout };
      tmp11Result2 = tmp11(LeaveActivityButton, obj8);
    } else {
      tmp11Result2 = null;
      if (tmp7.END_CALL === END_REMOTE) {
        const obj9 = { channel, isSmallSize: isFiveButtonLayout };
        tmp11Result2 = tmp11(DisconnectCallButton, obj9);
      }
    }
    const obj10 = { children: null };
    items[3] = tmp11Result2;
    obj10.children = items;
    tmp13Result = closure_1_17(value2, obj10);
  }
  obj.children = tmp13Result;
  obj.children = __initData(View, obj);
  return __initData(useAnalyticsLocations.AnalyticsLocationProvider, obj);
}
export { VideoButton };
export { ScreenshareButton };
export { AudioRouteButton };
export { DisconnectCallButton };
export { DisconnectStreamButton };
export const ActionBarSecondButton = obj2;
export const useActionBarSecondButtons = function useActionBarSecondButtons(channel) {
  channel = channel.channel;
  let obj = VoiceChatHooks;
  let isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const tmp2 = useIsRemoteDefault();
  let tmp4 = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    tmp4 = !tmp2;
  }
  obj = {};
  obj[obj2.AUDIO_ROUTE] = tmp4;
  obj[obj2.NONE] = true;
  let isActive = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    isActive = !tmp2;
  }
  if (isActive) {
    isActive = useScreenshareUtilsDefault(channel).isActive;
  }
  obj[obj2.SCREEN_SHARE_END] = isActive;
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp2;
  }
  obj[obj2.SCREEN_SHARE_START] = isConnectedToVoiceChannel;
  return obj;
};
export { useActionBarSecondButton };
export const ActionBarPrimaryButton = obj3;
export { useActionBarPrimaryButtons };
export const useActionBarPrimaryButton = function useActionBarPrimaryButton(channel) {
  const tmp = useActionBarPrimaryButtons({ channel: channel.channel });
  if (tmp[obj3.END_STREAM]) {
    let END_REMOTE = tmp2.END_STREAM;
  } else if (tmp[tmp2.END_REMOTE]) {
    END_REMOTE = tmp2.END_REMOTE;
  } else {
    END_REMOTE = tmp[tmp2.END_ACTIVITY] ? tmp2.END_ACTIVITY : tmp2.END_CALL;
  }
  return END_REMOTE;
};
