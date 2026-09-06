// discord_app/modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    const obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  },
};
