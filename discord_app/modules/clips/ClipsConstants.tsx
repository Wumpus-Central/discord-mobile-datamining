// === Module 4523: result ===

// Module 4523 (result)
import timestampDefault from "timestamp" /* 3 */;
import setDefault from "set" /* 687 */;

let obj = {};
const result = 30 * setDefault.Millis.SECOND;
obj.SECONDS_30 = result;
obj[result] = "SECONDS_30";
const MINUTE = setDefault.Millis.MINUTE;
obj.MINUTES_1 = MINUTE;
obj[MINUTE] = "MINUTES_1";
const result1 = 2 * setDefault.Millis.MINUTE;
obj.MINUTES_2 = result1;
obj[result1] = "MINUTES_2";
const result2 = 6 * setDefault.Millis.SECOND;
const result3 = 60 * setDefault.Millis.SECOND;
obj = { ORIGINAL: "original", PORTRAIT_9_16: "9:16", LANDSCAPE_16_9: "16:9" };
obj = { TEXT: "text" };
const obj1 = { NONE: "none", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
const result4 = 14 * setDefault.Millis.DAY;
const obj2 = { fontSize: 0.06, color: "#FFFFFF", strokeWidth: obj1.NONE, strokeColor: "#000000" };
const tmp5 = new timestampDefault("Clips");
const result5 = require("set").fileFinishedImporting("modules/clips/ClipsConstants.tsx");

export const ClipsLengthSettings = obj;
export const ClipsViewerConnectivitySettings = { ALL: 0, [0]: "ALL", FRIENDS: 1, [1]: "FRIENDS" };
export const ClipSaveTypes = { DECOUPLED: "decoupled", VIEWER: "viewer", STREAMER: "streamer", VOICE: "voice" };
export const ClipsUserEducationType = { Error: 0, [0]: "Error", Disabled: 1, [1]: "Disabled", Enabled: 2, [2]: "Enabled" };
export const DEFAULT_SAVE_CLIP_KEYBIND = "alt+c";
export const DEFAULT_SAVE_SCREENSHOT_KEYBIND = "f12";
export const CLIPS_TOAST_DURATION = result2;
export const ClipsLogger = tmp5;
export const CURRENT_CLIP_METADATA_VERSION = 6;
export const CLIPS_HARDWARE_CLASSIFICATION_VERSION = 2;
export const WINDOWS_HARDWARE_MINIMUM_GPU_REGEX = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/;
export const WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/;
export const MIN_CLIP_DURATION_SECONDS = 0.1;
export const CLIPS_EDIT_MODAL_KEY = "clips-edit";
export const CLIPS_GALLERY_MODAL_KEY = "clips-gallery";
export const CLIPS_QOE_LOCATION = "clips_player";
export const CLIPS_THUMBNAIL_MAX_WIDTH = 640;
export const CLIPS_THUMBNAIL_MAX_HEIGHT = 360;
export const CLIPS_MAX_PARTICIPANTS = 100;
export const CLIPS_MAX_TIMELINE_EVENTS = 1000;
export const CLIPS_TIMELINE_BUFFER_MS = 500;
export const CLIP_NAME_TEMPLATE = (arg0) => "Clip - " + new Date(arg0).toLocaleString();
export const MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS = 15;
export const CLIPS_SAVE_TIMEOUT_WARN_MS = result3;
export const CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY = 30000;
export const SEEK_DENOMINATOR = 30;
export const SEEK_SHIFT_MODIFIER = 10;
export const CLIPS_EDUCATION_COOLDOWN = result4;
export const CLIPS_EDUCATION_GAME_LAUNCH_THRESHOLD = 5;
export const CLIPS_EDUCATION_MAX_DISMISSALS_ENABLED = 5;
export const CLIPS_EDUCATION_MAX_DISMISSALS_DISABLED = 1;
export const MIN_CLIPS_BITRATE_PERCENT = 10;
export const MAX_CLIPS_BITRATE_PERCENT = 100;
export const DEFAULT_CLIPS_BITRATE_PERCENT = 75;
export const BYTES_PER_GB = 1073741824;
export const MAX_TRANSIENT_STORAGE_BYTES = 16106127360;
export const TRANSIENT_AUTOCLIP_DIRNAME = ".autoclip-cache";
export const CLIP_NAME_MIN_CHAR_LENGTH = 0;
export const ClipsTrackSuffixes = { ALL: ":all", APPLICATION: ":application", VOICE: ":voice", SOUNDBOARD: ":soundboard" };
export const ClipSignalTypes = { MANUAL: "manual", DISTRIBUTED: "distributed", SHOUTING: "shouting", LAUGHTER: "laughter", GAME_EVENT: "game_event", SPEAKING: "speaking", SOUNDBOARD: "soundboard" };
export const ClipsHardwareClassification = { UNKNOWN: "unknown", BELOW_MINIMUM: "below_minimum", MEETS_MINIMUM: "meets_minimum", MEETS_AUTO_ENABLE: "meets_auto_enable" };
export const ClipsSaveNoOpReason = { MAX_CONCURRENT_SAVES: "max_concurrent_saves", NO_ELIGIBLE_SOURCE: "no_eligible_source", MODULE_NOT_LOADED: "module_not_loaded", BUFFER_WARMING_UP: "buffer_warming_up", BRIDGE_SHUTDOWN: "bridge_shutdown", RECORDING_NOT_READY: "recording_not_ready" };
export const Emotion = { ANGER: "anger", CALM: "calm", DISGUST: "disgust", FEAR: "fear", HAPPY: "happy", NEUTRAL: "neutral", SAD: "sad", SURPRISED: "surprised" };
export const ClipCropPreset = obj;
export const getClipCropAspectRatio = function getClipCropAspectRatio(arg0) {
  if (obj.PORTRAIT_9_16 === arg0) {
    return 0.5625;
  } else if (tmp.LANDSCAPE_16_9 === arg0) {
    return 1.7777777777777777;
  } else {
    return null;
  }
};
export const getClipCropBounds = function getClipCropBounds(bounds) {
  bounds = undefined;
  if (bounds != null) {
    bounds = bounds.bounds;
  }
  if (null != bounds) {
    return bounds.bounds;
  } else {
    let preset;
    if (bounds != null) {
      preset = bounds.preset;
    }
    let num = 0.5625;
    if (obj.PORTRAIT_9_16 !== preset) {
      num = null;
      if (obj.LANDSCAPE_16_9 === preset) {
        num = 1.7777777777777777;
      }
    }
    let tmp3 = null;
    if (null != num) {
      obj = { aspectRatio: null };
      obj[0] = num;
      tmp3 = obj;
    }
    return tmp3;
  }
};
export const ClipTrackType = obj;
export const CLIP_TRACK_COLORS = { [obj.TEXT]: "#D53FAE" };
export const DEFAULT_TRACK_DURATION_SECONDS = 5;
export const MIN_TRACK_DURATION_SECONDS = 1;
export const DEFAULT_TRACK_POSITION = { x: 0.5, y: 0.5 };
export const TextStrokeWidth = obj1;
export const TEXT_STROKE_WIDTH_TO_FONT_SIZE_RATIO = { [obj1.NONE]: 0, [obj1.SMALL]: 0.0625, [obj1.MEDIUM]: 0.125, [obj1.LARGE]: 0.25 };
export const DEFAULT_TEXT_TRACK_STYLE = obj2;
export const ClipType = { CLIP: "clip", SCREENSHOT: "screenshot", VOICE_CLIP: "voice_clip" };
export const GameEventType = { UNCLASSIFIED: "unclassified", KILL: "kill", MULTIKILL: "multikill", DEATH: "death", ASSIST: "assist", ITEM: "item", VICTORY: "victory", DEFEAT: "defeat", LEVEL_UP: "level_up", TREASURE: "treasure", OBJECTIVE_KILL: "objective_kill" };