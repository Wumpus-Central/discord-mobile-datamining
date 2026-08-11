// discord_app/modules/video-qoe/SimpleMuxWrapper.tsx
import { U } from "../../../_runtime/14391_U.js";
import { mapDiscordToMuxMetadata } from "integrations/MuxIntegration.tsx";
const logger = new require("set").Logger("SimpleMuxWrapper");
const result = require("mapDiscordToMuxMetadata").fileFinishedImporting("modules/video-qoe/SimpleMuxWrapper.tsx");
class SimpleMuxWrapper {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.config = global;
    obj.videoElement = global.videoElement;
    SessionManager = require("generateSessionId").SessionManager;
    obj.sessionId = SessionManager.generateSessionId();
    obj.hlsInstance = global.hlsInstance;
    return obj;
  }
}
const prototype = SimpleMuxWrapper.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  let flag = this.config.debug;
  if (flag == null) {
    flag = false;
  }
  const obj = { debug: flag, disableCookies: true, respectDoNotTrack: true, data: null };
  const MuxIntegration = mapDiscordToMuxMetadata.MuxIntegration;
  obj[3] = MuxIntegration.mapDiscordToMuxMetadata(self.config, self.sessionId);
  if (null != self.hlsInstance) {
    obj.hlsjs = self.hlsInstance;
    obj.Hls = self.hlsInstance.constructor;
  }
  try {
    U.monitor(self.videoElement, obj);
    self.isMonitoring = true;
  } catch (tmp5) {
    logger.error("Error creating Mux monitor", tmp5);
    tmp.isMonitoring = false;
  }
};
prototype["endSession"] = function endSession() {
  const self = this;
  if (this.isMonitoring) {
    try {
      if (typeof U.destroyMonitor === "function") {
        tmp(14391).destroyMonitor(self.videoElement);
        const tmpResult = tmp(14391);
      }
      self.isMonitoring = false;
      tmp = importDefault;
    } catch (tmp3) {
      logger.error("Error ending Mux session", tmp3);
    }
  }
};
prototype["destroy"] = function destroy() {
  const self = this;
  if (this.isMonitoring) {
    try {
      if (typeof U.destroyMonitor === "function") {
        tmp(14391).destroyMonitor(self.videoElement);
        const tmpResult = tmp(14391);
      }
      self.isMonitoring = false;
      tmp = importDefault;
    } catch (tmp3) {
      logger.error("Error destroying Mux monitor", tmp3);
    }
  }
};
prototype["getSessionId"] = function getSessionId() {
  return this.sessionId;
};

export { SimpleMuxWrapper };