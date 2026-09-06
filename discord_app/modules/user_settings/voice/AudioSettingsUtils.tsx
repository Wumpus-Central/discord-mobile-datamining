// === Module 9092: AudioSettingsUtils ===

// Module 9092 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(9093).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9093).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(5015);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(5015);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(arg0) {
  if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === arg0) {
    return constants.USER;
  } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === arg0) {
    return constants.STREAM;
  }
};