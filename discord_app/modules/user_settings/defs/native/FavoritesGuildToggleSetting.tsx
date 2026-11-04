// === Module 17551: FavoritesGuildToggleSetting ===

// Module 17551 (FavoritesGuildToggleSetting)
import util from "util" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11009 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17552 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3577.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;