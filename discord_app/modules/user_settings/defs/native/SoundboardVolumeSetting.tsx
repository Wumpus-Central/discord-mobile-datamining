// === Module 15461: SoundboardVolumeSetting ===

// Module 15461 (SoundboardVolumeSetting)
import util from "util" /* 1126 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7041 */;
import SoundboardUtils from "SoundboardUtils" /* 7049 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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