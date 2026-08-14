// discord_app/modules/video_calls/native/components/ChannelCallActionBar.tsx
import _handleToggleVideo from "_handleToggleVideo";
import { View } from "useStageHasMedia";
import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import set from "set";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import initialize from "initialize";
import { ParticipantTypes } from "ParticipantTypes";
import { Features } from "DesktopSources";
import jsxProd from "ActionButton";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/10833_registerAsset.js";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";
import { useIsRemote } from "../../../game_console/hooks/useIsRemote.tsx";
import { useIsConnectedToVoiceChannel } from "../../../voice_chat/VoiceChatHooks.tsx";
import { useIsFiveButtonLayout } from "../useIsFiveButtonLayout.tsx";
import { stopScreenshare } from "../useScreenshareUtils.tsx";

let closure_15;
let closure_16;
let closure_17;
const require = arg1;
class VideoButton {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    c2 = undefined;
    useStateFromStores = undefined;
    c4 = undefined;
    useRef = undefined;
    useCallback = undefined;
    tmp2 = useStateFromStores;
    tmp = closure_1;
    tmp3 = require("useHasVideoPermission")(channel);
    closure_1 = tmp3;
    tmp4 = channel;
    obj = require("initialize");
    items = [];
    items[0] = View;
    stateFromStores = obj.useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
    c2 = stateFromStores;
    obj2 = require("initialize");
    items1 = [];
    items1[0] = View;
    stateFromStores1 = obj2.useStateFromStores(items1, () => _detectH265HardwareDecode.isVideoEnabled());
    useStateFromStores = stateFromStores1;
    obj3 = require("initialize");
    items2 = [];
    items2[0] = View;
    stateFromStores2 = obj3.useStateFromStores(items2, () => _detectH265HardwareDecode.supports(constants.VIDEO));
    c4 = stateFromStores2;
    obj4 = require("useStageHasMedia");
    stageHasMedia = obj4.useStageHasMedia(channel.id);
    useRef = c4.useRef(null);
    items3 = [];
    items3[0] = stateFromStores1;
    memo = c4.useMemo(() => {
      const obj = { ref: closure_5, animation: null };
      let str = "unmute";
      if (stateFromStores1) {
        str = "mute";
      }
      obj[1] = str;
      return outer1_15(channel(stateFromStores1[18]).CameraLottie, obj);
    }, items3);
    callback = c4.useCallback((channel) => {
      channel(stateFromStores1[19]).handleToggleVideo(channel);
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }, []);
    useCallback = callback;
    items4 = [, , , , ];
    items4[0] = channel;
    items4[1] = stateFromStores2;
    items4[2] = tmp3;
    items4[3] = stateFromStores;
    items4[4] = callback;
    callback1 = c4.useCallback(() => {
      if (stateFromStores2) {
        if (c1) {
          if (stateFromStores) {
            const result = channel(stateFromStores1[20]).openIgnoreThermalStateAlert(() => callback(closure_0));
            const obj2 = channel(stateFromStores1[20]);
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
    obj = { appearsDisabled: tmp13, isActive: stateFromStores1, onPress: callback1, accessibilityLabel: null, source: null, isSmallSize: null, lottieComponent: null };
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
      onPress = () => {

      };
    }
    obj = { appearsDisabled: !isFeatureEnabled, source: imgSource, isActive, accessibilityLabel: null, onPress: null, isSmallSize: null };
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
    useMaskedSpeakerStates = undefined;
    obj = require("_handleToggleVideo");
    maskedSpeakerStates = obj.useMaskedSpeakerStates();
    ({ toggleAudio, isAudioRouteEnabled, routeSource } = maskedSpeakerStates);
    obj2 = require("useIsConnectedToVoiceChannel");
    useMaskedSpeakerStates = obj2.useIsConnectedToVoiceChannel(channel);
    obj = {
      isActive: isAudioRouteEnabled,
      source: routeSource,
      onPress() {
            _undefined(channel.id, closure_2);
          },
      accessibilityLabel: null,
      isSmallSize: null
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
    obj = { source: null, accessibilityLabel: null, isSmallSize: null, onPress: null };
    obj[0] = require("registerAsset");
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t["6vrfgt"]);
    obj[2] = global.isSmallSize;
    obj[3] = function onPress() {
      channel(outer1_3[19]).handleDisconnect(channel);
    };
    return jsx(require("ActionButton").PrimaryActionButton, obj);
  }
}
class DisconnectStreamButton {
  constructor(arg0) {
    channel = global.channel;
    f86279 = undefined;
    channel = undefined;
    tmp = channel;
    tmp2 = closure_3;
    obj = require("initialize");
    items = [, ];
    items[0] = View;
    items[1] = View;
    f86279 = obj.useStateFromStores(items, () => {
      const selectedParticipant = outer1_7.getSelectedParticipant(channel.id);
      if (null != selectedParticipant) {
        if (selectedParticipant.type !== outer1_13.ACTIVITY) {
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
    items1[0] = View;
    stateFromStores = obj2.useStateFromStores(items1, () => {
      let activeStreamForStreamKey = null;
      if (null != closure_1) {
        activeStreamForStreamKey = outer1_9.getActiveStreamForStreamKey(tmp);
      }
      return activeStreamForStreamKey;
    });
    channel = stateFromStores;
    tmp4 = null;
    if (null != stateFromStores) {
      tmp5 = jsx;
      tmp6 = channel;
      obj = { source: null, accessibilityLabel: null, isSmallSize: null, onPress: null };
      tmp7 = f86279;
      obj[0] = require("registerAsset");
      intl = require("getSystemLocale").intl;
      obj[1] = intl.string(require("getSystemLocale").t.q3O3J8);
      obj[2] = global.isSmallSize;
      obj[3] = function onPress() {
        const participant = callback(outer1_3[28]).selectParticipant(channel.id, null);
        const obj = callback(outer1_3[28]);
        const obj2 = channel(outer1_3[29]);
        obj2.stopStream(channel(outer1_3[30]).encodeStreamKey(stateFromStores));
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
  obj[2] = registerAsset;
  obj[3] = isSmallSize.isSmallSize;
  return callback(importAll(10658).PrimaryActionButton, obj);
}
function useActionBarSecondButton(channel) {
  channel = channel.channel;
  let obj = useIsConnectedToVoiceChannel;
  let isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const tmp2 = useIsRemote();
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
    isActive = stopScreenshare(channel).isActive;
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
  let closure_1;
  let obj = channel(9804);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const items = [getParticipants, fetchFingerprint];
  closure_1 = channel(589).useStateFromStores(items, () => {
    const selectedParticipant = outer1_7.getSelectedParticipant(channel.id);
    if (null != selectedParticipant) {
      if (selectedParticipant.type !== outer1_13.ACTIVITY) {
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
  const obj3 = channel(589);
  const items1 = [reset];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let activeStreamForStreamKey = null;
    if (null != closure_1) {
      activeStreamForStreamKey = outer1_9.getActiveStreamForStreamKey(tmp);
    }
    return activeStreamForStreamKey;
  });
  const obj2 = channel(589);
  const items2 = [participantFromServer];
  const stateFromStores1 = channel(589).useStateFromStores(items2, () => null != currentEmbeddedActivity.getCurrentEmbeddedActivity());
  const obj4 = channel(589);
  const items3 = [set];
  const stateFromStoresObject = channel(589).useStateFromStoresObject(items3, () => ({ awaitingRemote: null != store.getAwaitingRemoteSessionInfo(), remoteSessionId: store.getRemoteSessionId() }));
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
createCacheKey = { height: require("sum").CALL_ACTION_BAR_HEIGHT, justifyContent: "center", alignItems: "center", flexDirection: "row" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: require("sum").FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT, paddingHorizontal: 16, paddingTop: require("sum").FIVE_BUTTON_CONTAINER_PADDING_TOP, paddingBottom: require("sum").FIVE_BUTTON_CONTAINER_PADDING_BOTTOM, justifyContent: "center", flexDirection: "row" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { NONE: 0, [0]: "NONE", SCREEN_SHARE_START: 1, [1]: "SCREEN_SHARE_START", SCREEN_SHARE_END: 2, [2]: "SCREEN_SHARE_END", AUDIO_ROUTE: 3, [3]: "AUDIO_ROUTE" };
let obj3 = { END_STREAM: 0, [0]: "END_STREAM", END_ACTIVITY: 1, [1]: "END_ACTIVITY", END_CALL: 2, [2]: "END_CALL", END_REMOTE: 3, [3]: "END_REMOTE" };
let obj1 = { height: require("sum").FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT, paddingHorizontal: 16, paddingTop: require("sum").FIVE_BUTTON_CONTAINER_PADDING_TOP, paddingBottom: require("sum").FIVE_BUTTON_CONTAINER_PADDING_BOTTOM, justifyContent: "center", flexDirection: "row" };
let result = require("participantFromServer").fileFinishedImporting("modules/video_calls/native/components/ChannelCallActionBar.tsx");

export default function ChannelCallActionBar(arg0) {
  let channel;
  let shouldShowConnectingScreen;
  ({ channel, shouldShowConnectingScreen } = arg0);
  if (shouldShowConnectingScreen === undefined) {
    shouldShowConnectingScreen = false;
  }
  const tmp = createCacheKey();
  const tmp5 = useActionBarSecondButton({ channel });
  const tmp6 = useActionBarPrimaryButtons({ channel });
  if (tmp6[obj3.END_STREAM]) {
    let END_REMOTE = tmp7.END_STREAM;
  } else if (tmp6[tmp7.END_REMOTE]) {
    END_REMOTE = tmp7.END_REMOTE;
  } else {
    END_REMOTE = tmp6[tmp7.END_ACTIVITY] ? tmp7.END_ACTIVITY : tmp7.END_CALL;
  }
  const tmp4 = useIsRemote();
  let obj = useIsFiveButtonLayout;
  const isFiveButtonLayout = obj.useIsFiveButtonLayout(channel.id);
  obj = { value: context(tmp2(5809).CHANNEL_CALL_ACTION_BAR).analyticsLocations, children: null };
  obj = { pointerEvents: "box-none", style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container, children: null };
  if (shouldShowConnectingScreen) {
    const obj1 = { channel: null };
    obj1[0] = channel;
    let tmp13Result = tmp11(tmp9(10835).CallConnectingActionBar, obj1);
  } else {
    let tmp11Result = null;
    if (!tmp4) {
      const obj2 = { channel: null, isSmallSize: null };
      obj2[0] = channel;
      obj2[1] = isFiveButtonLayout;
      tmp11Result = tmp11(VideoButton, obj2);
    }
    const items = [tmp11Result, , , ];
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
    items[2] = tmp11(tmp9(10859).ChannelCallMicButton, obj5);
    if (tmp7.END_REMOTE === END_REMOTE) {
      const obj6 = { channel: null, isSmallSize: null };
      obj6[0] = channel;
      obj6[1] = isFiveButtonLayout;
      let tmp11Result2 = tmp11(tmp9(10885).DisconnectRemoteButton, obj6);
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
};
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
  const tmp2 = useIsRemote();
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
    isActive = stopScreenshare(channel).isActive;
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