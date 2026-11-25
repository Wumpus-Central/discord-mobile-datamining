// === Module 16813: SoundboardVolumeSetting ===

// Module 16813 (SoundboardVolumeSetting)
import util from "util" /* 1112 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6349 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import SoundboardUtils from "SoundboardUtils" /* 10359 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 10361 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
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