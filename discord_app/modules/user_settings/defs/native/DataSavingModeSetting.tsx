// === Module 15465: DataSavingModeSetting ===

// Module 15465 (DataSavingModeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsText from "UserSettingsText" /* 15463 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ix8XIj);
  },
  parent: fn(7975).MobileUserSettings.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    const obj = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj.lowQualityImageMode = UnsyncedUserSettingsStore.lowQualityImageMode;
    obj.dataSavingMode = dataSavingMode;
    obj.setDataSavingMode(obj);
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default SettingBuilders;