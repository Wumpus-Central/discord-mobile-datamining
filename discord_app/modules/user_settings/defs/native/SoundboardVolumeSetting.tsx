// === Module 15004: SoundboardVolumeSetting ===

// Module 15004 (SoundboardVolumeSetting)
import util from "util" /* 1115 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6799 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6952 */;
import SoundboardUtils from "SoundboardUtils" /* 6958 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
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