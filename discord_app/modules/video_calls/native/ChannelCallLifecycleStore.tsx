// discord_app/modules/video_calls/native/ChannelCallLifecycleStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import _modDef1342 from "../../../../_runtime/metro/01342__.js";
import DeviceOrientation from "../../device/native/DeviceOrientation.tsx";
import ChannelCallConstants from "ChannelCallConstants.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let voiceChannelId;

const VoiceCallOverlayType = ChannelCallConstants.VoiceCallOverlayType;
let c4 = false;
let c5 = false;
let c6 = false;
let visible = false;
let obj = {};
let size = {
  x: "Array",
  y: "T",
  width: "y",
  height: "IconComponent",
  screenOrientation: DeviceOrientation.OrientationType.PORTRAIT,
  hasUserInteractedSinceOrientationChange: false,
  isInitialized: null,
  isVisible: null,
};
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = {
  x: "Array",
  y: "T",
  width: "y",
  height: "IconComponent",
  screenOrientation: DeviceOrientation.OrientationType.PORTRAIT,
  hasUserInteractedSinceOrientationChange: false,
  isInitialized: null,
  isVisible: null,
};
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
let c10 = true;
const Store = get_initializedDefault.Store;
class ChannelCallLifecycleStore extends Store {
  initialize() {
    this.waitFor(SelectedChannelStore);
  }
  shouldReactToSeriousThermalStateWhenActivityFocused() {
    return c4;
  }
  consumedRequestToRespondToSeriousThermalState() {
    return c5;
  }
  disregardSeriousThermalState() {
    return c6;
  }
  isReactingToThermalState() {
    return c5 && !c6;
  }
  getShowActivitiesDebugOverlay() {
    return visible;
  }
  getVoiceCallOverlayLayoutStates() {
    return obj;
  }
  isPipEnabledWhileFocusedOnActivityOrStream() {
    return c10;
  }
}
const prototype = ChannelCallLifecycleStore.prototype;
ChannelCallLifecycleStore.displayName = "ChannelCallLifecycleStore";
const obj2 = {
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
    let voiceCallOverlayLayoutState;
    let voiceCallOverlayType;
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
const channelCallLifecycleStore = new ChannelCallLifecycleStore(DispatcherDefault, obj2);
size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallLifecycleStore.tsx");

export default channelCallLifecycleStore;
