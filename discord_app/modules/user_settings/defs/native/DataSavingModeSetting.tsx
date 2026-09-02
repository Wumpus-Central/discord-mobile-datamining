// === Module 15292: toggle ===

// Module 15292 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import UserSettingsText from "UserSettingsText" /* 15290 */;
import closure_2 from "CHANNEL_SIDEBAR_WIDTH" /* 1303 */;
import createToggle from "createToggle" /* 11288 */;

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