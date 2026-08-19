// discord_app/modules/user_settings/voice/AudioSettingsUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import MAX_FAVORITES from "../UserSettingsConstants.tsx";
import BaseConnectionEvent from "../../../../discord_common/js/packages/media-engine/index.tsx";
import perceptualToAmplitude from "../../../utils/PerceptualVolumeUtils.tsx";
import AudioSettingsDefaultVolumes from "../../../../discord_common/js/shared/shared-constants/AudioSettingsDefaultVolumes.tsx";

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