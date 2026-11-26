// === Module 17551: SecureFramesPersistentCodesSetting ===

// Module 17551 (SecureFramesPersistentCodesSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import updatePersistentCodesEnabled from "updatePersistentCodesEnabled" /* 17552 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5861 */;

require = fn;
const SettingBuilders = fn(11962);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["opi/XK"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.opw5ls);
  },
  parent: fn(9555).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useSecureFramesPersistentCodesValue() {
    items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = updatePersistentCodesEnabled.updatePersistentCodesEnabled(arg0);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default toggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = toggle;