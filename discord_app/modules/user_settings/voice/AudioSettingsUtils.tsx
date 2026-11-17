// === Module 6229: AudioSettingsUtils ===

// Module 6229 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 6093 */;
import AudioSettingsDefaultVolumes from "AudioSettingsDefaultVolumes" /* 6230 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6231 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(effectiveVolume, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    let USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = effectiveVolume;
  const result = PerceptualVolumeUtils.amplitudeToPerceptual(USER);
  const tmpResult = PerceptualVolumeUtils;
  if (Math.abs(result - tmpResult2.amplitudeToPerceptual(effectiveVolume)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
}
export function coerceAudioContextForProto(arg0) {
  if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === arg0) {
    return constants.USER;
  } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === arg0) {
    return constants.STREAM;
  }
}