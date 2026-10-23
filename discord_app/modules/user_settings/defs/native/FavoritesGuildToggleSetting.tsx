// === Module 16599: FavoritesGuildToggleSetting ===

// Module 16599 (FavoritesGuildToggleSetting)
import util from "util" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10817 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16600 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3412.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;