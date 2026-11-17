// === Module 17988: FavoritesGuildToggleSetting ===

// Module 17988 (FavoritesGuildToggleSetting)
import util from "util" /* 1113 */;
import _modDef3681 from "module_3681" /* 3681 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11897 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17989 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3681.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;