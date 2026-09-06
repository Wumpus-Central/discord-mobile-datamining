// === Module 15464: VideoUploadQualitySetting ===

// Module 15464 (VideoUploadQualitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsText from "UserSettingsText" /* 15463 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;

require = fn;
const VideoQualitySettings = fn(1185).VideoQualitySettings;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PXq9f1);
  },
  parent: fn(7975).MobileUserSettings.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  },
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    const obj = { videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj.viewImageDescriptions = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2.lowQualityImageMode, dataSavingMode: obj2.dataSavingMode } = UnsyncedUserSettingsStore);
    const result = obj.setVideoUploadQuality(obj);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    let obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.cWGW5d);
    obj.value = VideoQualitySettings.BEST;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t["5hKnyC"]);
    obj.value = VideoQualitySettings.STANDARD;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t.y5k4ZJ);
    obj.value = VideoQualitySettings.DATA_SAVER;
    items[2] = obj;
    return items;
  }
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default SettingBuilders;