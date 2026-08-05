// discord_app/modules/user_settings/defs/native/VideoUploadQualitySetting.tsx
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import { VideoQualitySettings } from "CHANNEL_SIDEBAR_WIDTH";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.PXq9f1);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    const items = [CHANNEL_SIDEBAR_WIDTH];
    return require(589) /* initialize */.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  },
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    let obj = require(14542) /* UserSettingsText */;
    obj = { videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = require(3958) /* explicitContentFromProto */.ViewImageDescriptions;
    obj[1] = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2[2], dataSavingMode: obj2[3] } = CHANNEL_SIDEBAR_WIDTH);
    const result = obj.setVideoUploadQuality(obj);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    let obj = { label: null, value: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.cWGW5d);
    obj[1] = VideoQualitySettings.BEST;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["5hKnyC"]);
    obj[1] = VideoQualitySettings.STANDARD;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.y5k4ZJ);
    obj[1] = VideoQualitySettings.DATA_SAVER;
    items[2] = obj;
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default createToggle;