// === Module 13675: VoiceMessagesUIStore ===

// Module 13675 (VoiceMessagesUIStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1260 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 13676 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ VoiceMessageAnimationState: c2, WAVEFORM_WAVE_MAX_VALUE: c3 } = VoiceMessageConstants);
let obj = module_560.create(() => {
  obj = { voiceMessageAnimationState: null, recordingStatus: null, recordingId: null, currWaveHeight: "flexDirection", showRecordingOverlay: "Array", startTimeMillis: 0, waveform: false, waveformVersion: "PX_8", showVoiceMessagesTooltip: "auto", savedVoiceMessageUploadData: "80%", isVoiceMessageButtonMounted: "hidden", isUsingHoldGesture: "<string:1170752494>" };
  const items = [, ];
  ({ SENDING: arr[0], SENDING: arr[1] } = React2);
  obj.voiceMessageAnimationState = ReanimatedRexport.makeMutable(items);
  obj.waveform = [];
  return obj;
});
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesUIStore.tsx");

export const VoiceMessageRecordingStatus = { REQUESTED: 0, [0]: "REQUESTED", STARTED: 1, [1]: "STARTED" };
export const useVoiceMessagesUIStore = obj;
export function setShowRecordingOverlay(showRecordingOverlay) {
  _require = showRecordingOverlay;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { showRecordingOverlay };
    obj.setState(obj);
  });
}
export function setVoiceMessageRecordingState(recordingStatus) {
  _require = recordingStatus;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { recordingStatus };
    obj.setState(obj);
  });
}
export function setVoiceMessageRecordingId(recordingId) {
  _require = recordingId;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { recordingId };
    obj.setState(obj);
  });
}
export function setVoiceMessageStartTimeMillis(startTimeMillis) {
  _require = startTimeMillis;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { startTimeMillis };
    obj.setState(obj);
  });
}
export function setVoiceMessageAnimationState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = {};
    const merged = Object.assign(closure_0);
    obj.setState(obj);
  });
}
export function addVoiceMessageWave(arg0) {
  const waveform = obj.getState().waveform;
  const waveformVersion = obj.getState().waveformVersion;
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    obj = waveformVersion(5632);
    const result = currWaveHeight.set(obj.withSpring(arg0 / closure_3));
  }
  const items = [arg0, waveformVersion];
  waveform.push(items);
  waveformVersion(1260).batchUpdates(() => {
    obj = { waveformVersion: waveformVersion + 1 };
    obj.setState(obj);
  });
  const obj2 = waveformVersion(1260);
}
export function showVoiceMessagesTooltip() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: true });
  });
}
export function hideVoiceMessagesTooltip() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: false });
  });
}
export function resetVoiceMessageState() {
  obj = ReactBatchUpdates;
  obj.batchUpdates(() => {
    state.setState({ waveform: [], waveformVersion: 0, showRecordingOverlay: false, startTimeMillis: "sa", savedVoiceMessageUploadData: "isArray" });
  });
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    const result = currWaveHeight.set(spring.withSpring(0));
    const tmpResult = spring;
  }
}
export function setSavedVoiceMessageUploadData(savedVoiceMessageUploadData) {
  _require = savedVoiceMessageUploadData;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { savedVoiceMessageUploadData };
    obj.setState(obj);
  });
}
export function setIsVoiceMessageButtonMounted(isVoiceMessageButtonMounted) {
  _require = isVoiceMessageButtonMounted;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { isVoiceMessageButtonMounted };
    obj.setState(obj);
  });
}
export function setIsUsingHoldGesture(isUsingHoldGesture) {
  _require = isUsingHoldGesture;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { isUsingHoldGesture };
    obj.setState(obj);
  });
}