// discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx
import logger_Logger from "../logger/Logger.tsx";
import Constants from "Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ SpeakingFlags: c2, VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: c3 } = Constants);
const logger = new logger_Logger.Logger("ConnectionEventFramerateReducer");
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx",
);
class ConnectionEventFramerateReducer {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.handleSpeaking = function handleSpeaking(arg0, arg1) {
      if (arg0 === obj.connection.userId) {
        obj.userSpeakingChange(arg1 === constants.NONE);
      }
    };
    obj.handleSelfMute = function handleSelfMute(isMuted) {
      const connection = obj.connection;
      if (!connection.hasDesktopSource()) {
        const result = obj.destroyFramerateScaleFactorTimers();
        obj.sinkWants.isMuted = isMuted;
        const result1 = obj.updateRemoteWantsFramerate();
      }
    };
    obj.connection = global;
    obj.sinkWants = require;
    enableNativeLoggerResult = closure_4.enableNativeLogger(true);
    onResult = global.on(closure_0(closure_1[2]).BaseConnectionEvent.Speaking, obj.handleSpeaking);
    onResult1 = global.on(closure_0(closure_1[2]).BaseConnectionEvent.Mute, obj.handleSelfMute);
    initializeResult = obj.initialize();
    return obj;
  }
}
const prototype = ConnectionEventFramerateReducer.prototype;
prototype["initialize"] = function initialize() {
  this.userSpeakingChange(true);
};
prototype["userSpeakingChange"] = function userSpeakingChange(arg0) {
  const self = this;
  const connection = this.connection;
  if (!connection.hasDesktopSource()) {
    let result = self.destroyFramerateScaleFactorTimers();
    if (arg0) {
      const _setTimeout = setTimeout;
      self.framerateReductionTimeout = setTimeout(() => {
        if (!self.connection.destroyed) {
          const _HermesInternal = HermesInternal;
          logger.info("BaseConnection.userSpeakingChange: Reduced framerate after " + React3 + " ms.");
          obj.framerateReductionTimeout = undefined;
          obj.sinkWants.isMuted = true;
          const result = obj.updateRemoteWantsFramerate();
        }
      }, closure_3);
    } else if (self.sinkWants.isMuted) {
      self.sinkWants.isMuted = false;
      const result1 = self.updateRemoteWantsFramerate();
    }
  }
};
prototype["destroyFramerateScaleFactorTimers"] = function destroyFramerateScaleFactorTimers() {
  const self = this;
  if (typeof this.framerateReductionTimeout === "number") {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.framerateReductionTimeout);
    self.framerateReductionTimeout = undefined;
  }
};
prototype["updateRemoteWantsFramerate"] = function updateRemoteWantsFramerate() {
  const connection = this.connection;
  connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"]);
};
prototype["destroy"] = function destroy() {
  const result = this.destroyFramerateScaleFactorTimers();
};

export default ConnectionEventFramerateReducer;
