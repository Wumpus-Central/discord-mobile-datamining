// discord_app/modules/clips/ClipAnalyticsUtils.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import StreamKeyUtils from "../go_live/utils/StreamKeyUtils.tsx";
import _modDef4758 from "../../../_runtime/metro/04758__.js";
import VideoQualityStats from "../../lib/VideoQualityStats.tsx";
import ApplicationStreamingSettingsStore from "../../stores/ApplicationStreamingSettingsStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import StreamRTCConnectionStore from "../../stores/StreamRTCConnectionStore.tsx";
import ClipsStore from "ClipsStore.tsx";

require = fn;
function getClipSignalTypes(arg0) {
  const items = [];
  const iter = arg0.timeline[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let type = nextResult.signal.type;
    if (constants.MANUAL === type) {
      let arr = items.push("manual");
    } else if (constants.DISTRIBUTED === type) {
      let arr6 = items.push("distributed");
    } else if (constants.LAUGHTER === type) {
      let arr7 = items.push("laughter");
    } else if (constants.SHOUTING === type) {
      let arr8 = items.push("shouting");
    } else if (constants.GAME_EVENT === type) {
      let _HermesInternal = HermesInternal;
      let arr9 = items.push("game_event:" + tmp2.signal.eventType);
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
  let num3 = map.get(VideoQualityStats.Encoders.NVIDIA_DIRECT_3D);
  if (num3 == null) {
    num3 = 0;
  }
  obj.frames_encoded_nvidia_direct3d = num3;
  let num4 = map.get(VideoQualityStats.Encoders.OPENH264);
  if (num4 == null) {
    num4 = 0;
  }
  obj.frames_encoded_openh264 = num4;
  let num5 = map.get(VideoQualityStats.Encoders.VIDEOTOOLBOX);
  if (num5 == null) {
    num5 = 0;
  }
  obj.frames_encoded_videotoolbox = num5;
  let num6 = map.get(VideoQualityStats.Encoders.AMD_DIRECT_3D);
  if (num6 == null) {
    num6 = 0;
  }
  obj.frames_encoded_amd_direct3d = num6;
  let num7 = map.get(VideoQualityStats.Encoders.AMD_VAAPI);
  if (num7 == null) {
    num7 = 0;
  }
  obj.frames_encoded_amd_vaapi = num7;
  let num8 = map.get(VideoQualityStats.Encoders.INTEL);
  if (num8 == null) {
    num8 = 0;
  }
  obj.frames_encoded_intel = num8;
  let num9 = map.get(VideoQualityStats.Encoders.INTEL_DIRECT_3D);
  if (num9 == null) {
    num9 = 0;
  }
  obj.frames_encoded_intel_direct3d = num9;
  let num10 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_INTEL);
  if (num10 == null) {
    num10 = 0;
  }
  obj.frames_encoded_wmf_direct3d_intel = num10;
  let num11 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_NVIDIA);
  if (num11 == null) {
    num11 = 0;
  }
  obj.frames_encoded_wmf_direct3d_nvidia = num11;
  let num12 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_AMD);
  if (num12 == null) {
    num12 = 0;
  }
  obj.frames_encoded_wmf_direct3d_amd = num12;
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
  const sum1 = sum + num15;
  let num16 = map.get(VideoQualityStats.Encoders.WMF_DIRECT_3D_AMD);
  if (num16 == null) {
    num16 = 0;
  }
  obj.frames_encoded_wmf_direct3d = sum1 + num16;
  let num17 = map.get(VideoQualityStats.Encoders.UNCATEGORIZED);
  if (num17 == null) {
    num17 = 0;
  }
  obj.frames_encoded_uncategorized = num17;
  let num18 = map.get(VideoQualityStats.Encoders.UNKNOWN);
  if (num18 == null) {
    num18 = 0;
  }
  obj.frames_encoded_unknown = num18;
  ({
    framesSubmitted: obj2.frames_submitted,
    framesSubmittedDuringClip: obj2.frames_submitted_during_clip,
    framesEncoded: obj2.frames_encoded,
    framesEncodedDuringClip: obj2.frames_encoded_during_clip,
    framesDropped: obj2.frames_dropped,
    framesDroppedDuringClip: obj2.frames_dropped_during_clip,
  } = framesEncodedByEncoder);
  obj.clip_duration_setting = ClipsStore.getSettings().clipsLength;
  ({
    clipDuration: obj2.clip_duration,
    clipResolutionWidth: obj2.clip_resolution_width,
    clipResolutionHeight: obj2.clip_resolution_height,
    minFps: obj2.min_fps,
    maxFps: obj2.max_fps,
    submittedFps: obj2.submitted_fps,
  } = framesEncodedByEncoder);
  obj.target_fps = ApplicationStreamingSettingsStore.getState().fps;
  ({ audioTrackCount: obj2.audio_track_count, savedAt: obj2.saved_at } = framesEncodedByEncoder);
  return obj;
}
const ClipsConstants = fn(5216);
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
  } else if (constants.DISTRIBUTED === type) {
    return "distributed";
  } else {
    if (constants.LAUGHTER !== type) {
      if (constants.SHOUTING !== type) {
        if (constants.GAME_EVENT !== type) {
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
    if (constants.DISTRIBUTED !== type) {
      if (constants.LAUGHTER !== type) {
        if (constants.SHOUTING !== type) {
          str = "unknown";
        }
      }
      str = "auto_ml";
    }
  }
  return {
    clip_type: str,
    num_clip_participants: clip.users.length,
    clip_session_id: clip.gameSessionId,
    is_candidate: clip.isCandidate,
  };
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
    rTCConnection = StreamRTCConnectionStore.getRTCConnection(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
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
    if (constants.DISTRIBUTED !== type) {
      if (constants.LAUGHTER !== type) {
        if (constants.SHOUTING !== type) {
          str = "unknown";
        }
      }
      str = "auto_ml";
    }
  }
  const obj3 = {};
  const merged = Object.assign({
    clip_type: str,
    num_clip_participants: decision.users.length,
    clip_session_id: decision.gameSessionId,
    is_candidate: decision.isCandidate,
  });
  const obj7 = { clip_runtime, current_clip_session_id: null };
  const currentClipsSession = ClipsStore.getCurrentClipsSession();
  let id;
  if (currentClipsSession != null) {
    id = currentClipsSession.id;
  }
  obj7.current_clip_session_id = id;
  const merged1 = Object.assign(obj7);
  let rTCConnectionId;
  if (rTCConnection != null) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  obj3.rtc_connection_id = rTCConnectionId;
  let mediaSessionId;
  if (rTCConnection != null) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  obj3.media_session_id = mediaSessionId;
  obj3.parent_media_session_id = RTCConnectionStore.getMediaSessionId();
  ({
    guildId: obj2.guild_id,
    channelId: obj2.channel_id,
    applicationId: obj2.application_id,
    applicationName: obj2.application_name,
    id: obj2.clip_uuid,
  } = decision);
  obj3.clip_event_timeline_size = decision.timeline.length;
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
  isFavorite = isFavorite.isFavorite;
  let tmp2;
  if (null != isFavorite) {
    if (!_modDef4758(isFavorite, tmp)) {
      tmp2 = isFavorite;
    }
  }
  const obj = {
    is_favorite: tmp2,
    title_length: null,
    edit_start_time: null,
    edit_end_time: null,
    application_audio_enabled: null,
    voice_audio_enabled: null,
    soundboard_audio_enabled: null,
    crop: null,
  };
  const name = isFavorite.name;
  let tmp6;
  if (null != name) {
    if (!_modDef4758(name, tmp5)) {
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
    const start = editMetadata.start;
  }
  const editMetadata2 = isFavorite.editMetadata;
  let start1;
  if (editMetadata2 != null) {
    start1 = editMetadata2.start;
  }
  let tmp11;
  if (null != start1) {
    if (!_modDef4758(start1, start)) {
      tmp11 = start1;
    }
  }
  obj.edit_start_time = tmp11;
  const editMetadata3 = editMetadata.editMetadata;
  if (editMetadata3 != null) {
    const end = editMetadata3.end;
  }
  const editMetadata4 = isFavorite.editMetadata;
  let end1;
  if (editMetadata4 != null) {
    end1 = editMetadata4.end;
  }
  let tmp15;
  if (null != end1) {
    if (!_modDef4758(end1, end)) {
      tmp15 = end1;
    }
  }
  obj.edit_end_time = tmp15;
  const editMetadata5 = editMetadata.editMetadata;
  if (editMetadata5 != null) {
    const applicationAudio = editMetadata5.applicationAudio;
  }
  const editMetadata6 = isFavorite.editMetadata;
  let applicationAudio1;
  if (editMetadata6 != null) {
    applicationAudio1 = editMetadata6.applicationAudio;
  }
  let tmp19;
  if (null != applicationAudio1) {
    if (!_modDef4758(applicationAudio1, applicationAudio)) {
      tmp19 = applicationAudio1;
    }
  }
  obj.application_audio_enabled = tmp19;
  const editMetadata7 = editMetadata.editMetadata;
  if (editMetadata7 != null) {
    const voiceAudio = editMetadata7.voiceAudio;
  }
  const editMetadata8 = isFavorite.editMetadata;
  let voiceAudio1;
  if (editMetadata8 != null) {
    voiceAudio1 = editMetadata8.voiceAudio;
  }
  let tmp23;
  if (null != voiceAudio1) {
    if (!_modDef4758(voiceAudio1, voiceAudio)) {
      tmp23 = voiceAudio1;
    }
  }
  obj.voice_audio_enabled = tmp23;
  const editMetadata9 = editMetadata.editMetadata;
  if (editMetadata9 != null) {
    const soundboardAudio = editMetadata9.soundboardAudio;
  }
  const editMetadata10 = isFavorite.editMetadata;
  let soundboardAudio1;
  if (editMetadata10 != null) {
    soundboardAudio1 = editMetadata10.soundboardAudio;
  }
  let tmp27;
  if (null != soundboardAudio1) {
    if (!_modDef4758(soundboardAudio1, soundboardAudio)) {
      tmp27 = soundboardAudio1;
    }
  }
  obj.soundboard_audio_enabled = tmp27;
  const editMetadata11 = editMetadata.editMetadata;
  if (editMetadata11 != null) {
    const crop = editMetadata11.crop;
    if (crop != null) {
      const preset = crop.preset;
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
  let tmp31;
  if (null != preset1) {
    if (!_modDef4758(preset1, preset)) {
      tmp31 = preset1;
    }
  }
  obj.crop = tmp31;
  const values = Object.values(obj);
  if (!values.every((item) => null == item)) {
    const obj2 = { clip_runtime, current_clip_session_id: null };
    const currentClipsSession = ClipsStore.getCurrentClipsSession();
    let id;
    if (currentClipsSession != null) {
      id = currentClipsSession.id;
    }
    const obj4 = {};
    obj2.current_clip_session_id = id;
    const merged = Object.assign(obj2);
    obj4.clip_uuid = editMetadata.id;
    const merged1 = Object.assign(obj);
    AnalyticsUtilsDefault.track(AnalyticEvents.CLIP_EDITED, obj4);
  }
};
