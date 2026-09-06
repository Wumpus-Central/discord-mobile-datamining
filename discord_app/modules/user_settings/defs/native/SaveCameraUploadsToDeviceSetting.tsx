// discord_app/modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettingsActionCreatorsDefault from "../../../../actions/UserSettingsActionCreators.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["99tBAC"]);
  },
  parent: fn(7975).MobileUserSettings.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    const obj = { saveCameraUploadsToDevice };
    const result = obj.updatedUnsyncedSettings(obj);
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default SettingBuilders;
