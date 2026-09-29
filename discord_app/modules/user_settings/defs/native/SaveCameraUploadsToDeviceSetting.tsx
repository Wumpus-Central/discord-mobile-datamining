// === Module 15190: SaveCameraUploadsToDeviceSetting ===

// Module 15190 (SaveCameraUploadsToDeviceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8824 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;

require = fn;
const SettingBuilders = fn(11175);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["99tBAC"]);
  },
  parent: fn(7582).MobileUserSettings.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ saveCameraUploadsToDevice });
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default toggle;