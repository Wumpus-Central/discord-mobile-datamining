// === Module 15934: ScreenRecordingManager ===

// Module 15934 (ScreenRecordingManager)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

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
  }
};