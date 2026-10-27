// === Module 16860: ImageDescriptionsSetting ===

// Module 16860 (ImageDescriptionsSetting)
import util from "util" /* 1125 */;
import UserSettings from "UserSettings" /* 4800 */;
import UserSettingsText from "UserSettingsText" /* 16861 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  UserSettingsText.setImageDescriptions({ videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode });
}
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11212);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w8j+yW"]);
  },
  parent: fn(8331).MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };