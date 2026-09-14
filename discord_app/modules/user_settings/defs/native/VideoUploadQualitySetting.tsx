// discord_app/modules/user_settings/defs/native/VideoUploadQualitySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";

require = fn;
const VideoQualitySettings = fn(1183).VideoQualitySettings;
const SettingBuilders = fn(11602);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PXq9f1);
  },
  parent: fn(8079).MobileUserSettings.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  },
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    const obj3 = { videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj3.viewImageDescriptions = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2.lowQualityImageMode, dataSavingMode: obj2.dataSavingMode } =
      UnsyncedUserSettingsStore);
    const result = UserSettingsText.setVideoUploadQuality(obj3);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    const obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.cWGW5d);
    obj.value = VideoQualitySettings.BEST;
    const items = [obj, ,];
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default radio;
