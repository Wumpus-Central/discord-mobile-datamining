// === Module 15078: volumeSlider ===

// Module 15078 (volumeSlider)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5981 */;
import _fetchDefaultSoundsFromApi2 from "_fetchDefaultSoundsFromApi2" /* 6191 */;
import hasPermissionToPlaySound from "hasPermissionToPlaySound" /* 6197 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

const volumeSlider = createToggle.createVolumeSlider({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kbFsAD);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: hasPermissionToPlaySound.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHERDefault.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2.updateUserSoundboardVolume(volume, items);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kbFsAD);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: hasPermissionToPlaySound.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHERDefault.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2.updateUserSoundboardVolume(volume, items);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;