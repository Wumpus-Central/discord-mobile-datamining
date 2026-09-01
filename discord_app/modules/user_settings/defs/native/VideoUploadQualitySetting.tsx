// discord_app/modules/user_settings/defs/native/VideoUploadQualitySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import closure_2 from "../../UnsyncedUserSettingsStore.tsx";
import { VideoQualitySettings } from "../../UnsyncedUserSettingsStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PXq9f1);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  },
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    let obj = UserSettingsText;
    obj = { videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = explicitContentFromProto.ViewImageDescriptions;
    obj[1] = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2[2], dataSavingMode: obj2[3] } = closure_2);
    const result = obj.setVideoUploadQuality(obj);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    let obj = { label: null, value: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.cWGW5d);
    obj[1] = VideoQualitySettings.BEST;
    const items = [obj, ,];
    obj = { label: null, value: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t["5hKnyC"]);
    obj[1] = VideoQualitySettings.STANDARD;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t.y5k4ZJ);
    obj[1] = VideoQualitySettings.DATA_SAVER;
    items[2] = obj;
    return items;
  },
};
createToggle = createToggle.createRadio(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default createToggle;
