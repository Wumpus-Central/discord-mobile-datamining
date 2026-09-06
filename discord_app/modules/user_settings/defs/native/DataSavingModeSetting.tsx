// === Module 15465: toggle ===

// Module 15465 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import UserSettingsText from "UserSettingsText" /* 15463 */;
import closure_2 from "CHANNEL_SIDEBAR_WIDTH" /* 1185 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ix8XIj);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(arg0) {
    let obj = UserSettingsText;
    obj = { videoUploadQuality: closure_2.videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = explicitContentFromProto.ViewImageDescriptions;
    obj[1] = ViewImageDescriptions.getSetting();
    obj[2] = closure_2.lowQualityImageMode;
    obj[3] = arg0;
    obj.setDataSavingMode(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default createToggle;