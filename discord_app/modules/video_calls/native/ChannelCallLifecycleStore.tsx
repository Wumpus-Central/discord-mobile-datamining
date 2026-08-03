import handleConnectionOpen from "handleConnectionOpen";
import { VoiceCallOverlayType } from "BOX_MODE_ACTIONSHEET_WIDTH";
import { Store } from "initialize";

let c4 = false;
let c5 = false;
let c6 = false;
let c7 = false;
let obj = {};
obj = { x: "Array", y: "flex", width: "borderRadius", height: "label", screenOrientation: "<string:822483025>", hasUserInteractedSinceOrientationChange: "<string:3951369912>", isInitialized: "<string:1069463633>", isVisible: "ip" };
obj[4] = require("handleOrientationChange").OrientationType.PORTRAIT;
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = obj;
obj = { x: "Array", y: "flex", width: "borderRadius", height: "label", screenOrientation: "<string:822483025>", hasUserInteractedSinceOrientationChange: "<string:3951369912>", isInitialized: "<string:1069463633>", isVisible: "ip" };
obj[4] = require("handleOrientationChange").OrientationType.PORTRAIT;
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = obj;
let c10 = true;
class ChannelCallLifecycleStore extends Store {
}
const prototype = ChannelCallLifecycleStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleConnectionOpen);
};
prototype["shouldReactToSeriousThermalStateWhenActivityFocused"] = function shouldReactToSeriousThermalStateWhenActivityFocused() {
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
  return c7;
};
prototype["getVoiceCallOverlayLayoutStates"] = function getVoiceCallOverlayLayoutStates() {
  return obj;
};
prototype["isPipEnabledWhileFocusedOnActivityOrStream"] = function isPipEnabledWhileFocusedOnActivityOrStream() {
  return c10;
};
ChannelCallLifecycleStore.displayName = "ChannelCallLifecycleStore";
const channelCallLifecycleStore = new ChannelCallLifecycleStore(require("dispatcher"), {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      if (voiceChannelId !== voiceChannelId) {
        let c4 = false;
        let c5 = false;
        let c7 = false;
        let c6 = false;
        let closure_9 = obj;
      }
    }
  },
  EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE: function handleRequestRespondToSeriousThermalState(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c4 = true;
    }
  },
  EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST: function handleConsumeReactToSeriousThermalStateRequest(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c5 = true;
    }
  },
  EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE: function handleDisregardSeriousThermalState(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c6 = true;
    }
  },
  EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY: function handleSetDebugOverlayVisibility(visible) {
    visible = visible.visible;
  },
  VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE: function handleVoiceCallOverlayLayoutStateUpdate(arg0) {
    let voiceCallOverlayLayoutState;
    let voiceCallOverlayType;
    const obj = {};
    ({ voiceCallOverlayType, voiceCallOverlayLayoutState } = arg0);
    const merged = Object.assign(obj);
    obj[voiceCallOverlayType] = voiceCallOverlayLayoutState;
  },
  VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM: function handleSetPipEnabledForActivityOrStream(pipEnabledWhileFocusedOnActivityOrStream) {
    let closure_10 = pipEnabledWhileFocusedOnActivityOrStream.pipEnabledWhileFocusedOnActivityOrStream;
  },
  EMBEDDED_ACTIVITY_OPEN: function handleEmbeddedActivityOpen(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c10 = true;
    }
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c10 = true;
    }
  }
});
const result = require("handleOrientationChange").fileFinishedImporting("modules/video_calls/native/ChannelCallLifecycleStore.tsx");

export default channelCallLifecycleStore;