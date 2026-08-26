// discord_app/modules/user_settings/voice/AudioSettingsUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import MAX_FAVORITES from "../UserSettingsConstants.tsx";
import BaseConnectionEvent from "../../../../discord_common/js/packages/media-engine/index.tsx";

let closure_2 = MAX_FAVORITES.ProtoAudioSettingsContextTypes;
let result = set.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(9374).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9374).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4919);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4919);
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