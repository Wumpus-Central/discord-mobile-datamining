// === Module 16790: FavoritesGuildToggleSetting ===

// Module 16790 (FavoritesGuildToggleSetting)
import util from "util" /* 1113 */;
import _modDef3701 from "module_3701" /* 3701 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11179 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16791 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3701.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;