// === Module 16764: FavoritesGuildToggleSetting ===

// Module 16764 (FavoritesGuildToggleSetting)
import util from "util" /* 1112 */;
import _modDef3804 from "module_3804" /* 3804 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10597 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16765 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3804.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;