// discord_app/modules/user_settings/defs/native/ImageDescriptionsSetting.tsx
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import createToggle from "createToggle";

const require = arg1;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = require("../../chat/native/UserSettingsText.tsx") /* UserSettingsText */;
  obj = { videoUploadQuality: CHANNEL_SIDEBAR_WIDTH.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: CHANNEL_SIDEBAR_WIDTH.lowQualityImageMode, dataSavingMode: CHANNEL_SIDEBAR_WIDTH.dataSavingMode };
  obj.setImageDescriptions(obj);
}
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["w8j+yW"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = require("../../UserSettings.tsx") /* explicitContentFromProto */.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };