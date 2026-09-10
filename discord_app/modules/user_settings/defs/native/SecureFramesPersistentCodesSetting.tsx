// === Module 15934: SecureFramesPersistentCodesSetting ===

// Module 15934 (SecureFramesPersistentCodesSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import SecureFramesActionCreatorsDefault from "SecureFramesActionCreators" /* 9222 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9220 */;

require = fn;
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["opi/XK"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.opw5ls);
  },
  parent: fn(8027).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useSecureFramesPersistentCodesValue() {
    const items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = SecureFramesActionCreatorsDefault.updatePersistentCodesEnabled(arg0);
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default SettingBuilders;
export const DataAndPrivacySecureFramesPersistentCodesSetting = SettingBuilders;