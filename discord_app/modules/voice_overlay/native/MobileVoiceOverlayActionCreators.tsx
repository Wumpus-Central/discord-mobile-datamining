// discord_app/modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayActionCreators.tsx");

export default {
  setEnabled(enabled) {
    let obj = require("../../../Dispatcher.tsx");
    obj = { type: "MOBILE_VOICE_OVERLAY_STATE_CHANGED", enabled };
    obj.dispatch(obj);
  }
};