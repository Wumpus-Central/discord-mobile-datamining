// discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx
import logger_Logger from "../logger/Logger.tsx";
import Constants from "Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2;
let c3;
({ SpeakingFlags: c2, VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: c3 } = Constants);
const logger = new logger_Logger.Logger("ConnectionEventFramerateReducer");
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx",
);
class ConnectionEventFramerateReducer {
  constructor(connection, sinkWants) {
    const obj = Object.create(new.target.prototype);
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
    obj.connection = connection;
    obj.sinkWants = sinkWants;
    logger.enableNativeLogger(true);
    connection.on(obj(4968).BaseConnectionEvent.Speaking, obj.handleSpeaking);
    connection.on(obj(4968).BaseConnectionEvent.Mute, obj.handleSelfMute);
    obj.initialize();
    return obj;
  }
  initialize() {
    this.userSpeakingChange(true);
  }
  userSpeakingChange(arg0) {
    const self = this;
    const connection = this.connection;
    if (!connection.hasDesktopSource()) {
      let result = self.destroyFramerateScaleFactorTimers();
      if (arg0) {
        const _setTimeout = setTimeout;
        self.framerateReductionTimeout = setTimeout(() => {
          if (!self.connection.destroyed) {
            const _HermesInternal = HermesInternal;
            logger.info("BaseConnection.userSpeakingChange: Reduced framerate after " + _false + " ms.");
            self.framerateReductionTimeout = undefined;
            self.sinkWants.isMuted = true;
            const result = self.updateRemoteWantsFramerate();
          }
        }, closure_3);
      } else if (self.sinkWants.isMuted) {
        self.sinkWants.isMuted = false;
        const result1 = self.updateRemoteWantsFramerate();
      }
    }
  }
  destroyFramerateScaleFactorTimers() {
    const self = this;
    if (typeof this.framerateReductionTimeout === "number") {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.framerateReductionTimeout);
      self.framerateReductionTimeout = undefined;
    }
  }
  updateRemoteWantsFramerate() {
    const connection = this.connection;
    connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"]);
  }
  destroy() {
    const result = this.destroyFramerateScaleFactorTimers();
  }
}
const prototype = ConnectionEventFramerateReducer.prototype;

export default ConnectionEventFramerateReducer;
