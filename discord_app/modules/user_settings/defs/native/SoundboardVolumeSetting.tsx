// === Module 15314: SoundboardVolumeSetting ===

// Module 15314 (SoundboardVolumeSetting)
import util from "util" /* 1114 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7411 */;
import SoundboardUtils from "SoundboardUtils" /* 7417 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
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
    const items = [AnalyticsLocationDefault.USER_SETTINGS];
    return SoundboardActionCreators.updateUserSoundboardVolume(volume, items);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;