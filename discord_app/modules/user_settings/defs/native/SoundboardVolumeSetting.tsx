// === Module 16656: SoundboardVolumeSetting ===

// Module 16656 (SoundboardVolumeSetting)
import util from "util" /* 1112 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6830 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SoundboardUtils from "SoundboardUtils" /* 10984 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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