// discord_common/js/packages/video-player/DiscordVideoPlayerTypes.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("../discord_common/js/packages/video-player/DiscordVideoPlayerTypes.tsx");

export const DEFAULT_VIDEO_VOLUME = 0.3;
export const DEFAULT_VIDEO_PLAYER_MIN_WIDTH = 240;
export const DEFAULT_VIDEO_PLAYER_MIN_HEIGHT = 180;
export const VideoPlayerState = { PLAYING: "playing", PAUSED: "paused", ENDED: "ended" };
export const VideoBufferState = { LOADING: "loading", BUFFERING: "buffering", READY: "ready" };
export const VideoErrorType = { ERROR: "ERROR", SOURCE_ERROR: "SOURCE_ERROR", ABORT: "ABORT", EMPTIED: "EMPTIED", STALLED: "STALLED", SUSPEND: "SUSPEND", NO_VALID_SOURCE: "NO_VALID_SOURCE", HLS_NETWORK_ERROR: "HLS_NETWORK_ERROR", HLS_MEDIA_ERROR: "HLS_MEDIA_ERROR", HLS_MUX_ERROR: "HLS_MUX_ERROR", HLS_KEY_SYSTEM_ERROR: "HLS_KEY_SYSTEM_ERROR", HLS_OTHER_ERROR: "HLS_OTHER_ERROR" };
export const VideoKeyBindings = { PLAYBACK: "k", SPACE: " ", SEEK_BACK: "j", SEEK_BACK_ALT: "ArrowLeft", SEEK_FORWARD: "l", SEEK_FORWARD_ALT: "ArrowRight", CAPTION: "c", FULLSCREEN: "f", MUTE: "m" };
export const ControlBarSize = { MD: "md", LG: "lg" };
export const ControlButtonSize = { MD: "md", LG: "lg" };
export const VideoPlayerStateChangeReason = { VISIBILITY: "visibility", FOCUS: "focus", USER: "user", SEEK: "seek", PLAYBACK_COMPLETE: "playback_complete", BUFFERING_RECOVERY: "buffering_recovery", PICTURE_IN_PICTURE: "picture_in_picture" };