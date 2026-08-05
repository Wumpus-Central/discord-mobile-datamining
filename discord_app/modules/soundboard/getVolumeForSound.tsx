// discord_app/modules/soundboard/getVolumeForSound.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";

const require = arg1;
let result = require("explicitContentFromProto").fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, USER) {
  let tmp = USER;
  if (USER === undefined) {
    const SoundboardSettings = require("../user_settings/UserSettings.tsx") /* explicitContentFromProto */.SoundboardSettings;
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
  const result = require("../../utils/PerceptualVolumeUtils.tsx") /* perceptualToAmplitude */.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(outputVolume.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = USER;
  if (USER == null) {
    num = 100;
  }
  return require("../../utils/PerceptualVolumeUtils.tsx") /* perceptualToAmplitude */.amplitudeToPerceptual(num) / 100;
};