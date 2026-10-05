// discord_app/modules/go_live/GoLiveQualityManager.tsx
import LoggerDefault from "../debug/Logger.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import TypedEventEmitter from "../../../discord_common/js/shared/utils/TypedEventEmitter.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GoLiveQualityManagerEvent = {
  RequestedSSRCsUpdate: "requested-ssrcs-update",
  RequestedStreamsUpdate: "requested-streams-update",
};
class GoLiveQualityManager extends TypedEventEmitter {
  constructor() {
    const tmp6 = new GoLiveQualityManager(tmp5, tmp4, tmp3, new.target, this, tmp2, undefined, tmp);
    let closure_0 = tmp6;
    tmp6.streamId = null;
    tmp6.resolutionWidth = 0;
    tmp6.resolutionHeight = 0;
    tmp6.zoom = 1;
    tmp6.audioSSRC = 0;
    tmp6.incomingVideoEnabled = true;
    tmp6.delayedUpdate = function delayedUpdate() {
      delayedCall = delayedCall.delayedCall;
      delayedCall.delay();
    };
    tmp6.logger = new LoggerDefault("GoLiveQualityManager");
    const logger = tmp6.logger;
    new LoggerDefault("GoLiveQualityManager");
    logger.enableNativeLogger(true);
    let delayedCall = new Timers.DelayedCall(500, () => {
      closure_0.update();
    });
    tmp6.delayedCall = delayedCall;
    return tmp6;
  }
  setUserID(userId) {
    this.userId = userId;
  }
  getUserID() {
    return this.userId;
  }
  updateAudioAndVideoStreamInfo(audioSSRC, items) {
    this.audioSSRC = audioSSRC;
    this.videoStream = items.find((active) => active.active);
    this.update();
  }
  onIncomingVideoEnabled(incomingVideoEnabled) {
    const self = this;
    if (this.incomingVideoEnabled !== incomingVideoEnabled) {
      const logger = self.logger;
      logger.info("onIncomingVideoEnabled", incomingVideoEnabled);
      self.incomingVideoEnabled = incomingVideoEnabled;
      self.update();
    }
  }
  update() {
    const self = this;
    const tmp = null != this.userId && null != self.videoStream;
    if (tmp) {
      if (self.incomingVideoEnabled) {
        const stream = self.requestStream();
      } else {
        self.stopStream();
      }
    }
  }
  requestStream() {
    const self = this;
    if (null != this.videoStream) {
      const obj = {};
      obj[self.videoStream.ssrc] = 100;
      const items = [self.videoStream.ssrc];
      self.request(obj, items);
    }
  }
  stopStream() {
    const self = this;
    if (null != this.videoStream) {
      const obj = {};
      obj[self.videoStream.ssrc] = 0;
      self.request(obj, []);
    }
  }
  request(arg0, arr) {
    const self = this;
    if (undefined !== this.userId) {
      let closure_0 = arg0;
      const item = arr.forEach((item) => {
        if (null == pixelCounts.pixelCounts) {
          pixelCounts.pixelCounts = {};
        }
        if (pixelCounts[item] > 0) {
          const _Math = Math;
          pixelCounts.pixelCounts[item] = Math.floor(
            self.resolutionWidth * self.resolutionHeight * self.zoom * self.zoom,
          );
        }
      });
      self.emit(obj.RequestedSSRCsUpdate, self.userId, self.audioSSRC, arr);
      self.emit(obj.RequestedStreamsUpdate, arg0);
    }
  }
  setVideoSize(arg0, arg1, zoom) {
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
  }
  setStreamId(streamId) {
    const self = this;
    if (this.streamId !== streamId) {
      self.streamId = streamId;
      self.resolutionWidth = 0;
      self.resolutionHeight = 0;
      self.zoom = 1;
      self.delayedUpdate();
    }
  }
}
const prototype = GoLiveQualityManager.prototype;
const result = size.fileFinishedImporting("modules/go_live/GoLiveQualityManager.tsx");

export default GoLiveQualityManager;
export { GoLiveQualityManagerEvent };
