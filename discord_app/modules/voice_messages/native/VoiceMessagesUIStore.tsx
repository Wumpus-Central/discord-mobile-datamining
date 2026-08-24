// discord_app/modules/voice_messages/native/VoiceMessagesUIStore.tsx
import set from "../../../../_runtime/00002_set.js";
import batchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _mod4119 from "../../reanimated/ReanimatedRexport.tsx";
import CONFIG_NEVER_ANIMATE from "../../../design/animation/reanimated/spring/spring.tsx";
import VoiceMessageAnimationState from "../VoiceMessageConstants.tsx";
import keys from "../../../../_runtime/00644_keys.js";

({ VoiceMessageAnimationState: obj1, WAVEFORM_WAVE_MAX_VALUE: c3 } = VoiceMessageAnimationState);
let obj = keys.create(() => {
  obj = { voiceMessageAnimationState: _mod4119.makeMutable(items), recordingStatus: null, recordingId: null, currWaveHeight: "ct", showRecordingOverlay: "Array", startTimeMillis: 0, waveform: false, waveformVersion: "PX_16", showVoiceMessagesTooltip: 2352, savedVoiceMessageUploadData: 2353, isVoiceMessageButtonMounted: 2354, isUsingHoldGesture: 2355 };
  items = [, ];
  ({ SENDING: arr[0], SENDING: arr[1] } = closure_2);
  obj[6] = [];
  return obj;
});
let result = set.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesUIStore.tsx");

export const VoiceMessageRecordingStatus = { REQUESTED: 0, [0]: "REQUESTED", STARTED: 1, [1]: "STARTED" };
export const useVoiceMessagesUIStore = obj;
export const setShowRecordingOverlay = function setShowRecordingOverlay(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState({ showRecordingOverlay: closure_0 });
  });
};
export const setVoiceMessageRecordingState = function setVoiceMessageRecordingState(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState({ recordingStatus: closure_0 });
  });
};
export const setVoiceMessageRecordingId = function setVoiceMessageRecordingId(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState({ recordingId: closure_0 });
  });
};
export const setVoiceMessageStartTimeMillis = function setVoiceMessageStartTimeMillis(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState({ startTimeMillis: closure_0 });
  });
};
export const setVoiceMessageAnimationState = function setVoiceMessageAnimationState(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    const merged = Object.assign(closure_0);
    closure_1_4.setState({});
  });
};
export const addVoiceMessageWave = function addVoiceMessageWave(arg0) {
  const waveform = obj.getState().waveform;
  const waveformVersion = obj.getState().waveformVersion;
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    obj = waveformVersion(4749);
    const result = currWaveHeight.set(obj.withSpring(arg0 / closure_3));
  }
  const items = [arg0, waveformVersion];
  waveform.push(items);
  waveformVersion(705).batchUpdates(() => {
    closure_1_4.setState({ waveformVersion: waveformVersion + 1 });
  });
};
export const showVoiceMessagesTooltip = function showVoiceMessagesTooltip() {
  batchUpdates.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: true });
  });
};
export const hideVoiceMessagesTooltip = function hideVoiceMessagesTooltip() {
  batchUpdates.batchUpdates(() => {
    state.setState({ showVoiceMessagesTooltip: false });
  });
};
export const resetVoiceMessageState = function resetVoiceMessageState() {
  obj = batchUpdates;
  obj.batchUpdates(() => {
    state.setState({ waveform: [], waveformVersion: 0, showRecordingOverlay: false, startTimeMillis: "Boolean", savedVoiceMessageUploadData: "accessibilityLabel" });
  });
  const currWaveHeight = obj.getState().currWaveHeight;
  if (null != currWaveHeight) {
    const result = currWaveHeight.set(CONFIG_NEVER_ANIMATE.withSpring(0));
    const tmpResult = CONFIG_NEVER_ANIMATE;
  }
};
export const setSavedVoiceMessageUploadData = function setSavedVoiceMessageUploadData(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState({ savedVoiceMessageUploadData: closure_0 });
  });
};
export const setIsVoiceMessageButtonMounted = function setIsVoiceMessageButtonMounted(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState({ isVoiceMessageButtonMounted: closure_0 });
  });
};
export const setIsUsingHoldGesture = function setIsUsingHoldGesture(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState({ isUsingHoldGesture: closure_0 });
  });
};