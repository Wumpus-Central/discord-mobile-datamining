// === Module 16314: FavoritesGuildToggleSetting ===

// Module 16314 (FavoritesGuildToggleSetting)
import util from "util" /* 1128 */;
import _modDef3447 from "module_3447" /* 3447 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10561 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16315 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
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