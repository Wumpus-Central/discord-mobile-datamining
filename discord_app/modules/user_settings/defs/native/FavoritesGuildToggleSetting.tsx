// === Module 16607: FavoritesGuildToggleSetting ===

// Module 16607 (FavoritesGuildToggleSetting)
import util from "util" /* 1112 */;
import _modDef3703 from "module_3703" /* 3703 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11099 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16608 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3703.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;