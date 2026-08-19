// discord_app/modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    const obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  }
};