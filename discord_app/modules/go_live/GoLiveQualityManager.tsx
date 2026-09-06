// === Module 13807: GoLiveQualityManager ===

// Module 13807 (GoLiveQualityManager)
import LoggerDefault from "Logger" /* 3 */;
import Timers from "Timers" /* 4447 */;
import TypedEventEmitter from "TypedEventEmitter" /* 4618 */;

require = fn;
const GoLiveQualityManagerEvent = { RequestedSSRCsUpdate: "requested-ssrcs-update", RequestedStreamsUpdate: "requested-streams-update" };
class GoLiveQualityManager extends tmp2 {
  constructor() {
    closure_0 = undefined;
    tmp6 = new GoLiveQualityManager(tmp5, tmp4, tmp3, new.target, new.target, tmp2, undefined, tmp);
    closure_0 = tmp6;
    tmp6.streamId = null;
    tmp6.resolutionWidth = 0;
    tmp6.resolutionHeight = 0;
    tmp6.zoom = 1;
    tmp6.audioSSRC = 0;
    tmp6.incomingVideoEnabled = true;
    tmp6.delayedUpdate = function delayedUpdate() {
      const delayedCall = closure_0.delayedCall;
      delayedCall.delay();
    };
    tmp7 = new closure_1(closure_2[1])("GoLiveQualityManager");
    tmp6.logger = tmp7;
    logger = tmp6.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    delayedCall = new closure_0(closure_2[2]).DelayedCall(500, () => {
      closure_0.update();
    });
    tmp6.delayedCall = delayedCall;
    return tmp6;
  }
}
const prototype = GoLiveQualityManager.prototype;
prototype["setUserID"] = function setUserID(userId) {
  this.userId = userId;
};
prototype["getUserID"] = function getUserID() {
  return this.userId;
};
prototype["updateAudioAndVideoStreamInfo"] = function updateAudioAndVideoStreamInfo(audioSSRC, items) {
  this.audioSSRC = audioSSRC;
  this.videoStream = items.find((active) => active.active);
  this.update();
};
prototype["onIncomingVideoEnabled"] = function onIncomingVideoEnabled(incomingVideoEnabled) {
  const self = this;
  if (this.incomingVideoEnabled !== incomingVideoEnabled) {
    const logger = self.logger;
    logger.info("onIncomingVideoEnabled", incomingVideoEnabled);
    self.incomingVideoEnabled = incomingVideoEnabled;
    self.update();
  }
};
prototype["update"] = function update() {
  const self = this;
  if (tmp) {
    if (self.incomingVideoEnabled) {
      const stream = self.requestStream();
    } else {
      self.stopStream();
    }
  }
};
prototype["requestStream"] = function requestStream() {
  const self = this;
  if (null != this.videoStream) {
    const obj = {};
    obj[self.videoStream.ssrc] = 100;
    const items = [self.videoStream.ssrc];
    self.request(obj, items);
  }
};
prototype["stopStream"] = function stopStream() {
  const self = this;
  if (null != this.videoStream) {
    const obj = {};
    obj[self.videoStream.ssrc] = 0;
    self.request(obj, []);
  }
};
prototype["request"] = function request(arg0, arr) {
  const self = this;
  if (undefined !== this.userId) {
    const pixelCounts = arg0;
    const item = arr.forEach((item) => {
      if (null == pixelCounts.pixelCounts) {
        tmp.pixelCounts = {};
      }
      if (pixelCounts[item] > 0) {
        const _Math = Math;
        tmp.pixelCounts[item] = Math.floor(self.resolutionWidth * self.resolutionHeight * self.zoom * self.zoom);
      }
    });
    self.emit(obj.RequestedSSRCsUpdate, self.userId, self.audioSSRC, arr);
    self.emit(obj.RequestedStreamsUpdate, arg0);
  }
};
prototype["setVideoSize"] = function setVideoSize(arg0, arg1, zoom) {
  const self = this;
  if (this.streamId === arg0) {
    if (null != arg1) {
      ({ width: self.resolutionWidth, height: self.resolutionHeight } = arg1);
    }
    if (null != zoom) {
      self.zoom = zoom;
    }
    self.delayedUpdate();
  }
};
prototype["setStreamId"] = function setStreamId(streamId) {
  const self = this;
  if (this.streamId !== streamId) {
    self.streamId = streamId;
    self.resolutionWidth = 0;
    self.resolutionHeight = 0;
    self.zoom = 1;
    self.delayedUpdate();
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/GoLiveQualityManager.tsx");

export default GoLiveQualityManager;
export { GoLiveQualityManagerEvent };