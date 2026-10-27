// === Module 16725: FavoritesGuildToggleSetting ===

// Module 16725 (FavoritesGuildToggleSetting)
import util from "util" /* 1125 */;
import _modDef3413 from "module_3413" /* 3413 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10848 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16726 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3413.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;