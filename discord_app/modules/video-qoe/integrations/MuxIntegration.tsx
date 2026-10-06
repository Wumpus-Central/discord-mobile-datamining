// discord_app/modules/video-qoe/integrations/MuxIntegration.tsx
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/video-qoe/integrations/MuxIntegration.tsx");
class MuxIntegration {
  static mapDiscordToMuxMetadata(config, sessionId) {
    let durationMs;
    let str;
    let userId;
    let userTier;
    const obj = {
      env_key: "1qd16mdmdjasipqg3irobln4u",
      session_id: sessionId,
      player_name: "discord",
      player_version: "1.0.0",
      video_id: config.contentMetadata.contentId,
      video_title: config.contentMetadata.title,
      video_duration: durationMs,
      video_content_type: config.contentMetadata.contentType,
      video_series: config.contentMetadata.questId,
      video_producer: config.contentMetadata.gameId,
      video_brand: str,
      video_cdn: "Cloudflare",
      video_stream_type: config.contentMetadata.videoStreamType,
      view_client_application_name: this.getBuildChannel(),
      view_client_application_version: this.getAppVersion(),
      viewer_user_id: userId,
      viewer_plan: userTier,
    };
    durationMs = config.contentMetadata.durationMs;
    if (durationMs == null) {
      let result;
      if (null != config.contentMetadata.durationSec) {
        result = 1000 * config.contentMetadata.durationSec;
      }
      durationMs = result;
    }
    str = config.contentMetadata.gameName;
    if (str == null) {
      str = "Discord";
    }
    const userContext = config.userContext;
    userId = undefined;
    if (userContext != null) {
      userId = userContext.userId;
    }
    const userContext2 = config.userContext;
    userTier = undefined;
    if (userContext2 != null) {
      userTier = userContext2.userTier;
    }
    return obj;
  }
  static getAppVersion() {
    return "35020100000000";
  }
  static getBuildChannel() {
    try {
      const _window = window;
      let str;
      if (GLOBAL_ENV != null) {
        str = GLOBAL_ENV.RELEASE_CHANNEL;
      }
      if (str == null) {
        str = "stable";
      }
      return str;
    } catch (err) {
      return "stable";
    }
  }
}

export { MuxIntegration };
