// discord_app/modules/video-qoe/MobileMuxWrapper.tsx
import set from "../../../_runtime/00002_set.js";
import log from "../../../discord_common/js/packages/logger/Logger.tsx";
import logger2 from "integrations/MobileCustomMuxIntegration.tsx";

const logger = new log.Logger("MobileMuxWrapper");
let result = set.fileFinishedImporting("modules/video-qoe/MobileMuxWrapper.tsx");
class MobileMuxWrapper {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.config = global;
    return obj;
  }
}
const prototype = MobileMuxWrapper.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  try {
    const mobileCustomMuxIntegration = new logger2.MobileCustomMuxIntegration(self.config);
    self.muxIntegration = mobileCustomMuxIntegration;
    const muxIntegration = self.muxIntegration;
    muxIntegration.initialize();
    logger.info("MobileMuxWrapper initialized successfully");
  } catch (tmp11) {
    logger.error("Error initializing MobileMuxWrapper", tmp11);
    tmp.muxIntegration = null;
  }
};
prototype["updatePlayheadTime"] = function updatePlayheadTime(arg0) {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.updatePlayheadTime(arg0);
  }
};
prototype["updateVideoDimensions"] = function updateVideoDimensions(arg0, arg1) {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    const result = muxIntegration.updateVideoDimensions(arg0, arg1);
  }
};
prototype["updateVideoSourceDimensions"] = function updateVideoSourceDimensions(arg0, arg1) {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    const result = muxIntegration.updateVideoSourceDimensions(arg0, arg1);
  }
};
prototype["updateVideoSource"] = function updateVideoSource(arg0, arg1, arg2) {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.updateVideoSource(arg0, arg1, arg2);
  }
};
prototype["updatePlayerState"] = function updatePlayerState(arg0, arg1) {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.updatePlayerState(arg0, arg1);
  }
};
prototype["onLoadStart"] = function onLoadStart(nativeEvent, arg1) {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitLoadStart();
  }
};
prototype["onLoad"] = function onLoad(arg0) {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitLoad(arg0);
  }
};
prototype["onPlay"] = function onPlay() {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitPlay();
  }
};
prototype["onPause"] = function onPause() {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitPause();
  }
};
prototype["onPlaying"] = function onPlaying() {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitPlaying();
  }
};
prototype["onCanPlay"] = function onCanPlay() {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitCanPlay();
  }
};
prototype["onSeek"] = function onSeek(nativeEvent) {
  let self = this;
  self = this;
  if (null != this.muxIntegration) {
    if (!self.seekingEmitted) {
      let muxIntegration = self.muxIntegration;
      muxIntegration.emitSeeking();
      self.seekingEmitted = true;
    }
    if (null != self.seekTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.seekTimeout);
    }
    const _setTimeout = setTimeout;
    self.seekTimeout = setTimeout(() => {
      const muxIntegration = self.muxIntegration;
      if (muxIntegration != null) {
        muxIntegration.emitSeeked();
      }
      self.seekingEmitted = false;
      self.seekTimeout = null;
    }, 100);
  }
};
prototype["onEnd"] = function onEnd() {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitEnded();
  }
  const muxIntegration2 = this.muxIntegration;
  if (muxIntegration2 != null) {
    muxIntegration2.destroy();
  }
};
prototype["onError"] = function onError(arg0) {
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitError(arg0);
  }
};
prototype["onProgress"] = function onProgress(arg0) {
  this.updatePlayheadTime(arg0);
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitTimeUpdate();
  }
};
prototype["onBuffer"] = function onBuffer(nativeEvent) {
  if (!nativeEvent) {
    const self = this;
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitCanPlay();
    }
    const muxIntegration2 = self.muxIntegration;
    let hasPlayStartedResult;
    if (muxIntegration2 != null) {
      hasPlayStartedResult = muxIntegration2.hasPlayStarted();
    }
    if (hasPlayStartedResult) {
      const muxIntegration3 = self.muxIntegration;
      if (muxIntegration3 != null) {
        muxIntegration3.emitPlaying();
      }
    }
  }
};
prototype["onReadyForDisplay"] = function onReadyForDisplay(nativeEvent) {
  const self = this;
  const muxIntegration = this.muxIntegration;
  if (muxIntegration != null) {
    muxIntegration.emitPlayerReady();
  }
  const muxIntegration2 = self.muxIntegration;
  let hasPlayStartedResult;
  if (muxIntegration2 != null) {
    hasPlayStartedResult = muxIntegration2.hasPlayStarted();
  }
  if (hasPlayStartedResult) {
    const muxIntegration3 = self.muxIntegration;
    if (muxIntegration3 != null) {
      muxIntegration3.emitPlaying();
    }
  }
};
prototype["onVideoTrackChange"] = function onVideoTrackChange(selectedVideoTrackId, videoTracks) {
  closure_0 = selectedVideoTrackId;
  const size = videoTracks.find((trackId) => trackId.trackId === closure_0);
  if (null != size) {
    const self = this;
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitRenditionChange(size.width, size.height, size.bitrate);
    }
  }
};
prototype["destroy"] = function destroy() {
  try {
    const self = this;
    if (null != this.seekTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.seekTimeout);
      self.seekTimeout = null;
    }
    const muxIntegration = self.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.destroy();
    }
    self.muxIntegration = null;
  } catch (tmp5) {
    logger.error("Error destroying MobileMuxWrapper", tmp5);
  }
};
prototype["getSessionId"] = function getSessionId() {
  const muxIntegration = this.muxIntegration;
  let sessionId;
  if (muxIntegration != null) {
    sessionId = muxIntegration.getSessionId();
  }
  if (sessionId == null) {
    sessionId = null;
  }
  return sessionId;
};
prototype["isInitialized"] = function isInitialized() {
  return null != this.muxIntegration;
};

export { MobileMuxWrapper };
