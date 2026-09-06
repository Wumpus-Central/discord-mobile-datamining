// discord_app/modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettingsActionCreatorsDefault from "../../../../actions/UserSettingsActionCreators.tsx";
import SelectivelySyncedUserSettingsStore from "../../SelectivelySyncedUserSettingsStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(7975).MobileUserSettings.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  },
  onValueChange: UserSettingsActionCreatorsDefault.setShouldSyncTextSettings,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default SettingBuilders;
