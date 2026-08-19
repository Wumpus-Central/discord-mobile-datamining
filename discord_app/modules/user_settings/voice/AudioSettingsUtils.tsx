// === Module 9656: snapVolumeToDefault ===

// Module 9656 (snapVolumeToDefault)
import obj132 from "obj132" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4569 */;
import perceptualToAmplitude from "perceptualToAmplitude" /* 4782 */;
import AudioSettingsDefaultVolumes from "AudioSettingsDefaultVolumes" /* 9657 */;

let closure_2 = MAX_FAVORITES.ProtoAudioSettingsContextTypes;
let result = obj132.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = perceptualToAmplitude;
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = perceptualToAmplitude;
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