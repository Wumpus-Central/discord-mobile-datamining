import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsText } from "../../chat/native/UserSettingsText.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";
// discord_app/modules/user_settings/defs/native/VideoUploadQualitySetting.tsx
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import { VideoQualitySettings } from "CHANNEL_SIDEBAR_WIDTH";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.PXq9f1);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    const items = [CHANNEL_SIDEBAR_WIDTH];
    return initialize /* initialize */.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  },
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    let obj = UserSettingsText /* UserSettingsText */;
    obj = { videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = explicitContentFromProto /* explicitContentFromProto */.ViewImageDescriptions;
    obj[1] = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2[2], dataSavingMode: obj2[3] } = CHANNEL_SIDEBAR_WIDTH);
    const result = obj.setVideoUploadQuality(obj);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    let obj = { label: null, value: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.cWGW5d);
    obj[1] = VideoQualitySettings.BEST;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t["5hKnyC"]);
    obj[1] = VideoQualitySettings.STANDARD;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.y5k4ZJ);
    obj[1] = VideoQualitySettings.DATA_SAVER;
    items[2] = obj;
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default createToggle;