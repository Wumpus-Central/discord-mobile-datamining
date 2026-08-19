// === Module 14770: onImageDescriptionSettingValueChange ===

// Module 14770 (onImageDescriptionSettingValueChange)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import UserSettingsText from "UserSettingsText" /* 14771 */;
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import "createToggle";

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  const obj = { videoUploadQuality: closure_2.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: closure_2.lowQualityImageMode, dataSavingMode: closure_2.dataSavingMode };
  obj.setImageDescriptions(obj);
}
let createToggle = {
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
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };