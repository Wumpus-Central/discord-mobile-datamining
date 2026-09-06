// === Module 15462: ImageDescriptionsSetting ===

// Module 15462 (ImageDescriptionsSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsText from "UserSettingsText" /* 15463 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  const obj = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode };
  obj.setImageDescriptions(obj);
}
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w8j+yW"]);
  },
  parent: fn(7975).MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default SettingBuilders;
export { onImageDescriptionSettingValueChange };