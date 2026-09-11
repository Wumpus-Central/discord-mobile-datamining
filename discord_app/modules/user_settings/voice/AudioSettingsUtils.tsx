// === Module 9182: AudioSettingsUtils ===

// Module 9182 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4661 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5066 */;
import AudioSettingsDefaultVolumes from "AudioSettingsDefaultVolumes" /* 9183 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = PerceptualVolumeUtils;
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = PerceptualVolumeUtils;
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