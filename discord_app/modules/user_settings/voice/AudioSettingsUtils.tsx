// === Module 9704: snapVolumeToDefault ===

// Module 9704 (snapVolumeToDefault)
import set from "set" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4544 */;

let closure_2 = MAX_FAVORITES.ProtoAudioSettingsContextTypes;
let result = set.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(9705).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9705).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4920);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4920);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  const tmp = require;
};