// === Module 16605: SoundboardVolumeSetting ===

// Module 16605 (SoundboardVolumeSetting)
import util from "util" /* 1128 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7278 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7444 */;
import SoundboardUtils from "SoundboardUtils" /* 7452 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import SettingBuilders from "SettingBuilders" /* 11205 */;
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