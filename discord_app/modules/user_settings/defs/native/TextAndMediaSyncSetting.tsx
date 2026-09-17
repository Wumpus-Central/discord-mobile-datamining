// === Module 15590: TextAndMediaSyncSetting ===

// Module 15590 (TextAndMediaSyncSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9512 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1183 */;

require = fn;
const SettingBuilders = fn(11622);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(8111).MobileUserSettings.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  },
  onValueChange: UserSettingsActionCreatorsDefault.setShouldSyncTextSettings
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default toggle;