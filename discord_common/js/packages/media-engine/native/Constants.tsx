// === Module 4546: AudioSubsystems ===

// Module 4546 (AudioSubsystems)
import set from "set" /* 2 */;
import DesktopSources from "DesktopSources" /* 4509 */;

const InputModes = DesktopSources.InputModes;
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/Constants.tsx");

export const AudioSubsystems = DesktopSources.AudioSubsystems;
export const DeviceTypes = DesktopSources.DeviceTypes;
export const InputModes = DesktopSources.InputModes;
export const ConnectionStates = DesktopSources.ConnectionStates;
export const SpeakingFlags = DesktopSources.SpeakingFlags;
export const DEFAULT_VOLUME = DesktopSources.DEFAULT_VOLUME;
export const DEFAULT_STREAM_VOLUME = DesktopSources.DEFAULT_STREAM_VOLUME;
export const DEFAULT_VOICE_BITRATE = DesktopSources.DEFAULT_VOICE_BITRATE;
export const DEFAULT_SOUNDSHARE_VOICE_BITRATE = DesktopSources.DEFAULT_SOUNDSHARE_VOICE_BITRATE;
export const DEFAULT_CALL_BITRATE = DesktopSources.DEFAULT_CALL_BITRATE;
export const DEFAULT_CALL_MIN_BITRATE = DesktopSources.DEFAULT_CALL_MIN_BITRATE;
export const DEFAULT_CALL_MAX_BITRATE = DesktopSources.DEFAULT_CALL_MAX_BITRATE;
export const DEFAULT_DEVICE_ID = DesktopSources.DEFAULT_DEVICE_ID;
export const DISABLED_DEVICE_ID = DesktopSources.DISABLED_DEVICE_ID;
export const DEFAULT_PRIORITY_SPEAKER_DUCKING = DesktopSources.DEFAULT_PRIORITY_SPEAKER_DUCKING;
export const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
export const Codecs = DesktopSources.Codecs;
export const Features = DesktopSources.Features;
export const MediaTypes = DesktopSources.MediaTypes;
export const NoiseCancellerError = DesktopSources.NoiseCancellerError;
export const ResolutionTypes = DesktopSources.ResolutionTypes;
export const PING_INTERVAL = DesktopSources.PING_INTERVAL;
export const VIDEO_QUALITY_LOW_WIDTH = DesktopSources.VIDEO_QUALITY_LOW_WIDTH;
export const VIDEO_QUALITY_LOW_HEIGHT = DesktopSources.VIDEO_QUALITY_LOW_HEIGHT;
export const VIDEO_QUALITY_LOW_MIN_BITRATE = DesktopSources.VIDEO_QUALITY_LOW_MIN_BITRATE;
export const VIDEO_QUALITY_LOW_MAX_BITRATE = DesktopSources.VIDEO_QUALITY_LOW_MAX_BITRATE;
export const WATCHDOG_TIMEOUT_MS = 30000;
export const NATIVE_MODE_VALUES = { [InputModes.VOICE_ACTIVITY]: 1, [InputModes.PUSH_TO_TALK]: 2 };
export const NativeFeatures = { VOICE_SOUND_STOP_LOOP: "voice_sound_stop_loop", VOICE_RELATIVE_SOUNDS: "voice_relative_sounds", VOICE_LEGACY_SUBSYSTEM: "voice_legacy_subsystem", VOICE_EXPERIMENTAL_SUBSYSTEM: "voice_experimental_subsystem", VOICE_AUTOMATIC_SUBSYSTEM: "voice_automatic_subsystem", VOICE_SUBSYSTEM_DEFERRED_SWITCH: "voice_subsystem_deferred_switch", VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING: "voice_bypass_system_audio_input_processing", ELEVATED_HOOK: "elevated_hook", DEBUG_LOGGING: "debug_logging", SOUNDSHARE: "soundshare", SOUNDSHARE_LOOPBACK: "soundshare_loopback", SET_AUDIO_DEVICE_BY_ID: "set_audio_device_by_id", SET_VIDEO_DEVICE_BY_ID: "set_video_device_by_id", LOOPBACK: "loopback", WUMPUS_VIDEO: "wumpus_video", HYBRID_VIDEO: "hybrid_video", EXPERIMENT_CONFIG: "experiment_config", REMOTE_LOCUS_NETWORK_CONTROL: "remote_locus_network_control", SCREEN_PREVIEWS: "screen_previews", WINDOW_PREVIEWS: "window_previews", AUDIO_DEBUG_STATE: "audio_debug_state", CONNECTION_REPLAY: "connection_replay", SIMULCAST: "simulcast", SIMULCAST_BUGFIX: "simulcast_bugfix", RTC_REGION_RANKING: "RTC_REGION_RANKING", VIDEO_EFFECTS: "video_effects", ELECTRON_VIDEO: "electron_video", MEDIAPIPE: "mediapipe", VIDEO_BACKGROUND_FILTER: "video_background_filter", FIXED_KEYFRAME_INTERVAL: "fixed_keyframe_interval", FIRST_FRAME_CALLBACK: "first_frame_callback", REMOTE_USER_MULTI_STREAM: "remote_user_multi_stream", CLIPS: "clips", CLIPS_THUMBNAIL: "clips_thumbnail", CLIPS_RECORDING_READY_EVENTS: "clips_recording_ready_events", GO_LIVE_HARDWARE: "go_live_hardware", IMAGE_QUALITY_MEASUREMENT: "image_quality_measurement", SCREEN_CAPTURE_KIT: "screen_capture_kit", SCREEN_SOUNDSHARE: "screen_soundshare", NATIVE_SCREENSHARE_PICKER: "native_screenshare_picker", MLS_PAIRWISE_FINGERPRINTS: "mls_pairwise_fingerprints", OFFLOAD_ADM_CONTROLS: "offload_adm_controls", AUDIO_CODEC_RED: "audio_codec_red", SIDECHAIN_COMPRESSION: "sidechain_compression", VAAPI: "vaapi", GAMESCOPE_CAPTURE: "gamescope_capture", ASYNC_VIDEO_INPUT_DEVICE_INIT: "async_video_input_device_init", PORT_AWARE_LATENCY_TESTING: "port_aware_latency_testing", SPATIAL_AUDIO: "spatial_audio", KRISP_NATIVE_ERROR: "krisp_native_error", UDP_ENDPOINT_UPDATE: "udp_endpoint_update" };
export const ClipsRecordingEvent = { Started: 0, [0]: "Started", Ended: 1, [1]: "Ended", Error: 2, [2]: "Error", TransferredToVoiceCall: 3, [3]: "TransferredToVoiceCall", TransferredToGoLive: 4, [4]: "TransferredToGoLive", StoppedByGoLive: 5, [5]: "StoppedByGoLive", BlockedByGoLive: 6, [6]: "BlockedByGoLive", GoLiveEnded: 7, [7]: "GoLiveEnded", IdleShutdown: 8, [8]: "IdleShutdown", RecordingHealthy: 9, [9]: "RecordingHealthy", RecordingActive: 10, [10]: "RecordingActive", RecordingInactive: 11, [11]: "RecordingInactive" };