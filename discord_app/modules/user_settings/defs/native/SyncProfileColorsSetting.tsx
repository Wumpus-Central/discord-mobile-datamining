// discord_app/modules/user_settings/defs/native/SyncProfileColorsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sSY+mD"]);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  },
  onValueChange: fn(14437).toggleSyncProfileThemeWithUserTheme,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default SettingBuilders;
