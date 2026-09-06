// discord_app/modules/screen_recording/native/ScreenRecordingManager.ios.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import size from "../../../../_runtime/metro/00002__.js";

const DCDScreenRecordingManager = _mod17.NativeModules.DCDScreenRecordingManager;
const result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingManager.ios.tsx");

export default {
  requestPermissions() {
    return DCDScreenRecordingManager.requestPermissions();
  },
  startRecording() {
    return DCDScreenRecordingManager.startRecording();
  },
  stopRecording() {
    return DCDScreenRecordingManager.stopRecording();
  },
  isRecording() {
    return DCDScreenRecordingManager.isRecording();
  },
  getLatestRecording() {
    return DCDScreenRecordingManager.getLatestRecording();
  },
  setRecordingQuality(size) {
    return DCDScreenRecordingManager.setRecordingQuality(size);
  },
  getRecordingQuality() {
    return DCDScreenRecordingManager.getRecordingQuality();
  },
};
