// discord_app/modules/soundboard/getVolumeForSound.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import PerceptualVolumeUtils from "../../utils/PerceptualVolumeUtils.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0) {
  let tmp = USER;
  if (USER === undefined) {
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
}
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = USER;
  if (USER == null) {
    num = 100;
  }
  return PerceptualVolumeUtils.amplitudeToPerceptual(num) / 100;
};
