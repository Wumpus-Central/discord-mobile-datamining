// discord_app/lib/WindowVisibilityVideoManager.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import ExternalPipDefault from "../modules/external_pip/ExternalPip.android.tsx";
import WindowVisibilityUtilsDefault from "WindowVisibilityUtils.native.tsx";
import TypedEventEmitter from "../../discord_common/js/shared/utils/TypedEventEmitter.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const WindowVisibilityEvent = {
  WindowVisibilityChanged: "window-visibility-changed",
  IncomingVideoEnabledChanged: "incoming-video-enabled-changed",
};
class WindowVisibilityVideoManager extends TypedEventEmitter {
  constructor() {
    let discordVisible;
    const tmp6 = new WindowVisibilityVideoManager(tmp5, tmp4, tmp3, tmp2, tmp);
    _require = tmp6;
    const timeout = new require("Timers").Timeout();
    tmp6.disableVideoTimer = timeout;
    tmp6.discordVisible = true;
    tmp6.incomingVideoEnabled = true;
    tmp6.lastEnabledChange = performance.now();
    tmp6.logger = new LoggerDefault("WindowVisibilityVideoManager");
    new LoggerDefault("WindowVisibilityVideoManager");
    tmp6.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * DurationsDefault.Millis.SECOND;
    tmp6.update = function update() {
      let incomingVideoEnabled;
      if (discordVisible.discordVisible !== WindowVisibilityUtilsDefault()) {
        discordVisible.discordVisible = WindowVisibilityUtilsDefault();
        discordVisible.emit(discordVisible.WindowVisibilityChanged, discordVisible.discordVisible);
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
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("WINDOW_VISIBILITY_CHANGE", tmp6.update);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("APP_STATE_UPDATE", tmp6.update);
    const obj3 = ExternalPipDefault;
    let result = obj3.addOnPipModeChangedListener(tmp6.update);
    return tmp6;
  }
  isIncomingVideoEnabled() {
    return this.incomingVideoEnabled;
  }
  lastIncomingVideoEnabledChangeTime() {
    return this.lastEnabledChange;
  }
  setIncomingVideoEnabled(incomingVideoEnabled) {
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
  }
}
const prototype = WindowVisibilityVideoManager.prototype;
const windowVisibilityVideoManager = new WindowVisibilityVideoManager();
let result = size.fileFinishedImporting("lib/WindowVisibilityVideoManager.tsx");
const WindowVisibilityVideoManager_export = windowVisibilityVideoManager;

export { WindowVisibilityEvent };
export { WindowVisibilityVideoManager_export as WindowVisibilityVideoManager };
