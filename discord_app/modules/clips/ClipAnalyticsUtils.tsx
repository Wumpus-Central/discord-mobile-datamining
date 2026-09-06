// === Module 7740: ClipAnalyticsUtils ===

// Module 7740 (ClipAnalyticsUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import _modDef4679 from "module_4679" /* 4679 */;
import VideoQualityStats from "VideoQualityStats" /* 7741 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4606 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;
import ClipsStore from "ClipsStore" /* 1914 */;

require = fn;
function getClipSignalTypes(arg0) {
  const items = [];
  const iter = arg0.timeline[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let type = nextResult.signal.type;
    let tmp3 = constants;
    if (constants.MANUAL === type) {
      let arr = items.push("manual");
    } else if (tmp3.DISTRIBUTED === type) {
      arr = items.push("distributed");
    } else if (tmp3.LAUGHTER === type) {
      let arr1 = items.push("laughter");
    } else if (tmp3.SHOUTING === type) {
      let arr2 = items.push("shouting");
    } else if (tmp3.GAME_EVENT === type) {
      let _HermesInternal = HermesInternal;
      let arr3 = items.push("game_event:" + tmp2.signal.eventType);
    }
    continue;
  }
  return items;
}
function getPostSaveClipAnalytics(arg0, framesEncodedByEncoder) {
  const map = new Map();
  for (const key10011 in arg1.framesEncodedByEncoder) {
    let obj3 = VideoQualityStats;
    let parseEncoderResult = obj3.parseEncoder(key10011);
    let num = map.get(parseEncoderResult);
    if (num == null) {
      num = 0;
    }
    let result = map.set(parseEncoderResult, num + arg1.framesEncodedByEncoder[key10011]);
    continue;
  }
  const obj = {};
  const merged = Object.assign(arg0);
  let num2 = map.get(VideoQualityStats.Encoders.NVIDIA_CUDA);
  if (num2 == null) {
    num2 = 0;
  }
  obj.frames_encoded_nvidia_cuda = num2;
  let num3 = map.get(tmp3(7741).Encoders.NVIDIA_DIRECT_3D);
  if (num3 == null) {
    num3 = 0;
  }
  obj.frames_encoded_nvidia_direct3d = num3;
  let num4 = map.get(tmp3(7741).Encoders.OPENH264);
  if (num4 == null) {
    num4 = 0;
  }
  obj.frames_encoded_openh264 = num4;
  let num5 = map.get(tmp3(7741).Encoders.VIDEOTOOLBOX);
  if (num5 == null) {
    num5 = 0;
  }
  obj.frames_encoded_videotoolbox = num5;
  let num6 = map.get(tmp3(7741).Encoders.AMD_DIRECT_3D);
  if (num6 == null) {
    num6 = 0;
  }
  obj.frames_encoded_amd_direct3d = num6;
  let num7 = map.get(tmp3(7741).Encoders.AMD_VAAPI);
  if (num7 == null) {
    num7 = 0;
  }
  obj.frames_encoded_amd_vaapi = num7;
  let num8 = map.get(tmp3(7741).Encoders.INTEL);
  if (num8 == null) {
    num8 = 0;
  }
  obj.frames_encoded_intel = num8;
  let num9 = map.get(tmp3(7741).Encoders.INTEL_DIRECT_3D);
  if (num9 == null) {
    num9 = 0;
  }
  obj.frames_encoded_intel_direct3d = num9;
  let num10 = map.get(tmp3(7741).Encoders.WMF_DIRECT_3D_INTEL);
  if (num10 == null) {
    num10 = 0;
  }
  obj.frames_encoded_wmf_direct3d_intel = num10;
  let num11 = map.get(tmp3(7741).Encoders.WMF_DIRECT_3D_NVIDIA);
  if (num11 == null) {
    num11 = 0;
  }
  obj.frames_encoded_wmf_direct3d_nvidia = num11;
  let num12 = map.get(tmp3(7741).Encoders.WMF_DIRECT_3D_AMD);
  if (num12 == null) {
    num12 = 0;
  }
  obj.frames_encoded_wmf_direct3d_amd = num12;
  let num13 = map.get(tmp3(7741).Encoders.WMF_DIRECT_3D);
  if (num13 == null) {
    num13 = 0;
  }
  let num14 = map.get(tmp3(7741).Encoders.WMF_DIRECT_3D_INTEL);
  if (num14 == null) {
    num14 = 0;
  }
  const sum = num13 + num14;
  let num15 = map.get(tmp3(7741).Encoders.WMF_DIRECT_3D_NVIDIA);
  if (num15 == null) {
    num15 = 0;
  }
  const sum1 = sum + num15;
  let num16 = map.get(tmp3(7741).Encoders.WMF_DIRECT_3D_AMD);
  if (num16 == null) {
    num16 = 0;
  }
  obj.frames_encoded_wmf_direct3d = sum1 + num16;
  let num17 = map.get(tmp3(7741).Encoders.UNCATEGORIZED);
  if (num17 == null) {
    num17 = 0;
  }
  obj.frames_encoded_uncategorized = num17;
  let num18 = map.get(tmp3(7741).Encoders.UNKNOWN);
  if (num18 == null) {
    num18 = 0;
  }
  obj.frames_encoded_unknown = num18;
  ({ framesSubmitted: obj2.frames_submitted, framesSubmittedDuringClip: obj2.frames_submitted_during_clip, framesEncoded: obj2.frames_encoded, framesEncodedDuringClip: obj2.frames_encoded_during_clip, framesDropped: obj2.frames_dropped, framesDroppedDuringClip: obj2.frames_dropped_during_clip } = framesEncodedByEncoder);
  obj.clip_duration_setting = ClipsStore.getSettings().clipsLength;
  ({ clipDuration: obj2.clip_duration, clipResolutionWidth: obj2.clip_resolution_width, clipResolutionHeight: obj2.clip_resolution_height, minFps: obj2.min_fps, maxFps: obj2.max_fps, submittedFps: obj2.submitted_fps } = framesEncodedByEncoder);
  obj.target_fps = ApplicationStreamingSettingsStore.getState().fps;
  ({ audioTrackCount: obj2.audio_track_count, savedAt: obj2.saved_at } = framesEncodedByEncoder);
  return obj;
}
const ClipsConstants = fn(5132);
({ ClipSignalTypes: closure_8, CLIP_RUNTIME: closure_9 } = ClipsConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
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
  if (constants.MANUAL === type) {
    return "manual";
  } else if (tmp2.DISTRIBUTED === type) {
    return "distributed";
  } else {
    if (tmp2.LAUGHTER !== type) {
      if (tmp2.SHOUTING !== type) {
        if (tmp2.GAME_EVENT !== type) {
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
  if (constants.MANUAL !== type) {
    str = "distributed";
    if (tmp2.DISTRIBUTED !== type) {
      if (tmp2.LAUGHTER !== type) {
        if (tmp2.SHOUTING !== type) {
          str = "unknown";
        }
      }
      str = "auto_ml";
    }
  }
  return { clip_type: str, num_clip_participants: clip.users.length, clip_session_id: clip.gameSessionId, is_candidate: clip.isCandidate };
};
export const getClipContextProperties = function getClipContextProperties() {
  const obj = { clip_runtime, current_clip_session_id: null };
  const currentClipsSession = ClipsStore.getCurrentClipsSession();
  let id;
  if (currentClipsSession != null) {
    id = currentClipsSession.id;
  }
  obj.current_clip_session_id = id;
  return obj;
};
export { getClipSignalTypes };
export const getPreSaveClipAnalytics = function getPreSaveClipAnalytics(decision) {
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  let rTCConnection = null;
  if (null != currentUserActiveStream) {
    let obj = StreamKeyUtils;
    rTCConnection = StreamRTCConnectionStore.getRTCConnection(obj.encodeStreamKey(currentUserActiveStream));
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
  if (constants.MANUAL !== type) {
    str = "distributed";
    if (tmp7.DISTRIBUTED !== type) {
      if (tmp7.LAUGHTER !== type) {
        if (tmp7.SHOUTING !== type) {
          str = "unknown";
        }
      }
      str = "auto_ml";
    }
  }
  obj = {};
  obj = { clip_type: str, num_clip_participants: decision.users.length, clip_session_id: decision.gameSessionId, is_candidate: decision.isCandidate };
  const merged = Object.assign(obj);
  const obj1 = { clip_runtime, current_clip_session_id: null };
  const currentClipsSession = ClipsStore.getCurrentClipsSession();
  let id;
  if (currentClipsSession != null) {
    id = currentClipsSession.id;
  }
  obj1.current_clip_session_id = id;
  const merged1 = Object.assign(obj1);
  let rTCConnectionId;
  if (rTCConnection != null) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  obj.rtc_connection_id = rTCConnectionId;
  let mediaSessionId;
  if (rTCConnection != null) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  obj.media_session_id = mediaSessionId;
  obj.parent_media_session_id = RTCConnectionStore.getMediaSessionId();
  ({ guildId: obj2.guild_id, channelId: obj2.channel_id, applicationId: obj2.application_id, applicationName: obj2.application_name, id: obj2.clip_uuid } = decision);
  obj.clip_event_timeline_size = decision.timeline.length;
  return obj;
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
  isFavorite = isFavorite.isFavorite;
  let tmp2;
  if (null != isFavorite) {
    if (!_modDef4679(isFavorite, tmp)) {
      tmp2 = isFavorite;
    }
  }
  let obj = { is_favorite: tmp2, title_length: null, edit_start_time: null, edit_end_time: null, application_audio_enabled: null, voice_audio_enabled: null, soundboard_audio_enabled: null, crop: null };
  const name = isFavorite.name;
  let tmp6;
  if (null != name) {
    if (!_modDef4679(name, tmp5)) {
      tmp6 = name;
    }
  }
  let length;
  if (tmp6 != null) {
    length = tmp6.length;
  }
  obj.title_length = length;
  editMetadata = editMetadata.editMetadata;
  if (editMetadata != null) {
    let start = editMetadata.start;
  }
  const editMetadata2 = isFavorite.editMetadata;
  start = undefined;
  if (editMetadata2 != null) {
    start = editMetadata2.start;
  }
  let tmp11;
  if (null != start) {
    if (!_modDef4679(start, start)) {
      tmp11 = start;
    }
  }
  obj.edit_start_time = tmp11;
  const editMetadata3 = editMetadata.editMetadata;
  if (editMetadata3 != null) {
    let end = editMetadata3.end;
  }
  const editMetadata4 = isFavorite.editMetadata;
  end = undefined;
  if (editMetadata4 != null) {
    end = editMetadata4.end;
  }
  let tmp15;
  if (null != end) {
    if (!_modDef4679(end, end)) {
      tmp15 = end;
    }
  }
  obj.edit_end_time = tmp15;
  const editMetadata5 = editMetadata.editMetadata;
  if (editMetadata5 != null) {
    let applicationAudio = editMetadata5.applicationAudio;
  }
  const editMetadata6 = isFavorite.editMetadata;
  applicationAudio = undefined;
  if (editMetadata6 != null) {
    applicationAudio = editMetadata6.applicationAudio;
  }
  let tmp19;
  if (null != applicationAudio) {
    if (!_modDef4679(applicationAudio, applicationAudio)) {
      tmp19 = applicationAudio;
    }
  }
  obj.application_audio_enabled = tmp19;
  const editMetadata7 = editMetadata.editMetadata;
  if (editMetadata7 != null) {
    let voiceAudio = editMetadata7.voiceAudio;
  }
  const editMetadata8 = isFavorite.editMetadata;
  voiceAudio = undefined;
  if (editMetadata8 != null) {
    voiceAudio = editMetadata8.voiceAudio;
  }
  let tmp23;
  if (null != voiceAudio) {
    if (!_modDef4679(voiceAudio, voiceAudio)) {
      tmp23 = voiceAudio;
    }
  }
  obj.voice_audio_enabled = tmp23;
  const editMetadata9 = editMetadata.editMetadata;
  if (editMetadata9 != null) {
    let soundboardAudio = editMetadata9.soundboardAudio;
  }
  const editMetadata10 = isFavorite.editMetadata;
  soundboardAudio = undefined;
  if (editMetadata10 != null) {
    soundboardAudio = editMetadata10.soundboardAudio;
  }
  let tmp27;
  if (null != soundboardAudio) {
    if (!_modDef4679(soundboardAudio, soundboardAudio)) {
      tmp27 = soundboardAudio;
    }
  }
  obj.soundboard_audio_enabled = tmp27;
  const editMetadata11 = editMetadata.editMetadata;
  if (editMetadata11 != null) {
    const crop = editMetadata11.crop;
    if (crop != null) {
      let preset = crop.preset;
    }
  }
  const editMetadata12 = isFavorite.editMetadata;
  preset = undefined;
  if (editMetadata12 != null) {
    const crop2 = editMetadata12.crop;
    if (crop2 != null) {
      preset = crop2.preset;
    }
  }
  let tmp31;
  if (null != preset) {
    if (!_modDef4679(preset, preset)) {
      tmp31 = preset;
    }
  }
  obj.crop = tmp31;
  const values = Object.values(obj);
  if (!values.every((item) => null == item)) {
    obj = { clip_runtime, current_clip_session_id: null };
    const currentClipsSession = ClipsStore.getCurrentClipsSession();
    let id;
    if (currentClipsSession != null) {
      id = currentClipsSession.id;
    }
    obj = { current_clip_session_id: id };
    const merged = Object.assign(obj);
    obj.clip_uuid = editMetadata.id;
    const merged1 = Object.assign(obj);
    AnalyticsUtilsDefault.track(AnalyticEvents.CLIP_EDITED, obj);
  }
};