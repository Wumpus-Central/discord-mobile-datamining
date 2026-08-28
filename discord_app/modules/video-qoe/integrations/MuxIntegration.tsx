// discord_app/modules/video-qoe/integrations/MuxIntegration.tsx
import set from "../../../../_runtime/00002_set.js";

let result = set.fileFinishedImporting("modules/video-qoe/integrations/MuxIntegration.tsx");
const prototype = function MuxIntegration() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["mapDiscordToMuxMetadata"] = function mapDiscordToMuxMetadata(config, sessionId) {
  const obj = { env_key: "1qd16mdmdjasipqg3irobln4u", session_id: sessionId, player_name: "discord", player_version: "1.0.0", video_id: config.contentMetadata.contentId, video_title: config.contentMetadata.title, video_duration: null, video_content_type: null, video_series: null, video_producer: null, video_brand: null, video_cdn: "Cloudflare", video_stream_type: null, view_client_application_name: null, view_client_application_version: null, viewer_user_id: null, viewer_plan: null };
  let durationMs = config.contentMetadata.durationMs;
  if (durationMs == null) {
    let result;
    if (null != config.contentMetadata.durationSec) {
      result = 1000 * config.contentMetadata.durationSec;
    }
    durationMs = result;
  }
  obj[6] = durationMs;
  obj[7] = config.contentMetadata.contentType;
  obj[8] = config.contentMetadata.questId;
  obj[9] = config.contentMetadata.gameId;
  let str = config.contentMetadata.gameName;
  if (str == null) {
    str = "Discord";
  }
  obj[10] = str;
  obj[12] = config.contentMetadata.videoStreamType;
  obj[13] = this.getBuildChannel();
  obj[14] = this.getAppVersion();
  const userContext = config.userContext;
  let userId;
  if (userContext != null) {
    userId = userContext.userId;
  }
  obj[15] = userId;
  const userContext2 = config.userContext;
  let userTier;
  if (userContext2 != null) {
    userTier = userContext2.userTier;
  }
  obj[16] = userTier;
  return obj;
};
prototype["getAppVersion"] = function getAppVersion() {
  return "6302";
};
prototype["getBuildChannel"] = function getBuildChannel() {
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
};

export const MuxIntegration = prototype;