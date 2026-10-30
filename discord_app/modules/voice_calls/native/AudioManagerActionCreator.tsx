// === Module 9212: AudioManagerActionCreator ===

// Module 9212 (AudioManagerActionCreator)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export function setAudioOutputDevice(device) {
  DispatcherDefault.dispatch({ type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device });
}