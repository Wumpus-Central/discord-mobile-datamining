// === Module 16864: SoundboardVolumeSetting ===

// Module 16864 (SoundboardVolumeSetting)
import util from "util" /* 1112 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SoundboardUtils from "SoundboardUtils" /* 10404 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 10406 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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