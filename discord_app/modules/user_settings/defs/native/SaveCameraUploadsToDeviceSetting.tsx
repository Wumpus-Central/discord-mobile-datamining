// === Module 14774: toggle ===

// Module 14774 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 9365 */;
import closure_3 from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import createToggle from "createToggle" /* 10669 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["99tBAC"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => obj.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    let obj = saveGuildFoldersDefault;
    obj = { saveCameraUploadsToDevice };
    const result = obj.updatedUnsyncedSettings(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default createToggle;