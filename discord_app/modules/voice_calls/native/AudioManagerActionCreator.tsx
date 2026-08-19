// === Module 9675: setAudioOutputDevice ===

// Module 9675 (setAudioOutputDevice)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  const obj = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device };
  obj.dispatch(obj);
};