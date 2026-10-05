// discord_app/modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx
import logger_Logger from "../../../../discord_common/js/packages/logger/Logger.tsx";
import _modDef14944 from "../../../../_runtime/metro/14944__.js";
import size_mod from "../../../../_runtime/metro/00002__.js";

const logger = new logger_Logger.Logger("MobileCustomMuxIntegration");
const React3 = "1.0.0";
const Cloudflare = "Cloudflare";
let c6 = 1000;
let size = size_mod;
let result = size.fileFinishedImporting("modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx");
class MobileCustomMuxIntegration {
  constructor(config) {
    let str;
    const obj2 = Object.create(new.target.prototype);
    obj2.isInitialized = false;
    obj2.viewInitEmitted = false;
    obj2.playerReadyEmitted = false;
    obj2.playStarted = false;
    obj2.playingEmitted = false;
    obj2.currentPlayheadTime = 0;
    obj2.currentRendition = null;
    obj2.getPlayheadTime = function getPlayheadTime() {
      return obj2.currentPlayheadTime * c6;
    };
    obj2.getStateData = function getStateData() {
      return obj2.videoState;
    };
    obj2.config = config;
    const SessionManager = obj2(14942).SessionManager;
    obj2.sessionId = SessionManager.generateSessionId();
    obj2.playerId = "discord-mobile-" + obj2.sessionId;
    const obj = {
      player_is_paused: true,
      player_width: 0,
      player_height: 0,
      player_autoplay_on: false,
      player_preload_on: true,
      video_cdn: Cloudflare,
      video_series: config.contentMetadata.questId,
      video_producer: config.contentMetadata.gameId,
      video_brand: config.contentMetadata.gameName,
      video_title: config.contentMetadata.title,
      video_stream_type: config.contentMetadata.videoStreamType,
      video_source_url: config.contentMetadata.contentId,
      video_source_mime_type: str,
      video_source_duration: config.contentMetadata.durationMs,
    };
    str = "video/mp4";
    if ("hls" === config.contentMetadata.videoStreamType) {
      str = "application/x-mpegURL";
    }
    obj2.videoState = obj;
    return obj2;
  }
  initialize() {
    const self = this;
    const muxEnvKey = this.getMuxEnvKey();
    if (null != muxEnvKey) {
      if (0 !== muxEnvKey.length) {
        try {
          let flag = self.config.debug;
          const init = _modDef14944.init;
          const playerId = self.playerId;
          _modDef14944;
          if (flag == null) {
            flag = false;
          }
          const obj = {
            debug: flag,
            disablePlayheadRebufferTracking: true,
            getPlayheadTime: null,
            getStateData: null,
            data: self.mapConfigToMuxData(muxEnvKey),
          };
          ({ getPlayheadTime: obj.getPlayheadTime, getStateData: obj.getStateData } = self);
          init(playerId, obj);
          self.isInitialized = true;
          const obj2 = { playerId: self.playerId };
          logger.info("Mux Data mobile integration initialized", obj2);
        } catch (tmp8) {
          logger.error("Error initializing Mux mobile integration", tmp8);
          self.isInitialized = false;
        }
      }
    }
    logger.info("Mux environment key not available, skipping QoE tracking");
  }
  updatePlayheadTime(currentPlayheadTime) {
    this.currentPlayheadTime = currentPlayheadTime;
  }
  updateVideoDimensions(player_width, player_height) {
    this.videoState.player_width = player_width;
    this.videoState.player_height = player_height;
  }
  updateVideoSourceDimensions(video_source_width, video_source_height) {
    this.videoState.video_source_width = video_source_width;
    this.videoState.video_source_height = video_source_height;
  }
  updateVideoSource(video_source_url, video_source_mime_type, arg2) {
    this.videoState.video_source_url = video_source_url;
    this.videoState.video_source_mime_type = video_source_mime_type;
    let result;
    const videoState = this.videoState;
    if (null != arg2) {
      result = arg2 * c6;
    }
    videoState.video_source_duration = result;
  }
  updatePlayerState(player_is_paused, player_is_fullscreen) {
    this.videoState.player_is_paused = player_is_paused;
    if (null != player_is_fullscreen) {
      this.videoState.player_is_fullscreen = player_is_fullscreen;
    }
  }
  emitPlayerReady() {
    const self = this;
    if (this.isInitialized) {
      if (!self.playerReadyEmitted) {
        try {
          const obj = _modDef14944;
          obj.emit(self.playerId, "playerready");
          self.playerReadyEmitted = true;
        } catch (tmp4) {
          logger.error("Error emitting playerready event", tmp4);
        }
      }
    }
  }
  emitViewInit() {
    const self = this;
    if (this.isInitialized) {
      if (!self.viewInitEmitted) {
        try {
          const obj = _modDef14944;
          obj.emit(self.playerId, "viewinit");
          self.viewInitEmitted = true;
        } catch (tmp4) {
          logger.error("Error emitting viewinit event", tmp4);
        }
      }
    }
  }
  emitLoadStart() {
    const self = this;
    if (this.isInitialized) {
      try {
        self.emitViewInit();
      } catch (tmp2) {
        logger.error("Error emitting loadstart/viewinit event", tmp2);
      }
    }
  }
  emitLoad(arg0) {
    const self = this;
    if (this.isInitialized) {
      try {
        self.updateVideoSource(undefined, undefined, arg0);
      } catch (tmp3) {
        logger.error("Error emitting load events", tmp3);
      }
    }
  }
  emitPlay() {
    const self = this;
    if (this.isInitialized) {
      try {
        if (!self.viewInitEmitted) {
          self.emitViewInit();
        }
        self.updatePlayerState(false);
        const obj = _modDef14944;
        obj.emit(self.playerId, "play");
        self.playStarted = true;
        self.playingEmitted = false;
      } catch (tmp6) {
        logger.error("Error emitting play event", tmp6);
      }
    }
  }
  emitPause() {
    const self = this;
    if (this.isInitialized) {
      try {
        self.updatePlayerState(true);
        const obj = _modDef14944;
        obj.emit(self.playerId, "pause");
      } catch (tmp5) {
        logger.error("Error emitting pause event", tmp5);
      }
    }
  }
  emitPlaying() {
    const self = this;
    if (this.isInitialized) {
      if (!self.playingEmitted) {
        try {
          if (!self.viewInitEmitted) {
            self.emitViewInit();
          }
          if (!self.playStarted) {
            const obj = _modDef14944;
            obj.emit(self.playerId, "play");
            self.playStarted = true;
          }
          const obj2 = _modDef14944;
          obj2.emit(self.playerId, "playing");
          self.playingEmitted = true;
        } catch (tmp8) {
          logger.error("Error emitting playing event", tmp8);
        }
      }
    }
  }
  emitWaiting() {
    if (this.isInitialized) {
      try {
        const obj = _modDef14944;
        obj.emit(tmp.playerId, "waiting");
      } catch (tmp5) {
        logger.error("Error emitting waiting event", tmp5);
      }
    }
  }
  emitRebufferStart(rebufferStartedAt) {
    if (this.isInitialized) {
      try {
        const obj2 = { viewer_time: rebufferStartedAt };
        const obj = _modDef14944;
        obj.emit(tmp.playerId, "rebufferstart", obj2);
      } catch (tmp6) {
        logger.error("Error emitting rebufferstart event", tmp6);
      }
    }
  }
  emitRebufferEnd(viewer_time) {
    if (this.isInitialized) {
      try {
        const obj2 = { viewer_time };
        const obj = _modDef14944;
        obj.emit(tmp.playerId, "rebufferend", obj2);
      } catch (tmp6) {
        logger.error("Error emitting rebufferend event", tmp6);
      }
    }
  }
  emitCanPlay() {
    this.emitPlayerReady();
  }
  emitSeeking() {
    if (this.isInitialized) {
      try {
        const obj = _modDef14944;
        obj.emit(tmp.playerId, "seeking");
      } catch (tmp5) {
        logger.error("Error emitting seeking event", tmp5);
      }
    }
  }
  emitSeeked() {
    if (this.isInitialized) {
      try {
        const obj = _modDef14944;
        obj.emit(tmp.playerId, "seeked");
      } catch (tmp5) {
        logger.error("Error emitting seeked event", tmp5);
      }
    }
  }
  emitEnded() {
    const self = this;
    if (this.isInitialized) {
      try {
        const obj = _modDef14944;
        obj.emit(self.playerId, "ended");
        self.emitViewEnd();
      } catch (tmp5) {
        logger.error("Error emitting ended event", tmp5);
      }
    }
  }
  emitError(error) {
    let tmp35;
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
        const items = [localizedDescription, ,];
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
        const found = items.find((item) => null != item && item.length > 0);
        if (error != null) {
          domain = tmp5.domain;
        }
        let combined = null;
        if (null != domain) {
          const _HermesInternal = HermesInternal;
          combined = "domain: " + tmp5.domain;
        }
        const items1 = [combined, ,];
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
        const emit = _modDef14944.emit;
        const playerId = tmp.playerId;
        _modDef14944;
        if (error != null) {
          code = tmp5.code;
        }
        let StringResult;
        if (null != code) {
          const _String = String;
          StringResult = String(error.code);
        }
        const obj = { player_error_code: StringResult, player_error_message: found, player_error_context: tmp35 };
        tmp35 = undefined;
        if (joined.length > 0) {
          tmp35 = joined;
        }
        emit(playerId, "error", obj);
      } catch (tmp37) {
        logger.error("Error emitting error event", tmp37);
      }
    }
  }
  emitTimeUpdate() {
    const self = this;
    if (this.isInitialized) {
      try {
        const player_is_paused = !self.playStarted || self.playingEmitted || self.videoState.player_is_paused;
        if (!player_is_paused) {
          self.emitPlaying();
        }
        const obj2 = { player_playhead_time: self.currentPlayheadTime * c6 };
        const obj = _modDef14944;
        obj.emit(self.playerId, "timeupdate", obj2);
      } catch (tmp6) {
        logger.error("Error emitting timeupdate event", tmp6);
      }
    }
  }
  emitRenditionChange(width, height, bitrate) {
    const self = this;
    if (this.isInitialized) {
      try {
        size = { width, height, bitrate };
        self.currentRendition = size;
        const result = self.updateVideoSourceDimensions(width, height);
        const obj = { video_source_width: width, video_source_height: height, video_source_bitrate: bitrate };
        const obj2 = _modDef14944;
        obj2.emit(self.playerId, "renditionchange", obj);
      } catch (tmp9) {
        logger.error("Error emitting renditionchange event", tmp9);
      }
    }
  }
  destroy() {
    const self = this;
    if (this.isInitialized) {
      try {
        self.emitViewEnd();
        const obj = _modDef14944;
        obj.emit(self.playerId, "destroy");
        self.isInitialized = false;
        const obj2 = { playerId: self.playerId };
        logger.info("Mux Data mobile integration destroyed", obj2);
      } catch (tmp7) {
        logger.error("Error destroying Mux mobile integration", tmp7);
      }
    }
  }
  emitViewEnd() {
    if (this.isInitialized) {
      try {
        const obj = _modDef14944;
        obj.emit(tmp.playerId, "viewend");
      } catch (tmp5) {
        logger.error("Error emitting viewend event", tmp5);
      }
    }
  }
  getSessionId() {
    return this.sessionId;
  }
  hasPlayStarted() {
    return this.playStarted && !this.videoState.player_is_paused;
  }
  isPlaying() {
    return this.playingEmitted && !this.videoState.player_is_paused;
  }
  mapConfigToMuxData(muxEnvKey) {
    let str;
    const self = this;
    const obj = {
      env_key: muxEnvKey,
      session_id: this.sessionId,
      player_name: "discord-mobile",
      player_version: v100,
      player_software_name: "react-native-video",
      player_software_version: "5.2.1-discord",
      player_mux_plugin_name: "discord-mobile-custom-integration",
      player_mux_plugin_version: v100,
      video_id: this.config.contentMetadata.contentId,
      video_title: this.config.contentMetadata.title,
      video_duration: this.config.contentMetadata.durationMs,
      video_content_type: this.config.contentMetadata.contentType,
      video_series: this.config.contentMetadata.questId,
      video_producer: this.config.contentMetadata.gameId,
      video_brand: str,
      video_cdn: Cloudflare,
      video_stream_type: self.config.contentMetadata.videoStreamType,
      view_client_application_name: self.getBuildChannel(),
      view_client_application_version: self.getAppVersion(),
      experiment_name: self.config.contentMetadata.experimentName,
    };
    str = this.config.contentMetadata.gameName;
    if (str == null) {
      str = "Discord";
    }
    return obj;
  }
  getAppVersion() {
    let str = this.config.appVersion;
    if (str == null) {
      str = "unknown";
    }
    return str;
  }
  getMuxEnvKey() {
    return "1qd16mdmdjasipqg3irobln4u";
  }
  getBuildChannel() {
    let str = this.config.releaseChannel;
    if (str == null) {
      str = "stable";
    }
    return str;
  }
}
const prototype = MobileCustomMuxIntegration.prototype;

export { MobileCustomMuxIntegration };
