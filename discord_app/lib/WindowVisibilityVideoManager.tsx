// === Module 12450: isIncomingVideoEnabled ===

// Module 12450 (isIncomingVideoEnabled)
import timestampDefault from "timestamp" /* 3 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import onDefault from "on" /* 4572 */;
import NativeEventEmitterDefault from "NativeEventEmitter" /* 10027 */;
import isDiscordVisibleDefault from "isDiscordVisible" /* 12451 */;

const require = fn;
let obj = { WindowVisibilityChanged: "window-visibility-changed", IncomingVideoEnabledChanged: "incoming-video-enabled-changed" };
onDefault;
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
    tmp6.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * require("obj132").Millis.SECOND;
    tmp6.update = function update() {
      if (discordVisible.discordVisible !== isDiscordVisibleDefault()) {
        discordVisible.discordVisible = isDiscordVisibleDefault();
        discordVisible.emit(obj.WindowVisibilityChanged, discordVisible.discordVisible);
        const disableVideoTimer = discordVisible.disableVideoTimer;
        if (discordVisible.discordVisible) {
          disableVideoTimer.stop();
          let result = discordVisible.setIncomingVideoEnabled(true);
        } else {
          disableVideoTimer.start(discordVisible.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
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
let result = require("obj132").fileFinishedImporting("lib/WindowVisibilityVideoManager.tsx");

export const WindowVisibilityEvent = obj;
export const WindowVisibilityVideoManager = windowVisibilityVideoManager;