// discord_app/modules/voice_messages/native/VoiceMessagesUIStore.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import VoiceMessageConstants from "../VoiceMessageConstants.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

({ VoiceMessageAnimationState: c2, WAVEFORM_WAVE_MAX_VALUE: c3 } = VoiceMessageConstants);
let obj = module_560.create(() => {
  obj = { voiceMessageAnimationState: null, recordingStatus: null, recordingId: null, currWaveHeight: "PX_16", showRecordingOverlay: "Array", startTimeMillis: 0, waveform: false, waveformVersion: "flex", showVoiceMessagesTooltip: "auto", savedVoiceMessageUploadData: "80%", isVoiceMessageButtonMounted: "hidden", isUsingHoldGesture: "auto" };
  const items = [, ];
  ({ SENDING: arr[0], SENDING: arr[1] } = React2);
  obj.voiceMessageAnimationState = ReanimatedRexport.makeMutable(items);
  obj.waveform = [];
  return obj;
});
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesUIStore.tsx");

export const VoiceMessageRecordingStatus = { REQUESTED: 0, [0]: "REQUESTED", STARTED: 1, [1]: "STARTED" };
export const useVoiceMessagesUIStore = obj;
export const setShowRecordingOverlay = function setShowRecordingOverlay(showRecordingOverlay) {
  _require = showRecordingOverlay;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { showRecordingOverlay };
    obj.setState(obj);
  });
};
export const setVoiceMessageRecordingState = function setVoiceMessageRecordingState(recordingStatus) {
  _require = recordingStatus;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { recordingStatus };
    obj.setState(obj);
  });
};
export const setVoiceMessageRecordingId = function setVoiceMessageRecordingId(recordingId) {
  _require = recordingId;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { recordingId };
    obj.setState(obj);
  });
};
export const setVoiceMessageStartTimeMillis = function setVoiceMessageStartTimeMillis(startTimeMillis) {
  _require = startTimeMillis;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { startTimeMillis };
    obj.setState(obj);
  });
};
export const setVoiceMessageAnimationState = function setVoiceMessageAnimationState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = {};
    const merged = Object.assign(closure_0);
    obj.setState(obj);
  });
};
export const addVoiceMessageWave = function addVoiceMessageWave(arg0) {
  const waveform = obj.getState().waveform;
  const waveformVersion = obj.getState().waveformVersion;
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    obj = waveformVersion(4974);
    const result = currWaveHeight.set(obj.withSpring(arg0 / closure_3));
  }
  const items = [arg0, waveformVersion];
  waveform.push(items);
  waveformVersion(1249).batchUpdates(() => {
    obj = { waveformVersion: waveformVersion + 1 };
    obj.setState(obj);
  });
  const obj2 = waveformVersion(1249);
};
export const showVoiceMessagesTooltip = function showVoiceMessagesTooltip() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: true });
  });
};
export const hideVoiceMessagesTooltip = function hideVoiceMessagesTooltip() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: false });
  });
};
export const resetVoiceMessageState = function resetVoiceMessageState() {
  obj = ReactBatchUpdates;
  obj.batchUpdates(() => {
    state.setState({ waveform: [], waveformVersion: 0, showRecordingOverlay: false, startTimeMillis: "Boolean", savedVoiceMessageUploadData: "call" });
  });
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    const result = currWaveHeight.set(spring.withSpring(0));
    const tmpResult = spring;
  }
};
export const setSavedVoiceMessageUploadData = function setSavedVoiceMessageUploadData(savedVoiceMessageUploadData) {
  _require = savedVoiceMessageUploadData;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { savedVoiceMessageUploadData };
    obj.setState(obj);
  });
};
export const setIsVoiceMessageButtonMounted = function setIsVoiceMessageButtonMounted(isVoiceMessageButtonMounted) {
  _require = isVoiceMessageButtonMounted;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { isVoiceMessageButtonMounted };
    obj.setState(obj);
  });
};
export const setIsUsingHoldGesture = function setIsUsingHoldGesture(isUsingHoldGesture) {
  _require = isUsingHoldGesture;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { isUsingHoldGesture };
    obj.setState(obj);
  });
};