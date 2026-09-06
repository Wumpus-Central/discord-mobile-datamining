// discord_app/modules/user_settings/defs/native/DataSavingModeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";

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
    const obj = {
      videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality,
      viewImageDescriptions: null,
      lowQualityImageMode: null,
      dataSavingMode: null,
    };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj.lowQualityImageMode = UnsyncedUserSettingsStore.lowQualityImageMode;
    obj.dataSavingMode = dataSavingMode;
    obj.setDataSavingMode(obj);
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default SettingBuilders;
