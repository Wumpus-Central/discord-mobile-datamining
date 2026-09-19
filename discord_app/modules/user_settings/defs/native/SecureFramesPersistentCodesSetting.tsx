// === Module 16171: SecureFramesPersistentCodesSetting ===

// Module 16171 (SecureFramesPersistentCodesSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import SecureFramesActionCreatorsDefault from "SecureFramesActionCreators" /* 9972 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9970 */;

require = fn;
const SettingBuilders = fn(11723);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["opi/XK"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.opw5ls);
  },
  parent: fn(8232).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useSecureFramesPersistentCodesValue() {
    const items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = SecureFramesActionCreatorsDefault.updatePersistentCodesEnabled(arg0);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default toggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = toggle;