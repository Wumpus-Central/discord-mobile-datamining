// === Module 4366: logger ===

// Module 4366 (logger)
import DesktopSources from "DesktopSources";

let c3;
let obj1;
({ SpeakingFlags: obj1, VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: c3 } = DesktopSources);
const logger = new require("log").Logger("ConnectionEventFramerateReducer");
let result = require("BaseConnectionEvent").fileFinishedImporting("../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx");
class ConnectionEventFramerateReducer {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.handleSpeaking = function handleSpeaking(arg0, arg1) {
      if (arg0 === obj.connection.userId) {
        obj.userSpeakingChange(arg1 === outer1_2.NONE);
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
    onResult = global.on(require("BaseConnectionEvent").BaseConnectionEvent.Speaking, obj.handleSpeaking);
    onResult1 = global.on(require("BaseConnectionEvent").BaseConnectionEvent.Mute, obj.handleSelfMute);
    initializeResult = obj.initialize();
    return obj;
  }
}
const prototype = ConnectionEventFramerateReducer.prototype;
prototype["initialize"] = function initialize() {
  this.userSpeakingChange(true);
};
prototype["userSpeakingChange"] = function userSpeakingChange(arg0) {
  let self = this;
  self = this;
  const connection = this.connection;
  if (!connection.hasDesktopSource()) {
    let result = self.destroyFramerateScaleFactorTimers();
    if (arg0) {
      const _setTimeout = setTimeout;
      self.framerateReductionTimeout = setTimeout(() => {
        if (!self.connection.destroyed) {
          const _HermesInternal = HermesInternal;
          outer1_4.info("BaseConnection.userSpeakingChange: Reduced framerate after " + outer1_3 + " ms.");
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
  if (typeof this.framerateReductionTimeout !== "SENTRY_RELEASE") {
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