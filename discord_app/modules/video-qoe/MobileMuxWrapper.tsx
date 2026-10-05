// discord_app/modules/video-qoe/MobileMuxWrapper.tsx
import logger_Logger from "../../../discord_common/js/packages/logger/Logger.tsx";
import MobileCustomMuxIntegration from "integrations/MobileCustomMuxIntegration.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

const logger = new logger_Logger.Logger("MobileMuxWrapper");
let size = size_mod;
let result = size.fileFinishedImporting("modules/video-qoe/MobileMuxWrapper.tsx");
class MobileMuxWrapper {
  constructor(config) {
    const merged = Object.assign({
      muxIntegration: null,
      seekingEmitted: false,
      seeking: false,
      seekCompleted: false,
      rebufferStartedAt: null,
      seekTimeout: null,
    });
    merged.config = config;
    return merged;
  }
  initialize() {
    const self = this;
    try {
      const self2 = this;
      const self3 = this;
      const mobileCustomMuxIntegration = new MobileCustomMuxIntegration.MobileCustomMuxIntegration(self.config);
      self.muxIntegration = mobileCustomMuxIntegration;
      const muxIntegration = self.muxIntegration;
      muxIntegration.initialize();
      logger.info("MobileMuxWrapper initialized successfully");
    } catch (tmp8) {
      logger.error("Error initializing MobileMuxWrapper", tmp8);
      self.muxIntegration = null;
    }
  }
  updatePlayheadTime(arg0) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.updatePlayheadTime(arg0);
    }
  }
  updateVideoDimensions(arg0, arg1) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      const result = muxIntegration.updateVideoDimensions(arg0, arg1);
    }
  }
  updateVideoSourceDimensions(arg0, arg1) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      const result = muxIntegration.updateVideoSourceDimensions(arg0, arg1);
    }
  }
  updateVideoSource(arg0, arg1, arg2) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.updateVideoSource(arg0, arg1, arg2);
    }
  }
  updatePlayerState(arg0, arg1) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.updatePlayerState(arg0, arg1);
    }
  }
  onLoadStart() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitLoadStart();
    }
  }
  onLoad(arg0) {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitLoad(arg0);
    }
  }
  onPlay() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitPlay();
    }
  }
  onPause() {
    this.endRebuffer();
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitPause();
    }
  }
  onPlaying() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitPlaying();
    }
  }
  onCanPlay() {
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitCanPlay();
    }
  }
  onSeekStart() {
    const self = this;
    if (null != this.muxIntegration) {
      self.rebufferStartedAt = null;
      self.seeking = true;
      self.seekCompleted = false;
      if (!self.seekingEmitted) {
        const muxIntegration = self.muxIntegration;
        muxIntegration.emitSeeking();
        self.seekingEmitted = true;
      }
      if (null != self.seekTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.seekTimeout);
        self.seekTimeout = null;
      }
    }
  }
  onSeek() {
    const self = this;
    if (null != this.muxIntegration) {
      if (!self.seeking) {
        self.onSeekStart();
      }
      self.seekCompleted = true;
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
  }
  onEnd() {
    this.endRebuffer();
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitEnded();
    }
    const muxIntegration2 = this.muxIntegration;
    if (muxIntegration2 != null) {
      muxIntegration2.destroy();
    }
  }
  onError(error) {
    this.endRebuffer();
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitError(error);
    }
  }
  onProgress(arg0) {
    const result = this.finishSeekIfRecovered();
    this.updatePlayheadTime(arg0);
    const muxIntegration = this.muxIntegration;
    if (muxIntegration != null) {
      muxIntegration.emitTimeUpdate();
    }
  }
  onBuffer(nativeEvent) {
    const self = this;
    const tmp = nativeEvent;
    if (tmp) {
      let tmp7 = !self.seeking && null == self.rebufferStartedAt;
      if (tmp7) {
        const muxIntegration4 = self.muxIntegration;
        let isPlayingResult;
        if (muxIntegration4 != null) {
          isPlayingResult = muxIntegration4.isPlaying();
        }
        tmp7 = isPlayingResult;
      }
      if (tmp7) {
        const _Date = Date;
        self.rebufferStartedAt = Date.now();
      }
    } else {
      self.endRebuffer();
      const muxIntegration = self.muxIntegration;
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
        muxIntegration3.emitPlaying();
      }
    }
  }
  endRebuffer() {
    const self = this;
    const rebufferStartedAt = this.rebufferStartedAt;
    if (null != rebufferStartedAt) {
      self.rebufferStartedAt = null;
      const muxIntegration = self.muxIntegration;
      if (muxIntegration != null) {
        muxIntegration.emitRebufferStart(rebufferStartedAt);
      }
      const muxIntegration2 = self.muxIntegration;
      if (muxIntegration2 != null) {
        const _Date = Date;
        muxIntegration2.emitRebufferEnd(Date.now());
      }
    }
  }
  finishSeekIfRecovered() {
    const self = this;
    const tmp = this.seeking && self.seekCompleted;
    if (tmp) {
      self.seeking = false;
    }
  }
  onReadyForDisplay() {
    const self = this;
    const result = this.finishSeekIfRecovered();
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
  }
  onVideoTrackChange(selectedVideoTrackId, videoTracks) {
    let closure_0 = selectedVideoTrackId;
    size = videoTracks.find((trackId) => trackId.trackId === selectedVideoTrackId);
    if (null != size) {
      const self = this;
      const muxIntegration = this.muxIntegration;
      if (muxIntegration != null) {
        muxIntegration.emitRenditionChange(size.width, size.height, size.bitrate);
      }
    }
  }
  destroy() {
    try {
      const self = this;
      this.endRebuffer();
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
    } catch (tmp6) {
      logger.error("Error destroying MobileMuxWrapper", tmp6);
    }
  }
  getSessionId() {
    const muxIntegration = this.muxIntegration;
    let sessionId;
    if (muxIntegration != null) {
      sessionId = muxIntegration.getSessionId();
    }
    if (sessionId == null) {
      sessionId = null;
    }
    return sessionId;
  }
  isInitialized() {
    return null != this.muxIntegration;
  }
}
const prototype = MobileMuxWrapper.prototype;

export { MobileMuxWrapper };
