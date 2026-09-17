// === Module 10141: MobileVoiceOverlayActionCreators ===

// Module 10141 (MobileVoiceOverlayActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    DispatcherDefault.dispatch({ type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled });
  }
};