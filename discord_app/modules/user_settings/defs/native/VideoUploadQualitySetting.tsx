// === Module 15560: VideoUploadQualitySetting ===

// Module 15560 (VideoUploadQualitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import UserSettingsText from "UserSettingsText" /* 15559 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;

require = fn;
const VideoQualitySettings = fn(1184).VideoQualitySettings;
const SettingBuilders = fn(11606);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PXq9f1);
  },
  parent: fn(8082).MobileUserSettings.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  },
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    const obj3 = { videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj3.viewImageDescriptions = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2.lowQualityImageMode, dataSavingMode: obj2.dataSavingMode } = UnsyncedUserSettingsStore);
    const result = UserSettingsText.setVideoUploadQuality(obj3);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    const obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.cWGW5d);
    obj.value = VideoQualitySettings.BEST;
    const items = [obj, , ];
    const obj2 = { label: null, value: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t["5hKnyC"]);
    obj2.value = VideoQualitySettings.STANDARD;
    items[1] = obj2;
    const obj3 = { label: null, value: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t.y5k4ZJ);
    obj3.value = VideoQualitySettings.DATA_SAVER;
    items[2] = obj3;
    return items;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default radio;