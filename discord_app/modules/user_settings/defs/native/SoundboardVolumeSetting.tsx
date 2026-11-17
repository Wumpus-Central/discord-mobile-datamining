// === Module 17915: SoundboardVolumeSetting ===

// Module 17915 (SoundboardVolumeSetting)
import util from "util" /* 1113 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7234 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7947 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import SoundboardUtils from "SoundboardUtils" /* 11662 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const volumeSlider = SettingBuilders.createVolumeSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.kbFsAD);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: SoundboardUtils.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    items = [AnalyticsLocationDefault.USER_SETTINGS];
    return SoundboardActionCreators.updateUserSoundboardVolume(volume, items);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;