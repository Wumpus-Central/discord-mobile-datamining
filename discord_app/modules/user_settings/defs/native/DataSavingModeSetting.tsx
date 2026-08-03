import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ix8XIj);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    const items = [CHANNEL_SIDEBAR_WIDTH];
    return require(589) /* initialize */.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(arg0) {
    let obj = require(14442) /* UserSettingsText */;
    obj = { videoUploadQuality: CHANNEL_SIDEBAR_WIDTH.videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = require(3866) /* explicitContentFromProto */.ViewImageDescriptions;
    obj[1] = ViewImageDescriptions.getSetting();
    obj[2] = CHANNEL_SIDEBAR_WIDTH.lowQualityImageMode;
    obj[3] = arg0;
    obj.setDataSavingMode(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default createToggle;