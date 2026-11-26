// === Module 17086: TextAndMediaSyncSetting ===

// Module 17086 (TextAndMediaSyncSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 6018 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1192 */;

require = fn;
const SettingBuilders = fn(11962);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(9555).MobileUserSettings.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  },
  onValueChange: UserSettingsActionCreatorsDefault.setShouldSyncTextSettings
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default toggle;