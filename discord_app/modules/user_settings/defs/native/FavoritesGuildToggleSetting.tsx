// === Module 16682: FavoritesGuildToggleSetting ===

// Module 16682 (FavoritesGuildToggleSetting)
import util from "util" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10844 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16683 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
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