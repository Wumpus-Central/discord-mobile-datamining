// === Module 15199: useScreenRecordingStore ===

// Module 15199 (useScreenRecordingStore)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return {
    isRecording: false,
    microphoneEnabled: false,
    isUploading: false,
    currentStep: 0,
    stepStartedTime: null,
    isCompleted: false,
    currentSurveyId: null,
    currentSurveyConfig: null,
    startRecording() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = null;
      }
      let tmp2 = arg2;
      if (arg2 === undefined) {
        tmp2 = null;
      }
      return callback({ isRecording: true, microphoneEnabled: flag, currentSurveyId: tmp, currentSurveyConfig: tmp2, stepStartedTime: Date.now() });
    },
    stopRecording() {
      return callback({ isRecording: false, microphoneEnabled: false, currentStep: 0, stepStartedTime: null, isCompleted: false });
    },
    setIsUploading(isUploading) {
      return callback({ isUploading });
    },
    nextStep() {
      const tmp = dependencyMap();
      const sum = tmp.currentStep + 1;
      const currentSurveyConfig = tmp.currentSurveyConfig;
      let steps;
      if (currentSurveyConfig != null) {
        steps = currentSurveyConfig.steps;
      }
      if (steps == null) {
        steps = [];
      }
      if (sum >= steps.length) {
        let obj = { isCompleted: true };
      } else {
        obj = { currentStep: null, stepStartedTime: null };
        obj[0] = sum;
        const _Date = Date;
        obj[1] = Date.now();
      }
      closure_0(obj);
    },
    resetActionSheet() {
      return callback({ currentStep: 0, stepStartedTime: Date.now(), isCompleted: false });
    },
    completeActionSheet() {
      callback(15200).handleStopAndSend();
      callback({ currentStep: 0, stepStartedTime: null, isCompleted: false });
    }
  };
});
const result = set.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingStore.tsx");

export const useScreenRecordingStore = obj;