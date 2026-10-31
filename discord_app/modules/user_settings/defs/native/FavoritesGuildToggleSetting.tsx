// === Module 17304: FavoritesGuildToggleSetting ===

// Module 17304 (FavoritesGuildToggleSetting)
import util from "util" /* 1113 */;
import _modDef3450 from "module_3450" /* 3450 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10831 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17305 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3450.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;