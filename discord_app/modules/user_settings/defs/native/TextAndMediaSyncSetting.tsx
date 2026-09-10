// === Module 15553: TextAndMediaSyncSetting ===

// Module 15553 (TextAndMediaSyncSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9428 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1184 */;

require = fn;
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(8027).MobileUserSettings.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  },
  onValueChange: UserSettingsActionCreatorsDefault.setShouldSyncTextSettings
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default SettingBuilders;