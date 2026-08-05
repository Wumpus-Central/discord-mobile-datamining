// discord_app/modules/user_settings/defs/native/SoundboardVolumeSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { QUICK_SWITCHER } from "../../../app_analytics/AnalyticsLocation.tsx";
import { _fetchDefaultSoundsFromApi2 } from "../../../soundboard/SoundboardActionCreators.tsx";

const volumeSlider = createToggle.createVolumeSlider({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.kbFsAD);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 100,
  useValue: require("hasPermissionToPlaySound").getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHER.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2 /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.kbFsAD);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 100,
  useValue: require("hasPermissionToPlaySound").getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHER.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2 /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;