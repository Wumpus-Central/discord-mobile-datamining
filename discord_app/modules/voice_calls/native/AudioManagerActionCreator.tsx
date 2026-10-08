// === Module 8769: AudioManagerActionCreator ===

// Module 8769 (AudioManagerActionCreator)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  DispatcherDefault.dispatch({ type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device });
};