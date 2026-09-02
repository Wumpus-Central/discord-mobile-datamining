// === Module 15289: onImageDescriptionSettingValueChange ===

// Module 15289 (onImageDescriptionSettingValueChange)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import UserSettingsText from "UserSettingsText" /* 15290 */;
import closure_2 from "CHANNEL_SIDEBAR_WIDTH" /* 1303 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = UserSettingsText;
  obj = { videoUploadQuality: closure_2.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: closure_2.lowQualityImageMode, dataSavingMode: closure_2.dataSavingMode };
  obj.setImageDescriptions(obj);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w8j+yW"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = explicitContentFromProto.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };