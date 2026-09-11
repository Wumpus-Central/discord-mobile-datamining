// === Module 15529: SaveCameraUploadsToDeviceSetting ===

// Module 15529 (SaveCameraUploadsToDeviceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9449 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;

require = fn;
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["99tBAC"]);
  },
  parent: fn(8049).MobileUserSettings.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    const obj = { saveCameraUploadsToDevice };
    const result = obj.updatedUnsyncedSettings(obj);
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default SettingBuilders;