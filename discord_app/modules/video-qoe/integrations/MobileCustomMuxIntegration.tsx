// discord_app/modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx
import { U } from "../../../../_runtime/14391_U.js";
const logger = new require("log").Logger("MobileCustomMuxIntegration");
let c4 = "1.0.0";
const Cloudflare = "Cloudflare";
let c6 = 1000;
let result = require("U").fileFinishedImporting("modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx");
class MobileCustomMuxIntegration {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.isInitialized = false;
    obj.viewInitEmitted = false;
    obj.playerReadyEmitted = false;
    obj.playStarted = false;
    obj.playingEmitted = false;
    obj.currentPlayheadTime = 0;
    obj.currentRendition = null;
    obj.getPlayheadTime = function getPlayheadTime() {
      return obj.currentPlayheadTime * outer1_6;
    };
    obj.getStateData = function getStateData() {
      return obj.videoState;
    };
    obj.config = global;
    SessionManager = require("generateSessionId").SessionManager;
    obj.sessionId = SessionManager.generateSessionId();
    obj.playerId = "discord-mobile-" + obj.sessionId;
    obj = { player_is_paused: true, player_width: 0, player_height: 0, player_autoplay_on: false, player_preload_on: true, video_cdn: Cloudflare, video_series: global.contentMetadata.questId, video_producer: global.contentMetadata.gameId, video_brand: global.contentMetadata.gameName, video_title: global.contentMetadata.title, video_stream_type: global.contentMetadata.videoStreamType, video_source_url: global.contentMetadata.contentId, video_source_mime_type: null, video_source_duration: null };
    str = "video/mp4";
    if ("hls" === global.contentMetadata.videoStreamType) {
      str = "application/x-mpegURL";
    }
    obj[12] = str;
    obj[13] = global.contentMetadata.durationMs;
    obj.videoState = obj;
    return obj;
  }
}
const prototype = MobileCustomMuxIntegration.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  const muxEnvKey = this.getMuxEnvKey();
  if (null != muxEnvKey) {
    if (0 !== muxEnvKey.length) {
      try {
        let obj = U;
        let flag = self.config.debug;
        if (flag == null) {
          flag = false;
        }
        obj = { debug: null, getPlayheadTime: null, getStateData: null, data: null };
        obj[0] = flag;
        ({ getPlayheadTime: obj2[1], getStateData: obj2[2] } = self);
        obj[3] = self.mapConfigToMuxData(muxEnvKey);
        obj.init(self.playerId, obj);
        self.isInitialized = true;
        obj = { playerId: null };
        obj[0] = self.playerId;
        logger.info("Mux Data mobile integration initialized", obj);
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
prototype["updateVideoSource"] = function updateVideoSource(video_source_url, video_source_mime_type) {
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
        U.emit(self.playerId, "playerready");
        self.playerReadyEmitted = true;
        const obj = U;
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
        U.emit(self.playerId, "viewinit");
        self.viewInitEmitted = true;
        const obj = U;
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
      U.emit(self.playerId, "play");
      self.playStarted = true;
      self.playingEmitted = false;
      const obj = U;
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
      U.emit(self.playerId, "pause");
      const obj = U;
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
          U.emit(self.playerId, "play");
          self.playStarted = true;
          const obj = U;
        }
        U.emit(self.playerId, "playing");
        self.playingEmitted = true;
        const obj2 = U;
      } catch (tmp8) {
        logger.error("Error emitting playing event", tmp8);
      }
    }
  }
};
prototype["emitWaiting"] = function emitWaiting() {
  if (this.isInitialized) {
    try {
      U.emit(tmp.playerId, "waiting");
      const obj = U;
    } catch (tmp5) {
      logger.error("Error emitting waiting event", tmp5);
    }
  }
};
prototype["emitCanPlay"] = function emitCanPlay() {
  this.emitPlayerReady();
};
prototype["emitSeeking"] = function emitSeeking() {
  if (this.isInitialized) {
    try {
      U.emit(tmp.playerId, "seeking");
      const obj = U;
    } catch (tmp5) {
      logger.error("Error emitting seeking event", tmp5);
    }
  }
};
prototype["emitSeeked"] = function emitSeeked() {
  if (this.isInitialized) {
    try {
      U.emit(tmp.playerId, "seeked");
      const obj = U;
    } catch (tmp5) {
      logger.error("Error emitting seeked event", tmp5);
    }
  }
};
prototype["emitEnded"] = function emitEnded() {
  const self = this;
  if (this.isInitialized) {
    try {
      U.emit(self.playerId, "ended");
      self.emitViewEnd();
      const obj = U;
    } catch (tmp5) {
      logger.error("Error emitting ended event", tmp5);
    }
  }
};
prototype["emitError"] = function emitError(arg0) {
  if (this.isInitialized) {
    try {
      U.emit(tmp.playerId, "error", arg0);
      const obj = U;
    } catch (tmp6) {
      logger.error("Error emitting error event", tmp6);
    }
  }
};
prototype["emitTimeUpdate"] = function emitTimeUpdate() {
  const self = this;
  if (this.isInitialized) {
    try {
      let playStarted = self.playStarted;
      if (playStarted) {
        playStarted = !self.playingEmitted;
      }
      if (playStarted) {
        self.emitPlaying();
      }
      let obj = U;
      obj = { player_playhead_time: null };
      obj[0] = self.currentPlayheadTime * c6;
      obj.emit(self.playerId, "timeupdate", obj);
    } catch (tmp6) {
      logger.error("Error emitting timeupdate event", tmp6);
    }
  }
};
prototype["emitRenditionChange"] = function emitRenditionChange(width, height, bitrate) {
  const self = this;
  if (this.isInitialized) {
    try {
      let obj = { width: null, height: null, bitrate: null };
      obj[0] = width;
      obj[1] = height;
      obj[2] = bitrate;
      self.currentRendition = obj;
      const result = self.updateVideoSourceDimensions(width, height);
      obj = { video_source_width: null, video_source_height: null, video_source_bitrate: null };
      obj[0] = width;
      obj[1] = height;
      obj[2] = bitrate;
      U.emit(self.playerId, "renditionchange", obj);
      const obj2 = U;
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
      let obj = U;
      obj.emit(self.playerId, "destroy");
      self.isInitialized = false;
      obj = { playerId: null };
      obj[0] = self.playerId;
      logger.info("Mux Data mobile integration destroyed", obj);
    } catch (tmp7) {
      logger.error("Error destroying Mux mobile integration", tmp7);
    }
  }
};
prototype["emitViewEnd"] = function emitViewEnd() {
  if (this.isInitialized) {
    try {
      U.emit(tmp.playerId, "viewend");
      const obj = U;
    } catch (tmp5) {
      logger.error("Error emitting viewend event", tmp5);
    }
  }
};
prototype["getSessionId"] = function getSessionId() {
  return this.sessionId;
};
prototype["hasPlayStarted"] = function hasPlayStarted() {
  return this.playStarted;
};
prototype["mapConfigToMuxData"] = function mapConfigToMuxData(muxEnvKey) {
  const self = this;
  const obj = { env_key: muxEnvKey, session_id: this.sessionId, player_name: "discord-mobile", player_version: c4, player_software_name: "react-native-video", player_software_version: "5.2.1-discord", player_mux_plugin_name: "discord-mobile-custom-integration", player_mux_plugin_version: c4, video_id: this.config.contentMetadata.contentId, video_title: this.config.contentMetadata.title, video_duration: this.config.contentMetadata.durationMs, video_content_type: this.config.contentMetadata.contentType, video_series: this.config.contentMetadata.questId, video_producer: this.config.contentMetadata.gameId, video_brand: null, video_cdn: null, video_stream_type: null, view_client_application_name: null, view_client_application_version: null, experiment_name: null };
  let str = this.config.contentMetadata.gameName;
  if (str == null) {
    str = "Discord";
  }
  obj[14] = str;
  obj[15] = Cloudflare;
  obj[16] = self.config.contentMetadata.videoStreamType;
  obj[17] = self.getBuildChannel();
  obj[18] = self.getAppVersion();
  obj[19] = self.config.contentMetadata.experimentName;
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