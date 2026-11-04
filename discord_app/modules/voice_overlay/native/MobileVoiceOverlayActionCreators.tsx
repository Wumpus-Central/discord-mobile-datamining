// === Module 12151: MobileVoiceOverlayActionCreators ===

// Module 12151 (MobileVoiceOverlayActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    DispatcherDefault.dispatch({ type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled });
  }
};