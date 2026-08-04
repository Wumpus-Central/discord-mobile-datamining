// discord_app/modules/clips/ClipsTypes.tsx
let obj = { ORIGINAL: "original", PORTRAIT_9_16: "9:16", LANDSCAPE_16_9: "16:9" };
const result = require("set").fileFinishedImporting("modules/clips/ClipsTypes.tsx");

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
export const ClipType = { CLIP: "clip", SCREENSHOT: "screenshot", VOICE_CLIP: "voice_clip" };
export const GameEventType = { UNCLASSIFIED: "unclassified", KILL: "kill", MULTIKILL: "multikill", DEATH: "death", ASSIST: "assist", ITEM: "item", VICTORY: "victory", DEFEAT: "defeat", LEVEL_UP: "level_up", TREASURE: "treasure", OBJECTIVE_KILL: "objective_kill" };