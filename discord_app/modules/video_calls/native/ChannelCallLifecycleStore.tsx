// discord_app/modules/video_calls/native/ChannelCallLifecycleStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import _modDef1332 from "../../../../_runtime/metro/01332__.js";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

const VoiceCallOverlayType = fn(9468).VoiceCallOverlayType;
let c4 = false;
let c5 = false;
let c6 = false;
let visible = false;
let obj = {};
let size = {
  x: "Array",
  y: "flexDirection",
  width: "y",
  height: "HermesInternal",
  screenOrientation: fn(8332).OrientationType.PORTRAIT,
  hasUserInteractedSinceOrientationChange: true,
  isInitialized: true,
  isVisible: null,
};
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = {
  x: "Array",
  y: "flexDirection",
  width: "y",
  height: "HermesInternal",
  screenOrientation: fn(8332).OrientationType.PORTRAIT,
  hasUserInteractedSinceOrientationChange: true,
  isInitialized: true,
  isVisible: null,
};
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
let c10 = true;
const Store = initializeDefault.Store;
class ChannelCallLifecycleStore extends Store {}
const prototype = ChannelCallLifecycleStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(SelectedChannelStore);
};
prototype["shouldReactToSeriousThermalStateWhenActivityFocused"] =
  function shouldReactToSeriousThermalStateWhenActivityFocused() {
    return c4;
  };
prototype["consumedRequestToRespondToSeriousThermalState"] = function consumedRequestToRespondToSeriousThermalState() {
  return c5;
};
prototype["disregardSeriousThermalState"] = function disregardSeriousThermalState() {
  return c6;
};
prototype["isReactingToThermalState"] = function isReactingToThermalState() {
  let tmp = c5;
  if (c5) {
    tmp = !c6;
  }
  return tmp;
};
prototype["getShowActivitiesDebugOverlay"] = function getShowActivitiesDebugOverlay() {
  return visible;
};
prototype["getVoiceCallOverlayLayoutStates"] = function getVoiceCallOverlayLayoutStates() {
  return obj;
};
prototype["isPipEnabledWhileFocusedOnActivityOrStream"] = function isPipEnabledWhileFocusedOnActivityOrStream() {
  return c10;
};
ChannelCallLifecycleStore.displayName = "ChannelCallLifecycleStore";
obj = {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (voiceChannelId !== voiceChannelId) {
        c4 = false;
        c5 = false;
        visible = false;
        c6 = false;
      }
    }
  },
  EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE: function handleRequestRespondToSeriousThermalState(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c4 = true;
    }
  },
  EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST:
    function handleConsumeReactToSeriousThermalStateRequest(arg0) {
      if (arg0 == null) {
        throw new TypeError("Cannot destructure 'undefined' or 'null'.");
      } else {
        c5 = true;
      }
    },
  EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE: function handleDisregardSeriousThermalState(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c6 = true;
    }
  },
  EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY: function handleSetDebugOverlayVisibility(visible) {
    visible = visible.visible;
  },
  VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE: function handleVoiceCallOverlayLayoutStateUpdate(arg0) {
    obj = {};
    ({ voiceCallOverlayType, voiceCallOverlayLayoutState } = arg0);
    const merged = Object.assign(obj);
    obj[voiceCallOverlayType] = voiceCallOverlayLayoutState;
  },
  VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM: function handleSetPipEnabledForActivityOrStream(
    pipEnabledWhileFocusedOnActivityOrStream,
  ) {
    c10 = pipEnabledWhileFocusedOnActivityOrStream.pipEnabledWhileFocusedOnActivityOrStream;
  },
  EMBEDDED_ACTIVITY_OPEN: function handleEmbeddedActivityOpen(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c10 = true;
    }
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c10 = true;
    }
  },
};
const channelCallLifecycleStore = new ChannelCallLifecycleStore(DispatcherDefault, obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallLifecycleStore.tsx");

export default channelCallLifecycleStore;
