// discord_app/modules/user_settings/defs/native/ImageDescriptionsSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import closure_2 from "../../UnsyncedUserSettingsStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = UserSettingsText;
  obj = {
    videoUploadQuality: closure_2.videoUploadQuality,
    viewImageDescriptions,
    lowQualityImageMode: closure_2.lowQualityImageMode,
    dataSavingMode: closure_2.dataSavingMode,
  };
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
  onValueChange: onImageDescriptionSettingValueChange,
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };
