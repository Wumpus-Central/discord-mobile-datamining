// === Module 7230: ClipAnalyticsUtils ===

// Module 7230 (ClipAnalyticsUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4942 */;
import isEqualDefault from "isEqual" /* 5010 */;
import VideoQualityStats from "VideoQualityStats" /* 7232 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4936 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;
import ClipsStore from "ClipsStore" /* 2005 */;
import ClipsConstants from "ClipsConstants" /* 7231 */;
import size from "module_2" /* 2 */;

let map;

let c9;
let metroImportAll;
function getClipSignalTypes(arg0) {
  const items = [];
  const iter = arg0.timeline[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let type = nextResult.signal.type;
    if (metroImportAll.MANUAL === type) {
      let arr = items.push("manual");
    } else if (metroImportAll.DISTRIBUTED === type) {
      let arr6 = items.push("distributed");
    } else if (metroImportAll.LAUGHTER === type) {
      let arr7 = items.push("laughter");
    } else if (metroImportAll.SHOUTING === type) {
      let arr8 = items.push("shouting");
    } else if (metroImportAll.GAME_EVENT === type) {
      let _HermesInternal = HermesInternal;
      let arr9 = items.push("game_event:" + tmp2.signal.eventType);
    }
    continue;
  }
  return items;
}
function getPostSaveClipAnalytics(arg0, framesEncodedByEncoder) {
  let num10;
  let num11;
  let num12;
  let num16;
  let num17;
  let num18;
  let num2;
  let num3;
  let num4;
  let num5;
  let num6;
  let num7;
  let num8;
  let num9;
  let sum1;
  map = new Map();
  for (const key10011 in framesEncodedByEncoder.framesEncodedByEncoder) {
    let tmp8 = framesEncodedByEncoder.framesEncodedByEncoder[key10011];
    let obj3 = VideoQualityStats;
    let parseEncoderResult = obj3.parseEncoder(key10011);
    let num = map.get(parseEncoderResult) ?? 0;
    let result = map.set(parseEncoderResult, num + tmp8);
    continue;
  }
  const obj = { frames_encoded_nvidia_cuda: num2, frames_encoded_nvidia_direct3d: num3, frames_encoded_openh264: num4, frames_encoded_videotoolbox: num5, frames_encoded_amd_direct3d: num6, frames_encoded_amd_vaapi: num7, frames_encoded_intel: num8, frames_encoded_intel_direct3d: num9, frames_encoded_wmf_direct3d_intel: num10, frames_encoded_wmf_direct3d_nvidia: num11, frames_encoded_wmf_direct3d_amd: num12, frames_encoded_wmf_direct3d: sum1 + num16, frames_encoded_uncategorized: num17, frames_encoded_unknown: num18, clip_duration_setting: ClipsStore.getSettings().clipsLength, target_fps: ApplicationStreamingSettingsStore.getState().fps };
  const merged = Object.assign(arg0);
  num2 = map.get(VideoQualityStats.Encoders.NVIDIA_CUDA);
  if (num2 == null) {
    num2 = 0;
  }
  num3 = map.get(VideoQualityStats.Encoders.NVIDIA_DIRECT_3D);
  if (num3 == null) {
    num3 = 0;
  }
  num4 = map.get(VideoQualityStats.Encoders.OPENH264);
  if (num4 == null) {
    num4 = 0;
  }
  num5 = map.get(VideoQualityStats.Encoders.VIDEOTOOLBOX);
  if (num5 == null) {
    num5 = 0;
  }
  num6 = map.get(VideoQualityStats.Encoders.AMD_DIRECT_3D);
  if (num6 == null) {
    num6 = 0;
  }
  num7 = map.get(VideoQualityStats.Encoders.AMD_VAAPI);
  if (num7 == null) {
    num7 = 0;
  }
  num8 = map.get(VideoQualityStats.Encoders.INTEL);
  if (num8 == null) {
    num8 = 0;
  }
  num9 = map.get(VideoQualityStats.Encoders.INTEL_DIRECT_3D);
  if (num9 == null) {
    num9 = 0;
  }
  num10 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_INTEL);
  if (num10 == null) {
    num10 = 0;
  }
  num11 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_NVIDIA);
  if (num11 == null) {
    num11 = 0;
  }
  num12 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_AMD);
  if (num12 == null) {
    num12 = 0;
  }
  let num13 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D);
  if (num13 == null) {
    num13 = 0;
  }
  let num14 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_INTEL);
  if (num14 == null) {
    num14 = 0;
  }
  const sum = num13 + num14;
  let num15 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_NVIDIA);
  if (num15 == null) {
    num15 = 0;
  }
  sum1 = sum + num15;
  num16 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_AMD);
  if (num16 == null) {
    num16 = 0;
  }
  num17 = map.get(VideoQualityStats.Encoders.UNCATEGORIZED);
  if (num17 == null) {
    num17 = 0;
  }
  num18 = map.get(VideoQualityStats.Encoders.UNKNOWN);
  if (num18 == null) {
    num18 = 0;
  }
  ({ framesSubmitted: obj2.frames_submitted, framesSubmittedDuringClip: obj2.frames_submitted_during_clip, framesEncoded: obj2.frames_encoded, framesEncodedDuringClip: obj2.frames_encoded_during_clip, framesDropped: obj2.frames_dropped, framesDroppedDuringClip: obj2.frames_dropped_during_clip } = framesEncodedByEncoder);
  ({ clipDuration: obj2.clip_duration, clipResolutionWidth: obj2.clip_resolution_width, clipResolutionHeight: obj2.clip_resolution_height, minFps: obj2.min_fps, maxFps: obj2.max_fps, submittedFps: obj2.submitted_fps } = framesEncodedByEncoder);
  ({ audioTrackCount: obj2.audio_track_count, savedAt: obj2.saved_at } = framesEncodedByEncoder);
  return obj;
}
({ ClipSignalTypes: metroImportAll, CLIP_RUNTIME: c9 } = ClipsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/clips/ClipAnalyticsUtils.tsx");

export const getClipType = function getClipType(decision) {
  decision = decision.decision;
  let type;
  if (decision != null) {
    const signal = decision.signal;
    if (signal != null) {
      type = signal.type;
    }
  }
  if (metroImportAll.MANUAL === type) {
    return "manual";
  } else if (metroImportAll.DISTRIBUTED === type) {
    return "distributed";
  } else {
    if (metroImportAll.LAUGHTER !== type) {
      if (metroImportAll.SHOUTING !== type) {
        if (metroImportAll.GAME_EVENT !== type) {
          return "unknown";
        }
      }
    }
    return "auto_ml";
  }
};
export const getClipBaseProperties = function getClipBaseProperties(clip) {
  const decision = clip.decision;
  let type;
  if (decision != null) {
    const signal = decision.signal;
    if (signal != null) {
      type = signal.type;
    }
  }
  let str = "manual";
  if (metroImportAll.MANUAL !== type) {
    str = "distributed";
    if (metroImportAll.DISTRIBUTED !== type) {
      if (metroImportAll.LAUGHTER !== type) {
        if (metroImportAll.SHOUTING !== type) {
          str = "unknown";
        }
      }
      str = "auto_ml";
    }
  }
  return { clip_type: str, num_clip_participants: clip.users.length, clip_session_id: clip.gameSessionId, is_candidate: clip.isCandidate };
};
export const getClipContextProperties = function getClipContextProperties() {
  let id;
  const obj = { clip_runtime, current_clip_session_id: id };
  const activeClipsSession = ClipsStore.getActiveClipsSession();
  id = undefined;
  if (activeClipsSession != null) {
    id = activeClipsSession.id;
  }
  return obj;
};
export { getClipSignalTypes };
export const getPreSaveClipAnalytics = function getPreSaveClipAnalytics(decision) {
  let id;
  let mediaSessionId;
  let rTCConnectionId;
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  let rTCConnection = null;
  if (null != currentUserActiveStream) {
    const getRTCConnection = StreamRTCConnectionStore.getRTCConnection;
    const obj = StreamKeyUtils;
    rTCConnection = getRTCConnection(obj.encodeStreamKey(currentUserActiveStream));
  }
  decision = decision.decision;
  let type;
  if (decision != null) {
    const signal = decision.signal;
    if (signal != null) {
      type = signal.type;
    }
  }
  let str = "manual";
  if (metroImportAll.MANUAL !== type) {
    str = "distributed";
    if (metroImportAll.DISTRIBUTED !== type) {
      if (metroImportAll.LAUGHTER !== type) {
        if (metroImportAll.SHOUTING !== type) {
          str = "unknown";
        }
      }
      str = "auto_ml";
    }
  }
  const obj3 = { rtc_connection_id: rTCConnectionId, media_session_id: mediaSessionId, parent_media_session_id: RTCConnectionStore.getMediaSessionId(), clip_event_timeline_size: decision.timeline.length };
  const obj4 = { clip_type: str, num_clip_participants: decision.users.length, clip_session_id: decision.gameSessionId, is_candidate: decision.isCandidate };
  const merged = Object.assign(obj4);
  const obj7 = { clip_runtime, current_clip_session_id: id };
  const activeClipsSession = ClipsStore.getActiveClipsSession();
  id = undefined;
  if (activeClipsSession != null) {
    id = activeClipsSession.id;
  }
  const merged1 = Object.assign(obj7);
  rTCConnectionId = undefined;
  if (rTCConnection != null) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  mediaSessionId = undefined;
  if (rTCConnection != null) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  ({ guildId: obj2.guild_id, channelId: obj2.channel_id, applicationId: obj2.application_id, applicationName: obj2.application_name, id: obj2.clip_uuid } = decision);
  return obj3;
};
export { getPostSaveClipAnalytics };
export const getClipSavedAnalytics = function getClipSavedAnalytics(arg0, framesEncodedByEncoder, arg2, arg3) {
  const tmp = getPostSaveClipAnalytics(arg0, framesEncodedByEncoder);
  ({ clipSaveTimeMs: tmp.clip_save_time_ms, clipSizeBytes: tmp.clip_size_bytes } = framesEncodedByEncoder);
  tmp.clip_signal_types = getClipSignalTypes(arg2);
  if (null != arg3) {
    const _Object = Object;
    const merged = Object.assign(tmp, arg3);
  }
  return tmp;
};
export const getClipSaveFailureAnalytics = function getClipSaveFailureAnalytics(arg0, framesEncodedByEncoder) {
  const tmp = getPostSaveClipAnalytics(arg0, framesEncodedByEncoder);
  ({ errorAt: tmp.error_at, errorMessage: tmp.error_message } = framesEncodedByEncoder);
  return tmp;
};
export const trackClipEdited = function trackClipEdited(editMetadata, isFavorite) {
  let applicationAudio;
  let end;
  let id;
  let length;
  let preset;
  let soundboardAudio;
  let start;
  let tmp11;
  let tmp15;
  let tmp19;
  let tmp23;
  let tmp27;
  let tmp31;
  let voiceAudio;
  isFavorite = isFavorite.isFavorite;
  let tmp2;
  if (null != isFavorite) {
    if (!isEqualDefault(isFavorite, tmp)) {
      tmp2 = isFavorite;
    }
  }
  const obj = { is_favorite: tmp2, title_length: length, edit_start_time: tmp11, edit_end_time: tmp15, application_audio_enabled: tmp19, voice_audio_enabled: tmp23, soundboard_audio_enabled: tmp27, crop: tmp31 };
  const name = isFavorite.name;
  let tmp6;
  if (null != name) {
    if (!isEqualDefault(name, tmp5)) {
      tmp6 = name;
    }
  }
  length = undefined;
  if (tmp6 != null) {
    length = tmp6.length;
  }
  editMetadata = editMetadata.editMetadata;
  if (editMetadata != null) {
    start = editMetadata.start;
  }
  const editMetadata2 = isFavorite.editMetadata;
  let start1;
  if (editMetadata2 != null) {
    start1 = editMetadata2.start;
  }
  tmp11 = undefined;
  if (null != start1) {
    if (!isEqualDefault(start1, start)) {
      tmp11 = start1;
    }
  }
  const editMetadata3 = editMetadata.editMetadata;
  if (editMetadata3 != null) {
    end = editMetadata3.end;
  }
  const editMetadata4 = isFavorite.editMetadata;
  let end1;
  if (editMetadata4 != null) {
    end1 = editMetadata4.end;
  }
  tmp15 = undefined;
  if (null != end1) {
    if (!isEqualDefault(end1, end)) {
      tmp15 = end1;
    }
  }
  const editMetadata5 = editMetadata.editMetadata;
  if (editMetadata5 != null) {
    applicationAudio = editMetadata5.applicationAudio;
  }
  const editMetadata6 = isFavorite.editMetadata;
  let applicationAudio1;
  if (editMetadata6 != null) {
    applicationAudio1 = editMetadata6.applicationAudio;
  }
  tmp19 = undefined;
  if (null != applicationAudio1) {
    if (!isEqualDefault(applicationAudio1, applicationAudio)) {
      tmp19 = applicationAudio1;
    }
  }
  const editMetadata7 = editMetadata.editMetadata;
  if (editMetadata7 != null) {
    voiceAudio = editMetadata7.voiceAudio;
  }
  const editMetadata8 = isFavorite.editMetadata;
  let voiceAudio1;
  if (editMetadata8 != null) {
    voiceAudio1 = editMetadata8.voiceAudio;
  }
  tmp23 = undefined;
  if (null != voiceAudio1) {
    if (!isEqualDefault(voiceAudio1, voiceAudio)) {
      tmp23 = voiceAudio1;
    }
  }
  const editMetadata9 = editMetadata.editMetadata;
  if (editMetadata9 != null) {
    soundboardAudio = editMetadata9.soundboardAudio;
  }
  const editMetadata10 = isFavorite.editMetadata;
  let soundboardAudio1;
  if (editMetadata10 != null) {
    soundboardAudio1 = editMetadata10.soundboardAudio;
  }
  tmp27 = undefined;
  if (null != soundboardAudio1) {
    if (!isEqualDefault(soundboardAudio1, soundboardAudio)) {
      tmp27 = soundboardAudio1;
    }
  }
  const editMetadata11 = editMetadata.editMetadata;
  if (editMetadata11 != null) {
    const crop = editMetadata11.crop;
    if (crop != null) {
      preset = crop.preset;
    }
  }
  const editMetadata12 = isFavorite.editMetadata;
  let preset1;
  if (editMetadata12 != null) {
    const crop2 = editMetadata12.crop;
    if (crop2 != null) {
      preset1 = crop2.preset;
    }
  }
  tmp31 = undefined;
  if (null != preset1) {
    if (!isEqualDefault(preset1, preset)) {
      tmp31 = preset1;
    }
  }
  const values = Object.values(obj);
  if (!values.every((item) => null == item)) {
    const obj2 = { clip_runtime, current_clip_session_id: id };
    const track = AnalyticsUtilsDefault.track;
    const CLIP_EDITED = AnalyticEvents.CLIP_EDITED;
    AnalyticsUtilsDefault;
    const activeClipsSession = ClipsStore.getActiveClipsSession();
    id = undefined;
    if (activeClipsSession != null) {
      id = activeClipsSession.id;
    }
    const obj3 = { clip_uuid: editMetadata.id };
    const merged = Object.assign(obj2);
    const merged1 = Object.assign(obj);
    track(CLIP_EDITED, obj3);
  }
};