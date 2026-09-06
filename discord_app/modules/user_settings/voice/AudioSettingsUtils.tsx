// discord_app/modules/user_settings/voice/AudioSettingsUtils.tsx
import UserSettingsConstants from "../UserSettingsConstants.tsx";
import BaseConnectionEvent from "../../../../discord_common/js/packages/media-engine/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
