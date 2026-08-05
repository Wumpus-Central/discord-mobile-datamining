import { BaseConnectionEvent } from "../../../../discord_common/js/packages/media-engine/index.tsx";
// discord_app/modules/user_settings/voice/AudioSettingsUtils.tsx
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    USER = tmp(9080).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9080).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4732);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4732);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (BaseConnectionEvent /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (tmp(4381).MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  tmp = require;
};