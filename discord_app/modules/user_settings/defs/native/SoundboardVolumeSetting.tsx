// discord_app/modules/user_settings/defs/native/SoundboardVolumeSetting.tsx
import createToggle from "createToggle";

const volumeSlider = createToggle.createVolumeSlider({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.kbFsAD);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 100,
  useValue: require("hasPermissionToPlaySound").getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [require("../../../app_analytics/AnalyticsLocation.tsx").USER_SETTINGS];
    return require("../../../soundboard/SoundboardActionCreators.tsx") /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.kbFsAD);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 100,
  useValue: require("hasPermissionToPlaySound").getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [require("../../../app_analytics/AnalyticsLocation.tsx").USER_SETTINGS];
    return require("../../../soundboard/SoundboardActionCreators.tsx") /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;