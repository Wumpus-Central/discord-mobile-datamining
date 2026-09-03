// discord_common/js/packages/media-engine/MediaEngineEvent.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/MediaEngineEvent.tsx");

export const MediaEngineEvent = {
  Destroy: "destroy",
  Silence: "silence",
  Connection: "connection",
  DeviceChange: "devicechange",
  VolumeChange: "volumechange",
  VoiceActivity: "voiceactivity",
  WatchdogTimeout: "watchdogtimeout",
  AudioPermission: "audio-permission",
  VideoPermission: "video-permission",
  DesktopSourceEnd: "desktopsourceend",
  ConnectionStats: "connection-stats",
  VideoInputInitialized: "video-input-initialized",
  AudioInputInitialized: "audio-input-initialized",
  ClipsRecordingRestartNeeded: "clips-recording-restart-needed",
  ClipsInitFailure: "clips-init-failure",
  ClipsRecordingEnded: "clips-recording-ended",
  ClipsBridgeIdleShutdown: "clips-bridge-idle-shutdown",
  ClipsRecordingHealthy: "clips-recording-healthy",
  ClipsRecordingReadyChanged: "clips-recording-ready-changed",
  ClipsMlDetection: "clips-ml-detection",
  NativeScreenSharePickerUpdate: "native-screenshare-picker-updated",
  NativeScreenSharePickerCancel: "native-screenshare-picker-cancelled",
  NativeScreenSharePickerError: "native-screenshare-picker-error",
  AudioDeviceModuleError: "audio-device-module-error",
  VideoCodecError: "video-codec-error",
  VoiceProcessingError: "voice-processing-error",
  VideoFilterError: "video-filter-error",
  VoiceQueueMetrics: "voice-queue-metrics",
  SystemMicrophoneModeChange: "system-microphone-mode-change",
  SelectedDeviceChange: "selected-device-change",
  SpatialAudioStatus: "spatial-audio-status",
};
