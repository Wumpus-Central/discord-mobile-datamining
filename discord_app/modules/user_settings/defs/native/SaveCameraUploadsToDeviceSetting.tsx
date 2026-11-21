// === Module 16873: SaveCameraUploadsToDeviceSetting ===

// Module 16873 (SaveCameraUploadsToDeviceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5826 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;

require = fn;
const SettingBuilders = fn(11937);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["99tBAC"]);
  },
  parent: fn(8712).MobileUserSettings.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ saveCameraUploadsToDevice });
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default toggle;