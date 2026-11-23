// === Module 16730: FavoritesGuildToggleSetting ===

// Module 16730 (FavoritesGuildToggleSetting)
import util from "util" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11219 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16731 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3802.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;