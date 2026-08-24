// discord_app/modules/soundboard/getVolumeForSound.tsx
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import perceptualToAmplitude from "../../utils/PerceptualVolumeUtils.tsx";
import closure_2 from "../../stores/MediaEngineStore.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, USER) {
  let tmp = USER;
  if (USER === undefined) {
    const SoundboardSettings = explicitContentFromProto.SoundboardSettings;
    const setting = SoundboardSettings.getSetting();
    let num;
    if (setting != null) {
      num = setting.volume;
    }
    if (num == null) {
      num = 100;
    }
    tmp = num;
  }
  const result = perceptualToAmplitude.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(outputVolume.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = USER;
  if (USER == null) {
    num = 100;
  }
  return perceptualToAmplitude.amplitudeToPerceptual(num) / 100;
};