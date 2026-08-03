// === Module 10757: isIncomingVideoEnabled ===

// Module 10757 (isIncomingVideoEnabled)
import "on";

let require = arg1;
let obj = { WindowVisibilityChanged: "window-visibility-changed", IncomingVideoEnabledChanged: "incoming-video-enabled-changed" };
class WindowVisibilityVideoManager extends tmp2 {
  constructor() {
    tmp6 = new WindowVisibilityVideoManager(tmp5, tmp4, tmp3, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp6;
    timeout = new require("start").Timeout();
    tmp6.disableVideoTimer = timeout;
    tmp6.discordVisible = true;
    tmp6.incomingVideoEnabled = true;
    tmp6.lastEnabledChange = performance.now();
    tmp8 = new require("timestamp")("WindowVisibilityVideoManager");
    tmp6.logger = tmp8;
    tmp6.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * require("set").Millis.SECOND;
    tmp6.update = function update() {
      if (tmp6.discordVisible !== outer1_1(outer1_2[6])()) {
        obj.discordVisible = outer1_1(outer1_2[6])();
        obj.emit(outer1_3.WindowVisibilityChanged, obj.discordVisible);
        const disableVideoTimer = obj.disableVideoTimer;
        if (obj.discordVisible) {
          disableVideoTimer.stop();
          let result = obj.setIncomingVideoEnabled(true);
        } else {
          disableVideoTimer.start(obj.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
            const result = incomingVideoEnabled.setIncomingVideoEnabled(false);
          });
        }
      }
    };
    obj = require("dispatcher");
    subscription = obj.subscribe("WINDOW_VISIBILITY_CHANGE", tmp6.update);
    obj2 = require("dispatcher");
    subscription1 = obj2.subscribe("APP_STATE_UPDATE", tmp6.update);
    obj3 = require("NativeEventEmitter");
    result = obj3.addOnPipModeChangedListener(tmp6.update);
    return tmp6;
  }
}
const prototype = WindowVisibilityVideoManager.prototype;
prototype["isIncomingVideoEnabled"] = function isIncomingVideoEnabled() {
  return this.incomingVideoEnabled;
};
prototype["lastIncomingVideoEnabledChangeTime"] = function lastIncomingVideoEnabledChangeTime() {
  return this.lastEnabledChange;
};
prototype["setIncomingVideoEnabled"] = function setIncomingVideoEnabled(incomingVideoEnabled) {
  const self = this;
  this.incomingVideoEnabled = incomingVideoEnabled;
  if (this.incomingVideoEnabled !== incomingVideoEnabled) {
    const logger = self.logger;
    const _HermesInternal = HermesInternal;
    logger.info("Incoming video enabled changed, incomingVideoEnabled = " + self.incomingVideoEnabled);
    const _performance = performance;
    self.lastEnabledChange = performance.now();
    self.emit(obj.IncomingVideoEnabledChanged, self.incomingVideoEnabled);
  }
};
const windowVisibilityVideoManager = new WindowVisibilityVideoManager();
let result = require("timestamp").fileFinishedImporting("lib/WindowVisibilityVideoManager.tsx");

export const WindowVisibilityEvent = obj;
export const WindowVisibilityVideoManager = windowVisibilityVideoManager;