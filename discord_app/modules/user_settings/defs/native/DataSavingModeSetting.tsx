// === Module 17078: DataSavingModeSetting ===

// Module 17078 (DataSavingModeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4868 */;
import UserSettingsText from "UserSettingsText" /* 17076 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;

require = fn;
const SettingBuilders = fn(11962);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ix8XIj);
  },
  parent: fn(9555).MobileUserSettings.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    const obj2 = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj2.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj2.lowQualityImageMode = UnsyncedUserSettingsStore.lowQualityImageMode;
    obj2.dataSavingMode = dataSavingMode;
    UserSettingsText.setDataSavingMode(obj2);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default toggle;