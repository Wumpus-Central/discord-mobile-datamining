// === Module 18210: SecureFramesPersistentCodesSetting ===

// Module 18210 (SecureFramesPersistentCodesSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import updatePersistentCodesEnabled from "updatePersistentCodesEnabled" /* 18211 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5911 */;

require = fn;
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["opi/XK"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.opw5ls);
  },
  parent: fn(8503).MobileUserSettings.DATA_AND_PRIVACY,
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