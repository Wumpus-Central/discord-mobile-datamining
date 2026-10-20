// === Module 16432: FavoritesGuildToggleSetting ===

// Module 16432 (FavoritesGuildToggleSetting)
import util from "util" /* 1128 */;
import _modDef3402 from "module_3402" /* 3402 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10649 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16433 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3402.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;