// === Module 17023: getVolumeForSound ===

// Module 17023 (getVolumeForSound)
import UserSettings from "UserSettings" /* 5131 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6233 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0) {
  let tmp = effectiveVolume;
  if (effectiveVolume === undefined) {
    const SoundboardSettings = UserSettings.SoundboardSettings;
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
  const result = PerceptualVolumeUtils.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(MediaEngineStore.getOutputVolume() / 100, 1), 1);
};
export function getPerceptualSoundboardVolume(effectiveVolume) {
  let num = effectiveVolume;
  if (effectiveVolume == null) {
    num = 100;
  }
  return PerceptualVolumeUtils.amplitudeToPerceptual(num) / 100;
}