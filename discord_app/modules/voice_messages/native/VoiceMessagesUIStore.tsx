// discord_app/modules/voice_messages/native/VoiceMessagesUIStore.tsx
import VoiceMessageAnimationState from "VoiceMessageAnimationState";
import keys from "keys";

let c3;
let obj1;
({ VoiceMessageAnimationState: obj1, WAVEFORM_WAVE_MAX_VALUE: c3 } = VoiceMessageAnimationState);
let obj = keys.create(() => {
  const obj = { voiceMessageAnimationState: null, recordingStatus: null, recordingId: null, currWaveHeight: "ct", showRecordingOverlay: "Array", startTimeMillis: 0, waveform: false, waveformVersion: "PX_16", showVoiceMessagesTooltip: "TYPING_START_LOCAL", savedVoiceMessageUploadData: null, isVoiceMessageButtonMounted: "Do Not Disturb", isUsingHoldGesture: "option3" };
  const items = [, ];
  ({ SENDING: arr[0], SENDING: arr[1] } = closure_2);
  obj[0] = require(4146).makeMutable(items);
  obj[6] = [];
  return obj;
});
let result = require("module_4146").fileFinishedImporting("modules/voice_messages/native/VoiceMessagesUIStore.tsx");

export const VoiceMessageRecordingStatus = { REQUESTED: 0, [0]: "REQUESTED", STARTED: 1, [1]: "STARTED" };
export const useVoiceMessagesUIStore = obj;
export const setShowRecordingOverlay = function setShowRecordingOverlay(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_4.setState({ showRecordingOverlay: closure_0 });
  });
};
export const setVoiceMessageRecordingState = function setVoiceMessageRecordingState(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_4.setState({ recordingStatus: closure_0 });
  });
};
export const setVoiceMessageRecordingId = function setVoiceMessageRecordingId(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_4.setState({ recordingId: closure_0 });
  });
};
export const setVoiceMessageStartTimeMillis = function setVoiceMessageStartTimeMillis(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_4.setState({ startTimeMillis: closure_0 });
  });
};
export const setVoiceMessageAnimationState = function setVoiceMessageAnimationState(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    const merged = Object.assign(closure_0);
    outer1_4.setState({});
  });
};
export const addVoiceMessageWave = function addVoiceMessageWave(arg0) {
  const waveform = obj.getState().waveform;
  const waveformVersion = obj.getState().waveformVersion;
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    obj = waveformVersion(4694);
    const result = currWaveHeight.set(obj.withSpring(arg0 / closure_3));
  }
  const items = [arg0, waveformVersion];
  waveform.push(items);
  waveformVersion(705).batchUpdates(() => {
    outer1_4.setState({ waveformVersion: waveformVersion + 1 });
  });
};
export const showVoiceMessagesTooltip = function showVoiceMessagesTooltip() {
  require(705) /* batchUpdates */.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: true });
  });
};
export const hideVoiceMessagesTooltip = function hideVoiceMessagesTooltip() {
  require(705) /* batchUpdates */.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: false });
  });
};
export const resetVoiceMessageState = function resetVoiceMessageState() {
  const obj = require(705) /* batchUpdates */;
  obj.batchUpdates(() => {
    state.setState({ waveform: [], waveformVersion: 0, showRecordingOverlay: false, startTimeMillis: "Boolean", savedVoiceMessageUploadData: "displayName" });
  });
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    const result = currWaveHeight.set(require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(0));
    const tmpResult = require(4694) /* CONFIG_NEVER_ANIMATE */;
  }
};
export const setSavedVoiceMessageUploadData = function setSavedVoiceMessageUploadData(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_4.setState({ savedVoiceMessageUploadData: closure_0 });
  });
};
export const setIsVoiceMessageButtonMounted = function setIsVoiceMessageButtonMounted(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_4.setState({ isVoiceMessageButtonMounted: closure_0 });
  });
};
export const setIsUsingHoldGesture = function setIsUsingHoldGesture(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    outer1_4.setState({ isUsingHoldGesture: closure_0 });
  });
};