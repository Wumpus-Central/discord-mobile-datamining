// discord_app/modules/screen_recording/native/ScreenRecordingManager.ios.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

const DCDScreenRecordingManager = get_ActivityIndicator.NativeModules.DCDScreenRecordingManager;
const result = obj132.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingManager.ios.tsx");

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
  setRecordingQuality(arg0) {
    return DCDScreenRecordingManager.setRecordingQuality(arg0);
  },
  getRecordingQuality() {
    return DCDScreenRecordingManager.getRecordingQuality();
  }
};