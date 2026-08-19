// === Module 13905: getVolumeForSound ===

// Module 13905 (getVolumeForSound)
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import perceptualToAmplitude from "perceptualToAmplitude" /* 4782 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

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