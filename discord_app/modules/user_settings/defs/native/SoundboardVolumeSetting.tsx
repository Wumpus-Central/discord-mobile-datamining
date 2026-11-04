// === Module 17490: SoundboardVolumeSetting ===

// Module 17490 (SoundboardVolumeSetting)
import util from "util" /* 1113 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7657 */;
import SoundboardUtils from "SoundboardUtils" /* 7665 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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