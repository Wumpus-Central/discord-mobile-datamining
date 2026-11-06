// === Module 17505: SoundboardVolumeSetting ===

// Module 17505 (SoundboardVolumeSetting)
import util from "util" /* 1113 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7435 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7612 */;
import SoundboardUtils from "SoundboardUtils" /* 7620 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
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