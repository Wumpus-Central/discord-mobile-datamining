// discord_app/modules/user_settings/defs/native/SoundboardVolumeSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import _fetchDefaultSoundsFromApi2 from "../../../soundboard/SoundboardActionCreators.tsx";
import hasPermissionToPlaySound from "../../../soundboard/SoundboardUtils.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const volumeSlider = createToggle.createVolumeSlider({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kbFsAD);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: hasPermissionToPlaySound.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHERDefault.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2.updateUserSoundboardVolume(volume, items);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kbFsAD);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: hasPermissionToPlaySound.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHERDefault.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2.updateUserSoundboardVolume(volume, items);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;