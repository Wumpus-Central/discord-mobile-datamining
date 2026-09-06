// discord_app/modules/screen_recording/native/ScreenRecordingStore.tsx
import ScreenRecordingUtils from "ScreenRecordingUtils.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingStore.tsx");

export const useScreenRecordingStore = module_560.create((arg0, arg1) => {
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
      return closure_0({ isRecording: true, microphoneEnabled: flag, currentSurveyId: tmp, currentSurveyConfig: tmp2, stepStartedTime: Date.now() });
    },
    stopRecording() {
      return closure_0({ isRecording: false, microphoneEnabled: false, currentStep: 0, stepStartedTime: null, isCompleted: false });
    },
    setIsUploading(isUploading) {
      return closure_0({ isUploading });
    },
    nextStep() {
      const tmp = closure_1();
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
        obj = { currentStep: sum, stepStartedTime: null };
        const _Date = Date;
        obj.stepStartedTime = Date.now();
      }
      closure_0(obj);
    },
    resetActionSheet() {
      return closure_0({ currentStep: 0, stepStartedTime: Date.now(), isCompleted: false });
    },
    completeActionSheet() {
      ScreenRecordingUtils.handleStopAndSend();
      closure_0({ currentStep: 0, stepStartedTime: null, isCompleted: false });
    }
  };
});