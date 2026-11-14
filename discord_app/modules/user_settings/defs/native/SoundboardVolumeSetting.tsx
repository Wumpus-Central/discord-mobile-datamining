// === Module 17872: SoundboardVolumeSetting ===

// Module 17872 (SoundboardVolumeSetting)
import util from "util" /* 1113 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7226 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SoundboardUtils from "SoundboardUtils" /* 13021 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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