// === Module 14782: volumeSlider ===

// Module 14782 (volumeSlider)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5938 */;
import _fetchDefaultSoundsFromApi2 from "_fetchDefaultSoundsFromApi2" /* 6147 */;
import hasPermissionToPlaySound from "hasPermissionToPlaySound" /* 6153 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import createToggle from "createToggle" /* 11006 */;

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