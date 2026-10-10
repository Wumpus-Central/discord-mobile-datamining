// === Module 15398: MobileCustomMuxIntegration ===

// Module 15398 (MobileCustomMuxIntegration)
import logger_Logger from "logger/Logger" /* 4 */;
import UDefault from "U" /* 15396 */;
import size from "module_2" /* 2 */;

const logger = new logger_Logger.Logger("MobileCustomMuxIntegration");
let c4 = "1.0.0";
const Cloudflare = "Cloudflare";
let c6 = 1000;
let result = size.fileFinishedImporting("modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx");
class MobileCustomMuxIntegration {
  constructor(arg0) {
    obj1 = Object.create(new.target.prototype);
    closure_0 = obj1;
    obj1.isInitialized = false;
    obj1.viewInitEmitted = false;
    obj1.playerReadyEmitted = false;
    obj1.playStarted = false;
    obj1.playingEmitted = false;
    obj1.currentPlayheadTime = 0;
    obj1.currentRendition = null;
    obj1.getPlayheadTime = function getPlayheadTime() {
      return obj2.currentPlayheadTime * c6;
    };
    obj1.getStateData = function getStateData() {
      return obj2.videoState;
    };
    obj1.config = global;
    SessionManager = closure_0(closure_2[1]).SessionManager;
    obj1.sessionId = SessionManager.generateSessionId();
    obj1.playerId = "discord-mobile-" + obj1.sessionId;
    obj = { player_is_paused: true, player_width: 0, player_height: 0, player_autoplay_on: false, player_preload_on: true, video_cdn: Cloudflare, video_series: global.contentMetadata.questId, video_producer: global.contentMetadata.gameId, video_brand: global.contentMetadata.gameName, video_title: global.contentMetadata.title, video_stream_type: global.contentMetadata.videoStreamType, video_source_url: global.contentMetadata.contentId, video_source_mime_type: null, video_source_duration: null };
    str = "video/mp4";
    if ("hls" === global.contentMetadata.videoStreamType) {
      str = "application/x-mpegURL";
    }
    obj.video_source_mime_type = str;
    obj.video_source_duration = global.contentMetadata.durationMs;
    obj1.videoState = obj;
    return obj1;
  }
}
const prototype = MobileCustomMuxIntegration.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  const muxEnvKey = this.getMuxEnvKey();
  if (null != muxEnvKey) {
    if (0 !== muxEnvKey.length) {
      try {
        let flag = self.config.debug;
        if (flag == null) {
          flag = false;
        }
        const obj3 = { debug: flag, disablePlayheadRebufferTracking: true, getPlayheadTime: null, getStateData: null, data: null };
        ({ getPlayheadTime: obj2.getPlayheadTime, getStateData: obj2.getStateData } = self);
        obj3.data = self.mapConfigToMuxData(muxEnvKey);
        UDefault.init(self.playerId, obj3);
        self.isInitialized = true;
        const obj5 = { playerId: self.playerId };
        logger.info("Mux Data mobile integration initialized", obj5);
      } catch (tmp8) {
        logger.error("Error initializing Mux mobile integration", tmp8);
        tmp.isInitialized = false;
      }
    }
  }
  logger.info("Mux environment key not available, skipping QoE tracking");
};
prototype["updatePlayheadTime"] = function updatePlayheadTime(currentPlayheadTime) {
  this.currentPlayheadTime = currentPlayheadTime;
};
prototype["updateVideoDimensions"] = function updateVideoDimensions(player_width, player_height) {
  this.videoState.player_width = player_width;
  this.videoState.player_height = player_height;
};
prototype["updateVideoSourceDimensions"] = function updateVideoSourceDimensions(video_source_width, video_source_height) {
  this.videoState.video_source_width = video_source_width;
  this.videoState.video_source_height = video_source_height;
};
prototype["updateVideoSource"] = function updateVideoSource(video_source_url, video_source_mime_type, arg2) {
  this.videoState.video_source_url = video_source_url;
  this.videoState.video_source_mime_type = video_source_mime_type;
  let result;
  if (null != arg2) {
    result = arg2 * c6;
  }
  this.videoState.video_source_duration = result;
};
prototype["updatePlayerState"] = function updatePlayerState(player_is_paused, player_is_fullscreen) {
  this.videoState.player_is_paused = player_is_paused;
  if (null != player_is_fullscreen) {
    this.videoState.player_is_fullscreen = player_is_fullscreen;
  }
};
prototype["emitPlayerReady"] = function emitPlayerReady() {
  const self = this;
  if (this.isInitialized) {
    if (!self.playerReadyEmitted) {
      try {
        UDefault.emit(self.playerId, "playerready");
        self.playerReadyEmitted = true;
      } catch (tmp4) {
        logger.error("Error emitting playerready event", tmp4);
      }
    }
  }
};
prototype["emitViewInit"] = function emitViewInit() {
  const self = this;
  if (this.isInitialized) {
    if (!self.viewInitEmitted) {
      try {
        UDefault.emit(self.playerId, "viewinit");
        self.viewInitEmitted = true;
      } catch (tmp4) {
        logger.error("Error emitting viewinit event", tmp4);
      }
    }
  }
};
prototype["emitLoadStart"] = function emitLoadStart() {
  const self = this;
  if (this.isInitialized) {
    try {
      self.emitViewInit();
    } catch (tmp2) {
      logger.error("Error emitting loadstart/viewinit event", tmp2);
    }
  }
};
prototype["emitLoad"] = function emitLoad(arg0) {
  const self = this;
  if (this.isInitialized) {
    try {
      self.updateVideoSource(undefined, undefined, arg0);
    } catch (tmp3) {
      logger.error("Error emitting load events", tmp3);
    }
  }
};
prototype["emitPlay"] = function emitPlay() {
  const self = this;
  if (this.isInitialized) {
    try {
      if (!self.viewInitEmitted) {
        self.emitViewInit();
      }
      self.updatePlayerState(false);
      UDefault.emit(self.playerId, "play");
      self.playStarted = true;
      self.playingEmitted = false;
    } catch (tmp6) {
      logger.error("Error emitting play event", tmp6);
    }
  }
};
prototype["emitPause"] = function emitPause() {
  const self = this;
  if (this.isInitialized) {
    try {
      self.updatePlayerState(true);
      UDefault.emit(self.playerId, "pause");
    } catch (tmp5) {
      logger.error("Error emitting pause event", tmp5);
    }
  }
};
prototype["emitPlaying"] = function emitPlaying() {
  const self = this;
  if (this.isInitialized) {
    if (!self.playingEmitted) {
      try {
        if (!self.viewInitEmitted) {
          self.emitViewInit();
        }
        if (!self.playStarted) {
          UDefault.emit(self.playerId, "play");
          self.playStarted = true;
        }
        UDefault.emit(self.playerId, "playing");
        self.playingEmitted = true;
      } catch (tmp8) {
        logger.error("Error emitting playing event", tmp8);
      }
    }
  }
};
prototype["emitWaiting"] = function emitWaiting() {
  if (this.isInitialized) {
    try {
      UDefault.emit(tmp.playerId, "waiting");
    } catch (tmp5) {
      logger.error("Error emitting waiting event", tmp5);
    }
  }
};
prototype["emitRebufferStart"] = function emitRebufferStart(rebufferStartedAt) {
  if (this.isInitialized) {
    try {
      const obj2 = { viewer_time: rebufferStartedAt };
      UDefault.emit(tmp.playerId, "rebufferstart", obj2);
    } catch (tmp6) {
      logger.error("Error emitting rebufferstart event", tmp6);
    }
  }
};
prototype["emitRebufferEnd"] = function emitRebufferEnd(viewer_time) {
  if (this.isInitialized) {
    try {
      const obj2 = { viewer_time };
      UDefault.emit(tmp.playerId, "rebufferend", obj2);
    } catch (tmp6) {
      logger.error("Error emitting rebufferend event", tmp6);
    }
  }
};
prototype["emitCanPlay"] = function emitCanPlay() {
  this.emitPlayerReady();
};
prototype["emitSeeking"] = function emitSeeking() {
  if (this.isInitialized) {
    try {
      UDefault.emit(tmp.playerId, "seeking");
    } catch (tmp5) {
      logger.error("Error emitting seeking event", tmp5);
    }
  }
};
prototype["emitSeeked"] = function emitSeeked() {
  if (this.isInitialized) {
    try {
      UDefault.emit(tmp.playerId, "seeked");
    } catch (tmp5) {
      logger.error("Error emitting seeked event", tmp5);
    }
  }
};
prototype["emitEnded"] = function emitEnded() {
  const self = this;
  if (this.isInitialized) {
    try {
      UDefault.emit(self.playerId, "ended");
      self.emitViewEnd();
    } catch (tmp5) {
      logger.error("Error emitting ended event", tmp5);
    }
  }
};
prototype["emitError"] = function emitError(error) {
  if (this.isInitialized) {
    try {
      error = undefined;
      if (error != null) {
        error = error.error;
      }
      let localizedDescription;
      if (error != null) {
        localizedDescription = error.localizedDescription;
      }
      const items = [localizedDescription, , ];
      let errorString;
      if (error != null) {
        errorString = tmp5.errorString;
      }
      items[1] = errorString;
      let errorException;
      if (error != null) {
        errorException = tmp5.errorException;
      }
      items[2] = errorException;
      let domain;
      const found = items.find((item) => {
        let tmp = null != item;
        if (tmp) {
          tmp = item.length > 0;
        }
        return tmp;
      });
      if (error != null) {
        domain = tmp5.domain;
      }
      let combined = null;
      if (null != domain) {
        const _HermesInternal = HermesInternal;
        combined = "domain: " + tmp5.domain;
      }
      const items1 = [combined, , ];
      let prop;
      if (error != null) {
        prop = tmp5.localizedFailureReason;
      }
      let combined1 = null;
      if (null != prop) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "reason: " + tmp5.localizedFailureReason;
      }
      items1[1] = combined1;
      let errorException1;
      if (error != null) {
        errorException1 = tmp5.errorException;
      }
      let combined2 = null;
      if (null != errorException1) {
        const _HermesInternal3 = HermesInternal;
        combined2 = "exception: " + tmp5.errorException;
      }
      items1[2] = combined2;
      const found1 = items1.filter((item) => null != item);
      const joined = found1.join("; ");
      let code;
      if (error != null) {
        code = tmp5.code;
      }
      let StringResult;
      if (null != code) {
        const _String = String;
        StringResult = String(error.code);
      }
      const obj = { player_error_code: StringResult, player_error_message: found, player_error_context: null };
      let tmp34;
      if (joined.length > 0) {
        tmp34 = joined;
      }
      obj.player_error_context = tmp34;
      UDefault.emit(tmp.playerId, "error", obj);
    } catch (tmp36) {
      logger.error("Error emitting error event", tmp36);
    }
  }
};
prototype["emitTimeUpdate"] = function emitTimeUpdate() {
  const self = this;
  if (this.isInitialized) {
    try {
      const playStarted = self.playStarted;
      let player_is_paused = !playStarted;
      if (playStarted) {
        player_is_paused = self.playingEmitted;
      }
      if (!player_is_paused) {
        player_is_paused = self.videoState.player_is_paused;
      }
      if (!player_is_paused) {
        self.emitPlaying();
      }
      const obj2 = { player_playhead_time: self.currentPlayheadTime * c6 };
      UDefault.emit(self.playerId, "timeupdate", obj2);
    } catch (tmp6) {
      logger.error("Error emitting timeupdate event", tmp6);
    }
  }
};
prototype["emitRenditionChange"] = function emitRenditionChange(width, height, bitrate) {
  const self = this;
  if (this.isInitialized) {
    try {
      const size = { width, height, bitrate };
      self.currentRendition = size;
      const result = self.updateVideoSourceDimensions(width, height);
      const obj = { video_source_width: width, video_source_height: height, video_source_bitrate: bitrate };
      UDefault.emit(self.playerId, "renditionchange", obj);
    } catch (tmp9) {
      logger.error("Error emitting renditionchange event", tmp9);
    }
  }
};
prototype["destroy"] = function destroy() {
  const self = this;
  if (this.isInitialized) {
    try {
      self.emitViewEnd();
      UDefault.emit(self.playerId, "destroy");
      self.isInitialized = false;
      const obj2 = { playerId: self.playerId };
      logger.info("Mux Data mobile integration destroyed", obj2);
    } catch (tmp7) {
      logger.error("Error destroying Mux mobile integration", tmp7);
    }
  }
};
prototype["emitViewEnd"] = function emitViewEnd() {
  if (this.isInitialized) {
    try {
      UDefault.emit(tmp.playerId, "viewend");
    } catch (tmp5) {
      logger.error("Error emitting viewend event", tmp5);
    }
  }
};
prototype["getSessionId"] = function getSessionId() {
  return this.sessionId;
};
prototype["hasPlayStarted"] = function hasPlayStarted() {
  return this.playStarted && !this.videoState.player_is_paused;
};
prototype["isPlaying"] = function isPlaying() {
  return this.playingEmitted && !this.videoState.player_is_paused;
};
prototype["mapConfigToMuxData"] = function mapConfigToMuxData(muxEnvKey) {
  const self = this;
  const obj = { env_key: muxEnvKey, session_id: this.sessionId, player_name: "discord-mobile", player_version: v100, player_software_name: "react-native-video", player_software_version: "5.2.1-discord", player_mux_plugin_name: "discord-mobile-custom-integration", player_mux_plugin_version: v100, video_id: this.config.contentMetadata.contentId, video_title: this.config.contentMetadata.title, video_duration: this.config.contentMetadata.durationMs, video_content_type: this.config.contentMetadata.contentType, video_series: this.config.contentMetadata.questId, video_producer: this.config.contentMetadata.gameId, video_brand: null, video_cdn: null, video_stream_type: null, view_client_application_name: null, view_client_application_version: null, experiment_name: null };
  let str = this.config.contentMetadata.gameName;
  if (str == null) {
    str = "Discord";
  }
  obj.video_brand = str;
  obj.video_cdn = Cloudflare;
  obj.video_stream_type = self.config.contentMetadata.videoStreamType;
  obj.view_client_application_name = self.getBuildChannel();
  obj.view_client_application_version = self.getAppVersion();
  obj.experiment_name = self.config.contentMetadata.experimentName;
  return obj;
};
prototype["getAppVersion"] = function getAppVersion() {
  let str = this.config.appVersion;
  if (str == null) {
    str = "unknown";
  }
  return str;
};
prototype["getMuxEnvKey"] = function getMuxEnvKey() {
  return "1qd16mdmdjasipqg3irobln4u";
};
prototype["getBuildChannel"] = function getBuildChannel() {
  let str = this.config.releaseChannel;
  if (str == null) {
    str = "stable";
  }
  return str;
};

export { MobileCustomMuxIntegration };