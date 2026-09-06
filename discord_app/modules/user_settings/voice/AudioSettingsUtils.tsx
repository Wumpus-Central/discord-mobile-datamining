// discord_app/modules/user_settings/voice/AudioSettingsUtils.tsx
import UserSettingsConstants from "../UserSettingsConstants.tsx";
import BaseConnectionEvent from "../../../../discord_common/js/packages/media-engine/index.tsx";
import PerceptualVolumeUtils from "../../../utils/PerceptualVolumeUtils.tsx";
import AudioSettingsDefaultVolumes from "../../../../discord_common/js/shared/shared-constants/AudioSettingsDefaultVolumes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
