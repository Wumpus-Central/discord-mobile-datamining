// discord_app/modules/video_calls/native/components/ChannelCallActionBar.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import context from "../../../app_analytics/useAnalyticsLocations.tsx";
import contextDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import useIsRemoteDefault from "../../../game_console/hooks/useIsRemote.tsx";
import useIsConnectedToVoiceChannel from "../../../voice_chat/VoiceChatHooks.tsx";
import ActionButtonAll from "CallBarAction.tsx";
import useIsFiveButtonLayout from "../useIsFiveButtonLayout.tsx";
import stopScreenshareDefault from "../useScreenshareUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/10080_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/10081_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/10082_registerAsset.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_7 from "../../../calls/ChannelRTCStore.tsx";
import closure_8 from "../../../game_console/GameConsoleStore.tsx";
import closure_9 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_10 from "../../../../stores/AuthenticationStore.tsx";
import closure_11 from "../../../../stores/MediaEngineStore.tsx";
import closure_12 from "../ChannelCallLifecycleStore.tsx";
import { ParticipantTypes } from "../../../calls/CallConstants.tsx";
import { Features } from "../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
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
    tmp3 = require("useHasVideoPermission")(channel);
    closure_1 = tmp3;
    tmp4 = channel;
    obj = require("initialize");
    items = [];
    items[0] = closure_12;
    stateFromStores = obj.useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
    closure_2 = stateFromStores;
    obj2 = require("initialize");
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj2.useStateFromStores(items1, () => closure_11.isVideoEnabled());
    closure_3 = stateFromStores1;
    obj3 = require("initialize");
    items2 = [];
    items2[0] = closure_11;
    stateFromStores2 = obj3.useStateFromStores(items2, () => closure_11.supports(constants.VIDEO));
    closure_4 = stateFromStores2;
    obj4 = require("useStageHasMedia");
    stageHasMedia = obj4.useStageHasMedia(channel.id);
    closure_5 = closure_4.useRef(null);
    items3 = [];
    items3[0] = stateFromStores1;
    memo = closure_4.useMemo(() => {
      const obj = { ref: closure_5, animation: null };
      let str = "unmute";
      if (stateFromStores1) {
        str = "mute";
      }
      obj[1] = str;
      return closure_1_15(channel(stateFromStores1[18]).CameraLottie, obj);
    }, items3);
    callback = closure_4.useCallback((channel) => {
      channel(stateFromStores1[19]).handleToggleVideo(channel);
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
            const result = channel(stateFromStores1[20]).openIgnoreThermalStateAlert(() => callback(closure_0));
            obj2 = channel(stateFromStores1[20]);
          } else {
            callback(channel);
          }
        } else {
          const result1 = channel(stateFromStores1[19]).showCameraDisabledAlert();
          const obj = channel(stateFromStores1[19]);
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
        reachedLimit = require("useChannelVideoLimit")(channel).reachedLimit;
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
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t.HK4JIu);
    obj[4] = require("registerAsset");
    obj[5] = global.isSmallSize;
    obj[6] = memo;
    return tmp12(require("ActionButton").ToggledActionButton, obj);
  }
}
class ScreenshareButton {
  constructor(arg0) {
    tmp = closure_3;
    ({ channel, isSmallSize } = global);
    tmp2 = require("stopScreenshare")(channel);
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
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t.XF1nZz);
    obj[4] = onPress;
    obj[5] = isSmallSize;
    return jsx(require("ActionButton").ToggledActionButton, obj);
  }
}
class AudioRouteButton {
  constructor(arg0) {
    channel = global.channel;
    toggleAudio = undefined;
    closure_2 = undefined;
    obj = require("_handleToggleVideo");
    maskedSpeakerStates = obj.useMaskedSpeakerStates();
    ({ toggleAudio, isAudioRouteEnabled, routeSource } = maskedSpeakerStates);
    obj2 = require("useIsConnectedToVoiceChannel");
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
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t["A/Ly/2"]);
    obj[4] = global.isSmallSize;
    return jsx(require("ActionButton").ToggledActionButton, obj);
  }
}
class DisconnectCallButton {
  constructor(arg0) {
    channel = global.channel;
    obj = { source: require("registerAsset"), accessibilityLabel: null, isSmallSize: null, onPress: null };
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t["6vrfgt"]);
    obj[2] = global.isSmallSize;
    obj[3] = function onPress() {
      channel(closure_1_3[19]).handleDisconnect(channel);
    };
    return jsx(require("ActionButton").PrimaryActionButton, obj);
  }
}
class DisconnectStreamButton {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    closure_2 = undefined;
    tmp = channel;
    tmp2 = closure_3;
    obj = require("initialize");
    items = [,];
    items[0] = closure_7;
    items[1] = closure_10;
    closure_1 = obj.useStateFromStores(items, () => {
      const selectedParticipant = closure_1_7.getSelectedParticipant(channel.id);
      if (null != selectedParticipant) {
        if (selectedParticipant.type !== closure_1_13.ACTIVITY) {
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
    obj2 = require("initialize");
    items1 = [];
    items1[0] = closure_9;
    stateFromStores = obj2.useStateFromStores(items1, () => {
      let activeStreamForStreamKey = null;
      if (null != closure_1) {
        activeStreamForStreamKey = closure_1_9.getActiveStreamForStreamKey(tmp);
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
      obj[0] = require("registerAsset");
      intl = require("getSystemLocale").intl;
      obj[1] = intl.string(require("getSystemLocale").t.q3O3J8);
      obj[2] = global.isSmallSize;
      obj[3] = function onPress() {
        const participant = callback(closure_1_3[28]).selectParticipant(channel.id, null);
        const obj = callback(closure_1_3[28]);
        obj2 = channel(closure_1_3[29]);
        obj2.stopStream(channel(closure_1_3[30]).encodeStreamKey(stateFromStores));
      };
      tmp4 = jsx(require("ActionButton").PrimaryActionButton, obj);
    }
    return tmp4;
  }
}
function LeaveActivityButton(isSmallSize) {
  let obj = { accessibilityLabel: null, onPress: null, source: null, isSmallSize: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.k0Aph0);
  obj[1] = function onPress() {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let obj = callback(table[31]);
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    obj = { location: _location, applicationId: null };
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj[1] = applicationId;
    obj.leaveActivity(obj);
  };
  obj[2] = registerAssetDefault3;
  obj[3] = isSmallSize.isSmallSize;
  return callback(ActionButtonAll.PrimaryActionButton, obj);
}
function useActionBarSecondButton(channel) {
  channel = channel.channel;
  let obj = useIsConnectedToVoiceChannel;
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
    isActive = stopScreenshareDefault(channel).isActive;
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
  closure_1 = undefined;
  let obj = channel(9537);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const items = [closure_7, closure_10];
  closure_1 = channel(586).useStateFromStores(items, () => {
    const selectedParticipant = closure_1_7.getSelectedParticipant(channel.id);
    if (null != selectedParticipant) {
      if (selectedParticipant.type !== closure_1_13.ACTIVITY) {
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
  obj3 = channel(586);
  const items1 = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let activeStreamForStreamKey = null;
    if (null != closure_1) {
      activeStreamForStreamKey = closure_1_9.getActiveStreamForStreamKey(tmp);
    }
    return activeStreamForStreamKey;
  });
  obj2 = channel(586);
  const items2 = [closure_6];
  const stateFromStores1 = channel(586).useStateFromStores(
    items2,
    () => null != currentEmbeddedActivity.getCurrentEmbeddedActivity(),
  );
  const obj4 = channel(586);
  const items3 = [closure_8];
  const stateFromStoresObject = channel(586).useStateFromStoresObject(items3, () => ({
    awaitingRemote: null != store.getAwaitingRemoteSessionInfo(),
    remoteSessionId: store.getRemoteSessionId(),
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
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
createCacheKey = { container: null, containerForFiveButtonLayout: null };
createCacheKey = {
  height: require("sum").CALL_ACTION_BAR_HEIGHT,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  height: require("sum").FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT,
  paddingHorizontal: 16,
  paddingTop: require("sum").FIVE_BUTTON_CONTAINER_PADDING_TOP,
  paddingBottom: require("sum").FIVE_BUTTON_CONTAINER_PADDING_BOTTOM,
  justifyContent: "center",
  flexDirection: "row",
};
let closure_18 = createCacheKey.createStyles(createCacheKey);
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
let obj1 = {
  height: require("sum").FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT,
  paddingHorizontal: 16,
  paddingTop: require("sum").FIVE_BUTTON_CONTAINER_PADDING_TOP,
  paddingBottom: require("sum").FIVE_BUTTON_CONTAINER_PADDING_BOTTOM,
  justifyContent: "center",
  flexDirection: "row",
};
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelCallActionBar.tsx");

export default function ChannelCallActionBar(arg0) {
  ({ channel, shouldShowConnectingScreen } = arg0);
  if (shouldShowConnectingScreen === undefined) {
    shouldShowConnectingScreen = false;
  }
  const tmp = callback2();
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
  obj = { value: contextDefault(tmp2(5981).CHANNEL_CALL_ACTION_BAR).analyticsLocations, children: null };
  obj = {
    pointerEvents: "box-none",
    style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container,
    children: null,
  };
  if (shouldShowConnectingScreen) {
    obj1 = { channel: null };
    obj1[0] = channel;
    let tmp13Result = tmp11(tmp9(10083).CallConnectingActionBar, obj1);
  } else {
    let tmp11Result = null;
    if (!tmp4) {
      obj2 = { channel: null, isSmallSize: null };
      obj2[0] = channel;
      obj2[1] = isFiveButtonLayout;
      tmp11Result = tmp11(VideoButton, obj2);
    }
    const items = [tmp11Result, , ,];
    if (obj2.AUDIO_ROUTE === tmp5) {
      obj3 = { isSmallSize: null, channel: null };
      obj3[0] = isFiveButtonLayout;
      obj3[1] = channel;
      let tmp11Result1 = tmp11(AudioRouteButton, obj3);
    } else {
      if (tmp17.SCREEN_SHARE_START !== tmp5) {
        if (tmp17.SCREEN_SHARE_END !== tmp5) {
          const NONE = tmp17.NONE;
          tmp11Result1 = null;
        }
      }
      const obj4 = { channel: null, isSmallSize: null };
      obj4[0] = channel;
      obj4[1] = isFiveButtonLayout;
      tmp11Result1 = tmp11(ScreenshareButton, obj4);
    }
    items[1] = tmp11Result1;
    const obj5 = { channel: null, isSmallSize: null };
    obj5[0] = channel;
    obj5[1] = isFiveButtonLayout;
    items[2] = tmp11(tmp9(10107).ChannelCallMicButton, obj5);
    if (tmp7.END_REMOTE === END_REMOTE) {
      const obj6 = { channel: null, isSmallSize: null };
      obj6[0] = channel;
      obj6[1] = isFiveButtonLayout;
      let tmp11Result2 = tmp11(tmp9(10117).DisconnectRemoteButton, obj6);
    } else if (tmp7.END_STREAM === END_REMOTE) {
      const obj7 = { channel: null, isSmallSize: null };
      obj7[0] = channel;
      obj7[1] = isFiveButtonLayout;
      tmp11Result2 = tmp11(DisconnectStreamButton, obj7);
    } else if (tmp7.END_ACTIVITY === END_REMOTE) {
      const obj8 = { isSmallSize: null };
      obj8[0] = isFiveButtonLayout;
      tmp11Result2 = tmp11(LeaveActivityButton, obj8);
    } else {
      tmp11Result2 = null;
      if (tmp7.END_CALL === END_REMOTE) {
        const obj9 = { channel: null, isSmallSize: null };
        obj9[0] = channel;
        obj9[1] = isFiveButtonLayout;
        tmp11Result2 = tmp11(DisconnectCallButton, obj9);
      }
    }
    const obj10 = { children: null };
    items[3] = tmp11Result2;
    obj10[0] = items;
    tmp13Result = closure_17(closure_16, obj10);
    const tmp13 = closure_17;
    const tmp14 = closure_16;
  }
  obj[2] = tmp13Result;
  obj[1] = closure_15(View, obj);
  return closure_15(context.AnalyticsLocationProvider, obj);
}
export { VideoButton };
export { ScreenshareButton };
export { AudioRouteButton };
export { DisconnectCallButton };
export { DisconnectStreamButton };
export const ActionBarSecondButton = obj2;
export const useActionBarSecondButtons = function useActionBarSecondButtons(channel) {
  channel = channel.channel;
  let obj = useIsConnectedToVoiceChannel;
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
    isActive = stopScreenshareDefault(channel).isActive;
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
