// discord_app/modules/voice_calls/native/AudioManagerActionCreator.tsx
import { dispatcher } from "../../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/voice_calls/native/AudioManagerActionCreator.tsx");

export const setAudioOutputDevice = function setAudioOutputDevice(device) {
  let obj = dispatcher;
  obj = { type: "NATIVE_AUDIO_SET_OUTPUT_DEVICE", device };
  obj.dispatch(obj);
};