// === Module 17247: FavoritesGuildToggleSetting ===

// Module 17247 (FavoritesGuildToggleSetting)
import util from "util" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10811 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17248 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3447.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;